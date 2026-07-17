#!/usr/bin/env node
'use strict';

// Compile/run every reference solution against the public examples used by index.html.
// Usage: node scripts/check-solutions.js --lang=py|c|cpp|java [--problem=p113] [--limit=20]

const fs = require('fs');
const os = require('os');
const path = require('path');
const vm = require('vm');
const { spawnSync } = require('child_process');

const ROOT = path.join(__dirname, '..');
const VALID_LANGS = ['py', 'c', 'cpp', 'java'];
const args = Object.fromEntries(process.argv.slice(2).map(arg => {
  const m = arg.match(/^--([\w-]+)=(.*)$/);
  return m ? [m[1], m[2]] : [arg.replace(/^--/, ''), 'true'];
}));
const languages = (args.lang || 'py').split(',').filter(Boolean);
if (!languages.length || languages.some(lang => !VALID_LANGS.includes(lang))) {
  console.error(`--lang must be one or more of: ${VALID_LANGS.join(', ')}`);
  process.exit(2);
}

function loadData(file, name) {
  const code = fs.readFileSync(path.join(ROOT, 'data', file), 'utf8');
  return vm.runInNewContext(code + '\n;' + name, {}, { filename:file, timeout:30000 });
}

const PROBLEMS = loadData('judge-problems.js', 'PROBLEMS');
const SOLUTIONS = loadData('judge-solutions.js', 'SOLUTIONS');
const requestedProblem = args.problem || null;
const limit = args.limit ? Number(args.limit) : null;
let selected = requestedProblem ? PROBLEMS.filter(p => p.id === requestedProblem) : PROBLEMS.slice();
if (requestedProblem && !selected.length) {
  console.error(`Unknown problem id: ${requestedProblem}`);
  process.exit(2);
}
if (Number.isInteger(limit) && limit > 0) selected = selected.slice(0, limit);

function normalizeOutput(value) {
  return String(value).replace(/\r\n/g, '\n').split('\n')
    .map(line => line.replace(/[ \t]+$/, '')).join('\n').replace(/\n+$/, '');
}

function run(command, commandArgs, options) {
  return spawnSync(command, commandArgs, {
    encoding:'utf8', timeout:options.timeout, input:options.input || '',
    cwd:options.cwd, maxBuffer:2 * 1024 * 1024, env:{ ...process.env, LC_ALL:'C.UTF-8' }
  });
}

function verifyToolchain(lang) {
  const commands = lang === 'py'
    ? [[process.env.PYTHON_BIN || 'python3', ['--version']]]
    : lang === 'c'
      ? [[process.env.CC || 'gcc', ['--version']]]
      : lang === 'cpp'
        ? [[process.env.CXX || 'g++', ['--version']]]
        : [[process.env.JAVAC_BIN || 'javac', ['-version']], [process.env.JAVA_BIN || 'java', ['-version']]];
  const unavailable = commands.filter(([command, commandArgs]) => {
    const result = spawnSync(command, commandArgs, { encoding:'utf8', timeout:10000 });
    return result.error || result.status !== 0;
  }).map(([command]) => command);
  if (unavailable.length) {
    console.error(`Missing or unusable ${lang} toolchain: ${unavailable.join(', ')}`);
    return false;
  }
  return true;
}

function failureText(result) {
  if (result.error) return result.error.code === 'ETIMEDOUT' ? 'timeout' : result.error.message;
  if (result.signal) return `signal ${result.signal}`;
  return String(result.stderr || `exit ${result.status}`).trim().slice(-500);
}

function compileSolution(lang, code, dir) {
  if (lang === 'py') return { command:process.env.PYTHON_BIN || 'python3', args:['-I', '-c', code] };
  if (lang === 'c') {
    const source = path.join(dir, 'main.c'), binary = path.join(dir, 'main');
    fs.writeFileSync(source, code);
    const result = run(process.env.CC || 'gcc', [source, '-O2', '-std=c11', '-o', binary], { timeout:20000, cwd:dir });
    if (result.status !== 0) throw new Error(failureText(result));
    return { command:binary, args:[] };
  }
  if (lang === 'cpp') {
    const source = path.join(dir, 'main.cpp'), binary = path.join(dir, 'main');
    fs.writeFileSync(source, code);
    const result = run(process.env.CXX || 'g++', [source, '-O2', '-std=c++17', '-o', binary], { timeout:25000, cwd:dir });
    if (result.status !== 0) throw new Error(failureText(result));
    return { command:binary, args:[] };
  }
  const source = path.join(dir, 'Main.java');
  fs.writeFileSync(source, code);
  const compiled = run(process.env.JAVAC_BIN || 'javac', ['-encoding', 'UTF-8', '-d', dir, source], { timeout:25000, cwd:dir });
  if (compiled.status !== 0) throw new Error(failureText(compiled));
  return { command:process.env.JAVA_BIN || 'java', args:['-cp', dir, 'Main'] };
}

let failures = 0;
if (languages.some(lang => !verifyToolchain(lang))) {
  console.error('Install the required compiler/runtime, or run a language that is available locally. CI provisions Java 17 explicitly.');
  process.exit(2);
}
const tempRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'apcs-solution-check-'));
try {
  for (const lang of languages) {
    let compiledCount = 0, sampleCount = 0;
    console.log(`— ${lang}: ${selected.length} reference solutions —`);
    for (const [index, problem] of selected.entries()) {
      const code = SOLUTIONS[lang] && SOLUTIONS[lang][problem.id];
      if (typeof code !== 'string' || !code.trim()) {
        failures++;
        console.error(`  ✗ ${problem.id}: missing solution`);
        continue;
      }
      const dir = fs.mkdtempSync(path.join(tempRoot, `${lang}-`));
      let executable;
      try { executable = compileSolution(lang, code, dir); compiledCount++; }
      catch (e) {
        failures++;
        console.error(`  ✗ ${problem.id}: compile/setup failed: ${e.message}`);
        continue;
      }
      for (const [sampleIndex, sample] of problem.samples.entries()) {
        sampleCount++;
        const result = run(executable.command, executable.args, { timeout:5000, input:sample.input, cwd:dir });
        const pythonStderr = lang === 'py' && String(result.stderr || '').trim();
        if (result.status !== 0 || result.error || result.signal || pythonStderr) {
          failures++;
          console.error(`  ✗ ${problem.id} sample ${sampleIndex + 1}: runtime failed: ${failureText(result)}`);
          continue;
        }
        const got = normalizeOutput(result.stdout), expected = normalizeOutput(sample.output);
        if (got !== expected) {
          failures++;
          console.error(`  ✗ ${problem.id} sample ${sampleIndex + 1}: expected ${JSON.stringify(expected)}, got ${JSON.stringify(got)}`);
        }
      }
      if ((index + 1) % 50 === 0) console.log(`  … checked ${index + 1}/${selected.length}`);
    }
    console.log(`  ✓ ${compiledCount} compiled/loaded; ${sampleCount} public examples executed`);
  }
} finally {
  fs.rmSync(tempRoot, { recursive:true, force:true });
}

if (failures) {
  console.error(`\nResult: ${failures} failure(s)`);
  process.exit(1);
}
console.log('\nResult: all selected reference solutions pass their public examples');

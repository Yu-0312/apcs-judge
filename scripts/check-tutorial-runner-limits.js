#!/usr/bin/env node
'use strict';

// Regression contracts for tutorial.html's untrusted-code output limits.
// This stays dependency-free and executes the page's real PY_WRAPPER with the
// local python3 interpreter so the cap is tested, not merely pattern-matched.
const assert = require('assert');
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const { spawnSync } = require('child_process');

const HTML_FILE = path.join(__dirname, '..', 'tutorial.html');
const source = fs.readFileSync(HTML_FILE, 'utf8');

function section(start, end) {
  const from = source.indexOf(start);
  const to = source.indexOf(end, from + start.length);
  assert(from >= 0 && to > from, `missing tutorial.html section: ${start}`);
  return source.slice(from, to);
}

function extractArrayLiteral(name) {
  const marker = `const ${name}`;
  const declaration = source.indexOf(marker);
  assert(declaration >= 0, `${name} declaration is missing`);

  const equals = source.indexOf('=', declaration + marker.length);
  const start = source.indexOf('[', equals + 1);
  assert(equals >= 0 && start >= 0, `${name} array literal is missing`);

  let depth = 0;
  let quote = null;
  for (let i = start; i < source.length; i++) {
    const char = source[i];
    if (quote) {
      if (char === '\\') i++;
      else if (char === quote) quote = null;
      continue;
    }
    if (char === "'" || char === '"' || char === '`') quote = char;
    else if (char === '[') depth++;
    else if (char === ']' && --depth === 0) return source.slice(start, i + 1);
  }
  throw new assert.AssertionError({ message: `${name} array literal is unterminated` });
}

const outputLimitMatch = source.match(/const OUTPUT_LIMIT_CHARS\s*=\s*(\d+)\s*;/);
assert(outputLimitMatch, 'OUTPUT_LIMIT_CHARS is missing');
const outputLimit = Number(outputLimitMatch[1]);
assert(Number.isSafeInteger(outputLimit) && outputLimit > 0, 'OUTPUT_LIMIT_CHARS must be a positive integer');

const wrapperLiteral = extractArrayLiteral('PY_WRAPPER');
const wrapperLines = vm.runInNewContext(`(${wrapperLiteral})`, Object.create(null), {
  filename: 'tutorial.html#PY_WRAPPER',
  timeout: 1000
});
assert(Array.isArray(wrapperLines) && wrapperLines.every(line => typeof line === 'string'), 'PY_WRAPPER must be a string array');
const pyWrapper = wrapperLines.join('\n');

const wrapperLimitMatch = pyWrapper.match(/__out = _LimitedIO\((\d+)\); __err = _LimitedIO\((\d+)\)/);
assert(wrapperLimitMatch, 'PY_WRAPPER must cap both stdout and stderr');
assert.strictEqual(Number(wrapperLimitMatch[1]), outputLimit, 'PY_WRAPPER stdout cap drifted from OUTPUT_LIMIT_CHARS');
assert.strictEqual(Number(wrapperLimitMatch[2]), outputLimit, 'PY_WRAPPER stderr cap drifted from OUTPUT_LIMIT_CHARS');
assert(pyWrapper.includes('__r_truncated = __out.truncated or __err.truncated'), 'PY_WRAPPER must report either stream being truncated');

function runPythonWrapper(size) {
  const userCode = [
    'import sys',
    `sys.stdout.write('O' * ${size})`,
    `sys.stderr.write('E' * ${size})`
  ].join('\n');
  const harness = [
    'import json',
    `__code = ${JSON.stringify(userCode)}`,
    "__stdin = ''",
    `exec(${JSON.stringify(pyWrapper)})`,
    "print(json.dumps({'out_len': len(__r_out), 'err_len': len(__r_err), 'out_ok': set(__r_out) <= {'O'}, 'err_ok': set(__r_err) <= {'E'}, 'truncated': bool(__r_truncated)}))"
  ].join('\n');
  const result = spawnSync('python3', ['-c', harness], {
    encoding: 'utf8',
    maxBuffer: 1024 * 1024,
    timeout: 15000
  });
  if (result.error) throw result.error;
  assert.strictEqual(result.status, 0, `python3 wrapper harness failed: ${String(result.stderr).trim()}`);
  return JSON.parse(result.stdout.trim());
}

const boundary = runPythonWrapper(outputLimit);
assert.deepStrictEqual(boundary, {
  out_len: outputLimit,
  err_len: outputLimit,
  out_ok: true,
  err_ok: true,
  truncated: false
}, 'exactly-at-limit output must remain intact and unflagged');

const overflow = runPythonWrapper(outputLimit + 257);
assert.deepStrictEqual(overflow, {
  out_len: outputLimit,
  err_len: outputLimit,
  out_ok: true,
  err_ok: true,
  truncated: true
}, 'over-limit stdout/stderr must be capped and reported as truncated');

const executeCode = section('async function executeCode', '// 送交 Judge0');
assert(executeCode.includes('const stdout = limitRunnerOutput(data.stdout);'), 'Judge0 stdout must pass through limitRunnerOutput');
assert(executeCode.includes('const stderr = limitRunnerOutput(data.stderr || data.compile_output);'), 'Judge0 stderr must pass through limitRunnerOutput');
assert(executeCode.includes('const combined=limitRunnerOutput('), 'combined Judge0 output must be capped after stream labeling');
assert(executeCode.includes('compile=limitRunnerOutput(data.compile_output)'), 'Judge0 compiler output must pass through limitRunnerOutput');
assert(executeCode.includes('T().outputTruncated'), 'runner UI must report output truncation');

const judge0Submit = section('async function judge0Submit', 'let runBusy = false;');
const maxFileSizeMatch = judge0Submit.match(/max_file_size\s*:\s*(\d+)/);
assert(maxFileSizeMatch, 'Judge0 payload must set max_file_size');
const maxFileSize = Number(maxFileSizeMatch[1]);
assert(Number.isSafeInteger(maxFileSize) && maxFileSize > 0, 'Judge0 max_file_size must be a positive integer');

console.log('tutorial.html runner-limit contracts: OK');
console.log(`  Python stdout/stderr cap: ${outputLimit} chars (boundary preserved, overflow truncated + reported)`);
console.log(`  Judge0 payload max_file_size: ${maxFileSize}; stdout/stderr/compiler/combined output are capped`);

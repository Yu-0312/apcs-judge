#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.join(__dirname, '..');
const source = fs.readFileSync(path.join(ROOT, 'studyplan.html'), 'utf8');
let errors = 0;
const fail = message => { errors++; console.error('  ✗ ' + message); };
const pass = message => console.log('  ✓ ' + message);

function extractDeclaration(name) {
  const marker = 'const ' + name + ' =';
  const start = source.indexOf(marker);
  if (start < 0) throw new Error('missing ' + marker);
  let i = source.indexOf('=', start) + 1;
  let depth = 0, quote = '', templateExpr = 0;
  for (; i < source.length; i++) {
    const ch = source[i], next = source[i + 1];
    if (quote) {
      if (ch === '\\') { i++; continue; }
      if (quote === '`' && ch === '$' && next === '{') { templateExpr++; depth++; i++; continue; }
      if (ch === quote && !templateExpr) quote = '';
      else if (quote === '`' && ch === '}' && templateExpr) { templateExpr--; depth--; }
      continue;
    }
    if (ch === '"' || ch === "'" || ch === '`') quote = ch;
    else if (ch === '[' || ch === '{' || ch === '(') depth++;
    else if (ch === ']' || ch === '}' || ch === ')') depth--;
    else if (ch === ';' && depth === 0) return source.slice(start, i + 1);
  }
  throw new Error('unterminated declaration ' + name);
}

function extractFunction(name, nextName) {
  const start = source.indexOf('function ' + name + '(');
  const end = source.indexOf('\nfunction ' + nextName + '(', start);
  if (start < 0 || end < 0) throw new Error('cannot extract function ' + name);
  return source.slice(start, end).trim();
}

const context = { encodeURIComponent };
vm.createContext(context);
vm.runInContext(extractDeclaration('PLANS') + '\nthis.PLANS = PLANS;', context);
context.planState = { language: 'py' };
vm.runInContext(extractFunction('planHref', 'renderFilters') + '\nthis.planHref = planHref;', context);

const problemSource = fs.readFileSync(path.join(ROOT, 'data', 'judge-problems.js'), 'utf8');
const problems = vm.runInNewContext(problemSource + '\n;PROBLEMS', {}, { timeout: 30000 });
const problemIds = new Set(problems.map(problem => problem.id));
const languages = ['py', 'cpp', 'c', 'java'];
const levels = new Set(['初級', '中級', '中高級', '高級']);

function chapterAvailable(chapter, language) {
  if (chapter >= 36 && chapter <= 67) return language === 'py';
  if (chapter >= 71 && chapter <= 78) return language === 'cpp';
  if (chapter >= 79 && chapter <= 86) return language === 'c';
  if (chapter >= 87 && chapter <= 94) return language === 'java';
  if (chapter === 95 || chapter === 96) return language === 'py';
  return chapter >= 0 && chapter <= 100;
}

let weeks = 0, checked = 0;
for (const plan of context.PLANS) {
  if (!plan || !Array.isArray(plan.weeks)) { fail('計畫缺 weeks：' + String(plan && plan.id)); continue; }
  for (const week of plan.weeks) {
    weeks++;
    if (!Array.isArray(week) || week.length < 5) { fail(`${plan.id} 有格式不完整的週次`); continue; }
    for (const language of languages) {
      context.planState.language = language;
      for (const type of ['tutorial', 'reading', 'judge']) {
        const href = context.planHref(week, type);
        const url = new URL(href, 'https://example.test/');
        checked++;
        if (type === 'judge') {
          const id = url.searchParams.get('problem');
          if (url.pathname !== '/index.html' || !problemIds.has(id)) fail(`${plan.id} ${week[0]} ${language} 的實作連結無有效題目：${href}`);
          if (url.searchParams.get('lang') !== language) fail(`${plan.id} ${week[0]} 的實作語言錯誤：${href}`);
        } else if (type === 'tutorial') {
          const chapter = Number(url.searchParams.get('chapter'));
          if (url.pathname !== '/tutorial.html' || !Number.isInteger(chapter) || !chapterAvailable(chapter, language)) fail(`${plan.id} ${week[0]} ${language} 的教學章節不可見：${href}`);
          if (url.searchParams.get('lang') !== language) fail(`${plan.id} ${week[0]} 的教學語言錯誤：${href}`);
        } else {
          const level = url.searchParams.get('level');
          if (url.pathname !== '/reading.html' || url.searchParams.get('lang') !== language || !levels.has(level) || url.searchParams.get('mode') !== 'random') fail(`${plan.id} ${week[0]} ${language} 的判讀連結錯誤：${href}`);
        }
      }
    }
  }
}

if (!errors) pass(`${context.PLANS.length} 條路線、${weeks} 個週次、${checked} 個跨頁 deep link 全部有效`);
console.log(`\n結果：${errors} 錯誤`);
process.exit(errors ? 1 : 0);

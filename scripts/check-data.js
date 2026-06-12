#!/usr/bin/env node
// 資料一致性檢查：驗證 data/*.js 與兩個 HTML 的結構正確性。
// 用法：node scripts/check-data.js（錯誤離開碼 1；警告不擋）
'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const { execFileSync } = require('child_process');
const os = require('os');

const ROOT = path.join(__dirname, '..');
let errors = 0, warnings = 0;
const err = (msg) => { errors++; console.error('  ✗ ' + msg); };
const warn = (msg) => { warnings++; console.warn('  ⚠ ' + msg); };
const ok = (msg) => console.log('  ✓ ' + msg);

// 載入 data/<file> 中宣告的 const <name> 並回傳其值
function loadData(file, name) {
  const code = fs.readFileSync(path.join(ROOT, 'data', file), 'utf8');
  return vm.runInNewContext(code + '\n;' + name, {}, { filename: file, timeout: 30000 });
}

// 從 HTML 的 inline script 抽出 const <name> = <literal>; 並求值
function loadFromHtml(htmlFile, name) {
  const src = fs.readFileSync(path.join(ROOT, htmlFile), 'utf8');
  const m = src.match(new RegExp('\\nconst ' + name + '\\s*='));
  if (!m) throw new Error(name + ' not found in ' + htmlFile);
  let i = src.indexOf('=', m.index) + 1, depth = 0, inStr = null;
  for (; i < src.length; i++) {
    const c = src[i];
    if (inStr) {
      if (c === '\\') { i++; continue; }
      if (c === inStr) inStr = null;
      continue;
    }
    if (c === '"' || c === "'" || c === '`') inStr = c;
    else if (c === '(' || c === '[' || c === '{') depth++;
    else if (c === ')' || c === ']' || c === '}') depth--;
    else if (c === ';' && depth === 0) break;
  }
  const decl = src.slice(m.index + 1, i + 1);
  return vm.runInNewContext(decl + '\n;' + name, {}, { filename: htmlFile, timeout: 30000 });
}

// 1) 語法：所有 data/*.js 與兩頁 inline script 都要過 node --check
console.log('— 語法檢查 —');
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'check-'));
const syntaxCheck = (label, code) => {
  const f = path.join(tmp, label.replace(/[^\w.-]/g, '_') + '.js');
  fs.writeFileSync(f, code);
  try { execFileSync(process.execPath, ['--check', f], { stdio: 'pipe' }); ok(label); }
  catch (e) { err(label + ' 語法錯誤：' + String(e.stderr).slice(0, 300)); }
};
for (const f of fs.readdirSync(path.join(ROOT, 'data')).filter(f => f.endsWith('.js'))) {
  syntaxCheck('data/' + f, fs.readFileSync(path.join(ROOT, 'data', f), 'utf8'));
}
for (const htmlFile of ['tutorial.html', 'index.html']) {
  const src = fs.readFileSync(path.join(ROOT, htmlFile), 'utf8');
  const scripts = [...src.matchAll(/<script(?![^>]*src=)[^>]*>([\s\S]*?)<\/script>/g)];
  scripts.forEach((m, i) => { if (m[1].trim()) syntaxCheck(htmlFile + ' inline[' + i + ']', m[1]); });
}

// 1.5) 快取版本同步：HTML 內所有 data/*.js 的 ?v= 必須一致
//（index.html 的 <script> 標籤與 DATA_VER 是兩處手動同步點，漏改會造成「舊題目 + 新解答」）
console.log('— 快取版本（cache-bust） —');
{
  const idxSrc = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
  const dataVer = (idxSrc.match(/const DATA_VER = '([^']+)'/) || [])[1];
  const probTag = (idxSrc.match(/judge-problems\.js\?v=([\w.-]+)/) || [])[1];
  if (!dataVer) err('index.html 找不到 DATA_VER');
  else if (!probTag) err('index.html 找不到 judge-problems.js 的 ?v= 標籤');
  else if (dataVer !== probTag) err(`index.html 版本不同步：judge-problems.js?v=${probTag} ≠ DATA_VER '${dataVer}'`);
  else ok(`index.html：judge-problems.js 標籤與 DATA_VER 同為 '${dataVer}'`);

  const tutSrc = fs.readFileSync(path.join(ROOT, 'tutorial.html'), 'utf8');
  const tutVers = new Set([...tutSrc.matchAll(/data\/tutorial-[\w-]+\.js\?v=([\w.-]+)/g)].map(m => m[1]));
  if (!tutVers.size) err('tutorial.html 找不到任何 data/*.js 的 ?v= 標籤');
  else if (tutVers.size > 1) err(`tutorial.html 的 ?v= 版本不一致：${[...tutVers].join(', ')}`);
  else ok(`tutorial.html：全部 data 標籤同為 '${[...tutVers][0]}'`);
}

// 2) 教學資料
console.log('— 教學資料（tutorial） —');
const CHAPTERS = loadData('tutorial-chapters-zh.js', 'CHAPTERS');
const CHAPTERS_EN = loadData('tutorial-chapters-en.js', 'CHAPTERS_EN_RAW');
const CHAPTER_META = loadData('tutorial-chapter-meta.js', 'CHAPTER_META');
const LANG_CONTENT = loadData('tutorial-lang-content-zh.js', 'LANG_CONTENT');
const LANG_CONTENT_EN = loadData('tutorial-lang-content-en.js', 'LANG_CONTENT_EN');
const MULTI_EXAMPLES = loadData('tutorial-multi-examples.js', 'MULTI_EXAMPLES');

const ids = CHAPTERS.map(c => c.id);
if (ids.every((id, i) => id === i)) ok(`CHAPTERS：${CHAPTERS.length} 章，id 0–${CHAPTERS.length - 1} 連續`);
else err('CHAPTERS id 不連續或順序錯誤');
for (const c of CHAPTERS) {
  if (!c.title || !c.content) err(`第 ${c.id} 章缺 title 或 content`);
}

const zhIds = new Set(ids), enIds = new Set(CHAPTERS_EN.map(c => c.id));
if (zhIds.size === enIds.size && [...zhIds].every(id => enIds.has(id))) ok('zh/en 章節 id 完全對齊');
else err(`zh/en 章節不對齊：zh ${zhIds.size} 章 vs en ${enIds.size} 章`);

for (const k of Object.keys(CHAPTER_META)) {
  const id = Number(k);
  if (!zhIds.has(id)) err(`CHAPTER_META 含不存在的章節 id ${k}`);
  const meta = CHAPTER_META[k];
  if (meta.code && typeof meta.code.expect !== 'string') err(`CHAPTER_META[${k}].code 缺 expect`);
}
ok(`CHAPTER_META：${Object.keys(CHAPTER_META).length} 章有學習目標/練習`);

const lcZh = Object.keys(LANG_CONTENT).sort(), lcEn = Object.keys(LANG_CONTENT_EN).sort();
if (JSON.stringify(lcZh) === JSON.stringify(lcEn)) ok(`LANG_CONTENT zh/en 鍵一致（${lcZh.length} 章）`);
else err('LANG_CONTENT 與 LANG_CONTENT_EN 鍵不一致');

for (const k of Object.keys(MULTI_EXAMPLES)) {
  if (!zhIds.has(Number(k))) err(`MULTI_EXAMPLES 含不存在的章節 id ${k}`);
}
ok(`MULTI_EXAMPLES：${Object.keys(MULTI_EXAMPLES).length} 章有多語言範例`);

const VIS = loadFromHtml('tutorial.html', 'CHAP_LANG_VISIBILITY');
const seen = new Map();
for (const [lang, idList] of Object.entries(VIS)) {
  for (const id of idList) {
    if (seen.has(id)) err(`CHAP_LANG_VISIBILITY 重疊：章 ${id} 同時屬於 ${seen.get(id)} 與 ${lang}`);
    seen.set(id, lang);
    if (!zhIds.has(id)) err(`CHAP_LANG_VISIBILITY 含不存在的章節 id ${id}`);
  }
}
ok('CHAP_LANG_VISIBILITY 無重疊');

// 3) 題庫資料
console.log('— 題庫資料（judge） —');
const PROBLEMS = loadData('judge-problems.js', 'PROBLEMS');
const SOLUTIONS = loadData('judge-solutions.js', 'SOLUTIONS');

const pids = new Set();
const DIFFS = new Set(['easy', 'medium', 'midhigh', 'hard']);
for (const p of PROBLEMS) {
  if (pids.has(p.id)) err(`題目 id 重複：${p.id}`);
  pids.add(p.id);
  if (!p.title) err(`${p.id} 缺 title`);
  if (!p.desc) err(`${p.id} 缺 desc`);
  if (p.diff && !DIFFS.has(p.diff)) err(`${p.id} 難度未知：${p.diff}`);
  if (!Array.isArray(p.samples) || !p.samples.length) { err(`${p.id} 缺 samples`); continue; }
  for (const s of p.samples) {
    if (typeof s.input !== 'string' || typeof s.output !== 'string') err(`${p.id} 的 sample 格式錯誤`);
  }
}
ok(`PROBLEMS：${PROBLEMS.length} 題，id 唯一`);

for (const lang of ['py', 'cpp', 'c', 'java']) {
  if (!SOLUTIONS[lang]) { err(`SOLUTIONS 缺 ${lang}`); continue; }
  const missing = PROBLEMS.filter(p => !SOLUTIONS[lang][p.id]).length;
  if (missing) warn(`${lang} 解答缺 ${missing} 題`);
  else ok(`${lang} 解答齊全`);
}

// 題庫英文對照：id 必須存在、欄位名必須合法；未翻完前列警告（前端逐欄位 fallback 中文）
const PROBLEMS_EN = loadData('judge-i18n-en.js', 'PROBLEMS_EN');
const EN_FIELDS = ['title', 'topic', 'desc', 'input_desc', 'output_desc', 'hint'];
let enPartial = 0;
for (const [id, f] of Object.entries(PROBLEMS_EN)) {
  if (!pids.has(id)) { err(`PROBLEMS_EN 含不存在的題目 id ${id}`); continue; }
  for (const k of Object.keys(f)) {
    if (!EN_FIELDS.includes(k)) err(`PROBLEMS_EN[${id}] 未知欄位 ${k}`);
    else if (typeof f[k] !== 'string' || !f[k].trim()) err(`PROBLEMS_EN[${id}].${k} 不是非空字串`);
  }
  if (EN_FIELDS.some(k => !f[k])) enPartial++;
}
const enMissing = [...pids].filter(id => !PROBLEMS_EN[id]).length;
ok(`PROBLEMS_EN：${Object.keys(PROBLEMS_EN).length} 題有英文對照`);
if (enMissing || enPartial) warn(`英文對照未完成：${enMissing} 題未翻譯、${enPartial} 題欄位不全（前端會 fallback 中文）`);

// 已知問題（169 題佔位測資）：列為警告，資料修復後改成錯誤
const byS = new Map();
for (const p of PROBLEMS) {
  const k = JSON.stringify(p.samples);
  byS.set(k, (byS.get(k) || 0) + 1);
}
const dupProblems = [...byS.values()].filter(n => n > 1).reduce((a, n) => a + n - 1, 0);
if (dupProblems) warn(`${dupProblems} 題與其他題共用相同測資（佔位資料，待補真實題目）`);
else ok('無共用測資的題目');

console.log(`\n結果：${errors} 錯誤，${warnings} 警告`);
process.exit(errors ? 1 : 0);

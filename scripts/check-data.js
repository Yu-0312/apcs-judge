#!/usr/bin/env node
// 資料一致性檢查：驗證 data/*.js、頁面 inline script、cache 版本與資料債基線。
// 用法：node scripts/check-data.js（錯誤離開碼 1；警告不擋）
'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const crypto = require('crypto');
const { execFileSync } = require('child_process');
const os = require('os');

const ROOT = path.join(__dirname, '..');
let errors = 0, warnings = 0;
const err = (msg) => { errors++; console.error('  ✗ ' + msg); };
const warn = (msg) => { warnings++; console.warn('  ⚠ ' + msg); };
const ok = (msg) => console.log('  ✓ ' + msg);
const BASELINE_FILE = path.join(__dirname, 'judge-data-baseline.json');
let BASELINE = { duplicateSampleDebt: 0, duplicateSampleGroups: {}, cacheVersionDrift: {} };
try { BASELINE = JSON.parse(fs.readFileSync(BASELINE_FILE, 'utf8')); }
catch (e) { err(`無法載入資料債基線 ${path.relative(ROOT, BASELINE_FILE)}：${e.message}`); }

// 載入 data/<file> 中宣告的 const <name> 並回傳其值
function loadData(file, name) {
  const code = fs.readFileSync(path.join(ROOT, 'data', file), 'utf8');
  return vm.runInNewContext(code + '\n;' + name, {}, { filename: file, timeout: 30000 });
}

// 載入以 IIFE 掛到 window 的小型 manifest（例如 dashboard 統計）。
function loadWindowData(file, name) {
  const code = fs.readFileSync(path.join(ROOT, 'data', file), 'utf8');
  const context = { window:{} };
  vm.runInNewContext(code, context, { filename:file, timeout:30000 });
  return context.window[name];
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

// 1) 語法：所有 data/*.js 與頂層 HTML inline script 都要過 node --check
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
for (const htmlFile of fs.readdirSync(ROOT).filter(f => f.endsWith('.html')).sort()) {
  const src = fs.readFileSync(path.join(ROOT, htmlFile), 'utf8');
  const scripts = [...src.matchAll(/<script(?![^>]*src=)[^>]*>([\s\S]*?)<\/script>/g)];
  scripts.forEach((m, i) => { if (m[1].trim()) syntaxCheck(htmlFile + ' inline[' + i + ']', m[1]); });
}

// 1.25) 外部服務契約：模型策略、API 端點、載入順序與 cache version 必須同源。
console.log('— 外部服務設定（service-config） —');
{
  let cfg = null;
  try { cfg = loadData('service-config.js', 'APCS_SERVICE_CONFIG'); }
  catch (e) { err(`無法載入 APCS_SERVICE_CONFIG：${e.message}`); }

  if (cfg) {
    const gemini = cfg.gemini || {};
    const judge0 = cfg.judge0 || {};
    const publicChat = cfg.publicChat || {};
    const models = Array.isArray(gemini.models) ? gemini.models : [];
    const modelIds = models.map(m => m && m.id);
    const fallbackModels = Array.isArray(gemini.fallbackModels) ? gemini.fallbackModels : [];
    const uniqueIds = new Set(modelIds);
    const retiredModel = /gemini-(?:1\.5|2\.0)(?:-|$)/;
    const october2026Shutdown = new Set(['gemini-2.5-flash', 'gemini-2.5-pro']);

    if (cfg.schemaVersion !== 1) err(`APCS_SERVICE_CONFIG.schemaVersion 應為 1，實際為 ${cfg.schemaVersion}`);
    if (!/^[\w.-]+$/.test(String(cfg.cacheVersion || ''))) err('APCS_SERVICE_CONFIG.cacheVersion 缺失或格式不合法');
    if (gemini.apiBase !== 'https://generativelanguage.googleapis.com/v1beta') err(`Gemini apiBase 不允許：${gemini.apiBase || '(空)'}`);
    if (judge0.apiBase !== 'https://ce.judge0.com') err(`Judge0 apiBase 不允許：${judge0.apiBase || '(空)'}`);
    if (typeof publicChat.enabled !== 'boolean') err('publicChat.enabled 必須是部署者明確設定的 boolean；缺值時不得啟用');
    if (!models.length || models.some(m => !m || typeof m.id !== 'string' || !/^[\w.-]+$/.test(m.id) || typeof m.label !== 'string' || !m.label.trim())) err('Gemini models 必須包含合法且有標籤的模型');
    if (uniqueIds.size !== modelIds.length) err('Gemini models 的 id 重複');
    if (!uniqueIds.has(gemini.defaultModel)) err(`Gemini defaultModel 不在 models：${gemini.defaultModel || '(空)'}`);
    if (!fallbackModels.length || fallbackModels.some(id => !uniqueIds.has(id))) err('Gemini fallbackModels 必須是 models 的非空子集合');
    if (fallbackModels.includes(gemini.defaultModel)) err('Gemini fallbackModels 不應重複 defaultModel');
    if (modelIds.some(id => retiredModel.test(String(id)))) err(`service-config 仍含退役模型：${modelIds.filter(id => retiredModel.test(String(id))).join(', ')}`);
    if (modelIds.some(id => october2026Shutdown.has(id))) err(`service-config 仍含已公告 2026-10-16 停用的模型：${modelIds.filter(id => october2026Shutdown.has(id)).join(', ')}`);
    if (![cfg, gemini, judge0, publicChat, models, ...models, fallbackModels].every(Object.isFrozen)) err('APCS_SERVICE_CONFIG 與所有子物件／陣列都必須凍結');
    else ok(`服務設定已深度凍結：預設 ${gemini.defaultModel}，${models.length} 個模型`);

    const htmlFiles = fs.readdirSync(ROOT).filter(f => f.endsWith('.html')).sort();
    const chatPages = [];
    for (const htmlFile of htmlFiles) {
      const src = fs.readFileSync(path.join(ROOT, htmlFile), 'utf8');
      const chat = /<script[^>]+src=["']data\/chat-widget\.js\?v=([\w.-]+)["'][^>]*>/i.exec(src);
      if (!chat) continue;
      chatPages.push(htmlFile);
      const service = /<script[^>]+src=["']data\/service-config\.js\?v=([\w.-]+)["'][^>]*>/i.exec(src);
      if (!service) { err(`${htmlFile} 載入 chat-widget 前未載入 service-config`); continue; }
      if (service.index > chat.index) err(`${htmlFile} 的 service-config 必須先於 chat-widget 載入`);
      if (service[1] !== cfg.cacheVersion) err(`${htmlFile} 的 service-config cache version ${service[1]} ≠ ${cfg.cacheVersion}`);
      if (chat[1] !== cfg.cacheVersion) err(`${htmlFile} 的 chat-widget cache version ${chat[1]} ≠ ${cfg.cacheVersion}`);
    }
    if (!chatPages.length) err('找不到載入 chat-widget 的頁面');
    else ok(`${chatPages.length} 個 chat-widget 頁面皆先載入同版 service-config`);

    const aiSrc = fs.readFileSync(path.join(ROOT, 'ai-solve.html'), 'utf8');
    const aiConfigPos = aiSrc.indexOf('data/service-config.js');
    const aiLogicPos = aiSrc.indexOf("const LEGACY_LS_KEY");
    if (aiConfigPos < 0 || aiLogicPos < 0 || aiConfigPos > aiLogicPos) err('ai-solve.html 必須在主程式前載入 service-config');
    const modelSelect = (aiSrc.match(/<select[^>]+id=["']in-model["'][^>]*>([\s\S]*?)<\/select>/i) || [])[1] || '';
    if (/gemini-[\w.-]+/.test(modelSelect)) err('ai-solve.html 的模型選單仍硬編碼模型，應由 service-config 產生');
    for (const consumer of ['ai-solve.html', 'data/chat-widget.js']) {
      const src = fs.readFileSync(path.join(ROOT, consumer), 'utf8');
      if (!src.includes('APCS_SERVICE_CONFIG')) err(`${consumer} 未讀取 APCS_SERVICE_CONFIG`);
      if (/generativelanguage\.googleapis\.com\/v1beta\/models\//.test(src)) err(`${consumer} 仍直接硬編碼 Gemini generateContent URL`);
      if (retiredModel.test(src)) err(`${consumer} 仍含退役 Gemini 模型`);
    }
    const chatSrc = fs.readFileSync(path.join(ROOT, 'data', 'chat-widget.js'), 'utf8');
    if (!chatSrc.includes('href="privacy.html"') || !chatSrc.includes('href="disclaimer.html"')) err('chat-widget 政策連結必須指向可瀏覽的 HTML 頁面');
    if (/href="(?:隱私權政策|免責聲明)\.md"/.test(chatSrc)) err('chat-widget 不應直接連到 Markdown 政策原稿');
    const publicGatePos = chatSrc.indexOf('if (!PUBLIC_CHAT_ENABLED)');
    const firebaseLoadPos = chatSrc.indexOf("await loadScript('https://www.gstatic.com/firebasejs/", publicGatePos);
    if (!chatSrc.includes('publicChat.enabled === true') || publicGatePos < 0 || firebaseLoadPos < 0 || publicGatePos > firebaseLoadPos) err('chat-widget 必須在載入 Firebase SDK／匿名登入前檢查明確 deployment flag');
    if (!chatSrc.includes('if (!PUBLIC_CHAT_ENABLED || !publicWritable')) err('公共訊息送出路徑缺少 publicChat deployment flag guard');
    const firebaseGuide = fs.readFileSync(path.join(ROOT, 'FIREBASE_CHAT_SECURITY.md'), 'utf8');
    const readme = fs.readFileSync(path.join(ROOT, 'README.md'), 'utf8');
    if (!/2\.5 秒[^\n]*(?:可被|繞過)/.test(firebaseGuide) || !/現有 Rules \*\*沒有發言頻率限制\*\*/.test(firebaseGuide)) err('Firebase 安全文檔必須說明前端節流可繞過，且 Rules 不含速率限制');
    if (/過快發言均被拒絕|UI fails closed when those prerequisites are unavailable/.test(readme)) err('README 仍宣稱可自動判斷 Rules／拒絕過快發言');
    if (!/publicChat\.enabled: false/.test(readme) || !/publicChat\.enabled` 改成 `true`/.test(firebaseGuide)) err('README／Firebase 文件缺少 fail-closed 旗標與人工開啟流程');
    else ok(`公共聊天部署旗標為 ${publicChat.enabled}，Firebase 初始化／寫入皆受人工閘門保護`);
    if (/ce\.judge0\.com\/submissions/.test(aiSrc)) err('ai-solve.html 仍直接硬編碼 Judge0 submissions URL');
    else ok('AI 解題與聊天工具皆由 APCS_SERVICE_CONFIG 取得模型／端點');
  }
}

// 1.4) AI 解題產品契約：文字／圖片雙入口、教練分層與「不自動執行」不得退化。
console.log('— AI 解題產品契約 —');
{
  const aiSrc = fs.readFileSync(path.join(ROOT, 'ai-solve.html'), 'utf8');
  const readmeSrc = fs.readFileSync(path.join(ROOT, 'README.md'), 'utf8');
  const textInput = /<textarea[^>]+id=["']in-problem-text["'][^>]+maxlength=["']30000["'][^>]*>/i.test(aiSrc);
  if (!textInput) err('ai-solve 純文字題目輸入缺失，或未限制為 30,000 字元');
  if (!aiSrc.includes('if(!imageB64&&!problemText)')) err('ai-solve 未強制題目文字／圖片至少提供一項');
  if (!aiSrc.includes("if(imageB64&&!$('privacy-consent').checked)")) err('ai-solve 圖片同意不得套用到純文字模式');
  if (!aiSrc.includes("if(imageB64) parts.push({inline_data:")) err('ai-solve 只能在真的有圖片時加入 Gemini inline_data');
  if (!aiSrc.includes('MAX_PROBLEM_TEXT_CHARS = 30000') || !aiSrc.includes('MAX_COACH_THOUGHT_CHARS = 4000')) err('ai-solve 文字／教練輸入大小上限缺失');
  else ok('純文字與圖片雙入口具備條件式同意及大小限制');

  for (const id of ['mode-full', 'mode-coach', 'card-coach', 'coach-thought', 'btn-next-hint', 'btn-full-solve']) {
    if (!new RegExp(`id=["']${id}["']`).test(aiSrc)) err(`ai-solve 教練模式缺少 #${id}`);
  }
  if (!aiSrc.includes('const MAX_COACH_LEVELS = 3') || !aiSrc.includes('const COACH_SCHEMA')) err('ai-solve 缺少三層教練提示 schema');
  const coachSchemaStart = aiSrc.indexOf('const COACH_SCHEMA');
  const coachPromptStart = aiSrc.indexOf('function coachPrompt', coachSchemaStart);
  const coachSchemaSource = coachSchemaStart >= 0 && coachPromptStart > coachSchemaStart ? aiSrc.slice(coachSchemaStart, coachPromptStart) : '';
  if (/\bcode\s*:/.test(coachSchemaSource)) err('COACH_SCHEMA 不得要求完整程式碼欄位');
  if (!aiSrc.includes('coachResponseHasCode') || !aiSrc.includes('Markdown 程式碼區塊')) err('教練模式缺少完整程式碼攔截與提示約束');
  if (!aiSrc.includes("$('btn-full-solve').style.display=completed?'inline-block':'none'")) err('完整解題切換按鈕必須等所有教練層級完成才顯示');
  if (!aiSrc.includes('coachState.level<MAX_COACH_LEVELS')) err('完整解題切換按鈕缺少最終層級 guard');
  const coachRuntimeStart = aiSrc.indexOf('// ═══ 教練模式');
  const coachRuntimeEnd = aiSrc.indexOf('function requestCodeRunApproval', coachRuntimeStart);
  const coachRuntime = coachRuntimeStart >= 0 && coachRuntimeEnd > coachRuntimeStart ? aiSrc.slice(coachRuntimeStart, coachRuntimeEnd) : '';
  if (/\b(?:runProgram|verifySolution|judge0Submit|initPython)\s*\(/.test(coachRuntime)) err('教練模式不得呼叫任何程式執行／評測函式');
  else ok('教練模式具備三層問答、程式碼防漏與不執行契約');

  if (/verified\s*:\s*true/.test(aiSrc) || !/verified\s*:\s*false/.test(aiSrc)) err('AI 錯題紀錄必須明確 verified:false，且不得寫入 true');
  if (!aiSrc.includes('return !!MistakeBook.add({') || !aiSrc.includes('function showResult(cf, sol, verify, unlocked, saved)')) err('AI 錯題紀錄與結果頁必須傳遞實際保存結果');
  if (!aiSrc.includes('瀏覽器未能保存到錯題本') || /showResult\([^;]+;\s*recordMistake\(/.test(aiSrc)) err('AI 結果不得在保存前宣稱已存入錯題本');
  if (!aiSrc.includes('🎯 實作題庫')) err('ai-solve 導覽應使用「實作題庫」，避免評分語意');
  if (!/純文字/.test(readmeSrc) || !/教練模式/.test(readmeSrc) || !/never marked `verified`/.test(readmeSrc)) err('README 未完整說明純文字、教練模式與 verified 邊界');
  else ok('README 與錯題紀錄語意已同步');
}

// 1.5) 快取版本同步：同一資產跨頁面只能有一個 ?v=；既有漂移以 baseline 鎖住，不得新增。
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

  const refs = new Map();
  for (const htmlFile of fs.readdirSync(ROOT).filter(f => f.endsWith('.html'))) {
    const src = fs.readFileSync(path.join(ROOT, htmlFile), 'utf8');
    for (const m of src.matchAll(/data\/([\w-]+\.js)\?v=([\w.-]+)/g)) {
      if (!refs.has(m[1])) refs.set(m[1], new Map());
      if (!refs.get(m[1]).has(m[2])) refs.get(m[1]).set(m[2], []);
      refs.get(m[1]).get(m[2]).push(htmlFile);
    }
  }
  for (const [asset, byVersion] of refs) {
    if (byVersion.size <= 1) continue;
    const versions = [...byVersion.keys()].sort();
    const allowed = (BASELINE.cacheVersionDrift && BASELINE.cacheVersionDrift[asset] || []).slice().sort();
    const detail = versions.map(v => `${v}(${byVersion.get(v).sort().join(',')})`).join(' / ');
    if (JSON.stringify(versions) !== JSON.stringify(allowed)) err(`${asset} 出現新的跨頁 cache 版本漂移：${detail}`);
    else warn(`${asset} 保留既有 cache 版本債：${detail}；修正後請同步縮減 baseline`);
  }
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

const tutorialPageSource = fs.readFileSync(path.join(ROOT, 'tutorial.html'), 'utf8');
if (!tutorialPageSource.includes('PROGRESS_IMPORT_MAX_BYTES = 12 * 1024 * 1024') || !tutorialPageSource.includes('f.size>PROGRESS_IMPORT_MAX_BYTES')) {
  err('tutorial 進度匯入缺少 12 MB 檔案上限');
} else if (!tutorialPageSource.includes('MAX_TUTORIAL_DRAFTS = CHAPTERS.length * 4') || !tutorialPageSource.includes('MAX_TUTORIAL_DRAFT_CHARS = 200000') || !tutorialPageSource.includes('sanitizeTutorialDrafts(data.drafts,true)')) {
  err('tutorial 匯入草稿缺少題號／語言／筆數／長度驗證');
} else if (!tutorialPageSource.includes('VALID_TUTORIAL_CHAPTER_IDS.has(id)')) {
  err('tutorial 匯入完成章節缺少 exact-membership 驗證');
} else if (!tutorialPageSource.includes('alignMarkdownChapterNumber(content,chap)')) {
  err('tutorial 非 Python 顯示章號未同步到教材正文');
} else {
  ok('tutorial 進度匯入具備邊界，重新編號與教材正文一致');
}

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
  const missing = PROBLEMS.filter(p => typeof SOLUTIONS[lang][p.id] !== 'string' || !SOLUTIONS[lang][p.id].trim()).length;
  const extra = Object.keys(SOLUTIONS[lang]).filter(id => !pids.has(id));
  if (missing) warn(`${lang} 解答缺 ${missing} 題`);
  else ok(`${lang} 解答齊全`);
  if (extra.length) err(`${lang} 解答含 ${extra.length} 個不存在的題目 id：${extra.slice(0, 8).join(', ')}`);
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

// dashboard 不應下載完整題庫，故以輕量 manifest 顯示總數；這裡直接對來源資料防漂移。
console.log('— Dashboard 內容統計 —');
const CONTENT_STATS = loadWindowData('content-stats.js', 'CONTENT_STATS');
const READING_QUESTIONS = loadData('reading-questions.js', 'READING_QUESTIONS');
if (!CONTENT_STATS || !CONTENT_STATS.tutorial || !CONTENT_STATS.judge || !CONTENT_STATS.reading) {
  err('CONTENT_STATS 結構不完整');
} else {
  const manifestChapterIds = Array.from(CONTENT_STATS.tutorial.chapterIds || []);
  if (CONTENT_STATS.tutorial.total !== CHAPTERS.length || JSON.stringify(manifestChapterIds) !== JSON.stringify(ids)) {
    err(`CONTENT_STATS.tutorial 漂移：manifest ${CONTENT_STATS.tutorial.total} 章，實際 ${CHAPTERS.length} 章`);
  } else ok(`CONTENT_STATS.tutorial：${CHAPTERS.length} 章`);
  if (CONTENT_STATS.judge.total !== PROBLEMS.length) err(`CONTENT_STATS.judge 漂移：manifest ${CONTENT_STATS.judge.total} 題，實際 ${PROBLEMS.length} 題`);
  else ok(`CONTENT_STATS.judge：${PROBLEMS.length} 題`);
  if (CONTENT_STATS.reading.total !== READING_QUESTIONS.length) err(`CONTENT_STATS.reading 漂移：manifest ${CONTENT_STATS.reading.total} 題，實際 ${READING_QUESTIONS.length} 題`);
  else ok(`CONTENT_STATS.reading：${READING_QUESTIONS.length} 題`);
}

// 已知佔位測資：以 sample 內容 hash + 題目清單鎖定既有債；任何新群組/新成員立即擋 CI。
console.log('— 題庫測資資料債 —');
const byS = new Map();
for (const p of PROBLEMS) {
  const k = JSON.stringify(p.samples);
  if (!byS.has(k)) byS.set(k, []);
  byS.get(k).push(p.id);
}
const duplicateGroups = new Map();
for (const [samples, groupIds] of byS) {
  if (groupIds.length < 2) continue;
  const hash = crypto.createHash('sha256').update(samples).digest('hex').slice(0, 16);
  duplicateGroups.set(hash, groupIds.slice().sort());
}
const dupProblems = [...duplicateGroups.values()].reduce((a, groupIds) => a + groupIds.length - 1, 0);
const debtCeiling = Number(BASELINE.duplicateSampleDebt) || 0;
if (dupProblems > debtCeiling) err(`共用測資債由 baseline ${debtCeiling} 增加為 ${dupProblems}`);
for (const [hash, groupIds] of duplicateGroups) {
  const allowedIds = new Set(BASELINE.duplicateSampleGroups && BASELINE.duplicateSampleGroups[hash] || []);
  const newIds = groupIds.filter(id => !allowedIds.has(id));
  if (newIds.length) err(`新增共用測資群組/成員 ${hash}：${newIds.join(', ')}`);
}
if (dupProblems) warn(`共用測資資料債 ${dupProblems}（上限 ${debtCeiling}；${duplicateGroups.size} 群，涵蓋 ${dupProblems + duplicateGroups.size} 題）；不得新增，修復後縮減 baseline`);
else ok('無共用測資的題目');

console.log(`\n結果：${errors} 錯誤，${warnings} 警告`);
process.exit(errors ? 1 : 0);

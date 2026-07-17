// 題目匯入驗證腳本：解析指定文字檔的所有「判讀題」，
// 明確同意後才會以本機 gcc 編譯＋執行 C 程式，取得 stdout 與標示答案比對。
// 注意：這不是安全沙箱。只可對你已審查、完全信任的輸入使用。
// 分類：correct（可同步）/ wrong（答案錯）/ review（UB或無法驗證）/ incomplete（詳解不全或自我修正）
const fs = require('fs');
const path = require('path');
const os = require('os');
const { spawnSync } = require('child_process');

const argv = process.argv.slice(2);
function valueOf(flag) { const i = argv.indexOf(flag); return i >= 0 ? argv[i + 1] : ''; }
const SRC = valueOf('--input');
const OUTPUT = valueOf('--output') || path.join(os.tmpdir(), 'apcs-validate5-results.json');
const COMPILER = valueOf('--compiler') || 'gcc';
if (!SRC || !argv.includes('--execute-local-c')) {
  console.error('用法：node scripts/validate-batch5.js --input <可信文字檔> --execute-local-c [--output <results.json>] [--compiler gcc]');
  console.error('安全提醒：輸入中的 C 程式會在本機執行；請先人工審查，勿對不可信內容使用。');
  process.exit(2);
}
if (!fs.existsSync(SRC) || !fs.statSync(SRC).isFile()) {
  console.error('找不到輸入檔：' + SRC);
  process.exit(2);
}
console.warn('⚠️ 將在本機執行已解析的 C 程式：' + path.resolve(SRC));
const text = fs.readFileSync(SRC, 'utf-8').replace(/\r/g, '');
const lines = text.split('\n');

// ---- 解析成題塊 ----
const MARK = /^＜(判讀題|實作題)＞\s*([A-Za-z]+\d+)\.\s*(.*)$/;
const HEAD = /^(={6,}|【|（以下|（因篇幅|（註|（為避免篇幅|下一批次|請回覆|第\s*\d+\s*批次)/;

const blocks = [];
let cur = null;
for (const raw of lines) {
  const m = raw.match(MARK);
  if (m) {
    if (cur) blocks.push(cur);
    cur = { type: m[1], id: m[2], firstLine: m[3], body: [] };
  } else if (cur) {
    // 遇到章節分隔／填充說明行時，結束目前題塊，避免填充文字汙染詳解判讀
    if (HEAD.test(raw.trim())) { blocks.push(cur); cur = null; continue; }
    cur.body.push(raw);
  }
}
if (cur) blocks.push(cur);

// 自我修正 / 不完整 標記詞
const DOUBT = ['請重新計算','重新計算','重新數','不對','讓我們重算','此處保留','示範','題目可能有誤',
  '為避免爭議','較複雜，初級改','改為簡單','改為標準','修正此題','修正題目','實際輸出為',
  '請重新','選項無此','選項只有','錯誤，請','此題改為','重複','簡化列出','實際內容包括',
  '將以類似格式','另行提供','此處因篇幅','將在下一批次','此處簡化'];

function hasDoubt(s) { return DOUBT.some(d => s.includes(d)); }

// 解析判讀題：code / options / answerIdx / explain
function parseJudge(b) {
  const all = b.body;
  // 找選項行（含 (A) ... (B) ... (C) ... (D)）
  let optIdx = all.findIndex(l => /\(A\)/.test(l) && /\(B\)/.test(l) && /\(C\)/.test(l) && /\(D\)/.test(l));
  // 找「請問輸出」或題幹結尾，code 介於 firstLine 之後到該行
  let qIdx = all.findIndex(l => /請問|輸出結果|何者|下列敘述/.test(l));
  let codeEnd = qIdx === -1 ? optIdx : qIdx;
  if (optIdx === -1) return { incomplete: true, reason: '缺選項' };
  if (codeEnd === -1) codeEnd = optIdx;
  // code：firstLine 之後到 codeEnd（過濾掉「（需 #include ...）」「（此題...）」說明行）
  let codeLines = all.slice(0, codeEnd)
    .filter(l => !/^（/.test(l.trim()))
    .map(l => l.replace(/\s+$/, ''));
  while (codeLines.length && !codeLines[0].trim()) codeLines.shift();
  while (codeLines.length && !codeLines[codeLines.length-1].trim()) codeLines.pop();
  const code = codeLines.join('\n');

  const optLine = all[optIdx];
  const om = optLine.match(/\(A\)\s*(.*?)\s*\(B\)\s*(.*?)\s*\(C\)\s*(.*?)\s*\(D\)\s*(.*)$/);
  if (!om) return { incomplete: true, reason: '選項解析失敗', code };
  const options = [om[1], om[2], om[3], om[4]].map(s => s.replace(/\s+/g, ' ').trim());

  // 答案行
  const ansIdx = all.findIndex((l,i) => i > optIdx && /正解[：:]/.test(l));
  if (ansIdx === -1) return { incomplete: true, reason: '缺正解', code, options };
  const ansLine = all[ansIdx];
  const am = ansLine.match(/正解[：:]\s*\(?([ABCD])\)?/);
  if (!am) return { incomplete: true, reason: '正解無字母', code, options };
  const answer = 'ABCD'.indexOf(am[1]);

  // explain = 正解行括號 + 後續解析 + 整塊文字（供 doubt 偵測）
  const tail = all.slice(ansIdx).join(' ');
  let explain = '';
  const inline = ansLine.match(/正解[：:]\s*\(?[ABCD]\)?\s*[（(]([^）)]*)[）)]/);
  if (inline) explain = inline[1].trim();
  for (let k = ansIdx+1; k < all.length; k++) {
    const mm = all[k].match(/^\s*(解析|說明|更正解析)[：:](.*)/);
    if (mm) explain += (explain?' ':'') + mm[2].trim();
  }
  return { code, options, answer, answerLetter: am[1], explain, fullTail: tail, ansLine };
}

// ---- 編譯＋執行 ----
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'judge-'));
function runC(code) {
  let src = code;
  if (!/#include\s*<string.h>/.test(src) && /strlen|strcpy|strcat|strcmp|strncpy/.test(src))
    src = '#include <string.h>\n' + src;
  if (!/#include\s*<stdlib.h>/.test(src) && /malloc|calloc|free|realloc|atoi|qsort/.test(src))
    src = '#include <stdlib.h>\n' + src;
  const cf = path.join(tmp, 'a.c'), bf = path.join(tmp, 'a.out');
  fs.writeFileSync(cf, src);
  try {
    const compiled = spawnSync(COMPILER, ['-w', '-std=c11', cf, '-o', bf], { timeout: 15000, encoding: 'utf-8' });
    if (compiled.error || compiled.status !== 0) throw compiled.error || new Error(compiled.stderr || 'compile failed');
  } catch (e) {
    return { compileError: true };
  }
  const ran = spawnSync(bf, [], { timeout: 3000, encoding: 'utf-8', maxBuffer: 1024 * 1024 });
  if (ran.error && ran.error.code === 'ETIMEDOUT') return { timeout: true };
  if (ran.signal === 'SIGTERM') return { timeout: true };
  if (ran.error || ran.status !== 0) return { runError: true, output: ran.stdout || '' };
  return { output: ran.stdout || '' };
}

function norm(s){ return String(s).replace(/\s+/g,' ').trim(); }

const results = { correct: [], wrong: [], review: [], incomplete: [], impl: [] };

for (const b of blocks) {
  if (b.type === '實作題') { results.impl.push(b.id); continue; }
  const p = parseJudge(b);
  const ctx = { id: b.id, topic: b.firstLine };
  if (p.incomplete) { results.incomplete.push({ ...ctx, reason: p.reason }); continue; }
  Object.assign(ctx, p);

  // 自我修正 / 詳解不全
  if (hasDoubt(p.fullTail) || hasDoubt(b.body.join(' '))) {
    results.incomplete.push({ ...ctx, reason: '含自我修正/不確定敘述' });
    continue;
  }
  if (!p.explain || p.explain.length < 2) {
    // 詳解空白：仍嘗試驗證，但歸類 incomplete
  }

  // UB / 無法以單次執行驗證
  const ubWords = ['垃圾值','未定義','不確定','亂碼'];
  const optHasUB = p.options.some(o => ubWords.some(w => o.includes(w)));
  const ansHasUB = ubWords.some(w => p.options[p.answer].includes(w));

  const r = runC(p.code);
  let verdict, actual;
  if (r.compileError) {
    actual = '（編譯錯誤）';
    const ci = p.options.findIndex(o => /編譯錯誤/.test(o));
    if (ci === p.answer) verdict = 'correct';
    else if (ci !== -1) verdict = 'wrong';
    else verdict = 'review'; // 編譯失敗但無此選項，可能需 include 或本機差異
  } else if (r.timeout) {
    actual = '（逾時/可能無限迴圈）';
    const ii = p.options.findIndex(o => /無限|無窮/.test(o));
    verdict = (ii === p.answer) ? 'correct' : (ii !== -1 ? 'wrong' : 'review');
  } else {
    actual = r.output;
    const na = norm(actual);
    // 找出與實際輸出相符的選項
    const matchIdx = p.options.findIndex(o => norm(o) === na);
    if (ansHasUB) {
      verdict = 'review'; // 答案本身是 UB，輸出不具代表性
    } else if (matchIdx === -1) {
      // 輸出對不到任何選項；若答案選項是 UB 類別已處理，否則 review
      verdict = optHasUB ? 'review' : 'review';
    } else if (matchIdx === p.answer) {
      verdict = 'correct';
    } else {
      verdict = 'wrong';
    }
  }

  ctx.actual = actual;
  // 詳解不全也要併入回報（即使答案對）
  const explainWeak = (!p.explain || p.explain.length < 2);
  if (verdict === 'correct') {
    if (explainWeak) results.incomplete.push({ ...ctx, reason: '答案正確但無詳解' });
    else results.correct.push(ctx);
  } else if (verdict === 'wrong') {
    results.wrong.push(ctx);
  } else {
    results.review.push(ctx);
  }
}

console.log('總題塊', blocks.length);
console.log('判讀-正確可同步', results.correct.length);
console.log('判讀-答案錯誤', results.wrong.length);
console.log('判讀-需人工複核(UB/對不到選項/編譯異常)', results.review.length);
console.log('判讀-詳解不全/自我修正', results.incomplete.length);
console.log('實作題(非選擇題,不入判讀題庫)', results.impl.length);

fs.writeFileSync(OUTPUT, JSON.stringify(results, null, 1));
fs.rmSync(tmp, { recursive: true, force: true });
console.log('已輸出 ' + path.resolve(OUTPUT));

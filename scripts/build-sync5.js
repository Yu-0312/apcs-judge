// 依指定的驗證結果產生「可同步」判讀題與審查報告。
// 預設只預覽；必須加 --write 才會修改題庫，避免重複或誤匯入。
const fs = require('fs');
const path = require('path');
const os = require('os');

const argv = process.argv.slice(2);
function valueOf(flag) { const i = argv.indexOf(flag); return i >= 0 ? argv[i + 1] : ''; }
const RESULTS = valueOf('--results');
const BANK = valueOf('--bank') || path.join(__dirname, '../data/reading-questions.js');
const REPORT = valueOf('--report') || path.join(os.tmpdir(), 'apcs-question-review.txt');
const WRITE = argv.includes('--write');
if (!RESULTS || !fs.existsSync(RESULTS)) {
  console.error('用法：node scripts/build-sync5.js --results <validate-results.json> [--bank <reading-questions.js>] [--report <report.txt>] [--write]');
  process.exit(2);
}
const r = JSON.parse(fs.readFileSync(RESULTS, 'utf-8'));
for (const key of ['correct','wrong','review','incomplete','impl']) {
  if (!Array.isArray(r[key])) throw new Error('驗證結果缺少陣列：' + key);
}

// 章節 → 題型(cat) / 主題(topic)
const SEC = {
  L:  { cat: '迴圈',     topic: '迴圈判讀' },
  S:  { cat: '陣列字串', topic: '陣列字串判讀' },
  R:  { cat: '函式遞迴', topic: '函式與遞迴判讀' },
  P:  { cat: '指標記憶體', topic: '指標與記憶體判讀' },
  T:  { cat: '結構類別', topic: '結構判讀' },
  ST: { cat: '結構類別', topic: '結構判讀' },
  A:  { cat: '演算法',   topic: '演算法判讀' },
  AL: { cat: '演算法',   topic: '演算法判讀' },
};
function sec(id) {
  const pre = id.match(/^[A-Za-z]+/)[0];
  return SEC[pre] || { cat: '基礎', topic: '程式判讀' };
}

function genExplain(e) {
  if (e.explain && e.explain.length >= 2) return e.explain;
  const a = (e.actual || '').trim();
  const opt = e.options[e.answer];
  if (a === '（編譯錯誤）') return `此程式無法通過編譯，故正解為 (${e.answerLetter}) ${opt}。`;
  if (a.startsWith('（逾時')) return `此程式不會正常結束（無限迴圈），故正解為 (${e.answerLetter}) ${opt}。`;
  return `程式執行後輸出「${a}」，故正解為 (${e.answerLetter}) ${opt}。`;
}

const syncable = [
  ...r.correct,
  ...r.incomplete.filter(x => x.reason === '答案正確但無詳解'),
];
// 依原始題號排序，輸出穩定
syncable.sort((a, b) => a.id.localeCompare(b.id, 'en', { numeric: true }));

const objs = syncable.map(e => {
  const s = sec(e.id);
  return {
    cat: s.cat,
    id: 'c_init_' + e.id,
    exam: 'C 初級判讀',
    num: e.id,
    topic: s.topic,
    lang: 'c',
    level: '初級',
    code: e.code,
    q: '這段程式碼的執行結果為何？',
    options: e.options,
    answer: e.answer,
    explain: genExplain(e),
  };
});

// 準備題庫變更：在結尾 `];` 前插入，並先阻止重複 id。
let bank = fs.readFileSync(BANK, 'utf-8');
const duplicates = objs.filter(o => bank.includes('id:' + JSON.stringify(o.id)) || bank.includes('"id":' + JSON.stringify(o.id)));
if (duplicates.length) throw new Error('題庫已存在相同 id，停止匯入：' + duplicates.map(o => o.id).join(', '));
const insertion = objs.map(o => ' ' + JSON.stringify(o)).join(',\n');
const marker = /\n\];\s*$/;
if (!marker.test(bank)) throw new Error('找不到題庫結尾 `];`');
bank = bank.replace(marker, ',\n' + insertion + '\n];\n');
if (WRITE) {
  fs.writeFileSync(BANK, bank);
  console.log('已同步', objs.length, '題至', path.resolve(BANK));
} else {
  console.log('預覽：可同步', objs.length, '題；尚未修改題庫（確認後加 --write）');
}

// ---- 產生審查報告 ----
function block(e, showCorrect) {
  const L = [];
  L.push(`【${e.id}】`);
  if (e.code) L.push(e.code);
  if (e.options) L.push(`選項：(A) ${e.options[0]}  (B) ${e.options[1]}  (C) ${e.options[2]}  (D) ${e.options[3]}`);
  if (e.answerLetter) L.push(`原檔標示答案：(${e.answerLetter}) ${e.options[e.answer]}`);
  if (showCorrect && e.actual != null) L.push(`實際編譯執行輸出：${JSON.stringify(e.actual)}  ← 與標示答案不符`);
  return L.join('\n');
}

const out = [];
out.push('============================================================');
out.push('題目審查報告（未命名文件 (5).txt）');
out.push('產生時間：' + new Date().toISOString().slice(0, 10));
out.push('============================================================');
out.push('');
out.push('驗證方式：每一道「判讀題」皆以 gcc 實際編譯並執行該段 C 程式，');
out.push('          取得真實輸出後與原檔標示答案逐題比對。');
out.push('');
out.push(`✅ 已同步入題庫（答案經執行驗證正確）：${objs.length} 題`);
out.push(`⛔ 攔下未同步：${r.wrong.length + r.review.length + r.incomplete.length} 題（詳列於下）`);
out.push(`📝 實作題（非選擇題，未納入判讀題庫）：${r.impl.length} 題`);
out.push('');

out.push('────────────────────────────────────────────────────────');
out.push(`一、答案錯誤（執行結果 ≠ 標示答案）：${r.wrong.length} 題`);
out.push('    這些題目程式碼可正常執行，但原檔標的正確選項與真實輸出不符。');
out.push('────────────────────────────────────────────────────────');
for (const e of r.wrong) { out.push(''); out.push(block(e, true)); }

out.push('');
out.push('────────────────────────────────────────────────────────');
out.push(`二、未定義行為／無法以單次執行驗證：${r.review.length} 題`);
out.push('    涉及陣列越界、未初始化變數、緩衝區溢位、指標位址等，');
out.push('    輸出不具確定性，不適合作為固定答案的選擇題。');
out.push('────────────────────────────────────────────────────────');
for (const e of r.review) {
  out.push('');
  out.push(`【${e.id}】`);
  if (e.code) out.push(e.code);
  if (e.options) out.push(`選項：(A) ${e.options[0]}  (B) ${e.options[1]}  (C) ${e.options[2]}  (D) ${e.options[3]}`);
  out.push(`原檔標示答案：(${e.answerLetter}) ${e.options[e.answer]}`);
  out.push(`本機實際輸出：${JSON.stringify(e.actual)}（會因環境而異 / 為未定義行為）`);
}

const doubt = r.incomplete.filter(x => x.reason.includes('自我修正'));
out.push('');
out.push('────────────────────────────────────────────────────────');
out.push(`三、詳解自我矛盾／作者中途修正（答案不可靠）：${doubt.length} 題`);
out.push('    原檔詳解中出現「不對、重新計算、選項無此、為避免爭議」等字樣，');
out.push('    或正解字母與後文推導互相矛盾。');
out.push('────────────────────────────────────────────────────────');
for (const e of doubt) {
  out.push('');
  out.push(`【${e.id}】`);
  if (e.code) out.push(e.code);
  if (e.options) out.push(`選項：(A) ${e.options[0]}  (B) ${e.options[1]}  (C) ${e.options[2]}  (D) ${e.options[3]}`);
  out.push(`原檔正解行：${e.ansLine}`);
  if (e.actual != null) out.push(`實際編譯執行輸出：${JSON.stringify(e.actual)}`);
}

const missing = r.incomplete.filter(x => x.reason === '缺選項');
out.push('');
out.push('────────────────────────────────────────────────────────');
out.push(`四、題目殘缺／作者已放棄（無完整選項）：${missing.length} 題`);
out.push('────────────────────────────────────────────────────────');
for (const e of missing) {
  out.push('');
  out.push(`【${e.id}】原檔此題被標註「改為簡單／初級避免」等，未提供完整 (A)~(D) 選項，無法收錄。`);
}

out.push('');
out.push('────────────────────────────────────────────────────────');
out.push(`五、實作題（${r.impl.length} 題）說明`);
out.push('────────────────────────────────────────────────────────');
out.push('判讀題庫為「閱讀程式碼選出輸出」的單選題格式；實作題為開放式');
out.push('程式撰寫題（如「輸入 n 輸出階乘」），沒有固定選項可供作答，且原檔');
out.push('未附測試資料與標準解，無法併入判讀題庫，故全數未同步。');
out.push('題號清單：');
out.push(r.impl.join('、'));
out.push('');
out.push('============================================================');
out.push('報告結束');
out.push('============================================================');

fs.writeFileSync(REPORT, out.join('\n'), 'utf-8');
console.log('已輸出審查報告：', path.resolve(REPORT));
console.log('攔下統計：答案錯誤', r.wrong.length, '/ UB', r.review.length, '/ 自我修正', doubt.length, '/ 殘缺', missing.length);

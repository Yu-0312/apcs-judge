// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: deep-purple; icon-glyph: calendar-day;
/* ══════════════════════════════════════════════════════════════════
 *  APCS 每日一題  —  iPhone 主畫面 Widget（Scriptable）
 *  ─ 題庫：抓 GitHub 上的 data/reading-questions.js（READING_QUESTIONS）
 *  ─ 選題：用與網站相同的「當天日期 FNV-1a 雜湊」→ widget 跟網站同一題
 *  ─ 作答：widget 上每個選項可點；點下去會短暫打開 Scriptable、記錄答案、
 *          顯示對錯與解析，widget 隨後更新。答題紀錄與錯題存在手機本地。
 *  ─ 隔天自動換題；底部顯示 🔥 連續作答天數。
 *
 *  安裝：把整個檔案貼進 Scriptable 新腳本，命名為「APCS每日一題」
 *       （要和下方 SCRIPT_NAME 一致，作答連結才對得上）。
 * ════════════════════════════════════════════════════════════════ */

// ===== 設定 =====
const SCRIPT_NAME = "APCS每日一題";          // ← 必須和你在 Scriptable 幫這支腳本取的名字一致
// 想固定只出某一種語言的題目，把 LANG 改成 "c" / "cpp" / "python" / "js"；"all" = 四語言混合。
// 也可以「不改程式」→ 在主畫面長按 widget → 編輯小工具 → 參數(Parameter) 填 c / cpp / python / js / all，
// 該值會覆蓋這裡的 LANG。放多個 widget、各自填不同語言，就能一次追四種語言（各自獨立的連續天數）。
const LANG = "all";
const SOURCES = [
  "https://raw.githubusercontent.com/Yu-0312/apcs-judge/main/data/reading-questions.js",
  "https://yu-0312.github.io/apcs-judge/data/reading-questions.js"
];
const CACHE_HOURS = 12;                        // 題庫快取有效時數（過期就重抓，抓不到用舊快取）

// 語言正規化：認得的回傳標準值，空字串／"all" → "all"，不認得 → null
function normLang(v){
  v = (v==null?"":String(v)).trim().toLowerCase();
  if (v==="" || v==="all") return "all";
  if (v==="c") return "c";
  if (v==="cpp" || v==="c++") return "cpp";
  if (v==="py" || v==="python") return "python";
  if (v==="js" || v==="javascript") return "js";
  return null;
}
// 目前生效的語言：答題回呼(?lang=) 最優先 → widget 參數 → 設定檔 LANG → 保底 "all"
function activeLang(){
  const q = (typeof args!=="undefined" && args.queryParameters) ? args.queryParameters.lang : null;
  if (q!=null && String(q).trim()!==""){ const l=normLang(q); if (l) return l; }
  const p = (typeof args!=="undefined") ? args.widgetParameter : null;
  if (p!=null && String(p).trim()!==""){ const l=normLang(p); if (l) return l; }
  return normLang(LANG) || "all";
}
function langLabelFull(l){ return ({all:"四語言",c:"C",cpp:"C++",python:"Python",js:"JavaScript"})[l] || "四語言"; }

// ===== 本地檔案 =====
const fm = FileManager.local();
const DIR = fm.joinPath(fm.documentsDirectory(), "apcs_daily");
if (!fm.fileExists(DIR)) fm.createDirectory(DIR, true);
const F_BANK  = fm.joinPath(DIR, "bank.json");     // 題庫快取
const F_STATE = fm.joinPath(DIR, "state.json");    // { "YYYY-MM-DD": {qid, chosen, correct} }
const F_MISS  = fm.joinPath(DIR, "mistakes.json"); // 本地錯題本

// ===== 小工具 =====
function pad(n){ return String(n).padStart(2,"0"); }
function todayKey(d){ d=d||new Date(); return d.getFullYear()+"-"+pad(d.getMonth()+1)+"-"+pad(d.getDate()); }
function hashStr(s){                                   // FNV-1a，與網站 daily-question.js 相同
  let h = 2166136261 >>> 0;
  for (let i=0;i<s.length;i++){ h ^= s.charCodeAt(i); h = Math.imul(h,16777619) >>> 0; }
  return h >>> 0;
}
function readJSON(p, fallback){ try{ return JSON.parse(fm.readString(p)); }catch(e){ return fallback; } }
function writeJSON(p, obj){ try{ fm.writeString(p, JSON.stringify(obj)); }catch(e){} }

// 狀態改為「依語言分組」：{ all:{date:{...}}, c:{...}, cpp:{...}, ... }
// 讀取時自動把舊版（直接以日期為鍵的扁平格式）併入 "all"，不動到既有連續天數。
function loadStore(){
  let o = readJSON(F_STATE, {});
  if (!o || typeof o!=="object") o = {};
  let legacy = null; const out = {};
  for (const k in o){
    if (/^\d{4}-\d{2}-\d{2}$/.test(k)){ (legacy = legacy||{})[k] = o[k]; }   // 舊格式：日期鍵
    else { out[k] = o[k]; }                                                  // 新格式：語言鍵
  }
  if (legacy) out.all = Object.assign({}, legacy, out.all||{});
  return out;
}
function saveStore(o){ writeJSON(F_STATE, o); }
function langState(lang){ const s = loadStore(); return s[lang] || {}; }
function streak(lang){
  const done = langState(lang); let n=0; let d=new Date();
  while (done[todayKey(d)]){ n++; d.setDate(d.getDate()-1); }
  return n;
}

// ===== 題庫（抓取 + 快取 + 解析）=====
async function fetchBank(){
  for (const url of SOURCES){
    try{
      const text = await new Request(url).loadString();
      const at = text.indexOf("READING_QUESTIONS");
      const start = text.indexOf("[", at);
      const end = text.lastIndexOf("]");
      if (start<0 || end<0 || end<=start) continue;
      const arr = JSON.parse(text.slice(start, end+1));
      if (Array.isArray(arr) && arr.length){
        writeJSON(F_BANK, { t: Date.now(), q: arr });
        return arr;
      }
    }catch(e){ /* 換下一個來源 */ }
  }
  return null;
}
async function getBank(){
  const cached = readJSON(F_BANK, null);
  const fresh = cached && (Date.now() - (cached.t||0) < CACHE_HOURS*3600*1000);
  if (fresh && Array.isArray(cached.q) && cached.q.length) return cached.q;
  const arr = await fetchBank();
  if (arr) return arr;
  if (cached && Array.isArray(cached.q) && cached.q.length) return cached.q; // 離線用舊快取
  return null;
}
// 依語言篩出題池；"all" 保留全部（js 題 lang==="js"，共用觀念題 lang===""）
function poolFor(bank, lang){
  if (!bank || !bank.length) return [];
  if (lang === "all") return bank;
  return bank.filter(x => (x.lang || "") === lang);
}
// 依日期挑題（與網站一致）：優先用當天已鎖定 qid，否則以「日期＋語言」雜湊，
// 讓不同語言各出各的題、彼此不混。
function pickToday(bank, lang){
  const pool = poolFor(bank, lang);
  if (!pool.length) return null;
  const key = todayKey();
  const done = langState(lang)[key];
  if (done && done.qid){
    const hit = pool.find(x => x.id === done.qid) || bank.find(x => x.id === done.qid);
    if (hit) return hit;
  }
  return pool[hashStr(key + "@" + lang) % pool.length];
}

// ===== 記錄作答 =====
// 依「語言」分組寫入，各語言的連續天數彼此獨立、不互相覆蓋。
function commit(q, chosen, lang){
  const store = loadStore();
  const bucket = store[lang] || (store[lang] = {});
  const key = todayKey();
  if (bucket[key]) return bucket[key];             // 今天（該語言）已作答，不重複計
  const correct = chosen === q.answer;
  bucket[key] = { qid:q.id, chosen, correct };
  saveStore(store);
  if (!correct) recordMistake(q, chosen);
  return bucket[key];
}
function recordMistake(q, chosen){
  const list = readJSON(F_MISS, []);
  list.unshift({
    ts: Date.now(), date: todayKey(),
    qid: q.id, num: q.num||q.id, lang: q.lang||"", level: q.level||"", topic: q.topic||"",
    q: q.q, code: q.code||"", options: q.options||[], answer: q.answer, chosen, explain: q.explain||""
  });
  writeJSON(F_MISS, list.slice(0, 500));
}

// ===== 顏色 / 樣式 =====
const C = {
  bg1: new Color("#4f46e5"), bg2: new Color("#7c3aed"),
  card: new Color("#ffffff"), ink: new Color("#0f172a"), sub: new Color("#64748b"),
  optBg: new Color("#f5f3ff"), optBorder: new Color("#e2e8f0"),
  ok: new Color("#22c55e"), okBg: new Color("#dcfce7"),
  no: new Color("#ef4444"), noBg: new Color("#fee2e2"),
  key: new Color("#4338ca"), keyBg: new Color("#eef2ff"), white: new Color("#ffffff")
};
function optURL(i, lang){
  return "scriptable:///run?scriptName=" + encodeURIComponent(SCRIPT_NAME) +
         "&answer=" + i + "&day=" + todayKey() +
         "&lang=" + encodeURIComponent(lang || "all");
}
function trunc(s, n){ s = String(s||""); return s.length>n ? s.slice(0,n-1)+"…" : s; }

// ===== 建立 Widget =====
async function buildWidget(){
  const bank = await getBank();
  const w = new ListWidget();
  const grad = new LinearGradient();
  grad.colors = [new Color("#f8f7ff"), new Color("#eef2ff")];
  grad.locations = [0,1]; w.backgroundGradient = grad;
  w.setPadding(14,14,14,12);

  // 隔天自動換題
  const tomorrow = new Date(); tomorrow.setDate(tomorrow.getDate()+1); tomorrow.setHours(0,5,0,0);
  w.refreshAfterDate = tomorrow;

  const size = config.widgetFamily || "medium";
  const lang = activeLang();

  if (!bank){
    const t = w.addText("📅 每日一題");
    t.font = Font.boldSystemFont(15); t.textColor = C.key;
    w.addSpacer(6);
    const e = w.addText("目前抓不到題庫，連上網路後再試一次。");
    e.font = Font.systemFont(12); e.textColor = C.sub;
    return w;
  }

  const q = pickToday(bank, lang);
  if (!q){   // 此語言目前題庫為空
    const t = w.addText("📅 每日一題");
    t.font = Font.boldSystemFont(15); t.textColor = C.key;
    w.addSpacer(6);
    const e = w.addText(langLabelFull(lang)+"題庫目前沒有題目，換個語言或稍後再試。");
    e.font = Font.systemFont(12); e.textColor = C.sub;
    return w;
  }
  const done = langState(lang)[todayKey()];

  // 標題列
  const head = w.addStack(); head.centerAlignContent();
  const ht = head.addText("📅 每日一題");
  ht.font = Font.boldSystemFont(size==="small"?13:15); ht.textColor = C.key;
  head.addSpacer();
  const meta = head.addText([q.lang?langLabel(q.lang):"判讀", q.level||""].filter(Boolean).join("·"));
  meta.font = Font.mediumSystemFont(11); meta.textColor = C.sub;
  w.addSpacer(size==="small"?5:7);

  // 小尺寸：只顯示提示，點開作答
  if (size === "small"){
    const st = w.addText(done ? (done.correct?"✅ 今日已答對":"❌ 今日已作答") : "今天還沒作答");
    st.font = Font.boldSystemFont(13);
    st.textColor = done ? (done.correct?C.ok:C.no) : C.ink;
    w.addSpacer(4);
    const hint = w.addText(done ? "點我看解析" : "點我作答");
    hint.font = Font.systemFont(11); hint.textColor = C.sub;
    w.addSpacer();
    const fk = w.addText("🔥 連續 "+streak(lang)+" 天");
    fk.font = Font.mediumSystemFont(11); fk.textColor = C.bg2;
    w.url = optURL(-1, lang);   // 打開 App 看完整題目
    return w;
  }

  // 題幹
  const stemMax = size==="large"?160:70;
  const stem = w.addText(trunc(q.q, stemMax));
  stem.font = Font.semiboldSystemFont(size==="large"?14:12.5); stem.textColor = C.ink;
  w.addSpacer(size==="large"?9:7);

  // 選項
  const optFont = Font.systemFont(size==="large"?13:11.5);
  const optMax = size==="large"?46:26;
  (q.options||[]).forEach((opt, i) => {
    const row = w.addStack(); row.centerAlignContent();
    row.setPadding(size==="large"?7:5, 8, size==="large"?7:5, 8);
    row.cornerRadius = 9; row.spacing = 7;

    // 已作答 → 上色；未作答 → 淡色可點
    let bg = C.optBg, kbg = C.keyBg, kfg = C.key, tint = C.ink;
    if (done){
      if (i === q.answer){ bg=C.okBg; kbg=C.ok; kfg=C.white; }
      else if (i === done.chosen){ bg=C.noBg; kbg=C.no; kfg=C.white; }
      else { bg = new Color("#ffffff"); }
    }
    row.backgroundColor = bg;

    const kb = row.addStack(); kb.size=new Size(20,20); kb.cornerRadius=10; kb.backgroundColor=kbg;
    kb.centerAlignContent();
    const kt = kb.addText("ABCD".charAt(i)); kt.font=Font.boldSystemFont(11); kt.textColor=kfg;
    kt.centerAlignText();
    const ot = row.addText(trunc(opt, optMax)); ot.font=optFont; ot.textColor=tint; ot.lineLimit=1;

    if (!done) row.url = optURL(i, lang);   // 未作答時整列可點作答
    w.addSpacer(size==="large"?6:4);
  });

  // 底部：結果 / streak
  w.addSpacer(2);
  const foot = w.addStack(); foot.centerAlignContent();
  if (done){
    const r = foot.addText(done.correct ? "✅ 答對了" : ("❌ 正解 "+"ABCD".charAt(q.answer)));
    r.font = Font.boldSystemFont(12); r.textColor = done.correct?C.ok:C.no;
  } else {
    const r = foot.addText("點選項作答");
    r.font = Font.mediumSystemFont(12); r.textColor = C.sub;
  }
  foot.addSpacer();
  const sk = foot.addText("🔥 "+streak(lang)+" 天");
  sk.font = Font.mediumSystemFont(12); sk.textColor = C.bg2;

  if (done) w.url = optURL(-1, lang);   // 已作答：點空白處看解析
  return w;
}

function langLabel(l){ return ({c:"C",cpp:"C++",python:"Python",js:"JavaScript"})[l] || (l||"判讀"); }

// ===== 作答後 / App 內：顯示題目與解析（WebView）=====
function esc(s){ return String(s==null?"":s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c])); }
async function presentQuestion(q, chosen, lang){
  lang = normLang(lang) || "all";
  const answered = (typeof chosen === "number" && chosen >= 0);
  const correct = answered && chosen === q.answer;
  let opts = "";
  (q.options||[]).forEach((opt,i)=>{
    let cls = "opt";
    if (answered){
      if (i===q.answer) cls+=" correct";
      else if (i===chosen) cls+=" wrong";
    }
    const tap = answered ? "" : ` onclick="location.href='scriptable:///run?scriptName=${encodeURIComponent(SCRIPT_NAME)}&answer=${i}&day=${todayKey()}&lang=${encodeURIComponent(lang)}'"`;
    opts += `<button class="${cls}"${tap}><span class="k">${"ABCD".charAt(i)}</span><span>${esc(opt)}</span></button>`;
  });
  const tags = [q.lang?langLabel(q.lang):"", q.level||"", q.topic||""].filter(Boolean)
    .map(t=>`<span class="tag">${esc(t)}</span>`).join("");
  let result = "";
  if (answered){
    result = `<div class="res ${correct?"ok":"no"}">${correct?"✅ 答對了！":"❌ 答錯了。"}正確答案 ${"ABCD".charAt(q.answer)}${correct?"":"，你選 "+"ABCD".charAt(chosen)}．</div>`;
    if (q.explain) result += `<div class="exp"><b>解析：</b>${esc(q.explain)}</div>`;
    result += `<div class="foot">🔥 連續作答 <b>${streak(lang)}</b> 天　·　明天再來一題</div>`;
  } else {
    result = `<div class="foot">點一個選項作答</div>`;
  }
  const html = `<!doctype html><meta name="viewport" content="width=device-width,initial-scale=1">
  <style>
    body{font:-apple-system-body;-webkit-text-size-adjust:100%;margin:0;padding:18px 16px 30px;background:#f6f5ff;color:#0f172a;}
    .h{font-weight:800;font-size:20px;color:#4338ca;margin:0 0 3px;}
    .d{font-size:12px;color:#64748b;margin-bottom:12px;}
    .tags{display:flex;gap:6px;flex-wrap:wrap;margin-bottom:12px;}
    .tag{font-size:12px;padding:3px 10px;border-radius:999px;background:#eef2ff;color:#4338ca;font-weight:600;}
    pre{background:#0f172a;color:#e2e8f0;border-radius:12px;padding:13px;font-size:13px;line-height:1.55;overflow-x:auto;white-space:pre;}
    .q{font-size:16px;font-weight:600;line-height:1.6;margin:6px 0 14px;white-space:pre-wrap;}
    .opt{display:flex;gap:10px;align-items:center;width:100%;text-align:left;padding:13px;margin:0 0 10px;border:1.5px solid #e2e8f0;border-radius:12px;background:#fff;font-size:16px;color:#0f172a;}
    .opt .k{flex:none;width:26px;height:26px;border-radius:50%;background:#eef2ff;color:#4338ca;font-weight:700;font-size:14px;display:flex;align-items:center;justify-content:center;}
    .opt.correct{border-color:#22c55e;background:#f0fdf4;} .opt.correct .k{background:#22c55e;color:#fff;}
    .opt.wrong{border-color:#ef4444;background:#fef2f2;} .opt.wrong .k{background:#ef4444;color:#fff;}
    .res{margin:14px 0 0;padding:12px 14px;border-radius:12px;font-weight:700;font-size:15px;}
    .res.ok{background:#f0fdf4;color:#166534;border:1px solid #bbf7d0;}
    .res.no{background:#fef2f2;color:#991b1b;border:1px solid #fecaca;}
    .exp{margin-top:12px;padding:13px 14px;background:#fff;border:1px solid #e2e8f0;border-radius:12px;font-size:15px;line-height:1.7;white-space:pre-wrap;}
    .exp b{color:#4338ca;}
    .foot{margin-top:16px;color:#64748b;font-size:13px;text-align:center;}
  </style>
  <div class="h">📅 每日一題</div>
  <div class="d">${todayKey()}｜APCS 程式判讀選擇題</div>
  <div class="tags">${tags}</div>
  ${q.code?`<pre>${esc(q.code)}</pre>`:""}
  <div class="q">${esc(q.q)}</div>
  ${opts}
  ${result}`;
  const wv = new WebView();
  await wv.loadHTML(html);
  await wv.present();
}

// ===== 進入點 =====
async function main(){
  if (config.runsInWidget){
    Script.setWidget(await buildWidget());
    Script.complete();
    return;
  }

  // 從 widget 點選項進來：記錄答案並顯示結果
  const a = args.queryParameters || {};
  const lang = activeLang();
  const bank = await getBank();
  if (!bank){
    const al = new Alert(); al.title="每日一題"; al.message="抓不到題庫，請確認網路後再試。";
    al.addAction("好"); await al.present(); Script.complete(); return;
  }
  const q = pickToday(bank, lang);
  if (!q){
    const al = new Alert(); al.title="每日一題";
    al.message = langLabelFull(lang)+"目前沒有題目，換個語言再試。";
    al.addAction("好"); await al.present(); Script.complete(); return;
  }

  if (a.answer !== undefined && a.answer !== null && a.answer !== ""){
    const chosen = parseInt(a.answer, 10);
    if (chosen >= 0){
      const rec = commit(q, chosen, lang);      // 若今天已答過，回傳原紀錄，不重複計
      await presentQuestion(q, rec.chosen, lang);
    } else {
      // answer=-1：只是打開看題目/解析
      const done = langState(lang)[todayKey()];
      await presentQuestion(q, done ? done.chosen : -2, lang);
    }
    Script.complete();
    return;
  }

  // 直接在 App 內打開（測試用）：已答顯示結果，未答可作答
  const done = langState(lang)[todayKey()];
  await presentQuestion(q, done ? done.chosen : -2, lang);
  Script.complete();
}

await main();

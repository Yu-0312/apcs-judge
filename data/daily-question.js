/* ══════════════════════════════════════════════════════════════════
 *  每日一題小工具（左下角浮動圓鈕 → 每日推薦一題程式判讀選擇題）
 *  ─ 題庫來源：data/reading-questions.js 的 READING_QUESTIONS（程式判讀選擇題）
 *  ─ 出題邏輯：依「當天日期」用種子雜湊選一題，全站使用者同一天看到同一題，
 *              隔天自動換題；作答結果記在 localStorage，同一天重開會顯示已作答狀態。
 *  ─ 錯題整合：答錯自動寫入統一錯題本（MistakeBook，與 reading.html 同款紀錄），
 *              可到「錯題本」頁面複習。
 *  ─ 純前端、單檔；只要在頁面底部加一行 <script src="data/daily-question.js"> 即可。
 *    需先於本檔之前載入 reading-questions.js（提供 READING_QUESTIONS）與
 *    mistake-book.js（提供 MistakeBook，選用；未載入時僅略過錯題整合）。
 * ════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';
  if (window.__apcsDailyWidgetLoaded) return;   // 避免重複載入
  window.__apcsDailyWidgetLoaded = true;

  var LS_DONE = 'apcs_daily_done_v1';   // { "YYYY-MM-DD": {qid, chosen, correct} }
  var SS_HIDDEN = 'dq_launcher_hidden'; // 本次瀏覽關掉圓鈕

  /* ═══ 小工具函式 ═══ */
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function pad(n) { return String(n).padStart(2, '0'); }
  function todayKey(d) {
    d = d || new Date();
    return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate());
  }
  // 由字串產生穩定的 32-bit 雜湊（FNV-1a 變體），用來把日期映射成題目索引
  function hashStr(s) {
    var h = 2166136261 >>> 0;
    for (var i = 0; i < s.length; i++) {
      h ^= s.charCodeAt(i);
      h = Math.imul(h, 16777619) >>> 0;
    }
    return h >>> 0;
  }

  function loadDone() {
    try { var o = JSON.parse(localStorage.getItem(LS_DONE)); return (o && typeof o === 'object') ? o : {}; }
    catch (e) { return {}; }
  }
  function saveDone(o) { try { localStorage.setItem(LS_DONE, JSON.stringify(o)); } catch (e) {} }

  // 連續作答天數（含今天，往回連續有紀錄的天數）
  function streak() {
    var done = loadDone(), n = 0, d = new Date();
    while (done[todayKey(d)]) { n++; d.setDate(d.getDate() - 1); }
    return n;
  }

  /* ═══ 選出今天的題目 ═══ */
  function bank() {
    return (typeof READING_QUESTIONS !== 'undefined' && Array.isArray(READING_QUESTIONS)) ? READING_QUESTIONS : [];
  }
  // 依日期挑題；優先用當天已鎖定的 qid（避免題庫排序變動導致換題），否則用日期雜湊
  function pickToday() {
    var b = bank();
    if (!b.length) return null;
    var key = todayKey();
    var done = loadDone()[key];
    if (done && done.qid) {
      for (var i = 0; i < b.length; i++) if (b[i].id === done.qid) return b[i];
    }
    return b[hashStr(key) % b.length];
  }

  /* ═══ 樣式 ═══ */
  function injectStyle() {
    if (document.getElementById('dq-style')) return;
    var st = document.createElement('style');
    st.id = 'dq-style';
    st.textContent =
      '#dq-launcher{position:fixed;left:22px;bottom:22px;z-index:2147482900;width:58px;height:58px;border-radius:50%;' +
      'border:none;cursor:pointer;background:linear-gradient(135deg,#4f46e5,#7c3aed);color:#fff;font-size:24px;' +
      'box-shadow:0 6px 18px rgba(79,70,229,.45);display:flex;align-items:center;justify-content:center;' +
      'transition:transform .15s,box-shadow .15s;}' +
      '#dq-launcher:hover{transform:translateY(-2px) scale(1.05);box-shadow:0 10px 26px rgba(79,70,229,.55);}' +
      '#dq-launcher .dq-dot{position:absolute;top:-2px;right:-2px;min-width:18px;height:18px;padding:0 4px;border-radius:9px;' +
      'background:#ef4444;color:#fff;font-size:11px;line-height:18px;font-weight:700;box-shadow:0 0 0 2px #fff;}' +
      '#dq-launcher .dq-x{position:absolute;top:-6px;left:-6px;width:20px;height:20px;border-radius:50%;background:#334155;color:#fff;' +
      'font-size:12px;line-height:20px;text-align:center;display:none;}' +
      '#dq-launcher:hover .dq-x{display:block;}' +
      '#dq-launcher .dq-x:hover{background:#ef4444;}' +
      '#dq-panel{position:fixed;left:22px;bottom:90px;z-index:2147482901;width:380px;max-width:calc(100vw - 24px);' +
      'max-height:calc(100vh - 120px);background:#fff;border:1px solid #e2e8f0;border-radius:16px;overflow:hidden;' +
      'box-shadow:0 18px 50px rgba(15,23,42,.28);display:none;flex-direction:column;font-family:inherit;color:#0f172a;}' +
      '#dq-panel.dq-open{display:flex;}' +
      '#dq-head{display:flex;align-items:center;gap:8px;padding:12px 14px;background:linear-gradient(135deg,#4f46e5,#7c3aed);color:#fff;}' +
      '#dq-head .dq-title{font-weight:700;font-size:15px;}' +
      '#dq-head .dq-sub{font-size:11.5px;opacity:.85;}' +
      '#dq-head .dq-close{margin-left:auto;background:rgba(255,255,255,.18);border:none;color:#fff;width:26px;height:26px;' +
      'border-radius:50%;cursor:pointer;font-size:15px;line-height:26px;}' +
      '#dq-head .dq-close:hover{background:rgba(255,255,255,.32);}' +
      '#dq-body{padding:13px 14px;overflow:auto;}' +
      '.dq-meta{display:flex;flex-wrap:wrap;gap:5px;margin-bottom:9px;}' +
      '.dq-tag{font-size:11px;padding:2px 8px;border-radius:999px;background:#eef2ff;color:#4338ca;font-weight:600;}' +
      '.dq-tag.lv{background:#fef3c7;color:#92400e;}' +
      '.dq-tag.cat{background:#dcfce7;color:#166534;}' +
      '.dq-code{background:#0f172a;color:#e2e8f0;border-radius:10px;padding:11px 12px;font-size:12.5px;line-height:1.55;' +
      "font-family:'SFMono-Regular',Consolas,'Liberation Mono',Menlo,monospace;white-space:pre;overflow-x:auto;margin:0 0 11px;}" +
      '.dq-q{font-size:14px;line-height:1.6;font-weight:600;margin:0 0 11px;white-space:pre-wrap;}' +
      '.dq-opts{display:flex;flex-direction:column;gap:8px;}' +
      '.dq-opt{display:flex;gap:9px;align-items:flex-start;text-align:left;padding:10px 11px;border:1.5px solid #e2e8f0;' +
      'border-radius:10px;background:#fff;cursor:pointer;font-size:13.5px;line-height:1.5;font-family:inherit;color:#0f172a;transition:.12s;}' +
      '.dq-opt:hover:not(:disabled){border-color:#a5b4fc;background:#f5f3ff;}' +
      '.dq-opt .dq-k{flex:none;width:22px;height:22px;border-radius:50%;background:#eef2ff;color:#4338ca;font-weight:700;' +
      'font-size:12.5px;text-align:center;line-height:22px;}' +
      '.dq-opt.sel{border-color:#6366f1;background:#eef2ff;}' +
      '.dq-opt.correct{border-color:#22c55e;background:#f0fdf4;}' +
      '.dq-opt.correct .dq-k{background:#22c55e;color:#fff;}' +
      '.dq-opt.wrong{border-color:#ef4444;background:#fef2f2;}' +
      '.dq-opt.wrong .dq-k{background:#ef4444;color:#fff;}' +
      '.dq-opt:disabled{cursor:default;}' +
      '.dq-submit{margin-top:12px;width:100%;padding:11px;border:none;border-radius:10px;background:#4f46e5;color:#fff;' +
      'font-size:14px;font-weight:700;cursor:pointer;font-family:inherit;}' +
      '.dq-submit:hover{background:#4338ca;}' +
      '.dq-submit:disabled{background:#cbd5e1;cursor:not-allowed;}' +
      '.dq-result{margin-top:12px;padding:10px 12px;border-radius:10px;font-size:13px;font-weight:600;}' +
      '.dq-result.ok{background:#f0fdf4;color:#166534;border:1px solid #bbf7d0;}' +
      '.dq-result.no{background:#fef2f2;color:#991b1b;border:1px solid #fecaca;}' +
      '.dq-explain{margin-top:10px;padding:11px 12px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;' +
      'font-size:13px;line-height:1.65;white-space:pre-wrap;}' +
      '.dq-explain b{color:#4338ca;}' +
      '.dq-foot{margin-top:12px;display:flex;align-items:center;gap:8px;font-size:12px;color:#64748b;}' +
      '.dq-foot .dq-streak{font-weight:700;color:#7c3aed;}' +
      '.dq-empty{padding:24px 12px;text-align:center;color:#64748b;font-size:13.5px;}' +
      '@media(max-width:720px){#dq-launcher{left:12px;width:46px;height:46px;font-size:20px;}' +
      '#dq-panel{left:8px;right:8px;width:auto;bottom:76px;max-height:72vh;}}';
    document.head.appendChild(st);
  }

  /* ═══ 建立 DOM ═══ */
  var launcher, panel, body, dot;

  function build() {
    injectStyle();

    launcher = document.createElement('button');
    launcher.id = 'dq-launcher';
    launcher.title = '每日一題（程式判讀選擇題）';
    launcher.setAttribute('aria-label', '開啟每日一題');
    launcher.setAttribute('aria-haspopup', 'dialog');
    launcher.setAttribute('aria-expanded', 'false');
    launcher.innerHTML = '<span>📅</span><span class="dq-dot" style="display:none">1</span><span class="dq-x" title="關閉此按鈕">✕</span>';
    document.body.appendChild(launcher);
    dot = launcher.querySelector('.dq-dot');

    panel = document.createElement('div');
    panel.id = 'dq-panel';
    panel.setAttribute('role', 'dialog');
    panel.setAttribute('aria-modal', 'false');
    panel.setAttribute('aria-labelledby', 'dq-panel-title');
    panel.innerHTML =
      '<div id="dq-head"><div><div class="dq-title" id="dq-panel-title">📅 每日一題</div>' +
      '<div class="dq-sub" id="dq-date"></div></div>' +
      '<button class="dq-close" title="收起" aria-label="收起">▾</button></div>' +
      '<div id="dq-body"></div>';
    document.body.appendChild(panel);
    body = panel.querySelector('#dq-body');

    // 事件
    launcher.addEventListener('click', function (e) {
      if (e.target && e.target.classList.contains('dq-x')) { hideLauncher(); return; }
      togglePanel();
    });
    panel.querySelector('.dq-close').addEventListener('click', function () { closePanel(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && panel.classList.contains('dq-open')) closePanel(); });
    window.addEventListener('apcs:overlay-open', function (e) { if (e.detail !== 'daily-question') closePanel(); });

    refreshDot();
    adjustForMobileNav();
    window.addEventListener('resize', adjustForMobileNav);

    if (sessionStorage.getItem(SS_HIDDEN) === '1') launcher.style.display = 'none';
  }

  function hideLauncher() {
    launcher.style.display = 'none';
    try { sessionStorage.setItem(SS_HIDDEN, '1'); } catch (e) {}
    closePanel();
  }

  // 手機版底部有 #mobile-nav 固定導覽列，把圓鈕與面板抬到它上方
  function adjustForMobileNav() {
    var nav = document.getElementById('mobile-nav');
    var visible = nav && getComputedStyle(nav).display !== 'none';
    var h = visible ? (nav.offsetHeight || 56) : 0;
    if (launcher) launcher.style.bottom = visible ? (h + 12) + 'px' : '';
    if (panel) panel.style.bottom = visible ? (h + 80) + 'px' : '';
  }

  function refreshDot() {
    if (!dot) return;
    var doneToday = !!loadDone()[todayKey()];
    dot.style.display = doneToday ? 'none' : 'block';
    dot.textContent = '1';
  }

  function togglePanel() {
    if (panel.classList.contains('dq-open')) closePanel();
    else openPanel();
  }
  function openPanel() {
    window.dispatchEvent(new CustomEvent('apcs:overlay-open', { detail: 'daily-question' }));
    render();
    panel.classList.add('dq-open');
    launcher.setAttribute('aria-expanded', 'true');
    panel.querySelector('.dq-close').focus();
  }
  function closePanel() {
    if (!panel) return;
    panel.classList.remove('dq-open');
    if (launcher) launcher.setAttribute('aria-expanded', 'false');
  }

  /* ═══ 渲染題目 ═══ */
  var selected = -1;

  function render() {
    var q = pickToday();
    var dateEl = document.getElementById('dq-date');
    if (dateEl) dateEl.textContent = todayKey() + '｜程式判讀選擇題';

    if (!q) {
      body.innerHTML = '<div class="dq-empty">找不到題庫（READING_QUESTIONS）。<br>請確認本頁已載入 data/reading-questions.js。</div>';
      return;
    }

    var done = loadDone()[todayKey()];   // 今天是否作答過
    selected = -1;

    var tags = '';
    if (q.lang) tags += '<span class="dq-tag">' + esc(langLabel(q.lang)) + '</span>';
    if (q.level) tags += '<span class="dq-tag lv">' + esc(q.level) + '</span>';
    if (q.cat) tags += '<span class="dq-tag cat">' + esc(q.cat) + '</span>';
    if (q.topic) tags += '<span class="dq-tag">' + esc(q.topic) + '</span>';

    var html = '<div class="dq-meta">' + tags + '</div>';
    if (q.code) html += '<pre class="dq-code">' + esc(q.code) + '</pre>';
    html += '<p class="dq-q">' + esc(q.q) + '</p>';
    html += '<div class="dq-opts">';
    (q.options || []).forEach(function (opt, i) {
      html += '<button class="dq-opt" data-i="' + i + '"><span class="dq-k">' +
        'ABCD'.charAt(i) + '</span><span>' + esc(opt) + '</span></button>';
    });
    html += '</div>';
    html += '<button class="dq-submit" disabled>送出答案</button>';
    html += '<div id="dq-after"></div>';
    html += '<div class="dq-foot">🔥 連續作答 <span class="dq-streak">' + streak() + '</span> 天</div>';
    body.innerHTML = html;

    var optBtns = body.querySelectorAll('.dq-opt');
    var submit = body.querySelector('.dq-submit');

    if (done) {
      // 已作答：直接顯示結果
      reveal(q, done.chosen, optBtns, submit, false);
    } else {
      optBtns.forEach(function (btn) {
        btn.addEventListener('click', function () {
          selected = +btn.getAttribute('data-i');
          optBtns.forEach(function (b) { b.classList.remove('sel'); });
          btn.classList.add('sel');
          submit.disabled = false;
        });
      });
      submit.addEventListener('click', function () {
        if (selected < 0) return;
        commit(q, selected);
        reveal(q, selected, optBtns, submit, true);
      });
    }
  }

  // 顯示對錯、解析；justAnswered=true 代表剛作答（會捲動解析進畫面）
  function reveal(q, chosen, optBtns, submit, justAnswered) {
    var correct = chosen === q.answer;
    optBtns.forEach(function (btn) {
      var i = +btn.getAttribute('data-i');
      btn.disabled = true;
      btn.classList.remove('sel');
      if (i === q.answer) btn.classList.add('correct');
      else if (i === chosen) btn.classList.add('wrong');
    });
    submit.style.display = 'none';

    var after = body.querySelector('#dq-after');
    var h = '<div class="dq-result ' + (correct ? 'ok' : 'no') + '" role="status" aria-live="polite">' +
      (correct ? '✅ 答對了！正確答案是 ' : '❌ 答錯了，正確答案是 ') +
      'ABCD'.charAt(q.answer) + '．' +
      (correct ? '' : '你選的是 ' + 'ABCD'.charAt(chosen) + '．') + '</div>';
    if (q.explain) h += '<div class="dq-explain"><b>解析：</b>' + esc(q.explain) + '</div>';
    after.innerHTML = h;

    // 更新腳註連續天數
    var st = body.querySelector('.dq-streak');
    if (st) st.textContent = streak();
    refreshDot();

    if (justAnswered && after && typeof after.scrollIntoView === 'function') {
      after.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }

  // 寫入今日作答紀錄；答錯 → 送進統一錯題本
  function commit(q, chosen) {
    var done = loadDone();
    var correct = chosen === q.answer;
    done[todayKey()] = { qid: q.id, chosen: chosen, correct: correct };
    saveDone(done);
    if (!correct) recordMistake(q, chosen);
  }

  // 與 reading.html 相同的錯題本紀錄格式，可在「錯題本」頁面統一複習
  function recordMistake(q, chosen) {
    if (typeof MistakeBook === 'undefined' || !q) return;
    try {
      MistakeBook.add({
        type: 'reading', sourceKey: 'reading::' + q.id,
        title: MistakeBook.dateTitle(new Date()) + '｜每日一題 ' + (q.num || q.id),
        qid: q.id, lang: q.lang, level: q.level, topic: q.topic,
        questionStem: q.q, code: q.code || '', options: q.options || [],
        answerIndex: q.answer, chosenIndex: chosen, explain: q.explain || ''
      });
    } catch (e) {}
  }

  function langLabel(l) {
    return ({ c: 'C', cpp: 'C++', python: 'Python', js: 'JavaScript' })[l] || (l || '判讀');
  }

  /* ═══ 啟動 ═══ */
  function boot() { build(); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();

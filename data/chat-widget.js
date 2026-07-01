/* ══════════════════════════════════════════════════════════════════
 *  全站右下角聊天小工具（浮動圓鈕 → 可拖曳聊天室）
 *  ─ 兩個分頁：
 *      1) AI 助教   ：呼叫使用者自備的 Google Gemini 金鑰（與 ai-solve 共用
 *                     localStorage 金鑰，設過就能直接用）
 *      2) 大眾聊天室：Firebase Realtime Database，跨使用者即時互通
 *  ─ 純前端、被所有頁面共用；只要在頁面底部加一行 <script> 即可。
 *
 *  ★ 站長設定：把你的 Firebase 網頁設定貼進下方 FIREBASE_CONFIG 即可啟用
 *    大眾聊天室（web config 可公開，靠 Database 安全規則保護）。
 *    未設定時 AI 分頁照常運作，大眾分頁會顯示設定說明。
 * ════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';
  if (window.__apcsChatWidgetLoaded) return;   // 避免重複載入
  window.__apcsChatWidgetLoaded = true;

  /* ─────────────────────────────────────────────────────────────
   *  ★★★ 站長：把 Firebase 網頁設定貼在這裡（Firebase 主控台 →
   *      專案設定 → 一般 → 你的應用程式 → SDK 設定與配置 → Config）
   *  留空則大眾聊天室顯示「尚未設定」說明。
   * ───────────────────────────────────────────────────────────── */
  var FIREBASE_CONFIG = {
    apiKey: "AIzaSyCSI3TftfeSTOkeICfsckhqq-79CROjN9I",
    authDomain: "apcs-1.firebaseapp.com",
    databaseURL: "https://apcs-1-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "apcs-1",
    storageBucket: "apcs-1.firebasestorage.app",
    messagingSenderId: "1081162904291",
    appId: "1:1081162904291:web:2a16427edf3bbd56d84bd6"
  };
  var CHAT_ROOM = 'global';          // 聊天室房號（同一房共用訊息）
  var MAX_MESSAGES = 200;            // 前端只保留最近 N 則

  // 與 ai-solve.html 共用的金鑰，設過一次全站通用
  var LS_KEY = 'ai_solve_gemini_key';
  var LS_MODEL = 'ai_solve_gemini_model';
  var LS_AIHIST = 'cw_ai_history';   // AI 對話（跨頁保留）
  var LS_NICK = 'cw_nick';           // 大眾聊天暱稱
  var SS_HIDDEN = 'cw_launcher_hidden'; // 本次瀏覽關掉圓鈕

  var firebaseReady = false, fbDB = null, fbMsgRef = null, fbListening = false;

  /* ═══ 小工具函式 ═══ */
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  // 把純文字轉成安全 HTML：跳脫 + 自動連結 URL + 換行
  function textToHtml(s) {
    var e = esc(s);
    e = e.replace(/(https?:\/\/[^\s<]+)/g, function (u) {
      return '<a href="' + u + '" target="_blank" rel="noopener">' + u + '</a>';
    });
    return e.replace(/\n/g, '<br>');
  }
  function fbConfigured() {
    return !!(FIREBASE_CONFIG && FIREBASE_CONFIG.databaseURL && FIREBASE_CONFIG.apiKey);
  }
  function getKey() { return (localStorage.getItem(LS_KEY) || '').trim(); }
  function getModel() { return localStorage.getItem(LS_MODEL) || 'gemini-2.0-flash'; }
  function timeStr(ts) {
    try {
      var d = new Date(ts);
      return d.getHours().toString().padStart(2, '0') + ':' + d.getMinutes().toString().padStart(2, '0');
    } catch (e) { return ''; }
  }

  /* ═══ 樣式 ═══ */
  var CSS = '' +
    '#cw-launcher{position:fixed;right:22px;bottom:22px;z-index:2147483000;width:58px;height:58px;border-radius:50%;' +
    'background:linear-gradient(135deg,#4f46e5,#7c3aed);color:#fff;border:none;cursor:pointer;box-shadow:0 6px 20px rgba(79,70,229,.45);' +
    'font-size:26px;display:flex;align-items:center;justify-content:center;transition:transform .15s,box-shadow .15s;}' +
    '#cw-launcher:hover{transform:translateY(-2px) scale(1.05);box-shadow:0 10px 26px rgba(79,70,229,.55);}' +
    '#cw-launcher .cw-x{position:absolute;top:-6px;right:-6px;width:20px;height:20px;border-radius:50%;background:#334155;color:#fff;' +
    'font-size:12px;line-height:20px;text-align:center;border:2px solid #fff;box-shadow:0 1px 4px rgba(0,0,0,.3);}' +
    '#cw-launcher .cw-x:hover{background:#ef4444;}' +
    '#cw-panel{position:fixed;right:22px;bottom:90px;z-index:2147483001;width:360px;max-width:calc(100vw - 24px);height:520px;max-height:calc(100vh - 120px);' +
    'background:#fff;border-radius:16px;box-shadow:0 18px 50px rgba(0,0,0,.28);display:none;flex-direction:column;overflow:hidden;' +
    'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Noto Sans TC",sans-serif;color:#1e293b;}' +
    '#cw-panel.cw-open{display:flex;}' +
    '#cw-head{background:linear-gradient(135deg,#4f46e5,#7c3aed);color:#fff;padding:11px 14px;display:flex;align-items:center;gap:8px;cursor:move;user-select:none;}' +
    '#cw-head .cw-title{font-weight:700;font-size:15px;flex:1;}' +
    '#cw-head button{background:rgba(255,255,255,.18);border:none;color:#fff;width:26px;height:26px;border-radius:7px;cursor:pointer;font-size:15px;line-height:1;}' +
    '#cw-head button:hover{background:rgba(255,255,255,.34);}' +
    '#cw-tabs{display:flex;border-bottom:1px solid #e2e8f0;background:#f8fafc;}' +
    '#cw-tabs button{flex:1;padding:10px 6px;border:none;background:none;cursor:pointer;font-size:13.5px;font-weight:600;color:#64748b;border-bottom:2px solid transparent;}' +
    '#cw-tabs button.cw-active{color:#4f46e5;border-bottom-color:#4f46e5;background:#fff;}' +
    '.cw-view{flex:1;display:none;flex-direction:column;min-height:0;}' +
    '.cw-view.cw-active{display:flex;}' +
    '.cw-msgs{flex:1;overflow-y:auto;padding:12px;display:flex;flex-direction:column;gap:9px;background:#f1f5f9;}' +
    '.cw-msg{max-width:82%;padding:8px 11px;border-radius:13px;font-size:13.5px;line-height:1.5;word-wrap:break-word;white-space:normal;}' +
    '.cw-msg a{color:inherit;text-decoration:underline;}' +
    '.cw-msg.cw-me{align-self:flex-end;background:#4f46e5;color:#fff;border-bottom-right-radius:4px;}' +
    '.cw-msg.cw-other{align-self:flex-start;background:#fff;border:1px solid #e2e8f0;border-bottom-left-radius:4px;}' +
    '.cw-msg .cw-meta{display:block;font-size:11px;opacity:.7;margin-bottom:2px;font-weight:600;}' +
    '.cw-sys{align-self:center;background:#e2e8f0;color:#475569;font-size:12px;padding:5px 10px;border-radius:10px;text-align:center;max-width:92%;}' +
    '.cw-inbar{display:flex;gap:7px;padding:9px;border-top:1px solid #e2e8f0;background:#fff;align-items:flex-end;}' +
    '.cw-inbar textarea{flex:1;resize:none;border:1px solid #cbd5e1;border-radius:10px;padding:8px 10px;font-size:13.5px;font-family:inherit;max-height:88px;line-height:1.4;outline:none;}' +
    '.cw-inbar textarea:focus{border-color:#4f46e5;}' +
    '.cw-inbar button{background:#4f46e5;color:#fff;border:none;border-radius:10px;padding:0 14px;height:38px;cursor:pointer;font-size:14px;font-weight:600;white-space:nowrap;}' +
    '.cw-inbar button:hover{background:#4338ca;}' +
    '.cw-inbar button:disabled{background:#94a3b8;cursor:not-allowed;}' +
    '.cw-notice{padding:16px;font-size:13px;line-height:1.7;color:#475569;overflow-y:auto;}' +
    '.cw-notice h4{margin:0 0 8px;color:#1e293b;font-size:14px;}' +
    '.cw-notice code{background:#e2e8f0;padding:1px 5px;border-radius:4px;font-size:12px;}' +
    '.cw-notice a{color:#4f46e5;}' +
    '.cw-nickbar{display:flex;gap:7px;padding:8px 9px;border-bottom:1px solid #e2e8f0;background:#fff;align-items:center;font-size:12.5px;color:#64748b;}' +
    '.cw-nickbar input{flex:1;border:1px solid #cbd5e1;border-radius:8px;padding:5px 8px;font-size:13px;outline:none;}' +
    '.cw-nickbar input:focus{border-color:#4f46e5;}' +
    '.cw-typing{align-self:flex-start;color:#64748b;font-size:12.5px;padding:2px 4px;}' +
    '@media(max-width:480px){#cw-panel{right:8px;left:8px;width:auto;bottom:84px;height:70vh;}}';

  /* ═══ 建立 DOM ═══ */
  function build() {
    var style = document.createElement('style');
    style.textContent = CSS;
    document.head.appendChild(style);

    // 圓鈕
    var launcher = document.createElement('button');
    launcher.id = 'cw-launcher';
    launcher.title = '開啟聊天（AI 助教／大眾聊天室）';
    launcher.innerHTML = '<span>💬</span><span class="cw-x" title="關閉此按鈕">✕</span>';
    document.body.appendChild(launcher);

    // 面板
    var panel = document.createElement('div');
    panel.id = 'cw-panel';
    panel.innerHTML =
      '<div id="cw-head"><span class="cw-title">💬 聊天室</span>' +
      '<button id="cw-min" title="縮小">—</button></div>' +
      '<div id="cw-tabs"><button data-view="ai" class="cw-active">🤖 AI 助教</button>' +
      '<button data-view="pub">🌐 大眾聊天室</button></div>' +
      // AI view
      '<div class="cw-view cw-active" data-view="ai">' +
      '<div class="cw-msgs" id="cw-ai-msgs"></div>' +
      '<div class="cw-inbar"><textarea id="cw-ai-in" rows="1" placeholder="問 AI 助教任何 APCS／程式問題…"></textarea>' +
      '<button id="cw-ai-send">送出</button></div></div>' +
      // Public view
      '<div class="cw-view" data-view="pub">' +
      '<div class="cw-nickbar">暱稱：<input id="cw-nick" maxlength="16" placeholder="輸入你的暱稱"></div>' +
      '<div class="cw-msgs" id="cw-pub-msgs"></div>' +
      '<div class="cw-inbar" id="cw-pub-bar"><textarea id="cw-pub-in" rows="1" placeholder="和大家聊聊…（Enter 送出）"></textarea>' +
      '<button id="cw-pub-send">送出</button></div></div>';
    document.body.appendChild(panel);

    wireLauncher(launcher, panel);
    wireDrag(panel);
    wireTabs(panel);
    wireAI(panel);
    wirePublic(panel);
  }

  /* ═══ 圓鈕開關 ═══ */
  function wireLauncher(launcher, panel) {
    if (sessionStorage.getItem(SS_HIDDEN) === '1') launcher.style.display = 'none';
    launcher.addEventListener('click', function (e) {
      if (e.target.classList.contains('cw-x')) {   // 關掉圓鈕（本次瀏覽）
        e.stopPropagation();
        launcher.style.display = 'none';
        panel.classList.remove('cw-open');
        sessionStorage.setItem(SS_HIDDEN, '1');
        return;
      }
      panel.classList.toggle('cw-open');
    });
    document.getElementById('cw-min').addEventListener('click', function () {
      panel.classList.remove('cw-open');
    });
  }

  /* ═══ 拖曳（以標題列拖動）═══ */
  function wireDrag(panel) {
    var head = document.getElementById('cw-head');
    var dragging = false, sx = 0, sy = 0, ox = 0, oy = 0;
    head.addEventListener('pointerdown', function (e) {
      if (e.target.tagName === 'BUTTON') return;
      dragging = true;
      var r = panel.getBoundingClientRect();
      // 改用 left/top 定位
      panel.style.left = r.left + 'px'; panel.style.top = r.top + 'px';
      panel.style.right = 'auto'; panel.style.bottom = 'auto';
      sx = e.clientX; sy = e.clientY; ox = r.left; oy = r.top;
      head.setPointerCapture(e.pointerId);
    });
    head.addEventListener('pointermove', function (e) {
      if (!dragging) return;
      var nx = ox + (e.clientX - sx), ny = oy + (e.clientY - sy);
      var w = panel.offsetWidth, h = panel.offsetHeight;
      nx = Math.max(4, Math.min(nx, window.innerWidth - w - 4));
      ny = Math.max(4, Math.min(ny, window.innerHeight - h - 4));
      panel.style.left = nx + 'px'; panel.style.top = ny + 'px';
    });
    head.addEventListener('pointerup', function () { dragging = false; });
    head.addEventListener('pointercancel', function () { dragging = false; });
  }

  /* ═══ 分頁切換 ═══ */
  function wireTabs(panel) {
    var tabs = panel.querySelectorAll('#cw-tabs button');
    tabs.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var v = btn.dataset.view;
        tabs.forEach(function (b) { b.classList.toggle('cw-active', b === btn); });
        panel.querySelectorAll('.cw-view').forEach(function (view) {
          view.classList.toggle('cw-active', view.dataset.view === v);
        });
        if (v === 'pub') openPublic();
        if (v === 'ai') scrollBottom('cw-ai-msgs');
      });
    });
  }

  function scrollBottom(id) {
    var el = document.getElementById(id);
    if (el) el.scrollTop = el.scrollHeight;
  }
  function autoGrow(ta) {
    ta.style.height = 'auto';
    ta.style.height = Math.min(ta.scrollHeight, 88) + 'px';
  }

  /* ═══ AI 助教 ═══ */
  var aiHistory = [];   // [{role:'user'|'model', text}]
  function loadAIHistory() {
    try { var a = JSON.parse(localStorage.getItem(LS_AIHIST)); if (Array.isArray(a)) aiHistory = a; } catch (e) {}
  }
  function saveAIHistory() {
    try { localStorage.setItem(LS_AIHIST, JSON.stringify(aiHistory.slice(-40))); } catch (e) {}
  }
  function addAIBubble(role, text, cls) {
    var box = document.getElementById('cw-ai-msgs');
    var div = document.createElement('div');
    if (cls === 'sys') { div.className = 'cw-sys'; div.innerHTML = textToHtml(text); }
    else {
      div.className = 'cw-msg ' + (role === 'user' ? 'cw-me' : 'cw-other');
      div.innerHTML = (role === 'user' ? '' : '<span class="cw-meta">🤖 AI 助教</span>') + textToHtml(text);
    }
    box.appendChild(div);
    scrollBottom('cw-ai-msgs');
    return div;
  }
  function renderAIHistory() {
    var box = document.getElementById('cw-ai-msgs');
    box.innerHTML = '';
    if (!aiHistory.length) {
      addAIBubble('model', '嗨！我是 AI 助教 👋 可以問我 APCS 觀念、程式判讀、除錯等問題。\n\n（本站純前端，AI 使用你自己的 Google Gemini 金鑰；到「AI 解題」頁即可免費設定。）', null);
      return;
    }
    aiHistory.forEach(function (m) { addAIBubble(m.role, m.text, null); });
  }

  async function callGeminiChat() {
    var key = getKey(), model = getModel();
    var url = 'https://generativelanguage.googleapis.com/v1beta/models/' +
      encodeURIComponent(model) + ':generateContent?key=' + encodeURIComponent(key);
    var contents = aiHistory.slice(-16).map(function (m) {
      return { role: m.role === 'user' ? 'user' : 'model', parts: [{ text: m.text }] };
    });
    var body = {
      contents: contents,
      systemInstruction: { parts: [{ text: '你是台灣 APCS（大學程式設計先修檢測）練習網站的 AI 助教，用繁體中文、清楚簡潔地回答程式設計、演算法、程式判讀與除錯問題。程式碼用 Markdown code block。' }] },
      generationConfig: { temperature: 0.5 }
    };
    var res = await fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
    if (!res.ok) {
      var msg = 'HTTP ' + res.status;
      try { var j = await res.json(); if (j.error && j.error.message) msg = j.error.message; } catch (e) {}
      if (res.status === 400 && /API key/i.test(msg)) msg = '金鑰無效或未啟用，請確認 Gemini API key。';
      if (res.status === 429) msg = '已達 Gemini 速率／額度上限，請稍後再試。';
      throw new Error(msg);
    }
    var data = await res.json();
    var cand = data.candidates && data.candidates[0];
    var txt = cand && cand.content && cand.content.parts && cand.content.parts.map(function (p) { return p.text || ''; }).join('');
    if (!txt) throw new Error('AI 未回傳內容');
    return txt;
  }

  var aiBusy = false;
  async function sendAI() {
    if (aiBusy) return;
    var ta = document.getElementById('cw-ai-in');
    var text = ta.value.trim();
    if (!text) return;
    if (!getKey()) {
      addAIBubble('model', '尚未設定 Google Gemini 金鑰。請到 <a href="ai-solve.html" target="_blank">AI 解題</a> 頁面免費取得並貼上金鑰後再回來即可使用。', 'sys');
      return;
    }
    ta.value = ''; autoGrow(ta);
    aiHistory.push({ role: 'user', text: text });
    addAIBubble('user', text, null);
    saveAIHistory();
    aiBusy = true;
    var btn = document.getElementById('cw-ai-send'); btn.disabled = true;
    var typing = document.createElement('div');
    typing.className = 'cw-typing'; typing.textContent = 'AI 思考中…';
    document.getElementById('cw-ai-msgs').appendChild(typing); scrollBottom('cw-ai-msgs');
    try {
      var reply = await callGeminiChat();
      typing.remove();
      aiHistory.push({ role: 'model', text: reply });
      addAIBubble('model', reply, null);
      saveAIHistory();
    } catch (err) {
      typing.remove();
      addAIBubble('model', '⚠️ ' + (err && err.message ? err.message : '發生錯誤'), 'sys');
    } finally {
      aiBusy = false; btn.disabled = false;
    }
  }

  function wireAI() {
    loadAIHistory();
    renderAIHistory();
    var ta = document.getElementById('cw-ai-in');
    ta.addEventListener('input', function () { autoGrow(ta); });
    ta.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendAI(); }
    });
    document.getElementById('cw-ai-send').addEventListener('click', sendAI);
  }

  /* ═══ 大眾聊天室（Firebase）═══ */
  function loadScript(src) {
    return new Promise(function (resolve, reject) {
      var s = document.createElement('script');
      s.src = src; s.onload = resolve; s.onerror = function () { reject(new Error('載入失敗：' + src)); };
      document.head.appendChild(s);
    });
  }

  function pubNotice(html) {
    var box = document.getElementById('cw-pub-msgs');
    box.innerHTML = '<div class="cw-notice">' + html + '</div>';
  }

  var publicInited = false;
  async function openPublic() {
    var nickInput = document.getElementById('cw-nick');
    if (!nickInput.value) nickInput.value = localStorage.getItem(LS_NICK) || '';
    if (publicInited) return;
    publicInited = true;

    if (!fbConfigured()) {
      pubNotice(
        '<h4>🌐 大眾聊天室尚未啟用</h4>' +
        '這是跨使用者的即時聊天，需要站長設定一個免費的 Firebase 後端：' +
        '<ol style="margin:8px 0;padding-left:20px;">' +
        '<li>到 <a href="https://console.firebase.google.com" target="_blank" rel="noopener">Firebase 主控台</a> 建立專案</li>' +
        '<li>建立 <b>Realtime Database</b>（測試模式起步）</li>' +
        '<li>把網頁 <code>Config</code> 貼進 <code>data/chat-widget.js</code> 最上方的 <code>FIREBASE_CONFIG</code></li>' +
        '</ol>設定完成後，這裡就會變成真正的公共聊天室。');
      return;
    }

    pubNotice('連線中…');
    try {
      if (!window.firebase) {
        await loadScript('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
        await loadScript('https://www.gstatic.com/firebasejs/10.12.2/firebase-database-compat.js');
      }
      if (!firebaseReady) {
        firebase.initializeApp(FIREBASE_CONFIG);
        fbDB = firebase.database();
        fbMsgRef = fbDB.ref('rooms/' + CHAT_ROOM + '/messages');
        firebaseReady = true;
      }
      startListening();
    } catch (err) {
      pubNotice('<h4>⚠️ 無法連線</h4>' + esc(err && err.message ? err.message : String(err)) +
        '<br><br>請確認 <code>FIREBASE_CONFIG</code> 與 Realtime Database 安全規則設定正確。');
    }
  }

  function startListening() {
    var box = document.getElementById('cw-pub-msgs');
    box.innerHTML = '';
    var hint = document.createElement('div');
    hint.className = 'cw-sys'; hint.textContent = '歡迎來到大眾聊天室，請友善交流 🙂';
    box.appendChild(hint);
    if (fbListening) return;
    fbListening = true;
    var myNick = function () { return (localStorage.getItem(LS_NICK) || '').trim(); };
    fbMsgRef.limitToLast(MAX_MESSAGES).on('child_added', function (snap) {
      var m = snap.val() || {};
      var div = document.createElement('div');
      var mine = m.name && myNick() && m.name === myNick();
      div.className = 'cw-msg ' + (mine ? 'cw-me' : 'cw-other');
      div.innerHTML = '<span class="cw-meta">' + esc(m.name || '訪客') +
        (m.ts ? ' · ' + timeStr(m.ts) : '') + '</span>' + textToHtml(m.text || '');
      box.appendChild(div);
      scrollBottom('cw-pub-msgs');
    });
  }

  async function sendPublic() {
    var nickInput = document.getElementById('cw-nick');
    var ta = document.getElementById('cw-pub-in');
    var text = ta.value.trim();
    var nick = nickInput.value.trim();
    if (!nick) { nickInput.focus(); nickInput.style.borderColor = '#ef4444'; return; }
    nickInput.style.borderColor = '';
    localStorage.setItem(LS_NICK, nick);
    if (!text) return;
    if (!firebaseReady || !fbMsgRef) return;
    ta.value = ''; autoGrow(ta);
    try {
      await fbMsgRef.push({ name: nick.slice(0, 16), text: text.slice(0, 800), ts: Date.now() });
    } catch (err) {
      var box = document.getElementById('cw-pub-msgs');
      var d = document.createElement('div');
      d.className = 'cw-sys'; d.textContent = '⚠️ 送出失敗：' + (err && err.message ? err.message : '請稍後再試');
      box.appendChild(d); scrollBottom('cw-pub-msgs');
    }
  }

  function wirePublic() {
    var ta = document.getElementById('cw-pub-in');
    var nick = document.getElementById('cw-nick');
    nick.value = localStorage.getItem(LS_NICK) || '';
    nick.addEventListener('change', function () {
      if (nick.value.trim()) localStorage.setItem(LS_NICK, nick.value.trim());
    });
    ta.addEventListener('input', function () { autoGrow(ta); });
    ta.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendPublic(); }
    });
    document.getElementById('cw-pub-send').addEventListener('click', sendPublic);
  }

  /* ═══ 啟動 ═══ */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', build);
  } else {
    build();
  }
})();

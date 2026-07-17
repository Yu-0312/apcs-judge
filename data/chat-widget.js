/* ══════════════════════════════════════════════════════════════════
 *  全站右下角聊天小工具（浮動圓鈕 → 可拖曳聊天室）
 *  ─ 兩個分頁：
 *      1) AI 助教   ：呼叫使用者自備的 Google Gemini 金鑰（與 ai-solve 共用
 *                     本分頁 sessionStorage；關閉分頁即失效）
 *      2) 大眾聊天室：Firebase Realtime Database，跨使用者即時互通
 *  ─ 純前端、被所有頁面共用；只要在頁面底部加一行 <script> 即可。
 *
 *  ★ 大眾聊天室預設 fail closed。部署者完成 Auth、Rules、Emulator、App Check、
 *    後端限流與營運檢查後，才可把 service-config.js 的 publicChat.enabled
 *    明確改為 true。Firebase web config 可公開，但不能證明後端安全。
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
  var MAX_PUBLIC_TEXT = 500;
  var MAX_AI_TEXT = 4000;
  var PUBLIC_SEND_INTERVAL_MS = 2500;
  var PUBLIC_CHAT_ENABLED = !!(window.APCS_SERVICE_CONFIG && window.APCS_SERVICE_CONFIG.publicChat && window.APCS_SERVICE_CONFIG.publicChat.enabled === true);

  // service-config.js 是主要來源；若頁面漏載或內容不合法，僅退回官方端點與安全內建值。
  var SAFE_GEMINI_CONFIG = {
    apiBase: 'https://generativelanguage.googleapis.com/v1beta',
    defaultModel: 'gemini-3.5-flash',
    models: ['gemini-3.5-flash', 'gemini-3.1-flash-lite', 'gemini-3.1-pro-preview'],
    fallbackModels: ['gemini-3.1-flash-lite']
  };
  function resolveGeminiConfig() {
    var raw = window.APCS_SERVICE_CONFIG && window.APCS_SERVICE_CONFIG.gemini;
    var models = raw && Array.isArray(raw.models) ? raw.models.map(function (item) {
      return item && typeof item.id === 'string' && /^[\w.-]+$/.test(item.id) ? item.id : '';
    }).filter(Boolean) : [];
    if (!models.length) models = SAFE_GEMINI_CONFIG.models.slice();
    var defaultModel = raw && models.indexOf(raw.defaultModel) >= 0 ? raw.defaultModel : SAFE_GEMINI_CONFIG.defaultModel;
    if (models.indexOf(defaultModel) < 0) models.unshift(defaultModel);
    var fallbackModels = raw && Array.isArray(raw.fallbackModels) ? raw.fallbackModels.filter(function (model) {
      return models.indexOf(model) >= 0 && model !== defaultModel;
    }) : SAFE_GEMINI_CONFIG.fallbackModels.slice();
    if (!fallbackModels.length) fallbackModels = SAFE_GEMINI_CONFIG.fallbackModels.filter(function (model) {
      return models.indexOf(model) >= 0 && model !== defaultModel;
    });
    return {
      apiBase: raw && raw.apiBase === SAFE_GEMINI_CONFIG.apiBase ? raw.apiBase : SAFE_GEMINI_CONFIG.apiBase,
      defaultModel: defaultModel,
      models: models,
      fallbackModels: fallbackModels
    };
  }
  var GEMINI_CONFIG = resolveGeminiConfig();
  var GEMINI_API_BASE = GEMINI_CONFIG.apiBase;
  var DEFAULT_MODEL = GEMINI_CONFIG.defaultModel;
  var SUPPORTED_MODELS = GEMINI_CONFIG.models;
  var FALLBACK_MODELS = GEMINI_CONFIG.fallbackModels;

  // 與 ai-solve.html 共用；舊 localStorage 金鑰只做一次性遷移後立即刪除。
  var LEGACY_LS_KEY = 'ai_solve_gemini_key';
  var SS_KEY = 'ai_solve_gemini_key_session';
  var LS_MODEL = 'ai_solve_gemini_model';
  var LEGACY_LS_AIHIST = 'cw_ai_history';
  var SS_AIHIST = 'cw_ai_history_session'; // 對話只保留於本分頁工作階段
  var LS_NICK = 'cw_nick';           // 大眾聊天暱稱
  var SS_HIDDEN = 'cw_launcher_hidden'; // 本次瀏覽關掉圓鈕
  var SS_CLIENT_ID = 'cw_public_client_id';

  var firebaseReady = false, fbApp = null, fbAuth = null, fbDB = null, fbMsgRef = null, fbListening = false;
  var memoryKey = '', publicWritable = false, publicConnected = false, publicReadAllowed = false, publicWriteDenied = false, lastPublicSend = 0;

  /* ═══ 小工具函式 ═══ */
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  // 把純文字轉成安全 HTML：先全部跳脫，再輕量渲染 ```程式區塊```、`行內碼`、
  // **粗體**、自動連結 URL 與換行。AI 回覆常帶 Markdown，直接顯示原始符號很難讀。
  function renderRich(s) {
    var parts = String(s == null ? '' : s).split('```');
    var out = '';
    for (var i = 0; i < parts.length; i++) {
      if (i % 2 === 1) {                       // ``` 圍住的程式碼區塊
        var code = parts[i].replace(/^[\w+#.-]*\r?\n/, '').replace(/\n$/, '');
        out += '<pre><code>' + esc(code) + '</code></pre>';
      } else {
        var seg = esc(parts[i]);
        seg = seg.replace(/(https?:\/\/[^\s<]*[^\s<.,;:!?)\]}"'])/g, function (u) {
          return '<a href="' + u + '" target="_blank" rel="noopener noreferrer">' + u + '</a>';
        });
        seg = seg.replace(/`([^`\n]+)`/g, '<code>$1</code>');
        seg = seg.replace(/\*\*([^*\n]+)\*\*/g, '<b>$1</b>');
        out += seg.replace(/\n/g, '<br>');
      }
    }
    return out;
  }
  function fbConfigured() {
    return !!(FIREBASE_CONFIG && FIREBASE_CONFIG.databaseURL && FIREBASE_CONFIG.apiKey);
  }
  function ssGet(k) { try { return sessionStorage.getItem(k) || ''; } catch (e) { return ''; } }
  function ssSet(k, v) { try { sessionStorage.setItem(k, v); return true; } catch (e) { return false; } }
  function lsGet(k) { try { return localStorage.getItem(k) || ''; } catch (e) { return ''; } }
  function lsSet(k, v) { try { localStorage.setItem(k, v); return true; } catch (e) { return false; } }
  function migrateLegacyStorage() {
    var oldKey = '', oldHistory = '';
    try {
      oldKey = (localStorage.getItem(LEGACY_LS_KEY) || '').trim();
      oldHistory = localStorage.getItem(LEGACY_LS_AIHIST) || '';
      localStorage.removeItem(LEGACY_LS_KEY);
      localStorage.removeItem(LEGACY_LS_AIHIST);
    } catch (e) {}
    if (oldKey) { memoryKey = oldKey; ssSet(SS_KEY, oldKey); }
    if (oldHistory && !ssGet(SS_AIHIST)) ssSet(SS_AIHIST, oldHistory);
  }
  function getKey() { return (memoryKey || ssGet(SS_KEY)).trim(); }
  function normalizeModel(model) { return SUPPORTED_MODELS.indexOf(model) >= 0 ? model : DEFAULT_MODEL; }
  function getModel() {
    var model = DEFAULT_MODEL;
    try { model = normalizeModel(localStorage.getItem(LS_MODEL) || DEFAULT_MODEL); localStorage.setItem(LS_MODEL, model); } catch (e) {}
    return model;
  }
  function setModel(model) { try { localStorage.setItem(LS_MODEL, normalizeModel(model)); } catch (e) {} }
  function clientId() {
    var id = ssGet(SS_CLIENT_ID);
    if (!id) { id = (window.crypto && window.crypto.randomUUID) ? window.crypto.randomUUID() : Math.random().toString(36).slice(2) + Date.now().toString(36); ssSet(SS_CLIENT_ID, id); }
    return id;
  }
  function cleanText(value, max) { return String(value == null ? '' : value).replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/g, '').trim().slice(0, max); }
  function cleanNick(value) { return cleanText(value, 16).replace(/\s+/g, ' '); }
  function isReservedNick(nick) { return /(官方|站長|管理員|moderator|admin)/i.test(nick); }
  async function fetchWithTimeout(url, options, timeoutMs) {
    var controller = new AbortController(), timer = setTimeout(function () { controller.abort(); }, timeoutMs);
    try { return await fetch(url, Object.assign({}, options || {}, { signal: controller.signal })); }
    catch (e) { if (e && e.name === 'AbortError') throw new Error('REQUEST_TIMEOUT'); throw e; }
    finally { clearTimeout(timer); }
  }
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
    '#cw-head{background:linear-gradient(135deg,#4f46e5,#7c3aed);color:#fff;padding:11px 14px;display:flex;align-items:center;gap:8px;cursor:move;user-select:none;touch-action:none;}' +
    '#cw-head .cw-title{font-weight:700;font-size:15px;flex:1;}' +
    '#cw-head button{background:rgba(255,255,255,.18);border:none;color:#fff;width:26px;height:26px;border-radius:7px;cursor:pointer;font-size:15px;line-height:1;}' +
    '#cw-head button:hover{background:rgba(255,255,255,.34);}' +
    '#cw-tabs{display:flex;border-bottom:1px solid #e2e8f0;background:#f8fafc;}' +
    '#cw-tabs button{flex:1;padding:10px 6px;border:none;background:none;cursor:pointer;font-size:13.5px;font-weight:600;color:#64748b;border-bottom:2px solid transparent;}' +
    '#cw-tabs button.cw-active{color:#4f46e5;border-bottom-color:#4f46e5;background:#fff;}' +
    '.cw-policy{padding:5px 9px;background:#f8fafc;color:#64748b;border-bottom:1px solid #e2e8f0;font-size:10.5px;line-height:1.4;text-align:center;}' +
    '.cw-policy a{color:#4f46e5;text-decoration:underline;}' +
    '.cw-view{flex:1;display:none;flex-direction:column;min-height:0;}' +
    '.cw-view.cw-active{display:flex;}' +
    '.cw-msgs{flex:1;overflow-y:auto;padding:12px;display:flex;flex-direction:column;gap:9px;background:#f1f5f9;}' +
    '.cw-msg{max-width:82%;padding:8px 11px;border-radius:13px;font-size:13.5px;line-height:1.5;word-wrap:break-word;white-space:normal;}' +
    '.cw-msg a{color:inherit;text-decoration:underline;}' +
    '.cw-msg.cw-me{align-self:flex-end;background:#4f46e5;color:#fff;border-bottom-right-radius:4px;}' +
    '.cw-msg.cw-other{align-self:flex-start;background:#fff;border:1px solid #e2e8f0;border-bottom-left-radius:4px;}' +
    '.cw-msg .cw-meta{display:block;font-size:11px;opacity:.7;margin-bottom:2px;font-weight:600;}' +
    '.cw-msg pre{background:#0b0e14;color:#e6edf3;border-radius:8px;padding:9px 11px;overflow-x:auto;margin:6px 0 2px;}' +
    '.cw-msg pre code{background:none;padding:0;color:inherit;}' +
    '.cw-msg code{font-family:ui-monospace,Menlo,Consolas,monospace;font-size:12px;background:rgba(110,118,129,.22);padding:1px 4px;border-radius:4px;}' +
    '.cw-msg.cw-me code{background:rgba(255,255,255,.22);}' +
    '.cw-msg.cw-me pre{background:rgba(0,0,0,.3);color:#fff;}' +
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
    '.cw-safety{padding:6px 9px;background:#fffbeb;color:#92400e;border-bottom:1px solid #fde68a;font-size:11px;line-height:1.4;}' +
    'html[data-theme="dark"] #cw-panel{background:#1c2128;color:#e6edf3;border:1px solid #30363d;}' +
    'html[data-theme="dark"] #cw-tabs,html[data-theme="dark"] .cw-policy{background:#161b22;border-color:#30363d;}' +
    'html[data-theme="dark"] #cw-tabs button{color:#8b949e;}html[data-theme="dark"] #cw-tabs button.cw-active{background:#1c2128;color:#79c0ff;border-bottom-color:#79c0ff;}' +
    'html[data-theme="dark"] .cw-policy{color:#8b949e;}html[data-theme="dark"] .cw-policy a{color:#79c0ff;}' +
    'html[data-theme="dark"] .cw-msgs{background:#0f1117;}html[data-theme="dark"] .cw-msg.cw-other{background:#1c2128;border-color:#30363d;}' +
    'html[data-theme="dark"] .cw-sys{background:#30363d;color:#c9d1d9;}' +
    'html[data-theme="dark"] .cw-inbar,html[data-theme="dark"] .cw-nickbar{background:#161b22;border-color:#30363d;color:#8b949e;}' +
    'html[data-theme="dark"] .cw-inbar textarea,html[data-theme="dark"] .cw-nickbar input{background:#0f1117;border-color:#3d444d;color:#e6edf3;}' +
    'html[data-theme="dark"] .cw-notice{color:#c9d1d9;}html[data-theme="dark"] .cw-notice h4{color:#e6edf3;}html[data-theme="dark"] .cw-notice code{background:#30363d;}' +
    'html[data-theme="dark"] .cw-safety{background:#302a16;color:#f2cc60;border-color:#6e5b1f;}' +
    '@media(max-width:480px){#cw-launcher{right:12px;width:48px;height:48px;font-size:22px;}#cw-panel{right:8px;left:8px;width:auto;bottom:calc(76px + env(safe-area-inset-bottom));height:min(66vh,500px);max-height:calc(100vh - 100px - env(safe-area-inset-bottom));border-radius:13px;}}';

  /* ═══ 建立 DOM ═══ */
  function build() {
    var style = document.createElement('style');
    style.textContent = CSS;
    document.head.appendChild(style);

    // 圓鈕
    var launcher = document.createElement('button');
    launcher.id = 'cw-launcher';
    launcher.title = '開啟聊天（AI 助教／大眾聊天室）';
    launcher.setAttribute('aria-label', '開啟聊天：AI 助教與大眾聊天室');
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
      '<div class="cw-policy">AI 金鑰與對話僅保留於本分頁工作階段。使用前請閱讀 <a href="privacy.html" target="_blank" rel="noopener noreferrer">隱私權政策</a> · <a href="disclaimer.html" target="_blank" rel="noopener noreferrer">免責聲明</a></div>' +
      // AI view
      '<div class="cw-view cw-active" data-view="ai">' +
      '<div class="cw-msgs" id="cw-ai-msgs"></div>' +
      '<div class="cw-inbar"><textarea id="cw-ai-in" rows="1" maxlength="' + MAX_AI_TEXT + '" placeholder="問 AI 助教任何 APCS／程式問題…"></textarea>' +
      '<button id="cw-ai-send">送出</button></div></div>' +
      // Public view
      '<div class="cw-view" data-view="pub">' +
      '<div class="cw-nickbar">暱稱：<input id="cw-nick" maxlength="16" placeholder="輸入你的暱稱"></div>' +
      '<div class="cw-safety">訪客身分不代表真實身分；請勿分享個資。安全性由 Firebase Auth、Database Rules、App Check 與站方管理機制決定；前端字數限制與 2.5 秒節流都可被繞過，不是安全控制。</div>' +
      '<div class="cw-msgs" id="cw-pub-msgs"></div>' +
      '<div class="cw-inbar" id="cw-pub-bar"><textarea id="cw-pub-in" rows="1" maxlength="' + MAX_PUBLIC_TEXT + '" placeholder="聊天室連線中…" disabled></textarea>' +
      '<button id="cw-pub-send" disabled>送出</button></div></div>';
    document.body.appendChild(panel);

    panel.setAttribute('role', 'dialog');
    panel.setAttribute('aria-label', '聊天室');

    wireLauncher(launcher, panel);
    wireDrag(panel);
    wireTabs(panel);
    wireAI(panel);
    wirePublic(panel);

    layoutFloaters();
    var rzTimer = null;
    window.addEventListener('resize', function () {
      clearTimeout(rzTimer); rzTimer = setTimeout(layoutFloaters, 120);
    });
    // 與每日一題等其他浮動工具互斥，避免手機畫面同時被多個 overlay 遮住。
    window.addEventListener('apcs:overlay-open', function (e) {
      if (!e.detail || e.detail.source !== 'chat') panel.classList.remove('cw-open');
    });
  }

  /* ═══ 浮動元素排位 ═══
   *  1) 手機版各頁底部有 #mobile-nav 固定導覽列，圓鈕預設 bottom:22px 會壓在
   *     導覽列上（也擋到 ai-solve 的按鈕）；偵測導覽列可見時把圓鈕與面板抬高。
   *  2) 各頁右下角的 #ver-badge 版本徽章與圓鈕重疊：圓鈕可見時把徽章左移讓位。
   *  3) 面板被拖曳後若視窗縮小，夾回可視範圍內。
   */
  function layoutFloaters() {
    var launcher = document.getElementById('cw-launcher');
    var panel = document.getElementById('cw-panel');
    if (!launcher || !panel) return;
    var nav = document.getElementById('mobile-nav');
    var navVisible = !!(nav && getComputedStyle(nav).display !== 'none');
    var navH = navVisible ? nav.offsetHeight : 0;
    var launcherHidden = launcher.style.display === 'none';

    launcher.style.bottom = navVisible ? 'calc(' + (navH + 12) + 'px + env(safe-area-inset-bottom))' : '';
    if (!panel.style.top) {                       // 尚未被拖曳過才跟著圓鈕排
      panel.style.bottom = navVisible ? 'calc(' + (navH + 70) + 'px + env(safe-area-inset-bottom))' : '';
    } else {                                      // 拖曳過：夾回視窗內
      var r = panel.getBoundingClientRect();
      var nx = Math.max(4, Math.min(r.left, window.innerWidth - r.width - 4));
      var ny = Math.max(4, Math.min(r.top, window.innerHeight - r.height - 4));
      panel.style.left = nx + 'px'; panel.style.top = ny + 'px';
    }

    var badge = document.getElementById('ver-badge');
    if (badge) {
      badge.style.right = launcherHidden ? '' : '92px';            // 讓出圓鈕水平空間
      if (navVisible) badge.style.bottom = (navH + 8) + 'px';      // 抬到導覽列上方
      else badge.style.bottom = '';
    }
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
        layoutFloaters();                          // 版本徽章歸位
        return;
      }
      panel.classList.toggle('cw-open');
      if (panel.classList.contains('cw-open')) window.dispatchEvent(new CustomEvent('apcs:overlay-open', { detail: { source: 'chat' } }));
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
    try {
      var a = JSON.parse(ssGet(SS_AIHIST));
      if (Array.isArray(a)) aiHistory = a.filter(function (m) { return m && (m.role === 'user' || m.role === 'model') && typeof m.text === 'string'; })
        .slice(-40).map(function (m) { return { role: m.role, text: cleanText(m.text, 12000) }; });
    } catch (e) {}
  }
  function saveAIHistory() {
    try { ssSet(SS_AIHIST, JSON.stringify(aiHistory.slice(-40))); } catch (e) {}
  }
  function addAIBubble(role, text, cls) {
    var box = document.getElementById('cw-ai-msgs');
    var div = document.createElement('div');
    if (cls === 'sys') { div.className = 'cw-sys'; div.innerHTML = renderRich(text); }
    else {
      div.className = 'cw-msg ' + (role === 'user' ? 'cw-me' : 'cw-other');
      div.innerHTML = (role === 'user' ? '' : '<span class="cw-meta">🤖 AI 助教</span>') + renderRich(text);
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

  function geminiChatError(status, detail, model) {
    var msg = 'Gemini 回應 HTTP ' + status;
    if (status === 400 && /API key/i.test(detail)) msg = '金鑰無效或未啟用，請確認 Gemini API key。';
    else if (status === 401 || status === 403) msg = 'Gemini 拒絕此金鑰，請檢查金鑰限制與 API 權限。';
    else if (status === 404 || status === 410 || /model.*(not found|unsupported|unavailable)/i.test(detail)) msg = '模型 ' + model + ' 目前不可用。';
    else if (status === 429) msg = '已達 Gemini 速率／額度上限，請稍後再試。';
    else if (status >= 500) msg = 'Gemini 服務暫時無法使用（' + status + '）。';
    var err = new Error(msg); err.status = status; return err;
  }
  async function callGeminiChatModel(model) {
    var key = getKey();
    var url = GEMINI_API_BASE + '/models/' +
      encodeURIComponent(model) + ':generateContent';
    var contents = aiHistory.slice(-12).map(function (m) {
      return { role: m.role === 'user' ? 'user' : 'model', parts: [{ text: cleanText(m.text, 6000) }] };
    });
    var body = {
      contents: contents,
      systemInstruction: { parts: [{ text: '你是台灣 APCS（大學程式設計先修檢測）練習網站的 AI 助教，用繁體中文、清楚簡潔地回答程式設計、演算法、程式判讀與除錯問題。程式碼用 Markdown code block。' }] },
      generationConfig: { temperature: 0.5, maxOutputTokens: 2048 }
    };
    var res;
    try { res = await fetchWithTimeout(url, { method: 'POST', headers: { 'Content-Type': 'application/json', 'x-goog-api-key': key }, body: JSON.stringify(body) }, 35000); }
    catch (e) { if (e && e.message === 'REQUEST_TIMEOUT') throw new Error('Gemini 回應逾時，請稍後重試。'); throw new Error('無法連線 Gemini，請確認網路。'); }
    if (!res.ok) {
      var msg = 'HTTP ' + res.status;
      try { var j = await res.json(); if (j.error && j.error.message) msg = j.error.message; } catch (e) {}
      throw geminiChatError(res.status, String(msg).slice(0, 300), model);
    }
    var data = await res.json();
    var cand = data.candidates && data.candidates[0];
    var txt = cand && cand.content && cand.content.parts && cand.content.parts.map(function (p) { return p.text || ''; }).join('');
    if (!txt) throw new Error('AI 未回傳內容');
    return txt;
  }
  async function callGeminiChat() {
    var models = [getModel()].concat(FALLBACK_MODELS).filter(function (m, i, a) { return a.indexOf(m) === i; });
    var lastErr = null;
    for (var i = 0; i < models.length; i++) {
      try {
        var answer = await callGeminiChatModel(models[i]);
        if (models[i] !== getModel()) setModel(models[i]);
        return answer;
      } catch (e) {
        lastErr = e;
        var canFallback = i < models.length - 1 && (e.status === 404 || e.status === 410 || e.status === 503 || /模型 .*目前不可用/.test(e.message || ''));
        if (!canFallback) throw e;
      }
    }
    throw lastErr || new Error('Gemini 目前無法使用');
  }

  var aiBusy = false;
  async function sendAI() {
    if (aiBusy) return;
    var ta = document.getElementById('cw-ai-in');
    var text = cleanText(ta.value, MAX_AI_TEXT);
    if (!text) return;
    if (!getKey()) {
      addAIBubble('model', '尚未設定 Google Gemini 金鑰。請先到 AI 解題頁設定；金鑰只在該分頁工作階段使用。', 'sys');
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
      s.src = src; s.crossOrigin = 'anonymous'; s.referrerPolicy = 'no-referrer';
      s.onload = resolve; s.onerror = function () { reject(new Error('載入失敗：' + src)); };
      document.head.appendChild(s);
    });
  }

  function promiseTimeout(promise, timeoutMs, message) {
    return new Promise(function (resolve, reject) {
      var timer = setTimeout(function () { reject(new Error(message)); }, timeoutMs);
      Promise.resolve(promise).then(function (value) { clearTimeout(timer); resolve(value); }, function (err) { clearTimeout(timer); reject(err); });
    });
  }

  function pubNotice(html) {
    var box = document.getElementById('cw-pub-msgs');
    box.innerHTML = '<div class="cw-notice">' + html + '</div>';
  }

  function setPublicWritable(enabled, reason) {
    publicWritable = !!enabled;
    var ta = document.getElementById('cw-pub-in'), btn = document.getElementById('cw-pub-send');
    if (!ta || !btn) return;
    ta.disabled = !publicWritable; btn.disabled = !publicWritable;
    ta.placeholder = publicWritable ? '和大家聊聊…（Enter 送出，最多 ' + MAX_PUBLIC_TEXT + ' 字）' : (reason || '聊天室目前僅供檢視');
    if (reason) ta.title = reason; else ta.removeAttribute('title');
  }
  function syncPublicWritable() {
    var ok = PUBLIC_CHAT_ENABLED && publicConnected && publicReadAllowed && !publicWriteDenied;
    setPublicWritable(ok, ok ? '' : (publicWriteDenied ? '聊天室寫入權限被拒，已切為唯讀' : (publicConnected ? '等待聊天室讀取權限…' : '聊天室離線，暫時無法送出')));
  }

  var publicIniting = false;
  async function openPublic() {
    var nickInput = document.getElementById('cw-nick');
    if (!nickInput.value) nickInput.value = lsGet(LS_NICK);
    if (!PUBLIC_CHAT_ENABLED) {
      setPublicWritable(false, '大眾聊天室尚未通過部署安全檢查');
      pubNotice('<h4>🔒 大眾聊天室尚未開放</h4>' +
        '本站採明確部署閘門；目前不會載入 Firebase SDK、不會匿名登入，也不會讀寫聊天室。' +
        '<br><br>部署者須先完成 Anonymous Auth、正式 Database Rules、Emulator deny-case、App Check、後端限流／管理與營運檢查，再於 <code>data/service-config.js</code> 明確設定 <code>publicChat.enabled: true</code>。');
      return;
    }
    if (firebaseReady && fbListening) return;   // 已連上就不重來
    if (publicIniting) return;                  // 連線中避免重入；失敗後可再切回此分頁重試
    publicIniting = true;

    if (!fbConfigured()) {
      publicIniting = false;
      setPublicWritable(false, '聊天室尚未設定');
      pubNotice(
        '<h4>🌐 大眾聊天室尚未啟用</h4>' +
        '這是跨使用者的即時聊天，需要站長設定 Firebase 後端：' +
        '<ol style="margin:8px 0;padding-left:20px;">' +
        '<li>到 <a href="https://console.firebase.google.com" target="_blank" rel="noopener noreferrer">Firebase 主控台</a> 建立專案</li>' +
        '<li>啟用 Anonymous Auth，建立 Realtime Database；若已配置對應 site key，再啟用 App Check 強制執行</li>' +
        '<li>部署版本庫內的 <code>firebase.database.rules.json</code>（不要使用測試模式）</li>' +
        '<li>把網頁 <code>Config</code> 貼進 <code>data/chat-widget.js</code> 最上方的 <code>FIREBASE_CONFIG</code></li>' +
        '<li>完成全部安全與營運檢查後，再把 <code>service-config.js</code> 的部署閘門設為 <code>true</code></li>' +
        '</ol>前端檢查與 2.5 秒送出節流都不能保護資料庫；請另配後端限流、檢舉／封鎖、保留期限與用量告警。');
      return;
    }

    setPublicWritable(false, '聊天室驗證與連線中…');
    pubNotice('連線中…');
    try {
      if (!window.firebase) {
        await loadScript('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
      }
      if (typeof firebase.auth !== 'function') {
        await loadScript('https://www.gstatic.com/firebasejs/10.12.2/firebase-auth-compat.js');
      }
      if (typeof firebase.database !== 'function') {
        await loadScript('https://www.gstatic.com/firebasejs/10.12.2/firebase-database-compat.js');
      }
      if (!firebaseReady) {
        fbApp = firebase.apps && firebase.apps.filter(function (app) { return app.name === 'apcs-chat'; })[0];
        if (!fbApp) fbApp = firebase.initializeApp(FIREBASE_CONFIG, 'apcs-chat');
        fbAuth = fbApp.auth();
        await promiseTimeout(fbAuth.setPersistence(firebase.auth.Auth.Persistence.SESSION), 10000, '匿名驗證工作階段設定逾時');
        if (!fbAuth.currentUser) await promiseTimeout(fbAuth.signInAnonymously(), 15000, '匿名驗證逾時');
        if (!fbAuth.currentUser) throw new Error('匿名驗證未完成');
        fbDB = fbApp.database();
        fbMsgRef = fbDB.ref('rooms/' + CHAT_ROOM + '/messages');
        firebaseReady = true;
        fbDB.ref('.info/connected').on('value', function (snap) {
          publicConnected = snap.val() === true;
          syncPublicWritable();
        });
      }
      startListening();
    } catch (err) {
      setPublicWritable(false, '聊天室驗證失敗，目前不可送出');
      pubNotice('<h4>⚠️ 聊天室不可用</h4>' + esc(err && err.message ? err.message : String(err)) +
        '<br><br>請站長確認已啟用 Anonymous Auth 並部署 Realtime Database 安全規則；若 Firebase 已強制 App Check，也必須先完成客戶端初始化。未完成前不會嘗試匿名寫入。');
    } finally {
      publicIniting = false;
    }
  }

  function startListening() {
    var box = document.getElementById('cw-pub-msgs');
    box.innerHTML = '';
    var hint = document.createElement('div');
    hint.className = 'cw-sys'; hint.textContent = '已以匿名帳號連線。暱稱未經驗證，請勿分享個資 🙂';
    box.appendChild(hint);
    if (fbListening) return;
    fbListening = true;
    var messageQuery = fbMsgRef.orderByChild('ts').limitToLast(MAX_MESSAGES);
    messageQuery.once('value').then(function () { publicReadAllowed = true; syncPublicWritable(); }).catch(function () {});
    messageQuery.on('child_added', function (snap) {
      var m = snap.val() || {};
      if (!m || typeof m !== 'object' || typeof m.name !== 'string' || typeof m.text !== 'string') return;
      var name = cleanNick(m.name), text = cleanText(m.text, MAX_PUBLIC_TEXT);
      if (!name || !text) return;
      var div = document.createElement('div');
      var mine = !!(fbAuth && fbAuth.currentUser && m.uid === fbAuth.currentUser.uid);
      div.className = 'cw-msg ' + (mine ? 'cw-me' : 'cw-other');
      var meta = document.createElement('span'); meta.className = 'cw-meta';
      meta.textContent = name + (typeof m.ts === 'number' ? ' · ' + timeStr(m.ts) : '');
      var body = document.createElement('span'); body.innerHTML = renderRich(text);
      div.appendChild(meta); div.appendChild(body);
      box.appendChild(div);
      scrollBottom('cw-pub-msgs');
    }, function (err) {
      // 讀取被拒（多半是 Database 安全規則擋掉 .read）時明確告知，而不是永遠空白
      fbListening = false;
      publicReadAllowed = false;
      setPublicWritable(false, '聊天室讀取權限被拒，目前不可送出');
      pubNotice('<h4>⚠️ 無法讀取聊天室</h4>' + esc(err && err.message ? err.message : String(err)) +
        '<br><br>Realtime Database Rules 不允許讀取，或匿名驗證／App Check 尚未正確設定。聊天室已切為不可寫入狀態。');
    });
  }

  async function sendPublic() {
    var nickInput = document.getElementById('cw-nick');
    var ta = document.getElementById('cw-pub-in');
    var text = cleanText(ta.value, MAX_PUBLIC_TEXT);
    var nick = cleanNick(nickInput.value);
    if (!nick) { nickInput.focus(); nickInput.style.borderColor = '#ef4444'; return; }
    if (isReservedNick(nick)) { nickInput.focus(); nickInput.style.borderColor = '#ef4444'; nickInput.title = '暱稱不可冒用官方、站長或管理員身分'; return; }
    nickInput.style.borderColor = '';
    nickInput.removeAttribute('title'); nickInput.value = nick;
    lsSet(LS_NICK, nick);
    if (!text) return;
    if (!PUBLIC_CHAT_ENABLED || !publicWritable || !firebaseReady || !fbMsgRef || !fbAuth || !fbAuth.currentUser) { openPublic(); return; }
    var now = Date.now();
    if (now - lastPublicSend < PUBLIC_SEND_INTERVAL_MS) {
      var wait = Math.ceil((PUBLIC_SEND_INTERVAL_MS - (now - lastPublicSend)) / 1000);
      var waitMsg = document.createElement('div'); waitMsg.className = 'cw-sys';
      waitMsg.textContent = '請稍候 ' + wait + ' 秒再送出（此為前端節流，站方仍須配置後端限流）。';
      document.getElementById('cw-pub-msgs').appendChild(waitMsg); scrollBottom('cw-pub-msgs'); return;
    }
    ta.value = ''; autoGrow(ta);
    var btn = document.getElementById('cw-pub-send'); btn.disabled = true;
    try {
      await promiseTimeout(fbMsgRef.push({
        name: nick, text: text, uid: fbAuth.currentUser.uid, clientId: clientId(),
        ts: firebase.database.ServerValue.TIMESTAMP
      }), 12000, '送出逾時');
      lastPublicSend = Date.now();
    } catch (err) {
      ta.value = text; autoGrow(ta);
      var box = document.getElementById('cw-pub-msgs');
      var d = document.createElement('div');
      d.className = 'cw-sys'; d.textContent = '⚠️ 送出失敗：' + (err && err.message ? err.message : '請稍後再試');
      box.appendChild(d); scrollBottom('cw-pub-msgs');
      if (err && (/permission/i.test(err.message || '') || /PERMISSION_DENIED/.test(err.code || ''))) { publicWriteDenied = true; syncPublicWritable(); }
    } finally {
      if (publicWritable) btn.disabled = false;
    }
  }

  function wirePublic() {
    var ta = document.getElementById('cw-pub-in');
    var nick = document.getElementById('cw-nick');
    nick.value = lsGet(LS_NICK);
    nick.addEventListener('change', function () {
      var safe = cleanNick(nick.value);
      if (safe && !isReservedNick(safe)) { nick.value = safe; lsSet(LS_NICK, safe); }
    });
    ta.addEventListener('input', function () { autoGrow(ta); });
    ta.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendPublic(); }
    });
    document.getElementById('cw-pub-send').addEventListener('click', sendPublic);
  }

  /* ═══ 啟動 ═══ */
  migrateLegacyStorage();
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', build);
  } else {
    build();
  }
})();

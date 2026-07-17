/* ══════════════════════════════════════════════════════════════════
 *  安裝「每日一題」Widget 小面板（reading.html 專用）
 *  ─ 在頁面右上角加一顆「📲 每日一題 Widget」按鈕，點開彈出安裝面板：
 *    ‧ 一鍵複製 Scriptable 程式碼（單一來源：widget/apcs-daily-widget.js）
 *    ‧ 下載 .js 檔
 *    ‧ iPhone / Mac 圖文安裝步驟
 *  ─ 網頁無法自動把 widget 裝上桌面（iOS/macOS 安全限制），此面板把手動
 *    步驟縮到最短。純前端、單檔。
 * ════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';
  if (window.__apcsWidgetInstallLoaded) return;
  window.__apcsWidgetInstallLoaded = true;

  var SCRIPT_URL = 'widget/apcs-daily-widget.js';   // 單一來源（相對站台根）
  var SCRIPT_NAME = 'APCS每日一題';                  // 使用者在 Scriptable 要取的腳本名稱
  var IOS_STORE = 'https://apps.apple.com/app/scriptable/id1405459188';
  var scriptText = null;                            // 抓到的程式碼快取

  function esc(s){ return String(s==null?'':s).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];}); }

  /* ── 樣式 ── */
  function injectStyle(){
    if (document.getElementById('wi-style')) return;
    var st = document.createElement('style'); st.id='wi-style';
    st.textContent =
      '#wi-btn{position:fixed;top:14px;right:14px;z-index:2147482800;display:flex;align-items:center;gap:6px;' +
      'padding:8px 13px;border:none;border-radius:999px;cursor:pointer;font-size:13px;font-weight:700;font-family:inherit;' +
      'color:#fff;background:linear-gradient(135deg,#4f46e5,#7c3aed);box-shadow:0 4px 14px rgba(79,70,229,.4);' +
      'transition:transform .15s,box-shadow .15s;}' +
      '#wi-btn:hover{transform:translateY(-1px);box-shadow:0 8px 20px rgba(79,70,229,.5);}' +
      '#wi-mask{position:fixed;inset:0;z-index:2147483000;background:rgba(15,23,42,.55);display:none;' +
      'align-items:center;justify-content:center;padding:18px;}' +
      '#wi-mask.on{display:flex;}' +
      '#wi-modal{width:560px;max-width:100%;max-height:88vh;background:#fff;border-radius:18px;overflow:hidden;' +
      'display:flex;flex-direction:column;box-shadow:0 24px 70px rgba(15,23,42,.4);color:#0f172a;font-family:inherit;}' +
      '#wi-head{padding:16px 18px;background:linear-gradient(135deg,#4f46e5,#7c3aed);color:#fff;display:flex;align-items:center;gap:8px;}' +
      '#wi-head .wi-t{font-weight:800;font-size:16px;} ' +
      '#wi-head .wi-close{margin-left:auto;background:rgba(255,255,255,.18);border:none;color:#fff;width:30px;height:30px;' +
      'border-radius:50%;cursor:pointer;font-size:17px;line-height:30px;}' +
      '#wi-head .wi-close:hover{background:rgba(255,255,255,.32);}' +
      '#wi-body{padding:16px 18px;overflow:auto;}' +
      '.wi-lead{font-size:13.5px;line-height:1.65;color:#475569;margin:0 0 14px;}' +
      '.wi-lead b{color:#4338ca;}' +
      '.wi-row{display:flex;gap:9px;flex-wrap:wrap;margin:0 0 14px;}' +
      '.wi-a{flex:1;min-width:150px;display:flex;align-items:center;justify-content:center;gap:7px;padding:11px;border-radius:11px;' +
      'font-size:13.5px;font-weight:700;cursor:pointer;text-decoration:none;border:none;font-family:inherit;}' +
      '.wi-a.pri{background:#4f46e5;color:#fff;} .wi-a.pri:hover{background:#4338ca;}' +
      '.wi-a.sec{background:#eef2ff;color:#4338ca;} .wi-a.sec:hover{background:#e0e7ff;}' +
      '.wi-a.ok{background:#22c55e;color:#fff;}' +
      '.wi-tabs{display:flex;gap:6px;margin:2px 0 12px;}' +
      '.wi-tab{flex:1;padding:9px;border:1.5px solid #e2e8f0;background:#fff;border-radius:10px;cursor:pointer;' +
      'font-size:13.5px;font-weight:700;font-family:inherit;color:#64748b;}' +
      '.wi-tab.on{border-color:#6366f1;background:#eef2ff;color:#4338ca;}' +
      '.wi-steps{margin:0;padding:0;list-style:none;counter-reset:s;}' +
      '.wi-steps li{position:relative;padding:9px 0 9px 34px;font-size:13.5px;line-height:1.6;border-bottom:1px solid #f1f5f9;}' +
      '.wi-steps li:last-child{border-bottom:none;}' +
      '.wi-steps li::before{counter-increment:s;content:counter(s);position:absolute;left:0;top:9px;width:23px;height:23px;' +
      'border-radius:50%;background:#eef2ff;color:#4338ca;font-weight:800;font-size:12.5px;text-align:center;line-height:23px;}' +
      '.wi-steps li b{color:#4338ca;} .wi-steps code{background:#f1f5f9;padding:1px 6px;border-radius:5px;font-size:12.5px;}' +
      '.wi-note{margin-top:12px;padding:10px 12px;background:#fffbeb;border:1px solid #fde68a;border-radius:10px;' +
      'font-size:12.5px;line-height:1.6;color:#92400e;}' +
      '.wi-hide{display:none;}' +
      'html[data-theme="dark"] #wi-mask{background:rgba(1,4,9,.7);}' +
      'html[data-theme="dark"] #wi-modal{background:#1c2128;color:#e6edf3;box-shadow:0 24px 70px rgba(1,4,9,.7);}' +
      'html[data-theme="dark"] .wi-lead{color:#8b949e;}html[data-theme="dark"] .wi-lead b{color:#a5d6ff;}' +
      'html[data-theme="dark"] .wi-a.sec{background:#252d3a;color:#a5d6ff;}html[data-theme="dark"] .wi-a.sec:hover{background:#2d3648;}' +
      'html[data-theme="dark"] .wi-tab{background:#1c2128;border-color:#3d444d;color:#8b949e;}' +
      'html[data-theme="dark"] .wi-tab.on{border-color:#79c0ff;background:#252d3a;color:#a5d6ff;}' +
      'html[data-theme="dark"] .wi-steps li{border-bottom-color:#30363d;}' +
      'html[data-theme="dark"] .wi-steps li::before{background:#252d3a;color:#a5d6ff;}' +
      'html[data-theme="dark"] .wi-steps li b{color:#a5d6ff;}html[data-theme="dark"] .wi-steps code{background:#30363d;color:#e6edf3;}' +
      'html[data-theme="dark"] .wi-note{background:#302a16;border-color:#6e5b1f;color:#f2cc60;}' +
      '@media(max-width:720px){#wi-btn{top:64px;right:10px;width:42px;height:42px;padding:0;justify-content:center;font-size:18px;}' +
      '#wi-btn span:last-child{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap;}' +
      '#wi-modal{max-height:calc(100vh - 24px);border-radius:14px;}}';
    document.head.appendChild(st);
  }

  /* ── 建立按鈕 + 面板 ── */
  var mask;
  function build(){
    injectStyle();

    var btn = document.createElement('button');
    btn.id = 'wi-btn';
    btn.innerHTML = '<span>📲</span><span>每日一題 Widget</span>';
    btn.title = '把每日一題裝成 iPhone / Mac 桌面小工具';
    btn.setAttribute('aria-haspopup', 'dialog');
    btn.setAttribute('aria-expanded', 'false');
    document.body.appendChild(btn);

    mask = document.createElement('div');
    mask.id = 'wi-mask';
    mask.setAttribute('aria-hidden', 'true');
    mask.innerHTML =
      '<div id="wi-modal" role="dialog" aria-modal="true" aria-labelledby="wi-title">' +
        '<div id="wi-head"><span>📲</span><span class="wi-t" id="wi-title">每日一題 Widget</span>' +
          '<button class="wi-close" aria-label="關閉">✕</button></div>' +
        '<div id="wi-body">' +
          '<p class="wi-lead">把「每日一題」放到 <b>iPhone / Mac 桌面</b>，每天自動出一題、可直接作答。' +
          '用免費 App <b>Scriptable</b> 執行，跟本站同步同一題。<br>' +
          '（網頁無法自動安裝桌面小工具，這是系統限制；照下面三步做一次即可。）</p>' +
          '<div class="wi-row">' +
            '<button class="wi-a pri" id="wi-copy">📋 複製程式碼</button>' +
            '<a class="wi-a sec" id="wi-dl" download="apcs-daily-widget.js">⬇️ 下載 .js</a>' +
            '<a class="wi-a sec" href="'+IOS_STORE+'" target="_blank" rel="noopener">🧩 取得 Scriptable</a>' +
          '</div>' +
          '<div class="wi-tabs">' +
            '<button class="wi-tab on" data-tab="ios">📱 iPhone</button>' +
            '<button class="wi-tab" data-tab="mac">💻 Mac</button>' +
          '</div>' +
          '<ol class="wi-steps" id="wi-ios">' +
            '<li>在 App Store 安裝免費 App <b>Scriptable</b>（可按上方「取得 Scriptable」）。</li>' +
            '<li>打開 Scriptable → 右上「<b>＋</b>」新增腳本 → 貼上剛剛<b>複製的程式碼</b>。</li>' +
            '<li>把腳本命名為 <code>'+esc(SCRIPT_NAME)+'</code>（左上角改名，<b>要一字不差</b>）。</li>' +
            '<li>回主畫面 → 長按空白處 → 左上「<b>＋</b>」→ 搜尋 <b>Scriptable</b> → 選<b>中或大尺寸</b> → 加入。</li>' +
            '<li>長按新加的小工具 → 「編輯小工具」→ Script 選 <code>'+esc(SCRIPT_NAME)+'</code> → 完成 🎉</li>' +
          '</ol>' +
          '<ol class="wi-steps wi-hide" id="wi-mac">' +
            '<li>在 Mac App Store 安裝免費 App <b>Scriptable</b>。</li>' +
            '<li>打開 Scriptable → 新增腳本 → 貼上<b>複製的程式碼</b> → 命名 <code>'+esc(SCRIPT_NAME)+'</code>。</li>' +
            '<li>點桌面右上角日期時間打開<b>通知中心</b> → 拉到最下方按「<b>編輯小工具</b>」。</li>' +
            '<li>左側找 <b>Scriptable</b> → 選<b>中或大尺寸</b> → 拖到通知中心 → 完成。</li>' +
            '<li>對著小工具按右鍵「編輯」→ Script 選 <code>'+esc(SCRIPT_NAME)+'</code> 🎉</li>' +
          '</ol>' +
          '<div class="wi-note">⚠️ 重點：Scriptable 裡的腳本名稱一定要叫 <b>'+esc(SCRIPT_NAME)+'</b>，' +
          '否則在小工具上點選項作答時會對不上。點選項作答時會短暫跳進 Scriptable 再回來，這是 iOS/macOS 對非原生小工具的限制。</div>' +
        '</div>' +
      '</div>';
    document.body.appendChild(mask);

    btn.addEventListener('click', open);
    mask.querySelector('.wi-close').addEventListener('click', close);
    mask.addEventListener('click', function(e){ if (e.target === mask) close(); });
    document.addEventListener('keydown', function(e){ if(e.key === 'Escape' && mask.classList.contains('on')) close(); });
    window.addEventListener('apcs:overlay-open', function(e){ if(e.detail !== 'widget-install') close(); });
    mask.querySelector('#wi-copy').addEventListener('click', doCopy);
    mask.querySelectorAll('.wi-tab').forEach(function(t){
      t.addEventListener('click', function(){ switchTab(t.getAttribute('data-tab')); });
    });
  }

  function switchTab(name){
    mask.querySelectorAll('.wi-tab').forEach(function(t){ t.classList.toggle('on', t.getAttribute('data-tab')===name); });
    mask.querySelector('#wi-ios').classList.toggle('wi-hide', name!=='ios');
    mask.querySelector('#wi-mac').classList.toggle('wi-hide', name!=='mac');
  }

  /* ── 抓程式碼（供複製 / 下載）── */
  function fetchScript(){
    if (scriptText != null) return Promise.resolve(scriptText);
    return fetch(SCRIPT_URL, { cache: 'no-store' })
      .then(function(r){ if(!r.ok) throw new Error('HTTP '+r.status); return r.text(); })
      .then(function(t){ scriptText = t; prepDownload(); return t; });
  }
  function prepDownload(){
    try {
      var a = mask.querySelector('#wi-dl');
      var blob = new Blob([scriptText], { type: 'text/javascript' });
      a.href = URL.createObjectURL(blob);
    } catch (e) {}
  }

  function open(){
    window.dispatchEvent(new CustomEvent('apcs:overlay-open', { detail: 'widget-install' }));
    mask.classList.add('on');
    mask.setAttribute('aria-hidden', 'false');
    var launch = document.getElementById('wi-btn'); if (launch) launch.setAttribute('aria-expanded', 'true');
    var closeBtn = mask.querySelector('.wi-close'); if (closeBtn) closeBtn.focus();
    fetchScript().catch(function(){
      var c = mask.querySelector('#wi-copy'); c.textContent='⚠️ 抓不到程式碼，稍後再試';
    });
  }
  function close(){
    if (!mask) return;
    mask.classList.remove('on');
    mask.setAttribute('aria-hidden', 'true');
    var launch = document.getElementById('wi-btn');
    if (launch) { launch.setAttribute('aria-expanded', 'false'); launch.focus(); }
  }

  function doCopy(){
    var btn = mask.querySelector('#wi-copy');
    fetchScript().then(function(text){
      function done(){ btn.classList.add('ok'); btn.textContent='✅ 已複製！貼進 Scriptable'; setTimeout(function(){ btn.classList.remove('ok'); btn.textContent='📋 複製程式碼'; }, 2600); }
      if (navigator.clipboard && navigator.clipboard.writeText){
        navigator.clipboard.writeText(text).then(done).catch(function(){ legacyCopy(text, done); });
      } else { legacyCopy(text, done); }
    }).catch(function(){ btn.textContent='⚠️ 抓不到程式碼'; });
  }
  function legacyCopy(text, done){
    var ta = document.createElement('textarea');
    ta.value = text; ta.style.position='fixed'; ta.style.opacity='0'; ta.style.top='0';
    document.body.appendChild(ta); ta.focus(); ta.select();
    try { document.execCommand('copy'); done(); } catch(e){ prompt('請手動複製（Cmd/Ctrl+C）：', text); }
    document.body.removeChild(ta);
  }

  /* ── 啟動 ── */
  function boot(){ build(); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();

/* ══════════════════════════════════════════════════════════════════
 *  統一錯題本共用儲存層（localStorage）
 *  三個來源共用：判讀題(reading) / 實作題(impl) / AI 上傳(ai)
 *  每筆紀錄：預設以日期為標題，使用者可改標題。
 *  被 index.html / reading.html / ai-solve.html / mistakes.html 共用。
 * ════════════════════════════════════════════════════════════════ */
(function (global) {
  'use strict';
  var LS = 'apcs_mistake_book_v1';

  function load() {
    try { var a = JSON.parse(localStorage.getItem(LS)); return Array.isArray(a) ? a : []; }
    catch (e) { return []; }
  }
  // 寫入；若超出配額，逐步丟棄較舊紀錄中最肥的欄位（圖片）後重試
  function save(arr) {
    try { localStorage.setItem(LS, JSON.stringify(arr)); return true; }
    catch (e) {
      // 配額爆掉：先把所有紀錄的圖片拿掉再試
      var stripped = arr.map(function (r) { var c = Object.assign({}, r); delete c.image; return c; });
      try { localStorage.setItem(LS, JSON.stringify(stripped)); return true; }
      catch (e2) { return false; }
    }
  }
  function pad(n) { return String(n).padStart(2, '0'); }
  function dateTitle(d) { return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate()); }

  // 新增一筆；若帶 sourceKey 且已存在，改為更新（次數+1、更新時間），避免同題重複洗版
  function add(rec) {
    var arr = load();
    if (rec.sourceKey) {
      var ex = null;
      for (var i = 0; i < arr.length; i++) { if (arr[i].sourceKey === rec.sourceKey) { ex = arr[i]; break; } }
      if (ex) {
        ex.count = (ex.count || 1) + 1;
        ex.updated = new Date().toISOString();
        // 允許以最新資訊覆蓋易變欄位（例如最近一次的作答／輸出）
        ['chosenIndex', 'passed', 'total', 'code', 'explanation', 'verified', 'detail'].forEach(function (k) {
          if (rec[k] !== undefined) ex[k] = rec[k];
        });
        save(arr);
        return ex;
      }
    }
    var now = new Date();
    var rec2 = Object.assign({
      id: 'm' + now.getTime().toString(36) + Math.random().toString(36).slice(2, 6),
      created: now.toISOString(),
      updated: now.toISOString(),
      title: dateTitle(now),
      count: 1
    }, rec);
    arr.unshift(rec2);
    save(arr);
    return rec2;
  }

  function all() { return load(); }
  function get(id) { var a = load(); for (var i = 0; i < a.length; i++) if (a[i].id === id) return a[i]; return null; }
  function update(id, patch) {
    var a = load(), r = null;
    for (var i = 0; i < a.length; i++) if (a[i].id === id) { r = a[i]; break; }
    if (r) { Object.assign(r, patch); r.updated = new Date().toISOString(); save(a); }
    return r;
  }
  function remove(id) { var a = load().filter(function (x) { return x.id !== id; }); save(a); return a; }
  function clearAll() { save([]); }
  function count() { return load().length; }

  global.MistakeBook = {
    LS: LS, load: load, save: save, add: add, all: all, get: get,
    update: update, remove: remove, clearAll: clearAll, count: count, dateTitle: dateTitle
  };
})(window);

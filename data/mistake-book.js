/* ══════════════════════════════════════════════════════════════════
 *  統一錯題本共用儲存層（localStorage）
 *  三個來源共用：判讀題(reading) / 實作題(impl) / AI 上傳(ai)
 *  每筆紀錄：預設以日期為標題，使用者可改標題。
 *  被 index.html / reading.html / ai-solve.html / mistakes.html 共用。
 * ════════════════════════════════════════════════════════════════ */
(function (global) {
  'use strict';
  var LS = 'apcs_mistake_book_v1';
  var LEGACY_READING_LS = 'apcs_reading_wrong_v1';
  var lastImportReport = { added: 0, skipped: 0 };

  function warn(code, detail) {
    try { global.dispatchEvent(new CustomEvent('apcs:mistake-storage-warning', { detail: Object.assign({ code: code }, detail || {}) })); } catch (e) {}
  }

  function normaliseRecord(rec) {
    if (!rec || typeof rec !== 'object' || Array.isArray(rec)) return null;
    var out = {};
    Object.keys(rec).forEach(function (key) {
      if (key !== '__proto__' && key !== 'prototype' && key !== 'constructor') out[key] = rec[key];
    });
    if (!out.type && out.source) out.type = out.source;
    if (!out.type && /^reading::/.test(out.sourceKey || '')) out.type = 'reading';
    if (!out.type && /^tutorial-reading-/.test(out.sourceKey || '')) out.type = 'reading';
    // Older tutorial records used a different set of field names.  Keep the
    // aliases readable without destroying the original payload.
    if (out.type === 'reading') {
      if (!out.qid && /^reading::/.test(out.sourceKey || '')) out.qid = out.sourceKey.slice(9);
      if (out.questionStem == null && out.question != null) out.questionStem = out.question;
      if (out.answerIndex == null && Number.isInteger(out.answer)) out.answerIndex = out.answer;
      if (out.explain == null && out.explanation != null) out.explain = out.explanation;
    }
    return out;
  }

  function announce() {
    try { global.dispatchEvent(new CustomEvent('apcs:mistakes-changed')); } catch (e) {}
  }
  function syncLegacyReading(qid, present) {
    if (typeof qid !== 'string' || !qid) return;
    var ids = [];
    try {
      var raw = JSON.parse(localStorage.getItem(LEGACY_READING_LS) || '[]');
      if (Array.isArray(raw)) ids = raw.filter(function (id) { return typeof id === 'string'; });
    } catch (e) {}
    var index = ids.indexOf(qid);
    if (present && index < 0) ids.push(qid);
    if (!present && index >= 0) ids.splice(index, 1);
    try { localStorage.setItem(LEGACY_READING_LS, JSON.stringify(ids)); } catch (e) {}
  }

  function load() {
    try {
      var a = JSON.parse(localStorage.getItem(LS));
      return Array.isArray(a) ? a.map(normaliseRecord).filter(Boolean) : [];
    }
    catch (e) { return []; }
  }
  // 寫入；若超出配額，逐張移除最大的圖片後重試，並通知 UI，絕不靜默遺失。
  function save(arr) {
    try { localStorage.setItem(LS, JSON.stringify(arr)); return true; }
    catch (e) {
      var stripped = arr.map(function (r) { return normaliseRecord(r); }).filter(Boolean);
      var candidates = stripped.map(function (r, i) { return { i: i, size: typeof r.image === 'string' ? r.image.length : 0, id: r.id }; })
        .filter(function (x) { return x.size > 0; }).sort(function (a, b) { return b.size - a.size; });
      var removed = [];
      for (var i = 0; i < candidates.length; i++) {
        delete stripped[candidates[i].i].image;
        removed.push(candidates[i].id || String(candidates[i].i));
        try {
          localStorage.setItem(LS, JSON.stringify(stripped));
          warn('IMAGES_REMOVED', { count: removed.length, ids: removed.slice() });
          return true;
        } catch (e2) {}
      }
      warn('WRITE_FAILED', { count: arr.length });
      return false;
    }
  }
  function pad(n) { return String(n).padStart(2, '0'); }
  function dateTitle(d) { return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate()); }

  // 新增一筆；若帶 sourceKey 且已存在，改為更新（次數+1、更新時間），避免同題重複洗版
  function add(rec) {
    rec = normaliseRecord(rec);
    if (!rec) return null;
    var arr = load();
    if (rec.sourceKey) {
      var ex = null;
      for (var i = 0; i < arr.length; i++) { if (arr[i].sourceKey === rec.sourceKey) { ex = arr[i]; break; } }
      if (ex) {
        ex.count = (ex.count || 1) + 1;
        ex.updated = new Date().toISOString();
        // 允許以最新資訊覆蓋易變欄位（例如最近一次的作答／輸出）
        ['chosenIndex', 'passed', 'total', 'code', 'explanation', 'explain', 'verified', 'sampleChecked', 'detail',
          'questionStem', 'options', 'answerIndex', 'qid', 'lang', 'level', 'topic',
          'masteryState', 'correctStreak', 'nextReviewAt'].forEach(function (k) {
          if (rec[k] !== undefined) ex[k] = rec[k];
        });
        if (!save(arr)) return null;
        if (ex.type === 'reading') syncLegacyReading(ex.qid, true);
        announce();
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
    if (!save(arr)) return null;
    if (rec2.type === 'reading') syncLegacyReading(rec2.qid, true);
    announce();
    return rec2;
  }

  function all() { return load(); }
  function get(id) { var a = load(); for (var i = 0; i < a.length; i++) if (a[i].id === id) return a[i]; return null; }
  function update(id, patch) {
    var a = load(), r = null;
    for (var i = 0; i < a.length; i++) if (a[i].id === id) { r = a[i]; break; }
    if (r) {
      Object.assign(r, patch);
      Object.assign(r, normaliseRecord(r));
      r.updated = new Date().toISOString();
      if (!save(a)) return null;
      announce();
    }
    return r;
  }
  function updateBySourceKey(sourceKey, patch) {
    var a = load(), r = null;
    for (var i = 0; i < a.length; i++) if (a[i].sourceKey === sourceKey) { r = a[i]; break; }
    if (r) {
      Object.assign(r, patch || {});
      Object.assign(r, normaliseRecord(r));
      r.updated = new Date().toISOString();
      if (!save(a)) return null;
      announce();
    }
    return r;
  }
  function remove(id) {
    var before = load(), removed = null;
    var a = before.filter(function (x) { if (x.id === id) removed = x; return x.id !== id; });
    if (!save(a)) return before;
    if (removed && removed.type === 'reading') syncLegacyReading(removed.qid, false);
    announce();
    return a;
  }
  function removeBySourceKey(sourceKey) {
    var removed = [];
    var a = load().filter(function (x) {
      if (x.sourceKey === sourceKey) { removed.push(x); return false; }
      return true;
    });
    if (!save(a)) return false;
    removed.forEach(function (x) { if (x.type === 'reading') syncLegacyReading(x.qid, false); });
    if (removed.length) announce();
    return removed.length;
  }
  function clearType(type) {
    var removed = [];
    var a = load().filter(function (x) { if (x.type === type) { removed.push(x); return false; } return true; });
    if (!save(a)) return 0;
    removed.forEach(function (x) { if (x.type === 'reading') syncLegacyReading(x.qid, false); });
    if (removed.length) announce();
    return removed.length;
  }
  function clearReadingBank() {
    var removed = [];
    var a = load().filter(function (x) {
      if (x.type === 'reading' && /^reading::/.test(x.sourceKey || '')) { removed.push(x); return false; }
      return true;
    });
    if (!save(a)) return false;
    removed.forEach(function (x) { syncLegacyReading(x.qid, false); });
    if (removed.length) announce();
    return removed.length;
  }
  function importRecords(records) {
    if (!Array.isArray(records)) return 0;
    if (records.length > 2000) throw new Error('TOO_MANY_RECORDS');
    var arr = load(), byKey = new Map();
    arr.forEach(function (x) { var key = x.sourceKey || x.id; if (typeof key === 'string') byKey.set(key, x); });
    var added = 0, skipped = 0;
    records.map(function (record) {
      var x = normaliseRecord(record);
      if (!x) return null;
      var bad = Object.keys(x).some(function (key) {
        if (typeof x[key] !== 'string') return false;
        return key === 'image' ? x[key].length > 4 * 1024 * 1024 : x[key].length > 250000;
      });
      if (bad || (Array.isArray(x.options) && (x.options.length > 20 || x.options.some(function (v) { return typeof v !== 'string' || v.length > 20000; })))) return null;
      return x;
    }).forEach(function (x) {
      if (!x) { skipped++; return; }
      var key = x.sourceKey || x.id;
      if (typeof key !== 'string' || !key || key.length > 300 || key === '__proto__' || key === 'prototype' || key === 'constructor') { skipped++; return; }
      var old = byKey.get(key);
      if (!old) { arr.push(x); byKey.set(key, x); added++; }
      else if (String(x.updated || x.created || '') > String(old.updated || old.created || '')) Object.assign(old, x);
    });
    if (!save(arr)) throw new Error('STORAGE_FULL');
    arr.forEach(function (x) { if (x.type === 'reading') syncLegacyReading(x.qid, true); });
    lastImportReport = { added: added, skipped: skipped };
    if (skipped) warn('IMPORT_SKIPPED', { count: skipped });
    announce();
    return added;
  }
  function clearAll() {
    if (!save([])) return false;
    try { localStorage.setItem(LEGACY_READING_LS, '[]'); } catch (e) {}
    announce();
    return true;
  }
  function count() { return load().length; }

  global.MistakeBook = {
    LS: LS, load: load, save: save, add: add, all: all, get: get,
    update: update, updateBySourceKey: updateBySourceKey, remove: remove, removeBySourceKey: removeBySourceKey,
    clearType: clearType, clearReadingBank: clearReadingBank, importRecords: importRecords,
    getLastImportReport: function () { return Object.assign({}, lastImportReport); },
    clearAll: clearAll, count: count, dateTitle: dateTitle
  };
})(window);

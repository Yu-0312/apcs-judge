/* Lightweight counts used by dashboard.html.  Keep this manifest in sync with
 * scripts/check-data.js when content files change; loading the dashboard should
 * not download the full multi-megabyte question banks. */
(function (global) {
  'use strict';
  global.CONTENT_STATS = Object.freeze({
    version: '20260717a',
    tutorial: Object.freeze({
      total: 101,
      chapterIds: Object.freeze(Array.from({ length: 101 }, function (_, i) { return i; }))
    }),
    judge: Object.freeze({ total: 300 }),
    reading: Object.freeze({ total: 2083 })
  });
})(window);

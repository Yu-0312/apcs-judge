/* 全站外部服務設定：Gemini 模型策略與 API 端點的單一來源。 */
(function (root) {
  'use strict';
  if (root.APCS_SERVICE_CONFIG) return;

  function deepFreeze(value) {
    if (!value || (typeof value !== 'object' && typeof value !== 'function') || Object.isFrozen(value)) return value;
    Object.getOwnPropertyNames(value).forEach(function (key) { deepFreeze(value[key]); });
    return Object.freeze(value);
  }

  var config = deepFreeze({
    schemaVersion: 1,
    cacheVersion: '20260717e',
    gemini: {
      apiBase: 'https://generativelanguage.googleapis.com/v1beta',
      defaultModel: 'gemini-3.5-flash',
      models: [
        { id: 'gemini-3.5-flash', label: 'gemini-3.5-flash（建議）' },
        { id: 'gemini-3.1-flash-lite', label: 'gemini-3.1-flash-lite（低延遲／低成本）' },
        { id: 'gemini-3.1-pro-preview', label: 'gemini-3.1-pro-preview（較強／Preview）' }
      ],
      fallbackModels: ['gemini-3.1-flash-lite']
    },
    judge0: {
      apiBase: 'https://ce.judge0.com'
    },
    // Fail closed：部署者完成 Auth、Rules、Emulator、App Check 與營運檢查後才可明確改為 true。
    publicChat: {
      enabled: false
    }
  });

  try {
    Object.defineProperty(root, 'APCS_SERVICE_CONFIG', {
      value: config,
      enumerable: true,
      writable: false,
      configurable: false
    });
  } catch (e) {
    root.APCS_SERVICE_CONFIG = config;
  }
})(typeof globalThis !== 'undefined' ? globalThis : window);

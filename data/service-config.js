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
    cacheVersion: '20260721a',
    gemini: {
      apiBase: 'https://generativelanguage.googleapis.com/v1beta',
      defaultModel: 'gemini-3.5-flash',
      models: [
        { id: 'gemini-3.5-flash', label: 'gemini-3.5-flash（建議）' },
        { id: 'gemini-3.1-flash-lite', label: 'gemini-3.1-flash-lite（低延遲／低成本）' },
        { id: 'gemini-3.1-pro', label: 'gemini-3.1-pro（推理較強）' },
        { id: 'gemini-3.5-pro', label: 'gemini-3.5-pro（深度思考旗艦／較慢）' }
      ],
      fallbackModels: ['gemini-3.1-flash-lite'],
      // 每步驟預設模型：讀題只做結構化擷取，用最省的一層；解題用建議款；
      // 深度思考時把「解題」換成旗艦推理模型。以下值都必須是上方 models 的 id，
      // 若不在 models 內，前端 resolveServiceConfig 會自動退回安全預設。
      steps: {
        read: 'gemini-3.1-flash-lite',
        solve: 'gemini-3.5-flash',
        coach: 'gemini-3.5-flash',
        deepSolve: 'gemini-3.5-pro'
      },
      // 深度思考管線：更高輸出／thinking 預算、best-of-K 自我一致性候選數、對拍輪數。
      deepThink: {
        thinkingBudget: 8192,
        maxOutputTokens: 32768,
        candidates: 3,
        stressRounds: 60,
        timeoutMs: 120000
      },
      // 一般解題輸出上限（避免長詳解＋程式碼被 8192 截斷）。
      solveMaxOutputTokens: 16384
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

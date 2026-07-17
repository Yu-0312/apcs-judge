(function (global) {
  'use strict';

  var STORAGE_KEY = 'apcs_theme_v1';
  var LIGHT = 'light';
  var DARK = 'dark';
  var media = global.matchMedia ? global.matchMedia('(prefers-color-scheme: light)') : null;

  function savedTheme() {
    try {
      var value = global.localStorage.getItem(STORAGE_KEY);
      return value === LIGHT || value === DARK ? value : null;
    } catch (error) {
      return null;
    }
  }

  function systemTheme() {
    return media && media.matches ? LIGHT : DARK;
  }

  function currentTheme() {
    var value = document.documentElement.dataset.theme;
    return value === LIGHT ? LIGHT : DARK;
  }

  function updateMeta(theme) {
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', theme === LIGHT ? '#f6f8fa' : '#0f1117');
  }

  function updateButtons(theme) {
    document.querySelectorAll('[data-theme-toggle]').forEach(function (button) {
      var next = theme === DARK ? LIGHT : DARK;
      button.textContent = theme === DARK ? '\u263e' : '\u2600';
      button.setAttribute('aria-label', next === LIGHT ? '切換為淺色模式' : '切換為深色模式');
      button.setAttribute('title', next === LIGHT ? '切換為淺色模式' : '切換為深色模式');
      button.setAttribute('aria-pressed', theme === DARK ? 'true' : 'false');
    });
  }

  function applyTheme(theme, persist, announce) {
    theme = theme === LIGHT ? LIGHT : DARK;
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    updateMeta(theme);
    updateButtons(theme);
    if (persist) {
      try { global.localStorage.setItem(STORAGE_KEY, theme); } catch (error) {}
    }
    if (announce && typeof global.CustomEvent === 'function') {
      global.dispatchEvent(new CustomEvent('apcs:theme-changed', { detail: { theme: theme } }));
    }
    return theme;
  }

  function installToggle() {
    if (document.querySelector('[data-theme-toggle]')) {
      updateButtons(currentTheme());
      return;
    }
    var header = document.querySelector('header');
    if (!header) return;
    var target = header.querySelector('.hright') || header.querySelector('.hnav') || header;
    var button = document.createElement('button');
    button.type = 'button';
    button.className = 'theme-toggle';
    button.setAttribute('data-theme-toggle', '');
    button.addEventListener('click', function () {
      applyTheme(currentTheme() === DARK ? LIGHT : DARK, true, true);
    });
    target.appendChild(button);
    updateButtons(currentTheme());
  }

  applyTheme(savedTheme() || systemTheme(), false, false);

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', installToggle);
  else installToggle();

  if (media) {
    var followSystem = function () {
      if (!savedTheme()) applyTheme(systemTheme(), false, true);
    };
    if (typeof media.addEventListener === 'function') media.addEventListener('change', followSystem);
    else if (typeof media.addListener === 'function') media.addListener(followSystem);
  }

  global.addEventListener('storage', function (event) {
    if (event.key !== STORAGE_KEY) return;
    var theme = event.newValue === LIGHT || event.newValue === DARK ? event.newValue : systemTheme();
    if (theme !== currentTheme()) applyTheme(theme, false, true);
  });

  global.APCSTheme = {
    STORAGE_KEY: STORAGE_KEY,
    current: currentTheme,
    set: function (theme) { return applyTheme(theme, true, true); },
    toggle: function () { return applyTheme(currentTheme() === DARK ? LIGHT : DARK, true, true); }
  };
})(window);

#!/usr/bin/env node
'use strict';

// Dependency-free static page contract check.  This intentionally validates
// only literal HTML attributes; URLs assembled by JavaScript are covered by
// their feature-specific contract tests.
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const pages = fs.readdirSync(ROOT).filter(name => name.endsWith('.html')).sort();
let errors = 0;
const fail = message => { errors++; console.error('  ✗ ' + message); };
const pass = message => console.log('  ✓ ' + message);

function withoutCode(source) {
  return source
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '')
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, '');
}

function decodePath(value) {
  try { return decodeURIComponent(value); }
  catch (error) { return value; }
}

function localTarget(page, raw) {
  if (!raw || /^(?:https?:|data:|mailto:|tel:|javascript:|blob:|\/\/)/i.test(raw)) return null;
  if (/[${}]/.test(raw)) return null;
  const hashAt = raw.indexOf('#');
  const fragment = hashAt >= 0 ? decodePath(raw.slice(hashAt + 1)) : '';
  const beforeHash = hashAt >= 0 ? raw.slice(0, hashAt) : raw;
  const pathname = decodePath(beforeHash.split('?')[0]);
  const target = pathname ? path.resolve(ROOT, path.dirname(page), pathname) : path.join(ROOT, page);
  return { target, fragment };
}

console.log('— 頁面基本結構 —');
for (const page of pages) {
  const source = fs.readFileSync(path.join(ROOT, page), 'utf8');
  const markup = withoutCode(source);
  if (!/<html\b[^>]*\blang=["'][^"']+["']/i.test(markup)) fail(`${page} 缺 html lang`);
  if (!/<title>[^<]+<\/title>/i.test(markup)) fail(`${page} 缺非空 title`);
  if (!/<meta\b[^>]*name=["']viewport["'][^>]*>/i.test(markup)) fail(`${page} 缺 viewport meta`);

  const ids = [...markup.matchAll(/\bid=["']([^"']+)["']/gi)].map(match => match[1]);
  const seen = new Set();
  for (const id of ids) {
    if (seen.has(id)) fail(`${page} 有重複 id="${id}"`);
    seen.add(id);
  }

  for (const match of markup.matchAll(/<a\b[^>]*\btarget=["']_blank["'][^>]*>/gi)) {
    const tag = match[0];
    const rel = (tag.match(/\brel=["']([^"']*)["']/i) || [])[1] || '';
    if (!/\bnoopener\b/i.test(rel)) fail(`${page} 的 target="_blank" 連結缺 rel="noopener"`);
  }
}
if (!errors) pass(`${pages.length} 個頁面皆有 lang、title、viewport，且無靜態重複 id`);

console.log('— 本機連結與資產 —');
for (const page of pages) {
  const source = withoutCode(fs.readFileSync(path.join(ROOT, page), 'utf8'));
  for (const match of source.matchAll(/\b(?:href|src)=["']([^"']+)["']/gi)) {
    const raw = match[1];
    const resolved = localTarget(page, raw);
    if (!resolved) continue;
    if (!resolved.target.startsWith(ROOT + path.sep) && resolved.target !== ROOT) {
      fail(`${page} 的路徑逸出專案：${raw}`);
      continue;
    }
    if (!fs.existsSync(resolved.target)) {
      fail(`${page} 連到不存在的本機資源：${raw}`);
      continue;
    }
    if (resolved.fragment && path.extname(resolved.target).toLowerCase() === '.html') {
      const targetMarkup = withoutCode(fs.readFileSync(resolved.target, 'utf8'));
      const ids = new Set([...targetMarkup.matchAll(/\b(?:id|name)=["']([^"']+)["']/gi)].map(item => item[1]));
      if (!ids.has(resolved.fragment)) fail(`${page} 的片段不存在：${raw}`);
    }
  }
}
if (!errors) pass('所有靜態本機連結、資產與頁內片段都存在');

console.log(`\n結果：${errors} 錯誤`);
process.exit(errors ? 1 : 0);

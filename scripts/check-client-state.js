#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.join(__dirname, '..');
let errors = 0;
const fail = message => { errors++; console.error('  ✗ ' + message); };
const pass = message => console.log('  ✓ ' + message);
const assert = (condition, message) => { if (!condition) fail(message); };

function makeStorage() {
  const values = new Map();
  let shouldThrowGet = () => false;
  let shouldThrow = () => false;
  let shouldThrowRemove = () => false;
  let successfulSets = 0;
  return {
    getItem(key) {
      key = String(key);
      if (shouldThrowGet(key)) { const error = new Error('blocked'); error.name = 'SecurityError'; throw error; }
      return values.has(key) ? values.get(key) : null;
    },
    setItem(key, value) {
      key = String(key); value = String(value);
      if (shouldThrow(key, value)) { const error = new Error('quota'); error.name = 'QuotaExceededError'; throw error; }
      values.set(key, value);
      successfulSets++;
    },
    removeItem(key) {
      key = String(key);
      if (shouldThrowRemove(key)) { const error = new Error('blocked'); error.name = 'SecurityError'; throw error; }
      values.delete(key);
    },
    setGetFailure(predicate) { shouldThrowGet = predicate || (() => false); },
    setFailure(predicate) { shouldThrow = predicate || (() => false); },
    setRemoveFailure(predicate) { shouldThrowRemove = predicate || (() => false); },
    setCount() { return successfulSets; },
    raw(key) { return values.get(key); }
  };
}

function loadMistakeBook(storage) {
  const events = [];
  class CustomEvent { constructor(type, init) { this.type = type; this.detail = init && init.detail; } }
  const window = { dispatchEvent(event) { events.push(event); } };
  const context = { window, localStorage: storage, CustomEvent, console };
  vm.runInNewContext(fs.readFileSync(path.join(ROOT, 'data', 'mistake-book.js'), 'utf8'), context, { filename: 'mistake-book.js' });
  return { book: window.MistakeBook, events };
}

function loadLearningState(storage) {
  const window = {};
  const context = { window, localStorage: storage, console, Date, Set, Map };
  vm.runInNewContext(fs.readFileSync(path.join(ROOT, 'data', 'learning-state.js'), 'utf8'), context, { filename: 'learning-state.js' });
  return window.LearningState;
}

console.log('— MistakeBook 儲存一致性 —');
{
  const storage = makeStorage();
  const { book, events } = loadMistakeBook(storage);
  const added = book.add({ type: 'reading', sourceKey: 'reading::q1', qid: 'q1', questionStem: 'Q' });
  assert(added && book.count() === 1, '正常新增後應可讀回一筆紀錄');
  const changedBefore = events.filter(event => event.type === 'apcs:mistakes-changed').length;

  storage.setFailure(key => key === book.LS);
  const failedAdd = book.add({ type: 'impl', sourceKey: 'impl::py::p1', code: 'print(1)' });
  assert(failedAdd === null, '寫入失敗時 add() 必須回傳 null');
  assert(book.count() === 1, '寫入失敗不得讓 UI 以為新增已持久化');
  assert(events.filter(event => event.type === 'apcs:mistakes-changed').length === changedBefore, '寫入失敗不得送出 mistakes-changed');
  assert(book.update(added.id, { title: 'changed' }) === null, '寫入失敗時 update() 必須回傳 null');
  assert(book.get(added.id).title !== 'changed', 'update() 失敗不得改變持久資料');
  assert(book.removeBySourceKey('reading::q1') === false, 'removeBySourceKey() 寫入失敗時必須回傳 false');
  assert(book.clearReadingBank() === false, 'clearReadingBank() 寫入失敗時必須回傳 false');
  assert(book.count() === 1, '判讀錯題刪除／清空失敗時必須保留原紀錄');
  book.remove(added.id);
  assert(book.count() === 1, 'remove() 寫入失敗時必須保留原紀錄');
  assert(book.clearAll() === false && book.count() === 1, 'clearAll() 寫入失敗時必須回傳 false 且保留資料');
  pass('新增／更新／刪除／清空失敗不再宣稱成功');
}

console.log('— MistakeBook quota 圖片降級 —');
{
  const storage = makeStorage();
  const { book, events } = loadMistakeBook(storage);
  storage.setFailure((key, value) => key === book.LS && value.includes('data:image/'));
  const added = book.add({ type: 'ai', sourceKey: 'ai::q2', image: 'data:image/jpeg;base64,AAAA', problemStatement: 'Q' });
  const stored = book.all()[0];
  assert(!!added && stored && !stored.image, '圖片造成 quota 時應移除圖片並保留文字紀錄');
  assert(events.some(event => event.type === 'apcs:mistake-storage-warning' && event.detail && event.detail.code === 'IMAGES_REMOVED'), '移除圖片時必須發出可見警告事件');
  pass('圖片 quota fallback 會保留文字並送出警告');
}

console.log('— LearningState 精熟進度與題庫品質 —');
{
  const storage = makeStorage();
  const state = loadLearningState(storage);
  const first = state.recordReadingAnswer('read-q1', 0, false, { wasWrong: true, level: '初級' });
  const second = state.recordReadingAnswer('read-q1', 1, true, { wasWrong: false, level: '初級' });
  const third = state.recordReadingAnswer('read-q1', 1, true, { wasWrong: false, level: '初級' });
  assert(first && first.masteryState === 'learning', '首次答錯應進入 learning');
  assert(second && second.masteryState === 'review', '答錯後首次答對應進入 review');
  assert(third && third.masteryState === 'mastered' && third.correctStreak === 2, '連續兩次答對應進入 mastered');
  assert(Number.isFinite(Date.parse(third && third.nextReviewAt)), '精熟紀錄應包含有效的下次複習時間');

  state.recordJudgeHint('p1', 'py', 1);
  state.recordJudgeAttempt('p1', 'py', true, 1);
  state.recordJudgeSolutionLoaded('p1', 'py');
  state.recordJudgeAttempt('p2', 'cpp', false, 0);
  const stats = state.judgeStats();
  assert(stats.attempted === 2 && stats.attempts === 2, '題庫品質統計應累計題目 × 語言的嘗試紀錄');
  assert(stats.firstAttemptCorrect === 1 && stats.solutionLoads === 1, '題庫品質統計應保留首次通過與載入解答次數');
  pass('答錯後複習階段與題庫品質指標可跨頁累積');
}

console.log('— LearningState 備份邊界與儲存失敗 —');
{
  const storage = makeStorage();
  const state = loadLearningState(storage);
  storage.setItem('ai_solve_gemini_key', 'should-never-export');
  storage.setItem('firebase_session', 'should-never-export');
  storage.setItem('apcs_study_plan_v2', JSON.stringify({ checked: ['week-1'] }));
  const backup = state.exportBackup();
  assert(backup.storage.apcs_study_plan_v2, '學習計畫應包含在備份中');
  assert(!Object.prototype.hasOwnProperty.call(backup.storage, 'ai_solve_gemini_key') && !Object.prototype.hasOwnProperty.call(backup.storage, 'firebase_session'), '備份 allow-list 不得匯出 API 金鑰或聊天身分');
  let invalidRejected = false;
  try { state.importBackup({ app: 'not-this-app', storage: {} }); } catch (error) { invalidRejected = error.message === 'INVALID_BACKUP'; }
  assert(invalidRejected, '非本站備份格式必須拒絕匯入');

  const preserved = state.recordReadingAnswer('read-preserve', 1, false, { wasWrong: true });
  assert(!!preserved, '測試前應先保存一筆可供回滾驗證的判讀紀錄');
  storage.setFailure(key => key === state.KEY);
  assert(state.recordReadingAnswer('read-q2', 0, true, {}) === null, 'LearningState 寫入失敗時不得回傳已保存的判讀紀錄');
  assert(state.recordJudgeAttempt('p3', 'java', true, 0) === null, 'LearningState 寫入失敗時不得回傳已保存的題庫紀錄');
  assert(state.clearReading() === false, '判讀進度清除失敗時必須回傳 false');
  assert(!!state.get().reading.answers['read-preserve'], '判讀進度清除失敗不得遺失既有紀錄');
  assert(state.markMigration('readingWrongToMistakeBook') === false && !state.migrationDone('readingWrongToMistakeBook'), '遷移旗標寫入失敗時不得宣稱完成');
  storage.setFailure(() => false);
  storage.setRemoveFailure(key => key === state.KEY);
  let clearRejected = false;
  try { state.clearAll(); } catch (error) { clearRejected = error.message === 'STORAGE_FAILURE'; }
  assert(clearRejected, '清除 localStorage 被瀏覽器拒絕時必須回報失敗');
  pass('備份排除秘密資料，匯入／寫入／清除失敗皆有明確訊號');
}

console.log('— LearningState 交易回滾與啟動效能 —');
{
  const unavailableStorage = makeStorage();
  unavailableStorage.setGetFailure(() => true);
  let unavailableState = null;
  try { unavailableState = loadLearningState(unavailableStorage); } catch (error) {}
  assert(unavailableState && unavailableState.get().version === 3, 'localStorage 讀取被拒時，共用狀態模組仍應可啟動');

  const stableStorage = makeStorage();
  loadLearningState(stableStorage);
  const writesAfterFirstLoad = stableStorage.setCount();
  loadLearningState(stableStorage);
  assert(stableStorage.setCount() === writesAfterFirstLoad, '已完成遷移的狀態不應在每次載入時整份重寫');

  const malformedRunStorage = makeStorage();
  malformedRunStorage.setItem('apcs_learning_state_v2', JSON.stringify({ reading: { answers: {}, runs: ['invalid', { id: 'valid-run' }] } }));
  const malformedRunState = loadLearningState(malformedRunStorage);
  assert(malformedRunState.readingStats().runs === 1, '損壞或偽造的判讀回合不得計入累積進度');

  const failedRunStorage = makeStorage();
  const failedRunState = loadLearningState(failedRunStorage);
  failedRunStorage.setFailure(key => key === failedRunState.KEY);
  assert(failedRunState.recordReadingRun({ answered: 1, correct: 1, questionIds: ['q1'] }) === null, '判讀回合寫入失敗時不得回傳已保存紀錄');
  assert(failedRunState.readingStats().runs === 0, '判讀回合寫入失敗不得污染持久進度');

  const importStorage = makeStorage();
  importStorage.setItem('tut_done', '[0]');
  importStorage.setItem('apcs_study_plan_v2', JSON.stringify({ version: 2, planId: 'starter', language: 'py', startDate: '2026-07-17', done: { starter: [0], apcs: [], advanced: [] } }));
  const importState = loadLearningState(importStorage);
  importStorage.setFailure(key => key === 'apcs_study_plan_v2');
  let importRolledBack = false;
  try {
    importState.importBackup({ app: 'apcs-learning-backup', version: 1, storage: {
      tut_done: '[1]',
      apcs_study_plan_v2: JSON.stringify({ version: 2, planId: 'apcs', language: 'cpp', startDate: '2026-07-01', done: { starter: [1], apcs: [0], advanced: [] } })
    } });
  } catch (error) { importRolledBack = error.message === 'STORAGE_FULL'; }
  assert(importRolledBack && importStorage.raw('tut_done') === '[0]', '備份中途寫入失敗時必須還原先前已寫入的欄位');

  importStorage.setFailure(() => false);
  importState.importBackup({ app: 'apcs-learning-backup', version: 1, storage: {
    apcs_study_plan_v2: JSON.stringify({ version: 2, planId: 'apcs', language: 'cpp', startDate: '2026-07-01', done: { starter: [1], apcs: [0], advanced: [] } })
  } });
  const mergedPlan = JSON.parse(importStorage.raw('apcs_study_plan_v2'));
  assert(mergedPlan.planId === 'apcs' && mergedPlan.language === 'cpp' && mergedPlan.done.starter.join(',') === '0,1', '跨裝置恢復應採用備份設定並合併兩端完成進度');

  const beforeCorrupt = importStorage.raw('tut_done');
  let corruptRejected = false;
  try { importState.importBackup({ app: 'apcs-learning-backup', version: 1, storage: { tut_done: '{' } }); }
  catch (error) { corruptRejected = error.message === 'INVALID_BACKUP'; }
  assert(corruptRejected && importStorage.raw('tut_done') === beforeCorrupt, '損壞的備份欄位必須整批拒絕且不得改動現有資料');

  const clearStorage = makeStorage();
  clearStorage.setItem('tut_done', '[2]');
  clearStorage.setItem('apcs_study_plan_v2', JSON.stringify({ version: 2, planId: 'starter', language: 'py', startDate: '2026-07-17', done: { starter: [0], apcs: [], advanced: [] } }));
  const clearState = loadLearningState(clearStorage);
  clearStorage.setRemoveFailure(key => key === 'apcs_study_plan_v2');
  let clearRolledBack = false;
  try { clearState.clearAll(); } catch (error) { clearRolledBack = error.message === 'STORAGE_FAILURE'; }
  assert(clearRolledBack && clearStorage.raw('tut_done') === '[2]' && clearStorage.raw('apcs_study_plan_v2'), '清除中途失敗時必須恢復先前已移除的學習資料');
  pass('備份匯入／清除具備交易回滾，且穩定狀態不做無效重寫');
}

console.log('— 判讀舊錯題遷移契約 —');
{
  const source = fs.readFileSync(path.join(ROOT, 'reading.html'), 'utf8');
  assert(source.includes('let migratingLegacyWrong=false'), '舊錯題遷移必須有事件同步鎖');
  assert(/migratingLegacyWrong=true;[\s\S]*finally\{migratingLegacyWrong=false;\}/.test(source), '遷移同步鎖必須以 finally 解除');
  assert(source.includes("if(!LearningState.markMigration('readingWrongToMistakeBook'))"), '只有成功寫入遷移旗標後才能切換來源');
  assert(source.includes('if(migratingLegacyWrong)return true;'), '遷移期間不得以部分新資料覆寫舊索引');
  assert(source.includes("原資料已保留"), '遷移失敗必須向使用者明確說明舊資料仍保留');
  pass('遷移過程不會因同步事件或儲存失敗截斷舊錯題');
}

console.log('— 跨分頁同步與每日一題容錯 —');
{
  const themeSource = fs.readFileSync(path.join(ROOT, 'data', 'theme.js'), 'utf8');
  const planSource = fs.readFileSync(path.join(ROOT, 'studyplan.html'), 'utf8');
  const dailySource = fs.readFileSync(path.join(ROOT, 'data', 'daily-question.js'), 'utf8');
  const chatSource = fs.readFileSync(path.join(ROOT, 'data', 'chat-widget.js'), 'utf8');
  assert(themeSource.includes("global.addEventListener('storage'") && themeSource.includes('event.key !== STORAGE_KEY'), 'Light / Dark 選擇必須同步到其他分頁');
  assert(planSource.includes("window.addEventListener('storage'") && planSource.includes('event.key!==PLAN_KEY'), '學習地圖進度必須同步到其他分頁');
  assert(planSource.includes('function validPlanDate') && planSource.includes("date.toISOString().slice(0,10)===value"), '學習地圖必須拒絕不存在的日期');
  assert(dailySource.includes("typeof o === 'object' && !Array.isArray(o)"), '每日一題必須拒絕陣列形狀的損壞進度，避免假保存');
  assert(dailySource.includes('var persisted = commit(q, selected);') && dailySource.includes('!persisted') && dailySource.includes('作答結果未能保存'), '每日一題寫入失敗時不得假裝進度已保存');
  assert(/function saveDone\(o\)[\s\S]*return true;[\s\S]*return false;/.test(dailySource), '每日一題儲存函式必須回報成功或失敗');
  assert(dailySource.includes('html[data-theme="dark"] #dq-panel') && chatSource.includes('html[data-theme="dark"] #cw-panel'), '浮動學習工具必須跟隨全站深色主題');
  const widgetSource = fs.readFileSync(path.join(ROOT, 'data', 'widget-install.js'), 'utf8');
  assert(widgetSource.includes('html[data-theme="dark"] #wi-modal') && widgetSource.includes('html[data-theme="dark"] .wi-note'), 'Widget 安裝面板必須跟隨全站深色主題');
  const readingSource = fs.readFileSync(path.join(ROOT, 'reading.html'), 'utf8');
  assert(readingSource.includes('const runSaved=LearningState.recordReadingRun(') && readingSource.includes('回合統計未能保存'), '判讀回合結束時寫入失敗必須告知使用者');
  pass('主題／計畫可跨分頁同步，每日一題不再誤報保存成功');
}

console.log(`\n結果：${errors} 錯誤`);
process.exit(errors ? 1 : 0);

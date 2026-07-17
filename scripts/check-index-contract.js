#!/usr/bin/env node
'use strict';

// Lightweight regression contracts for the build-free index page.
const fs = require('fs');
const path = require('path');
const assert = require('assert');
const vm = require('vm');
const { spawnSync } = require('child_process');
const source = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');
const problemSource = fs.readFileSync(path.join(__dirname, '..', 'data', 'judge-problems.js'), 'utf8');
const PROBLEMS = vm.runInNewContext(problemSource + '\n;PROBLEMS');

function section(start, end) {
  const a = source.indexOf(start), b = source.indexOf(end, a + start.length);
  assert(a >= 0 && b > a, `missing section: ${start}`);
  return source.slice(a, b);
}

for (const obsoleteUi of ['只看未 AC', '執行並評分', 'Run & Grade', "allPass:'🎉 全部通過！'", "r.pass?'AC':'WA'"]) {
  assert(!source.includes(obsoleteUi), `obsolete full-verdict UI remains: ${obsoleteUi}`);
}
assert(source.includes('僅檢查題面公開範例'), 'sample-only scope must be visible');
assert(source.includes('AI 解題：公開範例一致性檢查（非 AC 判定）'), 'AI helper link must disclose that its check is not an AC verdict');
assert(source.includes("SAMPLE_RESULTS_KEY = 'apcs_judge_sample_results_v2'"), 'semantic sample result storage is missing');
assert(source.includes("LEGACY_SCORES_KEY = 'apcs_judge_scores_v1'"), 'legacy progress migration is missing');

// Execute the migration in isolation: legacy records are copied, current semantic
// records win on key conflicts, invalid keys are dropped, and the legacy backup remains.
const migrationSource = section('const SAMPLE_RESULTS_KEY', 'let sampleResults = loadSampleResults');
const legacyRaw = JSON.stringify({ py_p101:{passed:1,total:1}, bad_key:{passed:1,total:1} });
const storage = new Map([
  ['apcs_judge_scores_v1', legacyRaw],
  ['apcs_judge_sample_results_v2', JSON.stringify({ cpp_p101:{passed:1,total:1} })]
]);
const migration = vm.runInNewContext(migrationSource + '\n;({ loadSampleResults });', {
  PROBLEMS:[{id:'p101'}], LANGS:{py:{},cpp:{}},
  localStorage:{ getItem:key => storage.has(key) ? storage.get(key) : null, setItem:(key, value) => storage.set(key, value) }
});
const migrated = migration.loadSampleResults();
assert(migrated.py_p101 && migrated.cpp_p101 && !migrated.bad_key, 'legacy and semantic sample records must merge safely');
assert(storage.get('apcs_judge_scores_v1') === legacyRaw, 'legacy progress backup must not be deleted or rewritten');

const switchLang = section('function switchLang', 'function updateStatus');
assert(!switchLang.includes('initPython('), 'switching to Python must not eagerly load Pyodide');
assert(source.includes("if (!pyWorker) initPython();"), 'first Python execution must still initialize Pyodide');

const runCode = section('async function runCode', 'function recordImplMistake');
const consentAt = runCode.indexOf('if (!ensureJudge0Consent()) return;');
const runningAt = runCode.indexOf('running = true;');
assert(consentAt >= 0 && runningAt > consentAt, 'Judge0 disclosure cancel path must run before submission state starts');
assert(runCode.includes('code.length > JUDGE0_MAX_SOURCE_CHARS') && runCode.includes('s.input.length > JUDGE0_MAX_STDIN_CHARS'), 'Judge0 payload limits must be checked before submission');

const batch = section('async function judge0SubmitBatch', '// 輸出正規化');
assert(batch.includes('res.status === 404 || res.status === 405'), 'batch support must only be disabled for 404/405');
assert(batch.includes('BATCH_TRANSIENT:'), 'transient batch failure classification is missing');
assert(source.includes('new AbortController()') && source.includes('JUDGE0_FETCH_TIMEOUT_MS'), 'Judge0 fetch timeout is missing');
assert(source.includes("JUDGE0_CONSENT_KEY = 'apcs_judge0_disclosure_v1'"), 'session-scoped Judge0 disclosure state is missing');
assert(source.includes('sessionStorage.getItem(JUDGE0_CONSENT_KEY)'), 'Judge0 disclosure must be remembered only for the current session');
assert(source.includes('ensureJudge0Consent()'), 'Judge0 disclosure/consent gate is missing');
assert(source.includes('JUDGE0_MAX_SOURCE_CHARS') && source.includes('JUDGE0_MAX_STDIN_CHARS'), 'Judge0 payload limits are missing');
assert(source.includes('assertJudge0Payload(code, [stdin])') && source.includes('assertJudge0Payload(code, stdins)'), 'Judge0 submission helpers must enforce payload limits');
assert(source.includes('EXEC_OUTPUT_MAX_CHARS = 200000') && source.includes('class _LimitedIO(io.StringIO)'), 'Python stdout/stderr must be bounded at 200k');
assert(source.includes('__r_out_truncated') && source.includes('errOutputTruncated'), 'truncated execution output must be explicitly reported');
const pyWrapperSource = section('const PY_WRAPPER', 'const PY_WORKER_SRC');
const pyWrapper = vm.runInNewContext(pyWrapperSource + '\n;PY_WRAPPER;');
const pyLimitCheck = spawnSync(process.env.PYTHON_BIN || 'python3', ['-c', `__stdin=''; __code="print('x'*200100)"\n${pyWrapper}\nassert __r_out_truncated and len(__r_out) <= 200000\nassert not __r_err_truncated`], { encoding:'utf8', timeout:10000 });
assert(pyLimitCheck.status === 0, `Python output limiter failed: ${pyLimitCheck.stderr || pyLimitCheck.error || pyLimitCheck.status}`);
assert((source.match(/max_file_size: 1024/g) || []).length >= 2, 'single and batch Judge0 requests need max_file_size');
assert(source.includes('boundedExecutionText(data.stdout)') && source.includes("boundedExecutionText(data.stderr || data.compile_output || '')"), 'Judge0 stdout/stderr must be clipped locally');

const deepLinkSource = section('function parsePracticeDeepLink', '// 題目內容的英文對照');
const parseDeepLink = vm.runInNewContext(deepLinkSource + '\n;parsePracticeDeepLink;', {
  LANGS:{py:{},cpp:{},c:{},java:{}}, PROBLEMS,
  window:{location:{search:'?problem=src135_b965&lang=cpp'}}, URLSearchParams
});
assert(parseDeepLink().problem === 'src135_b965' && parseDeepLink().lang === 'cpp', 'safe exact deep links must support real non-pNNN problem ids');
const invalidDeepLink = vm.runInNewContext(deepLinkSource + '\n;parsePracticeDeepLink;', {
  LANGS:{py:{}}, PROBLEMS, window:{location:{search:'?problem=../../x&lang=ruby'}}, URLSearchParams
})();
assert(invalidDeepLink.problem === null && invalidDeepLink.lang === null, 'unsafe/unknown deep-link values must be ignored');

assert(source.includes('PROGRESS_IMPORT_MAX_BYTES = 12 * 1024 * 1024') && source.includes('f.size > PROGRESS_IMPORT_MAX_BYTES'), 'single-page progress imports need a 12 MB limit');
assert(source.includes('MAX_DRAFT_RECORDS = 1200') && source.includes('MAX_DRAFT_CHARS = 200000') && source.includes('sanitizeDraftMap(data.drafts, true)'), 'imported drafts need count/key/length validation');
assert(source.includes('sanitizeImportedOnboarding(data.onboarding)'), 'imported onboarding data needs strict shape validation');

assert(source.includes('role="dialog"') && source.includes('aria-modal="true"') && source.includes('id="hint-level-status"'), 'progressive hint UI needs an ARIA dialog and visible level state');
assert(source.includes("e.key === 'Escape' && isHintOpen()") && source.includes('hintReturnFocus'), 'hint dialog needs Escape and focus restoration');
assert(source.includes('revealNextHint()') && source.includes("hintNext:'再看一層'"), 'hints must reveal one additional layer on request');
assert(source.includes('LearningState.recordJudgeAttempt') && source.includes('LearningState.recordJudgeHint') && source.includes('LearningState.recordJudgeSolutionLoaded'), 'judge attempts, hint levels, and solution loads must be recorded');
const hintSplitSource = section('function splitHintLayers', 'function rememberHintLevel');
const splitHintLayers = vm.runInNewContext('const MAX_HINT_LAYERS=8;\n' + hintSplitSource + '\n;splitHintLayers;');
assert(splitHintLayers('first\nsecond\nthird').length === 3, 'newline-delimited hints must become progressive layers');

const p113 = PROBLEMS.find(problem => problem.id === 'p113');
assert(p113 && !/sortedcontainers/.test(p113.hint) && /bisect_right/.test(p113.hint) && /DSU|並查集/.test(p113.hint), 'p113 hint must use the standard-library bisect + DSU approach');
const adapted = PROBLEMS.filter(problem => /練習版/.test(String(problem.desc || '')));
assert(adapted.length === 88, `expected 88 adapted-practice records, found ${adapted.length}`);
assert(source.includes('function isAdaptedPractice') && (source.match(/displayProblemTitle\(p\)/g) || []).length >= 2, 'adapted practice suffix must appear in list and problem title');
assert(source.includes("adaptedBadge:'非原題題面'") && source.includes("adaptedBadge:'Not the original statement'"), 'adapted practice must disclose that it is not the original statement');

const learningSource = fs.readFileSync(path.join(__dirname, '..', 'data', 'learning-state.js'), 'utf8');
function learningHarness(initial) {
  const values = new Map(Object.entries(initial || {}));
  let failSet = false, failRemove = false;
  const localStorage = {
    getItem:key => values.has(String(key)) ? values.get(String(key)) : null,
    setItem(key, value) { if (failSet) throw new Error('quota'); values.set(String(key), String(value)); },
    removeItem(key) { if (failRemove) throw new Error('denied'); values.delete(String(key)); }
  };
  const window = {};
  vm.runInNewContext(learningSource, { window, localStorage, console, Date, Math, JSON, Object, Array, Number, String, Set, Map }, { filename:'learning-state.js' });
  return { api:window.LearningState, values, failSet:value => { failSet = value; }, failRemove:value => { failRemove = value; } };
}
const learning = learningHarness();
learning.api.recordJudgeHint('p113', 'py', 2);
learning.api.recordJudgeSolutionLoaded('p113', 'py');
learning.api.recordJudgeSolutionLoaded('p113', 'py');
learning.api.recordJudgeAttempt('p113', 'py', true, 2);
learning.api.recordJudgeAttempt('p113', 'py', false, 3);
const judgeRecord = learning.api.get().judge.records.py_p113;
assert(learning.api.VERSION === 3 && judgeRecord.attempts === 2 && judgeRecord.firstAttemptCorrect === true && judgeRecord.hintLevelMax === 3 && judgeRecord.solutionLoaded === 2 && judgeRecord.lastAt, 'versioned bounded judge metrics are incomplete');
assert(learning.api.exportBackup().storage[learning.api.KEY], 'judge metrics must remain in the existing learning backup');
const oversizedRecords = {};
for (let i = 0; i < 1210; i++) oversizedRecords[`py_src${i}`] = { attempts:1, firstAttemptCorrect:false, hintLevelMax:0, solutionLoaded:0, lastAt:new Date(1700000000000 + i).toISOString() };
const boundedLearning = learningHarness({ apcs_learning_state_v2:JSON.stringify({ judge:{records:oversizedRecords} }) });
assert(Object.keys(boundedLearning.api.get().judge.records).length === 1200, 'judge metric records must be capped at 1200');
const failingClear = learningHarness();
failingClear.failRemove(true);
assert.throws(() => failingClear.api.clearAll(), /STORAGE_FAILURE/, 'clearAll must surface storage failures');
const failingImport = learningHarness();
failingImport.failSet(true);
assert.throws(() => failingImport.api.importBackup({ app:'apcs-learning-backup', storage:{tut_done:'[]'} }), /STORAGE_FULL/, 'backup imports must surface storage failures');

const dashboard = fs.readFileSync(path.join(__dirname, '..', 'dashboard.html'), 'utf8');
assert(dashboard.includes('id="quality"') && dashboard.includes('首次範例全過率') && dashboard.includes('未看提示通過率') && dashboard.includes('載入完整解答次數'), 'dashboard learning-quality summary is missing');
assert(dashboard.includes('if(qualityItems.length)') && dashboard.includes('id="quality" aria-labelledby="quality-title" hidden'), 'dashboard must hide quality percentages when there is no denominator');
assert(
  dashboard.includes("if(!LearningState.clearAll())throw") &&
  /catch\(err\)\{setBackupStatus\('清除失敗：[^']+','error'\);\}/.test(dashboard),
  'dashboard must not report a failed clear as success'
);

for (const id of ['onboard-goal', 'onboard-lang', 'onboard-time', 'onboard-date', 'onboard-tutorial', 'onboard-reading', 'onboard-judge', 'onboard-plan']) {
  assert(source.includes(`id="${id}"`), `onboarding field/link missing: ${id}`);
}
assert((source.match(/aria-live="polite"/g) || []).length >= 3, 'status/results need aria-live announcements');

console.log('index.html contracts: OK');

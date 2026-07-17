/* APCS learning state v3
 *
 * A small, versioned source of truth for cumulative learning activity.  The
 * older page-specific keys are intentionally kept in sync during migration so
 * existing bookmarks/builds can continue to read them.
 */
(function (global) {
  'use strict';

  // Keep the established storage key so existing backups/builds remain
  // compatible; the schema version below governs additive migrations.
  var KEY = 'apcs_learning_state_v2';
  var VERSION = 3;
  var MAX_RUNS = 200;
  var MAX_ACTIVITY = 600;
  var MAX_JUDGE_RECORDS = 1200; // 300 problems × 4 languages
  var MAX_JUDGE_COUNTER = 100000;
  var MAX_HINT_LEVEL = 20;
  var BACKUP_VERSION = 1;
  var MAX_BACKUP_CHARS = 12 * 1024 * 1024;
  var MAX_MISTAKE_RECORDS = 2000;
  var STUDY_PLAN_STEPS = { starter: 4, apcs: 6, advanced: 6 };
  // Explicit allow-list: credentials (Gemini/API keys, chat identity, etc.) are
  // never included in a learning backup.
  var BACKUP_KEYS = [
    KEY,
    'tut_done', 'tut_beginner', 'tut_drafts_v1',
    'apcs_judge_sample_results_v2', 'apcs_judge_scores_v1', 'apcs_judge_drafts_v1', 'apcs_judge_onboarding_v1',
    'apcs_reading_sess_v1', 'apcs_reading_wrong_v1', 'apcs_reading_ui_v3',
    'apcs_daily_done_v1', 'apcs_mistake_book_v1', 'apcs_study_plan_v2'
  ];

  function now() { return new Date().toISOString(); }
  function parse(raw, fallback) {
    try { var value = JSON.parse(raw); return value == null ? fallback : value; }
    catch (e) { return fallback; }
  }
  function readKey(key, fallback) {
    try { return parse(localStorage.getItem(key), fallback); }
    catch (e) { return fallback; }
  }
  function isObject(value) { return !!value && typeof value === 'object' && !Array.isArray(value); }
  function base() {
    return {
      version: VERSION,
      updatedAt: now(),
      reading: { answers: {}, runs: [] },
      tutorial: { completed: [] },
      judge: { records: {} },
      migrations: {},
      activity: []
    };
  }
  function uniqueInts(values) {
    var out = [];
    (Array.isArray(values) ? values : []).forEach(function (value) {
      if (Number.isInteger(value) && value >= 0 && value <= 100 && out.indexOf(value) < 0) out.push(value);
    });
    return out.sort(function (a, b) { return a - b; });
  }
  function boundedInt(value, max) {
    var n = Math.floor(Number(value) || 0);
    return Math.min(max, Math.max(0, n));
  }
  function cleanTimestamp(value) {
    return typeof value === 'string' && value.length <= 40 && Number.isFinite(Date.parse(value)) ? value : null;
  }
  function safeJudgeRecordKey(value) {
    return safeKey(value, 220) && /^(?:py|cpp|c|java)_[A-Za-z0-9_.:-]{1,200}$/.test(value);
  }
  function judgeKey(problemId, lang) {
    var key = String(lang || '') + '_' + String(problemId || '');
    return safeJudgeRecordKey(key) ? key : null;
  }
  function cleanJudgeRecord(value) {
    var rec = value && typeof value === 'object' && !Array.isArray(value) ? value : {};
    return {
      attempts: boundedInt(rec.attempts, MAX_JUDGE_COUNTER),
      firstAttemptCorrect: typeof rec.firstAttemptCorrect === 'boolean' ? rec.firstAttemptCorrect : null,
      hintLevelMax: boundedInt(rec.hintLevelMax, MAX_HINT_LEVEL),
      solutionLoaded: boundedInt(rec.solutionLoaded === true ? 1 : rec.solutionLoaded, MAX_JUDGE_COUNTER),
      lastAt: cleanTimestamp(rec.lastAt)
    };
  }
  function normalise(input) {
    var state = input && typeof input === 'object' && !Array.isArray(input) ? input : base();
    state.version = VERSION;
    state.updatedAt = typeof state.updatedAt === 'string' ? state.updatedAt : now();
    if (!state.reading || typeof state.reading !== 'object') state.reading = {};
    if (!state.reading.answers || typeof state.reading.answers !== 'object' || Array.isArray(state.reading.answers)) state.reading.answers = {};
    var cleanAnswers = {};
    Object.keys(state.reading.answers).slice(0, 5000).forEach(function (qid) {
      if (!safeKey(qid, 200)) return;
      var answer = state.reading.answers[qid];
      if (answer && typeof answer === 'object' && !Array.isArray(answer)) cleanAnswers[qid] = answer;
    });
    state.reading.answers = cleanAnswers;
    if (!Array.isArray(state.reading.runs)) state.reading.runs = [];
    state.reading.runs = state.reading.runs.filter(function (run) { return isObject(run); }).slice(-MAX_RUNS);
    if (!state.tutorial || typeof state.tutorial !== 'object') state.tutorial = {};
    state.tutorial.completed = uniqueInts(state.tutorial.completed);
    if (!state.judge || typeof state.judge !== 'object' || Array.isArray(state.judge)) state.judge = {};
    var rawJudgeRecords = state.judge.records && typeof state.judge.records === 'object' && !Array.isArray(state.judge.records) ? state.judge.records : {};
    var cleanJudgeRecords = {};
    Object.keys(rawJudgeRecords).filter(safeJudgeRecordKey).sort(function (a, b) {
      return String(rawJudgeRecords[b] && rawJudgeRecords[b].lastAt || '').localeCompare(String(rawJudgeRecords[a] && rawJudgeRecords[a].lastAt || ''));
    }).slice(0, MAX_JUDGE_RECORDS).forEach(function (key) {
      cleanJudgeRecords[key] = cleanJudgeRecord(rawJudgeRecords[key]);
    });
    state.judge = { records: cleanJudgeRecords };
    var rawMigrations = isObject(state.migrations) ? state.migrations : {};
    var cleanMigrations = {};
    Object.keys(rawMigrations).filter(function (key) { return safeKey(key, 100); }).slice(0, 200).forEach(function (key) {
      if (rawMigrations[key] === true) cleanMigrations[key] = true;
    });
    state.migrations = cleanMigrations;
    if (!Array.isArray(state.activity)) state.activity = [];
    state.activity = state.activity.filter(function (item) { return isObject(item); }).slice(-MAX_ACTIVITY);
    return state;
  }
  function save(state) {
    state = normalise(state);
    state.updatedAt = now();
    try { localStorage.setItem(KEY, JSON.stringify(state)); return true; }
    catch (e) { return false; }
  }
  function safeKey(value, maxLength) {
    return typeof value === 'string' && value.length > 0 && value.length <= (maxLength || 200) && value !== '__proto__' && value !== 'prototype' && value !== 'constructor';
  }
  function migrate(strict) {
    var stored = readKey(KEY, null);
    var before = stored == null ? null : JSON.stringify(stored);
    var state = normalise(stored);
    var dirty = before !== JSON.stringify(state);

    // Keep all legacy tutorial completion data.  This migration is additive;
    // it never removes an existing completion.
    var legacyDone = uniqueInts(readKey('tut_done', []));
    var combinedDone = uniqueInts(state.tutorial.completed.concat(legacyDone));
    if (combinedDone.length !== state.tutorial.completed.length) dirty = true;
    state.tutorial.completed = combinedDone;

    // A session from the old reading page is the only cumulative evidence old
    // builds retained.  Preserve it as attempted (correctness is unknown until
    // the new page sees the question data).
    var legacySession = readKey('apcs_reading_sess_v1', {});
    if (legacySession && typeof legacySession === 'object' && !Array.isArray(legacySession)) {
      Object.keys(legacySession).filter(function (qid) { return safeKey(qid, 200); }).slice(0, 5000).forEach(function (qid) {
        if (!state.reading.answers[qid]) {
          state.reading.answers[qid] = {
            attempts: 1,
            correctAttempts: 0,
            lastCorrect: null,
            chosenIndex: Number.isInteger(legacySession[qid]) ? legacySession[qid] : null,
            migratedAt: now()
          };
          dirty = true;
        }
      });
    }
    if (state.migrations.legacyProgress !== true) {
      state.migrations.legacyProgress = true;
      dirty = true;
    }
    if (dirty && !save(state) && strict) throw new Error('STORAGE_FULL');
    return state;
  }
  function get() { return normalise(readKey(KEY, null)); }
  function appendActivity(state, item) {
    state.activity.push(Object.assign({ id: 'a' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6), at: now() }, item));
    if (state.activity.length > MAX_ACTIVITY) state.activity = state.activity.slice(-MAX_ACTIVITY);
  }
  function recordReadingAnswer(qid, chosenIndex, correct, meta) {
    if (!safeKey(qid, 200)) return null;
    var state = get();
    var old = state.reading.answers[qid] || {};
    var cleanMeta = Object.assign({}, meta || {});
    var wasWrong = !!cleanMeta.wasWrong;
    delete cleanMeta.wasWrong;
    var attempts = Math.max(0, Number(old.attempts) || 0) + 1;
    var correctAttempts = Math.max(0, Number(old.correctAttempts) || 0) + (correct ? 1 : 0);
    var everWrong = !!old.everWrong || wasWrong || !correct;
    var correctStreak = correct ? Math.max(0, Number(old.correctStreak) || 0) + 1 : 0;
    var masteryState = everWrong ? (correctStreak >= 2 ? 'mastered' : (correct ? 'review' : 'learning')) : 'mastered';
    var stamp = now();
    var reviewDate = new Date();
    reviewDate.setDate(reviewDate.getDate() + (masteryState === 'mastered' ? 14 : (masteryState === 'review' ? 3 : 1)));
    state.reading.answers[qid] = Object.assign({}, old, cleanMeta, {
      attempts: attempts,
      correctAttempts: correctAttempts,
      correctStreak: correctStreak,
      everWrong: everWrong,
      masteryState: masteryState,
      nextReviewAt: reviewDate.toISOString(),
      lastCorrect: !!correct,
      chosenIndex: Number.isInteger(chosenIndex) ? chosenIndex : null,
      firstAnsweredAt: old.firstAnsweredAt || stamp,
      lastAnsweredAt: stamp
    });
    appendActivity(state, { type: 'reading-answer', ref: qid, correct: !!correct });
    if (!save(state)) return null;
    return state.reading.answers[qid];
  }
  function recordReadingRun(run) {
    if (!run || !Number.isFinite(run.answered) || run.answered < 1) return null;
    var state = get();
    var stamp = now();
    var rec = Object.assign({
      id: 'r' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
      finishedAt: stamp
    }, run);
    state.reading.runs.push(rec);
    if (state.reading.runs.length > MAX_RUNS) state.reading.runs = state.reading.runs.slice(-MAX_RUNS);
    appendActivity(state, { type: 'reading-run', ref: rec.id, correct: rec.correct, total: rec.answered });
    if (!save(state)) return null;
    return rec;
  }
  function readingStats() {
    var reading = get().reading;
    var ids = Object.keys(reading.answers);
    var attempts = 0, correctAttempts = 0, mastered = 0;
    ids.forEach(function (id) {
      var rec = reading.answers[id] || {};
      attempts += Math.max(0, Number(rec.attempts) || 0);
      correctAttempts += Math.max(0, Number(rec.correctAttempts) || 0);
      if (rec.masteryState === 'mastered' || (!rec.masteryState && rec.lastCorrect === true)) mastered++;
    });
    return { attempted: ids.length, mastered: mastered, attempts: attempts, correctAttempts: correctAttempts, runs: reading.runs.length };
  }
  function clearReading() {
    var state = get();
    state.reading = { answers: {}, runs: [] };
    state.activity = state.activity.filter(function (x) { return String(x.type || '').indexOf('reading-') !== 0; });
    return save(state);
  }
  function tutorialCompleted() {
    return uniqueInts(get().tutorial.completed.concat(uniqueInts(readKey('tut_done', []))));
  }
  function setTutorialCompleted(values) {
    var state = get();
    state.tutorial.completed = uniqueInts(values);
    var stateSaved = save(state), legacySaved = false;
    try { localStorage.setItem('tut_done', JSON.stringify(state.tutorial.completed)); legacySaved = true; } catch (e) {}
    return stateSaved || legacySaved ? state.tutorial.completed : null;
  }
  function markTutorial(id, complete) {
    if (!Number.isInteger(id)) return tutorialCompleted();
    var state = get();
    var values = uniqueInts(state.tutorial.completed.concat(uniqueInts(readKey('tut_done', []))));
    var index = values.indexOf(id);
    if (complete !== false && index < 0) values.push(id);
    if (complete === false && index >= 0) values.splice(index, 1);
    values = uniqueInts(values);
    state.tutorial.completed = values;
    appendActivity(state, { type: complete === false ? 'tutorial-uncomplete' : 'tutorial-complete', ref: String(id) });
    var stateSaved = save(state), legacySaved = false;
    try { localStorage.setItem('tut_done', JSON.stringify(values)); legacySaved = true; } catch (e) {}
    return stateSaved || legacySaved ? values : null;
  }
  function migrationDone(name) { return safeKey(name, 100) && !!get().migrations[name]; }
  function markMigration(name) {
    if (!safeKey(name, 100)) return false;
    var state = get();
    state.migrations[name] = true;
    return save(state);
  }

  function recordJudgeAttempt(problemId, lang, allSamplesPassed, hintLevel) {
    var key = judgeKey(problemId, lang);
    if (!key) return null;
    var state = get();
    var old = cleanJudgeRecord(state.judge.records[key]);
    var attempts = Math.min(MAX_JUDGE_COUNTER, old.attempts + 1);
    state.judge.records[key] = {
      attempts: attempts,
      firstAttemptCorrect: old.attempts > 0 && typeof old.firstAttemptCorrect === 'boolean' ? old.firstAttemptCorrect : !!allSamplesPassed,
      hintLevelMax: Math.max(old.hintLevelMax, boundedInt(hintLevel, MAX_HINT_LEVEL)),
      solutionLoaded: old.solutionLoaded,
      lastAt: now()
    };
    if (!save(state)) return null;
    return state.judge.records[key];
  }
  function recordJudgeHint(problemId, lang, level) {
    var key = judgeKey(problemId, lang);
    if (!key) return null;
    var state = get();
    var old = cleanJudgeRecord(state.judge.records[key]);
    old.hintLevelMax = Math.max(old.hintLevelMax, boundedInt(level, MAX_HINT_LEVEL));
    old.lastAt = now();
    state.judge.records[key] = old;
    if (!save(state)) return null;
    return old;
  }
  function recordJudgeSolutionLoaded(problemId, lang) {
    var key = judgeKey(problemId, lang);
    if (!key) return null;
    var state = get();
    var old = cleanJudgeRecord(state.judge.records[key]);
    old.solutionLoaded = Math.min(MAX_JUDGE_COUNTER, old.solutionLoaded + 1);
    old.lastAt = now();
    state.judge.records[key] = old;
    if (!save(state)) return null;
    return old;
  }
  function judgeStats() {
    var records = get().judge.records;
    var keys = Object.keys(records), attempted = 0, attempts = 0, firstAttemptCorrect = 0, solutionLoads = 0;
    keys.forEach(function (key) {
      var rec = records[key];
      attempts += rec.attempts;
      solutionLoads += rec.solutionLoaded;
      if (rec.attempts > 0) {
        attempted++;
        if (rec.firstAttemptCorrect === true) firstAttemptCorrect++;
      }
    });
    return { records: records, tracked: keys.length, attempted: attempted, attempts: attempts, firstAttemptCorrect: firstAttemptCorrect, solutionLoads: solutionLoads };
  }

  function exportBackup() {
    var storage = {};
    try {
      BACKUP_KEYS.forEach(function (key) {
        var value = localStorage.getItem(key);
        if (value != null) storage[key] = value;
      });
    } catch (e) { throw new Error('STORAGE_FAILURE'); }
    return { app: 'apcs-learning-backup', version: BACKUP_VERSION, exportedAt: now(), storage: storage };
  }
  function mergeArrays(a, b) {
    var seen = new Set();
    return a.concat(b).filter(function (item) {
      var key = typeof item === 'object' ? JSON.stringify(item) : typeof item + ':' + item;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  }
  function mergeLearningState(localValue, incomingValue) {
    var localState = normalise(localValue), incoming = normalise(incomingValue);
    Object.keys(incoming.reading.answers).forEach(function (qid) {
      var a = localState.reading.answers[qid], b = incoming.reading.answers[qid];
      if (!a || String(b.lastAnsweredAt || b.migratedAt || '') > String(a.lastAnsweredAt || a.migratedAt || '')) localState.reading.answers[qid] = b;
    });
    localState.reading.runs = mergeArrays(localState.reading.runs, incoming.reading.runs).slice(-MAX_RUNS);
    localState.tutorial.completed = uniqueInts(localState.tutorial.completed.concat(incoming.tutorial.completed));
    Object.keys(incoming.judge.records).forEach(function (key) {
      var a = localState.judge.records[key], b = incoming.judge.records[key];
      if (!a) { localState.judge.records[key] = b; return; }
      var newer = String(b.lastAt || '') > String(a.lastAt || '') ? b : a;
      localState.judge.records[key] = Object.assign({}, newer, {
        attempts: Math.max(a.attempts, b.attempts),
        hintLevelMax: Math.max(a.hintLevelMax, b.hintLevelMax),
        solutionLoaded: Math.max(a.solutionLoaded, b.solutionLoaded),
        lastAt: String(b.lastAt || '') > String(a.lastAt || '') ? b.lastAt : a.lastAt
      });
    });
    localState.judge = normalise(localState).judge;
    localState.migrations = Object.assign({}, incoming.migrations, localState.migrations);
    localState.activity = mergeArrays(localState.activity, incoming.activity).slice(-MAX_ACTIVITY);
    return localState;
  }
  function uniqueStrings(values, maxItems, maxLength) {
    var seen = new Set(), out = [];
    (Array.isArray(values) ? values : []).forEach(function (value) {
      if (out.length >= maxItems || !safeKey(value, maxLength)) return;
      if (!seen.has(value)) { seen.add(value); out.push(value); }
    });
    return out;
  }
  function copyMap(target, source, localWins) {
    if (!isObject(source)) return target;
    Object.keys(source).filter(function (key) { return safeKey(key, 300); }).slice(0, 5000).forEach(function (key) {
      if (!localWins || !Object.prototype.hasOwnProperty.call(target, key)) target[key] = source[key];
    });
    return target;
  }
  function mergeObjectMaps(localValue, incomingValue) {
    var out = {};
    copyMap(out, incomingValue, false);
    copyMap(out, localValue, false); // Local edits win on key collisions.
    return out;
  }
  function mergeScoreMaps(localValue, incomingValue) {
    var out = {};
    copyMap(out, localValue, false);
    Object.keys(isObject(incomingValue) ? incomingValue : {}).filter(function (key) { return safeKey(key, 300); }).slice(0, 5000).forEach(function (key) {
      var next = incomingValue[key], prev = out[key];
      if (!isObject(next)) return;
      if (!isObject(prev) || (Number(next.passed) || 0) > (Number(prev.passed) || 0)) out[key] = next;
    });
    return out;
  }
  function mergeMistakeRows(localValue, incomingValue) {
    var byKey = new Map();
    (Array.isArray(localValue) ? localValue : []).concat(Array.isArray(incomingValue) ? incomingValue : []).forEach(function (row) {
      if (!isObject(row)) return;
      var id = row.sourceKey || row.id;
      if (!safeKey(id, 300)) return;
      var old = byKey.get(id);
      if (!old || String(row.updated || row.created || '') > String(old.updated || old.created || '')) byKey.set(id, row);
    });
    return Array.from(byKey.values()).sort(function (a, b) {
      return String(b.updated || b.created || '').localeCompare(String(a.updated || a.created || ''));
    }).slice(0, MAX_MISTAKE_RECORDS);
  }
  function validPlanDate(value) {
    if (typeof value !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
    var date = new Date(value + 'T00:00:00Z');
    return Number.isFinite(date.getTime()) && date.toISOString().slice(0, 10) === value;
  }
  function mergeStudyPlan(localValue, incomingValue) {
    var localPlan = isObject(localValue) ? localValue : {}, remotePlan = isObject(incomingValue) ? incomingValue : {};
    var localDone = isObject(localPlan.done) ? localPlan.done : {}, remoteDone = isObject(remotePlan.done) ? remotePlan.done : {};
    var done = {};
    Object.keys(STUDY_PLAN_STEPS).forEach(function (planId) {
      var max = STUDY_PLAN_STEPS[planId];
      done[planId] = uniqueInts((Array.isArray(localDone[planId]) ? localDone[planId] : []).concat(Array.isArray(remoteDone[planId]) ? remoteDone[planId] : []))
        .filter(function (index) { return index < max; });
    });
    var planId = Object.prototype.hasOwnProperty.call(STUDY_PLAN_STEPS, remotePlan.planId) ? remotePlan.planId :
      (Object.prototype.hasOwnProperty.call(STUDY_PLAN_STEPS, localPlan.planId) ? localPlan.planId : 'starter');
    var language = ['py', 'cpp', 'c', 'java'].indexOf(remotePlan.language) >= 0 ? remotePlan.language :
      (['py', 'cpp', 'c', 'java'].indexOf(localPlan.language) >= 0 ? localPlan.language : 'py');
    var startDate = validPlanDate(remotePlan.startDate) ? remotePlan.startDate : (validPlanDate(localPlan.startDate) ? localPlan.startDate : now().slice(0, 10));
    return { version: 2, planId: planId, language: language, startDate: startDate, done: done, updatedAt: now() };
  }
  function validateBackupValue(key, value) {
    var arrayKeys = ['tut_done', 'apcs_reading_wrong_v1', 'apcs_mistake_book_v1'];
    var objectKeys = [KEY, 'tut_drafts_v1', 'apcs_judge_sample_results_v2', 'apcs_judge_scores_v1', 'apcs_judge_drafts_v1',
      'apcs_judge_onboarding_v1', 'apcs_reading_sess_v1', 'apcs_reading_ui_v3', 'apcs_daily_done_v1', 'apcs_study_plan_v2'];
    if (arrayKeys.indexOf(key) >= 0 && !Array.isArray(value)) throw new Error('INVALID_BACKUP');
    if (objectKeys.indexOf(key) >= 0 && !isObject(value)) throw new Error('INVALID_BACKUP');
    if (key === 'tut_beginner' && value !== 0 && value !== 1 && value !== '0' && value !== '1' && typeof value !== 'boolean') throw new Error('INVALID_BACKUP');
  }
  function backupSnapshot() {
    var snapshot = {};
    try { BACKUP_KEYS.forEach(function (key) { snapshot[key] = localStorage.getItem(key); }); }
    catch (e) { throw new Error('STORAGE_FAILURE'); }
    return snapshot;
  }
  function restoreSnapshot(snapshot) {
    var ok = true;
    BACKUP_KEYS.forEach(function (key) {
      try {
        var current = localStorage.getItem(key), previous = snapshot[key];
        if (current === previous) return;
        if (previous == null) localStorage.removeItem(key);
        else localStorage.setItem(key, previous);
      } catch (e) { ok = false; }
    });
    return ok;
  }
  function storageTransaction(work) {
    var snapshot = backupSnapshot();
    try { return work(snapshot); }
    catch (error) {
      if (!restoreSnapshot(snapshot)) throw new Error('STORAGE_ROLLBACK_FAILED');
      throw error;
    }
  }
  function importBackup(data) {
    if (!data || data.app !== 'apcs-learning-backup' || (data.version != null && data.version !== BACKUP_VERSION) || !isObject(data.storage)) throw new Error('INVALID_BACKUP');
    var incoming = data.storage;
    var presentKeys = BACKUP_KEYS.filter(function (key) { return Object.prototype.hasOwnProperty.call(incoming, key); });
    if (!presentKeys.length) throw new Error('INVALID_BACKUP');
    var totalChars = 0;
    presentKeys.forEach(function (key) {
      if (typeof incoming[key] !== 'string') throw new Error('INVALID_BACKUP');
      totalChars += incoming[key].length;
      if (totalChars > MAX_BACKUP_CHARS) throw new Error('BACKUP_TOO_LARGE');
    });
    return storageTransaction(function (snapshot) {
      var writes = [];
      presentKeys.forEach(function (key) {
        var remote;
        try { remote = JSON.parse(incoming[key]); } catch (e) { throw new Error('INVALID_BACKUP'); }
        if (remote == null) throw new Error('INVALID_BACKUP');
        validateBackupValue(key, remote);
        var local = parse(snapshot[key], null), merged = remote;
        if (key === KEY) merged = mergeLearningState(local, remote);
        else if (key === 'tut_done') merged = uniqueInts((Array.isArray(local) ? local : []).concat(remote));
        else if (key === 'apcs_reading_wrong_v1') merged = uniqueStrings((Array.isArray(local) ? local : []).concat(remote), 5000, 200);
        else if (key === 'apcs_judge_scores_v1' || key === 'apcs_judge_sample_results_v2') merged = mergeScoreMaps(local, remote);
        else if (key === 'apcs_daily_done_v1' || key === 'tut_drafts_v1' || key === 'apcs_judge_drafts_v1' || key === 'apcs_reading_sess_v1') merged = mergeObjectMaps(local, remote);
        else if (key === 'apcs_mistake_book_v1') merged = mergeMistakeRows(local, remote);
        else if (key === 'apcs_study_plan_v2') merged = mergeStudyPlan(local, remote);
        writes.push([key, JSON.stringify(merged)]);
      });
      writes.forEach(function (entry) {
        try { localStorage.setItem(entry[0], entry[1]); } catch (e) { throw new Error('STORAGE_FULL'); }
      });
      migrate(true);
      return true;
    });
  }
  function clearAll() {
    return storageTransaction(function () {
      BACKUP_KEYS.forEach(function (key) {
        try { localStorage.removeItem(key); } catch (e) { throw new Error('STORAGE_FAILURE'); }
      });
      if (!save(base())) throw new Error('STORAGE_FULL');
      return true;
    });
  }

  var state = migrate(false);
  global.LearningState = {
    KEY: KEY,
    VERSION: VERSION,
    BACKUP_KEYS: BACKUP_KEYS.slice(),
    get: get,
    save: save,
    snapshot: function () { return get(); },
    recordReadingAnswer: recordReadingAnswer,
    recordReadingRun: recordReadingRun,
    readingStats: readingStats,
    clearReading: clearReading,
    tutorialCompleted: tutorialCompleted,
    setTutorialCompleted: setTutorialCompleted,
    markTutorial: markTutorial,
    recordJudgeAttempt: recordJudgeAttempt,
    recordJudgeHint: recordJudgeHint,
    recordJudgeSolutionLoaded: recordJudgeSolutionLoaded,
    judgeStats: judgeStats,
    migrationDone: migrationDone,
    markMigration: markMigration,
    exportBackup: exportBackup,
    importBackup: importBackup,
    clearAll: clearAll
  };
})(window);

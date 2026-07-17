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
  function readKey(key, fallback) { return parse(localStorage.getItem(key), fallback); }
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
    state.reading.runs = state.reading.runs.slice(-MAX_RUNS);
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
    if (!state.migrations || typeof state.migrations !== 'object' || Array.isArray(state.migrations)) state.migrations = {};
    if (!Array.isArray(state.activity)) state.activity = [];
    state.activity = state.activity.slice(-MAX_ACTIVITY);
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
    var state = normalise(readKey(KEY, null));

    // Keep all legacy tutorial completion data.  This migration is additive;
    // it never removes an existing completion.
    var legacyDone = uniqueInts(readKey('tut_done', []));
    state.tutorial.completed = uniqueInts(state.tutorial.completed.concat(legacyDone));

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
        }
      });
    }
    state.migrations.legacyProgress = true;
    if (!save(state) && strict) throw new Error('STORAGE_FULL');
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
    save(state);
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
    try { localStorage.setItem('tut_done', JSON.stringify(state.tutorial.completed)); } catch (e) {}
    save(state);
    return state.tutorial.completed;
  }
  function markTutorial(id, complete) {
    if (!Number.isInteger(id)) return tutorialCompleted();
    var values = tutorialCompleted();
    var index = values.indexOf(id);
    if (complete !== false && index < 0) values.push(id);
    if (complete === false && index >= 0) values.splice(index, 1);
    values = setTutorialCompleted(values);
    var state = get();
    appendActivity(state, { type: complete === false ? 'tutorial-uncomplete' : 'tutorial-complete', ref: String(id) });
    save(state);
    return values;
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
    BACKUP_KEYS.forEach(function (key) {
      var value = localStorage.getItem(key);
      if (value != null) storage[key] = value;
    });
    return { app: 'apcs-learning-backup', version: 1, exportedAt: now(), storage: storage };
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
  function importBackup(data) {
    if (!data || data.app !== 'apcs-learning-backup' || !data.storage || typeof data.storage !== 'object') throw new Error('INVALID_BACKUP');
    var incoming = data.storage;
    BACKUP_KEYS.forEach(function (key) {
      if (typeof incoming[key] !== 'string') return;
      var remote = parse(incoming[key], null);
      if (remote == null) return;
      var local = readKey(key, null);
      var merged = remote;
      if (key === KEY) merged = mergeLearningState(local, remote);
      else if (key === 'tut_done' || key === 'apcs_reading_wrong_v1') merged = mergeArrays(Array.isArray(local) ? local : [], Array.isArray(remote) ? remote : []);
      else if (key === 'apcs_judge_scores_v1' || key === 'apcs_judge_sample_results_v2') {
        merged = Object.assign({}, local && typeof local === 'object' ? local : {});
        Object.keys(remote && typeof remote === 'object' ? remote : {}).forEach(function (scoreKey) {
          var next = remote[scoreKey], prev = merged[scoreKey];
          if (!prev || (Number(next.passed) || 0) > (Number(prev.passed) || 0)) merged[scoreKey] = next;
        });
      } else if (key === 'apcs_daily_done_v1' || key === 'tut_drafts_v1' || key === 'apcs_judge_drafts_v1' || key === 'apcs_reading_sess_v1') {
        // Local edits win on key collisions.
        merged = Object.assign({}, remote, local && typeof local === 'object' ? local : {});
      } else if (key === 'apcs_mistake_book_v1') {
        var localRows = Array.isArray(local) ? local : [], remoteRows = Array.isArray(remote) ? remote : [];
        var byKey = new Map();
        localRows.concat(remoteRows).forEach(function (row) {
          if (!row || typeof row !== 'object') return;
          var id = row.sourceKey || row.id;
          if (!safeKey(id, 300)) return;
          var old = byKey.get(id);
          if (!old || String(row.updated || row.created || '') > String(old.updated || old.created || '')) byKey.set(id, row);
        });
        merged = Array.from(byKey.values());
      }
      try { localStorage.setItem(key, JSON.stringify(merged)); } catch (e) { throw new Error('STORAGE_FULL'); }
    });
    migrate(true);
    return true;
  }
  function clearAll() {
    var removeFailed = false;
    BACKUP_KEYS.forEach(function (key) { try { localStorage.removeItem(key); } catch (e) { removeFailed = true; } });
    if (removeFailed) throw new Error('STORAGE_FAILURE');
    if (!save(base())) throw new Error('STORAGE_FULL');
    return true;
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

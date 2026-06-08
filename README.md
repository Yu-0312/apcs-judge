# APCS Multi-Language Online Judge / APCS 多語言線上評分系統

> 一個專案、四種語言、125 道題目、71 章互動式基礎教學（含 🔥 高級題專章）、即時瀏覽器評分、附解題思路
> One project, four languages, 125 problems, 71 interactive tutorial chapters (incl. 🔥 advanced-topic chapters), in-browser instant grading, with solution hints

🔗 **教學頁面 / Tutorial**：[tutorial.html](https://yu-0312.github.io/apcs-judge/tutorial.html)

🔗 **Live Demo / 線上體驗**：**https://yu-0312.github.io/apcs-judge/**

[English](#english) · [繁體中文](#繁體中文)

---

## 繁體中文

### 📖 簡介

這是一個為 **APCS（大學程式設計先修檢測）** 設計的線上練習平台，特色是：

- **單一 HTML 檔案**：無需後端，瀏覽器打開即用
- **四語言切換**：Python / C++ / C / Java，所有 125 題都有 4 語言解答
- **瀏覽器內執行**：Python 用 Pyodide、C/C++/Java 走 Judge0 CE 線上編譯
- **即時評分**：對照預期輸出，顯示 AC / WA 與詳細差異
- **解題思路提示**：每題都附「💡 思路」，解釋題目中的關鍵字暗示了什麼演算法
- **難度星等**：⭐ 初級 / ⭐⭐ 中級 / ⭐⭐⭐ 中高級 / ⭐⭐⭐⭐ 高級 一目了然
- **125 道題目**：涵蓋初級、中級、中高級、高級四個難度
- **71 章基礎教學**：tutorial.html 從變數一路教到 APCS 新制分級與程式識讀技巧，**含 🔥 高級題專章**（快速冪、分治、區間 DP 等）

### 🎯 題目分布

| 難度 | 題數 | 分級理解 |
|------|------|---------|
| ⭐ 初級 | **36 題** | 基礎輸入輸出、算術、條件判斷、迴圈、簡單陣列與直接模擬。重點是「能把題目規則翻成程式」。 |
| ⭐⭐ 中級 | **49 題** | 序列型資料處理：字串、list/array、二維陣列、排序、前綴和、雙指標、滑動視窗、基本 DP 與狀態模擬。 |
| ⭐⭐⭐ 中高級 | **27 題** | 基礎資料結構與狀態管理：stack/queue/set/map/hash、BFS/DFS、DSU、樹、較完整的解析或多階段前處理。 |
| ⭐⭐⭐⭐ 高級 | **13 題** | 演算法程序與最佳化：圖論最短路、進階 DP、分治、二分搜答案、字串雜湊、回溯與大型限制下的複雜度控制。 |

### 🧭 APCS 新制分級理解

依 APCS 官方題目範例與成績說明，新制包含「程式識讀」與「程式實作」兩部分；實作題本分為初級、中級、中高級、高級四種，成績再依選測題本與原始分數換算成一到五級分。王一哲老師的 APCS 課程整理也提醒：2025 年 10 月起觀念題改為程式識讀，並增加 Python 題本可選。

本專案的分級採用以下判準：

| 題本 | 能力核心 | 本專案判題線索 |
|------|----------|----------------|
| 初級 | 基礎程式設計能力 | 題意規則直接、限制小，主要考 if/loop/array/string 的正確實作 |
| 中級 | 序列型資料結構運用能力 | 需要整理序列資料、維護狀態、做排序/前綴/滑窗/簡單 DP |
| 中高級 | 基礎資料結構運用能力 | 需要選對 stack/queue/map/set/graph/tree/DSU 等資料結構 |
| 高級 | 基礎演算法程序運用能力 | 需要明確的演算法設計與複雜度最佳化，暴力法通常不夠 |

參考來源：[APCS 題目範例](https://apcs.csie.ntnu.edu.tw/index.php/questionstypes/previousexam/)、[APCS 成績說明](https://apcs.csie.ntnu.edu.tw/index.php/grades/)、[王一哲老師 APCS 課程整理](https://sites.google.com/view/yizhe/%E8%AA%B2%E7%A8%8B/apcs)。

### 📚 基礎教學（tutorial.html）

**71 章** 互動式教學，每章左側 Markdown 教材、右側即時 Python 編輯器（標 🔥 為高級題專章）：

**基礎篇**
1. 變數與資料型別
2. 輸入與輸出 (I/O)
3. 運算子與表達式
4. 條件判斷 if/elif/else
5. 迴圈 for / while

**資料結構篇**
6. 字串處理
7. List（一維陣列）
8. 二維陣列
9. 函式 def
10. 字典 Dict 與集合 Set

**進階篇**
11. 演算法基礎（搜尋/排序/前綴和/質數篩/GCD）
12. 巢狀迴圈
13. List Comprehension 進階
14. 排序進階：key 與 lambda
15. 遞迴入門
16. 枚舉題型
17. 進階資料結構（deque / heap / Counter / defaultdict）
18. 常見錯誤與除錯

**實戰篇**
19. 綜合練習：完整 APCS 題
20. APCS 實戰技巧
68. APCS 新制分級與程式識讀

**🔥 高級題專章篇**（覆蓋 ⭐⭐⭐⭐ 高級題目所需的演算法）
- 第 11 章新增 **11.7 Kadane 1D / 2D**（最大連續子陣列和；高級題 2D 延伸）
- 第 24 章擴充：**LIS O(n log n)**、**24.5 完全背包**、**24.6 編輯距離**、**24.7 區間 DP / 矩陣連乘**
- **第 69 章 🔥 快速冪與模運算**（含模逆元、矩陣快速冪）
- **第 70 章 🔥 分治與逆序對**（合併排序計數法）
- 其他相關：Ch 21 樹走訪、Ch 22 BFS/DFS、Ch 23 最短路徑+拓樸、Ch 25 並查集、Ch 26 字串 hash & Trie

### 🚀 使用方式

1. 開啟 **https://yu-0312.github.io/apcs-judge/**
2. 上方切換你想練習的程式語言
3. 左側選一道題目
4. 中間閱讀題目敘述、輸入/輸出格式與範例
5. 右側編輯器撰寫程式碼
6. 點擊「▶ 執行並評分」自動跑所有測資
7. 不確定怎麼下手？點擊「💡 思路」查看演算法提示
8. 想參考解答？點擊「載入解答」會自動填入並顯示思路

### 🧠 解題思路功能

每題的「💡 思路」提示包含：

- **關鍵字**：題目中哪些字眼暗示了該用什麼演算法
- **作法**：核心解法步驟
- **陷阱**：常見錯誤與邊界情況
- **進階**：（部分題目）更優的時間/空間複雜度寫法

例如「最大連續子陣列和」會提示：
> **關鍵字**：「最大連續子陣列和」→ Kadane 演算法。
> **核心一行**：`cur = max(x, cur+x)`。
> **全負陣列**：因為「至少要選一個」，答案是最大的負數而非 0。

### 🛠️ 技術細節

| 元件 | 用途 |
|------|------|
| **Pyodide** | Python 3.12 編譯為 WebAssembly，瀏覽器內執行 |
| **Judge0 CE** | C / C++ / Java 雲端編譯執行（公開實例，免 API Key） |
| **CodeMirror 5** | 語法高亮編輯器 |
| **marked.js** | Markdown 渲染（題目敘述與思路） |

所有依賴都從 CDN 載入，無 npm、無 build step。

### 📦 本地開發

```bash
git clone https://github.com/Yu-0312/apcs-judge.git
cd apcs-judge

# 用任何靜態檔案伺服器即可
python3 -m http.server 8000
# 然後開啟 http://localhost:8000/
```

### 📝 題目資料結構

每題以 JS 物件儲存在 `PROBLEMS` 陣列中：

```javascript
{
  id: "b964",
  title: "成績指標",
  topic: "排序、陣列",
  date: "2016/03",
  diff: "easy",        // easy | medium | midhigh | hard
  desc: "...",          // 題目敘述（Markdown）
  input_desc: "...",    // 輸入格式
  output_desc: "...",   // 輸出格式
  samples: [
    { input: "...", output: "..." }
  ],
  hint: "..."           // 解題思路提示（Markdown）
}
```

四種語言的解答存在獨立的 `SOLUTIONS` 物件：

```javascript
const SOLUTIONS = {
  py:   { b964: "...", c294: "..." },
  cpp:  { b964: "...", c294: "..." },
  c:    { b964: "...", c294: "..." },
  java: { b964: "...", c294: "..." }
};
```

### 🤝 貢獻

歡迎以下類型的 PR：

- 新增題目（請同時提供四語言解答與解題思路）
- 修正既有解答的 bug
- 改善 UI/UX
- 補充題目敘述或範例
- 翻譯成其他語言

### 📜 授權

MIT License。題目敘述若引用自 APCS、ZeroJudge、啟思博等來源，相關著作權歸原作者所有。

---

## English

### 📖 Overview

A web-based practice platform for Taiwan's **APCS (Advanced Placement Computer Science)** exam, featuring:

- **Single HTML file**: No backend needed, runs entirely in the browser
- **Four language modes**: Python / C++ / C / Java — all 125 problems have solutions in all 4 languages
- **In-browser execution**: Pyodide (Python), Judge0 CE (C / C++ / Java)
- **Instant grading**: Automatic comparison with expected output, AC/WA verdicts with diff view
- **Solution hints**: Every problem includes a "💡 Hint" panel explaining which keywords in the problem statement suggest which algorithm
- **Difficulty stars**: ⭐ Beginner / ⭐⭐ Intermediate / ⭐⭐⭐ Upper-Intermediate / ⭐⭐⭐⭐ Advanced shown in sidebar
- **125 problems** across beginner, intermediate, upper-intermediate, and advanced levels
- **71-chapter tutorial** (tutorial.html) from variables to APCS new-level mapping and code-reading tactics, **including 🔥 advanced-topic chapters** (fast power, divide-and-conquer, interval DP, etc.)

### 🎯 Problem Breakdown

| Difficulty | Count | Coverage |
|------------|-------|----------|
| ⭐ Beginner | **36** | Direct implementation, I/O, arithmetic, conditionals, loops, simple arrays, strings, and simulations. |
| ⭐⭐ Intermediate | **49** | Sequence processing: arrays/lists, strings, matrices, sorting, prefix sums, two pointers, sliding windows, simple DP, and state simulation. |
| ⭐⭐⭐ Upper-Intermediate | **27** | Core data structures and state handling: stack, queue, set/map/hash, BFS/DFS, DSU, trees, parsing, and multi-step preprocessing. |
| ⭐⭐⭐⭐ Advanced | **13** | Algorithmic optimization: shortest paths, advanced DP, divide and conquer, binary search on answer, hashing, backtracking, and large constraints. |

### 📚 Tutorial (tutorial.html)

**71 interactive chapters**, each with a Markdown lesson on the left and a live Pyodide editor on the right. Chapters marked 🔥 are advanced-topic deep-dives covering the algorithms needed for the ⭐⭐⭐⭐ Advanced problem set: Kadane 1D/2D (ch 11.7), LIS O(n log n) + unbounded knapsack + edit distance + interval DP (ch 24.2–24.7), fast power & modular arithmetic (ch 69), divide-and-conquer & inversion counting (ch 70).

**Basics**: variables, I/O, operators, conditionals, loops
**Data structures**: strings, lists, 2D arrays, functions, dicts/sets
**Advanced**: algorithm basics, nested loops, list comprehensions, sorting with `key`/`lambda`, recursion, enumeration patterns, deque/heap/Counter, common bugs & debugging
**Combat**: full APCS problem walkthrough, exam tips, new APCS level mapping, and code-reading tactics

### 🚀 How to Use

1. Open **https://yu-0312.github.io/apcs-judge/**
2. Pick a language tab at the top
3. Choose a problem from the left sidebar
4. Read the problem statement, I/O format, and examples in the center panel
5. Write your code in the right-side editor
6. Click "▶ Run & Grade" to test against all sample cases
7. Stuck? Click "💡 Hint" for algorithmic guidance
8. Need a reference? Click "Load Solution" to auto-fill and view the hint

### 🧠 Hint System

Each problem's "💡 Hint" panel contains:

- **Keywords**: Which phrases in the problem suggest a particular algorithm
- **Approach**: Core algorithmic steps
- **Pitfalls**: Common mistakes and edge cases
- **Advanced** *(some problems)*: Better time/space complexity variants

Example for "Maximum Subarray Sum":
> **Keywords**: "maximum contiguous subarray" → **Kadane's algorithm**.
> **Key line**: `cur = max(x, cur+x)` — either extend or restart.
> **All-negative case**: Since "at least one element" is required, the answer is the largest negative, not 0.

### 🛠️ Tech Stack

| Component | Purpose |
|-----------|---------|
| **Pyodide** | Python 3.12 compiled to WebAssembly, runs in-browser |
| **Judge0 CE** | Cloud compilation for C / C++ / Java (public instance, no API key) |
| **CodeMirror 5** | Syntax-highlighted code editor |
| **marked.js** | Markdown rendering for problem descriptions and hints |

All dependencies load from CDN — no npm, no build step.

### 📦 Local Development

```bash
git clone https://github.com/Yu-0312/apcs-judge.git
cd apcs-judge

# Any static file server works
python3 -m http.server 8000
# Then open http://localhost:8000/
```

### 📝 Problem Data Structure

Problems live in the `PROBLEMS` array as JS objects:

```javascript
{
  id: "b964",
  title: "成績指標",
  topic: "排序、陣列",
  date: "2016/03",
  diff: "easy",        // easy | medium | midhigh | hard
  desc: "...",          // Problem description (Markdown)
  input_desc: "...",    // Input format
  output_desc: "...",   // Output format
  samples: [
    { input: "...", output: "..." }
  ],
  hint: "..."           // Solution hint (Markdown)
}
```

Solutions for each language are stored in a separate `SOLUTIONS` object:

```javascript
const SOLUTIONS = {
  py:   { b964: "...", c294: "..." },
  cpp:  { b964: "...", c294: "..." },
  c:    { b964: "...", c294: "..." },
  java: { b964: "...", c294: "..." }
};
```

### 🤝 Contributing

PRs welcome for:

- New problems (please include all four language solutions + hint)
- Bug fixes in existing solutions
- UI/UX improvements
- Better problem descriptions or additional test cases
- Translations

### 📜 License

MIT License. Problem statements adapted from APCS, ZeroJudge, and 啟思博 sources retain their original copyrights.

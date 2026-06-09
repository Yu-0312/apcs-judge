# APCS Multi-Language Online Judge / APCS 多語言線上評分系統

> 一個專案、四種語言、125 道題目、71 章互動式基礎教學（含 🔥 高級題專章）、即時瀏覽器評分、附解題思路
> One project, four languages, 125 problems, 71 interactive tutorial chapters (incl. 🔥 advanced-topic chapters), in-browser instant grading, with solution hints

🔗 **教學頁面 / Tutorial**：[tutorial.html](https://yu-0312.github.io/apcs-judge/tutorial.html)

🔗 **Live Demo / 線上體驗**：**https://yu-0312.github.io/apcs-judge/**

[English](#english) · [繁體中文](#繁體中文)

---

## 繁體中文

### 📖 簡介

**APCS Judge** 是一個完全跑在瀏覽器內的 APCS 練習站——從基礎語法教學到 ⭐⭐⭐⭐ 高級題實戰，一個網址全包。沒有後端、沒有註冊、不用 npm build；打開分頁就能寫題、看解答、看思路、跑教學。

- 🌐 **單一 HTML、無後端**：clone 下來開靜態伺服器或直接打開 GitHub Pages 即用
- 🧩 **四語言全套解答**：Python / C++ / C / Java 對 125 道題目皆提供官解
- ⚡ **真實編譯執行**：Python 透過 Pyodide（WebAssembly）離線跑；C / C++ / Java 經 Judge0 CE 雲端 GCC/G++/javac 執行，輸出與正式比賽一致
- ✅ **即時評分**：自動跑全部測資、顯示 AC/WA 與逐字元 diff
- 💡 **解題思路**：每題附「關鍵字 → 演算法」對照、核心一行、常見陷阱與進階優化
- ⭐ **難度可視化**：⭐ 初級 / ⭐⭐ 中級 / ⭐⭐⭐ 中高級 / ⭐⭐⭐⭐ 高級 直接顯示在側欄
- 📚 **71 章互動教學**：tutorial.html 從變數一路教到 APCS 新制程式識讀，**包含 7 個 🔥 高級題專章/小節**（快速冪、分治逆序對、區間 DP、Kadane 2D、LIS O(n log n)、完全背包、編輯距離）

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

| 章節 | 標題 | 覆蓋題型/核心觀念 |
|------|------|-------------------|
| 11.7 | 🔥 Kadane 1D / 2D | 最大連續子陣列和；2D 用「列前綴和 + 1D Kadane」壓成 O(n³) |
| 24.2 | 🔥 LIS O(n log n) | 最長遞增子序列：patience sort + `bisect_left`，破 O(n²) 朴素 DP |
| 24.5 | 🔥 完全背包 | 物品可重複選；對比 0/1 背包的迴圈方向差異 |
| 24.6 | 🔥 編輯距離 | Levenshtein：插入/刪除/替換的二維 DP |
| 24.7 | 🔥 區間 DP / 矩陣連乘 | `dp[i][j] = min(dp[i][k] + dp[k+1][j] + cost)` 的區間切點枚舉 |
| 69   | 🔥 快速冪與模運算 | 迭代 fast_pow、Python `pow(a,n,m)`、Fermat 模逆元、矩陣快速冪求 Fibonacci |
| 70   | 🔥 分治與逆序對 | 合併排序計數 `c += len(L) - i`，把 O(n²) 降到 O(n log n) |

**相關進階主題**（非 🔥 但配合高級題）：Ch 21 樹走訪、Ch 22 BFS/DFS、Ch 23 最短路徑 + 拓樸排序、Ch 25 並查集 DSU、Ch 26 字串雜湊 & Trie。

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

**APCS Judge** is a fully in-browser practice site for Taiwan's APCS exam — from beginner syntax tutorials to ⭐⭐⭐⭐ advanced-tier problem drills, all behind a single URL. No backend, no signup, no `npm build`; open the tab and start coding.

- 🌐 **Single HTML, no backend** — clone + static server, or just open the GitHub Pages link
- 🧩 **Full four-language solutions** — Python / C++ / C / Java reference solutions for all 125 problems
- ⚡ **Real compilation** — Pyodide (WebAssembly) for offline Python; Judge0 CE cloud GCC/G++/javac for C / C++ / Java, matching real-contest output
- ✅ **Instant grading** — auto-runs every sample, AC/WA verdict with per-character diff
- 💡 **Solution hints** — "keyword → algorithm" mapping, key one-liner, common pitfalls, and advanced optimizations per problem
- ⭐ **Visualized difficulty** — ⭐ Beginner / ⭐⭐ Intermediate / ⭐⭐⭐ Upper-Intermediate / ⭐⭐⭐⭐ Advanced badges in the sidebar
- 📚 **71-chapter interactive tutorial** — tutorial.html walks from variables all the way to APCS new-format code-reading tactics, **including 7 🔥 advanced-topic chapters/subsections** (fast power, divide-and-conquer inversions, interval DP, 2D Kadane, LIS O(n log n), unbounded knapsack, edit distance)

### 🎯 Problem Breakdown

| Difficulty | Count | Coverage |
|------------|-------|----------|
| ⭐ Beginner | **36** | Direct implementation, I/O, arithmetic, conditionals, loops, simple arrays, strings, and simulations. |
| ⭐⭐ Intermediate | **49** | Sequence processing: arrays/lists, strings, matrices, sorting, prefix sums, two pointers, sliding windows, simple DP, and state simulation. |
| ⭐⭐⭐ Upper-Intermediate | **27** | Core data structures and state handling: stack, queue, set/map/hash, BFS/DFS, DSU, trees, parsing, and multi-step preprocessing. |
| ⭐⭐⭐⭐ Advanced | **13** | Algorithmic optimization: shortest paths, advanced DP, divide and conquer, binary search on answer, hashing, backtracking, and large constraints. |

### 📚 Tutorial (tutorial.html)

**71 interactive chapters**, each with a Markdown lesson on the left and a live Pyodide editor on the right. Chapters marked 🔥 are advanced-topic deep-dives covering the algorithms required by the ⭐⭐⭐⭐ Advanced problem set:

| Chapter | Title | Topic |
|---------|-------|-------|
| 11.7 | 🔥 Kadane 1D / 2D | Maximum contiguous subarray sum; 2D via row prefix sums + 1D Kadane → O(n³) |
| 24.2 | 🔥 LIS O(n log n) | Longest increasing subsequence: patience sort + `bisect_left` |
| 24.5 | 🔥 Unbounded knapsack | Items reusable; loop-direction contrast vs. 0/1 knapsack |
| 24.6 | 🔥 Edit distance | Levenshtein 2D DP (insert/delete/replace) |
| 24.7 | 🔥 Interval DP / matrix chain | `dp[i][j] = min(dp[i][k] + dp[k+1][j] + cost)` split-point enumeration |
| 69   | 🔥 Fast power & modular arithmetic | Iterative fast_pow, Python `pow(a,n,m)`, Fermat modular inverse, matrix fast power for Fibonacci |
| 70   | 🔥 Divide-and-conquer & inversions | Merge-sort counting `c += len(L) - i`, O(n²) → O(n log n) |

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

# APCS Multi-Language Online Judge / APCS 多語言線上評分系統

> 一個檔案、四種語言、58 道題目、即時瀏覽器評分、附解題思路
> One file, four languages, 58 problems, in-browser instant grading, with solution hints

🔗 **Live Demo / 線上體驗**：**https://yu-0312.github.io/apcs-judge/**

[English](#english) · [繁體中文](#繁體中文)

---

## 繁體中文

### 📖 簡介

這是一個為 **APCS（大學程式設計先修檢測）** 設計的線上練習平台，特色是：

- **單一 HTML 檔案**：134 KB，無需後端，下載即可使用
- **四語言切換**：Python / C++ / C / Java，同一題支援所有語言
- **瀏覽器內執行**：Python 用 Pyodide、C/C++ 用 JSCPP、Java 用 Piston API
- **即時評分**：對照預期輸出，顯示 AC / WA 與詳細差異
- **解題思路提示**：每題都附「💡 思路」，解釋題目中的關鍵字暗示了什麼演算法
- **58 道題目**：涵蓋初級、中級、高級三個難度

### 🎯 題目分布

| 難度 | 題數 | 涵蓋內容 |
|------|------|---------|
| ⭐ 初級 | **33 題** | APCS 歷屆 P1 全部 24 題（2016–2025）+ APCS P2 簡化版 4 題 + 自製基礎題 5 題 |
| ⭐⭐ 中級 | **18 題** | Kadane、LIS、二分搜尋、質數篩、堆疊、前綴和、雙指標 + APCS P2 原版 4 題 |
| ⭐⭐⭐ 高級 | **7 題** | 0/1 背包、LCS、BFS 最短路、矩陣螺旋、快速冪、編輯距離、N 皇后 |

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
| **JSCPP** | C/C++ 直譯器，純 JavaScript 實作，無需編譯 |
| **Piston API** | Java 雲端執行（免費、無需 API Key） |
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
  diff: "easy",        // easy | medium | hard
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

- **Single HTML file**: 134 KB, no backend needed, runs entirely in the browser
- **Four language modes**: Python / C++ / C / Java, all problems work in all languages
- **In-browser execution**: Pyodide (Python), JSCPP (C/C++), Piston API (Java)
- **Instant grading**: Automatic comparison with expected output, AC/WA verdicts with diff view
- **Solution hints**: Every problem includes a "💡 Hint" panel explaining which keywords in the problem statement suggest which algorithm
- **58 problems**: Across easy, medium, and hard difficulty levels

### 🎯 Problem Breakdown

| Difficulty | Count | Coverage |
|------------|-------|----------|
| ⭐ Easy | **33** | All 24 APCS P1 problems (2016–2025) + 4 simplified P2 + 5 custom basics |
| ⭐⭐ Medium | **18** | Kadane, LIS, binary search, prime sieve, stack, prefix sums, two pointers + 4 original APCS P2 |
| ⭐⭐⭐ Hard | **7** | 0/1 knapsack, LCS, BFS shortest path, spiral matrix, fast power, edit distance, N-queens |

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
| **JSCPP** | Pure-JavaScript C/C++ interpreter, no compilation needed |
| **Piston API** | Cloud Java execution (free, no API key required) |
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
  diff: "easy",        // easy | medium | hard
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

---

🤖 *Built with [Claude Code](https://claude.com/claude-code)*

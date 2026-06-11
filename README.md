# 互動程式教室 × APCS 練習 / Interactive Coding Classroom × APCS Practice

> 從零基礎到進階：Python · C++ · C · Java 四語言、95 章互動教學，搭配 300 題 APCS 分級題庫——全部在瀏覽器內完成，零安裝、零後端、零註冊。
> Learn to code from zero in four languages — 95 interactive chapters plus a 300-problem tiered APCS judge, entirely in the browser. No install, no backend, no signup.

📚 **程式教學 / Tutorial**：**https://yu-0312.github.io/apcs-judge/tutorial.html**

🎯 **APCS 題庫 / Judge**：https://yu-0312.github.io/apcs-judge/

[繁體中文](#繁體中文) · [English](#english)

---

## 繁體中文

### 這是什麼？

這個專案是一條完整的學習路徑，由兩個頁面組成：

| 頁面 | 角色 | 內容 |
|------|------|------|
| 📚 **tutorial.html** | **主軸：程式教學** | 95 章互動課程，從「什麼是程式」一路教到爬蟲、資料分析、機器人、遊戲開發，以及 C++ / C / Java 各自的語言專項 |
| 🎯 **index.html** | **實戰：APCS 練習** | 300 道分級題目、四語言官方解答、即時評分與解題思路 |

先在教學頁把觀念跑通，再到題庫實戰演練——也可以反過來，卡題時回教學頁補對應章節。

### ✨ 特色

- **邊讀邊跑**：每章左側是教材、右側是真的能執行的編輯器。Python 由 Pyodide（WebAssembly）在瀏覽器本地執行；C / C++ / Java 經 Judge0 CE 雲端編譯，輸出與正式環境一致
- **一份課綱、四種語言**：共同章節（0–35、68–70）在每個語言模式下都有對應的教材與範例程式；切換語言分頁即可比較同一概念在不同語言的寫法
- **每章三件套**：「🎯 學習目標 → ✋ 動手試試 → 📝 程式練習」，程式練習自動比對輸出批改，通過才算完成該章；進度存在 localStorage
- **🧠 設計動機**：十個關鍵章節附「為什麼要這樣設計」深度解析（EAFP、HTTP 無狀態、pandas 向量化、async、delta time、模運算同餘、RAII、值語意、型別擦除、JIT）
- **雙語介面**：右上角一鍵切換繁中 / English，教材內容同步切換
- **手機可用**：行動版以底部導覽列切換「章節 / 教學 / 程式」三個面板
- **鍵盤操作**：`Ctrl/Cmd + Enter` 直接執行程式；分頁與章節列表支援 Tab + Enter

### 🗺️ 課程地圖（95 章）

| 篇章 | 章節 | 內容 |
|------|------|------|
| 入門與基礎 | 0–10 | 變數、輸入輸出、運算子、條件、迴圈、字串、List、二維陣列、函式、Dict/Set |
| 演算法與資料結構 | 11–26 | 排序/搜尋/前綴和、遞迴、枚舉、deque/heap、樹走訪、BFS/DFS、最短路徑、進階 DP（LIS/背包）、並查集、字串 hash/Trie，含 🔥 Kadane、區間 DP、編輯距離等高級題小節 |
| 軟體工程實務 | 27–35 | 檔案 I/O、模組、物件導向、例外處理、測試除錯、CLI 工具、CSV 分析、API/JSON、終端機遊戲專案 |
| Python 應用：網頁爬蟲 | 36–43 | HTTP、requests、DOM、BeautifulSoup、分頁爬取、資料儲存、防呆與爬蟲道德 |
| Python 應用：資料分析 | 44–51 | pandas 讀檔/選取/清理、統計彙總、groupby、merge、matplotlib 視覺化 |
| Python 應用：聊天機器人 | 52–59 | 事件迴圈、Discord Bot、LINE Bot、狀態管理、排程推播、部署上線 |
| Python 應用：遊戲開發 | 60–67 | pygame game loop、座標繪圖、輸入處理、移動動畫、碰撞偵測、音效，最後做出完整 Pong |
| APCS 衝刺 | 68–70 | 新制分級與程式識讀、🔥 快速冪與模運算、🔥 分治與逆序對 |
| C++ 專項 | 71–78 | STL 容器、template、智慧指標與 RAII、move 語意、lambda、`<algorithm>`、string_view、std::thread |
| C 專項 | 79–86 | 指標深入、malloc/free、struct/union、函式指標、字串函式、巨集、系統呼叫、Makefile |
| Java 專項 | 87–94 | Collections、泛型、Stream API、Optional、執行緒、Lock/Atomic、反射、JVM 與 GC |

> 切換語言分頁時會自動顯示該語言適用的章節：Python 模式 71 章（含應用篇），C++ / C / Java 模式各 47 章（共同基礎 + 該語言專項 + APCS 衝刺）。

### 🎯 APCS 練習（題庫）

學完概念之後，到 [題庫頁](https://yu-0312.github.io/apcs-judge/) 實戰：

- **300 道題目**，每題附四語言（Python / C++ / C / Java）官方解答
- **即時評分**：自動跑全部測資，顯示 AC/WA 與逐字元 diff
- **💡 解題思路**：「題目關鍵字 → 該用什麼演算法」對照、核心一行、常見陷阱與進階優化

#### 難度分布

| 難度 | 題數 | 對應能力 |
|------|------|---------|
| ⭐ 初級 | 36 | 基礎輸入輸出、條件、迴圈、簡單陣列與直接模擬 |
| ⭐⭐ 中級 | 84 | 字串、二維陣列、排序、前綴和、雙指標、滑動視窗、基本 DP |
| ⭐⭐⭐ 中高級 | 53 | stack/queue/set/map、BFS/DFS、DSU、樹、多階段前處理 |
| ⭐⭐⭐⭐ 高級 | 127 | 圖論最短路、進階 DP、分治、二分搜答案、字串雜湊、回溯與複雜度控制 |

題源涵蓋 APCS 官方歷屆、ZeroJudge、啟思博，以及進階訓練用的 Codeforces / CF Gym / USACO（以 `src` 前綴標示）。

#### APCS 新制對照

APCS 新制包含「程式識讀」與「程式實作」兩部分；實作題本分初級 / 中級 / 中高級 / 高級四種（2025 年 10 月起觀念題改為程式識讀，並新增 Python 題本）。本專案難度分級即對應四種題本的能力核心，教學第 68 章有完整的新制說明與程式識讀練習。

參考：[APCS 題目範例](https://apcs.csie.ntnu.edu.tw/index.php/questionstypes/previousexam/)、[APCS 成績說明](https://apcs.csie.ntnu.edu.tw/index.php/grades/)、[王一哲老師 APCS 課程整理](https://sites.google.com/view/yizhe/%E8%AA%B2%E7%A8%8B/apcs)

### 🚀 快速開始

**線上**：直接開 https://yu-0312.github.io/apcs-judge/tutorial.html 開始上課，或 https://yu-0312.github.io/apcs-judge/ 開始刷題。

**本地**：

```bash
git clone https://github.com/Yu-0312/apcs-judge.git
cd apcs-judge
python3 -m http.server 8000
# 開啟 http://localhost:8000/tutorial.html
```

### 🛠️ 技術

| 元件 | 用途 |
|------|------|
| **Pyodide** | Python 3.12 編譯為 WebAssembly，瀏覽器內本地執行 |
| **Judge0 CE** | C / C++ / Java 雲端編譯執行（公開實例，免 API Key） |
| **CodeMirror 5** | 語法高亮編輯器 |
| **marked.js** | Markdown 教材與題目渲染 |

單一 HTML 檔、所有依賴走 CDN——無 npm、無 build step、無後端。

### 🤝 貢獻

歡迎以下類型的 PR：

- 新增教學章節或補充既有章節（請同時更新中英文內容）
- 新增題目（請同時提供四語言解答與解題思路）
- 修正解答或教材錯誤
- 改善 UI/UX 與行動版體驗

### 📜 授權

MIT License。題目敘述若引用自 APCS、ZeroJudge、啟思博等來源，相關著作權歸原作者所有。

---

## English

### Overview

This project is a complete learning path made of two pages:

| Page | Role | Content |
|------|------|---------|
| 📚 **tutorial.html** | **Core: coding tutorial** | 95 interactive chapters, from "what is a program" through web scraping, data analysis, chat bots and game dev, plus dedicated C++ / C / Java tracks |
| 🎯 **index.html** | **Practice: APCS judge** | 300 tiered problems with reference solutions in four languages, instant grading and solution hints |

### Highlights

- **Read and run**: every chapter pairs a lesson with a live editor. Python runs locally via Pyodide (WebAssembly); C / C++ / Java compile in the cloud via Judge0 CE
- **One curriculum, four languages**: shared chapters (0–35, 68–70) carry language-specific lessons and examples — switch tabs to compare the same concept across languages
- **Per-chapter loop**: learning goals → hands-on tweaks → auto-graded coding exercise; progress persists in localStorage
- **🧠 Design Motivation** sections in ten key chapters explain *why* things are designed the way they are (EAFP, stateless HTTP, pandas vectorization, async, delta time, modular arithmetic, RAII, value semantics, type erasure, JIT)
- **Bilingual UI**: one-click Traditional Chinese / English toggle, lesson content included
- **Mobile-friendly**: bottom navigation switches between chapters / lesson / code panels
- **Keyboard**: `Ctrl/Cmd + Enter` to run; tabs and chapter list are keyboard-accessible

### Curriculum map (95 chapters)

| Track | Chapters | Topics |
|-------|----------|--------|
| Foundations | 0–10 | variables, I/O, operators, control flow, strings, lists, 2D arrays, functions, dict/set |
| Algorithms & data structures | 11–26 | sorting/searching, recursion, deque/heap, trees, BFS/DFS, shortest paths, advanced DP, DSU, string hashing/Trie, incl. 🔥 advanced-tier sections |
| Software practice | 27–35 | file I/O, modules, OOP, exceptions, testing, CLI tools, CSV analysis, APIs/JSON, a terminal game project |
| Python: web scraping | 36–43 | HTTP, requests, DOM, BeautifulSoup, pagination, storage, scraping ethics |
| Python: data analysis | 44–51 | pandas core, cleaning, groupby, merge, matplotlib |
| Python: chat bots | 52–59 | event loops, Discord & LINE bots, state, scheduling, deployment |
| Python: game dev | 60–67 | pygame loop, drawing, input, motion, collision, audio — ending with a full Pong |
| APCS sprint | 68–70 | the new tier system & code literacy, 🔥 fast exponentiation, 🔥 divide & conquer / inversions |
| C++ track | 71–78 | STL, templates, smart pointers & RAII, move semantics, lambdas, `<algorithm>`, string_view, threads |
| C track | 79–86 | pointers, malloc/free, struct/union, function pointers, string functions, macros, syscalls, Makefiles |
| Java track | 87–94 | Collections, generics, Stream API, Optional, threads, Lock/Atomic, reflection, JVM & GC |

### APCS practice

The [judge](https://yu-0312.github.io/apcs-judge/) hosts **300 problems** (⭐ 36 / ⭐⭐ 84 / ⭐⭐⭐ 53 / ⭐⭐⭐⭐ 127) with four-language reference solutions, instant grading with per-character diff, and keyword→algorithm solution hints. Sources include official APCS past exams, ZeroJudge, and Codeforces / CF Gym / USACO for advanced training.

### Quick start

Open https://yu-0312.github.io/apcs-judge/tutorial.html — or run locally:

```bash
git clone https://github.com/Yu-0312/apcs-judge.git
cd apcs-judge
python3 -m http.server 8000
# open http://localhost:8000/tutorial.html
```

Single HTML files, all dependencies from CDN — no npm, no build step, no backend (Pyodide, Judge0 CE, CodeMirror 5, marked.js).

### License

MIT. Problem statements referenced from APCS, ZeroJudge and other sources remain the property of their original authors.

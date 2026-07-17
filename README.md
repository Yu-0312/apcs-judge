# 互動程式教室 × APCS 練習 / Interactive Coding Classroom × APCS Practice

> 從零基礎到進階：Python · C++ · C · Java 四語言、101 章互動教學，搭配 300 題公開範例練習與 2563 題程式判讀，再加上 AI 解題與統一錯題本——全部在瀏覽器內完成，零安裝、零註冊。
> Learn to code in four languages with 101 interactive chapters, a 300-problem public-example checker, 2,563 code-reading questions, an AI solver and a unified mistakes book—all in the browser, with no install or signup.

📚 **程式教學 / Tutorial**：**https://yu-0312.github.io/apcs-judge/tutorial.html**

🎯 **APCS 題庫 / Judge**：https://yu-0312.github.io/apcs-judge/

🔍 **程式判讀 / Code Reading**：https://yu-0312.github.io/apcs-judge/reading.html

🤖 **AI 解題 / AI Solver**：https://yu-0312.github.io/apcs-judge/ai-solve.html

📕 **錯題本 / Mistakes Book**：https://yu-0312.github.io/apcs-judge/mistakes.html

🗺 **學習地圖 / Study Plan**：https://yu-0312.github.io/apcs-judge/studyplan.html

📊 **我的進度 / Dashboard**：https://yu-0312.github.io/apcs-judge/dashboard.html

[繁體中文](#繁體中文) · [English](#english)

| 教學（桌面版） | 教學（手機版） |
|:---:|:---:|
| ![教學頁桌面版截圖](assets/tutorial-desktop.png) | <img src="assets/tutorial-mobile.png" alt="教學頁手機版截圖" width="220"> |

![題庫頁截圖](assets/judge-desktop.png)

---

## 繁體中文

### 這是什麼？

這個專案是一條完整的學習路徑，由七個頁面組成：

| 頁面 | 角色 | 內容 |
|------|------|------|
| 📚 **tutorial.html** | **主軸：程式教學** | 101 章互動課程，從「什麼是程式」一路教到爬蟲、資料分析、機器人、遊戲開發、除錯防呆，以及 C++ / C / Java 各自的語言專項 |
| 🗺 **studyplan.html** | **學習地圖** | 零基礎入門、APCS 衝刺、進階/競賽三條讀書路線；路線、語言、日期與完成階段會自動存於本機，下次開啟可直接續接 |
| 📊 **dashboard.html** | **我的進度** | 彙整教學、題庫、判讀、錯題與每日一題，並提供完整進度備份下載、上傳恢復與跨裝置搬移 |
| 🎯 **index.html** | **實戰：APCS 練習** | 300 道分級題目、四語言參考解答、公開範例檢查與解題思路 |
| 🔍 **reading.html** | **判讀：程式識讀** | 2563 題「讀程式碼、選答案」的判讀練習，依 APCS 四級難度分庫、C/C++/Python/Java/JavaScript 各語言獨立題庫，並可隨機抽題（最多 50 題），作答後即時對解＋考點解析 |
| 🤖 **ai-solve.html** | **AI 貼題／拍照解題** | 貼上完整題目或上傳照片，由 Gemini 結構化讀題讓你確認；可選逐層提問且不給完整程式的教練模式，或明確切換完整解題並自行決定是否執行公開範例 |
| 📕 **mistakes.html** | **統一錯題本** | 自動收錄判讀題、實作題與 AI 解題上傳的錯題，以日期整理，可自訂標題、檢視詳解、刪除 |

先在教學頁把觀念跑通，再到題庫實戰演練、用判讀頁練讀程式的速度與細節——也可以反過來，卡題時回教學頁補對應章節。做錯的題目會自動進「錯題本」，卡住的題目也能到「AI 解題」貼上題目或拍照，請 AI 用教練方式帶你推導。

### ✨ 特色

- **邊讀邊跑**：每章左側是教材、右側是可執行的編輯器。Python 由 Pyodide（WebAssembly）在瀏覽器本地執行；C / C++ / Java 經第三方 Judge0 CE 雲端編譯，版本與正式考場或其他 OJ 仍可能不同
- **一份課綱、四種語言**：共同章節（0–35、68–70）在每個語言模式下都有對應的教材與範例程式；切換語言分頁即可比較同一概念在不同語言的寫法
- **每章完整學習迴圈**：「🎯 學習目標 → ✋ 動手試試 → 🌍 真實情境 → 🧠 觀念小測 → 📝 判讀快問快答 / 程式練習」，錯題自動進統一錯題本，進度存在 localStorage
- **🧠 設計動機**：十個關鍵章節附「為什麼要這樣設計」深度解析（EAFP、HTTP 無狀態、pandas 向量化、async、delta time、模運算同餘、RAII、值語意、型別擦除、JIT）
- **雙語介面**：右上角一鍵切換繁中 / English，教材內容同步切換
- **Light / Dark 主題**：全站與浮動學習工具皆可切換淺色／深色，第一次跟隨系統偏好，之後會在目前瀏覽器記住並同步到其他分頁
- **🤖 AI 貼題／拍照解題**：可直接貼完整題目，不需上傳圖片；若使用圖片會先在本機縮小並重編碼。AI 結構化讀題後由你確認，再選教練模式逐層思考或完整解題；任何 AI 程式碼都要經你預覽同意才執行。公開範例相符只是一致性檢查，不等同完整正確性證明
- **📕 統一錯題本**：判讀題、實作題與 AI 解題上傳的錯題自動收錄成一本，以日期整理、可自訂標題與檢視詳解，複習不漏題（存在瀏覽器 localStorage）
- **💬 全站聊天**：內含 AI 助教與預設關閉的 Firebase 大眾聊天室；Gemini 金鑰與 AI 對話只保存於分頁工作階段，公共發言須先完成 Auth、Rules、Emulator、App Check 與營運檢查，再由部署者明確開啟設定閘門
- **手機可用**：行動版以底部導覽列切換「章節 / 教學 / 程式」三個面板
- **進度可攜**：教學、題庫、判讀、錯題本、每日一題與學習地圖都會自動存入瀏覽器（localStorage）；完整 JSON 備份會先驗證再交易式恢復，失敗時回滾原資料，跨裝置匯入會合併兩端已完成的學習階段
- **執行器防護**：Python Worker 可逾時重建且會釋放暫存資源；Pyodide 與 Judge0 的 stdout / stderr 均限制為 200,000 字元，截斷輸出不會被誤判為通過；C 提交自動連結 libm（`-lm`），`math.h` 的 `sqrt` 等函式在 Judge0 上不會編譯失敗
- **鍵盤操作**：`Ctrl/Cmd + Enter` 直接執行程式；分頁與章節列表支援 Tab + Enter

### 🗺️ 課程地圖（101 章）

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
| 進階觀念 | 95–97 | 物件模型、函式參數進階、如何讀官方文件 |
| 除錯與防呆 | 98–100 | 常見錯誤訊息、print / 二分定位 bug、輸入驗證與防呆 |

> 切換語言分頁時會自動顯示該語言適用的章節：Python 模式 77 章（含應用篇與 Python 進階觀念），C++ / C / Java 模式各 51 章（共同基礎 + 該語言專項 + APCS 衝刺 + 共通除錯章）。

### 🎯 APCS 練習（題庫）

學完概念之後，到 [題庫頁](https://yu-0312.github.io/apcs-judge/) 實戰：

- **300 道題目**，每題附四語言（Python / C++ / C / Java）參考解答
- **公開範例檢查**：執行題面列出的 samples，顯示逐筆結果與 diff；不會把範例通過誤標為 AC
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

### 🔍 程式判讀（識讀練習）

[程式判讀頁](https://yu-0312.github.io/apcs-judge/reading.html) 專門練「讀懂一段程式並推出結果 / 找出錯誤」的選擇題——這正是 **APCS 程式識讀**與**統測 程式設計實習**的主力題型。

- **2563 題**：APCS 官方範例題與統測歷屆判讀題（標「官方解答」）、依考點自編的精選練習題，再加上 **C / C++ / Python / Java / JavaScript 各語言獨立題庫**（C 980、Python 494、C++ 445、Java 275、JavaScript 161、共同 208）；新增 480 題補強高級演算法、程式填空、複雜度分析、測試案例設計、樹圖與堆疊/佇列等缺口
- **依 APCS 四級難度分庫＋語言分庫**：左側欄如教學頁般展開「初級 / 中級 / 中高級 / 高級」，每個難度底下列出各自對應的題庫——不同語言各自成庫不混雜，點進題庫即開始練習；卡片上也會標示該題難度與語言
- **🎲 隨機抽題練習**：每個難度都有「隨機練習」入口，可自選題數（最多 50 題），按下即從該難度題庫隨機抽出一回合，並可「重新抽題」換一批
- **即時對解**：讀程式碼、選答案，作答後立即顯示正解與考點解析；可執行的 C / C++ / Python / Java / JavaScript 題目其答案皆以本機編譯／執行抽樣驗證
- **進度可攜**：每個題庫與整體的作答進度即時顯示於側欄，紀錄存於瀏覽器 localStorage（重新開啟自動回到上次的題庫或隨機回合）

### 🤖 AI 貼題／拍照解題（教練或完整解題）

[AI 解題頁](https://yu-0312.github.io/apcs-judge/ai-solve.html) 讓你把卡住的題目**直接貼上完整文字，或拍照交給 AI**。無論哪種來源，都會先走結構化讀題與人工確認，不會一收到內容就直接執行程式：

1. **貼題／拍照 ＋ 補充**：可貼上完整題目文字、上傳題目照片，或兩者一起提供；兩者至少一項。純文字不會建立圖片，也不要求圖片傳送同意。
2. **AI 讀題 → 你確認**：AI 先輸出它「讀到的題目」（含輸入輸出格式、範例測資），讓你核對無誤才進下一步，避免 AI 會錯意就寫錯方向。
3. **選擇學習模式**：完整解題會產生程式預覽；教練模式則先提供三層提示與引導問題，每一層都要先寫下自己的想法，不提供完整程式，也不啟動任何執行環境。
4. **由你決定下一步**：完成三層教練引導後，才會顯示「切換到完整解題」按鈕。即使進入完整解題，AI 程式碼仍需你逐次明確允許才會執行；公開範例重複相符不代表通過隱藏或邊界測資。

使用你自備的 Google Gemini 金鑰；金鑰只存於目前分頁的 `sessionStorage`／記憶體，關閉分頁後失效，舊版 localStorage 金鑰會移除。解題紀錄寫入本機錯題本時一律不標示 `verified`；是否保留處理後縮圖由你選擇。

### 📕 統一錯題本（依日期整理）

[錯題本頁](https://yu-0312.github.io/apcs-judge/mistakes.html) 把你在**程式判讀**、**APCS 實作**與 **AI 解題**三處遇到的錯題**自動收成同一本**：

- **自動收錄**：判讀答錯、實作沒過、AI 解題上傳的題目都會落進錯題本，不必手動抄。
- **依日期整理**：以日期作為預設標題分組，也可自訂每筆標題方便日後檢索。
- **檢視與清理**：可展開看原題與完整詳解、複習後把已掌握的題目刪除。

紀錄存在瀏覽器 localStorage，複習時一頁掌握所有做錯的題目。

### 💬 全站聊天（AI 助教 ＋ 大眾聊天室）

題庫、教學、判讀、AI 解題與錯題本頁面的右下角有一顆浮動圓鈕（可按 ✕ 收起），點開後是一個**可拖曳**的聊天視窗，內含兩個分頁：

- **🤖 AI 助教**：可詢問 APCS、程式判讀與除錯；金鑰和對話只留在目前分頁工作階段，避免長期明文保存。
- **🌐 大眾聊天室**：由 **Firebase Realtime Database** 承載，但版本庫預設 `publicChat.enabled: false`。前端無法判斷後端是否仍為測試規則，因此不會以連線成功當作安全證明；只有部署者完成檢查並明確開啟旗標後才載入 Firebase SDK 與匿名登入。

聊天工具集中在 `data/chat-widget.js`，模型、端點與部署閘門則集中在先載入的 `data/service-config.js`。

#### 站長：安全啟用大眾聊天室

AI 助教不受此旗標影響。大眾聊天室預設 fail closed；完成下列全部步驟後，才可由部署者手動開啟：

1. 在 Firebase 建立 Realtime Database，**不要使用長期測試模式**，並啟用 Anonymous Authentication。
2. 將網頁 `Config` 填入 `data/chat-widget.js`；web config 可公開，但不是授權機制。
3. 檢查並部署版本庫內的 `firebase.database.rules.json`；確認正式專案不再使用測試規則，也稽核／清除測試期間留下的資料。
4. 以 Firebase Emulator 驗證未登入、欄位不符、超長訊息、額外欄位與竄改／刪除訊息均被拒絕，再部署正式環境。現有 Rules **沒有**實作發言速率限制。
5. 完成 App Check 客戶端整合並在 Firebase 強制執行，同時配置真正的後端限流、檢舉／封鎖、保留期限、配額／預算警報與營運監控。
6. 完成上線檢查後，把 `data/service-config.js` 的 `publicChat.enabled` 明確改為 `true`，並同步更新該檔 `cacheVersion` 與所有載入標籤；若有疑慮立即改回 `false`。

訊息儲存在 `rooms/<房號>/messages`，前端只顯示最近 200 則；暱稱存在瀏覽器 localStorage。瀏覽器內的 2.5 秒送出節流只改善操作體驗，可被繞過，**不是安全控制或後端限流**。

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
| **Google Gemini** | AI 貼題／拍照解題與 AI 助教（瀏覽器直呼，自備金鑰只存於目前分頁工作階段） |
| **Firebase Realtime Database** | 大眾聊天室同步；需搭配 Auth、版本化 Rules、App Check 與營運限額 |

主要學習介面是純靜態網站（HTML + `data/*.js` 資料檔），沒有自營帳號後端；瀏覽器會依功能直接連到 Pyodide／Judge0／Gemini／Firebase。Runtime 不需 npm build，內容維護則有產物與 CI 檢查腳本。教材與題目資料拆檔存於 `data/`；`node scripts/check-data.js` 可在本地驗證資料一致性（CI 亦會自動跑）。學習狀態與完整備份集中在 `data/learning-state.js`，匯入／清除採快照回滾且穩定狀態不會在每次載入時重寫；全站 Light / Dark 由 `data/theme.js` 與 `assets/theme.css` 共用，錯題本由 `data/mistake-book.js` 統一讀寫，聊天工具則集中在 `data/chat-widget.js`。完整上線檢查見 [`DEPLOYMENT.md`](DEPLOYMENT.md)。

### 🤝 貢獻

歡迎以下類型的 PR：

- 新增教學章節或補充既有章節（請同時更新中英文內容）
- 新增題目（請同時提供四語言解答與解題思路）
- 修正解答或教材錯誤
- 改善 UI/UX 與行動版體驗

### 📜 授權與政策

- **程式碼**：[MIT License](LICENSE) — 可自由使用、修改、散布，保留著作權聲明即可。
- **教學與題目內容**：著作權保留，非營利學習可自由使用，大量轉載或商用請先來信洽詢；引用自 APCS、ZeroJudge、啟思博、Codeforces/AtCoder/USACO 等來源的題目，著作權歸原作者所有。詳見 [授權與內容使用說明](授權與內容使用說明.md)。
- **[免責聲明](免責聲明.md)**：教學/練習性質、AI 生成內容與第三方服務的使用須知。
- **[隱私權政策](隱私權政策.md)**：本站無帳號、無後端；資料多存於你的裝置本地，僅 AI（Gemini）、判題（Judge0）與公開聊天室（Firebase）會對外傳輸——細節與注意事項見政策說明。

聯絡：wang.yuchi.312@gmail.com ／ [GitHub Issues](https://github.com/Yu-0312/apcs-judge/issues)

---

## English

### Overview

This project is a complete learning path made of seven pages:

| Page | Role | Content |
|------|------|---------|
| 📚 **tutorial.html** | **Core: coding tutorial** | 101 interactive chapters, from "what is a program" through web scraping, data analysis, chat bots, game dev, debugging, input validation, plus dedicated C++ / C / Java tracks |
| 🗺 **studyplan.html** | **Learning map** | Three study paths with auto-saved route, language, start date and completed stages, ready to resume on the next visit |
| 📊 **dashboard.html** | **Progress dashboard** | Full local summary plus complete JSON backup download, upload/restore and manual transfer across devices |
| 🎯 **index.html** | **Practice: APCS sample checker** | 300 tiered problems with four-language reference solutions, public-example checks and solution hints |
| 🔍 **reading.html** | **Code reading** | 2563 "read the code, pick the answer" comprehension questions across four APCS difficulty tiers with separate C/C++/Python/Java/JavaScript banks, plus per-level random draw (up to 50), instant reveal and per-question explanations |
| 🤖 **ai-solve.html** | **AI text/photo solver** | Paste a complete problem or upload a photo, confirm Gemini's structured reading, then choose a no-code layered coaching flow or explicitly enter full-solution mode with user-approved sample execution |
| 📕 **mistakes.html** | **Unified mistakes book** | Auto-collects wrong answers from code-reading, judge problems and AI-solve uploads, grouped by date, with editable titles, expandable explanations and delete |

### Highlights

- **Read and run**: every chapter pairs a lesson with a live editor. Python runs locally via Pyodide (WebAssembly); C / C++ / Java compile through third-party Judge0 CE, whose versions may differ from an exam environment or another OJ
- **One curriculum, four languages**: shared chapters (0–35, 68–70) carry language-specific lessons and examples — switch tabs to compare the same concept across languages
- **Per-chapter loop**: learning goals → hands-on tweaks → real-life example → concept quiz → embedded code-reading drill / auto-graded coding exercise; wrong answers go into the unified mistakes book and progress persists in localStorage
- **🧠 Design Motivation** sections in ten key chapters explain *why* things are designed the way they are (EAFP, stateless HTTP, pandas vectorization, async, delta time, modular arithmetic, RAII, value semantics, type erasure, JIT)
- **Bilingual UI**: one-click Traditional Chinese / English toggle, lesson content included
- **Light / Dark themes**: site-wide toggle including floating learning tools, system preference on first visit, then remembered and synchronized across tabs
- **🤖 AI text/photo solver**: paste the full problem without creating an image, or upload an image that is resized and re-encoded locally. After confirming the structured reading, choose layered coaching with no complete code or full-solution mode; generated code still requires explicit approval before every run
- **📕 Unified mistakes book**: wrong answers from code-reading, judge problems and AI-solve uploads are auto-collected into one book, grouped by date with editable titles and expandable explanations, so nothing slips through review (stored in localStorage)
- **💬 Site-wide chat**: an AI tutor uses a session-only key/history; the Firebase public room defaults to an explicit disabled deployment flag until Auth, Rules, Emulator, App Check and operational controls have been completed
- **Mobile-friendly**: bottom navigation switches between chapters / lesson / code panels
- **Portable progress**: tutorial, judge, reading, mistakes, daily activity and study-plan state auto-save to localStorage; full JSON restores are validated and transactional, roll back on failure, and merge completed study stages across devices
- **Runner safeguards**: Python workers recover from timeouts and release temporary resources; Pyodide and Judge0 stdout/stderr are capped at 200,000 characters, and truncated output is never graded as a pass; C submissions link libm (`-lm`) automatically so `math.h` functions like `sqrt` compile on Judge0
- **Keyboard**: `Ctrl/Cmd + Enter` to run; tabs and chapter list are keyboard-accessible

### Curriculum map (101 chapters)

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
| Advanced concepts | 95–97 | object model, advanced parameters, reading official documentation |
| Debugging & validation | 98–100 | common error messages, print / binary-search debugging, input validation and defensive checks |

### APCS practice

The [practice page](https://yu-0312.github.io/apcs-judge/) hosts **300 problems** (⭐ 36 / ⭐⭐ 84 / ⭐⭐⭐ 53 / ⭐⭐⭐⭐ 127) with four-language reference solutions, public-example output comparison, and keyword→algorithm hints. Passing these visible examples is deliberately labelled “Sample Passed”, not AC.

### Code reading

The [code-reading page](https://yu-0312.github.io/apcs-judge/reading.html) drills the "trace a program / spot the bug" multiple-choice format used by **APCS code literacy** and the **statutory vocational exam (統測)**. It holds **2563 questions** (official APCS samples and past 統測 items marked "official answer", curated practice questions, and dedicated single-language banks for C, C++, Python, Java and JavaScript — 980 C, 494 Python, 445 C++, 275 Java, 161 JavaScript, 208 shared), including 480 gap-fill questions for advanced algorithms, code completion, complexity analysis, test-case design, trees/graphs and stack/queue topics. It is organized into a tutorial-style collapsible sidebar: each of APCS's four difficulty tiers expands to its own question banks — languages are kept in separate banks, never mixed — and clicking a bank jumps straight into practice. Each tier also has a random-draw mode: pick how many questions (up to 50) and it deals a random round from that tier, with re-draw. Pick an answer to instantly reveal the correct option and its explanation; per-bank and overall progress show live in the sidebar.

### AI text/photo solver (coaching or full solution)

The [AI-solve page](https://yu-0312.github.io/apcs-judge/ai-solve.html) accepts either a **complete pasted problem or a problem photo**. Both sources go through structured reading and user confirmation before any solution path begins:

1. **Text/photo + context** — paste the full statement, upload a photo, or provide both, then note where you're stuck and which language you want. Text-only input neither creates an image nor requires image-transfer consent.
2. **AI reads → you confirm** — the AI first prints back the problem *as it understood it* (I/O format, sample cases) and waits for you to confirm it's right, so a misread can't send it down the wrong path.
3. **Choose a learning mode** — full-solution mode produces a code preview; coaching mode instead gives three levels of hints and one guiding question at a time, requires the learner's own thought before the next level, and never produces or executes a complete program.
4. **You choose the next step** — only after the final coaching level does an explicit switch-to-full-solution button appear. Full-solution code still runs only after explicit approval, and repeated visible-sample matches are not hidden-test proof.

It uses your own Google Gemini key, held only in sessionStorage/memory for the current tab and removed when the tab closes. Legacy localStorage keys are deleted during migration. AI-solve records are never marked `verified`; saving a processed thumbnail in the local mistakes book is opt-in.

### Unified mistakes book (grouped by date)

The [mistakes page](https://yu-0312.github.io/apcs-judge/mistakes.html) **auto-collects into one book** the problems you got wrong across **code reading**, **APCS practice** and the **AI solver**:

- **Auto-collected** — wrong code-reading answers, failed judge submissions and AI-solve uploads all land here; no manual copying.
- **Grouped by date** — the date is the default group title, and every entry's title is editable for easier lookup later.
- **Review & clean up** — expand an entry to see the original problem and full explanation, and delete the ones you've mastered.

Everything is stored in the browser's localStorage, so review puts every problem you've missed on a single page.

### Site-wide chat (AI tutor + public room)

The practice, tutorial, code-reading, AI-solve and mistakes pages have a bottom-right floating button that opens a **draggable** chat window with two tabs:

- **🤖 AI tutor** — ask APCS/coding/debugging questions using a key and history scoped to the current tab session.
- **🌐 Public room** — a Firebase Realtime Database room guarded by `publicChat.enabled: false` by default. The browser cannot determine whether production still has test rules, so a successful connection is never treated as proof of security.

The widget lives in `data/chat-widget.js`. Before changing the flag to `true`, configure Anonymous Auth, deploy and audit `firebase.database.rules.json`, test unauthenticated/invalid/oversized/extra-field/update/delete denials in the Emulator, integrate and enforce App Check, and establish backend rate limiting, moderation, retention, budget alerts and monitoring. The client-side 2.5-second throttle is UX only and can be bypassed; the current Rules do not enforce posting frequency. With the flag left `false`, the widget does not load Firebase SDKs, sign in anonymously, read or write the room.

### Quick start

Open https://yu-0312.github.io/apcs-judge/tutorial.html — or run locally:

```bash
git clone https://github.com/Yu-0312/apcs-judge.git
cd apcs-judge
python3 -m http.server 8000
# open http://localhost:8000/tutorial.html
```

The main learning UI is static HTML plus `data/*.js`, with no first-party account backend. The browser connects directly to Pyodide/Judge0, Gemini and the optional Firebase room. Learning state and mistakes use shared modules; backup restore/clear operations use snapshot rollback, while settled state avoids redundant full rewrites on page load. `node scripts/check-data.js` validates syntax, schemas and quality budgets in CI. See [`DEPLOYMENT.md`](DEPLOYMENT.md) for production boundaries and release checks.

### License & policies

- **Source code**: [MIT License](LICENSE) — free to use, modify and distribute; just keep the copyright notice.
- **Educational content** (lessons, problems, solutions): all rights reserved, free for non-commercial learning; please ask before bulk redistribution or commercial use. Problems referenced from APCS, ZeroJudge, Codeforces/AtCoder/USACO and other sources remain the property of their original authors. See [授權與內容使用說明 (Licensing)](授權與內容使用說明.md).
- **[免責聲明 (Disclaimer)](免責聲明.md)** — terms on the educational nature of the site, AI-generated content and third-party services.
- **[隱私權政策 (Privacy Policy)](隱私權政策.md)** — no accounts, no backend; most data stays on your device, only AI (Gemini), the judge (Judge0) and the public chat room (Firebase) transmit data externally.

Contact: wang.yuchi.312@gmail.com / [GitHub Issues](https://github.com/Yu-0312/apcs-judge/issues)

# Firebase 聊天室安全設定

`data/chat-widget.js` 的字數、暱稱與 2.5 秒送出節流只改善使用者體驗，可被直接繞過，不能保護 Realtime Database。版本庫因此預設 `data/service-config.js` 的 `publicChat.enabled: false`；在此狀態下，小工具不載入 Firebase SDK、不匿名登入，也不讀寫聊天室。

前端無法判斷正式資料庫是否仍套用測試規則。連線或寫入成功不是安全證明，必須由部署者完成下列檢查後明確開啟。

1. 在 Firebase Authentication 啟用 **Anonymous** 登入。小工具把登入持久性設為 `SESSION`。
2. 確認 `data/chat-widget.js` 的 `FIREBASE_CONFIG` 指向正確專案。
3. 以 Firebase CLI 部署本版本庫的伺服器規則：

   ```sh
   firebase deploy --only database
   ```

   `firebase.json` 會使用 `firebase.database.rules.json`。規則要求登入、限制查詢最多 200 則、只允許新增訊息、驗證 UID、伺服器時間戳與欄位長度，其他路徑預設拒絕。
4. 使用 Firebase Emulator 驗證下列 deny cases：未登入讀寫、未帶 `orderByChild/limitToLast` 的讀取、欄位缺失或多餘、超長名稱／訊息、偽造 UID／時間戳、覆寫或刪除既有訊息。現有 Rules **沒有發言頻率限制**，不可宣稱過快發言會被 Rules 拒絕。
5. 完成 App Check 客戶端 provider／site key 整合，確認合法流量可用，再於 Firebase 主控台強制執行。此版本沒有內建任何專案專屬 site key，所以預設旗標不得開啟。
6. 建立真正的後端限流、檢舉／封鎖、內容管理、訊息保留期限、用量預算／告警與當班處理流程。Database Rules 與前端節流都無法取代這些服務。
7. 在正式環境完成 Auth、Rules、Emulator、App Check 與營運 smoke check 後，才把 `data/service-config.js` 的 `publicChat.enabled` 改成 `true`，並同步更新 `cacheVersion` 及所有 `service-config.js`／`chat-widget.js` 載入標籤。發現設定漂移或異常時，先改回 `false`。

Firebase Web Config 可公開；真正的存取控制來自 Authentication、Database Rules 與後端管理措施。若資料庫曾使用測試模式，部署新規則不會自動刪除既有資料，請另行稽核與清理。

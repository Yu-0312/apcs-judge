// 自 tutorial.html 抽出的資料檔（由頁面以 <script src> 載入）
const CHAPTER_META = {
0:{
  learn:["認識什麼是程式","熟悉這個教學的三個區域","按下第一次「執行」"],
  try:[
    "把右邊程式碼裡的 <code>______</code> 改成你的名字，再按執行",
    "加一行：<code>print(\"我今年 18 歲\")</code>，看看會多出什麼",
    "故意把 <code>print</code> 拼錯成 <code>prnt</code>，看會出現什麼錯誤訊息"
  ],
  quiz:[
    {q:"程式碼裡開頭是 # 的整行，電腦會怎麼處理？", opts:["當作指令執行","完全跳過（這叫註解）","印出來給使用者看","視為錯誤"], ans:1, why:"# 開頭的是註解，給人看的提示，電腦會略過。"},
    {q:"<code>print(\"Hello\")</code> 這行做什麼？", opts:["把 Hello 存進變數","把 Hello 顯示在輸出","把 Hello 寫進檔案","刪除 Hello"], ans:1, why:"print() 是把括號裡的東西顯示出來，是最常用的「輸出」指令。"},
    {q:"Python 一行程式碼的結尾需要分號 <code>;</code> 嗎？", opts:["一定要","不需要，換行就是結束","只有 print 要","看情況"], ans:1, why:"Python 用換行就代表一行結束，不像 C/C++/Java 一定要寫分號。"}
  ],
  code:{"task": "修改右邊程式，讓它輸出兩行：第一行 <code>Hello</code>，第二行 <code>APCS</code>。", "stdin": "", "expect": "Hello\nAPCS"}},
1:{
  learn:["把資料『存進變數』裡","認識四種基本型別：int / float / str / bool","用 int() / str() 在型別之間轉換"],
  try:[
    "把 <code>age = 17</code> 改成你的年齡",
    "加一行 <code>height = 170.5</code>，再 print 出來",
    "試試 <code>print(\"age\" + age)</code>——會錯！想想為什麼，再改成 <code>print(\"age\" + str(age))</code>"
  ],
  quiz:[
    {q:"哪一個是整數（int）？", opts:["3.14","\"42\"","42","True"], ans:2, why:"沒有引號、沒有小數點的數字 42 是 int。\"42\" 是字串。"},
    {q:"<code>type(\"123\")</code> 會回傳什麼？", opts:["int","str","float","bool"], ans:1, why:"有引號就是字串 str，即使內容看起來是數字。"},
    {q:"input() 讀進來預設是什麼型別？", opts:["int","float","str","看你輸入什麼"], ans:2, why:"input() 永遠回傳字串，要用 int() 才能拿來做數學運算。"}
  ],
  code:{"task": "宣告 <code>a = 10</code>、<code>b = 20</code>，依序印出 a、b、a+b 三行。", "stdin": "", "expect": "10\n20\n30"}},
2:{
  learn:["用 input() 從鍵盤讀取資料","用 print() 印出結果","學會 split() + map() 一次讀多個數字"],
  try:[
    "把 <code>n = int(input())</code> 改成讀兩個數字並相加",
    "試試 <code>print(\"a\", \"b\", sep=\"-\")</code>，看分隔符變了沒",
    "改 stdin 框裡的內容（例如改成 3 個數字），看程式會不會出錯"
  ],
  quiz:[
    {q:"<code>a, b = map(int, input().split())</code> 的用途？", opts:["讀一個整數","讀一行、用空白切開、各自轉成整數","讀兩行字串","印出 a 和 b"], ans:1, why:"split() 用空白切開字串成 list，map(int, ...) 把每個元素轉成 int。"},
    {q:"<code>print(\"x\", \"y\")</code> 預設輸出是？", opts:["xy","x y","x,y","x\\ny"], ans:1, why:"print 多個值預設用空白分隔。"},
    {q:"想印完不換行，要怎麼寫？", opts:["print(\"x\", end=\"\")","print(\"x\", noln=True)","print(\"x\\\\n\")","write(\"x\")"], ans:0, why:"end=\"\" 把預設的換行符換成空字串。"}
  ],
  code:{"task": "從標準輸入讀兩個整數（同一行、空白分隔），輸出它們的和。", "stdin": "3 5\n", "expect": "8"}},
3:{
  learn:["+ - * / 與整數除法 //、餘數 %","運算順序：先乘除後加減、括號優先","從一個三位數拆出百位、十位、個位"],
  try:[
    "把 <code>n = 752</code> 換成你想的三位數",
    "算 <code>n // 100</code> 和 <code>n % 10</code>，理解差別",
    "試試看：把 <code>n</code> 改成四位數，能用 <code>// 1000</code> 取得千位嗎？"
  ],
  quiz:[
    {q:"<code>17 // 5</code> 的結果？", opts:["3.4","3","4","2"], ans:1, why:"// 是整數除法，去掉小數部分。"},
    {q:"<code>17 % 5</code> 的結果？", opts:["3.4","3","4","2"], ans:3, why:"% 是餘數：17 = 5×3 + 2，所以餘 2。"},
    {q:"想取出 528 的「十位數」(2)，怎麼寫最快？", opts:["528 // 10","528 % 10","528 // 10 % 10","528 % 100"], ans:2, why:"先 // 10 把 528 變 52，再 % 10 取個位就是原本的十位 = 2。"}
  ],
  code:{"task": "讀一個三位數，分三行印出它的百位、十位、個位。", "stdin": "528\n", "expect": "5\n2\n8"}},
4:{
  learn:["用 if / elif / else 做分支","比較運算子 == != < > <= >=","用 and / or / not 組合條件"],
  try:[
    "把 BMI 標準改成自己的身高體重，看分類對不對",
    "新增 elif：<code>elif bmi >= 35: print(\"重度肥胖\")</code>",
    "試試：把 <code>weight = 65</code> 改成 0，看會發生什麼錯（再回頭看第 0 章說的「錯了沒關係」）"
  ],
  quiz:[
    {q:"<code>if x == 5:</code> 跟 <code>if x = 5:</code> 差別？", opts:["沒差","= 是賦值、== 才是比較，後者會出錯","等號的數量不影響","Python 兩種都可以"], ans:1, why:"一個等號是「把右邊存到左邊」（賦值），兩個才是「相等嗎」（比較）。"},
    {q:"想表達「年齡介於 13 到 18 之間」，Python 最自然的寫法是？", opts:["13 <= age <= 18","13 <= age and age <= 18 (錯)","age in [13,18]","age == 13..18"], ans:0, why:"Python 支援連鎖比較 13 <= age <= 18，比 and 寫法更直觀。"},
    {q:"<code>if a and b:</code> 只在何時為真？", opts:["a 或 b 任一為真","a 和 b 都為真","只有 a 為真","都不需要為真"], ans:1, why:"and 要求兩邊都為真才整體為真。"}
  ],
  code:{"task": "讀一個整數，若為偶數印 <code>even</code>，否則印 <code>odd</code>。", "stdin": "7\n", "expect": "odd"}},
5:{
  learn:["for 迴圈搭配 range() 重複動作","巢狀迴圈做出二維輸出","while 迴圈直到條件不成立才停"],
  try:[
    "改成印 5x5 的乘法表",
    "把外層改成 <code>for i in range(1, 10):</code>，印完整九九乘法表",
    "把 print(...) 後面加 <code>end=\"\\t\"</code>，看排版變漂亮了沒"
  ],
  quiz:[
    {q:"<code>range(5)</code> 會產生哪些數字？", opts:["1 2 3 4 5","0 1 2 3 4","0 1 2 3 4 5","5"], ans:1, why:"range(n) 是 0 到 n-1，不含 n。"},
    {q:"<code>range(2, 10, 3)</code> 會產生？", opts:["2 5 8","2 3 4...9","2 5 8 10","3 6 9"], ans:0, why:"start=2, stop=10, step=3 → 2, 5, 8（下一個 11 已超過 stop）。"},
    {q:"想跳出最內層迴圈，用哪個關鍵字？", opts:["exit","return","break","continue"], ans:2, why:"break 馬上離開當前迴圈；continue 是跳到下一輪。"}
  ],
  code:{"task": "用迴圈計算 1 到 100 的總和並印出。", "stdin": "", "expect": "5050"}},
6:{
  learn:["字串切片 s[a:b]、s[::-1]","常用方法：len/split/replace/upper/lower","用 \"\".join(list) 把 list 接成字串"],
  try:[
    "把 <code>s = \"Hello APCS Python\"</code> 換成你的名字",
    "試 <code>s[::-1]</code>（反轉），跟 <code>s.upper()</code>",
    "算這句話有幾個字母 a：<code>s.lower().count(\"a\")</code>"
  ],
  quiz:[
    {q:"<code>\"APCS\"[1]</code> 是？", opts:["A","P","C","S"], ans:1, why:"index 從 0 開始：0=A, 1=P, 2=C, 3=S。"},
    {q:"<code>\"hello\".upper()</code> 結果？", opts:["hello","Hello","HELLO","HELLo"], ans:2, why:"upper() 把整串轉大寫。"},
    {q:"<code>\"a,b,c\".split(\",\")</code> 結果？", opts:["\"abc\"","[\"a\",\"b\",\"c\"]","(\"a\",\"b\",\"c\")","[\"a,b,c\"]"], ans:1, why:"split 用逗號切開，回傳 list。"}
  ],
  code:{"task": "讀一個字串，第一行印它的長度，第二行印反轉後的字串。", "stdin": "hello\n", "expect": "5\nolleh"}},
7:{
  learn:["List 是「一排放東西的盒子」，用 [ ] 包住","常用：append / pop / sort / len","用 for x in lst 走訪每個元素"],
  try:[
    "把 <code>nums = [3,1,4,1,5,9,2,6,5,3]</code> 改成 10 個你自己想的數字",
    "用 <code>nums.append(99)</code> 加一個，再 print",
    "算平均：<code>sum(nums) / len(nums)</code>"
  ],
  quiz:[
    {q:"<code>nums = [10,20,30]</code>，<code>nums[2]</code> 是？", opts:["10","20","30","錯誤"], ans:2, why:"index 從 0 開始：0=10, 1=20, 2=30。"},
    {q:"想在 list 尾巴加一個值，用？", opts:["append","add","push","insert(-1)"], ans:0, why:"Python list 標準做法是 nums.append(x)。"},
    {q:"<code>len([1,2,3,4])</code> 是？", opts:["3","4","5","0"], ans:1, why:"len 回傳元素數量，4 個。"}
  ],
  code:{"task": "第一行讀 n，第二行讀 n 個整數，輸出最大值。", "stdin": "5\n3 1 4 1 5\n", "expect": "5"}},
8:{
  learn:["二維陣列就是「list 裡裝 list」","用 g[i][j] 存取第 i 列第 j 行","正確建立 n×m 二維陣列：<code>[[0]*m for _ in range(n)]</code>"],
  try:[
    "把 <code>n = 5</code> 改成 7，看棋盤變大",
    "把 <code>(i + j) % 2</code> 改成 <code>i * j</code>，看會印出什麼",
    "試試錯誤寫法 <code>[[0]*5]*5</code> 然後改一格，看為什麼整欄都變"
  ],
  quiz:[
    {q:"想建立 3×4 的全 0 二維陣列，正確寫法？", opts:["[[0]*3]*4","[[0]*4 for _ in range(3)]","[0]*12","[[0,0,0,0]]*3"], ans:1, why:"用 for 才能保證每列是獨立 list。[[0]*4]*3 三列共用同一個 list！"},
    {q:"<code>g[2][3]</code> 表示？", opts:["第 2 行第 3 列","第 2 列第 3 行","第 3 列第 4 行","第 3 列第 2 行"], ans:1, why:"慣例 g[i][j] = 第 i 列第 j 行（從 0 開始）。"},
    {q:"想走訪二維陣列每個元素，最常見的寫法？", opts:["單一 for","兩層 for","while","遞迴"], ans:1, why:"外層走列、內層走行，兩層 for 標準寫法。"}
  ],
  code:{"task": "輸出 3×3 乘法表，第 i 列第 j 行為 (i+1)*(j+1)，每列三數空白分隔。", "stdin": "", "expect": "1 2 3\n2 4 6\n3 6 9"}},
9:{
  learn:["用 def 定義函式，把重複邏輯封裝","用 return 把結果送回呼叫端","參數讓函式更通用"],
  try:[
    "改成印 100 以下的質數",
    "把 <code>is_prime</code> 改成回傳「最小因數」，質數則回傳 1",
    "寫一個 <code>def add(a, b): return a + b</code>，試試 <code>print(add(3, 5))</code>"
  ],
  quiz:[
    {q:"<code>def f(x): return x*2</code>，呼叫 <code>f(5)</code> 是？", opts:["5","10","x*2","錯誤"], ans:1, why:"傳入 x=5，回傳 5*2=10。"},
    {q:"函式沒寫 return 會回傳什麼？", opts:["0","\"\"","None","錯誤"], ans:2, why:"預設回傳 None。"},
    {q:"判斷質數，迴圈最佳到哪裡就夠？", opts:["i < n","i <= n/2","i*i <= n","i < 100"], ans:2, why:"只要試到 √n 就好——i*i <= n 是等價且不用 import math.sqrt。"}
  ],
  code:{"task": "寫一個函式 <code>add(a,b)</code> 回傳兩數和，呼叫 add(7, 8) 並印出結果。", "stdin": "", "expect": "15"}},
10:{
  learn:["dict 是「鍵 → 值」的對應表，用 { } 建立","set 是不重複的集合","常用：d[k]、d.get(k, 預設)、k in d"],
  try:[
    "改 <code>text</code> 換成你自己的句子",
    "找出出現最多次的字：<code>max(cnt, key=cnt.get)</code>",
    "用 set：<code>print(set(text.split()))</code>，看不重複字"
  ],
  quiz:[
    {q:"<code>d = {\"a\":1, \"b\":2}</code>，<code>d[\"a\"]</code> 是？", opts:["1","2","\"a\"","錯誤"], ans:0, why:"用 key 取對應的 value。"},
    {q:"想安全地取一個可能不存在的 key，用哪個？", opts:["d[k]（不存在會錯）","d.get(k, 0)","d.find(k)","d.has(k)"], ans:1, why:"d.get(k, 預設值) 不存在就回傳預設值，不會出錯。"},
    {q:"set 跟 list 最大差別？", opts:["set 比較快","set 不能重複、沒順序","set 只能裝數字","沒差別"], ans:1, why:"set 自動去重複、不保證順序，適合「是否出現過」這類問題。"}
  ],
  code:{"task": "讀一個字串，輸出有幾種不同字元。", "stdin": "abcabc\n", "expect": "3"}},
11:{
  learn:["線性搜尋 vs 二分搜尋的時間差","前綴和 O(1) 算區間和","埃氏篩 + 質數判斷"],
  try:[
    "把 <code>K = 5</code> 改成其他數字，看子陣列數量怎麼變",
    "改成「最長」總和為 K 的子陣列",
    "在末尾加：<code>print(sum(a))</code> 驗證前綴和對不對"
  ],
  quiz:[
    {q:"已排序陣列找元素，最快用？", opts:["線性搜尋","二分搜尋","暴力","遞迴"], ans:1, why:"已排序就能用二分，每次砍一半，O(log n)。"},
    {q:"前綴和 ps，<code>a[l..r]</code> 區間和 = ?", opts:["ps[r] - ps[l]","ps[r+1] - ps[l]","ps[r] + ps[l]","ps[r-1] - ps[l]"], ans:1, why:"ps[i] 表示「前 i 個」，所以 a[l..r] = ps[r+1] - ps[l]。"},
    {q:"判斷 n 是質數的迴圈條件最佳是？", opts:["i < n","i <= n","i*i <= n","i < n/2"], ans:2, why:"任何合數 n 必有 ≤ √n 的因數，所以試到 √n 就足夠。"}
  ],
  code:{"task": "第一行 n k，第二行 n 個整數，輸出陣列中等於 k 的個數。", "stdin": "5 3\n1 3 3 2 3\n", "expect": "3"}},
12:{
  learn:["巢狀迴圈處理二維問題","用 break 提早離開最內層","認識「外迴圈固定 i、內迴圈跑 j」的模式"],
  try:[
    "把 <code>n = 7</code> 改成 10，看更大的巴斯卡三角形",
    "改成印「對稱菱形」星號",
    "試試只用一個變數 <code>k</code> 走訪二維索引：<code>i, j = k // m, k % m</code>"
  ],
  quiz:[
    {q:"兩層 for 跑 1 到 n，總共執行幾次？", opts:["n","2n","n²","n log n"], ans:2, why:"外層 n 次、內層 n 次，總共 n × n = n²。"},
    {q:"巴斯卡三角形 g[i][j] = ?", opts:["g[i-1][j-1] + g[i-1][j]","g[i][j-1] + 1","g[i-1][j] * 2","i + j"], ans:0, why:"每格等於左上 + 正上。"},
    {q:"想在內層找到目標立刻離開，用？", opts:["return","continue","break","exit"], ans:2, why:"break 只跳出當前最內層迴圈。"}
  ],
  code:{"task": "讀一個整數 n，印出 n 列星號三角形（第 i 列 i 個 *）。", "stdin": "4\n", "expect": "*\n**\n***\n****"}},
13:{
  learn:["List comprehension：<code>[f(x) for x in lst if cond]</code>","可以一行做篩選 + 轉換","嵌套：雙層 for 寫成一行"],
  try:[
    "把 <code>is_prime(i*j)</code> 改成 <code>i*j % 7 == 0</code>",
    "試試：<code>[x*x for x in range(10) if x % 2 == 0]</code>",
    "用 list comp 算 1 到 100 的偶數和：<code>sum([x for x in range(1,101) if x % 2 == 0])</code>"
  ],
  quiz:[
    {q:"<code>[x*2 for x in [1,2,3]]</code> 結果？", opts:["[1,2,3]","[2,4,6]","[1,4,9]","[2,2,2]"], ans:1, why:"每個元素乘以 2。"},
    {q:"想篩出 list 中所有奇數，最簡潔？", opts:["[x for x in a if x%2==1]","filter(odd, a)","用 for + append","sum(a)"], ans:0, why:"list comprehension 是 Python 最自然的篩選寫法。"},
    {q:"<code>[i+j for i in range(2) for j in range(2)]</code>?", opts:["[0,1,1,2]","[0,1,2,3]","[[0,1],[1,2]]","錯誤"], ans:0, why:"i=0,j=0→0; i=0,j=1→1; i=1,j=0→1; i=1,j=1→2。"}
  ],
  code:{"task": "讀一個整數 n，輸出 1 到 n 之間所有偶數的平方和。", "stdin": "6\n", "expect": "56"}},
14:{
  learn:["sorted() 不改原 list，sort() 直接改","用 key=lambda x: ... 自訂排序鍵","多重排序：key 回傳 tuple"],
  try:[
    "把排序改成「分數升冪、分數同則名字字典序」",
    "試 <code>sorted(students, key=lambda s: -s[1])</code>",
    "看看 <code>sorted(students, key=lambda s: (s[1], s[2]))</code> 跟 <code>(-s[1], s[2])</code> 差別"
  ],
  quiz:[
    {q:"<code>lambda x: x*2</code> 等同於？", opts:["def f(x): return x*2","def f(): return x*2","x = 2","print(x*2)"], ans:0, why:"lambda 是「匿名小函式」的語法糖。"},
    {q:"想分數降冪排序，<code>key</code> 怎麼寫？", opts:["lambda s: s[1]","lambda s: -s[1]","reverse=True","以上 B 或 C 都行"], ans:3, why:"key=lambda s: -s[1] 或 sorted(..., reverse=True) 都可達到降冪。"},
    {q:"sorted() 跟 sort() 差別？", opts:["sorted 改原 list","sort 回傳新 list","sorted 回傳新 list、sort 改原 list","完全相同"], ans:2, why:"sorted(a) 不動 a；a.sort() 直接排 a 但回傳 None。"}
  ],
  code:{"task": "第一行 n，第二行 n 個整數。由大到小排序後一行輸出，空白分隔。", "stdin": "5\n3 1 4 1 5\n", "expect": "5 4 3 1 1"}},
15:{
  learn:["函式呼叫自己 = 遞迴","必須有「終止條件」，否則無限循環","經典例子：階乘、費氏、回溯（N 皇后）"],
  try:[
    "改成計算 6 皇后",
    "寫一個遞迴函式算階乘：<code>def f(n): return 1 if n<=1 else n*f(n-1)</code>",
    "試 <code>print(f(10))</code>，再試 <code>f(100)</code>"
  ],
  quiz:[
    {q:"遞迴一定要有的東西是？", opts:["全域變數","終止條件","迴圈","print"], ans:1, why:"沒終止條件會無限呼叫，最後 RecursionError。"},
    {q:"<code>def f(n): return 1 if n<=1 else n*f(n-1)</code>，<code>f(4)</code>?", opts:["4","10","24","120"], ans:2, why:"4! = 4×3×2×1 = 24。"},
    {q:"N 皇后用了哪個演算法策略？", opts:["DP","BFS","回溯（backtracking）","二分搜"], ans:2, why:"逐列嘗試、不行就退一步，是典型回溯。"}
  ],
  code:{"task": "用遞迴定義階乘函式，輸出 7! 的值。", "stdin": "", "expect": "5040"}},
16:{
  learn:["枚舉題 = 「全部試一遍」的解法","位元遮罩可以枚舉所有子集合","適合 n ≤ 20 的小規模問題"],
  try:[
    "把 <code>target = 8</code> 改成 <code>10</code>",
    "改成「找最大的乘積為偶數的子集合」",
    "想想：n = 25 用這方法跑得完嗎？（2²⁵ = 3300 萬）"
  ],
  quiz:[
    {q:"n 個元素的所有子集合共幾個？", opts:["n","2n","n!","2^n"], ans:3, why:"每個元素「選或不選」兩種，共 2ⁿ 種組合。"},
    {q:"<code>mask & (1 << i)</code> 用來做什麼？", opts:["把 i 設為 1","檢查 mask 的第 i 個位元是 1 嗎","把 mask 變大","計算次方"], ans:1, why:"1 << i 是「只有第 i 位為 1」的數，用 & 來檢查 mask 第 i 位是否為 1。"},
    {q:"枚舉法在 n 多大時還能跑？", opts:["n ≤ 5","n ≤ 20","n ≤ 100","n ≤ 1000"], ans:1, why:"2²⁰ ≈ 100 萬還可接受；超過 25 就太慢。"}
  ],
  code:{"task": "讀 4 個整數（空白分隔），是否存在兩個和為 10？存在印 <code>Yes</code>，否則 <code>No</code>。", "stdin": "3 7 5 8\n", "expect": "Yes"}},
17:{
  learn:["deque 兩端 O(1) 插入/刪除","heapq 永遠拿到最小值","Counter 算頻率、defaultdict 預設值省判斷"],
  try:[
    "改成「前 5 大」（提示：heapq.nlargest(5, nums)）",
    "用 Counter：<code>from collections import Counter; print(Counter(\"hello world\"))</code>",
    "試試 deque：<code>from collections import deque; q = deque([1,2,3]); q.appendleft(0); print(q)</code>"
  ],
  quiz:[
    {q:"heapq 預設是哪種堆？", opts:["最大堆","最小堆","二元樹","平衡樹"], ans:1, why:"Python heapq 是最小堆，heap[0] 永遠是最小值。"},
    {q:"<code>Counter([1,1,2,3,3,3])</code> 結果？", opts:["{1,2,3}","Counter({1:2, 2:1, 3:3})","[1,1,2,3,3,3]","6"], ans:1, why:"Counter 自動算每個元素出現幾次。"},
    {q:"deque 比 list 強在哪？", opts:["佔記憶體少","左端插入是 O(1) 不像 list 是 O(n)","支援索引","可以排序"], ans:1, why:"list.insert(0, x) 是 O(n)，deque.appendleft(x) 是 O(1)。"}
  ],
  code:{"task": "讀一個字串，輸出出現次數最多的字元（保證唯一答案）。", "stdin": "abracadabra\n", "expect": "a"}},
18:{
  learn:["常見錯誤：NameError / IndexError / TypeError 怎麼讀","常見邏輯 bug：off-by-one、淺拷貝陷阱","用 print 除錯：把中間結果印出來看"],
  try:[
    "把 bug 修好：<code>for i in range(1, n+1):</code>",
    "再加一個 bug：把 <code>n</code> 改成字串 <code>\"5\"</code>，看會出什麼錯",
    "故意造一個 IndexError：<code>a = [1,2,3]; print(a[5])</code>，看翻譯後的訊息"
  ],
  quiz:[
    {q:"<code>NameError: name 'x' is not defined</code> 代表？", opts:["x 太多了","x 還沒指定值就被用","x 被多次賦值","語法錯誤"], ans:1, why:"用了一個從沒給值的變數。"},
    {q:"<code>a = [1,2,3]; a[3]</code> 會發生？", opts:["回傳 3","回傳 None","IndexError","補一個 0"], ans:2, why:"index 3 超出範圍（合法是 0~2），會 IndexError。"},
    {q:"想算 1+2+...+n，<code>for i in range(n)</code> 對嗎？", opts:["對","少 1（應是 range(n+1) 或 range(1,n+1)）","會無限迴圈","會 IndexError"], ans:1, why:"range(n) 是 0..n-1，少了 n 本身。"}
  ],
  code:{"task": "讀一個整數 n，輸出 1+2+...+n 的總和（小心 range 邊界要包含 n）。", "stdin": "10\n", "expect": "55"}},
19:{
  learn:["把前面學的整合起來","Kadane 演算法：O(n) 求最大連續子陣列和","「擴展或重啟」是 Kadane 的核心思想"],
  try:[
    "把陣列換成 <code>[1,2,3,-10,4,5]</code>，看答案是否是 9",
    "試試全負陣列 <code>[-3,-1,-4,-2]</code>，答案應該是 -1",
    "加 print(cur, best) 在迴圈裡，觀察兩個變數怎麼變化"
  ],
  quiz:[
    {q:"Kadane 的關鍵一行 <code>cur = max(a[i], cur + a[i])</code> 在做什麼？", opts:["排序","選擇「重啟」或「延續」","印出最大值","計算總和"], ans:1, why:"a[i] = 重啟（從這裡重新開始）；cur+a[i] = 延續前面的連續和。取較大者。"},
    {q:"Kadane 的時間複雜度？", opts:["O(1)","O(log n)","O(n)","O(n²)"], ans:2, why:"一個迴圈跑過全部元素，O(n)。"},
    {q:"全負陣列，Kadane 答案應該是？", opts:["0","最大的負數（最不負的）","最小的負數","空陣列總和 0"], ans:1, why:"題目要求「至少選一個」，所以答案是最大的負數而不是 0。"}
  ],
  code:{"task": "第一行 n，第二行 n 個整數，輸出最大連續子陣列和（Kadane）。", "stdin": "9\n-2 1 -3 4 -1 2 1 -5 4\n", "expect": "6"}},
20:{
  learn:["APCS 拿分的關鍵：讀清楚 I/O 格式","練習用小例子手算驗證","常見陷阱：邊界、整數溢位、淺拷貝"],
  try:[
    "改 stdin 框：把 10 換成 5，重新跑",
    "故意傳全部及格的 stdin，看「最高不及格」會印什麼",
    "想想：如果題目改成「最高不及格 + 1」算分？把程式改一下"
  ],
  quiz:[
    {q:"成績指標題要先做什麼？", opts:["先排序","先找平均","先輸出","先計算總和"], ans:0, why:"先 sort 才能用一次掃描找到「最高不及格」和「最低及格」。"},
    {q:"<code>print(*scores)</code> 跟 <code>print(scores)</code> 差別？", opts:["沒差","* 會展開成空白分隔，沒 * 會印 [...]","* 會更快","* 會錯誤"], ans:1, why:"print(*lst) 把 list 展開成多個參數，預設用空白分隔；不加星號會印整個 list 含中括號。"},
    {q:"全班都及格時，「最高不及格」要輸出什麼？", opts:["0","-1","best case","空白"], ans:2, why:"題目特別規定：沒人不及格時印 best case；沒人及格時印 worst case。"}
  ],
  code:{"task": "第一行 n，第二行 n 個整數成績，輸出及格人數（≥ 60）。", "stdin": "5\n55 60 80 30 90\n", "expect": "3"}},
21:{learn:["樹的鄰接表 / 父親陣列表示法", "前序、中序、後序的差別", "用 DFS 算子樹大小（樹 DP 入門）"],try:["把樹改成 6 個節點，重新算子樹大小", "加上深度紀錄：寫一個 depth[u] 陣列", "試試從非根節點開始 dfs，會發生什麼"],code:{"task": "給定 5 節點樹 0-1, 0-2, 1-3, 1-4 (用 children dict 表示)，算出每個節點的子樹大小，一行空白分隔輸出。", "stdin": "", "expect": "5 3 1 1 1"}},
22:{learn:["用鄰接表存圖", "BFS 求最短步數", "DFS 找連通分量"],try:["把節點數改成 8，邊改 5 條，看分量數變化", "BFS 後印出 dist 字典", "改用遞迴 DFS 比 stack DFS"],code:{"task": "6 節點圖，邊：0-1, 1-2, 3-4。輸出有幾個連通分量。", "stdin": "", "expect": "3"}},
23:{learn:["Dijkstra 用 heapq 實現", "為什麼 BFS 不能處理權重圖", "拓樸排序處理 DAG"],try:["把邊權改一改，看 dist 怎麼變", "刪掉某條邊，觀察最短路會繞", "拓樸排序試一個小 DAG"],code:{"task": "用 Dijkstra 求 4 點圖 (0,1,1)(0,2,4)(1,3,1)(2,3,1) 從 0 出發的最短距離，空白分隔輸出。", "stdin": "", "expect": "0 1 3 2"}},
24:{learn:["DP 三步：狀態 / 轉移 / 邊界", "LIS、0/1 背包、LCS 三大經典", "為什麼 0/1 背包要倒序"],try:["把 LIS 改成「最長嚴格遞減子序列」", "把背包改成「物品可拿無限次」(內層改正序)", "用 LCS 算兩段你的姓名共同字元"],code:{"task": "0/1 背包：weights=[2,3,4,5], values=[3,4,5,6], W=5，輸出最大價值。", "stdin": "", "expect": "7"}},
25:{learn:["find / union 兩個操作", "路徑壓縮怎麼做", "算連通分量的標準寫法"],try:["把節點改成 10、邊改 4 條，看分量數", "加上按秩合併版本", "union 同一群兩次，second 回 False 對嗎"],code:{"task": "6 點圖，邊：0-1, 1-2, 3-4，用 Union-Find 算連通分量數量。", "stdin": "", "expect": "3"}},
26:{learn:["字串 hash 的滾動式公式", "Trie 用巢狀 dict 實作", "什麼時候該用 hash / KMP / Trie"],try:["在 Trie 插入更多字串，測 starts_with", "算 'banana' 的所有後綴 hash", "用 in 比 Trie，看哪個快"],code:{"task": "建立含 app/apple/ape/bat 四個字串的 Trie，依序輸出 starts_with('ap'), starts_with('ba'), starts_with('cat') 三行 True/False。", "stdin": "", "expect": "True\nTrue\nFalse"}},
27:{learn:["with open() 安全讀寫", "一行一行讀大檔案", "pathlib 與 JSON 處理"],try:["把 csv 內容當作多行字串，splitlines 處理", "用 json.dumps 美化輸出", "試試 indent=2 跟 ensure_ascii=False"],code:{"task": "給定三行成績 Alice 90、Bob 85、Cathy 77（可用 splitlines 處理多行字串），算出三人平均分數（四捨五入到 1 位小數）。", "stdin": "", "expect": "84.0"}},
28:{learn:["import / from import 三種寫法", "自己拆模組與 __main__", "pip 與虛擬環境的角色"],try:["用 math.sqrt 算 144", "用 math.gcd 比手寫 gcd", "查 math.pi 跟 math.e"],code:{"task": "用 math 模組，依序印 sqrt(144), gcd(12,18), round(pi,4) 三行。", "stdin": "", "expect": "12.0\n6\n3.1416"}},
29:{learn:["__init__ 和 self 是什麼", "為什麼用 class", "繼承與 super()"],try:["新增方法 letter_grade()", "加 __repr__ 美化 print", "試試 Student 之間用 __eq__ 比較"],code:{"task": "定義 Student class（name, score），grade() 回傳 A(>=90)/B(>=80)/C(>=60)/F。建立 Alice(92), Bob(75), Cathy(58)，依序印「名字 等級」三行。", "stdin": "", "expect": "Alice A\nBob C\nCathy F"}},
30:{learn:["try/except 抓特定錯誤", "raise 主動丟錯", "EAFP 風格的優勢"],try:["故意拼錯 ZeroDivision 看會怎樣", "加 except Exception 兜底", "自訂 InvalidScore 例外"],code:{"task": "輸入字串列表 ['10','0','abc','5']，每行嘗試 100 // int(s)：除 0 印 '除以 0'、非數字印 '不是數字'、正常印商。", "stdin": "", "expect": "10\n除以 0\n不是數字\n20"}},
31:{learn:["assert 隨手測試", "unittest 基本架構", "系統性 debug 的 4 步驟"],try:["把 is_prime 改錯一個地方，看 assert 哪個會掛", "寫 3 個 unittest 測試", "用 logging 取代 print"],code:{"task": "is_prime(n)：n&lt;2 回 False。對 cases=[(2,True),(3,True),(4,False),(7,True),(9,False),(1,False),(0,False)] 全部 assert 通過時印 'all passed'。", "stdin": "", "expect": "all passed"}},
32:{learn:["sys.argv 接命令列參數", "argparse 寫出有 --help 的工具", "拆出 main() 加 __main__ 入口"],try:["改成支援 --quiet 不印詳細", "加上負分檢查", "用 - 代表讀 stdin"],code:{"task": "模擬 args=['85','--strict']，若有 --strict 用 70 為門檻，否則 60。輸出 '及格' 或 '不及格'。", "stdin": "", "expect": "及格"}},
33:{learn:["csv.reader / DictReader", "sorted + lambda 排名", "什麼時候改用 pandas"],try:["改成算中位數", "印各分級人數 (Counter)", "sorted 改成印前 5 名"],code:{"task": "csv: name,score 列為 Alice 92, Bob 75, Cathy 88, David 55, Eve 67。輸出平均（1 位小數）跟最高分兩行。", "stdin": "", "expect": "75.4\n92"}},
34:{learn:["requests.get + r.json()", "HTTP 動詞 GET/POST/PUT/DELETE", "Timeout 與 raise_for_status"],try:["把 JSON 多加幾個欄位", "用 json.dumps 反向轉回字串", "練 try/except 接 Timeout"],code:{"task": "解析示範用 JSON（含 login=torvalds、name=Linus Torvalds、public_repos=7、followers=200000）。第一行印「login - name」，第二行印「repos=7」。", "stdin": "", "expect": "torvalds - Linus Torvalds\nrepos=7"}},
35:{learn:["把多章節整合成完整小程式", "JSON 持久化資料", "終端機遊戲的核心：迴圈 + 狀態"],try:["把猜數字加上『3 次內猜中得高分』", "成績管理改成排序輸出", "2048 加上勝負判斷"],code:{"task": "target=42，依序猜 [50,25,37,43,40,42]：猜的數字小於 target 印「再大一點」、大於印「再小一點」、相等印「中了！」後停止。每行格式：「數字 → 訊息」。", "stdin": "", "expect": "50 → 再小一點\n25 → 再大一點\n37 → 再大一點\n43 → 再小一點\n40 → 再大一點\n42 → 中了！"}},
36:{learn:["HTTP 是「請求-回應」模型", "狀態碼 200/404/403/429 的意思", "GET / POST 的差別"],try:["把 response 字串裡的 200 改成 404，看程式還跑得對嗎", "加一個 header「Server: nginx」並印出來", "試著解析 body 是 JSON 的版本：body 改成 <code>{\"name\":\"Alice\"}</code>，用 json.loads 解析"],code:{"task": "解析下方 stdin 給的 HTTP response 字串（headers 與 body 已用 |||| 分隔），輸出兩行：第一行「狀態碼 數字」，第二行「body 長度 數字」。", "stdin": "HTTP/1.1 200 OK\nContent-Type: text/plain\n||||Hello\n", "expect": "狀態碼 200\nbody 長度 5"}},
37:{learn:["用 requests.get 抓網頁", "用 params= 帶查詢字串", "永遠設 timeout + 接住 RequestException"],try:["把 params 加一個 <code>\"safe\":\"off\"</code>，重新組 URL", "改 base 成 <code>http://example.com/api</code>，看 urlparse 怎麼拆", "故意把 status_code 改成 404，加 if 判斷印錯誤訊息"],code:{"task": "用 urllib.parse 把 base=\"https://api.example.com/v1\" 跟 params={\"page\":3,\"q\":\"apcs\"} 組成完整 URL，輸出該 URL。", "stdin": "", "expect": "https://api.example.com/v1?page=3&q=apcs"}},
38:{learn:["HTML 是有 tag/attr/text/children 的樹", "class 可多個、id 唯一", "用 DevTools 找定位特徵"],try:["把 html_doc 多加一個 <code>&lt;li&gt;新聞 C&lt;/li&gt;</code>，看 tag 數變化", "在 TreePrinter 加上「只印 a 標籤的 href」", "改成印「每個 li 裡的文字」"],code:{"task": "用 html.parser 計算下方 HTML 字串中 &lt;li&gt; 標籤的數量並輸出。HTML 字串：<code>\"&lt;ul&gt;&lt;li&gt;A&lt;/li&gt;&lt;li&gt;B&lt;/li&gt;&lt;li&gt;C&lt;/li&gt;&lt;/ul&gt;\"</code>", "stdin": "", "expect": "3"}},
39:{learn:["find / find_all 的差別", "CSS selector 怎麼寫", "從 Tag 物件取 .text 和 [attr]"],try:["在 html 字串多加一個 <code>&lt;a href=\"/news/3\"&gt;新聞三&lt;/a&gt;</code>", "改 LinkGrabber 只記錄「外部連結」(href 開頭 http)", "加上記錄 li 標籤裡的文字（看怎麼跨標籤累積）"],code:{"task": "用 html.parser 抓出下方 HTML 字串中第一個 &lt;title&gt; 標籤的文字並輸出。HTML：<code>\"&lt;html&gt;&lt;head&gt;&lt;title&gt;APCS 教學&lt;/title&gt;&lt;/head&gt;&lt;body&gt;hi&lt;/body&gt;&lt;/html&gt;\"</code>", "stdin": "", "expect": "APCS 教學"}},
40:{learn:["「外圈容器 → 內圈欄位 → 打包 dict」三步驟", "欄位可能缺失，用 if 防呆", "pd.read_html 一行解決乾淨表格"],try:["多加一筆新聞看 len 變化", "在 dict 加一個 \"source\": \"example.com\" 欄位", "改成只收集 title 字數大於 5 的新聞"],code:{"task": "從 stdin 讀一段 HTML（一行一筆，每筆格式：「TITLE|URL」），組成 dict 清單。輸出每筆「URL TITLE」，共幾行就有幾行。", "stdin": "新聞一|/a\n新聞二|/b\n新聞三|/c\n", "expect": "/a 新聞一\n/b 新聞二\n/c 新聞三"}},
41:{learn:["三種分頁模式：路徑、query、next 連結", "用 set 去重", "time.sleep 做禮貌延遲"],try:["把 fake page 3 全部改成重複 id，看結束條件對不對", "加 max_page=3 的上限提早終止", "在每次 fetch 後加 time.sleep(0.1)"],code:{"task": "輸入多行 id（每行一個整數）。讀完後用 set 去重，依升冪輸出（一行一個）。", "stdin": "3\n1\n4\n1\n5\n3\n2\n", "expect": "1\n2\n3\n4\n5"}},
42:{learn:["CSV 用 DictWriter / DictReader 寫讀", "Excel 中文：encoding=\"utf-8-sig\"", "JSON 用 indent + ensure_ascii=False"],try:["把 rows 加一筆「新聞 D / /d / 500」", "改 fieldnames 順序，看 CSV 表頭變化", "把 indent 改成 4，比較長相"],code:{"task": "把以下三筆資料 [{\"name\":\"Alice\",\"age\":17},{\"name\":\"Bob\",\"age\":18},{\"name\":\"Cara\",\"age\":16}] 用 json.dumps 序列化（ensure_ascii=False, indent 不設）並輸出。", "stdin": "", "expect": "[{\"name\": \"Alice\", \"age\": 17}, {\"name\": \"Bob\", \"age\": 18}, {\"name\": \"Cara\", \"age\": 16}]"}},
43:{learn:["看 robots.txt 再爬", "retry + 指數退避處理 429", "寫進度檔做斷點續傳"],try:["把 max_retry 改成 6，成功率會變多少？", "改 random seed，重新跑看結果不一樣", "加上「總嘗試次數超過 20 就停止」的保險"],code:{"task": "模擬指數退避：給定起始等待秒數 base=1，最多 retry 5 次，每次等待時間是 base * 2^i (i 從 0 算起)。輸出每次等待秒數，一行一個（共 5 行）。", "stdin": "", "expect": "1\n2\n4\n8\n16"}},
44:{learn:["DataFrame 是 Python 版的 Excel", "Series=一欄, DataFrame=多欄, Index=列號", "pandas 適合 10 萬列以上、需要重複處理的場景"],try:["加一筆「Eve, 78, 新北」看統計結果", "改成印「>=85 的人」", "加印每個城市的平均分數（用 Counter 不夠，要用 dict）"],code:{"task": "給定 stdin 多行，每行格式「name score」（空白分隔）。讀完後輸出兩行：第一行「avg X.X」（一位小數），第二行「max NUM」。", "stdin": "Alice 92\nBob 75\nCara 88\nDan 60\n", "expect": "avg 78.8\nmax 92"}},
45:{learn:["read_csv / read_excel / read_json 三巨頭", "encoding=\"utf-8-sig\" 處理中文", "head / info / describe 三件套快速看資料"],try:["把 csv_text 多加一行 Frank,82,台南", "改 csv 分隔符為 |，看怎麼修", "把 score 改成 float，重算 describe"],code:{"task": "從 stdin 讀 CSV (第一行是表頭 name,score)，輸出三行：「rows N」「avg X.X」「max NUM」（X.X 一位小數）。", "stdin": "name,score\nAlice,92\nBob,75\nCara,88\nDan,60\n", "expect": "rows 4\navg 78.8\nmax 92"}},
46:{learn:["boolean mask 選列：& | ~ 配合括號", "query 寫法更可讀", ".loc / .iloc 精準定位"],try:["加一個條件「city 是台中或高雄」", "寫一個 grade2 函式：A+(95+)、A(90~95)、B(70~90)、C", "練 .loc 寫法：所有分數 <70 加一欄 status=\"補考\""],code:{"task": "從 stdin 讀多行「name score」（空白分隔）。輸出分數 >=80 的人，一行一個，格式「name score」，按分數降冪排序。", "stdin": "Alice 92\nBob 75\nCara 88\nDan 60\nEve 95\n", "expect": "Eve 95\nAlice 92\nCara 88"}},
47:{learn:["isna / fillna / dropna 處理缺值", "astype / pd.to_numeric(errors=\"coerce\") 處理型別", "drop_duplicates 去重"],try:["把 raw 加更多髒資料：name=\"Bob\"、score=\"not_a_number\"", "改成「缺值補 0」而不是平均", "改 keep=\"last\" 邏輯：重複時保留最後一筆"],code:{"task": "從 stdin 讀多行 score 字串。把不是純數字的當作缺值，剩下的轉成整數。輸出兩行：第一行「valid N」（有效數量）、第二行「avg X.X」（一位小數）。", "stdin": "92\n75\nabc\n88\n\n60\n", "expect": "valid 4\navg 78.8"}},
48:{learn:["mean/median/std/quantile 描述分佈", "value_counts 看類別欄", "rank / cumsum / cummax 進階統計"],try:["加一筆「Henry, 75, 台北」，看 value_counts 變化", "改成印「分數最低的 3 個」(nsmallest)", "改 rank 用 dense 方法（並列下一名 +1）"],code:{"task": "從 stdin 讀多行整數分數。輸出三行：「median NUM」、「std X.XX」（兩位小數）、「top3 a b c」（最大 3 個從大到小空白分隔）。", "stdin": "92\n75\n88\n60\n95\n82\n75\n", "expect": "median 82\nstd 12.11\ntop3 95 92 88"}},
49:{learn:["split-apply-combine 三步驟", "agg 多種彙總同時做", "transform 廣播回原表"],try:["多加幾筆台北的資料，看 city_avg 怎麼變", "改成按「city + grade」雙欄分組", "加 filter：只保留人數 >=2 的城市"],code:{"task": "從 stdin 讀多行「city score」，按 city groupby 算平均分。輸出每組「city avg」（avg 一位小數），按 city 字典序排序。", "stdin": "台北 92\n台中 75\n台北 88\n高雄 60\n台北 95\n台中 82\n", "expect": "台中 78.5\n台北 91.7\n高雄 60.0"}},
50:{learn:["concat 拼接同結構資料", "merge 4 種 how: inner/left/right/outer", "melt / pivot 寬長互轉"],try:["把 students 加一筆 id=6 Eve，重做 outer", "改成 right join: 以 scores 為主", "用兩個欄位 (id, year) 當 key 試試"],code:{"task": "stdin 兩個區塊用空行分隔：第一塊每行「id name」、第二塊每行「id score」。輸出 INNER JOIN 結果，每行「name score」，按 id 升冪排序。", "stdin": "1 Alice\n2 Bob\n3 Cara\n4 Dan\n\n1 92\n2 75\n3 88\n5 70\n", "expect": "Alice 92\nBob 75\nCara 88"}},
51:{learn:["plot/bar/hist 三大圖型", "pandas 內建 .plot() 比 matplotlib 直觀", "中文要設 font.sans-serif"],try:["加多幾筆資料，看 histogram bucket 怎麼變", "改成印「分數中位數」而不是平均", "把 bar chart 改成橫式 (barh)"],code:{"task": "從 stdin 讀多行整數分數，用 ASCII 印每個分數桶 (0-9, 10-19, ..., 90-99, 100) 的人數，每行格式「Start-End: ★★★」（n 個 ★），跳過空桶。", "stdin": "92\n75\n88\n95\n82\n75\n80\n90\n", "expect": "70-79: ★★\n80-89: ★★★\n90-99: ★★★"}},
52:{learn:["Bot 就是事件迴圈 + 處理器註冊", "Webhook vs Gateway 兩種模式", "Token 放 .env，永遠不要 push 上 git"],try:["加一個 @on(\"message_delete\") 處理器", "在 handle_message 多加 !time 指令印當下時間", "把不認識的指令統一回「不認識的指令」"],code:{"task": "寫一個事件分派器：handlers 是 dict, key=事件類型, value=函式。從 stdin 讀多行「TYPE DATA」，每行查 handlers 並執行；找不到印「unknown TYPE」。給定 handlers = {\"hi\": lambda d: print(f\"hello {d}\"), \"bye\": lambda d: print(f\"goodbye {d}\")}。", "stdin": "hi alice\nbye bob\nfoo cara\nhi dan\n", "expect": "hello alice\ngoodbye bob\nunknown foo\nhello dan"}},
53:{learn:["Discord Bot 三步：申請→邀請→寫 code", "必開 MESSAGE CONTENT INTENT 才收得到訊息", "async/await + asyncio.sleep（不能用 time.sleep）"],try:["加一個 !echo 指令把後面的字原樣回傳", "改 !add 支援浮點數", "加邊界：args 超過 10 個就拒絕"],code:{"task": "寫指令分派器，prefix=!。實作 !sum a b c 印「sum=N」, !max a b c 印「max=N」, !min a b c 印「min=N」。從 stdin 讀多行訊息，逐行處理；非指令或不認識的不要印任何東西。", "stdin": "!sum 3 5 8\nhello\n!max 1 9 4\n!min 7 2 8\n!bad 1 2\n", "expect": "sum=16\nmax=9\nmin=2"}},
54:{learn:["commands.Bot 比 Client 強：自動解析參數型別", "Cog 拆檔組織指令", "Slash command 用 @bot.tree.command + tree.sync"],try:["加 sub 指令做減法", "加 max 接 *args 變動參數", "改 repeat times>10 拒絕（防呆）"],code:{"task": "實作型別轉換分派器：commands={\"sum\": (lambda *xs: sum(xs), int), \"join\": (lambda *xs: \"-\".join(xs), str)}。從 stdin 讀「name arg1 arg2 ...」，把參數依型別轉換後呼叫並印結果。", "stdin": "sum 1 2 3\njoin a b c\nsum 10 20\n", "expect": "6\na-b-c\n30"}},
55:{learn:["LINE Bot = Flask webhook + line-bot-sdk", "ngrok 把本機 5000 port 開到網上", "reply_token 用 1 次 30 秒、push 才能主動找人"],try:["加 sticker 訊息處理（印 sticker_id）", "加 location 訊息處理（印經緯度）", "把 !ping 改成回時間"],code:{"task": "寫 webhook event 分派器：handlers={\"message\": lambda e: print(f\"reply {e[\\\"text\\\"]}\"), \"follow\": lambda e: print(\"welcome\")}。從 stdin 讀多行「TYPE TEXT」(follow 沒 TEXT)，組成 event dict 後 dispatch。", "stdin": "message hi\nfollow\nmessage bye\n", "expect": "reply hi\nwelcome\nreply bye"}},
56:{learn:["Text/Sticker/Image 三大基礎訊息", "ButtonsTemplate / CarouselTemplate 做選單", "FlexMessage + Flex Simulator 完全客製"],try:["加「快速回覆 (QuickReply)」的概念", "在 menu 加更多選項", "寫一個 \"weather 台北\" 指令回 Flex 卡片"],code:{"task": "寫訊息分類器：輸入文字若以「hi」開頭回「Text greet」，以「menu」開頭回「Buttons menu」，以「buy 」開頭回「Confirm buy」，否則回「Text fallback」。從 stdin 讀多行訊息逐行處理輸出。", "stdin": "hi there\nmenu\nbuy apple\nrandom\n", "expect": "Text greet\nButtons menu\nConfirm buy\nText fallback"}},
57:{learn:["記憶體 dict 最簡單，重啟就沒了", "JSON / SQLite 持久化方式", "多步驟對話用 FSM（每個 user 一個 step）"],try:["加 /cancel 指令立刻清掉 session", "記錄訂單到 list 模擬資料庫", "加超時：閒置 10 分鐘自動清掉 session"],code:{"task": "簽到累計器：用 dict 記每個 user 的簽到次數。從 stdin 讀多行 user 名字，每行印「user N」（N=該 user 累計簽到次數）。", "stdin": "alice\nbob\nalice\nalice\nbob\ncara\n", "expect": "alice 1\nbob 1\nalice 2\nalice 3\nbob 2\ncara 1"}},
58:{learn:["discord.ext.tasks.loop 內建排程", "schedule / APScheduler 套件做 cron", "永遠用 asyncio.sleep 不要 time.sleep"],try:["改成每 30 分鐘觸發 heartbeat", "加 \"每週一 10:00\" 的排程", "寫一個閒置 timeout：使用者 30 分沒回就清 session"],code:{"task": "寫 seconds_until(now_h, now_m, target_h, target_m)，回傳秒數（若 target 已過則算到明天同時刻）。從 stdin 讀多行「now_h now_m target_h target_m」逐行輸出秒數。", "stdin": "7 30 9 0\n9 0 9 0\n14 0 9 0\n14 0 21 0\n", "expect": "5400\n86400\n68400\n25200"}},
59:{learn:["Render/Railway 是免費部署選擇", "requirements.txt + Procfile + .gitignore 三件套", "健康檢查 + UptimeRobot 監控"],try:["加更多 REQUIRED 環境變數", "把 missing 改成 raise SystemExit 強制中止", "加「啟動超過 1 小時要重啟」的健康規則"],code:{"task": "從 stdin 讀環境變數定義（每行 KEY=VALUE），檢查 REQUIRED=[\"TOKEN\",\"DB_URL\"] 是否都存在。輸出：對每個 REQUIRED 印「KEY ok」或「KEY missing」（按 REQUIRED 順序）。", "stdin": "TOKEN=abc123\nLOG_LEVEL=INFO\nPORT=5000\n", "expect": "TOKEN ok\nDB_URL missing"}},
60:{learn:["Game loop 四步驟：events / update / draw / tick", "pygame 座標左上 (0,0)、y 往下增加", "clock.tick(60) 控制 FPS 讓不同電腦體驗一致"],try:["加 move_left 事件，看 x 減少", "改 width=30 看畫面變寬", "加 fake_events 在第 5 幀 quit，看提早結束"],code:{"task": "模擬 game loop：起始 x=0。從 stdin 讀多行指令 (right/left/quit)。處理到 quit 為止。每幀後印「frame N x=X」(N 從 1 開始)，quit 那幀不要印。", "stdin": "right\nright\nleft\nright\nquit\n", "expect": "frame 1 x=1\nframe 2 x=2\nframe 3 x=1\nframe 4 x=2"}},
61:{learn:["draw.rect/circle/line/polygon 五大繪圖函式", "Rect 物件有 center/topleft 等屬性方便定位", "繪圖順序：先畫的會被後畫的蓋掉"],try:["加 draw_line_v 垂直線函式", "把房子大小改成 10x8", "畫第二個太陽 (15, 2, 1)"],code:{"task": "用 30x10 的字元 grid 當畫布。從 stdin 讀「x y」（單一行），在那個位置印 *。輸出整張 grid (用 . 填空白)，每行印一列。", "stdin": "15 5\n", "expect": "..............................\n..............................\n..............................\n..............................\n..............................\n...............*..............\n..............................\n..............................\n..............................\n.............................."}},
62:{learn:["事件驅動 (KEYDOWN) vs 狀態查詢 (get_pressed)", "MOUSEBUTTONDOWN/MOTION 處理滑鼠", "文字輸入用 event.unicode"],try:["加 K_a/K_d 對應左右移動", "加滑鼠右鍵：印「marker」訊息", "加滑鼠拖曳偵測 (left button + MOUSEMOTION)"],code:{"task": "玩家初始 x=0, y=0。從 stdin 讀多行輸入指令：「W/A/S/D」分別上/左/下/右各移動 1 格。讀完後輸出「x y」最終位置。", "stdin": "D\nD\nS\nD\nW\nW\nA\n", "expect": "2 -1"}},
63:{learn:["用 vel * dt 讓速度跟 fps 無關", "pos += vel * dt 是黃金移動公式", "重力就是 vy += GRAVITY * dt"],try:["改 GRAVITY=50，看球落更快", "改反彈損失 0.9（更彈）", "加左右牆每次反彈損失 10% 速度"],code:{"task": "物理模擬：初始 y=0, vy=0。每幀 dt=0.1, GRAVITY=10。從 stdin 讀整數 N (1 行)，跑 N 幀後輸出最終 y（四捨五入 1 位小數）。公式：vy += GRAVITY*dt; y += vy*dt（每幀按此順序）。", "stdin": "5\n", "expect": "1.5"}},
64:{learn:["AABB 是最常用的碰撞算法", "pygame Rect.colliderect / collidepoint 內建", "x/y 分開檢查避免卡牆"],try:["加更多子彈/怪物，看結果", "改成圓形碰撞 (距離公式)", "加 dokill 邏輯：撞到的怪物從 enemies 移除"],code:{"task": "AABB 碰撞：從 stdin 讀 2 行，每行「x y w h」表示一個矩形。輸出「YES」或「NO」表示是否相撞。", "stdin": "0 0 5 5\n3 3 5 5\n", "expect": "YES"}},
65:{learn:["font.render(text, True, color) → Surface", "中文要指定中文字型或用 .ttf 檔", "get_rect(center=...) 置中對齊"],try:["改 HP 為 30，看血條變紅短", "寫一個 right_align 函式", "加邊框：「[ GAME OVER ]」"],code:{"task": "自動換行：從 stdin 讀第一行 max_width (整數)，第二行一個英文句子。按空白切詞、貪心放進每行（每行字數 ≤ max_width）。輸出每行一行。", "stdin": "15\nThe quick brown fox jumps over the lazy dog\n", "expect": "The quick brown\nfox jumps over\nthe lazy dog"}},
66:{learn:["Sound (短) vs music (長) 兩種 API", "play(loops=-1) 無限循環、fadeout 淡出", ".wav/.ogg 最穩；多平台音樂用 .ogg"],try:["加 walk 音效隔 0.3 秒才能再播一次", "改 boss BGM 從 30 秒處 start", "加全域 master_volume = 0.5 乘上每個音效"],code:{"task": "寫音效播放紀錄器：從 stdin 讀多行「event」。對照表 {\"jump\":\"jump.wav\", \"coin\":\"coin.wav\", \"hit\":\"hit.wav\"}，找得到就印「play X」，找不到印「skip X」(X 是輸入字串)。", "stdin": "jump\ncoin\ndie\nhit\nfoo\n", "expect": "play jump.wav\nplay coin.wav\nskip die\nplay hit.wav\nskip foo"}},
67:{learn:["完整 game loop = events + input + update + collision + draw", "狀態機 (state machine) 管理 menu/playing/gameover", "從小遊戲開始：先 Pong → 貪食蛇 → 平台跳躍"],try:["加 AI 對手自動追球", "加加速：每次撞板 vel.x *= 1.05", "改 WIN_SCORE = 11 看比賽更長"],code:{"task": "計分遊戲：從 stdin 讀多行「P1」或「P2」表示誰得分。先到 3 分獲勝。輸出「WINNER FINAL_A_B」（FINAL 是「P1 wins」或「P2 wins」, A_B 是最終比數）。獲勝後忽略後續輸入。", "stdin": "P1\nP2\nP1\nP2\nP1\nP2\n", "expect": "P1 wins 3-2"}},
68:{
  learn:["理解 APCS 新制四種實作題本", "用資料範圍與關鍵字判斷題目等級", "用追蹤表降低程式識讀錯誤率"],
  try:["選 3 題題庫題目，先不寫程式，寫下你判斷的等級與理由", "把本章範例的 a 改成 [2,7,1,8]，自己重畫追蹤表", "挑一段有迴圈的程式，列出每一次 print 的精確輸出"],
  quiz:[
    {q:"中高級題目通常最需要先思考什麼？", opts:["要不要加很多註解","該用哪個資料結構維護狀態","變數名稱要不要很短","輸出要不要漂亮"], ans:1, why:"中高級的核心是基礎資料結構運用能力，通常要先選 stack、queue、map、set、graph、DSU 等工具。"},
    {q:"做程式識讀的迴圈題時，最穩的方式是？", opts:["只看最後一行","把每次迭代的關鍵變數寫成追蹤表","先猜輸出再看選項","只找最長的變數名稱"], ans:1, why:"追蹤表能把每輪 i、元素、狀態與輸出固定下來，最能避免 off-by-one 或變數更新順序錯誤。"},
    {q:"看到 N 到 200000 且多次區間查詢，通常不該先寫什麼？", opts:["前綴和","排序或二分","每次查詢都從頭掃到尾","雜湊表"], ans:2, why:"每次查詢都線性掃描通常會超時，應先思考前處理或更好的資料結構。"}
  ],
  code:{"task": "依本章範例，計算 a=[3,1,4,1,5] 在偶數索引加、奇數索引減後的結果。輸出每輪 i x ans，最後輸出 final ans。", "stdin": "", "expect": "0 3 3\n1 1 2\n2 4 6\n3 1 5\n4 5 10\nfinal 10"}
}
};

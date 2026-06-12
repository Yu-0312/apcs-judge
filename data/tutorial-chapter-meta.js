// 自 tutorial.html 抽出的資料檔（由頁面以 <script src> 載入）
const CHAPTER_META = {
 "0": {
  "learn": [
   "認識什麼是程式",
   "熟悉這個教學的三個區域",
   "按下第一次「執行」"
  ],
  "try": [
   "把右邊程式碼裡的 <code>______</code> 改成你的名字，再按執行",
   "加一行：<code>print(\"我今年 18 歲\")</code>，看看會多出什麼",
   "故意把 <code>print</code> 拼錯成 <code>prnt</code>，看會出現什麼錯誤訊息"
  ],
  "quiz": [
   {
    "q": "程式碼裡開頭是 # 的整行，電腦會怎麼處理？",
    "opts": [
     "當作指令執行",
     "完全跳過（這叫註解）",
     "印出來給使用者看",
     "視為錯誤"
    ],
    "ans": 1,
    "why": "# 開頭的是註解，給人看的提示，電腦會略過。"
   },
   {
    "q": "<code>print(\"Hello\")</code> 這行做什麼？",
    "opts": [
     "把 Hello 存進變數",
     "把 Hello 顯示在輸出",
     "把 Hello 寫進檔案",
     "刪除 Hello"
    ],
    "ans": 1,
    "why": "print() 是把括號裡的東西顯示出來，是最常用的「輸出」指令。"
   },
   {
    "q": "Python 一行程式碼的結尾需要分號 <code>;</code> 嗎？",
    "opts": [
     "一定要",
     "不需要，換行就是結束",
     "只有 print 要",
     "看情況"
    ],
    "ans": 1,
    "why": "Python 用換行就代表一行結束，不像 C/C++/Java 一定要寫分號。"
   }
  ],
  "code": {
   "task": "修改右邊程式，讓它輸出兩行：第一行 <code>Hello</code>，第二行 <code>APCS</code>。",
   "stdin": "",
   "expect": "Hello\nAPCS"
  }
 },
 "1": {
  "learn": [
   "把資料『存進變數』裡",
   "認識四種基本型別：int / float / str / bool",
   "用 int() / str() 在型別之間轉換"
  ],
  "try": [
   "把 <code>age = 17</code> 改成你的年齡",
   "加一行 <code>height = 170.5</code>，再 print 出來",
   "試試 <code>print(\"age\" + age)</code>——會錯！想想為什麼，再改成 <code>print(\"age\" + str(age))</code>"
  ],
  "quiz": [
   {
    "q": "哪一個是整數（int）？",
    "opts": [
     "3.14",
     "\"42\"",
     "42",
     "True"
    ],
    "ans": 2,
    "why": "沒有引號、沒有小數點的數字 42 是 int。\"42\" 是字串。"
   },
   {
    "q": "<code>type(\"123\")</code> 會回傳什麼？",
    "opts": [
     "int",
     "str",
     "float",
     "bool"
    ],
    "ans": 1,
    "why": "有引號就是字串 str，即使內容看起來是數字。"
   },
   {
    "q": "input() 讀進來預設是什麼型別？",
    "opts": [
     "int",
     "float",
     "str",
     "看你輸入什麼"
    ],
    "ans": 2,
    "why": "input() 永遠回傳字串，要用 int() 才能拿來做數學運算。"
   }
  ],
  "code": {
   "task": "宣告 <code>a = 10</code>、<code>b = 20</code>，依序印出 a、b、a+b 三行。",
   "stdin": "",
   "expect": "10\n20\n30"
  }
 },
 "2": {
  "learn": [
   "用 input() 從鍵盤讀取資料",
   "用 print() 印出結果",
   "學會 split() + map() 一次讀多個數字"
  ],
  "try": [
   "把 <code>n = int(input())</code> 改成讀兩個數字並相加",
   "試試 <code>print(\"a\", \"b\", sep=\"-\")</code>，看分隔符變了沒",
   "改 stdin 框裡的內容（例如改成 3 個數字），看程式會不會出錯"
  ],
  "quiz": [
   {
    "q": "<code>a, b = map(int, input().split())</code> 的用途？",
    "opts": [
     "讀一個整數",
     "讀一行、用空白切開、各自轉成整數",
     "讀兩行字串",
     "印出 a 和 b"
    ],
    "ans": 1,
    "why": "split() 用空白切開字串成 list，map(int, ...) 把每個元素轉成 int。"
   },
   {
    "q": "<code>print(\"x\", \"y\")</code> 預設輸出是？",
    "opts": [
     "xy",
     "x y",
     "x,y",
     "x\\ny"
    ],
    "ans": 1,
    "why": "print 多個值預設用空白分隔。"
   },
   {
    "q": "想印完不換行，要怎麼寫？",
    "opts": [
     "print(\"x\", end=\"\")",
     "print(\"x\", noln=True)",
     "print(\"x\\\\n\")",
     "write(\"x\")"
    ],
    "ans": 0,
    "why": "end=\"\" 把預設的換行符換成空字串。"
   }
  ],
  "code": {
   "task": "從標準輸入讀兩個整數（同一行、空白分隔），輸出它們的和。",
   "stdin": "3 5\n",
   "expect": "8"
  }
 },
 "3": {
  "learn": [
   "+ - * / 與整數除法 //、餘數 %",
   "運算順序：先乘除後加減、括號優先",
   "從一個三位數拆出百位、十位、個位"
  ],
  "try": [
   "把 <code>n = 752</code> 換成你想的三位數",
   "算 <code>n // 100</code> 和 <code>n % 10</code>，理解差別",
   "試試看：把 <code>n</code> 改成四位數，能用 <code>// 1000</code> 取得千位嗎？"
  ],
  "quiz": [
   {
    "q": "<code>17 // 5</code> 的結果？",
    "opts": [
     "3.4",
     "3",
     "4",
     "2"
    ],
    "ans": 1,
    "why": "// 是整數除法，去掉小數部分。"
   },
   {
    "q": "<code>17 % 5</code> 的結果？",
    "opts": [
     "3.4",
     "3",
     "4",
     "2"
    ],
    "ans": 3,
    "why": "% 是餘數：17 = 5×3 + 2，所以餘 2。"
   },
   {
    "q": "想取出 528 的「十位數」(2)，怎麼寫最快？",
    "opts": [
     "528 // 10",
     "528 % 10",
     "528 // 10 % 10",
     "528 % 100"
    ],
    "ans": 2,
    "why": "先 // 10 把 528 變 52，再 % 10 取個位就是原本的十位 = 2。"
   }
  ],
  "code": {
   "task": "讀一個三位數，分三行印出它的百位、十位、個位。",
   "stdin": "528\n",
   "expect": "5\n2\n8"
  }
 },
 "4": {
  "learn": [
   "用 if / elif / else 做分支",
   "比較運算子 == != < > <= >=",
   "用 and / or / not 組合條件"
  ],
  "try": [
   "把 BMI 標準改成自己的身高體重，看分類對不對",
   "新增 elif：<code>elif bmi >= 35: print(\"重度肥胖\")</code>",
   "試試：把 <code>weight = 65</code> 改成 0，看會發生什麼錯（再回頭看第 0 章說的「錯了沒關係」）"
  ],
  "quiz": [
   {
    "q": "<code>if x == 5:</code> 跟 <code>if x = 5:</code> 差別？",
    "opts": [
     "沒差",
     "= 是賦值、== 才是比較，後者會出錯",
     "等號的數量不影響",
     "Python 兩種都可以"
    ],
    "ans": 1,
    "why": "一個等號是「把右邊存到左邊」（賦值），兩個才是「相等嗎」（比較）。"
   },
   {
    "q": "想表達「年齡介於 13 到 18 之間」，Python 最自然的寫法是？",
    "opts": [
     "13 <= age <= 18",
     "13 <= age and age <= 18 (錯)",
     "age in [13,18]",
     "age == 13..18"
    ],
    "ans": 0,
    "why": "Python 支援連鎖比較 13 <= age <= 18，比 and 寫法更直觀。"
   },
   {
    "q": "<code>if a and b:</code> 只在何時為真？",
    "opts": [
     "a 或 b 任一為真",
     "a 和 b 都為真",
     "只有 a 為真",
     "都不需要為真"
    ],
    "ans": 1,
    "why": "and 要求兩邊都為真才整體為真。"
   }
  ],
  "code": {
   "task": "讀一個整數，若為偶數印 <code>even</code>，否則印 <code>odd</code>。",
   "stdin": "7\n",
   "expect": "odd"
  }
 },
 "5": {
  "learn": [
   "for 迴圈搭配 range() 重複動作",
   "巢狀迴圈做出二維輸出",
   "while 迴圈直到條件不成立才停"
  ],
  "try": [
   "改成印 5x5 的乘法表",
   "把外層改成 <code>for i in range(1, 10):</code>，印完整九九乘法表",
   "把 print(...) 後面加 <code>end=\"\\t\"</code>，看排版變漂亮了沒"
  ],
  "quiz": [
   {
    "q": "<code>range(5)</code> 會產生哪些數字？",
    "opts": [
     "1 2 3 4 5",
     "0 1 2 3 4",
     "0 1 2 3 4 5",
     "5"
    ],
    "ans": 1,
    "why": "range(n) 是 0 到 n-1，不含 n。"
   },
   {
    "q": "<code>range(2, 10, 3)</code> 會產生？",
    "opts": [
     "2 5 8",
     "2 3 4...9",
     "2 5 8 10",
     "3 6 9"
    ],
    "ans": 0,
    "why": "start=2, stop=10, step=3 → 2, 5, 8（下一個 11 已超過 stop）。"
   },
   {
    "q": "想跳出最內層迴圈，用哪個關鍵字？",
    "opts": [
     "exit",
     "return",
     "break",
     "continue"
    ],
    "ans": 2,
    "why": "break 馬上離開當前迴圈；continue 是跳到下一輪。"
   }
  ],
  "code": {
   "task": "用迴圈計算 1 到 100 的總和並印出。",
   "stdin": "",
   "expect": "5050"
  }
 },
 "6": {
  "learn": [
   "字串切片 s[a:b]、s[::-1]",
   "常用方法：len/split/replace/upper/lower",
   "用 \"\".join(list) 把 list 接成字串"
  ],
  "try": [
   "把 <code>s = \"Hello APCS Python\"</code> 換成你的名字",
   "試 <code>s[::-1]</code>（反轉），跟 <code>s.upper()</code>",
   "算這句話有幾個字母 a：<code>s.lower().count(\"a\")</code>"
  ],
  "quiz": [
   {
    "q": "<code>\"APCS\"[1]</code> 是？",
    "opts": [
     "A",
     "P",
     "C",
     "S"
    ],
    "ans": 1,
    "why": "index 從 0 開始：0=A, 1=P, 2=C, 3=S。"
   },
   {
    "q": "<code>\"hello\".upper()</code> 結果？",
    "opts": [
     "hello",
     "Hello",
     "HELLO",
     "HELLo"
    ],
    "ans": 2,
    "why": "upper() 把整串轉大寫。"
   },
   {
    "q": "<code>\"a,b,c\".split(\",\")</code> 結果？",
    "opts": [
     "\"abc\"",
     "[\"a\",\"b\",\"c\"]",
     "(\"a\",\"b\",\"c\")",
     "[\"a,b,c\"]"
    ],
    "ans": 1,
    "why": "split 用逗號切開，回傳 list。"
   }
  ],
  "code": {
   "task": "讀一個字串，第一行印它的長度，第二行印反轉後的字串。",
   "stdin": "hello\n",
   "expect": "5\nolleh"
  }
 },
 "7": {
  "learn": [
   "List 是「一排放東西的盒子」，用 [ ] 包住",
   "常用：append / pop / sort / len",
   "用 for x in lst 走訪每個元素"
  ],
  "try": [
   "把 <code>nums = [3,1,4,1,5,9,2,6,5,3]</code> 改成 10 個你自己想的數字",
   "用 <code>nums.append(99)</code> 加一個，再 print",
   "算平均：<code>sum(nums) / len(nums)</code>"
  ],
  "quiz": [
   {
    "q": "<code>nums = [10,20,30]</code>，<code>nums[2]</code> 是？",
    "opts": [
     "10",
     "20",
     "30",
     "錯誤"
    ],
    "ans": 2,
    "why": "index 從 0 開始：0=10, 1=20, 2=30。"
   },
   {
    "q": "想在 list 尾巴加一個值，用？",
    "opts": [
     "append",
     "add",
     "push",
     "insert(-1)"
    ],
    "ans": 0,
    "why": "Python list 標準做法是 nums.append(x)。"
   },
   {
    "q": "<code>len([1,2,3,4])</code> 是？",
    "opts": [
     "3",
     "4",
     "5",
     "0"
    ],
    "ans": 1,
    "why": "len 回傳元素數量，4 個。"
   }
  ],
  "code": {
   "task": "第一行讀 n，第二行讀 n 個整數，輸出最大值。",
   "stdin": "5\n3 1 4 1 5\n",
   "expect": "5"
  }
 },
 "8": {
  "learn": [
   "二維陣列就是「list 裡裝 list」",
   "用 g[i][j] 存取第 i 列第 j 行",
   "正確建立 n×m 二維陣列：<code>[[0]*m for _ in range(n)]</code>"
  ],
  "try": [
   "把 <code>n = 5</code> 改成 7，看棋盤變大",
   "把 <code>(i + j) % 2</code> 改成 <code>i * j</code>，看會印出什麼",
   "試試錯誤寫法 <code>[[0]*5]*5</code> 然後改一格，看為什麼整欄都變"
  ],
  "quiz": [
   {
    "q": "想建立 3×4 的全 0 二維陣列，正確寫法？",
    "opts": [
     "[[0]*3]*4",
     "[[0]*4 for _ in range(3)]",
     "[0]*12",
     "[[0,0,0,0]]*3"
    ],
    "ans": 1,
    "why": "用 for 才能保證每列是獨立 list。[[0]*4]*3 三列共用同一個 list！"
   },
   {
    "q": "<code>g[2][3]</code> 表示？",
    "opts": [
     "第 2 行第 3 列",
     "第 2 列第 3 行",
     "第 3 列第 4 行",
     "第 3 列第 2 行"
    ],
    "ans": 1,
    "why": "慣例 g[i][j] = 第 i 列第 j 行（從 0 開始）。"
   },
   {
    "q": "想走訪二維陣列每個元素，最常見的寫法？",
    "opts": [
     "單一 for",
     "兩層 for",
     "while",
     "遞迴"
    ],
    "ans": 1,
    "why": "外層走列、內層走行，兩層 for 標準寫法。"
   }
  ],
  "code": {
   "task": "輸出 3×3 乘法表，第 i 列第 j 行為 (i+1)*(j+1)，每列三數空白分隔。",
   "stdin": "",
   "expect": "1 2 3\n2 4 6\n3 6 9"
  }
 },
 "9": {
  "learn": [
   "用 def 定義函式，把重複邏輯封裝",
   "用 return 把結果送回呼叫端",
   "參數讓函式更通用"
  ],
  "try": [
   "改成印 100 以下的質數",
   "把 <code>is_prime</code> 改成回傳「最小因數」，質數則回傳 1",
   "寫一個 <code>def add(a, b): return a + b</code>，試試 <code>print(add(3, 5))</code>"
  ],
  "quiz": [
   {
    "q": "<code>def f(x): return x*2</code>，呼叫 <code>f(5)</code> 是？",
    "opts": [
     "5",
     "10",
     "x*2",
     "錯誤"
    ],
    "ans": 1,
    "why": "傳入 x=5，回傳 5*2=10。"
   },
   {
    "q": "函式沒寫 return 會回傳什麼？",
    "opts": [
     "0",
     "\"\"",
     "None",
     "錯誤"
    ],
    "ans": 2,
    "why": "預設回傳 None。"
   },
   {
    "q": "判斷質數，迴圈最佳到哪裡就夠？",
    "opts": [
     "i < n",
     "i <= n/2",
     "i*i <= n",
     "i < 100"
    ],
    "ans": 2,
    "why": "只要試到 √n 就好——i*i <= n 是等價且不用 import math.sqrt。"
   }
  ],
  "code": {
   "task": "寫一個函式 <code>add(a,b)</code> 回傳兩數和，呼叫 add(7, 8) 並印出結果。",
   "stdin": "",
   "expect": "15"
  }
 },
 "10": {
  "learn": [
   "dict 是「鍵 → 值」的對應表，用 { } 建立",
   "set 是不重複的集合",
   "常用：d[k]、d.get(k, 預設)、k in d"
  ],
  "try": [
   "改 <code>text</code> 換成你自己的句子",
   "找出出現最多次的字：<code>max(cnt, key=cnt.get)</code>",
   "用 set：<code>print(set(text.split()))</code>，看不重複字"
  ],
  "quiz": [
   {
    "q": "<code>d = {\"a\":1, \"b\":2}</code>，<code>d[\"a\"]</code> 是？",
    "opts": [
     "1",
     "2",
     "\"a\"",
     "錯誤"
    ],
    "ans": 0,
    "why": "用 key 取對應的 value。"
   },
   {
    "q": "想安全地取一個可能不存在的 key，用哪個？",
    "opts": [
     "d[k]（不存在會錯）",
     "d.get(k, 0)",
     "d.find(k)",
     "d.has(k)"
    ],
    "ans": 1,
    "why": "d.get(k, 預設值) 不存在就回傳預設值，不會出錯。"
   },
   {
    "q": "set 跟 list 最大差別？",
    "opts": [
     "set 比較快",
     "set 不能重複、沒順序",
     "set 只能裝數字",
     "沒差別"
    ],
    "ans": 1,
    "why": "set 自動去重複、不保證順序，適合「是否出現過」這類問題。"
   }
  ],
  "code": {
   "task": "讀一個字串，輸出有幾種不同字元。",
   "stdin": "abcabc\n",
   "expect": "3"
  }
 },
 "11": {
  "learn": [
   "線性搜尋 vs 二分搜尋的時間差",
   "前綴和 O(1) 算區間和",
   "埃氏篩 + 質數判斷"
  ],
  "try": [
   "把 <code>K = 5</code> 改成其他數字，看子陣列數量怎麼變",
   "改成「最長」總和為 K 的子陣列",
   "在末尾加：<code>print(sum(a))</code> 驗證前綴和對不對"
  ],
  "quiz": [
   {
    "q": "已排序陣列找元素，最快用？",
    "opts": [
     "線性搜尋",
     "二分搜尋",
     "暴力",
     "遞迴"
    ],
    "ans": 1,
    "why": "已排序就能用二分，每次砍一半，O(log n)。"
   },
   {
    "q": "前綴和 ps，<code>a[l..r]</code> 區間和 = ?",
    "opts": [
     "ps[r] - ps[l]",
     "ps[r+1] - ps[l]",
     "ps[r] + ps[l]",
     "ps[r-1] - ps[l]"
    ],
    "ans": 1,
    "why": "ps[i] 表示「前 i 個」，所以 a[l..r] = ps[r+1] - ps[l]。"
   },
   {
    "q": "判斷 n 是質數的迴圈條件最佳是？",
    "opts": [
     "i < n",
     "i <= n",
     "i*i <= n",
     "i < n/2"
    ],
    "ans": 2,
    "why": "任何合數 n 必有 ≤ √n 的因數，所以試到 √n 就足夠。"
   }
  ],
  "code": {
   "task": "第一行 n k，第二行 n 個整數，輸出陣列中等於 k 的個數。",
   "stdin": "5 3\n1 3 3 2 3\n",
   "expect": "3"
  }
 },
 "12": {
  "learn": [
   "巢狀迴圈處理二維問題",
   "用 break 提早離開最內層",
   "認識「外迴圈固定 i、內迴圈跑 j」的模式"
  ],
  "try": [
   "把 <code>n = 7</code> 改成 10，看更大的巴斯卡三角形",
   "改成印「對稱菱形」星號",
   "試試只用一個變數 <code>k</code> 走訪二維索引：<code>i, j = k // m, k % m</code>"
  ],
  "quiz": [
   {
    "q": "兩層 for 跑 1 到 n，總共執行幾次？",
    "opts": [
     "n",
     "2n",
     "n²",
     "n log n"
    ],
    "ans": 2,
    "why": "外層 n 次、內層 n 次，總共 n × n = n²。"
   },
   {
    "q": "巴斯卡三角形 g[i][j] = ?",
    "opts": [
     "g[i-1][j-1] + g[i-1][j]",
     "g[i][j-1] + 1",
     "g[i-1][j] * 2",
     "i + j"
    ],
    "ans": 0,
    "why": "每格等於左上 + 正上。"
   },
   {
    "q": "想在內層找到目標立刻離開，用？",
    "opts": [
     "return",
     "continue",
     "break",
     "exit"
    ],
    "ans": 2,
    "why": "break 只跳出當前最內層迴圈。"
   }
  ],
  "code": {
   "task": "讀一個整數 n，印出 n 列星號三角形（第 i 列 i 個 *）。",
   "stdin": "4\n",
   "expect": "*\n**\n***\n****"
  }
 },
 "13": {
  "learn": [
   "List comprehension：<code>[f(x) for x in lst if cond]</code>",
   "可以一行做篩選 + 轉換",
   "嵌套：雙層 for 寫成一行"
  ],
  "try": [
   "把 <code>is_prime(i*j)</code> 改成 <code>i*j % 7 == 0</code>",
   "試試：<code>[x*x for x in range(10) if x % 2 == 0]</code>",
   "用 list comp 算 1 到 100 的偶數和：<code>sum([x for x in range(1,101) if x % 2 == 0])</code>"
  ],
  "quiz": [
   {
    "q": "<code>[x*2 for x in [1,2,3]]</code> 結果？",
    "opts": [
     "[1,2,3]",
     "[2,4,6]",
     "[1,4,9]",
     "[2,2,2]"
    ],
    "ans": 1,
    "why": "每個元素乘以 2。"
   },
   {
    "q": "想篩出 list 中所有奇數，最簡潔？",
    "opts": [
     "[x for x in a if x%2==1]",
     "filter(odd, a)",
     "用 for + append",
     "sum(a)"
    ],
    "ans": 0,
    "why": "list comprehension 是 Python 最自然的篩選寫法。"
   },
   {
    "q": "<code>[i+j for i in range(2) for j in range(2)]</code>?",
    "opts": [
     "[0,1,1,2]",
     "[0,1,2,3]",
     "[[0,1],[1,2]]",
     "錯誤"
    ],
    "ans": 0,
    "why": "i=0,j=0→0; i=0,j=1→1; i=1,j=0→1; i=1,j=1→2。"
   }
  ],
  "code": {
   "task": "讀一個整數 n，輸出 1 到 n 之間所有偶數的平方和。",
   "stdin": "6\n",
   "expect": "56"
  }
 },
 "14": {
  "learn": [
   "sorted() 不改原 list，sort() 直接改",
   "用 key=lambda x: ... 自訂排序鍵",
   "多重排序：key 回傳 tuple"
  ],
  "try": [
   "把排序改成「分數升冪、分數同則名字字典序」",
   "試 <code>sorted(students, key=lambda s: -s[1])</code>",
   "看看 <code>sorted(students, key=lambda s: (s[1], s[2]))</code> 跟 <code>(-s[1], s[2])</code> 差別"
  ],
  "quiz": [
   {
    "q": "<code>lambda x: x*2</code> 等同於？",
    "opts": [
     "def f(x): return x*2",
     "def f(): return x*2",
     "x = 2",
     "print(x*2)"
    ],
    "ans": 0,
    "why": "lambda 是「匿名小函式」的語法糖。"
   },
   {
    "q": "想分數降冪排序，<code>key</code> 怎麼寫？",
    "opts": [
     "lambda s: s[1]",
     "lambda s: -s[1]",
     "reverse=True",
     "以上 B 或 C 都行"
    ],
    "ans": 3,
    "why": "key=lambda s: -s[1] 或 sorted(..., reverse=True) 都可達到降冪。"
   },
   {
    "q": "sorted() 跟 sort() 差別？",
    "opts": [
     "sorted 改原 list",
     "sort 回傳新 list",
     "sorted 回傳新 list、sort 改原 list",
     "完全相同"
    ],
    "ans": 2,
    "why": "sorted(a) 不動 a；a.sort() 直接排 a 但回傳 None。"
   }
  ],
  "code": {
   "task": "第一行 n，第二行 n 個整數。由大到小排序後一行輸出，空白分隔。",
   "stdin": "5\n3 1 4 1 5\n",
   "expect": "5 4 3 1 1"
  }
 },
 "15": {
  "learn": [
   "函式呼叫自己 = 遞迴",
   "必須有「終止條件」，否則無限循環",
   "經典例子：階乘、費氏、回溯（N 皇后）"
  ],
  "try": [
   "改成計算 6 皇后",
   "寫一個遞迴函式算階乘：<code>def f(n): return 1 if n<=1 else n*f(n-1)</code>",
   "試 <code>print(f(10))</code>，再試 <code>f(100)</code>"
  ],
  "quiz": [
   {
    "q": "遞迴一定要有的東西是？",
    "opts": [
     "全域變數",
     "終止條件",
     "迴圈",
     "print"
    ],
    "ans": 1,
    "why": "沒終止條件會無限呼叫，最後 RecursionError。"
   },
   {
    "q": "<code>def f(n): return 1 if n<=1 else n*f(n-1)</code>，<code>f(4)</code>?",
    "opts": [
     "4",
     "10",
     "24",
     "120"
    ],
    "ans": 2,
    "why": "4! = 4×3×2×1 = 24。"
   },
   {
    "q": "N 皇后用了哪個演算法策略？",
    "opts": [
     "DP",
     "BFS",
     "回溯（backtracking）",
     "二分搜"
    ],
    "ans": 2,
    "why": "逐列嘗試、不行就退一步，是典型回溯。"
   }
  ],
  "code": {
   "task": "用遞迴定義階乘函式，輸出 7! 的值。",
   "stdin": "",
   "expect": "5040"
  }
 },
 "16": {
  "learn": [
   "枚舉題 = 「全部試一遍」的解法",
   "位元遮罩可以枚舉所有子集合",
   "適合 n ≤ 20 的小規模問題"
  ],
  "try": [
   "把 <code>target = 8</code> 改成 <code>10</code>",
   "改成「找最大的乘積為偶數的子集合」",
   "想想：n = 25 用這方法跑得完嗎？（2²⁵ = 3300 萬）"
  ],
  "quiz": [
   {
    "q": "n 個元素的所有子集合共幾個？",
    "opts": [
     "n",
     "2n",
     "n!",
     "2^n"
    ],
    "ans": 3,
    "why": "每個元素「選或不選」兩種，共 2ⁿ 種組合。"
   },
   {
    "q": "<code>mask & (1 << i)</code> 用來做什麼？",
    "opts": [
     "把 i 設為 1",
     "檢查 mask 的第 i 個位元是 1 嗎",
     "把 mask 變大",
     "計算次方"
    ],
    "ans": 1,
    "why": "1 << i 是「只有第 i 位為 1」的數，用 & 來檢查 mask 第 i 位是否為 1。"
   },
   {
    "q": "枚舉法在 n 多大時還能跑？",
    "opts": [
     "n ≤ 5",
     "n ≤ 20",
     "n ≤ 100",
     "n ≤ 1000"
    ],
    "ans": 1,
    "why": "2²⁰ ≈ 100 萬還可接受；超過 25 就太慢。"
   }
  ],
  "code": {
   "task": "讀 4 個整數（空白分隔），是否存在兩個和為 10？存在印 <code>Yes</code>，否則 <code>No</code>。",
   "stdin": "3 7 5 8\n",
   "expect": "Yes"
  }
 },
 "17": {
  "learn": [
   "deque 兩端 O(1) 插入/刪除",
   "heapq 永遠拿到最小值",
   "Counter 算頻率、defaultdict 預設值省判斷"
  ],
  "try": [
   "改成「前 5 大」（提示：heapq.nlargest(5, nums)）",
   "用 Counter：<code>from collections import Counter; print(Counter(\"hello world\"))</code>",
   "試試 deque：<code>from collections import deque; q = deque([1,2,3]); q.appendleft(0); print(q)</code>"
  ],
  "quiz": [
   {
    "q": "heapq 預設是哪種堆？",
    "opts": [
     "最大堆",
     "最小堆",
     "二元樹",
     "平衡樹"
    ],
    "ans": 1,
    "why": "Python heapq 是最小堆，heap[0] 永遠是最小值。"
   },
   {
    "q": "<code>Counter([1,1,2,3,3,3])</code> 結果？",
    "opts": [
     "{1,2,3}",
     "Counter({1:2, 2:1, 3:3})",
     "[1,1,2,3,3,3]",
     "6"
    ],
    "ans": 1,
    "why": "Counter 自動算每個元素出現幾次。"
   },
   {
    "q": "deque 比 list 強在哪？",
    "opts": [
     "佔記憶體少",
     "左端插入是 O(1) 不像 list 是 O(n)",
     "支援索引",
     "可以排序"
    ],
    "ans": 1,
    "why": "list.insert(0, x) 是 O(n)，deque.appendleft(x) 是 O(1)。"
   }
  ],
  "code": {
   "task": "讀一個字串，輸出出現次數最多的字元（保證唯一答案）。",
   "stdin": "abracadabra\n",
   "expect": "a"
  }
 },
 "18": {
  "learn": [
   "常見錯誤：NameError / IndexError / TypeError 怎麼讀",
   "常見邏輯 bug：off-by-one、淺拷貝陷阱",
   "用 print 除錯：把中間結果印出來看"
  ],
  "try": [
   "把 bug 修好：<code>for i in range(1, n+1):</code>",
   "再加一個 bug：把 <code>n</code> 改成字串 <code>\"5\"</code>，看會出什麼錯",
   "故意造一個 IndexError：<code>a = [1,2,3]; print(a[5])</code>，看翻譯後的訊息"
  ],
  "quiz": [
   {
    "q": "<code>NameError: name 'x' is not defined</code> 代表？",
    "opts": [
     "x 太多了",
     "x 還沒指定值就被用",
     "x 被多次賦值",
     "語法錯誤"
    ],
    "ans": 1,
    "why": "用了一個從沒給值的變數。"
   },
   {
    "q": "<code>a = [1,2,3]; a[3]</code> 會發生？",
    "opts": [
     "回傳 3",
     "回傳 None",
     "IndexError",
     "補一個 0"
    ],
    "ans": 2,
    "why": "index 3 超出範圍（合法是 0~2），會 IndexError。"
   },
   {
    "q": "想算 1+2+...+n，<code>for i in range(n)</code> 對嗎？",
    "opts": [
     "對",
     "少 1（應是 range(n+1) 或 range(1,n+1)）",
     "會無限迴圈",
     "會 IndexError"
    ],
    "ans": 1,
    "why": "range(n) 是 0..n-1，少了 n 本身。"
   }
  ],
  "code": {
   "task": "讀一個整數 n，輸出 1+2+...+n 的總和（小心 range 邊界要包含 n）。",
   "stdin": "10\n",
   "expect": "55"
  }
 },
 "19": {
  "learn": [
   "把前面學的整合起來",
   "Kadane 演算法：O(n) 求最大連續子陣列和",
   "「擴展或重啟」是 Kadane 的核心思想"
  ],
  "try": [
   "把陣列換成 <code>[1,2,3,-10,4,5]</code>，看答案是否是 9",
   "試試全負陣列 <code>[-3,-1,-4,-2]</code>，答案應該是 -1",
   "加 print(cur, best) 在迴圈裡，觀察兩個變數怎麼變化"
  ],
  "quiz": [
   {
    "q": "Kadane 的關鍵一行 <code>cur = max(a[i], cur + a[i])</code> 在做什麼？",
    "opts": [
     "排序",
     "選擇「重啟」或「延續」",
     "印出最大值",
     "計算總和"
    ],
    "ans": 1,
    "why": "a[i] = 重啟（從這裡重新開始）；cur+a[i] = 延續前面的連續和。取較大者。"
   },
   {
    "q": "Kadane 的時間複雜度？",
    "opts": [
     "O(1)",
     "O(log n)",
     "O(n)",
     "O(n²)"
    ],
    "ans": 2,
    "why": "一個迴圈跑過全部元素，O(n)。"
   },
   {
    "q": "全負陣列，Kadane 答案應該是？",
    "opts": [
     "0",
     "最大的負數（最不負的）",
     "最小的負數",
     "空陣列總和 0"
    ],
    "ans": 1,
    "why": "題目要求「至少選一個」，所以答案是最大的負數而不是 0。"
   }
  ],
  "code": {
   "task": "第一行 n，第二行 n 個整數，輸出最大連續子陣列和（Kadane）。",
   "stdin": "9\n-2 1 -3 4 -1 2 1 -5 4\n",
   "expect": "6"
  }
 },
 "20": {
  "learn": [
   "APCS 拿分的關鍵：讀清楚 I/O 格式",
   "練習用小例子手算驗證",
   "常見陷阱：邊界、整數溢位、淺拷貝"
  ],
  "try": [
   "改 stdin 框：把 10 換成 5，重新跑",
   "故意傳全部及格的 stdin，看「最高不及格」會印什麼",
   "想想：如果題目改成「最高不及格 + 1」算分？把程式改一下"
  ],
  "quiz": [
   {
    "q": "成績指標題要先做什麼？",
    "opts": [
     "先排序",
     "先找平均",
     "先輸出",
     "先計算總和"
    ],
    "ans": 0,
    "why": "先 sort 才能用一次掃描找到「最高不及格」和「最低及格」。"
   },
   {
    "q": "<code>print(*scores)</code> 跟 <code>print(scores)</code> 差別？",
    "opts": [
     "沒差",
     "* 會展開成空白分隔，沒 * 會印 [...]",
     "* 會更快",
     "* 會錯誤"
    ],
    "ans": 1,
    "why": "print(*lst) 把 list 展開成多個參數，預設用空白分隔；不加星號會印整個 list 含中括號。"
   },
   {
    "q": "全班都及格時，「最高不及格」要輸出什麼？",
    "opts": [
     "0",
     "-1",
     "best case",
     "空白"
    ],
    "ans": 2,
    "why": "題目特別規定：沒人不及格時印 best case；沒人及格時印 worst case。"
   }
  ],
  "code": {
   "task": "第一行 n，第二行 n 個整數成績，輸出及格人數（≥ 60）。",
   "stdin": "5\n55 60 80 30 90\n",
   "expect": "3"
  }
 },
 "21": {
  "learn": [
   "樹的鄰接表 / 父親陣列表示法",
   "前序、中序、後序的差別",
   "用 DFS 算子樹大小（樹 DP 入門）"
  ],
  "try": [
   "把樹改成 6 個節點，重新算子樹大小",
   "加上深度紀錄：寫一個 depth[u] 陣列",
   "試試從非根節點開始 dfs，會發生什麼"
  ],
  "code": {
   "task": "給定 5 節點樹 0-1, 0-2, 1-3, 1-4 (用 children dict 表示)，算出每個節點的子樹大小，一行空白分隔輸出。",
   "stdin": "",
   "expect": "5 3 1 1 1"
  },
  "quiz": [
   {
    "q": "對二元樹做「中序走訪」(in-order) 的順序是？",
    "opts": [
     "根→左→右",
     "左→根→右",
     "左→右→根",
     "右→根→左"
    ],
    "ans": 1,
    "why": "中序 = 左→根→右。對 BST 來說，中序走訪會得到由小到大的排序輸出。"
   },
   {
    "q": "計算「子樹大小」時，為什麼要在 DFS <b>離開節點時</b>（後序）才把 size 加總？",
    "opts": [
     "因為前序比較慢",
     "因為要先算完所有子節點的 size，才能算自己的",
     "因為 Python 不支援前序",
     "因為這樣才不會重訪父節點"
    ],
    "ans": 1,
    "why": "size[u] = 1 + 所有子樹的 size。子樹算完才能算自己——這正是樹 DP 的核心順序。"
   },
   {
    "q": "在 Python 用遞迴 DFS 走一棵 10^5 節點的「鏈狀」深樹，最可能遇到什麼問題？",
    "opts": [
     "TLE 超時",
     "RecursionError（超過預設遞迴深度 1000）",
     "MemoryError",
     "答案算錯"
    ],
    "ans": 1,
    "why": "Python 預設遞迴深度約 1000，深樹要先 sys.setrecursionlimit(10**6)。"
   }
  ]
 },
 "22": {
  "learn": [
   "用鄰接表存圖",
   "BFS 求最短步數",
   "DFS 找連通分量"
  ],
  "try": [
   "把節點數改成 8，邊改 5 條，看分量數變化",
   "BFS 後印出 dist 字典",
   "改用遞迴 DFS 比 stack DFS"
  ],
  "code": {
   "task": "6 節點圖，邊：0-1, 1-2, 3-4。輸出有幾個連通分量。",
   "stdin": "",
   "expect": "3"
  },
  "quiz": [
   {
    "q": "想求「無權重圖」上從起點到各點的最短步數，該用哪個演算法？",
    "opts": [
     "DFS",
     "BFS",
     "Dijkstra",
     "拓樸排序"
    ],
    "ans": 1,
    "why": "BFS 一層一層擴展，第一次碰到某點時走的步數一定最少。有權重才需要 Dijkstra。"
   },
   {
    "q": "用 DFS 數「連通分量」的關鍵做法是？",
    "opts": [
     "對每個還沒拜訪過的節點各啟動一次 DFS，數啟動次數",
     "從節點 0 做一次 DFS 就好",
     "把所有邊排序後合併",
     "用 deque 做層次走訪"
    ],
    "ans": 0,
    "why": "每啟動一次 DFS 就把一整塊連通區域標掉，啟動次數 = 連通分量數。"
   },
   {
    "q": "讀「無向圖」的邊 u, v 時，鄰接表要怎麼存？",
    "opts": [
     "只存 g[u].append(v)",
     "g[u].append(v) 和 g[v].append(u) 都要",
     "存成 g[v].append(u) 就好",
     "用 set 存避免重複"
    ],
    "ans": 1,
    "why": "無向邊兩個方向都能走，所以兩邊都要加；有向圖才只加一邊。"
   }
  ]
 },
 "23": {
  "learn": [
   "Dijkstra 用 heapq 實現",
   "為什麼 BFS 不能處理權重圖",
   "拓樸排序處理 DAG"
  ],
  "try": [
   "把邊權改一改，看 dist 怎麼變",
   "刪掉某條邊，觀察最短路會繞",
   "拓樸排序試一個小 DAG"
  ],
  "code": {
   "task": "用 Dijkstra 求 4 點圖 (0,1,1)(0,2,4)(1,3,1)(2,3,1) 從 0 出發的最短距離，空白分隔輸出。",
   "stdin": "",
   "expect": "0 1 3 2"
  },
  "quiz": [
   {
    "q": "邊有「不同的正權重」時，為什麼不能直接用 BFS 求最短路？",
    "opts": [
     "BFS 太慢",
     "BFS 假設每條邊長度都是 1，權重不同時層數不等於距離",
     "BFS 不能處理環",
     "BFS 只能用在樹上"
    ],
    "ans": 1,
    "why": "BFS 的層數只對「每條邊都一樣長」成立；權重不同就要用 Dijkstra。"
   },
   {
    "q": "Dijkstra 中用 heapq 取出 (d, u) 後，發現 d > dist[u]，該怎麼辦？",
    "opts": [
     "更新 dist[u] = d",
     "直接 continue 跳過（這是過期的紀錄）",
     "把 u 重新 push 回堆",
     "回報錯誤"
    ],
    "ans": 1,
    "why": "同一個點可能被 push 多次，堆裡留有舊的較大距離；遇到過期紀錄跳過即可。"
   },
   {
    "q": "Kahn 拓樸排序跑完後 len(order) < n，代表什麼？",
    "opts": [
     "圖不連通",
     "圖中有環",
     "起點選錯",
     "邊太多"
    ],
    "ans": 1,
    "why": "有環的節點 indegree 永遠減不到 0，不會進入佇列，所以排出的數量會少於 n。"
   }
  ]
 },
 "24": {
  "learn": [
   "DP 三步：狀態 / 轉移 / 邊界",
   "LIS、0/1 背包、LCS 三大經典",
   "為什麼 0/1 背包要倒序"
  ],
  "try": [
   "把 LIS 改成「最長嚴格遞減子序列」",
   "把背包改成「物品可拿無限次」(內層改正序)",
   "用 LCS 算兩段你的姓名共同字元"
  ],
  "code": {
   "task": "0/1 背包：weights=[2,3,4,5], values=[3,4,5,6], W=5，輸出最大價值。",
   "stdin": "",
   "expect": "7"
  },
  "quiz": [
   {
    "q": "LIS 的 O(n²) 解法中，dp[i] 的定義是什麼？",
    "opts": [
     "前 i 個元素的最長遞增子序列長度",
     "以 a[i] 結尾的最長遞增子序列長度",
     "a[i] 是否在 LIS 裡",
     "前 i 個元素的總和"
    ],
    "ans": 1,
    "why": "「以 a[i] 結尾」才能寫出轉移：dp[i] = max(dp[j]+1)，其中 j<i 且 a[j]<a[i]。"
   },
   {
    "q": "0/1 背包用一維 dp[j] 時，內層的容量 j 為什麼要「從大到小」跑？",
    "opts": [
     "比較快",
     "避免同一個物品在同一輪被拿兩次",
     "Python 語法限制",
     "這樣才能處理負數重量"
    ],
    "ans": 1,
    "why": "正序會讓 dp[j-w] 已是「本輪更新過」的值，等於同一物品重複拿；倒序保證用的是上一輪結果。"
   },
   {
    "q": "LIS 的 O(n log n) 解法維護的 tails 陣列，其「內容」代表什麼？",
    "opts": [
     "真正的 LIS 序列本身",
     "各長度遞增子序列的最小可能結尾值",
     "原陣列排序後的結果",
     "已處理元素的前綴最大值"
    ],
    "ans": 1,
    "why": "tails[k] = 長度 k+1 的遞增子序列最小結尾。長度是對的，但內容不是真正的 LIS。"
   }
  ]
 },
 "25": {
  "learn": [
   "find / union 兩個操作",
   "路徑壓縮怎麼做",
   "算連通分量的標準寫法"
  ],
  "try": [
   "把節點改成 10、邊改 4 條，看分量數",
   "加上按秩合併版本",
   "union 同一群兩次，second 回 False 對嗎"
  ],
  "code": {
   "task": "6 點圖，邊：0-1, 1-2, 3-4，用 Union-Find 算連通分量數量。",
   "stdin": "",
   "expect": "3"
  },
  "quiz": [
   {
    "q": "Union-Find 的「路徑壓縮」是做什麼？",
    "opts": [
     "把樹砍半",
     "find 的途中，把沿路節點直接掛到根上，讓之後查詢變快",
     "刪掉重複的邊",
     "把集合排序"
    ],
    "ans": 1,
    "why": "parent[x] = find(parent[x]) 讓整條查詢路徑直接指向根，攤提後接近 O(1)。"
   },
   {
    "q": "union(x, y) 回傳 False（兩點根相同）代表什麼？",
    "opts": [
     "合併失敗要重試",
     "x 和 y 本來就在同一個集合",
     "x 和 y 不存在",
     "發生環"
    ],
    "ans": 1,
    "why": "根相同表示早已連通，不需要合併。很多題目（如判斷加邊是否成環）正是利用這個回傳值。"
   },
   {
    "q": "下列哪個問題「最不適合」用 Union-Find？",
    "opts": [
     "朋友圈分組",
     "Kruskal 最小生成樹",
     "動態加邊判斷兩點是否連通",
     "求帶權圖的最短路徑"
    ],
    "ans": 3,
    "why": "Union-Find 只管「連通與否」，不管距離；最短路徑要用 BFS / Dijkstra。"
   }
  ]
 },
 "26": {
  "learn": [
   "字串 hash 的滾動式公式",
   "Trie 用巢狀 dict 實作",
   "什麼時候該用 hash / KMP / Trie"
  ],
  "try": [
   "在 Trie 插入更多字串，測 starts_with",
   "算 'banana' 的所有後綴 hash",
   "用 in 比 Trie，看哪個快"
  ],
  "code": {
   "task": "建立含 app/apple/ape/bat 四個字串的 Trie，依序輸出 starts_with('ap'), starts_with('ba'), starts_with('cat') 三行 True/False。",
   "stdin": "",
   "expect": "True\nTrue\nFalse"
  },
  "quiz": [
   {
    "q": "字串 hash 預處理後，比對任意兩段子字串是否相同要多少時間？",
    "opts": [
     "O(n)",
     "O(log n)",
     "O(1)",
     "O(n log n)"
    ],
    "ans": 2,
    "why": "先 O(n) 算前綴 hash 與次方表，之後任何子字串 hash 都能 O(1) 算出、O(1) 比對。"
   },
   {
    "q": "Trie（前綴樹）插入或查詢一個長度 L 的字串，時間複雜度是？",
    "opts": [
     "O(1)",
     "O(L)",
     "O(log n)",
     "O(n)"
    ],
    "ans": 1,
    "why": "沿著字元一層一層走，每個字元一步，所以是 O(L)，與已存了幾個字串無關。"
   },
   {
    "q": "Trie 程式裡 node['$'] = True 的用途是？",
    "opts": [
     "標記這個節點是某個完整字串的結尾",
     "表示字串含有 $ 字元",
     "節省記憶體",
     "讓 dict 排序"
    ],
    "ans": 0,
    "why": "沒有結尾標記就分不出「apple 有存」跟「只存過 applepie 的前綴 apple」。"
   }
  ]
 },
 "27": {
  "learn": [
   "with open() 安全讀寫",
   "一行一行讀大檔案",
   "pathlib 與 JSON 處理"
  ],
  "try": [
   "把 csv 內容當作多行字串，splitlines 處理",
   "用 json.dumps 美化輸出",
   "試試 indent=2 跟 ensure_ascii=False"
  ],
  "code": {
   "task": "給定三行成績 Alice 90、Bob 85、Cathy 77（可用 splitlines 處理多行字串），算出三人平均分數（四捨五入到 1 位小數）。",
   "stdin": "",
   "expect": "84.0"
  },
  "quiz": [
   {
    "q": "用 with open(...) as f: 讀檔，相比手動 f.close() 的最大好處是？",
    "opts": [
     "讀檔比較快",
     "區塊結束（即使中途出錯）都會自動關檔",
     "可以同時開多個檔",
     "檔案會自動存檔"
    ],
    "ans": 1,
    "why": "with 是 context manager：離開區塊必定關檔，發生例外也不會漏關。"
   },
   {
    "q": "open 的模式 'w' 和 'a' 差在哪？",
    "opts": [
     "'w' 只能寫文字，'a' 能寫二進位",
     "'w' 會把原內容整個蓋掉，'a' 從檔尾附加",
     "'a' 比較快",
     "沒有差別"
    ],
    "ans": 1,
    "why": "'w' = 清空重寫；'a' = append 附加。寫 log 用 'a'，輸出報表用 'w'。"
   },
   {
    "q": "想把 {'name': 'Alice', 'scores': [90, 85]} 這種結構存成檔案再讀回來，最適合的格式是？",
    "opts": [
     "純文字一行一行存",
     "JSON",
     "直接 print 到 stdout",
     "用 str() 寫進 txt"
    ],
    "ans": 1,
    "why": "json.dumps / json.loads 能無損保存巢狀 dict/list 結構，str() 寫出去就很難安全讀回。"
   }
  ]
 },
 "28": {
  "learn": [
   "import / from import 三種寫法",
   "自己拆模組與 __main__",
   "pip 與虛擬環境的角色"
  ],
  "try": [
   "用 math.sqrt 算 144",
   "用 math.gcd 比手寫 gcd",
   "查 math.pi 跟 math.e"
  ],
  "code": {
   "task": "用 math 模組，依序印 sqrt(144), gcd(12,18), round(pi,4) 三行。",
   "stdin": "",
   "expect": "12.0\n6\n3.1416"
  },
  "quiz": [
   {
    "q": "if __name__ == '__main__': 的作用是？",
    "opts": [
     "讓程式跑比較快",
     "只有「直接執行此檔」時才跑裡面的程式，被 import 時不跑",
     "宣告主函式名稱",
     "檢查 Python 版本"
    ],
    "ans": 1,
    "why": "被 import 時 __name__ 是模組名而不是 '__main__'，所以區塊不會執行——工具檔必加。"
   },
   {
    "q": "requirements.txt 的用途是？",
    "opts": [
     "記錄程式的待辦事項",
     "列出專案依賴的套件，讓新環境能一次裝齊",
     "Python 的設定檔",
     "加速 pip"
    ],
    "ans": 1,
    "why": "pip freeze > requirements.txt 產生清單；別人 pip install -r requirements.txt 重現環境。"
   },
   {
    "q": "為什麼不建議寫 from math import *？",
    "opts": [
     "會變慢",
     "會把一堆名字倒進目前命名空間，容易跟自己的變數撞名、來源難追",
     "會出語法錯誤",
     "math 不支援"
    ],
    "ans": 1,
    "why": "import * 讓人看不出函式從哪來，撞名時更難 debug；建議明確列出要用的名字。"
   }
  ]
 },
 "29": {
  "learn": [
   "__init__ 和 self 是什麼",
   "為什麼用 class",
   "繼承與 super()"
  ],
  "try": [
   "新增方法 letter_grade()",
   "加 __repr__ 美化 print",
   "試試 Student 之間用 __eq__ 比較"
  ],
  "code": {
   "task": "定義 Student class（name, score），grade() 回傳 A(>=90)/B(>=80)/C(>=60)/F。建立 Alice(92), Bob(75), Cathy(58)，依序印「名字 等級」三行。",
   "stdin": "",
   "expect": "Alice A\nBob C\nCathy F"
  },
  "quiz": [
   {
    "q": "class 方法的第一個參數 self 代表什麼？",
    "opts": [
     "類別本身",
     "正在操作的「這個物件」自己",
     "父類別",
     "全域變數"
    ],
    "ans": 1,
    "why": "s.is_pass() 等價於 Student.is_pass(s)——self 就是那個 s。"
   },
   {
    "q": "__init__ 方法什麼時候被呼叫？",
    "opts": [
     "import 模組時",
     "用 Student(...) 建立物件的當下自動呼叫",
     "程式結束時",
     "第一次 print 物件時"
    ],
    "ans": 1,
    "why": "__init__ 是建構子：建立物件時自動執行，用來初始化屬性。"
   },
   {
    "q": "子類別的 __init__ 裡寫 super().__init__(name, score) 是在做什麼？",
    "opts": [
     "建立第二個物件",
     "呼叫父類別的建構子，完成父類別那部分的初始化",
     "刪除父類別",
     "複製父類別的所有方法"
    ],
    "ans": 1,
    "why": "先讓父類別把 name/score 設好，子類別再加自己的屬性，避免重寫一遍。"
   }
  ]
 },
 "30": {
  "learn": [
   "try/except 抓特定錯誤",
   "raise 主動丟錯",
   "EAFP 風格的優勢"
  ],
  "try": [
   "故意拼錯 ZeroDivision 看會怎樣",
   "加 except Exception 兜底",
   "自訂 InvalidScore 例外"
  ],
  "code": {
   "task": "輸入字串列表 ['10','0','abc','5']，每行嘗試 100 // int(s)：除 0 印 '除以 0'、非數字印 '不是數字'、正常印商。",
   "stdin": "",
   "expect": "10\n除以 0\n不是數字\n20"
  },
  "quiz": [
   {
    "q": "try 區塊裡發生 ZeroDivisionError，但只寫了 except ValueError:，會怎樣？",
    "opts": [
     "被 ValueError 接住",
     "錯誤沒人接，程式照樣崩潰",
     "自動忽略",
     "Python 自動轉成 ValueError"
    ],
    "ans": 1,
    "why": "except 只接「指定型別（或其子類）」的錯；型別不符就繼續往上拋。"
   },
   {
    "q": "為什麼「except: pass」是壞習慣？",
    "opts": [
     "語法錯誤",
     "會把所有錯誤無聲吞掉，bug 發生了卻完全看不到",
     "跑太慢",
     "只能用一次"
    ],
    "ans": 1,
    "why": "連 NameError、KeyboardInterrupt 都被吞掉，是最難 debug 的寫法。要接就接明確的型別。"
   },
   {
    "q": "finally 區塊的特性是？",
    "opts": [
     "只有出錯時執行",
     "只有沒出錯時執行",
     "不管有沒有出錯都會執行",
     "會把錯誤吃掉"
    ],
    "ans": 2,
    "why": "finally 用來放「無論如何都要做的清理」，例如關檔、釋放資源。"
   }
  ]
 },
 "31": {
  "learn": [
   "assert 隨手測試",
   "unittest 基本架構",
   "系統性 debug 的 4 步驟"
  ],
  "try": [
   "把 is_prime 改錯一個地方，看 assert 哪個會掛",
   "寫 3 個 unittest 測試",
   "用 logging 取代 print"
  ],
  "code": {
   "task": "is_prime(n)：n&lt;2 回 False。對 cases=[(2,True),(3,True),(4,False),(7,True),(9,False),(1,False),(0,False)] 全部 assert 通過時印 'all passed'。",
   "stdin": "",
   "expect": "all passed"
  },
  "quiz": [
   {
    "q": "assert add(2, 3) == 5 在條件為假時會發生什麼？",
    "opts": [
     "印出 warning 繼續跑",
     "拋出 AssertionError",
     "回傳 False",
     "自動修正程式"
    ],
    "ans": 1,
    "why": "assert 條件為假就拋 AssertionError——最輕量的隨手測試。"
   },
   {
    "q": "系統性除錯的第一步是？",
    "opts": [
     "重寫整段程式",
     "找到「一定會出錯」的最小重現輸入",
     "加更多功能",
     "先 commit"
    ],
    "ans": 1,
    "why": "先能穩定重現，後面的二分插 print、假設驗證才有依據。"
   },
   {
    "q": "unittest 中 self.assertFalse(is_prime(1)) 在驗證什麼？",
    "opts": [
     "is_prime(1) 會拋錯",
     "is_prime(1) 回傳 False（1 不是質數）",
     "is_prime 跑得夠快",
     "1 是質數"
    ],
    "ans": 1,
    "why": "1 不是質數，是最常見的邊界案例——測試就是要守住這種邊界。"
   }
  ]
 },
 "32": {
  "learn": [
   "sys.argv 接命令列參數",
   "argparse 寫出有 --help 的工具",
   "拆出 main() 加 __main__ 入口"
  ],
  "try": [
   "改成支援 --quiet 不印詳細",
   "加上負分檢查",
   "用 - 代表讀 stdin"
  ],
  "code": {
   "task": "模擬 args=['85','--strict']，若有 --strict 用 70 為門檻，否則 60。輸出 '及格' 或 '不及格'。",
   "stdin": "",
   "expect": "及格"
  },
  "quiz": [
   {
    "q": "執行 python tool.py abc 時，sys.argv 的內容是？",
    "opts": [
     "['abc']",
     "['tool.py', 'abc']",
     "['python', 'tool.py', 'abc']",
     "['abc', 'tool.py']"
    ],
    "ans": 1,
    "why": "sys.argv[0] 是腳本檔名本身，使用者參數從 [1] 開始。"
   },
   {
    "q": "argparse 中 action='store_true' 的參數（如 --strict）代表？",
    "opts": [
     "必須給一個字串值",
     "是開關旗標：有寫就是 True，沒寫就是 False",
     "只接受 'true' 字串",
     "會儲存到檔案"
    ],
    "ans": 1,
    "why": "旗標型參數不吃值；出現即 True。"
   },
   {
    "q": "用 argparse 的程式，使用者執行 python tool.py --help 會看到什麼？",
    "opts": [
     "錯誤訊息",
     "自動產生的使用說明（含每個參數的 help 文字）",
     "程式照常執行",
     "空白"
    ],
    "ans": 1,
    "why": "argparse 免費送你 --help：說明文字就是 add_argument 時寫的 help。"
   }
  ]
 },
 "33": {
  "learn": [
   "csv.reader / DictReader",
   "sorted + lambda 排名",
   "什麼時候改用 pandas"
  ],
  "try": [
   "改成算中位數",
   "印各分級人數 (Counter)",
   "sorted 改成印前 5 名"
  ],
  "code": {
   "task": "csv: name,score 列為 Alice 92, Bob 75, Cathy 88, David 55, Eve 67。輸出平均（1 位小數）跟最高分兩行。",
   "stdin": "",
   "expect": "75.4\n92"
  },
  "quiz": [
   {
    "q": "csv.DictReader 讀出來的每一列是什麼型態？",
    "opts": [
     "list",
     "dict（欄名 → 值）",
     "tuple",
     "str"
    ],
    "ans": 1,
    "why": "DictReader 用第一列當欄名，之後每列變成 dict，row['score'] 比 row[1] 好讀。"
   },
   {
    "q": "csv 模組讀出來的數字欄位（如 '90'）要注意什麼？",
    "opts": [
     "自動是 int",
     "全部都是字串，要自己 int() / float() 轉型",
     "會四捨五入",
     "讀不出來"
    ],
    "ans": 1,
    "why": "csv 不帶型別資訊，讀出來一律是 str；算統計前記得轉型。"
   },
   {
    "q": "在 Windows 上寫 CSV 出現「每筆資料之間多一個空白行」，最可能漏了什麼？",
    "opts": [
     "encoding='utf-8'",
     "open(..., newline='')",
     "f.close()",
     "w.writeheader()"
    ],
    "ans": 1,
    "why": "不加 newline='' 時，csv 模組與 Windows 的換行轉換疊加，會多出空行。"
   }
  ]
 },
 "34": {
  "learn": [
   "requests.get + r.json()",
   "HTTP 動詞 GET/POST/PUT/DELETE",
   "Timeout 與 raise_for_status"
  ],
  "try": [
   "把 JSON 多加幾個欄位",
   "用 json.dumps 反向轉回字串",
   "練 try/except 接 Timeout"
  ],
  "code": {
   "task": "解析示範用 JSON（含 login=torvalds、name=Linus Torvalds、public_repos=7、followers=200000）。第一行印「login - name」，第二行印「repos=7」。",
   "stdin": "",
   "expect": "torvalds - Linus Torvalds\nrepos=7"
  },
  "quiz": [
   {
    "q": "requests 取得的回應 r，要把 JSON body 變成 Python dict 該用？",
    "opts": [
     "r.text",
     "r.json()",
     "json(r)",
     "r.dict()"
    ],
    "ans": 1,
    "why": "r.json() 自動解析；r.text 只是原始字串。"
   },
   {
    "q": "r.raise_for_status() 的作用是？",
    "opts": [
     "重新發送請求",
     "若狀態碼是 4xx/5xx 就拋出例外",
     "印出狀態碼",
     "清除快取"
    ],
    "ans": 1,
    "why": "成功 (2xx) 時什麼都不做；失敗時拋 HTTPError，逼你正視錯誤而不是拿壞資料繼續算。"
   },
   {
    "q": "呼叫外部 API 時建議都帶上 timeout=...，為什麼？",
    "opts": [
     "讓 API 回應更快",
     "避免對方不回應時，程式永遠卡住",
     "省流量",
     "防止被封鎖"
    ],
    "ans": 1,
    "why": "沒有 timeout 時，連線掛掉程式就無限等待；設了至少會拋 Timeout 讓你處理。"
   }
  ]
 },
 "35": {
  "learn": [
   "把多章節整合成完整小程式",
   "JSON 持久化資料",
   "終端機遊戲的核心：迴圈 + 狀態"
  ],
  "try": [
   "把猜數字加上『3 次內猜中得高分』",
   "成績管理改成排序輸出",
   "2048 加上勝負判斷"
  ],
  "code": {
   "task": "target=42，依序猜 [50,25,37,43,40,42]：猜的數字小於 target 印「再大一點」、大於印「再小一點」、相等印「中了！」後停止。每行格式：「數字 → 訊息」。",
   "stdin": "",
   "expect": "50 → 再小一點\n25 → 再大一點\n37 → 再大一點\n43 → 再小一點\n40 → 再大一點\n42 → 中了！"
  },
  "quiz": [
   {
    "q": "random.randint(1, 100) 可能產生的值範圍是？",
    "opts": [
     "1 到 99",
     "1 到 100（兩端都含）",
     "0 到 100",
     "0 到 99"
    ],
    "ans": 1,
    "why": "randint 是「雙端皆含」——這點跟 range(1, 100) 不一樣，常被搞混。"
   },
   {
    "q": "猜數字遊戲中，把 int(input()) 包在 try/except ValueError 裡是為了？",
    "opts": [
     "加速輸入",
     "使用者亂打非數字時不讓程式崩潰，提示後繼續",
     "隱藏答案",
     "限制猜的次數"
    ],
    "ans": 1,
    "why": "int('abc') 會拋 ValueError；接住它、提示重輸入，遊戲才不會被一個手滑打死。"
   },
   {
    "q": "成績管理系統用 json + Path 存檔的目的為何？",
    "opts": [
     "讓程式跑得更快",
     "程式關掉再開，資料還在（持久化）",
     "加密資料",
     "減少程式碼行數"
    ],
    "ans": 1,
    "why": "資料放記憶體 dict 程式結束就消失；寫進 students.json 才能下次 load() 回來。"
   }
  ]
 },
 "36": {
  "learn": [
   "HTTP 是「請求-回應」模型",
   "狀態碼 200/404/403/429 的意思",
   "GET / POST 的差別"
  ],
  "try": [
   "把 response 字串裡的 200 改成 404，看程式還跑得對嗎",
   "加一個 header「Server: nginx」並印出來",
   "試著解析 body 是 JSON 的版本：body 改成 <code>{\"name\":\"Alice\"}</code>，用 json.loads 解析"
  ],
  "code": {
   "task": "解析下方 stdin 給的 HTTP response 字串（headers 與 body 已用 |||| 分隔），輸出兩行：第一行「狀態碼 數字」，第二行「body 長度 數字」。",
   "stdin": "HTTP/1.1 200 OK\nContent-Type: text/plain\n||||Hello\n",
   "expect": "狀態碼 200\nbody 長度 5"
  },
  "quiz": [
   {
    "q": "瀏覽器打開網頁時，「request」和「response」分別是誰發給誰？",
    "opts": [
     "都是伺服器發的",
     "request：瀏覽器→伺服器；response：伺服器→瀏覽器",
     "request：伺服器→瀏覽器；response：瀏覽器→伺服器",
     "都是瀏覽器發的"
    ],
    "ans": 1,
    "why": "瀏覽器先發 request 要內容，伺服器回 response 給 HTML。爬蟲就是自己當瀏覽器發 request。"
   },
   {
    "q": "爬蟲收到狀態碼 429 代表什麼？",
    "opts": [
     "找不到頁面",
     "伺服器壞了",
     "請求太頻繁，被限流了",
     "成功"
    ],
    "ans": 2,
    "why": "429 Too Many Requests＝你打太快。該放慢速度或用指數退避重試。404 是找不到、500 是伺服器錯誤。"
   },
   {
    "q": "GET 和 POST 的主要差別是？",
    "opts": [
     "GET 比較快",
     "GET 用於讀取、參數在 URL；POST 用於送出資料、參數在 body",
     "POST 不能帶參數",
     "GET 只能用在 HTTPS"
    ],
    "ans": 1,
    "why": "讀資料用 GET（參數接在 ?a=1&b=2）；登入、留言這種「送資料」用 POST（資料放 request body）。"
   }
  ]
 },
 "37": {
  "learn": [
   "用 requests.get 抓網頁",
   "用 params= 帶查詢字串",
   "永遠設 timeout + 接住 RequestException"
  ],
  "try": [
   "把 params 加一個 <code>\"safe\":\"off\"</code>，重新組 URL",
   "改 base 成 <code>http://example.com/api</code>，看 urlparse 怎麼拆",
   "故意把 status_code 改成 404，加 if 判斷印錯誤訊息"
  ],
  "code": {
   "task": "用 urllib.parse 把 base=\"https://api.example.com/v1\" 跟 params={\"page\":3,\"q\":\"apcs\"} 組成完整 URL，輸出該 URL。",
   "stdin": "",
   "expect": "https://api.example.com/v1?page=3&q=apcs"
  },
  "quiz": [
   {
    "q": "requests 抓回的圖片檔該用哪個屬性拿內容？",
    "opts": [
     "r.text",
     "r.content",
     "r.json()",
     "r.headers"
    ],
    "ans": 1,
    "why": "r.content 是 bytes，適合圖片、檔案；r.text 是解碼後的字串，給 HTML / JSON 用。"
   },
   {
    "q": "想在 URL 加上查詢字串（如 ?q=apcs&page=2），建議的寫法是？",
    "opts": [
     "自己用 + 拼字串",
     "requests.get(url, params={'q': 'apcs', 'page': 2})",
     "用 POST 傳",
     "寫進 headers"
    ],
    "ans": 1,
    "why": "params= 會自動做 URL 編碼（空格、中文都處理好），比手拼字串安全。"
   },
   {
    "q": "有些網站擋 Python 爬蟲，最常見的第一步偽裝是？",
    "opts": [
     "換 IP",
     "設定 User-Agent header 假裝是瀏覽器",
     "改用 POST",
     "加 timeout"
    ],
    "ans": 1,
    "why": "requests 預設 UA 是 python-requests/x.x，很多網站直接擋；帶上瀏覽器的 User-Agent 是基本功。"
   }
  ]
 },
 "38": {
  "learn": [
   "HTML 是有 tag/attr/text/children 的樹",
   "class 可多個、id 唯一",
   "用 DevTools 找定位特徵"
  ],
  "try": [
   "把 html_doc 多加一個 <code>&lt;li&gt;新聞 C&lt;/li&gt;</code>，看 tag 數變化",
   "在 TreePrinter 加上「只印 a 標籤的 href」",
   "改成印「每個 li 裡的文字」"
  ],
  "code": {
   "task": "用 html.parser 計算下方 HTML 字串中 &lt;li&gt; 標籤的數量並輸出。HTML 字串：<code>\"&lt;ul&gt;&lt;li&gt;A&lt;/li&gt;&lt;li&gt;B&lt;/li&gt;&lt;li&gt;C&lt;/li&gt;&lt;/ul&gt;\"</code>",
   "stdin": "",
   "expect": "3"
  },
  "quiz": [
   {
    "q": "HTML 的 id 和 class 屬性，差別是？",
    "opts": [
     "沒有差別",
     "id 全頁唯一；class 可重複、一個元素可有多個",
     "class 全頁唯一；id 可重複",
     "id 只能用在 div"
    ],
    "ans": 1,
    "why": "id 像身分證（唯一），class 像標籤（可貼很多張）。爬蟲定位元素主要靠這兩個。"
   },
   {
    "q": "HTML 文件的結構本質上是？",
    "opts": [
     "一張表格",
     "一棵樹（巢狀的節點）",
     "一條清單",
     "一個 dict"
    ],
    "ans": 1,
    "why": "html → body → ul → li… 層層巢狀就是樹；所以才能用「父子、後代」的方式定位。"
   },
   {
    "q": "網頁上的超連結通常放在哪個 tag 的哪個屬性？",
    "opts": [
     "<a> 的 href",
     "<img> 的 src",
     "<div> 的 class",
     "<p> 的 text"
    ],
    "ans": 0,
    "why": "<a href=\"/news/1\">標題</a>——抓連結就是抓 a 標籤的 href 屬性。"
   }
  ]
 },
 "39": {
  "learn": [
   "find / find_all 的差別",
   "CSS selector 怎麼寫",
   "從 Tag 物件取 .text 和 [attr]"
  ],
  "try": [
   "在 html 字串多加一個 <code>&lt;a href=\"/news/3\"&gt;新聞三&lt;/a&gt;</code>",
   "改 LinkGrabber 只記錄「外部連結」(href 開頭 http)",
   "加上記錄 li 標籤裡的文字（看怎麼跨標籤累積）"
  ],
  "code": {
   "task": "用 html.parser 抓出下方 HTML 字串中第一個 &lt;title&gt; 標籤的文字並輸出。HTML：<code>\"&lt;html&gt;&lt;head&gt;&lt;title&gt;APCS 教學&lt;/title&gt;&lt;/head&gt;&lt;body&gt;hi&lt;/body&gt;&lt;/html&gt;\"</code>",
   "stdin": "",
   "expect": "APCS 教學"
  },
  "quiz": [
   {
    "q": "BeautifulSoup 中 find 和 find_all 的差別？",
    "opts": [
     "find 比較快",
     "find 回傳第一個符合的 Tag；find_all 回傳全部（list）",
     "find_all 只找一個",
     "find 回傳 list"
    ],
    "ans": 1,
    "why": "要一筆用 find / select_one，要全部用 find_all / select。"
   },
   {
    "q": "用 BeautifulSoup 依 class 找元素時，參數要寫 class_（多一條底線），為什麼？",
    "opts": [
     "官方拼錯了",
     "因為 class 是 Python 關鍵字，不能當參數名",
     "為了跟 CSS 區別",
     "舊版相容"
    ],
    "ans": 1,
    "why": "class 在 Python 是保留字，所以 bs4 用 class_ 代替。"
   },
   {
    "q": "soup.select(\"div.news h2\") 會選到什麼？",
    "opts": [
     "class=news 的 h2",
     "所有 div 和所有 h2",
     "class 為 news 的 div 底下的所有 h2（後代）",
     "第一個 h2"
    ],
    "ans": 2,
    "why": "CSS selector 的空格代表「後代」：先找 div.news，再在它裡面找 h2。"
   }
  ]
 },
 "40": {
  "learn": [
   "「外圈容器 → 內圈欄位 → 打包 dict」三步驟",
   "欄位可能缺失，用 if 防呆",
   "pd.read_html 一行解決乾淨表格"
  ],
  "try": [
   "多加一筆新聞看 len 變化",
   "在 dict 加一個 \"source\": \"example.com\" 欄位",
   "改成只收集 title 字數大於 5 的新聞"
  ],
  "code": {
   "task": "從 stdin 讀一段 HTML（一行一筆，每筆格式：「TITLE|URL」），組成 dict 清單。輸出每筆「URL TITLE」，共幾行就有幾行。",
   "stdin": "新聞一|/a\n新聞二|/b\n新聞三|/c\n",
   "expect": "/a 新聞一\n/b 新聞二\n/c 新聞三"
  },
  "quiz": [
   {
    "q": "爬「列表頁」的標準三步驟是？",
    "opts": [
     "下載→存檔→關閉",
     "外圈選容器、內圈挖欄位、打包成 dict",
     "登入→搜尋→下載",
     "排序→去重→輸出"
    ],
    "ans": 1,
    "why": "先 select 每筆資料的容器（外圈），在容器內挖 title/url/date（內圈），組成 dict append 進 list（打包）。"
   },
   {
    "q": "card.select_one(\"span.date\") 可能回傳 None，直接 .get_text() 會怎樣？",
    "opts": [
     "回傳空字串",
     "拋 AttributeError 程式崩潰",
     "自動跳過",
     "回傳 None"
    ],
    "ans": 1,
    "why": "None 沒有 get_text 方法。要先檢查：date = el.get_text(strip=True) if el else \"未知\"。"
   },
   {
    "q": "爬蟲最終把資料整理成 list of dict 的好處是？",
    "opts": [
     "比較省記憶體",
     "可以直接丟給 CSV / JSON / pandas 等後續處理",
     "網站比較不會擋",
     "程式碼比較短"
    ],
    "ans": 1,
    "why": "[{title, url, date}, ...] 是結構化資料的通用格式，銜接儲存與分析都是一行的事。"
   }
  ]
 },
 "41": {
  "learn": [
   "三種分頁模式：路徑、query、next 連結",
   "用 set 去重",
   "time.sleep 做禮貌延遲"
  ],
  "try": [
   "把 fake page 3 全部改成重複 id，看結束條件對不對",
   "加 max_page=3 的上限提早終止",
   "在每次 fetch 後加 time.sleep(0.1)"
  ],
  "code": {
   "task": "輸入多行 id（每行一個整數）。讀完後用 set 去重，依升冪輸出（一行一個）。",
   "stdin": "3\n1\n4\n1\n5\n3\n2\n",
   "expect": "1\n2\n3\n4\n5"
  },
  "quiz": [
   {
    "q": "網站用「下一頁」連結分頁（沒有總頁數）時，爬取迴圈通常怎麼寫？",
    "opts": [
     "for page in range(100)",
     "while url: 抓完從頁面找 a.next，沒有就設 url=None 結束",
     "遞迴呼叫自己 1000 次",
     "一次抓全部"
    ],
    "ans": 1,
    "why": "從每頁解析出下一頁連結，直到找不到為止——三種分頁型態中最通用的寫法。"
   },
   {
    "q": "爬取迴圈裡用 set 記錄已看過的 id，是為了？",
    "opts": [
     "排序",
     "去重，並可偵測「整頁都重複」時提早停止",
     "加密",
     "壓縮資料"
    ],
    "ans": 1,
    "why": "set 查「看過沒」是 O(1)；如果某頁全是看過的 id，多半已到資料尾端，可以 break。"
   },
   {
    "q": "用 params={'page': page} 翻頁對應的是哪種分頁型態？",
    "opts": [
     "路徑分頁 /list/2",
     "查詢字串分頁 ?page=2",
     "下一頁連結",
     "無限捲動"
    ],
    "ans": 1,
    "why": "查詢字串分頁的頁碼在 ?page=N，正好用 params 帶。路徑分頁則是直接組 URL。"
   }
  ]
 },
 "42": {
  "learn": [
   "CSV 用 DictWriter / DictReader 寫讀",
   "Excel 中文：encoding=\"utf-8-sig\"",
   "JSON 用 indent + ensure_ascii=False"
  ],
  "try": [
   "把 rows 加一筆「新聞 D / /d / 500」",
   "改 fieldnames 順序，看 CSV 表頭變化",
   "把 indent 改成 4，比較長相"
  ],
  "code": {
   "task": "把以下三筆資料 [{\"name\":\"Alice\",\"age\":17},{\"name\":\"Bob\",\"age\":18},{\"name\":\"Cara\",\"age\":16}] 用 json.dumps 序列化（ensure_ascii=False, indent 不設）並輸出。",
   "stdin": "",
   "expect": "[{\"name\": \"Alice\", \"age\": 17}, {\"name\": \"Bob\", \"age\": 18}, {\"name\": \"Cara\", \"age\": 16}]"
  },
  "quiz": [
   {
    "q": "寫給 Excel 開的中文 CSV，encoding 建議用？",
    "opts": [
     "utf-8",
     "utf-8-sig",
     "big5",
     "ascii"
    ],
    "ans": 1,
    "why": "utf-8-sig 會加 BOM，Excel 才認得出是 UTF-8，中文不亂碼。"
   },
   {
    "q": "資料有巢狀結構（dict 裡有 list）時，存 CSV 還是 JSON？",
    "opts": [
     "CSV，比較通用",
     "JSON，能無損保留巢狀結構",
     "都一樣",
     "存成 txt"
    ],
    "ans": 1,
    "why": "CSV 是扁平表格，塞巢狀資料會變成難解析的字串；JSON 天生支援巢狀。"
   },
   {
    "q": "json.dump(data, f, ensure_ascii=False) 中 ensure_ascii=False 的作用？",
    "opts": [
     "加密",
     "讓中文直接存成中文，而不是 \\uXXXX 跳脫碼",
     "壓縮檔案",
     "檢查格式"
    ],
    "ans": 1,
    "why": "預設 True 會把非 ASCII 轉成 \\u4e2d\\u6587 這種跳脫碼；False 存出人類可讀的中文。"
   }
  ]
 },
 "43": {
  "learn": [
   "看 robots.txt 再爬",
   "retry + 指數退避處理 429",
   "寫進度檔做斷點續傳"
  ],
  "try": [
   "把 max_retry 改成 6，成功率會變多少？",
   "改 random seed，重新跑看結果不一樣",
   "加上「總嘗試次數超過 20 就停止」的保險"
  ],
  "code": {
   "task": "模擬指數退避：給定起始等待秒數 base=1，最多 retry 5 次，每次等待時間是 base * 2^i (i 從 0 算起)。輸出每次等待秒數，一行一個（共 5 行）。",
   "stdin": "",
   "expect": "1\n2\n4\n8\n16"
  },
  "quiz": [
   {
    "q": "robots.txt 的用途是？",
    "opts": [
     "網站的密碼檔",
     "網站宣告「哪些路徑允許/禁止爬蟲、建議間隔」的公告",
     "加速爬蟲",
     "儲存使用者資料"
    ],
    "ans": 1,
    "why": "先讀 robots.txt 確認 Disallow 與 Crawl-delay，是當個有禮貌爬蟲的第一步。"
   },
   {
    "q": "「指數退避」(exponential backoff) 是指？",
    "opts": [
     "每次重試等的時間翻倍（1s、2s、4s…）",
     "每次重試等固定 1 秒",
     "重試次數翻倍",
     "立刻重試到成功為止"
    ],
    "ans": 0,
    "why": "被限流(429)時等 2^attempt 秒再試，給伺服器喘息空間，也降低再次被擋的機率。"
   },
   {
    "q": "下列哪個行為可能讓爬蟲變成「攻擊」？",
    "opts": [
     "加 timeout",
     "每次請求間隔 2 秒",
     "每秒對同一網站發出數百次請求",
     "遵守 robots.txt"
    ],
    "ans": 2,
    "why": "高頻轟炸等同 DDoS，可能造成服務癱瘓並有法律責任。限速是底線。"
   }
  ]
 },
 "44": {
  "learn": [
   "DataFrame 是 Python 版的 Excel",
   "Series=一欄, DataFrame=多欄, Index=列號",
   "pandas 適合 10 萬列以上、需要重複處理的場景"
  ],
  "try": [
   "加一筆「Eve, 78, 新北」看統計結果",
   "改成印「>=85 的人」",
   "加印每個城市的平均分數（用 Counter 不夠，要用 dict）"
  ],
  "code": {
   "task": "給定 stdin 多行，每行格式「name score」（空白分隔）。讀完後輸出兩行：第一行「avg X.X」（一位小數），第二行「max NUM」。",
   "stdin": "Alice 92\nBob 75\nCara 88\nDan 60\n",
   "expect": "avg 78.8\nmax 92"
  },
  "quiz": [
   {
    "q": "pandas 中，一欄資料（如 df[\"score\"]）的型態叫做？",
    "opts": [
     "DataFrame",
     "Series",
     "Index",
     "Array"
    ],
    "ans": 1,
    "why": "Series 是一維（一欄），DataFrame 是二維（整張表）；df[\"score\"] 取出來就是 Series。"
   },
   {
    "q": "下列哪種情境最該從 Excel 換成 pandas？",
    "opts": [
     "只是看一眼 20 列的小表",
     "每天要對 50 萬列資料重複做同樣的篩選彙總",
     "畫一張一次性的圖",
     "填問卷"
    ],
    "ans": 1,
    "why": "大資料量 + 重複性流程是 pandas 的主場：寫成腳本後每天一秒跑完。"
   },
   {
    "q": "pd.DataFrame({\"name\": [...], \"score\": [...]}) 是用什麼結構建表？",
    "opts": [
     "list of list",
     "dict of list（欄名 → 整欄資料）",
     "tuple",
     "set"
    ],
    "ans": 1,
    "why": "dict 的 key 變欄名、value（list）變該欄內容，是最常見的手建 DataFrame 方式。"
   }
  ]
 },
 "45": {
  "learn": [
   "read_csv / read_excel / read_json 三巨頭",
   "encoding=\"utf-8-sig\" 處理中文",
   "head / info / describe 三件套快速看資料"
  ],
  "try": [
   "把 csv_text 多加一行 Frank,82,台南",
   "改 csv 分隔符為 |，看怎麼修",
   "把 score 改成 float，重算 describe"
  ],
  "code": {
   "task": "從 stdin 讀 CSV (第一行是表頭 name,score)，輸出三行：「rows N」「avg X.X」「max NUM」（X.X 一位小數）。",
   "stdin": "name,score\nAlice,92\nBob,75\nCara,88\nDan,60\n",
   "expect": "rows 4\navg 78.8\nmax 92"
  },
  "quiz": [
   {
    "q": "讀 Excel 存的中文 CSV 出現亂碼，read_csv 該加什麼參數？",
    "opts": [
     "sep='\\t'",
     "encoding='utf-8-sig'",
     "header=None",
     "nrows=100"
    ],
    "ans": 1,
    "why": "Excel 存的 CSV 常帶 BOM，用 utf-8-sig 讀才正確。"
   },
   {
    "q": "pd.read_excel(\"a.xlsx\", sheet_name=None) 會回傳什麼？",
    "opts": [
     "第一個工作表的 DataFrame",
     "所有工作表組成的 dict（表名 → DataFrame）",
     "錯誤",
     "空表"
    ],
    "ans": 1,
    "why": "sheet_name=None 是「全部都要」，回傳 {sheet 名: df} 的 dict。"
   },
   {
    "q": "read_csv 的 na_values=[\"-\", \"N/A\"] 是做什麼？",
    "opts": [
     "刪掉這些列",
     "把 '-' 和 'N/A' 這些字串視為缺值 NaN",
     "取代成 0",
     "欄位改名"
    ],
    "ans": 1,
    "why": "真實資料常用 - 或 N/A 表示沒有值；告訴 pandas 把它們當 NaN，後續 isna/fillna 才有效。"
   }
  ]
 },
 "46": {
  "learn": [
   "boolean mask 選列：& | ~ 配合括號",
   "query 寫法更可讀",
   ".loc / .iloc 精準定位"
  ],
  "try": [
   "加一個條件「city 是台中或高雄」",
   "寫一個 grade2 函式：A+(95+)、A(90~95)、B(70~90)、C",
   "練 .loc 寫法：所有分數 <70 加一欄 status=\"補考\""
  ],
  "code": {
   "task": "從 stdin 讀多行「name score」（空白分隔）。輸出分數 >=80 的人，一行一個，格式「name score」，按分數降冪排序。",
   "stdin": "Alice 92\nBob 75\nCara 88\nDan 60\nEve 95\n",
   "expect": "Eve 95\nAlice 92\nCara 88"
  },
  "quiz": [
   {
    "q": "df[df[\"score\"] >= 80] 這種寫法叫做？",
    "opts": [
     "切片 slicing",
     "boolean mask（用條件篩選列）",
     "groupby",
     "merge"
    ],
    "ans": 1,
    "why": "中括號裡是一串 True/False（boolean Series），True 的列被留下——pandas 最常用的選列方式。"
   },
   {
    "q": "兩個條件的篩選，正確寫法是？",
    "opts": [
     "df[df.a > 1 and df.b < 5]",
     "df[(df.a > 1) & (df.b < 5)]",
     "df[df.a > 1 && df.b < 5]",
     "df[df.a > 1, df.b < 5]"
    ],
    "ans": 1,
    "why": "pandas 用 & | ~ 而不是 and or not，且每個條件要括號（運算子優先序問題）。"
   },
   {
    "q": "df.loc[3] 和 df.iloc[3] 的差別？",
    "opts": [
     "完全相同",
     "loc 用 index「標籤」、iloc 用整數「位置」",
     "loc 比較快",
     "iloc 只能選欄"
    ],
    "ans": 1,
    "why": "index 若被改過（如打亂、設成名字），loc[3] 找標籤 3，iloc[3] 永遠是第 4 列。"
   }
  ]
 },
 "47": {
  "learn": [
   "isna / fillna / dropna 處理缺值",
   "astype / pd.to_numeric(errors=\"coerce\") 處理型別",
   "drop_duplicates 去重"
  ],
  "try": [
   "把 raw 加更多髒資料：name=\"Bob\"、score=\"not_a_number\"",
   "改成「缺值補 0」而不是平均",
   "改 keep=\"last\" 邏輯：重複時保留最後一筆"
  ],
  "code": {
   "task": "從 stdin 讀多行 score 字串。把不是純數字的當作缺值，剩下的轉成整數。輸出兩行：第一行「valid N」（有效數量）、第二行「avg X.X」（一位小數）。",
   "stdin": "92\n75\nabc\n88\n\n60\n",
   "expect": "valid 4\navg 78.8"
  },
  "quiz": [
   {
    "q": "想知道每一欄各有幾個缺值，該用？",
    "opts": [
     "df.dropna()",
     "df.isna().sum()",
     "df.fillna(0)",
     "df.count()"
    ],
    "ans": 1,
    "why": "isna() 產生 bool 表，sum() 按欄加總 True 的數量，一行看出髒度。"
   },
   {
    "q": "pd.to_numeric(df[\"price\"], errors=\"coerce\") 中 coerce 的意思是？",
    "opts": [
     "失敗就拋錯",
     "轉不成數字的值變成 NaN",
     "自動四捨五入",
     "跳過該欄"
    ],
    "ans": 1,
    "why": "coerce 讓 '1,200元' 這種轉不了的值變 NaN 而不是整個炸掉，之後再統一處理缺值。"
   },
   {
    "q": "df.drop_duplicates(subset=[\"id\"]) 是做什麼？",
    "opts": [
     "刪掉 id 欄",
     "只依 id 欄判斷重複並刪除重複列",
     "把 id 排序",
     "把 id 設為 index"
    ],
    "ans": 1,
    "why": "subset 指定「判斷重複只看這些欄」；常用於同一筆資料被爬了兩次的情境。"
   }
  ]
 },
 "48": {
  "learn": [
   "mean/median/std/quantile 描述分佈",
   "value_counts 看類別欄",
   "rank / cumsum / cummax 進階統計"
  ],
  "try": [
   "加一筆「Henry, 75, 台北」，看 value_counts 變化",
   "改成印「分數最低的 3 個」(nsmallest)",
   "改 rank 用 dense 方法（並列下一名 +1）"
  ],
  "code": {
   "task": "從 stdin 讀多行整數分數。輸出三行：「median NUM」、「std X.XX」（兩位小數）、「top3 a b c」（最大 3 個從大到小空白分隔）。",
   "stdin": "92\n75\n88\n60\n95\n82\n75\n",
   "expect": "median 82\nstd 12.11\ntop3 95 92 88"
  },
  "quiz": [
   {
    "q": "想一次看到數值欄的 count/mean/std/min/四分位數/max，用哪個？",
    "opts": [
     "df.sum()",
     "df.describe()",
     "df.head()",
     "df.info()"
    ],
    "ans": 1,
    "why": "describe() 是一鍵統計摘要；字串欄要用 include='object'。"
   },
   {
    "q": "想知道 city 欄每個值各出現幾次，最快的寫法？",
    "opts": [
     "df.groupby('city').size() 然後排序",
     "df['city'].value_counts()",
     "for 迴圈數",
     "df['city'].sum()"
    ],
    "ans": 1,
    "why": "value_counts() 直接回傳「值 → 次數」並由多到少排好，是類別欄的必殺技。"
   },
   {
    "q": "找分數最高的前 5 筆，效率較好的寫法是？",
    "opts": [
     "df.sort_values('score').head(5)",
     "df.nlargest(5, 'score')",
     "df.max() 五次",
     "df.iloc[:5]"
    ],
    "ans": 1,
    "why": "nlargest 不用整表排序就能取 Top-K，語意也更清楚。"
   }
  ]
 },
 "49": {
  "learn": [
   "split-apply-combine 三步驟",
   "agg 多種彙總同時做",
   "transform 廣播回原表"
  ],
  "try": [
   "多加幾筆台北的資料，看 city_avg 怎麼變",
   "改成按「city + grade」雙欄分組",
   "加 filter：只保留人數 >=2 的城市"
  ],
  "code": {
   "task": "從 stdin 讀多行「city score」，按 city groupby 算平均分。輸出每組「city avg」（avg 一位小數），按 city 字典序排序。",
   "stdin": "台北 92\n台中 75\n台北 88\n高雄 60\n台北 95\n台中 82\n",
   "expect": "台中 78.5\n台北 91.7\n高雄 60.0"
  },
  "quiz": [
   {
    "q": "groupby 的運作三步驟是？",
    "opts": [
     "read → clean → plot",
     "split（分組）→ apply（各組計算）→ combine（合併結果）",
     "map → filter → reduce",
     "sort → merge → drop"
    ],
    "ans": 1,
    "why": "按鍵值把列拆組、每組各算統計、再合回一張表——樞紐分析的核心模型。"
   },
   {
    "q": "agg 和 transform 的差別是？",
    "opts": [
     "沒有差別",
     "agg 把每組壓成一個值；transform 把結果廣播回原本每一列",
     "transform 比較快",
     "agg 只能算平均"
    ],
    "ans": 1,
    "why": "要做「每人跟自己城市平均比」這種事，就要 transform 把組平均塞回每列。"
   },
   {
    "q": "df.groupby(\"city\")[\"score\"].mean() 回傳的是？",
    "opts": [
     "每個城市的平均分數（一組一個值）",
     "每個學生的平均",
     "全體平均一個數字",
     "原表加一欄"
    ],
    "ans": 0,
    "why": "groupby 後的 mean 是「每組各算一個平均」，index 是組名。"
   }
  ]
 },
 "50": {
  "learn": [
   "concat 拼接同結構資料",
   "merge 4 種 how: inner/left/right/outer",
   "melt / pivot 寬長互轉"
  ],
  "try": [
   "把 students 加一筆 id=6 Eve，重做 outer",
   "改成 right join: 以 scores 為主",
   "用兩個欄位 (id, year) 當 key 試試"
  ],
  "code": {
   "task": "stdin 兩個區塊用空行分隔：第一塊每行「id name」、第二塊每行「id score」。輸出 INNER JOIN 結果，每行「name score」，按 id 升冪排序。",
   "stdin": "1 Alice\n2 Bob\n3 Cara\n4 Dan\n\n1 92\n2 75\n3 88\n5 70\n",
   "expect": "Alice 92\nBob 75\nCara 88"
  },
  "quiz": [
   {
    "q": "merge 時 how=\"left\" 的意思是？",
    "opts": [
     "只保留兩邊都有的 key",
     "以左表為主全保留，右表沒有的補 NaN",
     "以右表為主",
     "隨機保留"
    ],
    "ans": 1,
    "why": "left join：左表一筆不少；右表找不到對應 key 的欄位變 NaN。inner 則是交集。"
   },
   {
    "q": "把 12 個月份、欄位結構相同的 CSV 疊成一張大表，該用？",
    "opts": [
     "merge",
     "pd.concat([...], ignore_index=True)",
     "join",
     "melt"
    ],
    "ans": 1,
    "why": "同結構資料的縱向堆疊用 concat；merge 是按 key 橫向關聯不同欄位的表。"
   },
   {
    "q": "兩表的 key 欄名不同（user_id vs uid）怎麼 merge？",
    "opts": [
     "先改欄名才行",
     "df1.merge(df2, left_on='user_id', right_on='uid')",
     "不能 merge",
     "用 concat"
    ],
    "ans": 1,
    "why": "left_on / right_on 分別指定兩邊的 key 欄名，不必先 rename。"
   }
  ]
 },
 "51": {
  "learn": [
   "plot/bar/hist 三大圖型",
   "pandas 內建 .plot() 比 matplotlib 直觀",
   "中文要設 font.sans-serif"
  ],
  "try": [
   "加多幾筆資料，看 histogram bucket 怎麼變",
   "改成印「分數中位數」而不是平均",
   "把 bar chart 改成橫式 (barh)"
  ],
  "code": {
   "task": "從 stdin 讀多行整數分數，用 ASCII 印每個分數桶 (0-9, 10-19, ..., 90-99, 100) 的人數，每行格式「Start-End: ★★★」（n 個 ★），跳過空桶。",
   "stdin": "92\n75\n88\n95\n82\n75\n80\n90\n",
   "expect": "70-79: ★★\n80-89: ★★★\n90-99: ★★★"
  },
  "quiz": [
   {
    "q": "想看「分數的分布」（集中在哪、散得多開），最適合的圖是？",
    "opts": [
     "折線圖",
     "圓餅圖",
     "直方圖 hist",
     "散佈圖"
    ],
    "ans": 2,
    "why": "直方圖把數值切成 bins 數每格的數量，分布形狀一目了然；折線適合趨勢、長條適合分類比較。"
   },
   {
    "q": "「各城市銷售總額比較」最適合用？",
    "opts": [
     "長條圖 bar",
     "直方圖",
     "折線圖",
     "盒鬚圖"
    ],
    "ans": 0,
    "why": "分類（城市）之間比大小用長條圖；時間趨勢才用折線。"
   },
   {
    "q": "plt.subplots(2, 2) 的用途是？",
    "opts": [
     "畫 2 條線",
     "建立 2×2 共 4 格子圖的版面",
     "放大圖 2 倍",
     "存 2 個檔案"
    ],
    "ans": 1,
    "why": "回傳 fig 和 axes 陣列，把不同圖畫到 axes[i][j]，最後 tight_layout() 排版。"
   }
  ]
 },
 "52": {
  "learn": [
   "Bot 就是事件迴圈 + 處理器註冊",
   "Webhook vs Gateway 兩種模式",
   "Token 放 .env，永遠不要 push 上 git"
  ],
  "try": [
   "加一個 @on(\"message_delete\") 處理器",
   "在 handle_message 多加 !time 指令印當下時間",
   "把不認識的指令統一回「不認識的指令」"
  ],
  "code": {
   "task": "寫一個事件分派器：handlers 是 dict, key=事件類型, value=函式。從 stdin 讀多行「TYPE DATA」，每行查 handlers 並執行；找不到印「unknown TYPE」。給定 handlers = {\"hi\": lambda d: print(f\"hello {d}\"), \"bye\": lambda d: print(f\"goodbye {d}\")}。",
   "stdin": "hi alice\nbye bob\nfoo cara\nhi dan\n",
   "expect": "hello alice\ngoodbye bob\nunknown foo\nhello dan"
  },
  "quiz": [
   {
    "q": "Webhook 模式和 Long Polling / Gateway 模式的差別是？",
    "opts": [
     "沒有差別",
     "Webhook 是平台主動 POST 到你的網址；Gateway 是你的程式主動連著平台等訊息",
     "Webhook 比較舊",
     "Gateway 需要公開網址"
    ],
    "ans": 1,
    "why": "Webhook 需要公開網址（LINE 預設）；Gateway/long polling 本機就能跑（discord.py 預設）。"
   },
   {
    "q": "Bot 程式的核心骨架是？",
    "opts": [
     "跑一次就結束的腳本",
     "一個永不結束的事件迴圈：等事件→找對應 handler→處理",
     "定時器",
     "資料庫"
    ],
    "ans": 1,
    "why": "while True 等事件、依事件類型分派處理函式——discord.py 已幫你寫好迴圈，你只註冊 handler。"
   },
   {
    "q": "Bot Token 為什麼絕對不能 push 上 GitHub？",
    "opts": [
     "檔案太大",
     "Token 等於 Bot 的帳號密碼，外洩等於任何人都能操控你的 Bot",
     "會讓程式變慢",
     "GitHub 不支援"
    ],
    "ans": 1,
    "why": "Token 是身分憑證。要放 .env 並把 .env 加入 .gitignore，程式用 os.getenv 讀。"
   }
  ]
 },
 "53": {
  "learn": [
   "Discord Bot 三步：申請→邀請→寫 code",
   "必開 MESSAGE CONTENT INTENT 才收得到訊息",
   "async/await + asyncio.sleep（不能用 time.sleep）"
  ],
  "try": [
   "加一個 !echo 指令把後面的字原樣回傳",
   "改 !add 支援浮點數",
   "加邊界：args 超過 10 個就拒絕"
  ],
  "code": {
   "task": "寫指令分派器，prefix=!。實作 !sum a b c 印「sum=N」, !max a b c 印「max=N」, !min a b c 印「min=N」。從 stdin 讀多行訊息，逐行處理；非指令或不認識的不要印任何東西。",
   "stdin": "!sum 3 5 8\nhello\n!max 1 9 4\n!min 7 2 8\n!bad 1 2\n",
   "expect": "sum=16\nmax=9\nmin=2"
  },
  "quiz": [
   {
    "q": "Discord Bot 收不到任何訊息內容，最常見的原因是？",
    "opts": [
     "網路問題",
     "沒在開發者後台開啟 MESSAGE CONTENT INTENT",
     "Token 過期",
     "程式沒有 print"
    ],
    "ans": 1,
    "why": "沒開這個 intent，on_message 收到的 message.content 是空的——新手第一大坑。"
   },
   {
    "q": "on_message 裡為什麼第一行通常是「if message.author == client.user: return」？",
    "opts": [
     "禮貌",
     "避免 Bot 回覆自己的訊息造成無限迴圈",
     "加速",
     "官方規定"
    ],
    "ans": 1,
    "why": "Bot 自己發的訊息也會觸發 on_message；不擋掉就會自問自答到天荒地老。"
   },
   {
    "q": "Discord Token 正確的存放方式是？",
    "opts": [
     "寫死在程式碼裡",
     "存 .env 檔，用 load_dotenv() + os.getenv() 讀，並把 .env 加進 .gitignore",
     "存在 README",
     "貼在伺服器公告"
    ],
    "ans": 1,
    "why": "程式碼會進版本控制，憑證必須隔離在環境變數/秘密管理中。"
   }
  ]
 },
 "54": {
  "learn": [
   "commands.Bot 比 Client 強：自動解析參數型別",
   "Cog 拆檔組織指令",
   "Slash command 用 @bot.tree.command + tree.sync"
  ],
  "try": [
   "加 sub 指令做減法",
   "加 max 接 *args 變動參數",
   "改 repeat times>10 拒絕（防呆）"
  ],
  "code": {
   "task": "實作型別轉換分派器：commands={\"sum\": (lambda *xs: sum(xs), int), \"join\": (lambda *xs: \"-\".join(xs), str)}。從 stdin 讀「name arg1 arg2 ...」，把參數依型別轉換後呼叫並印結果。",
   "stdin": "sum 1 2 3\njoin a b c\nsum 10 20\n",
   "expect": "6\na-b-c\n30"
  },
  "quiz": [
   {
    "q": "commands.Bot 的指令函式參數寫 a: int 有什麼效果？",
    "opts": [
     "僅是註解",
     "discord.py 會自動把使用者輸入的字串轉成 int，失敗回錯誤提示",
     "限制只有管理員可用",
     "沒有作用"
    ],
    "ans": 1,
    "why": "型別註記在這裡是「轉換器」：!add 3 5 會自動變成整數 3 和 5。"
   },
   {
    "q": "Cog 的用途是？",
    "opts": [
     "加速 Bot",
     "把相關指令組織成 class、拆檔案管理，方便大型 Bot 維護",
     "加密訊息",
     "儲存資料"
    ],
    "ans": 1,
    "why": "指令一多就拆成 cogs/xxx_cog.py，主程式 load_extension 載入。"
   },
   {
    "q": "commands.Bot(command_prefix=\"!\") 中 prefix 的作用是？",
    "opts": [
     "Bot 的名字",
     "訊息開頭符合 ! 才會被當成指令解析",
     "頻道名稱",
     "版本號"
    ],
    "ans": 1,
    "why": "prefix 區分「聊天」和「指令」：!hello 是指令，hello 只是普通訊息。"
   }
  ]
 },
 "55": {
  "learn": [
   "LINE Bot = Flask webhook + line-bot-sdk",
   "ngrok 把本機 5000 port 開到網上",
   "reply_token 用 1 次 30 秒、push 才能主動找人"
  ],
  "try": [
   "加 sticker 訊息處理（印 sticker_id）",
   "加 location 訊息處理（印經緯度）",
   "把 !ping 改成回時間"
  ],
  "code": {
   "task": "寫 webhook event 分派器：handlers={\"message\": lambda e: print(f\"reply {e[\\\"text\\\"]}\"), \"follow\": lambda e: print(\"welcome\")}。從 stdin 讀多行「TYPE TEXT」(follow 沒 TEXT)，組成 event dict 後 dispatch。",
   "stdin": "message hi\nfollow\nmessage bye\n",
   "expect": "reply hi\nwelcome\nreply bye"
  },
  "quiz": [
   {
    "q": "LINE Bot 的 /callback 路由要驗證 X-Line-Signature，目的是？",
    "opts": [
     "統計流量",
     "確認請求真的來自 LINE 平台而不是偽造的",
     "加速回應",
     "記錄使用者"
    ],
    "ans": 1,
    "why": "用 Channel Secret 驗簽名，否則任何人 POST 到你的網址都能假冒 LINE 觸發 Bot。"
   },
   {
    "q": "LINE Messaging API 需要的兩個關鍵憑證是？",
    "opts": [
     "帳號和密碼",
     "Channel Secret 和 Channel Access Token",
     "API Key 和 User ID",
     "Email 和 Token"
    ],
    "ans": 1,
    "why": "Secret 用於驗證 webhook 簽名；Access Token 用於呼叫回覆/推播 API。"
   },
   {
    "q": "LINE Bot 用 Flask 是因為？",
    "opts": [
     "LINE 官方規定",
     "LINE 是 Webhook 模式，需要一個 HTTP 伺服器接收平台的 POST",
     "Flask 比較快",
     "為了畫網頁"
    ],
    "ans": 1,
    "why": "webhook = LINE 主動打你的網址，所以你要開一個 web server 來接。Discord Gateway 模式則不用。"
   }
  ]
 },
 "56": {
  "learn": [
   "Text/Sticker/Image 三大基礎訊息",
   "ButtonsTemplate / CarouselTemplate 做選單",
   "FlexMessage + Flex Simulator 完全客製"
  ],
  "try": [
   "加「快速回覆 (QuickReply)」的概念",
   "在 menu 加更多選項",
   "寫一個 \"weather 台北\" 指令回 Flex 卡片"
  ],
  "code": {
   "task": "寫訊息分類器：輸入文字若以「hi」開頭回「Text greet」，以「menu」開頭回「Buttons menu」，以「buy 」開頭回「Confirm buy」，否則回「Text fallback」。從 stdin 讀多行訊息逐行處理輸出。",
   "stdin": "hi there\nmenu\nbuy apple\nrandom\n",
   "expect": "Text greet\nButtons menu\nConfirm buy\nText fallback"
  },
  "quiz": [
   {
    "q": "LINE 的 ImageMessage 中 originalContentUrl 有什麼硬性要求？",
    "opts": [
     "必須是 GIF",
     "必須是 HTTPS 網址",
     "必須小於 1KB",
     "必須在 LINE 伺服器上"
    ],
    "ans": 1,
    "why": "LINE 規定圖片網址必須 HTTPS，且要能公開存取。"
   },
   {
    "q": "TemplateMessage 的 altText 是做什麼用的？",
    "opts": [
     "按鈕文字",
     "在不支援樣板訊息的環境（如通知列）顯示的替代文字",
     "網址",
     "背景顏色"
    ],
    "ans": 1,
    "why": "樣板/Flex 訊息在通知預覽等場合顯示 altText，必填。"
   },
   {
    "q": "想給使用者「點選按鈕做選擇」的訊息，該用哪種類型？",
    "opts": [
     "TextMessage",
     "StickerMessage",
     "TemplateMessage（如 ButtonsTemplate）",
     "ImageMessage"
    ],
    "ans": 2,
    "why": "ButtonsTemplate / ConfirmTemplate 提供可點擊的 action，適合做選單與互動流程。"
   }
  ]
 },
 "57": {
  "learn": [
   "記憶體 dict 最簡單，重啟就沒了",
   "JSON / SQLite 持久化方式",
   "多步驟對話用 FSM（每個 user 一個 step）"
  ],
  "try": [
   "加 /cancel 指令立刻清掉 session",
   "記錄訂單到 list 模擬資料庫",
   "加超時：閒置 10 分鐘自動清掉 session"
  ],
  "code": {
   "task": "簽到累計器：用 dict 記每個 user 的簽到次數。從 stdin 讀多行 user 名字，每行印「user N」（N=該 user 累計簽到次數）。",
   "stdin": "alice\nbob\nalice\nalice\nbob\ncara\n",
   "expect": "alice 1\nbob 1\nalice 2\nalice 3\nbob 2\ncara 1"
  },
  "quiz": [
   {
    "q": "把使用者狀態存在記憶體 dict 的最大問題是？",
    "opts": [
     "太慢",
     "程式重啟資料就全部消失",
     "佔硬碟空間",
     "會被其他使用者看到"
    ],
    "ans": 1,
    "why": "記憶體不持久。開發測試可以，正式環境要落地到 JSON / SQLite / PostgreSQL。"
   },
   {
    "q": "多執行緒環境下寫 JSON 檔為什麼要加 threading.Lock？",
    "opts": [
     "加密",
     "避免兩個執行緒同時寫檔互相覆蓋造成資料毀損",
     "壓縮",
     "加速"
    ],
    "ans": 1,
    "why": "同時寫入會交錯損毀檔案；Lock 保證一次只有一個寫入者。"
   },
   {
    "q": "中型 Bot（幾千使用者）的狀態儲存，課程建議的合理選擇是？",
    "opts": [
     "記憶體 dict",
     "SQLite",
     "印到 console",
     "存在 Discord 訊息裡"
    ],
    "ans": 1,
    "why": "SQLite 單檔、零部署、支援交易，量級在中型以下都夠用；再大才上 PostgreSQL/Redis。"
   }
  ]
 },
 "58": {
  "learn": [
   "discord.ext.tasks.loop 內建排程",
   "schedule / APScheduler 套件做 cron",
   "永遠用 asyncio.sleep 不要 time.sleep"
  ],
  "try": [
   "改成每 30 分鐘觸發 heartbeat",
   "加 \"每週一 10:00\" 的排程",
   "寫一個閒置 timeout：使用者 30 分沒回就清 session"
  ],
  "code": {
   "task": "寫 seconds_until(now_h, now_m, target_h, target_m)，回傳秒數（若 target 已過則算到明天同時刻）。從 stdin 讀多行「now_h now_m target_h target_m」逐行輸出秒數。",
   "stdin": "7 30 9 0\n9 0 9 0\n14 0 9 0\n14 0 21 0\n",
   "expect": "5400\n86400\n68400\n25200"
  },
  "quiz": [
   {
    "q": "discord.py 中每天早上 9 點自動推播，建議用？",
    "opts": [
     "while True + sleep(86400)",
     "@tasks.loop(time=datetime.time(hour=9))",
     "手動每天執行",
     "cron 改檔案"
    ],
    "ans": 1,
    "why": "tasks.loop 支援 time= 參數做每日定時，並與 bot 的事件迴圈整合。"
   },
   {
    "q": "LINE Bot 想「主動」發訊息（不是回覆使用者），要用哪個 API？",
    "opts": [
     "reply_message",
     "push_message",
     "get_message",
     "webhook"
    ],
    "ans": 1,
    "why": "reply 只能在收到事件後短時間內用 replyToken 回覆；主動推播要用 push_message（有額度限制）。"
   },
   {
    "q": "@tasks.loop(seconds=60) 裝飾的函式什麼時候開始跑？",
    "opts": [
     "程式啟動立即自動跑",
     "要呼叫 .start()（常放在 on_ready）才開始",
     "第一個使用者上線時",
     "永遠不會跑"
    ],
    "ans": 1,
    "why": "定義不等於啟動；heartbeat.start() 之後才會每 60 秒執行一次。"
   }
  ]
 },
 "59": {
  "learn": [
   "Render/Railway 是免費部署選擇",
   "requirements.txt + Procfile + .gitignore 三件套",
   "健康檢查 + UptimeRobot 監控"
  ],
  "try": [
   "加更多 REQUIRED 環境變數",
   "把 missing 改成 raise SystemExit 強制中止",
   "加「啟動超過 1 小時要重啟」的健康規則"
  ],
  "code": {
   "task": "從 stdin 讀環境變數定義（每行 KEY=VALUE），檢查 REQUIRED=[\"TOKEN\",\"DB_URL\"] 是否都存在。輸出：對每個 REQUIRED 印「KEY ok」或「KEY missing」（按 REQUIRED 順序）。",
   "stdin": "TOKEN=abc123\nLOG_LEVEL=INFO\nPORT=5000\n",
   "expect": "TOKEN ok\nDB_URL missing"
  },
  "quiz": [
   {
    "q": "Procfile 中「worker: python bot.py」和「web: gunicorn app:app」的差別是？",
    "opts": [
     "沒有差別",
     "worker 是背景程序（Discord Bot 用）；web 是要接 HTTP 流量的服務（LINE webhook 用）",
     "worker 比較貴",
     "web 只能跑 Flask"
    ],
    "ans": 1,
    "why": "Discord Gateway 不需要對外網址 → worker；LINE 要接 POST → web service。"
   },
   {
    "q": ".gitignore 裡一定要有 .env，原因是？",
    "opts": [
     "檔案太大",
     "裡面是 Token 等機密，不能進版本庫",
     "格式不支援",
     "會讓部署變慢"
    ],
    "ans": 1,
    "why": "部署平台用環境變數設定機密；.env 只留在本機。"
   },
   {
    "q": "Render 免費方案跑 LINE Bot 有什麼特性要知道？",
    "opts": [
     "不能用 Python",
     "閒置 15 分鐘會睡眠，被 webhook 叫醒會自動重啟（首次回應較慢）",
     "只能跑 1 小時",
     "不支援 HTTPS"
    ],
    "ans": 1,
    "why": "免費額度的 web service 會休眠；LINE webhook 能喚醒它，但第一個請求會等冷啟動。"
   }
  ]
 },
 "60": {
  "learn": [
   "Game loop 四步驟：events / update / draw / tick",
   "pygame 座標左上 (0,0)、y 往下增加",
   "clock.tick(60) 控制 FPS 讓不同電腦體驗一致"
  ],
  "try": [
   "加 move_left 事件，看 x 減少",
   "改 width=30 看畫面變寬",
   "加 fake_events 在第 5 幀 quit，看提早結束"
  ],
  "code": {
   "task": "模擬 game loop：起始 x=0。從 stdin 讀多行指令 (right/left/quit)。處理到 quit 為止。每幀後印「frame N x=X」(N 從 1 開始)，quit 那幀不要印。",
   "stdin": "right\nright\nleft\nright\nquit\n",
   "expect": "frame 1 x=1\nframe 2 x=2\nframe 3 x=1\nframe 4 x=2"
  },
  "quiz": [
   {
    "q": "game loop 每一圈的標準四步驟順序是？",
    "opts": [
     "畫面→更新→事件→等待",
     "收事件→更新狀態→重畫→clock.tick 控速",
     "更新→事件→存檔→畫面",
     "隨便都行"
    ],
    "ans": 1,
    "why": "events → update → draw → tick，所有遊戲引擎都是這個骨架。"
   },
   {
    "q": "clock.tick(60) 的作用是？",
    "opts": [
     "把遊戲調成 60 倍速",
     "限制每秒最多 60 幀，並回傳這幀經過的毫秒數",
     "等待 60 秒",
     "重畫 60 次"
    ],
    "ans": 1,
    "why": "控制幀率讓不同電腦跑起來節奏一致，回傳值還能拿來算 delta time。"
   },
   {
    "q": "沒有處理 pygame.QUIT 事件會發生什麼？",
    "opts": [
     "遊戲變慢",
     "按視窗的 ✕ 關不掉程式",
     "畫面變黑",
     "音效消失"
    ],
    "ans": 1,
    "why": "QUIT 事件要自己接住並結束迴圈，否則視窗叉不掉只能強制終止。"
   }
  ]
 },
 "61": {
  "learn": [
   "draw.rect/circle/line/polygon 五大繪圖函式",
   "Rect 物件有 center/topleft 等屬性方便定位",
   "繪圖順序：先畫的會被後畫的蓋掉"
  ],
  "try": [
   "加 draw_line_v 垂直線函式",
   "把房子大小改成 10x8",
   "畫第二個太陽 (15, 2, 1)"
  ],
  "code": {
   "task": "用 30x10 的字元 grid 當畫布。從 stdin 讀「x y」（單一行），在那個位置印 *。輸出整張 grid (用 . 填空白)，每行印一列。",
   "stdin": "15 5\n",
   "expect": "..............................\n..............................\n..............................\n..............................\n..............................\n...............*..............\n..............................\n..............................\n..............................\n.............................."
  },
  "quiz": [
   {
    "q": "pygame.draw.rect(..., width=0) 中 width=0 代表？",
    "opts": [
     "看不見",
     "實心填滿；width>0 才是只畫框線",
     "寬度為 0 像素",
     "錯誤"
    ],
    "ans": 1,
    "why": "width 參數是「框線粗細」，0 是特殊值表示整個填滿。"
   },
   {
    "q": "想把一個 Rect 移到螢幕正中央，最方便的寫法是？",
    "opts": [
     "逐一算 x,y",
     "rect.center = (400, 300)",
     "rect.move(400, 300)",
     "重新建立 Rect"
    ],
    "ans": 1,
    "why": "Rect 提供 center/topleft/bottomright 等屬性，指定後自動換算 x,y。"
   },
   {
    "q": "載入 PNG 圖片時用 .convert_alpha() 的原因是？",
    "opts": [
     "縮小檔案",
     "保留 PNG 透明度並轉成快速繪製的格式",
     "轉成黑白",
     "旋轉圖片"
    ],
    "ans": 1,
    "why": "convert_alpha 處理透明通道；不透明的 JPG 用 convert() 即可。"
   }
  ]
 },
 "62": {
  "learn": [
   "事件驅動 (KEYDOWN) vs 狀態查詢 (get_pressed)",
   "MOUSEBUTTONDOWN/MOTION 處理滑鼠",
   "文字輸入用 event.unicode"
  ],
  "try": [
   "加 K_a/K_d 對應左右移動",
   "加滑鼠右鍵：印「marker」訊息",
   "加滑鼠拖曳偵測 (left button + MOUSEMOTION)"
  ],
  "code": {
   "task": "玩家初始 x=0, y=0。從 stdin 讀多行輸入指令：「W/A/S/D」分別上/左/下/右各移動 1 格。讀完後輸出「x y」最終位置。",
   "stdin": "D\nD\nS\nD\nW\nW\nA\n",
   "expect": "2 -1"
  },
  "quiz": [
   {
    "q": "「按住方向鍵持續移動」適合用哪種輸入處理？",
    "opts": [
     "KEYDOWN 事件",
     "pygame.key.get_pressed() 每幀查詢按鍵狀態",
     "MOUSEBUTTONDOWN",
     "QUIT"
    ],
    "ans": 1,
    "why": "事件只在「按下那一刻」觸發一次；持續性動作要每幀查詢狀態。跳躍這種一次性動作才用 KEYDOWN。"
   },
   {
    "q": "玩家按一下空白鍵跳躍一次，該用哪種方式？",
    "opts": [
     "get_pressed() 查詢",
     "KEYDOWN 事件判斷 event.key == K_SPACE",
     "while 迴圈",
     "MOUSEMOTION"
    ],
    "ans": 1,
    "why": "用 get_pressed 會在按住期間每幀觸發、連跳不止；一次性動作用事件。"
   },
   {
    "q": "MOUSEBUTTONDOWN 事件中 event.button == 1 代表？",
    "opts": [
     "右鍵",
     "左鍵",
     "中鍵",
     "滾輪"
    ],
    "ans": 1,
    "why": "1=左鍵、2=中鍵、3=右鍵；event.pos 是點擊座標。"
   }
  ]
 },
 "63": {
  "learn": [
   "用 vel * dt 讓速度跟 fps 無關",
   "pos += vel * dt 是黃金移動公式",
   "重力就是 vy += GRAVITY * dt"
  ],
  "try": [
   "改 GRAVITY=50，看球落更快",
   "改反彈損失 0.9（更彈）",
   "加左右牆每次反彈損失 10% 速度"
  ],
  "code": {
   "task": "物理模擬：初始 y=0, vy=0。每幀 dt=0.1, GRAVITY=10。從 stdin 讀整數 N (1 行)，跑 N 幀後輸出最終 y（四捨五入 1 位小數）。公式：vy += GRAVITY*dt; y += vy*dt（每幀按此順序）。",
   "stdin": "5\n",
   "expect": "1.5"
  },
  "quiz": [
   {
    "q": "「每幀固定 +5 px」的移動方式有什麼問題？",
    "opts": [
     "太慢",
     "移動速度跟幀率綁定：60fps 與 30fps 的電腦遊戲速度差一倍",
     "會出語法錯誤",
     "只能直線移動"
    ],
    "ans": 1,
    "why": "5px/幀 × 60幀 = 300px/秒，幀率掉一半速度也掉一半——所以要用 delta time。"
   },
   {
    "q": "delta time (dt) 是什麼？",
    "opts": [
     "遊戲總時長",
     "上一幀到這一幀經過的秒數",
     "幀率",
     "延遲毫秒"
    ],
    "ans": 1,
    "why": "pos += vel * dt 讓移動以「每秒幾 px」計算，幀率高低都跑一樣快。"
   },
   {
    "q": "clock.tick(60) 的回傳值單位是？",
    "opts": [
     "秒",
     "毫秒",
     "幀",
     "px"
    ],
    "ans": 1,
    "why": "回傳上一幀經過的毫秒數，除以 1000 才是 dt 秒數。"
   }
  ]
 },
 "64": {
  "learn": [
   "AABB 是最常用的碰撞算法",
   "pygame Rect.colliderect / collidepoint 內建",
   "x/y 分開檢查避免卡牆"
  ],
  "try": [
   "加更多子彈/怪物，看結果",
   "改成圓形碰撞 (距離公式)",
   "加 dokill 邏輯：撞到的怪物從 enemies 移除"
  ],
  "code": {
   "task": "AABB 碰撞：從 stdin 讀 2 行，每行「x y w h」表示一個矩形。輸出「YES」或「NO」表示是否相撞。",
   "stdin": "0 0 5 5\n3 3 5 5\n",
   "expect": "YES"
  },
  "quiz": [
   {
    "q": "判斷兩個矩形是否重疊，pygame 的一行寫法是？",
    "opts": [
     "r1 == r2",
     "r1.colliderect(r2)",
     "r1.overlap(r2)",
     "collide(r1, r2)"
    ],
    "ans": 1,
    "why": "colliderect 就是 AABB 檢測；自己寫則是四條邊界比較。"
   },
   {
    "q": "判斷滑鼠是否點在按鈕上，該用？",
    "opts": [
     "colliderect",
     "button_rect.collidepoint(mouse_x, mouse_y)",
     "collidelist",
     "spritecollide"
    ],
    "ans": 1,
    "why": "點對矩形用 collidepoint，UI 點擊判定的標準寫法。"
   },
   {
    "q": "pygame.sprite.spritecollide(player, coins, dokill=True) 中 dokill=True 的效果是？",
    "opts": [
     "殺死玩家",
     "把撞到的金幣自動從群組移除",
     "結束遊戲",
     "扣血"
    ],
    "ans": 1,
    "why": "回傳撞到的 sprite list 並順手從 Group 移除——撿金幣一行搞定。"
   }
  ]
 },
 "65": {
  "learn": [
   "font.render(text, True, color) → Surface",
   "中文要指定中文字型或用 .ttf 檔",
   "get_rect(center=...) 置中對齊"
  ],
  "try": [
   "改 HP 為 30，看血條變紅短",
   "寫一個 right_align 函式",
   "加邊框：「[ GAME OVER ]」"
  ],
  "code": {
   "task": "自動換行：從 stdin 讀第一行 max_width (整數)，第二行一個英文句子。按空白切詞、貪心放進每行（每行字數 ≤ max_width）。輸出每行一行。",
   "stdin": "15\nThe quick brown fox jumps over the lazy dog\n",
   "expect": "The quick brown\nfox jumps over\nthe lazy dog"
  },
  "quiz": [
   {
    "q": "pygame 畫文字的三步驟是？",
    "opts": [
     "print 三次",
     "建 Font → font.render() 成 Surface → blit 到螢幕",
     "直接 screen.text()",
     "建 Rect → 填色 → 顯示"
    ],
    "ans": 1,
    "why": "文字要先 render 成圖（Surface）再貼上去；render 的 True 參數是抗鋸齒。"
   },
   {
    "q": "遊戲顯示中文變成方塊（豆腐字）的原因是？",
    "opts": [
     "記憶體不足",
     "所用字型不含中文字元，要改用中文字型（如思源黑體 / 微軟正黑）",
     "pygame 不支援中文",
     "螢幕解析度太低"
    ],
    "ans": 1,
    "why": "預設字型多半沒中文。自帶 .ttf/.otf 字型檔最穩，部署到別台電腦也不缺字。"
   },
   {
    "q": "把「GAME OVER」置中顯示的慣用寫法是？",
    "opts": [
     "手算座標",
     "text_rect = surface.get_rect(center=(W//2, H//2)) 再 blit(surface, text_rect)",
     "加很多空白",
     "用表格"
    ],
    "ans": 1,
    "why": "get_rect(center=...) 讓 pygame 幫你算左上角座標，文字大小改了也不用重算。"
   }
  ]
 },
 "66": {
  "learn": [
   "Sound (短) vs music (長) 兩種 API",
   "play(loops=-1) 無限循環、fadeout 淡出",
   ".wav/.ogg 最穩；多平台音樂用 .ogg"
  ],
  "try": [
   "加 walk 音效隔 0.3 秒才能再播一次",
   "改 boss BGM 從 30 秒處 start",
   "加全域 master_volume = 0.5 乘上每個音效"
  ],
  "code": {
   "task": "寫音效播放紀錄器：從 stdin 讀多行「event」。對照表 {\"jump\":\"jump.wav\", \"coin\":\"coin.wav\", \"hit\":\"hit.wav\"}，找得到就印「play X」，找不到印「skip X」(X 是輸入字串)。",
   "stdin": "jump\ncoin\ndie\nhit\nfoo\n",
   "expect": "play jump.wav\nplay coin.wav\nskip die\nplay hit.wav\nskip foo"
  },
  "quiz": [
   {
    "q": "短音效（跳躍、撿幣）和背景音樂分別該用？",
    "opts": [
     "都用 music",
     "音效用 pygame.mixer.Sound、音樂用 pygame.mixer.music",
     "都用 Sound",
     "都不用"
    ],
    "ans": 1,
    "why": "Sound 預載進 RAM、可多個同時播；music 是串流、一次一首，適合長 BGM。"
   },
   {
    "q": "pygame.mixer.music.play(loops=-1) 的 -1 代表？",
    "opts": [
     "不播放",
     "無限循環播放",
     "倒著播",
     "播一次"
    ],
    "ans": 1,
    "why": "-1 = 無限循環，適合背景音樂。"
   },
   {
    "q": "跨平台最穩的音效檔格式是？",
    "opts": [
     "wav / ogg",
     "mp3",
     "mid",
     "flac"
    ],
    "ans": 0,
    "why": "教材指出 .wav 最穩、.ogg 也好；.mp3 在部分平台的 Sound 支援有問題。"
   }
  ]
 },
 "67": {
  "learn": [
   "完整 game loop = events + input + update + collision + draw",
   "狀態機 (state machine) 管理 menu/playing/gameover",
   "從小遊戲開始：先 Pong → 貪食蛇 → 平台跳躍"
  ],
  "try": [
   "加 AI 對手自動追球",
   "加加速：每次撞板 vel.x *= 1.05",
   "改 WIN_SCORE = 11 看比賽更長"
  ],
  "code": {
   "task": "計分遊戲：從 stdin 讀多行「P1」或「P2」表示誰得分。先到 3 分獲勝。輸出「WINNER FINAL_A_B」（FINAL 是「P1 wins」或「P2 wins」, A_B 是最終比數）。獲勝後忽略後續輸入。",
   "stdin": "P1\nP2\nP1\nP2\nP1\nP2\n",
   "expect": "P1 wins 3-2"
  },
  "quiz": [
   {
    "q": "Pong 的球撞到上下牆壁時，程式上要做什麼？",
    "opts": [
     "遊戲結束",
     "把速度的 y 分量反向（vel.y = -vel.y）",
     "重置球",
     "加分"
    ],
    "ans": 1,
    "why": "反彈 = 對應方向的速度分量取負；撞板子則是 x 分量反向。"
   },
   {
    "q": "球飛出左右邊界時的處理是？",
    "opts": [
     "遊戲當機",
     "對方得分，球重置回中央重新發球",
     "球繼續飛",
     "換背景"
    ],
    "ans": 1,
    "why": "出界=得分事件：加分、reset_ball()、檢查是否到達 WIN_SCORE。"
   },
   {
    "q": "板子（paddle）移動時要注意什麼邊界處理？",
    "opts": [
     "速度上限",
     "不能移出螢幕上下邊界（clamp 在 0 ~ H-PADDLE_H）",
     "必須等球先動",
     "顏色要變"
    ],
    "ans": 1,
    "why": "每幀更新位置後夾住範圍，否則板子會滑出畫面外。"
   }
  ]
 },
 "68": {
  "learn": [
   "理解 APCS 新制四種實作題本",
   "用資料範圍與關鍵字判斷題目等級",
   "用追蹤表降低程式識讀錯誤率"
  ],
  "try": [
   "選 3 題題庫題目，先不寫程式，寫下你判斷的等級與理由",
   "把本章範例的 a 改成 [2,7,1,8]，自己重畫追蹤表",
   "挑一段有迴圈的程式，列出每一次 print 的精確輸出"
  ],
  "quiz": [
   {
    "q": "中高級題目通常最需要先思考什麼？",
    "opts": [
     "要不要加很多註解",
     "該用哪個資料結構維護狀態",
     "變數名稱要不要很短",
     "輸出要不要漂亮"
    ],
    "ans": 1,
    "why": "中高級的核心是基礎資料結構運用能力，通常要先選 stack、queue、map、set、graph、DSU 等工具。"
   },
   {
    "q": "做程式識讀的迴圈題時，最穩的方式是？",
    "opts": [
     "只看最後一行",
     "把每次迭代的關鍵變數寫成追蹤表",
     "先猜輸出再看選項",
     "只找最長的變數名稱"
    ],
    "ans": 1,
    "why": "追蹤表能把每輪 i、元素、狀態與輸出固定下來，最能避免 off-by-one 或變數更新順序錯誤。"
   },
   {
    "q": "看到 N 到 200000 且多次區間查詢，通常不該先寫什麼？",
    "opts": [
     "前綴和",
     "排序或二分",
     "每次查詢都從頭掃到尾",
     "雜湊表"
    ],
    "ans": 2,
    "why": "每次查詢都線性掃描通常會超時，應先思考前處理或更好的資料結構。"
   }
  ],
  "code": {
   "task": "依本章範例，計算 a=[3,1,4,1,5] 在偶數索引加、奇數索引減後的結果。輸出每輪 i x ans，最後輸出 final ans。",
   "stdin": "",
   "expect": "0 3 3\n1 1 2\n2 4 6\n3 1 5\n4 5 10\nfinal 10"
  }
 },
 "69": {
  "learn": [
   "快速冪：平方分解把 O(n) 壓到 O(log n)",
   "Python 三參數 pow(a, n, m) 直接用",
   "C/C++/Java 手刻時每步取模防溢位"
  ],
  "quiz": [
   {
    "q": "快速冪能把 a^n 的計算量從 O(n) 降到？",
    "opts": [
     "O(1)",
     "O(log n)",
     "O(n/2)",
     "O(sqrt n)"
    ],
    "ans": 1,
    "why": "每步把 n 砍半（偶數平方、奇數先乘一次 a），所以是 log n 步。"
   },
   {
    "q": "在 Python 算 2^(10^9) mod (10^9+7) 最好的寫法是？",
    "opts": [
     "2 ** (10**9) % (10**9+7)",
     "pow(2, 10**9, 10**9 + 7)",
     "迴圈乘 10^9 次",
     "math.pow"
    ],
    "ans": 1,
    "why": "三參數 pow 是 C 實作的模冪，又快又不會生出超巨大整數；直接 ** 會先算出天文數字。"
   },
   {
    "q": "C++ 手刻快速冪時每一步都要 % mod，主要是為了？",
    "opts": [
     "好看",
     "防止 long long 溢位",
     "加速一倍",
     "讓答案變小方便輸出"
    ],
    "ans": 1,
    "why": "兩個 10^9 級的數相乘已逼近 long long 上限，再不取模就溢位出錯。"
   }
  ]
 },
 "70": {
  "learn": [
   "分治三步驟：拆、遞迴解、合併算跨中線貢獻",
   "合併排序邊排邊數逆序對：取右邊時貢獻 len(L)-i",
   "O(n²) 在 1e5 規模必 TLE，分治壓到 O(n log n)"
  ],
  "quiz": [
   {
    "q": "分治法的三步驟是？",
    "opts": [
     "排序→搜尋→輸出",
     "拆成兩半→遞迴解各半→合併並計算跨中線的貢獻",
     "讀入→計算→輸出",
     "暴力→剪枝→優化"
    ],
    "ans": 1,
    "why": "merge sort、逆序對、最近點對都套這個骨架；難點通常在「併」那一步。"
   },
   {
    "q": "合併時取了右邊的 R[j]，逆序對一次增加多少？",
    "opts": [
     "1",
     "len(L) - i（L 中還沒取出的元素個數）",
     "len(R) - j",
     "0"
    ],
    "ans": 1,
    "why": "L 剩下的元素都比 R[j] 大且 index 都在它前面，每個都跟 R[j] 構成一對逆序。"
   },
   {
    "q": "用雙層 for 直接數逆序對，在 n = 10^5 時會怎樣？",
    "opts": [
     "剛好通過",
     "10^10 次比較，必定 TLE；要用 O(n log n) 分治",
     "記憶體爆掉",
     "答案錯誤"
    ],
    "ans": 1,
    "why": "O(n²) 在 1e5 規模就是 1e10 操作，遠超時限；分治（或 BIT）把它壓到 n log n。"
   }
  ]
 },
 "71": {
  "learn": [
   "STL 四大類容器：序列、關聯、無序關聯、配接器",
   "vector 的動態擴容與攤提 O(1) push_back",
   "map/set (O(log n)) 與 unordered_map/set (平均 O(1)) 的取捨"
  ],
  "quiz": [
   {
    "q": "<code>unordered_map</code> 和 <code>map</code> 的查詢複雜度分別是？",
    "opts": [
     "都是 O(1)",
     "平均 O(1) 與 O(log n)",
     "O(log n) 與 O(1)",
     "都是 O(n)"
    ],
    "ans": 1,
    "why": "unordered_map 用 hash 表（平均 O(1)、最壞 O(n)）；map 是紅黑樹（穩定 O(log n)、自動排序）。"
   },
   {
    "q": "vector 的 push_back 為什麼是「攤提 O(1)」？",
    "opts": [
     "每次都重新配置",
     "空間不足時容量×2，重配的成本攤到多次操作上平均仍是常數",
     "因為它其實是 O(log n)",
     "編譯器優化"
    ],
    "ans": 1,
    "why": "倍增策略讓 n 次 push_back 的總搬移量是 O(n)，平均每次 O(1)。"
   },
   {
    "q": "滑動視窗最大值常用哪個容器存索引？",
    "opts": [
     "stack",
     "deque（雙端佇列）",
     "priority_queue",
     "set"
    ],
    "ans": 1,
    "why": "deque 兩端都能 O(1) 進出：尾端維護單調性、頭端淘汰過期索引。"
   }
  ]
 },
 "72": {
  "learn": [
   "函式模板與類別模板：一份程式碼吃多種型別",
   "模板在編譯期實例化，不是執行期",
   "auto 是編譯期型別推導，不是動態型別"
  ],
  "quiz": [
   {
    "q": "<code>template&lt;typename T&gt; T myMax(T a, T b)</code> 呼叫 <code>myMax(3, 5)</code> 時 T 是？",
    "opts": [
     "執行期才決定",
     "編譯期自動推導為 int",
     "永遠是 double",
     "要手動指定"
    ],
    "ans": 1,
    "why": "模板參數由引數型別在編譯期推導；編譯器為每種用到的型別產生一份程式碼。"
   },
   {
    "q": "<code>auto x = 3.14;</code> 之後 x 的型別是？",
    "opts": [
     "動態型別，隨時可變",
     "double，編譯期就固定了",
     "float",
     "auto 型別"
    ],
    "ans": 1,
    "why": "auto 只是「讓編譯器幫你寫型別」，與 Python 的動態型別完全不同。"
   },
   {
    "q": "<code>vector&lt;int&gt;</code> 本質上是什麼？",
    "opts": [
     "巨集",
     "類別模板 vector 以 int 實例化的類別",
     "繼承自 vector 的子類",
     "內建型別"
    ],
    "ans": 1,
    "why": "vector 是 class template，<int> 填入型別參數後編譯器生成具體類別。"
   }
  ]
 },
 "73": {
  "learn": [
   "RAII：建構子取資源、解構子放資源，離開作用域自動清理",
   "unique_ptr 獨佔所有權、只能 move 不能複製",
   "shared_ptr 引用計數與循環引用問題（weak_ptr 解）"
  ],
  "quiz": [
   {
    "q": "RAII 的核心思想是？",
    "opts": [
     "手動管理 new/delete",
     "把資源生命週期綁在物件生命週期上：解構子自動釋放",
     "用垃圾回收",
     "避免使用指標"
    ],
    "ans": 1,
    "why": "離開作用域（含拋例外）必呼叫解構子，資源一定被釋放——這是 C++ 沒有 GC 仍能安全管理資源的關鍵。"
   },
   {
    "q": "<code>unique_ptr&lt;int&gt; q = p;</code>（p 也是 unique_ptr）會發生什麼？",
    "opts": [
     "q 和 p 共享",
     "編譯錯誤：unique_ptr 不能複製，只能 std::move",
     "執行期崩潰",
     "自動變 shared_ptr"
    ],
    "ans": 1,
    "why": "獨佔所有權禁止複製；move(p) 之後 p 變空、q 接管。"
   },
   {
    "q": "兩個 shared_ptr 互相指向對方（循環引用）會怎樣？",
    "opts": [
     "自動解開",
     "引用計數永不歸零→記憶體洩漏，需用 weak_ptr 打破環",
     "編譯錯誤",
     "程式崩潰"
    ],
    "ans": 1,
    "why": "環內各自計數 ≥1，誰都不會釋放；weak_ptr 不增加計數，用它斷環。"
   }
  ]
 },
 "74": {
  "learn": [
   "lvalue（有名字可取址）vs rvalue（暫時值）",
   "std::move 只是轉型成右值參考，本身不搬東西",
   "移動建構子「偷指標」：來源置空、避免深拷貝"
  ],
  "quiz": [
   {
    "q": "<code>vector&lt;int&gt; w = move(v);</code> 之後 v 的狀態是？",
    "opts": [
     "跟 w 一樣",
     "內容被搬走（通常變空），資料歸 w 所有",
     "被刪除無法使用",
     "編譯錯誤"
    ],
    "ans": 1,
    "why": "move 觸發移動建構子：內部指標直接轉移，v 進入有效但空的狀態。"
   },
   {
    "q": "std::move 實際上做了什麼？",
    "opts": [
     "複製記憶體",
     "把 lvalue 轉型成右值參考，讓移動建構子被選中——本身不搬任何資料",
     "刪除原物件",
     "呼叫解構子"
    ],
    "ans": 1,
    "why": "它只是個 cast；真正的「搬」發生在接手的移動建構子/移動賦值裡。"
   },
   {
    "q": "<code>int&& r = 5;</code> 中的 && 是？",
    "opts": [
     "邏輯 AND",
     "右值參考（rvalue reference）",
     "取址兩次",
     "語法錯誤"
    ],
    "ans": 1,
    "why": "&& 宣告右值參考，能綁定暫時值——move 語意的基礎建設。"
   }
  ]
 },
 "75": {
  "learn": [
   "lambda 語法：[捕獲](參數){ 本體 }",
   "值捕獲 [n] vs 參考捕獲 [&n] 的差異與懸空風險",
   "lambda 底層就是有 operator() 的函式物件"
  ],
  "quiz": [
   {
    "q": "lambda <code>[&n](int x){ return x + n; }</code> 的 [&n] 代表？",
    "opts": [
     "複製 n 的值",
     "以參考捕獲外部變數 n，lambda 內外是同一個 n",
     "宣告新變數",
     "取 n 的位址印出"
    ],
    "ans": 1,
    "why": "參考捕獲不複製；但若 lambda 比 n 活得久（n 已離開作用域），執行就是未定義行為。"
   },
   {
    "q": "sort 搭配 lambda <code>[](int a, int b){ return a > b; }</code> 的效果是？",
    "opts": [
     "由小到大",
     "由大到小排序",
     "隨機排序",
     "只排前半"
    ],
    "ans": 1,
    "why": "比較函式回 true 表示 a 應排在 b 前面；a > b 為 true 時大的在前。"
   },
   {
    "q": "lambda 的底層實作本質是？",
    "opts": [
     "函式指標",
     "一個帶 operator() 的匿名類別物件（functor）",
     "巨集展開",
     "虛擬函式"
    ],
    "ans": 1,
    "why": "編譯器為每個 lambda 生成一個類別，捕獲變數是成員、本體是 operator()。"
   }
  ]
 },
 "76": {
  "learn": [
   "sort 的本質是 introsort：最壞 O(n log n)",
   "lower_bound / upper_bound：排序後二分搜的標準工具",
   "min/max/minmax 與 *_element 系列"
  ],
  "quiz": [
   {
    "q": "使用 binary_search / lower_bound 的前提是？",
    "opts": [
     "陣列很大",
     "區間已排序",
     "元素是 int",
     "用 vector 存"
    ],
    "ans": 1,
    "why": "二分搜尋依賴有序性；沒排序結果就是錯的（而且不會報錯）。"
   },
   {
    "q": "<code>lower_bound(v.begin(), v.end(), 4)</code> 回傳的是？",
    "opts": [
     "等於 4 的最後一個位置",
     "第一個 >= 4 的 iterator",
     "第一個 > 4 的 iterator",
     "4 出現的次數"
    ],
    "ans": 1,
    "why": "lower_bound 是第一個 >=，upper_bound 是第一個 >；兩者相減就是 4 的出現次數。"
   },
   {
    "q": "STL 的 sort 最壞時間複雜度是？",
    "opts": [
     "O(n²)",
     "O(n log n)（introsort：快排+堆排+插入排序混合）",
     "O(n)",
     "看資料而定，無上界"
    ],
    "ans": 1,
    "why": "introsort 在快排遞迴過深時切堆排，保證最壞 n log n。"
   }
  ]
 },
 "77": {
  "learn": [
   "string 常用操作：substr / find / replace / npos",
   "C++ 沒有內建 split——用 stringstream + getline 自己刻",
   "string_view：只存指標+長度的零複製字串視窗"
  ],
  "quiz": [
   {
    "q": "<code>s.find(\"xyz\")</code> 找不到時回傳？",
    "opts": [
     "-1",
     "string::npos",
     "0",
     "拋出例外"
    ],
    "ans": 1,
    "why": "npos 是 size_t 的最大值；判斷要寫 if (pos != string::npos)，拿 -1 比較會踩型別坑。"
   },
   {
    "q": "string_view 的優勢是？",
    "opts": [
     "可以修改字串",
     "不複製字串，只存指標+長度，傳遞大字串零成本",
     "自動釋放記憶體",
     "支援中文"
    ],
    "ans": 1,
    "why": "函式參數用 string_view 同時接受 string 和字面值，且不發生拷貝；但要小心它不擁有資料。"
   },
   {
    "q": "C++ 想做 Python 的 <code>s.split(',')</code>，標準做法是？",
    "opts": [
     "s.split(',')",
     "stringstream + getline(ss, item, ',') 迴圈",
     "用 for 逐字元手刻一定更好",
     "strtok"
    ],
    "ans": 1,
    "why": "標準庫沒有 split；stringstream + getline 指定分隔符是最常見寫法。"
   }
  ]
 },
 "78": {
  "learn": [
   "std::thread 啟動與 join/detach 的義務",
   "競爭條件：counter++ 不是原子操作",
   "mutex + lock_guard（RAII 自動解鎖）與 atomic"
  ],
  "quiz": [
   {
    "q": "thread 物件解構前沒有 join 也沒有 detach 會怎樣？",
    "opts": [
     "自動 join",
     "程式直接 terminate",
     "自動 detach",
     "沒影響"
    ],
    "ans": 1,
    "why": "C++ 規定 joinable 的 thread 解構時呼叫 std::terminate——必須明確選擇等它或放生它。"
   },
   {
    "q": "兩個 thread 同時對 counter++ 各 10 萬次，結果可能不是 20 萬，因為？",
    "opts": [
     "編譯器 bug",
     "counter++ 是讀→改→寫三步，兩執行緒交錯會覆蓋彼此的更新",
     "int 溢位",
     "thread 沒啟動"
    ],
    "ans": 1,
    "why": "非原子操作交錯執行＝競爭條件；要用 mutex 或 atomic&lt;int&gt;。"
   },
   {
    "q": "lock_guard 相比手動 lock/unlock 的好處是？",
    "opts": [
     "比較快",
     "RAII：離開作用域（含例外）自動解鎖，不會忘記 unlock 造成死鎖",
     "可以重入",
     "能跨執行緒傳遞"
    ],
    "ans": 1,
    "why": "忘記 unlock 或例外跳過 unlock 是經典 bug；lock_guard 用解構子保證解鎖。"
   }
  ]
 },
 "79": {
  "learn": [
   "&x 取地址、*p 解參考、int *p 宣告指標",
   "指標的兩大用途：讓函式改外部變數、避免複製大型結構",
   "陣列名退化為指向首元素的指標：a[i] == *(a+i)"
  ],
  "quiz": [
   {
    "q": "<code>int x=42; int *p=&x; *p=100;</code> 之後 x 的值是？",
    "opts": [
     "42",
     "100",
     "隨機",
     "編譯錯誤"
    ],
    "ans": 1,
    "why": "*p 解參考就是 x 本身；透過指標改值＝改原變數，這正是 swap 函式的原理。"
   },
   {
    "q": "C 的 swap 函式為什麼要寫成 <code>swap(int *a, int *b)</code> 並傳 &x, &y？",
    "opts": [
     "比較快",
     "C 只有值傳遞，傳地址才能修改呼叫端的變數",
     "語法規定",
     "為了省記憶體"
    ],
    "ans": 1,
    "why": "傳值只是複製；C 沒有參考傳遞，想改外面的變數只能傳指標。"
   },
   {
    "q": "<code>int a[5]; int *p=a;</code> 則 <code>p[2]</code> 等價於？",
    "opts": [
     "a[2] 和 *(p+2)",
     "a[5]",
     "&a[2]",
     "錯誤寫法"
    ],
    "ans": 0,
    "why": "下標運算就是指標算術：a[i] ≡ *(a+i)；陣列名在表達式中退化為首元素指標。"
   }
  ]
 },
 "80": {
  "learn": [
   "malloc/free 配對；free 後設 NULL 防誤用",
   "calloc 清零、realloc 改大小（指標可能搬家）",
   "二維陣列：先配指標陣列、再逐列配置，逐列釋放"
  ],
  "quiz": [
   {
    "q": "要 n 個 int 的動態陣列，正確的 malloc 寫法是？",
    "opts": [
     "malloc(n)",
     "malloc(n * sizeof(int))",
     "malloc(sizeof(n))",
     "new int[n]"
    ],
    "ans": 1,
    "why": "malloc 以 byte 計；n 個 int 是 n*sizeof(int) bytes。malloc(n) 只拿 n 個 byte。"
   },
   {
    "q": "malloc 和 calloc 的差別是？",
    "opts": [
     "calloc 比較快",
     "malloc 內容是垃圾值；calloc 保證初始化為 0",
     "malloc 不用 free",
     "calloc 只能配陣列"
    ],
    "ans": 1,
    "why": "calloc(n, size) = 配置 + 清零；malloc 拿到什麼是什麼。"
   },
   {
    "q": "<code>arr = realloc(arr2, ...)</code> 後繼續使用舊指標 arr2 危險在哪？",
    "opts": [
     "沒有危險",
     "realloc 可能把資料搬到新位置，舊指標已失效（dangling）",
     "會變慢",
     "記憶體加倍"
    ],
    "ans": 1,
    "why": "realloc 容量不夠時會另配新區塊並搬移；必須一律改用回傳的新指標。"
   }
  ]
 },
 "81": {
  "learn": [
   "struct 定義、typedef 簡化、C99 指定欄位初始化",
   "padding：CPU 對齊讓 sizeof 比欄位總和大",
   "union 共用記憶體：大小=最大欄位"
  ],
  "quiz": [
   {
    "q": "<code>struct A { char c; int i; };</code> 的 sizeof 多半是 8 而不是 5，因為？",
    "opts": [
     "編譯器 bug",
     "alignment：int 要對齊 4 的倍數，char 後面插了 3 byte padding",
     "char 占 4 byte",
     "int 占 7 byte"
    ],
    "ans": 1,
    "why": "CPU 對齊需求產生 padding；把大欄位排前面可減少浪費。"
   },
   {
    "q": "union 和 struct 的本質差別是？",
    "opts": [
     "union 不能有函式",
     "union 所有欄位共用同一塊記憶體；struct 每個欄位各有空間",
     "union 比較新",
     "沒有差別"
    ],
    "ans": 1,
    "why": "union 大小 = 最大欄位；同時只該使用一個欄位，常配 tag 記錄目前存的是哪種。"
   },
   {
    "q": "C99 的 <code>Point p = {.y = 4, .x = 3};</code> 是？",
    "opts": [
     "語法錯誤",
     "指定欄位初始化：順序無所謂，沒寫的欄位自動為 0",
     "只有 C++ 支援",
     "會有警告但能跑"
    ],
    "ans": 1,
    "why": "designated initializer 讓初始化清楚且不依賴欄位順序。"
   }
  ]
 },
 "82": {
  "learn": [
   "函式指標宣告：int (*f)(int, int)",
   "typedef 讓函式指標型別可讀",
   "qsort 的比較函式與 callback 模式"
  ],
  "quiz": [
   {
    "q": "<code>int (*f)(int, int) = add;</code> 中 f 是？",
    "opts": [
     "回傳 int* 的函式",
     "指向「接收兩個 int、回傳 int 的函式」的指標",
     "整數陣列",
     "巨集"
    ],
    "ans": 1,
    "why": "(*f) 框住名字表示 f 是指標，後面 (int,int) 是參數、最前面 int 是回傳型別。"
   },
   {
    "q": "qsort 的第四個參數為什麼是函式指標？",
    "opts": [
     "歷史包袱",
     "qsort 不知道元素怎麼比較，呼叫你提供的 cmp 來決定順序（callback）",
     "為了加速",
     "只是選填"
    ],
    "ans": 1,
    "why": "泛用排序 + 客製比較 = 把「怎麼比」当作參數傳入——C 的回呼模式。"
   },
   {
    "q": "C 沒有 lambda/closure，函式抽象主要靠？",
    "opts": [
     "巨集",
     "函式指標",
     "goto",
     "union"
    ],
    "ans": 1,
    "why": "回呼、策略切換、事件表都用函式指標實現；typedef 讓型別宣告可讀。"
   }
  ]
 },
 "83": {
  "learn": [
   "C 字串 = char 陣列 + 結尾 '\\0'；string.h 全家桶",
   "strcpy 不檢查長度→buffer overflow 是最大安全漏洞來源",
   "strtok 會改原字串且非 thread-safe"
  ],
  "quiz": [
   {
    "q": "<code>char dst[5]; strcpy(dst, \"hello world\");</code> 的問題是？",
    "opts": [
     "沒問題",
     "寫超出 dst 容量＝buffer overflow，是 C 最經典的安全漏洞",
     "編譯不過",
     "只會複製 5 個字"
    ],
    "ans": 1,
    "why": "strcpy 不檢查目的地大小；要用 strncpy 或先檢查 strlen。"
   },
   {
    "q": "strcmp(a, b) 回傳 0 代表？",
    "opts": [
     "兩字串不同",
     "兩字串內容相等",
     "a 比較短",
     "發生錯誤"
    ],
    "ans": 1,
    "why": "0=相等、<0 表示 a 字典序在前、>0 在後。新手常誤寫 if(strcmp(a,b)) 判相等——剛好相反。"
   },
   {
    "q": "strtok 的兩個著名注意事項是？",
    "opts": [
     "慢、占記憶體",
     "會修改原字串（分隔符換成 \\0）、使用全域狀態非 thread-safe",
     "只能切空白、要先排序",
     "需要 malloc、會洩漏"
    ],
    "ans": 1,
    "why": "所以不能對字串常數用 strtok；多執行緒要改用 strtok_r。"
   }
  ]
 },
 "84": {
  "learn": [
   "巨集是預處理器的文字替換，發生在編譯之前",
   "函式型巨集每個參數都要括號；副作用參數會被算兩次",
   "條件編譯 #ifdef 與變參巨集 __VA_ARGS__"
  ],
  "quiz": [
   {
    "q": "<code>#define MIN(a,b) ((a)<(b)?(a):(b))</code> 呼叫 <code>MIN(i++, 10)</code> 的坑是？",
    "opts": [
     "編譯錯誤",
     "巨集是文字替換，i++ 被展開兩次、i 可能加 2",
     "回傳值錯誤但 i 正常",
     "沒有坑"
    ],
    "ans": 1,
    "why": "展開成 ((i++)<(10)?(i++):(10))——副作用重複執行。安全做法是 static inline 函式。"
   },
   {
    "q": "<code>#ifdef DEBUG ... #endif</code> 區塊在沒定義 DEBUG 時？",
    "opts": [
     "執行期跳過",
     "預處理階段整段刪除，編譯後完全不存在、零開銷",
     "變成註解但占空間",
     "拋出警告"
    ],
    "ans": 1,
    "why": "條件編譯發生在預處理期；gcc -DDEBUG 才會把這段帶進編譯。"
   },
   {
    "q": "巨集參數每個都要加括號的原因是？",
    "opts": [
     "美觀",
     "文字替換後運算子優先序可能改變語意，括號保護表達式完整性",
     "編譯器要求",
     "加快展開"
    ],
    "ans": 1,
    "why": "MIN(x+1, y) 沒括號會展開成 x+1<y?x+1:y 之類的優先序災難。"
   }
  ]
 },
 "85": {
  "learn": [
   "標準 I/O（FILE*、有緩衝）vs 系統呼叫（fd、直送 kernel）",
   "fd 0/1/2 = stdin/stdout/stderr；read 回 0 是 EOF",
   "fork 之後父子行程的判斷：回傳 0 是子行程"
  ],
  "quiz": [
   {
    "q": "file descriptor 0、1、2 分別是？",
    "opts": [
     "檔案、目錄、裝置",
     "stdin、stdout、stderr",
     "讀、寫、執行",
     "root、user、group"
    ],
    "ans": 1,
    "why": "這就是 shell 重導向 2>&1 中數字的由來。"
   },
   {
    "q": "read(fd, buf, n) 回傳 0 代表？",
    "opts": [
     "讀了 0 個還要再讀",
     "EOF：資料讀完了",
     "發生錯誤",
     "緩衝區滿了"
    ],
    "ans": 1,
    "why": "錯誤是回 -1；0 是檔案結尾——迴圈讀檔的終止條件。"
   },
   {
    "q": "fork() 回傳值是 0，代表現在這段程式跑在？",
    "opts": [
     "父行程",
     "子行程",
     "核心",
     "另一台機器"
    ],
    "ans": 1,
    "why": "fork 一次呼叫、兩次返回：父拿到子的 pid（>0），子拿到 0。"
   }
  ]
 },
 "86": {
  "learn": [
   "Makefile 規則：target: dependencies + Tab 縮排的 command",
   "make 依時間戳判斷哪些 target 需要重建",
   "變數、%.o: %.c 通用規則、.PHONY 假目標"
  ],
  "quiz": [
   {
    "q": "Makefile 最常見的雷是？",
    "opts": [
     "檔名大小寫",
     "規則的 command 必須用 Tab 縮排，用空白會直接報錯",
     "不能有註解",
     "只能用 gcc"
    ],
    "ans": 1,
    "why": "四個空白看起來一樣但 make 不認；這是 Makefile 新手第一坑。"
   },
   {
    "q": "make 怎麼決定要不要重新編譯某個 target？",
    "opts": [
     "每次全部重編",
     "比較 target 與 dependencies 的修改時間，依賴比較新才重建",
     "隨機",
     "看檔案大小"
    ],
    "ans": 1,
    "why": "時間戳比對讓大專案只重編改過的部分——這就是 make 的價值。"
   },
   {
    "q": "clean 目標要標 .PHONY 的原因是？",
    "opts": [
     "美觀",
     "clean 不是真檔案；若目錄剛好有個叫 clean 的檔案，不標 PHONY 規則就不會執行",
     "加速",
     "官方建議而已"
    ],
    "ans": 1,
    "why": ".PHONY 告訴 make 這個 target 永遠要執行，不做檔案時間戳比對。"
   }
  ]
 },
 "87": {
  "learn": [
   "Collection 三大 interface：List / Set / Queue，外加 Map",
   "ArrayList vs LinkedList：實務 99% 用 ArrayList",
   "HashMap / TreeMap / LinkedHashMap 的差異"
  ],
  "quiz": [
   {
    "q": "List、Set、Map 的核心差異是？",
    "opts": [
     "速度不同而已",
     "List 有序可重複；Set 不可重複；Map 是鍵值對",
     "Map 是 List 的子介面",
     "Set 有索引"
    ],
    "ans": 1,
    "why": "選容器先問語意：要順序+重複→List；要唯一性→Set；要 key→value→Map。"
   },
   {
    "q": "為什麼實務上幾乎都用 ArrayList 而不是 LinkedList？",
    "opts": [
     "LinkedList 已棄用",
     "ArrayList 連續記憶體對 cache 友善，隨機存取 O(1)；LinkedList 到處跳 cache miss 嚴重",
     "ArrayList 執行緒安全",
     "LinkedList 不能放 null"
    ],
    "ans": 1,
    "why": "理論上 LinkedList 兩端 O(1)，但現代硬體上 ArrayList 幾乎全面勝出。"
   },
   {
    "q": "想要「鍵值對且按 key 自動排序」，用哪個？",
    "opts": [
     "HashMap",
     "TreeMap",
     "LinkedHashMap",
     "ArrayDeque"
    ],
    "ans": 1,
    "why": "TreeMap 是紅黑樹（O(log n)、有序）；HashMap 平均 O(1) 但無序；LinkedHashMap 保插入順序。"
   }
  ]
 },
 "88": {
  "learn": [
   "泛型的價值：編譯期型別安全，免強制轉型",
   "泛型方法 <T> 與泛型 class Box<T>",
   "通配符 ? 與 ? extends Number 上界"
  ],
  "quiz": [
   {
    "q": "沒有泛型的 <code>List list</code>（raw type）主要風險是？",
    "opts": [
     "跑比較慢",
     "取值要強制轉型，型別錯誤到執行期才爆 ClassCastException",
     "不能放 null",
     "記憶體加倍"
    ],
    "ans": 1,
    "why": "泛型把錯誤提前到編譯期：List<String> 加入 42 直接編譯失敗。"
   },
   {
    "q": "<code>List&lt;String&gt; list = new ArrayList&lt;&gt;(); list.add(42);</code> 會？",
    "opts": [
     "自動轉成 \"42\"",
     "編譯錯誤",
     "執行期例外",
     "正常加入"
    ],
    "ans": 1,
    "why": "編譯器知道元素必須是 String——這正是泛型存在的目的。"
   },
   {
    "q": "<code>List&lt;? extends Number&gt;</code> 的意思是？",
    "opts": [
     "只能放 Number",
     "元素型別是 Number 或其子類的某種 List（如 List<Integer>）",
     "任何 List",
     "可同時放 Integer 和 String"
    ],
    "ans": 1,
    "why": "上界通配符讓方法能接受 List<Integer>、List<Double> 等，讀取安全但不能隨意 add。"
   }
  ]
 },
 "89": {
  "learn": [
   "Stream 三段式：來源 → 中間操作（lazy）→ 終端操作",
   "filter / map / distinct / sorted / limit",
   "collect(Collectors.toList()) 等終端收集"
  ],
  "quiz": [
   {
    "q": "Stream 的「中間操作」和「終端操作」差別是？",
    "opts": [
     "沒有差別",
     "中間操作（filter/map）回傳 Stream 可串接且 lazy；終端操作（sum/collect）才真正觸發計算",
     "中間操作比較快",
     "終端操作可以串接"
    ],
    "ans": 1,
    "why": "沒有終端操作整條 pipeline 根本不會執行——lazy evaluation。"
   },
   {
    "q": "<code>nums.stream().filter(n -> n%2==0).mapToInt(n -> n*n).sum()</code> 對 [1,2,3,4,5] 的結果是？",
    "opts": [
     "55",
     "20",
     "30",
     "9"
    ],
    "ans": 1,
    "why": "留下 2、4，平方成 4、16，加總 = 20。"
   },
   {
    "q": "把 Stream 結果收集成 List 的寫法是？",
    "opts": [
     ".toArray()",
     ".collect(Collectors.toList())",
     ".sum()",
     ".forEach()"
    ],
    "ans": 1,
    "why": "collect + Collectors 系列（toList/toSet/groupingBy）是最常用的終端收集操作。"
   }
  ]
 },
 "90": {
  "learn": [
   "NullPointerException：null reference 是「十億美元的錯誤」",
   "Optional 用型別表達「可能沒有值」",
   "of / ofNullable / empty 與 map().orElse() 鏈"
  ],
  "quiz": [
   {
    "q": "Optional 解決的核心問題是？",
    "opts": [
     "效能",
     "把「可能沒有值」顯式寫進型別，迫使呼叫端處理，減少 NullPointerException",
     "取代所有 if",
     "自動重試"
    ],
    "ans": 1,
    "why": "回傳 Optional<User> 的函式在型別上就告訴你「可能是空的」，不像 null 是隱形地雷。"
   },
   {
    "q": "<code>Optional.of(x)</code> 和 <code>Optional.ofNullable(x)</code> 差在？",
    "opts": [
     "沒差",
     "of 傳入 null 會立刻拋例外；ofNullable 接受 null（變 empty）",
     "ofNullable 比較快",
     "of 已棄用"
    ],
    "ans": 1,
    "why": "確定非 null 用 of（早爆早發現）；可能為 null 用 ofNullable。"
   },
   {
    "q": "<code>userOpt.map(User::getName).orElse(\"Unknown\")</code> 在 userOpt 為空時回傳？",
    "opts": [
     "null",
     "\"Unknown\"",
     "拋例外",
     "空字串"
    ],
    "ans": 1,
    "why": "map 在 empty 上短路，orElse 提供預設值——一行取代巢狀 null 檢查。"
   }
  ]
 },
 "91": {
  "learn": [
   "Runnable + new Thread(task).start() 啟動執行緒",
   "start() 開新執行緒；run() 只是普通呼叫",
   "join 等待結束；共享資料的競爭條件"
  ],
  "quiz": [
   {
    "q": "<code>t.start()</code> 和 <code>t.run()</code> 的差別是？",
    "opts": [
     "一樣",
     "start() 真的開新執行緒跑 run()；直接呼叫 run() 只是在當前執行緒普通執行",
     "run() 比較快",
     "start() 可以呼叫多次"
    ],
    "ans": 1,
    "why": "誤用 run() 是經典錯誤：程式照跑但根本沒有並行。"
   },
   {
    "q": "<code>t.join()</code> 的作用是？",
    "opts": [
     "合併兩個執行緒的資料",
     "阻塞目前執行緒直到 t 跑完",
     "強制終止 t",
     "重啟 t"
    ],
    "ans": 1,
    "why": "主執行緒要等工作執行緒完成再繼續（例如收集結果）就用 join。"
   },
   {
    "q": "兩個執行緒同時對普通 int 做 n++，結果不可預期，因為 n++ 是？",
    "opts": [
     "原子操作",
     "讀→改→寫三步驟的非原子操作，會交錯",
     "JVM 的 bug",
     "語法糖"
    ],
    "ans": 1,
    "why": "競爭條件：要用 synchronized、Lock 或 AtomicInteger 保護。"
   }
  ]
 },
 "92": {
  "learn": [
   "ReentrantLock：tryLock / 可中斷，比 synchronized 靈活",
   "unlock 必須放 finally",
   "ReadWriteLock 讀多寫少；AtomicInteger 用 CAS"
  ],
  "quiz": [
   {
    "q": "用 ReentrantLock 時 unlock() 為什麼一定放在 finally？",
    "opts": [
     "編譯器要求",
     "中途拋例外也要保證解鎖，否則其他執行緒永遠拿不到鎖（死鎖）",
     "比較快",
     "可以省略"
    ],
    "ans": 1,
    "why": "lock 之後任何路徑（含例外）都必須經過 unlock——Java 沒有 C++ 的 RAII，只能靠 finally。"
   },
   {
    "q": "ReadWriteLock 適合什麼場景？",
    "opts": [
     "寫多讀少",
     "讀多寫少：多個讀執行緒可同時持讀鎖，寫鎖獨佔",
     "單執行緒",
     "不需要鎖的場景"
    ],
    "ans": 1,
    "why": "讀彼此不衝突就讓它們並行，只有寫要排他——吞吐量大增。"
   },
   {
    "q": "AtomicInteger 的 incrementAndGet() 為什麼比 synchronized 快？",
    "opts": [
     "它不保證正確",
     "用 CPU 的 CAS（compare-and-swap）指令實現無鎖原子操作，避免鎖的阻塞開銷",
     "它用了更多記憶體",
     "JIT 特別優化"
    ],
    "ans": 1,
    "why": "CAS 是硬體層級的原子操作；單一計數器這種場景用 Atomic 類最划算。"
   }
  ]
 },
 "93": {
  "learn": [
   "內建注解：@Override / @Deprecated / @FunctionalInterface",
   "反射：執行期取得類別資訊、動態呼叫方法",
   "自訂注解需要 @Retention(RUNTIME) 才能在執行期讀到"
  ],
  "quiz": [
   {
    "q": "@Override 不寫程式也能跑，那寫它的意義是？",
    "opts": [
     "加速",
     "萬一方法名拼錯沒有真的覆寫到，編譯器會直接報錯抓出來",
     "改變存取權限",
     "產生文件"
    ],
    "ans": 1,
    "why": "它是給編譯器的「我打算覆寫」宣告——拼錯字時從沉默 bug 變成編譯錯誤。"
   },
   {
    "q": "反射（reflection）的代價是？",
    "opts": [
     "沒有代價",
     "速度慢且繞過編譯期型別檢查",
     "程式碼變短",
     "不能用在 class 上"
    ],
    "ans": 1,
    "why": "所以業務程式少用；但 Spring、JUnit 等框架靠它做依賴注入與測試發現。"
   },
   {
    "q": "自訂注解想在執行期被反射讀到，必須標？",
    "opts": [
     "@Target(METHOD)",
     "@Retention(RetentionPolicy.RUNTIME)",
     "@FunctionalInterface",
     "@SuppressWarnings"
    ],
    "ans": 1,
    "why": "Retention 預設不到 runtime；不標 RUNTIME 反射就看不到它。"
   }
  ]
 },
 "94": {
  "learn": [
   "執行流程：.java → javac → bytecode → JVM 解譯/JIT",
   "記憶體區域：Heap（物件）/ Stack（呼叫與區域變數）/ Metaspace",
   "分代式 GC：Young（頻繁快）與 Old（少而慢）"
  ],
  "quiz": [
   {
    "q": "Java 的 .class 檔內容是？",
    "opts": [
     "機器碼",
     "跨平台的 bytecode，由 JVM 解譯、熱點再 JIT 編譯成機器碼",
     "原始碼壓縮",
     "設定檔"
    ],
    "ans": 1,
    "why": "「一次編譯到處執行」靠的就是 bytecode + 各平台的 JVM。"
   },
   {
    "q": "遞迴太深拋出的錯誤與發生的記憶體區域是？",
    "opts": [
     "OutOfMemoryError / Heap",
     "StackOverflowError / Stack",
     "ClassCastException / Metaspace",
     "NullPointerException / PC"
    ],
    "ans": 1,
    "why": "每層函式呼叫占一個 stack frame；new 出來的物件才放 Heap（爆了是 OOM）。"
   },
   {
    "q": "分代式 GC 把新物件放 Young Generation 的理由是？",
    "opts": [
     "新物件比較小",
     "「大多數物件死得快」：Young 區頻繁但快速地回收短命物件，活下來的才晉升 Old",
     "Old 區滿了",
     "隨機分配"
    ],
    "ans": 1,
    "why": "弱分代假說：絕大多數物件朝生暮死，分代讓 GC 把力氣花在刀口上。"
   }
  ]
 },
 "95": {
  "learn": [
   "賦值是「綁定」：變數是名牌，不是箱子",
   "<code>==</code> 比內容、<code>is</code> 比身分；判斷 None 用 is",
   "可變/不可變型別、別名陷阱、淺複製 vs 深複製"
  ],
  "try": [
   "把範例的 <code>b = a</code> 改成 <code>b = a[:]</code>，看 a 還會不會跟著變",
   "用 <code>id(a)</code>、<code>id(b)</code> 印出身分證，驗證是否同一物件",
   "試試 <code>x = (1, 2)</code> 然後 <code>x[0] = 9</code>，看 tuple 給你什麼錯誤"
  ],
  "quiz": [
   {
    "q": "<code>a = [1, 2]; b = a; b.append(3)</code> 之後 <code>a</code> 是？",
    "opts": [
     "[1, 2]",
     "[1, 2, 3]",
     "發生錯誤",
     "[3]"
    ],
    "ans": 1,
    "why": "b = a 只是多掛一張名牌，append 改的是同一個 list，所以 a 也看得到。"
   },
   {
    "q": "<code>x == y</code> 是 True、<code>x is y</code> 是 False，代表？",
    "opts": [
     "同一個物件的兩張名牌",
     "內容相同、但是兩個不同的物件",
     "x 和 y 都是 None",
     "語法錯誤"
    ],
    "ans": 1,
    "why": "== 比內容（同值）、is 比身分（同一）。兩個內容一樣的 list 就是這種狀態。"
   },
   {
    "q": "下列哪個型別是「不可變」(immutable)？",
    "opts": [
     "list",
     "dict",
     "tuple",
     "set"
    ],
    "ans": 2,
    "why": "tuple/str/int/float/bool 不可變；list/dict/set 可變。不可變物件「改值」其實是換新物件。"
   }
  ],
  "code": {
   "task": "建立 <code>a = [1, 2, 3]</code>；令 <code>b = a</code>、<code>c = a[:]</code>；對 b append 4 之後，分三行印出：a、<code>a is b</code>、<code>a is c</code>。",
   "stdin": "",
   "expect": "[1, 2, 3, 4]\nTrue\nFalse"
  }
 },
 "96": {
  "learn": [
   "預設值只在「定義時」建立一次——可變預設參數是地雷",
   "*args 收多餘位置參數成 tuple；**kwargs 收關鍵字參數成 dict",
   "呼叫端的 * / ** 是「拆包」；* 之後的參數只能用關鍵字傳"
  ],
  "try": [
   "把範例的 <code>box=None</code> 改回 <code>box=[]</code>，連續呼叫兩次重現陷阱",
   "寫 <code>def info(**kwargs)</code> 把收到的鍵值全印出來",
   "用 <code>total(*range(1, 6))</code> 算 1+2+3+4+5"
  ],
  "quiz": [
   {
    "q": "<code>def f(x, box=[]): box.append(x); return box</code>，連續呼叫 f(1)、f(2)，第二次回傳？",
    "opts": [
     "[2]",
     "[1, 2]",
     "[1]",
     "TypeError"
    ],
    "ans": 1,
    "why": "預設值在 def 時建立一次、所有呼叫共用同一個 list——所以要用 box=None 哨兵寫法。"
   },
   {
    "q": "函式定義 <code>def total(*args)</code> 中，args 的型態是？",
    "opts": [
     "dict",
     "tuple（收集多餘的位置參數）",
     "list",
     "str"
    ],
    "ans": 1,
    "why": "*args 把多的「位置」參數打包成 tuple；**kwargs 才是 dict。"
   },
   {
    "q": "<code>total(*[3, 5, 2])</code> 的意思是？",
    "opts": [
     "把整個 list 當一個參數傳",
     "拆包：等於 total(3, 5, 2)",
     "乘以 list",
     "語法錯誤"
    ],
    "ans": 1,
    "why": "呼叫端的 * 是拆包，跟定義端的「收集」剛好相反方向。"
   }
  ],
  "code": {
   "task": "寫 <code>def stats(*args)</code> 回傳「個數 總和」（以空白隔開的字串）；讀入一行以空白分隔的整數，把它變成 list 後用拆包 <code>stats(*nums)</code> 呼叫並印出結果。",
   "stdin": "3 5 2\n",
   "expect": "3 10"
  }
 },
 "97": {
  "learn": [
   "官方文件是最終答案：docs.python.org 的 Library Reference 最常用",
   "讀簽名：有預設值＝可省略；/ 之前限位置、* 之後限關鍵字",
   "help() / dir() 是 REPL 隨身文件；C++ 查 cppreference、Java 查 Javadoc"
  ],
  "try": [
   "執行 <code>help(str.upper)</code>，讀讀看輸出的格式",
   "用 <code>dir(list)</code> 找一個你沒看過的方法，再 help() 它",
   "查文件：<code>sorted</code> 的 reverse 參數預設值是什麼？"
  ],
  "quiz": [
   {
    "q": "文件簽名 <code>str.split(sep=None, maxsplit=-1)</code> 中，sep=None 代表？",
    "opts": [
     "sep 必須傳 None",
     "sep 有預設值、可以不傳；預設用空白切",
     "split 不能用了",
     "sep 只能是字串"
    ],
    "ans": 1,
    "why": "「參數=值」表示有預設值、呼叫時可省略——這是讀簽名的第一條規則。"
   },
   {
    "q": "<code>sorted(iterable, /, *, key=None, reverse=False)</code> 中，key 要怎麼傳？",
    "opts": [
     "位置或關鍵字都行",
     "只能用關鍵字：sorted(a, key=len)",
     "只能用位置",
     "不能傳"
    ],
    "ans": 1,
    "why": "* 之後的參數是 keyword-only；sorted(a, len) 會 TypeError。"
   },
   {
    "q": "查 C++ <code>vector::push_back</code> 的權威來源是？",
    "opts": [
     "隨便一篇部落格",
     "cppreference.com",
     "只能看書",
     "原始碼"
    ],
    "ans": 1,
    "why": "cppreference 是 C++ 事實上的標準文件；Java 則查 Oracle Javadoc。"
   }
  ],
  "code": {
   "task": "根據文件 <code>str.split(sep, maxsplit)</code>：讀入一行字串，用逗號切、maxsplit=1，把每一段各印一行。",
   "stdin": "a,b,c\n",
   "expect": "a\nb,c"
  }
 }
};

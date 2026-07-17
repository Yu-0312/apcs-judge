// 自 tutorial.html 抽出的資料檔（由頁面以 <script src> 載入）
const CHAPTERS = [
{id:0,title:"什麼是程式？",tag:"入門",content:`
# 第 0 章：寫程式是什麼一回事？

歡迎！這是給**完全沒寫過程式**的你的第一章。讀完只要 5 分鐘。

## 🤔 程式 = 一份「給電腦看的食譜」

你寫好步驟 → 電腦照做 → 給你結果。就像炒菜的食譜：

\`\`\`
1. 把蛋打進碗裡
2. 加鹽
3. 倒進鍋子煎
\`\`\`

電腦的食譜長這樣：

\`\`\`python
name = "Alice"
print("Hello,", name)
\`\`\`

## 🧰 這個教學的三個區域

| 區域 | 用途 |
|------|------|
| **左側目錄** | 全課綱共 101 章，會依目前語言顯示適用章節 |
| **中間（這裡）** | 教材文字 + 「動手試試」+ 小測驗 |
| **右側編輯器** | 真的可以改、可以執行的程式 |

## ▶️ 「執行」按鈕會發生什麼

右側上方有一顆綠色按鈕 **▶ 執行**。
- 按下去，電腦會「讀」右側的程式碼，照著做
- 結果會顯示在右下角的「📤 輸出」框
- **錯了也沒關係**！我們有自動把錯誤訊息翻譯成中文

## 🎯 你的目標（不用記）

完成基礎路線後，你會能：
- 看懂 Python 程式碼
- 寫程式解決小問題
- 準備好挑戰 APCS 初級的題目

> **小提示**：先在上方選一個主力語言。第一次學程式建議選 Python，熟悉後再切到 C++、C 或 Java 比較同一觀念的寫法；所有可用章節都能自由開啟，不需要等待解鎖。

## 👇 開始之前，先按一次「執行」

右邊已經幫你準備好一段「Hello」程式碼。按下右上角的 **▶ 執行**，看看會發生什麼。

看到輸出框出現 \`Hello! 我學會寫程式的第一步了 👋\` 了嗎？恭喜，你剛剛叫電腦做了第一件事！

接下來進入下方的「小測驗」檢查理解，再前往第 1 章。
## 🗺 全站學習路線圖

| 區段 | 章節 | 內容 |
|------|------|------|
| 📘 APCS 考試準備 | 0–26 | 語法 → 演算法 → 競賽題型 |
| 🛠 實用程式 | 27–31 | 檔案、模組、OOP、測試 |
| 🚀 製作專案 | 32–35 | CLI / CSV / API / 遊戲 |
| 🕷📊🤖🎮 專項四軌 | 36–67 | 爬蟲 / 資料分析 / Bot / pygame（任選） |
| 📗🔥 新制與高級題 | 68–70 | 題本識讀、快速冪、分治 |
| ⚡🔧☕ 語言專項 | 71–94 | 切到 C++ / C / Java 模式才會出現 |
| 🧠 進階觀念 | 95–97 | 物件模型、函式參數、讀官方文件 |
| 🧰 除錯與防呆 | 98–100 | 錯誤訊息、系統化除錯、輸入驗證 |

三條建議路線：
- **考 APCS**：0–26 按順序 → 68–70 → 搭配題庫刷題
- **做出自己的專案**：0–20 → 27–35 → 挑一條專項軌（36–67）
- **學第二語言**：先完成 Python 基礎 0–35 → 切換語言分頁，從頭用新語言再走一遍 + 71 起的語言專項

> 💡 95–97 的進階觀念章建議在學完 0–20 之後、開始寫專案之前讀，CP 值最高。

`,
example:`# 這是「註解」，井字號開頭的整行電腦會跳過
# 下面這行是真正的指令：印出一段文字
print("Hello! 我學會寫程式的第一步了 👋")

# 你也可以改字看看，然後再按一次「執行」
print("我的名字是：______")
`},

{id:1,title:"變數與資料型別",tag:"基礎",content:`
# 第 1 章：變數與資料型別

## 1.1 什麼是變數
變數就是「會記住一個值的盒子」。在 Python 中，用 \`=\` 把右邊的值「貼」到左邊的名字上。

\`\`\`python
age = 17
name = "Alice"
height = 168.5
\`\`\`

## 1.2 四大基本型別

| 型別 | 名稱 | 範例 |
|------|------|------|
| int | 整數 | \`42\`, \`-7\`, \`0\` |
| float | 浮點數 | \`3.14\`, \`-0.5\` |
| str | 字串 | \`"hello"\`, \`'APCS'\` |
| bool | 布林 | \`True\`, \`False\` |

用 \`type()\` 可以看型別：

\`\`\`python
print(type(42))        # <class 'int'>
print(type(3.14))      # <class 'float'>
print(type("hi"))      # <class 'str'>
print(type(True))      # <class 'bool'>
\`\`\`

## 1.3 型別轉換
- \`int("42")\` → \`42\`（字串轉整數）
- \`str(42)\` → \`"42"\`（整數轉字串）
- \`float("3.14")\` → \`3.14\`

> **APCS 重點**：input() 讀進來都是字串，必須用 int() 或 float() 轉成數字才能運算！

## 1.4 試試看
按右側「執行」看看：
`,
example:`# 修改 age 試試
age = 17
name = "小明"
print(name, "今年", age, "歲")
print(name, "明年", age + 1, "歲")
`},

{id:2,title:"輸入與輸出",tag:"基礎",content:`
# 第 2 章：輸入與輸出 (I/O)

APCS 實作題九成都需要從 stdin 讀資料、用 print 輸出。

## 2.1 print() 輸出
\`\`\`python
print("Hello")           # Hello
print("a", "b", "c")     # a b c   (預設用空白分隔)
print(1, 2, sep=",")     # 1,2     (改成逗號分隔)
print("end", end="!")    # end!    (預設換行，改成 !)
\`\`\`

## 2.2 input() 輸入
\`input()\` 讀**一整行**，回傳**字串**。

\`\`\`python
name = input()             # 讀一行字串
age  = int(input())        # 讀一行，轉成整數
\`\`\`

## 2.3 一行多數字
最常見題型：第一行 n，第二行 n 個數字。
\`\`\`python
n = int(input())
nums = list(map(int, input().split()))
print(nums)
\`\`\`

\`split()\` 把字串依空白切成串列，\`map(int, ...)\` 把每個元素都轉成 int。

## 2.4 多行輸入
\`\`\`python
n = int(input())
for _ in range(n):
    line = input()
    print(line)
\`\`\`

> **APCS 陷阱**：題目若沒給 n，可能要讀到 EOF。
> 用 \`try: ... except EOFError: break\` 或 \`for line in sys.stdin:\`。

## 2.5 試試看
在右側 stdin 填入：\`5\` 換行 \`1 2 3 4 5\`，然後執行：
`,
example:`n = int(input())
nums = list(map(int, input().split()))
print("總和:", sum(nums))
print("平均:", sum(nums) / n)
print("最大:", max(nums))
print("最小:", min(nums))
`,stdin:`5
1 2 3 4 5
`},

{id:3,title:"運算子與表達式",tag:"基礎",content:`
# 第 3 章：運算子與表達式

## 3.1 算術運算子

| 運算子 | 意義 | 範例 | 結果 |
|--------|------|------|------|
| \`+\` | 加 | \`3+2\` | 5 |
| \`-\` | 減 | \`3-2\` | 1 |
| \`*\` | 乘 | \`3*2\` | 6 |
| \`/\` | 除（浮點） | \`7/2\` | 3.5 |
| \`//\` | 整除 | \`7//2\` | 3 |
| \`%\` | 取餘數 | \`7%2\` | 1 |
| \`**\` | 次方 | \`2**10\` | 1024 |

## 3.2 比較與邏輯

\`==\` \`!=\` \`<\` \`>\` \`<=\` \`>=\` 結果為 \`True\` / \`False\`。

\`\`\`python
print(3 > 2 and 5 < 10)   # True
print(3 > 2 or 5 > 10)    # True
print(not True)           # False
\`\`\`

## 3.3 APCS 常見技巧

### 個位、十位數
\`\`\`python
n = 263
print(n % 10)     # 3 (個位)
print(n // 10 % 10)  # 6 (十位)
print(n // 100)   # 2 (百位)
\`\`\`

### 奇偶判斷
\`\`\`python
if n % 2 == 0:
    print("偶數")
\`\`\`

### 連除取每一位
\`\`\`python
n = 12345
while n > 0:
    print(n % 10)  # 5, 4, 3, 2, 1
    n //= 10
\`\`\`

## 3.4 試試看
`,
example:`# 把一個三位數拆開
n = 752
hundreds = n // 100
tens = n // 10 % 10
ones = n % 10
print(f"百位={hundreds}, 十位={tens}, 個位={ones}")
print(f"加總={hundreds+tens+ones}")
`},

{id:4,title:"條件判斷 if/elif/else",tag:"流程",content:`
# 第 4 章：條件判斷

## 4.1 基本語法
\`\`\`python
if score >= 60:
    print("及格")
elif score >= 50:
    print("補考")
else:
    print("不及格")
\`\`\`

> **重點**：Python 用「縮排」分辨範圍，**4 個空白**或 1 個 tab，不可混用。

## 4.2 巢狀條件
\`\`\`python
if age >= 18:
    if has_license:
        print("可以開車")
    else:
        print("先去考駕照")
\`\`\`

## 4.3 條件運算式（三元）
\`\`\`python
result = "及格" if score >= 60 else "不及格"
\`\`\`

## 4.4 APCS 案例：三角形辨識
\`\`\`python
a, b, c = sorted(map(int, input().split()))
if a + b <= c:
    print("No")
elif a*a + b*b > c*c:
    print("Acute")
elif a*a + b*b == c*c:
    print("Right")
else:
    print("Obtuse")
\`\`\`

> **技巧**：用 \`sorted()\` 先排序，讓最大邊一定是 c，省下大量 if。

## 4.5 試試看
`,
example:`# BMI 分類
weight = 65
height = 1.70
bmi = weight / (height ** 2)
print(f"BMI = {bmi:.1f}")

if bmi < 18.5:
    print("過輕")
elif bmi < 24:
    print("正常")
elif bmi < 27:
    print("過重")
else:
    print("肥胖")
`},

{id:5,title:"迴圈 for / while",tag:"流程",content:`
# 第 5 章：迴圈

## 5.1 for 迴圈
\`\`\`python
for i in range(5):       # 0,1,2,3,4
    print(i)

for i in range(1, 6):    # 1,2,3,4,5
    print(i)

for i in range(0, 10, 2):  # 0,2,4,6,8
    print(i)
\`\`\`

## 5.2 走訪 list / 字串
\`\`\`python
for x in [10, 20, 30]:
    print(x)

for ch in "APCS":
    print(ch)
\`\`\`

要同時拿到索引：
\`\`\`python
for i, x in enumerate([10, 20, 30]):
    print(i, x)   # 0 10, 1 20, 2 30
\`\`\`

## 5.3 while 迴圈
\`\`\`python
n = 10
while n > 0:
    print(n)
    n -= 1
\`\`\`

## 5.4 break / continue
- \`break\`：直接離開迴圈
- \`continue\`：跳過剩下，進下一輪

\`\`\`python
for i in range(10):
    if i == 5: break          # 印到 4 就停
    if i % 2 == 0: continue    # 偶數跳過
    print(i)
\`\`\`

## 5.5 APCS 案例：找最大值
\`\`\`python
nums = list(map(int, input().split()))
best = nums[0]
for x in nums:
    if x > best:
        best = x
print(best)
\`\`\`

當然直接 \`max(nums)\` 更快，但理解迴圈邏輯很重要。

## 5.6 試試看


---

## 📝 補充說明（改進版）

## 5.2 走訪 list / 字串（附拆包教學）


**手動維護索引的方法：**
\`\`\`python
my_list = [10, 20, 30]
i = 0
for x in my_list:
    print(i, x)
    i = i + 1
\`\`\`


**使用 \`enumerate\`（更簡單）：**
\`\`\`python
for i, x in enumerate(my_list):
    print(i, x)
\`\`\`
\`enumerate\` 會產生「配對」：第一個配對是 (0, 10)，第二個是 (1, 20)……  
Python 允許直接把配對裡的兩個值分別放到 \`i\` 和 \`x\` 變數，這叫做**拆包 (unpacking)**。


**你也可以先拿整個配對，再手動拆：**
\`\`\`python
for pair in enumerate(my_list):
    i = pair[0]
    x = pair[1]
    print(i, x)
\`\`\`


## 🎯 range(開始, 結束, 步長) 的「結束」不會被包含


\`\`\`python
# range(3)  → 0, 1, 2   (沒有 3)
# range(1, 5) → 1, 2, 3, 4 (沒有 5)
\`\`\`
**記憶技巧**：\`range(a, b)\` 會產生 a, a+1, ..., b-1，就像「不包含 b」。

`,
example:`# 印九九乘法表 (3-5)
for i in range(3, 6):
    for j in range(1, 10):
        print(f"{i}x{j}={i*j}", end="  ")
    print()
`},

{id:6,title:"字串處理",tag:"資料",content:`
# 第 6 章：字串

## 6.1 字串基本

\`\`\`python
s = "Hello, APCS"
print(len(s))      # 11
print(s[0])        # H
print(s[-1])       # S
print(s.lower())   # hello, apcs
print(s.upper())   # HELLO, APCS
\`\`\`

## 6.2 切片 (slicing)
\`s[start:end]\`，取 start 到 end-1。

\`\`\`python
s = "ABCDEFG"
print(s[0:3])    # ABC
print(s[2:])     # CDEFG
print(s[:3])     # ABC
print(s[::-1])   # GFEDCBA  (反轉！)
\`\`\`

## 6.3 常用方法

| 方法 | 用途 |
|------|------|
| \`s.split()\` | 切成 list |
| \`s.strip()\` | 去頭尾空白 |
| \`s.replace(a,b)\` | 取代 |
| \`s.count(c)\` | 算 c 出現次數 |
| \`s.find(c)\` | 找位置 (找不到回 -1) |
| \`",".join(L)\` | list 接成字串 |
| \`s.isdigit()\` | 全是數字嗎？ |
| \`s.isalpha()\` | 全是字母嗎？ |

## 6.4 APCS 案例：秘密差
\`\`\`python
s = input()
A = sum(int(s[-i-1]) for i in range(len(s)) if i % 2 == 0)  # 奇數位
B = sum(int(s[-i-1]) for i in range(len(s)) if i % 2 == 1)  # 偶數位
print(abs(A - B))
\`\`\`

## 6.5 試試看


---

## 📝 補充說明（改進版）

## 6.2 切片 (slicing) － 從「迴圈反轉」到「切片魔法」


**先用迴圈手動反轉：**
\`\`\`python
s = "ABCDE"
reversed_str = ""
for ch in s:
    reversed_str = ch + reversed_str   # 把新的字母加到前面
print(reversed_str)   # "EDCBA"
\`\`\`


**Python 切片 (slice) 寫法：**
\`\`\`python
s = "ABCDE"
print(s[1:4])    # "BCD"  (索引 1 到 3)
print(s[::2])    # "ACE"  (步長 2)
print(s[::-1])   # "EDCBA" (步長 -1 → 從尾走到頭，反轉)
\`\`\`
切片的格式是 \`[起始:結束:步長]\`：
- 起始沒寫 → 從頭開始
- 結束沒寫 → 走到最後
- 步長為正：往右走；步長為負：往左走


> 🚫 **重要**：字串一旦建立就不能修改裡面的某個字元。  
> \`\`\`python
> s = "hello"
> s[0] = "H"   # ❌ TypeError
> \`\`\`
> 要修改只能建立新字串：\`s = "H" + s[1:]\`

`,
example:`s = "Hello APCS Python"
print("長度:", len(s))
print("反轉:", s[::-1])
print("大寫:", s.upper())
print("單字數:", len(s.split()))
print("把 APCS 換成 程式:", s.replace("APCS", "程式"))
`},

{id:7,title:"List（一維陣列）",tag:"資料",content:`
# 第 7 章：List

List 是 APCS 最重要的資料結構，存「一串」資料。

## 7.1 建立 list
\`\`\`python
a = [10, 20, 30, 40]
b = list(map(int, input().split()))   # 從輸入讀
c = [0] * 5                            # [0,0,0,0,0]
d = list(range(1, 6))                  # [1,2,3,4,5]
e = [i*i for i in range(5)]            # [0,1,4,9,16]  (list comprehension)
\`\`\`

## 7.2 存取與修改
\`\`\`python
a[0] = 100
print(a[-1])   # 最後一個
print(len(a))
\`\`\`

## 7.3 常用方法

| 方法 | 用途 | 範例 |
|------|------|------|
| \`a.append(x)\` | 尾端加 | \`[1,2].append(3)\` → \`[1,2,3]\` |
| \`a.pop()\` | 尾端移除 | |
| \`a.sort()\` | 原地排序 | |
| \`sorted(a)\` | 回傳新 list | |
| \`a.reverse()\` | 反轉 | |
| \`a.count(x)\` | 計數 | |
| \`a.index(x)\` | 找位置 | |
| \`sum(a)\` \`max(a)\` \`min(a)\` | | |

## 7.4 APCS 案例：成績指標
\`\`\`python
n = int(input())
scores = sorted(map(int, input().split()))
print(*scores)

fail = [x for x in scores if x < 60]
print(max(fail) if fail else "best case")

passed = [x for x in scores if x >= 60]
print(min(passed) if passed else "worst case")
\`\`\`

> **技巧**：list comprehension \`[x for x in L if cond]\` 是 APCS 高頻寫法。

## 7.5 試試看


---

## 📝 補充說明（改進版）

## 7.4 印出 list 內容的三種方法


\`\`\`python
scores = [30, 55, 60, 88]


# 方法1：用迴圈印出，中間加空格
for s in scores:
    print(s, end=" ")
print()   # 換行


# 方法2：直接用 print(scores) → 會印出 [30, 55, 60, 88] 包含括號和逗號


# 方法3：用 * 解包 (unpacking) － 把 list 裡的元素拆開當作獨立參數
print(*scores)   # 等同於 print(30, 55, 60, 88)


# 你也可以自己指定分隔符
print(*scores, sep=", ")   # 30, 55, 60, 88
\`\`\`


## 📊 list 與字串的差異對照表


| 特性 | 字串 (str) | 列表 (list) |
|------|-----------|-------------|
| 可以修改元素 | ❌ 不行 | ✅ 可以 |
| 切片回傳 | 新字串 | 新列表 |
| 常用方法 | \`split\`, \`replace\`, \`find\` | \`append\`, \`pop\`, \`sort\` |

`,
example:`nums = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3]
print("原始:", nums)
print("排序:", sorted(nums))
print("總和:", sum(nums))
print("最大:", max(nums))
print("出現 5 的次數:", nums.count(5))
print("偶數:", [x for x in nums if x % 2 == 0])
`},

{id:8,title:"二維陣列",tag:"資料",content:`
# 第 8 章：二維陣列

## 8.1 建立 2D list
\`\`\`python
# 3x4 全 0 矩陣
grid = [[0]*4 for _ in range(3)]
# 注意不要寫 [[0]*4]*3 — 那是 3 個指向同一個 row 的引用！
\`\`\`

## 8.2 讀入 2D
題目常見：第一行 n m，接下來 n 行各 m 個數。

\`\`\`python
n, m = map(int, input().split())
grid = []
for _ in range(n):
    row = list(map(int, input().split()))
    grid.append(row)
\`\`\`

或一行：
\`\`\`python
grid = [list(map(int, input().split())) for _ in range(n)]
\`\`\`

## 8.3 走訪
\`\`\`python
for i in range(n):
    for j in range(m):
        print(grid[i][j], end=" ")
    print()
\`\`\`

## 8.4 APCS 案例：對角線總和
\`\`\`python
n = int(input())
g = [list(map(int, input().split())) for _ in range(n)]

main = sum(g[i][i] for i in range(n))
anti = sum(g[i][n-1-i] for i in range(n))
print(main, anti)
\`\`\`

## 8.5 上下左右四方向
\`\`\`python
dx = [-1, 1, 0, 0]   # 上 下 左 右
dy = [0, 0, -1, 1]

for d in range(4):
    ni, nj = i + dx[d], j + dy[d]
    if 0 <= ni < n and 0 <= nj < m:
        # 合法的鄰居
        pass
\`\`\`

## 8.6 試試看


---

## 📝 補充說明（改進版）

## ❌ 錯誤示範（千萬不要這樣寫）


\`\`\`python
grid = [[0]*3] * 2   # 看起來像是 2 列 3 行
grid[0][0] = 1
print(grid)  # 輸出 [[1, 0, 0], [1, 0, 0]]  ← 第二列也被改到了！
\`\`\`


**為什麼？**  
\`[[0]*3]\` 產生一個 list，\`*2\` 只是複製了「同一個 list 的參考」。兩列實際上指向同一個記憶體位置。


## ✅ 正確寫法


\`\`\`python
grid = [[0]*3 for _ in range(2)]  # 用 list comprehension 重新建立每一列
grid[0][0] = 1
print(grid)  # [[1, 0, 0], [0, 0, 0]]  ← 正確
\`\`\`

`,
example:`# 印一個棋盤
n = 5
g = [[0]*n for _ in range(n)]
for i in range(n):
    for j in range(n):
        g[i][j] = (i + j) % 2

for row in g:
    print(' '.join(str(x) for x in row))
`},

{id:9,title:"函式 def",tag:"結構",content:`
# 第 9 章：函式

## 9.1 為什麼要函式
- 重複利用同段邏輯
- 把複雜問題切小
- 容易測試與除錯

## 9.2 定義與呼叫
\`\`\`python
def add(a, b):
    return a + b

print(add(3, 5))   # 8
\`\`\`

## 9.3 多個回傳值
\`\`\`python
def min_max(lst):
    return min(lst), max(lst)

lo, hi = min_max([3, 1, 4, 1, 5, 9])
print(lo, hi)   # 1 9
\`\`\`

## 9.4 預設參數
\`\`\`python
def greet(name, greeting="Hello"):
    print(greeting, name)

greet("Alice")              # Hello Alice
greet("Bob", "Hi")          # Hi Bob
\`\`\`

## 9.5 APCS 案例：判斷質數
\`\`\`python
def is_prime(n):
    if n < 2: return False
    for i in range(2, int(n**0.5) + 1):
        if n % i == 0: return False
    return True

for x in range(2, 20):
    if is_prime(x):
        print(x, end=" ")
\`\`\`

> **APCS 技巧**：把判斷邏輯拆成 helper function，主程式就清楚很多。

## 9.6 遞迴入門
函式呼叫自己 = 遞迴。
\`\`\`python
def fact(n):
    if n <= 1: return 1
    return n * fact(n-1)

print(fact(5))   # 120
\`\`\`

## 9.7 試試看


---

## 📝 補充說明（改進版）

## 9.5 APCS 案例：判斷質數（含數學解釋）


\`\`\`python
def is_prime(n):
    if n < 2:
        return False


    # 只需要檢查到「平方根」就好，不用到 n-1
    # 為什麼？因為如果 n = a * b，其中一個因數一定 ≤ √n
    # 例如 36 = 6*6，檢查到 6 就夠了；36 = 4*9，4 ≤ 6
    limit = int(n ** 0.5)   # 例如 n=37, √37 ≈ 6.08, int=6
    # range(2, limit+1) 才會檢查 2,3,4,5,6
    for i in range(2, limit + 1):
        if n % i == 0:
            return False
    return True


print(is_prime(37))   # True
print(is_prime(36))   # False
\`\`\`


## 多個回傳值的拆包（tuple unpacking）


\`\`\`python
def min_max(lst):
    return min(lst), max(lst)


# 新手友善版
result = min_max([3,1,4])
small = result[0]   # 3
large = result[1]   # 4


# Pythonic 版（拆包）
small, large = min_max([3,1,4])
# 等號左邊的變數數量要跟右邊的 tuple 元素數量一致
\`\`\`

`,
example:`def is_prime(n):
    if n < 2: return False
    for i in range(2, int(n**0.5) + 1):
        if n % i == 0: return False
    return True

primes = [x for x in range(2, 50) if is_prime(x)]
print("50 以下質數:", primes)
print("個數:", len(primes))
`},

{id:10,title:"字典 Dict 與集合 Set",tag:"資料",content:`
# 第 10 章：字典與集合

## 10.1 Dict（鍵-值對）
\`\`\`python
score = {"Alice": 90, "Bob": 75}
print(score["Alice"])         # 90
score["Cathy"] = 88           # 新增
score["Alice"] = 100          # 修改
del score["Bob"]              # 刪除
print("Alice" in score)       # True
\`\`\`

走訪：
\`\`\`python
for name, s in score.items():
    print(name, s)
\`\`\`

## 10.2 計數神器：Counter / get
APCS 經常要算「每個字出現幾次」：

\`\`\`python
s = "ABBCAAB"
cnt = {}
for c in s:
    cnt[c] = cnt.get(c, 0) + 1
print(cnt)   # {'A': 3, 'B': 3, 'C': 1}
\`\`\`

更簡潔：
\`\`\`python
from collections import Counter
print(Counter("ABBCAAB"))
\`\`\`

## 10.3 Set（集合，去重）
\`\`\`python
nums = [1, 2, 2, 3, 3, 3, 4]
print(set(nums))         # {1, 2, 3, 4}
print(len(set(nums)))    # 4 (相異元素數)
\`\`\`

## 10.4 APCS 案例：最少相異字母
\`\`\`python
n = int(input())
best = None
for _ in range(n):
    s = input()
    k = len(set(s))   # 相異字母數
    if best is None or k < best[0] or (k == best[0] and s < best[1]):
        best = (k, s)
print(best[1])
\`\`\`

## 10.5 試試看


---

## 📝 補充說明（改進版）

## 10.2 計數神器：從手動到 get 再到 Counter


\`\`\`python
s = "ABBCAAB"


# ---------- 方法1：用手動判斷 key 是否存在 ----------
cnt = {}
for c in s:
    if c in cnt:
        cnt[c] = cnt[c] + 1
    else:
        cnt[c] = 1
print(cnt)   # {'A': 3, 'B': 3, 'C': 1}


# ---------- 方法2：用 dict.get() 更簡潔 ----------
# dict.get(key, 預設值) 如果 key 不存在，回傳預設值
cnt = {}
for c in s:
    cnt[c] = cnt.get(c, 0) + 1
print(cnt)


# ---------- 方法3：用 collections.Counter（最簡單）----------
from collections import Counter
cnt = Counter(s)
print(cnt)   # Counter({'A':3, 'B':3, 'C':1})
\`\`\`

`,
example:`from collections import Counter

words = "the quick brown fox jumps over the lazy dog the fox".split()
cnt = Counter(words)
print("字頻:", dict(cnt))
print("最常見:", cnt.most_common(3))
print("不同字數:", len(cnt))
`},

{id:11,title:"演算法基礎",tag:"進階",content:`
# 第 11 章：APCS 必備演算法

## 11.1 線性搜尋
\`\`\`python
def find(L, target):
    for i, x in enumerate(L):
        if x == target: return i
    return -1
\`\`\`

## 11.2 排序
Python 內建 \`sort()\` 就夠 APCS 初級用。

\`\`\`python
nums.sort()                       # 升冪
nums.sort(reverse=True)           # 降冪
nums.sort(key=lambda x: -x)       # 自訂排序鍵

# 多條件排序：先依分數降冪，分數同則名字升冪
students.sort(key=lambda x: (-x[1], x[0]))
\`\`\`

## 11.3 二分搜尋（中級）
適用於**已排序**的資料。

\`\`\`python
def bsearch(L, target):
    lo, hi = 0, len(L) - 1
    while lo <= hi:
        mid = (lo + hi) // 2
        if L[mid] == target: return mid
        if L[mid] < target: lo = mid + 1
        else: hi = mid - 1
    return -1
\`\`\`

或用內建：\`from bisect import bisect_left\`

## 11.4 前綴和（中級）
讓「區間總和」變 O(1)。

\`\`\`python
a = [3, 1, 4, 1, 5, 9, 2, 6]
ps = [0]
for x in a:
    ps.append(ps[-1] + x)

# a[l..r] 總和（含 l, r, 0-indexed）
def range_sum(l, r):
    return ps[r+1] - ps[l]
\`\`\`

## 11.5 質數篩（埃氏篩）
\`\`\`python
N = 100
sieve = [True] * (N+1)
sieve[0] = sieve[1] = False
for i in range(2, int(N**0.5)+1):
    if sieve[i]:
        for j in range(i*i, N+1, i):
            sieve[j] = False
primes = [i for i in range(N+1) if sieve[i]]
\`\`\`

## 11.6 GCD / LCM
\`\`\`python
def gcd(a, b):
    while b:
        a, b = b, a % b
    return a

def lcm(a, b):
    return a * b // gcd(a, b)
\`\`\`

## 11.7 Kadane — 最大連續子陣列和 🔥【中級必備 / 高級題基石】
> 「**最大連續**子陣列和」這幾個關鍵字一出現，幾乎都是 Kadane。
> 一行核心思路：對每個位置 \`x\`，問自己「**接續**前面、還是**從這裡重啟**」。

\`\`\`python
def kadane(a):
    cur = best = a[0]
    for x in a[1:]:
        cur = max(x, cur + x)   # 要嘛重啟、要嘛延伸
        best = max(best, cur)
    return best
\`\`\`

**陷阱**：題目若要求「至少選 1 個」、且陣列全為負，答案是「最大的負數」而不是 0。
**進階（高級題）**：把它擴成 **2D Kadane**（固定左右兩欄、把列壓成 1D 再跑 Kadane）→ 第 24 章後段會用到。

## 11.8 試試看


---

## 📝 補充說明（改進版）

## 11.4 前綴和（從暴力到加速）


\`\`\`python
# 問題：經常需要問「陣列中從 L 到 R 的總和是多少？」
a = [3, 1, 4, 1, 5, 9, 2, 6]


# ---------- 方法1：每次直接加（慢，O(n) 每次查詢）----------
def range_sum_slow(L, R):
    total = 0
    for i in range(L, R+1):
        total += a[i]
    return total
print(range_sum_slow(2, 5))   # 4+1+5+9 = 19


# ---------- 方法2：前綴和（預先計算，查詢 O(1)）----------
# 前綴和陣列 ps[i] 表示 a[0] + a[1] + ... + a[i-1]
ps = [0]  # ps[0] = 0
for x in a:
    ps.append(ps[-1] + x)
# ps = [0, 3, 4, 8, 9, 14, 23, 25, 31]


def range_sum_fast(L, R):
    return ps[R+1] - ps[L]


print(range_sum_fast(2, 5))   # 19
\`\`\`


## 11.7 Kadane — 最大連續子陣列和（完整推導）


**問題**：找出一段連續的區間，讓總和最大。  
例如 \`[-2, 1, -3, 4, -1, 2, 1, -5, 4]\` 的答案是 6（子陣列 \`[4,-1,2,1]\`）。


**方法1：暴力枚舉 (O(n²))**
\`\`\`python
a = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
n = len(a)
best = a[0]
for i in range(n):
    total = 0
    for j in range(i, n):
        total += a[j]
        if total > best:
            best = total
print("暴力法答案:", best)   # 6
\`\`\`


**方法2：Kadane 演算法 (O(n))**  
關鍵想法：當你走到第 i 個數字時，你可以選擇  
(1) 從這裡重新開始 (只取 a[i])  
(2) 繼續接上前面的區塊 (前面區塊總和 + a[i])  
取比較大的那個，就是「以 i 結尾的最佳子陣列和」。


\`\`\`python
cur = a[0]      # 以目前位置結尾的最大和
best = a[0]     # 整體最大和
for x in a[1:]:
    cur = max(x, cur + x)   # 要嘛重啟，要嘛延續
    best = max(best, cur)
print("Kadane 答案:", best)   # 6
\`\`\`


**手動追蹤表（讓你完全看懂）**


| i | a[i] | cur = max(a[i], 前cur+a[i]) | best |
|---|------|-----------------------------|------|
| 0 | -2   | -2                          | -2   |
| 1 | 1    | max(1, -2+1= -1) = 1        | 1    |
| 2 | -3   | max(-3, 1-3= -2) = -2       | 1    |
| 3 | 4    | max(4, -2+4=2) = 4          | 4    |
| 4 | -1   | max(-1, 4-1=3) = 3          | 4    |
| 5 | 2    | max(2, 3+2=5) = 5           | 5    |
| 6 | 1    | max(1, 5+1=6) = 6           | 6    |
| 7 | -5   | max(-5, 6-5=1) = 1          | 6    |
| 8 | 4    | max(4, 1+4=5) = 5           | 6    |

`,
example:`# 前綴和應用：找子陣列總和 = K 的個數
a = [1, 2, 3, 4, 5, 2, 1, 3]
K = 5

ps = [0]
for x in a:
    ps.append(ps[-1] + x)

cnt = 0
for i in range(len(a)):
    for j in range(i, len(a)):
        if ps[j+1] - ps[i] == K:
            cnt += 1
            print(f"  a[{i}..{j}] = {a[i:j+1]}")
print(f"\\n共 {cnt} 個子陣列總和為 {K}")
`},

{id:12,title:"巢狀迴圈",tag:"流程",content:`
# 第 12 章：巢狀迴圈

## 13.1 雙層迴圈
\`\`\`python
for i in range(3):
    for j in range(4):
        print(f"({i},{j})", end=" ")
    print()
\`\`\`

## 13.2 走訪 2D
\`\`\`python
g = [[1,2,3],[4,5,6],[7,8,9]]
for row in g:
    for x in row:
        print(x, end=" ")
    print()
\`\`\`

## 13.3 雙重迴圈典型題：找對

「在陣列中找 i<j 且 a[i]+a[j]==K」：
\`\`\`python
for i in range(n):
    for j in range(i+1, n):
        if a[i] + a[j] == K:
            print(i, j); break
\`\`\`
複雜度 O(n²)，n ≤ 5000 還可以。

## 13.4 進階：三角形枚舉
枚舉三邊 (i<j<k)：
\`\`\`python
for i in range(n):
    for j in range(i+1, n):
        for k in range(j+1, n):
            ...
\`\`\`
O(n³)，只能用在 n ≤ 200 左右。

## 13.5 試試看


---

## 📝 補充說明（改進版）

## 12.2 走訪 2D 的追蹤表範例


將一個 3x4 的矩陣轉置成 4x3：


\`\`\`python
matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
]


transpose = []
for j in range(4):          # 外層迴圈跑 0~3（原矩陣的欄）
    new_row = []
    for i in range(3):      # 內層迴圈跑 0~2（原矩陣的列）
        new_row.append(matrix[i][j])
    transpose.append(new_row)
\`\`\`


**手動追蹤表：**


| j | 內層 i 取值 | new_row 內容 | transpose 累積 |
|---|------------|--------------|----------------|
| 0 | 0,1,2      | [1,5,9]      | [[1,5,9]] |
| 1 | 0,1,2      | [2,6,10]     | [[1,5,9], [2,6,10]] |
| 2 | 0,1,2      | [3,7,11]     | ... |
| 3 | 0,1,2      | [4,8,12]     | ... |

`,
example:`# 印帕斯卡三角形
n = 7
g = [[1] for _ in range(n)]
for i in range(1, n):
    for j in range(1, i):
        g[i].insert(j, g[i-1][j-1] + g[i-1][j])
    g[i].append(1)

for i in range(n):
    print(" " * (n-i), end="")
    print(' '.join(f"{x:2}" for x in g[i]))
`},

{id:13,title:"List Comprehension 進階",tag:"資料",content:`
# 第 13 章：List Comprehension

## 14.1 基本形式
\`[expr for x in iterable]\`

\`\`\`python
squares = [x*x for x in range(10)]
\`\`\`

## 14.2 加條件過濾
\`\`\`python
evens = [x for x in range(20) if x % 2 == 0]
\`\`\`

## 14.3 條件運算式（三元）
\`\`\`python
labels = ['偶' if x % 2 == 0 else '奇' for x in range(10)]
\`\`\`

## 14.4 雙層 list comprehension
\`\`\`python
pairs = [(i, j) for i in range(3) for j in range(3) if i != j]
\`\`\`

## 14.5 攤平 2D
\`\`\`python
g = [[1,2,3],[4,5,6]]
flat = [x for row in g for x in row]  # [1,2,3,4,5,6]
\`\`\`

## 14.6 字典/集合 comprehension
\`\`\`python
sq_dict = {x: x*x for x in range(5)}     # {0:0, 1:1, 2:4, ...}
uniq = {x % 3 for x in range(10)}        # {0, 1, 2}
\`\`\`

## 14.7 APCS 應用：讀矩陣
\`\`\`python
g = [list(map(int, input().split())) for _ in range(n)]
\`\`\`

## 14.8 試試看


---

## 📝 補充說明（改進版）

## 13.1 基本形式：從迴圈到 comprehension


**目標：產生 0~9 的平方列表**


\`\`\`python
# 方法1：用迴圈
squares = []
for x in range(10):
    squares.append(x * x)


# 方法2：用 list comprehension（讀作：「x 的平方 for x in range(10)」）
squares = [x * x for x in range(10)]
\`\`\`


## 13.2 加條件過濾：只留偶數的平方


\`\`\`python
# 方法1：迴圈
evens_sq = []
for x in range(10):
    if x % 2 == 0:
        evens_sq.append(x * x)


# 方法2：comprehension（讀作：「x 的平方 for x in range(10) if x 是偶數」）
evens_sq = [x * x for x in range(10) if x % 2 == 0]
\`\`\`


**語法順序：** \`[表達式 for 變數 in 可迭代物件 if 條件]\`

`,
example:`# 找九九乘法表中是質數的位置
def is_prime(n):
    if n < 2: return False
    for i in range(2, int(n**.5)+1):
        if n%i == 0: return False
    return True

primes_in_table = [(i, j, i*j) for i in range(2, 10) for j in range(i, 10) if is_prime(i*j)]
print(f"九九乘法表中是質數的乘積:")
for i, j, v in primes_in_table:
    print(f"  {i} x {j} = {v}")
`},

{id:14,title:"排序進階：key 與 lambda",tag:"資料",content:`
# 第 14 章：排序進階

## 15.1 自訂 key
\`sort(key=函式)\` 可以指定「依什麼排序」。

\`\`\`python
words = ["apple", "kiwi", "banana"]
words.sort(key=len)
print(words)   # ['kiwi', 'apple', 'banana']
\`\`\`

## 15.2 lambda 速成
匿名函式：\`lambda 參數: 表達式\`

\`\`\`python
add = lambda a, b: a + b
print(add(3, 5))   # 8
\`\`\`

## 15.3 多條件排序
回傳 tuple，自動依序比較。

\`\`\`python
students = [("Alice", 90), ("Bob", 85), ("Cara", 90)]
# 先依分數降冪，分數同則名字升冪
students.sort(key=lambda x: (-x[1], x[0]))
\`\`\`

## 15.4 APCS 案例：成績排名
\`\`\`python
n = int(input())
data = []
for _ in range(n):
    name, score = input().split()
    data.append((name, int(score)))

data.sort(key=lambda x: (-x[1], x[0]))
for i, (name, score) in enumerate(data, 1):
    print(f"第 {i} 名: {name} {score}")
\`\`\`

## 15.5 sorted vs sort
- \`a.sort()\`：原地修改，回傳 None
- \`sorted(a)\`：回傳新 list，不動原本的

## 15.6 試試看


---

## 📝 補充說明（改進版）

## 15.2 lambda 速成（從一般函式到匿名函式）


**問題：依字串長度排序**


\`\`\`python
words = ["apple", "kiwi", "banana"]


# ---------- 方法1：定義一個函式傳給 key ----------
def my_len(word):
    return len(word)


words.sort(key=my_len)
print(words)   # ['kiwi', 'apple', 'banana']


# ---------- 方法2：用 lambda 匿名函式（省去另外定義）----------
words.sort(key=lambda word: len(word))
# lambda 參數: 回傳值


# 更常見的例子：依分數高低排序學生，分數相同依名字
students = [("Alice", 90), ("Bob", 85), ("Cara", 90)]
students.sort(key=lambda s: (-s[1], s[0]))  # 負號表示降冪
\`\`\`

`,
example:`students = [
    ("Alice", 85, 17),
    ("Bob", 92, 16),
    ("Cara", 85, 18),
    ("Dan", 92, 15),
]

# 先依分數降冪，分數同依年齡升冪
students.sort(key=lambda x: (-x[1], x[2]))
for name, score, age in students:
    print(f"{name}: 分數={score}, 年齡={age}")
`},

{id:15,title:"遞迴入門",tag:"進階",content:`
# 第 15 章：遞迴 (Recursion)

## 16.1 什麼是遞迴？
函式呼叫自己。所有遞迴都需要：
1. **基礎情況 (base case)**：能直接答出的最小問題
2. **遞迴關係**：把問題化簡成更小的同類問題

## 16.2 階乘
\`\`\`python
def fact(n):
    if n <= 1: return 1       # base
    return n * fact(n-1)      # 遞迴
\`\`\`

## 16.3 費氏數列
\`\`\`python
def fib(n):
    if n < 2: return n
    return fib(n-1) + fib(n-2)
\`\`\`
> ⚠️ 直接遞迴算 fib(40) 會很慢！要加 memo。

## 16.4 加記憶（memoization）
\`\`\`python
from functools import lru_cache

@lru_cache
def fib(n):
    if n < 2: return n
    return fib(n-1) + fib(n-2)

print(fib(100))   # 瞬間
\`\`\`

## 16.5 河內塔
\`\`\`python
def hanoi(n, a, b, c):  # n 個盤從 a 經 b 移到 c
    if n == 0: return
    hanoi(n-1, a, c, b)
    print(f"移盤 {n}: {a} → {c}")
    hanoi(n-1, b, a, c)

hanoi(3, 'A', 'B', 'C')
\`\`\`

## 16.6 APCS 高頻：回溯 (Backtracking)
\`\`\`python
def perms(arr, path):
    if not arr:
        print(path); return
    for i in range(len(arr)):
        perms(arr[:i] + arr[i+1:], path + [arr[i]])

perms([1,2,3], [])
\`\`\`

## 16.7 試試看


---

## 📝 補充說明（改進版）

## 16.1 用縮排視覺化遞迴呼叫過程


\`\`\`python
def recite(n, depth=0):
    print("  " * depth + f"進入 recite({n})")
    if n <= 0:
        print("  " * depth + f"  base case, 回傳 1")
        return 1
    result = n * recite(n-1, depth+1)
    print("  " * depth + f"離開 recite({n}), 回傳 {result}")
    return result


recite(3)
\`\`\`


輸出會清楚看到每次呼叫的深度與返回順序。

`,
example:`# 8 皇后計數
def queens(n):
    count = [0]
    def solve(row, cols, d1, d2):
        if row == n:
            count[0] += 1
            return
        for c in range(n):
            if c in cols or row-c in d1 or row+c in d2:
                continue
            cols.add(c); d1.add(row-c); d2.add(row+c)
            solve(row+1, cols, d1, d2)
            cols.remove(c); d1.remove(row-c); d2.remove(row+c)
    solve(0, set(), set(), set())
    return count[0]

for n in range(4, 9):
    print(f"{n} 皇后有 {queens(n)} 種放法")
`},

{id:16,title:"枚舉題型",tag:"進階",content:`
# 第 16 章：枚舉與模擬

## 17.1 枚舉是什麼
當資料量小，直接「**試所有可能**」就能解。APCS 初級超過半數題目可用枚舉。

## 17.2 一維枚舉
\`\`\`python
# 找最佳分配
best = -1
for x in range(n+1):
    val = f(x, n-x)
    if val > best:
        best = val
print(best)
\`\`\`

## 17.3 二維枚舉（雙重 for）
\`\`\`python
# 在矩陣中找符合條件的子矩陣
for i in range(n):
    for j in range(n):
        if check(i, j):
            ...
\`\`\`

## 17.4 位元枚舉子集合
n 個物品有 2ⁿ 種子集合。

\`\`\`python
n = 4
for mask in range(1 << n):    # 0 ~ 15
    subset = [i for i in range(n) if mask & (1 << i)]
    print(subset)
\`\`\`

## 17.5 模擬題技巧
**讀清楚規則 → 一步步照做**。

例如：購物車流動、銀行排隊、機器人移動。
寫程式前先用紙筆模擬一次！

## 17.6 APCS 案例：機器人路徑
\`\`\`python
x, y = 0, 0
dx = {'N': 0, 'S': 0, 'E': 1, 'W': -1}
dy = {'N': 1, 'S': -1, 'E': 0, 'W': 0}

for c in input():
    x += dx[c]; y += dy[c]

print(x, y)
\`\`\`

## 17.7 試試看


---

## 📝 補充說明（改進版）

## 17.4 位元枚舉子集合（白話版）


\`\`\`python
# 假設有 3 個物品：A, B, C
# 用 mask 的二進位表示「選哪些東西」：1 表示選，0 表示不選


for mask in range(1 << 3):   # 1<<3 = 8，mask 從 0 到 7
    items = []
    if mask & 1:   # 檢查最低位（代表 A）
        items.append("A")
    if mask & 2:   # 檢查第二位（代表 B）
        items.append("B")
    if mask & 4:   # 檢查第三位（代表 C）
        items.append("C")
    print(f"{mask:3} ({mask:03b}) → {items}")
# 輸出：
#   0 (000) → []
#   1 (001) → ['A']
#   2 (010) → ['B']
#   3 (011) → ['A', 'B']
#   4 (100) → ['C']
#   5 (101) → ['A', 'C']
#   6 (110) → ['B', 'C']
#   7 (111) → ['A', 'B', 'C']
\`\`\`

`,
example:`# 枚舉所有子集合並算和
nums = [3, 1, 4, 1, 5]
n = len(nums)
target = 8

print(f"找總和為 {target} 的子集合:")
for mask in range(1 << n):
    subset = [nums[i] for i in range(n) if mask & (1 << i)]
    if sum(subset) == target:
        print(f"  {subset}")
`},

{id:17,title:"進階資料結構",tag:"進階",content:`
# 第 17 章：進階資料結構

## 18.1 deque（雙端佇列）
從兩端都能 O(1) push/pop。

\`\`\`python
from collections import deque

q = deque([1, 2, 3])
q.append(4)        # [1,2,3,4]
q.appendleft(0)    # [0,1,2,3,4]
q.pop()            # 4
q.popleft()        # 0
\`\`\`

**用途**：BFS、滑動視窗。

## 18.2 heap（堆）
取最小值 O(log n)。Python 是「小堆」。

\`\`\`python
import heapq

h = []
heapq.heappush(h, 5)
heapq.heappush(h, 2)
heapq.heappush(h, 8)
print(heapq.heappop(h))   # 2 (最小)
\`\`\`

**用途**：Dijkstra、第 k 小、合併多串。

## 18.3 Counter
快速計數。
\`\`\`python
from collections import Counter
c = Counter("APCSAPCS")
print(c.most_common(2))   # [('A',2), ('P',2)]
\`\`\`

## 18.4 defaultdict
自動建立預設值。
\`\`\`python
from collections import defaultdict
d = defaultdict(list)
d["A"].append(1)
d["A"].append(2)
print(d["A"])   # [1, 2]
\`\`\`

## 18.5 BFS 模板
\`\`\`python
from collections import deque
def bfs(start, grid):
    n, m = len(grid), len(grid[0])
    q = deque([start])
    visited = {start}
    while q:
        x, y = q.popleft()
        for dx, dy in [(-1,0),(1,0),(0,-1),(0,1)]:
            nx, ny = x+dx, y+dy
            if 0<=nx<n and 0<=ny<m and grid[nx][ny]==0 and (nx,ny) not in visited:
                visited.add((nx,ny))
                q.append((nx,ny))
\`\`\`

## 18.6 試試看


---

## 📝 補充說明（改進版）

## 為什麼 BFS 要用 deque？


BFS 需要「從左邊拿元素（popleft）」，如果使用 list 的 \`pop(0)\`，每次會 O(n) 時間，非常慢。  
\`deque\`（雙端佇列）設計成兩端操作都 O(1)。


\`\`\`python
from collections import deque


queue = deque([1, 2, 3])
queue.append(4)      # 右邊加
queue.popleft()      # 左邊拿 → 2,3,4
\`\`\`

`,
example:`# 用 heap 找前 3 大
import heapq
nums = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]
print("前 3 大:", heapq.nlargest(3, nums))
print("前 3 小:", heapq.nsmallest(3, nums))

# 用 Counter 找最常出現的字
from collections import Counter
s = "the quick brown fox jumps over the lazy dog"
c = Counter(s.split())
print("字頻 Top 2:", c.most_common(2))
`},

{id:18,title:"常見錯誤與除錯",tag:"進階",content:`
# 第 18 章：常見錯誤與除錯

## 19.1 縮排錯誤 IndentationError
**Python 用縮排定範圍。不可混用 tab 與空白。**
建議：永遠用 4 個空白。

## 19.2 名稱錯誤 NameError
\`\`\`python
print(x)   # NameError if x not defined
\`\`\`
通常是拼錯字或忘了宣告。

## 19.3 型別錯誤 TypeError
\`\`\`python
print("年齡:" + 17)   # TypeError: str + int
# 改成 print("年齡:" + str(17))
# 或    print(f"年齡:{17}")
\`\`\`

## 19.4 索引錯誤 IndexError
\`\`\`python
a = [1, 2, 3]
print(a[3])   # IndexError, 沒有索引 3
\`\`\`
記住：len(a) 個元素，索引是 0 ~ len(a)-1。

## 19.5 整數除法陷阱
\`\`\`python
print(7 / 2)    # 3.5 (浮點)
print(7 // 2)   # 3 (整除)
print(-7 // 2)  # -4 (向下取整，不是 -3！)
\`\`\`

## 19.6 2D list 的引用陷阱
\`\`\`python
g = [[0]*3] * 3
g[0][0] = 1
print(g)
# 期望: [[1,0,0],[0,0,0],[0,0,0]]
# 實際: [[1,0,0],[1,0,0],[1,0,0]]  全變了！
# 正解: g = [[0]*3 for _ in range(3)]
\`\`\`

## 19.7 除錯三招

1. **print 大法**：在關鍵位置印變數值
2. **小例子試**：n=1, n=2 邊界
3. **讀錯誤訊息**：行號通常準確

## 19.8 試試看：找 bug


---

## 📝 補充說明（改進版）

## 📖 如何閱讀 Python 的錯誤訊息


當你的程式崩潰時，會出現類似這樣的紅色文字：


\`\`\`
Traceback (most recent call last):
  File "mycode.py", line 5, in <module>
    print(1/0)
ZeroDivisionError: division by zero
\`\`\`


**重點解讀：**
- 最後一行：**錯誤類型**（ZeroDivisionError）和 **簡短說明**（division by zero）
- 往上找 \`File "..."\` → 告訴你是哪個檔案的哪一行出錯（line 5）
- 再上一行是那一行的程式碼內容


> 🎯 **SOP**：
> 1. 先看最後一行，知道錯在哪種類型。
> 2. 看最上面的 \`File\` 行，找到檔案與行號。
> 3. 修正那一行程式碼。

`,
example:`# 這支程式想算 1+2+3+...+n 但有 bug
# 試著修正
def sum_to(n):
    total = 0
    for i in range(n):
        total += i
    return total

# 預期: sum_to(5) = 15
print(sum_to(5))   # 應該是 15 但實際是？

# 提示：range(n) 是 0..n-1
# 修正方法（取消註解）:
# def sum_to(n):
#     total = 0
#     for i in range(1, n+1):
#         total += i
#     return total
`},

{id:19,title:"綜合練習：完整 APCS 題",tag:"實戰",content:`
# 第 19 章：完整 APCS 題解析

## 20.1 解題流程示範

題目：**成績指標**（2016/03 APCS 初級）

> 讀入全班成績，排序後找出**不及格中的最高分**和**及格中的最低分**（60 分為及格界線）。

### Step 1：讀清楚題目
- 輸入：第一行人數 n，第二行 n 個分數
- 輸出：排序後分數 / 最高不及格 / 最低及格
- 找不到時印 best case 或 worst case

### Step 2：想小例子
輸入 \`[55, 88, 60, 30]\`
排序後 \`[30, 55, 60, 88]\`
不及格 \`[30, 55]\` → 最高 55
及格 \`[60, 88]\` → 最低 60

### Step 3：選資料結構與演算法
- 排序：\`sort()\` 或 \`sorted()\`
- 篩選：list comprehension

### Step 4：動手寫
\`\`\`python
n = int(input())
scores = sorted(map(int, input().split()))
print(*scores)

fail = [x for x in scores if x < 60]
print(max(fail) if fail else "best case")

passed = [x for x in scores if x >= 60]
print(min(passed) if passed else "worst case")
\`\`\`

### Step 5：測樣本與邊界
- 樣本 1：\`[0,11,22,33,55,66,77,99,88,44]\` ✅
- 樣本 2：\`[13]\` → 全不及格 → worst case ✅
- 樣本 3：\`[73,65]\` → 全及格 → best case + 65 ✅

## 20.2 APCS 應試節奏

| 時間 | 動作 |
|------|------|
| 0-2 分 | 讀題、圈關鍵字 |
| 2-5 分 | 思考演算法、確認邊界 |
| 5-15 分 | 寫程式 |
| 15-18 分 | 用樣本測試 |
| 18-20 分 | 測邊界值（n=1、全相同） |

## 20.3 試試看：完整流程


---

## 📝 補充說明（改進版）

## 🧠 解題標準流程（填空練習）


1. **題目要我輸出什麼？**  
   → _________________________________


2. **輸入資料的大小（n 範圍）？**  
   → _________________________________


3. **如果 n 很大，不能用哪種寫法？**  
   → _________________________________


4. **手算一個小範例（例如 n=3）：**  
   輸入：_______  
   預期輸出：_______

`,
example:`# 試做：找最大連續子陣列和 (Kadane 演算法)
# 輸入: 9 個整數 -2 1 -3 4 -1 2 1 -5 4
# 輸出: 6 (子陣列 [4,-1,2,1])

stdin = "9\\n-2 1 -3 4 -1 2 1 -5 4\\n"
import io, sys
sys.stdin = io.StringIO(stdin)

n = int(input())
a = list(map(int, input().split()))

cur = best = a[0]
for x in a[1:]:
    cur = max(x, cur + x)
    best = max(best, cur)

print(f"輸入: {a}")
print(f"最大連續和: {best}")
`},

{id:20,title:"APCS 實戰技巧",tag:"進階",content:`
# 第 20 章：APCS 實戰技巧

## 12.1 讀入模板（背起來）

\`\`\`python
# 模板 1：固定行數
n = int(input())
nums = list(map(int, input().split()))

# 模板 2：n 行各一筆
n = int(input())
data = [input() for _ in range(n)]

# 模板 3：n x m 矩陣
n, m = map(int, input().split())
g = [list(map(int, input().split())) for _ in range(n)]

# 模板 4：讀到 EOF
import sys
for line in sys.stdin:
    line = line.strip()
    if not line: continue
    # 處理 line
\`\`\`

## 12.2 輸出格式

\`\`\`python
# 空白分隔
print(*nums)            # 1 2 3 4 5

# 換行分隔
print(*nums, sep="\\n")

# 自訂分隔
print(",".join(map(str, nums)))   # 1,2,3,4,5

# 浮點數兩位小數
print(f"{x:.2f}")
\`\`\`

## 12.3 常見錯誤

> ❌ \`int(input().split())\` — split 回傳 list，不能直接 int
> ✅ \`list(map(int, input().split()))\`

> ❌ \`a = b = [0]*5\` 後改 a，b 也變 — 它們指向同一個 list
> ✅ \`a, b = [0]*5, [0]*5\`

> ❌ \`[[0]*m]*n\` — n 個 row 指向同一個！
> ✅ \`[[0]*m for _ in range(n)]\`

## 12.4 解題流程（重要！）

1. **讀題**：圈關鍵詞 — 數量級、輸入格式、邊界條件
2. **想例子**：用小例子算一遍
3. **設計流程**：先寫註解，再寫程式
4. **動手寫**：先求對，再求快
5. **測樣本**：所有樣本都過才提交
6. **想邊界**：n=1？全相同？空輸入？

## 12.5 時間複雜度速覽

| 寫法 | 大致複雜度 | n 上限 |
|------|-----------|--------|
| 兩層 for | O(n²) | n ≤ 5000 |
| 一層 for + sort | O(n log n) | n ≤ 10⁶ |
| 一層 for | O(n) | n ≤ 10⁷ |
| 二分搜尋 | O(log n) | n ≤ 10⁹ |

## 12.6 試試看：綜合練習


---

## 📝 補充說明（改進版）

## ⏱️ 複雜度的生活比喻


| 複雜度 | 比喻 |
|--------|------|
| O(1) | 直接從書架上拿第 3 本書 |
| O(n) | 從第一本看到最後一本，找一本書 |
| O(n²) | 兩兩比較所有書（例如找出相同書名的對） |
| O(log n) | 在字典裡用二分法找一個字，每次砍一半 |

`,
example:`# APCS 題型總演練：成績指標
# 輸入: 10 / 0 11 22 33 55 66 77 99 88 44
# 輸出: 排序成績 / 最高不及格 / 最低及格

stdin = "10\\n0 11 22 33 55 66 77 99 88 44\\n"
import io, sys
sys.stdin = io.StringIO(stdin)

n = int(input())
scores = sorted(map(int, input().split()))
print(*scores)

fail = [x for x in scores if x < 60]
print(max(fail) if fail else "best case")

passed = [x for x in scores if x >= 60]
print(min(passed) if passed else "worst case")
`},
{id:21,title:"樹的走訪",tag:"進階",content:`
# 第 21 章：樹的走訪 (Tree Traversal)

> 🎯 **APCS 考試準備**：樹是 3-4 級題的常客。先把走訪寫熟，DP on tree 就只是延伸。

## 21.1 樹是什麼？

樹 = **沒有環的連通圖**。最常見的表示法：

\`\`\`python
# children[u] = u 的所有子節點
children = {0:[1,2], 1:[3,4], 2:[], 3:[], 4:[]}
\`\`\`

或用「父節點陣列」：\`parent[i] = i 的父親\`。

## 21.2 三種走訪順序

對二元樹（左右子）：

| 順序 | 規則 | 用途 |
|------|------|------|
| 前序 (pre) | 根→左→右 | 複製樹、序列化 |
| 中序 (in) | 左→根→右 | BST 排序輸出 |
| 後序 (post) | 左→右→根 | 算子樹大小、釋放記憶體 |

## 21.3 一般樹用 DFS 走

\`\`\`python
def dfs(u, par=-1):
    # 進入 u 時做的事
    for v in children[u]:
        if v != par:
            dfs(v, u)
    # 離開 u 時做的事（後序處理）
\`\`\`

## 21.4 子樹大小（最常考）

\`\`\`python
size = [1]*n
def dfs(u, par):
    for v in children[u]:
        if v != par:
            dfs(v, u)
            size[u] += size[v]
\`\`\`

這就是「樹 DP」的雛形：子樹算完才能算自己。

## 21.5 注意事項

- **遞迴深度**：Python 預設 1000，深樹要 \`sys.setrecursionlimit(10**6)\`
- **不要重訪父節點**：用 \`par\` 參數擋住


---

## 📝 補充說明（改進版）

## 🌳 生活中哪裡有樹？


- **電腦的資料夾**：一個資料夾裡有檔案和子資料夾，子資料夾裡又有檔案… → 就是樹結構。
- **公司職位**：CEO → 部門主管 → 員工 → 也是樹。


樹的每個節點可以有很多個「孩子」，但不會有環（不會 A 是 B 的上司同時 B 也是 A 的上司）。

`,example:`
# 子樹大小範例
import sys
sys.setrecursionlimit(10**6)

# 樹：0─1─3
#       └─4
#     └─2
n = 5
children = {0:[1,2], 1:[3,4], 2:[], 3:[], 4:[]}

size = [1]*n
def dfs(u):
    for v in children[u]:
        dfs(v)
        size[u] += size[v]

dfs(0)
print(*size)  # 5 3 1 1 1
`},
{id:22,title:"圖論：BFS / DFS",tag:"進階",content:`
# 第 22 章：圖論基礎 (BFS / DFS)

> 🎯 **APCS 考試準備**：迷宮、連通分量、最短步數，幾乎都是 BFS。

## 22.1 圖的表示

\`\`\`python
# 鄰接表（最常用）
graph = {0:[1,2], 1:[0,3], 2:[0,3], 3:[1,2]}
\`\`\`

讀邊：
\`\`\`python
from collections import defaultdict
g = defaultdict(list)
for _ in range(m):
    u, v = map(int, input().split())
    g[u].append(v)
    g[v].append(u)   # 無向圖才加這行
\`\`\`

## 22.2 BFS：找最短步數

\`\`\`python
from collections import deque
def bfs(start):
    dist = {start: 0}
    q = deque([start])
    while q:
        u = q.popleft()
        for v in g[u]:
            if v not in dist:
                dist[v] = dist[u] + 1
                q.append(v)
    return dist
\`\`\`

**為什麼 BFS = 最短步數？** 一層一層擴展，第一次碰到目標就是最少步數。

## 22.3 DFS：找連通分量

\`\`\`python
visited = set()
def dfs(u):
    visited.add(u)
    for v in g[u]:
        if v not in visited:
            dfs(v)

count = 0
for node in range(n):
    if node not in visited:
        dfs(node)
        count += 1
print(count)   # 連通分量數
\`\`\`

## 22.4 二維迷宮

把 \`grid[i][j]\` 想成圖中一個節點，四方向就是邊：
\`\`\`python
dr = [-1,1,0,0]; dc = [0,0,-1,1]
for d in range(4):
    ni, nj = i+dr[d], j+dc[d]
    if 0<=ni<R and 0<=nj<C and grid[ni][nj]=='.':
        ...
\`\`\`


---

## 📝 補充說明（改進版）

## 樹 vs 圖 對照表


| 特性 | 樹 (Tree) | 圖 (Graph) |
|------|-----------|-------------|
| 有沒有環 | 沒有 | 可能有 |
| 連通性 | 一定連通 | 可能不連通 |
| 走訪時注意 | 小心不要往回走（用 parent 參數） | 一定要記錄 visited |

`,example:`
# 連通分量數
n, m = 6, 4
edges = [(0,1),(1,2),(3,4)]   # 3 個連通分量: {0,1,2}, {3,4}, {5}

from collections import defaultdict
g = defaultdict(list)
for u,v in edges:
    g[u].append(v); g[v].append(u)

visited = set()
def dfs(u):
    visited.add(u)
    for v in g[u]:
        if v not in visited:
            dfs(v)

cnt = 0
for u in range(n):
    if u not in visited:
        dfs(u); cnt += 1
print(cnt)   # 3
`},
{id:23,title:"最短路徑與拓樸",tag:"進階",content:`
# 第 23 章：最短路徑 + 拓樸排序

> 🎯 **APCS 考試準備**：有權重就用 Dijkstra；DAG 排程就用拓樸排序。

## 23.1 Dijkstra：非負權重最短路

核心想法：每次取出「目前距離最短的點」展開。用最小堆（heapq）達成。

\`\`\`python
import heapq
def dijkstra(start, n):
    dist = [float('inf')] * n
    dist[start] = 0
    pq = [(0, start)]
    while pq:
        d, u = heapq.heappop(pq)
        if d > dist[u]: continue
        for v, w in g[u]:           # g[u] = [(鄰居, 邊權)]
            if dist[u] + w < dist[v]:
                dist[v] = dist[u] + w
                heapq.heappush(pq, (dist[v], v))
    return dist
\`\`\`

時間：**O((n + m) log n)**

## 23.2 為什麼不用 BFS？

BFS 假設每條邊長度都是 1。一旦邊有不同權重（例：距離、花費），BFS 結果就錯了。

## 23.3 拓樸排序：DAG 的線性排程

「課程先修」、「工序相依」這類題目。Kahn 演算法（BFS 變形）：

\`\`\`python
from collections import deque
indeg = [0]*n
for u in range(n):
    for v in g[u]:
        indeg[v] += 1

q = deque([u for u in range(n) if indeg[u]==0])
order = []
while q:
    u = q.popleft()
    order.append(u)
    for v in g[u]:
        indeg[v] -= 1
        if indeg[v] == 0: q.append(v)

# 若 len(order) < n → 有環
\`\`\`

## 23.4 速查表

| 情境 | 演算法 | 複雜度 |
|------|--------|--------|
| 無權圖最短步數 | BFS | O(n+m) |
| 非負權最短路 | Dijkstra | O((n+m)log n) |
| 有負權 | Bellman-Ford | O(nm) |
| 全點對 | Floyd-Warshall | O(n³) |


---

## 📝 補充說明（改進版）

## 無權圖的最短路：用 BFS（先學這個）


\`\`\`python
from collections import deque


def bfs_shortest(graph, start, target):
    dist = {start: 0}
    q = deque([start])
    while q:
        u = q.popleft()
        if u == target: return dist[u]
        for v in graph[u]:
            if v not in dist:
                dist[v] = dist[u] + 1
                q.append(v)
    return -1
\`\`\`


**當邊有權重（不同距離）時，BFS 就不適用了，要用 Dijkstra。**

`,example:`
# Dijkstra 範例
import heapq

# 4 點圖：0─1(1)─3(1), 0─2(4)─3(1)
g = {0:[(1,1),(2,4)], 1:[(0,1),(3,1)], 2:[(0,4),(3,1)], 3:[(1,1),(2,1)]}
n = 4

dist = [float('inf')]*n
dist[0] = 0
pq = [(0, 0)]
while pq:
    d, u = heapq.heappop(pq)
    if d > dist[u]: continue
    for v, w in g[u]:
        if d + w < dist[v]:
            dist[v] = d + w
            heapq.heappush(pq, (dist[v], v))

print(*dist)   # 0 1 3 2
`},
{id:24,title:"進階 DP：LIS / 背包",tag:"進階",content:`
# 第 24 章：進階 DP（LIS、背包、LCS）

> 🎯 **APCS 考試準備**：DP 是 4 級題分水嶺。先把「狀態 / 轉移」想清楚。

## 24.1 DP 的三步驟

1. **定義狀態**：\`dp[i]\` 代表什麼？
2. **寫出轉移**：\`dp[i]\` 怎麼從前面算出來？
3. **初始 + 順序**：邊界值、計算順序

## 24.2 最長遞增子序列 (LIS)

**狀態**：\`dp[i]\` = 以 a[i] 結尾的最長遞增子序列長度

\`\`\`python
def lis(a):
    n = len(a)
    dp = [1]*n
    for i in range(n):
        for j in range(i):
            if a[j] < a[i]:
                dp[i] = max(dp[i], dp[j]+1)
    return max(dp)
\`\`\`
**O(n²)**。進階可用 \`bisect\` 做到 O(n log n) 👇

### 🔥【高級題】LIS O(n log n) — 耐心排序 + 二分搜
**直覺**：維護一個「目前最佳的尾巴序列」\`tails\`，新元素若大於尾端就 append；否則用二分搜把它**取代**第一個 ≥ 它的位置。\`tails\` 的長度即 LIS 長度（但內容不是真正的 LIS）。

\`\`\`python
from bisect import bisect_left
def lis_fast(a):
    tails = []
    for x in a:
        i = bisect_left(tails, x)
        if i == len(tails): tails.append(x)
        else: tails[i] = x
    return len(tails)
\`\`\`
\`bisect_left\` → 嚴格遞增；要非遞減改 \`bisect_right\`。

## 24.3 0/1 背包

n 個物品（重量 w[i]、價值 v[i]），背包容量 W，求最大價值總和。

**狀態**：\`dp[j]\` = 容量 j 時最大價值

\`\`\`python
def knapsack(w, v, W):
    dp = [0]*(W+1)
    for i in range(len(w)):
        for j in range(W, w[i]-1, -1):    # 注意倒序
            dp[j] = max(dp[j], dp[j-w[i]] + v[i])
    return dp[W]
\`\`\`

**為什麼倒序？** 正序的話會把同一個物品用兩次（變成完全背包）。

## 24.4 最長共同子序列 (LCS)

**狀態**：\`dp[i][j]\` = a[:i] 和 b[:j] 的 LCS 長度

\`\`\`python
def lcs(a, b):
    m, n = len(a), len(b)
    dp = [[0]*(n+1) for _ in range(m+1)]
    for i in range(1, m+1):
        for j in range(1, n+1):
            if a[i-1] == b[j-1]:
                dp[i][j] = dp[i-1][j-1] + 1
            else:
                dp[i][j] = max(dp[i-1][j], dp[i][j-1])
    return dp[m][n]
\`\`\`

## 24.5 🔥【高級題】完全背包（無限背包）
跟 0/1 背包**只差迴圈方向**：每個物品可以拿無限次，所以 j 由小到大跑（允許重用）。

\`\`\`python
def unbounded_knapsack(w, v, W):
    dp = [0]*(W+1)
    for i in range(len(w)):
        for j in range(w[i], W+1):    # 正序 → 同物品可重複加
            dp[j] = max(dp[j], dp[j-w[i]] + v[i])
    return dp[W]
\`\`\`

**口訣**：0/1 倒序、完全正序。

## 24.6 🔥【高級題】編輯距離 (Edit Distance / Levenshtein)
從字串 a 改成字串 b 的最少操作數（插入、刪除、替換各算 1 次）。

\`\`\`python
def edit_distance(a, b):
    m, n = len(a), len(b)
    dp = [[0]*(n+1) for _ in range(m+1)]
    for i in range(m+1): dp[i][0] = i      # 全刪
    for j in range(n+1): dp[0][j] = j      # 全插
    for i in range(1, m+1):
        for j in range(1, n+1):
            if a[i-1] == b[j-1]:
                dp[i][j] = dp[i-1][j-1]
            else:
                dp[i][j] = 1 + min(
                    dp[i-1][j],     # 刪
                    dp[i][j-1],     # 插
                    dp[i-1][j-1]    # 替換
                )
    return dp[m][n]
\`\`\`

跟 LCS 的關係：兩者都是 \`dp[i][j]\` + 字元比較，但**轉移方向不同**——LCS 取 max、Edit Distance 取 min+1。

## 24.7 🔥【高級題】區間 DP — 矩陣連乘 (Matrix Chain)
給定矩陣鏈 \`A1 (p0×p1) · A2 (p1×p2) · … · An (p(n-1)×pn)\`，求**最少純量乘法次數**。

**狀態**：\`dp[l][r]\` = 把 \`A_l … A_r\` 乘起來的最少代價。
**轉移**：枚舉切點 k，\`dp[l][r] = min(dp[l][k] + dp[k+1][r] + p[l-1]·p[k]·p[r])\`。

\`\`\`python
def matrix_chain(p):           # p = [p0, p1, ..., pn]，共 n 個矩陣
    n = len(p) - 1
    dp = [[0]*(n+1) for _ in range(n+1)]
    for length in range(2, n+1):                     # 區間長度由短到長
        for l in range(1, n - length + 2):
            r = l + length - 1
            dp[l][r] = float('inf')
            for k in range(l, r):                    # 切點
                cost = dp[l][k] + dp[k+1][r] + p[l-1]*p[k]*p[r]
                dp[l][r] = min(dp[l][r], cost)
    return dp[1][n]

print(matrix_chain([30, 35, 15, 5, 10, 20, 25]))     # 15125
\`\`\`

**所有區間 DP 的共同骨架**：**外層 by length、內層 by left、最內層 by split point**。看到「合併相鄰、求最佳代價」就想到它。


---

## 📝 補充說明（改進版）

## 以費氏數列為例：從遞迴到 DP


\`\`\`python
# 問題：第 n 個費氏數


# ---------- 方法1：純遞迴（慢，O(2^n)）----------
def fib_rec(n):
    if n <= 1: return n
    return fib_rec(n-1) + fib_rec(n-2)


# ---------- 方法2：遞迴 + 記憶化（memoization）----------
memo = {}
def fib_memo(n):
    if n in memo: return memo[n]
    if n <= 1: return n
    memo[n] = fib_memo(n-1) + fib_memo(n-2)
    return memo[n]


# ---------- 方法3：DP（迭代，從小到大，O(n)）----------
def fib_dp(n):
    if n <= 1: return n
    dp = [0] * (n+1)
    dp[1] = 1
    for i in range(2, n+1):
        dp[i] = dp[i-1] + dp[i-2]
    return dp[n]
# 這就是「動態規劃」的精髓：先算小問題，再用小問題答案組出大問題。
\`\`\`

`,example:`
# 0/1 背包範例
weights = [2, 3, 4, 5]
values  = [3, 4, 5, 6]
W = 5

dp = [0]*(W+1)
for i in range(len(weights)):
    for j in range(W, weights[i]-1, -1):
        dp[j] = max(dp[j], dp[j-weights[i]] + values[i])

print(dp[W])   # 7 (取 w=2 + w=3)
`},
{id:25,title:"Union-Find 並查集",tag:"進階",content:`
# 第 25 章：Union-Find（並查集）

> 🎯 **APCS 考試準備**：判斷連通、最小生成樹、離線查詢的萬用工具。

## 25.1 核心需求

兩件事，都要 O(近乎常數)：
1. \`find(x)\` — x 在哪個集合？
2. \`union(x, y)\` — 把 x 跟 y 合併成同一個集合

## 25.2 基本實作（路徑壓縮）

\`\`\`python
parent = list(range(n))    # 一開始每個人自成一群

def find(x):
    if parent[x] != x:
        parent[x] = find(parent[x])   # 路徑壓縮
    return parent[x]

def union(x, y):
    rx, ry = find(x), find(y)
    if rx != ry:
        parent[rx] = ry
        return True   # 真的合併了
    return False      # 早就在同一群
\`\`\`

## 25.3 經典應用：算連通分量數

\`\`\`python
n, m = map(int, input().split())
parent = list(range(n))
for _ in range(m):
    u, v = map(int, input().split())
    union(u, v)
print(len(set(find(i) for i in range(n))))
\`\`\`

## 25.4 進階：按秩合併

\`\`\`python
rank = [0]*n
def union(x, y):
    rx, ry = find(x), find(y)
    if rx == ry: return False
    if rank[rx] < rank[ry]: rx, ry = ry, rx
    parent[ry] = rx
    if rank[rx] == rank[ry]: rank[rx] += 1
    return True
\`\`\`

## 25.5 解什麼題？

- 朋友圈分組
- Kruskal 最小生成樹
- 動態加邊判斷連通
- 「最早什麼時候 a, b 連通」這種離線題


---

## 📝 補充說明（改進版）

## 👥 生活例子：朋友圈


假設有 5 個人：A、B、C、D、E。  
告訴你：  
- A 和 B 是朋友  
- B 和 C 是朋友  
- D 和 E 是朋友  


問：A 和 C 是不是朋友？（是，因為 A-B-C 連在一起）  
A 和 D 是不是朋友？（不是）  


這個問題要怎麼寫程式？  
- 可以用「集合」記錄每個人屬於哪個群組  
- 每次合併兩個群組（朋友的朋友）  
- **並查集就是專門做這件事的資料結構**。

`,example:`
# Union-Find 算連通分量
n = 6
edges = [(0,1),(1,2),(3,4)]

parent = list(range(n))
def find(x):
    if parent[x] != x:
        parent[x] = find(parent[x])
    return parent[x]
def union(x, y):
    rx, ry = find(x), find(y)
    if rx != ry:
        parent[rx] = ry

for u, v in edges:
    union(u, v)

groups = len({find(i) for i in range(n)})
print(groups)   # 3
`},
{id:26,title:"字串：hash 與 Trie",tag:"進階",content:`
# 第 26 章：字串演算法 — hash & Trie

> 🎯 **APCS 考試準備**：字串比對、前綴查詢的兩大利器。

## 26.1 字串 hash：把字串變數字

讓「比對兩段字串是否相同」變 O(1)。

\`\`\`python
MOD = 10**9 + 7
BASE = 131

def get_hashes(s):
    n = len(s)
    h = [0]*(n+1)
    p = [1]*(n+1)
    for i, c in enumerate(s):
        h[i+1] = (h[i]*BASE + ord(c)) % MOD
        p[i+1] = p[i]*BASE % MOD
    return h, p

def sub_hash(h, p, l, r):
    # s[l..r-1] 的 hash
    return (h[r] - h[l]*p[r-l]) % MOD
\`\`\`

預處理 O(n)，每次查詢 O(1)。

## 26.2 KMP（觀念）

「在字串 t 中找 pattern p 的位置」，O(n+m)。重點是 fail array：紀錄「失敗時可以跳到哪」。

實戰 Python 通常直接用 \`t.find(p)\` 或 \`re.search\`，但要懂 fail 函數的原理。

## 26.3 Trie（前綴樹）

存大量字串，快速查「有沒有某前綴開頭」。

\`\`\`python
trie = {}
def insert(word):
    node = trie
    for c in word:
        node = node.setdefault(c, {})
    node['$'] = True   # 結尾標記

def search(word):
    node = trie
    for c in word:
        if c not in node: return False
        node = node[c]
    return '$' in node

def starts_with(prefix):
    node = trie
    for c in prefix:
        if c not in node: return False
        node = node[c]
    return True
\`\`\`

每次操作 O(L)，L 為字串長度。

## 26.4 什麼時候用？

| 需求 | 解法 |
|------|------|
| 比較兩段子字串是否相等 | hash |
| 找出 p 在 t 出現的所有位置 | KMP |
| 自動補完、字典查詢 | Trie |
| 最長公共前綴 | Trie 或 hash |


---

## 📝 補充說明（改進版）

## 🔢 字串 hash 的白話文


我們想把字串變成一個數字，這樣比較兩個字串時只要比較數字（很快）。  
但不同字串可能算出相同數字嗎？有可能（碰撞），所以我們用很大的質數當 MOD 來減少碰撞。


例如：「abc」→ (97*131^2 + 98*131^1 + 99) mod 大數。  
只要 MOD 夠大，碰撞機率極低。

`,example:`
# Trie 範例
trie = {}
words = ["app", "apple", "ape", "bat"]
for w in words:
    node = trie
    for c in w:
        node = node.setdefault(c, {})
    node['$'] = True

def starts_with(prefix):
    node = trie
    for c in prefix:
        if c not in node: return False
        node = node[c]
    return True

print(starts_with("ap"))   # True
print(starts_with("ba"))   # True
print(starts_with("cat"))  # False
`},
{id:27,title:"檔案 I/O",tag:"實用",content:`
# 第 27 章：讀寫檔案

> 🛠 **實用程式**：APCS 用 stdin/stdout 就夠；做小工具就一定要會檔案 I/O。

## 27.1 讀整個檔案

\`\`\`python
with open("data.txt", "r", encoding="utf-8") as f:
    text = f.read()
print(text)
\`\`\`

\`with\` 是「結束自動關檔」的安全寫法，比 \`f.close()\` 不容易出錯。

## 27.2 一行一行讀（大檔案用這個）

\`\`\`python
with open("data.txt", "r", encoding="utf-8") as f:
    for line in f:
        line = line.rstrip("\\n")    # 去掉尾部換行
        print(line)
\`\`\`

## 27.3 寫檔案

\`\`\`python
with open("out.txt", "w", encoding="utf-8") as f:
    f.write("Hello\\n")
    f.write("APCS\\n")
\`\`\`

模式：
- \`"r"\` 讀 / \`"w"\` 寫（蓋掉）/ \`"a"\` 附加
- \`"rb"\` / \`"wb"\` 二進位（圖片、PDF 用）

## 27.4 處理路徑

\`\`\`python
from pathlib import Path
p = Path("data") / "scores.txt"
text = p.read_text(encoding="utf-8")     # 一行搞定
p.write_text("hello", encoding="utf-8")
\`\`\`

\`pathlib\` 比手拼字串路徑安全，自動處理跨平台分隔符。

## 27.5 JSON：結構化資料的最佳搭擋

\`\`\`python
import json
data = {"name": "Alice", "scores": [90, 85, 77]}
# 存
Path("data.json").write_text(json.dumps(data, ensure_ascii=False, indent=2))
# 讀
loaded = json.loads(Path("data.json").read_text())
print(loaded["scores"])
\`\`\`

> 💡 **本章練習用 stdin/stdout 模擬**（瀏覽器沙箱不能寫真正檔案）。回到本機再用 \`open()\`。


---

## 📝 補充說明（改進版）

## 為什麼要用 \`with\` 語句？


\`\`\`python
# 一般寫法（容易忘記關檔）
f = open("data.txt")
data = f.read()
f.close()   # 如果忘記，可能佔用資源


# with 寫法（離開縮排自動關閉，即使發生錯誤也會關）
with open("data.txt") as f:
    data = f.read()
# 離開 with 區塊後，檔案已自動關閉
\`\`\`

`,example:`
# 模擬「讀檔內容、算平均」
# 把 stdin 當成檔案內容
content = """Alice 90
Bob 85
Cathy 77"""

total, n = 0, 0
for line in content.splitlines():
    name, score = line.split()
    total += int(score); n += 1
print(round(total / n, 1))   # 84.0
`},
{id:28,title:"模組與套件",tag:"實用",content:`
# 第 28 章：模組與 import

> 🛠 **實用程式**：把程式拆成多檔案，才不會變一坨大義大利麵。

## 28.1 為什麼要拆檔案？

當一個檔案超過 200-300 行，找東西就會崩潰。拆成模組：
- \`main.py\` — 程式入口
- \`utils.py\` — 工具函式
- \`models.py\` — 資料結構

## 28.2 import 的三種寫法

\`\`\`python
import math
print(math.sqrt(16))             # 4.0

from math import sqrt, pi
print(sqrt(16), pi)              # 4.0 3.141...

from math import *                # 全部拉進來（不建議）
\`\`\`

## 28.3 自己寫模組

\`\`\`python
# utils.py
def gcd(a, b):
    return a if b == 0 else gcd(b, a % b)

PI = 3.14159
\`\`\`

\`\`\`python
# main.py
from utils import gcd, PI
print(gcd(12, 18))    # 6
\`\`\`

## 28.4 \`if __name__ == "__main__":\`

\`\`\`python
# tool.py
def main():
    print("Hello")

if __name__ == "__main__":
    main()
\`\`\`

意思是「**只有直接執行這個檔案時才跑 main()**，被別人 import 時不跑」。寫小工具務必加。

## 28.5 套件管理：pip

\`\`\`bash
pip install requests
pip install pandas matplotlib
pip list
pip freeze > requirements.txt
\`\`\`

\`requirements.txt\` 是專案的依賴清單，新環境 \`pip install -r requirements.txt\` 一次裝齊。

## 28.6 虛擬環境（避免套件互相打架）

\`\`\`bash
python -m venv .venv
source .venv/bin/activate    # mac/linux
.venv\\\\Scripts\\\\activate     # windows
\`\`\`


---

## 📝 補充說明（改進版）

## \`if __name__ == "__main__"\` 的作用


\`\`\`python
# tool.py
def add(a, b):
    return a + b


def main():
    print(add(3, 5))


if __name__ == "__main__":
    # 只有「直接執行 python tool.py」時才會跑 main()
    # 如果是被別人 import，就不會自動執行
    main()
\`\`\`

`,example:`
# 用 math 模組
import math

print(math.sqrt(144))         # 12.0
print(math.gcd(12, 18))       # 6
print(round(math.pi, 4))      # 3.1416
`},
{id:29,title:"物件導向：class",tag:"實用",content:`
# 第 29 章：物件導向（OOP）

> 🛠 **實用程式**：把「資料 + 行為」綁在一起，程式碼變得有條理。

## 29.1 第一個 class

\`\`\`python
class Student:
    def __init__(self, name, score):
        self.name = name
        self.score = score

    def is_pass(self):
        return self.score >= 60

s = Student("Alice", 85)
print(s.name, s.is_pass())   # Alice True
\`\`\`

關鍵字：
- \`class\` 定義一個「類別」（藍圖）
- \`__init__\` 建立物件時自動呼叫（建構子）
- \`self\` = 「這個物件」自己，第一個參數固定是它

## 29.2 為什麼用 class？

對比版本：
\`\`\`python
# 程序式：資料散在外面
students = [{"name":"Alice","score":85}, ...]
def is_pass(s): return s["score"] >= 60

# OOP：資料 + 方法綁一起
s = Student("Alice", 85)
s.is_pass()
\`\`\`

當邏輯變複雜（成績加權、排名、輸出格式...），OOP 把相關東西聚在一個 class 裡。

## 29.3 繼承

\`\`\`python
class GraduateStudent(Student):
    def __init__(self, name, score, advisor):
        super().__init__(name, score)
        self.advisor = advisor

    def info(self):
        return f"{self.name} → {self.advisor}"

g = GraduateStudent("Bob", 90, "Prof. Lin")
print(g.is_pass(), g.info())
\`\`\`

\`super().__init__(...)\` 呼叫父類別建構子。

## 29.4 常用魔術方法

\`\`\`python
class Point:
    def __init__(self, x, y):
        self.x, self.y = x, y
    def __repr__(self):
        return f"Point({self.x}, {self.y})"
    def __add__(self, other):
        return Point(self.x + other.x, self.y + other.y)

p = Point(1,2) + Point(3,4)
print(p)    # Point(4, 6)
\`\`\`

## 29.5 什麼時候不要用 class？

- 只有兩三個函式 → 別 class，浪費精力
- 純算法解題 → 也別 class
- 資料 + 行為的組合多次出現 → 開始考慮 class


---

## 📝 補充說明（改進版）

## 29.1 為什麼要用 class？從 dict 到 class 的重構


**問題：要記錄多個學生的姓名、分數、及格判斷**


**方法1：用 dict（簡單但有缺點）**
\`\`\`python
alice = {"name": "Alice", "score": 85}
bob   = {"name": "Bob",   "score": 60}


def is_pass(student):
    return student["score"] >= 60


print(is_pass(alice))  # True
\`\`\`
缺點：每次都要寫 \`student["name"]\`，而且新增欄位容易打錯字。


**方法2：用 class（把資料和相關方法包在一起）**
\`\`\`python
class Student:
    def __init__(self, name, score):
        # __init__ 是建立物件時自動執行的初始化函式
        # self 代表「這個物件自己」
        self.name = name
        self.score = score


    def is_pass(self):
        return self.score >= 60


alice = Student("Alice", 85)
bob   = Student("Bob", 60)


print(alice.is_pass())   # True
print(alice.name)        # 直接存取屬性
\`\`\`

`,example:`
# Student class 範例
class Student:
    def __init__(self, name, score):
        self.name = name
        self.score = score
    def grade(self):
        if self.score >= 90: return 'A'
        if self.score >= 80: return 'B'
        if self.score >= 60: return 'C'
        return 'F'

students = [Student("Alice", 92), Student("Bob", 75), Student("Cathy", 58)]
for s in students:
    print(s.name, s.grade())
`},
{id:30,title:"錯誤處理 try/except",tag:"實用",content:`
# 第 30 章：錯誤處理

> 🛠 **實用程式**：程式跑到一半噴錯就死掉？學會接住它。

## 30.1 try / except 基本

\`\`\`python
try:
    n = int(input())
    print(100 // n)
except ZeroDivisionError:
    print("不能除以 0")
except ValueError:
    print("請輸入整數")
\`\`\`

執行流程：try 區塊正常跑；發生指定錯誤 → 跳到對應 except；都沒事 → 跳過所有 except。

## 30.2 多重 except / 全包

\`\`\`python
try:
    risky_call()
except (KeyError, IndexError) as e:
    print(f"找不到資料: {e}")
except Exception as e:                # 兜底（少用）
    print(f"意外錯誤: {e}")
\`\`\`

> ⚠️ **不要寫 \`except: pass\`**！把所有錯誤吞掉，最難 debug。

## 30.3 finally / else

\`\`\`python
try:
    f = open("data.txt")
    data = f.read()
except FileNotFoundError:
    data = ""
else:
    print("讀檔成功")
finally:
    f.close()      # 不管有沒有錯都會跑
\`\`\`

實際上現代 Python 用 \`with open(...)\` 自動關檔，這裡是舊寫法示範。

## 30.4 主動丟錯：raise

\`\`\`python
def divide(a, b):
    if b == 0:
        raise ValueError("除數不能為 0")
    return a / b
\`\`\`

呼叫端可以接住，或讓它向上拋。

## 30.5 自訂例外

\`\`\`python
class InvalidScore(Exception):
    pass

def add_score(s):
    if not (0 <= s <= 100):
        raise InvalidScore(f"成績 {s} 超出範圍")
\`\`\`

## 30.6 EAFP vs LBYL

Python 風格偏好「先試再說，錯了再接」(EAFP)：

\`\`\`python
# Pythonic
try:
    return d[key]
except KeyError:
    return 0

# 不夠 Pythonic
if key in d:
    return d[key]
else:
    return 0
\`\`\`

## 30.7 🧠 設計動機：為什麼 Python 偏好 EAFP？

在 C 語言時代，函式用回傳值（-1、NULL）表示錯誤，呼叫者必須每次手動檢查。這導致程式碼充滿 \`if (result == NULL) { ... }\` 的防禦性檢查，正常邏輯被淹沒。

Python 採用「例外（exception）」機制：讓正常路徑保持乾淨，把錯誤處理集中在 except 區塊。這是 Guido van Rossum 刻意的設計，背後的哲學是「可讀性優先」。

EAFP 還有一個效能理由：「先問再做（LBYL）」在多執行緒環境中有 TOCTOU（Time-of-check to time-of-use）競態條件問題——你在 if 檢查之後、實際使用之前，另一條執行緒可能已改變狀態。直接嘗試 + 捕獲例外則沒有這個問題。

\`\`\`python
# TOCTOU 問題示範
import os

# LBYL — 有競態條件
if os.path.exists("data.txt"):
    # 另一個執行緒可能在這裡刪掉了檔案
    with open("data.txt") as f:  # 仍可能失敗
        data = f.read()

# EAFP — 沒有競態條件
try:
    with open("data.txt") as f:
        data = f.read()
except FileNotFoundError:
    data = ""
\`\`\`
`,example:`
# 安全除法示範
inputs = ["10", "0", "abc", "5"]

for s in inputs:
    try:
        n = int(s)
        print(100 // n)
    except ZeroDivisionError:
        print("除以 0")
    except ValueError:
        print("不是數字")
`},
{id:31,title:"測試與除錯",tag:"實用",content:`
# 第 31 章：測試 + 系統性除錯

> 🛠 **實用程式**：寫程式 30%，剩下 70% 都在 debug。

## 31.1 用 assert 做隨手測試

\`\`\`python
def add(a, b):
    return a + b

assert add(2, 3) == 5
assert add(-1, 1) == 0
assert add(0, 0) == 0
print("all passed")
\`\`\`

\`assert\` 為假就 \`AssertionError\`。簡單但有效。

## 31.2 unittest（標準框架）

\`\`\`python
import unittest

def is_prime(n):
    if n < 2: return False
    i = 2
    while i*i <= n:
        if n % i == 0: return False
        i += 1
    return True

class TestPrime(unittest.TestCase):
    def test_small(self):
        self.assertTrue(is_prime(2))
        self.assertTrue(is_prime(7))
    def test_not_prime(self):
        self.assertFalse(is_prime(1))
        self.assertFalse(is_prime(9))
    def test_edge(self):
        self.assertFalse(is_prime(0))
        self.assertFalse(is_prime(-5))

if __name__ == "__main__":
    unittest.main()
\`\`\`

執行：\`python -m unittest test_prime.py\`

## 31.3 系統性除錯：4 步驟

1. **重現**：找到「一定會出錯」的最小輸入
2. **二分**：在中間插 \`print(...)\`，看哪段開始不對
3. **假設 → 驗證**：猜原因，寫一個簡單測試證明 / 推翻
4. **修完加測試**：避免下次再壞

## 31.4 用 pdb 互動除錯

\`\`\`python
import pdb
def buggy(a, b):
    pdb.set_trace()      # 跑到這停下來
    return a / b

buggy(10, 0)
\`\`\`

常用指令：\`n\`（下一行）、\`s\`（進入函式）、\`p var\`（印變數）、\`c\`（繼續）。

## 31.5 logging 比 print 強

\`\`\`python
import logging
logging.basicConfig(level=logging.DEBUG, format='%(levelname)s | %(message)s')
logging.debug("input n=%d", n)
logging.warning("意外狀況")
\`\`\`

正式專案不要 print，用 logging — 可調等級、可輸出到檔案。
`,example:`
# 用 assert 自我測試
def is_prime(n):
    if n < 2: return False
    i = 2
    while i*i <= n:
        if n % i == 0: return False
        i += 1
    return True

cases = [(2,True),(3,True),(4,False),(7,True),(9,False),(1,False),(0,False)]
for n, expected in cases:
    assert is_prime(n) == expected, f"failed at n={n}"
print("all passed")
`},
{id:32,title:"命令列工具 (CLI)",tag:"專案",content:`
# 第 32 章：做一個命令列小工具

> 🚀 **製作專案**：把 Python 變成可以 \`python tool.py --score 85\` 這樣用的工具。

## 32.1 sys.argv：最原始的方式

\`\`\`python
# greet.py
import sys
name = sys.argv[1] if len(sys.argv) > 1 else "World"
print(f"Hello, {name}!")
\`\`\`

執行：\`python greet.py Alice\` → \`Hello, Alice!\`

\`sys.argv[0]\` 是檔名本身，\`[1:]\` 開始才是參數。

## 32.2 argparse：正經做法

\`\`\`python
import argparse

parser = argparse.ArgumentParser(description="成績分級工具")
parser.add_argument("score", type=int, help="0-100 的分數")
parser.add_argument("--strict", action="store_true", help="嚴格模式 (70 才及格)")
parser.add_argument("--name", default="同學", help="顯示用名字")

args = parser.parse_args()

threshold = 70 if args.strict else 60
result = "及格" if args.score >= threshold else "不及格"
print(f"{args.name}: {args.score} → {result}")
\`\`\`

執行範例：
\`\`\`bash
python grade.py 75 --name Alice
python grade.py 65 --strict
python grade.py --help        # 自動產生說明！
\`\`\`

## 32.3 設計一個完整的小工具：成績計算機

\`\`\`python
# grader.py
import argparse, sys, statistics

def grade(score):
    if score >= 90: return 'A'
    if score >= 80: return 'B'
    if score >= 70: return 'C'
    if score >= 60: return 'D'
    return 'F'

def main():
    p = argparse.ArgumentParser()
    p.add_argument("file", help="每行一個分數的檔案；用 - 代表 stdin")
    p.add_argument("--summary", action="store_true", help="只印統計摘要")
    args = p.parse_args()

    f = sys.stdin if args.file == "-" else open(args.file)
    scores = [int(line) for line in f if line.strip()]

    if args.summary:
        print(f"n={len(scores)} avg={statistics.mean(scores):.1f} "
              f"max={max(scores)} min={min(scores)}")
    else:
        for s in scores:
            print(s, grade(s))

if __name__ == "__main__":
    main()
\`\`\`

執行：
\`\`\`bash
echo "85\\n72\\n50" | python grader.py - --summary
\`\`\`

## 32.4 進階：打包成可分享的工具

- \`setup.py\` 或 \`pyproject.toml\` 定義套件
- \`pip install -e .\` 安裝後可以 \`grader 85\` 直接呼叫
- 加 README、加 license、push 上 GitHub
`,example:`
# 模擬 CLI 行為
import sys

# 假裝命令列傳入 ["85", "--strict"]
args = ["85", "--strict"]

score = int(args[0])
strict = "--strict" in args

threshold = 70 if strict else 60
print("及格" if score >= threshold else "不及格")
`},
{id:33,title:"CSV 資料分析",tag:"專案",content:`
# 第 33 章：CSV 讀取與分析

> 🚀 **製作專案**：拿到一張成績單 / 銷售表，用 Python 算統計、輸出報表。

## 33.1 csv 模組基本

\`\`\`python
import csv

with open("scores.csv", encoding="utf-8") as f:
    reader = csv.reader(f)
    headers = next(reader)   # 第一列是欄位名
    for row in reader:
        print(row)   # ['Alice', '90']
\`\`\`

## 33.2 用 DictReader 更直覺

\`\`\`python
with open("scores.csv", encoding="utf-8") as f:
    for row in csv.DictReader(f):
        print(row["name"], int(row["score"]))
\`\`\`

## 33.3 寫 CSV

\`\`\`python
with open("out.csv", "w", encoding="utf-8", newline="") as f:
    w = csv.writer(f)
    w.writerow(["name", "grade"])
    for name, grade in result:
        w.writerow([name, grade])
\`\`\`

> 注意：寫 csv 時記得 \`newline=""\`，否則 Windows 上會多空行。

## 33.4 小專案：班級成績分析

\`\`\`python
import csv, statistics
from collections import Counter

with open("class.csv", encoding="utf-8") as f:
    rows = list(csv.DictReader(f))

# 1. 班級平均、最高、最低
scores = [int(r["score"]) for r in rows]
print(f"平均 {statistics.mean(scores):.1f}")
print(f"最高 {max(scores)}  最低 {min(scores)}")

# 2. 各分級人數
def grade(s):
    return 'A' if s>=90 else 'B' if s>=80 else 'C' if s>=60 else 'F'
print(Counter(grade(int(r["score"])) for r in rows))

# 3. 前 3 名
top3 = sorted(rows, key=lambda r: -int(r["score"]))[:3]
for r in top3:
    print(r["name"], r["score"])
\`\`\`

## 33.5 進階：用 pandas（如果要做更多事）

\`\`\`python
import pandas as pd

df = pd.read_csv("class.csv")
print(df.describe())
print(df.groupby("class")["score"].mean())
df.sort_values("score", ascending=False).head(3)
\`\`\`

pandas 適合資料超過幾百列、要做 group / merge / 視覺化的情境。
`,example:`
# 模擬 CSV 分析
csv_text = """name,score
Alice,92
Bob,75
Cathy,88
David,55
Eve,67"""

rows = csv_text.splitlines()[1:]   # 跳過 header
data = [r.split(',') for r in rows]

scores = [int(s) for _, s in data]
print(round(sum(scores)/len(scores), 1))   # 平均
print(max(scores))                          # 最高
`},
{id:34,title:"API 串接與 JSON",tag:"專案",content:`
# 第 34 章：呼叫網路 API

> 🚀 **製作專案**：拿天氣、股價、翻譯、AI 模型... 全靠 HTTP + JSON。

## 34.1 requests：呼叫 API 的標準套件

\`\`\`python
import requests
r = requests.get("https://api.github.com/users/torvalds")
print(r.status_code)        # 200
data = r.json()             # 自動解析 JSON
print(data["name"], data["public_repos"])
\`\`\`

\`\`\`bash
pip install requests
\`\`\`

## 34.2 HTTP 動詞速覽

| 動詞 | 用途 | requests 寫法 |
|------|------|---------------|
| GET | 讀取 | \`requests.get(url)\` |
| POST | 新增 | \`requests.post(url, json={...})\` |
| PUT | 更新 | \`requests.put(url, json={...})\` |
| DELETE | 刪除 | \`requests.delete(url)\` |

## 34.3 查詢參數、header、認證

\`\`\`python
r = requests.get(
    "https://api.example.com/search",
    params={"q": "python", "page": 1},
    headers={"Authorization": "Bearer YOUR_TOKEN"},
    timeout=10,
)
\`\`\`

## 34.4 處理失敗

\`\`\`python
try:
    r = requests.get(url, timeout=5)
    r.raise_for_status()        # 4xx/5xx 會 raise
    data = r.json()
except requests.Timeout:
    print("逾時")
except requests.RequestException as e:
    print("請求失敗:", e)
\`\`\`

## 34.5 小專案：抓 GitHub 使用者資訊

\`\`\`python
import requests, sys

def get_user(login):
    r = requests.get(f"https://api.github.com/users/{login}", timeout=10)
    if r.status_code == 404:
        return None
    r.raise_for_status()
    return r.json()

def summary(login):
    u = get_user(login)
    if not u:
        print(f"{login}: 找不到")
        return
    print(f"{u['login']:15} repos={u['public_repos']:4} followers={u['followers']}")

for name in sys.argv[1:]:
    summary(name)
\`\`\`

執行：\`python gh.py torvalds gvanrossum\`

## 34.6 速率限制、重試、快取

實戰要記得：
- API 通常有 rate limit → 加 \`time.sleep()\` 或退避策略
- 重要請求要 retry（試 \`requests-cache\` / \`tenacity\`）
- 機密 token 用環境變數，不要 commit 到 git

> 💡 瀏覽器沙箱通常不能發外部 HTTP（CORS），本地端跑才能體驗。
`,example:`
# 模擬：解析 JSON 字串
import json

raw = """{
  "login": "torvalds",
  "name": "Linus Torvalds",
  "public_repos": 7,
  "followers": 200000
}"""

data = json.loads(raw)
print(f"{data['login']} - {data['name']}")
print(f"repos={data['public_repos']}")
`},
{id:35,title:"綜合專案：終端機遊戲",tag:"專案",content:`
# 第 35 章：綜合專案 — 猜數字 + 終端機 2048 雛形

> 🚀 **製作專案**：把學過的東西全部整合。

## 35.1 LV1：猜數字

\`\`\`python
import random

def play():
    target = random.randint(1, 100)
    tries = 0
    while True:
        try:
            guess = int(input("猜 1-100: "))
        except ValueError:
            print("請輸入整數"); continue
        tries += 1
        if guess < target:
            print("再大一點")
        elif guess > target:
            print("再小一點")
        else:
            print(f"中了！用了 {tries} 次")
            return tries

if __name__ == "__main__":
    while True:
        play()
        if input("再玩一次？ (y/n) ").lower() != "y":
            break
\`\`\`

用到的東西：random / try-except / while / if-else / 函式 / main 入口。

## 35.2 LV2：成績管理小系統

\`\`\`python
import json
from pathlib import Path

DATA = Path("students.json")

def load():
    return json.loads(DATA.read_text()) if DATA.exists() else {}

def save(d):
    DATA.write_text(json.dumps(d, ensure_ascii=False, indent=2))

def menu():
    print("\\n1) 新增  2) 查詢  3) 全部  4) 離開")
    return input("> ").strip()

def main():
    data = load()
    while True:
        c = menu()
        if c == "1":
            name = input("姓名: ")
            score = int(input("分數: "))
            data[name] = score
            save(data); print("已儲存")
        elif c == "2":
            name = input("姓名: ")
            print(data.get(name, "找不到"))
        elif c == "3":
            for n, s in sorted(data.items(), key=lambda x: -x[1]):
                print(f"{n:10} {s}")
        elif c == "4":
            break

if __name__ == "__main__":
    main()
\`\`\`

用到：dict / JSON / pathlib / sorted + lambda / 函式組合。

## 35.3 LV3：終端機 2048 核心邏輯

\`\`\`python
import random
from copy import deepcopy

SIZE = 4

def new_board():
    b = [[0]*SIZE for _ in range(SIZE)]
    spawn(b); spawn(b)
    return b

def spawn(b):
    empties = [(i,j) for i in range(SIZE) for j in range(SIZE) if b[i][j]==0]
    if empties:
        i,j = random.choice(empties)
        b[i][j] = 2 if random.random()<0.9 else 4

def slide_left(row):
    new = [x for x in row if x]   # 去除 0
    for i in range(len(new)-1):
        if new[i] == new[i+1]:
            new[i] *= 2; new[i+1] = 0
    new = [x for x in new if x]
    return new + [0]*(SIZE-len(new))

def move(b, dir):
    # dir: 'L','R','U','D'
    if dir == 'L':
        return [slide_left(row) for row in b]
    if dir == 'R':
        return [slide_left(row[::-1])[::-1] for row in b]
    # U/D 先轉置
    t = list(map(list, zip(*b)))
    if dir == 'U':
        t = [slide_left(row) for row in t]
    else:
        t = [slide_left(row[::-1])[::-1] for row in t]
    return list(map(list, zip(*t)))

def show(b):
    for row in b:
        print(" ".join(f"{x:5}" if x else "    ." for x in row))
    print()

b = new_board()
show(b)
\`\`\`

剩下交給你：補上「按鍵讀取」（用 \`input()\` 接 w/a/s/d）、勝負判斷、計分。

## 35.4 從這裡可以走去哪？

| 方向 | 推薦學習 |
|------|----------|
| Web 後端 | Flask / FastAPI |
| Web 前端 | JavaScript + HTML/CSS |
| 資料分析 | pandas / matplotlib |
| 自動化 | Selenium / Playwright |
| AI / ML | numpy → scikit-learn → PyTorch |
| 遊戲 | pygame |

恭喜你完成全部 36 章！從這裡開始，**做一個自己想做的小專案**比讀任何教材都重要。
`,example:`
# 猜數字（自動版示範）
target = 42
guesses = [50, 25, 37, 43, 40, 42]

for g in guesses:
    if g < target:
        print(f"{g} → 再大一點")
    elif g > target:
        print(f"{g} → 再小一點")
    else:
        print(f"{g} → 中了！")
        break
`},
{id:36,title:"HTTP 入門：網頁怎麼來的",tag:"專項",content:`
# 第 36 章：HTTP 入門 — 網頁是怎麼來的

> 🕷 **專項教學 · 爬蟲**：在抓網頁之前，先搞懂瀏覽器跟伺服器到底在聊什麼。

## 36.1 用一句話講清楚

當你打開 [https://example.com](https://example.com)：

1. 瀏覽器 → 伺服器：**「請給我這個網址的內容」**（這叫 *request*）
2. 伺服器 → 瀏覽器：**「拿去，這是 HTML」**（這叫 *response*）
3. 瀏覽器把 HTML 畫成你看到的網頁

爬蟲就是**「跳過瀏覽器、自己用程式發 request、自己解析 response」**。

## 36.2 一個 HTTP request 長什麼樣

\`\`\`http
GET /search?q=apcs HTTP/1.1
Host: www.google.com
User-Agent: Mozilla/5.0 ...
Accept: text/html
\`\`\`

關鍵欄位：

| 欄位 | 意思 |
|------|------|
| **方法（method）** | GET / POST / PUT / DELETE |
| **路徑（path）** | \`/search?q=apcs\` — 含查詢字串 |
| **Host** | 目標網域 |
| **User-Agent** | 「我是哪種瀏覽器」(爬蟲常要假裝) |

## 36.3 response 長什麼樣

\`\`\`http
HTTP/1.1 200 OK
Content-Type: text/html; charset=utf-8
Content-Length: 1234

<html>
  <body>...</body>
</html>
\`\`\`

最重要的就是**第一行的狀態碼**：

| 狀態碼 | 意思 |
|--------|------|
| **200** | 成功 ✅ |
| **301 / 302** | 重新導向 |
| **403** | 禁止（常見：被擋爬蟲） |
| **404** | 找不到 |
| **429** | 太多請求（被限流） |
| **500** | 伺服器壞了 |

> 看到 200 才能繼續解析；其他狀態碼要做對應處理。

## 36.4 GET vs POST

| | GET | POST |
|---|---|---|
| 用途 | 讀取資料 | 送出資料（登入、留言） |
| 參數位置 | URL 後面 \`?a=1&b=2\` | request body |
| 可被瀏覽器書籤？ | 可以 | 不行 |
| 適合爬蟲 | 通常都 GET | 表單模擬時才用 |

## 36.5 動手試試

右邊的範例會**自己組一個 HTTP response 字串**，再把狀態碼跟 body 拆出來。看完你就知道一個「請求-回應」週期到底發生什麼。

> **跨語言對應**：
> - **C++**：可用 \`libcurl\` 或 \`cpp-httplib\`，較少用於爬蟲
> - **Java**：標準庫 \`java.net.http.HttpClient\`（Java 11+）或 \`Jsoup\`
> - **JavaScript**：\`fetch()\` API
> 但這個主題以 Python 為主——\`requests\` + \`BeautifulSoup\` 是業界最流行的爬蟲組合。

## 36.6 🧠 設計動機：HTTP 為什麼是「無狀態」的？

HTTP 的每一個 request 都是獨立的——伺服器不記得你上一秒發過什麼請求。這是 Tim Berners-Lee 在 1989 年設計 Web 時的刻意選擇：

**好處**：伺服器不需要維護每個連線的狀態，可以輕鬆擴展到百萬用戶。你今天向 Google 發送的 request 可以由全球任意一台伺服器處理。

**壞處**：無狀態表示「伺服器不知道你是誰」。所以才需要 Cookie（瀏覽器帶著「識別資訊」一起送出）和 Session（伺服器用 Session ID 查表找到你的狀態）。

對爬蟲的影響：需要登入的網站要先模擬登入、保存 Cookie，之後每個 request 都帶上 Cookie，才能維持「已登入」狀態。\`requests.Session()\` 就是為了解決這個問題而存在的。

\`\`\`python
import requests

# Session 自動幫你保存和帶上 Cookie
session = requests.Session()
session.post("https://example.com/login", data={"user": "me", "pass": "1234"})
# 之後的 request 自動帶上登入後的 Cookie
resp = session.get("https://example.com/dashboard")
\`\`\`
`,
example:`# 模擬一個 HTTP response（真實情境是從 socket 讀到的字串）
response = (
    "HTTP/1.1 200 OK\\r\\n"
    "Content-Type: text/html; charset=utf-8\\r\\n"
    "Content-Length: 38\\r\\n"
    "\\r\\n"
    "<html><body>Hello APCS</body></html>"
)

# 拆 header 與 body（用 \\r\\n\\r\\n 分隔）
header_part, body = response.split("\\r\\n\\r\\n", 1)
lines = header_part.split("\\r\\n")

# 第一行：HTTP/1.1 200 OK
status_line = lines[0]
parts = status_line.split(" ", 2)
version, code, reason = parts[0], int(parts[1]), parts[2]
print(f"狀態碼: {code} ({reason})")

# 其他行：Key: Value
headers = {}
for line in lines[1:]:
    k, v = line.split(": ", 1)
    headers[k] = v
print(f"Content-Type: {headers['Content-Type']}")

# body
print(f"body: {body}")
`},
{id:37,title:"requests 入門",tag:"專項",content:`
# 第 37 章：requests 入門

> 🕷 **專項教學 · 爬蟲**：Python 抓網頁的標準工具。一行就能下載整個網頁。

## 37.1 為什麼用 requests

Python 內建 \`urllib.request\` 也能抓網頁，但語法又長又繞。\`requests\` 就是「給人用」的版本：

\`\`\`python
import requests
r = requests.get("https://example.com")
print(r.status_code)   # 200
print(r.text[:200])    # 前 200 字的 HTML
\`\`\`

安裝：
\`\`\`bash
pip install requests
\`\`\`

## 37.2 GET：抓一個網頁

\`\`\`python
import requests

r = requests.get("https://api.github.com/users/torvalds")
print(r.status_code)        # 200
print(r.headers["Content-Type"])
print(r.text[:100])         # 字串：HTML 或 JSON
print(r.json())             # 自動解析成 dict
\`\`\`

| 屬性 | 意思 |
|------|------|
| \`r.status_code\` | 狀態碼（200/404/...） |
| \`r.text\` | 回應內容字串 |
| \`r.content\` | 回應內容 bytes（圖片、檔案要用這個） |
| \`r.headers\` | 回應 header dict |
| \`r.json()\` | 把 body 當 JSON 解析 |
| \`r.url\` | 最後實際打的 URL（重新導向後） |

## 37.3 帶查詢字串

不要自己拼字串，用 \`params=\`：

\`\`\`python
r = requests.get(
    "https://www.google.com/search",
    params={"q": "apcs python", "lr": "lang_zh-TW"}
)
print(r.url)
# → https://www.google.com/search?q=apcs+python&lr=lang_zh-TW
\`\`\`

## 37.4 假裝瀏覽器（User-Agent）

很多網站會擋 Python 預設的 UA。**最常見的反爬技巧 = 改 header**：

\`\`\`python
r = requests.get(
    "https://example.com",
    headers={
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X) "
                      "AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120"
    }
)
\`\`\`

## 37.5 timeout 一定要設

不設 timeout，網路掛了會卡到天荒地老：

\`\`\`python
try:
    r = requests.get("https://example.com", timeout=5)  # 5 秒
    r.raise_for_status()        # 4xx/5xx 自動丟例外
except requests.Timeout:
    print("逾時")
except requests.HTTPError as e:
    print(f"HTTP 錯誤 {e.response.status_code}")
except requests.RequestException as e:
    print(f"網路錯：{e}")
\`\`\`

> 🛡 **黃金三件套**：\`timeout\` + \`raise_for_status\` + \`try/except\`。爬蟲穩定性 80% 來自這三行。

## 37.6 POST：送出表單或 JSON

\`\`\`python
# 表單（application/x-www-form-urlencoded）
requests.post(url, data={"user": "alice", "pw": "x"})

# JSON（application/json）
requests.post(url, json={"user": "alice", "pw": "x"})
\`\`\`

## 37.7 Session：保留 cookie

如果要登入後一直保持身份，用 \`Session\`：

\`\`\`python
s = requests.Session()
s.post("https://site/login", data={"u":"a","p":"b"})
r = s.get("https://site/profile")    # 自動帶上 cookie
\`\`\`

## 37.8 動手試試（模擬版）

範例會**自己組 query string + parse URL**，模擬 \`requests\` 的內部邏輯。Pyodide 內無法真的連網，但這段練習能讓你看清「URL + params 怎麼變成最終網址」。
`,
example:`# 模擬 requests.get(url, params=...) 內部怎麼組 URL
from urllib.parse import urlencode, urlparse, parse_qs

base = "https://www.google.com/search"
params = {"q": "apcs python", "lr": "lang_zh-TW", "page": 2}

# 1) requests 內部把 params 變成查詢字串
qs = urlencode(params)
final_url = f"{base}?{qs}"
print("最終 URL:", final_url)

# 2) 反過來：拿到一個 URL，把參數拆出來
parsed = urlparse(final_url)
print("網域:", parsed.netloc)
print("路徑:", parsed.path)
print("參數:", parse_qs(parsed.query))

# 3) 模擬一個成功 response
fake_response = {
    "status_code": 200,
    "headers": {"Content-Type": "text/html; charset=utf-8"},
    "text": "<html>...搜尋結果...</html>"
}
print(f"\\n狀態: {fake_response['status_code']}")
print(f"前 30 字 body: {fake_response['text'][:30]}")
`},
{id:38,title:"HTML 結構與 DOM",tag:"專項",content:`
# 第 38 章：HTML 結構與 DOM

> 🕷 **專項教學 · 爬蟲**：抓到 HTML 之後要會「定位」想要的資料。

## 38.1 HTML 是一棵樹

\`\`\`html
<html>
  <head>
    <title>新聞首頁</title>
  </head>
  <body>
    <h1>今日頭條</h1>
    <ul class="news">
      <li><a href="/a">新聞 A</a></li>
      <li><a href="/b">新聞 B</a></li>
    </ul>
  </body>
</html>
\`\`\`

畫成樹：

\`\`\`
html
├── head
│   └── title ("新聞首頁")
└── body
    ├── h1 ("今日頭條")
    └── ul.news
        ├── li → a[href=/a] ("新聞 A")
        └── li → a[href=/b] ("新聞 B")
\`\`\`

每個節點都有：

| 屬性 | 例子 |
|------|------|
| **tag**（標籤） | \`a\`, \`li\`, \`div\` |
| **attributes**（屬性） | \`href="/a"\`, \`class="news"\` |
| **text**（文字） | \`"新聞 A"\` |
| **children**（子節點） | 巢狀的元素 |

## 38.2 常見 tag 速查

| Tag | 意思 |
|-----|------|
| \`<h1>\`–\`<h6>\` | 標題（h1 最大） |
| \`<p>\` | 段落 |
| \`<a href="...">\` | 超連結 |
| \`<img src="...">\` | 圖片 |
| \`<ul>\` / \`<ol>\` / \`<li>\` | 清單 |
| \`<table>\` / \`<tr>\` / \`<td>\` | 表格 |
| \`<div>\` / \`<span>\` | 通用容器（最常用！） |
| \`<form>\` / \`<input>\` | 表單 |

## 38.3 class 與 id

\`\`\`html
<div id="main-article" class="post featured">...</div>
\`\`\`

- \`id\` **唯一**，全網頁只能有一個 \`id="main-article"\`
- \`class\` **可重複、可多個**（用空白分隔）

爬蟲最常依賴這兩個來定位元素。

## 38.4 在瀏覽器找元素：DevTools

在 Chrome / Edge 按 **F12** 開 DevTools，點左上角的滑鼠圖示，再點頁面上任何元素 → 你會看到對應的 HTML。

> 🎯 抓資料前的標準流程：
> 1. F12 看 HTML 結構
> 2. 找最穩定的「定位特徵」（class 或 id）
> 3. 對 BeautifulSoup 寫對應的 selector

## 38.5 標籤可以「巢狀」很深

\`\`\`html
<div class="article">
  <header>
    <h2>標題</h2>
    <span class="date">2026-06-08</span>
  </header>
  <div class="content">
    <p>第一段</p>
    <p>第二段</p>
  </div>
</div>
\`\`\`

要拿「日期」要走 \`div.article\` → \`header\` → \`span.date\`。
要拿「所有段落」要走 \`div.article\` → \`div.content\` → 所有 \`p\`。

## 38.6 動手試試

範例用 Python 內建的 \`html.parser\` 走遍 HTML 樹，把每個 tag 印出來。看完你會理解「解析器到底在做什麼事」。
`,
example:`# 用 stdlib 的 html.parser 走訪 HTML 樹
from html.parser import HTMLParser

html_doc = (
    '<html>\\n'
    '  <head><title>新聞首頁</title></head>\\n'
    '  <body>\\n'
    '    <h1>今日頭條</h1>\\n'
    '    <ul class="news">\\n'
    '      <li><a href="/a">新聞 A</a></li>\\n'
    '      <li><a href="/b">新聞 B</a></li>\\n'
    '    </ul>\\n'
    '  </body>\\n'
    '</html>'
)

class TreePrinter(HTMLParser):
    def __init__(self):
        super().__init__()
        self.depth = 0
        self.tags = []  # 記錄所有 tag
    def handle_starttag(self, tag, attrs):
        self.tags.append(tag)
        attr_str = ' '.join(f'{k}="{v}"' for k, v in attrs) if attrs else ''
        marker = f'<{tag} {attr_str}>'.strip() + '>'
        print('  ' * self.depth + f'<{tag}>' + (f'  ({attr_str})' if attrs else ''))
        self.depth += 1
    def handle_endtag(self, tag):
        self.depth = max(0, self.depth - 1)
    def handle_data(self, data):
        text = data.strip()
        if text:
            print('  ' * self.depth + f'"{text}"')

p = TreePrinter()
p.feed(html_doc)

print(f"\\n共 {len(p.tags)} 個開始標籤")
print(f"出現的 tag: {sorted(set(p.tags))}")
`},
{id:39,title:"BeautifulSoup 解析",tag:"專項",content:`
# 第 39 章：BeautifulSoup 解析

> 🕷 **專項教學 · 爬蟲**：把 HTML 字串變成可以「.find / .select」的物件。

## 39.1 安裝與第一次

\`\`\`bash
pip install beautifulsoup4
# 推薦再裝 lxml（更快的解析器）
pip install lxml
\`\`\`

\`\`\`python
from bs4 import BeautifulSoup

html = "<html><body><h1>Hi</h1></body></html>"
soup = BeautifulSoup(html, "html.parser")
print(soup.h1.text)   # Hi
\`\`\`

## 39.2 find vs find_all

\`\`\`python
soup.find("h1")            # 第一個 h1，回傳 Tag
soup.find_all("li")        # 全部 li，回傳 list
soup.find("div", class_="content")
soup.find_all("a", href=True)        # 只要有 href 的 a
soup.find("img", {"alt": "logo"})    # 用 dict 比對任何屬性
\`\`\`

> ⚠️ Python 中 \`class\` 是關鍵字，所以參數寫 \`class_\`（多一條底線）。

## 39.3 select：CSS selector（強力推薦）

如果你會 CSS，這招最直覺：

\`\`\`python
soup.select("div.news h2")          # div.news 底下所有 h2
soup.select("ul.menu > li")         # ul.menu 的直接子節點 li
soup.select("a[href^=https]")       # href 開頭是 https 的 a
soup.select("#main .title")         # id=main 下所有 class=title
\`\`\`

CSS selector 速查：

| 語法 | 意思 |
|------|------|
| \`tag\` | 標籤名 |
| \`.class\` | class |
| \`#id\` | id |
| \`parent child\` | 後代 |
| \`parent > child\` | 直接子節點 |
| \`[attr]\` | 有這個屬性 |
| \`[attr=value]\` | 屬性等於 |
| \`[attr^=value]\` | 屬性開頭 |
| \`[attr$=value]\` | 屬性結尾 |
| \`[attr*=value]\` | 屬性包含 |

## 39.4 拿到資料

\`\`\`python
a = soup.find("a")
a.text          # 連結文字
a.get_text()    # 同上
a["href"]       # 屬性
a.attrs         # 全部屬性 dict
a.parent        # 父節點
a.find_parent("div", class_="post")  # 往上找特定父
\`\`\`

## 39.5 整段示範

\`\`\`python
from bs4 import BeautifulSoup
import requests

html = requests.get("https://example.com", timeout=5).text
soup = BeautifulSoup(html, "html.parser")

for a in soup.select("a[href]"):
    print(a.text.strip(), "→", a["href"])
\`\`\`

短短 4 行就抓完所有連結。

## 39.6 動手試試（模擬版）

Pyodide 預設沒裝 bs4，所以我們用 stdlib \`html.parser\` 寫個迷你版「找 a 標籤」。在本機請改用上面的 BeautifulSoup 寫法。
`,
example:`# 模擬版：用 stdlib html.parser 抓所有 <a href="..."> 的文字與連結
# 本機真實情境請改用：
#   from bs4 import BeautifulSoup
#   soup = BeautifulSoup(html, "html.parser")
#   for a in soup.select("a[href]"): print(a.text, a["href"])

from html.parser import HTMLParser

html = (
    '\\n<html><body>\\n'
    '  <h1>連結蒐集</h1>\\n'
    '  <ul>\\n'
    '    <li><a href="/news/1">新聞一</a></li>\\n'
    '    <li><a href="/news/2">新聞二</a></li>\\n'
    '    <li><a href="https://example.com">外部連結</a></li>\\n'
    '    <li>沒連結的</li>\\n'
    '  </ul>\\n'
    '</body></html>'
)

class LinkGrabber(HTMLParser):
    def __init__(self):
        super().__init__()
        self.in_a = False
        self.cur_href = None
        self.cur_text = ''
        self.links = []  # [(text, href), ...]
    def handle_starttag(self, tag, attrs):
        if tag == 'a':
            self.in_a = True
            self.cur_href = dict(attrs).get('href')
            self.cur_text = ''
    def handle_endtag(self, tag):
        if tag == 'a' and self.in_a:
            self.links.append((self.cur_text.strip(), self.cur_href))
            self.in_a = False
    def handle_data(self, data):
        if self.in_a:
            self.cur_text += data

g = LinkGrabber()
g.feed(html)
print(f"找到 {len(g.links)} 個連結：")
for text, href in g.links:
    print(f"  {text} → {href}")
`},
{id:40,title:"實戰：抓表格與清單",tag:"專項",content:`
# 第 40 章：實戰 — 抓表格與清單

> 🕷 **專項教學 · 爬蟲**：把零散的標籤組成「一筆一筆」的結構化資料。

## 40.1 目標：把網頁變 dict 清單

爬蟲最終都是要拿到這種東西：

\`\`\`python
[
  {"title": "新聞 A", "url": "/a", "date": "2026-06-08"},
  {"title": "新聞 B", "url": "/b", "date": "2026-06-07"},
  ...
]
\`\`\`

然後就能丟進 CSV / 資料庫 / pandas。

## 40.2 「列表頁」的標準寫法

\`\`\`python
from bs4 import BeautifulSoup
import requests

html = requests.get("https://news.example.com", timeout=5).text
soup = BeautifulSoup(html, "html.parser")

items = []
for card in soup.select("div.news-card"):
    items.append({
        "title": card.select_one("h3.title").get_text(strip=True),
        "url":   card.select_one("a")["href"],
        "date":  card.select_one("span.date").get_text(strip=True),
    })

for it in items:
    print(it)
\`\`\`

**三步驟記憶法**：

1. **外圈**：每筆資料的「容器」selector（這裡是 \`div.news-card\`）
2. **內圈**：在容器內挖各個欄位
3. **打包**：組成 dict，append 進 list

## 40.3 處理「找不到」的欄位

不是每張卡片都有日期，亂寫會崩：

\`\`\`python
date_el = card.select_one("span.date")
date = date_el.get_text(strip=True) if date_el else "未知"
\`\`\`

> 💡 用「海象運算子」更短：\`date = (e.get_text(strip=True) if (e := card.select_one("span.date")) else "未知")\`

## 40.4 抓表格 \`<table>\`

\`\`\`python
table = soup.select_one("table.scores")
rows = []
for tr in table.select("tbody tr"):
    cells = [td.get_text(strip=True) for td in tr.select("td")]
    rows.append(cells)

# 或：用 pandas 一行解決
import pandas as pd
df = pd.read_html(html)[0]    # 自動找第一個 <table>
\`\`\`

> \`pd.read_html\` 對「乾淨的 table」幾乎萬能；複雜版面才要自己手刻。

## 40.5 文字清理三招

| 招式 | 用途 |
|------|------|
| \`.get_text(strip=True)\` | 去前後空白與換行 |
| \`re.sub(r'\\s+', ' ', s)\` | 把多個空白合成一個 |
| \`s.replace('\\xa0', ' ')\` | 替換不可見的 nbsp |

## 40.6 動手試試（模擬版）

範例直接內嵌一段「新聞列表」HTML，用 stdlib 解析後組成 dict 清單。
`,
example:`# 模擬：把新聞列表頁面解析成 [{title, url}, ...] 清單
from html.parser import HTMLParser

html = (
    '\\n<div class="news-list">\\n'
    '  <div class="news-card">\\n'
    '    <h3 class="title">APCS 6 月場登場</h3>\\n'
    '    <a href="/news/1">看更多</a>\\n'
    '  </div>\\n'
    '  <div class="news-card">\\n'
    '    <h3 class="title">大學程式設計新趨勢</h3>\\n'
    '    <a href="/news/2">看更多</a>\\n'
    '  </div>\\n'
    '  <div class="news-card">\\n'
    '    <h3 class="title">教育部公布新課綱</h3>\\n'
    '    <a href="/news/3">看更多</a>\\n'
    '  </div>\\n'
    '</div>'
)

class NewsParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.items = []
        self.cur = None
        self.in_title = False
    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if tag == 'div' and a.get('class') == 'news-card':
            self.cur = {}
        elif tag == 'h3' and self.cur is not None:
            self.in_title = True
        elif tag == 'a' and self.cur is not None:
            self.cur['url'] = a.get('href', '')
    def handle_endtag(self, tag):
        if tag == 'h3':
            self.in_title = False
        elif tag == 'div' and self.cur is not None and 'title' in self.cur:
            self.items.append(self.cur)
            self.cur = None
    def handle_data(self, data):
        if self.in_title and self.cur is not None:
            self.cur['title'] = data.strip()

p = NewsParser()
p.feed(html)
print(f"共抓到 {len(p.items)} 則新聞：")
for item in p.items:
    print(f"  [{item['url']}] {item['title']}")
`},
{id:41,title:"分頁與爬取流程",tag:"專項",content:`
# 第 41 章：分頁與爬取流程

> 🕷 **專項教學 · 爬蟲**：實際的網站不會把一萬筆塞在一頁。學會「翻頁」是第二個關卡。

## 41.1 三種常見分頁

### 路徑分頁
\`\`\`
https://site/list/1
https://site/list/2
https://site/list/3
\`\`\`

\`\`\`python
for page in range(1, 11):
    url = f"https://site/list/{page}"
    r = requests.get(url, timeout=5)
    parse(r.text)
\`\`\`

### 查詢字串分頁
\`\`\`
https://site/list?page=1
https://site/list?page=2
\`\`\`

\`\`\`python
for page in range(1, 11):
    r = requests.get("https://site/list", params={"page": page}, timeout=5)
    parse(r.text)
\`\`\`

### 「下一頁」連結（沒有總頁數）
\`\`\`python
url = "https://site/list"
while url:
    r = requests.get(url, timeout=5)
    soup = BeautifulSoup(r.text, "html.parser")
    parse(soup)
    next_a = soup.select_one("a.next")
    url = next_a["href"] if next_a else None
\`\`\`

## 41.2 何時停？三種終止條件

| 條件 | 怎麼判斷 |
|------|----------|
| 達到頁數上限 | \`if page > MAX: break\` |
| 沒有資料 | \`if not items: break\` |
| 抓到重複內容 | 用 \`set\` 記錄已看過的 id |

## 41.3 去重：用 set 是基本功

\`\`\`python
seen = set()
results = []
for page in range(1, 100):
    items = fetch_page(page)
    new = [it for it in items if it["id"] not in seen]
    if not new:
        print(f"page {page} 全是重複，停止")
        break
    for it in new:
        seen.add(it["id"])
        results.append(it)
\`\`\`

## 41.4 禮貌延遲：別把人家伺服器打爆

\`\`\`python
import time, random

for page in range(1, 11):
    fetch_page(page)
    time.sleep(random.uniform(1, 3))   # 1~3 秒隨機
\`\`\`

> 🛡 **底線**：每秒打超過 1 次就有可能被當 DDoS 攻擊。新手請用 \`time.sleep(2)\`。

## 41.5 完整流程模板

\`\`\`python
import requests, time
from bs4 import BeautifulSoup

BASE = "https://site/list"
HEADERS = {"User-Agent": "Mozilla/5.0 (research bot)"}
MAX_PAGE = 50

seen_ids = set()
all_items = []

for page in range(1, MAX_PAGE + 1):
    try:
        r = requests.get(BASE, params={"page": page},
                         headers=HEADERS, timeout=10)
        r.raise_for_status()
    except requests.RequestException as e:
        print(f"page {page} 失敗：{e}")
        continue

    soup = BeautifulSoup(r.text, "html.parser")
    items = [parse_card(c) for c in soup.select("div.card")]
    new = [it for it in items if it["id"] not in seen_ids]

    if not new:
        print(f"page {page} 沒有新資料，結束")
        break

    for it in new:
        seen_ids.add(it["id"])
        all_items.append(it)

    print(f"page {page}: +{len(new)} 筆（累計 {len(all_items)}）")
    time.sleep(1.5)

print(f"總共抓到 {len(all_items)} 筆")
\`\`\`

## 41.6 動手試試

範例模擬 5 頁、每頁 3 筆，含 1 筆重複跨頁。看看去重的結果。
`,
example:`# 模擬：5 頁抓資料 + 去重
def fetch_page(page):
    # 假裝這是 requests.get 回來解析後的結果
    fake = {
        1: [{"id":1,"t":"A"},{"id":2,"t":"B"},{"id":3,"t":"C"}],
        2: [{"id":3,"t":"C"},{"id":4,"t":"D"},{"id":5,"t":"E"}],  # id=3 重複
        3: [{"id":6,"t":"F"},{"id":7,"t":"G"},{"id":8,"t":"H"}],
        4: [{"id":9,"t":"I"},{"id":10,"t":"J"}],
        5: [],   # 沒資料了
    }
    return fake.get(page, [])

seen = set()
results = []

for page in range(1, 100):
    items = fetch_page(page)
    new = [it for it in items if it["id"] not in seen]
    if not items:
        print(f"page {page}: 空頁，停止"); break
    if not new:
        print(f"page {page}: 全部重複，停止"); break
    for it in new:
        seen.add(it["id"]); results.append(it)
    print(f"page {page}: +{len(new)} 筆 (累計 {len(results)})")

print(f"\\n最終抓到 {len(results)} 筆，去重後 id: {sorted(seen)}")
`},
{id:42,title:"儲存爬蟲結果：CSV / JSON",tag:"專項",content:`
# 第 42 章：儲存爬蟲結果：CSV / JSON

> 🕷 **專項教學 · 爬蟲**：抓回來不存就白抓了。學會兩種最常見的格式。

## 42.1 CSV：Excel 開得開

\`\`\`python
import csv

rows = [
    {"title": "新聞 A", "url": "/a", "views": 100},
    {"title": "新聞 B", "url": "/b", "views": 250},
]

with open("news.csv", "w", newline="", encoding="utf-8-sig") as f:
    w = csv.DictWriter(f, fieldnames=["title", "url", "views"])
    w.writeheader()
    w.writerows(rows)
\`\`\`

關鍵設定：

| 設定 | 為什麼 |
|------|--------|
| \`newline=""\` | 防止 Windows 上多空白行 |
| \`encoding="utf-8-sig"\` | Excel 開中文不亂碼（加 BOM） |
| \`DictWriter\` | 直接寫 dict、自動對應欄位 |

## 42.2 讀回來

\`\`\`python
with open("news.csv", encoding="utf-8-sig") as f:
    r = csv.DictReader(f)
    for row in r:
        print(row["title"], int(row["views"]))
\`\`\`

> 💡 csv 讀出來**全部是字串**，數字記得轉型。

## 42.3 JSON：保留結構

當你的資料有巢狀（list 裡有 dict、dict 裡有 list），用 JSON：

\`\`\`python
import json

data = [
    {"title": "新聞 A", "tags": ["教育", "考試"], "meta": {"author": "編輯"}},
    {"title": "新聞 B", "tags": ["科技"], "meta": {"author": "記者"}},
]

with open("news.json", "w", encoding="utf-8") as f:
    json.dump(data, f, ensure_ascii=False, indent=2)
\`\`\`

\`ensure_ascii=False\` → 中文不會被轉成 \`\\uXXXX\`。
\`indent=2\` → 排版好讀。

## 42.4 讀回來

\`\`\`python
with open("news.json", encoding="utf-8") as f:
    data = json.load(f)
print(data[0]["title"])
\`\`\`

## 42.5 「邊抓邊寫」防斷線

如果要抓 1 萬筆，不要全部抓完才寫——萬一中間掛掉全沒了。**每抓 100 筆就 append 一次**：

\`\`\`python
import csv

with open("news.csv", "a", newline="", encoding="utf-8-sig") as f:
    w = csv.writer(f)
    for batch in batches_of(100):
        for it in batch:
            w.writerow([it["title"], it["url"], it["views"]])
        f.flush()                  # 立刻寫到硬碟
\`\`\`

## 42.6 何時用哪個？

| 資料形狀 | 推薦 |
|----------|------|
| 二維表（欄位固定） | CSV |
| 有巢狀結構 | JSON |
| 要給 Excel 開 | CSV (\`utf-8-sig\`) |
| 要餵給程式繼續處理 | JSON |
| 一行一筆獨立資料 | JSONL（\`.jsonl\`，每行一個 JSON） |

## 42.7 動手試試

範例用 \`io.StringIO\` 在記憶體中產生 CSV 和 JSON（不寫到硬碟），讓你看清格式。
`,
example:`# 不寫硬碟，用 StringIO 示範 CSV / JSON 序列化
import csv, json, io

rows = [
    {"title": "新聞 A", "url": "/a", "views": 100},
    {"title": "新聞 B", "url": "/b", "views": 250},
    {"title": "新聞 C", "url": "/c", "views": 80},
]

# ── CSV ──
buf = io.StringIO()
w = csv.DictWriter(buf, fieldnames=["title", "url", "views"])
w.writeheader()
w.writerows(rows)
print("===== CSV =====")
print(buf.getvalue())

# 讀回來
buf.seek(0)
r = csv.DictReader(buf)
total_views = sum(int(row["views"]) for row in r)
print(f"總點閱: {total_views}")

# ── JSON ──
js = json.dumps(rows, ensure_ascii=False, indent=2)
print("\\n===== JSON =====")
print(js)

# 讀回來
back = json.loads(js)
print(f"\\n第一筆 title: {back[0]['title']}")
`},
{id:43,title:"爬蟲的防呆、限速與道德",tag:"專項",content:`
# 第 43 章：爬蟲的防呆、限速與道德

> 🕷 **專項教學 · 爬蟲**：最後一章，講的是「怎麼當一個不討人厭的爬蟲」。

## 43.1 robots.txt：先看人家允不允許

每個正規網站都有：
\`\`\`
https://example.com/robots.txt
\`\`\`

裡面長這樣：
\`\`\`
User-agent: *
Disallow: /admin/
Disallow: /private/
Allow: /
Crawl-delay: 2
\`\`\`

意思：所有爬蟲不能進 \`/admin/\`、\`/private/\`，每次請求間隔 2 秒。

Python 內建解析器：

\`\`\`python
import urllib.robotparser

rp = urllib.robotparser.RobotFileParser()
rp.set_url("https://example.com/robots.txt")
rp.read()
print(rp.can_fetch("*", "https://example.com/admin/"))   # False
\`\`\`

## 43.2 三件「絕對不要做」

| ❌ 不要做 | 為什麼 |
|----------|--------|
| **每秒打超過幾百次** | 等於 DDoS 攻擊，會被法律追究 |
| **無視 robots.txt** | 違反業界默契、可能違法 |
| **爬個人資料拿去賣** | 法律問題 + 道德問題 |

## 43.3 防呆 1：retry + 指數退避

被限流（429）就等久一點再試：

\`\`\`python
import time, requests

def fetch_with_retry(url, max_retry=3):
    for attempt in range(max_retry):
        try:
            r = requests.get(url, timeout=10)
            if r.status_code == 429:
                wait = 2 ** attempt          # 1, 2, 4 秒
                print(f"被限流，等 {wait} 秒")
                time.sleep(wait)
                continue
            r.raise_for_status()
            return r
        except requests.RequestException as e:
            print(f"第 {attempt+1} 次失敗：{e}")
            time.sleep(2 ** attempt)
    return None
\`\`\`

## 43.4 防呆 2：把錯誤集中記錄

\`\`\`python
fails = []

for url in urls:
    try:
        r = fetch_with_retry(url)
        if r is None:
            fails.append((url, "重試失敗"))
            continue
        parse(r.text)
    except Exception as e:
        fails.append((url, str(e)))

print(f"成功 {len(urls)-len(fails)}, 失敗 {len(fails)}")
for url, err in fails:
    print(f"  {url}: {err}")
\`\`\`

## 43.5 防呆 3：斷點續傳

抓 10000 筆時跑到第 7234 筆當機，不要從頭來。把進度寫到檔案：

\`\`\`python
import json, pathlib

PROGRESS = pathlib.Path("progress.json")
done = set(json.loads(PROGRESS.read_text())) if PROGRESS.exists() else set()

for url in urls:
    if url in done:
        continue
    fetch_and_save(url)
    done.add(url)
    PROGRESS.write_text(json.dumps(list(done)))
\`\`\`

## 43.6 防呆 4：User-Agent 要誠實

不要假冒「我是 Googlebot」——這在法律上算詐騙：

\`\`\`python
HEADERS = {
    "User-Agent": "Mozilla/5.0 (compatible; MyResearchBot/1.0; "
                  "+https://yoursite.com/about)"
}
\`\`\`

如果是個人專案，最好留個聯絡方式（GitHub 連結也行）。

## 43.7 速度建議

| 規模 | 建議速率 |
|------|----------|
| 小網站（個人 blog） | ≤ 1 req / 2 秒 |
| 中型網站 | 1 req / 秒 |
| 大型網站（有公開 API） | 看 API rate limit 文件 |
| 不確定？ | **先慢慢來，再加速** |

## 43.8 終極建議

> 🎓 **學長姐悄悄話**：能用 API 就用 API（看人家有沒有公開），不行才爬 HTML。
> API 給你結構化 JSON，爬蟲還要解析 HTML，**麻煩 10 倍以上**。

## 43.9 動手試試

範例做「retry + 指數退避」的模擬：50% 機率失敗，看重試幾次能成功。
`,
example:`# 模擬：retry + 指數退避
import random

random.seed(42)   # 固定 seed，輸出穩定可預測

def fake_fetch(url):
    # 50% 機率回傳 200，50% 回 429
    return 200 if random.random() > 0.5 else 429

def fetch_with_retry(url, max_retry=4):
    for attempt in range(max_retry):
        code = fake_fetch(url)
        if code == 200:
            return attempt + 1, "成功"
        wait = 2 ** attempt
        print(f"  [{url}] 第 {attempt+1} 次：{code}，退避 {wait}s")
    return max_retry, "失敗"

urls = ["/a", "/b", "/c", "/d", "/e"]
succ = 0
for u in urls:
    print(f"抓取 {u}")
    tries, status = fetch_with_retry(u)
    if status == "成功":
        succ += 1
    print(f"  → {status}（共 {tries} 次嘗試）")

print(f"\\n總結：{succ}/{len(urls)} 成功")
`},
{id:44,title:"為什麼要學 pandas",tag:"專項",content:`
# 第 44 章：為什麼要學 pandas

> 📊 **專項教學 · 資料分析**：把 Excel 那些手動拖拉自動化，並能處理 100 萬列以上。

## 44.1 用 Excel 會痛的時刻

| 情境 | Excel | pandas |
|------|-------|--------|
| 10 萬列以上 | 卡到爆 | 一秒處理 |
| 重複「篩選 → 樞紐 → 排序」 | 每天手動點 | 寫成腳本，1 次 1 秒 |
| 多份檔案合併 | VLOOKUP 苦海 | \`merge\` 一行 |
| 自動產生圖表 | 不可能 | matplotlib 一行 |
| 跟資料庫 / API 串接 | 不可能 | 內建支援 |

## 44.2 DataFrame 是什麼

把它想成「Python 版的 Excel 工作表」：

\`\`\`python
import pandas as pd

df = pd.DataFrame({
    "name":  ["Alice", "Bob", "Cara", "Dan"],
    "score": [92, 75, 88, 60],
    "city":  ["台北", "台中", "台北", "高雄"],
})
print(df)
\`\`\`

輸出：
\`\`\`
    name  score city
0  Alice     92   台北
1    Bob     75   台中
2   Cara     88   台北
3    Dan     60   高雄
\`\`\`

每欄叫 **Series**（一維），合起來叫 **DataFrame**（二維）。

## 44.3 三個核心觀念

| 概念 | 對應 Excel | 範例 |
|------|-----------|------|
| **DataFrame** | 整張工作表 | \`df\` |
| **Series** | 一整欄 | \`df["score"]\` |
| **Index** | 列號（A1 的 1） | \`df.index\` |

## 44.4 安裝

\`\`\`bash
pip install pandas matplotlib openpyxl
\`\`\`

- \`pandas\`：核心
- \`matplotlib\`：畫圖
- \`openpyxl\`：讀寫 .xlsx

## 44.5 五分鐘上手範例

\`\`\`python
import pandas as pd

# 1) 建資料
df = pd.DataFrame({"name": ["A","B","C","D"], "score": [85, 60, 92, 73]})

# 2) 基本統計
print(df["score"].mean())   # 平均
print(df["score"].max())    # 最高

# 3) 篩選
passed = df[df["score"] >= 70]
print(passed)

# 4) 排序
print(df.sort_values("score", ascending=False))

# 5) 存檔
df.to_csv("scores.csv", index=False, encoding="utf-8-sig")
\`\`\`

五個操作就涵蓋 80% 日常需求。

## 44.6 動手試試（模擬版）

Pyodide 沒預載 pandas，下方範例用 stdlib \`statistics\` 模擬。本機請用 \`pip install pandas\` 跑真實版本。

> **跨語言對應**：
> - **R**：data.frame / dplyr / tidyverse — pandas 的靈感來源
> - **SQL**：很多 pandas 操作 (groupby, merge) 就是 SQL 概念
> - **C++/Java**：沒有對應的「即用即丟」資料分析語法，要動手寫

## 44.7 🧠 設計動機：pandas 為什麼比 Python 迴圈快？

這是最常見的疑問。答案在於 pandas 的底層是 **NumPy**，而 NumPy 的運算是用 C 語言寫的，並大量使用**向量化（vectorization）**。

Python 迴圈的問題：每次迭代都要進行物件查找、型別檢查、動態分派，Python 的 GIL 也讓多核無法直接加速。

pandas/NumPy 的做法：把一整欄資料存成連續的記憶體區塊（C array），用單一的 C 函式呼叫一次處理整欄，完全跳過 Python 的物件系統。

這也解釋了兩個重要推論：
1. **不要在 DataFrame 上寫迴圈**——\`for row in df.iterrows()\` 把快的變慢，應該用向量化操作（\`df["col"] * 2\`）。
2. **dtype 很重要**——如果一欄本來是整數卻被讀成 object（字串），向量化就失效了，效能會暴跌。

\`\`\`python
import pandas as pd
import time

data = list(range(1_000_000))
df = pd.DataFrame({"val": data})

# 方法 1：Python 迴圈
t = time.time()
result = [x * 2 for x in df["val"]]
print(f"Python loop:   {time.time()-t:.3f}s")

# 方法 2：向量化
t = time.time()
result = df["val"] * 2
print(f"Vectorized:    {time.time()-t:.3f}s")
# 向量化通常快 10–100 倍
\`\`\`
`,
example:`# 模擬：用 stdlib 做最基本的「DataFrame」操作
import statistics
from collections import Counter

# 用 list of dict 模擬 DataFrame
df = [
    {"name": "Alice", "score": 92, "city": "台北"},
    {"name": "Bob",   "score": 75, "city": "台中"},
    {"name": "Cara",  "score": 88, "city": "台北"},
    {"name": "Dan",   "score": 60, "city": "高雄"},
]

# 印出表格
print(f"{'name':6}{'score':>5}  {'city':6}")
print('-' * 22)
for r in df:
    print(f"{r['name']:6}{r['score']:>5}  {r['city']:6}")

# 一欄 = Series
scores = [r["score"] for r in df]
print(f"\\n平均: {statistics.mean(scores):.1f}")
print(f"最高: {max(scores)}")
print(f"最低: {min(scores)}")

# 篩選 (boolean mask)
passed = [r for r in df if r["score"] >= 80]
print(f"\\n>=80 的人 ({len(passed)} 個):")
for r in passed:
    print(f"  {r['name']}: {r['score']}")

# 城市分布
city_count = Counter(r["city"] for r in df)
print(f"\\n城市分布: {dict(city_count)}")
`},
{id:45,title:"讀進資料：CSV / Excel / JSON",tag:"專項",content:`
# 第 45 章：讀進資料

> 📊 **專項教學 · 資料分析**：pandas 真正神奇之處：一行 read_csv 解決一切。

## 45.1 從 CSV 讀

\`\`\`python
import pandas as pd
df = pd.read_csv("scores.csv")
\`\`\`

常用參數：

| 參數 | 用途 |
|------|------|
| \`encoding="utf-8-sig"\` | 中文不亂碼（Excel 存的 CSV） |
| \`sep=","\` | 分隔符（tsv 用 \`\\t\`） |
| \`header=0\` | 第幾列是表頭（None 表示沒有） |
| \`names=["a","b"]\` | 自己給欄位名 |
| \`dtype={"id": str}\` | 強制某欄型別 |
| \`na_values=["-", "N/A"]\` | 自訂哪些字串算缺值 |
| \`nrows=100\` | 只讀前 100 列（除錯用） |
| \`usecols=["a","b"]\` | 只讀指定欄 |

## 45.2 從 Excel 讀

\`\`\`python
df = pd.read_excel("scores.xlsx", sheet_name="一年級")
# 想讀全部 sheet
all_sheets = pd.read_excel("scores.xlsx", sheet_name=None)  # dict
\`\`\`

需要 \`pip install openpyxl\`。

## 45.3 從 JSON 讀

\`\`\`python
df = pd.read_json("data.json")           # 適合 list of dict
df = pd.read_json("data.jsonl", lines=True)   # 每行一個 JSON
\`\`\`

## 45.4 從 dict / list 建

\`\`\`python
# dict of list
df = pd.DataFrame({
    "name":  ["A", "B", "C"],
    "score": [90, 80, 70],
})

# list of dict
df = pd.DataFrame([
    {"name": "A", "score": 90},
    {"name": "B", "score": 80},
])
\`\`\`

## 45.5 從網站直接讀

\`\`\`python
# 公開 CSV
df = pd.read_csv("https://example.com/data.csv")

# HTML 表格（全部 <table>）
tables = pd.read_html("https://en.wikipedia.org/wiki/...")
df = tables[0]   # 第一個 table

# SQL 資料庫
import sqlite3
conn = sqlite3.connect("my.db")
df = pd.read_sql("SELECT * FROM users", conn)
\`\`\`

## 45.6 看資料第一件事

\`\`\`python
df.head()       # 前 5 列
df.tail(10)     # 後 10 列
df.shape        # (列數, 欄數)
df.columns      # 欄位名
df.dtypes       # 每欄型別
df.info()       # 摘要：型別 + 非空數量
df.describe()   # 數值欄統計摘要
\`\`\`

> 🎯 **黃金 SOP**：拿到新資料 → \`df.head()\` → \`df.info()\` → \`df.describe()\`，3 行內就知道資料長什麼樣。

## 45.7 動手試試（模擬版）

範例用 \`io.StringIO\` + \`csv\` 模擬 read_csv 的核心邏輯。
`,
example:`# 模擬：用 stdlib csv 從字串讀資料（模擬 pd.read_csv）
import csv, io
from statistics import mean

csv_text = '''name,score,city
Alice,92,台北
Bob,75,台中
Cara,88,台北
Dan,60,高雄
Eve,,新北
'''

# 1) 讀進來
reader = csv.DictReader(io.StringIO(csv_text))
rows = list(reader)

print(f"shape: ({len(rows)}, {len(rows[0])})")
print(f"columns: {list(rows[0].keys())}")

# 2) head: 前 3 列
print("\\nhead(3):")
for r in rows[:3]:
    print(f"  {r}")

# 3) info: 每欄型別與非空數
print("\\ninfo:")
for col in rows[0].keys():
    vals = [r[col] for r in rows if r[col] != '']
    print(f"  {col:6} non-null={len(vals)}/{len(rows)}")

# 4) describe (只對數值欄)
scores = [int(r["score"]) for r in rows if r["score"]]
print(f"\\nscore describe:")
print(f"  count={len(scores)}, mean={mean(scores):.1f}, min={min(scores)}, max={max(scores)}")
`},
{id:46,title:"選欄選列：pandas 核心",tag:"專項",content:`
# 第 46 章：選欄選列 — pandas 的核心操作

> 📊 **專項教學 · 資料分析**：學會 4 種選法，你就能做 90% 的資料切片。

## 46.1 選一欄、選多欄

\`\`\`python
df["score"]                # 一欄 → Series
df[["name", "score"]]      # 多欄（注意要兩層中括號）→ DataFrame
\`\`\`

## 46.2 選列：boolean mask（最常用！）

\`\`\`python
df[df["score"] >= 80]                              # 分數 >=80
df[(df["score"] >= 80) & (df["city"] == "台北")]   # 兩個條件 (用 & 不是 and)
df[df["city"].isin(["台北", "台中"])]              # in 一個 list
df[df["name"].str.startswith("A")]                 # 字串方法
\`\`\`

> ⚠️ pandas 的 boolean 用 \`&\` \`|\` \`~\`，不是 \`and\` \`or\` \`not\`，且每個條件要加括號。

## 46.3 用 query：可讀性更好

\`\`\`python
df.query("score >= 80")
df.query("score >= 80 and city == '台北'")
df.query("city in ['台北', '台中']")
\`\`\`

## 46.4 .loc 和 .iloc：精準定位

| 寫法 | 意思 |
|------|------|
| \`df.loc[3]\` | 第 3 列（用 index 標籤） |
| \`df.loc[3, "name"]\` | 第 3 列的 name 欄 |
| \`df.loc[df["score"]>80, "name"]\` | 條件 + 指定欄 |
| \`df.iloc[0]\` | 第 0 列（位置） |
| \`df.iloc[0:5]\` | 前 5 列 |
| \`df.iloc[:, 0]\` | 第 0 欄 |
| \`df.iloc[0:5, 0:2]\` | 切片 |

## 46.5 修改值

\`\`\`python
df.loc[df["score"] < 60, "passed"] = False    # 新增/修改一欄
df.loc[3, "name"] = "Bobby"                   # 改特定 cell
\`\`\`

> ❌ **不要寫 \`df[mask]["col"] = ...\`** — 這是 "SettingWithCopyWarning"，可能改不到原 df。永遠用 \`.loc[mask, "col"] = ...\`。

## 46.6 新增欄位

\`\`\`python
df["pass"] = df["score"] >= 60              # 條件 → bool
df["double"] = df["score"] * 2              # 算式
df["grade"] = df["score"].apply(            # 自訂函式
    lambda s: "A" if s >= 90 else ("B" if s >= 70 else "C")
)
\`\`\`

## 46.7 刪欄刪列

\`\`\`python
df = df.drop(columns=["city"])              # 刪欄
df = df.drop(index=[0, 1])                  # 刪列
df = df.drop_duplicates()                   # 去重
\`\`\`

> 💡 預設不就地修改，要原地改用 \`inplace=True\`，但業界更常見的是 \`df = df.drop(...)\`。

## 46.8 動手試試（模擬版）

範例示範「選欄 + 條件選列 + 新增計算欄」三件套。
`,
example:`# 模擬：list of dict 上做 pandas 風格的選欄選列
df = [
    {"name": "Alice", "score": 92, "city": "台北"},
    {"name": "Bob",   "score": 75, "city": "台中"},
    {"name": "Cara",  "score": 88, "city": "台北"},
    {"name": "Dan",   "score": 60, "city": "高雄"},
    {"name": "Eve",   "score": 95, "city": "台北"},
]

# 1) 選欄: df[["name","score"]]
print("選欄 [name, score]:")
for r in df:
    print(f"  {r['name']}: {r['score']}")

# 2) 條件選列: df[(df.score >= 80) & (df.city == "台北")]
print("\\n台北且 >=80:")
filt = [r for r in df if r["score"] >= 80 and r["city"] == "台北"]
for r in filt:
    print(f"  {r}")

# 3) 新增欄: df["grade"] = ...
def grade(s):
    if s >= 90: return "A"
    if s >= 70: return "B"
    return "C"

for r in df:
    r["grade"] = grade(r["score"])

print("\\n加 grade 欄:")
for r in df:
    print(f"  {r['name']}: {r['score']} → {r['grade']}")

# 4) 統計各等級人數
from collections import Counter
print(f"\\n各等級分布: {dict(Counter(r['grade'] for r in df))}")
`},
{id:47,title:"清理髒資料",tag:"專項",content:`
# 第 47 章：清理髒資料

> 📊 **專項教學 · 資料分析**：真實世界的資料 80% 都是髒的。清理才是分析師的日常。

## 47.1 缺失值 NaN

pandas 用 \`NaN\` (Not a Number) 表示缺值。

\`\`\`python
df.isna()              # bool DataFrame，True=缺值
df.isna().sum()        # 每欄缺幾個
df.dropna()            # 刪掉任何有缺值的列
df.dropna(subset=["score"])    # 只看 score 欄
df.fillna(0)           # 補 0
df.fillna({"score": df["score"].mean(),  # 用平均補
           "city":  "未知"})
df["score"].fillna(method="ffill")   # 用前一筆補（時序資料常用）
\`\`\`

## 47.2 型別轉換

\`\`\`python
df["score"] = df["score"].astype(int)
df["date"] = pd.to_datetime(df["date"])
df["price"] = pd.to_numeric(df["price"], errors="coerce")  # 失敗→NaN
\`\`\`

## 47.3 字串清理 .str

\`\`\`python
df["name"] = df["name"].str.strip()           # 去前後空白
df["name"] = df["name"].str.lower()           # 小寫
df["phone"] = df["phone"].str.replace("-", "")
df["email"] = df["email"].str.contains("@")   # bool
df[["first","last"]] = df["full"].str.split(" ", expand=True)
\`\`\`

## 47.4 重複資料

\`\`\`python
df.duplicated()              # 每列是否重複（bool）
df.duplicated(subset=["id"]) # 只看 id 欄
df.drop_duplicates()         # 去重
df.drop_duplicates(subset=["id"], keep="last")  # 保留最後一筆
\`\`\`

## 47.5 異常值（outlier）

\`\`\`python
# 用 IQR 找
Q1, Q3 = df["price"].quantile([0.25, 0.75])
IQR = Q3 - Q1
mask = (df["price"] < Q1 - 1.5*IQR) | (df["price"] > Q3 + 1.5*IQR)
outliers = df[mask]
clean = df[~mask]
\`\`\`

## 47.6 改欄名

\`\`\`python
df = df.rename(columns={"old_name": "new_name", "x": "y"})
df.columns = ["a", "b", "c"]   # 全部換掉
df.columns = df.columns.str.lower().str.replace(" ", "_")  # 批次
\`\`\`

## 47.7 清理 SOP

實務上拿到新檔案就跑這串：

\`\`\`python
df = pd.read_csv("raw.csv", encoding="utf-8-sig")
print(df.isna().sum())              # 1) 看缺值
print(df.dtypes)                     # 2) 看型別
print(df.duplicated().sum())         # 3) 看重複
df.columns = df.columns.str.strip().str.lower()
df = df.drop_duplicates()
df = df.dropna(subset=["id"])
df["score"] = pd.to_numeric(df["score"], errors="coerce")
df["score"] = df["score"].fillna(df["score"].mean())
\`\`\`

## 47.8 動手試試（模擬版）

範例展示常見髒資料：空字串、字串型數字、重複列，並完成清理。
`,
example:`# 模擬：用 stdlib 做髒資料清理
from statistics import mean

# 模擬一份有問題的資料
raw = [
    {"name": "Alice", "score": "92"},
    {"name": " Bob ", "score": "75"},     # 有空白
    {"name": "Cara",  "score": ""},        # 缺值
    {"name": "Dan",   "score": "abc"},     # 不是數字
    {"name": "Alice", "score": "92"},      # 重複
    {"name": "Eve",   "score": "88"},
]

print(f"原始 {len(raw)} 列")

# 1) trim 空白
for r in raw:
    r["name"] = r["name"].strip()

# 2) 轉型 + 處理錯誤 (pd.to_numeric errors="coerce")
def to_num(s):
    try:
        return int(s)
    except (ValueError, TypeError):
        return None  # 等同 NaN

for r in raw:
    r["score_num"] = to_num(r["score"])

print(f"轉型後缺值數: {sum(1 for r in raw if r['score_num'] is None)}")

# 3) 用平均補缺值
valid = [r["score_num"] for r in raw if r["score_num"] is not None]
avg = mean(valid)
print(f"score 平均: {avg:.1f}")
for r in raw:
    if r["score_num"] is None:
        r["score_num"] = round(avg)

# 4) 去重
seen = set()
unique = []
for r in raw:
    key = (r["name"], r["score_num"])
    if key not in seen:
        seen.add(key)
        unique.append(r)

print(f"\\n清理後 {len(unique)} 列:")
for r in unique:
    print(f"  {r['name']:6} {r['score_num']}")
`},
{id:48,title:"統計與彙總",tag:"專項",content:`
# 第 48 章：統計與彙總

> 📊 **專項教學 · 資料分析**：把幾千筆資料壓縮成一個數字、一張排行榜。

## 48.1 單欄統計

\`\`\`python
df["score"].sum()         # 總和
df["score"].mean()        # 平均
df["score"].median()      # 中位數
df["score"].std()         # 標準差
df["score"].var()         # 變異數
df["score"].min(), df["score"].max()
df["score"].quantile(0.75)   # 第 75 百分位
df["score"].count()       # 非空筆數
df["score"].nunique()     # 不重複數量
\`\`\`

## 48.2 一鍵摘要

\`\`\`python
df.describe()
\`\`\`

輸出：
\`\`\`
            score
count   100.0000
mean     78.5000
std      12.3456
min      40.0000
25%      70.0000
50%      80.0000
75%      88.0000
max     100.0000
\`\`\`

對非數值欄：
\`\`\`python
df.describe(include="object")   # 看字串欄的 count/unique/top/freq
df.describe(include="all")
\`\`\`

## 48.3 value_counts：類別欄必殺技

\`\`\`python
df["city"].value_counts()
# 台北    45
# 台中    23
# 高雄    18
# 新北    14

df["city"].value_counts(normalize=True)   # 比例
df["city"].value_counts(dropna=False)     # 包含 NaN
\`\`\`

## 48.4 排序

\`\`\`python
df.sort_values("score", ascending=False)
df.sort_values(["city", "score"], ascending=[True, False])
df.nlargest(5, "score")     # Top 5（比 sort 快）
df.nsmallest(5, "score")
\`\`\`

## 48.5 排名 rank

\`\`\`python
df["rank"] = df["score"].rank(ascending=False, method="min")
# method: 'min'  → 並列都拿小排名（最常見）
#         'dense' → 並列下一名 +1
#         'first' → 看出現順序
\`\`\`

## 48.6 累計 cumsum / cummax

\`\`\`python
df["cum_score"] = df["score"].cumsum()    # 累加
df["max_so_far"] = df["score"].cummax()   # 累計最大
\`\`\`

時序資料分析非常常用。

## 48.7 多欄一起做：agg

\`\`\`python
df.agg({
    "score": ["mean", "max", "min"],
    "age":   ["mean", "std"],
})
\`\`\`

## 48.8 動手試試

範例做 5 個經典統計操作：mean / value_counts / sort / rank / cumsum。
`,
example:`# 模擬：5 個 pandas 統計操作
from statistics import mean, median, stdev
from collections import Counter

df = [
    {"name": "Alice", "score": 92, "city": "台北"},
    {"name": "Bob",   "score": 75, "city": "台中"},
    {"name": "Cara",  "score": 88, "city": "台北"},
    {"name": "Dan",   "score": 60, "city": "高雄"},
    {"name": "Eve",   "score": 95, "city": "台北"},
    {"name": "Frank", "score": 82, "city": "台中"},
    {"name": "Gina",  "score": 75, "city": "新北"},
]

scores = [r["score"] for r in df]

# 1) describe
print("=== describe ===")
print(f"count={len(scores)}, mean={mean(scores):.1f}, median={median(scores)}")
print(f"std={stdev(scores):.2f}, min={min(scores)}, max={max(scores)}")

# 2) value_counts
print("\\n=== city value_counts ===")
for city, cnt in Counter(r["city"] for r in df).most_common():
    print(f"  {city}: {cnt}")

# 3) sort_values
print("\\n=== sort by score desc (top 3) ===")
for r in sorted(df, key=lambda x: -x["score"])[:3]:
    print(f"  {r['name']}: {r['score']}")

# 4) rank (min method)
sorted_scores = sorted(set(scores), reverse=True)
rank_map = {s: i+1 for i, s in enumerate(sorted_scores)}
print("\\n=== rank ===")
for r in df:
    print(f"  {r['name']:6} score={r['score']} rank={rank_map[r['score']]}")

# 5) cumsum
print("\\n=== cumsum (依原順序) ===")
cum = 0
for r in df:
    cum += r["score"]
    print(f"  {r['name']:6} cum={cum}")
`},
{id:49,title:"groupby — 樞紐分析核心",tag:"專項",content:`
# 第 49 章：groupby — 樞紐分析的核心

> 📊 **專項教學 · 資料分析**：把資料「按某欄分組，每組算統計」。資料分析最重要的單一操作。

## 49.1 三步驟：split-apply-combine

| 步驟 | 動作 |
|------|------|
| **split** | 按 city 分成 {台北:[...], 台中:[...]} |
| **apply** | 每組各算 mean(score) |
| **combine** | 合回一個 DataFrame |

\`\`\`python
df.groupby("city")["score"].mean()
# city
# 台北    91.7
# 台中    78.5
# 高雄    60.0
\`\`\`

## 49.2 多種彙總

\`\`\`python
df.groupby("city").agg({
    "score": ["mean", "max", "count"],
    "age":   "mean",
})
\`\`\`

或更簡潔：

\`\`\`python
df.groupby("city").agg(
    avg_score = ("score", "mean"),
    max_score = ("score", "max"),
    students  = ("name", "count"),
)
\`\`\`

## 49.3 多欄分組

\`\`\`python
df.groupby(["city", "grade"])["score"].mean()
\`\`\`

## 49.4 自訂彙總

\`\`\`python
df.groupby("city")["score"].agg(lambda s: s.max() - s.min())
# 每個城市的「分數全距」
\`\`\`

## 49.5 transform：算完塞回原表

\`agg\` 會把資料壓縮，\`transform\` 會把結果**廣播回每一列**：

\`\`\`python
df["city_avg"] = df.groupby("city")["score"].transform("mean")
df["above_city_avg"] = df["score"] > df["city_avg"]
\`\`\`

> 🎯 這招超實用：標出「在自己城市裡比平均高的人」。

## 49.6 filter：過濾整組

\`\`\`python
# 只保留「人數 >= 5」的城市
big_cities = df.groupby("city").filter(lambda g: len(g) >= 5)
\`\`\`

## 49.7 apply：最自由

\`\`\`python
def top2_avg(g):
    return g.nlargest(2, "score")["score"].mean()

df.groupby("city").apply(top2_avg)
\`\`\`

## 49.8 pivot_table：樞紐表

\`\`\`python
df.pivot_table(
    index="city",
    columns="grade",
    values="score",
    aggfunc="mean",
    fill_value=0,
)
\`\`\`

效果就是 Excel 的樞紐分析表。

## 49.9 動手試試

範例做最常見的「按 city 分組算平均、最大、人數」。
`,
example:`# 模擬：groupby 三步驟
from collections import defaultdict
from statistics import mean

df = [
    {"name": "Alice", "score": 92, "city": "台北"},
    {"name": "Bob",   "score": 75, "city": "台中"},
    {"name": "Cara",  "score": 88, "city": "台北"},
    {"name": "Dan",   "score": 60, "city": "高雄"},
    {"name": "Eve",   "score": 95, "city": "台北"},
    {"name": "Frank", "score": 82, "city": "台中"},
    {"name": "Gina",  "score": 75, "city": "新北"},
]

# Step 1: split
groups = defaultdict(list)
for r in df:
    groups[r["city"]].append(r["score"])

# Step 2 + 3: apply + combine
print(f"{'city':6}{'avg':>6}{'max':>6}{'count':>7}")
print('-' * 25)
for city in sorted(groups):
    scores = groups[city]
    print(f"{city:6}{mean(scores):>6.1f}{max(scores):>6}{len(scores):>7}")

# transform 風格：把組平均塞回每一列
print("\\n=== transform: 每列加上自己城市的平均、超過則 ★ ===")
city_avg = {c: mean(s) for c, s in groups.items()}
for r in df:
    avg = city_avg[r["city"]]
    star = ' ★' if r["score"] > avg else ''
    print(f"  {r['name']:6} {r['city']} score={r['score']} city_avg={avg:.1f}{star}")
`},
{id:50,title:"合併資料：merge / concat",tag:"專項",content:`
# 第 50 章：合併多份資料 — merge / concat

> 📊 **專項教學 · 資料分析**：學會 SQL 的 JOIN，用 pandas 一行就能搞定。

## 50.1 concat：縱向 / 橫向拼接

\`\`\`python
# 縱向（疊起來）
pd.concat([df1, df2], ignore_index=True)

# 橫向（並排）
pd.concat([df1, df2], axis=1)
\`\`\`

何時用：合併「多個檔案/月份」的同結構資料。

\`\`\`python
import glob
dfs = [pd.read_csv(f) for f in glob.glob("data/2026-*.csv")]
all_data = pd.concat(dfs, ignore_index=True)
\`\`\`

## 50.2 merge：SQL JOIN

\`\`\`python
students = pd.DataFrame({
    "id": [1, 2, 3, 4],
    "name": ["Alice", "Bob", "Cara", "Dan"],
})
scores = pd.DataFrame({
    "id": [1, 2, 3, 5],
    "score": [92, 75, 88, 70],
})

merged = students.merge(scores, on="id", how="inner")
\`\`\`

\`how\` 有 4 種：

| how | 意思 |
|-----|------|
| **inner** | 兩邊都有才保留（預設） |
| **left** | 以左為主，右側補 NaN |
| **right** | 以右為主 |
| **outer** | 全保留，缺的補 NaN |

## 50.3 不同欄名怎麼接

\`\`\`python
df1.merge(df2, left_on="user_id", right_on="uid", how="left")
\`\`\`

## 50.4 多欄 key

\`\`\`python
df1.merge(df2, on=["year", "month"])
\`\`\`

## 50.5 join：用 index 接

\`\`\`python
df1.join(df2, on="id", how="left")
\`\`\`

\`join\` 是 \`merge\` 的方便包裝，預設用 index。

## 50.6 melt：寬轉長

\`\`\`python
# 寬表（每月一欄）
#   name  Jan  Feb  Mar
#   Alice  90   85   92

long = df.melt(id_vars="name", var_name="month", value_name="score")
# name   month  score
# Alice  Jan    90
# Alice  Feb    85
\`\`\`

很多分析工具偏好「長表」格式。

## 50.7 pivot：長轉寬

\`\`\`python
wide = long.pivot(index="name", columns="month", values="score")
\`\`\`

## 50.8 動手試試

範例做 inner / left / outer 三種 join，看差別。
`,
example:`# 模擬：merge 三種 how
students = [
    {"id": 1, "name": "Alice"},
    {"id": 2, "name": "Bob"},
    {"id": 3, "name": "Cara"},
    {"id": 4, "name": "Dan"},
]
scores = [
    {"id": 1, "score": 92},
    {"id": 2, "score": 75},
    {"id": 3, "score": 88},
    {"id": 5, "score": 70},  # 學號 5 不在 students
]

# 建索引方便查
sc_map = {r["id"]: r["score"] for r in scores}
st_map = {r["id"]: r["name"] for r in students}

def show(rows, title):
    print(f"=== {title} ({len(rows)} rows) ===")
    for r in rows:
        print(f"  {r}")
    print()

# 1) inner: 兩邊都有
inner = []
for s in students:
    if s["id"] in sc_map:
        inner.append({"id": s["id"], "name": s["name"], "score": sc_map[s["id"]]})
show(inner, "INNER JOIN")

# 2) left: 以 students 為主
left = []
for s in students:
    left.append({"id": s["id"], "name": s["name"],
                 "score": sc_map.get(s["id"])})  # 缺 → None (NaN)
show(left, "LEFT JOIN")

# 3) outer: 全部 id 都保留
all_ids = sorted(set(st_map) | set(sc_map))
outer = []
for i in all_ids:
    outer.append({"id": i, "name": st_map.get(i), "score": sc_map.get(i)})
show(outer, "OUTER JOIN")
`},
{id:51,title:"視覺化：matplotlib 入門",tag:"專項",content:`
# 第 51 章：視覺化 — matplotlib 入門

> 📊 **專項教學 · 資料分析**：把數字變成圖，老闆才看得懂。

## 51.1 三大圖型

### 折線圖（時序 / 趨勢）

\`\`\`python
import matplotlib.pyplot as plt
import pandas as pd

df = pd.read_csv("daily_sales.csv")
plt.plot(df["date"], df["sales"])
plt.title("每日銷售")
plt.xlabel("日期"); plt.ylabel("銷售額")
plt.show()
\`\`\`

### 長條圖（分類比較）

\`\`\`python
city_sales = df.groupby("city")["sales"].sum()
city_sales.plot(kind="bar")
plt.title("各城市銷售總額")
plt.show()
\`\`\`

### 直方圖（看分布）

\`\`\`python
df["score"].hist(bins=20)
plt.title("分數分布")
plt.show()
\`\`\`

## 51.2 pandas 內建畫圖

DataFrame / Series 自帶 \`.plot()\`：

\`\`\`python
df.plot(x="date", y="sales")
df.plot.bar(x="city", y="sales")
df.plot.scatter(x="age", y="income")
df.plot.box()              # 盒鬚圖（看四分位）
df.plot.hist(bins=20)
\`\`\`

\`kind\` 速查：\`line\`, \`bar\`, \`barh\`, \`hist\`, \`box\`, \`kde\`, \`scatter\`, \`pie\`。

## 51.3 多張圖（subplots）

\`\`\`python
fig, axes = plt.subplots(2, 2, figsize=(10, 8))
df["a"].plot(ax=axes[0, 0], title="A")
df["b"].plot(ax=axes[0, 1], title="B")
df["c"].plot(ax=axes[1, 0], title="C")
df["d"].plot(ax=axes[1, 1], title="D")
plt.tight_layout()
plt.show()
\`\`\`

## 51.4 中文字型（Mac/Windows 都會踩到）

\`\`\`python
import matplotlib.pyplot as plt
plt.rcParams["font.sans-serif"] = ["Arial Unicode MS",  # Mac
                                    "Microsoft JhengHei", # Win
                                    "Noto Sans CJK TC"]   # Linux
plt.rcParams["axes.unicode_minus"] = False
\`\`\`

## 51.5 美化

\`\`\`python
plt.style.use("seaborn-v0_8")        # 套用主題
plt.figure(figsize=(10, 6))           # 設大小
plt.xticks(rotation=45)               # x 軸標籤轉 45 度
plt.grid(True, alpha=0.3)
plt.legend(loc="upper right")
plt.tight_layout()                    # 自動排版
plt.savefig("chart.png", dpi=150, bbox_inches="tight")
\`\`\`

## 51.6 seaborn：matplotlib 的高階包裝

\`\`\`python
import seaborn as sns
sns.boxplot(data=df, x="city", y="score")
sns.heatmap(df.corr(), annot=True, cmap="coolwarm")
sns.pairplot(df, hue="grade")
\`\`\`

> 🎨 一張漂亮統計圖 = matplotlib 控細節 + seaborn 套樣式。

## 51.7 動手試試（模擬版）

Pyodide 沒裝 matplotlib，這裡用 ASCII 印「長條圖」展示概念。
`,
example:`# 模擬: 用 ASCII 畫長條圖（就是 matplotlib 概念簡化版）
from collections import Counter

df = [
    {"city": "台北", "score": 92},
    {"city": "台中", "score": 75},
    {"city": "台北", "score": 88},
    {"city": "高雄", "score": 60},
    {"city": "台北", "score": 95},
    {"city": "台中", "score": 82},
    {"city": "新北", "score": 75},
    {"city": "新北", "score": 80},
    {"city": "新北", "score": 90},
]

# 1) bar chart: 每城市的人數
print("=== 各城市人數 ===")
counts = Counter(r["city"] for r in df)
maxw = 30
mx = max(counts.values())
for city in sorted(counts):
    n = counts[city]
    bar = '█' * int(n / mx * maxw)
    print(f"  {city:4} | {bar} {n}")

# 2) histogram: 分數分布
print("\\n=== 分數分布 (10 分一桶) ===")
buckets = [0] * 11   # 0-9, 10-19, ..., 100
for r in df:
    buckets[r["score"] // 10] += 1
for i, n in enumerate(buckets):
    if n == 0: continue
    bar = '█' * n
    print(f"  {i*10:3}-{i*10+9:3} | {bar} {n}")

# 3) 平均分線 (折線概念)
print("\\n=== 各城市平均分 (line chart 概念) ===")
from statistics import mean
city_scores = {}
for r in df:
    city_scores.setdefault(r["city"], []).append(r["score"])
for city in sorted(city_scores):
    avg = mean(city_scores[city])
    marker_pos = int(avg / 100 * 40)
    line = '·' * marker_pos + '●'
    print(f"  {city:4} {line} {avg:.1f}")
`},
{id:52,title:"Bot 是什麼？事件迴圈入門",tag:"專項",content:`
# 第 52 章：Bot 是什麼？

> 🤖 **專項教學 · Bot**：先搞懂「機器人」到底在跑什麼，再寫第一行程式。

## 52.1 一句話定義

**Bot = 一個 24 小時掛在網路上的程式，收到訊息會自動回。**

跟你寫的 print("Hello") 不一樣的是——它不會跑完就結束，而是**一直等下一個事件**。

## 52.2 兩種運作模式

### 模式 1：Webhook（推播）

平台主動打你：

\`\`\`
1. 使用者：「!hello」
2. Discord/LINE 伺服器 → POST https://yourbot.com/webhook
3. 你的程式收到 → 回 200 + 訊息
\`\`\`

- ✅ 即時
- ✅ 省資源
- ❌ 需要公開網址（部署或 ngrok）

### 模式 2：Long Polling / Gateway

你的程式主動連，連著不斷：

\`\`\`
1. 你的程式：「Discord，有新訊息嗎？」
2. Discord：「沒有」（保持連線）
3. 使用者發 !hello → Discord 推訊息給你
4. 你的程式：回 "Hi!"
\`\`\`

- ✅ 不用公開網址
- ✅ 本機開發容易
- ❌ 你的程式不能斷

| 平台 | 預設模式 |
|------|----------|
| **Discord** (\`discord.py\`) | Gateway（WebSocket） |
| **LINE** | Webhook |
| **Telegram** | 兩種都支援 |

## 52.3 事件迴圈 (Event Loop) 是 Bot 的骨架

每個 Bot 都長這樣：

\`\`\`python
def bot():
    connect_to_platform()
    while True:                  # ← 永遠不結束
        event = wait_for_event()
        handler = handlers[event.type]
        handler(event)
\`\`\`

\`discord.py\` 和 \`line-bot-sdk\` 都已經幫你寫好 while True，你只要**註冊「事件 → 函式」對應**。

## 52.4 你需要準備什麼

| 東西 | 用途 |
|------|------|
| **Bot Token** | 平台給你的「身分證」，是長字串，**千萬不能 push 上 GitHub** |
| **環境變數** | 用 \`os.getenv("TOKEN")\` 讀，避免寫死在 code |
| **Python 套件** | \`discord.py\` / \`line-bot-sdk\` / \`python-dotenv\` |
| **公開網址**（LINE 必要） | ngrok / Render / Railway |

## 52.5 Token 怎麼放？三步驟

1. 建一個 \`.env\` 檔（**加進 .gitignore**！）
\`\`\`
DISCORD_TOKEN=MTIzNDU2...
LINE_TOKEN=abc...
\`\`\`

2. 程式裡用 \`dotenv\` 讀：
\`\`\`python
from dotenv import load_dotenv
import os
load_dotenv()
TOKEN = os.getenv("DISCORD_TOKEN")
\`\`\`

3. 部署時把 \`.env\` 的內容貼到平台的「環境變數」設定。

> 🚨 **Token 外洩後果**：別人能用你的 bot 名義發垃圾訊息、踢人、洗版。Discord/LINE 也會封你的帳號。

## 52.6 動手試試（模擬版）

範例自己寫一個迷你版「事件迴圈 + 處理器註冊」系統，看 Bot 框架內部到底怎麼運作。

> **跨語言對應**：JavaScript (\`discord.js\`) 也是業界主流，Java 有 \`JDA\`。
> 不同語言，但事件迴圈 + 處理器註冊的模式都一樣。

## 52.7 🧠 設計動機：為什麼 Bot 用 async，而不是多執行緒？

Bot 的工作大多是「等待」：等訊息、等 API 回應、等資料庫查詢。這種任務叫做 **I/O 密集型（I/O-bound）**，和消耗 CPU 的任務完全不同。

**多執行緒方案**：每個等待任務開一條執行緒。缺點是開 1000 條執行緒要消耗大量記憶體，且執行緒切換本身有開銷。

**async/await 方案**：只用一條執行緒，但在「等待期間」切換去做別的事。這就是**協程（coroutine）**——主動讓出 CPU，等事件完成再回來。

打個比方：多執行緒是「雇 1000 個服務生各等一桌客人」，async 是「一個服務生在等某桌點餐時，去幫其他桌倒水」。

這解釋了為什麼：
- \`await\` 前面的函式必須是 \`async def\`（協程函式）
- 不能在 async 函式裡用 \`time.sleep()\`——要用 \`await asyncio.sleep()\`
- \`requests\` 在 bot 裡會阻塞整個事件循環——要用 \`aiohttp\`

\`\`\`python
import asyncio

# ❌ 錯誤：time.sleep 會凍結整個 bot
# async def bad_handler(message):
#     time.sleep(5)     # 這 5 秒內 bot 無法回應任何訊息
#     await message.reply("done")

# ✅ 正確：await 讓出控制權，其他事件仍可處理
async def good_handler(message):
    await asyncio.sleep(5)    # bot 在這 5 秒仍可回應其他訊息
    await message.reply("done")
\`\`\`
`,
example:`# 模擬迷你 Bot 框架：事件分派器
# 真實的 discord.py / line-bot-sdk 內部就是這個結構

handlers = {}

def on(event_type):
    # 裝飾器：註冊事件處理器
    def deco(fn):
        handlers[event_type] = fn
        return fn
    return deco

# === 使用者寫的 bot 程式 ===
@on("ready")
def handle_ready(event):
    print(f"[BOT] 上線了！我是 {event['bot_name']}")

@on("message")
def handle_message(event):
    text = event["text"]
    user = event["user"]
    if text == "!hello":
        print(f"[BOT] → @{user}: Hi! 我是教學 Bot")
    elif text == "!help":
        print(f"[BOT] → @{user}: 指令: !hello / !help / !ping")
    elif text == "!ping":
        print(f"[BOT] → @{user}: pong! (45ms)")

@on("member_join")
def handle_join(event):
    print(f"[BOT] 歡迎 @{event['user']} 加入伺服器 🎉")

# === 框架內部的事件迴圈（簡化）===
def dispatch(event):
    fn = handlers.get(event["type"])
    if fn:
        fn(event)
    else:
        print(f"[BOT] 沒處理器: {event['type']}")

# 模擬一連串事件
events = [
    {"type": "ready",       "bot_name": "TutorBot"},
    {"type": "message",     "user": "alice", "text": "!hello"},
    {"type": "message",     "user": "bob",   "text": "!ping"},
    {"type": "member_join", "user": "cara"},
    {"type": "message",     "user": "cara",  "text": "!help"},
    {"type": "message",     "user": "dan",   "text": "嗨嗨"},   # 不是指令
]

for ev in events:
    dispatch(ev)
`},
{id:53,title:"Discord Bot 入門",tag:"專項",content:`
# 第 53 章：Discord Bot 入門

> 🤖 **專項教學 · Bot**：從零做出第一個會聊天的 Discord Bot。

## 53.1 申請 Bot

1. 到 https://discord.com/developers/applications → **New Application**
2. 左側選 **Bot** → **Add Bot**
3. **Reset Token** 拿到一串長字串 → 抄起來貼進 \`.env\`
4. 下方 **Privileged Gateway Intents** 把這三個打開：
   - PRESENCE INTENT
   - SERVER MEMBERS INTENT
   - **MESSAGE CONTENT INTENT** ← 沒開的話 bot 收不到訊息內容！

## 53.2 邀請 Bot 進伺服器

1. **OAuth2 → URL Generator**
2. Scopes 勾 \`bot\` + \`applications.commands\`
3. Bot Permissions 勾你需要的：Send Messages / Read Message History / Use Slash Commands
4. 複製產生的 URL → 用瀏覽器開 → 邀請進你的測試伺服器

## 53.3 安裝套件

\`\`\`bash
pip install -U discord.py python-dotenv
\`\`\`

## 53.4 第一支 Bot

\`\`\`python
# bot.py
import os, discord
from dotenv import load_dotenv

load_dotenv()
TOKEN = os.getenv("DISCORD_TOKEN")

intents = discord.Intents.default()
intents.message_content = True       # 對應前面開的 MESSAGE CONTENT
intents.members = True

client = discord.Client(intents=intents)

@client.event
async def on_ready():
    print(f"上線了！我是 {client.user}")

@client.event
async def on_message(message):
    # 不要回自己（會無限迴圈）
    if message.author == client.user:
        return

    if message.content.startswith("!hello"):
        await message.channel.send(f"嗨 {message.author.mention}！")

    elif message.content == "!ping":
        latency = round(client.latency * 1000)
        await message.channel.send(f"pong! 延遲 {latency}ms")

client.run(TOKEN)
\`\`\`

執行：
\`\`\`bash
python bot.py
\`\`\`

到伺服器打 \`!hello\`、\`!ping\` 試試。

## 53.5 重要事件

| 事件 | 何時觸發 |
|------|----------|
| \`on_ready\` | Bot 上線 |
| \`on_message\` | 任何訊息（含自己的） |
| \`on_member_join\` | 有人加入伺服器 |
| \`on_member_remove\` | 有人離開 |
| \`on_reaction_add\` | 有人按表情 |
| \`on_disconnect\` | 斷線 |

## 53.6 訊息物件 \`message\`

\`\`\`python
message.content              # 文字內容
message.author               # User 物件
message.author.id            # User ID
message.author.mention       # <@123456>
message.channel              # 頻道
message.guild                # 伺服器 (DM 時是 None)
message.attachments          # 附件 list
message.created_at           # datetime
\`\`\`

## 53.7 async / await：必學

\`discord.py\` 用 \`asyncio\`：

\`\`\`python
# ✅ 對
@client.event
async def on_message(message):
    await message.channel.send("hi")

# ❌ 錯（沒 await，訊息不會送出去）
@client.event
async def on_message(message):
    message.channel.send("hi")

# ❌ 錯（用 time.sleep 會卡住整個 bot）
import time
time.sleep(5)

# ✅ 對
import asyncio
await asyncio.sleep(5)
\`\`\`

## 53.8 常見錯誤

| 症狀 | 原因 |
|------|------|
| Bot 上線但不回 | 沒開 MESSAGE CONTENT INTENT |
| \`Improper token\` | Token 抄錯或被 reset |
| Bot 卡住 | 用了 \`time.sleep\` 沒用 \`asyncio.sleep\` |
| 訊息發兩次 | 沒過濾 \`message.author == client.user\` |

## 53.9 動手試試（模擬版）

範例模擬 discord.py 的「指令解析」：解析 prefix、command name、arguments。
`,
example:`# 模擬：Discord bot 的指令解析邏輯
PREFIX = "!"

commands = {}

def command(name):
    def deco(fn):
        commands[name] = fn
        return fn
    return deco

@command("hello")
def cmd_hello(author, args):
    target = args[0] if args else author
    return f"嗨 {target}！我是教學 Bot"

@command("ping")
def cmd_ping(author, args):
    return "pong! 延遲 45ms"

@command("add")
def cmd_add(author, args):
    try:
        nums = [int(x) for x in args]
        return f"總和 = {sum(nums)}"
    except ValueError:
        return "用法: !add 1 2 3"

@command("help")
def cmd_help(author, args):
    return f"指令: {', '.join('!' + c for c in commands)}"

# 模擬 on_message 的解析邏輯
def on_message(author, content):
    if not content.startswith(PREFIX):
        return None  # 不是指令，忽略
    body = content[len(PREFIX):].split()
    if not body:
        return None
    name, args = body[0], body[1:]
    fn = commands.get(name)
    if not fn:
        return f"不認識指令 !{name}，試試 !help"
    return fn(author, args)

# 模擬使用者訊息
msgs = [
    ("alice", "!hello"),
    ("bob",   "!ping"),
    ("cara",  "!add 3 5 8"),
    ("dan",   "!help"),
    ("eve",   "!unknown"),
    ("frank", "嗨嗨大家"),     # 不是指令
]

for user, text in msgs:
    reply = on_message(user, text)
    if reply:
        print(f"[{user}] {text}")
        print(f"  → {reply}")
`},
{id:54,title:"Discord 指令進階：Cog / Slash / Embed",tag:"專項",content:`
# 第 54 章：Discord 指令進階 — Cog / Slash / Embed

> 🤖 **專項教學 · Bot**：寫超過 5 個指令就會發現需要更好的組織方式。

## 54.1 commands.Bot：比 Client 強

\`discord.py\` 提供 \`commands.Bot\`，幫你做好指令解析：

\`\`\`python
from discord.ext import commands

bot = commands.Bot(command_prefix="!", intents=intents)

@bot.command()
async def hello(ctx, name: str = "world"):
    await ctx.send(f"Hello {name}!")

@bot.command()
async def add(ctx, a: int, b: int):
    await ctx.send(f"{a} + {b} = {a + b}")

bot.run(TOKEN)
\`\`\`

注意 \`a: int, b: int\` — \`discord.py\` 會**自動把字串轉成 int**，轉不了就回錯誤訊息。

## 54.2 Cog：把指令分組

寫多了就把指令拆成 class：

\`\`\`python
# cogs/math_cog.py
from discord.ext import commands

class MathCog(commands.Cog):
    def __init__(self, bot):
        self.bot = bot

    @commands.command()
    async def add(self, ctx, a: int, b: int):
        await ctx.send(f"{a+b}")

    @commands.command()
    async def mul(self, ctx, a: int, b: int):
        await ctx.send(f"{a*b}")

async def setup(bot):
    await bot.add_cog(MathCog(bot))
\`\`\`

主程式：
\`\`\`python
async def main():
    await bot.load_extension("cogs.math_cog")
    await bot.start(TOKEN)
\`\`\`

## 54.3 Slash Commands：現代 Discord 標配

使用者打 \`/\` 會跳選單，比 \`!\` 直覺：

\`\`\`python
@bot.tree.command(name="hello", description="跟你打招呼")
async def slash_hello(interaction: discord.Interaction, name: str = "world"):
    await interaction.response.send_message(f"Hello {name}!")

@bot.event
async def on_ready():
    await bot.tree.sync()   # 把指令同步到 Discord
\`\`\`

> ⏰ **首次同步要等**：Discord 全域 slash command 最久要 **1 小時**才生效。測試時請用 \`bot.tree.sync(guild=discord.Object(id=YOUR_GUILD))\` 同步到特定伺服器（即時生效）。

## 54.4 Embed：漂亮的卡片訊息

\`\`\`python
@bot.command()
async def profile(ctx, member: discord.Member):
    embed = discord.Embed(
        title=member.display_name,
        description=f"ID: {member.id}",
        color=0x3498db,
    )
    embed.set_thumbnail(url=member.display_avatar.url)
    embed.add_field(name="加入時間", value=member.joined_at.strftime("%Y-%m-%d"))
    embed.add_field(name="角色數", value=len(member.roles))
    embed.set_footer(text=f"由 {ctx.author} 查詢")
    await ctx.send(embed=embed)
\`\`\`

## 54.5 互動按鈕 (View)

\`\`\`python
import discord
from discord.ui import Button, View

class HelloView(View):
    @discord.ui.button(label="點我", style=discord.ButtonStyle.green)
    async def click(self, interaction, button):
        await interaction.response.send_message("你按了！", ephemeral=True)

@bot.command()
async def menu(ctx):
    await ctx.send("試試按鈕：", view=HelloView())
\`\`\`

\`ephemeral=True\` 只有按的人看得到。

## 54.6 處理錯誤

\`\`\`python
@add.error
async def add_error(ctx, error):
    if isinstance(error, commands.BadArgument):
        await ctx.send("參數要是整數！")
    elif isinstance(error, commands.MissingRequiredArgument):
        await ctx.send("用法: !add 數字 數字")
\`\`\`

## 54.7 動手試試（模擬版）

範例模擬 commands.Bot 的「型別自動轉換」：把字串參數轉成 int / float / 自訂型別。
`,
example:`# 模擬 commands.Bot 的型別自動轉換
import inspect

commands = {}

def command(fn):
    # 裝飾器：自動讀取函式型別註記
    sig = inspect.signature(fn)
    commands[fn.__name__] = (fn, sig)
    return fn

@command
def add(a: int, b: int):
    return f"{a} + {b} = {a + b}"

@command
def avg(a: float, b: float, c: float):
    return f"avg = {(a + b + c) / 3:.2f}"

@command
def repeat(text: str, times: int):
    return f"{text} " * times

def dispatch(line):
    parts = line.split()
    if not parts: return None
    name, raw_args = parts[0], parts[1:]
    if name not in commands:
        return f"[error] 不認識 {name}"
    fn, sig = commands[name]
    params = list(sig.parameters.values())
    if len(raw_args) != len(params):
        return f"[error] {name} 要 {len(params)} 個參數"
    # 依照註記自動轉型
    converted = []
    for arg, p in zip(raw_args, params):
        try:
            converted.append(p.annotation(arg))
        except ValueError:
            return f"[error] 參數 {p.name} 期望 {p.annotation.__name__}, 收到 {arg!r}"
    return fn(*converted)

tests = [
    "add 3 5",
    "avg 80 90 100",
    "repeat hi 3",
    "add 3 abc",        # 型別錯
    "add 3",            # 參數不夠
    "unknown 1 2",      # 沒這個指令
]
for line in tests:
    print(f"> {line}")
    print(f"  {dispatch(line)}")
`},
{id:55,title:"LINE Bot 入門",tag:"專項",content:`
# 第 55 章：LINE Bot 入門

> 🤖 **專項教學 · Bot**：台灣最常見的 Bot 平台。用 webhook + Flask 寫。

## 55.1 申請 Channel

1. 到 https://developers.line.biz/console → 建一個 Provider
2. 建一個 **Messaging API** Channel
3. 拿到三個關鍵資訊：
   - **Channel Secret** (Basic Settings)
   - **Channel Access Token** (Messaging API → Issue)
   - **Bot Basic ID** (\`@xxx\`)

## 55.2 安裝套件

\`\`\`bash
pip install line-bot-sdk flask python-dotenv
\`\`\`

## 55.3 第一支 LINE Bot

\`\`\`python
# app.py
import os
from flask import Flask, request, abort
from linebot.v3 import WebhookHandler
from linebot.v3.exceptions import InvalidSignatureError
from linebot.v3.messaging import (
    Configuration, ApiClient, MessagingApi,
    ReplyMessageRequest, TextMessage,
)
from linebot.v3.webhooks import MessageEvent, TextMessageContent
from dotenv import load_dotenv

load_dotenv()
SECRET = os.getenv("LINE_CHANNEL_SECRET")
TOKEN  = os.getenv("LINE_CHANNEL_ACCESS_TOKEN")

app = Flask(__name__)
handler = WebhookHandler(SECRET)
config = Configuration(access_token=TOKEN)

@app.route("/callback", methods=["POST"])
def callback():
    sig = request.headers["X-Line-Signature"]
    body = request.get_data(as_text=True)
    try:
        handler.handle(body, sig)
    except InvalidSignatureError:
        abort(400)
    return "OK"

@handler.add(MessageEvent, message=TextMessageContent)
def handle_text(event):
    text = event.message.text
    reply = f"你說了：{text}"
    with ApiClient(config) as api_client:
        MessagingApi(api_client).reply_message(
            ReplyMessageRequest(
                reply_token=event.reply_token,
                messages=[TextMessage(text=reply)]
            )
        )

if __name__ == "__main__":
    app.run(port=5000)
\`\`\`

## 55.4 讓 LINE 找得到你：ngrok

本機程式 LINE 連不到。用 ngrok 開隧道：

\`\`\`bash
# 下載 ngrok 後執行
ngrok http 5000
# 會給你：https://abc123.ngrok-free.app
\`\`\`

把這個網址 + \`/callback\` 貼到 LINE Developer Console → Webhook URL → Verify → 開啟 Use webhook。

## 55.5 webhook 事件結構

LINE 傳過來的 JSON 長這樣：

\`\`\`json
{
  "events": [{
    "type": "message",
    "replyToken": "abc123...",
    "source": {"userId": "U123...", "type": "user"},
    "timestamp": 1717830000000,
    "message": {"type": "text", "id": "456...", "text": "你好"}
  }]
}
\`\`\`

\`event.reply_token\` 只能用 **1 次**且 **30 秒內**，超過要用 \`push_message\`（會算錢）。

## 55.6 訊息種類

| event.message.type | 怎麼拿 |
|--------------------|--------|
| \`text\` | \`event.message.text\` |
| \`image\` | 用 \`MessagingApiBlob\` 下載 |
| \`video\` / \`audio\` / \`file\` | 同上 |
| \`location\` | \`event.message.latitude / longitude\` |
| \`sticker\` | \`event.message.sticker_id\` |

## 55.7 reply vs push

| API | 時機 | 限制 |
|-----|------|------|
| **reply** | 使用者剛發訊息（拿到 token） | 免費，30 秒內 |
| **push** | 你想主動找使用者（推播） | 計入 200/月免費額度 |
| **multicast** | 一次推給多人 | 500/次 |
| **broadcast** | 推給所有好友 | 看方案 |

## 55.8 動手試試（模擬版）

範例自己組一個 webhook payload，做簽章驗證 + event dispatch。
`,
example:`# 模擬：LINE webhook 處理流程
import json, hmac, hashlib, base64

SECRET = "my_secret_key"

def sign(body):
    # 模擬 LINE 用 HMAC-SHA256 算簽章
    h = hmac.new(SECRET.encode(), body.encode(), hashlib.sha256)
    return base64.b64encode(h.digest()).decode()

def verify(body, signature):
    return hmac.compare_digest(sign(body), signature)

# 模擬 LINE 傳過來的 payload
payload = {
    "events": [{
        "type": "message",
        "replyToken": "tok_abc123",
        "source": {"userId": "U001", "type": "user"},
        "message": {"type": "text", "text": "你好"}
    }, {
        "type": "message",
        "replyToken": "tok_def456",
        "source": {"userId": "U002", "type": "user"},
        "message": {"type": "text", "text": "!ping"}
    }, {
        "type": "follow",   # 加好友
        "replyToken": "tok_xyz",
        "source": {"userId": "U003", "type": "user"},
    }]
}

body = json.dumps(payload)
sig = sign(body)
print(f"簽章驗證: {verify(body, sig)}")

# webhook handler
def handle_message(event):
    text = event["message"]["text"]
    user = event["source"]["userId"]
    if text == "!ping":
        reply = "pong!"
    else:
        reply = f"你說了：{text}"
    print(f"[reply→{user}] {reply}")
    print(f"  (使用 reply_token={event['replyToken'][:10]}...)")

def handle_follow(event):
    user = event["source"]["userId"]
    print(f"[reply→{user}] 歡迎加入！輸入 !ping 試試看")

handlers = {"message": handle_message, "follow": handle_follow}

# dispatch
for ev in json.loads(body)["events"]:
    fn = handlers.get(ev["type"])
    if fn: fn(ev)
`},
{id:56,title:"LINE 訊息類型：Text / Template / Flex",tag:"專項",content:`
# 第 56 章：LINE 訊息類型 — 文字 / 貼圖 / 圖片 / 卡片

> 🤖 **專項教學 · Bot**：LINE 提供豐富的訊息類型，學會用就能做好用的 Bot。

## 56.1 文字 TextMessage

\`\`\`python
from linebot.v3.messaging import TextMessage

TextMessage(text="嗨嗨")

# 帶 emoji
TextMessage(text="$ APCS 教學 Bot $", emojis=[
    {"index": 0, "productId": "5ac1bfd5040ab15980c9b435", "emojiId": "001"},
    {"index": 16, "productId": "5ac1bfd5040ab15980c9b435", "emojiId": "002"},
])
\`\`\`

## 56.2 貼圖 StickerMessage

\`\`\`python
from linebot.v3.messaging import StickerMessage
StickerMessage(packageId="446", stickerId="1988")
\`\`\`

可用貼圖清單：https://developers.line.biz/en/docs/messaging-api/sticker-list/

## 56.3 圖片 ImageMessage

\`\`\`python
from linebot.v3.messaging import ImageMessage

ImageMessage(
    originalContentUrl="https://example.com/full.jpg",   # 必須 HTTPS
    previewImageUrl="https://example.com/thumb.jpg",
)
\`\`\`

## 56.4 Template Message：按鈕、確認

\`\`\`python
from linebot.v3.messaging import (
    TemplateMessage, ButtonsTemplate, MessageAction, URIAction,
)

TemplateMessage(
    altText="選單",
    template=ButtonsTemplate(
        title="點餐",
        text="請選擇主餐",
        actions=[
            MessageAction(label="牛肉麵", text="點 牛肉麵"),
            MessageAction(label="炒飯",   text="點 炒飯"),
            URIAction(label="完整菜單",   uri="https://menu.example.com"),
        ]
    )
)
\`\`\`

## 56.5 Carousel：可滑卡片

\`\`\`python
from linebot.v3.messaging import CarouselTemplate, CarouselColumn

TemplateMessage(
    altText="商品列表",
    template=CarouselTemplate(
        columns=[
            CarouselColumn(
                thumbnailImageUrl="https://.../p1.jpg",
                title="商品 1", text="說明...",
                actions=[MessageAction(label="購買", text="買 商品1")]
            ),
            CarouselColumn(
                thumbnailImageUrl="https://.../p2.jpg",
                title="商品 2", text="說明...",
                actions=[MessageAction(label="購買", text="買 商品2")]
            ),
        ]
    )
)
\`\`\`

## 56.6 Flex Message：最強排版

可自訂 layout，幾乎不限制：

\`\`\`python
from linebot.v3.messaging import FlexMessage, FlexContainer

flex_json = {
    "type": "bubble",
    "body": {
        "type": "box", "layout": "vertical",
        "contents": [
            {"type": "text", "text": "天氣", "weight": "bold", "size": "xl"},
            {"type": "text", "text": "台北 26°C 雷雨"},
        ]
    }
}

FlexMessage(altText="天氣", contents=FlexContainer.from_dict(flex_json))
\`\`\`

用 https://developers.line.biz/flex-simulator/ 設計版面，再貼 JSON。

## 56.7 一次回多則

\`\`\`python
MessagingApi(api).reply_message(ReplyMessageRequest(
    reply_token=event.reply_token,
    messages=[
        TextMessage(text="第一則"),
        StickerMessage(packageId="446", stickerId="1988"),
        TextMessage(text="第三則"),
    ]
))
\`\`\`

最多 5 則。

## 56.8 訊息類型對應表（速查）

| 想做的事 | 用什麼 |
|----------|--------|
| 純回文字 | \`TextMessage\` |
| 回貼圖 | \`StickerMessage\` |
| 推圖片 | \`ImageMessage\` |
| 選單按鈕 | \`ButtonsTemplate\` |
| 多項選擇 | \`CarouselTemplate\` |
| 客製版面 | \`FlexMessage\` |
| 是非確認 | \`ConfirmTemplate\` |
| 引導加好友 | \`URIAction\` |

## 56.9 動手試試（模擬版）

範例設計一個「點餐 Bot」：根據訊息回不同 template。
`,
example:`# 模擬：根據訊息決定回什麼訊息類型
def reply(user_msg):
    # 回傳訊息類型 + 內容（模擬 LINE message 物件）
    m = user_msg.strip()

    # 1) 純文字
    if m == "hi" or m == "你好":
        return ("Text", "嗨嗨！我是點餐 Bot。輸入 'menu' 看菜單。")

    # 2) 主選單 → Buttons template
    if m == "menu":
        return ("Buttons", {
            "title": "點餐選單",
            "actions": ["牛肉麵 $120", "炒飯 $80", "拉麵 $150"]
        })

    # 3) 商品列表 → Carousel
    if m == "shop":
        return ("Carousel", {
            "items": [
                {"title": "T-shirt", "price": 350},
                {"title": "Cap",     "price": 280},
                {"title": "Mug",     "price": 180},
            ]
        })

    # 4) 確認 → Confirm template
    if m.startswith("buy "):
        item = m[4:]
        return ("Confirm", {
            "text": f"確定購買 {item}？",
            "yes": f"確認 {item}",
            "no":  "取消"
        })

    # 5) 點貼圖（記錄 sticker id）
    if m == "sticker":
        return ("Sticker", {"package": "446", "id": "1988"})

    # 6) 預設
    return ("Text", "聽不懂，輸入 'menu' 看選單")


tests = ["hi", "menu", "shop", "buy 牛肉麵", "sticker", "asdf"]
for msg in tests:
    msg_type, content = reply(msg)
    print(f"[USER] {msg}")
    if isinstance(content, str):
        print(f"  → {msg_type}: {content}")
    else:
        print(f"  → {msg_type}: {content}")
`},
{id:57,title:"狀態管理：讓 Bot 記住使用者",tag:"專項",content:`
# 第 57 章：狀態管理 — 讓 Bot 記住使用者

> 🤖 **專項教學 · Bot**：Bot 不只是「問答」——讓它記住「上次點的菜、累計簽到次數、對話流程」。

## 57.1 三種儲存方式

| 方式 | 適合 | 缺點 |
|------|------|------|
| **記憶體 dict** | 開發測試 | 程式重啟就沒了 |
| **JSON 檔** | 小型 Bot < 1000 人 | 多執行緒寫入會壞 |
| **SQLite** | 中型 Bot | 沒備援 |
| **PostgreSQL** | 正式上線 | 要部署 |
| **Redis** | 高速 / 快取 | 要部署 |

## 57.2 記憶體 dict（最簡單）

\`\`\`python
user_data = {}    # {user_id: {...}}

@bot.command()
async def signin(ctx):
    uid = ctx.author.id
    data = user_data.setdefault(uid, {"count": 0})
    data["count"] += 1
    await ctx.send(f"已連續簽到 {data['count']} 次")
\`\`\`

> ⚠️ **重啟就沒了**！

## 57.3 JSON 檔（持久化）

\`\`\`python
import json, pathlib, threading

LOCK = threading.Lock()
DATA = pathlib.Path("data.json")

def load():
    return json.loads(DATA.read_text()) if DATA.exists() else {}

def save(d):
    with LOCK:
        DATA.write_text(json.dumps(d, ensure_ascii=False, indent=2))

@bot.command()
async def signin(ctx):
    data = load()
    uid = str(ctx.author.id)
    data.setdefault(uid, {"count": 0})
    data[uid]["count"] += 1
    save(data)
    await ctx.send(f"已簽到 {data[uid]['count']} 次")
\`\`\`

> 💡 用 str(uid) 是因為 JSON key 只能是字串。

## 57.4 SQLite（推薦中型 Bot）

\`\`\`python
import sqlite3

conn = sqlite3.connect("bot.db")
conn.execute(
    "CREATE TABLE IF NOT EXISTS signin "
    "(user_id TEXT PRIMARY KEY, count INT)"
)

@bot.command()
async def signin(ctx):
    uid = str(ctx.author.id)
    row = conn.execute("SELECT count FROM signin WHERE user_id=?", (uid,)).fetchone()
    cnt = (row[0] if row else 0) + 1
    conn.execute(
        "INSERT INTO signin VALUES(?,?) "
        "ON CONFLICT(user_id) DO UPDATE SET count=excluded.count",
        (uid, cnt))
    conn.commit()
    await ctx.send(f"已簽到 {cnt} 次")
\`\`\`

## 57.5 對話流程（多步驟）

「!order 開始 → 問主餐 → 問副餐 → 問甜點 → 結帳」這種**有狀態**的流程：

\`\`\`python
sessions = {}    # {user_id: {"step": ..., "order": {...}}}

@bot.command()
async def order(ctx):
    sessions[ctx.author.id] = {"step": "main", "order": {}}
    await ctx.send("要點什麼主餐？(牛肉麵/炒飯)")

@bot.event
async def on_message(message):
    await bot.process_commands(message)
    s = sessions.get(message.author.id)
    if not s: return
    if s["step"] == "main":
        s["order"]["main"] = message.content
        s["step"] = "drink"
        await message.channel.send("要喝什麼？")
    elif s["step"] == "drink":
        s["order"]["drink"] = message.content
        s["step"] = None
        await message.channel.send(f"訂單：{s['order']} ✅")
        sessions.pop(message.author.id)
\`\`\`

## 57.6 注意事項

| 陷阱 | 解法 |
|------|------|
| 並發寫 JSON 損毀 | 用 threading.Lock 或改 SQLite |
| 記憶體爆炸 | 設過期：閒置 1 小時清除 session |
| 重啟丟資料 | 用 atexit 在退出前 save() |

## 57.7 動手試試

範例做完整的「對話狀態機」：點餐流程。
`,
example:`# 模擬：點餐 Bot 的對話狀態機 (FSM)
sessions = {}    # {user: {"step": str, "order": dict}}

def handle_message(user, text):
    s = sessions.get(user)

    # 起手指令
    if text == "/order":
        sessions[user] = {"step": "main", "order": {}}
        return "要點什麼主餐？(牛肉麵 / 炒飯 / 拉麵)"

    # 沒在會話中
    if s is None:
        return "輸入 /order 開始點餐"

    if s["step"] == "main":
        s["order"]["main"] = text
        s["step"] = "drink"
        return "要什麼飲料？(紅茶 / 綠茶 / 無)"

    if s["step"] == "drink":
        s["order"]["drink"] = text
        s["step"] = "confirm"
        order = s["order"]
        return f"確認訂單: {order['main']} + {order['drink']}? (yes/no)"

    if s["step"] == "confirm":
        if text.lower() == "yes":
            order = s["order"]
            sessions.pop(user)
            return f"✅ 訂單已送出: {order}"
        else:
            sessions.pop(user)
            return "已取消"

    return "??"

# 模擬使用者對話
dialog = [
    ("alice", "/order"),
    ("alice", "牛肉麵"),
    ("alice", "紅茶"),
    ("alice", "yes"),
    ("bob",   "hi"),
    ("bob",   "/order"),
    ("bob",   "炒飯"),
    ("bob",   "綠茶"),
    ("bob",   "no"),
]

for user, msg in dialog:
    reply = handle_message(user, msg)
    print(f"[{user}] {msg}")
    print(f"  → {reply}")

print(f"\\n剩餘 session: {list(sessions.keys())}")
`},
{id:58,title:"排程任務：定時推播",tag:"專項",content:`
# 第 58 章：排程任務 — 定時推播

> 🤖 **專項教學 · Bot**：每天早上 9 點推天氣、每週一統計上週活躍度。

## 58.1 三種排程方式

| 方式 | 適合 |
|------|------|
| \`asyncio.sleep\` 迴圈 | Discord/asyncio bot |
| \`schedule\` 套件 | 簡單同步腳本 |
| \`APScheduler\` | 進階：cron 語法、持久化 |

## 58.2 Discord 用 tasks（最常用）

\`\`\`python
from discord.ext import tasks

@tasks.loop(seconds=60)
async def heartbeat():
    channel = bot.get_channel(CHANNEL_ID)
    await channel.send("💓 還活著")

@bot.event
async def on_ready():
    heartbeat.start()
\`\`\`

| 參數 | 意思 |
|------|------|
| \`seconds=60\` | 每 60 秒 |
| \`minutes=5\` | 每 5 分鐘 |
| \`hours=1\` | 每小時 |
| \`time=datetime.time(hour=9)\` | 每天 09:00 |

## 58.3 每天固定時間推播

\`\`\`python
import datetime
from discord.ext import tasks

@tasks.loop(time=datetime.time(hour=9, minute=0, tzinfo=...))
async def morning_news():
    await channel.send("☀ 早安！今天天氣...")
\`\`\`

## 58.4 LINE 推播：用 push_message

LINE webhook 是被動的，要主動推用 \`push_message\`：

\`\`\`python
from linebot.v3.messaging import (
    MessagingApi, PushMessageRequest, TextMessage,
)

def daily_push():
    with ApiClient(config) as api_client:
        MessagingApi(api_client).push_message(
            PushMessageRequest(
                to=USER_ID,
                messages=[TextMessage(text="早安")]
            )
        )

# 配合 schedule
import schedule, time
schedule.every().day.at("09:00").do(daily_push)
while True:
    schedule.run_pending()
    time.sleep(60)
\`\`\`

## 58.5 schedule 套件語法

\`\`\`python
import schedule

schedule.every(10).seconds.do(job)
schedule.every().hour.do(job)
schedule.every().day.at("10:30").do(job)
schedule.every().monday.do(job)
schedule.every().wednesday.at("13:15").do(job)

while True:
    schedule.run_pending()
    time.sleep(1)
\`\`\`

## 58.6 APScheduler：cron 語法

\`\`\`python
from apscheduler.schedulers.background import BackgroundScheduler

sched = BackgroundScheduler()

# 每天 9 點
sched.add_job(daily_news, 'cron', hour=9)

# 每週一 10 點
sched.add_job(weekly_report, 'cron', day_of_week='mon', hour=10)

# 每 5 分鐘
sched.add_job(heartbeat, 'interval', minutes=5)

# 一次性 (10 秒後)
sched.add_job(reminder, 'date',
              run_date=datetime.now() + timedelta(seconds=10))

sched.start()
\`\`\`

## 58.7 算今天到下次執行的秒數

\`\`\`python
import datetime
def seconds_until(hour, minute=0):
    now = datetime.datetime.now()
    target = now.replace(hour=hour, minute=minute, second=0, microsecond=0)
    if target <= now:
        target += datetime.timedelta(days=1)   # 移到明天
    return (target - now).total_seconds()

async def daily_at(hour, minute, fn):
    while True:
        await asyncio.sleep(seconds_until(hour, minute))
        await fn()
\`\`\`

## 58.8 注意事項

| 陷阱 | 解法 |
|------|------|
| Bot 重啟錯過時間 | APScheduler \`misfire_grace_time\` |
| 時區搞錯 | 永遠帶 tzinfo |
| 推播超過配額 | 用 batch / multicast |
| 卡在 sleep | 用 asyncio 不要 time.sleep |

## 58.9 動手試試

範例自己實作「下次幾點觸發」的計算。
`,
example:`# 模擬：計算「下次每天 9:00 / 21:00 推播」的秒數
import datetime

def seconds_until(now, hour, minute=0):
    # 回傳從 now 到下次 hour:minute 還剩幾秒
    target = now.replace(hour=hour, minute=minute, second=0, microsecond=0)
    if target <= now:
        target += datetime.timedelta(days=1)
    return int((target - now).total_seconds())

# 用固定時間測試（不依賴系統時間）
tests = [
    (datetime.datetime(2026, 6, 8, 7, 30), 9, 0),    # 同天等到 9:00
    (datetime.datetime(2026, 6, 8, 9, 0),  9, 0),    # 整點 → 等明天
    (datetime.datetime(2026, 6, 8, 14, 0), 9, 0),    # 過了 → 等明天 9
    (datetime.datetime(2026, 6, 8, 14, 0), 21, 0),   # 同天 21:00
    (datetime.datetime(2026, 6, 8, 23, 30), 21, 0),  # 過了 → 等明天 21
]

print(f"{'now':<20} {'target':>8} {'秒數':>10} {'≈時間':>15}")
print('-' * 60)
for now, h, m in tests:
    secs = seconds_until(now, h, m)
    hr = secs // 3600
    mn = (secs % 3600) // 60
    print(f"{now!s:<20} {h:>2}:{m:02d}    {secs:>10}    {hr:>4}h{mn:02d}m")

# 模擬排程器：依時間表觸發
print("\\n=== 模擬一天的排程 ===")
schedule = [
    ("09:00", "推送早安"),
    ("12:00", "推送午餐提醒"),
    ("18:00", "推送收工提醒"),
    ("21:00", "推送晚安"),
]

# 假裝從 08:00 跑到 22:00
fake_now = datetime.datetime(2026, 6, 8, 8, 0)
end = datetime.datetime(2026, 6, 8, 22, 0)
while fake_now <= end:
    for t, job in schedule:
        h, m = map(int, t.split(":"))
        target = fake_now.replace(hour=h, minute=m, second=0)
        if target == fake_now:
            print(f"  [{t}] 執行：{job}")
    fake_now += datetime.timedelta(hours=1)
`},
{id:59,title:"部署上線：Render / Railway / VPS",tag:"專項",content:`
# 第 59 章：部署上線 — Render / Railway / VPS

> 🤖 **專項教學 · Bot**：本機關電腦 Bot 就掛了。學會 24/7 部署，Bot 才能真的「上線」。

## 59.1 選哪個平台？

| 平台 | 免費額度 | 適合 |
|------|----------|------|
| **Render** | 750 hours/月，閒置 15 分睡眠 | LINE Bot（睡了被叫醒會自動起來） |
| **Railway** | $5/月免費額度 | Discord Bot（不睡眠） |
| **Fly.io** | 256MB RAM 免費 | 進階 |
| **VPS**（DigitalOcean / Linode） | $5/月起 | 完全自主 |
| **Replit** | 免費可跑（要有人按 run） | 學習用 |

> 💡 **2024 起 Heroku 不再免費**。

## 59.2 部署前準備：3 個檔案

### \`requirements.txt\`
\`\`\`
discord.py==2.3.2
python-dotenv==1.0.0
\`\`\`

或 LINE：
\`\`\`
line-bot-sdk==3.5.0
flask==3.0.0
python-dotenv==1.0.0
\`\`\`

產生方式：
\`\`\`bash
pip freeze > requirements.txt
\`\`\`

### \`Procfile\`（告訴平台怎麼跑）
\`\`\`
# Discord
worker: python bot.py

# LINE (web service)
web: gunicorn app:app
\`\`\`

### \`.gitignore\`
\`\`\`
.env
__pycache__/
*.pyc
venv/
data.json     # 如果有本機測試資料
\`\`\`

## 59.3 Render 部署 LINE Bot

1. GitHub 推上去：
\`\`\`bash
git init
git add .
git commit -m "init"
git remote add origin git@github.com:你/bot.git
git push -u origin main
\`\`\`

2. https://dashboard.render.com → **New Web Service** → 連你的 repo
3. 設定：
   - Runtime: Python 3
   - Build Command: \`pip install -r requirements.txt\`
   - Start Command: \`gunicorn app:app\`
4. **Environment**：把 \`.env\` 的內容貼進去
5. Deploy → 拿到 \`https://your-bot.onrender.com\`
6. 回 LINE Developer Console，Webhook URL 改成 \`https://your-bot.onrender.com/callback\`

## 59.4 Railway 部署 Discord Bot

1. https://railway.app → **New Project → Deploy from GitHub**
2. 選 repo
3. Settings → Environment Variables → 加 \`DISCORD_TOKEN=...\`
4. Settings → Service Type → **Worker**（不是 web）
5. Deploys 完成

## 59.5 ngrok 本機測試（不部署）

只是想測 webhook，不想真部署：

\`\`\`bash
# 下載 ngrok https://ngrok.com/download
ngrok http 5000
# 輸出：https://abc123.ngrok-free.app
\`\`\`

- ✅ 5 秒就好
- ❌ 重開 ngrok 網址會變
- ❌ 關電腦就沒了

## 59.6 部署後常見錯誤

| 症狀 | 原因 |
|------|------|
| \`ModuleNotFoundError\` | 套件沒加進 requirements.txt |
| Bot 啟動就 crash | env 沒設好 |
| webhook verify 失敗 | URL 拼錯、SSL 沒生效 |
| 500 error | 看平台 logs，多半是程式內未接的例外 |
| Render 啟動很慢 | 免費方案睡眠 15 分後第一次 request 要 30 秒喚醒 |

## 59.7 監控 Bot 健康

最簡單：寫個 health check endpoint：

\`\`\`python
@app.route("/healthz")
def health():
    return {"status": "ok", "uptime": time.time() - START_TIME}
\`\`\`

用免費的 UptimeRobot（https://uptimerobot.com）每 5 分鐘打一次，掛了 email 通知。

## 59.8 升級路徑

| 階段 | 規模 | 建議架構 |
|------|------|----------|
| 學習 | 1-2 人測試 | 本機 + ngrok |
| 朋友圈 | < 100 人 | Render 免費 + SQLite |
| 開始紅 | < 1000 人 | Railway/Fly + PostgreSQL |
| 真正大 | 萬人以上 | 多 instance + Redis + 監控 |

## 59.9 動手試試（模擬版）

範例做「環境變數讀取 + 健康檢查」的核心邏輯。

> 🎉 **恭喜完成 Bot 主題 8 章！** 接下來自己選個方向：
> - 做一個校園活動通知 Bot
> - 做一個簡易記帳 Bot
> - 做一個爬題目庫的 APCS 練習 Bot（把前面學的爬蟲串起來）
`,
example:`# 模擬：讀取環境變數 + 啟動前檢查
import os, time

REQUIRED = ["DISCORD_TOKEN", "LINE_CHANNEL_SECRET", "DB_URL"]

# 假裝環境變數（真實是 os.environ 從 .env 或平台讀）
fake_env = {
    "DISCORD_TOKEN": "MTIz...REDACTED...abc",
    "LINE_CHANNEL_SECRET": "abc123secret",
    # DB_URL 故意沒設
    "PORT": "5000",
    "LOG_LEVEL": "INFO",
}

# 啟動前檢查
print("=== Bot 啟動檢查 ===")
missing = []
for key in REQUIRED:
    val = fake_env.get(key)
    if not val:
        missing.append(key)
        print(f"  ❌ {key}: 未設定")
    else:
        # 安全：不印完整 token
        masked = val[:4] + "..." + val[-4:] if len(val) > 12 else "***"
        print(f"  ✓  {key}: {masked}")

if missing:
    print(f"\\n⚠ 缺少環境變數: {missing}")
    print("  請到平台 Dashboard 設定 Environment Variables")
else:
    print("\\n✓ 所有必要環境變數齊全，可以啟動")

# 健康檢查 endpoint 概念
START_TIME = time.time()

def healthz():
    return {
        "status": "ok",
        "uptime_seconds": int(time.time() - START_TIME),
        "version": "1.0.0",
    }

print(f"\\n=== /healthz 回應 ===\\n{healthz()}")
`},
{id:60,title:"pygame 入門：game loop",tag:"專項",content:`
# 第 60 章：pygame 入門 — game loop

> 🎮 **專項教學 · pygame**：所有遊戲都是「畫面 → 收輸入 → 更新狀態 → 重畫」這個迴圈。

## 60.1 什麼是 pygame

\`pygame\` 是 Python 最常用的 2D 遊戲庫，免費、跨平台。適合：

- 學遊戲開發入門
- 程式設計教學
- 小型獨立遊戲
- 學校專題

不適合：3D / AAA 大作 / 手遊。

## 60.2 安裝

\`\`\`bash
pip install pygame
\`\`\`

確認安裝：
\`\`\`bash
python -m pygame.examples.aliens   # 跑官方範例
\`\`\`

## 60.3 最小程式：開一個視窗

\`\`\`python
import pygame

pygame.init()                            # 初始化所有模組
screen = pygame.display.set_mode((800, 600))   # 視窗大小 (寬, 高)
pygame.display.set_caption("我的第一個遊戲")
clock = pygame.time.Clock()

running = True
while running:
    # 1) 收事件
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False

    # 2) 更新狀態（這次沒東西要更新）

    # 3) 畫面
    screen.fill((20, 20, 30))    # 深藍灰背景

    # 4) 把畫好的東西真的顯示出來
    pygame.display.flip()

    # 5) 控制速度：每秒 60 幀
    clock.tick(60)

pygame.quit()
\`\`\`

短短 20 行，視窗就跑起來了。

## 60.4 Game Loop 的四步驟

每張遊戲畫面都長這樣：

\`\`\`
while running:
    handle_events()    # 收鍵盤滑鼠
    update()           # 更新角色位置、判斷碰撞
    draw()             # 重畫所有東西
    clock.tick(60)     # 等到下一幀
\`\`\`

**這四步驟在任何遊戲引擎都一樣**（Unity / Godot / Unreal 內部都這結構）。

## 60.5 座標系：左上角是 (0, 0)

\`\`\`
(0,0) ────────► x
 │
 │
 ▼
 y
\`\`\`

跟數學課的座標**Y 軸是反的**——往下是 y 增加。

| 點 | 位置 |
|----|------|
| (0, 0) | 左上角 |
| (800, 0) | 右上角 |
| (0, 600) | 左下角 |
| (400, 300) | 螢幕中心 |

## 60.6 顏色：RGB

\`\`\`python
RED   = (255, 0, 0)
GREEN = (0, 255, 0)
BLUE  = (0, 0, 255)
WHITE = (255, 255, 255)
BLACK = (0, 0, 0)
\`\`\`

每個值 0-255。也可以加第四個值當透明度：\`(255, 0, 0, 128)\`。

## 60.7 為什麼要 clock.tick？

如果不限制速度：

- 高階電腦：每秒 10000 幀，遊戲超快
- 低階電腦：每秒 30 幀，遊戲超慢

\`clock.tick(60)\` 讓 **每台電腦都跑 60 fps**，遊戲體驗才一致。

## 60.8 動手試試（模擬版）

Pyodide 沒裝 pygame，範例用 ASCII 模擬一個「會動的點」game loop 概念。

> **跨語言對應**：
> - **JavaScript**：Phaser / PixiJS / 純 canvas
> - **C++**：SFML / SDL
> - **Java**：libGDX
> - **Unity (C#)** / **Godot (GDScript)**：大型遊戲引擎
> 都是相同的 game loop 結構，只是 API 不同。

## 60.9 🧠 設計動機：為什麼物理移動要乘以 delta time？

\`clock.tick(60)\` 嘗試把遊戲鎖在 60 FPS，但這並不保證每一幀剛好花 1/60 秒。當電腦很忙或渲染複雜時，一幀可能花了 1/30 秒。

如果你的移動是 \`x += 5\`（每幀固定移動 5 像素），
- 60 FPS 電腦：每秒移動 300 像素
- 30 FPS 電腦：每秒只移動 150 像素

→ **同一個遊戲，在不同電腦上速度不同**，這是嚴重的 bug。

解法是 **delta time（dt）**：每幀實際花了多少秒，乘進去：\`x += speed * dt\`（speed 單位是「像素/秒」而非「像素/幀」）。

這樣不管 FPS 多少，每秒移動的距離都一樣。

\`\`\`python
clock = pygame.time.Clock()
speed = 300  # 300 像素/秒
x = 0

while running:
    # dt 單位是秒（0.016 ≈ 1/60 秒）
    dt = clock.tick(60) / 1000.0

    # ❌ 幀率相依
    # x += 5

    # ✅ 幀率無關
    x += speed * dt
\`\`\`
`,
example:`# 模擬 game loop：印出每一幀的狀態
import time

# === 遊戲狀態 ===
state = {"x": 0, "y": 5, "frame": 0}
TARGET_FPS = 30
FRAME_DURATION = 1.0 / TARGET_FPS

# === 模擬的「事件佇列」===
fake_events = {3: "move_right", 6: "move_right", 9: "move_right", 11: "quit"}

# === Game Loop ===
running = True
while running:
    frame_start = time.time()

    # 1) handle events
    ev = fake_events.get(state["frame"])
    if ev == "quit":
        running = False
        continue
    elif ev == "move_right":
        state["x"] += 2

    # 2) update
    state["frame"] += 1

    # 3) draw (用 ASCII 模擬螢幕)
    width = 20
    line = ['.'] * width
    if 0 <= state["x"] < width:
        line[state["x"]] = '●'
    print(f"frame {state['frame']:2}: |{''.join(line)}|")

    # 4) tick (在模擬中跳過，避免 sleep)
    # 真實 pygame: clock.tick(60) 會等到下一幀

print(f"\\n結束：跑了 {state['frame']} 幀")
`},
{id:61,title:"畫圖形與座標",tag:"專項",content:`
# 第 61 章：畫圖形與座標

> 🎮 **專項教學 · pygame**：方塊、圓、線、圖片——五種基本繪圖技巧搞定 90% 畫面。

## 61.1 五種繪圖函式

\`\`\`python
import pygame

# 長方形
pygame.draw.rect(screen, color, (x, y, w, h), width=0)
# width=0 是實心、width>0 是空心（畫框）

# 圓形
pygame.draw.circle(screen, color, (cx, cy), radius)

# 線段
pygame.draw.line(screen, color, (x1, y1), (x2, y2), width=1)

# 多邊形
pygame.draw.polygon(screen, color, [(x1,y1), (x2,y2), (x3,y3)])

# 弧
pygame.draw.arc(screen, color, (x,y,w,h), start_rad, end_rad)
\`\`\`

## 61.2 Rect 物件：管理矩形的好朋友

\`\`\`python
rect = pygame.Rect(100, 50, 200, 100)   # x, y, w, h
rect.x, rect.y, rect.width, rect.height
rect.centerx, rect.centery
rect.left, rect.right, rect.top, rect.bottom
rect.center, rect.topleft, rect.bottomright
\`\`\`

可以用屬性直接定位：

\`\`\`python
rect.center = (400, 300)    # 把矩形中心設到螢幕中央
rect.bottomright = (800, 600)   # 右下角貼齊
\`\`\`

## 61.3 載入圖片

\`\`\`python
# 載入（通常在 game loop 外，只做一次）
player_img = pygame.image.load("player.png").convert_alpha()
# .convert_alpha() 處理 PNG 的透明
# .convert() 沒透明的 jpg 用這個

# 在 game loop 中畫
screen.blit(player_img, (x, y))   # 把圖貼到 (x, y)

# 取得圖片大小
w, h = player_img.get_size()
rect = player_img.get_rect(center=(400, 300))
screen.blit(player_img, rect)
\`\`\`

## 61.4 縮放、旋轉

\`\`\`python
# 縮放
small = pygame.transform.scale(img, (100, 100))
flipped = pygame.transform.flip(img, True, False)   # 水平翻轉

# 旋轉（每幀旋轉時要從原圖轉，避免畫質下降）
angle = 30
rotated = pygame.transform.rotate(img, angle)
rect = rotated.get_rect(center=original_center)
screen.blit(rotated, rect)
\`\`\`

## 61.5 繪圖順序很重要

\`pygame\` 是「先畫的會被後畫的蓋住」：

\`\`\`python
screen.fill(SKY_BLUE)           # 1. 天空（最底）
screen.blit(mountain_img, ...)  # 2. 山
screen.blit(tree_img, ...)      # 3. 樹
screen.blit(player_img, ...)    # 4. 主角（最上）
draw_ui(screen)                 # 5. UI 永遠最上
pygame.display.flip()           # 一次顯示
\`\`\`

## 61.6 完整範例：靜態場景

\`\`\`python
import pygame
pygame.init()
screen = pygame.display.set_mode((400, 300))

running = True
while running:
    for e in pygame.event.get():
        if e.type == pygame.QUIT: running = False

    screen.fill((135, 206, 235))    # 天空藍
    pygame.draw.rect(screen, (34, 139, 34), (0, 200, 400, 100))   # 草地
    pygame.draw.circle(screen, (255, 230, 50), (320, 60), 30)      # 太陽
    pygame.draw.polygon(screen, (139, 69, 19),                     # 山
                        [(50, 200), (150, 80), (250, 200)])
    pygame.display.flip()

pygame.quit()
\`\`\`

## 61.7 動手試試（模擬版）

範例用 ASCII grid 模擬「在畫布上畫矩形/線」的座標邏輯。
`,
example:`# 模擬：用 2D char array 當 screen，畫矩形與線
W, H = 30, 12
screen = [['.' for _ in range(W)] for _ in range(H)]

def fill(ch):
    for row in screen:
        for i in range(len(row)):
            row[i] = ch

def draw_rect(x, y, w, h, ch):
    # 空心矩形
    for i in range(w):
        if 0 <= x+i < W:
            if 0 <= y < H: screen[y][x+i] = ch
            if 0 <= y+h-1 < H: screen[y+h-1][x+i] = ch
    for j in range(h):
        if 0 <= y+j < H:
            if 0 <= x < W: screen[y+j][x] = ch
            if 0 <= x+w-1 < W: screen[y+j][x+w-1] = ch

def draw_line_h(x1, x2, y, ch):
    for x in range(min(x1, x2), max(x1, x2) + 1):
        if 0 <= x < W and 0 <= y < H:
            screen[y][x] = ch

def draw_circle(cx, cy, r, ch):
    # 用距離公式畫近似圓
    for y in range(H):
        for x in range(W):
            dx, dy = x-cx, y-cy
            if abs(dx*dx + dy*dy - r*r) <= r:
                screen[y][x] = ch

def show():
    print('+' + '-'*W + '+')
    for row in screen:
        print('|' + ''.join(row) + '|')
    print('+' + '-'*W + '+')

# 畫一個場景
fill(' ')
draw_line_h(0, W-1, H-2, '_')     # 地面
draw_rect(2, 5, 6, 5, '#')        # 房子
draw_rect(4, 7, 2, 3, 'D')        # 門
draw_circle(22, 3, 2, '*')        # 太陽
draw_rect(15, 8, 4, 2, 'C')       # 雲

show()
print(f"\\nscreen size: {W} x {H}")
`},
{id:62,title:"輸入處理：鍵盤與滑鼠",tag:"專項",content:`
# 第 62 章：輸入處理 — 鍵盤與滑鼠

> 🎮 **專項教學 · pygame**：遊戲沒輸入就只是影片。學會兩種 pygame 收輸入的方式。

## 62.1 兩種模式

### 模式 A：事件驅動（適合「按一下」）

\`\`\`python
for event in pygame.event.get():
    if event.type == pygame.KEYDOWN:
        if event.key == pygame.K_SPACE:
            player.jump()
        elif event.key == pygame.K_ESCAPE:
            running = False
\`\`\`

按一下觸發一次，適合：跳躍、開選單、暫停。

### 模式 B：狀態查詢（適合「按住」）

\`\`\`python
keys = pygame.key.get_pressed()
if keys[pygame.K_LEFT]:
    player.x -= 5
if keys[pygame.K_RIGHT]:
    player.x += 5
\`\`\`

每幀檢查當下按鍵狀態，適合：移動、衝刺、按住瞄準。

> 💡 大原則：**動作型（跳/射）用事件、移動類用狀態查詢**。

## 62.2 鍵盤常數速查

| 按鍵 | pygame 常數 |
|------|-------------|
| 方向鍵 | \`K_UP\`, \`K_DOWN\`, \`K_LEFT\`, \`K_RIGHT\` |
| WASD | \`K_w\`, \`K_a\`, \`K_s\`, \`K_d\` |
| 空白 | \`K_SPACE\` |
| Esc | \`K_ESCAPE\` |
| Enter | \`K_RETURN\` |
| Shift | \`K_LSHIFT\`, \`K_RSHIFT\` |
| 數字 | \`K_0\` ~ \`K_9\` |
| 字母 | \`K_a\` ~ \`K_z\`（一律小寫） |

## 62.3 滑鼠

\`\`\`python
# 事件式
for event in pygame.event.get():
    if event.type == pygame.MOUSEBUTTONDOWN:
        if event.button == 1:   # 左鍵
            print("左鍵:", event.pos)
        elif event.button == 3: # 右鍵
            print("右鍵:", event.pos)
    elif event.type == pygame.MOUSEMOTION:
        print("移動到", event.pos, "移動量", event.rel)

# 狀態查詢
mx, my = pygame.mouse.get_pos()
buttons = pygame.mouse.get_pressed()    # (左, 中, 右) bool
if buttons[0]:
    print("按著左鍵")
\`\`\`

## 62.4 文字輸入（高分數輸入名字）

\`\`\`python
name = ""
for event in pygame.event.get():
    if event.type == pygame.KEYDOWN:
        if event.key == pygame.K_RETURN:
            print("提交:", name)
        elif event.key == pygame.K_BACKSPACE:
            name = name[:-1]
        else:
            name += event.unicode    # 自動處理大小寫
\`\`\`

## 62.5 事件種類速查

| event.type | 何時觸發 |
|------------|----------|
| \`QUIT\` | 點視窗 x |
| \`KEYDOWN\` / \`KEYUP\` | 按下/放開鍵 |
| \`MOUSEBUTTONDOWN\` / \`MOUSEBUTTONUP\` | 滑鼠按鈕 |
| \`MOUSEMOTION\` | 滑鼠移動 |
| \`MOUSEWHEEL\` | 滾輪 |
| \`VIDEORESIZE\` | 視窗大小改變 |

## 62.6 暫停的最常見寫法

\`\`\`python
paused = False
while running:
    for e in pygame.event.get():
        if e.type == pygame.QUIT: running = False
        if e.type == pygame.KEYDOWN and e.key == pygame.K_p:
            paused = not paused

    if not paused:
        update_game()        # 暫停時不更新狀態

    draw_game()              # 但畫面持續畫（不然會卡住）
    if paused:
        draw_pause_overlay(screen)
    pygame.display.flip()
    clock.tick(60)
\`\`\`

## 62.7 動手試試（模擬版）

範例做事件佇列模擬：處理一連串按鍵與滑鼠輸入。
`,
example:`# 模擬：處理一連串輸入事件
# 玩家位置
player = {"x": 10, "y": 5}

# 模擬輸入事件（真實 pygame 從 pygame.event.get() 拿）
events = [
    ("KEYDOWN", "K_RIGHT"),
    ("KEYDOWN", "K_RIGHT"),
    ("KEYDOWN", "K_UP"),
    ("MOUSEBUTTONDOWN", 1, (15, 8)),    # 左鍵點 (15,8)
    ("KEYDOWN", "K_SPACE"),              # 跳
    ("KEYDOWN", "K_RIGHT"),
    ("MOUSEMOTION", (20, 10)),
    ("KEYDOWN", "K_ESCAPE"),             # 結束
]

print(f"玩家初始位置: ({player['x']}, {player['y']})\\n")

running = True
for ev in events:
    if not running: break

    if ev[0] == "KEYDOWN":
        key = ev[1]
        if key == "K_RIGHT":
            player["x"] += 1
            print(f"→ 右: 移到 ({player['x']}, {player['y']})")
        elif key == "K_LEFT":
            player["x"] -= 1
            print(f"← 左: 移到 ({player['x']}, {player['y']})")
        elif key == "K_UP":
            player["y"] -= 1
            print(f"↑ 上: 移到 ({player['x']}, {player['y']})")
        elif key == "K_DOWN":
            player["y"] += 1
            print(f"↓ 下: 移到 ({player['x']}, {player['y']})")
        elif key == "K_SPACE":
            print(f"🦘 跳！ 在 ({player['x']}, {player['y']})")
        elif key == "K_ESCAPE":
            print("結束遊戲")
            running = False

    elif ev[0] == "MOUSEBUTTONDOWN":
        button, pos = ev[1], ev[2]
        print(f"🖱 滑鼠 button={button} 點擊 {pos}")

    elif ev[0] == "MOUSEMOTION":
        pos = ev[1]
        print(f"🖱 滑鼠移到 {pos}")

print(f"\\n最終位置: ({player['x']}, {player['y']})")
`},
{id:63,title:"移動與動畫：速度向量",tag:"專項",content:`
# 第 63 章：移動與動畫 — 速度向量與 FPS

> 🎮 **專項教學 · pygame**：讓畫面真正「動」起來。掌握 velocity 與 delta time 是專業遊戲開發的分水嶺。

## 63.1 最簡單的移動：每幀加位移

\`\`\`python
x, y = 100, 100

while running:
    keys = pygame.key.get_pressed()
    if keys[pygame.K_RIGHT]: x += 5
    if keys[pygame.K_LEFT]:  x -= 5

    screen.fill((0,0,0))
    pygame.draw.circle(screen, WHITE, (x, y), 20)
    pygame.display.flip()
    clock.tick(60)
\`\`\`

問題：60 fps 跑 5 px/幀 = **300 px/秒**，30 fps 的電腦只有 150 px/秒——遊戲速度跟硬體綁定。

## 63.2 用速度向量（推薦）

\`\`\`python
import pygame
from pygame.math import Vector2

pos = Vector2(100, 100)
vel = Vector2(0, 0)
SPEED = 200    # px / 秒

while running:
    dt = clock.tick(60) / 1000    # ← delta time（這幀過了幾秒）

    keys = pygame.key.get_pressed()
    vel.x = (keys[pygame.K_RIGHT] - keys[pygame.K_LEFT]) * SPEED
    vel.y = (keys[pygame.K_DOWN]  - keys[pygame.K_UP])   * SPEED

    pos += vel * dt    # ← 用秒數算移動

    screen.fill((0,0,0))
    pygame.draw.circle(screen, WHITE, pos, 20)
    pygame.display.flip()
\`\`\`

不管 fps 多少，每秒永遠移動 200 px——遊戲體驗一致。

> 🎯 **delta time = 上一幀到這一幀的秒數**。\`clock.tick(60)\` 回傳的就是這個（毫秒）。

## 63.3 對角線移動的小坑

\`\`\`python
vel.x = 100    # 按右
vel.y = 100    # 按下
# 對角線實際速度 = √(100² + 100²) ≈ 141 px/s  ← 比直線快！
\`\`\`

修：

\`\`\`python
if vel.length() > 0:
    vel.scale_to_length(SPEED)
\`\`\`

## 63.4 加速度 / 慣性

\`\`\`python
ACCEL = 800      # px/s²
FRICTION = 0.85

while running:
    dt = clock.tick(60) / 1000
    keys = pygame.key.get_pressed()

    if keys[pygame.K_RIGHT]: vel.x += ACCEL * dt
    if keys[pygame.K_LEFT]:  vel.x -= ACCEL * dt

    vel *= FRICTION    # 摩擦力（簡化版）
    pos += vel * dt
\`\`\`

放開按鍵會慢慢停下，比較有「重量感」。

## 63.5 跳躍（最常見的物理）

\`\`\`python
GRAVITY = 1500
JUMP_VEL = -600
on_ground = True

while running:
    dt = clock.tick(60) / 1000
    for e in pygame.event.get():
        if e.type == pygame.KEYDOWN and e.key == pygame.K_SPACE:
            if on_ground:
                vel.y = JUMP_VEL
                on_ground = False

    vel.y += GRAVITY * dt   # 重力一直在
    pos += vel * dt

    if pos.y >= GROUND_Y:
        pos.y = GROUND_Y
        vel.y = 0
        on_ground = True
\`\`\`

## 63.6 動畫（換 sprite）

\`\`\`python
# 載入序列圖
frames = [pygame.image.load(f"run_{i}.png").convert_alpha() for i in range(4)]

frame_idx = 0
anim_timer = 0
ANIM_SPEED = 0.1   # 每 0.1 秒換一張

while running:
    dt = clock.tick(60) / 1000
    anim_timer += dt
    if anim_timer >= ANIM_SPEED:
        anim_timer = 0
        frame_idx = (frame_idx + 1) % len(frames)

    screen.blit(frames[frame_idx], pos)
\`\`\`

## 63.7 動手試試（模擬版）

範例做「彈跳球」物理模擬：重力 + 邊界反彈。
`,
example:`# 模擬：彈跳球（重力 + 反彈）
# 場地寬 40，地板 y=15
W, H = 40, 15
FPS = 30
GRAVITY = 30        # 加速度（單位/秒²）
JUMP_VEL = -25      # 跳起來的初速

ball = {"x": 5.0, "y": 10.0, "vx": 8.0, "vy": -20.0}

print(f"{'frame':>5} {'x':>6} {'y':>6} {'vy':>7}")
print('-' * 28)

for frame in range(1, 20):
    dt = 1 / FPS

    # 重力
    ball["vy"] += GRAVITY * dt

    # 更新位置
    ball["x"] += ball["vx"] * dt
    ball["y"] += ball["vy"] * dt

    # 邊界反彈
    if ball["x"] < 0:
        ball["x"] = 0; ball["vx"] = -ball["vx"]
    if ball["x"] > W - 1:
        ball["x"] = W - 1; ball["vx"] = -ball["vx"]
    if ball["y"] > H - 1:    # 撞地
        ball["y"] = H - 1
        ball["vy"] = -abs(ball["vy"]) * 0.7   # 損失 30% 能量
    if ball["y"] < 0:
        ball["y"] = 0; ball["vy"] = abs(ball["vy"])

    print(f"{frame:>5} {ball['x']:>6.1f} {ball['y']:>6.1f} {ball['vy']:>7.1f}")
`},
{id:64,title:"碰撞偵測：AABB 與 Rect",tag:"專項",content:`
# 第 64 章：碰撞偵測 — AABB 與 Rect

> 🎮 **專項教學 · pygame**：玩家踢到磚塊、子彈打中怪物、撿到道具——都是同一個問題。

## 64.1 矩形對矩形：AABB

最簡單最快：**Axis-Aligned Bounding Box**（兩個沒旋轉的矩形）。

\`pygame\` 一行：

\`\`\`python
if player.rect.colliderect(enemy.rect):
    player.hp -= 10
\`\`\`

自己寫的話：

\`\`\`python
def aabb_collide(r1, r2):
    return (r1.x < r2.x + r2.w and
            r1.x + r1.w > r2.x and
            r1.y < r2.y + r2.h and
            r1.y + r1.h > r2.y)
\`\`\`

## 64.2 點對矩形（滑鼠點 UI）

\`\`\`python
if button_rect.collidepoint(mouse_x, mouse_y):
    on_click()
\`\`\`

## 64.3 一對多

\`\`\`python
hit_index = player.rect.collidelist([e.rect for e in enemies])
if hit_index != -1:
    print(f"撞到 enemy[{hit_index}]")

# 全部撞到的索引
hit_all = player.rect.collidelistall([e.rect for e in enemies])
\`\`\`

## 64.4 群組碰撞（推薦：用 Sprite）

\`\`\`python
class Player(pygame.sprite.Sprite): ...
class Coin(pygame.sprite.Sprite): ...

player = Player(...)
coins = pygame.sprite.Group(Coin(...), Coin(...), Coin(...))

# 撞到哪些金幣（並自動移除）
hit = pygame.sprite.spritecollide(player, coins, dokill=True)
score += len(hit)
\`\`\`

## 64.5 圓對圓

\`\`\`python
def circle_collide(c1, r1, c2, r2):
    dx = c1[0] - c2[0]
    dy = c1[1] - c2[1]
    return dx*dx + dy*dy < (r1 + r2)**2     # ← 避免 sqrt 比較快
\`\`\`

## 64.6 像素級碰撞 (mask)

矩形碰撞會誤判（例如圓形/不規則形狀）。要精準到像素：

\`\`\`python
mask1 = pygame.mask.from_surface(img1)
mask2 = pygame.mask.from_surface(img2)
offset = (rect2.x - rect1.x, rect2.y - rect1.y)
if mask1.overlap(mask2, offset):
    print("真的撞到了")
\`\`\`

慢一些，**只在矩形已碰撞時才檢查**。

## 64.7 解決卡牆問題：x/y 分開檢查

\`\`\`python
# 錯：同時更新 x 與 y，撞牆時可能整個卡住
pos += vel * dt
if collide_with_walls(): ...

# 對：x 與 y 分開
pos.x += vel.x * dt
if collide_x_with_walls(): pos.x -= vel.x * dt   # 回退

pos.y += vel.y * dt
if collide_y_with_walls(): pos.y -= vel.y * dt
\`\`\`

這樣撞到牆還能沿著牆滑動，不會整個僵住。

## 64.8 完整子彈打怪物例子

\`\`\`python
bullets  = []       # list of (rect, vx)
enemies  = [...]
score = 0

while running:
    dt = clock.tick(60) / 1000

    # 子彈飛
    for b in bullets:
        b[0].x += b[1] * dt

    # 出畫面就移除
    bullets = [b for b in bullets if 0 <= b[0].x <= 800]

    # 碰撞
    for b in bullets[:]:
        for e in enemies[:]:
            if b[0].colliderect(e.rect):
                enemies.remove(e)
                bullets.remove(b)
                score += 10
                break
\`\`\`

## 64.9 動手試試（模擬版）

範例做「子彈 vs 怪物」AABB 碰撞偵測。
`,
example:`# 模擬：AABB 碰撞偵測 + 子彈打怪物
def aabb(r1, r2):
    return (r1["x"] < r2["x"] + r2["w"] and
            r1["x"] + r1["w"] > r2["x"] and
            r1["y"] < r2["y"] + r2["h"] and
            r1["y"] + r1["h"] > r2["y"])

# 場景
bullets = [
    {"x": 10, "y": 5, "w": 2, "h": 2},
    {"x": 20, "y": 8, "w": 2, "h": 2},
    {"x": 5,  "y": 5, "w": 2, "h": 2},
]
enemies = [
    {"id": "A", "x": 10, "y": 4, "w": 4, "h": 4},
    {"id": "B", "x": 25, "y": 7, "w": 4, "h": 4},
    {"id": "C", "x": 1,  "y": 1, "w": 4, "h": 4},
]

print("=== 碰撞檢測結果 ===")
score = 0
for i, b in enumerate(bullets):
    hit = None
    for e in enemies:
        if aabb(b, e):
            hit = e["id"]
            score += 10
            break
    print(f"子彈[{i}]@({b['x']},{b['y']}) → " + (f"撞到怪物 {hit}!" if hit else "沒撞到"))

print(f"\\n總分: {score}")

# 點對矩形
button = {"x": 100, "y": 50, "w": 80, "h": 30}
def in_button(px, py):
    return (button["x"] <= px <= button["x"] + button["w"] and
            button["y"] <= py <= button["y"] + button["h"])

mouse_tests = [(120, 60), (200, 100), (101, 51)]
print("\\n=== 滑鼠點擊按鈕 ===")
for mp in mouse_tests:
    print(f"  點 {mp}: {'命中' if in_button(*mp) else '沒中'}")
`},
{id:65,title:"文字與字型：HUD 與分數",tag:"專項",content:`
# 第 65 章：文字與字型 — 顯示分數與 UI

> 🎮 **專項教學 · pygame**：分數、HP、提示、結算畫面——遊戲不能沒文字。

## 65.1 三步驟畫文字

\`\`\`python
# 1) 建字型（通常在 loop 外，只做一次）
font = pygame.font.SysFont("Arial", 36)

# 2) render 成 Surface
text_surface = font.render("Hello", True, (255, 255, 255))
# True = 抗鋸齒 (anti-aliasing)，幾乎都要 True

# 3) blit 到螢幕
screen.blit(text_surface, (10, 10))
\`\`\`

## 65.2 用自帶字型 vs 自己準備字型

\`\`\`python
# 用系統字型
font = pygame.font.SysFont("Arial", 24)

# 列出所有系統可用字型
print(pygame.font.get_fonts())

# 用自己準備的字型檔（推薦——跨平台一致）
font = pygame.font.Font("assets/Roboto.ttf", 24)
\`\`\`

## 65.3 中文字型（最常踩雷）

預設字型沒有中文。要用內建支援中文的字型或自己準備：

\`\`\`python
# Mac: Apple Color Emoji, PingFang TC
# Win: Microsoft JhengHei
# 通用：思源黑體 (Noto Sans CJK)
font = pygame.font.SysFont("Microsoft JhengHei", 24)
# 或
font = pygame.font.Font("assets/NotoSansCJKtc-Regular.otf", 24)

text = font.render("你好世界", True, (255, 255, 255))
\`\`\`

> 💡 用自帶字型檔最穩，部署到別人電腦不會缺字。

## 65.4 置中文字

\`\`\`python
text_surface = font.render("GAME OVER", True, (255, 0, 0))
text_rect = text_surface.get_rect(center=(400, 300))
screen.blit(text_surface, text_rect)
\`\`\`

## 65.5 多行文字

\`render\` 不支援換行，要自己拆：

\`\`\`python
def draw_multiline(screen, font, text, color, x, y, line_height=30):
    for i, line in enumerate(text.split("\\n")):
        surface = font.render(line, True, color)
        screen.blit(surface, (x, y + i * line_height))

draw_multiline(screen, font, "第一行\\n第二行\\n第三行", (255,255,255), 10, 10)
\`\`\`

## 65.6 自動換行（按寬度）

\`\`\`python
def wrap_text(text, font, max_width):
    words = text.split(" ")
    lines = []
    cur = ""
    for w in words:
        test = cur + " " + w if cur else w
        if font.size(test)[0] <= max_width:
            cur = test
        else:
            lines.append(cur)
            cur = w
    if cur: lines.append(cur)
    return lines
\`\`\`

## 65.7 HUD（玩家頭上資訊）

\`\`\`python
# 永遠在最上層
def draw_hud(screen, score, hp, font):
    # 分數
    text = font.render(f"Score: {score}", True, (255, 255, 255))
    screen.blit(text, (10, 10))

    # HP 血條
    pygame.draw.rect(screen, (100, 0, 0), (10, 50, 200, 20))     # 底
    pygame.draw.rect(screen, (200, 0, 0), (10, 50, hp * 2, 20))  # 血
    hp_text = font.render(f"{hp}/100", True, (255, 255, 255))
    screen.blit(hp_text, (220, 50))
\`\`\`

## 65.8 動手試試（模擬版）

範例做 ASCII 版的「分數顯示」+「自動換行」邏輯。
`,
example:`# 模擬：分數顯示 + 自動換行
def render(text, max_width):
    # 把字串依 max_width 拆成多行（簡化版：按空白切）
    words = text.split()
    lines = []
    cur = ""
    for w in words:
        test = cur + " " + w if cur else w
        if len(test) <= max_width:
            cur = test
        else:
            lines.append(cur)
            cur = w
    if cur: lines.append(cur)
    return lines

# 模擬 HUD
score = 1240
hp = 75
max_hp = 100

print("=" * 40)
print(f"  Score: {score:6}     HP: {hp}/{max_hp}")

# 血條
filled = int(hp / max_hp * 30)
bar = '█' * filled + '░' * (30 - filled)
print(f"  [{bar}]")
print("=" * 40)

# 自動換行測試
msg = "Welcome to the game! Defeat all monsters to win the championship trophy."
print(f"\\n訊息（單行）:\\n  {msg}\\n")
print(f"自動換行（寬度 30）:")
for i, line in enumerate(render(msg, 30)):
    print(f"  L{i}: {line}")

# 模擬置中
def center_text(text, width):
    pad = (width - len(text)) // 2
    return ' ' * pad + text

print(f"\\n置中（寬度 40）:")
print(center_text("GAME OVER", 40))
print(center_text("Press R to restart", 40))
`},
{id:66,title:"音效與音樂",tag:"專項",content:`
# 第 66 章：音效與音樂

> 🎮 **專項教學 · pygame**：靜音遊戲沒靈魂。學會兩種音檔播放方式。

## 66.1 兩種音檔：SFX vs Music

| 類別 | API | 用途 | 特性 |
|------|-----|------|------|
| **音效 (SFX)** | \`pygame.mixer.Sound\` | 短：跳、撞擊、撿幣 | 預載到 RAM、可同時播多個 |
| **音樂 (BGM)** | \`pygame.mixer.music\` | 長：背景音樂 | 串流，一次只能播一首 |

## 66.2 音效 SFX

\`\`\`python
import pygame
pygame.mixer.init()   # 通常 pygame.init() 已包含

# 載入（loop 外）
jump_sfx = pygame.mixer.Sound("assets/jump.wav")
hit_sfx  = pygame.mixer.Sound("assets/hit.wav")
coin_sfx = pygame.mixer.Sound("assets/coin.wav")

# 設音量 0.0 ~ 1.0
jump_sfx.set_volume(0.7)

# 播
jump_sfx.play()
hit_sfx.play(loops=2)         # 重播 2 次
coin_sfx.play(fade_ms=200)    # 漸入
\`\`\`

支援格式：\`.wav\`（最穩）/ \`.ogg\`。\`.mp3\` 部分平台不支援。

## 66.3 同時播多個音效

\`mixer\` 預設給 8 個 channel，會自動分配：

\`\`\`python
pygame.mixer.set_num_channels(16)    # 同時最多 16 個音

# 自己指定 channel
ch = pygame.mixer.Channel(0)
ch.play(jump_sfx)
ch.set_volume(0.5)
\`\`\`

## 66.4 背景音樂 Music

\`\`\`python
pygame.mixer.music.load("assets/bgm.mp3")
pygame.mixer.music.set_volume(0.5)
pygame.mixer.music.play(loops=-1)    # -1 = 無限循環
pygame.mixer.music.play(loops=2, start=10.0)   # 從 10 秒開始播 2 次

# 控制
pygame.mixer.music.pause()
pygame.mixer.music.unpause()
pygame.mixer.music.stop()
pygame.mixer.music.fadeout(2000)   # 2 秒淡出

# 查詢
if pygame.mixer.music.get_busy():
    print("正在播音樂")
\`\`\`

## 66.5 按事件播音效

\`\`\`python
@event_handler(pygame.KEYDOWN)
def on_key(e):
    if e.key == pygame.K_SPACE:
        jump_sfx.play()

@event_handler("on_coin")
def on_coin(coin):
    coin_sfx.play()
    score += coin.value
\`\`\`

## 66.6 場景換音樂

\`\`\`python
def go_to_boss_room():
    pygame.mixer.music.fadeout(1000)
    pygame.mixer.music.queue("boss_bgm.ogg")   # 接著播
\`\`\`

## 66.7 音檔何處找

| 來源 | 特性 |
|------|------|
| freesound.org | 海量免費，CC 授權 |
| opengameart.org | 遊戲導向 |
| bfxr.net | 線上自己合成 8-bit 音效 |
| zapsplat.com | 註冊免費 |
| 自己錄 | 麥克風 + Audacity |

⚠️ 用音檔請看授權，CC0 / 商用免費才能用在自己作品。

## 66.8 動手試試（模擬版）

範例做「音效事件分派器」：根據遊戲事件決定播什麼音效。
`,
example:`# 模擬：音效事件分派器
class SoundMixer:
    def __init__(self):
        self.channels = []   # 同時播的音效
        self.music = None
        self.music_volume = 1.0

    def play_sfx(self, name, volume=1.0):
        # 真實 pygame: Sound(name).play()
        self.channels.append((name, volume))
        print(f"  🔊 SFX [{name}] vol={volume}")

    def play_music(self, name, loops=-1):
        if self.music:
            print(f"  🎵 停止 [{self.music}]")
        self.music = name
        print(f"  🎵 播放 BGM [{name}] loops={loops}")

    def fadeout_music(self, ms):
        if self.music:
            print(f"  🎵 [{self.music}] {ms}ms 淡出")
            self.music = None

mixer = SoundMixer()

# 模擬遊戲事件
events = [
    ("scene", "menu"),
    ("click", "start"),
    ("scene", "game"),
    ("player", "jump"),
    ("player", "jump"),
    ("collect", "coin"),
    ("collect", "coin"),
    ("collect", "coin"),
    ("hit", "enemy"),
    ("scene", "boss"),
    ("player", "die"),
    ("scene", "gameover"),
]

# 事件 → 音效對應
sfx_map = {
    ("click", "start"): "click.wav",
    ("player", "jump"): ("jump.wav", 0.7),
    ("player", "die"):  ("die.wav", 1.0),
    ("collect", "coin"): ("coin.wav", 0.5),
    ("hit", "enemy"):    ("hit.wav", 0.8),
}
bgm_map = {
    "menu":     "menu_bgm.ogg",
    "game":     "game_bgm.ogg",
    "boss":     "boss_bgm.ogg",
    "gameover": None,
}

for ev_type, ev_name in events:
    print(f"\\n[event] {ev_type}/{ev_name}")
    key = (ev_type, ev_name)
    if key in sfx_map:
        v = sfx_map[key]
        if isinstance(v, tuple):
            mixer.play_sfx(v[0], v[1])
        else:
            mixer.play_sfx(v)
    elif ev_type == "scene":
        bgm = bgm_map.get(ev_name)
        if bgm:
            mixer.play_music(bgm)
        else:
            mixer.fadeout_music(1500)

print(f"\\n總共播了 {len(mixer.channels)} 個音效")
`},
{id:67,title:"完整小遊戲：Pong",tag:"專項",content:`
# 第 67 章：完整小遊戲 — Pong（彈球）

> 🎮 **專項教學 · pygame**：把前 7 章全部整合。100 行內做出能玩的小遊戲。

## 67.1 設計

**Pong**（最早的電玩之一）：

- 左右各一塊板子，鍵盤上下控制
- 中間一顆球，撞牆反彈、撞板反彈
- 球出左右邊界 → 對方得分
- 先到 5 分獲勝

## 67.2 全部 code

\`\`\`python
import pygame
from pygame.math import Vector2
import random

pygame.init()
W, H = 800, 500
screen = pygame.display.set_mode((W, H))
pygame.display.set_caption("Pong")
clock = pygame.time.Clock()

WHITE = (255, 255, 255)
BG    = (10, 10, 30)
font  = pygame.font.SysFont("Arial", 48)

# === 物件 ===
PADDLE_W, PADDLE_H, BALL_R = 12, 80, 8
PADDLE_SPEED = 400

p1 = pygame.Rect(30, H//2 - PADDLE_H//2, PADDLE_W, PADDLE_H)
p2 = pygame.Rect(W - 30 - PADDLE_W, H//2 - PADDLE_H//2, PADDLE_W, PADDLE_H)

def reset_ball():
    ball.center = (W//2, H//2)
    vel.update(random.choice([-300, 300]), random.choice([-200, 200]))

ball = pygame.Rect(0, 0, BALL_R*2, BALL_R*2)
vel = Vector2(0, 0)
reset_ball()

score1, score2 = 0, 0
WIN_SCORE = 5

# === Loop ===
running = True
while running:
    dt = clock.tick(60) / 1000

    # 1) events
    for e in pygame.event.get():
        if e.type == pygame.QUIT: running = False

    # 2) input
    keys = pygame.key.get_pressed()
    if keys[pygame.K_w] and p1.top > 0: p1.y -= PADDLE_SPEED * dt
    if keys[pygame.K_s] and p1.bottom < H: p1.y += PADDLE_SPEED * dt
    if keys[pygame.K_UP]   and p2.top > 0: p2.y -= PADDLE_SPEED * dt
    if keys[pygame.K_DOWN] and p2.bottom < H: p2.y += PADDLE_SPEED * dt

    # 3) update
    ball.x += vel.x * dt
    ball.y += vel.y * dt

    # 上下牆反彈
    if ball.top <= 0 or ball.bottom >= H:
        vel.y *= -1

    # 撞板
    if ball.colliderect(p1) or ball.colliderect(p2):
        vel.x *= -1.05    # 反彈並加速
        vel.y += random.uniform(-50, 50)

    # 出界
    if ball.left <= 0:
        score2 += 1
        reset_ball()
    elif ball.right >= W:
        score1 += 1
        reset_ball()

    # 結束條件
    if max(score1, score2) >= WIN_SCORE:
        running = False

    # 4) draw
    screen.fill(BG)
    pygame.draw.rect(screen, WHITE, p1)
    pygame.draw.rect(screen, WHITE, p2)
    pygame.draw.ellipse(screen, WHITE, ball)
    pygame.draw.aaline(screen, (80, 80, 100), (W//2, 0), (W//2, H))   # 中線

    # 分數
    t1 = font.render(str(score1), True, WHITE)
    t2 = font.render(str(score2), True, WHITE)
    screen.blit(t1, (W//4 - t1.get_width()//2, 30))
    screen.blit(t2, (3*W//4 - t2.get_width()//2, 30))

    pygame.display.flip()

# === 結算 ===
winner = "P1" if score1 > score2 else "P2"
print(f"{winner} WIN! {score1} - {score2}")
pygame.quit()
\`\`\`

## 67.3 從這裡能延伸什麼

| 想加 | 怎麼做 |
|------|--------|
| 音效 | 撞板/得分時 \`pygame.mixer.Sound.play()\` |
| 粒子特效 | 撞擊位置生成小點，淡出消失 |
| AI 對手 | p2 自動追球：\`if ball.y > p2.centery: p2.y += SPEED * dt\` |
| 主選單 | 用「狀態機」：state = "menu" / "playing" / "gameover" |
| 多人連線 | 用 \`socket\` 或 WebSocket 同步 |

## 67.4 遊戲開發完整路徑

\`\`\`
你現在在這裡 ↓
├── Pong / 貪食蛇 (← 本章 100 行)
├── 平台跳躍 (Mario like)         ← 600 行
├── Top-down 射擊                ← 1500 行
├── RPG with 對話 / 道具          ← 5000+ 行
└── 用 Godot / Unity 做完整遊戲   ← 引擎輔助
\`\`\`

> 🎉 **恭喜完成到 Pong 這章！** 從第一個 \`print("Hello")\` 到完整小遊戲，你已經走過 Python 開發的完整 spectrum。
>
> 接下來最重要的一件事：**做一個自己想做的東西**。
> 不管是寫個工具、爬資料、做 Bot、做小遊戲，**完成 1 個小作品**比讀完 10 章新教材更能讓你進步。

## 67.5 動手試試（模擬版）

範例做純文字版的 Pong：球在 1D 軌道彈來彈去，玩家加分到 3 分結束。
`,
example:`# 模擬：簡化版 Pong（文字版）
# 球在 0~width 之間左右移動，撞牆會被反彈
# 球出左邊 → P2 得分；出右邊 → P1 得分
# 先到 3 分獲勝

WIDTH = 20
ball_x = 10.0
ball_vx = 1.0
score = [0, 0]
WIN = 3

frame = 0
while max(score) < WIN:
    frame += 1
    ball_x += ball_vx

    # 出界判定
    if ball_x < 0:
        score[1] += 1
        print(f"frame {frame:3} | ❗ P2 得分！ {score[0]}-{score[1]}")
        ball_x = WIDTH / 2
        ball_vx = 1.0
    elif ball_x > WIDTH:
        score[0] += 1
        print(f"frame {frame:3} | ❗ P1 得分！ {score[0]}-{score[1]}")
        ball_x = WIDTH / 2
        ball_vx = -1.0
    else:
        # 畫面
        pos = int(ball_x)
        line = ['·'] * (WIDTH + 1)
        if 0 <= pos <= WIDTH:
            line[pos] = '●'
        print(f"frame {frame:3} | P1|{''.join(line)}|P2  score={score}")

winner = "P1" if score[0] > score[1] else "P2"
print(f"\\n🏆 {winner} 獲勝！最終比數 {score[0]}-{score[1]}")
print(f"總共跑了 {frame} 幀")
`},
{id:68,title:"APCS 新制分級與程式識讀",tag:"APCS",
content:`# 68. APCS 新制分級與程式識讀

這一章把 APCS 新制整理成可以拿來練題的判準。官方新制把程式實作分成初級、中級、中高級、高級四種題本；程式識讀則考你讀懂程式流程、變數變化與輸出結果的能力。

## 68.1 先建立四級理解

| 等級 | 能力重點 | 看到題目時的判斷線索 |
|------|----------|----------------------|
| 初級 | 基礎程式設計能力 | 題目規則能直接翻成 if、loop、array 或 string 操作，限制通常不大 |
| 中級 | 序列型資料結構運用能力 | 需要處理一串資料、一張表、排序、前綴和、雙指標、滑動視窗或簡單 DP |
| 中高級 | 基礎資料結構運用能力 | 需要 stack、queue、set、map、hash、BFS/DFS、DSU、樹或較完整的狀態管理 |
| 高級 | 基礎演算法程序運用能力 | 暴力法通常不夠，需要最短路、進階 DP、分治、二分搜答案、字串雜湊或複雜度最佳化 |

簡單說：初級重在寫對，中級重在把序列資料整理好，中高級重在選對資料結構，高級重在把演算法和複雜度設計出來。

## 68.2 做題前的 5 步判斷

1. 先看輸入輸出格式，不要先想演算法。
2. 看資料範圍。N 小可以枚舉，N 到十萬以上通常需要 O(N log N) 或 O(N)。
3. 圈出關鍵字：連續、相異、最短、最多、區間、多次查詢、可重複、不能相鄰。
4. 用範例手算一次，確定你真的懂題意，不只是看懂中文。
5. 再決定資料結構：list、dict、set、queue、stack、heap、DSU 或 graph。

## 68.3 程式識讀技巧

程式識讀不是猜答案，是有方法地追蹤狀態。

| 題型 | 讀法 |
|------|------|
| 迴圈 | 寫追蹤表，欄位放 i、目前元素、關鍵變數、輸出 |
| 巢狀迴圈 | 先標出外層每次固定什麼，再看內層怎麼累加或更新 |
| 遞迴 | 先找終止條件，再畫呼叫樹，最後從最底層回推 |
| list/dict/set | 追蹤每次新增、刪除、覆蓋，特別注意同一個 key 會被更新 |
| 輸出題 | 每次 print 都寫下來，空白與換行也要算進去 |

常見陷阱：整數除法、索引從 0 開始、range 結尾不包含、break/continue、變數在迴圈外保留、list 被原地修改、函式呼叫有副作用。

## 68.4 追蹤表長什麼樣

看到迴圈時，把腦中的模糊感變成表格：

| i | x | 動作 | ans |
|---|---|------|-----|
| 0 | 3 | 偶數索引，加上 x | 3 |
| 1 | 1 | 奇數索引，減掉 x | 2 |
| 2 | 4 | 偶數索引，加上 x | 6 |
| 3 | 1 | 奇數索引，減掉 x | 5 |
| 4 | 5 | 偶數索引，加上 x | 10 |

APCS 程式識讀常常不是程式很長，而是容易在一兩個變數上看錯。把變數寫成表，錯誤率會明顯下降。

## 68.5 回到題庫怎麼練

本題庫已把 125 題重新分成四級：

| 等級 | 題數 |
|------|------|
| 初級 | 36 |
| 中級 | 49 |
| 中高級 | 27 |
| 高級 | 13 |

建議練習路線：

1. 初級先刷到能快速完成，重點是輸入處理、條件分支與邊界。
2. 中級開始整理自己的模板：排序、前綴和、二分搜尋、滑動視窗、簡單 DP。
3. 中高級開始記錄「我為什麼選這個資料結構」。
4. 高級每題都要先寫複雜度，再寫程式。

> 小提醒：題本等級不是人的等級。今天卡在中級，只代表這一類資料處理還需要練，不代表你不適合寫程式。
`,
example:`# 程式識讀練習：先不要執行，自己追一次表格

a = [3, 1, 4, 1, 5]
ans = 0

for i, x in enumerate(a):
    if i % 2 == 0:
        ans += x
    else:
        ans -= x
    print(i, x, ans)

print("final", ans)

# 預期輸出：
# 0 3 3
# 1 1 2
# 2 4 6
# 3 1 5
# 4 5 10
# final 10
`},

{id:69,title:"🔥 快速冪與模運算【高級題】",tag:"高級",content:`
# 第 69 章：快速冪與模運算 🔥【高級題】

> 🎯 看到 \`a^n mod m\`、n 很大（10^9 以上）、或題目給「答案請對 1000000007 取模」——就是這章。

## 69.1 為什麼不能直接乘？
n = 10^9 時，迴圈乘 n 次絕對 TLE；而且就算不超時，整數也會爆。
**快速冪**用「平方分解」把 O(n) 壓到 **O(log n)**。

## 69.2 核心觀察
\`a^n\` 可以拆成：
- 若 n 是偶數：\`a^n = (a^(n/2))^2\`
- 若 n 是奇數：\`a^n = a · a^(n-1)\`

每一步問題規模砍半 → log n 步。

## 69.3 迭代版（推薦背這個）
\`\`\`python
def fast_pow(a, n, mod=None):
    result = 1
    while n > 0:
        if n & 1:               # n 的最低位是 1
            result = result * a
            if mod: result %= mod
        a = a * a
        if mod: a %= mod
        n >>= 1                  # n //= 2
    return result

print(fast_pow(2, 10))                 # 1024
print(fast_pow(2, 10**9, 10**9 + 7))   # 模運算下的 2^(10^9)
\`\`\`

## 69.4 Python 內建——其實有現成的
\`\`\`python
pow(2, 10**9, 10**9 + 7)    # C 實作、最快
\`\`\`
**APCS 寫 Python 直接用 \`pow(a, n, m)\` 就好**；但 C/C++/Java 一定要會手刻。

## 69.5 C++ 版本（高級題模板）
\`\`\`cpp
typedef long long ll;
ll fast_pow(ll a, ll n, ll mod) {
    ll res = 1; a %= mod;
    while (n > 0) {
        if (n & 1) res = res * a % mod;
        a = a * a % mod;
        n >>= 1;
    }
    return res;
}
\`\`\`
> ⚠️ 用 \`long long\`，否則 \`a*a\` 會溢位。

## 69.6 應用一：模逆元（費馬小定理）
當 \`mod\` 是質數時，\`a 的反元素 = a^(mod-2) mod\`：
\`\`\`python
MOD = 10**9 + 7
inv = pow(a, MOD-2, MOD)        # a 在模 MOD 下的反元素
\`\`\`
這在組合數 \`C(n,k) mod p\` 題型常見。

## 69.7 應用二：矩陣快速冪 → 線性遞迴加速
費氏數列可以寫成矩陣：
\`\`\`
[F(n+1)]   [1 1]^n  [F(1)]
[F(n)  ] = [1 0]  · [F(0)]
\`\`\`
配合矩陣快速冪 → O(log n) 算第 n 個費氏數。是高級 DP 加速的常見手段。

## 69.8 陷阱清單
- 模運算下不能直接除法 → 改乘上模逆元
- \`a\` 進函式前先 \`a %= mod\` 一次，避免一開始就溢位
- \`n = 0\` 時答案是 1（注意 \`0^0\` 慣例為 1）

## 69.9 試試看

## 69.10 🧠 設計動機：為什麼可以「邊算邊取模」？

很多人看到 \`result = result * a % mod\` 會直覺覺得「這樣算出來的不是最終結果取模，應該會錯吧？」這個直覺是錯的，原因是模運算的同餘性質：

\`(a × b) mod m = ((a mod m) × (b mod m)) mod m\`

白話：兩數相乘後取模，等於「各自先取模再相乘再取模」。所以在每一步都取模，最終結果和最後才取模完全相同。

**為什麼要邊算邊取模？**

不是為了正確性（兩種做法答案一樣），而是為了防止整數溢位。2^(10^9) 是一個天文數字，Python 的大整數雖然不溢位，但中間值會越來越龐大，乘法會越來越慢。C/C++/Java 則直接整數溢位。每步取模讓數字永遠不超過 mod²，保持在可操作的範圍內。

\`\`\`python
MOD = 10**9 + 7

# 示範同餘性質
a, b = 123456789, 987654321
print((a * b) % MOD)                   # 方法 1：最後才取模
print((a % MOD) * (b % MOD) % MOD)    # 方法 2：各自先取模
# 兩個結果完全相同
\`\`\`
`,example:`# 比較三種寫法的速度
import time

def slow_pow(a, n, mod):
    r = 1
    for _ in range(n):
        r = r * a % mod
    return r

def fast_pow(a, n, mod):
    r = 1; a %= mod
    while n > 0:
        if n & 1: r = r * a % mod
        a = a * a % mod
        n >>= 1
    return r

a, n, mod = 3, 1_000_000, 10**9 + 7

t = time.time(); v1 = slow_pow(a, n, mod);   t1 = time.time()-t
t = time.time(); v2 = fast_pow(a, n, mod);   t2 = time.time()-t
t = time.time(); v3 = pow(a, n, mod);        t3 = time.time()-t

print(f"slow_pow : {v1}  耗時 {t1:.4f}s")
print(f"fast_pow : {v2}  耗時 {t2:.6f}s")
print(f"內建 pow : {v3}  耗時 {t3:.6f}s")
print(f"\\n快速冪比迴圈快 {t1/max(t2,1e-9):.0f} 倍")
`},

{id:70,title:"🔥 分治與逆序對【高級題】",tag:"高級",content:`
# 第 70 章：分治與逆序對 🔥【高級題】

> 🎯 「逆序對個數」(\`i < j\` 但 \`a[i] > a[j]\`) 是 APCS 高級題常考——也是把「合併排序」用在計數上的經典例子。

## 70.1 分治三步驟
1. **拆**：把問題切成兩半（通常從中點）
2. **解**：遞迴解左半、右半
3. **併**：把兩個子答案合起來，並算「跨越中線的貢獻」

合併排序、最近點對、最大子陣列分治版……都套這個骨架。

## 70.2 為什麼 O(n²) 不夠？
直觀寫法：雙層 for 數逆序對 → 1e5 筆資料就要 10^10 次比較，**TLE**。
分治可以做到 **O(n log n)**。

## 70.3 合併排序回顧
\`\`\`python
def merge_sort(a):
    if len(a) <= 1: return a
    mid = len(a) // 2
    L = merge_sort(a[:mid])
    R = merge_sort(a[mid:])
    return merge(L, R)

def merge(L, R):
    out, i, j = [], 0, 0
    while i < len(L) and j < len(R):
        if L[i] <= R[j]:
            out.append(L[i]); i += 1
        else:
            out.append(R[j]); j += 1
    out += L[i:]; out += R[j:]
    return out
\`\`\`

## 70.4 改裝成「邊排序邊算逆序對」
**關鍵觀察**：當合併時取了右邊的 \`R[j]\`，代表 L 中「還沒取出來」的所有元素 \`L[i..]\` 都比 \`R[j]\` 大 → 一次貢獻 \`len(L) - i\` 對逆序對。

\`\`\`python
def count_inv(a):
    def go(a):
        if len(a) <= 1: return a, 0
        mid = len(a) // 2
        L, cL = go(a[:mid])
        R, cR = go(a[mid:])
        out, i, j, c = [], 0, 0, 0
        while i < len(L) and j < len(R):
            if L[i] <= R[j]:
                out.append(L[i]); i += 1
            else:
                out.append(R[j]); j += 1
                c += len(L) - i      # ← 一次累計
        out += L[i:]; out += R[j:]
        return out, cL + cR + c
    return go(a)[1]

print(count_inv([2, 4, 1, 3, 5]))   # 3：(2,1)(4,1)(4,3)
\`\`\`
時間 **O(n log n)**、空間 O(n)。

## 70.5 為什麼計數對是 \`len(L) - i\`？
合併時兩邊**各自已排序**。如果 \`L[i] > R[j]\`，那麼 \`L[i], L[i+1], …, L[-1]\` 全部都 > \`R[j]\`；
而它們的原始 index 都在 \`R[j]\` 的左邊（因為 L 是左半） → 它們全都跟 \`R[j]\` 形成逆序對。

## 70.6 另一招：BIT (Binary Indexed Tree) 也能算
離散化 + BIT 從右往左掃，每次查「比目前 a[i] 小的有幾個」累加。
也是 O(n log n)、空間 O(n)。實作較多但常數小。
（BIT 的細節超出本章範圍，先建立「分治版」的直覺即可。）

## 70.7 變體題
- 數「**順序對**」：把 \`<=\` 改成 \`<\` 或對稱處理即可
- 數「\`a[i] - a[j] > k\` 的對數」：合併時改用雙指標
- 最大子陣列分治版（CLRS 經典）：left 內最大 / right 內最大 / 跨中線最大，三者取 max

## 70.8 試試看
`,example:`# 比較 O(n²) 暴力 vs O(n log n) 分治
import time, random

def brute(a):
    n = len(a); c = 0
    for i in range(n):
        for j in range(i+1, n):
            if a[i] > a[j]: c += 1
    return c

def fast(a):
    def go(a):
        if len(a) <= 1: return a, 0
        m = len(a)//2
        L, cL = go(a[:m]); R, cR = go(a[m:])
        out, i, j, c = [], 0, 0, 0
        while i < len(L) and j < len(R):
            if L[i] <= R[j]: out.append(L[i]); i += 1
            else: out.append(R[j]); j += 1; c += len(L)-i
        out += L[i:]; out += R[j:]
        return out, cL+cR+c
    return go(a)[1]

random.seed(0)
arr = [random.randint(1, 10**6) for _ in range(3000)]

t = time.time(); b = brute(arr); t1 = time.time()-t
t = time.time(); f = fast(arr);  t2 = time.time()-t

print(f"暴力 O(n²)    答案 = {b}  耗時 {t1:.4f}s")
print(f"分治 O(n log n) 答案 = {f}  耗時 {t2:.4f}s")
print(f"\\n結果一致：{b == f}    分治快 {t1/max(t2,1e-9):.1f} 倍")
`},

// ─── C++ 專項章節（僅 cpp 模式顯示） ───────────────────────────────────
{id:71,title:"STL 完整版：容器與迭代器",tag:"C++ 專項",content:`# 請切換到 C++ 模式以閱讀本章`,example:`// 此章節為 C++ 專屬，請切到 C++ 模式`},
{id:72,title:"模板 template 與 auto 推導",tag:"C++ 專項",content:`# 請切換到 C++ 模式以閱讀本章`,example:`// 此章節為 C++ 專屬，請切到 C++ 模式`},
{id:73,title:"智慧指標 & RAII",tag:"C++ 專項",content:`# 請切換到 C++ 模式以閱讀本章`,example:`// 此章節為 C++ 專屬，請切到 C++ 模式`},
{id:74,title:"Move 語意與右值參考",tag:"C++ 專項",content:`# 請切換到 C++ 模式以閱讀本章`,example:`// 此章節為 C++ 專屬，請切到 C++ 模式`},
{id:75,title:"Lambda 與函式物件",tag:"C++ 專項",content:`# 請切換到 C++ 模式以閱讀本章`,example:`// 此章節為 C++ 專屬，請切到 C++ 模式`},
{id:76,title:"<algorithm> 演算法庫",tag:"C++ 專項",content:`# 請切換到 C++ 模式以閱讀本章`,example:`// 此章節為 C++ 專屬，請切到 C++ 模式`},
{id:77,title:"string_view 與字串進階",tag:"C++ 專項",content:`# 請切換到 C++ 模式以閱讀本章`,example:`// 此章節為 C++ 專屬，請切到 C++ 模式`},
{id:78,title:"Concurrency 入門 std::thread",tag:"C++ 專項",content:`# 請切換到 C++ 模式以閱讀本章`,example:`// 此章節為 C++ 專屬，請切到 C++ 模式`},

// ─── C 專項章節（僅 c 模式顯示） ───────────────────────────────────────
{id:79,title:"指標 — 從入門到深入",tag:"C 專項",content:`# 請切換到 C 模式以閱讀本章`,example:`// 此章節為 C 專屬，請切到 C 模式`},
{id:80,title:"動態記憶體 malloc / free",tag:"C 專項",content:`# 請切換到 C 模式以閱讀本章`,example:`// 此章節為 C 專屬，請切到 C 模式`},
{id:81,title:"struct 與 union 進階",tag:"C 專項",content:`# 請切換到 C 模式以閱讀本章`,example:`// 此章節為 C 專屬，請切到 C 模式`},
{id:82,title:"函式指標與回呼",tag:"C 專項",content:`# 請切換到 C 模式以閱讀本章`,example:`// 此章節為 C 專屬，請切到 C 模式`},
{id:83,title:"字串處理 strcpy / strtok",tag:"C 專項",content:`# 請切換到 C 模式以閱讀本章`,example:`// 此章節為 C 專屬，請切到 C 模式`},
{id:84,title:"巨集進階：條件編譯與變參",tag:"C 專項",content:`# 請切換到 C 模式以閱讀本章`,example:`// 此章節為 C 專屬，請切到 C 模式`},
{id:85,title:"系統呼叫入門 read / write / fork",tag:"C 專項",content:`# 請切換到 C 模式以閱讀本章`,example:`// 此章節為 C 專屬，請切到 C 模式`},
{id:86,title:"Makefile 與多檔案編譯",tag:"C 專項",content:`# 請切換到 C 模式以閱讀本章`,example:`// 此章節為 C 專屬，請切到 C 模式`},

// ─── Java 專項章節（僅 java 模式顯示） ────────────────────────────────
{id:87,title:"Collections 集合框架",tag:"Java 專項",content:`# 請切換到 Java 模式以閱讀本章`,example:`// 此章節為 Java 專屬，請切到 Java 模式`},
{id:88,title:"Generics 泛型",tag:"Java 專項",content:`# 請切換到 Java 模式以閱讀本章`,example:`// 此章節為 Java 專屬，請切到 Java 模式`},
{id:89,title:"Stream API",tag:"Java 專項",content:`# 請切換到 Java 模式以閱讀本章`,example:`// 此章節為 Java 專屬，請切到 Java 模式`},
{id:90,title:"Optional 與 null 安全",tag:"Java 專項",content:`# 請切換到 Java 模式以閱讀本章`,example:`// 此章節為 Java 專屬，請切到 Java 模式`},
{id:91,title:"多執行緒：Thread / Runnable",tag:"Java 專項",content:`# 請切換到 Java 模式以閱讀本章`,example:`// 此章節為 Java 專屬，請切到 Java 模式`},
{id:92,title:"Concurrency 工具：Lock / Atomic",tag:"Java 專項",content:`# 請切換到 Java 模式以閱讀本章`,example:`// 此章節為 Java 專屬，請切到 Java 模式`},
{id:93,title:"Annotation 與反射",tag:"Java 專項",content:`# 請切換到 Java 模式以閱讀本章`,example:`// 此章節為 Java 專屬，請切到 Java 模式`},
{id:94,title:"JVM 與 GC 基礎",tag:"Java 專項",content:`# 請切換到 Java 模式以閱讀本章`,example:`// 此章節為 Java 專屬，請切到 Java 模式`},
{id:95,title:"物件模型：名牌與箱子",tag:"進階觀念",content:`
# 第 95 章：物件模型 — 變數是「名牌」，不是「箱子」

> 🧠 **進階觀念**：這章解釋 Python 最容易被誤解的一件事。搞懂它，一半的詭異 bug 會自動消失。

## 95.1 賦值 = 把名牌掛到物件上

很多人想像 \`a = 3\` 是「把 3 放進名叫 a 的箱子」。**這個想像在 Python 是錯的。**

正確的圖像：
1. 記憶體某處先誕生一個「3」這個**物件**
2. \`a\` 只是一張**名牌**，掛到那個物件上

\`\`\`python
a = 3
print(id(a))   # id() 回傳物件的「記憶體身分證」
b = a
print(id(b))   # 跟 a 一模一樣 → 兩張名牌掛在同一個物件上
\`\`\`

\`b = a\` 不會複製任何東西——只是**多掛一張名牌**。

## 95.2 \`==\` vs \`is\`：同值 vs 同一

| 比較 | 問的問題 |
|------|----------|
| \`a == b\` | 兩邊的**內容**一樣嗎？（同值） |
| \`a is b\` | 兩邊是**同一個物件**嗎？（同一，等價於 id 相同） |

\`\`\`python
x = [1, 2, 3]
y = [1, 2, 3]
print(x == y)   # True：內容相同
print(x is y)   # False：是兩個不同的 list 物件
z = x
print(x is z)   # True：同一個物件的兩張名牌
\`\`\`

> ⚠️ 判斷 \`None\` 永遠用 \`is\`：\`if x is None:\`。其他情況幾乎都該用 \`==\`。

## 95.3 可變 (mutable) vs 不可變 (immutable)

| 不可變 | 可變 |
|--------|------|
| \`int\`、\`float\`、\`str\`、\`tuple\`、\`bool\` | \`list\`、\`dict\`、\`set\` |

不可變物件「改值」其實是**換一個新物件**：

\`\`\`python
s = "abc"
print(id(s))
s = s + "d"     # 產生新字串，名牌移過去
print(id(s))    # 不一樣了！
\`\`\`

可變物件可以**原地修改**——所有名牌都會看到變化：

\`\`\`python
a = [1, 2, 3]
b = a            # 兩張名牌、同一個 list
b.append(4)
print(a)         # [1, 2, 3, 4] ← a 也「變了」！
\`\`\`

## 95.4 別名陷阱與正確複製

上面 \`a\` 跟著變，就是**別名 (aliasing)** 陷阱。想要「真正的副本」：

\`\`\`python
b = a[:]          # 淺複製（切片）
b = list(a)       # 淺複製
import copy
b = copy.deepcopy(a)   # 深複製：巢狀結構也全複製
\`\`\`

淺複製只複製最外層——\`[[1,2],[3,4]]\` 淺複製後，內層的兩個小 list 還是共用的。

## 95.5 給寫過 C/Java 的你

- Python 變數比較像 C 的「永遠是指標」，但不用 \`*\` 解參考
- Java 的物件變數行為幾乎一樣（reference）；差別是 Python 連 \`int\` 都是物件
- 函式傳參數 = 傳名牌（共享物件），所以函式內 \`lst.append(...)\` 會影響外面，但 \`lst = [...]\` 只是換自己的名牌
`,example:`# 名牌實驗：兩張名牌、同一個 list
a = [1, 2, 3]
b = a          # b 跟 a 是同一個物件
b.append(4)
print(a)       # a 也變了！
print(a is b)  # True

c = a[:]       # 真正的副本
c.append(99)
print(a)       # 不受影響
print(a is c)  # False`},
{id:96,title:"函式參數進階：*args/**kwargs",tag:"進階觀念",content:`
# 第 96 章：函式參數進階 — *args、**kwargs 與預設值陷阱

> 🧠 **進階觀念**：讀懂任何函式庫的簽名、避開 Python 最有名的參數陷阱。

## 96.1 位置參數 vs 關鍵字參數

\`\`\`python
def greet(name, msg):
    print(f"{msg}, {name}!")

greet("Alice", "你好")            # 位置：照順序對應
greet(msg="你好", name="Alice")   # 關鍵字：指名道姓，順序隨意
\`\`\`

## 96.2 預設值陷阱：只在「定義時」算一次

預設值在 \`def\` 執行的那一刻**建立一次**，之後所有呼叫**共用同一個物件**：

\`\`\`python
def add_item(x, box=[]):     # ❌ 經典地雷
    box.append(x)
    return box

print(add_item(1))   # [1]
print(add_item(2))   # [1, 2] ← 不是 [2]！上次的 box 還在
\`\`\`

正確寫法——用 \`None\` 當哨兵：

\`\`\`python
def add_item(x, box=None):   # ✅
    if box is None:
        box = []             # 每次呼叫都建新的
    box.append(x)
    return box
\`\`\`

> 規則：**預設值不要用可變物件**（list / dict / set）。

## 96.3 *args：吃下任意數量的位置參數

\`\`\`python
def total(*args):        # args 是 tuple
    print(args)          # (3, 5, 2)
    return sum(args)

print(total(3, 5, 2))    # 10
print(total())           # 0 也合法
\`\`\`

## 96.4 **kwargs：吃下任意數量的關鍵字參數

\`\`\`python
def show(**kwargs):      # kwargs 是 dict
    for k, v in kwargs.items():
        print(k, "=", v)

show(name="Alice", age=18)
\`\`\`

兩個合體就是萬用簽名（裝飾器、轉發參數最常用）：

\`\`\`python
def wrapper(*args, **kwargs):
    return real_func(*args, **kwargs)
\`\`\`

## 96.5 反向操作：拆包呼叫

\`*\` 和 \`**\` 在「呼叫端」是**拆開**：

\`\`\`python
nums = [3, 5, 2]
print(total(*nums))      # 等於 total(3, 5, 2)

opts = {"name": "Alice", "age": 18}
show(**opts)             # 等於 show(name="Alice", age=18)
\`\`\`

## 96.6 僅限關鍵字參數（keyword-only）

\`*\` 之後的參數**必須**用關鍵字傳：

\`\`\`python
def open_file(path, *, encoding="utf-8"):
    ...

open_file("a.txt", encoding="big5")   # ✅
open_file("a.txt", "big5")            # ❌ TypeError
\`\`\`

很多標準庫（如 \`sorted(key=...)\`）就是這樣設計，逼你寫出可讀的呼叫。
`,example:`def total(*args):
    print("args =", args)
    return sum(args)

print(total(3, 5, 2))

nums = [10, 20, 30]
print(total(*nums))   # 拆包呼叫

def add_item(x, box=None):   # 正確的預設值寫法
    if box is None:
        box = []
    box.append(x)
    return box

print(add_item(1))
print(add_item(2))   # 每次都是新的 box`},
{id:97,title:"如何讀官方文件",tag:"實用",content:`
# 第 97 章：如何讀官方文件 — 離開教材後的生存技能

> 📖 **實用**：教材總有教不到的地方。會查官方文件，你就能自學任何新函式庫。

## 97.1 為什麼是官方文件？

部落格文章可能過時、AI 可能幻覺；**官方文件永遠是最終答案**。差別在於：會讀的人 10 秒找到參數，不會讀的人複製貼上錯誤的範例。

## 97.2 docs.python.org 的地圖

| 區塊 | 內容 | 什麼時候看 |
|------|------|-----------|
| **Tutorial** | 官方教學 | 系統性複習 |
| **Library Reference** | 所有內建模組、函式 | **最常用**：查 str / list / math / json... |
| **Language Reference** | 語法規格書 | 進階（很硬） |

> 💡 快速入口：Google 搜「python str split site:docs.python.org」幾乎一定中。

## 97.3 看懂函式簽名

文件裡的簽名藏著大量資訊：

\`\`\`text
str.split(sep=None, maxsplit=-1)
\`\`\`

- \`sep=None\`：有預設值 → **可以不傳**；預設用空白切
- \`maxsplit=-1\`：-1 代表不限次數

再看一個：

\`\`\`text
sorted(iterable, /, *, key=None, reverse=False)
\`\`\`

- \`/\` 之前的參數**只能用位置**傳
- \`*\` 之後的參數**只能用關鍵字**傳 → \`sorted(a, key=len)\` ✅、\`sorted(a, len)\` ❌

舊式文件還會用中括號表示可省略：\`range([start,] stop[, step])\`。

## 97.4 不開瀏覽器也能查：help() 與 dir()

\`\`\`python
print(dir(str))        # str 有哪些方法（名字清單）
help(str.split)        # 印出 split 的文件
\`\`\`

\`dir()\` 找名字、\`help()\` 看用法——REPL 裡的隨身文件。

## 97.5 其他語言的官方文件

| 語言 | 文件 | 備註 |
|------|------|------|
| C++ | **cppreference.com** | 事實上的標準；範例可直接跑 |
| C | cppreference.com（C 區）/ man 手冊 | \`man 3 printf\` |
| Java | **Oracle Javadoc**（docs.oracle.com） | 每個類別一頁，Method Summary 最好用 |

查 C++ 的訣竅：搜「cppreference vector push_back」。Javadoc 的訣竅：先看 **Method Summary** 表格再點進細節。

## 97.6 實戰練習

文件說 \`str.split(sep=None, maxsplit=-1)\`——那 \`maxsplit=2\` 會發生什麼？

\`\`\`python
print("a,b,c,d".split(",", 2))   # ['a', 'b', 'c,d']：只切 2 刀
\`\`\`

**自己驗證文件的描述**，是讀文件的最後一步、也是最重要的一步。
`,example:`# 用內建工具讀文件
help(str.split)

# 驗證文件的描述：maxsplit=2 只切 2 刀
print("a,b,c,d".split(",", 2))

# dir() 找名字
print(dir(str)[-10:])`}
,
{id:98,title:"常見錯誤與編譯訊息讀法",tag:"除錯",content:`
# 第 98 章：常見錯誤與編譯訊息讀法

錯誤訊息不是責罵，而是電腦留下的線索。讀錯誤要先抓三件事：

1. **錯在哪個檔案、哪一行**
2. **錯誤類型是什麼**
3. **第一個錯誤通常比後面的錯誤重要**

## 98.1 Python 常見錯誤

| 錯誤 | 意思 | 常見修法 |
|------|------|---------|
| SyntaxError | 語法不合法 | 檢查冒號、括號、引號 |
| NameError | 名字不存在 | 檢查變數拼字、是否先宣告 |
| TypeError | 型別用錯 | 先用 int() / str() 轉型 |
| IndexError | 索引超出範圍 | 檢查 len() 與迴圈邊界 |
| ValueError | 值格式不合法 | 檢查 input 是否真的能轉成數字 |

## 98.2 C / C++ / Java 常見錯誤

| 錯誤 | 意思 | 常見修法 |
|------|------|---------|
| expected ';' | 少分號 | 往錯誤行或上一行找 |
| undeclared identifier | 變數/函式沒宣告 | 檢查拼字、include、作用域 |
| cannot convert | 型別不相容 | 改型別或明確轉型 |
| segmentation fault | 存到不該存的記憶體 | 檢查指標、陣列越界 |
| NullPointerException | Java 物件是 null | 使用前先檢查或初始化 |

## 98.3 讀錯誤的順序

不要從最後一行開始亂猜。建議順序：

- 先看 **第一個 error**
- 找到檔名與行號
- 看錯誤類型
- 看錯誤行的上一行
- 修一個，再重新執行

## 98.4 實戰：故意製造錯誤

把右邊程式的變數名改錯，觀察 NameError。再把括號拿掉，觀察 SyntaxError。
`,example:`total_score = 100

# 這行故意把 total_score 拼錯了
# 修正後應該輸出 100
print(totla_score)
`},
{id:99,title:"除錯技巧：從 print 到二分定位",tag:"除錯",content:`
# 第 99 章：除錯技巧 — 從 print 到二分定位

除錯不是盯著程式碼祈禱。你要像做實驗一樣，把問題範圍越縮越小。

## 99.1 最小可重現範例

先把大程式縮成最小版本：

- 保留會出錯的輸入
- 刪掉和錯誤無關的功能
- 讓錯誤能穩定重現

## 99.2 print 除錯

在關鍵位置印出變數：

\`\`\`python
print("i =", i, "total =", total)
\`\`\`

印出來不是越多越好，而是要回答問題：

- 迴圈跑了幾次？
- 條件有沒有進去？
- 變數在哪一步變錯？

## 99.3 二分定位 bug

如果程式有 100 行，不要一行一行猜。先在中間印：

\`\`\`python
print("checkpoint A")
\`\`\`

如果 A 前正常、A 後錯，就只看後半段；反之看前半段。這就像二分搜尋。

## 99.4 檢查邊界案例

APCS 常見邊界：

- n = 0 或 n = 1
- 全部相同
- 已排序 / 反向排序
- 最大值、最小值
- 空字串、只有一個字元

## 99.5 修 bug 的紀錄

每次修正都寫一句：

> 原因：迴圈少跑最後一格。修法：range(n-1) 改 range(n)。

這會讓你下次更快看出同類錯誤。
`,example:`nums = [3, 1, 4, 1, 5]
total = 0

for i, x in enumerate(nums):
    print("before", i, total)
    total = x   # bug：這行應該累加，而不是覆蓋
    print("after ", i, total)

print(total)
`},
{id:100,title:"輸入驗證與防呆",tag:"除錯",content:`
# 第 100 章：輸入驗證與防呆

真實程式不能假設使用者永遠輸入正確資料。輸入驗證就是在資料進入核心邏輯前，先檢查格式與範圍。

## 100.1 先檢查格式，再轉型

\`\`\`python
s = input().strip()
if s.isdigit():
    n = int(s)
else:
    print("請輸入整數")
\`\`\`

如果直接 \`int(input())\`，遇到 \`abc\` 就會 ValueError。

## 100.2 檢查範圍

\`\`\`python
if 0 <= score <= 100:
    print("合法分數")
else:
    print("分數超出範圍")
\`\`\`

APCS 題目通常保證輸入合法，但專題、工具、網站不一定。

## 100.3 防呆設計

防呆不是把錯誤藏起來，而是讓錯誤更早、更清楚：

- 輸入錯 → 告訴使用者哪裡錯
- 邊界錯 → 給出合理預設值或拒絕
- 狀態錯 → 不執行危險操作

## 100.4 函式也要驗證

\`\`\`python
def average(nums):
    if not nums:
        return 0
    return sum(nums) / len(nums)
\`\`\`

空串列不能直接除以長度，先擋掉就不會除以 0。

## 100.5 實戰：讀到合法分數

右邊範例示範：只有 0–100 的整數會被接受，其餘輸入都回報錯誤。
`,example:`raw = input().strip()

if raw.isdigit():
    score = int(raw)
    if 0 <= score <= 100:
        print("OK")
    else:
        print("BAD")
else:
    print("BAD")
`}
];

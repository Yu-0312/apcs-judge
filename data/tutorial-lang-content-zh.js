// 自 tutorial.html 抽出的資料檔（由頁面以 <script src> 載入）
const LANG_CONTENT = {
0:{
cpp:`
# 第 0 章：寫程式是什麼一回事？(C++ 版)

歡迎！這是給**完全沒寫過程式**的你的第一章。

## 🤔 程式 = 一份「給電腦看的食譜」

你寫好步驟 → 電腦照做。C++ 的食譜長這樣：

\`\`\`cpp
#include <iostream>
using namespace std;
int main(){
    cout << "Hello" << endl;
    return 0;
}
\`\`\`

## 🔑 C++ 跟 Python 三大差異

| 項目 | Python | C++ |
|------|--------|-----|
| 程式入口 | 從第一行開始 | 從 \`main()\` 開始 |
| 一行結尾 | 換行就好 | 一定要 \`;\` 分號 |
| 變數宣告 | \`x = 5\` | \`int x = 5;\` 要先說型別 |

## ▶️ 按一次「執行」

右邊已經準備好 Hello 程式碼，按 **▶ 執行**，看輸出框出現什麼。

> **小提示**：C++ 要編譯後執行。這個教學透過 Judge0 CE 呼叫線上的真實 g++ 幫你編譯與執行，不用安裝編譯器，需要網路。
`,
c:`
# 第 0 章：寫程式是什麼一回事？(C 版)

歡迎！這是給**完全沒寫過程式**的你的第一章。

## 🤔 程式 = 一份「給電腦看的食譜」

C 的食譜長這樣：

\`\`\`c
#include <stdio.h>
int main(){
    printf("Hello\\n");
    return 0;
}
\`\`\`

## 🔑 C 跟 Python 三大差異

| 項目 | Python | C |
|------|--------|---|
| 程式入口 | 第一行 | 從 \`main()\` 開始 |
| 一行結尾 | 換行 | 必須 \`;\` |
| 變數宣告 | \`x = 5\` | \`int x = 5;\` 要型別 |

## ▶️ 按一次「執行」

按右上的 **▶ 執行**，看 Hello 出現在輸出框。

> **小提示**：C 沒有原生字串型別，要用字元陣列 \`char s[]\`。Python 的 \`"abc"\` 對應 C 的 \`"abc"\`（一樣寫法，但實際是字元陣列）。
`,
java:`
# 第 0 章：寫程式是什麼一回事？(Java 版)

歡迎！這是給**完全沒寫過程式**的你的第一章。

## 🤔 程式 = 一份「給電腦看的食譜」

Java 的食譜長這樣：

\`\`\`java
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello");
    }
}
\`\`\`

## 🔑 Java 跟 Python 三大差異

| 項目 | Python | Java |
|------|--------|------|
| 程式入口 | 第一行 | \`public static void main\` |
| 結構 | 不用 class | 一定要包在 class 裡 |
| 結尾 | 換行 | \`;\` 分號 |

## ▶️ 按一次「執行」

按右上的 **▶ 執行**，由 Judge0 CE 雲端 Java 編譯器跑（需要網路，約 1-2 秒）。

> **小提示**：Java 檔名要叫 \`Main.java\`，class 名也要叫 \`Main\`，必須一致。
`
},
1:{
cpp:`
# 第 1 章：變數與資料型別 (C++)

## 1.1 變數要先宣告型別
C++ 是**強型別**語言，宣告時要說清楚變數是什麼型別：

\`\`\`cpp
int age = 17;          // 整數
double height = 168.5; // 浮點數
string name = "Alice"; // 字串（要 #include <string>）
bool ok = true;        // 布林
\`\`\`

## 1.2 四大基本型別
| 型別 | 範例 | 範圍 |
|------|------|------|
| int | \`42\` | 約 ±21 億 |
| long long | \`42LL\` | 約 ±9×10¹⁸ |
| double | \`3.14\` | 浮點數 |
| string | \`"hi"\` | 字串 |
| bool | \`true / false\` | 真假 |

## 1.3 型別轉換
\`\`\`cpp
int x = (int)3.7;          // 3（直接截斷）
double y = (double)5 / 2;  // 2.5
string s = to_string(42);  // "42"
int n = stoi("42");        // 42
\`\`\`

> **APCS 重點**：整數除法不會自動變浮點！\`5 / 2\` 在 C++ 是 \`2\`（不是 2.5），要 \`(double)5/2\` 才會得到 2.5。
`,
c:`
# 第 1 章：變數與資料型別 (C)

## 1.1 變數要先宣告型別
\`\`\`c
int age = 17;
double height = 168.5;
char name[] = "Alice";  // C 沒有 string，用字元陣列
char letter = 'A';      // 單一字元用單引號
\`\`\`

## 1.2 常用型別
| 型別 | 範例 | 說明 |
|------|------|------|
| int | \`42\` | 整數 |
| long long | \`42LL\` | 大整數 |
| double | \`3.14\` | 浮點 |
| char | \`'A'\` | 單一字元 |
| char[] | \`"hello"\` | 字串（字元陣列） |

## 1.3 型別轉換
\`\`\`c
int x = (int)3.7;  // 3
double y = 5.0 / 2;  // 2.5（要至少一個是 double）
\`\`\`

> **APCS 重點**：C 沒有 bool（C99 有 \`stdbool.h\`），常用 \`int\`：0 = false，非 0 = true。
`,
java:`
# 第 1 章：變數與資料型別 (Java)

## 1.1 宣告變數
\`\`\`java
int age = 17;
double height = 168.5;
String name = "Alice";   // String 是 class，要大寫 S
boolean ok = true;
char c = 'A';
\`\`\`

## 1.2 八大基本型別
| 型別 | 範例 |
|------|------|
| int | \`42\` |
| long | \`42L\` |
| double | \`3.14\` |
| char | \`'A'\` |
| boolean | \`true / false\` |
| String*| \`"hi"\` (物件) |

## 1.3 型別轉換
\`\`\`java
int x = (int)3.7;              // 3
double y = (double)5 / 2;      // 2.5
String s = Integer.toString(42);
int n = Integer.parseInt("42");
\`\`\`

> **APCS 重點**：跟 C++ 一樣，\`5 / 2\` 是整數除法得 \`2\`。要浮點結果寫 \`5.0 / 2\` 或 \`(double)5/2\`。
`
},
2:{
cpp:`
# 第 2 章：輸入與輸出 (C++)

## 2.1 cout 輸出
\`\`\`cpp
cout << "Hello" << endl;        // 換行
cout << "a" << " " << "b";       // 用 << 連接
cout << x << "\\n";              // \\n 也可以
\`\`\`

## 2.2 cin 輸入
\`\`\`cpp
int n;
cin >> n;                        // 讀一個整數
int a, b;
cin >> a >> b;                   // 一行讀兩個

string s;
getline(cin, s);                 // 讀一整行（含空白）
\`\`\`

## 2.3 讀 n 個數字進 vector
\`\`\`cpp
int n; cin >> n;
vector<int> a(n);
for(int i = 0; i < n; i++) cin >> a[i];
\`\`\`

> **加速技巧**：APCS 大量輸入時，在 main 開頭加 \`ios::sync_with_stdio(false); cin.tie(0);\` cin 速度會跟 scanf 一樣快。
`,
c:`
# 第 2 章：輸入與輸出 (C)

## 2.1 printf 輸出
\`\`\`c
printf("Hello\\n");
printf("%d\\n", x);              // 整數
printf("%.2f\\n", 3.14159);      // 浮點，2 位小數
printf("%s\\n", "hi");           // 字串
\`\`\`

## 2.2 scanf 輸入
\`\`\`c
int n;
scanf("%d", &n);                 // 注意 & ！
int a, b;
scanf("%d %d", &a, &b);
char s[100];
scanf("%s", s);                  // 字串不用 &
\`\`\`

## 2.3 格式符號速查
| 符號 | 對應型別 |
|------|----------|
| %d | int |
| %lld | long long |
| %f / %lf | float / double（printf 都用 %f，scanf 用 %lf） |
| %c | char |
| %s | 字串 |

> **新手陷阱**：scanf 一定要記得加 \`&\`！\`scanf("%d", n)\` 會 crash。
`,
java:`
# 第 2 章：輸入與輸出 (Java)

## 2.1 System.out 輸出
\`\`\`java
System.out.println("Hello");           // 印完換行
System.out.print("no newline");        // 不換行
System.out.printf("%d %s%n", 42, "hi"); // 格式化
\`\`\`

## 2.2 Scanner 輸入
\`\`\`java
import java.util.*;
Scanner sc = new Scanner(System.in);
int n = sc.nextInt();
double d = sc.nextDouble();
String s = sc.next();         // 不含空白
String line = sc.nextLine();  // 整行
\`\`\`

## 2.3 讀 n 個數字進陣列
\`\`\`java
int n = sc.nextInt();
int[] a = new int[n];
for(int i = 0; i < n; i++) a[i] = sc.nextInt();
\`\`\`

> **效能技巧**：Scanner 比 BufferedReader 慢 10 倍以上。資料量大時用 BufferedReader + StringTokenizer。
`
},
3:{
cpp:`
# 第 3 章：運算子與表達式 (C++)

## 3.1 算術運算子
跟 Python 大致相同：\`+ - * / %\`

**但要注意：**
- \`/\` **看型別**！\`5 / 2 = 2\`（整數），\`5.0 / 2 = 2.5\`（浮點）
- Python 的 \`//\` 在 C++ 就是 \`/\`（當兩邊都是整數時）
- \`%\` 取餘數：\`17 % 5 = 2\`

## 3.2 拆三位數
\`\`\`cpp
int n = 752;
int h = n / 100;       // 7
int t = n / 10 % 10;   // 5
int o = n % 10;        // 2
\`\`\`

## 3.3 自增 / 自減
C++ 特有寫法：

\`\`\`cpp
i++;   // 等同 i = i + 1
i--;   // 等同 i = i - 1
\`\`\`

> **整數溢位**：int 最大約 21 億。算次方、階乘容易爆，用 \`long long\` 才安全：\`long long x = 1e18;\`
`,
c:`
# 第 3 章：運算子與表達式 (C)

跟 C++ 完全相同。

## 3.1 算術
\`+ - * / %\`，整數除法 \`/\` 自動截斷。

\`\`\`c
int n = 752;
int h = n / 100;     // 7
int t = n / 10 % 10; // 5
int o = n % 10;      // 2
\`\`\`

## 3.2 自增 / 自減
\`\`\`c
i++; i--;
\`\`\`

## 3.3 邏輯運算子
\`\`\`c
if (x > 0 && x < 100)   // and
if (x == 0 || y == 0)   // or
if (!flag)              // not
\`\`\`

> **C 的真假**：沒 bool，用 int：0 是假，非 0 都是真。

> **整數溢位**：int 上限 ~21 億。大數用 \`long long\` 並用 \`%lld\` 印。
`,
java:`
# 第 3 章：運算子與表達式 (Java)

## 3.1 算術
\`+ - * / %\`，跟 C++ 相同。整數 \`/\` 自動截斷。

\`\`\`java
int n = 752;
int h = n / 100;
int t = n / 10 % 10;
int o = n % 10;
\`\`\`

## 3.2 自增
\`\`\`java
i++; i--;
\`\`\`

## 3.3 字串相加
Java 的 \`+\` 對字串是「連接」，可以跟其他型別混用：

\`\`\`java
int age = 17;
String s = "I am " + age + " years old";  // 自動轉
\`\`\`

> **整數溢位**：int 上限 21 億。\`1L << 40\` 用 long；數字後面加 \`L\` 才會被當 long。

> **整數除法陷阱**：\`(double)(1/2)\` = 0.0！因為 1/2 先算成 0 再轉 double。要 \`1.0/2\` 或 \`(double)1/2\`。
`
},
4:{
cpp:`
# 第 4 章：條件判斷 (C++)

## 4.1 if / else if / else
\`\`\`cpp
if (score >= 90) {
    cout << "A";
} else if (score >= 80) {
    cout << "B";
} else {
    cout << "C";
}
\`\`\`

## 4.2 條件運算子（短路三元）
\`\`\`cpp
int max_v = (a > b) ? a : b;   // a 大就取 a 不然取 b
\`\`\`

## 4.3 邏輯運算子
| 運算子 | Python 對應 |
|--------|------------|
| \`&&\` | and |
| \`\|\|\` | or |
| \`!\` | not |

## 4.4 switch（多分支）
\`\`\`cpp
switch (grade) {
    case 'A': cout << "Excellent"; break;
    case 'B': cout << "Good"; break;
    default: cout << "Try harder";
}
\`\`\`

> **常見錯誤**：if 只有一行可以不寫 \`{}\`，但建議都寫，避免 dangling else。

> **比較 == 與 =**：if (x = 5) 是賦值並永遠為真！要 \`==\` 才是比較。
`,
c:`
# 第 4 章：條件判斷 (C)

## 4.1 if / else
\`\`\`c
if (score >= 90) {
    printf("A");
} else if (score >= 80) {
    printf("B");
} else {
    printf("C");
}
\`\`\`

## 4.2 三元運算子
\`\`\`c
int max_v = (a > b) ? a : b;
\`\`\`

## 4.3 邏輯運算子
\`&&\`(and) \`||\`(or) \`!\`(not)

## 4.4 switch
\`\`\`c
switch (n) {
    case 1: printf("one"); break;
    case 2: printf("two"); break;
    default: printf("other");
}
\`\`\`

> **常見陷阱**：忘記 \`break\` 會 fall-through，繼續執行下一個 case。

> **C 沒 elif**！要寫 \`else if\` 兩個字。
`,
java:`
# 第 4 章：條件判斷 (Java)

## 4.1 if / else
\`\`\`java
if (score >= 90) {
    System.out.println("A");
} else if (score >= 80) {
    System.out.println("B");
} else {
    System.out.println("C");
}
\`\`\`

## 4.2 三元運算子
\`\`\`java
int max = (a > b) ? a : b;
\`\`\`

## 4.3 邏輯運算子
\`&&\` \`||\` \`!\`，跟 C++ 相同。

## 4.4 switch（Java 14+ 可用箭頭）
\`\`\`java
switch (grade) {
    case 'A' -> System.out.println("Great");
    case 'B' -> System.out.println("OK");
    default -> System.out.println("Try");
}
\`\`\`

> **字串比較陷阱**：\`s1 == s2\` 比的是物件位址不是內容！比字串內容用 \`s1.equals(s2)\`。
`
},
5:{
cpp:`
# 第 5 章：迴圈 (C++)

## 5.1 for 迴圈
\`\`\`cpp
for (int i = 0; i < 10; i++) {
    cout << i << " ";
}
// 對應 Python: for i in range(10)
\`\`\`

三段：**初始化；條件；每輪結束做的事**

## 5.2 while 迴圈
\`\`\`cpp
int n = 100;
while (n > 0) {
    cout << n << " ";
    n /= 2;
}
\`\`\`

## 5.3 range-based for（C++11+）
\`\`\`cpp
vector<int> nums = {3, 1, 4};
for (int x : nums) {
    cout << x << " ";
}
\`\`\`

## 5.4 break / continue
- \`break\` — 立刻離開迴圈
- \`continue\` — 跳到下一輪

> **巢狀 break 限制**：break 只跳出一層。要全離用 flag 或 \`goto\`（不建議）或包進函式 return。
`,
c:`
# 第 5 章：迴圈 (C)

## 5.1 for
\`\`\`c
for (int i = 0; i < 10; i++) {
    printf("%d ", i);
}
\`\`\`

## 5.2 while
\`\`\`c
int n = 100;
while (n > 0) {
    printf("%d ", n);
    n /= 2;
}
\`\`\`

## 5.3 do-while（至少跑一次）
\`\`\`c
int x;
do {
    scanf("%d", &x);
} while (x != 0);
\`\`\`

## 5.4 break / continue
跟 C++ 相同。

> **C89 限制**：for 內宣告變數要 C99 以上。老師如果用 Dev-C++ 4.x 可能要先在外面宣告。
`,
java:`
# 第 5 章：迴圈 (Java)

## 5.1 for
\`\`\`java
for (int i = 0; i < 10; i++) {
    System.out.print(i + " ");
}
\`\`\`

## 5.2 while / do-while
\`\`\`java
while (n > 0) { ... }
do { ... } while (cond);
\`\`\`

## 5.3 enhanced for（foreach）
\`\`\`java
int[] nums = {3, 1, 4};
for (int x : nums) {
    System.out.print(x + " ");
}
\`\`\`

## 5.4 break / continue + 標籤
Java 支援帶標籤的 break，可跳出多層：

\`\`\`java
outer:
for (int i = 0; i < n; i++) {
    for (int j = 0; j < m; j++) {
        if (g[i][j] == -1) break outer;
    }
}
\`\`\`
`
},
6:{
cpp:`
# 第 6 章：字串處理 (C++)

C++ 用 \`std::string\`（需要 \`#include <string>\`）

## 6.1 基本操作
\`\`\`cpp
string s = "Hello APCS";
s.length();              // 10
s.size();                // 同上
s[0];                    // 'H'
s + " Python";           // 連接
s.substr(6, 4);          // "APCS"（從 6 開始 4 個字元）
\`\`\`

## 6.2 找子字串
\`\`\`cpp
size_t p = s.find("APCS");
if (p != string::npos) cout << "found at " << p;
\`\`\`

## 6.3 反轉、大小寫
\`\`\`cpp
reverse(s.begin(), s.end());        // <algorithm>
for (auto& c : s) c = toupper(c);   // <cctype>
\`\`\`

## 6.4 切割（沒有內建 split）
要自己用 stringstream 或 substr。

\`\`\`cpp
stringstream ss(s);
string word;
while (ss >> word) {
    cout << word << "\\n";
}
\`\`\`

> **vs Python**：Python 的 \`s.split()\` 對應 stringstream 讀詞。\`s[::-1]\` 對應 \`reverse()\`。
`,
c:`
# 第 6 章：字串處理 (C)

C 沒有 string class，**字串就是字元陣列 + 結尾 \\0**。

## 6.1 宣告與長度
\`\`\`c
char s[] = "Hello";
int len = strlen(s);    // 5（不含 \\0）
\`\`\`

## 6.2 常用函式（要 <string.h>）
\`\`\`c
strlen(s);              // 長度
strcpy(dst, src);       // 複製：dst = src
strcat(a, b);           // a 後面接 b
strcmp(a, b);           // 比較：== 0 表示相同
strstr(s, "APCS");      // 找子字串，回傳指標或 NULL
\`\`\`

## 6.3 字元判斷（<ctype.h>）
\`\`\`c
isdigit(c);  isalpha(c);  isupper(c);
toupper(c);  tolower(c);
\`\`\`

> **C 字串陷阱**：
> - 不能用 \`==\` 比字串！要用 strcmp
> - 不能用 \`=\` 賦值！要用 strcpy
> - 陣列要夠大，否則溢位 crash
`,
java:`
# 第 6 章：字串處理 (Java)

Java 的 \`String\` 是 immutable（不可變）的物件。

## 6.1 基本操作
\`\`\`java
String s = "Hello APCS";
s.length();                // 10
s.charAt(0);               // 'H'
s + " Python";             // 連接
s.substring(6);            // "APCS"
s.substring(6, 10);        // "APCS"
\`\`\`

## 6.2 常用方法
\`\`\`java
s.toUpperCase();           // "HELLO APCS"
s.toLowerCase();
s.indexOf("APCS");         // 6
s.replace("APCS", "Code"); // "Hello Code"
s.split(" ");              // 切割回傳 String[]
s.trim();                  // 去頭尾空白
\`\`\`

## 6.3 反轉
\`\`\`java
String r = new StringBuilder(s).reverse().toString();
\`\`\`

## 6.4 大量字串連接用 StringBuilder
\`\`\`java
StringBuilder sb = new StringBuilder();
for (int i = 0; i < n; i++) sb.append(i).append(" ");
System.out.println(sb);
\`\`\`

> **比較字串**：\`s1.equals(s2)\` 不是 \`==\`！
`
},
7:{
cpp:`
# 第 7 章：vector（動態陣列） (C++)

C++ 的 list 對應就是 \`std::vector\`。

## 7.1 建立與操作
\`\`\`cpp
#include <vector>
vector<int> v;                 // 空
vector<int> v2 = {3, 1, 4};    // 直接給
vector<int> v3(10, 0);         // 10 個 0

v.push_back(5);                // 加到尾端
v.pop_back();                  // 移除尾端
v.size();                      // 大小
v[0];                          // 存取
\`\`\`

## 7.2 走訪
\`\`\`cpp
for (int i = 0; i < v.size(); i++) cout << v[i];
for (int x : v) cout << x;     // 簡潔版
\`\`\`

## 7.3 常用演算法（<algorithm>）
\`\`\`cpp
sort(v.begin(), v.end());                      // 排序
reverse(v.begin(), v.end());                   // 反轉
int s = accumulate(v.begin(), v.end(), 0);     // 總和 <numeric>
int mx = *max_element(v.begin(), v.end());     // 最大
int c = count(v.begin(), v.end(), 5);          // 5 出現幾次
\`\`\`

> **vs Python**：vector.push_back ↔ list.append；vector 用下標存取很快，跟陣列一樣。
`,
c:`
# 第 7 章：陣列 (C)

C 沒有動態陣列（Python 的 list），用**固定大小陣列**。

## 7.1 宣告
\`\`\`c
int a[100];                    // 100 個 int（未初始化）
int a[100] = {0};              // 全 0
int a[] = {3, 1, 4, 1, 5};     // 編譯器自動算大小
int n = sizeof(a) / sizeof(int);
\`\`\`

## 7.2 存取與走訪
\`\`\`c
a[0] = 42;
for (int i = 0; i < n; i++) printf("%d ", a[i]);
\`\`\`

## 7.3 排序（qsort）
\`\`\`c
int cmp(const void* a, const void* b){
    return *(int*)a - *(int*)b;
}
qsort(a, n, sizeof(int), cmp);
\`\`\`

## 7.4 常見運算
\`\`\`c
int sum = 0, mx = a[0];
for (int i = 0; i < n; i++) {
    sum += a[i];
    if (a[i] > mx) mx = a[i];
}
\`\`\`

> **新手陷阱**：陣列大小要編譯時就知道。需要動態大小要用 malloc：
> \`int* a = (int*)malloc(n * sizeof(int));\`
`,
java:`
# 第 7 章：陣列與 ArrayList (Java)

Java 有兩種：**固定陣列** \`int[]\` 跟 **動態 ArrayList**。

## 7.1 固定陣列
\`\`\`java
int[] a = new int[10];          // 10 個 0
int[] b = {3, 1, 4, 1, 5};      // 直接給
a.length;                       // 大小（不是 length()）
a[0] = 42;
\`\`\`

## 7.2 ArrayList（可變大小）
\`\`\`java
import java.util.*;
ArrayList<Integer> list = new ArrayList<>();
list.add(5);                    // 加到尾
list.get(0);                    // 取值
list.size();                    // 大小
list.remove(0);                 // 移除某位置
\`\`\`

## 7.3 排序
\`\`\`java
Arrays.sort(a);                 // int[]
Collections.sort(list);         // ArrayList
\`\`\`

## 7.4 常用
\`\`\`java
int sum = 0, mx = a[0];
for (int x : a) { sum += x; if (x > mx) mx = x; }
\`\`\`

> **新手陷阱**：陣列是 \`a.length\`，字串是 \`s.length()\`，注意有沒有括號！
`
},
8:{
cpp:`
# 第 8 章：二維陣列 (C++)

## 8.1 兩種建立方式
**固定陣列**：
\`\`\`cpp
int g[5][5] = {0};                // 全 0
int g[3][3] = {{1,2,3},{4,5,6},{7,8,9}};
\`\`\`

**動態 vector**：
\`\`\`cpp
vector<vector<int>> g(n, vector<int>(m, 0));   // n x m 全 0
\`\`\`

## 8.2 走訪
\`\`\`cpp
for (int i = 0; i < n; i++)
    for (int j = 0; j < m; j++)
        cout << g[i][j] << " ";
\`\`\`

## 8.3 常見模式：棋盤格
\`\`\`cpp
for (int i = 0; i < n; i++)
    for (int j = 0; j < n; j++)
        g[i][j] = (i + j) % 2;
\`\`\`

> **vs Python**：Python 的 \`[[0]*m for _ in range(n)]\` 對應 C++ 的 \`vector<vector<int>>(n, vector<int>(m, 0))\`。
`,
c:`
# 第 8 章：二維陣列 (C)

## 8.1 宣告
\`\`\`c
int g[5][5] = {0};
int g[3][3] = {{1,2,3},{4,5,6},{7,8,9}};
\`\`\`

## 8.2 走訪
\`\`\`c
for (int i = 0; i < n; i++) {
    for (int j = 0; j < m; j++)
        printf("%d ", g[i][j]);
    printf("\\n");
}
\`\`\`

## 8.3 動態二維陣列
要兩階段 malloc：

\`\`\`c
int** g = malloc(n * sizeof(int*));
for (int i = 0; i < n; i++) g[i] = malloc(m * sizeof(int));
\`\`\`

> **記憶體配置**：C 的二維陣列 \`g[i][j]\` 是連續記憶體（一塊大的），\`g[i]\` 偏移 \`i * m\` 個元素。
`,
java:`
# 第 8 章：二維陣列 (Java)

## 8.1 宣告
\`\`\`java
int[][] g = new int[5][5];           // 全 0
int[][] m = {{1,2,3},{4,5,6}};       // 直接給
g.length;                            // 列數
g[0].length;                         // 行數
\`\`\`

## 8.2 走訪
\`\`\`java
for (int i = 0; i < g.length; i++)
    for (int j = 0; j < g[i].length; j++)
        System.out.print(g[i][j] + " ");
\`\`\`

## 8.3 鋸齒陣列（每列長度不同）
\`\`\`java
int[][] g = new int[3][];
g[0] = new int[]{1};
g[1] = new int[]{1, 2};
g[2] = new int[]{1, 2, 3};
\`\`\`

> **印整個陣列**：\`Arrays.deepToString(g)\` 直接印出二維陣列內容，除錯方便。
`
},
9:{
cpp:`
# 第 9 章：函式 (C++)

## 9.1 基本格式
\`\`\`cpp
回傳型別 函式名(參數型別 參數名, ...) {
    // 內容
    return 值;
}

int add(int a, int b) {
    return a + b;
}
\`\`\`

## 9.2 沒回傳值用 void
\`\`\`cpp
void greet(string name) {
    cout << "Hello " << name;
}
\`\`\`

## 9.3 例：判斷質數
\`\`\`cpp
bool isPrime(int n) {
    if (n < 2) return false;
    for (int i = 2; i*i <= n; i++)
        if (n % i == 0) return false;
    return true;
}
\`\`\`

## 9.4 傳參考（不複製）
\`\`\`cpp
void swap(int& a, int& b) {   // & 表示參考
    int t = a; a = b; b = t;
}
\`\`\`

> **預設參數**：\`int f(int x, int n = 10)\` — 呼叫時 n 不給就是 10。

> **函式宣告順序**：被呼叫的函式必須先出現，或先在上面寫 prototype \`int add(int, int);\`
`,
c:`
# 第 9 章：函式 (C)

跟 C++ 幾乎一樣，但沒有 reference \`&\`。

## 9.1 基本格式
\`\`\`c
int add(int a, int b) {
    return a + b;
}

void greet(char* name) {
    printf("Hello %s\\n", name);
}
\`\`\`

## 9.2 例：判斷質數
\`\`\`c
int isPrime(int n) {
    if (n < 2) return 0;
    for (int i = 2; i*i <= n; i++)
        if (n % i == 0) return 0;
    return 1;
}
\`\`\`

## 9.3 想改傳入的變數要用指標
\`\`\`c
void swap(int* a, int* b) {
    int t = *a; *a = *b; *b = t;
}
// 呼叫：swap(&x, &y);
\`\`\`

> **遞迴**：跟 Python 寫法一樣，C 也支援。
`,
java:`
# 第 9 章：方法（Java 稱 method） (Java)

## 9.1 基本格式
方法要在 class 裡，APCS 都加 static：

\`\`\`java
static int add(int a, int b) {
    return a + b;
}
static void greet(String name) {
    System.out.println("Hello " + name);
}
public static void main(String[] args) {
    System.out.println(add(3, 5));
}
\`\`\`

## 9.2 例：質數
\`\`\`java
static boolean isPrime(int n) {
    if (n < 2) return false;
    for (int i = 2; i*i <= n; i++)
        if (n % i == 0) return false;
    return true;
}
\`\`\`

## 9.3 傳陣列會傳參考
Java 物件（含陣列）傳入方法後可以直接改：

\`\`\`java
static void doubleAll(int[] a) {
    for (int i = 0; i < a.length; i++) a[i] *= 2;
}
\`\`\`

> **為什麼 static？** main 是 static，static 方法只能直接呼叫 static 方法。
`
},
10:{
cpp:`
# 第 10 章：map 與 set (C++)

## 10.1 map（鍵→值）
\`\`\`cpp
#include <map>
map<string, int> cnt;
cnt["apple"] = 3;
cnt["banana"]++;          // 自動補 0 再加 1

if (cnt.count("apple")) ...   // 是否有此 key
cnt.size();                   // 不同 key 數

for (auto& p : cnt)
    cout << p.first << " " << p.second << "\\n";
\`\`\`

## 10.2 unordered_map（hash 表，更快）
\`\`\`cpp
#include <unordered_map>
unordered_map<string, int> h;
\`\`\`

差別：
- \`map\` 用紅黑樹 O(log n)，自動按 key 排序
- \`unordered_map\` 用 hash O(1) 但無序

## 10.3 set / unordered_set
\`\`\`cpp
set<int> s;
s.insert(5);
if (s.count(5)) ...        // 是否存在
\`\`\`

> **字頻統計**：
> \`\`\`cpp
> map<string, int> freq;
> string w;
> while (cin >> w) freq[w]++;
> \`\`\`
`,
c:`
# 第 10 章：簡易字典/集合 (C)

**C 沒有內建 dict 或 set**！要自己實作或用「平行陣列」近似。

## 10.1 平行陣列做字頻
\`\`\`c
char keys[100][32];   // 100 個字，每個最多 31 字元
int vals[100] = {0};
int k = 0;             // 目前有幾個不同 key

// 加入或計數
char w[32]; /* 讀進來的字 */
int found = 0;
for (int j = 0; j < k; j++)
    if (strcmp(keys[j], w) == 0) { vals[j]++; found = 1; break; }
if (!found) { strcpy(keys[k], w); vals[k] = 1; k++; }
\`\`\`

## 10.2 簡易 set（只記出現過）
跟上面類似，只是不記次數。

## 10.3 進階：自己寫 hash table
APCS 不會考，但若想學可看 CS50 課程。

> **替代方案**：
> - 如果 key 是「數字 0~10⁶」，直接用陣列當作 hash：\`int cnt[1000001] = {0}; cnt[x]++;\`
> - 這招超快、超簡單，APCS 很常用。
`,
java:`
# 第 10 章：HashMap 與 HashSet (Java)

## 10.1 HashMap
\`\`\`java
import java.util.*;
HashMap<String, Integer> cnt = new HashMap<>();
cnt.put("apple", 3);
cnt.getOrDefault("banana", 0);    // 沒有就回 0
cnt.containsKey("apple");
cnt.merge("apple", 1, Integer::sum);  // 自動 +1
cnt.size();

for (Map.Entry<String, Integer> e : cnt.entrySet())
    System.out.println(e.getKey() + " " + e.getValue());
\`\`\`

## 10.2 HashSet
\`\`\`java
HashSet<Integer> s = new HashSet<>();
s.add(5);
s.contains(5);
s.size();
\`\`\`

## 10.3 TreeMap / TreeSet（有序版）
跟 C++ 的 map/set 相同，自動按 key 排序，O(log n)。

> **字頻範例**：
> \`\`\`java
> for (String w : text.split(" "))
>     cnt.merge(w, 1, Integer::sum);
> \`\`\`
`
},
11:{
cpp:`
# 第 11 章：演算法基礎 (C++)

## 11.1 二分搜尋
\`\`\`cpp
#include <algorithm>
vector<int> a = {1, 3, 5, 7, 9};
sort(a.begin(), a.end());

bool found = binary_search(a.begin(), a.end(), 5);
auto it = lower_bound(a.begin(), a.end(), 5);  // 第一個 >= 5
int idx = it - a.begin();                       // 位置
\`\`\`

## 11.2 前綴和
\`\`\`cpp
vector<int> ps(n+1, 0);
for (int i = 0; i < n; i++) ps[i+1] = ps[i] + a[i];
// 區間 [l, r] 總和 = ps[r+1] - ps[l]
\`\`\`

## 11.3 質數篩（Sieve of Eratosthenes）
\`\`\`cpp
vector<bool> is_p(n+1, true);
is_p[0] = is_p[1] = false;
for (int i = 2; i*i <= n; i++)
    if (is_p[i])
        for (int j = i*i; j <= n; j += i) is_p[j] = false;
\`\`\`

## 11.4 GCD
\`\`\`cpp
#include <numeric>
int g = gcd(12, 18);     // C++17
// 或自己寫:
int gcd(int a, int b) { return b == 0 ? a : gcd(b, a%b); }
\`\`\`
`,
c:`
# 第 11 章：演算法基礎 (C)

## 11.1 二分搜尋
\`\`\`c
int* p = bsearch(&key, arr, n, sizeof(int), cmp);
// 找不到回 NULL，找到回指標
\`\`\`

或自己寫：
\`\`\`c
int lo = 0, hi = n - 1;
while (lo <= hi) {
    int m = (lo + hi) / 2;
    if (a[m] == key) return m;
    if (a[m] < key) lo = m + 1;
    else hi = m - 1;
}
\`\`\`

## 11.2 前綴和
\`\`\`c
int ps[N+1] = {0};
for (int i = 0; i < n; i++) ps[i+1] = ps[i] + a[i];
// a[l..r] 和 = ps[r+1] - ps[l]
\`\`\`

## 11.3 質數篩
\`\`\`c
int is_p[N+1];
for (int i = 0; i <= N; i++) is_p[i] = 1;
is_p[0] = is_p[1] = 0;
for (int i = 2; i*i <= N; i++)
    if (is_p[i])
        for (int j = i*i; j <= N; j += i) is_p[j] = 0;
\`\`\`

## 11.4 GCD
\`\`\`c
int gcd(int a, int b) { return b == 0 ? a : gcd(b, a%b); }
\`\`\`
`,
java:`
# 第 11 章：演算法基礎 (Java)

## 11.1 二分搜尋
\`\`\`java
int[] a = {1, 3, 5, 7, 9};
Arrays.sort(a);
int idx = Arrays.binarySearch(a, 5);   // 找到回 index，找不到回負值
\`\`\`

## 11.2 前綴和
\`\`\`java
int[] ps = new int[n+1];
for (int i = 0; i < n; i++) ps[i+1] = ps[i] + a[i];
\`\`\`

## 11.3 質數篩
\`\`\`java
boolean[] isP = new boolean[N+1];
Arrays.fill(isP, true);
isP[0] = isP[1] = false;
for (int i = 2; i*i <= N; i++)
    if (isP[i])
        for (int j = i*i; j <= N; j += i) isP[j] = false;
\`\`\`

## 11.4 GCD
\`\`\`java
static int gcd(int a, int b) { return b == 0 ? a : gcd(b, a%b); }
\`\`\`
`
},
12:{
cpp:`
# 第 12 章：巢狀迴圈 (C++)

## 12.1 模式：外固定、內變動
\`\`\`cpp
for (int i = 0; i < n; i++) {       // 外
    for (int j = 0; j < n; j++) {    // 內
        // 對每組 (i, j) 做事
    }
}
\`\`\`
總共執行 \`n × n = n²\` 次。

## 12.2 巴斯卡三角形
\`\`\`cpp
int g[10][10] = {0};
for (int i = 0; i < n; i++) {
    g[i][0] = 1;
    g[i][i] = 1;
}
for (int i = 2; i < n; i++)
    for (int j = 1; j < i; j++)
        g[i][j] = g[i-1][j-1] + g[i-1][j];
\`\`\`

## 12.3 提早離開最內層
\`\`\`cpp
for (int i = 0; i < n; i++) {
    for (int j = 0; j < n; j++) {
        if (g[i][j] == target) { found = true; break; }
    }
    if (found) break;   // 再 break 一次跳外層
}
\`\`\`

> **複雜度警示**：三層巢狀 \`n=100\` 已是 10⁶ 次，APCS 一秒約跑 10⁸，估算好範圍。
`,
c:`
# 第 12 章：巢狀迴圈 (C)

跟 C++ 完全相同。

## 12.1 雙層 for
\`\`\`c
for (int i = 0; i < n; i++)
    for (int j = 0; j < n; j++)
        // do something with (i, j)
\`\`\`

## 12.2 巴斯卡三角形
\`\`\`c
int g[10][10] = {0};
for (int i = 0; i < n; i++) { g[i][0] = 1; g[i][i] = 1; }
for (int i = 2; i < n; i++)
    for (int j = 1; j < i; j++)
        g[i][j] = g[i-1][j-1] + g[i-1][j];
\`\`\`

## 12.3 跳出多層
C 可用 goto（不推薦但可行）：

\`\`\`c
for (...) {
    for (...) {
        if (cond) goto done;
    }
}
done:
\`\`\`

或用 flag 變數。
`,
java:`
# 第 12 章：巢狀迴圈 (Java)

## 12.1 雙層 for
\`\`\`java
for (int i = 0; i < n; i++)
    for (int j = 0; j < n; j++)
        // ...
\`\`\`

## 12.2 巴斯卡三角形
\`\`\`java
int[][] g = new int[n][n];
for (int i = 0; i < n; i++) { g[i][0] = 1; g[i][i] = 1; }
for (int i = 2; i < n; i++)
    for (int j = 1; j < i; j++)
        g[i][j] = g[i-1][j-1] + g[i-1][j];
\`\`\`

## 12.3 帶標籤的 break（跳多層）
Java 特色：

\`\`\`java
outer:
for (int i = 0; i < n; i++) {
    for (int j = 0; j < n; j++) {
        if (g[i][j] == target) break outer;
    }
}
\`\`\`
`
},
13:{
cpp:`
# 第 13 章：STL Algorithm 進階 (C++)

C++ 沒有 list comprehension，但有強大的 \`<algorithm>\` 庫。

## 13.1 transform（對應 map）
\`\`\`cpp
vector<int> a = {1, 2, 3};
vector<int> b(a.size());
transform(a.begin(), a.end(), b.begin(), [](int x){ return x*x; });
// b = {1, 4, 9}
\`\`\`

## 13.2 copy_if（對應 filter）
\`\`\`cpp
vector<int> evens;
copy_if(a.begin(), a.end(), back_inserter(evens),
        [](int x){ return x % 2 == 0; });
\`\`\`

## 13.3 accumulate（reduce）
\`\`\`cpp
int sum_sq = accumulate(a.begin(), a.end(), 0,
                        [](int s, int x){ return s + x*x; });
\`\`\`

## 13.4 lambda 語法
\`[捕獲](參數){ 內容 }\`

\`\`\`cpp
auto f = [](int x){ return x * 2; };
f(5);    // 10
\`\`\`
`,
c:`
# 第 13 章：迴圈模式 (C)

C **完全沒有** list comprehension / lambda / STL，全部用迴圈。

## 13.1 篩選 + 轉換
\`\`\`c
int result[100], cnt = 0;
for (int i = 0; i < n; i++) {
    if (a[i] % 2 == 0) {              // 篩
        result[cnt++] = a[i] * a[i];  // 轉換並存
    }
}
\`\`\`

## 13.2 求和帶條件
\`\`\`c
int sum = 0;
for (int i = 0; i < n; i++)
    if (a[i] > 0) sum += a[i];
\`\`\`

## 13.3 找最大
\`\`\`c
int mx = a[0], idx = 0;
for (int i = 1; i < n; i++)
    if (a[i] > mx) { mx = a[i]; idx = i; }
\`\`\`

> **C 的哲學**：清楚、直接，所有操作都看得到。雖然啰嗦但容易除錯。
`,
java:`
# 第 13 章：Stream API (Java)

Java 8+ 的 Stream API 很像 Python 的 list comprehension。

## 13.1 map / filter / collect
\`\`\`java
import java.util.stream.*;
int[] a = {1, 2, 3, 4, 5};
int[] sq = Arrays.stream(a).map(x -> x*x).toArray();
int[] even = Arrays.stream(a).filter(x -> x % 2 == 0).toArray();
\`\`\`

## 13.2 reduce / sum
\`\`\`java
int sum = Arrays.stream(a).sum();
int sumSq = Arrays.stream(a).map(x -> x*x).sum();
\`\`\`

## 13.3 List 版
\`\`\`java
List<Integer> nums = Arrays.asList(1, 2, 3, 4, 5);
List<Integer> doubled = nums.stream()
    .map(x -> x * 2)
    .collect(Collectors.toList());
\`\`\`

> **APCS 實戰**：Stream 很慢，比賽用普通 for 迴圈即可，Stream 只在程式碼簡潔需求高時用。
`
},
14:{
cpp:`
# 第 14 章：排序進階 (C++)

## 14.1 自訂比較函式
\`\`\`cpp
struct Student { string name; int score, age; };
vector<Student> v;

sort(v.begin(), v.end(), [](const Student& a, const Student& b){
    if (a.score != b.score) return a.score > b.score;   // 分數降冪
    return a.age < b.age;                                // 年齡升冪
});
\`\`\`

## 14.2 pair 排序（預設按 first，再 second）
\`\`\`cpp
vector<pair<int, int>> v = {{3, 1}, {1, 2}, {3, 0}};
sort(v.begin(), v.end());
// 結果: (1,2), (3,0), (3,1)
\`\`\`

## 14.3 降冪一招
\`\`\`cpp
sort(v.begin(), v.end(), greater<int>());
\`\`\`

## 14.4 部分排序
\`\`\`cpp
partial_sort(v.begin(), v.begin()+3, v.end());   // 前 3 名排好
nth_element(v.begin(), v.begin()+k, v.end());    // 找第 k 名
\`\`\`
`,
c:`
# 第 14 章：qsort 進階 (C)

## 14.1 自訂 cmp
\`\`\`c
typedef struct { char name[20]; int score, age; } S;

int cmp(const void* a, const void* b) {
    const S* x = a; const S* y = b;
    if (x->score != y->score) return y->score - x->score;  // 分數降冪
    return x->age - y->age;                                 // 年齡升冪
}

S arr[100];
qsort(arr, n, sizeof(S), cmp);
\`\`\`

## 14.2 cmp 回傳值的含意
- 回傳 **負數**：a 排在 b **前面**
- 回傳 **正數**：a 排在 b **後面**
- 回傳 **0**：順序不變

## 14.3 注意：用減法可能溢位
\`\`\`c
// 危險：a - b 可能溢位
int cmp(const void* a, const void* b) {
    return *(int*)a - *(int*)b;  // 兩個都是大負數時會錯
}

// 安全寫法
int cmp(const void* a, const void* b) {
    int x = *(int*)a, y = *(int*)b;
    return (x > y) - (x < y);
}
\`\`\`
`,
java:`
# 第 14 章：排序進階 (Java)

## 14.1 Comparator with lambda
\`\`\`java
int[][] students = {{0,85,17},{1,92,16},{2,85,18}};

Arrays.sort(students, (a, b) -> {
    if (a[1] != b[1]) return b[1] - a[1];  // 分數降冪
    return a[2] - b[2];                     // 年齡升冪
});
\`\`\`

## 14.2 List 排序
\`\`\`java
List<Student> list = new ArrayList<>();
list.sort(Comparator.comparingInt((Student s) -> -s.score)
                    .thenComparingInt(s -> s.age));
\`\`\`

## 14.3 字串排序
\`\`\`java
String[] names = {"Bob", "Alice", "Cara"};
Arrays.sort(names);                          // 字典序
Arrays.sort(names, Comparator.reverseOrder()); // 反向
\`\`\`

> **常見錯誤**：對 int[][] 的排序要用 \`Arrays.sort(arr, comparator)\`；對基本型別陣列如 \`int[]\` **不能**指定 Comparator！要先轉成 \`Integer[]\`。
`
},
15:{
cpp:`
# 第 15 章：遞迴入門 (C++)

## 15.1 階乘
\`\`\`cpp
int fact(int n) {
    if (n <= 1) return 1;          // base case
    return n * fact(n - 1);        // recurse
}
\`\`\`

## 15.2 費氏數列
\`\`\`cpp
int fib(int n) {
    if (n <= 1) return n;
    return fib(n-1) + fib(n-2);
}
// 注意：fib(40) 已經很慢，要記憶化
\`\`\`

## 15.3 N 皇后回溯
\`\`\`cpp
int N, cnt;
void solve(int row, int cols, int d1, int d2) {
    if (row == N) { cnt++; return; }
    for (int c = 0; c < N; c++) {
        int cb = 1 << c, d1b = 1 << (row-c+N), d2b = 1 << (row+c);
        if (cols & cb || d1 & d1b || d2 & d2b) continue;
        solve(row+1, cols|cb, d1|d1b, d2|d2b);
    }
}
\`\`\`

> **遞迴深度限制**：預設約 1MB 堆疊，太深會 stack overflow，深度 > 10⁵ 改迭代。
`,
c:`
# 第 15 章：遞迴入門 (C)

跟 C++ 寫法完全相同。

## 15.1 階乘
\`\`\`c
int fact(int n) {
    if (n <= 1) return 1;
    return n * fact(n - 1);
}
\`\`\`

## 15.2 費氏
\`\`\`c
int fib(int n) {
    if (n <= 1) return n;
    return fib(n-1) + fib(n-2);
}
\`\`\`

## 15.3 漢諾塔
\`\`\`c
void hanoi(int n, char from, char to, char via) {
    if (n == 1) { printf("%c -> %c\\n", from, to); return; }
    hanoi(n-1, from, via, to);
    printf("%c -> %c\\n", from, to);
    hanoi(n-1, via, to, from);
}
\`\`\`

> **遞迴的核心**：
> 1. 終止條件（base case）
> 2. 縮小問題後呼叫自己
> 3. 合併子結果
`,
java:`
# 第 15 章：遞迴入門 (Java)

## 15.1 階乘
\`\`\`java
static int fact(int n) {
    if (n <= 1) return 1;
    return n * fact(n - 1);
}
\`\`\`

## 15.2 費氏（記憶化版）
\`\`\`java
static int[] memo = new int[100];
static int fib(int n) {
    if (n <= 1) return n;
    if (memo[n] != 0) return memo[n];
    return memo[n] = fib(n-1) + fib(n-2);
}
\`\`\`

## 15.3 N 皇后
\`\`\`java
static int N, cnt;
static void solve(int row, int cols, int d1, int d2) {
    if (row == N) { cnt++; return; }
    for (int c = 0; c < N; c++) {
        int cb = 1 << c, d1b = 1 << (row-c+N), d2b = 1 << (row+c);
        if ((cols & cb) != 0 || (d1 & d1b) != 0 || (d2 & d2b) != 0) continue;
        solve(row+1, cols|cb, d1|d1b, d2|d2b);
    }
}
\`\`\`

> **Java 遞迴深度**：預設 JVM 堆疊 512KB，約 10000 層。
`
},
16:{
cpp:`
# 第 16 章：枚舉題型 (C++)

## 16.1 位元遮罩枚舉所有子集
\`\`\`cpp
int n = 5;
for (int mask = 0; mask < (1 << n); mask++) {
    for (int i = 0; i < n; i++) {
        if (mask & (1 << i)) {
            // i 在這個子集裡
        }
    }
}
\`\`\`

## 16.2 排列枚舉
\`\`\`cpp
vector<int> v = {1, 2, 3};
do {
    for (int x : v) cout << x << " ";
    cout << "\\n";
} while (next_permutation(v.begin(), v.end()));
\`\`\`

## 16.3 雙層巢狀枚舉所有 pair
\`\`\`cpp
for (int i = 0; i < n; i++)
    for (int j = i+1; j < n; j++)
        // (a[i], a[j])
\`\`\`

> **枚舉適用範圍**：
> - 子集：n ≤ 20（2²⁰ ≈ 100 萬）
> - 排列：n ≤ 8（8! = 40320）
> - Pair：n ≤ 10⁴（n² = 10⁸）
`,
c:`
# 第 16 章：枚舉題型 (C)

## 16.1 位元枚舉子集
\`\`\`c
for (int mask = 0; mask < (1 << n); mask++) {
    int sum = 0;
    for (int i = 0; i < n; i++)
        if (mask & (1 << i)) sum += a[i];
    if (sum == target) {
        // 找到一組
    }
}
\`\`\`

## 16.2 位元運算口訣
- \`1 << i\` — 只有第 i 位為 1
- \`mask & (1 << i)\` — 檢查第 i 位
- \`mask | (1 << i)\` — 把第 i 位設為 1
- \`mask ^ (1 << i)\` — 翻轉第 i 位
- \`__builtin_popcount(mask)\` — 算 1 的個數（GCC）

## 16.3 雙層枚舉
\`\`\`c
for (int i = 0; i < n; i++)
    for (int j = i+1; j < n; j++)
        if (a[i] + a[j] == target) cnt++;
\`\`\`
`,
java:`
# 第 16 章：枚舉題型 (Java)

## 16.1 位元枚舉子集
\`\`\`java
int n = 5;
for (int mask = 0; mask < (1 << n); mask++) {
    int sum = 0;
    for (int i = 0; i < n; i++) {
        if ((mask & (1 << i)) != 0) sum += nums[i];
    }
    if (sum == target) /* 找到 */;
}
\`\`\`

> **Java 陷阱**：\`mask & (1 << i)\` 結果不是 boolean！必須寫 \`!= 0\`：
> \`if ((mask & (1 << i)) != 0)\` 不能寫 \`if (mask & (1 << i))\`

## 16.2 算 1 的個數
\`Integer.bitCount(mask)\` 直接給你 mask 二進位中 1 的個數。

## 16.3 雙層枚舉
\`\`\`java
for (int i = 0; i < n; i++)
    for (int j = i+1; j < n; j++)
        if (a[i] + a[j] == target) cnt++;
\`\`\`
`
},
17:{
cpp:`
# 第 17 章：進階資料結構 (C++)

## 17.1 deque（雙端佇列）
\`\`\`cpp
#include <deque>
deque<int> dq;
dq.push_back(1);   dq.push_front(0);
dq.pop_back();     dq.pop_front();
dq.front();        dq.back();
\`\`\`

## 17.2 priority_queue（堆）
\`\`\`cpp
#include <queue>
priority_queue<int> maxH;             // 預設最大堆
priority_queue<int, vector<int>, greater<int>> minH;  // 最小堆
maxH.push(5);
maxH.top();   // 看最大
maxH.pop();   // 移除最大
\`\`\`

## 17.3 stack
\`\`\`cpp
stack<int> stk;
stk.push(5);  stk.top();  stk.pop();
\`\`\`

## 17.4 queue
\`\`\`cpp
queue<int> q;
q.push(5);  q.front();  q.pop();
\`\`\`

> **適用場景**：
> - BFS 用 queue
> - DFS / 括號配對用 stack
> - Top-K / Dijkstra 用 priority_queue
`,
c:`
# 第 17 章：進階資料結構 (C)

C 沒有原生堆/佇列，要自己實作或用陣列模擬。

## 17.1 用陣列模擬 stack
\`\`\`c
int stk[1000], top = 0;
stk[top++] = x;       // push
int v = stk[--top];   // pop
int peek = stk[top-1]; // peek
\`\`\`

## 17.2 用陣列模擬 queue（循環）
\`\`\`c
int q[1000], head = 0, tail = 0;
q[tail++] = x;        // enqueue
int v = q[head++];    // dequeue
int size = tail - head;
\`\`\`

## 17.3 取前 K 大 / 小（用 sort）
\`\`\`c
qsort(a, n, sizeof(int), cmp);
// 前 K 小：a[0..K-1]
// 前 K 大：a[n-K..n-1]
\`\`\`

> **APCS 替代法**：資料量小的話直接 sort + 切片就解決，不用自己寫 heap。
`,
java:`
# 第 17 章：進階資料結構 (Java)

## 17.1 Deque（兩端都可）
\`\`\`java
Deque<Integer> dq = new ArrayDeque<>();
dq.offerLast(1);   dq.offerFirst(0);
dq.pollLast();     dq.pollFirst();
dq.peekFirst();
\`\`\`

## 17.2 PriorityQueue（預設最小堆）
\`\`\`java
PriorityQueue<Integer> minH = new PriorityQueue<>();
PriorityQueue<Integer> maxH = new PriorityQueue<>(Comparator.reverseOrder());
minH.offer(5);
minH.peek();   // 最小
minH.poll();   // 移除最小
\`\`\`

## 17.3 Stack / Queue
\`\`\`java
Deque<Integer> stk = new ArrayDeque<>();
stk.push(5);  stk.peek();  stk.pop();

Queue<Integer> q = new LinkedList<>();
q.offer(5);  q.peek();  q.poll();
\`\`\`

> **Java 提示**：不要用古老的 \`Stack\` class！用 \`ArrayDeque\` 當 stack，速度快很多。
`
},
18:{
cpp:`
# 第 18 章：常見錯誤與除錯 (C++)

## 18.1 整數溢位
\`\`\`cpp
int n = 100000;
int s = n * n;         // 10¹⁰ 超出 int 上限！
long long s = (long long)n * n;   // 對
\`\`\`

## 18.2 陣列越界（segmentation fault）
\`\`\`cpp
int a[10];
a[10] = 5;             // 越界！未定義行為
for (int i = 0; i <= n; i++) ...   // 通常該 < n
\`\`\`

## 18.3 未初始化變數
\`\`\`cpp
int sum;               // 內含垃圾值！
sum += a[i];           // 結果亂掉
int sum = 0;           // 對
\`\`\`

## 18.4 vector 越界用 .at()
開發時用 \`v.at(i)\` 代替 \`v[i]\`，越界會丟例外而不是 crash。

## 18.5 除錯三招
1. 把中間結果 \`cout\` 出來
2. 用小輸入手算驗證
3. 用 \`assert(condition)\` 卡住預期不該發生的狀態
`,
c:`
# 第 18 章：常見錯誤與除錯 (C)

## 18.1 scanf 忘記 &
\`\`\`c
int n;
scanf("%d", n);    // ❌ 會 crash
scanf("%d", &n);   // ✅
\`\`\`

## 18.2 字串緩衝區不夠大
\`\`\`c
char s[10];
strcpy(s, "Hello, world!");   // ❌ 12 個字元，溢位
char s[100];                   // ✅ 留多一點
\`\`\`

## 18.3 整數溢位
\`\`\`c
int n = 100000;
long long s = (long long)n * n;   // 要先轉型
\`\`\`

## 18.4 未初始化變數
\`\`\`c
int sum = 0;     // 一定要給初值
int arr[100] = {0};   // 陣列也要
\`\`\`

## 18.5 記憶體洩漏
\`\`\`c
int* p = malloc(n * sizeof(int));
// ... 用完
free(p);         // 不釋放會洩漏
\`\`\`

> **常見錯誤訊息**：
> - Segmentation fault → 通常陣列越界或空指標
> - Stack smashing → 局部陣列溢位
`,
java:`
# 第 18 章：常見錯誤與除錯 (Java)

## 18.1 NullPointerException
\`\`\`java
String s = null;
s.length();             // ❌ NPE
if (s != null) s.length();
\`\`\`

## 18.2 ArrayIndexOutOfBoundsException
\`\`\`java
int[] a = new int[10];
a[10] = 5;              // ❌ 索引 0~9
for (int i = 0; i <= n; i++) ...   // 通常該 < n
\`\`\`

## 18.3 字串比較用錯
\`\`\`java
String a = "abc", b = "abc";
if (a == b) ...         // ❌ 比的是位址
if (a.equals(b)) ...    // ✅ 比內容
\`\`\`

## 18.4 整數溢位
\`\`\`java
int n = 100000;
long s = (long)n * n;   // 要先轉
\`\`\`

## 18.5 除錯
\`\`\`java
System.out.println("debug: i=" + i + " val=" + val);
assert val > 0 : "val must be positive";
\`\`\`
`
},
19:{
cpp:`
# 第 19 章：綜合練習 — Kadane (C++)

## 19.1 最大連續子陣列和
\`\`\`cpp
vector<int> a = {-2, 1, -3, 4, -1, 2, 1, -5, 4};
int cur = a[0], best = a[0];
for (size_t i = 1; i < a.size(); i++) {
    cur = max((int)a[i], cur + a[i]);  // 重啟 or 延續
    best = max(best, cur);
}
cout << best;   // 6 (from [4,-1,2,1])
\`\`\`

## 19.2 帶位置記錄
\`\`\`cpp
int cur = a[0], best = a[0];
int l = 0, r = 0, tmpL = 0;
for (int i = 1; i < n; i++) {
    if (a[i] > cur + a[i]) { cur = a[i]; tmpL = i; }
    else cur += a[i];
    if (cur > best) { best = cur; l = tmpL; r = i; }
}
\`\`\`

## 19.3 變形：環狀最大和
\`\`\`cpp
// 答案 = max(普通 Kadane, 總和 - 最小子陣列和)
\`\`\`
`,
c:`
# 第 19 章：綜合練習 — Kadane (C)

## 19.1 最大連續子陣列和
\`\`\`c
int a[] = {-2, 1, -3, 4, -1, 2, 1, -5, 4};
int n = 9;
int cur = a[0], best = a[0];
for (int i = 1; i < n; i++) {
    cur = (a[i] > cur + a[i]) ? a[i] : cur + a[i];
    if (cur > best) best = cur;
}
printf("%d\\n", best);
\`\`\`

## 19.2 全負陣列要注意
題目通常規定「至少選一個」，所以初始 \`cur = best = a[0]\` 而非 0。

## 19.3 時間複雜度
O(n) — 只跑一次陣列。

> **Kadane 的精神**：每一格決定「從這裡重新開始」還是「延續前面的」。永遠記得目前最佳的 \`best\`。
`,
java:`
# 第 19 章：綜合練習 — Kadane (Java)

## 19.1 最大連續子陣列和
\`\`\`java
int[] a = {-2, 1, -3, 4, -1, 2, 1, -5, 4};
int cur = a[0], best = a[0];
for (int i = 1; i < a.length; i++) {
    cur = Math.max(a[i], cur + a[i]);
    best = Math.max(best, cur);
}
System.out.println(best);
\`\`\`

## 19.2 為什麼這樣對？
**DP 思路**：\`dp[i]\` = 以 i 結尾的最大連續和。
- 要嘛只取 \`a[i]\`（前面全丟）
- 要嘛接上 \`dp[i-1] + a[i]\`

取較大的，然後追蹤全局最大。

## 19.3 變形題
- 二維 Kadane（最大子矩陣和）— 列上跑 Kadane + 外層枚舉行區間，O(n³)
- 不超過 K 個元素的最大和 — 滑動視窗
`
},
20:{
cpp:`
# 第 20 章：APCS 實戰技巧 (C++)

## 20.1 加速 I/O
APCS 大資料時務必加：
\`\`\`cpp
ios::sync_with_stdio(false);
cin.tie(0);
\`\`\`

## 20.2 常用 STL 速查
| 功能 | STL |
|------|-----|
| 動態陣列 | \`vector\` |
| 排序 | \`sort(v.begin(), v.end())\` |
| 二分搜 | \`lower_bound\`, \`upper_bound\` |
| 對映 | \`map\`, \`unordered_map\` |
| 集合 | \`set\`, \`unordered_set\` |
| 堆 | \`priority_queue\` |
| 字串切 | \`stringstream\` |

## 20.3 成績指標範例
\`\`\`cpp
int n; cin >> n;
vector<int> scores(n);
for (auto& s : scores) cin >> s;
sort(scores.begin(), scores.end());
for (int i = 0; i < n; i++) cout << scores[i] << " \\n"[i==n-1];
int hf = -1, lp = -1;
for (int s : scores) {
    if (s < 60) hf = s;
    else if (lp == -1) lp = s;
}
cout << (hf == -1 ? "best case" : to_string(hf)) << "\\n";
cout << (lp == -1 ? "worst case" : to_string(lp)) << "\\n";
\`\`\`

> **考前清單**：
> ✅ \`vector / sort / map\` 熟練
> ✅ DP / DFS / BFS 基本模板
> ✅ 邊界條件多想（n=0, n=1, 全相同）
`,
c:`
# 第 20 章：APCS 實戰技巧 (C)

## 20.1 I/O 已經夠快
scanf/printf 在 C 已是最快，不用特別調。

## 20.2 必備函式速查
| 功能 | 標頭檔 |
|------|--------|
| 排序 | qsort (stdlib.h) |
| 字串 | strcpy/strlen/strcmp (string.h) |
| 字元 | isdigit/isalpha (ctype.h) |
| 數學 | sqrt/pow/abs (math.h，連結 -lm) |
| 記憶體 | malloc/free (stdlib.h) |

## 20.3 成績指標範例
\`\`\`c
int n; scanf("%d", &n);
int s[1000];
for (int i = 0; i < n; i++) scanf("%d", &s[i]);
qsort(s, n, sizeof(int), cmp);
for (int i = 0; i < n; i++) printf("%d%c", s[i], i==n-1 ? '\\n':' ');
int hf = -1, lp = -1;
for (int i = 0; i < n; i++) {
    if (s[i] < 60) hf = s[i];
    else if (lp == -1) lp = s[i];
}
if (hf == -1) printf("best case\\n"); else printf("%d\\n", hf);
if (lp == -1) printf("worst case\\n"); else printf("%d\\n", lp);
\`\`\`

> **考前清單**：
> ✅ qsort 用 cmp 寫熟
> ✅ 陣列大小開夠（題目給 10⁵ 就開 100005）
> ✅ 一律 \`long long\` 防溢位
`,
java:`
# 第 20 章：APCS 實戰技巧 (Java)

## 20.1 加速輸入（重要！）
Scanner 在大資料下會 TLE：
\`\`\`java
BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
int n = Integer.parseInt(br.readLine().trim());
StringTokenizer st = new StringTokenizer(br.readLine());
int a = Integer.parseInt(st.nextToken());
\`\`\`

## 20.2 加速輸出
\`\`\`java
StringBuilder sb = new StringBuilder();
for (...) sb.append(x).append(' ');
System.out.print(sb);
\`\`\`

## 20.3 成績指標範例
\`\`\`java
Scanner sc = new Scanner(System.in);
int n = sc.nextInt();
int[] s = new int[n];
for (int i = 0; i < n; i++) s[i] = sc.nextInt();
Arrays.sort(s);
StringBuilder sb = new StringBuilder();
for (int i = 0; i < n; i++) {
    if (i > 0) sb.append(' ');
    sb.append(s[i]);
}
System.out.println(sb);
int hf = -1, lp = -1;
for (int x : s) {
    if (x < 60) hf = x;
    else if (lp == -1) lp = x;
}
System.out.println(hf == -1 ? "best case" : hf);
System.out.println(lp == -1 ? "worst case" : lp);
\`\`\`

> **考前清單**：
> ✅ BufferedReader 寫熟
> ✅ Arrays.sort / HashMap / ArrayDeque 熟練
> ✅ 用 \`long\` 防溢位
`
},
21:{
cpp:`
# 第 21 章：樹的走訪 (C++)

樹是沒有環的連通圖。APCS 常見考法是「父子關係、走訪順序、子樹大小」。

## 21.1 存樹
\`\`\`cpp
vector<vector<int>> child(n);  // child[u] 存 u 的所有孩子
child[0] = {1, 2};
child[1] = {3, 4};
\`\`\`

若題目給的是無向邊，就用鄰接表再帶 parent 避免走回去。

## 21.2 DFS 算子樹大小
\`\`\`cpp
vector<int> sz(n, 1);
int dfs(int u) {
    for (int v : child[u])
        sz[u] += dfs(v);
    return sz[u];
}
\`\`\`

## 21.3 前序 / 後序
- 前序：先處理自己，再處理孩子。
- 後序：先處理孩子，再回來整理自己。

子樹大小、樹 DP 多半是後序，因為你要先知道孩子的答案。
`,
c:`
# 第 21 章：樹的走訪 (C)

C 沒有 vector，APCS 小樹可以用固定陣列存孩子。

## 21.1 固定陣列版 children
\`\`\`c
int child[100][100], cnt[100] = {0};
child[0][cnt[0]++] = 1;
child[0][cnt[0]++] = 2;
child[1][cnt[1]++] = 3;
child[1][cnt[1]++] = 4;
\`\`\`

## 21.2 DFS 算子樹大小
\`\`\`c
int sz[100];
int dfs(int u) {
    sz[u] = 1;
    for (int i = 0; i < cnt[u]; i++) {
        int v = child[u][i];
        sz[u] += dfs(v);
    }
    return sz[u];
}
\`\`\`

## 21.3 C 的重點
- 陣列大小要開夠。
- 遞迴深度太深可能 stack overflow。
- 如果是無向樹，DFS 參數要加 parent。
`,
java:`
# 第 21 章：樹的走訪 (Java)

Java 用 \`ArrayList<Integer>[]\` 存樹，走訪邏輯和 C++ 幾乎一樣。

## 21.1 建 children
\`\`\`java
ArrayList<Integer>[] child = new ArrayList[n];
for (int i = 0; i < n; i++) child[i] = new ArrayList<>();
child[0].add(1);
child[0].add(2);
child[1].add(3);
child[1].add(4);
\`\`\`

## 21.2 DFS 算子樹大小
\`\`\`java
static ArrayList<Integer>[] child;
static int[] sz;

static int dfs(int u) {
    sz[u] = 1;
    for (int v : child[u]) sz[u] += dfs(v);
    return sz[u];
}
\`\`\`

## 21.3 實戰提醒
節點很多時，Java 遞迴可能爆 stack；若深度可能到 10^5，就改成迭代 stack 或調 JVM stack。
`
},
22:{
cpp:`
# 第 22 章：圖論 BFS / DFS (C++)

圖用鄰接表存，BFS 求等權最短距離，DFS 找連通分量。

## 22.1 鄰接表
\`\`\`cpp
vector<vector<int>> g(n);
g[u].push_back(v);
g[v].push_back(u);  // 無向圖要加兩邊
\`\`\`

## 22.2 BFS 最短步數
\`\`\`cpp
vector<int> dist(n, -1);
queue<int> q;
dist[s] = 0;
q.push(s);
while (!q.empty()) {
    int u = q.front(); q.pop();
    for (int v : g[u]) if (dist[v] == -1) {
        dist[v] = dist[u] + 1;
        q.push(v);
    }
}
\`\`\`

## 22.3 DFS 連通分量
\`\`\`cpp
void dfs(int u) {
    vis[u] = true;
    for (int v : g[u]) if (!vis[v]) dfs(v);
}
\`\`\`
`,
c:`
# 第 22 章：圖論 BFS / DFS (C)

C 可以用「邊表 + head」存鄰接表，也可以在小圖用二維陣列。這裡先用固定陣列版。

## 22.1 固定陣列鄰接表
\`\`\`c
int g[100][100], deg[100] = {0};
g[u][deg[u]++] = v;
g[v][deg[v]++] = u;
\`\`\`

## 22.2 BFS
\`\`\`c
int q[100], head = 0, tail = 0;
int dist[100];
for (int i = 0; i < n; i++) dist[i] = -1;
dist[s] = 0;
q[tail++] = s;
while (head < tail) {
    int u = q[head++];
    for (int i = 0; i < deg[u]; i++) {
        int v = g[u][i];
        if (dist[v] == -1) {
            dist[v] = dist[u] + 1;
            q[tail++] = v;
        }
    }
}
\`\`\`

## 22.3 DFS
DFS 用遞迴或 stack 都可；大圖建議改迭代避免 stack overflow。
`,
java:`
# 第 22 章：圖論 BFS / DFS (Java)

Java 用 \`ArrayList<Integer>[]\` 存圖，用 \`ArrayDeque<Integer>\` 當 BFS queue。

## 22.1 鄰接表
\`\`\`java
ArrayList<Integer>[] g = new ArrayList[n];
for (int i = 0; i < n; i++) g[i] = new ArrayList<>();
g[u].add(v);
g[v].add(u);
\`\`\`

## 22.2 BFS
\`\`\`java
int[] dist = new int[n];
Arrays.fill(dist, -1);
ArrayDeque<Integer> q = new ArrayDeque<>();
dist[s] = 0;
q.offer(s);
while (!q.isEmpty()) {
    int u = q.poll();
    for (int v : g[u]) if (dist[v] == -1) {
        dist[v] = dist[u] + 1;
        q.offer(v);
    }
}
\`\`\`

## 22.3 DFS
\`\`\`java
static void dfs(int u) {
    vis[u] = true;
    for (int v : g[u]) if (!vis[v]) dfs(v);
}
\`\`\`
`
},
23:{
cpp:`
# 第 23 章：最短路徑與拓樸 (C++)

有權非負圖用 Dijkstra，DAG 順序問題用拓樸排序。

## 23.1 Dijkstra
\`\`\`cpp
vector<vector<pair<int,int>>> g(n);  // (to, weight)
priority_queue<pair<int,int>, vector<pair<int,int>>, greater<pair<int,int>>> pq;
vector<int> dist(n, INF);
dist[s] = 0;
pq.push({0, s});
while (!pq.empty()) {
    auto [d, u] = pq.top(); pq.pop();
    if (d != dist[u]) continue;
    for (auto [v, w] : g[u]) {
        if (d + w < dist[v]) {
            dist[v] = d + w;
            pq.push({dist[v], v});
        }
    }
}
\`\`\`

## 23.2 拓樸排序
\`\`\`cpp
queue<int> q;
for (int i = 0; i < n; i++) if (indeg[i] == 0) q.push(i);
while (!q.empty()) {
    int u = q.front(); q.pop();
    order.push_back(u);
    for (int v : g[u]) if (--indeg[v] == 0) q.push(v);
}
\`\`\`
`,
c:`
# 第 23 章：最短路徑與拓樸 (C)

C 沒有內建 heap；若圖不大，可以先用 O(n²) Dijkstra。APCS 初學階段先掌握概念最重要。

## 23.1 O(n²) Dijkstra
\`\`\`c
for (int i = 0; i < n; i++) dist[i] = INF;
dist[s] = 0;
for (int step = 0; step < n; step++) {
    int u = -1;
    for (int i = 0; i < n; i++)
        if (!used[i] && (u == -1 || dist[i] < dist[u])) u = i;
    used[u] = 1;
    for (int v = 0; v < n; v++)
        if (w[u][v] < INF && dist[u] + w[u][v] < dist[v])
            dist[v] = dist[u] + w[u][v];
}
\`\`\`

## 23.2 拓樸排序
\`\`\`c
int q[100], head = 0, tail = 0;
for (int i = 0; i < n; i++) if (indeg[i] == 0) q[tail++] = i;
while (head < tail) {
    int u = q[head++];
    for (int i = 0; i < deg[u]; i++) {
        int v = g[u][i];
        if (--indeg[v] == 0) q[tail++] = v;
    }
}
\`\`\`
`,
java:`
# 第 23 章：最短路徑與拓樸 (Java)

Java 的 \`PriorityQueue\` 很適合寫 Dijkstra。

## 23.1 Dijkstra
\`\`\`java
PriorityQueue<int[]> pq = new PriorityQueue<>((a,b) -> a[0] - b[0]);
int[] dist = new int[n];
Arrays.fill(dist, INF);
dist[s] = 0;
pq.offer(new int[]{0, s});
while (!pq.isEmpty()) {
    int[] cur = pq.poll();
    int d = cur[0], u = cur[1];
    if (d != dist[u]) continue;
    for (int[] e : g[u]) {
        int v = e[0], w = e[1];
        if (d + w < dist[v]) {
            dist[v] = d + w;
            pq.offer(new int[]{dist[v], v});
        }
    }
}
\`\`\`

## 23.2 拓樸排序
\`\`\`java
ArrayDeque<Integer> q = new ArrayDeque<>();
for (int i = 0; i < n; i++) if (indeg[i] == 0) q.offer(i);
while (!q.isEmpty()) {
    int u = q.poll();
    order.add(u);
    for (int v : dag[u]) if (--indeg[v] == 0) q.offer(v);
}
\`\`\`
`
},
24:{
cpp:`
# 第 24 章：進階 DP (C++)

DP 的重點是狀態、轉移、計算順序。

## 24.1 LIS O(n²)
\`\`\`cpp
vector<int> dp(n, 1);
for (int i = 0; i < n; i++)
    for (int j = 0; j < i; j++)
        if (a[j] < a[i]) dp[i] = max(dp[i], dp[j] + 1);
\`\`\`

## 24.2 0/1 背包
\`\`\`cpp
vector<int> dp(W+1, 0);
for (int i = 0; i < n; i++)
    for (int j = W; j >= w[i]; j--)
        dp[j] = max(dp[j], dp[j-w[i]] + val[i]);
\`\`\`

內層倒序代表每個物品只能用一次。

## 24.3 LCS
\`\`\`cpp
vector<vector<int>> dp(m+1, vector<int>(n+1));
for (int i = 1; i <= m; i++)
    for (int j = 1; j <= n; j++)
        if (a[i-1] == b[j-1]) dp[i][j] = dp[i-1][j-1] + 1;
        else dp[i][j] = max(dp[i-1][j], dp[i][j-1]);
\`\`\`
`,
c:`
# 第 24 章：進階 DP (C)

C 用固定陣列寫 DP，題目限制要先看清楚再開大小。

## 24.1 LIS O(n²)
\`\`\`c
for (int i = 0; i < n; i++) dp[i] = 1;
for (int i = 0; i < n; i++)
    for (int j = 0; j < i; j++)
        if (a[j] < a[i] && dp[j] + 1 > dp[i])
            dp[i] = dp[j] + 1;
\`\`\`

## 24.2 0/1 背包
\`\`\`c
int dp[1005] = {0};
for (int i = 0; i < n; i++)
    for (int j = W; j >= w[i]; j--)
        if (dp[j-w[i]] + val[i] > dp[j])
            dp[j] = dp[j-w[i]] + val[i];
\`\`\`

## 24.3 LCS
\`\`\`c
int dp[1001][1001] = {0};
for (int i = 1; i <= m; i++)
    for (int j = 1; j <= n; j++)
        if (a[i-1] == b[j-1]) dp[i][j] = dp[i-1][j-1] + 1;
        else dp[i][j] = dp[i-1][j] > dp[i][j-1] ? dp[i-1][j] : dp[i][j-1];
\`\`\`
`,
java:`
# 第 24 章：進階 DP (Java)

Java 陣列預設為 0，寫 DP 時很方便；但二維陣列大時要注意記憶體。

## 24.1 LIS O(n²)
\`\`\`java
int[] dp = new int[n];
Arrays.fill(dp, 1);
for (int i = 0; i < n; i++)
    for (int j = 0; j < i; j++)
        if (a[j] < a[i]) dp[i] = Math.max(dp[i], dp[j] + 1);
\`\`\`

## 24.2 0/1 背包
\`\`\`java
int[] dp = new int[W+1];
for (int i = 0; i < n; i++)
    for (int j = W; j >= w[i]; j--)
        dp[j] = Math.max(dp[j], dp[j-w[i]] + val[i]);
\`\`\`

## 24.3 LCS
\`\`\`java
int[][] dp = new int[m+1][n+1];
for (int i = 1; i <= m; i++)
    for (int j = 1; j <= n; j++)
        if (a.charAt(i-1) == b.charAt(j-1)) dp[i][j] = dp[i-1][j-1] + 1;
        else dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
\`\`\`
`
},
25:{
cpp:`
# 第 25 章：Union-Find 並查集 (C++)

並查集維護「誰和誰在同一群」，核心是 \`find\` 與 \`unite\`。

## 25.1 路徑壓縮
\`\`\`cpp
vector<int> parent(n);
iota(parent.begin(), parent.end(), 0);

int find(int x) {
    if (parent[x] == x) return x;
    return parent[x] = find(parent[x]);
}
\`\`\`

## 25.2 合併
\`\`\`cpp
bool unite(int a, int b) {
    int ra = find(a), rb = find(b);
    if (ra == rb) return false;
    parent[ra] = rb;
    return true;
}
\`\`\`

算連通分量時，把所有邊 unite 後統計不同 root。
`,
c:`
# 第 25 章：Union-Find 並查集 (C)

C 版直接用陣列存 parent。

## 25.1 find
\`\`\`c
int parent[1000];
int find(int x) {
    if (parent[x] == x) return x;
    return parent[x] = find(parent[x]);
}
\`\`\`

## 25.2 union
\`\`\`c
int unite(int a, int b) {
    int ra = find(a), rb = find(b);
    if (ra == rb) return 0;
    parent[ra] = rb;
    return 1;
}
\`\`\`

## 25.3 初始化
\`\`\`c
for (int i = 0; i < n; i++) parent[i] = i;
\`\`\`
`,
java:`
# 第 25 章：Union-Find 並查集 (Java)

Java 通常包成一個 DSU class，之後題目直接複製模板。

## 25.1 DSU class
\`\`\`java
static class DSU {
    int[] parent;
    DSU(int n) {
        parent = new int[n];
        for (int i = 0; i < n; i++) parent[i] = i;
    }
    int find(int x) {
        if (parent[x] == x) return x;
        return parent[x] = find(parent[x]);
    }
    boolean unite(int a, int b) {
        int ra = find(a), rb = find(b);
        if (ra == rb) return false;
        parent[ra] = rb;
        return true;
    }
}
\`\`\`
`
},
26:{
cpp:`
# 第 26 章：字串 hash 與 Trie (C++)

字串題常見三種工具：hash 快速比對、KMP 找模式、Trie 做前綴查詢。

## 26.1 Rolling hash
\`\`\`cpp
const long long MOD = 1000000007, BASE = 911382323;
vector<long long> h(n+1), p(n+1, 1);
for (int i = 0; i < n; i++) {
    h[i+1] = (h[i] * BASE + s[i]) % MOD;
    p[i+1] = p[i] * BASE % MOD;
}
auto get = [&](int l, int r) {
    return (h[r] - h[l] * p[r-l] % MOD + MOD) % MOD;
};
\`\`\`

## 26.2 Trie
\`\`\`cpp
struct Node { int nxt[26]; bool end = false; Node(){ memset(nxt, -1, sizeof(nxt)); } };
vector<Node> trie(1);
\`\`\`

Trie 適合「大量字串前綴」問題，例如字典、電話號碼、starts_with。
`,
c:`
# 第 26 章：字串 hash 與 Trie (C)

C 寫字串演算法要自己管理陣列大小與結尾字元。

## 26.1 Rolling hash
\`\`\`c
long long h[100005], p[100005];
p[0] = 1;
for (int i = 0; s[i]; i++) {
    h[i+1] = (h[i] * BASE + s[i]) % MOD;
    p[i+1] = p[i] * BASE % MOD;
}
\`\`\`

## 26.2 Trie 節點
\`\`\`c
int nxt[1000][26], end[1000], nodes = 1;
memset(nxt, -1, sizeof(nxt));
\`\`\`

插入字串時，一個字元一個字元往下走；沒有邊就新增節點。
`,
java:`
# 第 26 章：字串 hash 與 Trie (Java)

Java 字串用 \`charAt(i)\` 取字元，Trie 可用陣列節點。

## 26.1 Rolling hash
\`\`\`java
long[] h = new long[n+1], p = new long[n+1];
p[0] = 1;
for (int i = 0; i < n; i++) {
    h[i+1] = (h[i] * BASE + s.charAt(i)) % MOD;
    p[i+1] = p[i] * BASE % MOD;
}
\`\`\`

## 26.2 Trie
\`\`\`java
static class Node {
    int[] next = new int[26];
    boolean end;
    Node() { Arrays.fill(next, -1); }
}
static ArrayList<Node> trie = new ArrayList<>();
\`\`\`

Trie 的查詢成本是 O(字串長度)，不受字典總字數直接影響。
`
},
27:{
cpp:`
# 第 27 章：檔案 I/O (C++)

## 27.1 用 ifstream / ofstream

\`\`\`cpp
#include <fstream>
#include <iostream>
#include <string>
using namespace std;

int main() {
    ifstream fin("data.txt");
    string line;
    while (getline(fin, line)) cout << line << "\\n";
    fin.close();
}
\`\`\`

> C++ 用 \`ifstream\` 讀、\`ofstream\` 寫、\`fstream\` 讀寫，本質都跟 \`cin\` / \`cout\` 一樣用 \`<<\` \`>>\`。

## 27.2 寫檔案

\`\`\`cpp
ofstream fout("out.txt");
fout << "Hello\\n" << "APCS\\n";
fout.close();
\`\`\`

\`ofstream\` 預設覆蓋；要附加用 \`ofstream fout("out.txt", ios::app);\`。

## 27.3 二進位

\`\`\`cpp
ifstream fin("img.png", ios::binary);
\`\`\`

讀寫圖片、PDF 一律加 \`ios::binary\`。

## 27.4 跟 Python 對比

| | Python | C++ |
|---|---|---|
| 開檔 | \`open("data.txt")\` | \`ifstream fin("data.txt");\` |
| 一行行讀 | \`for line in f:\` | \`while(getline(fin, line))\` |
| 自動關檔 | \`with\` 語句 | 物件解構時自動關 |

> 💡 本教學線上沙箱不能寫真檔，下方練習用 stdin/stdout 模擬。
`,
c:`
# 第 27 章：檔案 I/O (C)

## 27.1 用 fopen / fclose

\`\`\`c
#include <stdio.h>

int main(void) {
    FILE *fp = fopen("data.txt", "r");
    if (!fp) { perror("open"); return 1; }
    char line[256];
    while (fgets(line, sizeof(line), fp)) {
        printf("%s", line);
    }
    fclose(fp);
    return 0;
}
\`\`\`

> C 用 \`FILE *\` 指標代表檔案。**一定要 fclose**，不像 C++ 會自動關。

## 27.2 寫檔案

\`\`\`c
FILE *fp = fopen("out.txt", "w");
fprintf(fp, "Hello\\n");
fprintf(fp, "APCS\\n");
fclose(fp);
\`\`\`

模式：\`"r"\` 讀、\`"w"\` 寫覆蓋、\`"a"\` 附加、\`"rb"\` / \`"wb"\` 二進位。

## 27.3 一定要檢查 fopen 失敗

\`\`\`c
FILE *fp = fopen("not_exist.txt", "r");
if (fp == NULL) {
    printf("檔案開不開！\\n");
    return 1;
}
\`\`\`

> C 不會丟例外，全靠回傳 NULL 通知失敗 — 沒檢查就會 segfault。

## 27.4 跟 Python 對比

| | Python | C |
|---|---|---|
| 開檔 | \`open("data.txt")\` | \`fopen("data.txt", "r")\` |
| 一行行讀 | \`for line in f:\` | \`fgets(line, n, fp)\` |
| 關檔 | \`with\` 自動 | 手動 \`fclose\` |
| 失敗處理 | 拋例外 | 回傳 NULL，要自己檢查 |
`,
java:`
# 第 27 章：檔案 I/O (Java)

## 27.1 用 BufferedReader 讀整個檔案

\`\`\`java
import java.io.*;
import java.nio.file.*;

public class Main {
    public static void main(String[] args) throws IOException {
        // 一行一行讀
        try (BufferedReader br = new BufferedReader(new FileReader("data.txt"))) {
            String line;
            while ((line = br.readLine()) != null) {
                System.out.println(line);
            }
        }
    }
}
\`\`\`

> \`try-with-resources\` 語法（\`try (...) {...}\`）= Python 的 \`with\`，離開區塊自動 close。

## 27.2 一行搞定（Java 11+）

\`\`\`java
String text = Files.readString(Paths.get("data.txt"));
List<String> lines = Files.readAllLines(Paths.get("data.txt"));
\`\`\`

> Java 11 之後有 \`Files.readString\` / \`Files.writeString\`，比 BufferedReader 更簡潔。

## 27.3 寫檔案

\`\`\`java
Files.writeString(Paths.get("out.txt"), "Hello\\nAPCS\\n");
\`\`\`

或：
\`\`\`java
try (PrintWriter pw = new PrintWriter(new FileWriter("out.txt"))) {
    pw.println("Hello");
    pw.println("APCS");
}
\`\`\`

## 27.4 跟 Python 對比

| | Python | Java |
|---|---|---|
| 開檔 | \`open(...)\` | \`new FileReader(...)\` 或 \`Files.readString\` |
| 自動關 | \`with\` | \`try-with-resources\` |
| 必須宣告例外 | 不用 | 要 \`throws IOException\` 或 catch |
`
},
28:{
cpp:`
# 第 28 章：多檔案與標頭檔 (C++)

C++ 沒有「模組」概念，靠 **標頭檔（.h）+ 實作檔（.cpp）** 拆分。

## 28.1 為什麼要拆？

當一支 main.cpp 超過 300 行，找東西崩潰。拆成多檔：
- \`utils.h\` — 宣告（函式長相）
- \`utils.cpp\` — 實作
- \`main.cpp\` — 程式入口

## 28.2 標頭檔範例

\`\`\`cpp
// utils.h
#ifndef UTILS_H
#define UTILS_H
int gcd(int a, int b);
const double PI = 3.14159;
#endif
\`\`\`

\`\`\`cpp
// utils.cpp
#include "utils.h"
int gcd(int a, int b) { return b == 0 ? a : gcd(b, a % b); }
\`\`\`

\`\`\`cpp
// main.cpp
#include <iostream>
#include "utils.h"
using namespace std;
int main() { cout << gcd(12, 18) << endl; }   // 6
\`\`\`

編譯：\`g++ main.cpp utils.cpp -o prog\`

## 28.3 \`#include "x"\` vs \`<x>\`

- \`<iostream>\` — 系統標準函式庫（從編譯器內建路徑找）
- \`"utils.h"\` — 自己寫的標頭（從目前目錄找）

## 28.4 namespace（命名空間）

\`\`\`cpp
namespace mathx {
    int gcd(int a, int b) { return b == 0 ? a : gcd(b, a % b); }
}
int main() { cout << mathx::gcd(12, 18); }
\`\`\`

避免函式重名打架。\`std::cout\` 也是同樣概念。
`,
c:`
# 第 28 章：多檔案與標頭檔 (C)

C 跟 C++ 一樣靠 .h + .c 拆分，沒有現代意義的模組系統。

## 28.1 標頭檔範例

\`\`\`c
/* utils.h */
#ifndef UTILS_H
#define UTILS_H
int gcd(int a, int b);
#define PI 3.14159
#endif
\`\`\`

\`\`\`c
/* utils.c */
#include "utils.h"
int gcd(int a, int b) {
    return b == 0 ? a : gcd(b, a % b);
}
\`\`\`

\`\`\`c
/* main.c */
#include <stdio.h>
#include "utils.h"
int main(void) {
    printf("%d\\n", gcd(12, 18));   // 6
    return 0;
}
\`\`\`

編譯：\`gcc main.c utils.c -o prog\`

## 28.2 \`#define\` 巨集

\`\`\`c
#define MAX 1000005
#define MIN(a, b) ((a) < (b) ? (a) : (b))
\`\`\`

> ⚠️ 巨集只是「文字替換」沒有型別檢查。**參數一定要加括號**，否則 \`MIN(a+1, b)\` 會展開成奇怪的東西。

## 28.3 \`#ifndef\` / \`#define\` / \`#endif\` 的用意

防止同一個 .h 被重複 include 導致重複宣告。每個 .h 都這樣包起來。

## 28.4 沒有 namespace

C 沒有命名空間，函式名打架時就慘了 — 常見做法是加前綴：
\`\`\`c
int mathx_gcd(int a, int b);
\`\`\`
`,
java:`
# 第 28 章：套件與 import (Java)

Java 有真正的「套件（package）」系統，比 C/C++ 嚴謹。

## 28.1 package 宣告

\`\`\`java
// 檔案 utils/MathUtil.java
package utils;

public class MathUtil {
    public static int gcd(int a, int b) {
        return b == 0 ? a : gcd(b, a % b);
    }
    public static final double PI = 3.14159;
}
\`\`\`

- 檔案必須放在 \`utils/\` 目錄
- 第一行 \`package utils;\`
- class 名稱必須跟檔名一致

## 28.2 import

\`\`\`java
import utils.MathUtil;
import java.util.*;     // 整個 java.util 套件
import static java.lang.Math.*;   // 靜態 import，直接用 sqrt(...)

public class Main {
    public static void main(String[] args) {
        System.out.println(MathUtil.gcd(12, 18));
    }
}
\`\`\`

## 28.3 常用標準套件

| 套件 | 內容 |
|------|------|
| \`java.util\` | List, Map, Scanner, Arrays |
| \`java.io\` | 檔案 I/O |
| \`java.lang\` | String, Math, System（自動 import） |
| \`java.util.stream\` | Stream API（類似 Python 的 map/filter） |

## 28.4 編譯與執行

\`\`\`bash
javac -d out src/utils/MathUtil.java src/Main.java
java -cp out Main
\`\`\`

> Java 跟 Python 一樣有完整的套件系統，比 C/C++ 容易管理。
`
},
29:{
cpp:`
# 第 29 章：類別 class (C++)

C++ 是物件導向語言的元老，class 用法跟 Python 概念一樣，但語法更嚴謹。

## 29.1 第一個 class

\`\`\`cpp
#include <iostream>
#include <string>
using namespace std;

class Student {
public:
    string name;
    int score;
    Student(string n, int s) : name(n), score(s) {}
    bool isPass() { return score >= 60; }
};

int main() {
    Student s("Alice", 85);
    cout << s.name << " " << s.isPass() << endl;
}
\`\`\`

## 29.2 三大語法重點

- **\`public:\` / \`private:\`** — 控制誰能存取（Python 沒有真正的 private，靠約定）
- **建構子** = 跟類別同名的函式 (\`Student(string, int)\`)
- **\`:\` 初始化列表** = \`Student(string n, int s) : name(n), score(s) {}\`，比在大括號內賦值快

## 29.3 繼承

\`\`\`cpp
class GradStudent : public Student {
    string advisor;
public:
    GradStudent(string n, int s, string a)
        : Student(n, s), advisor(a) {}
    string info() { return name + " → " + advisor; }
};
\`\`\`

\`: public Student\` = 繼承（Python 的 \`class GradStudent(Student):\`）。

## 29.4 解構子（Python 沒有）

\`\`\`cpp
class Buffer {
    int* data;
public:
    Buffer(int n) { data = new int[n]; }
    ~Buffer() { delete[] data; }   // 解構子，自動釋放記憶體
};
\`\`\`

> C++ 要手動管理記憶體；Python 有 GC 自動回收，所以沒有 \`~Buffer\`。

## 29.5 const 方法

\`\`\`cpp
int getScore() const { return score; }
\`\`\`

\`const\` 在尾巴 = 「我承諾不會改成員變數」。
`,
c:`
# 第 29 章：結構 struct (C — 沒有 class)

C 沒有 class、沒有物件導向 — 但有 \`struct\` 把「相關資料綁一起」。要做「方法」就得手動傳指標。

## 29.1 struct 宣告

\`\`\`c
#include <stdio.h>
#include <string.h>

struct Student {
    char name[50];
    int score;
};

int isPass(struct Student *s) {
    return s->score >= 60;
}

int main(void) {
    struct Student s = {"Alice", 85};
    printf("%s %d\\n", s.name, isPass(&s));
    return 0;
}
\`\`\`

## 29.2 \`.\` vs \`->\`

- \`s.name\` — s 是 struct 本體
- \`p->name\` — p 是 **指標**，等同於 \`(*p).name\`

## 29.3 typedef 省略「struct」

\`\`\`c
typedef struct {
    char name[50];
    int score;
} Student;

Student s = {"Alice", 85};   // 不用每次寫 struct
\`\`\`

## 29.4 「方法」的慣用寫法

C 沒有 class，但慣例是：
- 函式名 = \`型別名_動詞\`，例如 \`Student_isPass\`
- 第一個參數 = 物件指標 \`Student *self\`（就是 Python 的 self）

\`\`\`c
int Student_isPass(Student *self) { return self->score >= 60; }
\`\`\`

## 29.5 跟 Python 對比

| | Python | C |
|---|---|---|
| 資料綁定 | \`class\` | \`struct\` |
| 方法 | class 內 \`def\` | 外部函式 + 指標 |
| 繼承 | 直接支援 | 沒有，要用 struct 嵌套手作 |
| 封裝 | 約定 \`_x\` | 完全沒有，全部欄位開放 |

> 想要真正的 OOP 在 C 裡，就改用 C++ 或 Java。
`,
java:`
# 第 29 章：類別 class (Java)

Java 整個語言都圍繞 class 設計 — 連 main() 都得包在 class 裡。

## 29.1 第一個 class

\`\`\`java
public class Main {
    static class Student {
        String name;
        int score;
        Student(String name, int score) {
            this.name = name;
            this.score = score;
        }
        boolean isPass() { return score >= 60; }
    }

    public static void main(String[] args) {
        Student s = new Student("Alice", 85);
        System.out.println(s.name + " " + s.isPass());
    }
}
\`\`\`

## 29.2 三大語法重點

- **\`new\`** 一定要寫 — \`new Student(...)\` 才會建立物件（不像 C++ 可省略）
- **\`this\`** = Python 的 \`self\`，但 Java 是隱含參數，不用寫在參數列
- **存取修飾子**：\`public\` / \`private\` / \`protected\` — 比 Python 的 \`_x\` 約定嚴格多了

## 29.3 繼承

\`\`\`java
class GradStudent extends Student {
    String advisor;
    GradStudent(String name, int score, String advisor) {
        super(name, score);
        this.advisor = advisor;
    }
    String info() { return name + " → " + advisor; }
}
\`\`\`

\`extends\` = 繼承（Python 的 \`(Student)\`）。\`super(...)\` = Python 的 \`super().__init__(...)\`。

## 29.4 介面 interface（Java 特色）

\`\`\`java
interface Printable {
    void print();
}
class Student implements Printable {
    public void print() { System.out.println(name); }
}
\`\`\`

> Java 不支援多重繼承，但可以實作多個 interface。

## 29.5 getter / setter（Java 慣例）

\`\`\`java
private int score;
public int getScore() { return score; }
public void setScore(int s) { this.score = s; }
\`\`\`

Python 直接 \`s.score\`；Java 通常會包一層 getter/setter。
`
},
30:{
cpp:`
# 第 30 章：例外處理 try/catch (C++)

C++ 有 \`try / catch / throw\`，跟 Python 的 \`try / except / raise\` 概念一樣。

## 30.1 基本語法

\`\`\`cpp
#include <iostream>
#include <stdexcept>
using namespace std;

int main() {
    try {
        int n;
        cin >> n;
        if (n == 0) throw runtime_error("不能除以 0");
        cout << 100 / n << endl;
    } catch (const runtime_error& e) {
        cout << "錯誤: " << e.what() << endl;
    }
}
\`\`\`

## 30.2 常見例外類別（要 \`#include <stdexcept>\`）

| 類別 | 用途 |
|------|------|
| \`runtime_error\` | 一般執行期錯誤 |
| \`invalid_argument\` | 引數不對 |
| \`out_of_range\` | 超出範圍（如 \`vector::at\`） |
| \`logic_error\` | 程式邏輯錯 |

## 30.3 catch 多種錯誤

\`\`\`cpp
try {
    // ...
} catch (const out_of_range& e) {
    cout << "範圍錯：" << e.what();
} catch (const exception& e) {     // 兜底，所有標準例外的祖先
    cout << "其他錯：" << e.what();
}
\`\`\`

## 30.4 C++ 的另類做法：回傳錯誤碼

很多競賽程式 **不用 try/catch**，因為太慢、太肥。改用：
- 回傳值 \`-1\` 代表失敗
- C++17 起有 \`std::optional<T>\`：「可能沒值」
- C++23 有 \`std::expected<T, E>\`

> APCS 解題不需要 try/catch；做工程才用。
`,
c:`
# 第 30 章：錯誤處理（C — 沒有例外）

C 沒有 try/catch — 全靠**回傳值**通知失敗。每個 API 都有自己的「失敗值」約定。

## 30.1 常見回傳值約定

| 函式 | 失敗回傳 |
|------|---------|
| \`fopen\` | NULL |
| \`malloc\` | NULL |
| \`scanf\` | EOF 或讀到的個數 |
| 自訂函式 | 慣例：0 = 成功、非 0 = 錯誤碼 |

## 30.2 errno 全域變數

\`\`\`c
#include <stdio.h>
#include <errno.h>
#include <string.h>

int main(void) {
    FILE *fp = fopen("nope.txt", "r");
    if (!fp) {
        printf("錯誤: %s\\n", strerror(errno));
        return 1;
    }
    fclose(fp);
    return 0;
}
\`\`\`

> \`errno\` 是系統呼叫失敗時設定的錯誤碼；\`strerror\` 把它變成人話。

## 30.3 \`setjmp / longjmp\`（高階技巧，APCS 不會考）

C 真的想模仿例外的話有 \`setjmp / longjmp\`，但極少用 — 容易壞、容易漏資源。

## 30.4 防禦式編程

\`\`\`c
if (n <= 0) {
    fprintf(stderr, "n must be positive\\n");
    return 1;
}
\`\`\`

> APCS 解題裡 C 通常**直接 assert / exit**，不做花俏的錯誤處理。
`,
java:`
# 第 30 章：例外處理 try/catch (Java)

Java 例外系統極度嚴謹 — 編譯器會逼你處理某些例外。

## 30.1 基本語法

\`\`\`java
try {
    int n = Integer.parseInt(input);
    System.out.println(100 / n);
} catch (NumberFormatException e) {
    System.out.println("請輸入整數");
} catch (ArithmeticException e) {
    System.out.println("不能除以 0");
}
\`\`\`

## 30.2 Checked vs Unchecked

| 類型 | 範例 | 編譯器要求 |
|------|------|---|
| **Checked** | \`IOException\`, \`SQLException\` | **必須** catch 或 \`throws\` |
| **Unchecked** | \`NullPointerException\`, \`ArithmeticException\` | 可不處理 |

> 這是 Java 跟 Python/C++ 最大差異 — checked exception 強迫你**承認可能會壞**。

## 30.3 throws 宣告

\`\`\`java
public static String readFile(String path) throws IOException {
    return Files.readString(Paths.get(path));
}
\`\`\`

不想 catch 就用 \`throws\` 往上甩。\`main\` 也可以 \`throws\`：
\`\`\`java
public static void main(String[] args) throws IOException { ... }
\`\`\`

## 30.4 finally 與 try-with-resources

\`\`\`java
// 舊寫法
try { ... }
catch (Exception e) { ... }
finally { /* 一定會跑 */ }

// 推薦：try-with-resources（自動關資源）
try (BufferedReader br = new BufferedReader(...)) {
    // 用 br
} catch (IOException e) { ... }
\`\`\`

## 30.5 自訂例外

\`\`\`java
class TooLowScore extends RuntimeException {
    public TooLowScore(int s) { super("score = " + s); }
}
\`\`\`

> APCS 不會考自訂例外，但工程上很常見。
`
},
31:{
cpp:`
# 第 31 章：測試與除錯 (C++)

## 31.1 印出 debug — 最簡單

\`\`\`cpp
cerr << "[debug] n = " << n << ", i = " << i << endl;
\`\`\`

> 用 \`cerr\` 而不是 \`cout\`：cerr 不會被緩衝，且 OJ 通常不看 stderr，不會誤判答案。

## 31.2 assert：條件不成立就崩

\`\`\`cpp
#include <cassert>
assert(0 <= idx && idx < n);
\`\`\`

開發時放心放 assert，正式編譯加 \`-DNDEBUG\` 會全部關掉。

## 31.3 gdb（GNU debugger）

\`\`\`bash
g++ -g main.cpp -o main      # -g 加除錯資訊
gdb ./main
(gdb) break main             # 設斷點
(gdb) run                    # 開跑
(gdb) print x                # 看變數
(gdb) next                   # 跑下一行
\`\`\`

## 31.4 單元測試（doctest / Catch2）

實務上有 doctest、Catch2、Google Test，APCS 不需要。簡易自測：

\`\`\`cpp
void test_gcd() {
    assert(gcd(12, 18) == 6);
    assert(gcd(7, 5) == 1);
    cout << "all tests passed\\n";
}
\`\`\`

## 31.5 編譯器加保護旗標

\`\`\`bash
g++ -Wall -Wextra -fsanitize=address,undefined -g main.cpp
\`\`\`

- \`-Wall -Wextra\` — 開更多警告
- \`-fsanitize=address\` — 動態抓記憶體錯誤（陣列越界、未初始化）
- \`-fsanitize=undefined\` — 抓未定義行為（如整數溢位）
`,
c:`
# 第 31 章：測試與除錯 (C)

跟 C++ 幾乎一樣，但少了 cerr，要用 \`fprintf(stderr, ...)\`。

## 31.1 印 debug

\`\`\`c
fprintf(stderr, "[debug] n = %d, i = %d\\n", n, i);
\`\`\`

> 用 \`stderr\` 不會被 OJ 拿去比答案。

## 31.2 assert

\`\`\`c
#include <assert.h>
assert(0 <= idx && idx < n);
\`\`\`

## 31.3 gdb

跟 C++ 用法一樣：
\`\`\`bash
gcc -g main.c -o main
gdb ./main
\`\`\`

## 31.4 valgrind — 抓記憶體洩漏（C 的剋星）

C 用 \`malloc\` 配記憶體、用 \`free\` 釋放 — 忘記 free 就洩漏：

\`\`\`bash
valgrind --leak-check=full ./main
\`\`\`

會列出每個沒釋放的 malloc 從哪裡來。

## 31.5 -fsanitize 一條龍

\`\`\`bash
gcc -Wall -Wextra -fsanitize=address,undefined -g main.c
\`\`\`

開了之後執行檔慢約 2x，但**陣列越界、未初始化、整數溢位**都會自動報。除錯神器。

## 31.6 常見 C 陷阱

- 忘記 \`free\` → 洩漏
- \`free\` 兩次 → undefined
- 用了 \`free\` 後的指標 → undefined（建議 free 後設 NULL）
- \`scanf\` 沒加 \`&\` → segfault
`,
java:`
# 第 31 章：測試與除錯 (Java)

## 31.1 印 debug

\`\`\`java
System.err.println("[debug] n=" + n + " i=" + i);
\`\`\`

> 用 \`System.err\` 不會被 OJ 拿去比答案。

## 31.2 assert

\`\`\`java
assert idx >= 0 && idx < n : "idx out of range: " + idx;
\`\`\`

> ⚠️ Java 預設**不開** assert，要 \`java -ea Main\` 才會啟用。

## 31.3 IDE debugger（最重要）

Java 的 IDE（IntelliJ / Eclipse / VS Code）內建超強 debugger：
- 點行號旁邊設斷點
- 跑 Debug 模式
- 看變數即時值、跳行、step into

> Java 開發**極度依賴 IDE**；不要硬靠 println debug。

## 31.4 JUnit 單元測試（業界標配）

\`\`\`java
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class MathUtilTest {
    @Test
    void testGcd() {
        assertEquals(6, MathUtil.gcd(12, 18));
        assertEquals(1, MathUtil.gcd(7, 5));
    }
}
\`\`\`

APCS 不需要，但業界寫 Java 沒人不會 JUnit。

## 31.5 例外的 stack trace

\`\`\`java
try { ... }
catch (Exception e) {
    e.printStackTrace();   // 印整條呼叫鏈
}
\`\`\`

stack trace 從**最底下**開始看 — 那是錯誤源頭。
`
},
32:{
cpp:`
# 第 32 章：命令列引數 (C++)

「命令列工具」= 從 terminal 接參數的程式：\`./prog --name Alice -n 5\`。

## 32.1 從 main 接引數

\`\`\`cpp
#include <iostream>
using namespace std;

int main(int argc, char* argv[]) {
    cout << "argc = " << argc << endl;
    for (int i = 0; i < argc; i++) {
        cout << "argv[" << i << "] = " << argv[i] << endl;
    }
}
\`\`\`

- \`argc\` = 引數個數（包含程式自己）
- \`argv[0]\` = 程式名稱
- \`argv[1..]\` = 使用者打的引數

執行 \`./prog hello 42\`：
\`\`\`
argc = 3
argv[0] = ./prog
argv[1] = hello
argv[2] = 42
\`\`\`

## 32.2 字串轉數字

\`\`\`cpp
int n = atoi(argv[1]);     // C 風格
int n = stoi(argv[1]);     // C++ 風格（更安全）
\`\`\`

## 32.3 簡單的 flag parsing

\`\`\`cpp
#include <string>
int main(int argc, char* argv[]) {
    string name = "world";
    int count = 1;
    for (int i = 1; i < argc; i++) {
        string arg = argv[i];
        if (arg == "--name" && i + 1 < argc) name = argv[++i];
        else if (arg == "-n" && i + 1 < argc) count = stoi(argv[++i]);
    }
    for (int i = 0; i < count; i++) cout << "Hello, " << name << endl;
}
\`\`\`

> 真正寫 CLI 工具會用 \`cxxopts\` 或 \`CLI11\` 這類函式庫；APCS 不會考。
`,
c:`
# 第 32 章：命令列引數 (C)

跟 C++ 的 main 引數**完全一樣**。

## 32.1 main 簽名

\`\`\`c
#include <stdio.h>
#include <stdlib.h>

int main(int argc, char *argv[]) {
    printf("argc = %d\\n", argc);
    for (int i = 0; i < argc; i++) {
        printf("argv[%d] = %s\\n", i, argv[i]);
    }
    return 0;
}
\`\`\`

執行 \`./prog hello 42\`：
- argc = 3
- argv[0] = "./prog"
- argv[1] = "hello"
- argv[2] = "42"

## 32.2 字串轉數字

\`\`\`c
#include <stdlib.h>
int n = atoi(argv[1]);          // 字串 → int
double x = atof(argv[1]);       // 字串 → double
long long ll = atoll(argv[1]);  // 字串 → long long
\`\`\`

## 32.3 字串比較必須用 strcmp

\`\`\`c
#include <string.h>
if (strcmp(argv[1], "--help") == 0) { ... }
\`\`\`

> ⚠️ **\`argv[1] == "--help"\` 永遠是 false**！因為比的是指標，不是字串內容。要用 \`strcmp\`。

## 32.4 getopt（POSIX 標準解析）

\`\`\`c
#include <unistd.h>
int opt;
while ((opt = getopt(argc, argv, "n:f:")) != -1) {
    switch (opt) {
        case 'n': printf("n = %s\\n", optarg); break;
        case 'f': printf("f = %s\\n", optarg); break;
    }
}
\`\`\`
`,
java:`
# 第 32 章：命令列引數 (Java)

Java 的 main 簽名就是接命令列：

\`\`\`java
public static void main(String[] args) { ... }
\`\`\`

\`args\` = 使用者打的引數**（不含程式名）**，跟 C/C++ 差一個。

## 32.1 範例

\`\`\`java
public class Main {
    public static void main(String[] args) {
        System.out.println("argc = " + args.length);
        for (int i = 0; i < args.length; i++) {
            System.out.println("args[" + i + "] = " + args[i]);
        }
    }
}
\`\`\`

執行 \`java Main hello 42\`：
\`\`\`
argc = 2
args[0] = hello
args[1] = 42
\`\`\`

> 跟 C/C++ 差別：Java 的 args 不含程式名（C/C++ 的 argv[0] 是 \`./prog\`）。

## 32.2 字串轉數字

\`\`\`java
int n = Integer.parseInt(args[0]);
double x = Double.parseDouble(args[0]);
long ll = Long.parseLong(args[0]);
\`\`\`

> \`parseInt\` 解析失敗會丟 \`NumberFormatException\`，要 try/catch。

## 32.3 簡單 flag parsing

\`\`\`java
String name = "world";
int count = 1;
for (int i = 0; i < args.length; i++) {
    switch (args[i]) {
        case "--name" -> name = args[++i];
        case "-n"     -> count = Integer.parseInt(args[++i]);
    }
}
for (int i = 0; i < count; i++) System.out.println("Hello, " + name);
\`\`\`

> 字串比較用 \`equals\` 或 switch（switch 的 case 會用 equals）。**不要用 \`==\`**！
`
},
33:{
cpp:`
# 第 33 章：CSV 資料處理 (C++)

C++ 沒有內建 CSV 函式庫，但 CSV 結構簡單，可以手刻。

## 33.1 讀 CSV — 用 getline + stringstream

\`\`\`cpp
#include <iostream>
#include <fstream>
#include <sstream>
#include <vector>
#include <string>
using namespace std;

int main() {
    ifstream fin("data.csv");
    string line;
    // 跳過標題
    getline(fin, line);
    while (getline(fin, line)) {
        stringstream ss(line);
        string cell;
        vector<string> row;
        while (getline(ss, cell, ',')) row.push_back(cell);
        // row[0] = 名字, row[1] = 分數, ...
    }
}
\`\`\`

關鍵：\`getline(ss, cell, ',')\` 用逗號當分隔符切字串。

## 33.2 數字欄位要轉型

\`\`\`cpp
int score = stoi(row[1]);
double avg = stod(row[2]);
\`\`\`

## 33.3 寫 CSV

\`\`\`cpp
ofstream fout("out.csv");
fout << "name,score\\n";
fout << "Alice," << 85 << "\\n";
\`\`\`

## 33.4 CSV 的陷阱

- **欄位內有逗號** — 要加引號包起來：\`"Wang, Alice",85\`
- **欄位內有換行** — 同上，引號內可以有換行
- **欄位內有引號** — 用兩個引號逃脫：\`"She said ""hi"""\`

手刻只能處理最單純的 CSV；複雜的請用函式庫（如 \`fast-cpp-csv-parser\`）。

> 跟 Python pandas 的 \`pd.read_csv()\` 比，C++ 處理 CSV 真的很費力 — 但速度可快上百倍。
`,
c:`
# 第 33 章：CSV 資料處理 (C)

C 處理 CSV 最原始 — 全部用 fgets + strtok。

## 33.1 讀 CSV

\`\`\`c
#include <stdio.h>
#include <string.h>
#include <stdlib.h>

int main(void) {
    FILE *fp = fopen("data.csv", "r");
    char line[1024];
    fgets(line, sizeof(line), fp);  // 跳過標題
    while (fgets(line, sizeof(line), fp)) {
        char *name = strtok(line, ",");
        char *score_str = strtok(NULL, ",\\n");
        int score = atoi(score_str);
        printf("%s -> %d\\n", name, score);
    }
    fclose(fp);
    return 0;
}
\`\`\`

## 33.2 strtok 的雷

- **會改原始字串**（把分隔符換成 \`\\0\`）— 不能對 const 字串用
- **不是 thread-safe**（共用內部狀態），要用 \`strtok_r\` 才安全
- **第二次以後第一個參數要 NULL**，繼續從上次停的地方切

## 33.3 寫 CSV

\`\`\`c
FILE *fp = fopen("out.csv", "w");
fprintf(fp, "name,score\\n");
fprintf(fp, "Alice,%d\\n", 85);
fclose(fp);
\`\`\`

## 33.4 完整解析很痛

跟 C++ 一樣，欄位內逗號、引號、跨行 CSV，C 手刻會變一坨。實務上用 libcsv 之類的函式庫。

> APCS 用不到 CSV — 這章理解概念即可。
`,
java:`
# 第 33 章：CSV 資料處理 (Java)

Java 一樣沒有內建 CSV，但拼起來比 C/C++ 容易。

## 33.1 讀 CSV — split

\`\`\`java
import java.io.*;
import java.nio.file.*;
import java.util.*;

public class Main {
    public static void main(String[] args) throws IOException {
        List<String> lines = Files.readAllLines(Paths.get("data.csv"));
        // 跳過標題
        for (int i = 1; i < lines.size(); i++) {
            String[] cells = lines.get(i).split(",");
            String name = cells[0];
            int score = Integer.parseInt(cells[1]);
            System.out.println(name + " -> " + score);
        }
    }
}
\`\`\`

## 33.2 \`split\` 的雷

- \`split(",")\` 接受**正則**，特殊字元（\`.\`, \`|\`）要逃脫
- **連續空欄位**會被合併 — 用 \`split(",", -1)\` 保留尾端空欄
- 不會處理引號包欄位

## 33.3 寫 CSV

\`\`\`java
try (PrintWriter pw = new PrintWriter(new FileWriter("out.csv"))) {
    pw.println("name,score");
    pw.println("Alice," + 85);
}
\`\`\`

## 33.4 函式庫推薦

正式專案用 **OpenCSV** 或 **Apache Commons CSV**：
\`\`\`java
CSVReader reader = new CSVReader(new FileReader("data.csv"));
List<String[]> rows = reader.readAll();
\`\`\`

> Java 處理 CSV 比 C/C++ 簡潔，但跟 Python pandas 一行 \`read_csv\` 比仍然差遠了。
`
},
34:{
cpp:`
# 第 34 章：JSON 與 HTTP (C++)

C++ 沒有內建 JSON / HTTP — 都要用第三方函式庫。

## 34.1 JSON：nlohmann/json

最廣用的 C++ JSON 函式庫。單一 header，無依賴。

\`\`\`cpp
#include "nlohmann/json.hpp"
using json = nlohmann::json;

int main() {
    // 解析
    json data = json::parse(R"({"name":"Alice","score":85})");
    std::string name = data["name"];
    int score = data["score"];

    // 建立
    json out = { {"name", "Bob"}, {"scores", {90, 85, 77}} };
    std::cout << out.dump(2) << std::endl;   // pretty print
}
\`\`\`

## 34.2 HTTP：cpp-httplib

也是單一 header。極簡：

\`\`\`cpp
#include "httplib.h"
int main() {
    httplib::Client cli("https://api.github.com");
    auto res = cli.Get("/users/torvalds");
    if (res && res->status == 200) {
        auto data = json::parse(res->body);
        std::cout << data["name"] << std::endl;
    }
}
\`\`\`

## 34.3 跟 Python 對比

| | Python | C++ |
|---|---|---|
| JSON 解析 | \`json.loads(s)\` | \`json::parse(s)\` |
| HTTP GET | \`requests.get(url)\` | \`cli.Get(path)\` |
| 依賴 | 標準庫 | 要下載 header |
| 速度 | 慢 | 快 5–20 倍 |

> APCS 用不到 JSON / HTTP — 這章理解概念即可。
`,
c:`
# 第 34 章：JSON 與 HTTP (C)

C 處理 JSON / HTTP 最痛苦 — 標準庫只有檔案 I/O，網路全靠系統 API。

## 34.1 JSON：cJSON 函式庫

\`\`\`c
#include "cJSON.h"

const char *text = "{\\"name\\":\\"Alice\\",\\"score\\":85}";
cJSON *root = cJSON_Parse(text);
const char *name = cJSON_GetObjectItem(root, "name")->valuestring;
int score = cJSON_GetObjectItem(root, "score")->valueint;
printf("%s -> %d\\n", name, score);
cJSON_Delete(root);     // 一定要 free
\`\`\`

> 每個 cJSON 物件用完都得 \`cJSON_Delete\`，否則洩漏記憶體。

## 34.2 HTTP：libcurl

C 標準沒有 HTTP；用 libcurl：

\`\`\`c
#include <curl/curl.h>

CURL *curl = curl_easy_init();
curl_easy_setopt(curl, CURLOPT_URL, "https://example.com");
curl_easy_perform(curl);
curl_easy_cleanup(curl);
\`\`\`

光是把回應內容存起來就要寫 callback — 真的很麻煩。

## 34.3 跟 Python 對比

| | Python | C |
|---|---|---|
| JSON 一行 | \`json.loads\` | 解析 + 走訪結構 + free |
| HTTP 一行 | \`requests.get\` | curl init + setopt + callback + cleanup |

> 工程上不會用 C 寫網路服務 — 太痛苦，安全漏洞容易。
`,
java:`
# 第 34 章：JSON 與 HTTP (Java)

Java 標準庫 11+ 有 HttpClient，JSON 一般用第三方（Jackson / Gson）。

## 34.1 HTTP：java.net.http（標準庫）

\`\`\`java
import java.net.http.*;
import java.net.URI;

HttpClient client = HttpClient.newHttpClient();
HttpRequest req = HttpRequest.newBuilder()
    .uri(URI.create("https://api.github.com/users/torvalds"))
    .build();
HttpResponse<String> res = client.send(req, HttpResponse.BodyHandlers.ofString());
System.out.println(res.body());
\`\`\`

## 34.2 JSON：Jackson 或 Gson

\`\`\`java
// Jackson
ObjectMapper mapper = new ObjectMapper();
JsonNode root = mapper.readTree(res.body());
String name = root.get("name").asText();
int score = root.get("score").asInt();

// Gson
Gson gson = new Gson();
Map<String, Object> data = gson.fromJson(res.body(), Map.class);
\`\`\`

## 34.3 直接映射到物件

\`\`\`java
class User {
    public String name;
    public int score;
}
User u = mapper.readValue(jsonString, User.class);
\`\`\`

> Jackson / Gson 能把 JSON 自動轉成你的 class，比 Python 的 \`json.loads\` 還強。

## 34.4 跟 Python 對比

| | Python | Java |
|---|---|---|
| HTTP | \`requests\` | \`HttpClient\` |
| JSON | \`json\` 標準庫 | Jackson / Gson |
| 自動映射 | 手動 / pydantic | 內建 |
`
},
35:{
cpp:`
# 第 35 章：綜合練習：小遊戲 (C++)

把前面 0–34 章的東西拼起來，做一個猜數字遊戲。

## 35.1 完整程式

\`\`\`cpp
#include <iostream>
#include <cstdlib>
#include <ctime>
using namespace std;

int main() {
    srand(time(NULL));
    int answer = rand() % 100 + 1;
    int guess, tries = 0;

    cout << "我心裡想了一個 1–100 的數字，猜猜看吧！\\n";
    while (true) {
        cout << "> ";
        cin >> guess;
        tries++;
        if (guess == answer) {
            cout << "🎉 答對了！花了 " << tries << " 次\\n";
            break;
        } else if (guess < answer) cout << "太小\\n";
        else cout << "太大\\n";
    }
}
\`\`\`

## 35.2 用到的觀念

- \`srand / rand\` — 亂數
- \`while\` 迴圈
- \`cin >> guess\` — I/O
- \`if / else if\` — 條件

## 35.3 隨機數的雷

- **必須 \`srand(time(NULL))\` 一次**，否則每次跑都同樣序列
- \`rand() % 100 + 1\` — 1 到 100
- C++11 之後建議用 \`<random>\`：
  \`\`\`cpp
  #include <random>
  mt19937 rng(time(NULL));
  uniform_int_distribution<int> dist(1, 100);
  int answer = dist(rng);
  \`\`\`

## 35.4 試試擴充

- 限制次數
- 換成猜單字（用 \`vector<string>\`）
- 加排行榜（檔案 I/O）
`,
c:`
# 第 35 章：綜合練習：小遊戲 (C)

## 35.1 完整程式

\`\`\`c
#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main(void) {
    srand((unsigned) time(NULL));
    int answer = rand() % 100 + 1;
    int guess, tries = 0;

    printf("我心裡想了一個 1–100 的數字，猜猜看！\\n");
    while (1) {
        printf("> ");
        if (scanf("%d", &guess) != 1) break;
        tries++;
        if (guess == answer) {
            printf("🎉 答對了！花了 %d 次\\n", tries);
            break;
        } else if (guess < answer) printf("太小\\n");
        else printf("太大\\n");
    }
    return 0;
}
\`\`\`

## 35.2 跟 C++ 版差別

- \`scanf("%d", &guess)\` 要記得 \`&\`
- 字串用 \`printf\` 印
- \`stdlib.h\` 提供 \`rand / srand\`
- \`time.h\` 提供 \`time(NULL)\`

## 35.3 rand 的雷（跟 C++ 一樣）

- 沒 \`srand\` 每次都同序列
- \`rand() % 100\` 不是完美均勻分布（高位數有偏差），但 APCS 級夠用
- \`RAND_MAX\` 通常只有 32767，要更大範圍要組合：\`((long long)rand() << 15) | rand()\`

## 35.4 擴充挑戰

- 限制猜 10 次
- 改成兩人對戰
- 紀錄勝負到檔案
`,
java:`
# 第 35 章：綜合練習：小遊戲 (Java)

## 35.1 完整程式

\`\`\`java
import java.util.Random;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Random rng = new Random();
        int answer = rng.nextInt(100) + 1;   // 1–100
        Scanner sc = new Scanner(System.in);
        int tries = 0;

        System.out.println("我心裡想了一個 1–100 的數字，猜猜看！");
        while (true) {
            System.out.print("> ");
            int guess = sc.nextInt();
            tries++;
            if (guess == answer) {
                System.out.println("🎉 答對了！花了 " + tries + " 次");
                break;
            } else if (guess < answer) System.out.println("太小");
            else System.out.println("太大");
        }
    }
}
\`\`\`

## 35.2 用到的觀念

- \`Random\` 物件 — 比 C 的 srand 安全（不用手動播種，預設用時間）
- \`Scanner\` — I/O
- \`while\` 迴圈 + break

## 35.3 Random vs Math.random()

\`\`\`java
int n = (int)(Math.random() * 100) + 1;   // 1–100
\`\`\`

\`Math.random()\` 也行，但 \`Random\` 物件有更多方法（\`nextInt(n)\`, \`nextDouble()\`, \`nextBoolean()\`）。

## 35.4 擴充挑戰

- 限制次數
- 多人輪流
- 把分數存到檔案（\`Files.writeString\`）
`
},
68:{
cpp:`
# 第 68 章：APCS 新制與 C++ (C++)

> 📘 APCS 全名「程式設計觀念題暨實作題能力檢測」，由教育部主辦。

## 68.1 觀念題 vs 實作題

| | 觀念題 | 實作題 |
|---|---|---|
| 題型 | 選擇題 | 寫程式 |
| 時間 | 60 分鐘 | 150 分鐘 |
| 題數 | 25 題 | 4 題 |
| 評分 | 答對得分 | 自動評測（test cases） |

## 68.2 APCS 支援的語言

C / C++ / Python / Java 都可以。**統計上 C++ 拿高分人數最多**，因為：
- 標準函式庫齊全（vector、sort、map、queue、stack...）
- 速度快不怕 TLE
- 語法比 C 安全（自動記憶體管理 vector）

## 68.3 C++ 解題模板

\`\`\`cpp
#include <bits/stdc++.h>
using namespace std;
int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n;
    cin >> n;
    vector<int> a(n);
    for (auto& x : a) cin >> x;

    // 解題...

    return 0;
}
\`\`\`

- \`#include <bits/stdc++.h>\` 一口氣含入所有標準庫（APCS 編譯器有支援）
- \`ios::sync_with_stdio(false)\` + \`cin.tie(nullptr)\` 是大量 I/O 加速

## 68.4 五個等級對照

| 等級 | 觀念題 | 實作題 |
|------|---------|---------|
| 1 | 1–2 分 | 0–1 分 |
| 3 | 6–7 分 | 5 分 |
| 5 | 9–10 分 | 8 分 |

> 5 級基本上就是國中、高中組的金牌等級。
`,
c:`
# 第 68 章：APCS 新制與 C (C)

## 68.1 觀念題 vs 實作題

跟 C++ 版完全相同：60 分鐘 25 題觀念 + 150 分鐘 4 題實作。

## 68.2 為什麼選 C？

- 速度最快、記憶體最省
- 教育部高中課綱常用 C 入門
- **但**：少了 STL，要自己手刻資料結構（heap、sort、map）

> 若你只會 C，沒寫過 C++ 的 vector / sort — 強烈建議至少學會 C++ 的 STL，否則同樣 APCS 題目你會比 C++ 選手吃力很多。

## 68.3 C 解題模板

\`\`\`c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define MAXN 100005

int a[MAXN];
int cmp(const void *x, const void *y) {
    return *(int*)x - *(int*)y;
}

int main(void) {
    int n;
    scanf("%d", &n);
    for (int i = 0; i < n; i++) scanf("%d", &a[i]);

    qsort(a, n, sizeof(int), cmp);   // C 標準排序

    return 0;
}
\`\`\`

## 68.4 C 版的常見痛點

- 沒有 vector → 用固定大小陣列（要算好 MAXN）
- 沒有 map → 要用 hash table 或排序 + binary search
- 沒有 string → 用 \`char[]\` + strcpy/strcmp
- 沒有 set → 用排序去重或自刻 BST

> 解題時間敏感的題目，C 反而吃虧（要寫的更多）。
`,
java:`
# 第 68 章：APCS 新制與 Java (Java)

## 68.1 觀念題 vs 實作題

跟 C++ 版完全相同。

## 68.2 Java 在 APCS 的優劣

✅ **優點**
- HashMap / TreeMap / ArrayList / PriorityQueue 標準庫齊全
- 整數沒有溢位的 BigInteger
- 字串操作（split / substring / toCharArray）簡單

⚠️ **缺點**
- 啟動慢（JVM 暖機要 100–300ms）— 寬鬆 TLE 才行
- I/O 慢，**一定要用 BufferedReader**，不能用 Scanner
- 寫起來比 C++ 囉嗦（凡事要包 class）

## 68.3 Java 解題模板

\`\`\`java
import java.io.*;
import java.util.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StreamTokenizer in = new StreamTokenizer(br);
        StringBuilder sb = new StringBuilder();

        in.nextToken(); int n = (int) in.nval;
        int[] a = new int[n];
        for (int i = 0; i < n; i++) {
            in.nextToken();
            a[i] = (int) in.nval;
        }

        // 解題...

        System.out.print(sb);
    }
}
\`\`\`

- \`StreamTokenizer\` 是 Java 最快的數字 I/O
- \`StringBuilder\` 累積輸出，最後一次印 — 避免 println 變慢

## 68.4 Java 解 APCS 的小撇步

- 全程 \`System.out.println\` → 確實會 TLE
- 用 PrintWriter + flush 才快
- HashMap 在大量小操作下比 C++ unordered_map 還慢，視題目可能需要手刻
`
},
69:{
cpp:`
# 第 69 章：快速冪與模運算【高級題】(C++)

求 a^n mod m，APCS 高級題常見。

## 69.1 為什麼不能直接算 pow(a, n)

n 大時 a^n 會爆 long long。即使存得下，每步也要 O(1) — 共 O(n)，n=10⁹ 直接 TLE。

## 69.2 快速冪：O(log n)

把 n 拆成二進位，逐位平方：

\`\`\`cpp
typedef long long ll;
ll fast_pow(ll a, ll n, ll mod) {
    ll res = 1;
    a %= mod;
    while (n > 0) {
        if (n & 1) res = res * a % mod;
        a = a * a % mod;
        n >>= 1;
    }
    return res;
}
\`\`\`

> ⚠️ **一定要 long long**！\`a * a\` 中 a 可達 10⁹，平方就溢位 int。

## 69.3 模逆元（費馬小定理）

當 mod 是質數，\`a\` 的反元素 = \`a^(mod-2) mod mod\`：
\`\`\`cpp
ll inv = fast_pow(a, MOD - 2, MOD);
\`\`\`

組合數 \`C(n,k) mod p\` 常用。

## 69.4 矩陣快速冪 → 線性遞迴加速

費氏數列 [F(n+1), F(n)] = [[1,1],[1,0]] · [F(n), F(n-1)]：用矩陣快速冪 → O(log n)。

## 69.5 陷阱清單

- \`a\` 進函式先 \`a %= mod\`，避免一開始就溢位
- mod 是質數才能用費馬，否則要 extgcd
- \`n = 0\` 時答案是 1（\`0^0\` 慣例為 1）
`,
c:`
# 第 69 章：快速冪與模運算【高級題】(C)

跟 C++ 版**完全一樣的演算法**，只是用 C 寫。

## 69.1 C 版的 fast_pow

\`\`\`c
typedef long long ll;
ll fast_pow(ll a, ll n, ll mod) {
    ll res = 1;
    a %= mod;
    while (n > 0) {
        if (n & 1) res = res * a % mod;
        a = a * a % mod;
        n >>= 1;
    }
    return res;
}
\`\`\`

完全可以複製 C++ 版 — 連 \`typedef long long ll;\` 都一樣。

## 69.2 為什麼要 long long

\`int\` 上限約 2×10⁹。\`a*a\` 中 a 達 10⁹ → 平方 = 10¹⁸，**遠超 int**。\`long long\` 上限約 9×10¹⁸，剛好夠用。

## 69.3 列印 long long 的格式符

\`\`\`c
printf("%lld\\n", fast_pow(2, 10, 1000000007));
\`\`\`

**不能用 \`%d\`**！\`%d\` 對應 int，會印錯。

## 69.4 完整範例

\`\`\`c
#include <stdio.h>
typedef long long ll;
const ll MOD = 1000000007;

ll fast_pow(ll a, ll n, ll mod) {
    ll res = 1; a %= mod;
    while (n > 0) {
        if (n & 1) res = res * a % mod;
        a = a * a % mod;
        n >>= 1;
    }
    return res;
}

int main(void) {
    ll a, n;
    scanf("%lld %lld", &a, &n);
    printf("%lld\\n", fast_pow(a, n, MOD));
    return 0;
}
\`\`\`
`,
java:`
# 第 69 章：快速冪與模運算【高級題】(Java)

## 69.1 Java 版的 fast_pow

\`\`\`java
static long fastPow(long a, long n, long mod) {
    long res = 1;
    a %= mod;
    while (n > 0) {
        if ((n & 1) == 1) res = res * a % mod;
        a = a * a % mod;
        n >>= 1;
    }
    return res;
}
\`\`\`

跟 C/C++ 算法完全一樣，但要用 \`long\` 不是 \`int\`。

## 69.2 Java 偷吃步：BigInteger 內建 modPow

\`\`\`java
import java.math.BigInteger;

BigInteger a = BigInteger.valueOf(2);
BigInteger n = BigInteger.valueOf(1000000);
BigInteger mod = BigInteger.valueOf(1_000_000_007);
BigInteger ans = a.modPow(n, mod);
System.out.println(ans);
\`\`\`

\`modPow\` 內部就是快速冪。**APCS 解題若怕寫錯，直接用 BigInteger 也可以**，但比手刻 long 慢 5–10 倍。

## 69.3 模逆元

費馬小定理（mod 為質數）：
\`\`\`java
long inv = fastPow(a, MOD - 2, MOD);
\`\`\`

或 BigInteger：
\`\`\`java
BigInteger inv = a.modInverse(BigInteger.valueOf(MOD));
\`\`\`

## 69.4 整數陷阱

- Java 沒有 \`unsigned\` — 一切都是有號 long
- \`(n & 1) == 1\` 用 \`==\` 是因為 \`n & 1\` 是 long，不能直接當布林（不像 C）
- 比較大數運算用 \`BigInteger\`，不會溢位但慢
`
},
70:{
cpp:`
# 第 70 章：分治與逆序對【高級題】(C++)

## 70.1 什麼是分治

「**分**而**治**之」 = 把問題拆成更小的子問題、各自解、再合併。

經典分治：
- 合併排序 (merge sort) — O(n log n)
- 二分搜尋 (binary search) — O(log n)
- 逆序對計數 (inversion count) — O(n log n)
- 最近點對 — O(n log n)

## 70.2 逆序對：合併排序順便數

「逆序對」= \`i < j\` 但 \`a[i] > a[j]\` 的數對。例如 \`[3, 1, 2]\` 有 2 對 (3,1)、(3,2)。

\`\`\`cpp
#include <vector>
using namespace std;
typedef long long ll;

ll merge_count(vector<int>& a, int l, int r) {
    if (l >= r) return 0;
    int mid = (l + r) / 2;
    ll cnt = merge_count(a, l, mid) + merge_count(a, mid + 1, r);

    vector<int> tmp;
    int i = l, j = mid + 1;
    while (i <= mid && j <= r) {
        if (a[i] <= a[j]) tmp.push_back(a[i++]);
        else {
            tmp.push_back(a[j++]);
            cnt += mid - i + 1;     // a[i..mid] 都比 a[j-1] 大
        }
    }
    while (i <= mid) tmp.push_back(a[i++]);
    while (j <= r)   tmp.push_back(a[j++]);
    for (int k = 0; k < (int)tmp.size(); k++) a[l + k] = tmp[k];
    return cnt;
}
\`\`\`

關鍵：合併時若右半段元素 \`a[j]\` 比左半段 \`a[i]\` 小，則左半 \`a[i..mid]\` 全都跟 \`a[j]\` 構成逆序對，一次加 \`mid - i + 1\`。

## 70.3 為什麼是 O(n log n)

- 每層合併總共 O(n)
- 共 log n 層
- 合起來 O(n log n)

> 直接 brute force 兩重迴圈算逆序對是 O(n²) — n = 10⁵ 就 TLE。

## 70.4 用樹狀陣列也行

逆序對也可以用 BIT (Binary Indexed Tree) O(n log n) 解：
1. 離散化座標
2. 從右往左掃，每次查「右邊有幾個比自己小」、再插入自己

兩種寫法都常見，看個人偏好。
`,
c:`
# 第 70 章：分治與逆序對【高級題】(C)

C 版分治跟 C++ 一樣，但要用陣列 + malloc，沒有 vector 方便。

## 70.1 C 版合併計算逆序對

\`\`\`c
#include <stdio.h>
#include <stdlib.h>
typedef long long ll;

int tmp[200005];

ll merge_count(int *a, int l, int r) {
    if (l >= r) return 0;
    int mid = (l + r) / 2;
    ll cnt = merge_count(a, l, mid) + merge_count(a, mid + 1, r);

    int i = l, j = mid + 1, k = l;
    while (i <= mid && j <= r) {
        if (a[i] <= a[j]) tmp[k++] = a[i++];
        else {
            tmp[k++] = a[j++];
            cnt += mid - i + 1;
        }
    }
    while (i <= mid) tmp[k++] = a[i++];
    while (j <= r)   tmp[k++] = a[j++];
    for (int x = l; x <= r; x++) a[x] = tmp[x];
    return cnt;
}

int main(void) {
    int n;
    scanf("%d", &n);
    static int a[200005];
    for (int i = 0; i < n; i++) scanf("%d", &a[i]);
    printf("%lld\\n", merge_count(a, 0, n - 1));
    return 0;
}
\`\`\`

## 70.2 跟 C++ 版差別

- 用全域 / static 陣列代替 vector
- \`merge_count\` 結尾改 \`tmp\` 寫進 a 用迴圈
- 一律 \`long long\` 計數（最多 n(n-1)/2 ≈ 5×10⁹，會爆 int）

## 70.3 為什麼用 static / 全域 \`tmp\`

每次遞迴都 malloc / free 太慢。**開全域** 一輩子用同一塊記憶體最快。

## 70.4 別的分治例子

- 快速排序 (quicksort) — 平均 O(n log n)
- 合併排序 (mergesort) — 最壞 O(n log n)
- 找第 k 小 (quickselect) — 平均 O(n)
`,
java:`
# 第 70 章：分治與逆序對【高級題】(Java)

## 70.1 Java 版合併計算逆序對

\`\`\`java
import java.util.*;

public class Main {
    static int[] tmp;

    static long mergeCount(int[] a, int l, int r) {
        if (l >= r) return 0;
        int mid = (l + r) / 2;
        long cnt = mergeCount(a, l, mid) + mergeCount(a, mid + 1, r);

        int i = l, j = mid + 1, k = l;
        while (i <= mid && j <= r) {
            if (a[i] <= a[j]) tmp[k++] = a[i++];
            else {
                tmp[k++] = a[j++];
                cnt += mid - i + 1;
            }
        }
        while (i <= mid) tmp[k++] = a[i++];
        while (j <= r)   tmp[k++] = a[j++];
        for (int x = l; x <= r; x++) a[x] = tmp[x];
        return cnt;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] a = new int[n];
        tmp = new int[n];
        for (int i = 0; i < n; i++) a[i] = sc.nextInt();
        System.out.println(mergeCount(a, 0, n - 1));
    }
}
\`\`\`

## 70.2 Java 版重點

- 計數一定用 \`long\`（n=10⁵ 時逆序對數最多 5×10⁹，會爆 int）
- \`tmp\` 開**一次**（static 全域），不在遞迴內每次 \`new\`
- 大量 I/O 用 \`BufferedReader\` 不要用 Scanner

## 70.3 跟 C++ / C 比較

| | C / C++ | Java |
|---|---|---|
| 暫存陣列 | static 全域 | static int[] tmp |
| 計數型別 | long long | long |
| I/O 速度 | cin/scanf 快 | Scanner 慢，需換 BufferedReader |

## 70.4 別的分治例子

- 快速排序 \`Arrays.sort\`（int[] 用雙樞紐快排）
- 二分搜 \`Arrays.binarySearch\`
- 找第 k 小：Java 沒內建 quickselect，要自刻
`
},

// ═══ C++ 專項章節 (71–78) ════════════════════════════════════════
71:{
cpp:`
# 第 36 章：STL 完整版 — 容器與迭代器

STL（Standard Template Library）是 C++ 最大武器。學完整套 = 戰力翻倍。

## 36.1 容器分類

| 類別 | 代表容器 | 特性 |
|------|---------|------|
| **序列** | \`vector\`, \`deque\`, \`list\` | 有順序、可重複 |
| **關聯** | \`map\`, \`set\` | 自動排序、O(log n) |
| **無序關聯** | \`unordered_map\`, \`unordered_set\` | hash 表、平均 O(1) |
| **容器配接器** | \`stack\`, \`queue\`, \`priority_queue\` | 受限介面，包在別的容器外 |

## 36.2 vector — 最常用

\`\`\`cpp
#include <vector>
vector<int> v = {1, 2, 3};
v.push_back(4);        // 尾端加
v.pop_back();          // 尾端刪
v.size();              // 數量
v[0];                  // 索引（不檢查）
v.at(0);               // 索引（檢查越界）
v.front(); v.back();   // 頭尾
v.clear();             // 清空
\`\`\`

**動態擴容**：當空間不足時自動 ×2，攤提下 \`push_back\` 仍是 O(1)。

## 36.3 deque — 雙端佇列

\`\`\`cpp
deque<int> dq;
dq.push_front(1);      // 頭加（vector 沒有！）
dq.push_back(2);
dq.pop_front();
\`\`\`

> APCS 滑動視窗最大值常用 \`deque<int>\` 存索引。

## 36.4 map / set — 自動排序

\`\`\`cpp
#include <map>
#include <set>

map<string, int> cnt;
cnt["apple"]++;        // 自動建立 key
cnt["apple"]++;
for (auto& [k, v] : cnt) cout << k << " " << v << "\\n";

set<int> s = {3, 1, 4, 1, 5};   // 自動去重 + 排序
s.insert(2);
s.erase(3);
if (s.count(4)) cout << "有 4";
\`\`\`

底層紅黑樹 → 操作都是 O(log n)。

## 36.5 unordered_map / unordered_set — hash 表

\`\`\`cpp
#include <unordered_map>
unordered_map<string, int> h;
h["apple"] = 5;        // 平均 O(1)，最壞 O(n)
\`\`\`

> 競賽不要直接用！會被特意構造的測資打爆。要加自訂 hash：
\`\`\`cpp
struct CustomHash {
    size_t operator()(int x) const {
        x = ((x >> 16) ^ x) * 0x45d9f3b;
        x = ((x >> 16) ^ x) * 0x45d9f3b;
        return (x >> 16) ^ x;
    }
};
unordered_map<int, int, CustomHash> safe;
\`\`\`

## 36.6 priority_queue — 堆

\`\`\`cpp
#include <queue>
priority_queue<int> pq;              // 預設大根堆
pq.push(3); pq.push(1); pq.push(2);
cout << pq.top();   // 3
pq.pop();

priority_queue<int, vector<int>, greater<int>> minpq;  // 小根堆
\`\`\`

> Dijkstra 必備、合併 k 個有序串列必備。

## 36.7 迭代器

\`\`\`cpp
for (auto it = v.begin(); it != v.end(); ++it) cout << *it;
for (auto& x : v) cout << x;                        // 範圍 for，現代寫法
for (int i = 0; i < (int)v.size(); ++i) cout << v[i];
\`\`\`

> **\`.size()\` 是 unsigned**！\`for(int i=0; i<v.size()-1; i++)\` 在 v 為空時 \`v.size()-1\` 會變成大正整數，無限跑。要 cast 成 int 或用 \`(int)v.size()-1 >= 0\` 防呆。

## 36.8 容器選擇速查表

| 想做的事 | 用這個 | 原因 |
|----------|--------|------|
| 動態陣列 | \`vector\` | 預設首選，cache 友善 |
| 兩端 push/pop | \`deque\` | 滑動視窗、單調佇列 |
| 鍵值對 + 排序 | \`map\` | 紅黑樹 O(log n) |
| 鍵值對 + 速度 | \`unordered_map\` | hash 平均 O(1) |
| 取 top k | \`priority_queue\` | Dijkstra / 哈夫曼 |
| 集合運算 | \`set\` | union/intersect 配 STL algorithm |
| 固定大小快取 | \`array\` | 編譯期決定，零開銷 |

## 36.9 APCS 實戰：滑動視窗最大值

deque 存 index、單調遞減維護最大值 O(n)：

\`\`\`cpp
deque<int> dq;
for (int i = 0; i < n; i++) {
    while (!dq.empty() && a[dq.back()] <= a[i]) dq.pop_back();
    dq.push_back(i);
    if (dq.front() <= i - k) dq.pop_front();
    if (i >= k - 1) cout << a[dq.front()] << " ";
}
\`\`\`

## 36.10 試試看

下方練習：用 \`map\` 數字串中每個字母出現次數，照字母序輸出。
`,
c:``,
java:``
},
72:{
cpp:`
# 第 37 章：模板 template 與 auto 推導

模板讓你寫**一份程式碼吃多種型別**。STL 的 vector、sort 就是模板做的。

## 37.1 函式模板

\`\`\`cpp
template<typename T>
T myMax(T a, T b) {
    return a > b ? a : b;
}
cout << myMax(3, 5);        // T 自動推為 int → 5
cout << myMax(1.5, 2.7);    // T 自動推為 double → 2.7
cout << myMax(string("a"), string("b"));   // T 自動推為 string
\`\`\`

> 不寫模板的話，要為每個型別寫一份函式。模板 = 一份原始碼，編譯器自動產生需要的版本。

## 37.2 類別模板

\`\`\`cpp
template<typename T>
class Box {
    T value;
public:
    Box(T v) : value(v) {}
    T get() { return value; }
};
Box<int> b1(42);
Box<string> b2("hello");
\`\`\`

\`vector<int>\`、\`map<string, int>\` 就是 class template，\`<...>\` 內填型別。

## 37.3 auto 關鍵字（C++11 起）

\`\`\`cpp
auto x = 42;            // x 是 int
auto y = 3.14;          // y 是 double
auto v = vector<int>{1,2,3};
for (auto& e : v) e *= 2;       // 範圍 for
auto it = v.begin();    // 比 vector<int>::iterator 短多了
\`\`\`

**auto 不是「動態型別」** — 編譯期確定型別。

## 37.4 結構化綁定（C++17）

\`\`\`cpp
map<string, int> cnt = {{"a", 1}, {"b", 2}};
for (auto& [key, val] : cnt) cout << key << " " << val << "\\n";
pair<int, int> p = {1, 2};
auto [x, y] = p;
\`\`\`

> Python 的 \`for k, v in cnt.items():\` 在 C++17 對應這個語法。

## 37.5 編譯時間爆炸

模板**全部展開在編譯期** — 用越多模板，編譯越慢、錯誤訊息越長。STL 模板錯誤訊息經常上百行。

## 37.6 SFINAE / if constexpr — 模板分支

C++17 \`if constexpr\` 可以在編譯期分支，淘汰掉不該編譯的路徑：

\`\`\`cpp
template<typename T>
void print(T x) {
    if constexpr (is_integral_v<T>) cout << "int: " << x;
    else if constexpr (is_floating_point_v<T>) cout << "float: " << x;
    else cout << "other";
}
\`\`\`

舊版要用 SFINAE \`enable_if\` 寫超長 — \`if constexpr\` 一行解決。

## 37.7 與 C++ 跟 Java/Python 泛型對比

| | C++ template | Java generics | Python duck typing |
|---|--------------|---------------|--------------------|
| 何時檢查 | 編譯期，每型別產生一份 | 編譯期，執行期擦除 | 執行期 |
| 速度 | 最快（無動態派送） | 中等 | 最慢 |
| 錯誤訊息 | 噩夢 | 還行 | 執行時才爆 |

## 37.8 試試看
`,
c:``,
java:``
},
73:{
cpp:`
# 第 38 章：智慧指標 & RAII

C++ 的祕密武器：把資源管理綁在**物件生命週期**上 — 不用 free，不用記得 close。

## 38.1 RAII 是什麼

**R**esource **A**cquisition **I**s **I**nitialization：建構子取得資源、解構子釋放資源。物件離開作用域就自動清理。

\`\`\`cpp
{
    vector<int> v(1000000);   // 建構：配 1MB
    // 用 v
}   // 離開大括號：v 解構，記憶體自動還
\`\`\`

> 對比 C：\`int* p = malloc(...); ... free(p);\` — 漏寫 free 就洩漏，多寫就崩。

## 38.2 unique_ptr — 獨佔擁有

\`\`\`cpp
#include <memory>
unique_ptr<int> p = make_unique<int>(42);
cout << *p;     // 42
// 不用 delete，p 離開作用域自動釋放

// 不能複製，只能 move
unique_ptr<int> q = move(p);    // p 變空，q 接管
\`\`\`

## 38.3 shared_ptr — 共享擁有

\`\`\`cpp
shared_ptr<int> a = make_shared<int>(42);
shared_ptr<int> b = a;          // 引用計數 +1
cout << a.use_count();          // 2
// 兩個都離開作用域才釋放
\`\`\`

底層用引用計數（reference counting）。注意**循環引用會洩漏** — 解法用 \`weak_ptr\` 打破環。

## 38.4 為什麼不用 raw pointer？

\`\`\`cpp
int* p = new int(42);
// ... 中間發生例外
delete p;        // 永遠不會執行 → 洩漏！
\`\`\`

unique_ptr / shared_ptr **保證** 解構執行（exception-safe）。

## 38.5 RAII 不只用在記憶體

\`\`\`cpp
ifstream f("data.txt");    // 建構：開檔
// 用 f
// 離開作用域：f 解構，自動關檔（不用 close）

lock_guard<mutex> lk(m);   // 建構：上鎖
// 用共享資源
// 離開作用域：自動解鎖
\`\`\`

> ifstream、lock_guard、unique_ptr 都是 RAII 設計 — C++ 哲學的精髓。

## 38.6 weak_ptr 解循環引用

\`\`\`cpp
struct Node {
    shared_ptr<Node> next;
    weak_ptr<Node> parent;   // 不增加引用計數
};
\`\`\`

雙向結構（parent ↔ child）若雙方都 shared_ptr，引用計數永遠 ≥1 → leak。weak_ptr 不算計數，需要時 \`p.lock()\` 升級成 shared_ptr。

## 38.7 自訂 deleter

\`\`\`cpp
unique_ptr<FILE, decltype(&fclose)> f(fopen("a.txt", "r"), &fclose);
// 離開作用域自動 fclose
\`\`\`

把任何「成對的 acquire / release」包成 RAII。socket、handle、mutex 都適用。

## 38.8 試試看


## 🧠 設計動機：C++ 為什麼不用垃圾回收？

這不是技術限制，是刻意選擇。垃圾回收（GC）有兩個根本問題：

1. **不確定性暫停（Stop-the-world）**：GC 執行時需要暫停程式。Java 的 GC 暫停可達數毫秒到數百毫秒。對即時系統（心臟監視器、自動駕駛、遊戲引擎）這是無法接受的。

2. **資源管理不只有記憶體**：GC 只管記憶體，不管檔案、Socket、資料庫連線、Mutex 等資源。你仍然需要手動 close/unlock。Java 的 \`finally\` 和 Python 的 \`with\` 都是在補這個漏洞。

RAII 同時解決了這兩個問題：
- 物件離開作用域立刻執行解構子，**確定性**地釋放所有資源
- 記憶體、檔案、Socket、Mutex 全部用同一套機制管理

代價是「程式設計師要理解物件生命週期」。這也是 C++ 學習曲線陡峭的真正原因：不是語法複雜，而是需要建立「資源與生命週期綁定」的思維。
`,
c:``,
java:``
},
74:{
cpp:`
# 第 39 章：Move 語意與右值參考

C++11 最重要的新功能。理解這個 = 真懂現代 C++。

## 39.1 為什麼需要 move

考慮：
\`\`\`cpp
vector<int> makeBig() { vector<int> v(1000000); return v; }
vector<int> w = makeBig();
\`\`\`

C++03 時代：要**複製** 1M 個元素回傳 → 慢。
C++11 之後：**move** — 直接把內部指標搬過去 → 快 1000 倍。

## 39.2 lvalue vs rvalue

- **lvalue** = 有名字的東西，可取址：\`int x = 5;\` 中的 \`x\`
- **rvalue** = 沒名字、短命的東西：\`5\`、\`x + 3\`、函式回傳值

\`int& a = x;\`     ← lvalue reference
\`int&& a = 5;\`    ← rvalue reference（&&）

## 39.3 std::move — 把 lvalue 轉成 rvalue

\`\`\`cpp
vector<int> v = {1, 2, 3};
vector<int> w = move(v);    // 搬空 v 給 w
// v.size() 現在是 0，內容歸 w
\`\`\`

> \`move\` 不會真的移動 — 它只是 \`static_cast\` 成 rvalue reference，讓後續呼叫的 move constructor 接管。

## 39.4 移動建構子

\`\`\`cpp
class MyBuf {
    int* data; int n;
public:
    // 移動建構子（注意 &&）
    MyBuf(MyBuf&& other) : data(other.data), n(other.n) {
        other.data = nullptr;     // 原來的 other 變空
        other.n = 0;
    }
};
\`\`\`

關鍵：「偷指標 + 把原物件清空」。

## 39.5 五大法則（rule of five）

如果你自訂了**解構子**、**複製建構子**、**複製賦值**、**移動建構子**、**移動賦值** 其中一個，通常五個都要寫。

\`\`\`cpp
class MyBuf {
    ~MyBuf();
    MyBuf(const MyBuf&);
    MyBuf& operator=(const MyBuf&);
    MyBuf(MyBuf&&);
    MyBuf& operator=(MyBuf&&);
};
\`\`\`

或用 \`= default\` / \`= delete\` 顯式指定。

## 39.6 完美轉發 perfect forwarding

寫泛型工廠函式時：

\`\`\`cpp
template<typename T, typename... Args>
unique_ptr<T> make_my(Args&&... args) {
    return unique_ptr<T>(new T(std::forward<Args>(args)...));
}
\`\`\`

\`std::forward\` 保留 lvalue/rvalue 屬性 — lvalue 進來仍是 lvalue、rvalue 進來仍是 rvalue。\`make_unique\` 內部就是這樣寫的。

## 39.7 何時用 move、何時不用

| 情境 | 寫法 |
|------|------|
| return 區域變數 | 直接 return（編譯器自動 move/RVO） |
| return std::move(x) | ❌ 抑制 RVO，反而變慢 |
| 把參數塞進容器 | \`v.push_back(move(x))\` ✅ |
| 用過 x 後還想再用 | 不要 move |

## 39.8 試試看


## 🧠 設計動機：C++ 為什麼選擇「值語意」？

Java 的物件預設是「參考語意」：\`List b = a;\` 讓 b 和 a 指向同一個物件。修改 b 會影響 a。這讓物件傳遞很輕量，但也帶來了混淆。

C++ 的哲學相反：預設複製整個物件（值語意）。\`vector<int> w = v;\` 會產生一個完全獨立的副本。修改 w 不影響 v。

**值語意的優點**：
- 程式行為更可預測：函式收到的是你的副本，不會偷改你的資料
- 不需要垃圾回收器：物件離開作用域就確定性地銷毀
- 更符合數學直覺：\`x = y\` 就是「x 的值等於 y」

**值語意的代價**：複製大型物件（100 萬個元素的 vector）很慢。

**Move 語意是什麼？** 就是「值語意的效能補丁」。既保留「物件是獨立的」的語意，又允許在特定情況下用「搬移」取代「複製」，完全消除不必要的複製開銷。
`,
c:``,
java:``
},
75:{
cpp:`
# 第 40 章：Lambda 與函式物件

Lambda = 寫在語句中的小函式。STL 演算法的好搭擋。

## 40.1 基本語法

\`\`\`cpp
auto add = [](int a, int b) { return a + b; };
cout << add(3, 5);     // 8
\`\`\`

格式：\`[捕獲列表](參數) { 本體 }\`

## 40.2 跟 sort 搭配

\`\`\`cpp
vector<int> v = {3, 1, 4, 1, 5, 9, 2};
sort(v.begin(), v.end(), [](int a, int b) {
    return a > b;       // 由大到小
});
\`\`\`

不用為了一次性的比較函式單獨開一個函式。

## 40.3 捕獲（capture）

Lambda 可以「抓住」外面的變數：

\`\`\`cpp
int n = 10;
auto f = [n](int x) { return x + n; };       // 值捕獲
auto g = [&n](int x) { return x + n; };      // 參考捕獲
auto h = [=](int x) { return x + n; };       // 全部值捕獲
auto k = [&](int x) { return x + n; };       // 全部參考捕獲
\`\`\`

> ⚠️ **參考捕獲到區域變數**：lambda 跑時若該變數已死，就是 undefined！STL 演算法、回呼用 lambda 都要小心。

## 40.4 函式物件 functor

Lambda 底層就是「有 \`operator()\` 的物件」：

\`\`\`cpp
struct Adder {
    int n;
    Adder(int n) : n(n) {}
    int operator()(int x) { return x + n; }
};
Adder add5(5);
cout << add5(10);    // 15
\`\`\`

\`priority_queue\` 自訂比較就用 functor 或 lambda。

## 40.5 std::function — 萬用函式容器

\`\`\`cpp
#include <functional>
function<int(int, int)> f = [](int a, int b) { return a + b; };
// 可以裝下任何「兩個 int 回傳 int」的東西
\`\`\`

> std::function 內部有虛函式呼叫，比直接呼叫 lambda 慢 — 競賽不建議。

## 40.6 遞迴 lambda（C++14 起）

Lambda 沒名字，要遞迴有兩招：

\`\`\`cpp
// 1. function 包起來（慢）
function<int(int)> fact = [&](int n){ return n<=1 ? 1 : n*fact(n-1); };

// 2. 把自己當參數傳（快、推薦）
auto fact = [](auto self, int n) -> int {
    return n <= 1 ? 1 : n * self(self, n-1);
};
fact(fact, 5);

// 3. C++23 起：deducing this，更乾淨
\`\`\`

DFS / 遞迴公用程式用 lambda 寫，不用為了一次性遞迴另開全域函式。

## 40.7 mutable lambda

\`\`\`cpp
auto counter = [n=0]() mutable { return ++n; };
counter(); counter();   // 1, 2
\`\`\`

預設值捕獲是 const，加 \`mutable\` 才能改自己的副本。

## 40.8 試試看
`,
c:``,
java:``
},
76:{
cpp:`
# 第 41 章：<algorithm> 演算法庫

C++ 內建一大堆**通用演算法** — 不用自己刻 sort、binary_search、min/max。

## 41.1 排序

\`\`\`cpp
#include <algorithm>
vector<int> v = {3, 1, 4, 1, 5};
sort(v.begin(), v.end());                  // 預設由小到大
sort(v.rbegin(), v.rend());                // 由大到小（反向 iterator）
sort(v.begin(), v.end(), greater<int>());  // 同上
sort(v.begin(), v.end(), [](int a, int b){ return a > b; });  // lambda
\`\`\`

> STL sort 是 introsort（quicksort + heapsort + insertion）— O(n log n) 最壞。

## 41.2 二分搜尋（要先排序）

\`\`\`cpp
binary_search(v.begin(), v.end(), 4);   // 回 true/false
lower_bound(v.begin(), v.end(), 4);     // 第一個 >= 4 的 iterator
upper_bound(v.begin(), v.end(), 4);     // 第一個 > 4 的 iterator
\`\`\`

> lower_bound / upper_bound 是 APCS 高級題核心 — 比手刻二分簡單又快。

## 41.3 min / max / minmax

\`\`\`cpp
min(3, 5);                              // 3
min({1, 2, 3, 0, 5});                   // 0（initializer_list）
auto m = *min_element(v.begin(), v.end());
auto [mn, mx] = minmax_element(v.begin(), v.end());
\`\`\`

## 41.4 unique / reverse / rotate

\`\`\`cpp
sort(v.begin(), v.end());
auto last = unique(v.begin(), v.end());     // 把連續重複移到後面
v.erase(last, v.end());                     // 真的刪掉

reverse(v.begin(), v.end());
rotate(v.begin(), v.begin() + 2, v.end());  // 把前 2 個搬到後面
\`\`\`

## 41.5 accumulate / count / find

\`\`\`cpp
#include <numeric>
int sum = accumulate(v.begin(), v.end(), 0);
int cnt = count(v.begin(), v.end(), 4);
auto it = find(v.begin(), v.end(), 4);
if (it != v.end()) cout << "found at " << (it - v.begin());
\`\`\`

## 41.6 next_permutation

\`\`\`cpp
sort(v.begin(), v.end());
do {
    // 處理當前排列
} while (next_permutation(v.begin(), v.end()));
\`\`\`

枚舉所有排列 — n! 個。

## 41.7 partial_sort / nth_element — 部分排序

只要前 k 大、或第 k 大，不用整個排：

\`\`\`cpp
// 把最小的 3 個放到前面（其餘亂序）
partial_sort(v.begin(), v.begin()+3, v.end());

// 把第 k 名放到位置 k（左邊 <=、右邊 >=，但都不一定排序）
nth_element(v.begin(), v.begin()+k, v.end());
cout << v[k];   // 第 k+1 小
\`\`\`

\`nth_element\` 是 O(n) 平均，比 sort 的 O(n log n) 快 — 求中位數神器。

## 41.8 set_union / set_intersection

兩個**已排序**序列做集合運算：

\`\`\`cpp
vector<int> r;
set_intersection(a.begin(), a.end(), b.begin(), b.end(), back_inserter(r));
\`\`\`

## 41.9 試試看
`,
c:``,
java:``
},
77:{
cpp:`
# 第 42 章：string_view 與字串進階

C++17 新增 \`string_view\` — 不複製字串的「視窗」。

## 42.1 string 常用操作

\`\`\`cpp
string s = "hello world";
s.size();              // 11
s.substr(6, 5);        // "world"
s.find("world");       // 6（找不到回 string::npos）
s.replace(6, 5, "C++");// "hello C++"
s + " !";              // 串接
s += "!";
s[0] = 'H';            // 可改
\`\`\`

## 42.2 split — C++ 沒有內建！

要自己刻：

\`\`\`cpp
vector<string> split(const string& s, char delim) {
    vector<string> result;
    stringstream ss(s);
    string item;
    while (getline(ss, item, delim)) result.push_back(item);
    return result;
}
\`\`\`

> Python 的 \`s.split()\` 在 C++ 真的痛。

## 42.3 string_view — 避免複製

\`\`\`cpp
#include <string_view>
void print(string_view sv) {        // 接受 string 或 char*
    cout << sv << "\\n";
}
print("hello");
print(string("world"));
\`\`\`

\`string_view\` 只存指標 + 長度，不複製字串。傳大字串給函式時應該用 \`string_view\` 不是 \`const string&\` 也不是 \`const char*\`。

## 42.4 string_view 的坑

\`\`\`cpp
string_view sv;
{
    string s = "hello";
    sv = s;             // 指向 s
}
cout << sv;             // ❌ s 已死，sv 是 dangling
\`\`\`

> string_view 只是「視窗」— 原字串死了，視窗就壞了。

## 42.5 數字 ↔ 字串

\`\`\`cpp
int n = stoi("42");
double d = stod("3.14");
string s = to_string(42);
\`\`\`

## 42.6 字串比對相關

| 函式 | 用途 |
|------|------|
| \`s.find\` | 子字串搜 (O(nm) 簡單實作) |
| \`<regex>\` | 正則表達式（C++ 慢，少用） |
| \`std::hash<string>{}(s)\` | 字串雜湊 |

## 42.7 KMP / Z-function 模板

APCS 字串題：\`s.find\` 是 O(nm)，n=10⁶ 會 TLE。手刻 KMP：

\`\`\`cpp
vector<int> kmp(const string& s) {
    int n = s.size();
    vector<int> p(n, 0);
    for (int i = 1, j = 0; i < n; i++) {
        while (j > 0 && s[i] != s[j]) j = p[j-1];
        if (s[i] == s[j]) j++;
        p[i] = j;
    }
    return p;
}
\`\`\`

預處理 O(n)，配對 O(n+m)。

## 42.8 char vs string 的雷

\`\`\`cpp
string s = "hello";
s[100];        // 不會炸，但 undefined（讀到隨機 byte）
s.at(100);     // 丟 out_of_range exception
s + 'a';       // OK
s + 65;        // ⚠️ 把 65 當 ptrdiff，不是接 "A"！要 s + char(65)
\`\`\`

## 42.9 試試看
`,
c:``,
java:``
},
78:{
cpp:`
# 第 43 章：Concurrency 入門 std::thread

C++11 起內建多執行緒支援。

## 43.1 啟動 thread

\`\`\`cpp
#include <thread>
#include <iostream>
using namespace std;

void work(int id) {
    cout << "thread " << id << " running\\n";
}

int main() {
    thread t1(work, 1);
    thread t2(work, 2);
    t1.join();           // 等 t1 結束
    t2.join();
}
\`\`\`

> ⚠️ **必須 join 或 detach**。否則程式結束時 thread 還活著 → 直接 terminate。

## 43.2 共享資料 = 競爭條件

\`\`\`cpp
int counter = 0;
void inc() {
    for (int i = 0; i < 100000; i++) counter++;
}
thread t1(inc), t2(inc);
t1.join(); t2.join();
cout << counter;    // 可能是 100000、200000 或任意值！
\`\`\`

\`counter++\` 不是原子操作（讀→改→寫），兩個 thread 交錯就會壞。

## 43.3 mutex 互斥鎖

\`\`\`cpp
#include <mutex>
mutex m;
int counter = 0;

void inc() {
    for (int i = 0; i < 100000; i++) {
        lock_guard<mutex> lk(m);    // RAII 自動解鎖
        counter++;
    }
}
\`\`\`

\`lock_guard\` 是 RAII — 離開作用域自動 unlock，不會忘。

## 43.4 atomic — 原子操作

\`\`\`cpp
#include <atomic>
atomic<int> counter = 0;
void inc() {
    for (int i = 0; i < 100000; i++) counter++;     // 安全！
}
\`\`\`

對基本型別操作，\`atomic\` 比 mutex 快得多。

## 43.5 async / future — 拿回傳值

\`\`\`cpp
#include <future>
future<int> f = async([] { return 42; });
cout << f.get();     // 42（會阻塞等結果）
\`\`\`

## 43.6 死鎖避免

兩個 thread 都鎖 A→B 順序，但其中一個鎖 B→A → 雙方互等。**用 \`scoped_lock\` 一次鎖多個**：

\`\`\`cpp
scoped_lock lk(m1, m2);     // C++17，原子地鎖兩個
\`\`\`

## 43.7 condition_variable — thread 通知

生產者通知消費者「有貨了」：

\`\`\`cpp
mutex m;
condition_variable cv;
queue<int> q;

// 消費者
unique_lock<mutex> lk(m);
cv.wait(lk, []{ return !q.empty(); });
int x = q.front(); q.pop();

// 生產者
{ lock_guard<mutex> lk(m); q.push(42); }
cv.notify_one();
\`\`\`

## 43.8 與其他語言對比

| | C++ | Python | Java |
|---|---|---|---|
| 真平行 | ✅ | ❌ GIL | ✅ |
| 啟動成本 | 高 (~50μs) | 高 | 高 |
| 同步原語 | mutex/atomic/cv | threading.Lock | synchronized/Lock |
| 推薦池 | std::async | concurrent.futures | ExecutorService |

CPU 密集型任務在 C++ 跟 Java 都有真平行；Python 必須用 multiprocessing 才能繞過 GIL。

## 43.9 試試看
`,
c:``,
java:``
},

// ═══ C 專項章節 (79–86) ════════════════════════════════════════
79:{
cpp:``,
c:`
# 第 36 章：指標 — 從入門到深入

指標是 C 語言的靈魂。理解指標 = 真正會 C。

## 36.1 指標是什麼

\`int x = 42;\` — x 是一個盒子，裝 42。
\`int *p = &x;\` — p 是一個盒子，裝**「x 在哪裡」的地址**。

\`\`\`c
int x = 42;
int *p = &x;
printf("%d\\n", x);    // 42
printf("%p\\n", p);    // 0x7ffe... (x 的地址)
printf("%d\\n", *p);   // 42 (取 p 指向的值)
*p = 100;             // 改 p 指的東西
printf("%d\\n", x);    // 100
\`\`\`

| 符號 | 意義 |
|------|------|
| \`&x\` | 取 x 的地址 |
| \`*p\` | 取 p 指向的內容（解參考） |
| \`int *p\` | 宣告：p 是「指向 int 的指標」 |

## 36.2 為什麼要用指標

**1. 函式想改外面的變數**：
\`\`\`c
void swap(int *a, int *b) {
    int t = *a; *a = *b; *b = t;
}
int x = 1, y = 2;
swap(&x, &y);          // 傳地址進去
\`\`\`

> C 沒有「參考傳遞」(pass by reference) — 只能傳指標。

**2. 不複製大型結構**：函式參數是 \`struct Big b\` → 複製整個 b；改 \`struct Big *b\` → 只傳 8 byte 地址。

## 36.3 陣列就是指標

\`\`\`c
int a[5] = {1, 2, 3, 4, 5};
int *p = a;        // p 指向 a[0]
printf("%d\\n", a[2]);     // 3
printf("%d\\n", *(p + 2)); // 3，一樣
printf("%d\\n", p[2]);     // 3，也一樣
\`\`\`

\`a\` 在表達式中**就是** \`&a[0]\`，所以陣列與指標基本可互換。

## 36.4 NULL 與 segfault

\`\`\`c
int *p = NULL;
*p = 42;          // ❌ Segmentation fault：寫到 0 號地址
\`\`\`

C 不檢查指標是否有效 — 寫壞地址直接掛掉。**良好習慣：用前先判斷 NULL**。

## 36.5 const pointer

\`\`\`c
const int *p;        // 不能改 *p（指的東西是常數）
int * const p;       // 不能改 p （指標本身是常數）
const int * const p; // 都不能改
\`\`\`

**讀法**：從右往左 — 「p is a const pointer to const int」。

## 36.6 函式指標 vs 指標到函式

\`\`\`c
int (*f)(int);        // f 是「指向接收 int 回 int 的函式」的指標
int *g(int);          // g 是「接收 int 回 int*」的函式
\`\`\`

括號很重要 — 沒括號就完全變另一個東西。

## 36.7 指標進階：void* 與型別轉換

\`\`\`c
void *p;              // 萬用指標，不知道指向什麼型別
int x = 42;
p = &x;
int *ip = (int*)p;    // 用之前要 cast 回正確型別
printf("%d", *ip);
\`\`\`

\`malloc\` 回傳 \`void*\` 就是這個 — 不知道你要拿來裝什麼，由你 cast。\`memcpy\` / \`qsort\` 的參數也是 void*。

## 36.8 試試看
`,
java:``
},
80:{
cpp:``,
c:`
# 第 37 章：動態記憶體 malloc / free

當不知道資料量、或要在執行期才決定大小時，用 \`malloc\` 跟系統要記憶體。

## 37.1 malloc / free 基本

\`\`\`c
#include <stdlib.h>

int *arr = malloc(n * sizeof(int));
if (arr == NULL) { /* 配置失敗 */ exit(1); }

for (int i = 0; i < n; i++) arr[i] = i;

free(arr);            // 用完一定要還
arr = NULL;           // 防止後續誤用
\`\`\`

> \`sizeof(int)\` 通常是 4。\`malloc(n)\` 拿 n 個 byte；要 n 個 int 就 \`n * sizeof(int)\`。

## 37.2 calloc — 配 + 清零

\`\`\`c
int *arr = calloc(n, sizeof(int));     // 自動初始化為 0
\`\`\`

\`malloc\` 內容是垃圾值，\`calloc\` 保證 0。

## 37.3 realloc — 改變大小

\`\`\`c
arr = realloc(arr, new_n * sizeof(int));
\`\`\`

可能搬到新地方 — 原 \`arr\` 指標失效，要用回傳值更新。

## 37.4 二維陣列：陣列的陣列

\`\`\`c
int **grid = malloc(rows * sizeof(int *));
for (int i = 0; i < rows; i++) {
    grid[i] = malloc(cols * sizeof(int));
}
// 用完一個一個 free
for (int i = 0; i < rows; i++) free(grid[i]);
free(grid);
\`\`\`

> 比 Python 的 \`[[0]*cols for _ in range(rows)]\` 麻煩 10 倍 — 但靈活。

## 37.5 常見錯誤

| 錯誤 | 後果 |
|------|------|
| 忘記 \`free\` | 記憶體洩漏 |
| \`free\` 兩次 | 程式崩潰或 corrupt heap |
| 用了 \`free\` 後的指標 | undefined（dangling pointer） |
| 寫超出 \`malloc\` 範圍 | heap overflow，可能不立刻錯 |
| \`free(p+1)\` | undefined，只能 free 原本 malloc 回傳的指標 |

**最常見的痛點**：函式 \`malloc\` 後忘記 \`free\` → 程式跑越久越肥（洩漏）。

## 37.6 valgrind — 抓洩漏神器

\`\`\`bash
valgrind --leak-check=full ./prog
\`\`\`

每個 malloc 沒對應 free 都會列出來，並指出在哪行。

## 37.7 stack vs heap

| | stack | heap |
|---|---|---|
| 配置 | 自動（區域變數） | \`malloc\` |
| 釋放 | 自動（離開函式） | \`free\` |
| 速度 | 極快 | 慢 |
| 大小 | 小（通常 ~8MB） | 大（GB 級） |
| 失敗 | StackOverflow | malloc 回 NULL |

\`\`\`c
int big[10000000];   // ❌ stack overflow（超過 stack 大小）
int *big = malloc(10000000 * sizeof(int));   // ✅ heap 沒問題
\`\`\`

> APCS 題目開 10⁶ 以上大陣列要用 global 或 malloc，不要放函式裡的區域變數。

## 37.8 自訂簡易記憶體池

熱迴圈裡 malloc/free 很慢 — 一次配一大塊、自己切：

\`\`\`c
char pool[1<<20];
int pool_used = 0;
void* my_alloc(size_t n){
    void* p = pool + pool_used;
    pool_used += n;
    return p;
}
\`\`\`

OI 比賽寫 Trie / 線段樹常見的技巧，比動態 malloc 快數倍。

## 37.9 試試看
`,
java:``
},
81:{
cpp:``,
c:`
# 第 38 章：struct 與 union 進階

## 38.1 struct 基本

\`\`\`c
struct Point { int x, y; };
struct Point p = {3, 4};
printf("%d %d\\n", p.x, p.y);
\`\`\`

或用 \`typedef\` 省略：
\`\`\`c
typedef struct { int x, y; } Point;
Point p = {3, 4};
\`\`\`

## 38.2 指定欄位初始化（C99+）

\`\`\`c
Point p = {.x = 3, .y = 4};
\`\`\`

順序無所謂，沒寫的欄位自動 0。

## 38.3 巢狀 struct

\`\`\`c
typedef struct {
    Point top_left;
    Point bot_right;
} Rect;
Rect r = {{0, 0}, {10, 5}};
printf("%d\\n", r.top_left.x);
\`\`\`

## 38.4 struct 大小與 padding

\`\`\`c
struct A { char c; int i; };
printf("%zu\\n", sizeof(struct A));   // 多半是 8，不是 5
\`\`\`

CPU 對齊（alignment）規則：int 通常要從 4 的倍數開始。所以 char 後會插入 3 byte padding。

> **排好欄位順序**（大的放前面）可以節省空間。

## 38.5 union — 共用一塊記憶體

\`\`\`c
union Data {
    int i;
    float f;
    char s[4];
};
union Data d;
d.i = 0x41424344;
printf("%s\\n", d.s);     // "DCBA" 或 "ABCD"（看 endian）
\`\`\`

所有欄位共用同一塊記憶體；大小 = 最大欄位的大小。常用：型別轉換 hack、變體（variant）。

## 38.6 帶 tag 的 union（標籤聯合）

\`\`\`c
typedef struct {
    enum { TYPE_INT, TYPE_STR } type;
    union {
        int i;
        char *s;
    } data;
} Variant;
\`\`\`

模擬「動態型別」— Python 的變數可以裝任何東西，C 要這樣手刻。

## 38.7 bit field — 位元欄位

省記憶體的壓縮 struct：

\`\`\`c
struct Flags {
    unsigned int is_open  : 1;
    unsigned int is_dirty : 1;
    unsigned int level    : 4;   // 0..15
    unsigned int type     : 2;   // 0..3
};   // 一個 struct 共 8 bit = 1 byte（編譯器決定 padding）
\`\`\`

驅動程式、網路封包解析常見。

## 38.8 anonymous struct/union（C11）

\`\`\`c
struct {
    int kind;
    union {
        int i;
        char *s;
    };   // 不用名字！
} x;
x.kind = 1;
x.i = 42;       // 直接寫，不用 x.data.i
\`\`\`

讓 tagged union 用起來更乾淨。

## 38.9 試試看
`,
java:``
},
82:{
cpp:``,
c:`
# 第 39 章：函式指標與回呼

C 沒有 lambda、沒有 closure — 函式抽象靠**函式指標**。

## 39.1 函式指標宣告

\`\`\`c
int add(int a, int b) { return a + b; }

int main(void) {
    int (*f)(int, int) = add;    // f 是「指向接收兩 int、回傳 int 的函式」
    printf("%d\\n", f(3, 5));     // 8
    return 0;
}
\`\`\`

**讀法**：把名字框起來 — \`(*f)\` = f 是指標、\`(int, int)\` = 指向兩參數函式、\`int\` = 回傳 int。

## 39.2 typedef 讓宣告好讀

\`\`\`c
typedef int (*BinOp)(int, int);
BinOp f = add;
\`\`\`

\`BinOp\` 就是「接兩 int 回 int 的函式指標」型別。

## 39.3 qsort 用函式指標

\`\`\`c
#include <stdlib.h>

int cmp(const void *a, const void *b) {
    return *(int*)a - *(int*)b;
}

int main(void) {
    int arr[] = {3, 1, 4, 1, 5};
    qsort(arr, 5, sizeof(int), cmp);   // 第 4 參數是函式指標
}
\`\`\`

qsort 不知道你陣列裡是什麼 → 它呼叫你給的 cmp 來比較。

## 39.4 回呼模式（callback）

\`\`\`c
void forEach(int *arr, int n, void (*action)(int)) {
    for (int i = 0; i < n; i++) action(arr[i]);
}
void print_it(int x) { printf("%d\\n", x); }
forEach(arr, n, print_it);
\`\`\`

像 Python 的 \`map(f, list)\` — C 寫起來囉嗦得多。

## 39.5 沒有 closure

C 函式指標**不能捕獲外部變數**。若需要「狀態」，要靠 global 或多傳一個 \`void *context\`：

\`\`\`c
void forEach(int *arr, int n, void (*action)(int, void*), void *ctx) {
    for (int i = 0; i < n; i++) action(arr[i], ctx);
}
\`\`\`

\`pthread_create\` / \`qsort_r\` 都是這個套路 — 標準函式接收 void* 上下文。

## 39.6 函式指標陣列：dispatch table

把 switch 換成查表：

\`\`\`c
int add(int a, int b){ return a+b; }
int sub(int a, int b){ return a-b; }
int mul(int a, int b){ return a*b; }

int (*ops[])(int, int) = {add, sub, mul};
const char *names[] = {"add", "sub", "mul"};

int op = 1;
printf("%s = %d\\n", names[op], ops[op](10, 3));   // sub = 7
\`\`\`

直譯器、狀態機、虛擬機都靠這招分派指令。

## 39.7 試試看
`,
java:``
},
83:{
cpp:``,
c:`
# 第 40 章：字串處理 strcpy / strtok

C 沒有字串型別 — \`char []\` + 結尾 \`'\\0'\`。所有「字串操作」都是函式。

## 40.1 必背的 string.h

\`\`\`c
#include <string.h>

strlen(s);             // 長度（不含 \\0）
strcpy(dst, src);      // 複製
strncpy(dst, src, n);  // 複製最多 n 個 char
strcat(dst, src);      // 接在 dst 後面
strcmp(a, b);          // 比較：0=相等、<0=a<b、>0=a>b
strstr(s, sub);        // 找子字串，回指標或 NULL
\`\`\`

## 40.2 strcpy 的雷

\`\`\`c
char dst[5];
strcpy(dst, "hello world");   // ❌ 寫超出 5 byte，buffer overflow
\`\`\`

要用 \`strncpy\` 或自己檢查長度。**buffer overflow 是 C 安全漏洞的最大來源**。

## 40.3 strtok 切字串

\`\`\`c
char s[] = "apple,banana,cherry";
char *tok = strtok(s, ",");
while (tok != NULL) {
    printf("%s\\n", tok);
    tok = strtok(NULL, ",");   // 第二次開始第一參數是 NULL
}
\`\`\`

> ⚠️ **strtok 會改 s**（把分隔符換成 \`\\0\`）— 不能對字串常數用。
> ⚠️ **strtok 不是 thread-safe**（用全域狀態）— 多執行緒要用 \`strtok_r\`。

## 40.4 sprintf — 格式化到字串

\`\`\`c
char buf[100];
sprintf(buf, "%d + %d = %d", 1, 2, 3);   // buf = "1 + 2 = 3"
\`\`\`

更安全的版本：\`snprintf(buf, sizeof(buf), "...", ...)\` — 不會寫超出。

## 40.5 字串 ↔ 數字

\`\`\`c
int n = atoi("42");
double d = atof("3.14");
sprintf(buf, "%d", n);     // int → string
\`\`\`

> \`atoi\` 失敗回 0，分不出「真的 0」跟「失敗」。需要嚴格用 \`strtol\` 配合 errno。

## 40.6 字串比較常見錯誤

\`\`\`c
if (s == "hello") { ... }    // ❌ 比指標
if (strcmp(s, "hello") == 0) { ... }   // ✅ 比內容
\`\`\`

## 40.7 動態字串：手刻 string builder

要組大量 token 又怕 overflow，自己管 buffer：

\`\`\`c
typedef struct { char *buf; size_t len, cap; } Str;
void str_append(Str *s, const char *t) {
    size_t tlen = strlen(t);
    if (s->len + tlen + 1 > s->cap) {
        s->cap = (s->cap + tlen + 1) * 2;
        s->buf = realloc(s->buf, s->cap);
    }
    memcpy(s->buf + s->len, t, tlen);
    s->len += tlen;
    s->buf[s->len] = '\\0';
}
\`\`\`

C++ 的 \`string\` 在底層大致這樣做的；在 C 你要自己重來。

## 40.8 字串雜湊（APCS 進階）

\`\`\`c
unsigned long hash(const char *s){
    unsigned long h = 5381;
    int c;
    while ((c = *s++)) h = ((h << 5) + h) + c;   // h*33 + c
    return h;
}
\`\`\`

djb2 是最知名的快速字串雜湊。自製 hash map 必備。

## 40.9 試試看
`,
java:``
},
84:{
cpp:``,
c:`
# 第 41 章：巨集進階：條件編譯與變參

\`#define\` 是 C 的元程式 — 預處理器把巨集**文字替換**後才進編譯器。

## 41.1 常數巨集

\`\`\`c
#define MAX 1000005
#define PI 3.14159
int arr[MAX];
\`\`\`

> 現代 C 可以用 \`const int MAX = 1000005;\` — 但巨集可用於陣列大小（const 變數在某些編譯器不行）。

## 41.2 函式型巨集

\`\`\`c
#define MIN(a, b) ((a) < (b) ? (a) : (b))
\`\`\`

**每個參數都要加括號** — 否則 \`MIN(x+1, y)\` 展開會出怪事。

## 41.3 巨集的雷：副作用

\`\`\`c
int i = 5;
int m = MIN(i++, 10);   // i 變成 7（被算兩次）
\`\`\`

巨集是文字替換，\`i++\` 真的被展開兩次。**用內聯函式 \`static inline\` 比較安全**。

## 41.4 條件編譯

\`\`\`c
#ifdef DEBUG
    printf("[debug] x = %d\\n", x);
#endif

#if defined(__linux__)
    // linux 專屬程式碼
#elif defined(_WIN32)
    // windows 專屬
#endif
\`\`\`

編譯時 \`gcc -DDEBUG ...\` 才會帶入除錯訊息。正式版不加 → 整段消失，零開銷。

## 41.5 變參巨集（C99+）

\`\`\`c
#define LOG(fmt, ...) fprintf(stderr, "[log] " fmt "\\n", __VA_ARGS__)
LOG("x = %d, y = %d", 1, 2);
\`\`\`

\`...\` 接收任意個參數，\`__VA_ARGS__\` 展開它們。

## 41.6 字串化與連接

\`\`\`c
#define STR(x) #x
#define CAT(a, b) a##b

STR(hello)      // "hello"
CAT(my, var)    // myvar (識別子)
\`\`\`

## 41.7 header guard 標準寫法

\`\`\`c
#ifndef MYHEADER_H
#define MYHEADER_H
// 標頭內容
#endif
\`\`\`

防止同個 .h 被 include 兩次造成重複宣告。

## 41.8 X-Macro 範式

一份資料同時產生多種程式碼：

\`\`\`c
#define COLORS \\
    X(RED,   0xFF0000) \\
    X(GREEN, 0x00FF00) \\
    X(BLUE,  0x0000FF)

// 1) 產生 enum
enum Color {
#define X(name, val) name,
    COLORS
#undef X
};

// 2) 產生 name 字串表
const char *color_name[] = {
#define X(name, val) #name,
    COLORS
#undef X
};
\`\`\`

新增 \`YELLOW\` 只要改 COLORS 那行，enum 跟字串表自動同步。

## 41.9 與 C++ template 對比

| | C 巨集 | C++ template |
|---|---|---|
| 階段 | 預處理（文字替換） | 編譯期（型別安全） |
| 錯誤訊息 | 已展開的天書 | 模板天書 |
| 副作用安全 | ❌ | ✅ |
| 跨型別 | ✅（粗暴） | ✅（型別參數化） |

新專案優先 \`static inline\` / template；歷史 C code 才繼續用巨集。

## 41.10 試試看
`,
java:``
},
85:{
cpp:``,
c:`
# 第 42 章：系統呼叫入門 read / write / fork

C 是寫**作業系統、嵌入式、驅動**的語言。要直接跟 OS 對話，靠系統呼叫。

> ⚠️ 本章僅 Linux/macOS 適用，Windows 要改用 Win32 API。

## 42.1 標準 I/O 跟系統呼叫

| | 標準 I/O | 系統呼叫 |
|---|---|---|
| 函式 | \`fopen / fread / fwrite\` | \`open / read / write\` |
| 表頭 | \`<stdio.h>\` | \`<unistd.h> <fcntl.h>\` |
| 物件 | \`FILE *\` | 整數 file descriptor (fd) |
| 緩衝 | 有（lib 層） | 沒有（直送 kernel） |

## 42.2 open / read / write

\`\`\`c
#include <unistd.h>
#include <fcntl.h>

int fd = open("data.txt", O_RDONLY);
if (fd < 0) { perror("open"); return 1; }
char buf[1024];
ssize_t n = read(fd, buf, sizeof(buf));   // 回讀到的 byte 數
write(STDOUT_FILENO, buf, n);             // STDOUT_FILENO = 1
close(fd);
\`\`\`

- 0 = stdin、1 = stdout、2 = stderr
- read 回 0 表示 EOF
- write 可能寫不完，要 loop 直到全寫完

## 42.3 fork — 開行程

\`\`\`c
#include <sys/wait.h>
pid_t pid = fork();
if (pid == 0) {
    // 子行程
    printf("I'm child\\n");
    _exit(0);
} else if (pid > 0) {
    // 父行程
    int status;
    waitpid(pid, &status, 0);
    printf("Child done\\n");
}
\`\`\`

\`fork\` 把目前行程完整複製一份，父跟子從同一行繼續跑。

## 42.4 exec 系列 — 換掉自己

\`\`\`c
execl("/bin/ls", "ls", "-l", NULL);
// 上一行成功的話，不會回來
\`\`\`

通常 \`fork\` + 子行程 \`exec\` — 這就是 shell 跑指令的原理。

## 42.5 pipe — 兩個行程通信

\`\`\`c
int fd[2];
pipe(fd);             // fd[0] 讀端、fd[1] 寫端
// fork 後，父用 fd[1] 寫、子用 fd[0] 讀
\`\`\`

## 42.6 errno — 錯誤碼

\`\`\`c
#include <errno.h>
#include <string.h>
if (open(...) < 0) {
    printf("錯誤: %s\\n", strerror(errno));
}
\`\`\`

每個系統呼叫失敗時都會設 errno；\`strerror\` 把它變成人話。

## 42.7 signal — 接收訊號

\`\`\`c
#include <signal.h>
void handler(int sig) {
    write(1, "got SIGINT\\n", 11);
    _exit(0);
}
signal(SIGINT, handler);   // Ctrl+C 觸發
\`\`\`

> ⚠️ signal handler 只能呼叫 **async-signal-safe** 函式（write 可以、printf 不行）。

## 42.8 mmap — 把檔案當記憶體用

\`\`\`c
#include <sys/mman.h>
int fd = open("big.bin", O_RDONLY);
struct stat st; fstat(fd, &st);
char *p = mmap(NULL, st.st_size, PROT_READ, MAP_PRIVATE, fd, 0);
// p 像普通陣列一樣讀
munmap(p, st.st_size);
\`\`\`

大檔案處理不需 read 進 buffer — kernel 按需分頁，超快。

## 42.9 試試看
`,
java:``
},
86:{
cpp:``,
c:`
# 第 43 章：Makefile 與多檔案編譯

C 寫多檔案專案，每次手敲 \`gcc a.c b.c c.c -o prog\` 太煩。Makefile 自動化。

## 43.1 簡單 Makefile

\`\`\`make
prog: main.o utils.o
\tgcc -o prog main.o utils.o

main.o: main.c utils.h
\tgcc -c main.c

utils.o: utils.c utils.h
\tgcc -c utils.c

clean:
\trm -f *.o prog
\`\`\`

> ⚠️ 縮排**必須用 Tab**，不能用 4 個空白！這是 Makefile 最常見的雷。

## 43.2 規則格式

\`\`\`
target: dependencies
\tcommand
\`\`\`

- target = 想做出來的檔案
- dependencies = target 依賴的檔案
- command = 怎麼做出 target（會在依賴更新時跑）

執行 \`make prog\` 會檢查 prog 是否需要重建。

## 43.3 變數

\`\`\`make
CC = gcc
CFLAGS = -Wall -O2 -g
OBJS = main.o utils.o

prog: \$(OBJS)
\t\$(CC) -o prog \$(OBJS)

%.o: %.c
\t\$(CC) \$(CFLAGS) -c \$<
\`\`\`

- \`\$<\` = 第一個依賴
- \`\$@\` = 目前 target
- \`%.o: %.c\` = 通用規則（任何 .c 編譯成同名 .o）

## 43.4 假目標 .PHONY

\`\`\`make
.PHONY: clean all
all: prog
clean:
\trm -f *.o prog
\`\`\`

\`clean\` 不是真的檔案 → 標 .PHONY，避免有人剛好建一個叫 clean 的檔案就壞掉。

## 43.5 自動依賴

實務上會用 \`gcc -M\` 自動產生依賴圖，避免手動維護 \`main.o: main.c utils.h\` 這種行。

## 43.6 不用 Makefile 的時代

現代 C/C++ 專案多用 **CMake**（跨平台、產生 Makefile / Ninja / VS 專案）或 **Meson**。但理解 Makefile 仍是工程入門 。

## 43.7 標頭跟實作分檔的寫法

\`\`\`c
// utils.h
#ifndef UTILS_H
#define UTILS_H
int gcd(int a, int b);   // 只宣告
#endif

// utils.c
#include "utils.h"
int gcd(int a, int b){ return b ? gcd(b, a%b) : a; }   // 實作

// main.c
#include "utils.h"
int main(){ gcd(12, 18); }
\`\`\`

規則：
- .h 只放**宣告**（function prototype、struct 定義、巨集）
- .c 放**實作**（function body）
- 用了某宣告的 .c 要 \`#include\` 對應 .h

## 43.8 編譯旗標速查

| 旗標 | 用途 |
|------|------|
| \`-Wall -Wextra\` | 開所有警告 |
| \`-O2\` | 正式版優化 |
| \`-g\` | 帶 debug symbol |
| \`-fsanitize=address\` | AddressSanitizer 抓 buffer overflow |
| \`-fsanitize=undefined\` | UBSan 抓 undefined behavior |
| \`-std=c11\` | 指定 C 標準版 |

開發時 \`-Wall -Wextra -g -fsanitize=address\` 走起，9 成的 C bug 編譯/執行階段就被抓到。

## 43.9 試試看
`,
java:``
},

// ═══ Java 專項章節 (87–94) ════════════════════════════════════════
87:{
cpp:``,
c:``,
java:`
# 第 36 章：Collections 集合框架

Java 的 \`java.util.*\` 比 C++ STL 更有組織 — 全部圍繞 interface 設計。

## 36.1 三大主要 interface

\`\`\`
Collection
├── List   有順序、可重複  → ArrayList, LinkedList
├── Set    不可重複        → HashSet, TreeSet, LinkedHashSet
└── Queue  排隊            → ArrayDeque, PriorityQueue

Map<K,V>   鍵值對          → HashMap, TreeMap, LinkedHashMap
\`\`\`

## 36.2 List

\`\`\`java
import java.util.*;
List<Integer> list = new ArrayList<>();
list.add(1); list.add(2); list.add(3);
list.get(0);           // 1
list.set(0, 10);       // 改第 0 個
list.size();           // 3
list.remove(0);        // 刪第 0 個（O(n)）
for (int x : list) System.out.println(x);
\`\`\`

**ArrayList vs LinkedList**：
- ArrayList — 隨機存取 O(1)、尾端加 O(1) 攤提、中間插入 O(n)
- LinkedList — 兩端加 O(1)、隨機存取 O(n)

實際上 **99% 用 ArrayList 就好** — LinkedList 在現代硬體上幾乎都比 ArrayList 慢（cache miss）。

## 36.3 Map

\`\`\`java
Map<String, Integer> map = new HashMap<>();
map.put("apple", 1);
map.put("apple", 2);              // 覆蓋
map.get("apple");                 // 2
map.getOrDefault("nope", 0);      // 0
map.containsKey("apple");         // true
for (Map.Entry<String, Integer> e : map.entrySet()) {
    System.out.println(e.getKey() + " " + e.getValue());
}
\`\`\`

- **HashMap** — 平均 O(1)、無序
- **TreeMap** — O(log n)、key 自動排序
- **LinkedHashMap** — O(1)、保留**插入順序**

## 36.4 Set

\`\`\`java
Set<Integer> s = new HashSet<>();
s.add(1); s.add(2); s.add(1);     // 自動去重
s.contains(1);                    // true
s.size();                         // 2
\`\`\`

## 36.5 Queue / Deque

\`\`\`java
Deque<Integer> dq = new ArrayDeque<>();
dq.offerFirst(1); dq.offerLast(2);
dq.pollFirst(); dq.pollLast();
\`\`\`

Java 推薦用 **ArrayDeque** 當 stack/queue（比 \`Stack\` 跟 \`LinkedList\` 都快）。

## 36.6 PriorityQueue（heap）

\`\`\`java
PriorityQueue<Integer> pq = new PriorityQueue<>();   // 小根堆預設
pq.offer(3); pq.offer(1); pq.offer(2);
pq.poll();                          // 1

PriorityQueue<Integer> maxPq = new PriorityQueue<>(Comparator.reverseOrder());
\`\`\`

## 36.7 排序與 Comparator

\`\`\`java
List<int[]> pairs = ...;
pairs.sort((a, b) -> a[0] - b[0]);                  // 第一欄升冪
pairs.sort(Comparator.comparingInt(a -> a[0])
    .thenComparingInt(a -> -a[1]));                  // 多鍵
\`\`\`

> ⚠️ \`a[0] - b[0]\` 在大數會溢位！改成 \`Integer.compare(a[0], b[0])\` 比較安全。

## 36.8 不可變集合（Java 9+）

\`\`\`java
List<Integer> immut = List.of(1, 2, 3);     // 不能改、不接受 null
Map<String,Integer> m = Map.of("a", 1, "b", 2);
\`\`\`

加進去會丟 UnsupportedOperationException。當常數表用很方便。

## 36.9 與 C++ STL 對比

| 功能 | C++ | Java |
|------|-----|------|
| 動態陣列 | vector | ArrayList |
| 雜湊表 | unordered_map | HashMap |
| 紅黑樹 map | map | TreeMap |
| 堆 | priority_queue | PriorityQueue |
| 雙端 | deque | ArrayDeque |
| 迭代 | iterator / range for | Iterator / for-each |

語意幾乎一對一，名字不同而已。

## 36.10 試試看
`
},
88:{
cpp:``,
c:``,
java:`
# 第 37 章：Generics 泛型

Generics 讓你寫**型別參數化**的 class / 方法 — 編譯期保證型別安全。

## 37.1 為什麼需要泛型

沒泛型的時代（Java 5 前）：
\`\`\`java
List list = new ArrayList();
list.add("hello");
String s = (String) list.get(0);    // 要強制轉型，可能爆 ClassCastException
\`\`\`

有泛型：
\`\`\`java
List<String> list = new ArrayList<>();
list.add("hello");
String s = list.get(0);             // 編譯器知道是 String
list.add(42);                       // 編譯錯誤
\`\`\`

## 37.2 泛型方法

\`\`\`java
public static <T> T myMax(T a, T b, Comparator<T> cmp) {
    return cmp.compare(a, b) > 0 ? a : b;
}
\`\`\`

\`<T>\` 寫在回傳型別之前，T 自動推導。

## 37.3 泛型 class

\`\`\`java
class Box<T> {
    private T value;
    public Box(T v) { value = v; }
    public T get() { return value; }
}
Box<Integer> bi = new Box<>(42);
Box<String> bs = new Box<>("hello");
\`\`\`

## 37.4 通配符 \`?\`

\`\`\`java
void print(List<?> list) { ... }            // 任意型別的 List
void sum(List<? extends Number> list) { ... } // Number 或其子類
void add(List<? super Integer> list) { ... }  // Integer 或其父類
\`\`\`

**PECS 原則**：**P**roducer **E**xtends, **C**onsumer **S**uper。
- 想從 list **讀**東西 → \`? extends T\`
- 想往 list **寫**東西 → \`? super T\`

## 37.5 型別擦除（type erasure）

Java 泛型**只存在於編譯期**。執行期 \`List<Integer>\` 跟 \`List<String>\` 是同一個 class。

\`\`\`java
List<Integer> a = new ArrayList<>();
List<String> b = new ArrayList<>();
System.out.println(a.getClass() == b.getClass());    // true!
\`\`\`

> 這跟 C++ template 不一樣（C++ 真的為每個型別產生不同的 class）。

## 37.6 限制

不能：
\`\`\`java
T t = new T();                    // ❌ 不能 new 泛型
T[] arr = new T[10];              // ❌ 不能 new 泛型陣列
if (x instanceof List<String>)    // ❌ 不能 instanceof 泛型
\`\`\`

## 37.7 多參數 + 限制條件

\`\`\`java
class Pair<K extends Comparable<K>, V> {
    K key; V value;
    int compareTo(Pair<K, V> o){ return key.compareTo(o.key); }
}
\`\`\`

\`<K extends Comparable<K>>\` 強迫 K 可比較。

## 37.8 與 C++ template 對比

| | Java generics | C++ template |
|---|---|---|
| 編譯產出 | 一份 (擦除) | 每個型別一份 |
| 執行期可看型別 | ❌ | ❌ (除非 RTTI) |
| primitive 支援 | ❌（要包裝） | ✅ |
| 編譯速度 | 快 | 慢 |
| 錯誤訊息 | 普通 | 噩夢 |

Java 不能 \`List<int>\` — 只能 \`List<Integer>\`，每個元素都裝箱（boxing）→ 慢且耗記憶體。APCS 用 \`int[]\` 直接陣列就好。

## 37.9 試試看


## 🧠 設計動機：Java 為什麼選擇型別擦除？

Java 泛型在 2004 年（Java 5）才加入，比 C++ template（1991 年）晚了 13 年。當時已經有大量的 Java 程式在執行，\`ArrayList\`（沒有泛型）已經被廣泛使用。

如果 Java 採用 C++ 的方式（每個型別都產生不同的類別），\`ArrayList<Integer>\` 和 \`ArrayList<String>\` 就是完全不同的類別，所有舊程式碼都會無法與新泛型程式碼互動，造成災難性的不相容。

型別擦除是一個**向後相容的妥協**：泛型只在編譯期存在（提供型別安全），執行期還是用同一個 \`ArrayList\` 類別。舊程式碼和新程式碼可以共存。

**代價** 是那一串限制：\`new T()\`、\`T[]\`、\`instanceof List<String>\` 全部不行。所有這些限制都源自「執行期型別資訊已被擦除」這個根本事實。

Go 語言選擇了類似策略（泛型到 Go 1.18 才加入，也考慮了相容性）。Kotlin 的 \`reified\` 型別參數透過 inline 函式部分解決了這個問題。
`
},
89:{
cpp:``,
c:``,
java:`
# 第 38 章：Stream API

Java 8 引入 — 函數式風格處理集合。類似 Python 的 list comprehension。

## 38.1 三步驟：來源 → 中間操作 → 終端操作

\`\`\`java
import java.util.stream.*;

List<Integer> nums = List.of(1, 2, 3, 4, 5);
int sumOfSquares = nums.stream()
    .filter(n -> n % 2 == 0)        // 中間：留偶數
    .mapToInt(n -> n * n)           // 中間：平方
    .sum();                          // 終端：加總
System.out.println(sumOfSquares);   // 4 + 16 = 20
\`\`\`

## 38.2 常用中間操作

\`\`\`java
nums.stream()
    .filter(n -> n > 0)           // 篩選
    .map(n -> n * 2)              // 轉換
    .distinct()                   // 去重
    .sorted()                     // 排序
    .limit(10)                    // 取前 10 個
    .skip(5);                     // 跳過前 5 個
\`\`\`

## 38.3 常用終端操作

\`\`\`java
.count()                          // 個數
.sum() / .max() / .min()          // 數值統計
.collect(Collectors.toList())     // 收集成 List
.collect(Collectors.toSet())
.collect(Collectors.toMap(...))
.forEach(System.out::println)     // 對每個元素
.reduce(0, Integer::sum)          // 自訂歸納
\`\`\`

## 38.4 groupingBy — Java 的 groupby

\`\`\`java
Map<String, List<Person>> byCity = people.stream()
    .collect(Collectors.groupingBy(Person::getCity));

Map<String, Long> cntByCity = people.stream()
    .collect(Collectors.groupingBy(Person::getCity, Collectors.counting()));
\`\`\`

## 38.5 Method reference \`::\`

\`\`\`java
list.forEach(System.out::println);          // 等同 x -> System.out.println(x)
list.stream().map(String::toUpperCase);     // 等同 s -> s.toUpperCase()
list.stream().map(Person::new);             // constructor reference
\`\`\`

## 38.6 注意

- Stream **只能消耗一次** — 用完就丟，要再用就重新 .stream()
- Stream **不會修改原始集合**
- 中間操作是**懶執行** — 沒有終端操作就不會跑

## 38.7 並行 stream

\`\`\`java
nums.parallelStream().filter(...).sum();
\`\`\`

幫你開多執行緒處理。注意：**資料要無共享狀態**，不然會壞。

## 38.8 Collectors 進階

\`\`\`java
// partitioningBy: 二分群
Map<Boolean, List<Integer>> oddEven = nums.stream()
    .collect(Collectors.partitioningBy(n -> n % 2 == 1));

// toMap: 轉成 Map
Map<String, Integer> lens = words.stream()
    .collect(Collectors.toMap(w -> w, String::length));

// summarizingInt: 一次得 count/sum/min/max/avg
IntSummaryStatistics stat = nums.stream()
    .collect(Collectors.summarizingInt(Integer::intValue));
System.out.println(stat.getAverage());
\`\`\`

## 38.9 與 Python 對比

| Python | Java |
|--------|------|
| \`[x*2 for x in xs if x>0]\` | \`xs.stream().filter(x->x>0).map(x->x*2).collect(toList())\` |
| \`sum(xs)\` | \`xs.stream().mapToInt(...).sum()\` |
| \`max(xs, key=f)\` | \`xs.stream().max(comparingInt(f::apply))\` |
| \`{k: list(g) for k,g in groupby(xs, key)}\` | \`xs.stream().collect(groupingBy(key))\` |

Python list comprehension 寫起來短；Java Stream 鏈式呼叫長但**冷編譯後跟手寫 for 一樣快**，且支援 \`.parallelStream()\` 自動分擔到多核。

## 38.10 試試看
`
},
90:{
cpp:``,
c:``,
java:`
# 第 39 章：Optional 與 null 安全

Tony Hoare 說 null reference 是他「十億美元的錯誤」。Java 8 加入 \`Optional\` 緩解。

## 39.1 NullPointerException 的痛

\`\`\`java
User user = findUser(id);
String name = user.getName();    // 若 user 是 null → 炸
String upper = name.toUpperCase();
\`\`\`

要寫一連串 null 檢查：
\`\`\`java
if (user != null) {
    String name = user.getName();
    if (name != null) {
        String upper = name.toUpperCase();
        // ...
    }
}
\`\`\`

## 39.2 Optional 表達「可能沒有」

\`\`\`java
import java.util.Optional;

Optional<User> userOpt = findUser(id);     // 函式回傳 Optional
userOpt.ifPresent(u -> System.out.println(u.getName()));
String name = userOpt.map(User::getName).orElse("Unknown");
\`\`\`

## 39.3 建立 Optional

\`\`\`java
Optional<String> a = Optional.of("hello");        // 不能裝 null
Optional<String> b = Optional.ofNullable(maybeNull); // 接受 null
Optional<String> c = Optional.empty();
\`\`\`

## 39.4 取值

\`\`\`java
opt.get();                       // 沒值會丟 NoSuchElementException — 別用！
opt.orElse("default");
opt.orElseGet(() -> compute());  // 只在沒值時才算
opt.orElseThrow(() -> new ...);
opt.ifPresent(v -> ...);
opt.isPresent();
opt.isEmpty();                   // Java 11+
\`\`\`

## 39.5 map / flatMap / filter

\`\`\`java
Optional<Integer> length = findUser(id)
    .map(User::getName)              // 抓 name（仍是 Optional）
    .map(String::length);

Optional<User> result = findUser(id)
    .flatMap(this::findManager)      // findManager 也回 Optional
    .filter(u -> u.getAge() > 18);
\`\`\`

## 39.6 不該怎麼用 Optional

❌ 當 class 欄位（序列化會炸）
❌ 當函式參數（直接傳 null 或 overload 比較好）
❌ 包基本型別（用 OptionalInt / OptionalLong / OptionalDouble）

✅ 函式回傳值（明確說明「可能沒有」）

## 39.7 鏈式 Optional 範例

\`\`\`java
String city = Optional.ofNullable(user)
    .map(User::getAddress)
    .map(Address::getCity)
    .map(String::toUpperCase)
    .orElse("UNKNOWN");
\`\`\`

任何中間一環是 null → 結果就是 "UNKNOWN"，不會 NPE。等同 Kotlin 的 \`user?.address?.city?.uppercase() ?: "UNKNOWN"\`。

## 39.8 Optional vs null vs Exception

| 情境 | 建議 |
|------|------|
| 函式可能找不到結果 | \`Optional<T>\` |
| 內部欄位暫未初始化 | null + 私有 |
| 不應該發生的錯誤 | throw RuntimeException |
| 預期錯誤（檔不存在） | checked exception |

別用 Optional 當作所有 null 的萬靈丹 — 過度用會讓程式碼又長又亂。

## 39.9 試試看
`
},
91:{
cpp:``,
c:``,
java:`
# 第 40 章：多執行緒 Thread / Runnable

Java 從第一天就支援多執行緒。

## 40.1 兩種啟動方式

\`\`\`java
// 1. 實作 Runnable
Runnable task = () -> System.out.println("hello from " + Thread.currentThread().getName());
Thread t1 = new Thread(task);
t1.start();          // 啟動，t1.run() 在另一個 thread 跑

// 2. 繼承 Thread（不建議 — 只能繼承一個 class）
class MyThread extends Thread {
    public void run() { System.out.println("running"); }
}
new MyThread().start();
\`\`\`

> ⚠️ **\`start()\` vs \`run()\`**：start() 真的開新 thread；run() 只是普通函式呼叫，在當前 thread 跑。

## 40.2 等 thread 結束

\`\`\`java
Thread t = new Thread(task);
t.start();
t.join();           // 阻塞直到 t 結束
\`\`\`

## 40.3 共享資料的問題

\`\`\`java
class Counter {
    int n = 0;
    void inc() { n++; }      // 不是原子的！
}
Counter c = new Counter();
Runnable task = () -> { for (int i = 0; i < 100000; i++) c.inc(); };
Thread t1 = new Thread(task), t2 = new Thread(task);
t1.start(); t2.start(); t1.join(); t2.join();
System.out.println(c.n);     // 可能不是 200000
\`\`\`

## 40.4 synchronized 解決

\`\`\`java
synchronized void inc() { n++; }
\`\`\`

或 block 形式：
\`\`\`java
void inc() {
    synchronized(this) { n++; }
}
\`\`\`

> synchronized 是 Java 內建關鍵字，自動管理鎖 — 比 mutex API 安全。

## 40.5 ExecutorService — 不要自己管 thread

\`\`\`java
import java.util.concurrent.*;

ExecutorService pool = Executors.newFixedThreadPool(4);
for (int i = 0; i < 10; i++) {
    int id = i;
    pool.submit(() -> System.out.println("task " + id));
}
pool.shutdown();
pool.awaitTermination(1, TimeUnit.MINUTES);
\`\`\`

**現代 Java 寫 concurrent 程式碼都用 pool，不直接 new Thread**。

## 40.6 Future — 拿回傳值

\`\`\`java
Future<Integer> future = pool.submit(() -> {
    Thread.sleep(1000);
    return 42;
});
Integer result = future.get();   // 阻塞等結果
\`\`\`

## 40.7 volatile 跟 Memory Model

\`\`\`java
volatile boolean stop = false;   // 別的 thread 改後立刻看得到
\`\`\`

沒 \`volatile\`，編譯器/CPU 可能把 \`while(!stop)\` 優化成讀一次後快取。\`volatile\` 強制每次都從主記憶體讀。

> volatile 只保證**可見性**，不保證**原子性**！要原子操作用 AtomicInteger。

## 40.8 ThreadLocal

每個 thread 有自己的副本：

\`\`\`java
ThreadLocal<SimpleDateFormat> fmt = ThreadLocal.withInitial(
    () -> new SimpleDateFormat("yyyy-MM-dd"));
String s = fmt.get().format(new Date());
\`\`\`

SimpleDateFormat 不是 thread-safe → 用 ThreadLocal 每 thread 一份，避開共享問題。

## 40.9 Virtual Threads（Java 21+）

\`\`\`java
Thread.startVirtualThread(() -> System.out.println("virtual"));
\`\`\`

百萬個 virtual thread 也沒事 — 對應 Go 的 goroutine。I/O 密集任務的 game changer。

## 40.10 試試看
`
},
92:{
cpp:``,
c:``,
java:`
# 第 41 章：Concurrency 工具 Lock / Atomic

\`java.util.concurrent\` 提供比 synchronized 更靈活的並行工具。

## 41.1 ReentrantLock

比 synchronized 強大：
\`\`\`java
import java.util.concurrent.locks.*;

Lock lock = new ReentrantLock();

void inc() {
    lock.lock();
    try {
        n++;
    } finally {
        lock.unlock();       // 一定要在 finally 解鎖
    }
}
\`\`\`

特色：
- \`tryLock()\` — 嘗試取得鎖，失敗不阻塞
- \`tryLock(1, TimeUnit.SECONDS)\` — 等 1 秒
- \`lockInterruptibly()\` — 可中斷

## 41.2 ReadWriteLock

讀多寫少時：
\`\`\`java
ReadWriteLock rwLock = new ReentrantReadWriteLock();
Lock readLock = rwLock.readLock();
Lock writeLock = rwLock.writeLock();
\`\`\`

多個讀 thread 可同時拿讀鎖，寫鎖獨佔。

## 41.3 AtomicInteger / AtomicReference

\`\`\`java
import java.util.concurrent.atomic.*;

AtomicInteger counter = new AtomicInteger(0);
counter.incrementAndGet();          // 原子的 ++
counter.compareAndSet(5, 10);       // 如果是 5 就改成 10（CAS）
\`\`\`

> 用 CAS 實作 — 比 synchronized 快得多。

## 41.4 ConcurrentHashMap

\`\`\`java
ConcurrentHashMap<String, Integer> map = new ConcurrentHashMap<>();
map.put("a", 1);
map.compute("a", (k, v) -> v + 1);       // 原子 update
map.merge("b", 1, Integer::sum);         // 不存在就放 1，存在就 +1
\`\`\`

並行下取代 HashMap — 內部分段鎖。

## 41.5 CountDownLatch — 等多個 thread 完成

\`\`\`java
CountDownLatch latch = new CountDownLatch(3);
for (int i = 0; i < 3; i++) {
    new Thread(() -> {
        // 做事
        latch.countDown();
    }).start();
}
latch.await();        // 等 3 個都 countDown 才繼續
\`\`\`

## 41.6 Semaphore — 限制並行數

\`\`\`java
Semaphore sem = new Semaphore(5);     // 最多 5 個同時跑
sem.acquire();
try { /* 受限資源 */ }
finally { sem.release(); }
\`\`\`

## 41.7 BlockingQueue — 生產者消費者

\`\`\`java
BlockingQueue<Integer> q = new LinkedBlockingQueue<>();
// 生產者
new Thread(() -> { q.put(42); }).start();
// 消費者
new Thread(() -> { Integer x = q.take(); }).start();
\`\`\`

q 空時 \`take()\` 阻塞、滿時 \`put()\` 阻塞。

## 41.8 CompletableFuture — 鏈式非同步

\`\`\`java
CompletableFuture
    .supplyAsync(() -> fetchUser(id))
    .thenApply(User::getName)
    .thenAccept(System.out::println)
    .exceptionally(e -> { e.printStackTrace(); return null; });
\`\`\`

類似 JavaScript Promise — 不阻塞主執行緒。微服務、I/O 流水線常用。

## 41.9 Concurrency 工具速查

| 想做 | 用 |
|------|-----|
| 互斥 | synchronized / ReentrantLock |
| 計數器 | AtomicInteger / LongAdder |
| 等多個 thread | CountDownLatch / Phaser |
| 限流 | Semaphore |
| 生產者-消費者 | BlockingQueue |
| 非同步結果 | Future / CompletableFuture |
| Thread-safe Map | ConcurrentHashMap |
| 共享布林 | AtomicBoolean / volatile |

## 41.10 試試看
`
},
93:{
cpp:``,
c:``,
java:`
# 第 42 章：Annotation 與反射

Java 的元程式設計兩大武器：注解 + 反射。

## 42.1 內建注解

\`\`\`java
@Override               // 告知編譯器：這是覆寫父類
@Deprecated             // 標記為棄用
@SuppressWarnings("unchecked")    // 抑制特定警告
@FunctionalInterface    // 標記只有一個抽象方法的 interface
\`\`\`

\`@Override\` 不寫程式還是會跑，但是萬一名字打錯沒覆寫到 — 編譯器幫你抓出來。

## 42.2 反射：runtime 取得型別資訊

\`\`\`java
Class<?> cls = obj.getClass();
String name = cls.getName();
Field[] fields = cls.getDeclaredFields();
Method[] methods = cls.getDeclaredMethods();

// 動態呼叫
Method m = cls.getMethod("hello", String.class);
m.invoke(obj, "world");

// 動態建立
Constructor<?> ctor = cls.getConstructor();
Object inst = ctor.newInstance();
\`\`\`

> 反射很慢、繞過編譯期檢查 — 但是框架（Spring、JUnit）大量使用。

## 42.3 自訂注解

\`\`\`java
import java.lang.annotation.*;

@Retention(RetentionPolicy.RUNTIME)    // 執行期可見
@Target(ElementType.METHOD)             // 只能標方法
@interface Test {
    String name() default "";
}

class Demo {
    @Test(name = "addition")
    void test1() { ... }
}
\`\`\`

## 42.4 用反射處理注解

\`\`\`java
for (Method m : Demo.class.getDeclaredMethods()) {
    Test t = m.getAnnotation(Test.class);
    if (t != null) {
        System.out.println("Running test: " + t.name());
        m.invoke(new Demo());
    }
}
\`\`\`

JUnit 大致就是這樣運作 — 用 \`@Test\` 標方法、自動找出來執行。

## 42.5 反射常見用途

- **DI 容器**（Spring）：根據 \`@Autowired\` 注入物件
- **ORM**（Hibernate）：根據 \`@Entity\` \`@Column\` 映射資料庫
- **序列化**（Jackson、Gson）：根據欄位名跟型別 JSON ↔ Object
- **測試框架**（JUnit）：找 \`@Test\` 標的方法

## 42.6 代價

- 比正常呼叫慢 10–100 倍
- 編譯期錯誤變執行期錯誤
- IDE 不容易追蹤呼叫關係

> 業務邏輯**不要**用反射；框架層用得當才是好工具。

## 42.7 動態代理 Proxy

\`\`\`java
import java.lang.reflect.*;

InvocationHandler h = (proxy, method, args) -> {
    System.out.println("calling " + method.getName());
    return null;
};
Runnable r = (Runnable) Proxy.newProxyInstance(
    cl.getClassLoader(), new Class[]{Runnable.class}, h);
r.run();   // 印 "calling run"
\`\`\`

Spring AOP、Mockito 都靠這個攔截方法呼叫。

## 42.8 反射效能對策

- **快取** \`Method\` 物件 — 不要每次 \`getMethod\`
- 用 \`MethodHandle\`（Java 7+）— 比 reflection 快 5-10 倍
- JIT 對重複呼叫的 reflection 會 inline，所以熱路徑也沒想像中慘

## 42.9 試試看
`
},
94:{
cpp:``,
c:``,
java:`
# 第 43 章：JVM 與 GC 基礎

理解 JVM 才能寫高效能 Java。

## 43.1 從 .java 到執行

\`\`\`
.java  --javac-->  .class (bytecode)  --java-->  JVM 解譯/JIT 編譯  -->  CPU
\`\`\`

1. \`javac\` 把原始碼編譯成 bytecode（跨平台中介碼）
2. \`java\` 命令啟動 JVM，載入 .class
3. JVM 解譯 bytecode；熱路徑用 JIT 編譯成機器碼

## 43.2 記憶體區域

| 區域 | 內容 | 失敗時 |
|------|------|--------|
| **Heap** | 物件 (\`new\` 出來的) | OutOfMemoryError |
| **Stack** | 區域變數、函式呼叫 | StackOverflowError |
| **Metaspace** | 類別、方法 metadata | OutOfMemoryError |
| **PC Register** | 目前執行的位置 | - |

\`-Xms512m -Xmx2g\` = heap 初始 512MB、最大 2GB。

## 43.3 物件生命週期

\`\`\`java
String s = new String("hello");   // 在 heap
\`\`\`

當沒人 reference 它時 → **垃圾**，等 GC 回收。

> Java 跟 C/C++ 最大差別：**不用手動 free**。但代價是 GC 暫停。

## 43.4 GC 是怎麼運作的

主流：**分代式 GC**（Generational）
- **Young Generation**（Eden + 2 個 Survivor）：新建立的物件
- **Old Generation**：活很久的物件

**新物件死得快** → Young GC 頻繁但快（複製演算法）
**活下來的** → 晉升 Old → Full GC 較少但慢

## 43.5 GC 演算法

| GC | 特性 |
|----|------|
| **Serial** | 單執行緒，停世界 |
| **Parallel** | 多執行緒，吞吐量導向 |
| **G1** | 分區、可預測暫停（Java 9+ 預設） |
| **ZGC / Shenandoah** | 暫停 <10ms，大 heap 適用 |

## 43.6 常見問題

**OutOfMemoryError**：
- Heap 不夠 → 加 \`-Xmx\`、找 memory leak
- Metaspace 不夠 → 動態載類太多

**長 GC 暫停**：
- 看 GC log：\`-Xlog:gc*\`
- 換 G1 或 ZGC
- 減少物件分配（pool 重用）

**Memory Leak in GC 語言**：
靜態集合、未關閉資源、listener 沒移除 — 都會讓物件「不該活還在活」。

## 43.7 跟 Python 對比

| | Python | Java |
|---|---|---|
| 編譯 | bytecode (.pyc) | bytecode (.class) |
| 執行 | CPython 直譯 | JVM 直譯 + JIT |
| GC | reference counting + GC | 純 GC |
| 啟動速度 | 快 | 慢（JVM 暖機） |
| 長時間執行 | 沒太多優化 | JIT 越跑越快 |

## 43.8 觀察 JVM 的工具

| 工具 | 用途 |
|------|------|
| \`jps\` | 列出 JVM process |
| \`jstack <pid>\` | dump thread stack（找死鎖） |
| \`jmap -heap <pid>\` | heap 使用狀況 |
| \`jhsdb jmap --histo --pid <pid>\` | 物件數量直方圖（找 leak） |
| \`jfr\` (Java Flight Recorder) | low-overhead profiler |
| VisualVM / JConsole | 圖形化監控 |
| \`-verbose:gc\` | 每次 GC 印 log |

## 43.9 OutOfMemoryError 排查 SOP

1. \`-XX:+HeapDumpOnOutOfMemoryError -XX:HeapDumpPath=./dump.hprof\` 抓 dump
2. 用 **MAT** (Eclipse Memory Analyzer) 開 dump 找 retained heap 最大的物件
3. 反推誰持有它（dominator tree）
4. 修：解除引用、移到弱引用（WeakHashMap）、限制集合大小

## 43.10 寫高效能 Java 的口訣

- **少配置** — 物件 pool、StringBuilder 重用
- **avoid boxing** — \`int\` 比 \`Integer\` 快 5×
- **小函式** — 給 JIT inline 機會
- **profile 再優化** — 不要憑感覺改

## 43.11 試試看


## 🧠 設計動機：JVM 為什麼「越跑越快」？

C/C++ 在編譯期就把程式碼轉成機器碼，之後直接跑，速度快但不靈活。Python 每次執行時逐行解譯，靈活但慢。

JVM 採取了第三條路：**先解譯，熱路徑再 JIT 編譯**。

啟動時，JVM 用解譯器逐步執行 bytecode，同時用 profiler 監控：哪些方法被呼叫超過門檻次數（通常是 10,000 次）？這些「熱路徑」被即時編譯（JIT）成機器碼，而且是**針對當前執行模式優化過的**機器碼——比 C++ 在編譯期能做的優化還激進。

例如：JIT 可以觀察到某個 \`virtual\` 方法呼叫實際上永遠只呼叫同一個子類，於是把它內聯（inline）。C++ 在編譯期不知道這件事。

**實際含義**：
- 短命程式（CLI 工具、腳本）：JVM 永遠跑不到熱，C/Python 都更合適
- 長期運行的服務（Web 伺服器、資料庫）：JVM 有優勢，幾分鐘後就達到巔峰效能
- 這也是為什麼 Spring Boot 的第一個 request 慢，之後就很快
`
}
};

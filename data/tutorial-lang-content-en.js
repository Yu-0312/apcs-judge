// 自 tutorial.html 抽出的資料檔（由頁面以 <script src> 載入）
const LANG_CONTENT_EN = {
0:{
cpp:`
# Chapter 0: What is programming? (C++ version)

Welcome! This is the first chapter for those who have **never programmed before**.

## 🤔 Program = a "recipe for the computer"

You write down the steps → the computer follows them. The C++ recipe looks like this:

\`\`\`cpp
#include <iostream>
using namespace std;
int main(){
    cout << "Hello" << endl;
    return 0;
}
\`\`\`

## 🔑 Three major differences between C++ and Python

| Item | Python | C++ |
|------|--------|-----|
| Program entry | Start from the first line | Start from \`main()\` |
| End of a line | Just break the line | Must be \`;\` semicolon |
| Variable declaration | \`x = 5\` | \`int x = 5;\` Let’s talk about the type first |

## ▶️ Click "Go" once

The Hello code is ready on the right. Press **▶ to execute** and see what appears in the output box.

> **Tips**: C++ must be compiled and executed. This tutorial uses Judge0 CE to call real g++ online to help you compile and execute. There is no need to install a compiler and requires an Internet connection.
`,

c:`
# Chapter 0: What is programming? (C version)

Welcome! This is the first chapter for those who have **never programmed before**.

## 🤔 Program = a "recipe for the computer"

C’s recipe looks like this:

\`\`\`c
#include <stdio.h>
int main(){
    printf("Hello\\n");
    return 0;
}
\`\`\`

## 🔑 Three major differences between C and Python

| Item | Python | C |
|------|--------|---|
| Program entry | First line | Starting from \`main()\` |
| end of line | newline | required \`;\` |
| Variable declaration | \`x = 5\` | \`int x = 5;\` type required |

## ▶️ Click "Go" once

Press **▶ Execute** on the upper right and see Hello appear in the output box.

> **Tips**: C does not have a native string type, so use the character array \`char s[]\`. Python's \`"abc"\` corresponds to C's \`"abc"\` (same writing, but actually a character array).
`,

java:`
# Chapter 0: What is programming? (Java version)

Welcome! This is the first chapter for those who have **never programmed before**.

## 🤔 Program = a "recipe for the computer"

The Java recipe looks like this:

\`\`\`java
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello");
    }
}
\`\`\`

## 🔑 Three major differences between Java and Python

| Item | Python | Java |
|------|--------|------|
| Program entry | First line | \`public static void main\` |
| Structure | No need for class | Must be wrapped in class |
| end | newline | \`;\` semicolon |

## ▶️ Click "Go" once

Click **▶ Execute** on the upper right, and it will be run by the Judge0 CE cloud Java compiler (network required, about 1-2 seconds).

> **Tips**: The Java file name should be called \`Main.java\`, and the class name should also be called \`Main\`, which must be consistent.
`,

},

1:{
cpp:`
# Chapter 1: Variables and Data Types (C++)

## 1.1 Variables must first declare their type
C++ is a **strongly typed** language. When declaring, you must make it clear what type the variable is:

\`\`\`cpp
int age = 17;          // 整數
double height = 168.5; // 浮點數
string name = "Alice"; // 字串（要 #include <string>）
bool ok = true;        // 布林
\`\`\`

## 1.2 Four basic types
| Type | Example | Range |
|------|------|------|
| int | \`42\` | About ±2.1 billion |
| long long | \`42LL\` | About ±9×10¹⁸ |
| double | \`3.14\` | floating point number |
| string | \`"hi"\` | string |
| bool | \`true / false\` | true or false |

## 1.3 Type conversion
\`\`\`cpp
int x = (int)3.7;          // 3（直接截斷）
double y = (double)5 / 2;  // 2.5
string s = to_string(42);  // "42"
int n = stoi("42");        // 42
\`\`\`

> **APCS IMPORTANT**: Integer division does not automatically become floating point! \`5 / 2\` in C++ is \`2\` (not 2.5), you need \`(double)5/2\` to get 2.5.
`,

c:`
# Chapter 1: Variables and Data Types (C)

## 1.1 Variables must first declare their type
\`\`\`c
int age = 17;
double height = 168.5;
char name[] = "Alice";  // C 沒有 string，用字元陣列
char letter = 'A';      // 單一字元用單引號
\`\`\`

## 1.2 Common types
| Type | Example | Description |
|------|------|------|
| int | \`42\` | integer |
| long long | \`42LL\` | large integer |
| double | \`3.14\` | floating point |
| char | \`'A'\` | single character |
| char[] | \`"hello"\` | String (character array) |

## 1.3 Type conversion
\`\`\`c
int x = (int)3.7;  // 3
double y = 5.0 / 2;  // 2.5（要至少一個是 double）
\`\`\`

> **APCS key points**: C does not have bool (C99 has \`stdbool.h\`), commonly used \`int\`: 0 = false, non-0 = true.
`,

java:`
# Chapter 1: Variables and Data Types (Java)

## 1.1 Declare variables
\`\`\`java
int age = 17;
double height = 168.5;
String name = "Alice";   // String 是 class，要大寫 S
boolean ok = true;
char c = 'A';
\`\`\`

## 1.2 Eight basic types
| Type | Example |
|------|------|
| int | \`42\` |
| long | \`42L\` |
| double | \`3.14\` |
| char | \`'A'\` |
| boolean | \`true / false\` |
| String*| \`"hi"\` (object) |

## 1.3 Type conversion
\`\`\`java
int x = (int)3.7;              // 3
double y = (double)5 / 2;      // 2.5
String s = Integer.toString(42);
int n = Integer.parseInt("42");
\`\`\`

> **APCS IMPORTANT**: Like C++, \`5 / 2\` is integer division to get \`2\`. For floating point results write \`5.0 / 2\` or \`(double)5/2\`.
`,

},

2:{
cpp:`
# Chapter 2: Input and Output (C++)

## 2.1 cout output
\`\`\`cpp
cout << "Hello" << endl;        // 換行
cout << "a" << " " << "b";       // 用 << 連接
cout << x << "\\n";              // \\n 也可以
\`\`\`

## 2.2 cin input
\`\`\`cpp
int n;
cin >> n;                        // 讀一個整數
int a, b;
cin >> a >> b;                   // 一行讀兩個

string s;
getline(cin, s);                 // 讀一整行（含空白）
\`\`\`

## 2.3 Read n numbers into vector
\`\`\`cpp
int n; cin >> n;
vector<int> a(n);
for(int i = 0; i < n; i++) cin >> a[i];
\`\`\`

> **Acceleration Tips**: When APCS inputs a large amount, adding \`ios::sync_with_stdio(false); cin.tie(0);\` cin at the beginning of main will make the speed as fast as scanf.
`,

c:`
# Chapter 2: Input and Output (C)

## 2.1 printf output
\`\`\`c
printf("Hello\\n");
printf("%d\\n", x);              // 整數
printf("%.2f\\n", 3.14159);      // 浮點，2 位小數
printf("%s\\n", "hi");           // 字串
\`\`\`

## 2.2 scanf input
\`\`\`c
int n;
scanf("%d", &n);                 // 注意 & ！
int a, b;
scanf("%d %d", &a, &b);
char s[100];
scanf("%s", s);                  // 字串不用 &
\`\`\`

## 2.3 Quick check on format symbols
| symbol | corresponding type |
|------|----------|
| %d | int |
| %lld | long long |
| %f / %lf | float / double (printf uses %f, scanf uses %lf) |
| %c | char |
| %s | string |

> **Newbie Trap**: Be sure to add \`&\` to scanf! \`scanf("%d", n)\` will crash.
`,

java:`
# Chapter 2: Input and Output (Java)

## 2.1 System.out output
\`\`\`java
System.out.println("Hello");           // 印完換行
System.out.print("no newline");        // 不換行
System.out.printf("%d %s%n", 42, "hi"); // 格式化
\`\`\`

## 2.2 Scanner input
\`\`\`java
import java.util.*;
Scanner sc = new Scanner(System.in);
int n = sc.nextInt();
double d = sc.nextDouble();
String s = sc.next();         // 不含空白
String line = sc.nextLine();  // 整行
\`\`\`

## 2.3 Read n numbers into the array
\`\`\`java
int n = sc.nextInt();
int[] a = new int[n];
for(int i = 0; i < n; i++) a[i] = sc.nextInt();
\`\`\`

> **Performance Tip**: Scanner is more than 10 times slower than BufferedReader. Use BufferedReader + StringTokenizer when the amount of data is large.
`,

},

3:{
cpp:`
# Chapter 3: Operators and Expressions (C++)

## 3.1 Arithmetic operators
Much the same as Python: \`+ - * / %\`

**But be careful:**
- \`/\` **Look at the type**! \`5 / 2 = 2\` (integer), \`5.0 / 2 = 2.5\` (floating point)
- Python's \`//\` is \`/\` in C++ (when both sides are integers)
- \`%\` Get the remainder: \`17 % 5 = 2\`

## 3.2 Split three digits
\`\`\`cpp
int n = 752;
int h = n / 100;       // 7
int t = n / 10 % 10;   // 5
int o = n % 10;        // 2
\`\`\`

## 3.3 Self-increment/self-decrement
C++ specific writing method:

\`\`\`cpp
i++;   // 等同 i = i + 1
i--;   // 等同 i = i - 1
\`\`\`

> **Integer overflow**: int has a maximum size of about 2.1 billion. Calculating powers and factorials is easy to explode, so it is safer to use \`long long\`: \`long long x = 1e18;\`
`,

c:`
# Chapter 3: Operators and Expressions (C)

Exactly the same as C++.

## 3.1 Arithmetic
\`+ - * / %\`, integer division \`/\` automatically truncated.

\`\`\`c
int n = 752;
int h = n / 100;     // 7
int t = n / 10 % 10; // 5
int o = n % 10;      // 2
\`\`\`

## 3.2 Self-increment/self-decrement
\`\`\`c
i++; i--;
\`\`\`

## 3.3 Logical operators
\`\`\`c
if (x > 0 && x < 100)   // and
if (x == 0 || y == 0)   // or
if (!flag)              // not
\`\`\`

> **C's true and false**: no bool, use int: 0 is false, non-0 is true.

> **Integer overflow**: int upper limit ~2.1 billion. Large numbers are printed with \`long long\` and printed with \`%lld\`.
`,

java:`
# Chapter 3: Operators and Expressions (Java)

## 3.1 Arithmetic
\`+ - * / %\`, same as C++. Integer \`/\` automatically truncated.

\`\`\`java
int n = 752;
int h = n / 100;
int t = n / 10 % 10;
int o = n % 10;
\`\`\`

## 3.2 Auto-increment
\`\`\`java
i++; i--;
\`\`\`

## 3.3 String addition
Java's \`+\` "concatenates" strings and can be mixed with other types:

\`\`\`java
int age = 17;
String s = "I am " + age + " years old";  // 自動轉
\`\`\`

> **Integer overflow**: int upper limit is 2.1 billion. Use long for \`1L << 40\`; add \`L\` after the number to be regarded as long.

> **Integer division trap**: \`(double)(1/2)\` = 0.0! Because 1/2 is first calculated as 0 and then converted to double. Requires \`1.0/2\` or \`(double)1/2\`.
`,

},

4:{
cpp:`
# Chapter 4: Conditional Judgment (C++)

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

## 4.2 Conditional operator (short-circuit ternary)
\`\`\`cpp
int max_v = (a > b) ? a : b;   // a 大就取 a 不然取 b
\`\`\`

## 4.3 Logical operators
| Operator | Python corresponding |
|--------|----------------|
| \`&&\` | and |
| \`\\|\\|\` | or |
| \`!\` | not |

## 4.4 switch (multi-branch)
\`\`\`cpp
switch (grade) {
    case 'A': cout << "Excellent"; break;
    case 'B': cout << "Good"; break;
    default: cout << "Try harder";
}
\`\`\`

> **Common mistakes**: If there is only one line, it is not necessary to write \`{}\`, but it is recommended to write both to avoid dangling else.

> **Compare == with =**: if (x = 5) is an assignment and is always true! \`==\` is required for comparison.
`,

c:`
# Chapter 4: Conditional Judgment (C)

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

## 4.2 Ternary operator
\`\`\`c
int max_v = (a > b) ? a : b;
\`\`\`

## 4.3 Logical operators
\`&&\`(and) \`||\`(or) \`!\`(not)

## 4.4 switch
\`\`\`c
switch (n) {
    case 1: printf("one"); break;
    case 2: printf("two"); break;
    default: printf("other");
}
\`\`\`

> **Common pitfalls**: Forgetting \`break\` will fall-through and continue executing the next case.

> **C no elif**! To write \`else if\` two words.
`,

java:`
# Chapter 4: Conditional Judgment (Java)

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

## 4.2 Ternary operator
\`\`\`java
int max = (a > b) ? a : b;
\`\`\`

## 4.3 Logical operators
\`&&\` \`||\` \`!\`, same as C++.

## 4.4 switch (arrows available in Java 14+)
\`\`\`java
switch (grade) {
    case 'A' -> System.out.println("Great");
    case 'B' -> System.out.println("OK");
    default -> System.out.println("Try");
}
\`\`\`

> **String comparison trap**: \`s1 == s2\` compares the object address, not the content! Use \`s1.equals(s2)\` for string content.
`,

},

5:{
cpp:`
# Chapter 5: Loops (C++)

## 5.1 for loop
\`\`\`cpp
for (int i = 0; i < 10; i++) {
    cout << i << " ";
}
// 對應 Python: for i in range(10)
\`\`\`

Three sections: **Initialization; Conditions; What to do at the end of each round**

## 5.2 while loop
\`\`\`cpp
int n = 100;
while (n > 0) {
    cout << n << " ";
    n /= 2;
}
\`\`\`

## 5.3 range-based for (C++11+)
\`\`\`cpp
vector<int> nums = {3, 1, 4};
for (int x : nums) {
    cout << x << " ";
}
\`\`\`

## 5.4 break/continue
- \`break\` — exit the loop immediately
- \`continue\` — jump to next round

> **Nested break limitation**: break only jumps out one level. Either use flag or \`goto\` (not recommended) or wrap it in a function return.
`,

c:`
# Chapter 5: Loop (C)

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

## 5.3 do-while (run at least once)
\`\`\`c
int x;
do {
    scanf("%d", &x);
} while (x != 0);
\`\`\`

## 5.4 break/continue
Same as C++.

> **C89 restriction**: variables declared in for must be C99 or above. If the teacher uses Dev-C++ 4.x, he may have to announce it externally first.
`,

java:`
# Chapter 5: Loops (Java)

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

## 5.3 enhanced for (foreach)
\`\`\`java
int[] nums = {3, 1, 4};
for (int x : nums) {
    System.out.print(x + " ");
}
\`\`\`

## 5.4 break / continue + label
Java supports labeled breaks, which can jump out of multiple levels:

\`\`\`java
outer:
for (int i = 0; i < n; i++) {
    for (int j = 0; j < m; j++) {
        if (g[i][j] == -1) break outer;
    }
}
\`\`\`
`,

},

6:{
cpp:`
# Chapter 6: String Processing (C++)

C++ uses \`std::string\` (requires \`#include <string>\`)

## 6.1 Basic operations
\`\`\`cpp
string s = "Hello APCS";
s.length();              // 10
s.size();                // 同上
s[0];                    // 'H'
s + " Python";           // 連接
s.substr(6, 4);          // "APCS"（從 6 開始 4 個字元）
\`\`\`

## 6.2 Find substrings
\`\`\`cpp
size_t p = s.find("APCS");
if (p != string::npos) cout << "found at " << p;
\`\`\`

## 6.3 Reverse, case
\`\`\`cpp
reverse(s.begin(), s.end());        // <algorithm>
for (auto& c : s) c = toupper(c);   // <cctype>
\`\`\`

## 6.4 Cutting (no built-in split)
Use stringstream or substr yourself.

\`\`\`cpp
stringstream ss(s);
string word;
while (ss >> word) {
    cout << word << "\\n";
}
\`\`\`

> **vs Python**: Python's \`s.split()\` corresponds to stringstream word reading. \`s[::-1]\` corresponds to \`reverse()\`.
`,

c:`
# Chapter 6: String Processing (C)

C does not have a string class, **a string is an array of characters + ending with \\0**.

## 6.1 Declaration and length
\`\`\`c
char s[] = "Hello";
int len = strlen(s);    // 5（不含 \\0）
\`\`\`

## 6.2 Commonly used functions (requires <string.h>)
\`\`\`c
strlen(s);              // 長度
strcpy(dst, src);       // 複製：dst = src
strcat(a, b);           // a 後面接 b
strcmp(a, b);           // 比較：== 0 表示相同
strstr(s, "APCS");      // 找子字串，回傳指標或 NULL
\`\`\`

## 6.3 Character judgment (<ctype.h>)
\`\`\`c
isdigit(c);  isalpha(c);  isupper(c);
toupper(c);  tolower(c);
\`\`\`

> **C string trap**:
> - Cannot use \`==\` to compare strings! To use strcmp
> - Cannot assign with \`=\`! To use strcpy
> - The array must be large enough, otherwise it will overflow and crash.
`,

java:`
# Chapter 6: String Processing (Java)

Java's \`String\` is an immutable (immutable) object.

## 6.1 Basic operations
\`\`\`java
String s = "Hello APCS";
s.length();                // 10
s.charAt(0);               // 'H'
s + " Python";             // 連接
s.substring(6);            // "APCS"
s.substring(6, 10);        // "APCS"
\`\`\`

## 6.2 Common methods
\`\`\`java
s.toUpperCase();           // "HELLO APCS"
s.toLowerCase();
s.indexOf("APCS");         // 6
s.replace("APCS", "Code"); // "Hello Code"
s.split(" ");              // 切割回傳 String[]
s.trim();                  // 去頭尾空白
\`\`\`

## 6.3 Reversal
\`\`\`java
String r = new StringBuilder(s).reverse().toString();
\`\`\`

## 6.4 Use StringBuilder to connect a large number of strings
\`\`\`java
StringBuilder sb = new StringBuilder();
for (int i = 0; i < n; i++) sb.append(i).append(" ");
System.out.println(sb);
\`\`\`

> **Compare strings**: \`s1.equals(s2)\` is not \`==\`!
`,

},

7:{
cpp:`
# Chapter 7: vector (dynamic array) (C++)

The C++ list corresponds to \`std::vector\`.

## 7.1 Creation and operation
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

## 7.2 Visit
\`\`\`cpp
for (int i = 0; i < v.size(); i++) cout << v[i];
for (int x : v) cout << x;     // 簡潔版
\`\`\`

## 7.3 Commonly used algorithms (<algorithm>)
\`\`\`cpp
sort(v.begin(), v.end());                      // 排序
reverse(v.begin(), v.end());                   // 反轉
int s = accumulate(v.begin(), v.end(), 0);     // 總和 <numeric>
int mx = *max_element(v.begin(), v.end());     // 最大
int c = count(v.begin(), v.end(), 5);          // 5 出現幾次
\`\`\`

> **vs Python**: vector.push_back ↔ list.append; vector access using subscripts is fast, just like arrays.
`,

c:`
# Chapter 7: Arrays (C)

C does not have dynamic arrays (Python's lists), use fixed-size arrays.

## 7.1 Announcement
\`\`\`c
int a[100];                    // 100 個 int（未初始化）
int a[100] = {0};              // 全 0
int a[] = {3, 1, 4, 1, 5};     // 編譯器自動算大小
int n = sizeof(a) / sizeof(int);
\`\`\`

## 7.2 Access and access
\`\`\`c
a[0] = 42;
for (int i = 0; i < n; i++) printf("%d ", a[i]);
\`\`\`

## 7.3 Sorting (qsort)
\`\`\`c
int cmp(const void* a, const void* b){
    return *(int*)a - *(int*)b;
}
qsort(a, n, sizeof(int), cmp);
\`\`\`

## 7.4 Common operations
\`\`\`c
int sum = 0, mx = a[0];
for (int i = 0; i < n; i++) {
    sum += a[i];
    if (a[i] > mx) mx = a[i];
}
\`\`\`

> **Newbie Trap**: The array size needs to be known at compile time. If you need dynamic size, use malloc:
> \`int* a = (int*)malloc(n * sizeof(int));\`
`,

java:`
# Chapter 7: Arrays and ArrayList (Java)

Java has two types: **fixed array** \`int[]\` and **dynamic ArrayList**.

## 7.1 Fixed array
\`\`\`java
int[] a = new int[10];          // 10 個 0
int[] b = {3, 1, 4, 1, 5};      // 直接給
a.length;                       // 大小（不是 length()）
a[0] = 42;
\`\`\`

## 7.2 ArrayList (variable size)
\`\`\`java
import java.util.*;
ArrayList<Integer> list = new ArrayList<>();
list.add(5);                    // 加到尾
list.get(0);                    // 取值
list.size();                    // 大小
list.remove(0);                 // 移除某位置
\`\`\`

## 7.3 Sorting
\`\`\`java
Arrays.sort(a);                 // int[]
Collections.sort(list);         // ArrayList
\`\`\`

## 7.4 Commonly used
\`\`\`java
int sum = 0, mx = a[0];
for (int x : a) { sum += x; if (x > mx) mx = x; }
\`\`\`

> **Newbie Trap**: The array is \`a.length\`, the string is \`s.length()\`, pay attention to whether there are parentheses!
`,

},

8:{
cpp:`
# Chapter 8: Two-dimensional Arrays (C++)

## 8.1 Two establishment methods
**Fixed Array**:
\`\`\`cpp
int g[5][5] = {0};                // 全 0
int g[3][3] = {{1,2,3},{4,5,6},{7,8,9}};
\`\`\`

**Dynamic vector**:
\`\`\`cpp
vector<vector<int>> g(n, vector<int>(m, 0));   // n x m 全 0
\`\`\`

## 8.2 Visit
\`\`\`cpp
for (int i = 0; i < n; i++)
    for (int j = 0; j < m; j++)
        cout << g[i][j] << " ";
\`\`\`

## 8.3 Common patterns: checkerboard
\`\`\`cpp
for (int i = 0; i < n; i++)
    for (int j = 0; j < n; j++)
        g[i][j] = (i + j) % 2;
\`\`\`

> **vs Python**: Python's \`[[0]*m for _ in range(n)]\` corresponds to C++'s \`vector<vector<int>>(n, vector<int>(m, 0))\`.
`,

c:`
# Chapter 8: Two-dimensional Arrays (C)

## 8.1 Announcement
\`\`\`c
int g[5][5] = {0};
int g[3][3] = {{1,2,3},{4,5,6},{7,8,9}};
\`\`\`

## 8.2 Visit
\`\`\`c
for (int i = 0; i < n; i++) {
    for (int j = 0; j < m; j++)
        printf("%d ", g[i][j]);
    printf("\\n");
}
\`\`\`

## 8.3 Dynamic two-dimensional array
Two-stage malloc is required:

\`\`\`c
int** g = malloc(n * sizeof(int*));
for (int i = 0; i < n; i++) g[i] = malloc(m * sizeof(int));
\`\`\`

> **Memory configuration**: C's two-dimensional array \`g[i][j]\` is a contiguous memory (one big block), \`g[i]\` is offset by \`i * m\` elements.
`,

java:`
# Chapter 8: 2D Arrays (Java)

## 8.1 Announcement
\`\`\`java
int[][] g = new int[5][5];           // 全 0
int[][] m = {{1,2,3},{4,5,6}};       // 直接給
g.length;                            // 列數
g[0].length;                         // 行數
\`\`\`

## 8.2 Visit
\`\`\`java
for (int i = 0; i < g.length; i++)
    for (int j = 0; j < g[i].length; j++)
        System.out.print(g[i][j] + " ");
\`\`\`

## 8.3 Sawtooth array (each column has a different length)
\`\`\`java
int[][] g = new int[3][];
g[0] = new int[]{1};
g[1] = new int[]{1, 2};
g[2] = new int[]{1, 2, 3};
\`\`\`

> **Print the entire array**: \`Arrays.deepToString(g)\` directly prints out the contents of the two-dimensional array, making debugging easy.
`,

},

9:{
cpp:`
# Chapter 9: Functions (C++)

## 9.1 Basic format
\`\`\`cpp
回傳型別 函式名(參數型別 參數名, ...) {
    // 內容
    return 值;
}

int add(int a, int b) {
    return a + b;
}
\`\`\`

## 9.2 Use void if no value is returned.
\`\`\`cpp
void greet(string name) {
    cout << "Hello " << name;
}
\`\`\`

## 9.3 Example: Determining prime numbers
\`\`\`cpp
bool isPrime(int n) {
    if (n < 2) return false;
    for (int i = 2; i*i <= n; i++)
        if (n % i == 0) return false;
    return true;
}
\`\`\`

## 9.4 Pass reference (do not copy)
\`\`\`cpp
void swap(int& a, int& b) {   // & 表示參考
    int t = a; a = b; b = t;
}
\`\`\`

> **Default parameter**: \`int f(int x, int n = 10)\` - If n is not given when calling, it is 10.

> **Function declaration order**: The called function must appear first, or prototype \`int add(int, int);\` must be written on it first
`,

c:`
# Chapter 9: Functions (C)

Almost the same as C++, but without reference \`&\`.

## 9.1 Basic format
\`\`\`c
int add(int a, int b) {
    return a + b;
}

void greet(char* name) {
    printf("Hello %s\\n", name);
}
\`\`\`

## 9.2 Example: Determining prime numbers
\`\`\`c
int isPrime(int n) {
    if (n < 2) return 0;
    for (int i = 2; i*i <= n; i++)
        if (n % i == 0) return 0;
    return 1;
}
\`\`\`

## 9.3 If you want to change the incoming variables, you need to use indicators.
\`\`\`c
void swap(int* a, int* b) {
    int t = *a; *a = *b; *b = t;
}
// 呼叫：swap(&x, &y);
\`\`\`

> **Recursive**: Same as Python writing method, C also supports it.
`,

java:`
# Chapter 9: Methods (Java)

## 9.1 Basic format
The method should be in class, and APCS should be added with static:

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

## 9.2 Example: Prime numbers
\`\`\`java
static boolean isPrime(int n) {
    if (n < 2) return false;
    for (int i = 2; i*i <= n; i++)
        if (n % i == 0) return false;
    return true;
}
\`\`\`

## 9.3 Passing the array will pass the reference
Java objects (including arrays) can be modified directly after passing in the method:

\`\`\`java
static void doubleAll(int[] a) {
    for (int i = 0; i < a.length; i++) a[i] *= 2;
}
\`\`\`

> **Why static? ** main is static, and static methods can only call static methods directly.
`,

},

10:{
cpp:`
# Chapter 10: map and set (C++)

## 10.1 map (key → value)
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

## 10.2 unordered_map (hash table, faster)
\`\`\`cpp
#include <unordered_map>
unordered_map<string, int> h;
\`\`\`

Difference:
- \`map\` uses red-black tree O(log n), automatically sorted by key
- \`unordered_map\` uses hash O(1) but out of order

## 10.3 set / unordered_set
\`\`\`cpp
set<int> s;
s.insert(5);
if (s.count(5)) ...        // 是否存在
\`\`\`

> **Word frequency statistics**:
> \`\`\`cpp
> map<string, int> freq;
> string w;
> while (cin >> w) freq[w]++;
> \`\`\`
`,

c:`
# Chapter 10: Simple Dictionary/Collection (C)

**C has no built-in dict or set**! You have to implement it yourself or use the "parallel array" approximation.

## 10.1 Parallel array for word frequency
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

## 10.2 Simple set (only remember occurrences)
Similar to above, just don’t count the times.

## 10.3 Advanced: Write your own hash table
I won’t take the APCS exam, but if you want to learn, you can take the CS50 course.

> **Alternatives**:
> - If the key is "number 0~10⁶", directly use the array as hash: \`int cnt[1000001] = {0}; cnt[x]++;\`
> - This trick is super fast, super easy, and very commonly used in APCS.
`,

java:`
# Chapter 10: HashMap and HashSet (Java)

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

## 10.3 TreeMap / TreeSet (ordered version)
Same as C++ map/set, automatically sorted by key, O(log n).

> **Character frequency example**:
> \`\`\`java
> for (String w : text.split(" "))
>     cnt.merge(w, 1, Integer::sum);
> \`\`\`
`,

},

11:{
cpp:`
# Chapter 11: Algorithm Basics (C++)

## 11.1 Binary search
\`\`\`cpp
#include <algorithm>
vector<int> a = {1, 3, 5, 7, 9};
sort(a.begin(), a.end());

bool found = binary_search(a.begin(), a.end(), 5);
auto it = lower_bound(a.begin(), a.end(), 5);  // 第一個 >= 5
int idx = it - a.begin();                       // 位置
\`\`\`

## 11.2 Prefix sum
\`\`\`cpp
vector<int> ps(n+1, 0);
for (int i = 0; i < n; i++) ps[i+1] = ps[i] + a[i];
// 區間 [l, r] 總和 = ps[r+1] - ps[l]
\`\`\`

## 11.3 Sieve of Eratosthenes
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
# Chapter 11: Algorithm Basics (C)

## 11.1 Binary search
\`\`\`c
int* p = bsearch(&key, arr, n, sizeof(int), cmp);
// 找不到回 NULL，找到回指標
\`\`\`

Or write it yourself:
\`\`\`c
int lo = 0, hi = n - 1;
while (lo <= hi) {
    int m = (lo + hi) / 2;
    if (a[m] == key) return m;
    if (a[m] < key) lo = m + 1;
    else hi = m - 1;
}
\`\`\`

## 11.2 Prefix sum
\`\`\`c
int ps[N+1] = {0};
for (int i = 0; i < n; i++) ps[i+1] = ps[i] + a[i];
// a[l..r] 和 = ps[r+1] - ps[l]
\`\`\`

## 11.3 Prime number sieve
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
# Chapter 11: Algorithm Basics (Java)

## 11.1 Binary search
\`\`\`java
int[] a = {1, 3, 5, 7, 9};
Arrays.sort(a);
int idx = Arrays.binarySearch(a, 5);   // 找到回 index，找不到回負值
\`\`\`

## 11.2 Prefix sum
\`\`\`java
int[] ps = new int[n+1];
for (int i = 0; i < n; i++) ps[i+1] = ps[i] + a[i];
\`\`\`

## 11.3 Prime number sieve
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
`,

},

12:{
cpp:`
# Chapter 12: Nested Loops (C++)

## 12.1 Mode: external fixed, internal variable
\`\`\`cpp
for (int i = 0; i < n; i++) {       // 外
    for (int j = 0; j < n; j++) {    // 內
        // 對每組 (i, j) 做事
    }
}
\`\`\`
Executed \`n × n = n²\` times in total.

## 12.2 Pascal Triangle
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

## 12.3 Leave the innermost layer early
\`\`\`cpp
for (int i = 0; i < n; i++) {
    for (int j = 0; j < n; j++) {
        if (g[i][j] == target) { found = true; break; }
    }
    if (found) break;   // 再 break 一次跳外層
}
\`\`\`

> **Complexity Warning**: Three-layer nested \`n=100\` has been used 10⁶ times, APCS runs about 10⁸ per second, estimate the range.
`,

c:`
# Chapter 12: Nested Loops (C)

Exactly the same as C++.

## 12.1 Double layer for
\`\`\`c
for (int i = 0; i < n; i++)
    for (int j = 0; j < n; j++)
        // do something with (i, j)
\`\`\`

## 12.2 Pascal Triangle
\`\`\`c
int g[10][10] = {0};
for (int i = 0; i < n; i++) { g[i][0] = 1; g[i][i] = 1; }
for (int i = 2; i < n; i++)
    for (int j = 1; j < i; j++)
        g[i][j] = g[i-1][j-1] + g[i-1][j];
\`\`\`

## 12.3 Jump out of multiple layers
C uses goto (not recommended but possible):

\`\`\`c
for (...) {
    for (...) {
        if (cond) goto done;
    }
}
done:
\`\`\`

Or use the flag variable.
`,

java:`
# Chapter 12: Nested Loops (Java)

## 12.1 Double layer for
\`\`\`java
for (int i = 0; i < n; i++)
    for (int j = 0; j < n; j++)
        // ...
\`\`\`

## 12.2 Pascal Triangle
\`\`\`java
int[][] g = new int[n][n];
for (int i = 0; i < n; i++) { g[i][0] = 1; g[i][i] = 1; }
for (int i = 2; i < n; i++)
    for (int j = 1; j < i; j++)
        g[i][j] = g[i-1][j-1] + g[i-1][j];
\`\`\`

## 12.3 Labeled break (jumping multiple levels)
Java Features:

\`\`\`java
outer:
for (int i = 0; i < n; i++) {
    for (int j = 0; j < n; j++) {
        if (g[i][j] == target) break outer;
    }
}
\`\`\`
`,

},

13:{
cpp:`
# Chapter 13: Advanced STL Algorithm (C++)

C++ does not have list comprehension, but it does have the powerful \`<algorithm>\` library.

## 13.1 transform (corresponding to map)
\`\`\`cpp
vector<int> a = {1, 2, 3};
vector<int> b(a.size());
transform(a.begin(), a.end(), b.begin(), [](int x){ return x*x; });
// b = {1, 4, 9}
\`\`\`

## 13.2 copy_if (corresponding to filter)
\`\`\`cpp
vector<int> evens;
copy_if(a.begin(), a.end(), back_inserter(evens),
        [](int x){ return x % 2 == 0; });
\`\`\`

## 13.3 accumulate(reduce)
\`\`\`cpp
int sum_sq = accumulate(a.begin(), a.end(), 0,
                        [](int s, int x){ return s + x*x; });
\`\`\`

## 13.4 lambda syntax
\`[capture](params){ body }\`

\`\`\`cpp
auto f = [](int x){ return x * 2; };
f(5);    // 10
\`\`\`
`,

c:`
# Chapter 13: Loop Mode (C)

C has **no list comprehension/lambda/STL at all, all with loops.

## 13.1 Filter + Transform
\`\`\`c
int result[100], cnt = 0;
for (int i = 0; i < n; i++) {
    if (a[i] % 2 == 0) {              // 篩
        result[cnt++] = a[i] * a[i];  // 轉換並存
    }
}
\`\`\`

## 13.2 Sum with conditions
\`\`\`c
int sum = 0;
for (int i = 0; i < n; i++)
    if (a[i] > 0) sum += a[i];
\`\`\`

## 13.3 Find the largest
\`\`\`c
int mx = a[0], idx = 0;
for (int i = 1; i < n; i++)
    if (a[i] > mx) { mx = a[i]; idx = i; }
\`\`\`

> **C Philosophy**: Clear, direct, all operations visible. It's verbose but easy to debug.
`,

java:`
# Chapter 13: Stream API (Java)

Java 8+’s Stream API is much like Python’s list comprehension.

## 13.1 map/filter/collect
\`\`\`java
import java.util.stream.*;
int[] a = {1, 2, 3, 4, 5};
int[] sq = Arrays.stream(a).map(x -> x*x).toArray();
int[] even = Arrays.stream(a).filter(x -> x % 2 == 0).toArray();
\`\`\`

## 13.2 reduce/sum
\`\`\`java
int sum = Arrays.stream(a).sum();
int sumSq = Arrays.stream(a).map(x -> x*x).sum();
\`\`\`

## 13.3 List version
\`\`\`java
List<Integer> nums = Arrays.asList(1, 2, 3, 4, 5);
List<Integer> doubled = nums.stream()
    .map(x -> x * 2)
    .collect(Collectors.toList());
\`\`\`

> **APCS Practical Combat**: Stream is very slow, just use a normal for loop in the competition. Stream is only used when the need for concise code is high.
`,

},

14:{
cpp:`
# Chapter 14: Sorting Advanced (C++)

## 14.1 Custom comparison function
\`\`\`cpp
struct Student { string name; int score, age; };
vector<Student> v;

sort(v.begin(), v.end(), [](const Student& a, const Student& b){
    if (a.score != b.score) return a.score > b.score;   // 分數降冪
    return a.age < b.age;                                // 年齡升冪
});
\`\`\`

## 14.2 pair sorting (default is first, then second)
\`\`\`cpp
vector<pair<int, int>> v = {{3, 1}, {1, 2}, {3, 0}};
sort(v.begin(), v.end());
// 結果: (1,2), (3,0), (3,1)
\`\`\`

## 14.3 Lowering the power
\`\`\`cpp
sort(v.begin(), v.end(), greater<int>());
\`\`\`

## 14.4 Partial sorting
\`\`\`cpp
partial_sort(v.begin(), v.begin()+3, v.end());   // 前 3 名排好
nth_element(v.begin(), v.begin()+k, v.end());    // 找第 k 名
\`\`\`
`,

c:`
# Chapter 14: qsort Advanced (C)

## 14.1 Custom cmp
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

## 14.2 The meaning of cmp return value
- Return **negative number**: a is ranked **in front of b**
- Return **positive number**: a ranks **behind b**
- Return **0**: the order remains unchanged

## 14.3 Note: Subtraction may cause overflow
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
# Chapter 14: Sorting Advanced (Java)

## 14.1 Comparator with lambda
\`\`\`java
int[][] students = {{0,85,17},{1,92,16},{2,85,18}};

Arrays.sort(students, (a, b) -> {
    if (a[1] != b[1]) return b[1] - a[1];  // 分數降冪
    return a[2] - b[2];                     // 年齡升冪
});
\`\`\`

## 14.2 List sorting
\`\`\`java
List<Student> list = new ArrayList<>();
list.sort(Comparator.comparingInt((Student s) -> -s.score)
                    .thenComparingInt(s -> s.age));
\`\`\`

## 14.3 String sorting
\`\`\`java
String[] names = {"Bob", "Alice", "Cara"};
Arrays.sort(names);                          // 字典序
Arrays.sort(names, Comparator.reverseOrder()); // 反向
\`\`\`

> **Common mistakes**: Use \`Arrays.sort(arr, comparator)\` for sorting int[][]; Comparator cannot be specified for basic type arrays such as \`int[]\`! It must be converted to \`Integer[]\` first.
`,

},

15:{
cpp:`
# Chapter 15: Introduction to Recursion (C++)

## 15.1 Factorial
\`\`\`cpp
int fact(int n) {
    if (n <= 1) return 1;          // base case
    return n * fact(n - 1);        // recurse
}
\`\`\`

## 15.2 Fisherman’s Sequence
\`\`\`cpp
int fib(int n) {
    if (n <= 1) return n;
    return fib(n-1) + fib(n-2);
}
// 注意：fib(40) 已經很慢，要記憶化
\`\`\`

## 15.3 N Queen Backtracking
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

> **Recursion depth limit**: The default stack is about 1MB. If it is too deep, stack overflow will occur. If the depth is > 10⁵, change the iteration.
`,

c:`
# Chapter 15: Introduction to Recursion (C)

It is written exactly the same way as C++.

## 15.1 Factorial
\`\`\`c
int fact(int n) {
    if (n <= 1) return 1;
    return n * fact(n - 1);
}
\`\`\`

## 15.2 Fisher
\`\`\`c
int fib(int n) {
    if (n <= 1) return n;
    return fib(n-1) + fib(n-2);
}
\`\`\`

## 15.3 Tower of Hanoi
\`\`\`c
void hanoi(int n, char from, char to, char via) {
    if (n == 1) { printf("%c -> %c\\n", from, to); return; }
    hanoi(n-1, from, via, to);
    printf("%c -> %c\\n", from, to);
    hanoi(n-1, via, to, from);
}
\`\`\`

> **Recursive Core**:
> 1. Termination condition (base case)
> 2. Call yourself after narrowing down the problem
> 3. Merge sub-results
`,

java:`
# Chapter 15: Introduction to Recursion (Java)

## 15.1 Factorial
\`\`\`java
static int fact(int n) {
    if (n <= 1) return 1;
    return n * fact(n - 1);
}
\`\`\`

## 15.2 Fei (memory version)
\`\`\`java
static int[] memo = new int[100];
static int fib(int n) {
    if (n <= 1) return n;
    if (memo[n] != 0) return memo[n];
    return memo[n] = fib(n-1) + fib(n-2);
}
\`\`\`

## 15.3 N Queen
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

> **Java recursion depth**: The default JVM stack is 512KB, about 10,000 layers.
`,

},

16:{
cpp:`
# Chapter 16: Enumeration Question Type (C++)

## 16.1 Bit mask enumeration all subsets
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

## 16.2 Arrange enumeration
\`\`\`cpp
vector<int> v = {1, 2, 3};
do {
    for (int x : v) cout << x << " ";
    cout << "\\n";
} while (next_permutation(v.begin(), v.end()));
\`\`\`

## 16.3 Double-layer nested enumeration of all pairs
\`\`\`cpp
for (int i = 0; i < n; i++)
    for (int j = i+1; j < n; j++)
        // (a[i], a[j])
\`\`\`

> **Enumeration scope**:
> - Subset: n ≤ 20 (2²⁰ ≈ 1 million)
> - Permutation: n ≤ 8 (8! = 40320)
> - Pair: n ≤ 10⁴ (n² = 10⁸)
`,

c:`
# Chapter 16: Enumeration Question Type (C)

## 16.1 Bit enumeration subset
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

## 16.2 Bit operation formula
- \`1 << i\` — only the i-th bit is 1
- \`mask & (1 << i)\` — Check the i-th bit
- \`mask | (1 << i)\` — Set bit i to 1
- \`mask ^ (1 << i)\` — flip the i-th bit
- \`__builtin_popcount(mask)\` — Count the number of 1’s (GCC)

## 16.3 Double-level enumeration
\`\`\`c
for (int i = 0; i < n; i++)
    for (int j = i+1; j < n; j++)
        if (a[i] + a[j] == target) cnt++;
\`\`\`
`,

java:`
# Chapter 16: Enumeration Question Type (Java)

## 16.1 Bit enumeration subset
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

> **Java Trap**: \`mask & (1 << i)\` result is not a boolean! Must write \`!= 0\`:
> \`if ((mask & (1 << i)) != 0)\` cannot write \`if (mask & (1 << i))\`

## 16.2 Count the number of 1’s
\`Integer.bitCount(mask)\` directly gives you the number of 1's in the binary bits of the mask.

## 16.3 Double-level enumeration
\`\`\`java
for (int i = 0; i < n; i++)
    for (int j = i+1; j < n; j++)
        if (a[i] + a[j] == target) cnt++;
\`\`\`
`,

},

17:{
cpp:`
# Chapter 17: Advanced Data Structures (C++)

## 17.1 deque (double-ended queue)
\`\`\`cpp
#include <deque>
deque<int> dq;
dq.push_back(1);   dq.push_front(0);
dq.pop_back();     dq.pop_front();
dq.front();        dq.back();
\`\`\`

## 17.2 priority_queue (heap)
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

> **Applicable scenarios**:
> - BFS uses queue
> - DFS / bracket pairing using stack
> - Top-K/Dijkstra use priority_queue
`,

c:`
# Chapter 17: Advanced Data Structures (C)

C does not have a native heap/queue, you have to implement it yourself or use an array to simulate it.

## 17.1 Use array to simulate stack
\`\`\`c
int stk[1000], top = 0;
stk[top++] = x;       // push
int v = stk[--top];   // pop
int peek = stk[top-1]; // peek
\`\`\`

## 17.2 Use array to simulate queue (loop)
\`\`\`c
int q[1000], head = 0, tail = 0;
q[tail++] = x;        // enqueue
int v = q[head++];    // dequeue
int size = tail - head;
\`\`\`

## 17.3 Get the top K big/small (use sort)
\`\`\`c
qsort(a, n, sizeof(int), cmp);
// 前 K 小：a[0..K-1]
// 前 K 大：a[n-K..n-1]
\`\`\`

> **APCS alternative method**: If the amount of data is small, it can be solved directly by sort + slicing. There is no need to write the heap yourself.
`,

java:`
# Chapter 17: Advanced Data Structures (Java)

## 17.1 Deque (both ends are acceptable)
\`\`\`java
Deque<Integer> dq = new ArrayDeque<>();
dq.offerLast(1);   dq.offerFirst(0);
dq.pollLast();     dq.pollFirst();
dq.peekFirst();
\`\`\`

## 17.2 PriorityQueue (default minimum heap)
\`\`\`java
PriorityQueue<Integer> minH = new PriorityQueue<>();
PriorityQueue<Integer> maxH = new PriorityQueue<>(Comparator.reverseOrder());
minH.offer(5);
minH.peek();   // 最小
minH.poll();   // 移除最小
\`\`\`

## 17.3 Stack/Queue
\`\`\`java
Deque<Integer> stk = new ArrayDeque<>();
stk.push(5);  stk.peek();  stk.pop();

Queue<Integer> q = new LinkedList<>();
q.offer(5);  q.peek();  q.poll();
\`\`\`

> **Java Tip**: Don't use the ancient \`Stack\` class! Use \`ArrayDeque\` as stack, which is much faster.
`,

},

18:{
cpp:`
# Chapter 18: Common Errors and Debugging (C++)

## 18.1 Integer overflow
\`\`\`cpp
int n = 100000;
int s = n * n;         // 10¹⁰ 超出 int 上限！
long long s = (long long)n * n;   // 對
\`\`\`

## 18.2 Array out of bounds (segmentation fault)
\`\`\`cpp
int a[10];
a[10] = 5;             // 越界！未定義行為
for (int i = 0; i <= n; i++) ...   // 通常該 < n
\`\`\`

## 18.3 Uninitialized variables
\`\`\`cpp
int sum;               // 內含垃圾值！
sum += a[i];           // 結果亂掉
int sum = 0;           // 對
\`\`\`

## 18.4 Use .at() for vector out of bounds
When developing, use \`v.at(i)\` instead of \`v[i]\`. If it crosses the boundary, an exception will be thrown instead of crashing.

## 18.5 Three tips for troubleshooting
1. Get the intermediate result \`cout\`
2. Verify by hand calculation with small input
3. Use \`assert(condition)\` to block states that are not expected to occur
`,

c:`
# Chapter 18: Common Errors and Debugging (C)

## 18.1 scanf forget &
\`\`\`c
int n;
scanf("%d", n);    // ❌ 會 crash
scanf("%d", &n);   // ✅
\`\`\`

## 18.2 The string buffer is not large enough
\`\`\`c
char s[10];
strcpy(s, "Hello, world!");   // ❌ 12 個字元，溢位
char s[100];                   // ✅ 留多一點
\`\`\`

## 18.3 Integer overflow
\`\`\`c
int n = 100000;
long long s = (long long)n * n;   // 要先轉型
\`\`\`

## 18.4 Uninitialized variables
\`\`\`c
int sum = 0;     // 一定要給初值
int arr[100] = {0};   // 陣列也要
\`\`\`

## 18.5 Memory leak
\`\`\`c
int* p = malloc(n * sizeof(int));
// ... 用完
free(p);         // 不釋放會洩漏
\`\`\`

> **Common error messages**:
> - Segmentation fault → usually array out of bounds or empty index
> - Stack smashing → local array overflow
`,

java:`
# Chapter 18: Common Errors and Debugging (Java)

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

## 18.3 Incorrect use of string comparison
\`\`\`java
String a = "abc", b = "abc";
if (a == b) ...         // ❌ 比的是位址
if (a.equals(b)) ...    // ✅ 比內容
\`\`\`

## 18.4 Integer overflow
\`\`\`java
int n = 100000;
long s = (long)n * n;   // 要先轉
\`\`\`

## 18.5 Debugging
\`\`\`java
System.out.println("debug: i=" + i + " val=" + val);
assert val > 0 : "val must be positive";
\`\`\`
`,

},

19:{
cpp:`
# Chapter 19: Comprehensive Exercises — Kadane (C++)

## 19.1 Maximum contiguous subarray sum
\`\`\`cpp
vector<int> a = {-2, 1, -3, 4, -1, 2, 1, -5, 4};
int cur = a[0], best = a[0];
for (size_t i = 1; i < a.size(); i++) {
    cur = max((int)a[i], cur + a[i]);  // 重啟 or 延續
    best = max(best, cur);
}
cout << best;   // 6 (from [4,-1,2,1])
\`\`\`

## 19.2 With location record
\`\`\`cpp
int cur = a[0], best = a[0];
int l = 0, r = 0, tmpL = 0;
for (int i = 1; i < n; i++) {
    if (a[i] > cur + a[i]) { cur = a[i]; tmpL = i; }
    else cur += a[i];
    if (cur > best) { best = cur; l = tmpL; r = i; }
}
\`\`\`

## 19.3 Deformation: Ring Maximum Sum
\`\`\`cpp
// 答案 = max(普通 Kadane, 總和 - 最小子陣列和)
\`\`\`
`,

c:`
# Chapter 19: Comprehensive Exercises — Kadane (C)

## 19.1 Maximum contiguous subarray sum
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

## 19.2 Pay attention to all negative arrays
The question usually states "choose at least one", so the initial value is \`cur = best = a[0]\` instead of 0.

## 19.3 Time complexity
O(n) — Run the array only once.

> **Kadane's Spirit**: Each grid determines whether to "start over from here" or "continue the previous one". Always remember the best \`best\` yet.
`,

java:`
# Chapter 19: Comprehensive Exercises — Kadane (Java)

## 19.1 Maximum contiguous subarray sum
\`\`\`java
int[] a = {-2, 1, -3, 4, -1, 2, 1, -5, 4};
int cur = a[0], best = a[0];
for (int i = 1; i < a.length; i++) {
    cur = Math.max(a[i], cur + a[i]);
    best = Math.max(best, cur);
}
System.out.println(best);
\`\`\`

## 19.2 Why is this right?
**DP Idea**: \`dp[i]\` = the largest consecutive sum ending with i.
- Or just take \`a[i]\` (lose all the first ones)
- Why don't you connect \`dp[i-1] + a[i]\`

Take the larger one and track the global maximum.

## 19.3 Transformation question
- 2D Kadane (maximum sum of submatrices) — run Kadane on columns + outer enumeration interval, O(n³)
- Maximum sum of no more than K elements — sliding window
`,

},

20:{
cpp:`
# Chapter 20: APCS Practical Skills (C++)

## 20.1 Accelerating I/O
When using APCS with large data, be sure to add:
\`\`\`cpp
ios::sync_with_stdio(false);
cin.tie(0);
\`\`\`

## 20.2 Common STL quick check
| Function | STL |
|------|-----|
| Dynamic array | \`vector\` |
| Sort | \`sort(v.begin(), v.end())\` |
| Binary search | \`lower_bound\`, \`upper_bound\` |
| Antithesis | \`map\`, \`unordered_map\` |
| Collection | \`set\`, \`unordered_set\` |
| Heap | \`priority_queue\` |
| String cutting | \`stringstream\` |

## 20.3 Example of performance indicators
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

> **Pre-Exam Checklist**:
> ✅ \`vector / sort / map\` Proficient
> ✅ DP / DFS / BFS basic template
> ✅ Think too much about boundary conditions (n=0, n=1, all the same)
`,

c:`
# Chapter 20: APCS Practical Skills (C)

## 20.1 I/O is fast enough
scanf/printf is already the fastest in C, no special adjustments are needed.

## 20.2 Quick check of essential functions
| Function | Header file |
|------|--------|
| Sort | qsort (stdlib.h) |
| String | strcpy/strlen/strcmp (string.h) |
| Character | isdigit/isalpha (ctype.h) |
| Mathematics | sqrt/pow/abs (math.h, link -lm) |
| Memory | malloc/free (stdlib.h) |

## 20.3 Example of performance indicators
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

> **Pre-Exam Checklist**:
> ✅ qsort is written in cmp
> ✅ The array size is sufficient (if the question is 10⁵, it will be 100005)
> ✅ Always \`long long\` anti-overflow bit
`,

java:`
# Chapter 20: APCS Practical Skills (Java)

## 20.1 Accelerate input (important!)
Scanner will TLE under large data:
\`\`\`java
BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
int n = Integer.parseInt(br.readLine().trim());
StringTokenizer st = new StringTokenizer(br.readLine());
int a = Integer.parseInt(st.nextToken());
\`\`\`

## 20.2 Accelerate output
\`\`\`java
StringBuilder sb = new StringBuilder();
for (...) sb.append(x).append(' ');
System.out.print(sb);
\`\`\`

## 20.3 Example of performance indicators
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

> **Pre-Exam Checklist**:
> ✅ BufferedReader is well written
> ✅ Arrays.sort / HashMap / ArrayDeque proficient
> ✅ Use \`long\` anti-overflow bit
`,

},

21:{
cpp:`
# Chapter 21: A Visit to the Tree (C++)

A tree is a connected graph without cycles. Common APCS test methods are "father-child relationship, visit order, and subtree size."

## 21.1 Save tree
\`\`\`cpp
vector<vector<int>> child(n);  // child[u] 存 u 的所有孩子
child[0] = {1, 2};
child[1] = {3, 4};
\`\`\`

If the question gives an undirected edge, use an adjacency list and bring parent to avoid going back.

## 21.2 DFS operator tree size
\`\`\`cpp
vector<int> sz(n, 1);
int dfs(int u) {
    for (int v : child[u])
        sz[u] += dfs(v);
    return sz[u];
}
\`\`\`

## 21.3 Preorder/Postorder
- Preface: Deal with yourself first, then deal with your children.
- Post-order: deal with the children first, then come back and sort yourself out.

Subtree size and tree DP are mostly postorder, because you need to know the child's answer first.
`,

c:`
# Chapter 21: A visit to the tree (C)

C does not have a vector, and APCS small trees can use fixed arrays to store children.

## 21.1 Fixed array version children
\`\`\`c
int child[100][100], cnt[100] = {0};
child[0][cnt[0]++] = 1;
child[0][cnt[0]++] = 2;
child[1][cnt[1]++] = 3;
child[1][cnt[1]++] = 4;
\`\`\`

## 21.2 DFS operator tree size
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

## 21.3 Highlights of C
- The array size must be sufficient.
- If the recursion depth is too deep, stack overflow may occur.
- If it is an undirected tree, add parent to the DFS parameter.
`,

java:`
# Chapter 21: A Visit to the Tree (Java)

Java uses \`ArrayList<Integer>[]\` to store trees, and the access logic is almost the same as C++.

## 21.1 Create children
\`\`\`java
ArrayList<Integer>[] child = new ArrayList[n];
for (int i = 0; i < n; i++) child[i] = new ArrayList<>();
child[0].add(1);
child[0].add(2);
child[1].add(3);
child[1].add(4);
\`\`\`

## 21.2 DFS operator tree size
\`\`\`java
static ArrayList<Integer>[] child;
static int[] sz;

static int dfs(int u) {
    sz[u] = 1;
    for (int v : child[u]) sz[u] += dfs(v);
    return sz[u];
}
\`\`\`

## 21.3 Practical reminder
When there are many nodes, Java recursion may explode the stack; if the depth may reach 10^5, change to iterative stack or adjust the JVM stack.
`,

},

22:{
cpp:`
# Chapter 22: Graph Theory BFS / DFS (C++)

The graph is stored in an adjacency list, BFS finds the shortest distance with equal weight, and DFS finds the connected components.

## 22.1 Adjacency list
\`\`\`cpp
vector<vector<int>> g(n);
g[u].push_back(v);
g[v].push_back(u);  // 無向圖要加兩邊
\`\`\`

## 22.2 BFS shortest number of steps
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

## 22.3 DFS connected components
\`\`\`cpp
void dfs(int u) {
    vis[u] = true;
    for (int v : g[u]) if (!vis[v]) dfs(v);
}
\`\`\`
`,

c:`
# Chapter 22: Graph Theory BFS / DFS (C)

C can use "edge table + head" to store the adjacency list, or use a two-dimensional array in the small graph. The fixed array version is used here first.

## 22.1 Fixed array adjacency list
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
DFS can use recursion or stack; for big pictures, it is recommended to use iteration to avoid stack overflow.
`,

java:`
# Chapter 22: Graph Theory BFS / DFS (Java)

Java uses \`ArrayList<Integer>[]\` to store images and \`ArrayDeque<Integer>\` as BFS queue.

## 22.1 Adjacency list
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
`,

},

23:{
cpp:`
# Chapter 23: Shortest Paths and Topology (C++)

Dijkstra is used for weighted non-negative graphs, and topological sorting is used for DAG ordering problems.

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

## 23.2 Topological sorting
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
# Chapter 23: Shortest Path and Topology (C)

C does not have a built-in heap; if the graph is not large, you can use O(n²) Dijkstra first. In the beginning stage of APCS, it is most important to master the concepts first.

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

## 23.2 Topological sorting
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
# Chapter 23: Shortest Paths and Topology (Java)

Java's \`PriorityQueue\` is great for writing Dijkstra.

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

## 23.2 Topological sorting
\`\`\`java
ArrayDeque<Integer> q = new ArrayDeque<>();
for (int i = 0; i < n; i++) if (indeg[i] == 0) q.offer(i);
while (!q.isEmpty()) {
    int u = q.poll();
    order.add(u);
    for (int v : dag[u]) if (--indeg[v] == 0) q.offer(v);
}
\`\`\`
`,

},

24:{
cpp:`
# Chapter 24: Advanced DP (C++)

The focus of DP is states, transitions, and calculation sequences.

## 24.1 LIS O(n²)
\`\`\`cpp
vector<int> dp(n, 1);
for (int i = 0; i < n; i++)
    for (int j = 0; j < i; j++)
        if (a[j] < a[i]) dp[i] = max(dp[i], dp[j] + 1);
\`\`\`

## 24.2 0/1 Backpack
\`\`\`cpp
vector<int> dp(W+1, 0);
for (int i = 0; i < n; i++)
    for (int j = W; j >= w[i]; j--)
        dp[j] = max(dp[j], dp[j-w[i]] + val[i]);
\`\`\`

The inner reverse order means each item can only be used once.

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
# Chapter 24: Advanced DP (C)

C uses a fixed array to write DP. The question restrictions must be clearly understood before opening the size.

## 24.1 LIS O(n²)
\`\`\`c
for (int i = 0; i < n; i++) dp[i] = 1;
for (int i = 0; i < n; i++)
    for (int j = 0; j < i; j++)
        if (a[j] < a[i] && dp[j] + 1 > dp[i])
            dp[i] = dp[j] + 1;
\`\`\`

## 24.2 0/1 Backpack
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
# Chapter 24: Advanced DP (Java)

The Java array is defaulted to 0, which is very convenient when writing DP; but when the two-dimensional array is large, you need to pay attention to the memory.

## 24.1 LIS O(n²)
\`\`\`java
int[] dp = new int[n];
Arrays.fill(dp, 1);
for (int i = 0; i < n; i++)
    for (int j = 0; j < i; j++)
        if (a[j] < a[i]) dp[i] = Math.max(dp[i], dp[j] + 1);
\`\`\`

## 24.2 0/1 Backpack
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
`,

},

25:{
cpp:`
# Chapter 25: Union-Find (C++)

And search and maintain "who is in the same group as whom", the core is \`find\` and \`unite\`.

## 25.1 Path compression
\`\`\`cpp
vector<int> parent(n);
iota(parent.begin(), parent.end(), 0);

int find(int x) {
    if (parent[x] == x) return x;
    return parent[x] = find(parent[x]);
}
\`\`\`

## 25.2 Merge
\`\`\`cpp
bool unite(int a, int b) {
    int ra = find(a), rb = find(b);
    if (ra == rb) return false;
    parent[ra] = rb;
    return true;
}
\`\`\`

When calculating connected components, unite all edges and count different roots.
`,

c:`
# Chapter 25: Union-Find (C)

The C version directly uses an array to store parent.

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

## 25.3 Initialization
\`\`\`c
for (int i = 0; i < n; i++) parent[i] = i;
\`\`\`
`,

java:`
# Chapter 25: Union-Find (Java)

Java is usually packaged into a DSU class, and then the questions directly copy the template.

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
`,

},

26:{
cpp:`
# Chapter 26: String hash and Trie (C++)

There are three common tools for string questions: hash for quick comparison, KMP for pattern finding, and Trie for prefix query.

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

Trie is suitable for "large string prefix" problems, such as dictionaries, phone numbers, starts_with.
`,

c:`
# Chapter 26: String hash and Trie (C)

The C writing string algorithm has to manage the array size and trailing characters itself.

## 26.1 Rolling hash
\`\`\`c
long long h[100005], p[100005];
p[0] = 1;
for (int i = 0; s[i]; i++) {
    h[i+1] = (h[i] * BASE + s[i]) % MOD;
    p[i+1] = p[i] * BASE % MOD;
}
\`\`\`

## 26.2 Trie node
\`\`\`c
int nxt[1000][26], end[1000], nodes = 1;
memset(nxt, -1, sizeof(nxt));
\`\`\`

When inserting a string, go down one character at a time; if there are no edges, add nodes.
`,

java:`
# Chapter 26: String hash and Trie (Java)

Java strings use \`charAt(i)\` to get characters, and Trie can use array nodes.

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

The query cost of Trie is O (string length), which is not directly affected by the total number of words in the dictionary.
`,

},

27:{
cpp:`
# Chapter 27: Archive I/O (C++)

## 27.1 Using ifstream / ofstream

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

> C++ uses \`ifstream\` for reading, \`ofstream\` for writing, and \`fstream\` for reading and writing. They are essentially the same as \`cin\` / \`cout\` and use \`<<\` \`>>\`.

## 27.2 Writing files

\`\`\`cpp
ofstream fout("out.txt");
fout << "Hello\\n" << "APCS\\n";
fout.close();
\`\`\`

\`ofstream\` Default override; additionally use \`ofstream fout("out.txt", ios::app);\`.

## 27.3 Binary bit

\`\`\`cpp
ifstream fin("img.png", ios::binary);
\`\`\`

When reading and writing pictures and PDFs, always add \`ios::binary\`.

## 27.4 Comparison with Python

| | Python | C++ |
|---|---|---|
| Open file | \`open("data.txt")\` | \`ifstream fin("data.txt");\` |
| Read line by line | \`for line in f:\` | \`while(getline(fin, line))\` |
| Automatically close the file | \`with\` statement | Automatically close when the object is deconstructed |

> 💡 The online sandbox of this tutorial cannot use photo files. The exercises below use stdin/stdout simulation.
`,

c:`
# Chapter 27: Archive I/O (C)

## 27.1 Using fopen / fclose

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

> C uses the \`FILE *\` pointer to represent files. **Must fclose**, unlike C++ which will close automatically.

## 27.2 Writing files

\`\`\`c
FILE *fp = fopen("out.txt", "w");
fprintf(fp, "Hello\\n");
fprintf(fp, "APCS\\n");
fclose(fp);
\`\`\`

Modes: \`"r"\` read, \`"w"\` write overwrite, \`"a"\` append, \`"rb"\` / \`"wb"\` binary.

## 27.3 Be sure to check for fopen failures

\`\`\`c
FILE *fp = fopen("not_exist.txt", "r");
if (fp == NULL) {
    printf("檔案開不開！\\n");
    return 1;
}
\`\`\`

> C does not throw exceptions, it relies on returning NULL to notify failure - it will segfault without checking.

## 27.4 Comparison with Python

| | Python | C |
|---|---|---|
| Open file | \`open("data.txt")\` | \`fopen("data.txt", "r")\` |
| Read line by line | \`for line in f:\` | \`fgets(line, n, fp)\` |
| Close | \`with\` Automatic | Manual \`fclose\` |
| Failure handling | Throw exception | Return NULL, you have to check it yourself |
`,

java:`
# Chapter 27: Archive I/O (Java)

## 27.1 Read the entire file with BufferedReader

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

> \`try-with-resources\` syntax (\`try (...) {...}\`) = Python's \`with\`, automatically close when leaving the block.

## 27.2 One line (Java 11+)

\`\`\`java
String text = Files.readString(Paths.get("data.txt"));
List<String> lines = Files.readAllLines(Paths.get("data.txt"));
\`\`\`

> Java 11 and later have \`Files.readString\` / \`Files.writeString\`, which are more concise than BufferedReader.

## 27.3 Writing files

\`\`\`java
Files.writeString(Paths.get("out.txt"), "Hello\\nAPCS\\n");
\`\`\`

or:
\`\`\`java
try (PrintWriter pw = new PrintWriter(new FileWriter("out.txt"))) {
    pw.println("Hello");
    pw.println("APCS");
}
\`\`\`

## 27.4 Comparison with Python

| | Python | Java |
|---|---|---|
| Open file | \`open(...)\` | \`new FileReader(...)\` or \`Files.readString\` |
| Auto off | \`with\` | \`try-with-resources\` |
| Must declare exception | No need | \`throws IOException\` or catch |
`,

},

28:{
cpp:`
# Chapter 28: Multiple Files and Header Files (C++)

C++ does not have the concept of "module" and relies on **header file (.h) + implementation file (.cpp)** to be split.

## 28.1 Why should it be demolished?

When a main.cpp exceeds 300 lines, something crashes. Split into multiple files:
- \`utils.h\` — declaration (function appearance)
- \`utils.cpp\` — Implementation
- \`main.cpp\` — Program entry

## 28.2 Header file example

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

Compile: \`g++ main.cpp utils.cpp -o prog\`

## 28.3 \`#include "x"\` vs \`<x>\`

- \`<iostream>\` — system standard function library (found from the compiler's built-in path)
- \`"utils.h"\` — header written by yourself (find it from the current directory)

## 28.4 namespace (namespace)

\`\`\`cpp
namespace mathx {
    int gcd(int a, int b) { return b == 0 ? a : gcd(b, a % b); }
}
int main() { cout << mathx::gcd(12, 18); }
\`\`\`

Avoid fights with duplicate function names. \`std::cout\` is the same concept.
`,

c:`
# Chapter 28: Multiple Files and Header Files (C)

C, like C++, relies on .h + .c splitting and does not have a module system in the modern sense.

## 28.1 Header file example

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

Compile: \`gcc main.c utils.c -o prog\`

## 28.2 \`#define\` Macro

\`\`\`c
#define MAX 1000005
#define MIN(a, b) ((a) < (b) ? (a) : (b))
\`\`\`

> ⚠️ Macros are just "text replacement" without type checking. **Parameters must be enclosed in parentheses**, otherwise \`MIN(a+1, b)\` will expand into strange things.

## 28.3 The purpose of \`#ifndef\` / \`#define\` / \`#endif\`

Prevent the same .h from being declared repeatedly due to repeated includes. Each .h is wrapped like this.

## 28.4 No namespace

C doesn’t have a namespace, so it’s a disaster when function names fight — a common approach is to add a prefix:
\`\`\`c
int mathx_gcd(int a, int b);
\`\`\`
`,

java:`
# Chapter 28: Suites and imports (Java)

Java has a true "package" system, which is more rigorous than C/C++.

## 28.1 package declaration

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

- The file must be placed in the \`utils/\` directory
- First line \`package utils;\`
- The class name must be consistent with the file name

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

## 28.3 Commonly used standard suites

| Kits | Contents |
|------|------|
| \`java.util\` | List, Map, Scanner, Arrays |
| \`java.io\` | File I/O |
| \`java.lang\` | String, Math, System (automatic import) |
| \`java.util.stream\` | Stream API (similar to Python's map/filter) |

## 28.4 Compilation and Execution

\`\`\`bash
javac -d out src/utils/MathUtil.java src/Main.java
java -cp out Main
\`\`\`

> Java has a complete suite system like Python, which is easier to manage than C/C++.
`,

},

29:{
cpp:`
# Chapter 29: Class class (C++)

C++ is the ancestor of object-oriented languages. The usage of classes is the same as that of Python, but the syntax is more rigorous.

## 29.1 The first class

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

## 29.2 Three major grammar points

- **\`public:\` / \`private:\`** — Control who can access (Python has no real private, it relies on convention)
- **Constructor** = function with the same name as the class (\`Student(string, int)\`)
- **\`:\` initialization list** = \`Student(string n, int s) : name(n), score(s) {}\`, faster than assignment within braces

## 29.3 Inheritance

\`\`\`cpp
class GradStudent : public Student {
    string advisor;
public:
    GradStudent(string n, int s, string a)
        : Student(n, s), advisor(a) {}
    string info() { return name + " → " + advisor; }
};
\`\`\`

\`: public Student\` = inherited (Python's \`class GradStudent(Student):\`).

## 29.4 Deconstructor (not available in Python)

\`\`\`cpp
class Buffer {
    int* data;
public:
    Buffer(int n) { data = new int[n]; }
    ~Buffer() { delete[] data; }   // 解構子，自動釋放記憶體
};
\`\`\`

> C++ requires manual memory management; Python has GC automatic recycling, so there is no \`~Buffer\`.

## 29.5 const methods

\`\`\`cpp
int getScore() const { return score; }
\`\`\`

\`const\` at the tail = "I promise not to change member variables".
`,

c:`
# Chapter 29: Structure struct (C — no class)

C has no classes, no object orientation - but it does have \`struct\` to "tie related data together". To make a "method", you have to manually pass the indicator.

## 29.1 struct declaration

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

- \`s.name\` — s is the struct body
- \`p->name\` — p is the **pointer**, equivalent to \`(*p).name\`

## 29.3 typedef omit "struct"

\`\`\`c
typedef struct {
    char name[50];
    int score;
} Student;

Student s = {"Alice", 85};   // 不用每次寫 struct
\`\`\`

## 29.4 The usual way of writing "method"

C does not have classes, but the convention is:
- Function name = \`TypeName_verb\`, for example \`Student_isPass\`
- The first parameter = object pointer \`Student *self\` (which is Python’s self)

\`\`\`c
int Student_isPass(Student *self) { return self->score >= 60; }
\`\`\`

## 29.5 Comparison with Python

| | Python | C |
|---|---|---|
| Data binding | \`class\` | \`struct\` |
| Method | Class \`def\` | External function + indicator |
| Inheritance | Direct support | No, you need to use struct nesting manual |
| Package | Convention \`_x\` | Not at all, all fields are open |

> If you want real OOP in C, use C++ or Java instead.
`,

java:`
# Chapter 29: Class class (Java)

The entire Java language is designed around classes—even main() must be wrapped in a class.

## 29.1 The first class

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

## 29.2 Three major grammar points

- **\`new\`** must be written - \`new Student(...)\` to create the object (unlike C++, it can be omitted)
- **\`this\`** = Python's \`self\`, but Java is an implicit parameter and does not need to be written in the parameter column.
- **Access modifiers**: \`public\` / \`private\` / \`protected\` — much stricter than Python’s \`_x\` convention

## 29.3 Inheritance

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

\`extends\` = inherited (Python's \`(Student)\`). \`super(...)\` = Python's \`super().__init__(...)\`.

## 29.4 Interface interface (Java feature)

\`\`\`java
interface Printable {
    void print();
}
class Student implements Printable {
    public void print() { System.out.println(name); }
}
\`\`\`

> Java does not support multiple inheritance, but can implement multiple interfaces.

## 29.5 getter / setter (Java convention)

\`\`\`java
private int score;
public int getScore() { return score; }
public void setScore(int s) { this.score = s; }
\`\`\`

Python directly \`s.score\`; Java usually includes a layer of getter/setter.
`,

},

30:{
cpp:`
# Chapter 30: Exception Handling try/catch (C++)

C++ has \`try / catch / throw\`, which is the same concept as Python's \`try / except / raise\`.

## 30.1 Basic syntax

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

## 30.2 Common exception categories (requires \`#include <stdexcept>\`)

| Category | Purpose |
|------|------|
| \`runtime_error\` | General execution error |
| \`invalid_argument\` | Wrong argument |
| \`out_of_range\` | Out of range (such as \`vector::at\`) |
| \`logic_error\` | Program logic error |

## 30.3 catch multiple errors

\`\`\`cpp
try {
    // ...
} catch (const out_of_range& e) {
    cout << "範圍錯：" << e.what();
} catch (const exception& e) {     // 兜底，所有標準例外的祖先
    cout << "其他錯：" << e.what();
}
\`\`\`

## 30.4 Alternative approach in C++: returning error code

Many competition programs **don't use try/catch** because they are too slow and too fat. Use instead:
- Return value \`-1\` represents failure
- Since C++17 there is \`std::optional<T>\`: "Probably not worth it"
- C++23 has \`std::expected<T, E>\`

> APCS problem solving does not require try/catch; it is only used for engineering.
`,

c:`
# Chapter 30: Error Handling (C — no exceptions)

C has no try/catch — it relies solely on returning a value to notify of failure. Each API has its own "failure value" convention.

## 30.1 Common return value conventions

| Function | Failure return |
|------|---------|
| \`fopen\` | NULL |
| \`malloc\` | NULL |
| \`scanf\` | EOF or the number of reads |
| Custom function | Convention: 0 = success, non-0 = error code |

## 30.2 errno global variable

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

> \`errno\` is the error code set when the system call fails; \`strerror\` turns it into human language.

## 30.3 \`setjmp / longjmp\` (advanced skills, APCS will not test)

If C really wants to imitate exceptions, there is \`setjmp / longjmp\`, but it is rarely used - it is easy to break and leak resources.

## 30.4 Defensive Programming

\`\`\`c
if (n <= 0) {
    fprintf(stderr, "n must be positive\\n");
    return 1;
}
\`\`\`

> In APCS problem solving, C usually asserts/exits directly without fancy error handling.
`,

java:`
# Chapter 30: Exception Handling try/catch (Java)

Java's exception system is extremely strict - the compiler forces you to handle certain exceptions.

## 30.1 Basic syntax

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

| Types | Examples | Compiler Requirements |
|------|------|---|
| **Checked** | \`IOException\`, \`SQLException\` | **Required** catch or \`throws\` |
| **Unchecked** | \`NullPointerException\`, \`ArithmeticException\` | Can not be processed |

> This is the biggest difference between Java and Python/C++ — checked exception forces you to admit that something might go wrong.

## 30.3 throws declaration

\`\`\`java
public static String readFile(String path) throws IOException {
    return Files.readString(Paths.get(path));
}
\`\`\`

If you don't want to catch, use \`throws\` to throw it up. \`main\` can also be used \`throws\`:
\`\`\`java
public static void main(String[] args) throws IOException { ... }
\`\`\`

## 30.4 finally and try-with-resources

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

## 30.5 Custom exceptions

\`\`\`java
class TooLowScore extends RuntimeException {
    public TooLowScore(int s) { super("score = " + s); }
}
\`\`\`

> APCS does not test custom exceptions, but they are common in engineering.
`,

},

31:{
cpp:`
# Chapter 31: Testing and Debugging (C++)

## 31.1 Print debug — the simplest

\`\`\`cpp
cerr << "[debug] n = " << n << ", i = " << i << endl;
\`\`\`

> Use \`cerr\` instead of \`cout\`: cerr will not be buffered, and OJ usually does not look at stderr and will not misjudge the answer.

## 31.2 assert: crash if the condition is not established

\`\`\`cpp
#include <cassert>
assert(0 <= idx && idx < n);
\`\`\`

Don't worry about assert when developing. Adding \`-DNDEBUG\` during formal compilation will turn everything off.

## 31.3 gdb (GNU debugger)

\`\`\`bash
g++ -g main.cpp -o main      # -g 加除錯資訊
gdb ./main
(gdb) break main             # 設斷點
(gdb) run                    # 開跑
(gdb) print x                # 看變數
(gdb) next                   # 跑下一行
\`\`\`

## 31.4 Unit test (doctest/Catch2)

In practice, there are doctest, Catch2, and Google Test, but APCS does not require them. Simple self-test:

\`\`\`cpp
void test_gcd() {
    assert(gcd(12, 18) == 6);
    assert(gcd(7, 5) == 1);
    cout << "all tests passed\\n";
}
\`\`\`

## 31.5 Compiler adds protection flags

\`\`\`bash
g++ -Wall -Wextra -fsanitize=address,undefined -g main.cpp
\`\`\`

- \`-Wall -Wextra\` — enable more warnings
- \`-fsanitize=address\` — Dynamic memory capture error (array out of bounds, uninitialized)
- \`-fsanitize=undefined\` — catch undefined behavior (such as integer overflow)
`,

c:`
# Chapter 31: Testing and Debugging (C)

Almost the same as C++, but without cerr, use \`fprintf(stderr, ...)\`.

## 31.1 Print debug

\`\`\`c
fprintf(stderr, "[debug] n = %d, i = %d\\n", n, i);
\`\`\`

> Using \`stderr\` will not be used by OJ to compare answers.

## 31.2 assert

\`\`\`c
#include <assert.h>
assert(0 <= idx && idx < n);
\`\`\`

## 31.3 gdb

Same as C++ usage:
\`\`\`bash
gcc -g main.c -o main
gdb ./main
\`\`\`

## 31.4 valgrind — Catch memory leaks (the nemesis of C)

C uses \`malloc\` to allocate memory and \`free\` to release - if you forget to free, it will leak:

\`\`\`bash
valgrind --leak-check=full ./main
\`\`\`

It will list where each unreleased malloc comes from.

## 31.5 -fsanitize one-stop

\`\`\`bash
gcc -Wall -Wextra -fsanitize=address,undefined -g main.c
\`\`\`

After opening, the execution file is about 2x slower, but **array out of bounds, uninitialized, and integer overflow** will be reported automatically. Debug artifact.

## 31.6 Common C Traps

- Forgot \`free\` → leak
- \`free\` twice → undefined
- Indicator after using \`free\` → undefined (it is recommended to set NULL after free)
- \`scanf\` is not added \`&\` → segfault
`,

java:`
# Chapter 31: Testing and Debugging (Java)

## 31.1 Print debug

\`\`\`java
System.err.println("[debug] n=" + n + " i=" + i);
\`\`\`

> Using \`System.err\` will not be used by OJ to compare answers.

## 31.2 assert

\`\`\`java
assert idx >= 0 && idx < n : "idx out of range: " + idx;
\`\`\`

> ⚠️ Java **disables** assert by default and requires \`java -ea Main\` to enable it.

## 31.3 IDE debugger (most important)

Java's IDE (IntelliJ/Eclipse/VS Code) has built-in super powerful debugger:
- Set a breakpoint next to the line number
- Run Debug mode
- See the real-time value of variables, skip rows, and step into

> Java development relies heavily on IDEs; don't rely on println debug.

## 31.4 JUnit unit testing (industry standard)

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

APCS does not require it, but no one in the industry who writes Java knows how to use JUnit.

## 31.5 Exception stack trace

\`\`\`java
try { ... }
catch (Exception e) {
    e.printStackTrace();   // 印整條呼叫鏈
}
\`\`\`

Start at the bottom of the stack trace — that's where the error is coming from.
`,

},

32:{
cpp:`
# Chapter 32: Command Line Arguments (C++)

"Command line tool" = program that takes parameters from terminal: \`./prog --name Alice -n 5\`.

## 32.1 Receive arguments from main

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

- \`argc\` = Number of arguments (including the program itself)
- \`argv[0]\` = program name
- \`argv[1..]\` = arguments entered by the user

Execute \`./prog hello 42\`:
\`\`\`
argc = 3
argv[0] = ./prog
argv[1] = hello
argv[2] = 42
\`\`\`

## 32.2 Convert string to number

\`\`\`cpp
int n = atoi(argv[1]);     // C 風格
int n = stoi(argv[1]);     // C++ 風格（更安全）
\`\`\`

## 32.3 Simple flag parsing

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

> To actually write CLI tools, you will use function libraries such as \`cxxopts\` or \`CLI11\`; APCS will not take the test.
`,

c:`
# Chapter 32: Command Line Arguments (C)

**Exactly the same** as C++'s main argument.

## 32.1 main signature

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

Execute \`./prog hello 42\`:
- argc = 3
- argv[0] = "./prog"
- argv[1] = "hello"
- argv[2] = "42"

## 32.2 Convert string to number

\`\`\`c
#include <stdlib.h>
int n = atoi(argv[1]);          // 字串 → int
double x = atof(argv[1]);       // 字串 → double
long long ll = atoll(argv[1]);  // 字串 → long long
\`\`\`

## 32.3 String comparison must use strcmp

\`\`\`c
#include <string.h>
if (strcmp(argv[1], "--help") == 0) { ... }
\`\`\`

> ⚠️ **\`argv[1] == "--help"\` is always false**! Because what is being compared is the indicator, not the string content. Use \`strcmp\`.

## 32.4 getopt (POSIX standard parsing)

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
# Chapter 32: Command Line Arguments (Java)

Java's main signature is to connect to the command line:

\`\`\`java
public static void main(String[] args) { ... }
\`\`\`

\`args\` = The argument entered by the user** (excluding program name)**, one difference from C/C++.

## 32.1 Example

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

Execute \`java Main hello 42\`:
\`\`\`
argc = 2
args[0] = hello
args[1] = 42
\`\`\`

> Difference from C/C++: Java's args does not contain the program name (C/C++'s argv[0] is \`./prog\`).

## 32.2 Convert string to number

\`\`\`java
int n = Integer.parseInt(args[0]);
double x = Double.parseDouble(args[0]);
long ll = Long.parseLong(args[0]);
\`\`\`

> If \`parseInt\` fails to parse, \`NumberFormatException\` will be lost, and try/catch is required.

## 32.3 Simple flag parsing

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

> For string comparison, use \`equals\` or switch (the case of switch will use equals). **Don’t use \`==\`**!
`,

},

33:{
cpp:`
# Chapter 33: CSV Data Processing (C++)

C++ does not have a built-in CSV library, but the CSV structure is simple and can be carved by hand.

## 33.1 Reading CSV — using getline + stringstream

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

Key: \`getline(ss, cell, ',')\` Use commas as separators to cut strings.

## 33.2 Numeric fields need to be transformed

\`\`\`cpp
int score = stoi(row[1]);
double avg = stod(row[2]);
\`\`\`

## 33.3 Writing CSV

\`\`\`cpp
ofstream fout("out.csv");
fout << "name,score\\n";
fout << "Alice," << 85 << "\\n";
\`\`\`

## 33.4 Pitfalls of CSV

- **Comma in field** — must be enclosed in quotation marks: \`"Wang, Alice",85\`
- **There is a line break in the field** — Same as above, there can be a line break in the quotation marks
- **Quotation marks in field** — escape with two quotes: \`"She said ""hi"""\`

Hand-engraving can only process the simplest CSV; for complex ones, please use the function library (such as \`fast-cpp-csv-parser\`).

> Compared to Python pandas's \`pd.read_csv()\`, C++ is really hard to process CSV - but it can be hundreds of times faster.
`,

c:`
# Chapter 33: CSV Data Processing (C)

C is primitive for handling CSV — all with fgets + strtok.

## 33.1 Reading CSV

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

## 33.2 strtok’s thunder

- **will change the original string** (change the delimiter to \`\\0\`) - cannot be used for const strings
- **Not thread-safe** (shared internal state), it is safe to use \`strtok_r\`
- **After the second time, the first parameter must be NULL**, and continue cutting from where you left off last time.

## 33.3 Writing CSV

\`\`\`c
FILE *fp = fopen("out.csv", "w");
fprintf(fp, "name,score\\n");
fprintf(fp, "Alice,%d\\n", 85);
fclose(fp);
\`\`\`

## 33.4 Complete analysis is painful

Just like C++, if there are commas, quotation marks, and cross-line CSV in the fields, C will become a mess. In practice, libraries such as libcsv are used.

> APCS does not use CSV - this chapter is enough to understand the concepts.
`,

java:`
# Chapter 33: CSV Data Processing (Java)

Java also does not have built-in CSV, but it is easier to put together than C/C++.

## 33.1 Reading CSV — split

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

## 33.2 Thunder of \`split\`

- \`split(",")\` accepts **regular**, special characters (\`.\`, \`|\`) must be escaped
- **Continuous empty fields** will be merged - use \`split(",", -1)\` to keep trailing empty fields
- Quotation mark fields will not be processed

## 33.3 Writing CSV

\`\`\`java
try (PrintWriter pw = new PrintWriter(new FileWriter("out.csv"))) {
    pw.println("name,score");
    pw.println("Alice," + 85);
}
\`\`\`

## 33.4 Function library recommendation

Formal projects use **OpenCSV** or **Apache Commons CSV**:
\`\`\`java
CSVReader reader = new CSVReader(new FileReader("data.csv"));
List<String[]> rows = reader.readAll();
\`\`\`

> Java's CSV processing is more concise than C/C++, but it is still far behind Python pandas' one-line \`read_csv\`.
`,

},

34:{
cpp:`
# Chapter 34: JSON and HTTP (C++)

C++ does not have JSON/HTTP built-in — you have to use third-party libraries.

## 34.1 JSON: nlohmann/json

The most widely used C++ JSON library. Single header, no dependencies.

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

## 34.2 HTTP: cpp-httplib

Also a single header. Minimalist:

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

## 34.3 Comparison with Python

| | Python | C++ |
|---|---|---|
| JSON parsing | \`json.loads(s)\` | \`json::parse(s)\` |
| HTTP GET | \`requests.get(url)\` | \`cli.Get(path)\` |
| Dependencies | Standard library | To download header |
| Speed | Slow | 5–20 times faster |

> APCS does not use JSON / HTTP - just understand the concepts in this chapter.
`,

c:`
# Chapter 34: JSON and HTTP (C)

C is the most painful to deal with JSON/HTTP - the standard library only has file I/O, and the network relies entirely on system APIs.

## 34.1 JSON: cJSON library

\`\`\`c
#include "cJSON.h"

const char *text = "{\\"name\\":\\"Alice\\",\\"score\\":85}";
cJSON *root = cJSON_Parse(text);
const char *name = cJSON_GetObjectItem(root, "name")->valuestring;
int score = cJSON_GetObjectItem(root, "score")->valueint;
printf("%s -> %d\\n", name, score);
cJSON_Delete(root);     // 一定要 free
\`\`\`

> Each cJSON object must be \`cJSON_Delete\` after use, otherwise it will leak memory.

## 34.2 HTTP: libcurl

The C standard does not have HTTP; use libcurl:

\`\`\`c
#include <curl/curl.h>

CURL *curl = curl_easy_init();
curl_easy_setopt(curl, CURLOPT_URL, "https://example.com");
curl_easy_perform(curl);
curl_easy_cleanup(curl);
\`\`\`

Just to store the response content requires writing a callback — it’s really troublesome.

## 34.3 Comparison with Python

| | Python | C |
|---|---|---|
| One line of JSON | \`json.loads\` | Parse + Visit structure + free |
| HTTP one line | \`requests.get\` | curl init + setopt + callback + cleanup |

>Writing network services in C will not be used in engineering - it is too painful and security vulnerabilities are easy.
`,

java:`
# Chapter 34: JSON vs. HTTP (Java)

Java standard library 11+ has HttpClient, and JSON generally uses a third party (Jackson/Gson).

## 34.1 HTTP: java.net.http (standard library)

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

## 34.2 JSON: Jackson or Gson

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

## 34.3 Direct mapping to objects

\`\`\`java
class User {
    public String name;
    public int score;
}
User u = mapper.readValue(jsonString, User.class);
\`\`\`

> Jackson/Gson can automatically convert JSON into your class, which is better than Python's \`json.loads\`.

## 34.4 Comparison with Python

| | Python | Java |
|---|---|---|
| HTTP | \`requests\` | \`HttpClient\` |
| JSON | \`json\` Standard Library | Jackson/Gson |
| automapping | manual/pydantic | built-in |
`,

},

35:{
cpp:`
# Chapter 35: Comprehensive Exercises: Mini-Game (C++)

Put together the pieces from the previous chapters 0–34 and play a guessing game.

## 35.1 Complete program

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

## 35.2 Concepts used

- \`srand / rand\` — random number
- \`while\` loop
- \`cin >> guess\` — I/O
- \`if / else if\` — condition

## 35.3 Random Number Thunder

- **Must \`srand(time(NULL))\` once**, otherwise the sequence will be the same every time you run it
- \`rand() % 100 + 1\` — 1 to 100
- It is recommended to use \`<random>\` after C++11:
  \`\`\`cpp
  #include <random>
  mt19937 rng(time(NULL));
  uniform_int_distribution<int> dist(1, 100);
  int answer = dist(rng);
  \`\`\`

## 35.4 Try extensions

-Limited times
- Change to word guessing (use \`vector<string>\`)
- Add leaderboard (File I/O)
`,

c:`
# Chapter 35: Comprehensive Exercise: Mini-Game (C)

## 35.1 Complete program

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

## 35.2 Differences from the C++ version

- \`scanf("%d", &guess)\` Remember \`&\`
- Strings are printed with \`printf\`
- \`stdlib.h\` provides \`rand / srand\`
- \`time.h\` provides \`time(NULL)\`

## 35.3 The thunder of rand (same as C++)

- No \`srand\` has the same sequence every time
- \`rand() % 100\` is not perfectly uniform (high digits are biased), but is APCS-level enough
- \`RAND_MAX\` is usually only 32767, for a larger range you need to combine: \`((long long)rand() << 15) | rand()\`

## 35.4 Expansion Challenge

- Limit to 10 guesses
- Changed to two-player battle
- Record wins and losses to file
`,

java:`
# Chapter 35: Comprehensive Exercises: Mini Games (Java)

## 35.1 Complete program

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

## 35.2 Concepts used

- \`Random\` object — safer than C's srand (no manual seeding, default time)
- \`Scanner\` — I/O
- \`while\` loop + break

## 35.3 Random vs Math.random()

\`\`\`java
int n = (int)(Math.random() * 100) + 1;   // 1–100
\`\`\`

\`Math.random()\` also works, but the \`Random\` object has more methods (\`nextInt(n)\`, \`nextDouble()\`, \`nextBoolean()\`).

## 35.4 Expansion Challenge

-Limited times
- Multiple people taking turns
- Save scores to file (\`Files.writeString\`)
`,

},

68:{
cpp:`
# Chapter 68: APCS New System and C++ (C++)

> 📘 The full name of APCS is "Programming Concept Questions and Practical Questions Ability Test", sponsored by the Ministry of Education.

## 68.1 Concept questions vs practical questions

| | Concept questions | Practical questions |
|---|---|---|
| Question type | Multiple choice | Writing a program |
| Time | 60 minutes | 150 minutes |
| Number of questions | 25 questions | 4 questions |
| Scoring | Score for correct answers | Automatic assessment (test cases) |

## 68.2 Languages supported by APCS

C / C++ / Python / Java are all fine. **Statistically, C++ has the most people with high scores** because:
- Complete standard function library (vector, sort, map, queue, stack...)
- Fast speed without fear of TLE
- Syntax safer than C (automatic memory management vector)

## 68.3 C++ problem solving template

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

- \`#include <bits/stdc++.h>\` includes all standard libraries in one go (supported by APCS compiler)
- \`ios::sync_with_stdio(false)\` + \`cin.tie(nullptr)\` are massive I/O acceleration

## 68.4 Five levels of comparison

| Level | Concept questions | Practical questions |
|------|---------|---------|
| 1 | 1–2 points | 0–1 points |
| 3 | 6–7 points | 5 points |
| 5 | 9–10 points | 8 points |

>Level 5 is basically the gold medal level for junior high school and high school groups.
`,

c:`
# Chapter 68: APCS New System and C (C)

## 68.1 Concept questions vs practical questions

Exactly the same as the C++ version: 60 minutes for 25 conceptual questions + 150 minutes for 4 practical questions.

## 68.2 Why choose C?

- The fastest and most memory efficient
- Introduction to Commonly Used C in the High School Curriculum of the Ministry of Education
- **But**: Without STL, you have to hand-carve the data structure (heap, sort, map) by yourself

> If you only know C and have never written C++ vector/sort - it is strongly recommended to at least learn C++ STL, otherwise you will have a much harder time than C++ players on the same APCS questions.

## 68.3 C Problem Solving Template

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

## Common pain points of 68.4 C version

- No vector → use fixed size array (calculate MAXN well)
- No map → use hash table or sorting + binary search
- no string → use \`char[]\` + strcpy/strcmp
- No set → use sorting to remove duplicates or self-engraving BST

> For time-sensitive questions, C will suffer (have to write more).
`,

java:`
# Chapter 68: APCS New System and Java (Java)

## 68.1 Concept questions vs practical questions

Exactly the same as the C++ version.

## 68.2 Advantages and Disadvantages of Java in APCS

✅ **Advantages**
- HashMap / TreeMap / ArrayList / PriorityQueue complete standard library
- BigInteger for integers without overflow
- Simple string operations (split/substring/toCharArray)

⚠️ **Disadvantages**
- Slow startup (JVM takes 100–300ms to warm up) - loose TLE is enough
- I/O is slow, **must use BufferedReader**, not Scanner
- It’s more verbose to write than C++ (everything must include classes)

## 68.3 Java problem solving template

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

- \`StreamTokenizer\` is Java's fastest digital I/O
- \`StringBuilder\` accumulates output, last printed - avoids println slowdown

## 68.4 Small steps to solve APCS in Java

- The whole process \`System.out.println\` → indeed knows TLE
- Use PrintWriter + flush is faster
- HashMap is slower than C++ unordered_map under a large number of small operations. Depending on the topic, it may need to be carved by hand.
`,

},

69:{
cpp:`
# Chapter 69: Fast Power and Modulo Operations [Advanced Questions] (C++)

Find a^n mod m, a common APCS advanced question.

## 69.1 Why can’t pow(a, n) be calculated directly?

When n is large, a^n will explode into long long. Even if it can be saved, each step will take O(1) — a total of O(n), n=10⁹ direct TLE.

## 69.2 Fast exponentiation: O(log n)

Split n into binary digits and square them bit by bit:

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

> ⚠️ **Must be long long**! In \`a * a\`, a can reach 10⁹, and the square overflows int.

## 69.3 Modular inverse element (Fermat’s little theorem)

When mod is prime, the inverse element of \`a\` = \`a^(mod-2) mod mod\`:
\`\`\`cpp
ll inv = fast_pow(a, MOD - 2, MOD);
\`\`\`

The number of combinations \`C(n,k) mod p\` is commonly used.

## 69.4 Matrix fast exponentiation → linear recursive acceleration

Fisher Sequence [F(n+1), F(n)] = [[1,1],[1,0]] · [F(n), F(n-1)]: Fast power → O(log n) with matrix.

## 69.5 Trap List

- \`a\` Enter the function first \`a %= mod\` to avoid overflow at the beginning
- Fermat can only be used if mod is a prime number, otherwise extgcd is required
- The answer is 1 for \`n = 0\` (the convention is 1 for \`0^0\`)
`,

c:`
# Chapter 69: Fast Power and Modulo Operations [Advanced Questions] (C)

Exactly the same algorithm as the C++ version, just written in C.

## 69.1 C version of fast_pow

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

It's entirely possible to copy the C++ version — even \`typedef long long ll;\` is the same.

## 69.2 Why long long

\`int\` The upper limit is about 2×10⁹. In \`a*a\` a reaches 10⁹ → square = 10¹⁸, which is much larger than int**. \`long long\` The upper limit is about 9×10¹⁸, which is just enough.

## 69.3 Format characters for printing long long

\`\`\`c
printf("%lld\\n", fast_pow(2, 10, 1000000007));
\`\`\`

**Cannot use \`%d\`**! \`%d\` corresponds to int and will be misprinted.

## 69.4 Complete example

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
# Chapter 69: Fast Power and Modulo Operations [Advanced Questions] (Java)

## 69.1 Java version of fast_pow

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

Exactly the same as the C/C++ algorithm, but use \`long\` instead of \`int\`.

## 69.2 Java sneak step: BigInteger built-in modPow

\`\`\`java
import java.math.BigInteger;

BigInteger a = BigInteger.valueOf(2);
BigInteger n = BigInteger.valueOf(1000000);
BigInteger mod = BigInteger.valueOf(1_000_000_007);
BigInteger ans = a.modPow(n, mod);
System.out.println(ans);
\`\`\`

\`modPow\` is a fast power internally. **If you are afraid of making mistakes when solving APCS problems, you can also use BigInteger directly**, but it is 5–10 times slower than hand-engraved long.

## 69.3 Modular inverse element

Fermat's little theorem (mod is a prime number):
\`\`\`java
long inv = fastPow(a, MOD - 2, MOD);
\`\`\`

or BigInteger:
\`\`\`java
BigInteger inv = a.modInverse(BigInteger.valueOf(MOD));
\`\`\`

## 69.4 Integer trap

- Java does not have \`unsigned\` — everything is a signed long
- \`(n & 1) == 1\` uses \`==\` because \`n & 1\` is long and cannot be directly used as Boolean (unlike C)
- Use \`BigInteger\` for large number operations, which will not cause overflow but is slow.
`,

},

70:{
cpp:`
# Chapter 70: Divide and Conquer and Reverse Order [Advanced Questions] (C++)

## 70.1 What is Partition and Conquer

"**Divide** and **solve**" = Break the problem into smaller sub-problems, solve them separately, and then combine them.

Classic divide and conquer:
- merge sort — O(n log n)
- Binary search — O(log n)
- Inversion count — O(n log n)
- Closest point pair — O(n log n)

## 70.2 Reverse order pair: merge sort by the way

"Reverse order pair" = the number pair of \`i < j\` but \`a[i] > a[j]\`. For example, \`[3, 1, 2]\` has 2 pairs (3,1), (3,2).

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

Key: When merging, if the right half element \`a[j]\` is smaller than the left half \`a[i]\`, then the left half \`a[i..mid]\` will all form a reverse-order pair with \`a[j]\`, and \`mid - i + 1\` will be added at once.

## 70.3 Why is O(n log n)

- A total of O(n) merges per layer
- total log n layers
- Together O(n log n)

> Direct brute force double loop calculation in reverse order is O(n²) — n = 10⁵ for TLE.

## 70.4 You can also use a tree array

Reverse-order pairs can also be solved using BIT (Binary Indexed Tree) O(n log n):
1. Discretized coordinates
2. Swipe from right to left, and check "How many of them on the right are smaller than yourself" each time, and then insert yourself

Both writing methods are common, it depends on personal preference.
`,

c:`
# Chapter 70: Divide and Conquer and Reverse Order [Advanced Questions] (C)

The C version of divide and conquer is the same as C++, but it uses array + malloc, which is not as convenient as vector.

## 70.1 C version merges and calculates reverse-order pairs

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

## Differences between 70.2 and C++ version

- Replace vector with global/static array
- Change the ending of \`merge_count\` to \`tmp\` and write it into a using loop
- Always count \`long long\` (up to n(n-1)/2 ≈ 5×10⁹, int will explode)

## 70.3 Why use static / global \`tmp\`

Malloc / free with every recursion is too slow. **Enable global** It is fastest to use the same memory for a lifetime.

## 70.4 Other examples of divide and conquer

- quicksort — average O(n log n)
- Mergesort — worst case O(n log n)
- Find kth smallest (quickselect) — average O(n)
`,

java:`
# Chapter 70: Divide and Conquer and Reverse Order [Advanced Questions] (Java)

## 70.1 Java version merges and computes reverse-order pairs

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

## 70.2 Java Edition Highlights

- Be sure to use \`long\` for counting (when n=10⁵, the reverse logarithm is up to 5×10⁹, which will explode int)
- \`tmp\` is opened **once** (static global), not every time in recursion \`new\`
- For heavy I/O use \`BufferedReader\` instead of Scanner

## 70.3 Comparison with C++/C

| | C/C++ | Java |
|---|---|---|
| temporary array | static global | static int[] tmp |
| Count type | long long | long |
| I/O speed | cin/scanf is fast | Scanner is slow, need to change to BufferedReader |

## 70.4 Other examples of divide and conquer

- Quick sort \`Arrays.sort\` (int[] uses double pivot quick sort)
- Binary search \`Arrays.binarySearch\`
- Find the kth small number: Java does not have built-in quickselect, you have to engrave it yourself
`,

},

71:{
cpp:`# Chapter 36: STL Complete Edition — Containers and Iterators

STL (Standard Template Library) is C++'s greatest weapon. Mastering the full set = doubling your power.

## 36.1 Container Categories

| Category | Representative Containers | Characteristics |
|----------|--------------------------|-----------------|
| **Sequence** | \`vector\`, \`deque\`, \`list\` | Ordered, allows duplicates |
| **Associative** | \`map\`, \`set\` | Auto-sorted, O(log n) |
| **Unordered Associative** | \`unordered_map\`, \`unordered_set\` | Hash table, average O(1) |
| **Container Adapters** | \`stack\`, \`queue\`, \`priority_queue\` | Restricted interface, wrapping other containers |

## 36.2 vector — Most Commonly Used

\`\`\`cpp
#include <vector>
vector<int> v = {1, 2, 3};
v.push_back(4);        // add to end
v.pop_back();          // remove from end
v.size();              // count
v[0];                  // index (no bounds check)
v.at(0);               // index (with bounds check)
v.front(); v.back();   // head and tail
v.clear();             // clear all
\`\`\`

**Dynamic resizing**: Automatically ×2 when space is insufficient; amortized \`push_back\` is still O(1).

## 36.3 deque — Double-Ended Queue

\`\`\`cpp
deque<int> dq;
dq.push_front(1);      // add to front (vector doesn't have this!)
dq.push_back(2);
dq.pop_front();
\`\`\`

> APCS sliding window maximum often uses \`deque<int>\` to store indices.

## 36.4 map / set — Auto-Sorted

\`\`\`cpp
#include <map>
#include <set>

map<string, int> cnt;
cnt["apple"]++;        // automatically creates key
cnt["apple"]++;
for (auto& [k, v] : cnt) cout << k << " " << v << "\\n";

set<int> s = {3, 1, 4, 1, 5};   // auto dedup + sort
s.insert(2);
s.erase(3);
if (s.count(4)) cout << "has 4";
\`\`\`

Underlying red-black tree → all operations are O(log n).

## 36.5 unordered_map / unordered_set — Hash Table

\`\`\`cpp
#include <unordered_map>
unordered_map<string, int> h;
h["apple"] = 5;        // average O(1), worst case O(n)
\`\`\`

> Don't use directly in competitive programming! It can be destroyed by specially crafted test cases. Add a custom hash:
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

## 36.6 priority_queue — Heap

\`\`\`cpp
#include <queue>
priority_queue<int> pq;              // default max-heap
pq.push(3); pq.push(1); pq.push(2);
cout << pq.top();   // 3
pq.pop();

priority_queue<int, vector<int>, greater<int>> minpq;  // min-heap
\`\`\`

> Essential for Dijkstra, essential for merging k sorted lists.

## 36.7 Iterators

\`\`\`cpp
for (auto it = v.begin(); it != v.end(); ++it) cout << *it;
for (auto& x : v) cout << x;                        // range-for, modern style
for (int i = 0; i < (int)v.size(); ++i) cout << v[i];
\`\`\`

> **\`.size()\` is unsigned**! \`for(int i=0; i<v.size()-1; i++)\` when v is empty, \`v.size()-1\` becomes a large positive integer and loops infinitely. Cast to int or use \`(int)v.size()-1 >= 0\` as a guard.

## 36.8 Container Selection Quick Reference

| What you want to do | Use this | Reason |
|---------------------|----------|--------|
| Dynamic array | \`vector\` | Default first choice, cache-friendly |
| Push/pop both ends | \`deque\` | Sliding window, monotonic queue |
| Key-value + sorted | \`map\` | Red-black tree O(log n) |
| Key-value + speed | \`unordered_map\` | Hash average O(1) |
| Get top k | \`priority_queue\` | Dijkstra / Huffman |
| Set operations | \`set\` | union/intersect with STL algorithm |
| Fixed-size cache | \`array\` | Compile-time determined, zero overhead |

## 36.9 APCS Practice: Sliding Window Maximum

deque stores index, monotonically decreasing to maintain maximum in O(n):

\`\`\`cpp
deque<int> dq;
for (int i = 0; i < n; i++) {
    while (!dq.empty() && a[dq.back()] <= a[i]) dq.pop_back();
    dq.push_back(i);
    if (dq.front() <= i - k) dq.pop_front();
    if (i >= k - 1) cout << a[dq.front()] << " ";
}
\`\`\`

## 36.10 Try It

Exercise below: use \`map\` to count occurrences of each letter in a string, output in alphabetical order.`,
c:``,
java:``
},

72:{
cpp:`# Chapter 37: Templates and auto Type Deduction

Templates let you write **one piece of code that works with multiple types**. STL's vector and sort are built with templates.

## 37.1 Function Templates

\`\`\`cpp
template<typename T>
T myMax(T a, T b) {
    return a > b ? a : b;
}
cout << myMax(3, 5);        // T auto-deduced as int → 5
cout << myMax(1.5, 2.7);    // T auto-deduced as double → 2.7
cout << myMax(string("a"), string("b"));   // T auto-deduced as string
\`\`\`

> Without templates, you'd need to write a function for each type. Template = one source, compiler auto-generates needed versions.

## 37.2 Class Templates

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

\`vector<int>\`, \`map<string, int>\` are class templates; fill in the type inside \`<...>\`.

## 37.3 The auto Keyword (Since C++11)

\`\`\`cpp
auto x = 42;            // x is int
auto y = 3.14;          // y is double
auto v = vector<int>{1,2,3};
for (auto& e : v) e *= 2;       // range-for
auto it = v.begin();    // much shorter than vector<int>::iterator
\`\`\`

**auto is not "dynamic typing"** — the type is determined at compile time.

## 37.4 Structured Bindings (C++17)

\`\`\`cpp
map<string, int> cnt = {{"a", 1}, {"b", 2}};
for (auto& [key, val] : cnt) cout << key << " " << val << "\\n";
pair<int, int> p = {1, 2};
auto [x, y] = p;
\`\`\`

> Python's \`for k, v in cnt.items():\` corresponds to this syntax in C++17.

## 37.5 Compilation Time Explosion

Templates **fully expand at compile time** — the more templates you use, the slower compilation and the longer error messages. STL template error messages are often hundreds of lines.

## 37.6 SFINAE / if constexpr — Template Branching

C++17 \`if constexpr\` can branch at compile time, eliminating paths that shouldn't be compiled:

\`\`\`cpp
template<typename T>
void print(T x) {
    if constexpr (is_integral_v<T>) cout << "int: " << x;
    else if constexpr (is_floating_point_v<T>) cout << "float: " << x;
    else cout << "other";
}
\`\`\`

The old way required writing very long SFINAE \`enable_if\` — \`if constexpr\` solves it in one line.

## 37.7 Comparison: C++ vs Java/Python Generics

| | C++ template | Java generics | Python duck typing |
|---|--------------|---------------|---------------------|
| When checked | Compile time, one copy per type | Compile time, erased at runtime | Runtime |
| Speed | Fastest (no dynamic dispatch) | Medium | Slowest |
| Error messages | Nightmare | Acceptable | Explodes at runtime |

## 37.8 Try It`,
c:``,
java:``
},

73:{
cpp:`# Chapter 38: Smart Pointers & RAII

C++'s secret weapon: binding resource management to **object lifetimes** — no need for free, no need to remember close.

## 38.1 What is RAII

**R**esource **A**cquisition **I**s **I**nitialization: constructor acquires resource, destructor releases resource. Objects are automatically cleaned up when they leave scope.

\`\`\`cpp
{
    vector<int> v(1000000);   // constructor: allocate 1MB
    // use v
}   // leaving the braces: v destructs, memory automatically returned
\`\`\`

> Compare with C: \`int* p = malloc(...); ... free(p);\` — forgetting free leaks, calling free twice crashes.

## 38.2 unique_ptr — Exclusive Ownership

\`\`\`cpp
#include <memory>
unique_ptr<int> p = make_unique<int>(42);
cout << *p;     // 42
// no need to delete, p auto-releases when leaving scope

// cannot copy, only move
unique_ptr<int> q = move(p);    // p becomes null, q takes over
\`\`\`

## 38.3 shared_ptr — Shared Ownership

\`\`\`cpp
shared_ptr<int> a = make_shared<int>(42);
shared_ptr<int> b = a;          // reference count +1
cout << a.use_count();          // 2
// only released when both go out of scope
\`\`\`

Internally uses reference counting. Watch out for **circular references causing leaks** — use \`weak_ptr\` to break the cycle.

## 38.4 Why Not Use Raw Pointers?

\`\`\`cpp
int* p = new int(42);
// ... exception occurs in the middle
delete p;        // will never execute → leak!
\`\`\`

unique_ptr / shared_ptr **guarantee** destructor runs (exception-safe).

## 38.5 RAII Is Not Just for Memory

\`\`\`cpp
ifstream f("data.txt");    // constructor: open file
// use f
// leaving scope: f destructs, file auto-closed (no need for close)

lock_guard<mutex> lk(m);   // constructor: lock
// use shared resource
// leaving scope: auto-unlock
\`\`\`

> ifstream, lock_guard, unique_ptr are all RAII designs — the essence of C++ philosophy.

## 38.6 weak_ptr to Break Circular References

\`\`\`cpp
struct Node {
    shared_ptr<Node> next;
    weak_ptr<Node> parent;   // doesn't increase reference count
};
\`\`\`

In bidirectional structures (parent ↔ child), if both use shared_ptr, reference count stays ≥1 → leak. weak_ptr doesn't count toward references; use \`p.lock()\` to upgrade to shared_ptr when needed.

## 38.7 Custom Deleter

\`\`\`cpp
unique_ptr<FILE, decltype(&fclose)> f(fopen("a.txt", "r"), &fclose);
// auto fclose when leaving scope
\`\`\`

Wrap any "paired acquire/release" into RAII. Works for sockets, handles, mutexes.

## 38.8 Try It

## 🧠 Design Motivation: Why Doesn't C++ Use Garbage Collection?

This is not a technical limitation — it's a deliberate choice. Garbage collection (GC) has two fundamental problems:

1. **Non-deterministic pauses (Stop-the-world)**: GC needs to pause the program while it runs. Java's GC pauses can reach milliseconds to hundreds of milliseconds. For real-time systems (heart monitors, self-driving cars, game engines), this is unacceptable.

2. **Resource management isn't just memory**: GC only manages memory, not files, sockets, database connections, mutexes, etc. You still need to manually close/unlock these. Java's \`finally\` and Python's \`with\` are both patching this gap.

RAII solves both problems simultaneously:
- Objects immediately run their destructor when leaving scope, **deterministically** releasing all resources
- Memory, files, sockets, mutexes — all managed by the same mechanism

The cost is "programmers must understand object lifetimes." This is the real reason C++ has a steep learning curve: not syntactic complexity, but the need to build a mental model of "resources bound to lifetimes."
`,
c:``,
java:``
},

74:{
cpp:`# Chapter 39: Move Semantics and Rvalue References

The most important new feature in C++11. Understanding this = truly understanding modern C++.

## 39.1 Why We Need Move

Consider:
\`\`\`cpp
vector<int> makeBig() { vector<int> v(1000000); return v; }
vector<int> w = makeBig();
\`\`\`

In C++03: must **copy** 1M elements when returning → slow.
After C++11: **move** — directly transfer internal pointer → 1000× faster.

## 39.2 lvalue vs rvalue

- **lvalue** = named thing, addressable: \`x\` in \`int x = 5;\`
- **rvalue** = unnamed, short-lived: \`5\`, \`x + 3\`, function return value

\`int& a = x;\`     ← lvalue reference
\`int&& a = 5;\`    ← rvalue reference (&&)

## 39.3 std::move — Cast lvalue to rvalue

\`\`\`cpp
vector<int> v = {1, 2, 3};
vector<int> w = move(v);    // move v's content to w
// v.size() is now 0, content belongs to w
\`\`\`

> \`move\` doesn't actually move — it's just a \`static_cast\` to rvalue reference, letting the move constructor take over.

## 39.4 Move Constructor

\`\`\`cpp
class MyBuf {
    int* data; int n;
public:
    // move constructor (note &&)
    MyBuf(MyBuf&& other) : data(other.data), n(other.n) {
        other.data = nullptr;     // original other becomes empty
        other.n = 0;
    }
};
\`\`\`

Key: "steal the pointer + empty the original object".

## 39.5 Rule of Five

If you define any of: **destructor**, **copy constructor**, **copy assignment**, **move constructor**, **move assignment** — usually you need to write all five.

\`\`\`cpp
class MyBuf {
    ~MyBuf();
    MyBuf(const MyBuf&);
    MyBuf& operator=(const MyBuf&);
    MyBuf(MyBuf&&);
    MyBuf& operator=(MyBuf&&);
};
\`\`\`

Or explicitly specify with \`= default\` / \`= delete\`.

## 39.6 Perfect Forwarding

When writing generic factory functions:

\`\`\`cpp
template<typename T, typename... Args>
unique_ptr<T> make_my(Args&&... args) {
    return unique_ptr<T>(new T(std::forward<Args>(args)...));
}
\`\`\`

\`std::forward\` preserves lvalue/rvalue attributes — lvalue in stays lvalue, rvalue in stays rvalue. \`make_unique\` is implemented this way internally.

## 39.7 When to Use Move, When Not To

| Situation | Usage |
|-----------|-------|
| Return local variable | Just return (compiler auto move/RVO) |
| return std::move(x) | ❌ Suppresses RVO, actually slower |
| Pushing parameter into container | \`v.push_back(move(x))\` ✅ |
| Want to use x again after | Don't move |

## 39.8 Try It

## 🧠 Design Motivation: Why Did C++ Choose "Value Semantics"?

In Java, objects default to "reference semantics": \`List b = a;\` makes b and a point to the same object. Modifying b affects a. This makes passing objects lightweight, but can cause confusion.

C++'s philosophy is the opposite: copy the entire object by default (value semantics). \`vector<int> w = v;\` creates a completely independent copy. Modifying w doesn't affect v.

**Advantages of value semantics**:
- More predictable behavior: a function receives a copy of your data and can't secretly modify yours
- No garbage collector needed: objects are deterministically destroyed when they leave scope
- More aligned with mathematical intuition: \`x = y\` means "x's value equals y"

**The cost of value semantics**: copying large objects (a vector with 1 million elements) is slow.

**What is Move semantics?** It is a "performance patch for value semantics." It preserves the semantic of "objects are independent," while allowing "moving" instead of "copying" in specific situations — completely eliminating unnecessary copy overhead.
`,
c:``,
java:``
},

75:{
cpp:`# Chapter 40: Lambdas and Function Objects

Lambda = small function written inline in a statement. Great companion for STL algorithms.

## 40.1 Basic Syntax

\`\`\`cpp
auto add = [](int a, int b) { return a + b; };
cout << add(3, 5);     // 8
\`\`\`

Format: \`[capture list](parameters) { body }\`

## 40.2 Used with sort

\`\`\`cpp
vector<int> v = {3, 1, 4, 1, 5, 9, 2};
sort(v.begin(), v.end(), [](int a, int b) {
    return a > b;       // descending order
});
\`\`\`

No need to define a separate function for a one-time comparison.

## 40.3 Capture

Lambdas can "capture" variables from the outer scope:

\`\`\`cpp
int n = 10;
auto f = [n](int x) { return x + n; };       // capture by value
auto g = [&n](int x) { return x + n; };      // capture by reference
auto h = [=](int x) { return x + n; };       // capture all by value
auto k = [&](int x) { return x + n; };       // capture all by reference
\`\`\`

> ⚠️ **Capturing local variables by reference**: if the lambda runs after the variable is gone, it's undefined behavior! Be careful with STL algorithms and callbacks.

## 40.4 Functor — Function Object

A lambda is fundamentally "an object with \`operator()\`":

\`\`\`cpp
struct Adder {
    int n;
    Adder(int n) : n(n) {}
    int operator()(int x) { return x + n; }
};
Adder add5(5);
cout << add5(10);    // 15
\`\`\`

Custom comparators for \`priority_queue\` use functors or lambdas.

## 40.5 std::function — Universal Function Container

\`\`\`cpp
#include <functional>
function<int(int, int)> f = [](int a, int b) { return a + b; };
// can hold anything that takes two ints and returns int
\`\`\`

> std::function has internal virtual function calls, slower than calling lambda directly — not recommended for competitive programming.

## 40.6 Recursive Lambda (Since C++14)

Lambda has no name; two ways to recurse:

\`\`\`cpp
// 1. Wrap in function (slow)
function<int(int)> fact = [&](int n){ return n<=1 ? 1 : n*fact(n-1); };

// 2. Pass self as parameter (fast, recommended)
auto fact = [](auto self, int n) -> int {
    return n <= 1 ? 1 : n * self(self, n-1);
};
fact(fact, 5);

// 3. Since C++23: deducing this, even cleaner
\`\`\`

Write DFS/recursive utilities as lambdas, no need for a separate global function.

## 40.7 mutable Lambda

\`\`\`cpp
auto counter = [n=0]() mutable { return ++n; };
counter(); counter();   // 1, 2
\`\`\`

Value capture is const by default; add \`mutable\` to modify your own copy.

## 40.8 Try It`,
c:``,
java:``
},

76:{
cpp:`# Chapter 41: The <algorithm> Library

C++ has a large set of **general-purpose algorithms** built in — no need to implement sort, binary_search, min/max yourself.

## 41.1 Sorting

\`\`\`cpp
#include <algorithm>
vector<int> v = {3, 1, 4, 1, 5};
sort(v.begin(), v.end());                  // default ascending
sort(v.rbegin(), v.rend());                // descending (reverse iterator)
sort(v.begin(), v.end(), greater<int>());  // same as above
sort(v.begin(), v.end(), [](int a, int b){ return a > b; });  // lambda
\`\`\`

> STL sort is introsort (quicksort + heapsort + insertion) — O(n log n) worst case.

## 41.2 Binary Search (Must Sort First)

\`\`\`cpp
binary_search(v.begin(), v.end(), 4);   // returns true/false
lower_bound(v.begin(), v.end(), 4);     // iterator to first element >= 4
upper_bound(v.begin(), v.end(), 4);     // iterator to first element > 4
\`\`\`

> lower_bound / upper_bound are core to advanced APCS problems — simpler and faster than writing binary search by hand.

## 41.3 min / max / minmax

\`\`\`cpp
min(3, 5);                              // 3
min({1, 2, 3, 0, 5});                   // 0 (initializer_list)
auto m = *min_element(v.begin(), v.end());
auto [mn, mx] = minmax_element(v.begin(), v.end());
\`\`\`

## 41.4 unique / reverse / rotate

\`\`\`cpp
sort(v.begin(), v.end());
auto last = unique(v.begin(), v.end());     // move consecutive duplicates to end
v.erase(last, v.end());                     // actually erase them

reverse(v.begin(), v.end());
rotate(v.begin(), v.begin() + 2, v.end());  // move first 2 elements to the end
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
    // process current permutation
} while (next_permutation(v.begin(), v.end()));
\`\`\`

Enumerate all permutations — n! of them.

## 41.7 partial_sort / nth_element — Partial Sorting

When you only need the top k or the k-th largest, no need to sort everything:

\`\`\`cpp
// put the 3 smallest elements at the front (rest in random order)
partial_sort(v.begin(), v.begin()+3, v.end());

// put the k-th element at position k (left <= right >=, but neither sorted)
nth_element(v.begin(), v.begin()+k, v.end());
cout << v[k];   // (k+1)-th smallest
\`\`\`

\`nth_element\` is O(n) average, faster than sort's O(n log n) — great for finding median.

## 41.8 set_union / set_intersection

Set operations on two **sorted** sequences:

\`\`\`cpp
vector<int> r;
set_intersection(a.begin(), a.end(), b.begin(), b.end(), back_inserter(r));
\`\`\`

## 41.9 Try It`,
c:``,
java:``
},

77:{
cpp:`# Chapter 42: string_view and Advanced Strings

C++17 adds \`string_view\` — a "window" into a string without copying.

## 42.1 Common string Operations

\`\`\`cpp
string s = "hello world";
s.size();              // 11
s.substr(6, 5);        // "world"
s.find("world");       // 6 (returns string::npos if not found)
s.replace(6, 5, "C++");// "hello C++"
s + " !";              // concatenation
s += "!";
s[0] = 'H';            // can modify
\`\`\`

## 42.2 split — Not Built Into C++!

Must implement manually:

\`\`\`cpp
vector<string> split(const string& s, char delim) {
    vector<string> result;
    stringstream ss(s);
    string item;
    while (getline(ss, item, delim)) result.push_back(item);
    return result;
}
\`\`\`

> Python's \`s.split()\` is genuinely painful in C++.

## 42.3 string_view — Avoid Copying

\`\`\`cpp
#include <string_view>
void print(string_view sv) {        // accepts string or char*
    cout << sv << "\\n";
}
print("hello");
print(string("world"));
\`\`\`

\`string_view\` only stores pointer + length, no copying. When passing large strings to functions, use \`string_view\` instead of \`const string&\` or \`const char*\`.

## 42.4 Pitfalls of string_view

\`\`\`cpp
string_view sv;
{
    string s = "hello";
    sv = s;             // points to s
}
cout << sv;             // ❌ s is dead, sv is a dangling reference
\`\`\`

> string_view is just a "window" — if the original string dies, the window is broken.

## 42.5 Number ↔ String Conversion

\`\`\`cpp
int n = stoi("42");
double d = stod("3.14");
string s = to_string(42);
\`\`\`

## 42.6 String Matching Reference

| Function | Purpose |
|----------|---------|
| \`s.find\` | Substring search (O(nm) naive implementation) |
| \`<regex>\` | Regular expressions (slow in C++, use sparingly) |
| \`std::hash<string>{}(s)\` | String hashing |

## 42.7 KMP / Z-function Template

For APCS string problems: \`s.find\` is O(nm), n=10^6 will TLE. Implement KMP by hand:

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

Preprocessing O(n), matching O(n+m).

## 42.8 Traps with char vs string

\`\`\`cpp
string s = "hello";
s[100];        // won't crash, but undefined (reads random byte)
s.at(100);     // throws out_of_range exception
s + 'a';       // OK
s + 65;        // ⚠️ treats 65 as ptrdiff, not appending "A"! Use s + char(65)
\`\`\`

## 42.9 Try It`,
c:``,
java:``
},

78:{
cpp:`# Chapter 43: Introduction to Concurrency with std::thread

C++11 introduced built-in multithreading support.

## 43.1 Launching a Thread

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
    t1.join();           // wait for t1 to finish
    t2.join();
}
\`\`\`

> ⚠️ **Must join or detach**. Otherwise when the program ends and the thread is still alive → direct terminate.

## 43.2 Shared Data = Race Conditions

\`\`\`cpp
int counter = 0;
void inc() {
    for (int i = 0; i < 100000; i++) counter++;
}
thread t1(inc), t2(inc);
t1.join(); t2.join();
cout << counter;    // could be 100000, 200000, or any value!
\`\`\`

\`counter++\` is not atomic (read→modify→write); interleaved threads cause corruption.

## 43.3 mutex — Mutual Exclusion Lock

\`\`\`cpp
#include <mutex>
mutex m;
int counter = 0;

void inc() {
    for (int i = 0; i < 100000; i++) {
        lock_guard<mutex> lk(m);    // RAII auto-unlock
        counter++;
    }
}
\`\`\`

\`lock_guard\` is RAII — auto-unlocks when leaving scope, you can't forget.

## 43.4 atomic — Atomic Operations

\`\`\`cpp
#include <atomic>
atomic<int> counter = 0;
void inc() {
    for (int i = 0; i < 100000; i++) counter++;     // safe!
}
\`\`\`

For basic type operations, \`atomic\` is much faster than mutex.

## 43.5 async / future — Getting Return Values

\`\`\`cpp
#include <future>
future<int> f = async([] { return 42; });
cout << f.get();     // 42 (blocks waiting for result)
\`\`\`

## 43.6 Avoiding Deadlocks

Two threads both lock A→B, but one locks B→A → both wait on each other. **Use \`scoped_lock\` to lock multiple at once**:

\`\`\`cpp
scoped_lock lk(m1, m2);     // C++17, atomically locks both
\`\`\`

## 43.7 condition_variable — Thread Notification

Producer notifies consumer that "there's goods":

\`\`\`cpp
mutex m;
condition_variable cv;
queue<int> q;

// consumer
unique_lock<mutex> lk(m);
cv.wait(lk, []{ return !q.empty(); });
int x = q.front(); q.pop();

// producer
{ lock_guard<mutex> lk(m); q.push(42); }
cv.notify_one();
\`\`\`

## 43.8 Comparison with Other Languages

| | C++ | Python | Java |
|---|---|---|---|
| True parallelism | ✅ | ❌ GIL | ✅ |
| Startup cost | High (~50μs) | High | High |
| Sync primitives | mutex/atomic/cv | threading.Lock | synchronized/Lock |
| Recommended pool | std::async | concurrent.futures | ExecutorService |

CPU-intensive tasks have true parallelism in C++ and Java; Python must use multiprocessing to bypass the GIL.

## 43.9 Try It`,
c:``,
java:``
},

79:{
cpp:``,
c:`# Chapter 36: Pointers — From Basics to Deep Understanding

Pointers are the soul of C. Understanding pointers = truly knowing C.

## 36.1 What Are Pointers

\`int x = 42;\` — x is a box holding 42.
\`int *p = &x;\` — p is a box holding **"where x is" — the address**.

\`\`\`c
int x = 42;
int *p = &x;
printf("%d\\n", x);    // 42
printf("%p\\n", p);    // 0x7ffe... (address of x)
printf("%d\\n", *p);   // 42 (dereference p)
*p = 100;             // modify what p points to
printf("%d\\n", x);    // 100
\`\`\`

| Symbol | Meaning |
|--------|---------|
| \`&x\` | Take the address of x |
| \`*p\` | Dereference p (access what p points to) |
| \`int *p\` | Declaration: p is a "pointer to int" |

## 36.2 Why Use Pointers

**1. Function wants to modify an outside variable**:
\`\`\`c
void swap(int *a, int *b) {
    int t = *a; *a = *b; *b = t;
}
int x = 1, y = 2;
swap(&x, &y);          // pass address in
\`\`\`

> C has no "pass by reference" — can only pass pointers.

**2. Avoid copying large structures**: function parameter \`struct Big b\` → copies entire b; change to \`struct Big *b\` → only passes 8-byte address.

## 36.3 Arrays Are Pointers

\`\`\`c
int a[5] = {1, 2, 3, 4, 5};
int *p = a;        // p points to a[0]
printf("%d\\n", a[2]);     // 3
printf("%d\\n", *(p + 2)); // 3, same
printf("%d\\n", p[2]);     // 3, also same
\`\`\`

In expressions, \`a\` **is** \`&a[0]\`, so arrays and pointers are essentially interchangeable.

## 36.4 NULL and Segfault

\`\`\`c
int *p = NULL;
*p = 42;          // ❌ Segmentation fault: writing to address 0
\`\`\`

C doesn't check if pointers are valid — writing to a bad address crashes immediately. **Good habit: check for NULL before using**.

## 36.5 const pointer

\`\`\`c
const int *p;        // cannot modify *p (what it points to is constant)
int * const p;       // cannot modify p (the pointer itself is constant)
const int * const p; // cannot modify either
\`\`\`

**Reading rule**: read right-to-left — "p is a const pointer to const int".

## 36.6 Function Pointer vs Pointer to Function

\`\`\`c
int (*f)(int);        // f is a "pointer to a function taking int and returning int"
int *g(int);          // g is a "function taking int and returning int*"
\`\`\`

Parentheses matter — without them it becomes completely different.

## 36.7 Advanced Pointers: void* and Type Casting

\`\`\`c
void *p;              // universal pointer, unknown type
int x = 42;
p = &x;
int *ip = (int*)p;    // cast back to correct type before use
printf("%d", *ip);
\`\`\`

\`malloc\` returns \`void*\` for this reason — it doesn't know what you'll store. \`memcpy\` / \`qsort\` parameters are also void*.

## 36.8 Try It`,
java:``
},

80:{
cpp:``,
c:`# Chapter 37: Dynamic Memory — malloc / free

When you don't know the data size, or need to decide size at runtime, use \`malloc\` to request memory from the system.

## 37.1 malloc / free Basics

\`\`\`c
#include <stdlib.h>

int *arr = malloc(n * sizeof(int));
if (arr == NULL) { /* allocation failed */ exit(1); }

for (int i = 0; i < n; i++) arr[i] = i;

free(arr);            // always return when done
arr = NULL;           // prevent subsequent misuse
\`\`\`

> \`sizeof(int)\` is usually 4. \`malloc(n)\` gets n bytes; for n ints use \`n * sizeof(int)\`.

## 37.2 calloc — Allocate + Zero-Initialize

\`\`\`c
int *arr = calloc(n, sizeof(int));     // auto-initialized to 0
\`\`\`

\`malloc\` content is garbage values; \`calloc\` guarantees 0.

## 37.3 realloc — Resize

\`\`\`c
arr = realloc(arr, new_n * sizeof(int));
\`\`\`

May move to a new location — original \`arr\` pointer is invalid; use the return value to update.

## 37.4 2D Arrays: Array of Arrays

\`\`\`c
int **grid = malloc(rows * sizeof(int *));
for (int i = 0; i < rows; i++) {
    grid[i] = malloc(cols * sizeof(int));
}
// free one by one when done
for (int i = 0; i < rows; i++) free(grid[i]);
free(grid);
\`\`\`

> 10× more painful than Python's \`[[0]*cols for _ in range(rows)]\` — but flexible.

## 37.5 Common Mistakes

| Mistake | Consequence |
|---------|-------------|
| Forgot \`free\` | Memory leak |
| \`free\` twice | Program crash or corrupt heap |
| Using pointer after \`free\` | Undefined (dangling pointer) |
| Writing beyond \`malloc\` range | Heap overflow, may not fail immediately |
| \`free(p+1)\` | Undefined, can only free the original pointer returned by malloc |

**Most common pain point**: function \`malloc\`s but forgets to \`free\` → program grows larger over time (leak).

## 37.6 valgrind — Leak Detection Tool

\`\`\`bash
valgrind --leak-check=full ./prog
\`\`\`

Every malloc without a corresponding free is listed, pointing to the exact line.

## 37.7 Stack vs Heap

| | stack | heap |
|---|---|---|
| Allocation | Automatic (local variables) | \`malloc\` |
| Release | Automatic (leaving function) | \`free\` |
| Speed | Very fast | Slow |
| Size | Small (usually ~8MB) | Large (GB scale) |
| Failure | StackOverflow | malloc returns NULL |

\`\`\`c
int big[10000000];   // ❌ stack overflow (exceeds stack size)
int *big = malloc(10000000 * sizeof(int));   // ✅ heap is fine
\`\`\`

> For APCS problems, arrays of 10^6 or more should be global or use malloc, not local variables inside functions.

## 37.8 Custom Simple Memory Pool

malloc/free in hot loops is slow — allocate one large block and manage it yourself:

\`\`\`c
char pool[1<<20];
int pool_used = 0;
void* my_alloc(size_t n){
    void* p = pool + pool_used;
    pool_used += n;
    return p;
}
\`\`\`

Common technique in OI competitions for Trie/segment trees, several times faster than dynamic malloc.

## 37.9 Try It`,
java:``
},

81:{
cpp:``,
c:`# Chapter 38: Advanced struct and union

## 38.1 struct Basics

\`\`\`c
struct Point { int x, y; };
struct Point p = {3, 4};
printf("%d %d\\n", p.x, p.y);
\`\`\`

Or use \`typedef\` to simplify:
\`\`\`c
typedef struct { int x, y; } Point;
Point p = {3, 4};
\`\`\`

## 38.2 Designated Field Initialization (C99+)

\`\`\`c
Point p = {.x = 3, .y = 4};
\`\`\`

Order doesn't matter; unspecified fields default to 0.

## 38.3 Nested structs

\`\`\`c
typedef struct {
    Point top_left;
    Point bot_right;
} Rect;
Rect r = {{0, 0}, {10, 5}};
printf("%d\\n", r.top_left.x);
\`\`\`

## 38.4 struct Size and Padding

\`\`\`c
struct A { char c; int i; };
printf("%zu\\n", sizeof(struct A));   // usually 8, not 5
\`\`\`

CPU alignment rules: int usually starts at multiples of 4. So 3 bytes of padding are inserted after char.

> **Ordering fields wisely** (large ones first) can save space.

## 38.5 union — Sharing Memory

\`\`\`c
union Data {
    int i;
    float f;
    char s[4];
};
union Data d;
d.i = 0x41424344;
printf("%s\\n", d.s);     // "DCBA" or "ABCD" (depends on endianness)
\`\`\`

All fields share the same memory block; size = size of the largest field. Common use: type-punning hack, variants.

## 38.6 Tagged union

\`\`\`c
typedef struct {
    enum { TYPE_INT, TYPE_STR } type;
    union {
        int i;
        char *s;
    } data;
} Variant;
\`\`\`

Simulating "dynamic typing" — Python variables can hold anything; in C you do it this way by hand.

## 38.7 Bit Fields — Packed struct

Memory-efficient compressed struct:

\`\`\`c
struct Flags {
    unsigned int is_open  : 1;
    unsigned int is_dirty : 1;
    unsigned int level    : 4;   // 0..15
    unsigned int type     : 2;   // 0..3
};   // entire struct is 8 bits = 1 byte (compiler decides padding)
\`\`\`

Common in device drivers and network packet parsing.

## 38.8 Anonymous struct/union (C11)

\`\`\`c
struct {
    int kind;
    union {
        int i;
        char *s;
    };   // no name needed!
} x;
x.kind = 1;
x.i = 42;       // write directly, no need for x.data.i
\`\`\`

Makes tagged unions cleaner to use.

## 38.9 Try It`,
java:``
},

82:{
cpp:``,
c:`# Chapter 39: Function Pointers and Callbacks

C has no lambdas, no closures — function abstraction relies on **function pointers**.

## 39.1 Function Pointer Declaration

\`\`\`c
int add(int a, int b) { return a + b; }

int main(void) {
    int (*f)(int, int) = add;    // f is a "pointer to a function taking two ints and returning int"
    printf("%d\\n", f(3, 5));     // 8
    return 0;
}
\`\`\`

**Reading rule**: frame the name — \`(*f)\` = f is a pointer, \`(int, int)\` = points to two-parameter function, \`int\` = returns int.

## 39.2 typedef Makes Declarations Readable

\`\`\`c
typedef int (*BinOp)(int, int);
BinOp f = add;
\`\`\`

\`BinOp\` is the type "function pointer taking two ints and returning int".

## 39.3 qsort Uses Function Pointers

\`\`\`c
#include <stdlib.h>

int cmp(const void *a, const void *b) {
    return *(int*)a - *(int*)b;
}

int main(void) {
    int arr[] = {3, 1, 4, 1, 5};
    qsort(arr, 5, sizeof(int), cmp);   // 4th argument is function pointer
}
\`\`\`

qsort doesn't know what's in your array → it calls your provided cmp to compare.

## 39.4 Callback Pattern

\`\`\`c
void forEach(int *arr, int n, void (*action)(int)) {
    for (int i = 0; i < n; i++) action(arr[i]);
}
void print_it(int x) { printf("%d\\n", x); }
forEach(arr, n, print_it);
\`\`\`

Like Python's \`map(f, list)\` — much more verbose in C.

## 39.5 No Closures

C function pointers **cannot capture outer variables**. To have "state", use globals or pass an extra \`void *context\`:

\`\`\`c
void forEach(int *arr, int n, void (*action)(int, void*), void *ctx) {
    for (int i = 0; i < n; i++) action(arr[i], ctx);
}
\`\`\`

\`pthread_create\` / \`qsort_r\` all follow this pattern — standard functions accept void* context.

## 39.6 Function Pointer Arrays: Dispatch Table

Replace switch with table lookup:

\`\`\`c
int add(int a, int b){ return a+b; }
int sub(int a, int b){ return a-b; }
int mul(int a, int b){ return a*b; }

int (*ops[])(int, int) = {add, sub, mul};
const char *names[] = {"add", "sub", "mul"};

int op = 1;
printf("%s = %d\\n", names[op], ops[op](10, 3));   // sub = 7
\`\`\`

Interpreters, state machines, and virtual machines all use this technique to dispatch instructions.

## 39.7 Try It`,
java:``
},

83:{
cpp:``,
c:`# Chapter 40: String Handling — strcpy / strtok

C has no string type — \`char []\` + trailing \`'\\0'\`. All "string operations" are functions.

## 40.1 Essential string.h Functions

\`\`\`c
#include <string.h>

strlen(s);             // length (not including \\0)
strcpy(dst, src);      // copy
strncpy(dst, src, n);  // copy at most n chars
strcat(dst, src);      // append to dst
strcmp(a, b);          // compare: 0=equal, <0=a<b, >0=a>b
strstr(s, sub);        // find substring, returns pointer or NULL
\`\`\`

## 40.2 strcpy Pitfall

\`\`\`c
char dst[5];
strcpy(dst, "hello world");   // ❌ writes past 5 bytes, buffer overflow
\`\`\`

Use \`strncpy\` or check length yourself. **Buffer overflow is the biggest source of C security vulnerabilities**.

## 40.3 strtok — Split String

\`\`\`c
char s[] = "apple,banana,cherry";
char *tok = strtok(s, ",");
while (tok != NULL) {
    printf("%s\\n", tok);
    tok = strtok(NULL, ",");   // first argument is NULL for subsequent calls
}
\`\`\`

> ⚠️ **strtok modifies s** (replaces delimiter with \`\\0\`) — cannot use on string literals.
> ⚠️ **strtok is not thread-safe** (uses global state) — use \`strtok_r\` in multithreaded code.

## 40.4 sprintf — Format to String

\`\`\`c
char buf[100];
sprintf(buf, "%d + %d = %d", 1, 2, 3);   // buf = "1 + 2 = 3"
\`\`\`

Safer version: \`snprintf(buf, sizeof(buf), "...", ...)\` — won't write past bounds.

## 40.5 String ↔ Number Conversion

\`\`\`c
int n = atoi("42");
double d = atof("3.14");
sprintf(buf, "%d", n);     // int → string
\`\`\`

> \`atoi\` returns 0 on failure, can't distinguish "real 0" from "failure". For strict usage, use \`strtol\` with errno.

## 40.6 Common String Comparison Mistake

\`\`\`c
if (s == "hello") { ... }    // ❌ compares pointers
if (strcmp(s, "hello") == 0) { ... }   // ✅ compares content
\`\`\`

## 40.7 Dynamic Strings: Roll Your Own String Builder

When concatenating many tokens and worried about overflow, manage the buffer yourself:

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

C++'s \`string\` works roughly this way underneath; in C you start from scratch.

## 40.8 String Hashing (Advanced APCS)

\`\`\`c
unsigned long hash(const char *s){
    unsigned long h = 5381;
    int c;
    while ((c = *s++)) h = ((h << 5) + h) + c;   // h*33 + c
    return h;
}
\`\`\`

djb2 is the most well-known fast string hash. Essential for making your own hash maps.

## 40.9 Try It`,
java:``
},

84:{
cpp:``,
c:`# Chapter 41: Advanced Macros: Conditional Compilation and Variadic Macros

\`#define\` is C's metaprogramming — the preprocessor does **textual substitution** before the compiler sees it.

## 41.1 Constant Macros

\`\`\`c
#define MAX 1000005
#define PI 3.14159
int arr[MAX];
\`\`\`

> Modern C can use \`const int MAX = 1000005;\` — but macros can be used for array sizes (const variables don't work in some compilers).

## 41.2 Function-like Macros

\`\`\`c
#define MIN(a, b) ((a) < (b) ? (a) : (b))
\`\`\`

**Every parameter needs parentheses** — otherwise \`MIN(x+1, y)\` expands oddly.

## 41.3 Macro Pitfall: Side Effects

\`\`\`c
int i = 5;
int m = MIN(i++, 10);   // i becomes 7 (evaluated twice)
\`\`\`

Macros are textual substitution; \`i++\` is really expanded twice. **Using \`static inline\` functions is safer**.

## 41.4 Conditional Compilation

\`\`\`c
#ifdef DEBUG
    printf("[debug] x = %d\\n", x);
#endif

#if defined(__linux__)
    // linux-specific code
#elif defined(_WIN32)
    // windows-specific code
#endif
\`\`\`

Compiling with \`gcc -DDEBUG ...\` includes debug messages. Without it → entire section disappears, zero overhead.

## 41.5 Variadic Macros (C99+)

\`\`\`c
#define LOG(fmt, ...) fprintf(stderr, "[log] " fmt "\\n", __VA_ARGS__)
LOG("x = %d, y = %d", 1, 2);
\`\`\`

\`...\` accepts any number of arguments, \`__VA_ARGS__\` expands them.

## 41.6 Stringification and Concatenation

\`\`\`c
#define STR(x) #x
#define CAT(a, b) a##b

STR(hello)      // "hello"
CAT(my, var)    // myvar (identifier)
\`\`\`

## 41.7 Standard Header Guard

\`\`\`c
#ifndef MYHEADER_H
#define MYHEADER_H
// header content
#endif
\`\`\`

Prevents duplicate declarations from including the same .h file twice.

## 41.8 X-Macro Pattern

Generate multiple types of code from a single data source:

\`\`\`c
#define COLORS \\
    X(RED,   0xFF0000) \\
    X(GREEN, 0x00FF00) \\
    X(BLUE,  0x0000FF)

// 1) Generate enum
enum Color {
#define X(name, val) name,
    COLORS
#undef X
};

// 2) Generate name string table
const char *color_name[] = {
#define X(name, val) #name,
    COLORS
#undef X
};
\`\`\`

Adding \`YELLOW\` only requires changing the COLORS line; enum and string table sync automatically.

## 41.9 Comparison with C++ Templates

| | C macro | C++ template |
|---|---|---|
| Phase | Preprocessor (textual substitution) | Compile time (type-safe) |
| Error messages | Expanded gibberish | Template gibberish |
| Side effect safety | ❌ | ✅ |
| Works across types | ✅ (crude) | ✅ (type parameterized) |

For new projects, prefer \`static inline\` / templates; only use macros for legacy C code.

## 41.10 Try It`,
java:``
},

85:{
cpp:``,
c:`# Chapter 42: Introduction to System Calls — read / write / fork

C is the language for writing **operating systems, embedded systems, and drivers**. Talking directly to the OS requires system calls.

> ⚠️ This chapter applies only to Linux/macOS; Windows requires the Win32 API.

## 42.1 Standard I/O vs System Calls

| | Standard I/O | System calls |
|---|---|---|
| Functions | \`fopen / fread / fwrite\` | \`open / read / write\` |
| Headers | \`<stdio.h>\` | \`<unistd.h> <fcntl.h>\` |
| Object | \`FILE *\` | Integer file descriptor (fd) |
| Buffering | Yes (library level) | No (direct to kernel) |

## 42.2 open / read / write

\`\`\`c
#include <unistd.h>
#include <fcntl.h>

int fd = open("data.txt", O_RDONLY);
if (fd < 0) { perror("open"); return 1; }
char buf[1024];
ssize_t n = read(fd, buf, sizeof(buf));   // returns number of bytes read
write(STDOUT_FILENO, buf, n);             // STDOUT_FILENO = 1
close(fd);
\`\`\`

- 0 = stdin, 1 = stdout, 2 = stderr
- read returns 0 to indicate EOF
- write may not write everything; loop until fully written

## 42.3 fork — Create a Process

\`\`\`c
#include <sys/wait.h>
pid_t pid = fork();
if (pid == 0) {
    // child process
    printf("I'm child\\n");
    _exit(0);
} else if (pid > 0) {
    // parent process
    int status;
    waitpid(pid, &status, 0);
    printf("Child done\\n");
}
\`\`\`

\`fork\` makes a complete copy of the current process; parent and child continue from the same line.

## 42.4 exec Family — Replace Yourself

\`\`\`c
execl("/bin/ls", "ls", "-l", NULL);
// if successful, never returns
\`\`\`

Usually \`fork\` + child \`exec\` — this is how shells run commands.

## 42.5 pipe — Communication Between Two Processes

\`\`\`c
int fd[2];
pipe(fd);             // fd[0] read end, fd[1] write end
// after fork, parent writes to fd[1], child reads from fd[0]
\`\`\`

## 42.6 errno — Error Codes

\`\`\`c
#include <errno.h>
#include <string.h>
if (open(...) < 0) {
    printf("Error: %s\\n", strerror(errno));
}
\`\`\`

Every failing system call sets errno; \`strerror\` converts it to human-readable text.

## 42.7 signal — Receive Signals

\`\`\`c
#include <signal.h>
void handler(int sig) {
    write(1, "got SIGINT\\n", 11);
    _exit(0);
}
signal(SIGINT, handler);   // triggered by Ctrl+C
\`\`\`

> ⚠️ Signal handlers can only call **async-signal-safe** functions (write is OK, printf is not).

## 42.8 mmap — Use Files as Memory

\`\`\`c
#include <sys/mman.h>
int fd = open("big.bin", O_RDONLY);
struct stat st; fstat(fd, &st);
char *p = mmap(NULL, st.st_size, PROT_READ, MAP_PRIVATE, fd, 0);
// p is read like a normal array
munmap(p, st.st_size);
\`\`\`

No need to read large files into a buffer — kernel pages on demand, extremely fast.

## 42.9 Try It`,
java:``
},

86:{
cpp:``,
c:`# Chapter 43: Makefile and Multi-File Compilation

For C projects with multiple files, typing \`gcc a.c b.c c.c -o prog\` every time is tedious. Makefile automates it.

## 43.1 Simple Makefile

\`\`\`make
prog: main.o utils.o
	gcc -o prog main.o utils.o

main.o: main.c utils.h
	gcc -c main.c

utils.o: utils.c utils.h
	gcc -c utils.c

clean:
	rm -f *.o prog
\`\`\`

> ⚠️ Indentation **must use Tab**, not 4 spaces! This is the most common Makefile pitfall.

## 43.2 Rule Format

\`\`\`
target: dependencies
	command
\`\`\`

- target = the file you want to produce
- dependencies = files that target depends on
- command = how to produce target (runs when dependencies are updated)

Running \`make prog\` checks if prog needs rebuilding.

## 43.3 Variables

\`\`\`make
CC = gcc
CFLAGS = -Wall -O2 -g
OBJS = main.o utils.o

prog: $(OBJS)
	$(CC) -o prog $(OBJS)

%.o: %.c
	$(CC) $(CFLAGS) -c $<
\`\`\`

- \`$<\` = first dependency
- \`$@\` = current target
- \`%.o: %.c\` = pattern rule (any .c compiles to same-named .o)

## 43.4 Phony Targets .PHONY

\`\`\`make
.PHONY: clean all
all: prog
clean:
	rm -f *.o prog
\`\`\`

\`clean\` is not a real file → mark as .PHONY, prevents breakage if someone creates a file named "clean".

## 43.5 Automatic Dependencies

In practice, \`gcc -M\` is used to auto-generate dependency graphs, avoiding manually maintaining \`main.o: main.c utils.h\`.

## 43.6 The Post-Makefile Era

Modern C/C++ projects often use **CMake** (cross-platform, generates Makefile/Ninja/VS projects) or **Meson**. But understanding Makefile is still foundational engineering knowledge.

## 43.7 Separating Header and Implementation Files

\`\`\`c
// utils.h
#ifndef UTILS_H
#define UTILS_H
int gcd(int a, int b);   // declaration only
#endif

// utils.c
#include "utils.h"
int gcd(int a, int b){ return b ? gcd(b, a%b) : a; }   // implementation

// main.c
#include "utils.h"
int main(){ gcd(12, 18); }
\`\`\`

Rules:
- .h contains only **declarations** (function prototypes, struct definitions, macros)
- .c contains **implementations** (function bodies)
- Any .c using a declaration must \`#include\` the corresponding .h

## 43.8 Compiler Flags Quick Reference

| Flag | Purpose |
|------|---------|
| \`-Wall -Wextra\` | Enable all warnings |
| \`-O2\` | Production optimization |
| \`-g\` | Include debug symbols |
| \`-fsanitize=address\` | AddressSanitizer to catch buffer overflow |
| \`-fsanitize=undefined\` | UBSan to catch undefined behavior |
| \`-std=c11\` | Specify C standard version |

During development, use \`-Wall -Wextra -g -fsanitize=address\`; 90% of C bugs are caught at compile/runtime.

## 43.9 Try It`,
java:``
},

87:{
cpp:``,
c:``,
java:`# Chapter 36: Collections Framework

Java's \`java.util.*\` is more organized than C++ STL — everything is designed around interfaces.

## 36.1 Three Main Interfaces

\`\`\`
Collection
├── List   ordered, allows duplicates  → ArrayList, LinkedList
├── Set    no duplicates               → HashSet, TreeSet, LinkedHashSet
└── Queue  queue                       → ArrayDeque, PriorityQueue

Map<K,V>   key-value pairs             → HashMap, TreeMap, LinkedHashMap
\`\`\`

## 36.2 List

\`\`\`java
import java.util.*;
List<Integer> list = new ArrayList<>();
list.add(1); list.add(2); list.add(3);
list.get(0);           // 1
list.set(0, 10);       // modify at index 0
list.size();           // 3
list.remove(0);        // remove at index 0 (O(n))
for (int x : list) System.out.println(x);
\`\`\`

**ArrayList vs LinkedList**:
- ArrayList — random access O(1), amortized O(1) append to end, O(n) insert in middle
- LinkedList — O(1) add at both ends, O(n) random access

In practice, **use ArrayList 99% of the time** — LinkedList is almost always slower on modern hardware (cache misses).

## 36.3 Map

\`\`\`java
Map<String, Integer> map = new HashMap<>();
map.put("apple", 1);
map.put("apple", 2);              // overwrites
map.get("apple");                 // 2
map.getOrDefault("nope", 0);      // 0
map.containsKey("apple");         // true
for (Map.Entry<String, Integer> e : map.entrySet()) {
    System.out.println(e.getKey() + " " + e.getValue());
}
\`\`\`

- **HashMap** — average O(1), unordered
- **TreeMap** — O(log n), keys auto-sorted
- **LinkedHashMap** — O(1), preserves **insertion order**

## 36.4 Set

\`\`\`java
Set<Integer> s = new HashSet<>();
s.add(1); s.add(2); s.add(1);     // auto-dedup
s.contains(1);                    // true
s.size();                         // 2
\`\`\`

## 36.5 Queue / Deque

\`\`\`java
Deque<Integer> dq = new ArrayDeque<>();
dq.offerFirst(1); dq.offerLast(2);
dq.pollFirst(); dq.pollLast();
\`\`\`

Java recommends **ArrayDeque** as stack/queue (faster than both \`Stack\` and \`LinkedList\`).

## 36.6 PriorityQueue (heap)

\`\`\`java
PriorityQueue<Integer> pq = new PriorityQueue<>();   // min-heap by default
pq.offer(3); pq.offer(1); pq.offer(2);
pq.poll();                          // 1

PriorityQueue<Integer> maxPq = new PriorityQueue<>(Comparator.reverseOrder());
\`\`\`

## 36.7 Sorting and Comparator

\`\`\`java
List<int[]> pairs = ...;
pairs.sort((a, b) -> a[0] - b[0]);                  // ascending by first column
pairs.sort(Comparator.comparingInt(a -> a[0])
    .thenComparingInt(a -> -a[1]));                  // multi-key
\`\`\`

> ⚠️ \`a[0] - b[0]\` can overflow with large numbers! Use \`Integer.compare(a[0], b[0])\` for safety.

## 36.8 Immutable Collections (Java 9+)

\`\`\`java
List<Integer> immut = List.of(1, 2, 3);     // immutable, doesn't accept null
Map<String,Integer> m = Map.of("a", 1, "b", 2);
\`\`\`

Modification throws UnsupportedOperationException. Very convenient as constant tables.

## 36.9 Comparison with C++ STL

| Feature | C++ | Java |
|---------|-----|------|
| Dynamic array | vector | ArrayList |
| Hash table | unordered_map | HashMap |
| Red-black tree map | map | TreeMap |
| Heap | priority_queue | PriorityQueue |
| Double-ended | deque | ArrayDeque |
| Iteration | iterator / range for | Iterator / for-each |

Almost one-to-one semantics, just different names.

## 36.10 Try It`
},

88:{
cpp:``,
c:``,
java:`# Chapter 37: Generics

Generics let you write **type-parameterized** classes/methods — type safety guaranteed at compile time.

## 37.1 Why Generics Are Needed

Before generics (pre-Java 5):
\`\`\`java
List list = new ArrayList();
list.add("hello");
String s = (String) list.get(0);    // requires cast, may throw ClassCastException
\`\`\`

With generics:
\`\`\`java
List<String> list = new ArrayList<>();
list.add("hello");
String s = list.get(0);             // compiler knows it's a String
list.add(42);                       // compile error
\`\`\`

## 37.2 Generic Methods

\`\`\`java
public static <T> T myMax(T a, T b, Comparator<T> cmp) {
    return cmp.compare(a, b) > 0 ? a : b;
}
\`\`\`

\`<T>\` before the return type; T is auto-inferred.

## 37.3 Generic Classes

\`\`\`java
class Box<T> {
    private T value;
    public Box(T v) { value = v; }
    public T get() { return value; }
}
Box<Integer> bi = new Box<>(42);
Box<String> bs = new Box<>("hello");
\`\`\`

## 37.4 Wildcards \`?\`

\`\`\`java
void print(List<?> list) { ... }            // List of any type
void sum(List<? extends Number> list) { ... } // Number or subclasses
void add(List<? super Integer> list) { ... }  // Integer or parent classes
\`\`\`

**PECS principle**: **P**roducer **E**xtends, **C**onsumer **S**uper.
- Want to **read** from list → \`? extends T\`
- Want to **write** to list → \`? super T\`

## 37.5 Type Erasure

Java generics **only exist at compile time**. At runtime \`List<Integer>\` and \`List<String>\` are the same class.

\`\`\`java
List<Integer> a = new ArrayList<>();
List<String> b = new ArrayList<>();
System.out.println(a.getClass() == b.getClass());    // true!
\`\`\`

> This is different from C++ templates (C++ truly generates different classes for each type).

## 37.6 Limitations

Cannot:
\`\`\`java
T t = new T();                    // ❌ cannot new a generic type
T[] arr = new T[10];              // ❌ cannot new a generic array
if (x instanceof List<String>)    // ❌ cannot instanceof with generics
\`\`\`

## 37.7 Multiple Parameters + Constraints

\`\`\`java
class Pair<K extends Comparable<K>, V> {
    K key; V value;
    int compareTo(Pair<K, V> o){ return key.compareTo(o.key); }
}
\`\`\`

\`<K extends Comparable<K>>\` forces K to be comparable.

## 37.8 Comparison with C++ Templates

| | Java generics | C++ template |
|---|---|---|
| Compiled output | One copy (erased) | One copy per type |
| Runtime type visible | ❌ | ❌ (unless RTTI) |
| Primitive support | ❌ (requires boxing) | ✅ |
| Compile speed | Fast | Slow |
| Error messages | Normal | Nightmare |

Java can't do \`List<int>\` — only \`List<Integer>\`, each element is boxed → slow and memory-heavy. For APCS, just use \`int[]\` arrays directly.

## 37.9 Try It

## 🧠 Design Motivation: Why Did Java Choose Type Erasure?

Java generics weren't added until 2004 (Java 5), 13 years after C++ templates (1991). By then, a huge amount of Java code was already running, and \`ArrayList\` (without generics) was widely used.

If Java had adopted the C++ approach (generating a different class for each type), \`ArrayList<Integer>\` and \`ArrayList<String>\` would be completely different classes, and all old code would be incompatible with new generic code — a catastrophic incompatibility.

Type erasure was a **backwards-compatible compromise**: generics only exist at compile time (providing type safety), while at runtime it's still the same \`ArrayList\` class. Old and new code can coexist.

The **cost** is that long list of limitations: \`new T()\`, \`T[]\`, \`instanceof List<String>\` — all forbidden. All these restrictions flow from the single fundamental fact that "runtime type information has been erased."

Go made a similar choice (generics weren't added until Go 1.18, also with compatibility in mind). Kotlin's \`reified\` type parameters partially solve this problem through inline functions.
`
},

89:{
cpp:``,
c:``,
java:`# Chapter 38: Stream API

Introduced in Java 8 — functional-style collection processing. Similar to Python's list comprehensions.

## 38.1 Three Steps: Source → Intermediate Operations → Terminal Operation

\`\`\`java
import java.util.stream.*;

List<Integer> nums = List.of(1, 2, 3, 4, 5);
int sumOfSquares = nums.stream()
    .filter(n -> n % 2 == 0)        // intermediate: keep even numbers
    .mapToInt(n -> n * n)           // intermediate: square
    .sum();                          // terminal: sum up
System.out.println(sumOfSquares);   // 4 + 16 = 20
\`\`\`

## 38.2 Common Intermediate Operations

\`\`\`java
nums.stream()
    .filter(n -> n > 0)           // filter
    .map(n -> n * 2)              // transform
    .distinct()                   // remove duplicates
    .sorted()                     // sort
    .limit(10)                    // take first 10
    .skip(5);                     // skip first 5
\`\`\`

## 38.3 Common Terminal Operations

\`\`\`java
.count()                          // count
.sum() / .max() / .min()          // numeric statistics
.collect(Collectors.toList())     // collect into List
.collect(Collectors.toSet())
.collect(Collectors.toMap(...))
.forEach(System.out::println)     // for each element
.reduce(0, Integer::sum)          // custom reduction
\`\`\`

## 38.4 groupingBy — Java's groupby

\`\`\`java
Map<String, List<Person>> byCity = people.stream()
    .collect(Collectors.groupingBy(Person::getCity));

Map<String, Long> cntByCity = people.stream()
    .collect(Collectors.groupingBy(Person::getCity, Collectors.counting()));
\`\`\`

## 38.5 Method Reference \`::\`

\`\`\`java
list.forEach(System.out::println);          // same as x -> System.out.println(x)
list.stream().map(String::toUpperCase);     // same as s -> s.toUpperCase()
list.stream().map(Person::new);             // constructor reference
\`\`\`

## 38.6 Notes

- Stream **can only be consumed once** — after use it's spent; create a new .stream() to use again
- Stream **does not modify the original collection**
- Intermediate operations are **lazily evaluated** — won't run without a terminal operation

## 38.7 Parallel Stream

\`\`\`java
nums.parallelStream().filter(...).sum();
\`\`\`

Opens multiple threads to process. Note: **data must have no shared state**, otherwise it breaks.

## 38.8 Advanced Collectors

\`\`\`java
// partitioningBy: split into two groups
Map<Boolean, List<Integer>> oddEven = nums.stream()
    .collect(Collectors.partitioningBy(n -> n % 2 == 1));

// toMap: convert to Map
Map<String, Integer> lens = words.stream()
    .collect(Collectors.toMap(w -> w, String::length));

// summarizingInt: get count/sum/min/max/avg in one call
IntSummaryStatistics stat = nums.stream()
    .collect(Collectors.summarizingInt(Integer::intValue));
System.out.println(stat.getAverage());
\`\`\`

## 38.9 Comparison with Python

| Python | Java |
|--------|------|
| \`[x*2 for x in xs if x>0]\` | \`xs.stream().filter(x->x>0).map(x->x*2).collect(toList())\` |
| \`sum(xs)\` | \`xs.stream().mapToInt(...).sum()\` |
| \`max(xs, key=f)\` | \`xs.stream().max(comparingInt(f::apply))\` |
| \`{k: list(g) for k,g in groupby(xs, key)}\` | \`xs.stream().collect(groupingBy(key))\` |

Python list comprehensions are shorter; Java Stream chaining is longer but **after JIT compilation is as fast as hand-written for loops**, and supports \`.parallelStream()\` to automatically distribute across cores.

## 38.10 Try It`
},

90:{
cpp:``,
c:``,
java:`# Chapter 39: Optional and Null Safety

Tony Hoare called null references his "billion-dollar mistake". Java 8 added \`Optional\` to mitigate this.

## 39.1 The Pain of NullPointerException

\`\`\`java
User user = findUser(id);
String name = user.getName();    // if user is null → crash
String upper = name.toUpperCase();
\`\`\`

Requires a chain of null checks:
\`\`\`java
if (user != null) {
    String name = user.getName();
    if (name != null) {
        String upper = name.toUpperCase();
        // ...
    }
}
\`\`\`

## 39.2 Optional Expresses "Might Not Exist"

\`\`\`java
import java.util.Optional;

Optional<User> userOpt = findUser(id);     // function returns Optional
userOpt.ifPresent(u -> System.out.println(u.getName()));
String name = userOpt.map(User::getName).orElse("Unknown");
\`\`\`

## 39.3 Creating Optional

\`\`\`java
Optional<String> a = Optional.of("hello");        // cannot hold null
Optional<String> b = Optional.ofNullable(maybeNull); // accepts null
Optional<String> c = Optional.empty();
\`\`\`

## 39.4 Getting Values

\`\`\`java
opt.get();                       // throws NoSuchElementException if empty — don't use!
opt.orElse("default");
opt.orElseGet(() -> compute());  // only computes when empty
opt.orElseThrow(() -> new ...);
opt.ifPresent(v -> ...);
opt.isPresent();
opt.isEmpty();                   // Java 11+
\`\`\`

## 39.5 map / flatMap / filter

\`\`\`java
Optional<Integer> length = findUser(id)
    .map(User::getName)              // get name (still Optional)
    .map(String::length);

Optional<User> result = findUser(id)
    .flatMap(this::findManager)      // findManager also returns Optional
    .filter(u -> u.getAge() > 18);
\`\`\`

## 39.6 How NOT to Use Optional

❌ As class fields (breaks serialization)
❌ As function parameters (better to pass null directly or use overloading)
❌ Wrapping primitive types (use OptionalInt / OptionalLong / OptionalDouble)

✅ As function return values (clearly indicates "might not exist")

## 39.7 Chained Optional Example

\`\`\`java
String city = Optional.ofNullable(user)
    .map(User::getAddress)
    .map(Address::getCity)
    .map(String::toUpperCase)
    .orElse("UNKNOWN");
\`\`\`

If any link in the chain is null → result is "UNKNOWN", no NPE. Equivalent to Kotlin's \`user?.address?.city?.uppercase() ?: "UNKNOWN"\`.

## 39.8 Optional vs null vs Exception

| Situation | Recommendation |
|-----------|---------------|
| Function might not find a result | \`Optional<T>\` |
| Internal field not yet initialized | null + private |
| Should never happen error | throw RuntimeException |
| Expected error (file not found) | checked exception |

Don't use Optional as a cure-all for every null — overuse makes code long and messy.

## 39.9 Try It`
},

91:{
cpp:``,
c:``,
java:`# Chapter 40: Multithreading — Thread / Runnable

Java has supported multithreading from day one.

## 40.1 Two Ways to Start

\`\`\`java
// 1. Implement Runnable
Runnable task = () -> System.out.println("hello from " + Thread.currentThread().getName());
Thread t1 = new Thread(task);
t1.start();          // start; t1.run() runs in another thread

// 2. Extend Thread (not recommended — can only extend one class)
class MyThread extends Thread {
    public void run() { System.out.println("running"); }
}
new MyThread().start();
\`\`\`

> ⚠️ **\`start()\` vs \`run()\`**: start() truly creates a new thread; run() is just a normal function call in the current thread.

## 40.2 Waiting for Thread to Finish

\`\`\`java
Thread t = new Thread(task);
t.start();
t.join();           // blocks until t finishes
\`\`\`

## 40.3 The Problem with Shared Data

\`\`\`java
class Counter {
    int n = 0;
    void inc() { n++; }      // not atomic!
}
Counter c = new Counter();
Runnable task = () -> { for (int i = 0; i < 100000; i++) c.inc(); };
Thread t1 = new Thread(task), t2 = new Thread(task);
t1.start(); t2.start(); t1.join(); t2.join();
System.out.println(c.n);     // might not be 200000
\`\`\`

## 40.4 synchronized Solves It

\`\`\`java
synchronized void inc() { n++; }
\`\`\`

Or block form:
\`\`\`java
void inc() {
    synchronized(this) { n++; }
}
\`\`\`

> synchronized is a Java built-in keyword that auto-manages locks — safer than a mutex API.

## 40.5 ExecutorService — Don't Manage Threads Yourself

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

**Modern Java concurrent code uses pools, not direct new Thread**.

## 40.6 Future — Getting Return Values

\`\`\`java
Future<Integer> future = pool.submit(() -> {
    Thread.sleep(1000);
    return 42;
});
Integer result = future.get();   // blocks waiting for result
\`\`\`

## 40.7 volatile and Memory Model

\`\`\`java
volatile boolean stop = false;   // changes by other threads are immediately visible
\`\`\`

Without \`volatile\`, the compiler/CPU may optimize \`while(!stop)\` to read once and cache. \`volatile\` forces reading from main memory every time.

> volatile only guarantees **visibility**, not **atomicity**! For atomic operations use AtomicInteger.

## 40.8 ThreadLocal

Each thread has its own copy:

\`\`\`java
ThreadLocal<SimpleDateFormat> fmt = ThreadLocal.withInitial(
    () -> new SimpleDateFormat("yyyy-MM-dd"));
String s = fmt.get().format(new Date());
\`\`\`

SimpleDateFormat is not thread-safe → use ThreadLocal to give each thread its own copy, avoiding sharing issues.

## 40.9 Virtual Threads (Java 21+)

\`\`\`java
Thread.startVirtualThread(() -> System.out.println("virtual"));
\`\`\`

A million virtual threads is no problem — corresponds to Go's goroutines. A game changer for I/O-intensive tasks.

## 40.10 Try It`
},

92:{
cpp:``,
c:``,
java:`# Chapter 41: Concurrency Tools — Lock / Atomic

\`java.util.concurrent\` provides more flexible concurrency tools than synchronized.

## 41.1 ReentrantLock

More powerful than synchronized:
\`\`\`java
import java.util.concurrent.locks.*;

Lock lock = new ReentrantLock();

void inc() {
    lock.lock();
    try {
        n++;
    } finally {
        lock.unlock();       // must unlock in finally
    }
}
\`\`\`

Features:
- \`tryLock()\` — try to acquire lock, doesn't block on failure
- \`tryLock(1, TimeUnit.SECONDS)\` — wait 1 second
- \`lockInterruptibly()\` — can be interrupted

## 41.2 ReadWriteLock

When reads far outnumber writes:
\`\`\`java
ReadWriteLock rwLock = new ReentrantReadWriteLock();
Lock readLock = rwLock.readLock();
Lock writeLock = rwLock.writeLock();
\`\`\`

Multiple reader threads can hold read lock simultaneously; write lock is exclusive.

## 41.3 AtomicInteger / AtomicReference

\`\`\`java
import java.util.concurrent.atomic.*;

AtomicInteger counter = new AtomicInteger(0);
counter.incrementAndGet();          // atomic ++
counter.compareAndSet(5, 10);       // if value is 5, set to 10 (CAS)
\`\`\`

> Implemented with CAS — much faster than synchronized.

## 41.4 ConcurrentHashMap

\`\`\`java
ConcurrentHashMap<String, Integer> map = new ConcurrentHashMap<>();
map.put("a", 1);
map.compute("a", (k, v) -> v + 1);       // atomic update
map.merge("b", 1, Integer::sum);         // if absent put 1, else add 1
\`\`\`

Replaces HashMap under concurrency — uses segment locking internally.

## 41.5 CountDownLatch — Wait for Multiple Threads

\`\`\`java
CountDownLatch latch = new CountDownLatch(3);
for (int i = 0; i < 3; i++) {
    new Thread(() -> {
        // do work
        latch.countDown();
    }).start();
}
latch.await();        // waits until all 3 have called countDown
\`\`\`

## 41.6 Semaphore — Limit Concurrency

\`\`\`java
Semaphore sem = new Semaphore(5);     // at most 5 running simultaneously
sem.acquire();
try { /* restricted resource */ }
finally { sem.release(); }
\`\`\`

## 41.7 BlockingQueue — Producer-Consumer

\`\`\`java
BlockingQueue<Integer> q = new LinkedBlockingQueue<>();
// producer
new Thread(() -> { q.put(42); }).start();
// consumer
new Thread(() -> { Integer x = q.take(); }).start();
\`\`\`

\`take()\` blocks when queue is empty; \`put()\` blocks when full.

## 41.8 CompletableFuture — Chained Async

\`\`\`java
CompletableFuture
    .supplyAsync(() -> fetchUser(id))
    .thenApply(User::getName)
    .thenAccept(System.out::println)
    .exceptionally(e -> { e.printStackTrace(); return null; });
\`\`\`

Similar to JavaScript Promise — doesn't block the main thread. Common in microservices and I/O pipelines.

## 41.9 Concurrency Tools Quick Reference

| Goal | Use |
|------|-----|
| Mutual exclusion | synchronized / ReentrantLock |
| Counter | AtomicInteger / LongAdder |
| Wait for multiple threads | CountDownLatch / Phaser |
| Rate limiting | Semaphore |
| Producer-consumer | BlockingQueue |
| Async result | Future / CompletableFuture |
| Thread-safe Map | ConcurrentHashMap |
| Shared boolean | AtomicBoolean / volatile |

## 41.10 Try It`
},

93:{
cpp:``,
c:``,
java:`# Chapter 42: Annotations and Reflection

Java's two main metaprogramming tools: annotations + reflection.

## 42.1 Built-in Annotations

\`\`\`java
@Override               // tells compiler: this overrides parent class
@Deprecated             // marks as deprecated
@SuppressWarnings("unchecked")    // suppress specific warnings
@FunctionalInterface    // marks interface with exactly one abstract method
\`\`\`

Not writing \`@Override\` still runs, but if you misspell the name and don't actually override — the compiler catches it for you.

## 42.2 Reflection: Get Type Info at Runtime

\`\`\`java
Class<?> cls = obj.getClass();
String name = cls.getName();
Field[] fields = cls.getDeclaredFields();
Method[] methods = cls.getDeclaredMethods();

// Dynamic invocation
Method m = cls.getMethod("hello", String.class);
m.invoke(obj, "world");

// Dynamic instantiation
Constructor<?> ctor = cls.getConstructor();
Object inst = ctor.newInstance();
\`\`\`

> Reflection is slow and bypasses compile-time checks — but frameworks (Spring, JUnit) use it extensively.

## 42.3 Custom Annotations

\`\`\`java
import java.lang.annotation.*;

@Retention(RetentionPolicy.RUNTIME)    // visible at runtime
@Target(ElementType.METHOD)             // only for methods
@interface Test {
    String name() default "";
}

class Demo {
    @Test(name = "addition")
    void test1() { ... }
}
\`\`\`

## 42.4 Processing Annotations with Reflection

\`\`\`java
for (Method m : Demo.class.getDeclaredMethods()) {
    Test t = m.getAnnotation(Test.class);
    if (t != null) {
        System.out.println("Running test: " + t.name());
        m.invoke(new Demo());
    }
}
\`\`\`

JUnit works roughly this way — finds methods marked with \`@Test\` and executes them automatically.

## 42.5 Common Uses of Reflection

- **DI containers** (Spring): inject objects based on \`@Autowired\`
- **ORM** (Hibernate): map database based on \`@Entity\` \`@Column\`
- **Serialization** (Jackson, Gson): convert JSON ↔ Object based on field names and types
- **Test frameworks** (JUnit): find methods marked with \`@Test\`

## 42.6 The Cost

- 10–100× slower than normal calls
- Compile-time errors become runtime errors
- IDE struggles to trace call relationships

> Business logic **should not** use reflection; it's a good tool when used appropriately at the framework layer.

## 42.7 Dynamic Proxy

\`\`\`java
import java.lang.reflect.*;

InvocationHandler h = (proxy, method, args) -> {
    System.out.println("calling " + method.getName());
    return null;
};
Runnable r = (Runnable) Proxy.newProxyInstance(
    cl.getClassLoader(), new Class[]{Runnable.class}, h);
r.run();   // prints "calling run"
\`\`\`

Spring AOP and Mockito both use this to intercept method calls.

## 42.8 Reflection Performance Tips

- **Cache** \`Method\` objects — don't call \`getMethod\` every time
- Use \`MethodHandle\` (Java 7+) — 5–10× faster than reflection
- JIT inlines repeated reflection calls on hot paths, so it's not as bad as you'd think

## 42.9 Try It`
},

94:{
cpp:``,
c:``,
java:`# Chapter 43: JVM and GC Fundamentals

Understanding the JVM is key to writing high-performance Java.

## 43.1 From .java to Execution

\`\`\`
.java  --javac-->  .class (bytecode)  --java-->  JVM interpret/JIT compile  -->  CPU
\`\`\`

1. \`javac\` compiles source code into bytecode (cross-platform intermediate code)
2. \`java\` command starts the JVM, loads .class
3. JVM interprets bytecode; hot paths are JIT-compiled to machine code

## 43.2 Memory Regions

| Region | Contents | On failure |
|--------|----------|------------|
| **Heap** | Objects (created with \`new\`) | OutOfMemoryError |
| **Stack** | Local variables, function calls | StackOverflowError |
| **Metaspace** | Class and method metadata | OutOfMemoryError |
| **PC Register** | Current execution position | - |

\`-Xms512m -Xmx2g\` = heap starts at 512MB, maximum 2GB.

## 43.3 Object Lifecycle

\`\`\`java
String s = new String("hello");   // on heap
\`\`\`

When nothing references it → **garbage**, waiting to be collected by GC.

> The biggest difference between Java and C/C++: **no need to free manually**. But the cost is GC pauses.

## 43.4 How GC Works

Mainstream: **Generational GC**
- **Young Generation** (Eden + 2 Survivors): newly created objects
- **Old Generation**: long-lived objects

**New objects die quickly** → Young GC is frequent but fast (copy algorithm)
**Survivors** → promoted to Old → Full GC less frequent but slow

## 43.5 GC Algorithms

| GC | Characteristics |
|----|----------------|
| **Serial** | Single-threaded, stop-the-world |
| **Parallel** | Multi-threaded, throughput-oriented |
| **G1** | Region-based, predictable pauses (default since Java 9) |
| **ZGC / Shenandoah** | Pauses <10ms, suitable for large heaps |

## 43.6 Common Issues

**OutOfMemoryError**:
- Not enough heap → increase \`-Xmx\`, find memory leak
- Not enough Metaspace → too many dynamically loaded classes

**Long GC pauses**:
- Check GC log: \`-Xlog:gc*\`
- Switch to G1 or ZGC
- Reduce object allocation (pool reuse)

**Memory Leak in a GC Language**:
Static collections, unclosed resources, listeners not removed — all keep objects alive when they shouldn't be.

## 43.7 Comparison with Python

| | Python | Java |
|---|---|---|
| Compilation | bytecode (.pyc) | bytecode (.class) |
| Execution | CPython interpretation | JVM interpretation + JIT |
| GC | reference counting + GC | pure GC |
| Startup speed | Fast | Slow (JVM warm-up) |
| Long-running | Not much optimization | JIT gets faster over time |

## 43.8 Tools for Observing the JVM

| Tool | Purpose |
|------|---------|
| \`jps\` | List JVM processes |
| \`jstack <pid>\` | Dump thread stack (find deadlocks) |
| \`jmap -heap <pid>\` | Heap usage status |
| \`jhsdb jmap --histo --pid <pid>\` | Object count histogram (find leaks) |
| \`jfr\` (Java Flight Recorder) | Low-overhead profiler |
| VisualVM / JConsole | Graphical monitoring |
| \`-verbose:gc\` | Print log on each GC |

## 43.9 OutOfMemoryError Investigation SOP

1. \`-XX:+HeapDumpOnOutOfMemoryError -XX:HeapDumpPath=./dump.hprof\` to capture dump
2. Open dump with **MAT** (Eclipse Memory Analyzer) to find objects with largest retained heap
3. Trace back who holds them (dominator tree)
4. Fix: release references, move to weak references (WeakHashMap), limit collection size

## 43.10 Tips for Writing High-Performance Java

- **Allocate less** — object pools, reuse StringBuilder
- **Avoid boxing** — \`int\` is 5× faster than \`Integer\`
- **Small functions** — give JIT opportunities to inline
- **Profile before optimizing** — don't optimize by gut feeling

## 🧠 Design Motivation: Why Does the JVM "Get Faster Over Time"?

C/C++ converts code to machine code at compile time — fast but inflexible. Python interprets line by line at runtime — flexible but slow.

The JVM took a third path: **interpret first, JIT-compile hot paths later**.

At startup, the JVM uses an interpreter to execute bytecode step by step, while a profiler watches which methods are called more than a threshold (typically 10,000 times). These "hot paths" are JIT-compiled to machine code — optimized specifically for the **observed runtime behavior** — even more aggressively than what C++ can do at compile time.

For example: the JIT can observe that a \`virtual\` method call always dispatches to the same subclass, and inline it. C++ at compile time can't know this.

**Practical implications**:
- Short-lived programs (CLI tools, scripts): JVM never gets hot, C/Python are more suitable
- Long-running services (web servers, databases): JVM has an advantage, reaching peak performance after a few minutes
- This is also why Spring Boot's first request is slow but subsequent ones are fast
`
},

};

// 自 tutorial.html 抽出的資料檔（由頁面以 <script src> 載入）
const CHAPTERS_EN_RAW = [
﻿{id:0,title:"What Is Programming?",tag:"Intro",content:`
# Chapter 0: What Is Programming?


Welcome! This is the first chapter for those who have **never programmed before**. Reading takes only 5 minutes.


## 🤔 Program = A "Recipe for the Computer"


You write steps → Computer follows → Gives you result. Like a cooking recipe:


\`\`\`
1. Crack egg into bowl
2. Add salt
3. Pour into pan and fry
\`\`\`


A computer recipe looks like this:


\`\`\`python
name = "Alice"
print("Hello,", name)
\`\`\`


## 🧰 Three Sections of This Tutorial


| Area | Purpose |
|------|---------|
| **Left directory** | 21 chapters, easy to hard, follow order |
| **Middle (here)** | Lesson text + "Try it" + quiz |
| **Right editor** | Real code you can modify and run |


## ▶️ What Happens When You Press "Run"


There is a green **▶ Run** button on the top right.
- Press it, the computer "reads" the code on the right and follows it.
- The result appears in the "📤 Output" box at bottom right.
- **Don't worry about mistakes**! We automatically translate error messages into English.


## 🎯 Your Goal (no need to memorize)


After reading these 21 chapters, you will:
- Understand Python code
- Write programs to solve small problems
- Be ready for APCS elementary level questions


> **Tip**: There is a "**Beginner Mode**" switch on the top right (green = on). When on:
> - Only Python is shown (no C++/Java distraction)
> - You must pass each chapter's quiz to unlock the next chapter
> - Errors are automatically explained in English
>
> When you're comfortable, turn it off to see all chapters and other languages.


## 👇 Before You Start, Press "Run" Once


On the right, a "Hello" program is already prepared. Press the **▶ Run** button at the top right and see what happens.


See "Hello! I've taken the first step in learning to program 👋" in the output box? Congratulations, you just made the computer do its first thing!


Now go to the quiz below. Answer correctly to unlock Chapter 1.
## 🗺 Learning Roadmap

| Track | Chapters | Contents |
|------|------|------|
| 📘 APCS Prep | 0–26 | syntax → algorithms → contest patterns |
| 🛠 Practical | 27–31 | files, modules, OOP, testing |
| 🚀 Projects | 32–35 | CLI / CSV / API / game |
| 🕷📊🤖🎮 Specialty tracks | 36–67 | scraping / data analysis / bots / pygame (pick any) |
| 📗🔥 New APCS & advanced | 68–70 | exam literacy, fast power, divide & conquer |
| ⚡🔧☕ Language tracks | 71–94 | appear when you switch to C++ / C / Java mode |
| 🧠 Core concepts | 95–97 | object model, function parameters, reading docs |

Three suggested paths:
- **APCS exam**: 0–26 in order → 68–70 → grind the judge problems
- **Build your own project**: 0–20 → 27–35 → pick one specialty track (36–67)
- **Second language**: finish Python basics 0–35 → switch the language tab, redo the basics in the new language + language tracks from 71

> 💡 Best value: read chapters 95–97 after finishing 0–20, before starting projects.

`,
example:`# This is a "comment" – lines starting with # are ignored by the computer
# The following line is a real instruction: print some text
print("Hello! I've taken the first step in learning to program 👋")


# You can also change the text and press "Run" again
print("My name is: ______")
`},


{id:1,title:"Variables and Data Types",tag:"Basic",content:`
# Chapter 1: Variables and Data Types


## 1.1 What is a Variable?
A variable is a "box that remembers a value". In Python, use \`=\` to "paste" the right value to the left name.


\`\`\`python
age = 17
name = "Alice"
height = 168.5
\`\`\`


## 1.2 Four Basic Data Types


| Type | Name | Example |
|------|------|---------|
| int | Integer | \`42\`, \`-7\`, \`0\` |
| float | Floating-point | \`3.14\`, \`-0.5\` |
| str | String | \`"hello"\`, \`'APCS'\` |
| bool | Boolean | \`True\`, \`False\` |


Use \`type()\` to see the type:


\`\`\`python
print(type(42))        # <class 'int'>
print(type(3.14))      # <class 'float'>
print(type("hi"))      # <class 'str'>
print(type(True))      # <class 'bool'>
\`\`\`


## 1.3 Type Conversion
- \`int("42")\` → \`42\` (string to integer)
- \`str(42)\` → \`"42"\` (integer to string)
- \`float("3.14")\` → \`3.14\`


> **APCS Focus**: \`input()\` always returns a string. You must use \`int()\` or \`float()\` to convert to numbers before calculations!


## 1.4 Try It
Press "Run" on the right:
`,
example:`# Try modifying age
age = 17
name = "Xiao Ming"
print(name, "is", age, "years old")
print(name, "will be", age + 1, "years old next year")
`},


{id:2,title:"Input and Output",tag:"Basic",content:`
# Chapter 2: Input and Output (I/O)


90% of APCS implementation problems require reading data from stdin and outputting with print.


## 2.1 print() Output
\`\`\`python
print("Hello")           # Hello
print("a", "b", "c")     # a b c   (space separator by default)
print(1, 2, sep=",")     # 1,2     (change to comma)
print("end", end="!")    # end!    (default newline, changed to !)
\`\`\`


## 2.2 input() Input
\`input()\` reads **one whole line** and returns a **string**.


\`\`\`python
name = input()             # read one line as string
age  = int(input())        # read one line and convert to integer
\`\`\`


## 2.3 Multiple Numbers on One Line
Most common pattern: first line n, second line n numbers.
\`\`\`python
n = int(input())
nums = list(map(int, input().split()))
print(nums)
\`\`\`


\`split()\` splits the string by whitespace into a list, \`map(int, ...)\` converts each element to int.


## 2.4 Multiple Lines of Input
\`\`\`python
n = int(input())
for _ in range(n):
    line = input()
    print(line)
\`\`\`


> **APCS Trap**: If the problem does not give n, you may need to read until EOF.
> Use \`try: ... except EOFError: break\` or \`for line in sys.stdin:\`.


## 2.5 Try It
Fill the right stdin with: \`5\` newline \`1 2 3 4 5\`, then run:
`,
example:`n = int(input())
nums = list(map(int, input().split()))
print("Sum:", sum(nums))
print("Average:", sum(nums) / n)
print("Max:", max(nums))
print("Min:", min(nums))
`,stdin:`5
1 2 3 4 5
`},


{id:3,title:"Operators and Expressions",tag:"Basic",content:`
# Chapter 3: Operators and Expressions


## 3.1 Arithmetic Operators


| Operator | Meaning | Example | Result |
|----------|---------|---------|--------|
| \`+\` | Addition | \`3+2\` | 5 |
| \`-\` | Subtraction | \`3-2\` | 1 |
| \`*\` | Multiplication | \`3*2\` | 6 |
| \`/\` | Division (float) | \`7/2\` | 3.5 |
| \`//\` | Integer division | \`7//2\` | 3 |
| \`%\` | Modulo (remainder) | \`7%2\` | 1 |
| \`**\` | Exponentiation | \`2**10\` | 1024 |


## 3.2 Comparison and Logic


\`==\` \`!=\` \`<\` \`>\` \`<=\` \`>=\` result in \`True\` / \`False\`.


\`\`\`python
print(3 > 2 and 5 < 10)   # True
print(3 > 2 or 5 > 10)    # True
print(not True)           # False
\`\`\`


## 3.3 Common APCS Techniques


### Units, Tens, Hundreds
\`\`\`python
n = 263
print(n % 10)     # 3 (units)
print(n // 10 % 10)  # 6 (tens)
print(n // 100)   # 2 (hundreds)
\`\`\`


### Even/Odd Check
\`\`\`python
if n % 2 == 0:
    print("Even")
\`\`\`


### Extract Digits Repeatedly
\`\`\`python
n = 12345
while n > 0:
    print(n % 10)  # 5,4,3,2,1
    n //= 10
\`\`\`


## 3.4 Try It
`,
example:`# Decompose a 3-digit number
n = 752
hundreds = n // 100
tens = n // 10 % 10
ones = n % 10
print(f"Hundreds={hundreds}, Tens={tens}, Ones={ones}")
print(f"Sum={hundreds+tens+ones}")
`},


{id:4,title:"Conditional Statements if/elif/else",tag:"Flow",content:`
# Chapter 4: Conditional Statements


## 4.1 Basic Syntax
\`\`\`python
if score >= 60:
    print("Pass")
elif score >= 50:
    print("Remedial exam")
else:
    print("Fail")
\`\`\`


> **Important**: Python uses **indentation** to define blocks. Use **4 spaces** or 1 tab, but do not mix.


## 4.2 Nested Conditions
\`\`\`python
if age >= 18:
    if has_license:
        print("Can drive")
    else:
        print("Get a license first")
\`\`\`


## 4.3 Conditional Expression (Ternary)
\`\`\`python
result = "Pass" if score >= 60 else "Fail"
\`\`\`


## 4.4 APCS Example: Triangle Classification
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


> **Tip**: Use \`sorted()\` to put the largest side as c, saving many if statements.


## 4.5 Try It
`,
example:`# BMI Classification
weight = 65
height = 1.70
bmi = weight / (height ** 2)
print(f"BMI = {bmi:.1f}")


if bmi < 18.5:
    print("Underweight")
elif bmi < 24:
    print("Normal")
elif bmi < 27:
    print("Overweight")
else:
    print("Obese")
`},


{id:5,title:"Loops for / while",tag:"Flow",content:`
# Chapter 5: Loops


## 5.1 for Loop
\`\`\`python
for i in range(5):       # 0,1,2,3,4
    print(i)


for i in range(1, 6):    # 1,2,3,4,5
    print(i)


for i in range(0, 10, 2):  # 0,2,4,6,8
    print(i)
\`\`\`


## 5.2 Iterating over list / string
\`\`\`python
for x in [10, 20, 30]:
    print(x)


for ch in "APCS":
    print(ch)
\`\`\`


To also get the index:
\`\`\`python
for i, x in enumerate([10, 20, 30]):
    print(i, x)   # 0 10, 1 20, 2 30
\`\`\`


## 5.3 while Loop
\`\`\`python
n = 10
while n > 0:
    print(n)
    n -= 1
\`\`\`


## 5.4 break / continue
- \`break\`: exit the loop immediately
- \`continue\`: skip the rest and go to next iteration


\`\`\`python
for i in range(10):
    if i == 5: break          # prints up to 4 then stops
    if i % 2 == 0: continue    # skip even numbers
    print(i)
\`\`\`


## 5.5 APCS Example: Find Maximum
\`\`\`python
nums = list(map(int, input().split()))
best = nums[0]
for x in nums:
    if x > best:
        best = x
print(best)
\`\`\`


Of course \`max(nums)\` is faster, but understanding the loop logic is important.


## 5.6 Try It


---

## 📝 Additional Notes (Improved)

## 5.2 Iterating with index (unpacking explained)


**Manual index tracking:**
\`\`\`python
my_list = [10, 20, 30]
i = 0
for x in my_list:
    print(i, x)
    i = i + 1
\`\`\`


**Using \`enumerate\` (simpler):**
\`\`\`python
for i, x in enumerate(my_list):
    print(i, x)
\`\`\`
\`enumerate\` produces pairs: first pair is (0, 10), second (1, 20), etc.  
Python allows putting the two values directly into \`i\` and \`x\` – this is called **unpacking**.


**You can also get the whole pair first:**
\`\`\`python
for pair in enumerate(my_list):
    i = pair[0]
    x = pair[1]
    print(i, x)
\`\`\`


## 🎯 The \`stop\` value in \`range(start, stop)\` is **excluded**


\`\`\`python
# range(3)  → 0, 1, 2   (no 3)
# range(1, 5) → 1, 2, 3, 4 (no 5)
\`\`\`
**Memory trick**: \`range(a, b)\` produces a, a+1, ..., b-1 – it stops **before** b.

`,
example:`# Print multiplication table (3-5)
for i in range(3, 6):
    for j in range(1, 10):
        print(f"{i}x{j}={i*j}", end="  ")
    print()
`},


{id:6,title:"String Handling",tag:"Data",content:`
# Chapter 6: Strings


## 6.1 String Basics


\`\`\`python
s = "Hello, APCS"
print(len(s))      # 11
print(s[0])        # H
print(s[-1])       # S
print(s.lower())   # hello, apcs
print(s.upper())   # HELLO, APCS
\`\`\`


## 6.2 Slicing
\`s[start:end]\`, takes from start to end-1.


\`\`\`python
s = "ABCDEFG"
print(s[0:3])    # ABC
print(s[2:])     # CDEFG
print(s[:3])     # ABC
print(s[::-1])   # GFEDCBA  (reverse!)
\`\`\`


## 6.3 Common Methods


| Method | Purpose |
|--------|---------|
| \`s.split()\` | split into list |
| \`s.strip()\` | remove leading/trailing whitespace |
| \`s.replace(a,b)\` | replace |
| \`s.count(c)\` | count occurrences of c |
| \`s.find(c)\` | find position (returns -1 if not found) |
| \`",".join(L)\` | join list into string |
| \`s.isdigit()\` | all digits? |
| \`s.isalpha()\` | all letters? |


## 6.4 APCS Example: Secret Difference
\`\`\`python
s = input()
A = sum(int(s[-i-1]) for i in range(len(s)) if i % 2 == 0)  # odd positions
B = sum(int(s[-i-1]) for i in range(len(s)) if i % 2 == 1)  # even positions
print(abs(A - B))
\`\`\`


## 6.5 Try It


---

## 📝 Additional Notes (Improved)

## 6.2 Slicing – from manual reversal to slice magic


**Manual reversal with a loop:**
\`\`\`python
s = "ABCDE"
reversed_str = ""
for ch in s:
    reversed_str = ch + reversed_str   # prepend each character
print(reversed_str)   # "EDCBA"
\`\`\`


**Python slice notation:**
\`\`\`python
s = "ABCDE"
print(s[1:4])    # "BCD"  (indices 1 to 3)
print(s[::2])    # "ACE"  (step 2)
print(s[::-1])   # "EDCBA" (step -1 → go backwards, reverse)
\`\`\`
Slice format: \`[start:stop:step]\`
- start omitted → from beginning
- stop omitted → until the end
- step positive → move right; negative → move left


> 🚫 **Important**: strings are **immutable** – you cannot change a character in place.  
> \`\`\`python
> s = "hello"
> s[0] = "H"   # ❌ TypeError
> \`\`\`
> To modify, you must create a new string: \`s = "H" + s[1:]\`.

`,
example:`s = "Hello APCS Python"
print("Length:", len(s))
print("Reversed:", s[::-1])
print("Uppercase:", s.upper())
print("Number of words:", len(s.split()))
print("Replace APCS with Program:", s.replace("APCS", "Program"))
`},


{id:7,title:"List (1D Array)",tag:"Data",content:`
# Chapter 7: List


List is the most important data structure for APCS, storing a "sequence" of data.


## 7.1 Creating Lists
\`\`\`python
a = [10, 20, 30, 40]
b = list(map(int, input().split()))   # read from input
c = [0] * 5                            # [0,0,0,0,0]
d = list(range(1, 6))                  # [1,2,3,4,5]
e = [i*i for i in range(5)]            # [0,1,4,9,16]  (list comprehension)
\`\`\`


## 7.2 Access and Modify
\`\`\`python
a[0] = 100
print(a[-1])   # last element
print(len(a))
\`\`\`


## 7.3 Common Methods


| Method | Purpose | Example |
|--------|---------|---------|
| \`a.append(x)\` | add at end | \`[1,2].append(3)\` → \`[1,2,3]\` |
| \`a.pop()\` | remove from end | |
| \`a.sort()\` | sort in place | |
| \`sorted(a)\` | return new sorted list | |
| \`a.reverse()\` | reverse in place | |
| \`a.count(x)\` | count occurrences | |
| \`a.index(x)\` | find position | |
| \`sum(a)\` \`max(a)\` \`min(a)\` | | |


## 7.4 APCS Example: Score Indicator
\`\`\`python
n = int(input())
scores = sorted(map(int, input().split()))
print(*scores)


fail = [x for x in scores if x < 60]
print(max(fail) if fail else "best case")


passed = [x for x in scores if x >= 60]
print(min(passed) if passed else "worst case")
\`\`\`


> **Tip**: list comprehension \`[x for x in L if cond]\` is a high-frequency APCS pattern.


## 7.5 Try It


---

## 📝 Additional Notes (Improved)

## 7.4 Three ways to print a list


\`\`\`python
scores = [30, 55, 60, 88]


# Method 1: loop, add spaces manually
for s in scores:
    print(s, end=" ")
print()   # newline


# Method 2: print(scores) gives [30, 55, 60, 88] with brackets and commas


# Method 3: use * unpacking – splits the list into separate arguments
print(*scores)   # same as print(30, 55, 60, 88)


# You can also set a custom separator
print(*scores, sep=", ")   # 30, 55, 60, 88
\`\`\`


## 📊 Comparison: string vs list


| Feature | string (str) | list |
|---------|--------------|------|
| Can modify elements? | ❌ No | ✅ Yes |
| Slice returns | new string | new list |
| Common methods | \`split\`, \`replace\`, \`find\` | \`append\`, \`pop\`, \`sort\` |

`,
example:`nums = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3]
print("Original:", nums)
print("Sorted:", sorted(nums))
print("Sum:", sum(nums))
print("Max:", max(nums))
print("Count of 5:", nums.count(5))
print("Evens:", [x for x in nums if x % 2 == 0])
`},


{id:8,title:"2D Arrays",tag:"Data",content:`
# Chapter 8: 2D Arrays


## 8.1 Creating 2D Lists
\`\`\`python
# 3x4 matrix of zeros
grid = [[0]*4 for _ in range(3)]
# Do NOT write [[0]*4]*3 — that creates 3 references to the same row!
\`\`\`


## 8.2 Reading 2D Data
Common pattern: first line n m, then n lines each with m numbers.


\`\`\`python
n, m = map(int, input().split())
grid = []
for _ in range(n):
    row = list(map(int, input().split()))
    grid.append(row)
\`\`\`


Or in one line:
\`\`\`python
grid = [list(map(int, input().split())) for _ in range(n)]
\`\`\`


## 8.3 Traversal
\`\`\`python
for i in range(n):
    for j in range(m):
        print(grid[i][j], end=" ")
    print()
\`\`\`


## 8.4 APCS Example: Diagonal Sums
\`\`\`python
n = int(input())
g = [list(map(int, input().split())) for _ in range(n)]


main = sum(g[i][i] for i in range(n))
anti = sum(g[i][n-1-i] for i in range(n))
print(main, anti)
\`\`\`


## 8.5 Four Directions (Up, Down, Left, Right)
\`\`\`python
dx = [-1, 1, 0, 0]   # up, down, left, right
dy = [0, 0, -1, 1]


for d in range(4):
    ni, nj = i + dx[d], j + dy[d]
    if 0 <= ni < n and 0 <= nj < m:
        # valid neighbor
        pass
\`\`\`


## 8.6 Try It


---

## 📝 Additional Notes (Improved)

## ❌ Wrong way (never do this)


\`\`\`python
grid = [[0]*3] * 2   # appears to be 2 rows, 3 columns
grid[0][0] = 1
print(grid)  # prints [[1, 0, 0], [1, 0, 0]]  ← second row also changed!
\`\`\`


**Why?**  
\`[[0]*3]\` creates one list; \`*2\` duplicates the **reference** to that same list. Both rows point to the same memory location.


## ✅ Correct way


\`\`\`python
grid = [[0]*3 for _ in range(2)]  # list comprehension creates independent rows
grid[0][0] = 1
print(grid)  # [[1, 0, 0], [0, 0, 0]]  ← correct
\`\`\`

`,
example:`# Print a chessboard pattern
n = 5
g = [[0]*n for _ in range(n)]
for i in range(n):
    for j in range(n):
        g[i][j] = (i + j) % 2


for row in g:
    print(' '.join(str(x) for x in row))
`},


{id:9,title:"Functions def",tag:"Structure",content:`
# Chapter 9: Functions


## 9.1 Why Functions?
- Reuse the same logic
- Break complex problems into smaller pieces
- Easier testing and debugging


## 9.2 Definition and Call
\`\`\`python
def add(a, b):
    return a + b


print(add(3, 5))   # 8
\`\`\`


## 9.3 Multiple Return Values
\`\`\`python
def min_max(lst):
    return min(lst), max(lst)


lo, hi = min_max([3, 1, 4, 1, 5, 9])
print(lo, hi)   # 1 9
\`\`\`


## 9.4 Default Parameters
\`\`\`python
def greet(name, greeting="Hello"):
    print(greeting, name)


greet("Alice")              # Hello Alice
greet("Bob", "Hi")          # Hi Bob
\`\`\`


## 9.5 APCS Example: Prime Check
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


> **APCS Tip**: Extract checking logic into a helper function; the main program becomes much clearer.


## 9.6 Introduction to Recursion
A function calling itself = recursion.
\`\`\`python
def fact(n):
    if n <= 1: return 1       # base case
    return n * fact(n-1)      # recursion


print(fact(5))   # 120
\`\`\`


## 9.7 Try It


---

## 📝 Additional Notes (Improved)

## 9.5 APCS Example: Prime check (with math explanation)


\`\`\`python
def is_prime(n):
    if n < 2:
        return False


    # We only need to check up to the square root of n.
    # Why? If n = a * b, one factor is always ≤ √n.
    # Example: 36 = 6*6, check up to 6; 36 = 4*9, 4 ≤ 6.
    limit = int(n ** 0.5)   # e.g. n=37, √37≈6.08, int=6
    # range(2, limit+1) includes 2,3,4,5,6
    for i in range(2, limit + 1):
        if n % i == 0:
            return False
    return True


print(is_prime(37))   # True
print(is_prime(36))   # False
\`\`\`


## Multiple return values and unpacking


\`\`\`python
def min_max(lst):
    return min(lst), max(lst)


# Beginner friendly
result = min_max([3,1,4])
small = result[0]   # 3
large = result[1]   # 4


# Pythonic unpacking
small, large = min_max([3,1,4])
# Number of variables on the left must match the number of returned values
\`\`\`

`,
example:`def is_prime(n):
    if n < 2: return False
    for i in range(2, int(n**0.5) + 1):
        if n % i == 0: return False
    return True


primes = [x for x in range(2, 50) if is_prime(x)]
print("Primes under 50:", primes)
print("Count:", len(primes))
`},


{id:10,title:"Dictionary and Set",tag:"Data",content:`
# Chapter 10: Dictionary and Set


## 10.1 Dict (Key-Value Pairs)
\`\`\`python
score = {"Alice": 90, "Bob": 75}
print(score["Alice"])         # 90
score["Cathy"] = 88           # add
score["Alice"] = 100          # modify
del score["Bob"]              # delete
print("Alice" in score)       # True
\`\`\`


Iteration:
\`\`\`python
for name, s in score.items():
    print(name, s)
\`\`\`


## 10.2 Counting: Counter / get
APCS often needs to count "how many times each character appears":


\`\`\`python
s = "ABBCAAB"
cnt = {}
for c in s:
    cnt[c] = cnt.get(c, 0) + 1
print(cnt)   # {'A': 3, 'B': 3, 'C': 1}
\`\`\`


Even shorter:
\`\`\`python
from collections import Counter
print(Counter("ABBCAAB"))
\`\`\`


## 10.3 Set (Unique elements)
\`\`\`python
nums = [1, 2, 2, 3, 3, 3, 4]
print(set(nums))         # {1, 2, 3, 4}
print(len(set(nums)))    # 4 (number of distinct elements)
\`\`\`


## 10.4 APCS Example: Fewest Distinct Letters
\`\`\`python
n = int(input())
best = None
for _ in range(n):
    s = input()
    k = len(set(s))   # number of distinct letters
    if best is None or k < best[0] or (k == best[0] and s < best[1]):
        best = (k, s)
print(best[1])
\`\`\`


## 10.5 Try It


---

## 📝 Additional Notes (Improved)

## 10.2 Counting: from manual to \`get\` to \`Counter\`


\`\`\`python
s = "ABBCAAB"


# ---------- Method 1: manual key existence check ----------
cnt = {}
for c in s:
    if c in cnt:
        cnt[c] = cnt[c] + 1
    else:
        cnt[c] = 1
print(cnt)   # {'A': 3, 'B': 3, 'C': 1}


# ---------- Method 2: using dict.get() for conciseness ----------
# dict.get(key, default) returns default if key does not exist
cnt = {}
for c in s:
    cnt[c] = cnt.get(c, 0) + 1
print(cnt)


# ---------- Method 3: collections.Counter (easiest) ----------
from collections import Counter
cnt = Counter(s)
print(cnt)   # Counter({'A':3, 'B':3, 'C':1})
\`\`\`

`,
example:`from collections import Counter


words = "the quick brown fox jumps over the lazy dog the fox".split()
cnt = Counter(words)
print("Word frequencies:", dict(cnt))
print("Most common:", cnt.most_common(3))
print("Number of distinct words:", len(cnt))
`},


{id:11,title:"Algorithm Basics",tag:"Advanced",content:`
# Chapter 11: Essential APCS Algorithms


## 11.1 Linear Search
\`\`\`python
def find(L, target):
    for i, x in enumerate(L):
        if x == target: return i
    return -1
\`\`\`


## 11.2 Sorting
Python's built-in \`sort()\` is enough for APCS elementary.


\`\`\`python
nums.sort()                       # ascending
nums.sort(reverse=True)           # descending
nums.sort(key=lambda x: -x)       # custom sort key


# Multi-condition sorting: first by score descending, then by name ascending
students.sort(key=lambda x: (-x[1], x[0]))
\`\`\`


## 11.3 Binary Search (Intermediate)
Works on **sorted** data.


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


Or use built-in: \`from bisect import bisect_left\`


## 11.4 Prefix Sum (Intermediate)
Makes "range sum" O(1).


\`\`\`python
a = [3, 1, 4, 1, 5, 9, 2, 6]
ps = [0]
for x in a:
    ps.append(ps[-1] + x)


# sum of a[l..r] inclusive, 0-indexed
def range_sum(l, r):
    return ps[r+1] - ps[l]
\`\`\`


## 11.5 Sieve of Eratosthenes (Prime Sieve)
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


## 11.7 Kadane — Maximum Subarray Sum 🔥 [Intermediate/Essential]
> When you see "maximum contiguous subarray sum", it's almost always Kadane.
> Core idea: For each position x, ask yourself "extend previous or restart here?"


\`\`\`python
def kadane(a):
    cur = best = a[0]
    for x in a[1:]:
        cur = max(x, cur + x)   # either restart or extend
        best = max(best, cur)
    return best
\`\`\`


**Trap**: If the problem requires "at least one element" and all numbers are negative, the answer is the largest negative number, not 0.
**Advanced (high-level)**: Extend to **2D Kadane** (fix left/right columns, reduce rows to 1D then run Kadane) → will be used in later chapters.


## 11.8 Try It


---

## 📝 Additional Notes (Improved)

## 11.4 Prefix Sum (from brute force to fast)


\`\`\`python
# Problem: often need the sum of a subarray from L to R
a = [3, 1, 4, 1, 5, 9, 2, 6]


# ---------- Method 1: compute each time (slow, O(n) per query) ----------
def range_sum_slow(L, R):
    total = 0
    for i in range(L, R+1):
        total += a[i]
    return total
print(range_sum_slow(2, 5))   # 4+1+5+9 = 19


# ---------- Method 2: prefix sum (precompute, O(1) per query) ----------
# ps[i] = sum of a[0] + a[1] + ... + a[i-1]
ps = [0]  # ps[0] = 0
for x in a:
    ps.append(ps[-1] + x)
# ps = [0, 3, 4, 8, 9, 14, 23, 25, 31]


def range_sum_fast(L, R):
    return ps[R+1] - ps[L]


print(range_sum_fast(2, 5))   # 19
\`\`\`


## 11.7 Kadane – Maximum Subarray Sum (full derivation)


**Problem**: Find a contiguous subarray with the largest sum.  
Example: \`[-2, 1, -3, 4, -1, 2, 1, -5, 4]\` → answer 6 (subarray \`[4,-1,2,1]\`).


**Method 1: Brute force (O(n²))**
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
print("Brute force answer:", best)   # 6
\`\`\`


**Method 2: Kadane’s algorithm (O(n))**  
Key insight: at each position i, you can either:
- start a new subarray at i (take only a[i])
- extend the previous subarray (previous max + a[i])  
Take the larger one – that is the maximum subarray sum ending at i.


\`\`\`python
cur = a[0]      # maximum sum ending at current position
best = a[0]     # overall best seen
for x in a[1:]:
    cur = max(x, cur + x)   # either restart or extend
    best = max(best, cur)
print("Kadane answer:", best)   # 6
\`\`\`


**Manual trace table**


| i | a[i] | cur = max(a[i], prev_cur + a[i]) | best |
|---|------|----------------------------------|------|
| 0 | -2   | -2                               | -2   |
| 1 | 1    | max(1, -2+1= -1) = 1             | 1    |
| 2 | -3   | max(-3, 1-3= -2) = -2            | 1    |
| 3 | 4    | max(4, -2+4=2) = 4               | 4    |
| 4 | -1   | max(-1, 4-1=3) = 3               | 4    |
| 5 | 2    | max(2, 3+2=5) = 5                | 5    |
| 6 | 1    | max(1, 5+1=6) = 6                | 6    |
| 7 | -5   | max(-5, 6-5=1) = 1               | 6    |
| 8 | 4    | max(4, 1+4=5) = 5                | 6    |

`,
example:`# Prefix sum application: count number of subarrays with sum = K
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
print(f"\\nTotal {cnt} subarrays with sum {K}")
`},


{id:12,title:"Nested Loops",tag:"Flow",content:`
# Chapter 12: Nested Loops


## 12.1 Double Loop
\`\`\`python
for i in range(3):
    for j in range(4):
        print(f"({i},{j})", end=" ")
    print()
\`\`\`


## 12.2 Traversing 2D
\`\`\`python
g = [[1,2,3],[4,5,6],[7,8,9]]
for row in g:
    for x in row:
        print(x, end=" ")
    print()
\`\`\`


## 12.3 Typical Double Loop Problem: Find Pair


"Find i<j and a[i]+a[j]==K":
\`\`\`python
for i in range(n):
    for j in range(i+1, n):
        if a[i] + a[j] == K:
            print(i, j); break
\`\`\`
Complexity O(n²), OK for n ≤ 5000.


## 12.4 Advanced: Triangle Enumeration
Enumerate three sides (i<j<k):
\`\`\`python
for i in range(n):
    for j in range(i+1, n):
        for k in range(j+1, n):
            ...
\`\`\`
O(n³), only for n ≤ 200.


## 12.5 Try It


---

## 📝 Additional Notes (Improved)

## 12.2 Trace table example: transpose a matrix


Transpose a 3x4 matrix to 4x3:


\`\`\`python
matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
]


transpose = []
for j in range(4):          # outer loop over columns of original
    new_row = []
    for i in range(3):      # inner loop over rows of original
        new_row.append(matrix[i][j])
    transpose.append(new_row)
\`\`\`


**Manual trace:**


| j | inner i values | new_row content | transpose after |
|---|----------------|----------------|-----------------|
| 0 | 0,1,2          | [1,5,9]        | [[1,5,9]] |
| 1 | 0,1,2          | [2,6,10]       | [[1,5,9], [2,6,10]] |
| 2 | 0,1,2          | [3,7,11]       | ... |
| 3 | 0,1,2          | [4,8,12]       | ... |

`,
example:`# Print Pascal's triangle
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


{id:13,title:"List Comprehension Advanced",tag:"Data",content:`
# Chapter 13: List Comprehension


## 13.1 Basic Form
\`[expr for x in iterable]\`


\`\`\`python
squares = [x*x for x in range(10)]
\`\`\`


## 13.2 With Condition Filter
\`\`\`python
evens = [x for x in range(20) if x % 2 == 0]
\`\`\`


## 13.3 Conditional Expression (Ternary)
\`\`\`python
labels = ['even' if x % 2 == 0 else 'odd' for x in range(10)]
\`\`\`


## 13.4 Double List Comprehension
\`\`\`python
pairs = [(i, j) for i in range(3) for j in range(3) if i != j]
\`\`\`


## 13.5 Flatten 2D
\`\`\`python
g = [[1,2,3],[4,5,6]]
flat = [x for row in g for x in row]  # [1,2,3,4,5,6]
\`\`\`


## 13.6 Dictionary/Set Comprehension
\`\`\`python
sq_dict = {x: x*x for x in range(5)}     # {0:0, 1:1, 2:4, ...}
uniq = {x % 3 for x in range(10)}        # {0, 1, 2}
\`\`\`


## 13.7 APCS Application: Reading a Matrix
\`\`\`python
g = [list(map(int, input().split())) for _ in range(n)]
\`\`\`


## 13.8 Try It


---

## 📝 Additional Notes (Improved)

## 13.1 Basic form: from loop to comprehension


**Goal: produce squares of 0..9**


\`\`\`python
# Method 1: loop
squares = []
for x in range(10):
    squares.append(x * x)


# Method 2: list comprehension (read: "x*x for x in range(10)")
squares = [x * x for x in range(10)]
\`\`\`


## 13.2 With condition: keep only even squares


\`\`\`python
# Method 1: loop
evens_sq = []
for x in range(10):
    if x % 2 == 0:
        evens_sq.append(x * x)


# Method 2: comprehension (read: "x*x for x in range(10) if x is even")
evens_sq = [x * x for x in range(10) if x % 2 == 0]
\`\`\`


**Syntax order:** \`[expression for variable in iterable if condition]\`

`,
example:`# Find positions in the multiplication table where the product is prime
def is_prime(n):
    if n < 2: return False
    for i in range(2, int(n**.5)+1):
        if n%i == 0: return False
    return True


primes_in_table = [(i, j, i*j) for i in range(2, 10) for j in range(i, 10) if is_prime(i*j)]
print(f"Prime products in multiplication table:")
for i, j, v in primes_in_table:
    print(f"  {i} x {j} = {v}")
`},


{id:14,title:"Advanced Sorting: key and lambda",tag:"Data",content:`
# Chapter 14: Advanced Sorting


## 14.1 Custom Key
\`sort(key=function)\` allows you to specify "what to sort by".


\`\`\`python
words = ["apple", "kiwi", "banana"]
words.sort(key=len)
print(words)   # ['kiwi', 'apple', 'banana']
\`\`\`


## 14.2 lambda Quick Function
Anonymous function: \`lambda parameters: expression\`


\`\`\`python
add = lambda a, b: a + b
print(add(3, 5))   # 8
\`\`\`


## 14.3 Multi‑Condition Sorting
Return a tuple; Python compares element by element.


\`\`\`python
students = [("Alice", 90), ("Bob", 85), ("Cara", 90)]
# First by score descending, then by name ascending
students.sort(key=lambda x: (-x[1], x[0]))
\`\`\`


## 14.4 APCS Example: Score Ranking
\`\`\`python
n = int(input())
data = []
for _ in range(n):
    name, score = input().split()
    data.append((name, int(score)))


data.sort(key=lambda x: (-x[1], x[0]))
for i, (name, score) in enumerate(data, 1):
    print(f"Rank {i}: {name} {score}")
\`\`\`


## 14.5 sorted vs sort
- \`a.sort()\`: modifies in place, returns None
- \`sorted(a)\`: returns a new list, original unchanged


## 14.6 Try It


---

## 📝 Additional Notes (Improved)

## 15.2 lambda – from normal function to anonymous function


**Problem: sort words by their length**


\`\`\`python
words = ["apple", "kiwi", "banana"]


# ---------- Method 1: define a normal function ----------
def my_len(word):
    return len(word)


words.sort(key=my_len)
print(words)   # ['kiwi', 'apple', 'banana']


# ---------- Method 2: lambda (no separate function definition) ----------
words.sort(key=lambda word: len(word))
# lambda parameters: return_value


# Common example: sort students by score descending, then name ascending
students = [("Alice", 90), ("Bob", 85), ("Cara", 90)]
students.sort(key=lambda s: (-s[1], s[0]))  # minus sign for descending
\`\`\`

`,
example:`students = [
    ("Alice", 85, 17),
    ("Bob", 92, 16),
    ("Cara", 85, 18),
    ("Dan", 92, 15),
]


# First by score descending, then by age ascending
students.sort(key=lambda x: (-x[1], x[2]))
for name, score, age in students:
    print(f"{name}: score={score}, age={age}")
`},


{id:15,title:"Introduction to Recursion",tag:"Advanced",content:`
# Chapter 15: Recursion


## 15.1 What is Recursion?
A function calling itself. Every recursion needs:
1. **Base case**: the smallest problem that can be answered directly
2. **Recursive relation**: reduce the problem to a smaller instance of itself


## 15.2 Factorial
\`\`\`python
def fact(n):
    if n <= 1: return 1       # base
    return n * fact(n-1)      # recursion
\`\`\`


## 15.3 Fibonacci
\`\`\`python
def fib(n):
    if n < 2: return n
    return fib(n-1) + fib(n-2)
\`\`\`
> ⚠️ Direct recursion for fib(40) is very slow! Add memoization.


## 15.4 Memoization
\`\`\`python
from functools import lru_cache


@lru_cache
def fib(n):
    if n < 2: return n
    return fib(n-1) + fib(n-2)


print(fib(100))   # instant
\`\`\`


## 15.5 Tower of Hanoi
\`\`\`python
def hanoi(n, a, b, c):  # move n disks from a to c via b
    if n == 0: return
    hanoi(n-1, a, c, b)
    print(f"Move disk {n}: {a} → {c}")
    hanoi(n-1, b, a, c)


hanoi(3, 'A', 'B', 'C')
\`\`\`


## 15.6 High‑Frequency APCS: Backtracking
\`\`\`python
def perms(arr, path):
    if not arr:
        print(path); return
    for i in range(len(arr)):
        perms(arr[:i] + arr[i+1:], path + [arr[i]])


perms([1,2,3], [])
\`\`\`


## 15.7 Try It


---

## 📝 Additional Notes (Improved)

## 16.1 Visualising recursion with indentation


\`\`\`python
def recite(n, depth=0):
    print("  " * depth + f"enter recite({n})")
    if n <= 0:
        print("  " * depth + f"  base case, return 1")
        return 1
    result = n * recite(n-1, depth+1)
    print("  " * depth + f"exit recite({n}), return {result}")
    return result


recite(3)
\`\`\`


The output clearly shows the depth of each call and the return order.

`,
example:`# 8 Queens count
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
    print(f"{n} queens has {queens(n)} solutions")
`},


{id:16,title:"Enumeration Problems",tag:"Advanced",content:`
# Chapter 16: Enumeration and Simulation


## 16.1 What is Enumeration?
When data size is small, just "try all possibilities". Over half of APCS elementary problems can be solved by enumeration.


## 16.2 1D Enumeration
\`\`\`python
# find best allocation
best = -1
for x in range(n+1):
    val = f(x, n-x)
    if val > best:
        best = val
print(best)
\`\`\`


## 16.3 2D Enumeration (double for)
\`\`\`python
# find submatrix satisfying condition
for i in range(n):
    for j in range(n):
        if check(i, j):
            ...
\`\`\`


## 16.4 Bitmask Enumeration of Subsets
n items → 2ⁿ subsets.


\`\`\`python
n = 4
for mask in range(1 << n):    # 0 ~ 15
    subset = [i for i in range(n) if mask & (1 << i)]
    print(subset)
\`\`\`


## 16.5 Simulation Tips
**Read rules carefully → follow them step by step**.


Examples: shopping cart flow, bank queue, robot movement. Simulate with pen and paper before coding!


## 16.6 APCS Example: Robot Path
\`\`\`python
x, y = 0, 0
dx = {'N': 0, 'S': 0, 'E': 1, 'W': -1}
dy = {'N': 1, 'S': -1, 'E': 0, 'W': 0}


for c in input():
    x += dx[c]; y += dy[c]


print(x, y)
\`\`\`


## 16.7 Try It


---

## 📝 Additional Notes (Improved)

## 17.4 Bitmask enumeration of subsets (plain English)


\`\`\`python
# Assume 3 items: A, B, C
# The binary representation of mask indicates which items are selected: 1 = select, 0 = not


for mask in range(1 << 3):   # 1<<3 = 8, mask from 0 to 7
    items = []
    if mask & 1:   # check lowest bit (represents A)
        items.append("A")
    if mask & 2:   # check second bit (represents B)
        items.append("B")
    if mask & 4:   # check third bit (represents C)
        items.append("C")
    print(f"{mask:3} ({mask:03b}) → {items}")
# Output:
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
example:`# Enumerate all subsets and compute sums
nums = [3, 1, 4, 1, 5]
n = len(nums)
target = 8


print(f"Find subsets with sum = {target}:")
for mask in range(1 << n):
    subset = [nums[i] for i in range(n) if mask & (1 << i)]
    if sum(subset) == target:
        print(f"  {subset}")
`},


{id:17,title:"Advanced Data Structures",tag:"Advanced",content:`
# Chapter 17: Advanced Data Structures


## 17.1 deque (Double‑Ended Queue)
O(1) push/pop from both ends.


\`\`\`python
from collections import deque


q = deque([1, 2, 3])
q.append(4)        # [1,2,3,4]
q.appendleft(0)    # [0,1,2,3,4]
q.pop()            # 4
q.popleft()        # 0
\`\`\`


**Uses**: BFS, sliding window.


## 17.2 heap (Priority Queue)
Get minimum in O(log n). Python is a "min‑heap".


\`\`\`python
import heapq


h = []
heapq.heappush(h, 5)
heapq.heappush(h, 2)
heapq.heappush(h, 8)
print(heapq.heappop(h))   # 2 (smallest)
\`\`\`


**Uses**: Dijkstra, k‑th smallest, merging multiple sorted lists.


## 17.3 Counter
Fast counting.
\`\`\`python
from collections import Counter
c = Counter("APCSAPCS")
print(c.most_common(2))   # [('A',2), ('P',2)]
\`\`\`


## 17.4 defaultdict
Automatically provides default values.
\`\`\`python
from collections import defaultdict
d = defaultdict(list)
d["A"].append(1)
d["A"].append(2)
print(d["A"])   # [1, 2]
\`\`\`


## 17.5 BFS Template
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


## 17.6 Try It


---

## 📝 Additional Notes (Improved)

## Why BFS uses \`deque\`


BFS needs to **pop from the left** (\`popleft\`). Using \`list.pop(0)\` is O(n) (slow).  
\`deque\` (double‑ended queue) is designed for O(1) operations at both ends.


\`\`\`python
from collections import deque


queue = deque([1, 2, 3])
queue.append(4)      # add to right
queue.popleft()      # remove from left → now 2,3,4
\`\`\`

`,
example:`# Find top 3 largest using heap
import heapq
nums = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]
print("Top 3 largest:", heapq.nlargest(3, nums))
print("Top 3 smallest:", heapq.nsmallest(3, nums))


# Find most frequent word using Counter
from collections import Counter
s = "the quick brown fox jumps over the lazy dog"
c = Counter(s.split())
print("Top 2 word frequencies:", c.most_common(2))
`},


{id:18,title:"Common Errors and Debugging",tag:"Advanced",content:`
# Chapter 18: Common Errors and Debugging


## 18.1 IndentationError IndentationError
**Python uses indentation to define blocks. Do not mix tabs and spaces.**
Recommendation: Always use 4 spaces.


## 18.2 NameError
\`\`\`python
print(x)   # NameError if x not defined
\`\`\`
Usually a typo or forgot to declare.


## 18.3 TypeError
\`\`\`python
print("Age:" + 17)   # TypeError: str + int
# Fix: print("Age:" + str(17))
# or    print(f"Age:{17}")
\`\`\`


## 18.4 IndexError
\`\`\`python
a = [1, 2, 3]
print(a[3])   # IndexError, no index 3
\`\`\`
Remember: len(a) elements, indices 0 to len(a)-1.


## 18.5 Integer Division Pitfall
\`\`\`python
print(7 / 2)    # 3.5 (float)
print(7 // 2)   # 3 (integer division)
print(-7 // 2)  # -4 (floor division, not -3!)
\`\`\`


## 18.6 2D List Reference Trap
\`\`\`python
g = [[0]*3] * 3
g[0][0] = 1
print(g)
# Expected: [[1,0,0],[0,0,0],[0,0,0]]
# Actual:   [[1,0,0],[1,0,0],[1,0,0]]  all changed!
# Correct:  g = [[0]*3 for _ in range(3)]
\`\`\`


## 18.7 Three Debugging Techniques


1. **Print‑driven**: print variable values at key points
2. **Small test cases**: boundaries like n=1, n=2
3. **Read error messages**: line numbers are usually accurate


## 18.8 Try It: Find the Bug


---

## 📝 Additional Notes (Improved)

## 📖 How to read Python error messages


When your program crashes, you see red text like:


\`\`\`
Traceback (most recent call last):
  File "mycode.py", line 5, in <module>
    print(1/0)
ZeroDivisionError: division by zero
\`\`\`


**What to look for:**
- Last line: **error type** (ZeroDivisionError) and **brief description** (division by zero)
- Go up to \`File "..."\` → tells you which file and line number (line 5)
- The line above that shows the actual code at that line


> 🎯 **SOP**:
> 1. Look at the last line – what kind of error?
> 2. Find the first \`File\` line to locate the file and line number.
> 3. Fix that line of code.

`,
example:`# This program wants to compute 1+2+3+...+n but has a bug
# Try to fix it
def sum_to(n):
    total = 0
    for i in range(n):
        total += i
    return total


# Expected: sum_to(5) = 15
print(sum_to(5))   # Should be 15 but actual?


# Hint: range(n) is 0..n-1
# Fix (uncomment):
# def sum_to(n):
#     total = 0
#     for i in range(1, n+1):
#         total += i
#     return total
`},


{id:19,title:"Comprehensive Exercise: Full APCS Problem",tag:"Practice",content:`
# Chapter 19: Full APCS Problem Walkthrough


## 19.1 Problem Solving Workflow Demonstration


Problem: **Score Indicator** (2016/03 APCS Elementary)


> Read a class's scores. After sorting, output the **highest failing score** (below 60) and the **lowest passing score** (60 or above).


### Step 1: Read the Problem Carefully
- Input: first line n (number of students), second line n scores
- Output: sorted scores / highest failing / lowest passing
- If not found, print "best case" or "worst case"


### Step 2: Think of Small Examples
Input \`[55, 88, 60, 30]\`
Sorted \`[30, 55, 60, 88]\`
Failing \`[30, 55]\` → highest 55
Passing \`[60, 88]\` → lowest 60


### Step 3: Choose Data Structures and Algorithms
- Sorting: \`sort()\` or \`sorted()\`
- Filtering: list comprehension


### Step 4: Write Code
\`\`\`python
n = int(input())
scores = sorted(map(int, input().split()))
print(*scores)


fail = [x for x in scores if x < 60]
print(max(fail) if fail else "best case")


passed = [x for x in scores if x >= 60]
print(min(passed) if passed else "worst case")
\`\`\`


### Step 5: Test with Sample and Edge Cases
- Sample 1: \`[0,11,22,33,55,66,77,99,88,44]\` ✅
- Sample 2: \`[13]\` → all fail → worst case ✅
- Sample 3: \`[73,65]\` → all pass → best case + 65 ✅


## 19.2 APCS Exam Pace


| Time | Action |
|------|--------|
| 0‑2 min | Read problem, circle keywords |
| 2‑5 min | Think of algorithm, confirm edge cases |
| 5‑15 min | Write code |
| 15‑18 min | Test with samples |
| 18‑20 min | Test edge cases (n=1, all same) |


## 19.3 Try It: Full Workflow


---

## 📝 Additional Notes (Improved)

## 🧠 Standard problem‑solving workflow (fill‑in practice)


1. **What does the problem ask me to output?**  
   → _________________________________


2. **What are the input constraints (range of n)?**  
   → _________________________________


3. **If n is large, which approach cannot be used?**  
   → _________________________________


4. **Manually compute a small example (e.g., n=3):**  
   Input: _______  
   Expected output: _______

`,
example:`# Try: Maximum Subarray Sum (Kadane’s algorithm)
# Input: 9 integers -2 1 -3 4 -1 2 1 -5 4
# Output: 6 (subarray [4,-1,2,1])


stdin = "9\\n-2 1 -3 4 -1 2 1 -5 4\\n"
import io, sys
sys.stdin = io.StringIO(stdin)


n = int(input())
a = list(map(int, input().split()))


cur = best = a[0]
for x in a[1:]:
    cur = max(x, cur + x)
    best = max(best, cur)


print(f"Input: {a}")
print(f"Maximum subarray sum: {best}")
`},


{id:20,title:"APCS Practical Tips",tag:"Advanced",content:`
# Chapter 20: APCS Practical Tips


## 20.1 Input Templates (Memorize)


\`\`\`python
# Template 1: fixed number of lines
n = int(input())
nums = list(map(int, input().split()))


# Template 2: n lines each with one piece of data
n = int(input())
data = [input() for _ in range(n)]


# Template 3: n x m matrix
n, m = map(int, input().split())
g = [list(map(int, input().split())) for _ in range(n)]


# Template 4: read until EOF
import sys
for line in sys.stdin:
    line = line.strip()
    if not line: continue
    # process line
\`\`\`


## 20.2 Output Formatting


\`\`\`python
# space separated
print(*nums)            # 1 2 3 4 5


# newline separated
print(*nums, sep="\\n")


# custom separator
print(",".join(map(str, nums)))   # 1,2,3,4,5


# float with 2 decimals
print(f"{x:.2f}")
\`\`\`


## 20.3 Common Mistakes


> ❌ \`int(input().split())\` — split returns a list, cannot directly convert to int
> ✅ \`list(map(int, input().split()))\`


> ❌ \`a = b = [0]*5\` then modifying a also changes b — they point to the same list
> ✅ \`a, b = [0]*5, [0]*5\`


> ❌ \`[[0]*m]*n\` — n rows all point to the same row!
> ✅ \`[[0]*m for _ in range(n)]\`


## 20.4 Problem Solving Flow (Important!)


1. **Read**: circle key info — constraints, input format, boundaries
2. **Think of examples**: manually compute a small case
3. **Design**: write comments first, then code
4. **Write**: get it correct first, optimize later
5. **Test with samples**: all samples must pass before submitting
6. **Edge cases**: n=1? all same? empty input?


## 20.5 Time Complexity Quick Reference


| Pattern | Approx Complexity | Max n |
|---------|------------------|-------|
| Two nested loops | O(n²) | n ≤ 5000 |
| One loop + sort | O(n log n) | n ≤ 10⁶ |
| One loop | O(n) | n ≤ 10⁷ |
| Binary search | O(log n) | n ≤ 10⁹ |


## 20.6 Try It: Comprehensive Practice


---

## 📝 Additional Notes (Improved)

## ⏱️ Everyday analogies for complexity


| Complexity | Analogy |
|------------|---------|
| O(1) | Take the 3rd book directly from the shelf |
| O(n) | Look through every book from first to last to find one |
| O(n²) | Compare every pair of books (e.g., find duplicate titles) |
| O(log n) | Find a word in a dictionary by repeatedly halving the search range |

`,
example:`# APCS style comprehensive drill: Score Indicator
# Input: 10 / 0 11 22 33 55 66 77 99 88 44
# Output: sorted scores / highest failing / lowest passing


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
{id:21,title:"Tree Traversal",tag:"Advanced",content:`
# Chapter 21: Tree Traversal


> 🎯 **APCS Exam Prep**: Trees are common in level 3‑4 problems. Master traversals first; DP on trees is just an extension.


## 21.1 What is a Tree?


Tree = **connected graph with no cycles**. Most common representation:


\`\`\`python
# children[u] = all child nodes of u
children = {0:[1,2], 1:[3,4], 2:[], 3:[], 4:[]}
\`\`\`


Or a "parent array": \`parent[i] = i’s parent\`.


## 21.2 Three Traversal Orders (for binary trees)


| Order | Rule | Use |
|-------|------|-----|
| Preorder | root → left → right | copy tree, serialization |
| Inorder | left → root → right | output BST in sorted order |
| Postorder | left → right → root | compute subtree sizes, free memory |


## 21.3 General Tree DFS


\`\`\`python
def dfs(u, par=-1):
    # things to do when entering u
    for v in children[u]:
        if v != par:
            dfs(v, u)
    # things to do when leaving u (postorder processing)
\`\`\`


## 21.4 Subtree Size (Most Common)


\`\`\`python
size = [1]*n
def dfs(u, par):
    for v in children[u]:
        if v != par:
            dfs(v, u)
            size[u] += size[v]
\`\`\`


This is the prototype of "tree DP": compute children first, then parent.


## 21.5 Caveats


- **Recursion depth**: Python defaults to 1000; for deep trees use \`sys.setrecursionlimit(10**6)\`
- **Avoid revisiting parent**: use the \`par\` parameter


---

## 📝 Additional Notes (Improved)

## 🌳 Where do trees appear in real life?


- **Computer folders**: a folder contains files and subfolders, subfolders contain more files… that is a tree structure.
- **Company hierarchy**: CEO → department heads → employees – also a tree.


Each node can have many children, but there are no cycles (no situation where A is B’s boss and B is also A’s boss).

`,example:`
# Subtree size example
import sys
sys.setrecursionlimit(10**6)


# Tree: 0─1─3
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
{id:22,title:"Graph Basics: BFS / DFS",tag:"Advanced",content:`
# Chapter 22: Graph Basics (BFS / DFS)


> 🎯 **APCS Exam Prep**: Mazes, connected components, shortest steps — almost always BFS.


## 22.1 Graph Representation


\`\`\`python
# Adjacency list (most common)
graph = {0:[1,2], 1:[0,3], 2:[0,3], 3:[1,2]}
\`\`\`


Reading edges:
\`\`\`python
from collections import defaultdict
g = defaultdict(list)
for _ in range(m):
    u, v = map(int, input().split())
    g[u].append(v)
    g[v].append(u)   # add this only for undirected graphs
\`\`\`


## 22.2 BFS: Shortest Steps


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


**Why BFS = shortest steps?** Expanding layer by layer; first time you reach a target is the fewest steps.


## 22.3 DFS: Connected Components


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
print(count)   # number of connected components
\`\`\`


## 22.4 2D Maze as Graph


Treat \`grid[i][j]\` as a node, four directions as edges:
\`\`\`python
dr = [-1,1,0,0]; dc = [0,0,-1,1]
for d in range(4):
    ni, nj = i+dr[d], j+dc[d]
    if 0<=ni<R and 0<=nj<C and grid[ni][nj]=='.':
        ...
\`\`\`


---

## 📝 Additional Notes (Improved)

## Comparison: Tree vs Graph


| Feature | Tree | Graph |
|---------|------|-------|
| Cycles? | No | May have cycles |
| Connectivity | Always connected | May be disconnected |
| Traversal caution | Avoid going back to parent (use parent parameter) | Must track visited set |

`,example:`
# Number of connected components
n, m = 6, 4
edges = [(0,1),(1,2),(3,4)]   # 3 components: {0,1,2}, {3,4}, {5}


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
{id:23,title:"Shortest Paths & Topological Sort",tag:"Advanced",content:`
# Chapter 23: Shortest Paths + Topological Sort


> 🎯 **APCS Exam Prep**: For weighted edges use Dijkstra; for DAG scheduling use topological sort.


## 23.1 Dijkstra: Non‑negative Weighted Shortest Path


Core idea: always expand the currently closest vertex. Uses a min‑heap (heapq).


\`\`\`python
import heapq
def dijkstra(start, n):
    dist = [float('inf')] * n
    dist[start] = 0
    pq = [(0, start)]
    while pq:
        d, u = heapq.heappop(pq)
        if d > dist[u]: continue
        for v, w in g[u]:           # g[u] = [(neighbor, weight)]
            if dist[u] + w < dist[v]:
                dist[v] = dist[u] + w
                heapq.heappush(pq, (dist[v], v))
    return dist
\`\`\`


Time: **O((n + m) log n)**


## 23.2 Why Not BFS?


BFS assumes every edge has length 1. Once edges have different weights (e.g., distances, costs), BFS gives wrong results.


## 23.3 Topological Sort: Linear Ordering of a DAG


Problems like "course prerequisites", "task dependencies". Kahn’s algorithm (BFS variant):


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


# if len(order) < n → there is a cycle
\`\`\`


## 23.4 Quick Reference


| Scenario | Algorithm | Complexity |
|----------|-----------|------------|
| Unweighted shortest steps | BFS | O(n+m) |
| Non‑negative weights | Dijkstra | O((n+m)log n) |
| Negative weights | Bellman‑Ford | O(nm) |
| All‑pairs | Floyd‑Warshall | O(n³) |


---

## 📝 Additional Notes (Improved)

## Unweighted shortest path: BFS (learn this first)


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


**When edges have different weights, BFS no longer works – you need Dijkstra.**

`,example:`
# Dijkstra example
import heapq


# 4‑node graph: 0─1(1)─3(1), 0─2(4)─3(1)
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
{id:24,title:"Advanced DP: LIS / Knapsack",tag:"Advanced",content:`
# Chapter 24: Advanced DP (LIS, Knapsack, LCS)


> 🎯 **APCS Exam Prep**: DP is the level‑4 watershed. First think clearly about "state / transition".


## 24.1 Three Steps of DP


1. **Define state**: what does \`dp[i]\` represent?
2. **Write transition**: how to compute \`dp[i]\` from previous states?
3. **Base + order**: initial values, computation order


## 24.2 Longest Increasing Subsequence (LIS)


**State**: \`dp[i]\` = length of LIS ending at a[i]


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
**O(n²)**. Advanced: O(n log n) using \`bisect\` 👇


### 🔥【Advanced】LIS O(n log n) — patience sorting + binary search
**Intuition**: maintain a \`tails\` array of the best possible tail values. If new element is larger than all tails, append; otherwise binary search to replace the first element ≥ x. Length of \`tails\` is LIS length.


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
\`bisect_left\` → strictly increasing; use \`bisect_right\` for non‑decreasing.


## 24.3 0/1 Knapsack


n items (weight w[i], value v[i]), capacity W, maximize total value.


**State**: \`dp[j]\` = max value with capacity j


\`\`\`python
def knapsack(w, v, W):
    dp = [0]*(W+1)
    for i in range(len(w)):
        for j in range(W, w[i]-1, -1):    # note reverse order
            dp[j] = max(dp[j], dp[j-w[i]] + v[i])
    return dp[W]
\`\`\`


**Why reverse?** Forward order would allow using the same item twice (becoming unbounded knapsack).


## 24.4 Longest Common Subsequence (LCS)


**State**: \`dp[i][j]\` = LCS length of a[:i] and b[:j]


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


## 24.5 🔥【Advanced】Unbounded Knapsack (Infinite items)
Only difference from 0/1 is the loop direction: j goes from small to large (allows reuse).


\`\`\`python
def unbounded_knapsack(w, v, W):
    dp = [0]*(W+1)
    for i in range(len(w)):
        for j in range(w[i], W+1):    # forward → same item can be reused
            dp[j] = max(dp[j], dp[j-w[i]] + v[i])
    return dp[W]
\`\`\`


**Mnemonic**: 0/1 reverse, unbounded forward.


## 24.6 🔥【Advanced】Edit Distance (Levenshtein)
Minimum number of operations (insert, delete, replace each cost 1) to turn string a into b.


\`\`\`python
def edit_distance(a, b):
    m, n = len(a), len(b)
    dp = [[0]*(n+1) for _ in range(m+1)]
    for i in range(m+1): dp[i][0] = i      # delete all
    for j in range(n+1): dp[0][j] = j      # insert all
    for i in range(1, m+1):
        for j in range(1, n+1):
            if a[i-1] == b[j-1]:
                dp[i][j] = dp[i-1][j-1]
            else:
                dp[i][j] = 1 + min(
                    dp[i-1][j],     # delete
                    dp[i][j-1],     # insert
                    dp[i-1][j-1]    # replace
                )
    return dp[m][n]
\`\`\`


Relation to LCS: both use \`dp[i][j]\` + character comparison, but transitions differ: LCS takes max, Edit Distance takes min+1.


## 24.7 🔥【Advanced】Interval DP — Matrix Chain Multiplication
Given a chain of matrices \`A1 (p0×p1) · A2 (p1×p2) · … · An (p(n-1)×pn)\`, find **minimum scalar multiplication cost**.


**State**: \`dp[l][r]\` = min cost to multiply \`A_l … A_r\`.
**Transition**: enumerate split point k, \`dp[l][r] = min(dp[l][k] + dp[k+1][r] + p[l-1]·p[k]·p[r])\`.


\`\`\`python
def matrix_chain(p):           # p = [p0, p1, ..., pn], n matrices
    n = len(p) - 1
    dp = [[0]*(n+1) for _ in range(n+1)]
    for length in range(2, n+1):                     # increasing interval length
        for l in range(1, n - length + 2):
            r = l + length - 1
            dp[l][r] = float('inf')
            for k in range(l, r):
                cost = dp[l][k] + dp[k+1][r] + p[l-1]*p[k]*p[r]
                dp[l][r] = min(dp[l][r], cost)
    return dp[1][n]


print(matrix_chain([30, 35, 15, 5, 10, 20, 25]))     # 15125
\`\`\`


**All interval DP shares this skeleton**: outer loop by length, inner by left, innermost by split point. When you see "merge adjacent, find optimal cost", think interval DP.


---

## 📝 Additional Notes (Improved)

## From recursion to DP: Fibonacci as an example


\`\`\`python
# Problem: nth Fibonacci number


# ---------- Method 1: pure recursion (slow, O(2^n)) ----------
def fib_rec(n):
    if n <= 1: return n
    return fib_rec(n-1) + fib_rec(n-2)


# ---------- Method 2: recursion + memoization ----------
memo = {}
def fib_memo(n):
    if n in memo: return memo[n]
    if n <= 1: return n
    memo[n] = fib_memo(n-1) + fib_memo(n-2)
    return memo[n]


# ---------- Method 3: iterative DP (bottom‑up, O(n)) ----------
def fib_dp(n):
    if n <= 1: return n
    dp = [0] * (n+1)
    dp[1] = 1
    for i in range(2, n+1):
        dp[i] = dp[i-1] + dp[i-2]
    return dp[n]
# This is the essence of dynamic programming: solve small subproblems first, then combine them.
\`\`\`

`,example:`
# 0/1 knapsack example
weights = [2, 3, 4, 5]
values  = [3, 4, 5, 6]
W = 5


dp = [0]*(W+1)
for i in range(len(weights)):
    for j in range(W, weights[i]-1, -1):
        dp[j] = max(dp[j], dp[j-weights[i]] + values[i])


print(dp[W])   # 7 (take w=2 + w=3)
`},
{id:25,title:"Union-Find (Disjoint Set Union)",tag:"Advanced",content:`
# Chapter 25: Union‑Find (Disjoint Set Union)


> 🎯 **APCS Exam Prep**: Connectivity, minimum spanning tree, offline queries — a versatile tool.


## 25.1 Core Requirements


Two operations, both nearly O(1):
1. \`find(x)\` — which set does x belong to?
2. \`union(x, y)\` — merge the sets of x and y


## 25.2 Basic Implementation (with path compression)


\`\`\`python
parent = list(range(n))    # initially each is its own set


def find(x):
    if parent[x] != x:
        parent[x] = find(parent[x])   # path compression
    return parent[x]


def union(x, y):
    rx, ry = find(x), find(y)
    if rx != ry:
        parent[rx] = ry
        return True   # merged
    return False      # already in same set
\`\`\`


## 25.3 Classic Application: Count Connected Components


\`\`\`python
n, m = map(int, input().split())
parent = list(range(n))
for _ in range(m):
    u, v = map(int, input().split())
    union(u, v)
print(len(set(find(i) for i in range(n))))
\`\`\`


## 25.4 Advanced: Union by Rank


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


## 25.5 What Problems to Solve?


- Friend circles / groups
- Kruskal’s minimum spanning tree
- Dynamic connectivity (adding edges)
- "Earliest time when a and b become connected" (offline)


---

## 📝 Additional Notes (Improved)

## 👥 Real‑life example: friend circles


Suppose we have 5 people: A, B, C, D, E.  
Given:
- A and B are friends
- B and C are friends
- D and E are friends


Questions: Are A and C friends? (Yes, through A‑B‑C)  
Are A and D friends? (No)


How do we write a program to answer such questions efficiently?  
- We can maintain which set each person belongs to.
- When two people become friends (or we learn they are connected), we merge their sets.  
- **Union‑Find** is the data structure designed exactly for this.

`,example:`
# Union-Find to count connected components
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
{id:26,title:"String Algorithms: hash & Trie",tag:"Advanced",content:`
# Chapter 26: String Algorithms — hash & Trie


> 🎯 **APCS Exam Prep**: Two powerful tools for string comparison and prefix queries.


## 26.1 String Hash: Turn a string into a number


Makes comparing two substrings O(1).


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
    # hash of s[l..r-1]
    return (h[r] - h[l]*p[r-l]) % MOD
\`\`\`


Preprocessing O(n), each query O(1).


## 26.2 KMP (Concept)


"Find all occurrences of pattern p in text t", O(n+m). The key is the failure array: where to jump on mismatch.


In practice Python often uses \`t.find(p)\` or \`re.search\`, but understanding the failure function is good.


## 26.3 Trie (Prefix Tree)


Store many strings, quickly answer "does any string start with this prefix?"


\`\`\`python
trie = {}
def insert(word):
    node = trie
    for c in word:
        node = node.setdefault(c, {})
    node['$'] = True   # end marker


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


Each operation O(L), L = length of string.


## 26.4 When to Use Which?


| Need | Solution |
|------|----------|
| Compare two substrings for equality | hash |
| Find all occurrences of p in t | KMP |
| Autocomplete, dictionary queries | Trie |
| Longest common prefix | Trie or hash |


---

## 📝 Additional Notes (Improved)

## 🔢 String hash in plain words


We want to turn a string into a number, so comparing two strings becomes comparing two numbers (fast).  
But different strings may produce the same number – that’s a **collision**. To reduce collisions, we use a large prime as the modulus.


Example: \`"abc"\` → (97*131² + 98*131¹ + 99) mod (a big prime).  
As long as the modulus is large enough, collisions are extremely unlikely.

`,example:`
# Trie example
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
{id:27,title:"File I/O",tag:"Practical",content:`
# Chapter 27: Reading and Writing Files


> 🛠 **Practical**: For APCS, stdin/stdout is enough; for building small tools, file I/O is essential.


## 27.1 Read Entire File


\`\`\`python
with open("data.txt", "r", encoding="utf-8") as f:
    text = f.read()
print(text)
\`\`\`


\`with\` ensures the file is closed automatically — safer than \`f.close()\`.


## 27.2 Read Line by Line (for large files)


\`\`\`python
with open("data.txt", "r", encoding="utf-8") as f:
    for line in f:
        line = line.rstrip("\\n")    # remove trailing newline
        print(line)
\`\`\`


## 27.3 Write to File


\`\`\`python
with open("out.txt", "w", encoding="utf-8") as f:
    f.write("Hello\\n")
    f.write("APCS\\n")
\`\`\`


Modes:
- \`"r"\` read / \`"w"\` write (overwrites) / \`"a"\` append
- \`"rb"\` / \`"wb"\` binary (for images, PDFs)


## 27.4 Handling Paths


\`\`\`python
from pathlib import Path
p = Path("data") / "scores.txt"
text = p.read_text(encoding="utf-8")     # one line
p.write_text("hello", encoding="utf-8")
\`\`\`


\`pathlib\` is safer than hand‑concatenating strings; handles cross‑platform separators automatically.


## 27.5 JSON: Best Friend for Structured Data


\`\`\`python
import json
data = {"name": "Alice", "scores": [90, 85, 77]}
# save
Path("data.json").write_text(json.dumps(data, ensure_ascii=False, indent=2))
# load
loaded = json.loads(Path("data.json").read_text())
print(loaded["scores"])
\`\`\`


> 💡 **This chapter’s exercises simulate files via stdin/stdout** (browser sandbox cannot write real files). Use \`open()\` when running locally.


---

## 📝 Additional Notes (Improved)

## Why use the \`with\` statement?


\`\`\`python
# Old way (easy to forget to close)
f = open("data.txt")
data = f.read()
f.close()   # if you forget, resources may be wasted


# \`with\` way (automatically closes when leaving the block, even if an error occurs)
with open("data.txt") as f:
    data = f.read()
# After the \`with\` block, the file is already closed.
\`\`\`

`,example:`
# Simulate "read file content, compute average"
# treat stdin as file content
content = """Alice 90
Bob 85
Cathy 77"""


total, n = 0, 0
for line in content.splitlines():
    name, score = line.split()
    total += int(score); n += 1
print(round(total / n, 1))   # 84.0
`},
{id:28,title:"Modules and Packages",tag:"Practical",content:`
# Chapter 28: Modules and import


> 🛠 **Practical**: Split code into multiple files to avoid a giant spaghetti mess.


## 28.1 Why Split into Files?


When a single file exceeds 200‑300 lines, finding things becomes a nightmare. Split into modules:
- \`main.py\` — program entry
- \`utils.py\` — utility functions
- \`models.py\` — data structures


## 28.2 Three Ways to import


\`\`\`python
import math
print(math.sqrt(16))             # 4.0


from math import sqrt, pi
print(sqrt(16), pi)              # 4.0 3.141...


from math import *                # bring everything (not recommended)
\`\`\`


## 28.3 Write Your Own Module


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


It means "run main() only when this file is executed directly, not when imported". Always add this to your scripts.


## 28.5 Package Management: pip


\`\`\`bash
pip install requests
pip install pandas matplotlib
pip list
pip freeze > requirements.txt
\`\`\`


\`requirements.txt\` lists project dependencies; on a new environment run \`pip install -r requirements.txt\` to install all at once.


## 28.6 Virtual Environment (avoid dependency conflicts)


\`\`\`bash
python -m venv .venv
source .venv/bin/activate    # mac/linux
.venv\\\\Scripts\\\\activate     # windows
\`\`\`


---

## 📝 Additional Notes (Improved)

## What \`if __name__ == "__main__"\` does


\`\`\`python
# tool.py
def add(a, b):
    return a + b


def main():
    print(add(3, 5))


if __name__ == "__main__":
    # This block runs only when you execute \`python tool.py\` directly.
    # If this file is imported by another script, the block is NOT executed.
    main()
\`\`\`

`,example:`
# Using the math module
import math


print(math.sqrt(144))         # 12.0
print(math.gcd(12, 18))       # 6
print(round(math.pi, 4))      # 3.1416
`},
{id:29,title:"Object‑Oriented Programming: class",tag:"Practical",content:`
# Chapter 29: Object‑Oriented Programming (OOP)


> 🛠 **Practical**: Bundle data + behavior together, making code more organized.


## 29.1 First class


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


Key words:
- \`class\` defines a "blueprint"
- \`__init__\` is the constructor (called automatically when creating an object)
- \`self\` = "this object" itself, always the first parameter


## 29.2 Why Use class?


Compare:
\`\`\`python
# Procedural: data scattered
students = [{"name":"Alice","score":85}, ...]
def is_pass(s): return s["score"] >= 60


# OOP: data + methods bundled
s = Student("Alice", 85)
s.is_pass()
\`\`\`


When logic becomes complex (score weighting, ranking, output formatting...), OOP gathers related things inside one class.


## 29.3 Inheritance


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


\`super().__init__(...)\` calls the parent constructor.


## 29.4 Common Magic Methods


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


## 29.5 When Not to Use class?


- Only two or three functions → don’t bother
- Pure algorithmic problem solving → also no class
- Repeatedly needing data + behavior together → start considering class


---

## 📝 Additional Notes (Improved)

## 29.1 Why use a class? Refactor from dict to class


**Problem**: store multiple students with name, score, and a method to check pass/fail.


**Method 1: using dict (simple but has drawbacks)**
\`\`\`python
alice = {"name": "Alice", "score": 85}
bob   = {"name": "Bob",   "score": 60}


def is_pass(student):
    return student["score"] >= 60


print(is_pass(alice))  # True
\`\`\`
Drawbacks: you must always write \`student["name"]\`, and typos in keys are easy.


**Method 2: using a class (bundle data + behavior together)**
\`\`\`python
class Student:
    def __init__(self, name, score):
        # __init__ is called automatically when a new object is created
        # self refers to "this object"
        self.name = name
        self.score = score


    def is_pass(self):
        return self.score >= 60


alice = Student("Alice", 85)
bob   = Student("Bob", 60)


print(alice.is_pass())   # True
print(alice.name)        # direct attribute access
\`\`\`


================================================================================
End of Chapter 0–29 revision templates (English version)

`,example:`
# Student class example
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
﻿{id:30,title:"Error Handling try/except",tag:"Practical",content:`
# Chapter 30: Error Handling


> 🛠 **Practical**: Your program crashes when it hits an error? Learn to catch it.


## 30.1 Basic try / except


\`\`\`python
try:
    n = int(input())
    print(100 // n)
except ZeroDivisionError:
    print("Cannot divide by zero")
except ValueError:
    print("Please enter an integer")
\`\`\`


Flow: try block runs normally; if specified error occurs → jump to corresponding except; if no errors → skip all excepts.


## 30.2 Multiple except / catch-all


\`\`\`python
try:
    risky_call()
except (KeyError, IndexError) as e:
    print(f"Data not found: {e}")
except Exception as e:                # catch-all (rarely used)
    print(f"Unexpected error: {e}")
\`\`\`


> ⚠️ **Never write \`except: pass\`**! It swallows all errors and makes debugging extremely hard.


## 30.3 finally / else


\`\`\`python
try:
    f = open("data.txt")
    data = f.read()
except FileNotFoundError:
    data = ""
else:
    print("Read successfully")
finally:
    f.close()      # always runs
\`\`\`


In modern Python, using \`with open(...)\` auto‑closes the file; this is an older pattern for demonstration.


## 30.4 Raising errors: raise


\`\`\`python
def divide(a, b):
    if b == 0:
        raise ValueError("Divisor cannot be zero")
    return a / b
\`\`\`


The caller can catch it or let it propagate.


## 30.5 Custom exceptions


\`\`\`python
class InvalidScore(Exception):
    pass


def add_score(s):
    if not (0 <= s <= 100):
        raise InvalidScore(f"Score {s} out of range")
\`\`\`


## 30.6 EAFP vs LBYL


Python style prefers “Easier to Ask for Forgiveness than Permission”:


\`\`\`python
# Pythonic
try:
    return d[key]
except KeyError:
    return 0


# Less Pythonic
if key in d:
    return d[key]
else:
    return 0
\`\`\`

## 30.7 🧠 Design Motivation: Why Does Python Prefer EAFP?

In the C era, functions returned error codes (-1, NULL), and callers had to manually check every single time. This led to code flooded with defensive \`if (result == NULL) { ... }\` checks, drowning out the actual logic.

Python adopted exceptions: keep the happy path clean, and centralize error handling in except blocks. This was a deliberate design choice by Guido van Rossum, rooted in the philosophy of "readability first."

EAFP also has a performance rationale: "look before you leap (LBYL)" has a TOCTOU (Time-of-check to time-of-use) race condition problem in multithreaded environments — between the if-check and the actual use, another thread may have changed the state. Try-then-catch has no such issue.

\`\`\`python
# TOCTOU problem demo
import os

# LBYL — has race condition
if os.path.exists("data.txt"):
    # another thread may delete the file here
    with open("data.txt") as f:  # may still fail
        data = f.read()

# EAFP — no race condition
try:
    with open("data.txt") as f:
        data = f.read()
except FileNotFoundError:
    data = ""
\`\`\`
`,example:`
# Safe division demo
inputs = ["10", "0", "abc", "5"]


for s in inputs:
    try:
        n = int(s)
        print(100 // n)
    except ZeroDivisionError:
        print("Divide by zero")
    except ValueError:
        print("Not a number")
`},
{id:31,title:"Testing & Systematic Debugging",tag:"Practical",content:`
# Chapter 31: Testing + Systematic Debugging


> 🛠 **Practical**: Writing code takes 30%, debugging takes the other 70%.


## 31.1 Quick tests with assert


\`\`\`python
def add(a, b):
    return a + b


assert add(2, 3) == 5
assert add(-1, 1) == 0
assert add(0, 0) == 0
print("all passed")
\`\`\`


If an \`assert\` is false, it raises \`AssertionError\`. Simple but effective.


## 31.2 unittest (standard framework)


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


Run: \`python -m unittest test_prime.py\`


## 31.3 Systematic debugging: 4 steps


1. **Reproduce**: Find the smallest input that always fails.
2. **Binary search**: Insert \`print(...)\` in the middle to see where it goes wrong.
3. **Hypothesis → Verify**: Guess the cause and write a simple test to prove or disprove it.
4. **Add a test after fixing**: So it never breaks again.


## 31.4 Interactive debugging with pdb


\`\`\`python
import pdb
def buggy(a, b):
    pdb.set_trace()      # execution stops here
    return a / b


buggy(10, 0)
\`\`\`


Common commands: \`n\` (next line), \`s\` (step into), \`p var\` (print variable), \`c\` (continue).


## 31.5 logging is better than print


\`\`\`python
import logging
logging.basicConfig(level=logging.DEBUG, format='%(levelname)s | %(message)s')
logging.debug("input n=%d", n)
logging.warning("unexpected situation")
\`\`\`


In real projects, don’t use print – use logging. You can set levels and output to files.
`,example:`
# Self‑test with assert
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
{id:32,title:"Command‑Line Tools (CLI)",tag:"Project",content:`
# Chapter 32: Build a Command‑Line Tool


> 🚀 **Project**: Turn Python into a tool you can run as \`python tool.py --score 85\`.


## 32.1 sys.argv: the most primitive way


\`\`\`python
# greet.py
import sys
name = sys.argv[1] if len(sys.argv) > 1 else "World"
print(f"Hello, {name}!")
\`\`\`


Run: \`python greet.py Alice\` → \`Hello, Alice!\`


\`sys.argv[0]\` is the script name itself; arguments start from \`[1:]\`.


## 32.2 argparse: the proper way


\`\`\`python
import argparse


parser = argparse.ArgumentParser(description="Grade classification tool")
parser.add_argument("score", type=int, help="score between 0-100")
parser.add_argument("--strict", action="store_true", help="strict mode (70 to pass)")
parser.add_argument("--name", default="Student", help="name to display")


args = parser.parse_args()


threshold = 70 if args.strict else 60
result = "Pass" if args.score >= threshold else "Fail"
print(f"{args.name}: {args.score} → {result}")
\`\`\`


Example runs:
\`\`\`bash
python grade.py 75 --name Alice
python grade.py 65 --strict
python grade.py --help        # auto‑generated help!
\`\`\`


## 32.3 Build a complete tool: grade calculator


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
    p.add_argument("file", help="file with one score per line; use - for stdin")
    p.add_argument("--summary", action="store_true", help="print only summary")
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


Run:
\`\`\`bash
echo "85\\n72\\n50" | python grader.py - --summary
\`\`\`


## 32.4 Advanced: package into a shareable tool


- Define \`setup.py\` or \`pyproject.toml\`
- \`pip install -e .\` then you can run \`grader 85\` directly
- Add README, license, push to GitHub
`,example:`
# Simulate CLI behavior
import sys


# pretend command line passed ["85", "--strict"]
args = ["85", "--strict"]


score = int(args[0])
strict = "--strict" in args


threshold = 70 if strict else 60
print("Pass" if score >= threshold else "Fail")
`},
{id:33,title:"CSV Data Analysis",tag:"Project",content:`
# Chapter 33: Reading and Analyzing CSV


> 🚀 **Project**: Take a grade sheet or sales table and compute statistics, output reports with Python.


## 33.1 csv module basics


\`\`\`python
import csv


with open("scores.csv", encoding="utf-8") as f:
    reader = csv.reader(f)
    headers = next(reader)   # first row = column names
    for row in reader:
        print(row)   # ['Alice', '90']
\`\`\`


## 33.2 Using DictReader for clarity


\`\`\`python
with open("scores.csv", encoding="utf-8") as f:
    for row in csv.DictReader(f):
        print(row["name"], int(row["score"]))
\`\`\`


## 33.3 Writing CSV


\`\`\`python
with open("out.csv", "w", encoding="utf-8", newline="") as f:
    w = csv.writer(f)
    w.writerow(["name", "grade"])
    for name, grade in result:
        w.writerow([name, grade])
\`\`\`


> Important: when writing CSV, use \`newline=""\` to avoid extra blank lines on Windows.


## 33.4 Mini‑project: class grade analysis


\`\`\`python
import csv, statistics
from collections import Counter


with open("class.csv", encoding="utf-8") as f:
    rows = list(csv.DictReader(f))


# 1) Class mean, max, min
scores = [int(r["score"]) for r in rows]
print(f"Mean {statistics.mean(scores):.1f}")
print(f"Max {max(scores)}   Min {min(scores)}")


# 2) Grade distribution
def grade(s):
    return 'A' if s>=90 else 'B' if s>=80 else 'C' if s>=60 else 'F'
print(Counter(grade(int(r["score"])) for r in rows))


# 3) Top 3
top3 = sorted(rows, key=lambda r: -int(r["score"]))[:3]
for r in top3:
    print(r["name"], r["score"])
\`\`\`


## 33.5 Advanced: using pandas (when you need more power)


\`\`\`python
import pandas as pd


df = pd.read_csv("class.csv")
print(df.describe())
print(df.groupby("class")["score"].mean())
df.sort_values("score", ascending=False).head(3)
\`\`\`


Pandas is suitable when you have hundreds of rows and need grouping, merging, or visualisation.
`,example:`
# Simulate CSV analysis
csv_text = """name,score
Alice,92
Bob,75
Cathy,88
David,55
Eve,67"""


rows = csv_text.splitlines()[1:]   # skip header
data = [r.split(',') for r in rows]


scores = [int(s) for _, s in data]
print(round(sum(scores)/len(scores), 1))   # mean
print(max(scores))                          # max
`},
{id:34,title:"API Calls and JSON",tag:"Project",content:`
# Chapter 34: Calling Web APIs


> 🚀 **Project**: Get weather, stock prices, translations, AI models... all via HTTP + JSON.


## 34.1 requests: the standard library for APIs


\`\`\`python
import requests
r = requests.get("https://api.github.com/users/torvalds")
print(r.status_code)        # 200
data = r.json()             # auto‑parse JSON
print(data["name"], data["public_repos"])
\`\`\`


\`\`\`bash
pip install requests
\`\`\`


## 34.2 HTTP methods quick reference


| Method | Purpose | requests syntax |
|--------|---------|-----------------|
| GET | read | \`requests.get(url)\` |
| POST | create | \`requests.post(url, json={...})\` |
| PUT | update | \`requests.put(url, json={...})\` |
| DELETE | delete | \`requests.delete(url)\` |


## 34.3 Query parameters, headers, authentication


\`\`\`python
r = requests.get(
    "https://api.example.com/search",
    params={"q": "python", "page": 1},
    headers={"Authorization": "Bearer YOUR_TOKEN"},
    timeout=10,
)
\`\`\`


## 34.4 Handling failures


\`\`\`python
try:
    r = requests.get(url, timeout=5)
    r.raise_for_status()        # raises on 4xx/5xx
    data = r.json()
except requests.Timeout:
    print("Timeout")
except requests.RequestException as e:
    print("Request failed:", e)
\`\`\`


## 34.5 Mini‑project: fetch GitHub user info


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
        print(f"{login}: not found")
        return
    print(f"{u['login']:15} repos={u['public_repos']:4} followers={u['followers']}")


for name in sys.argv[1:]:
    summary(name)
\`\`\`


Run: \`python gh.py torvalds gvanrossum\`


## 34.6 Rate limiting, retries, caching


In real projects:
- APIs usually have rate limits → add \`time.sleep()\` or backoff.
- Important requests need retries (try \`requests-cache\` / \`tenacity\`).
- Store tokens in environment variables, never commit to git.


> 💡 The browser sandbox usually cannot make external HTTP requests (CORS). Run locally to experience the real thing.
`,example:`
# Simulate: parse a JSON string
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
{id:35,title:"Comprehensive Project: Terminal Games",tag:"Project",content:`
# Chapter 35: Comprehensive Project — Guess Number + Terminal 2048 Skeleton


> 🚀 **Project**: Integrate everything you’ve learned.


## 35.1 Level 1: Guess the Number


\`\`\`python
import random


def play():
    target = random.randint(1, 100)
    tries = 0
    while True:
        try:
            guess = int(input("Guess 1-100: "))
        except ValueError:
            print("Enter an integer"); continue
        tries += 1
        if guess < target:
            print("Higher")
        elif guess > target:
            print("Lower")
        else:
            print(f"Correct! Used {tries} tries")
            return tries


if __name__ == "__main__":
    while True:
        play()
        if input("Play again? (y/n) ").lower() != "y":
            break
\`\`\`


Concepts used: random / try-except / while / if-else / function / main guard.


## 35.2 Level 2: Simple grade management system


\`\`\`python
import json
from pathlib import Path


DATA = Path("students.json")


def load():
    return json.loads(DATA.read_text()) if DATA.exists() else {}


def save(d):
    DATA.write_text(json.dumps(d, ensure_ascii=False, indent=2))


def menu():
    print("\\n1) Add  2) Query  3) All  4) Exit")
    return input("> ").strip()


def main():
    data = load()
    while True:
        c = menu()
        if c == "1":
            name = input("Name: ")
            score = int(input("Score: "))
            data[name] = score
            save(data); print("Saved")
        elif c == "2":
            name = input("Name: ")
            print(data.get(name, "Not found"))
        elif c == "3":
            for n, s in sorted(data.items(), key=lambda x: -x[1]):
                print(f"{n:10} {s}")
        elif c == "4":
            break


if __name__ == "__main__":
    main()
\`\`\`


Concepts: dict / JSON / pathlib / sorted + lambda / functions.


## 35.3 Level 3: Terminal 2048 core logic


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
    new = [x for x in row if x]   # remove zeros
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
    # U/D: transpose
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


Left for you: add key handling (w/a/s/d via \`input()\`), win/loss detection, scoring.


## 35.4 Where to go from here?


| Direction | Recommended learning |
|-----------|----------------------|
| Web backend | Flask / FastAPI |
| Web frontend | JavaScript + HTML/CSS |
| Data analysis | pandas / matplotlib |
| Automation | Selenium / Playwright |
| AI / ML | numpy → scikit‑learn → PyTorch |
| Games | pygame |


Congratulations! You’ve completed all 36 chapters. From here, **building a small project you care about** is more important than reading any textbook.
`,example:`
# Guess number (automated demo)
target = 42
guesses = [50, 25, 37, 43, 40, 42]


for g in guesses:
    if g < target:
        print(f"{g} → Higher")
    elif g > target:
        print(f"{g} → Lower")
    else:
        print(f"{g} → Correct!")
        break
`},
{id:36,title:"HTTP Basics: How Web Pages Arrive",tag:"Specialty",content:`
# Chapter 36: HTTP Basics — How Web Pages Arrive


> 🕷 **Specialty · Web Scraping**: Before scraping, understand what the browser and server are saying.


## 36.1 One‑sentence explanation


When you open [https://example.com](https://example.com):


1. Browser → Server: **“Please give me the content of this URL”** (this is a *request*)
2. Server → Browser: **“Here it is, the HTML”** (this is a *response*)
3. Browser draws the HTML as the page you see


A scraper is **“skip the browser, send the request programmatically, and parse the response yourself”**.


## 36.2 What an HTTP request looks like


\`\`\`http
GET /search?q=apcs HTTP/1.1
Host: www.google.com
User-Agent: Mozilla/5.0 ...
Accept: text/html
\`\`\`


Key fields:


| Field | Meaning |
|-------|---------|
| **Method** | GET / POST / PUT / DELETE |
| **Path** | \`/search?q=apcs\` — including query string |
| **Host** | target domain |
| **User-Agent** | “What kind of browser am I?” (scrapers often need to fake this) |


## 36.3 What a response looks like


\`\`\`http
HTTP/1.1 200 OK
Content-Type: text/html; charset=utf-8
Content-Length: 1234


<html>
  <body>...</body>
</html>
\`\`\`


The most important part is the **first line’s status code**:


| Code | Meaning |
|------|---------|
| **200** | Success ✅ |
| **301 / 302** | Redirect |
| **403** | Forbidden (common when scraping is blocked) |
| **404** | Not found |
| **429** | Too many requests (rate limited) |
| **500** | Server error |


> If you see 200, you can proceed to parse; other codes need proper handling.


## 36.4 GET vs POST


| | GET | POST |
|---|---|---|
| Purpose | Read data | Send data (login, comment) |
| Parameters location | After URL \`?a=1&b=2\` | request body |
| Can be bookmarked? | Yes | No |
| Use in scraping | Usually GET | Only for form simulation |


## 36.5 Try it yourself


The example on the right **constructs an HTTP response string** and extracts status code and body. After this, you’ll understand what happens in a request‑response cycle.


> **Cross‑language notes**:
> - **C++**: can use \`libcurl\` or \`cpp-httplib\`, less common for scraping
> - **Java**: standard \`java.net.http.HttpClient\` (Java 11+) or \`Jsoup\`
> - **JavaScript**: \`fetch()\` API
> But this topic focuses on Python — \`requests\` + \`BeautifulSoup\` is the most popular scraper stack.

## 36.6 🧠 Design Motivation: Why is HTTP "Stateless"?

Every HTTP request is independent — the server doesn't remember what you sent a second ago. This was a deliberate choice by Tim Berners-Lee when designing the Web in 1989:

**Benefit**: Servers don't need to maintain state for every connection, making it easy to scale to millions of users. A request you send to Google today can be handled by any server anywhere in the world.

**Drawback**: Stateless means "the server doesn't know who you are." That's why Cookies (browsers send "identity info" with each request) and Sessions (server uses Session ID to look up your state) were invented.

**Impact on scraping**: For sites that require login, you must simulate login first, save the cookies, and then send those cookies with every subsequent request to maintain the "logged in" state. \`requests.Session()\` exists specifically to solve this problem.

\`\`\`python
import requests

# Session automatically saves and sends cookies for you
session = requests.Session()
session.post("https://example.com/login", data={"user": "me", "pass": "1234"})
# Subsequent requests automatically carry the login cookie
resp = session.get("https://example.com/dashboard")
\`\`\`
`,
example:`# Simulate an HTTP response (in reality, a string read from a socket)
response = (
    "HTTP/1.1 200 OK\\r\\n"
    "Content-Type: text/html; charset=utf-8\\r\\n"
    "Content-Length: 38\\r\\n"
    "\\r\\n"
    "<html><body>Hello APCS</body></html>"
)


# Split header and body (separated by \\r\\n\\r\\n)
header_part, body = response.split("\\r\\n\\r\\n", 1)
lines = header_part.split("\\r\\n")


# First line: HTTP/1.1 200 OK
status_line = lines[0]
parts = status_line.split(" ", 2)
version, code, reason = parts[0], int(parts[1]), parts[2]
print(f"Status code: {code} ({reason})")


# Other lines: Key: Value
headers = {}
for line in lines[1:]:
    k, v = line.split(": ", 1)
    headers[k] = v
print(f"Content-Type: {headers['Content-Type']}")


# body
print(f"body: {body}")
`},
{id:37,title:"requests Basics",tag:"Specialty",content:`
# Chapter 37: requests Basics


> 🕷 **Specialty · Web Scraping**: The standard Python tool for fetching web pages. One line downloads an entire page.


## 37.1 Why requests?


Python has built‑in \`urllib.request\`, but it’s verbose and awkward. \`requests\` is “for humans”:


\`\`\`python
import requests
r = requests.get("https://example.com")
print(r.status_code)   # 200
print(r.text[:200])    # first 200 chars of HTML
\`\`\`


Install:
\`\`\`bash
pip install requests
\`\`\`


## 37.2 GET: fetch a web page


\`\`\`python
import requests


r = requests.get("https://api.github.com/users/torvalds")
print(r.status_code)        # 200
print(r.headers["Content-Type"])
print(r.text[:100])         # string: HTML or JSON
print(r.json())             # auto‑parse to dict
\`\`\`


| Attribute | Meaning |
|-----------|---------|
| \`r.status_code\` | status code (200/404/...) |
| \`r.text\` | response body as string |
| \`r.content\` | response body as bytes (for images, files) |
| \`r.headers\` | response headers dict |
| \`r.json()\` | parse body as JSON |
| \`r.url\` | final URL after redirects |


## 37.3 Adding query strings


Don’t build the URL manually; use \`params=\`:


\`\`\`python
r = requests.get(
    "https://www.google.com/search",
    params={"q": "apcs python", "lr": "lang_zh-TW"}
)
print(r.url)
# → https://www.google.com/search?q=apcs+python&lr=lang_zh-TW
\`\`\`


## 37.4 Pretending to be a browser (User‑Agent)


Many sites block Python’s default UA. **The most common anti‑scraping trick = change the header**:


\`\`\`python
r = requests.get(
    "https://example.com",
    headers={
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X) "
                      "AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120"
    }
)
\`\`\`


## 37.5 timeout is a must


Without a timeout, a hung network will freeze your program forever:


\`\`\`python
try:
    r = requests.get("https://example.com", timeout=5)  # 5 seconds
    r.raise_for_status()        # raises on 4xx/5xx
except requests.Timeout:
    print("Timeout")
except requests.HTTPError as e:
    print(f"HTTP error {e.response.status_code}")
except requests.RequestException as e:
    print(f"Network error: {e}")
\`\`\`


> 🛡 **Golden trio**: \`timeout\` + \`raise_for_status\` + \`try/except\`. 80% of scraper stability comes from these three lines.


## 37.6 POST: send forms or JSON


\`\`\`python
# form (application/x-www-form-urlencoded)
requests.post(url, data={"user": "alice", "pw": "x"})


# JSON (application/json)
requests.post(url, json={"user": "alice", "pw": "x"})
\`\`\`


## 37.7 Session: keep cookies


If you need to log in and stay authenticated, use \`Session\`:


\`\`\`python
s = requests.Session()
s.post("https://site/login", data={"u":"a","p":"b"})
r = s.get("https://site/profile")    # cookies are automatically sent
\`\`\`


## 37.8 Try it (simulated)


The example builds a query string and parses a URL, simulating what \`requests\` does internally. Pyodide cannot make real network calls, but this exercise shows how “URL + params” becomes the final URL.
`,
example:`# Simulate how requests.get(url, params=...) builds the final URL
from urllib.parse import urlencode, urlparse, parse_qs


base = "https://www.google.com/search"
params = {"q": "apcs python", "lr": "lang_zh-TW", "page": 2}


# 1) Internally, requests turns params into a query string
qs = urlencode(params)
final_url = f"{base}?{qs}"
print("Final URL:", final_url)


# 2) Reverse: given a URL, extract its parameters
parsed = urlparse(final_url)
print("Domain:", parsed.netloc)
print("Path:", parsed.path)
print("Params:", parse_qs(parsed.query))


# 3) Simulate a successful response
fake_response = {
    "status_code": 200,
    "headers": {"Content-Type": "text/html; charset=utf-8"},
    "text": "<html>...search results...</html>"
}
print(f"\\nStatus: {fake_response['status_code']}")
print(f"First 30 chars of body: {fake_response['text'][:30]}")
`},
{id:38,title:"HTML Structure and DOM",tag:"Specialty",content:`
# Chapter 38: HTML Structure and DOM


> 🕷 **Specialty · Web Scraping**: After fetching HTML, you need to “locate” the data you want.


## 38.1 HTML is a tree


\`\`\`html
<html>
  <head>
    <title>News Home</title>
  </head>
  <body>
    <h1>Top Story</h1>
    <ul class="news">
      <li><a href="/a">News A</a></li>
      <li><a href="/b">News B</a></li>
    </ul>
  </body>
</html>
\`\`\`


As a tree:


\`\`\`
html
├── head
│   └── title ("News Home")
└── body
    ├── h1 ("Top Story")
    └── ul.news
        ├── li → a[href=/a] ("News A")
        └── li → a[href=/b] ("News B")
\`\`\`


Every node has:


| Attribute | Example |
|-----------|---------|
| **tag** | \`a\`, \`li\`, \`div\` |
| **attributes** | \`href="/a"\`, \`class="news"\` |
| **text** | \`"News A"\` |
| **children** | nested elements |


## 38.2 Common tag quick reference


| Tag | Meaning |
|-----|---------|
| \`<h1>\`–\`<h6>\` | headings (h1 largest) |
| \`<p>\` | paragraph |
| \`<a href="...">\` | hyperlink |
| \`<img src="...">\` | image |
| \`<ul>\` / \`<ol>\` / \`<li>\` | lists |
| \`<table>\` / \`<tr>\` / \`<td>\` | tables |
| \`<div>\` / \`<span>\` | generic containers (most used!) |
| \`<form>\` / \`<input>\` | forms |


## 38.3 class and id


\`\`\`html
<div id="main-article" class="post featured">...</div>
\`\`\`


- \`id\` is **unique** – there can be only one \`id="main-article"\` in the page.
- \`class\` can be **repeated and multiple** (separated by spaces).


Scrapers often rely on these two to locate elements.


## 38.4 Finding elements in the browser: DevTools


In Chrome / Edge, press **F12** to open DevTools, click the arrow icon in the top‑left corner, then click any element on the page → you’ll see its HTML.


> 🎯 Standard workflow before scraping:
> 1. Open DevTools (F12) to inspect HTML
> 2. Find a stable “locator” (class or id)
> 3. Write the corresponding selector for BeautifulSoup


## 38.5 Tags can be deeply nested


\`\`\`html
<div class="article">
  <header>
    <h2>Title</h2>
    <span class="date">2026-06-08</span>
  </header>
  <div class="content">
    <p>First paragraph</p>
    <p>Second paragraph</p>
  </div>
</div>
\`\`\`


To get the date, you need \`div.article\` → \`header\` → \`span.date\`.
To get all paragraphs, go \`div.article\` → \`div.content\` → all \`p\`.


## 38.6 Try it


The example uses Python’s built‑in \`html.parser\` to walk the HTML tree and print every tag. After this, you’ll understand what a parser actually does.
`,
example:`# Walk the HTML tree using stdlib html.parser
from html.parser import HTMLParser


html_doc = (
    '<html>\\n'
    '  <head><title>News Home</title></head>\\n'
    '  <body>\\n'
    '    <h1>Top Story</h1>\\n'
    '    <ul class="news">\\n'
    '      <li><a href="/a">News A</a></li>\\n'
    '      <li><a href="/b">News B</a></li>\\n'
    '    </ul>\\n'
    '  </body>\\n'
    '</html>'
)


class TreePrinter(HTMLParser):
    def __init__(self):
        super().__init__()
        self.depth = 0
        self.tags = []  # record all tags
    def handle_starttag(self, tag, attrs):
        self.tags.append(tag)
        attr_str = ' '.join(f'{k}="{v}"' for k, v in attrs) if attrs else ''
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


print(f"\\nTotal {len(p.tags)} start tags")
print(f"Tags seen: {sorted(set(p.tags))}")
`},
{id:39,title:"Parsing with BeautifulSoup",tag:"Specialty",content:`
# Chapter 39: Parsing with BeautifulSoup


> 🕷 **Specialty · Web Scraping**: Turn an HTML string into an object you can \`.find\` and \`.select\`.


## 39.1 Installation and first use


\`\`\`bash
pip install beautifulsoup4
# Recommended also install lxml (faster parser)
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
soup.find("h1")            # first h1, returns a Tag
soup.find_all("li")        # all li, returns a list
soup.find("div", class_="content")
soup.find_all("a", href=True)        # all a that have an href attribute
soup.find("img", {"alt": "logo"})    # match any attribute using a dict
\`\`\`


> ⚠️ In Python, \`class\` is a keyword, so the parameter is \`class_\` (trailing underscore).


## 39.3 select: CSS selectors (highly recommended)


If you know CSS, this is the most intuitive:


\`\`\`python
soup.select("div.news h2")          # all h2 inside div.news
soup.select("ul.menu > li")         # direct child li of ul.menu
soup.select("a[href^=https]")       # a with href starting with https
soup.select("#main .title")         # .title inside id=main
\`\`\`


CSS selector quick reference:


| Syntax | Meaning |
|--------|---------|
| \`tag\` | tag name |
| \`.class\` | class |
| \`#id\` | id |
| \`parent child\` | descendant |
| \`parent > child\` | direct child |
| \`[attr]\` | has attribute |
| \`[attr=value]\` | attribute equals |
| \`[attr^=value]\` | attribute starts with |
| \`[attr$=value]\` | attribute ends with |
| \`[attr*=value]\` | attribute contains |


## 39.4 Extracting data


\`\`\`python
a = soup.find("a")
a.text          # link text
a.get_text()    # same
a["href"]       # attribute value
a.attrs         # all attributes as a dict
a.parent        # parent node
a.find_parent("div", class_="post")  # walk up to a specific parent
\`\`\`


## 39.5 Complete example


\`\`\`python
from bs4 import BeautifulSoup
import requests


html = requests.get("https://example.com", timeout=5).text
soup = BeautifulSoup(html, "html.parser")


for a in soup.select("a[href]"):
    print(a.text.strip(), "→", a["href"])
\`\`\`


Just 4 lines to scrape all links.


## 39.6 Try it (simulated)


Pyodide does not have bs4 pre‑installed, so we’ll use the stdlib \`html.parser\` to write a mini “find a tags” example. On your local machine, use BeautifulSoup instead.
`,
example:`# Simulated version: using stdlib html.parser to extract all <a href="..."> text and links
# On your own machine, use:
#   from bs4 import BeautifulSoup
#   soup = BeautifulSoup(html, "html.parser")
#   for a in soup.select("a[href]"): print(a.text, a["href"])


from html.parser import HTMLParser


html = (
    '\\n<html><body>\\n'
    '  <h1>Link collection</h1>\\n'
    '  <ul>\\n'
    '    <li><a href="/news/1">News One</a></li>\\n'
    '    <li><a href="/news/2">News Two</a></li>\\n'
    '    <li><a href="https://example.com">External Link</a></li>\\n'
    '    <li>No link</li>\\n'
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
print(f"Found {len(g.links)} links:")
for text, href in g.links:
    print(f"  {text} → {href}")
`},
{id:40,title:"Real‑World: Scraping Tables and Lists",tag:"Specialty",content:`
# Chapter 40: Real‑World — Scraping Tables and Lists


> 🕷 **Specialty · Web Scraping**: Turn scattered tags into structured data (one record at a time).


## 40.1 Goal: turn a web page into a list of dicts


In the end, scrapers produce something like this:


\`\`\`python
[
  {"title": "News A", "url": "/a", "date": "2026-06-08"},
  {"title": "News B", "url": "/b", "date": "2026-06-07"},
  ...
]
\`\`\`


Then you can save to CSV / database / pandas.


## 40.2 Standard pattern for a “list page”


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


**Three‑step memory aid**:


1. **Outer loop**: selector for each record’s container (here \`div.news-card\`)
2. **Inner loop**: extract each field inside the container
3. **Package**: build a dict and append to list


## 40.3 Handling missing fields


Not every card has a date; writing it directly would crash:


\`\`\`python
date_el = card.select_one("span.date")
date = date_el.get_text(strip=True) if date_el else "Unknown"
\`\`\`


> 💡 Walrus operator: \`date = (e.get_text(strip=True) if (e := card.select_one("span.date")) else "Unknown")\`


## 40.4 Scraping \`<td>\` tables


\`\`\`python
table = soup.select_one("table.scores")
rows = []
for tr in table.select("tbody tr"):
    cells = [td.get_text(strip=True) for td in tr.select("td")]
    rows.append(cells)


# Or using pandas in one line
import pandas as pd
df = pd.read_html(html)[0]    # automatically finds the first table
\`\`\`


> \`pd.read_html\` is almost magical for clean tables; for complex layouts you still need manual code.


## 40.5 Text cleaning three techniques


| Technique | Purpose |
|-----------|---------|
| \`.get_text(strip=True)\` | remove surrounding whitespace and newlines |
| \`re.sub(r'\\s+', ' ', s)\` | collapse multiple spaces into one |
| \`s.replace('\\xa0', ' ')\` | replace non‑breaking space |


## 40.6 Try it (simulated)


The example embeds a small “news list” HTML and parses it into a list of dicts using the standard library.
`,
example:`# Simulate: parse a news list page into [{title, url}, ...]
from html.parser import HTMLParser


html = (
    '\\n<div class="news-list">\\n'
    '  <div class="news-card">\\n'
    '    <h3 class="title">APCS June exam announced</h3>\\n'
    '    <a href="/news/1">Read more</a>\\n'
    '  </div>\\n'
    '  <div class="news-card">\\n'
    '    <h3 class="title">New trends in university programming</h3>\\n'
    '    <a href="/news/2">Read more</a>\\n'
    '  </div>\\n'
    '  <div class="news-card">\\n'
    '    <h3 class="title">Ministry of Education releases new curriculum</h3>\\n'
    '    <a href="/news/3">Read more</a>\\n'
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
print(f"Scraped {len(p.items)} news items:")
for item in p.items:
    print(f"  [{item['url']}] {item['title']}")
`},
{id:41,title:"Pagination and Crawling Flow",tag:"Specialty",content:`
# Chapter 41: Pagination and Crawling Flow


> 🕷 **Specialty · Web Scraping**: Real websites don’t put ten thousand items on one page. Learning to “turn pages” is the second big hurdle.


## 41.1 Three common pagination patterns


### Path‑based pagination
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


### Query‑string pagination
\`\`\`
https://site/list?page=1
https://site/list?page=2
\`\`\`


\`\`\`python
for page in range(1, 11):
    r = requests.get("https://site/list", params={"page": page}, timeout=5)
    parse(r.text)
\`\`\`


### “Next” link (no total pages given)
\`\`\`python
url = "https://site/list"
while url:
    r = requests.get(url, timeout=5)
    soup = BeautifulSoup(r.text, "html.parser")
    parse(soup)
    next_a = soup.select_one("a.next")
    url = next_a["href"] if next_a else None
\`\`\`


## 41.2 When to stop? Three termination conditions


| Condition | How to detect |
|-----------|---------------|
| Reached a page limit | \`if page > MAX: break\` |
| No data on page | \`if not items: break\` |
| Duplicate content seen | use a \`set\` to track seen ids |


## 41.3 Deduplication: using a set is fundamental


\`\`\`python
seen = set()
results = []
for page in range(1, 100):
    items = fetch_page(page)
    new = [it for it in items if it["id"] not in seen]
    if not new:
        print(f"page {page} all duplicates, stopping")
        break
    for it in new:
        seen.add(it["id"])
        results.append(it)
\`\`\`


## 41.4 Polite delays: don’t hammer the server


\`\`\`python
import time, random


for page in range(1, 11):
    fetch_page(page)
    time.sleep(random.uniform(1, 3))   # random 1–3 seconds
\`\`\`


> 🛡 **Bottom line**: making more than 1 request per second might be seen as a DDoS attack. Beginners should use \`time.sleep(2)\`.


## 41.5 Complete crawling template


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
        print(f"page {page} failed: {e}")
        continue


    soup = BeautifulSoup(r.text, "html.parser")
    items = [parse_card(c) for c in soup.select("div.card")]
    new = [it for it in items if it["id"] not in seen_ids]


    if not new:
        print(f"page {page} no new data, stopping")
        break


    for it in new:
        seen_ids.add(it["id"])
        all_items.append(it)


    print(f"page {page}: +{len(new)} items (total {len(all_items)})")
    time.sleep(1.5)


print(f"Total scraped: {len(all_items)}")
\`\`\`


## 41.6 Try it


The example simulates 5 pages, each with 3 items, including one duplicate across pages. See how deduplication works.
`,
example:`# Simulate: crawl 5 pages + deduplicate
def fetch_page(page):
    # pretend this is the result after requests.get and parsing
    fake = {
        1: [{"id":1,"t":"A"},{"id":2,"t":"B"},{"id":3,"t":"C"}],
        2: [{"id":3,"t":"C"},{"id":4,"t":"D"},{"id":5,"t":"E"}],  # id=3 duplicate
        3: [{"id":6,"t":"F"},{"id":7,"t":"G"},{"id":8,"t":"H"}],
        4: [{"id":9,"t":"I"},{"id":10,"t":"J"}],
        5: [],   # no data
    }
    return fake.get(page, [])


seen = set()
results = []


for page in range(1, 100):
    items = fetch_page(page)
    new = [it for it in items if it["id"] not in seen]
    if not items:
        print(f"page {page}: empty, stop"); break
    if not new:
        print(f"page {page}: all duplicates, stop"); break
    for it in new:
        seen.add(it["id"]); results.append(it)
    print(f"page {page}: +{len(new)} items (total {len(results)})")


print(f"\\nFinal: {len(results)} items, deduplicated ids: {sorted(seen)}")
`},
{id:42,title:"Saving Scraped Data: CSV / JSON",tag:"Specialty",content:`
# Chapter 42: Saving Scraped Data: CSV / JSON


> 🕷 **Specialty · Web Scraping**: If you don’t save it, you scraped for nothing. Learn the two most common formats.


## 42.1 CSV: can be opened by Excel


\`\`\`python
import csv


rows = [
    {"title": "News A", "url": "/a", "views": 100},
    {"title": "News B", "url": "/b", "views": 250},
]


with open("news.csv", "w", newline="", encoding="utf-8-sig") as f:
    w = csv.DictWriter(f, fieldnames=["title", "url", "views"])
    w.writeheader()
    w.writerows(rows)
\`\`\`


Key settings:


| Setting | Why |
|---------|-----|
| \`newline=""\` | prevents extra blank lines on Windows |
| \`encoding="utf-8-sig"\` | Excel opens Chinese without garbling (adds BOM) |
| \`DictWriter\` | write dicts directly, auto‑map fields |


## 42.2 Reading back


\`\`\`python
with open("news.csv", encoding="utf-8-sig") as f:
    r = csv.DictReader(f)
    for row in r:
        print(row["title"], int(row["views"]))
\`\`\`


> 💡 CSV reads everything as strings; convert numbers explicitly.


## 42.3 JSON: preserves structure


When your data has nesting (list inside dict, dict inside list), use JSON:


\`\`\`python
import json


data = [
    {"title": "News A", "tags": ["education", "exam"], "meta": {"author": "editor"}},
    {"title": "News B", "tags": ["tech"], "meta": {"author": "reporter"}},
]


with open("news.json", "w", encoding="utf-8") as f:
    json.dump(data, f, ensure_ascii=False, indent=2)
\`\`\`


\`ensure_ascii=False\` → Chinese won’t become \`\\uXXXX\`.
\`indent=2\` → pretty‑printed.


## 42.4 Reading back JSON


\`\`\`python
with open("news.json", encoding="utf-8") as f:
    data = json.load(f)
print(data[0]["title"])
\`\`\`


## 42.5 “Crawl and write incrementally” to survive crashes


If you’re scraping 10,000 items, don’t collect everything in memory then write. If it crashes halfway, you lose everything. **Write every 100 items**:


\`\`\`python
import csv


with open("news.csv", "a", newline="", encoding="utf-8-sig") as f:
    w = csv.writer(f)
    for batch in batches_of(100):
        for it in batch:
            w.writerow([it["title"], it["url"], it["views"]])
        f.flush()                  # force write to disk
\`\`\`


## 42.6 When to use which?


| Data shape | Recommended |
|------------|-------------|
| 2D table (fixed columns) | CSV |
| Nested structures | JSON |
| Need Excel to open | CSV (with \`utf-8-sig\`) |
| Feed to another program | JSON |
| One record per line, independent | JSONL (\`.jsonl\`, one JSON per line) |


## 42.7 Try it


The example uses \`io.StringIO\` to generate CSV and JSON in memory (without writing to disk), so you can see the formats.
`,
example:`# In‑memory demonstration of CSV / JSON serialisation (no disk write)
import csv, json, io


rows = [
    {"title": "News A", "url": "/a", "views": 100},
    {"title": "News B", "url": "/b", "views": 250},
    {"title": "News C", "url": "/c", "views": 80},
]


# ── CSV ──
buf = io.StringIO()
w = csv.DictWriter(buf, fieldnames=["title", "url", "views"])
w.writeheader()
w.writerows(rows)
print("===== CSV =====")
print(buf.getvalue())


# Read back
buf.seek(0)
r = csv.DictReader(buf)
total_views = sum(int(row["views"]) for row in r)
print(f"Total views: {total_views}")


# ── JSON ──
js = json.dumps(rows, ensure_ascii=False, indent=2)
print("\\n===== JSON =====")
print(js)


# Read back
back = json.loads(js)
print(f"\\nFirst item title: {back[0]['title']}")
`},
{id:43,title:"Scraper Robustness, Rate Limits, and Ethics",tag:"Specialty",content:`
# Chapter 43: Scraper Robustness, Rate Limits, and Ethics


> 🕷 **Specialty · Web Scraping**: The final chapter — how to be a crawler that nobody hates.


## 43.1 robots.txt: first check if you are allowed


Every proper website has:
\`\`\`
https://example.com/robots.txt
\`\`\`


Example content:
\`\`\`
User-agent: *
Disallow: /admin/
Disallow: /private/
Allow: /
Crawl-delay: 2
\`\`\`


Meaning: all crawlers cannot access \`/admin/\`, \`/private/\`; wait 2 seconds between requests.


Python’s built‑in parser:


\`\`\`python
import urllib.robotparser


rp = urllib.robotparser.RobotFileParser()
rp.set_url("https://example.com/robots.txt")
rp.read()
print(rp.can_fetch("*", "https://example.com/admin/"))   # False
\`\`\`


## 43.2 Three things you should NEVER do


| ❌ Don’t do this | Why |
|-----------------|-----|
| **Hundreds of requests per second** | That’s a DDoS attack, legally actionable |
| **Ignore robots.txt** | Violates industry norms, may be illegal |
| **Scrape personal data and sell it** | Legal + ethical problem |


## 43.3 Robustness 1: retry + exponential backoff


When rate‑limited (429), wait longer and retry:


\`\`\`python
import time, requests


def fetch_with_retry(url, max_retry=3):
    for attempt in range(max_retry):
        try:
            r = requests.get(url, timeout=10)
            if r.status_code == 429:
                wait = 2 ** attempt          # 1, 2, 4 seconds
                print(f"Rate limited, waiting {wait}s")
                time.sleep(wait)
                continue
            r.raise_for_status()
            return r
        except requests.RequestException as e:
            print(f"Attempt {attempt+1} failed: {e}")
            time.sleep(2 ** attempt)
    return None
\`\`\`


## 43.4 Robustness 2: log failures centrally


\`\`\`python
fails = []


for url in urls:
    try:
        r = fetch_with_retry(url)
        if r is None:
            fails.append((url, "retry failed"))
            continue
        parse(r.text)
    except Exception as e:
        fails.append((url, str(e)))


print(f"Succeeded {len(urls)-len(fails)}, failed {len(fails)}")
for url, err in fails:
    print(f"  {url}: {err}")
\`\`\`


## 43.5 Robustness 3: checkpoint / resume


If you’re scraping 10,000 items and it crashes at item 7234, don’t start over. Save progress:


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


## 43.6 Robustness 4: User‑Agent should be honest


Don’t pretend to be “Googlebot” — that’s legally considered fraud:


\`\`\`python
HEADERS = {
    "User-Agent": "Mozilla/5.0 (compatible; MyResearchBot/1.0; "
                  "+https://yoursite.com/about)"
}
\`\`\`


For personal projects, at least leave a contact (a GitHub link is fine).


## 43.7 Recommended crawl rates


| Scale | Suggested rate |
|-------|----------------|
| Small site (personal blog) | ≤ 1 request / 2 seconds |
| Medium site | 1 request / second |
| Large site (with public API) | follow API rate limits |
| Not sure? | **Start slow, then speed up** |


## 43.8 Final advice


> 🎓 **Insider tip**: If the site offers an API, **use the API**! API gives you structured JSON; scraping HTML is **10 times more painful**.


## 43.9 Try it


The example simulates retry + exponential backoff: 50% chance of failure per attempt. See how many retries are needed to succeed.
`,
example:`# Simulate: retry + exponential backoff
import random


random.seed(42)   # fixed seed for reproducible output


def fake_fetch(url):
    # 50% chance 200, 50% chance 429
    return 200 if random.random() > 0.5 else 429


def fetch_with_retry(url, max_retry=4):
    for attempt in range(max_retry):
        code = fake_fetch(url)
        if code == 200:
            return attempt + 1, "success"
        wait = 2 ** attempt
        print(f"  [{url}] attempt {attempt+1}: {code}, backing off {wait}s")
    return max_retry, "failed"


urls = ["/a", "/b", "/c", "/d", "/e"]
succ = 0
for u in urls:
    print(f"Fetching {u}")
    tries, status = fetch_with_retry(u)
    if status == "success":
        succ += 1
    print(f"  → {status} (after {tries} attempts)")


print(f"\\nSummary: {succ}/{len(urls)} succeeded")
`},
{id:44,title:"Why Learn pandas",tag:"Specialty",content:`
# Chapter 44: Why Learn pandas


> 📊 **Specialty · Data Analysis**: Automate the manual Excel dragging, and handle 1+ million rows.


## 44.1 When Excel hurts


| Scenario | Excel | pandas |
|----------|-------|--------|
| >100k rows | painfully slow | sub‑second |
| Repeat “filter → pivot → sort” every day | manual clicking | script, 1 second |
| Merge multiple files | VLOOKUP nightmare | \`merge\` one line |
| Generate charts automatically | impossible | one line with matplotlib |
| Connect to database / API | impossible | built‑in support |


## 44.2 What is a DataFrame


Think of it as “Python version of an Excel worksheet”:


\`\`\`python
import pandas as pd


df = pd.DataFrame({
    "name":  ["Alice", "Bob", "Cara", "Dan"],
    "score": [92, 75, 88, 60],
    "city":  ["Taipei", "Taichung", "Taipei", "Kaohsiung"],
})
print(df)
\`\`\`


Output:
\`\`\`
    name  score       city
0  Alice     92     Taipei
1    Bob     75  Taichung
2   Cara     88     Taipei
3    Dan     60  Kaohsiung
\`\`\`


Each column is a **Series** (1D), and the whole thing is a **DataFrame** (2D).


## 44.3 Three core concepts


| Concept | Excel analogue | Example |
|---------|----------------|---------|
| **DataFrame** | whole worksheet | \`df\` |
| **Series** | one column | \`df["score"]\` |
| **Index** | row numbers (the 1 in A1) | \`df.index\` |


## 44.4 Installation


\`\`\`bash
pip install pandas matplotlib openpyxl
\`\`\`


- \`pandas\`: core
- \`matplotlib\`: plotting
- \`openpyxl\`: read/write .xlsx


## 44.5 Five‑minute quick start


\`\`\`python
import pandas as pd


# 1) Create data
df = pd.DataFrame({"name": ["A","B","C","D"], "score": [85, 60, 92, 73]})


# 2) Basic statistics
print(df["score"].mean())   # mean
print(df["score"].max())    # max


# 3) Filter
passed = df[df["score"] >= 70]
print(passed)


# 4) Sort
print(df.sort_values("score", ascending=False))


# 5) Save
df.to_csv("scores.csv", index=False, encoding="utf-8-sig")
\`\`\`


These five operations cover 80% of daily needs.


## 44.6 Try it (simulated)


Pyodide doesn’t have pandas pre‑installed. The example below uses stdlib \`statistics\` to simulate. On your local machine, install pandas and run the real version.


> **Cross‑language notes**:
> - **R**: data.frame / dplyr / tidyverse — pandas was inspired by them
> - **SQL**: many pandas operations (groupby, merge) are SQL concepts
> - **C++/Java**: no equivalent “scriptable data analysis” syntax; you’d have to write low‑level loops

## 44.7 🧠 Design Motivation: Why Is pandas Faster Than Python Loops?

This is the most common question. The answer is that pandas is built on **NumPy**, and NumPy's operations are written in C, making heavy use of **vectorization**.

The problem with Python loops: each iteration involves object lookups, type checks, and dynamic dispatch. Python's GIL also prevents true multi-core acceleration.

What pandas/NumPy does instead: stores an entire column as a contiguous block of memory (a C array), then processes the entire column with a single C function call, completely bypassing Python's object system.

This also explains two important corollaries:
1. **Don't write loops over DataFrames** — \`for row in df.iterrows()\` turns something fast into something slow. Use vectorized operations (\`df["col"] * 2\`) instead.
2. **dtypes matter** — if a column of integers gets read as object (string), vectorization breaks down and performance collapses.

\`\`\`python
import pandas as pd
import time

data = list(range(1_000_000))
df = pd.DataFrame({"val": data})

# Method 1: Python loop
t = time.time()
result = [x * 2 for x in df["val"]]
print(f"Python loop:   {time.time()-t:.3f}s")

# Method 2: Vectorized
t = time.time()
result = df["val"] * 2
print(f"Vectorized:    {time.time()-t:.3f}s")
# Vectorized is typically 10–100x faster
\`\`\`
`,
example:`# Simulate basic “DataFrame” operations using stdlib
import statistics
from collections import Counter


# use list of dicts as a mock DataFrame
df = [
    {"name": "Alice", "score": 92, "city": "Taipei"},
    {"name": "Bob",   "score": 75, "city": "Taichung"},
    {"name": "Cara",  "score": 88, "city": "Taipei"},
    {"name": "Dan",   "score": 60, "city": "Kaohsiung"},
]


# print table
print(f"{'name':6}{'score':>5}  {'city':10}")
print('-' * 24)
for r in df:
    print(f"{r['name']:6}{r['score']:>5}  {r['city']:10}")


# a column = Series
scores = [r["score"] for r in df]
print(f"\\nMean: {statistics.mean(scores):.1f}")
print(f"Max: {max(scores)}")
print(f"Min: {min(scores)}")


# filter (boolean mask)
passed = [r for r in df if r["score"] >= 80]
print(f"\\nScore >=80 ({len(passed)} people):")
for r in passed:
    print(f"  {r['name']}: {r['score']}")


# city distribution
city_count = Counter(r["city"] for r in df)
print(f"\\nCity distribution: {dict(city_count)}")
`},
{id:45,title:"Reading Data: CSV / Excel / JSON",tag:"Specialty",content:`
# Chapter 45: Reading Data


> 📊 **Specialty · Data Analysis**: The magic of pandas: one line of \`read_csv\` solves everything.


## 45.1 Reading CSV


\`\`\`python
import pandas as pd
df = pd.read_csv("scores.csv")
\`\`\`


Common parameters:


| Parameter | Purpose |
|-----------|---------|
| \`encoding="utf-8-sig"\` | Chinese without garbling (Excel‑saved CSV) |
| \`sep=","\` | separator (use \`\\t\` for TSV) |
| \`header=0\` | which row is the header (None = no header) |
| \`names=["a","b"]\` | provide your own column names |
| \`dtype={"id": str}\` | force a column’s type |
| \`na_values=["-", "N/A"]\` | custom strings to treat as missing |
| \`nrows=100\` | read only first 100 rows (debugging) |
| \`usecols=["a","b"]\` | read only specific columns |


## 45.2 Reading Excel


\`\`\`python
df = pd.read_excel("scores.xlsx", sheet_name="Grade1")
# Read all sheets
all_sheets = pd.read_excel("scores.xlsx", sheet_name=None)  # returns dict
\`\`\`


Requires \`pip install openpyxl\`.


## 45.3 Reading JSON


\`\`\`python
df = pd.read_json("data.json")           # works for list of dicts
df = pd.read_json("data.jsonl", lines=True)   # one JSON per line
\`\`\`


## 45.4 Creating from dict / list


\`\`\`python
# dict of lists
df = pd.DataFrame({
    "name":  ["A", "B", "C"],
    "score": [90, 80, 70],
})


# list of dicts
df = pd.DataFrame([
    {"name": "A", "score": 90},
    {"name": "B", "score": 80},
])
\`\`\`


## 45.5 Reading directly from the web


\`\`\`python
# public CSV
df = pd.read_csv("https://example.com/data.csv")


# HTML tables (all tables on the page)
tables = pd.read_html("https://en.wikipedia.org/wiki/...")
df = tables[0]   # first table


# SQL database
import sqlite3
conn = sqlite3.connect("my.db")
df = pd.read_sql("SELECT * FROM users", conn)
\`\`\`


## 45.6 First things to do with new data


\`\`\`python
df.head()       # first 5 rows
df.tail(10)     # last 10 rows
df.shape        # (rows, columns)
df.columns      # column names
df.dtypes       # data types of each column
df.info()       # summary: types + non‑null counts
df.describe()   # statistical summary of numeric columns
\`\`\`


> 🎯 **Golden SOP**: new data → \`df.head()\` → \`df.info()\` → \`df.describe()\`. Three lines tell you everything about the dataset.


## 45.7 Try it (simulated)


The example uses \`io.StringIO\` + \`csv\` to simulate the core logic of \`pd.read_csv\`.
`,
example:`# Simulate: read from a string (like pd.read_csv) using stdlib csv
import csv, io
from statistics import mean


csv_text = '''name,score,city
Alice,92,Taipei
Bob,75,Taichung
Cara,88,Taipei
Dan,60,Kaohsiung
Eve,,NewTaipei
'''


# 1) Read it
reader = csv.DictReader(io.StringIO(csv_text))
rows = list(reader)


print(f"shape: ({len(rows)}, {len(rows[0])})")
print(f"columns: {list(rows[0].keys())}")


# 2) head: first 3 rows
print("\\nhead(3):")
for r in rows[:3]:
    print(f"  {r}")


# 3) info: non‑null counts
print("\\ninfo:")
for col in rows[0].keys():
    vals = [r[col] for r in rows if r[col] != '']
    print(f"  {col:12} non‑null={len(vals)}/{len(rows)}")


# 4) describe (numeric columns only)
scores = [int(r["score"]) for r in rows if r["score"]]
print(f"\\nscore describe:")
print(f"  count={len(scores)}, mean={mean(scores):.1f}, min={min(scores)}, max={max(scores)}")
`},
{id:46,title:"Selecting Columns and Rows: pandas Core",tag:"Specialty",content:`
# Chapter 46: Selecting Columns and Rows — pandas Core


> 📊 **Specialty · Data Analysis**: Learn 4 selection methods and you can do 90% of data slicing.


## 46.1 Select one column, select multiple columns


\`\`\`python
df["score"]                # one column → Series
df[["name", "score"]]      # multiple columns (note double brackets) → DataFrame
\`\`\`


## 46.2 Select rows: boolean mask (the most used!)


\`\`\`python
df[df["score"] >= 80]                              # score >= 80
df[(df["score"] >= 80) & (df["city"] == "Taipei")]   # two conditions (use &, not and)
df[df["city"].isin(["Taipei", "Taichung"])]        # in a list
df[df["name"].str.startswith("A")]                 # string methods
\`\`\`


> ⚠️ In pandas, boolean conditions use \`&\` \`|\` \`~\`, not \`and\` \`or\` \`not\`, and each condition must be inside parentheses.


## 46.3 Using query: more readable


\`\`\`python
df.query("score >= 80")
df.query("score >= 80 and city == 'Taipei'")
df.query("city in ['Taipei', 'Taichung']")
\`\`\`


## 46.4 .loc and .iloc: precise positioning


| Syntax | Meaning |
|--------|---------|
| \`df.loc[3]\` | row with index label 3 |
| \`df.loc[3, "name"]\` | column “name” at row 3 |
| \`df.loc[df["score"]>80, "name"]\` | condition + specific column |
| \`df.iloc[0]\` | row at position 0 |
| \`df.iloc[0:5]\` | first 5 rows |
| \`df.iloc[:, 0]\` | column at position 0 |
| \`df.iloc[0:5, 0:2]\` | slice |


## 46.5 Modifying values


\`\`\`python
df.loc[df["score"] < 60, "passed"] = False    # add/modify a column
df.loc[3, "name"] = "Bobby"                   # modify a specific cell
\`\`\`


> ❌ **Never write \`df[mask]["col"] = ...\`** — that triggers a “SettingWithCopyWarning” and may not modify the original df. Always use \`.loc[mask, "col"] = ...\`.


## 46.6 Adding new columns


\`\`\`python
df["pass"] = df["score"] >= 60              # condition → bool
df["double"] = df["score"] * 2              # arithmetic
df["grade"] = df["score"].apply(            # custom function
    lambda s: "A" if s >= 90 else ("B" if s >= 70 else "C")
)
\`\`\`


## 46.7 Deleting columns / rows


\`\`\`python
df = df.drop(columns=["city"])              # drop column
df = df.drop(index=[0, 1])                  # drop rows
df = df.drop_duplicates()                   # deduplicate
\`\`\`


> 💡 By default, drop does not modify in place. You can use \`inplace=True\`, but industry practice prefers \`df = df.drop(...)\`.


## 46.8 Try it (simulated)


The example demonstrates the “select columns + filter rows + add computed column” trilogy.
`,
example:`# Simulate pandas‑style selection on a list of dicts
df = [
    {"name": "Alice", "score": 92, "city": "Taipei"},
    {"name": "Bob",   "score": 75, "city": "Taichung"},
    {"name": "Cara",  "score": 88, "city": "Taipei"},
    {"name": "Dan",   "score": 60, "city": "Kaohsiung"},
    {"name": "Eve",   "score": 95, "city": "Taipei"},
]


# 1) Select columns: df[["name","score"]]
print("Select columns [name, score]:")
for r in df:
    print(f"  {r['name']}: {r['score']}")


# 2) Filter rows: df[(df.score >= 80) & (df.city == "Taipei")]
print("\\nTaipei and score >= 80:")
filt = [r for r in df if r["score"] >= 80 and r["city"] == "Taipei"]
for r in filt:
    print(f"  {r}")


# 3) Add a column: df["grade"] = ...
def grade(s):
    if s >= 90: return "A"
    if s >= 70: return "B"
    return "C"


for r in df:
    r["grade"] = grade(r["score"])


print("\\nAfter adding grade column:")
for r in df:
    print(f"  {r['name']}: {r['score']} → {r['grade']}")


# 4) Count per grade
from collections import Counter
print(f"\\nGrade distribution: {dict(Counter(r['grade'] for r in df))}")
`},
{id:47,title:"Cleaning Dirty Data",tag:"Specialty",content:`
# Chapter 47: Cleaning Dirty Data


> 📊 **Specialty · Data Analysis**: In the real world, 80% of data is dirty. Cleaning is the daily job of an analyst.


## 47.1 Missing values (NaN)


pandas uses \`NaN\` (Not a Number) to represent missing values.


\`\`\`python
df.isna()              # bool DataFrame, True = missing
df.isna().sum()        # count of missing values per column
df.dropna()            # drop any row with any missing value
df.dropna(subset=["score"])    # only consider the score column
df.fillna(0)           # fill with 0
df.fillna({"score": df["score"].mean(),  # fill mean for score
           "city":  "Unknown"})
df["score"].fillna(method="ffill")   # forward fill (time series)
\`\`\`


## 47.2 Type conversion


\`\`\`python
df["score"] = df["score"].astype(int)
df["date"] = pd.to_datetime(df["date"])
df["price"] = pd.to_numeric(df["price"], errors="coerce")  # errors → NaN
\`\`\`


## 47.3 String cleaning .str


\`\`\`python
df["name"] = df["name"].str.strip()           # remove leading/trailing spaces
df["name"] = df["name"].str.lower()           # lowercase
df["phone"] = df["phone"].str.replace("-", "")
df["email"] = df["email"].str.contains("@")   # boolean
df[["first","last"]] = df["full"].str.split(" ", expand=True)
\`\`\`


## 47.4 Duplicate data


\`\`\`python
df.duplicated()              # boolean per row
df.duplicated(subset=["id"]) # only consider id column
df.drop_duplicates()         # remove duplicates
df.drop_duplicates(subset=["id"], keep="last")  # keep the last occurrence
\`\`\`


## 47.5 Outliers


\`\`\`python
# Using IQR
Q1, Q3 = df["price"].quantile([0.25, 0.75])
IQR = Q3 - Q1
mask = (df["price"] < Q1 - 1.5*IQR) | (df["price"] > Q3 + 1.5*IQR)
outliers = df[mask]
clean = df[~mask]
\`\`\`


## 47.6 Renaming columns


\`\`\`python
df = df.rename(columns={"old_name": "new_name", "x": "y"})
df.columns = ["a", "b", "c"]   # replace all
df.columns = df.columns.str.lower().str.replace(" ", "_")  # batch
\`\`\`


## 47.7 Cleaning SOP


In practice, when you get a new file, run this chain:


\`\`\`python
df = pd.read_csv("raw.csv", encoding="utf-8-sig")
print(df.isna().sum())              # 1) check missing
print(df.dtypes)                     # 2) check types
print(df.duplicated().sum())         # 3) check duplicates
df.columns = df.columns.str.strip().str.lower()
df = df.drop_duplicates()
df = df.dropna(subset=["id"])
df["score"] = pd.to_numeric(df["score"], errors="coerce")
df["score"] = df["score"].fillna(df["score"].mean())
\`\`\`


## 47.8 Try it (simulated)


The example shows common dirty data: empty strings, numbers as strings, duplicates, and cleans them.
`,
example:`# Simulate cleaning dirty data using stdlib
from statistics import mean


# Mock dirty dataset
raw = [
    {"name": "Alice", "score": "92"},
    {"name": " Bob ", "score": "75"},     # extra spaces
    {"name": "Cara",  "score": ""},        # missing
    {"name": "Dan",   "score": "abc"},     # not a number
    {"name": "Alice", "score": "92"},      # duplicate
    {"name": "Eve",   "score": "88"},
]


print(f"Raw {len(raw)} rows")


# 1) trim whitespace from names
for r in raw:
    r["name"] = r["name"].strip()


# 2) convert to number (pd.to_numeric errors="coerce")
def to_num(s):
    try:
        return int(s)
    except (ValueError, TypeError):
        return None  # acts like NaN


for r in raw:
    r["score_num"] = to_num(r["score"])


print(f"Missing values after conversion: {sum(1 for r in raw if r['score_num'] is None)}")


# 3) fill missing with mean
valid = [r["score_num"] for r in raw if r["score_num"] is not None]
avg = mean(valid)
print(f"Score mean: {avg:.1f}")
for r in raw:
    if r["score_num"] is None:
        r["score_num"] = round(avg)


# 4) deduplicate
seen = set()
unique = []
for r in raw:
    key = (r["name"], r["score_num"])
    if key not in seen:
        seen.add(key)
        unique.append(r)


print(f"\\nAfter cleaning: {len(unique)} rows")
for r in unique:
    print(f"  {r['name']:6} {r['score_num']}")
`},
{id:48,title:"Statistics and Aggregation",tag:"Specialty",content:`
# Chapter 48: Statistics and Aggregation


> 📊 **Specialty · Data Analysis**: Squeeze thousands of rows into a single number or a leaderboard.


## 48.1 Single‑column statistics


\`\`\`python
df["score"].sum()         # sum
df["score"].mean()        # mean
df["score"].median()      # median
df["score"].std()         # standard deviation
df["score"].var()         # variance
df["score"].min(), df["score"].max()
df["score"].quantile(0.75)   # 75th percentile
df["score"].count()       # non‑null count
df["score"].nunique()     # number of distinct values
\`\`\`


## 48.2 One‑click summary


\`\`\`python
df.describe()
\`\`\`


Output:
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


For non‑numeric columns:
\`\`\`python
df.describe(include="object")   # count/unique/top/freq
df.describe(include="all")
\`\`\`


## 48.3 value_counts: killer for categorical columns


\`\`\`python
df["city"].value_counts()
# Taipei       45
# Taichung     23
# Kaohsiung    18
# NewTaipei    14


df["city"].value_counts(normalize=True)   # proportions
df["city"].value_counts(dropna=False)     # include NaN
\`\`\`


## 48.4 Sorting


\`\`\`python
df.sort_values("score", ascending=False)
df.sort_values(["city", "score"], ascending=[True, False])
df.nlargest(5, "score")     # top 5 (faster than sort)
df.nsmallest(5, "score")
\`\`\`


## 48.5 Ranking


\`\`\`python
df["rank"] = df["score"].rank(ascending=False, method="min")
# method: 'min'  → ties get the smaller rank (most common)
#         'dense' → next rank after ties is +1
#         'first' → order of appearance
\`\`\`


## 48.6 Cumulative cumsum / cummax


\`\`\`python
df["cum_score"] = df["score"].cumsum()    # cumulative sum
df["max_so_far"] = df["score"].cummax()   # running maximum
\`\`\`


Very common in time‑series analysis.


## 48.7 Multiple aggregates: agg


\`\`\`python
df.agg({
    "score": ["mean", "max", "min"],
    "age":   ["mean", "std"],
})
\`\`\`


## 48.8 Try it


The example shows 5 classic aggregation operations: mean / value_counts / sort / rank / cumsum.
`,
example:`# Simulate 5 pandas aggregation operations
from statistics import mean, median, stdev
from collections import Counter


df = [
    {"name": "Alice", "score": 92, "city": "Taipei"},
    {"name": "Bob",   "score": 75, "city": "Taichung"},
    {"name": "Cara",  "score": 88, "city": "Taipei"},
    {"name": "Dan",   "score": 60, "city": "Kaohsiung"},
    {"name": "Eve",   "score": 95, "city": "Taipei"},
    {"name": "Frank", "score": 82, "city": "Taichung"},
    {"name": "Gina",  "score": 75, "city": "NewTaipei"},
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


# 5) cumsum (in original order)
print("\\n=== cumsum (original order) ===")
cum = 0
for r in df:
    cum += r["score"]
    print(f"  {r['name']:6} cum={cum}")
`},
{id:49,title:"groupby — Core of Pivot Tables",tag:"Specialty",content:`
# Chapter 49: groupby — Core of Pivot Tables


> 📊 **Specialty · Data Analysis**: Split data by a column, then compute statistics per group. The single most important operation in data analysis.


## 49.1 Three steps: split‑apply‑combine


| Step | Action |
|------|--------|
| **split** | split by city into {Taipei:[...], Taichung:[...]} |
| **apply** | compute mean(score) for each group |
| **combine** | merge back into one DataFrame |


\`\`\`python
df.groupby("city")["score"].mean()
# city
# Taipei       91.7
# Taichung     78.5
# Kaohsiung    60.0
\`\`\`


## 49.2 Multiple aggregations


\`\`\`python
df.groupby("city").agg({
    "score": ["mean", "max", "count"],
    "age":   "mean",
})
\`\`\`


Or more concise:


\`\`\`python
df.groupby("city").agg(
    avg_score = ("score", "mean"),
    max_score = ("score", "max"),
    students  = ("name", "count"),
)
\`\`\`


## 49.3 Grouping by multiple columns


\`\`\`python
df.groupby(["city", "grade"])["score"].mean()
\`\`\`


## 49.4 Custom aggregation


\`\`\`python
df.groupby("city")["score"].agg(lambda s: s.max() - s.min())
# score range per city
\`\`\`


## 49.5 transform: put the result back into each row


\`agg\` compresses data; \`transform\` broadcasts the result back to every row:


\`\`\`python
df["city_avg"] = df.groupby("city")["score"].transform("mean")
df["above_city_avg"] = df["score"] > df["city_avg"]
\`\`\`


> 🎯 This is extremely useful: flag “people who are above their city’s average”.


## 49.6 filter: keep whole groups


\`\`\`python
# keep only cities with at least 5 people
big_cities = df.groupby("city").filter(lambda g: len(g) >= 5)
\`\`\`


## 49.7 apply: the most flexible


\`\`\`python
def top2_avg(g):
    return g.nlargest(2, "score")["score"].mean()


df.groupby("city").apply(top2_avg)
\`\`\`


## 49.8 pivot_table: Excel pivot table equivalent


\`\`\`python
df.pivot_table(
    index="city",
    columns="grade",
    values="score",
    aggfunc="mean",
    fill_value=0,
)
\`\`\`


This is exactly the same as an Excel pivot table.


## 49.9 Try it


The example does the most common groupby operation: group by city, compute mean, max, count.
`,
example:`# Simulate groupby: split‑apply‑combine
from collections import defaultdict
from statistics import mean


df = [
    {"name": "Alice", "score": 92, "city": "Taipei"},
    {"name": "Bob",   "score": 75, "city": "Taichung"},
    {"name": "Cara",  "score": 88, "city": "Taipei"},
    {"name": "Dan",   "score": 60, "city": "Kaohsiung"},
    {"name": "Eve",   "score": 95, "city": "Taipei"},
    {"name": "Frank", "score": 82, "city": "Taichung"},
    {"name": "Gina",  "score": 75, "city": "NewTaipei"},
]


# Step 1: split
groups = defaultdict(list)
for r in df:
    groups[r["city"]].append(r["score"])


# Step 2+3: apply + combine
print(f"{'city':12}{'avg':>6}{'max':>6}{'count':>7}")
print('-' * 30)
for city in sorted(groups):
    scores = groups[city]
    print(f"{city:12}{mean(scores):>6.1f}{max(scores):>6}{len(scores):>7}")


# transform style: put group mean back into each row
print("\\n=== transform: each row gets its city mean, ★ if above ===")
city_avg = {c: mean(s) for c, s in groups.items()}
for r in df:
    avg = city_avg[r["city"]]
    star = ' ★' if r["score"] > avg else ''
    print(f"  {r['name']:6} {r['city']:10} score={r['score']} city_avg={avg:.1f}{star}")
`},{id:50,title:"Merging Data: merge / concat",tag:"Specialty",content:`
# Chapter 50: Merging Multiple Datasets — merge / concat


> 📊 **Specialty · Data Analysis**: Learn SQL JOINs; pandas can do it in one line.


## 50.1 concat: vertical / horizontal stacking


\`\`\`python
# vertical (stack)
pd.concat([df1, df2], ignore_index=True)


# horizontal (side by side)
pd.concat([df1, df2], axis=1)
\`\`\`


When to use: merging “multiple files / months” with the same structure.


\`\`\`python
import glob
dfs = [pd.read_csv(f) for f in glob.glob("data/2026-*.csv")]
all_data = pd.concat(dfs, ignore_index=True)
\`\`\`


## 50.2 merge: SQL JOIN


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


Four types of \`how\`:


| how | meaning |
|-----|---------|
| **inner** | keep rows that exist in both (default) |
| **left** | keep all left rows, fill missing on right with NaN |
| **right** | keep all right rows |
| **outer** | keep all rows from both, fill missing with NaN |


## 50.3 Joining on different column names


\`\`\`python
df1.merge(df2, left_on="user_id", right_on="uid", how="left")
\`\`\`


## 50.4 Multi‑column keys


\`\`\`python
df1.merge(df2, on=["year", "month"])
\`\`\`


## 50.5 join: using the index


\`\`\`python
df1.join(df2, on="id", how="left")
\`\`\`


\`join\` is a convenient wrapper around \`merge\` that defaults to using the index.


## 50.6 melt: wide to long


\`\`\`python
# wide table (one column per month)
#   name  Jan  Feb  Mar
#   Alice  90   85   92


long = df.melt(id_vars="name", var_name="month", value_name="score")
# name   month  score
# Alice  Jan    90
# Alice  Feb    85
\`\`\`


Many analysis tools prefer the “long” format.


## 50.7 pivot: long to wide


\`\`\`python
wide = long.pivot(index="name", columns="month", values="score")
\`\`\`


## 50.8 Try it


The example shows inner / left / outer joins and their differences.
`,example:`
# Simulate: three types of merge
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
    {"id": 5, "score": 70},  # id 5 not in students
]


# build maps for quick lookup
sc_map = {r["id"]: r["score"] for r in scores}
st_map = {r["id"]: r["name"] for r in students}


def show(rows, title):
    print(f"=== {title} ({len(rows)} rows) ===")
    for r in rows:
        print(f"  {r}")
    print()


# 1) inner: both sides
inner = []
for s in students:
    if s["id"] in sc_map:
        inner.append({"id": s["id"], "name": s["name"], "score": sc_map[s["id"]]})
show(inner, "INNER JOIN")


# 2) left: students as left
left = []
for s in students:
    left.append({"id": s["id"], "name": s["name"],
                 "score": sc_map.get(s["id"])})  # missing → None
show(left, "LEFT JOIN")


# 3) outer: keep all ids
all_ids = sorted(set(st_map) | set(sc_map))
outer = []
for i in all_ids:
    outer.append({"id": i, "name": st_map.get(i), "score": sc_map.get(i)})
show(outer, "OUTER JOIN")
`},
{id:51,title:"Visualisation: matplotlib Basics",tag:"Specialty",content:`
# Chapter 51: Visualisation — matplotlib Basics


> 📊 **Specialty · Data Analysis**: Turn numbers into charts that bosses can understand.


## 51.1 Three main chart types


### Line chart (time series / trends)


\`\`\`python
import matplotlib.pyplot as plt
import pandas as pd


df = pd.read_csv("daily_sales.csv")
plt.plot(df["date"], df["sales"])
plt.title("Daily Sales")
plt.xlabel("Date"); plt.ylabel("Sales")
plt.show()
\`\`\`


### Bar chart (comparison by category)


\`\`\`python
city_sales = df.groupby("city")["sales"].sum()
city_sales.plot(kind="bar")
plt.title("Total Sales by City")
plt.show()
\`\`\`


### Histogram (distribution)


\`\`\`python
df["score"].hist(bins=20)
plt.title("Score Distribution")
plt.show()
\`\`\`


## 51.2 Built‑in pandas plotting


DataFrame / Series have \`.plot()\`:


\`\`\`python
df.plot(x="date", y="sales")
df.plot.bar(x="city", y="sales")
df.plot.scatter(x="age", y="income")
df.plot.box()              # box plot (quartiles)
df.plot.hist(bins=20)
\`\`\`


\`kind\` quick reference: \`line\`, \`bar\`, \`barh\`, \`hist\`, \`box\`, \`kde\`, \`scatter\`, \`pie\`.


## 51.3 Multiple subplots


\`\`\`python
fig, axes = plt.subplots(2, 2, figsize=(10, 8))
df["a"].plot(ax=axes[0, 0], title="A")
df["b"].plot(ax=axes[0, 1], title="B")
df["c"].plot(ax=axes[1, 0], title="C")
df["d"].plot(ax=axes[1, 1], title="D")
plt.tight_layout()
plt.show()
\`\`\`


## 51.4 Chinese font (common headache on Mac/Windows)


\`\`\`python
import matplotlib.pyplot as plt
plt.rcParams["font.sans-serif"] = ["Arial Unicode MS",  # Mac
                                    "Microsoft JhengHei", # Windows
                                    "Noto Sans CJK TC"]   # Linux
plt.rcParams["axes.unicode_minus"] = False
\`\`\`


## 51.5 Styling


\`\`\`python
plt.style.use("seaborn-v0_8")        # apply a theme
plt.figure(figsize=(10, 6))           # set size
plt.xticks(rotation=45)               # rotate x‑axis labels
plt.grid(True, alpha=0.3)
plt.legend(loc="upper right")
plt.tight_layout()                    # auto‑layout
plt.savefig("chart.png", dpi=150, bbox_inches="tight")
\`\`\`


## 51.6 seaborn: a high‑level wrapper for matplotlib


\`\`\`python
import seaborn as sns
sns.boxplot(data=df, x="city", y="score")
sns.heatmap(df.corr(), annot=True, cmap="coolwarm")
sns.pairplot(df, hue="grade")
\`\`\`


> 🎨 One pretty statistical chart = matplotlib for details + seaborn for style.


## 51.7 Try it (simulated)


Pyodide doesn’t have matplotlib, so the example uses ASCII art to show the concept of a bar chart.
`,example:`# Simulate: bar chart with ASCII (concept of matplotlib)
from collections import Counter


df = [
    {"city": "Taipei", "score": 92},
    {"city": "Taichung", "score": 75},
    {"city": "Taipei", "score": 88},
    {"city": "Kaohsiung", "score": 60},
    {"city": "Taipei", "score": 95},
    {"city": "Taichung", "score": 82},
    {"city": "NewTaipei", "score": 75},
    {"city": "NewTaipei", "score": 80},
    {"city": "NewTaipei", "score": 90},
]


# 1) bar chart: number of people per city
print("=== Number of people per city ===")
counts = Counter(r["city"] for r in df)
maxw = 30
mx = max(counts.values())
for city in sorted(counts):
    n = counts[city]
    bar = '█' * int(n / mx * maxw)
    print(f"  {city:10} | {bar} {n}")


# 2) histogram: score distribution (bins of 10)
print("\\n=== Score distribution (bins of 10) ===")
buckets = [0] * 11   # 0-9, 10-19, ..., 100
for r in df:
    buckets[r["score"] // 10] += 1
for i, n in enumerate(buckets):
    if n == 0: continue
    bar = '█' * n
    print(f"  {i*10:3}-{i*10+9:3} | {bar} {n}")


# 3) mean per city (line chart concept)
print("\\n=== Mean score per city (line chart idea) ===")
from statistics import mean
city_scores = {}
for r in df:
    city_scores.setdefault(r["city"], []).append(r["score"])
for city in sorted(city_scores):
    avg = mean(city_scores[city])
    marker_pos = int(avg / 100 * 40)
    line = '·' * marker_pos + '●'
    print(f"  {city:10} {line} {avg:.1f}")
`},
{id:52,title:"What Is a Bot? Event Loop Basics",tag:"Specialty",content:`
# Chapter 52: What Is a Bot?


> 🤖 **Specialty · Bot**: First, understand what a “robot” actually runs, then write your first line of code.


## 52.1 One‑sentence definition


**Bot = a program that stays online 24/7 and automatically replies when it receives a message.**


Unlike \`print("Hello")\`, it doesn’t finish and exit — it **waits for the next event forever**.


## 52.2 Two operation modes


### Mode 1: Webhook (push)


The platform actively calls you:


\`\`\`
1. User: "!hello"
2. Discord/LINE server → POST https://yourbot.com/webhook
3. Your program receives it → return 200 + message
\`\`\`


- ✅ Real‑time
- ✅ Saves resources
- ❌ Needs a public URL (deploy or ngrok)


### Mode 2: Long Polling / Gateway


Your program actively connects and keeps the connection open:


\`\`\`
1. Your program: "Discord, any new messages?"
2. Discord: "Not yet" (keeps the connection)
3. User sends !hello → Discord pushes it to you
4. Your program: reply "Hi!"
\`\`\`


- ✅ No public URL needed
- ✅ Easy to develop locally
- ❌ Your program must keep running


| Platform | Default mode |
|----------|--------------|
| **Discord** (\`discord.py\`) | Gateway (WebSocket) |
| **LINE** | Webhook |
| **Telegram** | Both supported |


## 52.3 Event loop is the skeleton of every bot


Every bot looks like this:


\`\`\`python
def bot():
    connect_to_platform()
    while True:                  # ← never ends
        event = wait_for_event()
        handler = handlers[event.type]
        handler(event)
\`\`\`


\`discord.py\` and \`line-bot-sdk\` already implement the \`while True\` for you. You just **register event → function mappings**.


## 52.4 What you need


| Item | Purpose |
|------|---------|
| **Bot Token** | Your “ID card” given by the platform; **never push to GitHub** |
| **Environment variables** | Read with \`os.getenv("TOKEN")\` to avoid hardcoding |
| **Python packages** | \`discord.py\` / \`line-bot-sdk\` / \`python-dotenv\` |
| **Public URL** (required for LINE) | ngrok / Render / Railway |


## 52.5 How to store tokens – three steps


1. Create a \`.env\` file (**add it to .gitignore**!)
\`\`\`
DISCORD_TOKEN=MTIzNDU2...
LINE_TOKEN=abc...
\`\`\`


2. Read it with \`dotenv\` in your code:
\`\`\`python
from dotenv import load_dotenv
import os
load_dotenv()
TOKEN = os.getenv("DISCORD_TOKEN")
\`\`\`


3. When deploying, paste the contents of \`.env\` into the platform’s “Environment Variables” settings.


> 🚨 **Consequences of token leak**: Someone else can use your bot to spam, kick members, flood channels. Discord/LINE will also ban your account.


## 52.6 Try it (simulated)


The example implements a miniature “event loop + handler registration” system to show how a bot framework works internally.


> **Cross‑language note**: JavaScript (\`discord.js\`) is also mainstream; Java has \`JDA\`. Different languages, but the event‑loop + handler pattern is the same.

## 52.7 🧠 Design Motivation: Why Does a Bot Use async, Not Multithreading?

A bot's work is mostly "waiting": waiting for messages, API responses, database queries. This type of task is called **I/O-bound**, completely different from CPU-heavy work.

**Multithreading approach**: spin up a thread for each waiting task. The downside: 1000 threads consume a lot of memory, and thread switching itself has overhead.

**async/await approach**: use only one thread, but switch to other work "while waiting." This is a **coroutine** — voluntarily yield the CPU, then resume when the event completes.

Analogy: multithreading is "hire 1000 waiters, each waiting at one table," while async is "one waiter takes another table's order while waiting for one table to decide."

This explains why:
- Any function before \`await\` must be \`async def\` (a coroutine function)
- You can't use \`time.sleep()\` inside an async function — use \`await asyncio.sleep()\` instead
- \`requests\` blocks the entire event loop inside a bot — use \`aiohttp\`

\`\`\`python
import asyncio

# ❌ Wrong: time.sleep freezes the entire bot
# async def bad_handler(message):
#     time.sleep(5)
#     await message.reply("done")

# ✅ Correct: await yields control, other events can still be processed
async def good_handler(message):
    await asyncio.sleep(5)
    await message.reply("done")
\`\`\`
`,
example:`# Simulate a mini bot framework: event dispatcher
# The real discord.py / line-bot-sdk have this structure internally


handlers = {}


def on(event_type):
    # decorator: register event handler
    def deco(fn):
        handlers[event_type] = fn
        return fn
    return deco


# === user‑written bot code ===
@on("ready")
def handle_ready(event):
    print(f"[BOT] Online! I am {event['bot_name']}")


@on("message")
def handle_message(event):
    text = event["text"]
    user = event["user"]
    if text == "!hello":
        print(f"[BOT] → @{user}: Hi! I'm TutorBot")
    elif text == "!help":
        print(f"[BOT] → @{user}: Commands: !hello / !help / !ping")
    elif text == "!ping":
        print(f"[BOT] → @{user}: pong! (45ms)")


@on("member_join")
def handle_join(event):
    print(f"[BOT] Welcome @{event['user']} to the server 🎉")


# === framework internal event loop (simplified) ===
def dispatch(event):
    fn = handlers.get(event["type"])
    if fn:
        fn(event)
    else:
        print(f"[BOT] no handler for {event['type']}")


# simulate a sequence of events
events = [
    {"type": "ready",       "bot_name": "TutorBot"},
    {"type": "message",     "user": "alice", "text": "!hello"},
    {"type": "message",     "user": "bob",   "text": "!ping"},
    {"type": "member_join", "user": "cara"},
    {"type": "message",     "user": "cara",  "text": "!help"},
    {"type": "message",     "user": "dan",   "text": "hi"},   # not a command
]


for ev in events:
    dispatch(ev)
`},
{id:53,title:"Discord Bot Basics",tag:"Specialty",content:`
# Chapter 53: Discord Bot Basics


> 🤖 **Specialty · Bot**: Build your first conversational Discord bot from scratch.


## 53.1 Create a Bot


1. Go to https://discord.com/developers/applications → **New Application**
2. On the left, select **Bot** → **Add Bot**
3. **Reset Token** to get a long string → copy it into \`.env\`
4. Under **Privileged Gateway Intents**, enable these three:
   - PRESENCE INTENT
   - SERVER MEMBERS INTENT
   - **MESSAGE CONTENT INTENT** ← Without this, your bot won’t see message content!


## 53.2 Invite the bot to your server


1. **OAuth2 → URL Generator**
2. Scopes: check \`bot\` + \`applications.commands\`
3. Bot Permissions: check what you need (Send Messages, Read Message History, Use Slash Commands)
4. Copy the generated URL → open in browser → invite to your test server


## 53.3 Install packages


\`\`\`bash
pip install -U discord.py python-dotenv
\`\`\`


## 53.4 First bot


\`\`\`python
# bot.py
import os, discord
from dotenv import load_dotenv


load_dotenv()
TOKEN = os.getenv("DISCORD_TOKEN")


intents = discord.Intents.default()
intents.message_content = True       # corresponds to MESSAGE CONTENT intent
intents.members = True


client = discord.Client(intents=intents)


@client.event
async def on_ready():
    print(f"Online! I am {client.user}")


@client.event
async def on_message(message):
    # don't reply to yourself (infinite loop)
    if message.author == client.user:
        return


    if message.content.startswith("!hello"):
        await message.channel.send(f"Hi {message.author.mention}!")


    elif message.content == "!ping":
        latency = round(client.latency * 1000)
        await message.channel.send(f"pong! latency {latency}ms")


client.run(TOKEN)
\`\`\`


Run:
\`\`\`bash
python bot.py
\`\`\`


Go to your server and try \`!hello\`, \`!ping\`.


## 53.5 Important events


| Event | When triggered |
|-------|----------------|
| \`on_ready\` | Bot comes online |
| \`on_message\` | Any message (including its own) |
| \`on_member_join\` | Someone joins the server |
| \`on_member_remove\` | Someone leaves |
| \`on_reaction_add\` | Someone adds a reaction |
| \`on_disconnect\` | Disconnected |


## 53.6 The \`message\` object


\`\`\`python
message.content              # text content
message.author               # User object
message.author.id            # user ID
message.author.mention       # <@123456>
message.channel              # channel
message.guild                # server (None in DM)
message.attachments          # list of attachments
message.created_at           # datetime
\`\`\`


## 53.7 async / await: essential


\`discord.py\` uses \`asyncio\`:


\`\`\`python
# ✅ correct
@client.event
async def on_message(message):
    await message.channel.send("hi")


# ❌ wrong (no await, message won’t send)
@client.event
async def on_message(message):
    message.channel.send("hi")


# ❌ wrong (time.sleep blocks the whole bot)
import time
time.sleep(5)


# ✅ correct
import asyncio
await asyncio.sleep(5)
\`\`\`


## 53.8 Common errors


| Symptom | Cause |
|---------|-------|
| Bot online but doesn’t reply | MESSAGE CONTENT INTENT not enabled |
| \`Improper token\` | Token copied incorrectly or reset |
| Bot freezes | Used \`time.sleep\` instead of \`asyncio.sleep\` |
| Messages sent twice | Forgot to filter \`message.author == client.user\` |


## 53.9 Try it (simulated)


The example simulates the “command parsing” logic of discord.py: prefix, command name, arguments.
`,
example:`# Simulate: Discord bot command parsing logic
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
    return f"Hi {target}! I'm TutorBot"


@command("ping")
def cmd_ping(author, args):
    return "pong! latency 45ms"


@command("add")
def cmd_add(author, args):
    try:
        nums = [int(x) for x in args]
        return f"Sum = {sum(nums)}"
    except ValueError:
        return "Usage: !add 1 2 3"


@command("help")
def cmd_help(author, args):
    return f"Commands: {', '.join('!' + c for c in commands)}"


# simulate on_message parsing logic
def on_message(author, content):
    if not content.startswith(PREFIX):
        return None  # not a command, ignore
    body = content[len(PREFIX):].split()
    if not body:
        return None
    name, args = body[0], body[1:]
    fn = commands.get(name)
    if not fn:
        return f"Unknown command !{name}, try !help"
    return fn(author, args)


# simulate user messages
msgs = [
    ("alice", "!hello"),
    ("bob",   "!ping"),
    ("cara",  "!add 3 5 8"),
    ("dan",   "!help"),
    ("eve",   "!unknown"),
    ("frank", "hi everyone"),     # not a command
]


for user, text in msgs:
    reply = on_message(user, text)
    if reply:
        print(f"[{user}] {text}")
        print(f"  → {reply}")
`},
{id:54,title:"Discord Advanced: Cog / Slash / Embed",tag:"Specialty",content:`
# Chapter 54: Discord Advanced — Cog / Slash Commands / Embed


> 🤖 **Specialty · Bot**: When you have more than 5 commands, you need better organisation.


## 54.1 commands.Bot: stronger than Client


\`discord.py\` provides \`commands.Bot\` which handles command parsing for you:


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


Note \`a: int, b: int\` — \`discord.py\` **automatically converts strings to int**; if conversion fails, it replies with an error.


## 54.2 Cog: group commands into classes


Once you have many commands, split them into classes:


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


Main file:
\`\`\`python
async def main():
    await bot.load_extension("cogs.math_cog")
    await bot.start(TOKEN)
\`\`\`


## 54.3 Slash Commands: modern Discord standard


Users type \`/\` to see a menu — more intuitive than \`!\`:


\`\`\`python
@bot.tree.command(name="hello", description="Say hello")
async def slash_hello(interaction: discord.Interaction, name: str = "world"):
    await interaction.response.send_message(f"Hello {name}!")


@bot.event
async def on_ready():
    await bot.tree.sync()   # sync commands to Discord
\`\`\`


> ⏰ **First sync takes time**: Global slash commands can take up to **1 hour** to appear. For testing, use \`bot.tree.sync(guild=discord.Object(id=YOUR_GUILD))\` to sync to a specific guild (instant).


## 54.4 Embed: nice card‑style messages


\`\`\`python
@bot.command()
async def profile(ctx, member: discord.Member):
    embed = discord.Embed(
        title=member.display_name,
        description=f"ID: {member.id}",
        color=0x3498db,
    )
    embed.set_thumbnail(url=member.display_avatar.url)
    embed.add_field(name="Joined", value=member.joined_at.strftime("%Y-%m-%d"))
    embed.add_field(name="Roles", value=len(member.roles))
    embed.set_footer(text=f"Requested by {ctx.author}")
    await ctx.send(embed=embed)
\`\`\`


## 54.5 Interactive buttons (View)


\`\`\`python
import discord
from discord.ui import Button, View


class HelloView(View):
    @discord.ui.button(label="Click me", style=discord.ButtonStyle.green)
    async def click(self, interaction, button):
        await interaction.response.send_message("You clicked!", ephemeral=True)


@bot.command()
async def menu(ctx):
    await ctx.send("Try the button:", view=HelloView())
\`\`\`


\`ephemeral=True\` makes the message visible only to the user who clicked.


## 54.6 Error handling


\`\`\`python
@add.error
async def add_error(ctx, error):
    if isinstance(error, commands.BadArgument):
        await ctx.send("Arguments must be integers!")
    elif isinstance(error, commands.MissingRequiredArgument):
        await ctx.send("Usage: !add <number> <number>")
\`\`\`


## 54.7 Try it (simulated)


The example simulates the “automatic type conversion” of \`commands.Bot\`: turning string arguments into int / float / custom types.
`,
example:`# Simulate commands.Bot automatic type conversion
import inspect


commands = {}


def command(fn):
    # decorator: read type hints automatically
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
        return f"[error] unknown command {name}"
    fn, sig = commands[name]
    params = list(sig.parameters.values())
    if len(raw_args) != len(params):
        return f"[error] {name} expects {len(params)} arguments"
    # convert according to type hints
    converted = []
    for arg, p in zip(raw_args, params):
        try:
            converted.append(p.annotation(arg))
        except ValueError:
            return f"[error] parameter {p.name} expects {p.annotation.__name__}, got {arg!r}"
    return fn(*converted)


tests = [
    "add 3 5",
    "avg 80 90 100",
    "repeat hi 3",
    "add 3 abc",        # type error
    "add 3",            # missing arguments
    "unknown 1 2",      # unknown command
]
for line in tests:
    print(f"> {line}")
    print(f"  {dispatch(line)}")
`},
{id:55,title:"LINE Bot Basics",tag:"Specialty",content:`
# Chapter 55: LINE Bot Basics


> 🤖 **Specialty · Bot**: The most common bot platform in Taiwan. Uses webhook + Flask.


## 55.1 Create a Channel


1. Go to https://developers.line.biz/console → Create a Provider
2. Create a **Messaging API** Channel
3. Obtain three key pieces of information:
   - **Channel Secret** (Basic Settings)
   - **Channel Access Token** (Messaging API → Issue)
   - **Bot Basic ID** (\`@xxx\`)


## 55.2 Install packages


\`\`\`bash
pip install line-bot-sdk flask python-dotenv
\`\`\`


## 55.3 First LINE Bot


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
    reply = f"You said: {text}"
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


## 55.4 Let LINE find you: ngrok


LINE cannot reach your local machine. Use ngrok to create a tunnel:


\`\`\`bash
# download ngrok then run
ngrok http 5000
# gives you: https://abc123.ngrok-free.app
\`\`\`


Paste that URL + \`/callback\` into LINE Developer Console → Webhook URL → Verify → Enable “Use webhook”.


## 55.5 Webhook event structure


LINE sends JSON like this:


\`\`\`json
{
  "events": [{
    "type": "message",
    "replyToken": "abc123...",
    "source": {"userId": "U123...", "type": "user"},
    "timestamp": 1717830000000,
    "message": {"type": "text", "id": "456...", "text": "Hello"}
  }]
}
\`\`\`


\`event.reply_token\` can only be used **once** and expires in **30 seconds**; after that, you need \`push_message\` (counts toward quota).


## 55.6 Message types


| event.message.type | How to get |
|--------------------|------------|
| \`text\` | \`event.message.text\` |
| \`image\` | download with \`MessagingApiBlob\` |
| \`video\` / \`audio\` / \`file\` | same as image |
| \`location\` | \`event.message.latitude / longitude\` |
| \`sticker\` | \`event.message.sticker_id\` |


## 55.7 reply vs push


| API | Use case | Limits |
|-----|----------|--------|
| **reply** | immediately after user message (you have a token) | free, 30 seconds |
| **push** | you want to actively message a user | counts toward 200/month free tier |
| **multicast** | send to many users at once | 500 per call |
| **broadcast** | send to all friends | depends on plan |


## 55.8 Try it (simulated)


The example builds a webhook payload and simulates signature verification + event dispatch.
`,
example:`# Simulate: LINE webhook processing flow
import json, hmac, hashlib, base64


SECRET = "my_secret_key"


def sign(body):
    # simulate LINE’s HMAC‑SHA256 signature
    h = hmac.new(SECRET.encode(), body.encode(), hashlib.sha256)
    return base64.b64encode(h.digest()).decode()


def verify(body, signature):
    return hmac.compare_digest(sign(body), signature)


# simulate LINE’s payload
payload = {
    "events": [{
        "type": "message",
        "replyToken": "tok_abc123",
        "source": {"userId": "U001", "type": "user"},
        "message": {"type": "text", "text": "Hello"}
    }, {
        "type": "message",
        "replyToken": "tok_def456",
        "source": {"userId": "U002", "type": "user"},
        "message": {"type": "text", "text": "!ping"}
    }, {
        "type": "follow",   # user added bot as friend
        "replyToken": "tok_xyz",
        "source": {"userId": "U003", "type": "user"},
    }]
}


body = json.dumps(payload)
sig = sign(body)
print(f"Signature verification: {verify(body, sig)}")


# webhook handler
def handle_message(event):
    text = event["message"]["text"]
    user = event["source"]["userId"]
    if text == "!ping":
        reply = "pong!"
    else:
        reply = f"You said: {text}"
    print(f"[reply→{user}] {reply}")
    print(f"  (using reply_token={event['replyToken'][:10]}...)")


def handle_follow(event):
    user = event["source"]["userId"]
    print(f"[reply→{user}] Welcome! Try !ping")


handlers = {"message": handle_message, "follow": handle_follow}


# dispatch
for ev in json.loads(body)["events"]:
    fn = handlers.get(ev["type"])
    if fn: fn(ev)
`},
{id:56,title:"LINE Message Types: Text / Template / Flex",tag:"Specialty",content:`
# Chapter 56: LINE Message Types — Text / Sticker / Image / Cards


> 🤖 **Specialty · Bot**: LINE offers rich message types. Learn them to build useful bots.


## 56.1 TextMessage


\`\`\`python
from linebot.v3.messaging import TextMessage


TextMessage(text="Hi")


# with emoji
TextMessage(text="$ APCS Tutor Bot $", emojis=[
    {"index": 0, "productId": "5ac1bfd5040ab15980c9b435", "emojiId": "001"},
    {"index": 16, "productId": "5ac1bfd5040ab15980c9b435", "emojiId": "002"},
])
\`\`\`


## 56.2 StickerMessage


\`\`\`python
from linebot.v3.messaging import StickerMessage
StickerMessage(packageId="446", stickerId="1988")
\`\`\`


Available stickers: https://developers.line.biz/en/docs/messaging-api/sticker-list/


## 56.3 ImageMessage


\`\`\`python
from linebot.v3.messaging import ImageMessage


ImageMessage(
    originalContentUrl="https://example.com/full.jpg",   # must be HTTPS
    previewImageUrl="https://example.com/thumb.jpg",
)
\`\`\`


## 56.4 Template Message: buttons, confirm


\`\`\`python
from linebot.v3.messaging import (
    TemplateMessage, ButtonsTemplate, MessageAction, URIAction,
)


TemplateMessage(
    altText="Menu",
    template=ButtonsTemplate(
        title="Order",
        text="Choose a main dish",
        actions=[
            MessageAction(label="Beef noodles", text="Order beef noodles"),
            MessageAction(label="Fried rice",   text="Order fried rice"),
            URIAction(label="Full menu",   uri="https://menu.example.com"),
        ]
    )
)
\`\`\`


## 56.5 Carousel: swipeable cards


\`\`\`python
from linebot.v3.messaging import CarouselTemplate, CarouselColumn


TemplateMessage(
    altText="Product list",
    template=CarouselTemplate(
        columns=[
            CarouselColumn(
                thumbnailImageUrl="https://.../p1.jpg",
                title="Product 1", text="Description...",
                actions=[MessageAction(label="Buy", text="Buy product1")]
            ),
            CarouselColumn(
                thumbnailImageUrl="https://.../p2.jpg",
                title="Product 2", text="Description...",
                actions=[MessageAction(label="Buy", text="Buy product2")]
            ),
        ]
    )
)
\`\`\`


## 56.6 Flex Message: most powerful layout


Completely customisable layout:


\`\`\`python
from linebot.v3.messaging import FlexMessage, FlexContainer


flex_json = {
    "type": "bubble",
    "body": {
        "type": "box", "layout": "vertical",
        "contents": [
            {"type": "text", "text": "Weather", "weight": "bold", "size": "xl"},
            {"type": "text", "text": "Taipei 26°C Thunderstorm"},
        ]
    }
}


FlexMessage(altText="Weather", contents=FlexContainer.from_dict(flex_json))
\`\`\`


Use https://developers.line.biz/flex-simulator/ to design the layout, then paste the JSON.


## 56.7 Sending multiple messages at once


\`\`\`python
MessagingApi(api).reply_message(ReplyMessageRequest(
    reply_token=event.reply_token,
    messages=[
        TextMessage(text="First message"),
        StickerMessage(packageId="446", stickerId="1988"),
        TextMessage(text="Third message"),
    ]
))
\`\`\`


Maximum 5 messages.


## 56.8 Message type reference


| What you want | Use this |
|---------------|----------|
| Plain text reply | \`TextMessage\` |
| Reply with sticker | \`StickerMessage\` |
| Send image | \`ImageMessage\` |
| Menu buttons | \`ButtonsTemplate\` |
| Multiple choices | \`CarouselTemplate\` |
| Custom layout | \`FlexMessage\` |
| Yes/No confirmation | \`ConfirmTemplate\` |
| Guide to add friend | \`URIAction\` |


## 56.9 Try it (simulated)


The example simulates an “order bot” that returns different message types based on user input.
`,
example:`# Simulate: decide which message type to reply based on user input
def reply(user_msg):
    # return (type, content)
    m = user_msg.strip()


    # 1) plain text
    if m == "hi" or m == "hello":
        return ("Text", "Hi! I'm an order bot. Type 'menu' to see the menu.")


    # 2) main menu → Buttons template
    if m == "menu":
        return ("Buttons", {
            "title": "Order Menu",
            "actions": ["Beef noodles $120", "Fried rice $80", "Ramen $150"]
        })


    # 3) shop list → Carousel
    if m == "shop":
        return ("Carousel", {
            "items": [
                {"title": "T-shirt", "price": 350},
                {"title": "Cap",     "price": 280},
                {"title": "Mug",     "price": 180},
            ]
        })


    # 4) confirmation → Confirm template
    if m.startswith("buy "):
        item = m[4:]
        return ("Confirm", {
            "text": f"Confirm to buy {item}?",
            "yes": f"Confirm {item}",
            "no":  "Cancel"
        })


    # 5) sticker (just record sticker id)
    if m == "sticker":
        return ("Sticker", {"package": "446", "id": "1988"})


    # 6) default
    return ("Text", "I don't understand. Type 'menu' to see the menu.")




tests = ["hi", "menu", "shop", "buy Beef noodles", "sticker", "asdf"]
for msg in tests:
    msg_type, content = reply(msg)
    print(f"[USER] {msg}")
    if isinstance(content, str):
        print(f"  → {msg_type}: {content}")
    else:
        print(f"  → {msg_type}: {content}")
`},
{id:57,title:"State Management: Making Your Bot Remember",tag:"Specialty",content:`
# Chapter 57: State Management — Making Your Bot Remember


> 🤖 **Specialty · Bot**: A bot is more than Q&A — let it remember “last order, cumulative check‑in count, conversation flow”.


## 57.1 Three storage options


| Method | Suitable for | Drawback |
|--------|--------------|----------|
| **In‑memory dict** | development & testing | lost on restart |
| **JSON file** | small bots (<1000 users) | concurrent writes can corrupt |
| **SQLite** | medium bots | no redundancy |
| **PostgreSQL** | production | needs deployment |
| **Redis** | high speed / caching | needs deployment |


## 57.2 In‑memory dict (simplest)


\`\`\`python
user_data = {}    # {user_id: {...}}


@bot.command()
async def signin(ctx):
    uid = ctx.author.id
    data = user_data.setdefault(uid, {"count": 0})
    data["count"] += 1
    await ctx.send(f"You have checked in {data['count']} times")
\`\`\`


> ⚠️ **Lost on restart**!


## 57.3 JSON file (persistent)


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
    await ctx.send(f"Checked in {data[uid]['count']} times")
\`\`\`


> 💡 Use \`str(uid)\` because JSON keys must be strings.


## 57.4 SQLite (recommended for medium bots)


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
    await ctx.send(f"Checked in {cnt} times")
\`\`\`


## 57.5 Conversation flow (multi‑step)


“!order start → ask main → ask drink → ask dessert → checkout” — a **stateful** flow:


\`\`\`python
sessions = {}    # {user_id: {"step": ..., "order": {...}}}


@bot.command()
async def order(ctx):
    sessions[ctx.author.id] = {"step": "main", "order": {}}
    await ctx.send("What main dish? (beef noodles / fried rice)")


@bot.event
async def on_message(message):
    await bot.process_commands(message)
    s = sessions.get(message.author.id)
    if not s: return
    if s["step"] == "main":
        s["order"]["main"] = message.content
        s["step"] = "drink"
        await message.channel.send("What drink?")
    elif s["step"] == "drink":
        s["order"]["drink"] = message.content
        s["step"] = None
        await message.channel.send(f"Order: {s['order']} ✅")
        sessions.pop(message.author.id)
\`\`\`


## 57.6 Caveats


| Trap | Solution |
|------|----------|
| Concurrent writes corrupt JSON | Use \`threading.Lock\` or switch to SQLite |
| Memory explosion | Set expiry: clear idle sessions after 1 hour |
| Data loss on restart | Save with \`atexit\` before exit |


## 57.7 Try it


The example implements a complete “order bot” finite state machine.
`,
example:`# Simulate: order bot finite state machine (FSM)
sessions = {}    # {user: {"step": str, "order": dict}}


def handle_message(user, text):
    s = sessions.get(user)


    # start command
    if text == "/order":
        sessions[user] = {"step": "main", "order": {}}
        return "What main dish? (beef noodles / fried rice / ramen)"


    # not in a session
    if s is None:
        return "Type /order to start ordering"


    if s["step"] == "main":
        s["order"]["main"] = text
        s["step"] = "drink"
        return "What drink? (black tea / green tea / none)"


    if s["step"] == "drink":
        s["order"]["drink"] = text
        s["step"] = "confirm"
        order = s["order"]
        return f"Confirm order: {order['main']} + {order['drink']}? (yes/no)"


    if s["step"] == "confirm":
        if text.lower() == "yes":
            order = s["order"]
            sessions.pop(user)
            return f"✅ Order placed: {order}"
        else:
            sessions.pop(user)
            return "Cancelled"


    return "??"


# simulate user conversation
dialog = [
    ("alice", "/order"),
    ("alice", "beef noodles"),
    ("alice", "black tea"),
    ("alice", "yes"),
    ("bob",   "hi"),
    ("bob",   "/order"),
    ("bob",   "fried rice"),
    ("bob",   "green tea"),
    ("bob",   "no"),
]


for user, msg in dialog:
    reply = handle_message(user, msg)
    print(f"[{user}] {msg}")
    print(f"  → {reply}")


print(f"\\nRemaining sessions: {list(sessions.keys())}")
`},
{id:58,title:"Scheduled Tasks: Timed Push",tag:"Specialty",content:`
# Chapter 58: Scheduled Tasks — Timed Push


> 🤖 **Specialty · Bot**: Push weather at 9 AM every day, weekly activity summary every Monday.


## 58.1 Three scheduling approaches


| Approach | Suitable for |
|----------|--------------|
| \`asyncio.sleep\` loop | Discord / asyncio bots |
| \`schedule\` package | simple synchronous scripts |
| \`APScheduler\` | advanced: cron syntax, persistence |


## 58.2 Discord: use tasks (most common)


\`\`\`python
from discord.ext import tasks


@tasks.loop(seconds=60)
async def heartbeat():
    channel = bot.get_channel(CHANNEL_ID)
    await channel.send("💓 Still alive")


@bot.event
async def on_ready():
    heartbeat.start()
\`\`\`


| Parameter | Meaning |
|-----------|---------|
| \`seconds=60\` | every 60 seconds |
| \`minutes=5\` | every 5 minutes |
| \`hours=1\` | every hour |
| \`time=datetime.time(hour=9)\` | every day at 09:00 |


## 58.3 Fixed time every day


\`\`\`python
import datetime
from discord.ext import tasks


@tasks.loop(time=datetime.time(hour=9, minute=0, tzinfo=...))
async def morning_news():
    await channel.send("☀ Good morning! Today’s weather...")
\`\`\`


## 58.4 LINE push: use push_message


LINE webhook is passive; to actively push, use \`push_message\`:


\`\`\`python
from linebot.v3.messaging import (
    MessagingApi, PushMessageRequest, TextMessage,
)


def daily_push():
    with ApiClient(config) as api_client:
        MessagingApi(api_client).push_message(
            PushMessageRequest(
                to=USER_ID,
                messages=[TextMessage(text="Good morning")]
            )
        )


# combine with schedule
import schedule, time
schedule.every().day.at("09:00").do(daily_push)
while True:
    schedule.run_pending()
    time.sleep(60)
\`\`\`


## 58.5 schedule package syntax


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


## 58.6 APScheduler: cron syntax


\`\`\`python
from apscheduler.schedulers.background import BackgroundScheduler


sched = BackgroundScheduler()


# every day at 9 AM
sched.add_job(daily_news, 'cron', hour=9)


# every Monday at 10 AM
sched.add_job(weekly_report, 'cron', day_of_week='mon', hour=10)


# every 5 minutes
sched.add_job(heartbeat, 'interval', minutes=5)


# one‑off (10 seconds later)
sched.add_job(reminder, 'date',
              run_date=datetime.now() + timedelta(seconds=10))


sched.start()
\`\`\`


## 58.7 Calculate seconds until next execution


\`\`\`python
import datetime
def seconds_until(hour, minute=0):
    now = datetime.datetime.now()
    target = now.replace(hour=hour, minute=minute, second=0, microsecond=0)
    if target <= now:
        target += datetime.timedelta(days=1)   # move to tomorrow
    return (target - now).total_seconds()


async def daily_at(hour, minute, fn):
    while True:
        await asyncio.sleep(seconds_until(hour, minute))
        await fn()
\`\`\`


## 58.8 Caveats


| Trap | Solution |
|------|----------|
| Bot restart misses a time | APScheduler \`misfire_grace_time\` |
| Timezone confusion | Always include tzinfo |
| Push exceeds quota | Use batch / multicast |
| Blocked by sleep | Use asyncio, not time.sleep |


## 58.9 Try it


The example implements the “seconds until next execution” calculation.
`,
example:`# Simulate: calculate seconds until next 9:00 / 21:00 push
import datetime


def seconds_until(now, hour, minute=0):
    # return seconds from now to the next occurrence of hour:minute
    target = now.replace(hour=hour, minute=minute, second=0, microsecond=0)
    if target <= now:
        target += datetime.timedelta(days=1)
    return int((target - now).total_seconds())


# fixed test times (not dependent on system clock)
tests = [
    (datetime.datetime(2026, 6, 8, 7, 30), 9, 0),    # same day, wait until 9:00
    (datetime.datetime(2026, 6, 8, 9, 0),  9, 0),    # exactly on time → tomorrow
    (datetime.datetime(2026, 6, 8, 14, 0), 9, 0),    # passed → tomorrow 9
    (datetime.datetime(2026, 6, 8, 14, 0), 21, 0),   # same day 21:00
    (datetime.datetime(2026, 6, 8, 23, 30), 21, 0),  # passed → tomorrow 21
]


print(f"{'now':<20} {'target':>8} {'seconds':>10} {'≈time':>15}")
print('-' * 60)
for now, h, m in tests:
    secs = seconds_until(now, h, m)
    hr = secs // 3600
    mn = (secs % 3600) // 60
    print(f"{now!s:<20} {h:>2}:{m:02d}    {secs:>10}    {hr:>4}h{mn:02d}m")


# simulate a daily scheduler
print("\\n=== Simulate a day’s schedule ===")
schedule = [
    ("09:00", "push good morning"),
    ("12:00", "push lunch reminder"),
    ("18:00", "push end of work reminder"),
    ("21:00", "push good night"),
]


# pretend to run from 08:00 to 22:00
fake_now = datetime.datetime(2026, 6, 8, 8, 0)
end = datetime.datetime(2026, 6, 8, 22, 0)
while fake_now <= end:
    for t, job in schedule:
        h, m = map(int, t.split(":"))
        target = fake_now.replace(hour=h, minute=m, second=0)
        if target == fake_now:
            print(f"  [{t}] execute: {job}")
    fake_now += datetime.timedelta(hours=1)
`},
{id:59,title:"Deployment: Render / Railway / VPS",tag:"Specialty",content:`
# Chapter 59: Deployment — Render / Railway / VPS


> 🤖 **Specialty · Bot**: If your bot runs on your local computer, it dies when you close the lid. Learn 24/7 deployment so your bot is truly “live”.


## 59.1 Which platform to choose?


| Platform | Free tier | Suitable for |
|----------|-----------|--------------|
| **Render** | 750 hours/month, sleeps after 15 min | LINE bot (wakes up on request) |
| **Railway** | $5/month free credit | Discord bot (doesn’t sleep) |
| **Fly.io** | 256MB RAM free | advanced |
| **VPS** (DigitalOcean / Linode) | from $5/month | full control |
| **Replit** | free but needs manual run | learning |


> 💡 **As of 2024, Heroku is no longer free**.


## 59.2 Pre‑deployment: 3 files


### \`requirements.txt\`
\`\`\`
discord.py==2.3.2
python-dotenv==1.0.0
\`\`\`


Or for LINE:
\`\`\`
line-bot-sdk==3.5.0
flask==3.0.0
python-dotenv==1.0.0
\`\`\`


Generate it:
\`\`\`bash
pip freeze > requirements.txt
\`\`\`


### \`Procfile\` (tell the platform how to run)
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
data.json     # if you have local test data
\`\`\`


## 59.3 Deploying a LINE Bot on Render


1. Push to GitHub:
\`\`\`bash
git init
git add .
git commit -m "init"
git remote add origin git@github.com:you/bot.git
git push -u origin main
\`\`\`


2. https://dashboard.render.com → **New Web Service** → connect your repo
3. Settings:
   - Runtime: Python 3
   - Build Command: \`pip install -r requirements.txt\`
   - Start Command: \`gunicorn app:app\`
4. **Environment**: paste the contents of \`.env\`
5. Deploy → get \`https://your-bot.onrender.com\`
6. Go back to LINE Developer Console, set Webhook URL to \`https://your-bot.onrender.com/callback\`


## 59.4 Deploying a Discord Bot on Railway


1. https://railway.app → **New Project → Deploy from GitHub**
2. Select your repo
3. Settings → Environment Variables → add \`DISCORD_TOKEN=...\`
4. Settings → Service Type → **Worker** (not web)
5. Deployments complete


## 59.5 ngrok local testing (no deployment)


Just want to test the webhook without real deployment:


\`\`\`bash
# download ngrok from https://ngrok.com/download
ngrok http 5000
# output: https://abc123.ngrok-free.app
\`\`\`


- ✅ 5 seconds to start
- ❌ URL changes every time you restart ngrok
- ❌ dies when you close your laptop


## 59.6 Common post‑deployment errors


| Symptom | Cause |
|---------|-------|
| \`ModuleNotFoundError\` | package missing from requirements.txt |
| Bot crashes on start | environment variables not set |
| webhook verification fails | wrong URL, SSL not active |
| 500 error | check platform logs; usually an unhandled exception |
| Render starts slowly | free tier sleeps after 15 min; first request takes ~30s to wake |


## 59.7 Monitoring bot health


Simplest: write a health check endpoint:


\`\`\`python
@app.route("/healthz")
def health():
    return {"status": "ok", "uptime": time.time() - START_TIME}
\`\`\`


Use UptimeRobot (https://uptimerobot.com) for free to ping every 5 minutes and email you if it’s down.


## 59.8 Upgrade path


| Stage | Size | Suggested architecture |
|-------|------|------------------------|
| Learning | 1‑2 testers | local + ngrok |
| Friends | <100 users | Render free + SQLite |
| Getting popular | <1000 users | Railway/Fly + PostgreSQL |
| Really large | 10k+ users | multiple instances + Redis + monitoring |


## 59.9 Try it (simulated)


The example shows “environment variable reading + health check” core logic.


> 🎉 **Congratulations on completing the 8 Bot chapters!** Now choose your own direction:
> - Build a campus event notification bot
> - Build a simple expense tracking bot
> - Build an APCS problem‑practice bot (combine scraping from earlier chapters)
`,
example:`# Simulate: reading environment variables + pre‑start check
import os, time


REQUIRED = ["DISCORD_TOKEN", "LINE_CHANNEL_SECRET", "DB_URL"]


# pretend environment variables (real ones come from .env or platform)
fake_env = {
    "DISCORD_TOKEN": "MTIz...REDACTED...abc",
    "LINE_CHANNEL_SECRET": "abc123secret",
    # DB_URL intentionally missing
    "PORT": "5000",
    "LOG_LEVEL": "INFO",
}


# pre‑start check
print("=== Bot startup check ===")
missing = []
for key in REQUIRED:
    val = fake_env.get(key)
    if not val:
        missing.append(key)
        print(f"  ❌ {key}: not set")
    else:
        # safe: don’t print full token
        masked = val[:4] + "..." + val[-4:] if len(val) > 12 else "***"
        print(f"  ✓  {key}: {masked}")


if missing:
    print(f"\\n⚠ Missing environment variables: {missing}")
    print("   Please set them in the platform’s Environment Variables")
else:
    print("\\n✓ All required environment variables are set, ready to start")


# health check endpoint concept
START_TIME = time.time()


def healthz():
    return {
        "status": "ok",
        "uptime_seconds": int(time.time() - START_TIME),
        "version": "1.0.0",
    }


print(f"\\n=== /healthz response ===\\n{healthz()}")
`},
{id:60,title:"pygame Basics: game loop",tag:"Specialty",content:`
# Chapter 60: pygame Basics — game loop


> 🎮 **Specialty · pygame**: Every game is “draw → input → update → redraw” in a loop.


## 60.1 What is pygame


\`pygame\` is the most popular 2D game library for Python, free and cross‑platform. Suitable for:


- Learning game development
- Teaching programming
- Small indie games
- School projects


Not suitable for: 3D / AAA / mobile games.


## 60.2 Installation


\`\`\`bash
pip install pygame
\`\`\`


Verify installation:
\`\`\`bash
python -m pygame.examples.aliens   # run the official example
\`\`\`


## 60.3 Minimal program: open a window


\`\`\`python
import pygame


pygame.init()                            # initialise all modules
screen = pygame.display.set_mode((800, 600))   # window size (width, height)
pygame.display.set_caption("My First Game")
clock = pygame.time.Clock()


running = True
while running:
    # 1) handle events
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False


    # 2) update state (nothing to update here)


    # 3) draw
    screen.fill((20, 20, 30))    # dark grey‑blue background


    # 4) actually show what we drew
    pygame.display.flip()


    # 5) control speed: 60 frames per second
    clock.tick(60)


pygame.quit()
\`\`\`


Just 20 lines and you have a window.


## 60.4 The four steps of a game loop


Every game frame looks like this:


\`\`\`
while running:
    handle_events()    # keyboard / mouse
    update()           # move characters, check collisions
    draw()             # redraw everything
    clock.tick(60)     # wait until next frame
\`\`\`


**These four steps are the same in any game engine** (Unity / Godot / Unreal internally use this structure).


## 60.5 Coordinate system: top‑left is (0, 0)


\`\`\`
(0,0) ────────► x
 │
 │
 ▼
 y
\`\`\`


The Y axis is **reversed** compared to math class — going down increases y.


| Point | Position |
|-------|----------|
| (0, 0) | top‑left |
| (800, 0) | top‑right |
| (0, 600) | bottom‑left |
| (400, 300) | screen centre |


## 60.6 Colours: RGB


\`\`\`python
RED   = (255, 0, 0)
GREEN = (0, 255, 0)
BLUE  = (0, 0, 255)
WHITE = (255, 255, 255)
BLACK = (0, 0, 0)
\`\`\`


Each value 0‑255. You can add a fourth value for transparency: \`(255, 0, 0, 128)\`.


## 60.7 Why clock.tick?


Without limiting the speed:


- High‑end computer: 10,000 fps → game runs super fast
- Low‑end computer: 30 fps → game runs super slow


\`clock.tick(60)\` ensures **every computer runs at 60 fps**, keeping the game experience consistent.


## 60.8 Try it (simulated)


Pyodide doesn’t have pygame installed. The example uses ASCII to simulate a “moving dot” game loop concept.


> **Cross‑language notes**:
> - **JavaScript**: Phaser / PixiJS / raw canvas
> - **C++**: SFML / SDL
> - **Java**: libGDX
> - **Unity (C#)** / **Godot (GDScript)**: large game engines
> All share the same game loop structure, just different APIs.

## 60.9 🧠 Design Motivation: Why Multiply Movement by Delta Time?

\`clock.tick(60)\` tries to lock the game at 60 FPS, but this doesn't guarantee each frame takes exactly 1/60 second. When the computer is busy or rendering is complex, a frame might take 1/30 second.

If your movement is \`x += 5\` (fixed 5 pixels per frame):
- 60 FPS machine: moves 300 pixels per second
- 30 FPS machine: moves only 150 pixels per second

→ **The same game runs at different speeds on different computers** — a serious bug.

The solution is **delta time (dt)**: multiply by how many seconds this frame actually took: \`x += speed * dt\` (speed is now "pixels/second" not "pixels/frame").

This way, no matter what the FPS, the distance traveled per second is always the same.

\`\`\`python
clock = pygame.time.Clock()
speed = 300  # 300 pixels per second
x = 0

while running:
    # dt is in seconds (0.016 ≈ 1/60 second)
    dt = clock.tick(60) / 1000.0

    # ❌ Frame-rate dependent
    # x += 5

    # ✅ Frame-rate independent
    x += speed * dt
\`\`\`
`,
example:`# Simulate game loop: print state each frame
import time


# === game state ===
state = {"x": 0, "y": 5, "frame": 0}
TARGET_FPS = 30
FRAME_DURATION = 1.0 / TARGET_FPS


# === simulated “event queue” ===
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


    # 3) draw (ASCII simulation of screen)
    width = 20
    line = ['.'] * width
    if 0 <= state["x"] < width:
        line[state["x"]] = '●'
    print(f"frame {state['frame']:2}: |{''.join(line)}|")


    # 4) tick (skip actual sleep for simulation)
    # real pygame: clock.tick(60) would wait


print(f"\\nEnd: {state['frame']} frames run")
`},
{id:61,title:"Drawing Shapes and Coordinates",tag:"Specialty",content:`
# Chapter 61: Drawing Shapes and Coordinates


> 🎮 **Specialty · pygame**: Squares, circles, lines, images — five drawing skills cover 90% of visuals.


## 61.1 Five drawing functions


\`\`\`python
import pygame


# rectangle
pygame.draw.rect(screen, color, (x, y, w, h), width=0)
# width=0 → filled, width>0 → outlined


# circle
pygame.draw.circle(screen, color, (cx, cy), radius)


# line
pygame.draw.line(screen, color, (x1, y1), (x2, y2), width=1)


# polygon
pygame.draw.polygon(screen, color, [(x1,y1), (x2,y2), (x3,y3)])


# arc
pygame.draw.arc(screen, color, (x,y,w,h), start_rad, end_rad)
\`\`\`


## 61.2 Rect object: your friend for rectangles


\`\`\`python
rect = pygame.Rect(100, 50, 200, 100)   # x, y, w, h
rect.x, rect.y, rect.width, rect.height
rect.centerx, rect.centery
rect.left, rect.right, rect.top, rect.bottom
rect.center, rect.topleft, rect.bottomright
\`\`\`


You can position directly using attributes:


\`\`\`python
rect.center = (400, 300)    # centre of screen
rect.bottomright = (800, 600)   # align to bottom‑right corner
\`\`\`


## 61.3 Loading images


\`\`\`python
# load (once, outside the game loop)
player_img = pygame.image.load("player.png").convert_alpha()
# .convert_alpha() handles PNG transparency
# .convert() for non‑transparent images (e.g., JPEG)


# inside the game loop
screen.blit(player_img, (x, y))   # draw image at (x, y)


# get image size
w, h = player_img.get_size()
rect = player_img.get_rect(center=(400, 300))
screen.blit(player_img, rect)
\`\`\`


## 61.4 Scaling and rotation


\`\`\`python
# scale
small = pygame.transform.scale(img, (100, 100))
flipped = pygame.transform.flip(img, True, False)   # horizontal flip


# rotation (rotate from original each frame to avoid quality loss)
angle = 30
rotated = pygame.transform.rotate(img, angle)
rect = rotated.get_rect(center=original_center)
screen.blit(rotated, rect)
\`\`\`


## 61.5 Draw order matters


\`pygame\` works like a painter: things drawn later cover earlier ones.


\`\`\`python
screen.fill(SKY_BLUE)           # 1. sky (bottom)
screen.blit(mountain_img, ...)  # 2. mountains
screen.blit(tree_img, ...)      # 3. trees
screen.blit(player_img, ...)    # 4. player (top)
draw_ui(screen)                 # 5. UI always on top
pygame.display.flip()           # show all at once
\`\`\`


## 61.6 Complete example: static scene


\`\`\`python
import pygame
pygame.init()
screen = pygame.display.set_mode((400, 300))


running = True
while running:
    for e in pygame.event.get():
        if e.type == pygame.QUIT: running = False


    screen.fill((135, 206, 235))    # sky blue
    pygame.draw.rect(screen, (34, 139, 34), (0, 200, 400, 100))   # grass
    pygame.draw.circle(screen, (255, 230, 50), (320, 60), 30)      # sun
    pygame.draw.polygon(screen, (139, 69, 19),                     # mountain
                        [(50, 200), (150, 80), (250, 200)])
    pygame.display.flip()


pygame.quit()
\`\`\`


## 61.7 Try it (simulated)


The example uses an ASCII grid to simulate “drawing rectangles/lines” on a canvas.
`,
example:`# Simulate: use a 2D char array as screen, draw rectangles and lines
W, H = 30, 12
screen = [['.' for _ in range(W)] for _ in range(H)]


def fill(ch):
    for row in screen:
        for i in range(len(row)):
            row[i] = ch


def draw_rect(x, y, w, h, ch):
    # hollow rectangle
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
    # approximate circle using distance formula
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


# draw a scene
fill(' ')
draw_line_h(0, W-1, H-2, '_')     # ground
draw_rect(2, 5, 6, 5, '#')        # house
draw_rect(4, 7, 2, 3, 'D')        # door
draw_circle(22, 3, 2, '*')        # sun
draw_rect(15, 8, 4, 2, 'C')       # cloud


show()
print(f"\\nscreen size: {W} x {H}")
`},
{id:62,title:"Input Handling: Keyboard and Mouse",tag:"Specialty",content:`
# Chapter 62: Input Handling — Keyboard and Mouse


> 🎮 **Specialty · pygame**: Without input, a game is just a movie. Learn the two ways pygame handles input.


## 62.1 Two modes


### Mode A: Event‑driven (for “press once” actions)


\`\`\`python
for event in pygame.event.get():
    if event.type == pygame.KEYDOWN:
        if event.key == pygame.K_SPACE:
            player.jump()
        elif event.key == pygame.K_ESCAPE:
            running = False
\`\`\`


Triggers once per press. Suitable for: jumping, opening menus, pause.


### Mode B: State query (for “holding down” actions)


\`\`\`python
keys = pygame.key.get_pressed()
if keys[pygame.K_LEFT]:
    player.x -= 5
if keys[pygame.K_RIGHT]:
    player.x += 5
\`\`\`


Checks the current state every frame. Suitable for: movement, sprinting, holding aim.


> 💡 General principle: **action‑based (jump/shoot) use events; movement use state query**.


## 62.2 Keyboard constants quick reference


| Key | pygame constant |
|-----|-----------------|
| arrow keys | \`K_UP\`, \`K_DOWN\`, \`K_LEFT\`, \`K_RIGHT\` |
| WASD | \`K_w\`, \`K_a\`, \`K_s\`, \`K_d\` |
| space | \`K_SPACE\` |
| Escape | \`K_ESCAPE\` |
| Enter | \`K_RETURN\` |
| Shift | \`K_LSHIFT\`, \`K_RSHIFT\` |
| digits | \`K_0\` ~ \`K_9\` |
| letters | \`K_a\` ~ \`K_z\` (all lowercase) |


## 62.3 Mouse


\`\`\`python
# event style
for event in pygame.event.get():
    if event.type == pygame.MOUSEBUTTONDOWN:
        if event.button == 1:   # left button
            print("Left click:", event.pos)
        elif event.button == 3: # right button
            print("Right click:", event.pos)
    elif event.type == pygame.MOUSEMOTION:
        print("Moved to", event.pos, "delta", event.rel)


# state query
mx, my = pygame.mouse.get_pos()
buttons = pygame.mouse.get_pressed()    # (left, middle, right) bool
if buttons[0]:
    print("Left button held")
\`\`\`


## 62.4 Text input (e.g., high score name entry)


\`\`\`python
name = ""
for event in pygame.event.get():
    if event.type == pygame.KEYDOWN:
        if event.key == pygame.K_RETURN:
            print("Submitted:", name)
        elif event.key == pygame.K_BACKSPACE:
            name = name[:-1]
        else:
            name += event.unicode    # automatically handles case
\`\`\`


## 62.5 Event types quick reference


| event.type | When triggered |
|------------|----------------|
| \`QUIT\` | clicked window close |
| \`KEYDOWN\` / \`KEYUP\` | key pressed / released |
| \`MOUSEBUTTONDOWN\` / \`MOUSEBUTTONUP\` | mouse button |
| \`MOUSEMOTION\` | mouse moved |
| \`MOUSEWHEEL\` | wheel scrolled |
| \`VIDEORESIZE\` | window resized |


## 62.6 Most common pause implementation


\`\`\`python
paused = False
while running:
    for e in pygame.event.get():
        if e.type == pygame.QUIT: running = False
        if e.type == pygame.KEYDOWN and e.key == pygame.K_p:
            paused = not paused


    if not paused:
        update_game()        # don’t update when paused


    draw_game()              # always draw (otherwise screen freezes)
    if paused:
        draw_pause_overlay(screen)
    pygame.display.flip()
    clock.tick(60)
\`\`\`


## 62.7 Try it (simulated)


The example simulates an event queue: processes a sequence of keyboard and mouse inputs.
`,
example:`# Simulate: process a sequence of input events
# player position
player = {"x": 10, "y": 5}


# simulated input events (real pygame gets them from pygame.event.get())
events = [
    ("KEYDOWN", "K_RIGHT"),
    ("KEYDOWN", "K_RIGHT"),
    ("KEYDOWN", "K_UP"),
    ("MOUSEBUTTONDOWN", 1, (15, 8)),    # left click at (15,8)
    ("KEYDOWN", "K_SPACE"),              # jump
    ("KEYDOWN", "K_RIGHT"),
    ("MOUSEMOTION", (20, 10)),
    ("KEYDOWN", "K_ESCAPE"),             # quit
]


print(f"Initial player position: ({player['x']}, {player['y']})\\n")


running = True
for ev in events:
    if not running: break


    if ev[0] == "KEYDOWN":
        key = ev[1]
        if key == "K_RIGHT":
            player["x"] += 1
            print(f"→ right: moved to ({player['x']}, {player['y']})")
        elif key == "K_LEFT":
            player["x"] -= 1
            print(f"← left: moved to ({player['x']}, {player['y']})")
        elif key == "K_UP":
            player["y"] -= 1
            print(f"↑ up: moved to ({player['x']}, {player['y']})")
        elif key == "K_DOWN":
            player["y"] += 1
            print(f"↓ down: moved to ({player['x']}, {player['y']})")
        elif key == "K_SPACE":
            print(f"🦘 Jump! at ({player['x']}, {player['y']})")
        elif key == "K_ESCAPE":
            print("Exiting game")
            running = False


    elif ev[0] == "MOUSEBUTTONDOWN":
        button, pos = ev[1], ev[2]
        print(f"🖱 Mouse button={button} clicked at {pos}")


    elif ev[0] == "MOUSEMOTION":
        pos = ev[1]
        print(f"🖱 Mouse moved to {pos}")


print(f"\\nFinal position: ({player['x']}, {player['y']})")
`},
{id:63,title:"Movement and Animation: Velocity Vector",tag:"Specialty",content:`
# Chapter 63: Movement and Animation — Velocity Vector and Delta Time


> 🎮 **Specialty · pygame**: Make the screen truly “move”. Mastering velocity and delta time is the dividing line between hobby and professional game development.


## 63.1 Simplest movement: add displacement each frame


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


Problem: at 60 fps, 5 px/frame = **300 px/second**; at 30 fps, only 150 px/second — game speed is tied to hardware.


## 63.2 Using velocity vector (recommended)


\`\`\`python
import pygame
from pygame.math import Vector2


pos = Vector2(100, 100)
vel = Vector2(0, 0)
SPEED = 200    # px / second


while running:
    dt = clock.tick(60) / 1000    # ← delta time (seconds since last frame)


    keys = pygame.key.get_pressed()
    vel.x = (keys[pygame.K_RIGHT] - keys[pygame.K_LEFT]) * SPEED
    vel.y = (keys[pygame.K_DOWN]  - keys[pygame.K_UP])   * SPEED


    pos += vel * dt    # ← move using seconds


    screen.fill((0,0,0))
    pygame.draw.circle(screen, WHITE, pos, 20)
    pygame.display.flip()
\`\`\`


No matter the FPS, the player always moves 200 px per second — consistent game experience.


> 🎯 **delta time = seconds between previous frame and current frame**. \`clock.tick(60)\` returns that value in milliseconds.


## 63.3 Diagonal movement quirk


\`\`\`python
vel.x = 100    # right
vel.y = 100    # down
# actual diagonal speed = √(100² + 100²) ≈ 141 px/s  ← faster than straight!
\`\`\`


Fix:


\`\`\`python
if vel.length() > 0:
    vel.scale_to_length(SPEED)
\`\`\`


## 63.4 Acceleration / inertia


\`\`\`python
ACCEL = 800      # px/s²
FRICTION = 0.85


while running:
    dt = clock.tick(60) / 1000
    keys = pygame.key.get_pressed()


    if keys[pygame.K_RIGHT]: vel.x += ACCEL * dt
    if keys[pygame.K_LEFT]:  vel.x -= ACCEL * dt


    vel *= FRICTION    # friction (simplified)
    pos += vel * dt
\`\`\`


When you release the key, it gradually slows down — feels heavier.


## 63.5 Jumping (most common physics)


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


    vel.y += GRAVITY * dt   # gravity always acts
    pos += vel * dt


    if pos.y >= GROUND_Y:
        pos.y = GROUND_Y
        vel.y = 0
        on_ground = True
\`\`\`


## 63.6 Animation (sprite frames)


\`\`\`python
# load frame images
frames = [pygame.image.load(f"run_{i}.png").convert_alpha() for i in range(4)]


frame_idx = 0
anim_timer = 0
ANIM_SPEED = 0.1   # change frame every 0.1 seconds


while running:
    dt = clock.tick(60) / 1000
    anim_timer += dt
    if anim_timer >= ANIM_SPEED:
        anim_timer = 0
        frame_idx = (frame_idx + 1) % len(frames)


    screen.blit(frames[frame_idx], pos)
\`\`\`


## 63.7 Try it (simulated)


The example simulates “bouncing ball” physics: gravity + boundary bounce.
`,
example:`# Simulate: bouncing ball (gravity + bounce)
# field width 40, floor y=15
W, H = 40, 15
FPS = 30
GRAVITY = 30        # acceleration (units/s²)
JUMP_VEL = -25      # initial upward velocity


ball = {"x": 5.0, "y": 10.0, "vx": 8.0, "vy": -20.0}


print(f"{'frame':>5} {'x':>6} {'y':>6} {'vy':>7}")
print('-' * 28)


for frame in range(1, 20):
    dt = 1 / FPS


    # gravity
    ball["vy"] += GRAVITY * dt


    # update position
    ball["x"] += ball["vx"] * dt
    ball["y"] += ball["vy"] * dt


    # boundary bounce
    if ball["x"] < 0:
        ball["x"] = 0; ball["vx"] = -ball["vx"]
    if ball["x"] > W - 1:
        ball["x"] = W - 1; ball["vx"] = -ball["vx"]
    if ball["y"] > H - 1:    # hit floor
        ball["y"] = H - 1
        ball["vy"] = -abs(ball["vy"]) * 0.7   # lose 30% energy
    if ball["y"] < 0:
        ball["y"] = 0; ball["vy"] = abs(ball["vy"])


    print(f"{frame:>5} {ball['x']:>6.1f} {ball['y']:>6.1f} {ball['vy']:>7.1f}")
`},
{id:64,title:"Collision Detection: AABB and Rect",tag:"Specialty",content:`
# Chapter 64: Collision Detection — AABB and Rect


> 🎮 **Specialty · pygame**: Player hits a brick, bullet hits a monster, picking up a coin — it’s all the same problem.


## 64.1 Rectangle vs rectangle: AABB


Simplest and fastest: **Axis‑Aligned Bounding Box** (two unrotated rectangles).


\`pygame\` one‑liner:


\`\`\`python
if player.rect.colliderect(enemy.rect):
    player.hp -= 10
\`\`\`


If you write it yourself:


\`\`\`python
def aabb_collide(r1, r2):
    return (r1.x < r2.x + r2.w and
            r1.x + r1.w > r2.x and
            r1.y < r2.y + r2.h and
            r1.y + r1.h > r2.y)
\`\`\`


## 64.2 Point vs rectangle (mouse click on UI)


\`\`\`python
if button_rect.collidepoint(mouse_x, mouse_y):
    on_click()
\`\`\`


## 64.3 One‑to‑many


\`\`\`python
hit_index = player.rect.collidelist([e.rect for e in enemies])
if hit_index != -1:
    print(f"Hit enemy[{hit_index}]")


# all hits
hit_all = player.rect.collidelistall([e.rect for e in enemies])
\`\`\`


## 64.4 Group collision (recommended: use Sprite)


\`\`\`python
class Player(pygame.sprite.Sprite): ...
class Coin(pygame.sprite.Sprite): ...


player = Player(...)
coins = pygame.sprite.Group(Coin(...), Coin(...), Coin(...))


# which coins were hit (and optionally remove them)
hit = pygame.sprite.spritecollide(player, coins, dokill=True)
score += len(hit)
\`\`\`


## 64.5 Circle vs circle


\`\`\`python
def circle_collide(c1, r1, c2, r2):
    dx = c1[0] - c2[0]
    dy = c1[1] - c2[1]
    return dx*dx + dy*dy < (r1 + r2)**2     # ← avoid sqrt, faster
\`\`\`


## 64.6 Pixel‑perfect collision (mask)


Rectangle collision can be wrong for irregular shapes (circles, odd sprites). For pixel‑perfect:


\`\`\`python
mask1 = pygame.mask.from_surface(img1)
mask2 = pygame.mask.from_surface(img2)
offset = (rect2.x - rect1.x, rect2.y - rect1.y)
if mask1.overlap(mask2, offset):
    print("Real collision")
\`\`\`


Slower, so **only check after rectangle collision already passed**.


## 64.7 Solving wall‑sticking: check x and y separately


\`\`\`python
# Wrong: update both x and y together, can get stuck
pos += vel * dt
if collide_with_walls(): ...


# Right: separate x and y
pos.x += vel.x * dt
if collide_x_with_walls(): pos.x -= vel.x * dt   # revert


pos.y += vel.y * dt
if collide_y_with_walls(): pos.y -= vel.y * dt
\`\`\`


This way, sliding along a wall works smoothly.


## 64.8 Complete bullet vs monster example


\`\`\`python
bullets  = []       # list of (rect, vx)
enemies  = [...]
score = 0


while running:
    dt = clock.tick(60) / 1000


    # bullet movement
    for b in bullets:
        b[0].x += b[1] * dt


    # remove off‑screen bullets
    bullets = [b for b in bullets if 0 <= b[0].x <= 800]


    # collisions
    for b in bullets[:]:
        for e in enemies[:]:
            if b[0].colliderect(e.rect):
                enemies.remove(e)
                bullets.remove(b)
                score += 10
                break
\`\`\`


## 64.9 Try it (simulated)


The example simulates “bullet vs monster” AABB collision detection.
`,
example:`# Simulate: AABB collision detection + bullet vs monster
def aabb(r1, r2):
    return (r1["x"] < r2["x"] + r2["w"] and
            r1["x"] + r1["w"] > r2["x"] and
            r1["y"] < r2["y"] + r2["h"] and
            r1["y"] + r1["h"] > r2["y"])


# scene
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


print("=== Collision detection results ===")
score = 0
for i, b in enumerate(bullets):
    hit = None
    for e in enemies:
        if aabb(b, e):
            hit = e["id"]
            score += 10
            break
    print(f"bullet[{i}]@({b['x']},{b['y']}) → " + (f"hit monster {hit}!" if hit else "miss"))


print(f"\\nTotal score: {score}")


# point vs rectangle
button = {"x": 100, "y": 50, "w": 80, "h": 30}
def in_button(px, py):
    return (button["x"] <= px <= button["x"] + button["w"] and
            button["y"] <= py <= button["y"] + button["h"])


mouse_tests = [(120, 60), (200, 100), (101, 51)]
print("\\n=== Mouse click on button ===")
for mp in mouse_tests:
    print(f"  click {mp}: {'hit' if in_button(*mp) else 'miss'}")
`},
{id:65,title:"Text and Fonts: HUD and Score",tag:"Specialty",content:`
# Chapter 65: Text and Fonts — Displaying Score and UI


> 🎮 **Specialty · pygame**: Score, HP, hints, game over screen — a game can’t live without text.


## 65.1 Three steps to draw text


\`\`\`python
# 1) create font (usually once, outside the game loop)
font = pygame.font.SysFont("Arial", 36)


# 2) render into a Surface
text_surface = font.render("Hello", True, (255, 255, 255))
# True = anti‑aliasing (almost always True)


# 3) blit to screen
screen.blit(text_surface, (10, 10))
\`\`\`


## 65.2 System font vs custom font


\`\`\`python
# system font
font = pygame.font.SysFont("Arial", 24)


# list all available system fonts
print(pygame.font.get_fonts())


# custom font file (recommended — consistent across platforms)
font = pygame.font.Font("assets/Roboto.ttf", 24)
\`\`\`


## 65.3 Chinese fonts (common headache)


Default fonts don’t include Chinese. Use a font that supports Chinese or provide your own:


\`\`\`python
# Mac: Apple Color Emoji, PingFang TC
# Windows: Microsoft JhengHei
# cross‑platform: Noto Sans CJK
font = pygame.font.SysFont("Microsoft JhengHei", 24)
# or
font = pygame.font.Font("assets/NotoSansCJKtc-Regular.otf", 24)


text = font.render("Hello world", True, (255, 255, 255))
\`\`\`


> 💡 Using a font file is the most reliable — it won’t be missing on other computers.


## 65.4 Centering text


\`\`\`python
text_surface = font.render("GAME OVER", True, (255, 0, 0))
text_rect = text_surface.get_rect(center=(400, 300))
screen.blit(text_surface, text_rect)
\`\`\`


## 65.5 Multi‑line text


\`render\` doesn’t support line breaks; you need to split manually:


\`\`\`python
def draw_multiline(screen, font, text, color, x, y, line_height=30):
    for i, line in enumerate(text.split("\\n")):
        surface = font.render(line, True, color)
        screen.blit(surface, (x, y + i * line_height))


draw_multiline(screen, font, "Line 1\\nLine 2\\nLine 3", (255,255,255), 10, 10)
\`\`\`


## 65.6 Automatic line wrapping by width


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


## 65.7 HUD (heads‑up display)


\`\`\`python
# always on top
def draw_hud(screen, score, hp, font):
    # score
    text = font.render(f"Score: {score}", True, (255, 255, 255))
    screen.blit(text, (10, 10))


    # HP bar
    pygame.draw.rect(screen, (100, 0, 0), (10, 50, 200, 20))     # background
    pygame.draw.rect(screen, (200, 0, 0), (10, 50, hp * 2, 20))  # health
    hp_text = font.render(f"{hp}/100", True, (255, 255, 255))
    screen.blit(hp_text, (220, 50))
\`\`\`


## 65.8 Try it (simulated)


The example implements an ASCII‑based “score display” + “auto‑wrap” logic.
`,
example:`# Simulate: score display + auto‑wrap
def render(text, max_width):
    # split string into lines by max_width (simplified: split by space)
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


# simulate HUD
score = 1240
hp = 75
max_hp = 100


print("=" * 40)
print(f"  Score: {score:6}     HP: {hp}/{max_hp}")


# health bar
filled = int(hp / max_hp * 30)
bar = '█' * filled + '░' * (30 - filled)
print(f"  [{bar}]")
print("=" * 40)


# auto‑wrap test
msg = "Welcome to the game! Defeat all monsters to win the championship trophy."
print(f"\\nMessage (single line):\\n  {msg}\\n")
print(f"Auto‑wrap (width 30):")
for i, line in enumerate(render(msg, 30)):
    print(f"  L{i}: {line}")


# simulate centering
def center_text(text, width):
    pad = (width - len(text)) // 2
    return ' ' * pad + text


print(f"\\nCentered (width 40):")
print(center_text("GAME OVER", 40))
print(center_text("Press R to restart", 40))
`},
{id:66,title:"Sound Effects and Music",tag:"Specialty",content:`
# Chapter 66: Sound Effects and Music


> 🎮 **Specialty · pygame**: A silent game has no soul. Learn the two ways to play audio.


## 66.1 Two audio types: SFX vs Music


| Type | API | Purpose | Characteristics |
|------|-----|---------|-----------------|
| **SFX** (sound effect) | \`pygame.mixer.Sound\` | short: jump, hit, coin | pre‑loaded into RAM, multiple can play at once |
| **Music** (BGM) | \`pygame.mixer.music\` | long: background music | streamed, only one can play at a time |


## 66.2 SFX


\`\`\`python
import pygame
pygame.mixer.init()   # usually already done by pygame.init()


# load (outside the game loop)
jump_sfx = pygame.mixer.Sound("assets/jump.wav")
hit_sfx  = pygame.mixer.Sound("assets/hit.wav")
coin_sfx = pygame.mixer.Sound("assets/coin.wav")


# set volume 0.0 ~ 1.0
jump_sfx.set_volume(0.7)


# play
jump_sfx.play()
hit_sfx.play(loops=2)         # repeat 2 times
coin_sfx.play(fade_ms=200)    # fade in
\`\`\`


Supported formats: \`.wav\` (most reliable) / \`.ogg\`. \`.mp3\` may not work on some platforms.


## 66.3 Playing multiple SFX simultaneously


\`mixer\` provides 8 channels by default and allocates them automatically:


\`\`\`python
pygame.mixer.set_num_channels(16)    # max 16 simultaneous sounds


# or assign to a specific channel
ch = pygame.mixer.Channel(0)
ch.play(jump_sfx)
ch.set_volume(0.5)
\`\`\`


## 66.4 Background music


\`\`\`python
pygame.mixer.music.load("assets/bgm.mp3")
pygame.mixer.music.set_volume(0.5)
pygame.mixer.music.play(loops=-1)    # -1 = infinite loop
pygame.mixer.music.play(loops=2, start=10.0)   # start at 10s, play 2 times


# control
pygame.mixer.music.pause()
pygame.mixer.music.unpause()
pygame.mixer.music.stop()
pygame.mixer.music.fadeout(2000)   # fade out over 2 seconds


# check status
if pygame.mixer.music.get_busy():
    print("Music is playing")
\`\`\`


## 66.5 Playing SFX on events


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


## 66.6 Changing music for different scenes


\`\`\`python
def go_to_boss_room():
    pygame.mixer.music.fadeout(1000)
    pygame.mixer.music.queue("boss_bgm.ogg")   # play next after fadeout
\`\`\`


## 66.7 Where to find audio assets


| Source | Notes |
|--------|-------|
| freesound.org | huge collection, CC licensed |
| opengameart.org | game‑oriented |
| bfxr.net | online 8‑bit sound generator |
| zapsplat.com | free with registration |
| record yourself | microphone + Audacity |


⚠️ Always check the license. Use CC0 / royalty‑free for your own projects.


## 66.8 Try it (simulated)


The example implements a “sound event dispatcher”: based on game events, decide which sound to play.
`,
example:`# Simulate: sound event dispatcher
class SoundMixer:
    def __init__(self):
        self.channels = []   # sounds currently playing
        self.music = None
        self.music_volume = 1.0


    def play_sfx(self, name, volume=1.0):
        # real pygame: Sound(name).play()
        self.channels.append((name, volume))
        print(f"  🔊 SFX [{name}] vol={volume}")


    def play_music(self, name, loops=-1):
        if self.music:
            print(f"  🎵 stopping [{self.music}]")
        self.music = name
        print(f"  🎵 playing BGM [{name}] loops={loops}")


    def fadeout_music(self, ms):
        if self.music:
            print(f"  🎵 [{self.music}] fadeout {ms}ms")
            self.music = None


mixer = SoundMixer()


# simulate game events
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


# event → sound mapping
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


print(f"\\nTotal SFX played: {len(mixer.channels)}")
`},
{id:67,title:"Complete Mini Game: Pong",tag:"Specialty",content:`
# Chapter 67: Complete Mini Game — Pong


> 🎮 **Specialty · pygame**: Integrate everything from the previous 7 chapters. Build a playable game in under 100 lines.


## 67.1 Design


**Pong** (one of the earliest video games):


- Two paddles (left and right), controlled by keyboard up/down
- One ball in the middle, bounces off walls and paddles
- Ball leaves left/right edge → opponent scores
- First to 5 points wins


## 67.2 Complete code


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


# === objects ===
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


    # top/bottom wall bounce
    if ball.top <= 0 or ball.bottom >= H:
        vel.y *= -1


    # paddle bounce
    if ball.colliderect(p1) or ball.colliderect(p2):
        vel.x *= -1.05    # bounce and speed up
        vel.y += random.uniform(-50, 50)


    # out of bounds
    if ball.left <= 0:
        score2 += 1
        reset_ball()
    elif ball.right >= W:
        score1 += 1
        reset_ball()


    # win condition
    if max(score1, score2) >= WIN_SCORE:
        running = False


    # 4) draw
    screen.fill(BG)
    pygame.draw.rect(screen, WHITE, p1)
    pygame.draw.rect(screen, WHITE, p2)
    pygame.draw.ellipse(screen, WHITE, ball)
    pygame.draw.aaline(screen, (80, 80, 100), (W//2, 0), (W//2, H))   # centre line


    # scores
    t1 = font.render(str(score1), True, WHITE)
    t2 = font.render(str(score2), True, WHITE)
    screen.blit(t1, (W//4 - t1.get_width()//2, 30))
    screen.blit(t2, (3*W//4 - t2.get_width()//2, 30))


    pygame.display.flip()


# === game over ===
winner = "P1" if score1 > score2 else "P2"
print(f"{winner} WINS! {score1} - {score2}")
pygame.quit()
\`\`\`


## 67.3 What you can extend


| Want to add | How |
|-------------|-----|
| Sound effects | \`pygame.mixer.Sound.play()\` on paddle hit / score |
| Particles | spawn small dots at collision point, fade out |
| AI opponent | make p2 follow the ball: \`if ball.y > p2.centery: p2.y += SPEED * dt\` |
| Main menu | use a state machine: \`state = "menu" / "playing" / "gameover"\` |
| Multiplayer over network | use \`socket\` or WebSocket |


## 67.4 Game development roadmap


\`\`\`
You are here ↓
├── Pong / Snake (← this chapter, 100 lines)
├── Platform jumper (Mario‑like)         ← 600 lines
├── Top‑down shooter                     ← 1500 lines
├── RPG with dialogue / inventory        ← 5000+ lines
└── Use Godot / Unity for full games     ← engine assisted
\`\`\`


> 🎉 **Congratulations on reaching the Pong chapter!** From the first \`print("Hello")\` to a complete mini game, you’ve walked the full spectrum of Python development.
>
> The most important thing now: **build something you want to build**.
> Whether it’s a tool, a scraper, a bot, or a small game, **finishing one small project** will teach you more than reading 10 new chapters.


## 67.5 Try it (simulated)


The example is a text‑only version of Pong: the ball moves left/right on a 1D track, players score until 3 points.
`,
example:`# Simulate: simplified Pong (text version)
# ball moves left/right on track 0~width
# ball leaves left → P2 scores; leaves right → P1 scores
# first to 3 wins


WIDTH = 20
ball_x = 10.0
ball_vx = 1.0
score = [0, 0]
WIN = 3


frame = 0
while max(score) < WIN:
    frame += 1
    ball_x += ball_vx


    # out of bounds
    if ball_x < 0:
        score[1] += 1
        print(f"frame {frame:3} | ❗ P2 scores! {score[0]}-{score[1]}")
        ball_x = WIDTH / 2
        ball_vx = 1.0
    elif ball_x > WIDTH:
        score[0] += 1
        print(f"frame {frame:3} | ❗ P1 scores! {score[0]}-{score[1]}")
        ball_x = WIDTH / 2
        ball_vx = -1.0
    else:
        # visualisation
        pos = int(ball_x)
        line = ['·'] * (WIDTH + 1)
        if 0 <= pos <= WIDTH:
            line[pos] = '●'
        print(f"frame {frame:3} | P1|{''.join(line)}|P2  score={score}")


winner = "P1" if score[0] > score[1] else "P2"
print(f"\\n🏆 {winner} wins! Final score {score[0]}-{score[1]}")
print(f"Total frames: {frame}")
`},
{id:68,title:"APCS New Grading & Code Reading",tag:"APCS",content:`
# Chapter 68: APCS New Grading & Code Reading


This chapter organises the new APCS framework into a clear criterion you can use to practice. The official new system divides implementation into four levels: Elementary, Intermediate, Intermediate‑Advanced, and Advanced. “Code reading” tests your ability to understand program flow, variable changes, and outputs.


## 68.1 Understanding the four levels


| Level | Key ability | Clues when reading a problem |
|-------|-------------|------------------------------|
| Elementary | Basic programming | Problem rules can be directly translated to if, loop, array or string operations; constraints are usually small. |
| Intermediate | Using sequential data structures | Need to handle a list, a table, sorting, prefix sums, two pointers, sliding windows, or simple DP. |
| Intermediate‑Advanced | Using fundamental data structures | Need stack, queue, set, map, hash, BFS/DFS, DSU, trees, or more complete state management. |
| Advanced | Applying algorithmic procedures | Brute force usually isn’t enough; need shortest paths, advanced DP, divide & conquer, binary search on answer, string hashing, or complexity optimisation. |


In short: Elementary is about writing correct code; Intermediate is about organising sequence data; Intermediate‑Advanced is about choosing the right data structure; Advanced is about designing algorithms and complexity.


## 68.2 5‑step analysis before coding


1. Look at the input/output format first — don’t think about algorithms yet.
2. Check the constraints. Small N means enumeration is fine; N up to 100k usually needs O(N log N) or O(N).
3. Circle keywords: contiguous, distinct, shortest, maximum, interval, multiple queries, repeatable, not adjacent.
4. Manually run the example to make sure you truly understand the problem.
5. Then decide the data structure: list, dict, set, queue, stack, heap, DSU, or graph.


## 68.3 Code reading techniques


Code reading is not guessing – it’s methodically tracking state.


| Question type | Method |
|---------------|--------|
| Loop | Build a trace table with columns: i, current element, key variables, output |
| Nested loop | First note what stays constant in the outer loop, then see how the inner loop accumulates or updates |
| Recursion | Find the base case, draw a call tree, then work back from the deepest level |
| List/dict/set | Track each add, delete, overwrite; special attention when the same key is updated |
| Output questions | Write down every print, including spaces and newlines |


Common traps: integer division, zero‑based indexing, range excludes the end, break/continue, variables kept outside the loop, lists modified in place, functions with side effects.


## 68.4 What a trace table looks like


When you see a loop, turn the vague feeling into a table:


| i | x | action | ans |
|---|---|--------|-----|
| 0 | 3 | even index, add x | 3 |
| 1 | 1 | odd index, subtract x | 2 |
| 2 | 4 | even index, add x | 6 |
| 3 | 1 | odd index, subtract x | 5 |
| 4 | 5 | even index, add x | 10 |


APCS code reading problems are rarely very long; they usually trick you on one or two variables. Writing a table dramatically reduces mistakes.


## 68.5 How to practice with this problem set


This set has 125 problems redistributed into four levels:


| Level | Number of problems |
|-------|-------------------|
| Elementary | 36 |
| Intermediate | 49 |
| Intermediate‑Advanced | 27 |
| Advanced | 13 |


Suggested practice path:


1. First grind Elementary until you can finish quickly, focusing on input handling, condition branches, and edge cases.
2. At Intermediate, start building your own templates: sorting, prefix sums, binary search, sliding window, simple DP.
3. At Intermediate‑Advanced, record *why* you chose each data structure.
4. At Advanced, write down the time complexity first, then the code.


> Small reminder: the problem level is not your level. Getting stuck at Intermediate only means you need more practice with that type of data handling – it doesn’t mean you’re bad at programming.
`,
example:`# Code reading exercise: trace by yourself before running


a = [3, 1, 4, 1, 5]
ans = 0


for i, x in enumerate(a):
    if i % 2 == 0:
        ans += x
    else:
        ans -= x
    print(i, x, ans)


print("final", ans)


# Expected output:
# 0 3 3
# 1 1 2
# 2 4 6
# 3 1 5
# 4 5 10
# final 10
`},
{id:69,title:"🔥 Fast Exponentiation and Modular Arithmetic【Advanced】",tag:"Advanced",content:`
# Chapter 69: Fast Exponentiation and Modular Arithmetic 🔥【Advanced】


> 🎯 When you see \`a^n mod m\`, n is huge (10^9 or more), or the problem says “output answer modulo 1000000007” — this chapter is for you.


## 69.1 Why can’t we just multiply directly?
With n = 10^9, a loop that multiplies n times will TLE for sure; even if it didn’t, the integers would overflow.
**Fast exponentiation** uses “squaring decomposition” to reduce from O(n) to **O(log n)**.


## 69.2 Core observation
\`a^n\` can be split:
- If n is even: \`a^n = (a^(n/2))^2\`
- If n is odd: \`a^n = a · a^(n-1)\`


Each step halves the problem size → log n steps.


## 69.3 Iterative version (recommend memorising this)
\`\`\`python
def fast_pow(a, n, mod=None):
    result = 1
    while n > 0:
        if n & 1:               # lowest bit of n is 1
            result = result * a
            if mod: result %= mod
        a = a * a
        if mod: a %= mod
        n >>= 1                  # n //= 2
    return result


print(fast_pow(2, 10))                 # 1024
print(fast_pow(2, 10**9, 10**9 + 7))   # 2^(10^9) modulo
\`\`\`


## 69.4 Python built‑in — there’s already one
\`\`\`python
pow(2, 10**9, 10**9 + 7)    # C implementation, fastest
\`\`\`
**For APCS Python, just use \`pow(a, n, m)\`**; but C/C++/Java must hand‑write it.


## 69.5 C++ version (template for advanced problems)
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
> ⚠️ Use \`long long\`, otherwise \`a*a\` can overflow.


## 69.6 Application 1: modular inverse (Fermat’s little theorem)
When \`mod\` is prime, the inverse of a is \`a^(mod-2) mod\`:
\`\`\`python
MOD = 10**9 + 7
inv = pow(a, MOD-2, MOD)        # modular inverse of a
\`\`\`
Common in combination problems: \`C(n,k) mod p\`.


## 69.7 Application 2: matrix fast exponentiation → accelerate linear recurrences
Fibonacci can be written as a matrix:
\`\`\`
[F(n+1)]   [1 1]^n  [F(1)]
[F(n)  ] = [1 0]  · [F(0)]
\`\`\`
Combined with matrix fast exponentiation → compute the nth Fibonacci in O(log n). This is a common advanced DP acceleration technique.


## 69.8 Pitfall list
- In modular arithmetic you cannot directly divide → multiply by modular inverse instead
- Apply \`a %= mod\` once at the beginning to avoid overflow early
- When n = 0, the answer is 1 (note: 0^0 is convention‑based; usually 1)


## 69.9 Try it

## 69.10 🧠 Design Motivation: Why Can We "Apply Mod at Every Step"?

Many people see \`result = result * a % mod\` and intuitively think "this computes a different thing than taking mod at the end — shouldn't it be wrong?" This intuition is incorrect, because of the congruence property of modular arithmetic:

\`(a × b) mod m = ((a mod m) × (b mod m)) mod m\`

In plain language: multiplying two numbers and then taking mod equals "take mod of each, multiply, then take mod again." So taking mod at every step gives exactly the same final result as taking mod only at the very end.

**Why take mod at every step?**

Not for correctness (both approaches give the same answer), but to prevent integer overflow. 2^(10^9) is an astronomically large number. Python's big integers won't overflow, but intermediate values keep growing, making multiplication increasingly slow. C/C++/Java will simply overflow. Taking mod at each step keeps numbers permanently below mod², within a manageable range.

\`\`\`python
MOD = 10**9 + 7

# Demonstrating the congruence property
a, b = 123456789, 987654321
print((a * b) % MOD)                   # Method 1: mod at end
print((a % MOD) * (b % MOD) % MOD)    # Method 2: mod each first
# Both results are identical
\`\`\`
`,example:`# Compare three implementation speeds
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


print(f"slow_pow : {v1}   time {t1:.4f}s")
print(f"fast_pow : {v2}   time {t2:.6f}s")
print(f"built‑in pow: {v3}   time {t3:.6f}s")
print(f"\\nfast exponentiation is {t1/max(t2,1e-9):.0f} times faster than the loop")
`},
{id:70,title:"🔥 Divide & Conquer and Inversion Count【Advanced】",tag:"Advanced",content:`
# Chapter 70: Divide & Conquer and Inversion Count 🔥【Advanced】


> 🎯 “Number of inversions” (\`i < j\` but \`a[i] > a[j]\`) is a classic advanced APCS problem — and a perfect example of using merge sort for counting.


## 70.1 Three steps of divide & conquer
1. **Divide**: split the problem into two halves (usually at the middle)
2. **Conquer**: solve each half recursively
3. **Combine**: merge the two sub‑answers and count “crossing” contributions


Merge sort, closest pair of points, divide‑and‑conquer maximum subarray — all follow this skeleton.


## 70.2 Why O(n²) is not enough
Brute force: double loop to count inversions → for 1e5 elements, that’s 10^10 comparisons → **TLE**.
Divide & conquer can do **O(n log n)**.


## 70.3 Merge sort review
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


## 70.4 Modify to “sort and count inversions”
**Key insight**: when merging, every time we take an element from the right side \`R[j]\`, it means all the remaining elements in \`L[i..]\` are greater than \`R[j]\` → they all form inversions with \`R[j]\`. So we add \`len(L) - i\` to the count.


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
                c += len(L) - i      # ← count inversions here
        out += L[i:]; out += R[j:]
        return out, cL + cR + c
    return go(a)[1]


print(count_inv([2, 4, 1, 3, 5]))   # 3: (2,1)(4,1)(4,3)
\`\`\`
Time **O(n log n)**, space O(n).


## 70.5 Why does \`len(L) - i\` count inversions?
During merging, both halves are **already sorted**. If \`L[i] > R[j]\`, then every element \`L[i], L[i+1], …, L[-1]\` is also > \`R[j]\`. Also, because L comes from the left half, all those indices are to the left of \`R[j]\`’s original index → they all form inversions with \`R[j]\`.


## 70.6 Another method: BIT (Binary Indexed Tree) can also count inversions
Discretize + BIT, scan from right to left, for each element query “how many smaller numbers have appeared”. Also O(n log n), O(n) space. Implementation is longer but has a smaller constant.
(Details of BIT are beyond this chapter; focus on building intuition with the divide‑conquer version first.)


## 70.7 Variations
- Count **non‑inversions** (order pairs): change \`<=\` to \`<\` or symmetric handling
- Count pairs where \`a[i] - a[j] > k\`: use two pointers during merge
- Maximum subarray divide‑conquer version (classic CLRS example): max of (left max, right max, crossing max)


## 70.8 Try it
`,example:`# Compare O(n²) brute force vs O(n log n) divide & conquer
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


print(f"Brute O(n²)     answer = {b}   time {t1:.4f}s")
print(f"Divide‑conquer O(n log n) answer = {f}   time {t2:.4f}s")
print(f"\\nResults match: {b == f}     divide‑conquer is {t1/max(t2,1e-9):.1f} times faster")
`},

// ─── C++ specialized chapters (visible only in cpp mode) ─────────
{id:71,title:"STL Complete: Containers & Iterators",tag:"C++ Track",content:`# Switch to C++ mode to read this chapter`,example:`// C++-only chapter, please switch to C++ mode`},
{id:72,title:"Templates & auto",tag:"C++ Track",content:`# Switch to C++ mode to read this chapter`,example:`// C++-only chapter`},
{id:73,title:"Smart Pointers & RAII",tag:"C++ Track",content:`# Switch to C++ mode to read this chapter`,example:`// C++-only chapter`},
{id:74,title:"Move Semantics & rvalue refs",tag:"C++ Track",content:`# Switch to C++ mode to read this chapter`,example:`// C++-only chapter`},
{id:75,title:"Lambdas & Function Objects",tag:"C++ Track",content:`# Switch to C++ mode to read this chapter`,example:`// C++-only chapter`},
{id:76,title:"<algorithm> library",tag:"C++ Track",content:`# Switch to C++ mode to read this chapter`,example:`// C++-only chapter`},
{id:77,title:"string_view & String Handling",tag:"C++ Track",content:`# Switch to C++ mode to read this chapter`,example:`// C++-only chapter`},
{id:78,title:"Concurrency: std::thread",tag:"C++ Track",content:`# Switch to C++ mode to read this chapter`,example:`// C++-only chapter`},

// ─── C specialized chapters (visible only in c mode) ─────────────
{id:79,title:"Pointers — From Basics to Deep",tag:"C Track",content:`# Switch to C mode to read this chapter`,example:`// C-only chapter, please switch to C mode`},
{id:80,title:"Dynamic Memory: malloc / free",tag:"C Track",content:`# Switch to C mode to read this chapter`,example:`// C-only chapter`},
{id:81,title:"struct & union Advanced",tag:"C Track",content:`# Switch to C mode to read this chapter`,example:`// C-only chapter`},
{id:82,title:"Function Pointers & Callbacks",tag:"C Track",content:`# Switch to C mode to read this chapter`,example:`// C-only chapter`},
{id:83,title:"String Handling: strcpy / strtok",tag:"C Track",content:`# Switch to C mode to read this chapter`,example:`// C-only chapter`},
{id:84,title:"Advanced Macros & Conditional Compilation",tag:"C Track",content:`# Switch to C mode to read this chapter`,example:`// C-only chapter`},
{id:85,title:"System Calls: read / write / fork",tag:"C Track",content:`# Switch to C mode to read this chapter`,example:`// C-only chapter`},
{id:86,title:"Makefile & Multi-file Compilation",tag:"C Track",content:`# Switch to C mode to read this chapter`,example:`// C-only chapter`},

// ─── Java specialized chapters (visible only in java mode) ───────
{id:87,title:"Collections Framework",tag:"Java Track",content:`# Switch to Java mode to read this chapter`,example:`// Java-only chapter, please switch to Java mode`},
{id:88,title:"Generics",tag:"Java Track",content:`# Switch to Java mode to read this chapter`,example:`// Java-only chapter`},
{id:89,title:"Stream API",tag:"Java Track",content:`# Switch to Java mode to read this chapter`,example:`// Java-only chapter`},
{id:90,title:"Optional & null-safety",tag:"Java Track",content:`# Switch to Java mode to read this chapter`,example:`// Java-only chapter`},
{id:91,title:"Threads: Runnable / Thread",tag:"Java Track",content:`# Switch to Java mode to read this chapter`,example:`// Java-only chapter`},
{id:92,title:"Concurrency: Lock / Atomic",tag:"Java Track",content:`# Switch to Java mode to read this chapter`,example:`// Java-only chapter`},
{id:93,title:"Annotations & Reflection",tag:"Java Track",content:`# Switch to Java mode to read this chapter`,example:`// Java-only chapter`},
{id:94,title:"JVM & Garbage Collection",tag:"Java Track",content:`# Switch to Java mode to read this chapter`,example:`// Java-only chapter`},
{id:95,title:"The Object Model: Name Tags vs Boxes",tag:"Core Concept",content:`
# Chapter 95: The Object Model — Variables Are Name Tags, Not Boxes

> 🧠 **Core concept**: the most misunderstood thing in Python. Understand this and half of your weird bugs disappear.

## 95.1 Assignment = hanging a name tag on an object

Many people imagine \`a = 3\` as "putting 3 into a box named a". **That mental model is wrong in Python.**

The correct picture:
1. An object \`3\` is created somewhere in memory
2. \`a\` is just a **name tag** attached to that object

\`\`\`python
a = 3
print(id(a))   # id() returns the object's "memory identity"
b = a
print(id(b))   # identical to a → two name tags on the same object
\`\`\`

\`b = a\` copies nothing — it just **adds another name tag**.

## 95.2 \`==\` vs \`is\`: equal value vs same object

| Comparison | Question it asks |
|------|----------|
| \`a == b\` | Do both sides have the same **content**? |
| \`a is b\` | Are both sides the **same object**? (same id) |

\`\`\`python
x = [1, 2, 3]
y = [1, 2, 3]
print(x == y)   # True: same content
print(x is y)   # False: two different list objects
z = x
print(x is z)   # True: two name tags, one object
\`\`\`

> ⚠️ Always use \`is\` for \`None\` checks: \`if x is None:\`. Use \`==\` for almost everything else.

## 95.3 Mutable vs immutable

| Immutable | Mutable |
|--------|------|
| \`int\`, \`float\`, \`str\`, \`tuple\`, \`bool\` | \`list\`, \`dict\`, \`set\` |

"Changing" an immutable object actually **creates a new object**:

\`\`\`python
s = "abc"
print(id(s))
s = s + "d"     # new string; the tag moves over
print(id(s))    # different!
\`\`\`

Mutable objects change **in place** — every name tag sees the change:

\`\`\`python
a = [1, 2, 3]
b = a            # two tags, one list
b.append(4)
print(a)         # [1, 2, 3, 4] ← a "changed" too!
\`\`\`

## 95.4 The aliasing trap, and real copies

\`a\` changing along with \`b\` is the **aliasing** trap. To get a real copy:

\`\`\`python
b = a[:]          # shallow copy (slice)
b = list(a)       # shallow copy
import copy
b = copy.deepcopy(a)   # deep copy: nested structures too
\`\`\`

A shallow copy only copies the outer layer — after shallow-copying \`[[1,2],[3,4]]\`, the two inner lists are still shared.

## 95.5 If you know C/Java

- Python variables behave like C pointers that never need \`*\` to dereference
- Java object variables work almost the same way (references); the difference is that in Python even \`int\` is an object
- Passing arguments = passing name tags (shared object): \`lst.append(...)\` inside a function affects the caller, but \`lst = [...]\` only re-tags the local name
`,example:`# Name-tag experiment: two tags, one list
a = [1, 2, 3]
b = a          # b and a are the same object
b.append(4)
print(a)       # a changed too!
print(a is b)  # True

c = a[:]       # a real copy
c.append(99)
print(a)       # unaffected
print(a is c)  # False`},
{id:96,title:"Advanced Parameters: *args/**kwargs",tag:"Core Concept",content:`
# Chapter 96: Advanced Function Parameters — *args, **kwargs and the Default-Value Trap

> 🧠 **Core concept**: read any library's function signature, and dodge Python's most famous parameter trap.

## 96.1 Positional vs keyword arguments

\`\`\`python
def greet(name, msg):
    print(f"{msg}, {name}!")

greet("Alice", "Hello")            # positional: matched by order
greet(msg="Hello", name="Alice")   # keyword: matched by name, any order
\`\`\`

## 96.2 The default-value trap: evaluated once, at definition time

Default values are created **once** when \`def\` runs, and **shared by every call**:

\`\`\`python
def add_item(x, box=[]):     # ❌ classic landmine
    box.append(x)
    return box

print(add_item(1))   # [1]
print(add_item(2))   # [1, 2] ← not [2]! the old box is still there
\`\`\`

The correct idiom — use \`None\` as a sentinel:

\`\`\`python
def add_item(x, box=None):   # ✅
    if box is None:
        box = []             # a fresh list per call
    box.append(x)
    return box
\`\`\`

> Rule: **never use a mutable object** (list / dict / set) as a default value.

## 96.3 *args: accept any number of positional arguments

\`\`\`python
def total(*args):        # args is a tuple
    print(args)          # (3, 5, 2)
    return sum(args)

print(total(3, 5, 2))    # 10
print(total())           # 0 is fine too
\`\`\`

## 96.4 **kwargs: accept any number of keyword arguments

\`\`\`python
def show(**kwargs):      # kwargs is a dict
    for k, v in kwargs.items():
        print(k, "=", v)

show(name="Alice", age=18)
\`\`\`

Combined, they form the universal signature (decorators, argument forwarding):

\`\`\`python
def wrapper(*args, **kwargs):
    return real_func(*args, **kwargs)
\`\`\`

## 96.5 The reverse: unpacking at the call site

At the **call site**, \`*\` and \`**\` mean **unpack**:

\`\`\`python
nums = [3, 5, 2]
print(total(*nums))      # same as total(3, 5, 2)

opts = {"name": "Alice", "age": 18}
show(**opts)             # same as show(name="Alice", age=18)
\`\`\`

## 96.6 Keyword-only parameters

Parameters after \`*\` **must** be passed by keyword:

\`\`\`python
def open_file(path, *, encoding="utf-8"):
    ...

open_file("a.txt", encoding="big5")   # ✅
open_file("a.txt", "big5")            # ❌ TypeError
\`\`\`

Much of the standard library (e.g. \`sorted(key=...)\`) is designed this way to force readable calls.
`,example:`def total(*args):
    print("args =", args)
    return sum(args)

print(total(3, 5, 2))

nums = [10, 20, 30]
print(total(*nums))   # unpacking call

def add_item(x, box=None):   # the correct default idiom
    if box is None:
        box = []
    box.append(x)
    return box

print(add_item(1))
print(add_item(2))   # a fresh box every call`},
{id:97,title:"How to Read Official Docs",tag:"Practical",content:`
# Chapter 97: How to Read Official Documentation — a Survival Skill

> 📖 **Practical**: no tutorial covers everything. If you can read official docs, you can teach yourself any new library.

## 97.1 Why official docs?

Blog posts go stale and AI can hallucinate; **the official documentation is always the final answer**. The difference: someone who can read docs finds the parameter in 10 seconds; someone who can't pastes a wrong example.

## 97.2 A map of docs.python.org

| Section | Contents | When to use |
|------|------|-----------|
| **Tutorial** | the official tutorial | systematic review |
| **Library Reference** | every built-in module & function | **most used**: str / list / math / json... |
| **Language Reference** | the grammar spec | advanced (dense) |

> 💡 Fast entry: Google "python str split site:docs.python.org" — almost always lands right.

## 97.3 Reading a function signature

A docs signature is packed with information:

\`\`\`text
str.split(sep=None, maxsplit=-1)
\`\`\`

- \`sep=None\`: has a default → **optional**; splits on whitespace by default
- \`maxsplit=-1\`: -1 means unlimited splits

Another one:

\`\`\`text
sorted(iterable, /, *, key=None, reverse=False)
\`\`\`

- parameters before \`/\` are **positional-only**
- parameters after \`*\` are **keyword-only** → \`sorted(a, key=len)\` ✅, \`sorted(a, len)\` ❌

Older docs also use square brackets for optional parts: \`range([start,] stop[, step])\`.

## 97.4 Docs without a browser: help() and dir()

\`\`\`python
print(dir(str))        # what methods does str have (name list)
help(str.split)        # print split's documentation
\`\`\`

\`dir()\` to find names, \`help()\` to read usage — built-in docs in your REPL.

## 97.5 Official docs for other languages

| Language | Docs | Notes |
|------|------|------|
| C++ | **cppreference.com** | the de-facto standard; runnable examples |
| C | cppreference.com (C section) / man pages | \`man 3 printf\` |
| Java | **Oracle Javadoc** (docs.oracle.com) | one page per class; Method Summary first |

C++ trick: search "cppreference vector push_back". Javadoc trick: scan the **Method Summary** table before drilling in.

## 97.6 Hands-on

The docs say \`str.split(sep=None, maxsplit=-1)\` — so what does \`maxsplit=2\` do?

\`\`\`python
print("a,b,c,d".split(",", 2))   # ['a', 'b', 'c,d']: only 2 cuts
\`\`\`

**Verifying the docs yourself** is the final — and most important — step of reading documentation.
`,example:`# Built-in documentation tools
help(str.split)

# Verify what the docs claim: maxsplit=2 makes only 2 cuts
print("a,b,c,d".split(",", 2))

# dir() to find names
print(dir(str)[-10:])`}
,
{id:98,title:"Common Errors and Reading Compiler Messages",tag:"Debugging",content:`
# Chapter 98: Common Errors and Reading Compiler Messages

An error message is not a scolding. It is the computer leaving clues. Read it by finding three things first:

1. **Which file and line failed**
2. **What kind of error it is**
3. **The first error is usually more useful than the later ones**

## 98.1 Common Python errors

| Error | Meaning | Usual fix |
|------|------|---------|
| SyntaxError | invalid syntax | check colons, brackets, quotes |
| NameError | name does not exist | check spelling and assignment order |
| TypeError | wrong type usage | convert with int() / str() first |
| IndexError | index out of range | check len() and loop bounds |
| ValueError | invalid value format | check whether input can become a number |

## 98.2 Common C / C++ / Java errors

| Error | Meaning | Usual fix |
|------|------|---------|
| expected ';' | missing semicolon | check the current or previous line |
| undeclared identifier | variable/function not declared | check spelling, include, scope |
| cannot convert | incompatible types | change the type or cast explicitly |
| segmentation fault | invalid memory access | check pointers and array bounds |
| NullPointerException | Java object is null | initialize or check before use |

## 98.3 Reading order

Do not guess from the last line. Use this order:

- read the **first error**
- find the file and line
- identify the error type
- inspect the previous line too
- fix one thing, then run again

## 98.4 Practice: make errors on purpose

Change a variable name in the editor and observe NameError. Then remove a bracket and observe SyntaxError.
`,example:`total_score = 100

# This line intentionally misspells total_score.
# Fix it so the program prints 100.
print(totla_score)
`},
{id:99,title:"Debugging Techniques: From print to Binary Search",tag:"Debugging",content:`
# Chapter 99: Debugging Techniques — From print to Binary Search

Debugging is not staring at code and hoping. Treat it like an experiment: keep shrinking the area where the bug can hide.

## 99.1 Minimal reproducible example

Reduce the big program:

- keep the input that fails
- remove unrelated features
- make the failure repeat reliably

## 99.2 print debugging

Print variables at key points:

\`\`\`python
print("i =", i, "total =", total)
\`\`\`

Do not print everything. Print to answer questions:

- how many times did the loop run?
- did the condition execute?
- at which step did the value become wrong?

## 99.3 Binary-search the bug

If a program has 100 lines, do not guess line by line. Print in the middle:

\`\`\`python
print("checkpoint A")
\`\`\`

If everything before A is fine and after A is wrong, inspect the second half; otherwise inspect the first half. It is the same idea as binary search.

## 99.4 Check edge cases

Common APCS edge cases:

- n = 0 or n = 1
- all values equal
- already sorted / reverse sorted
- maximum and minimum values
- empty string, one-character string

## 99.5 Keep a bug note

After each fix, write one sentence:

> Cause: the loop skipped the last item. Fix: range(n-1) became range(n).

Next time, you will recognize the same pattern faster.
`,example:`nums = [3, 1, 4, 1, 5]
total = 0

for i, x in enumerate(nums):
    print("before", i, total)
    total = x   # bug: this should add, not overwrite
    print("after ", i, total)

print(total)
`},
{id:100,title:"Input Validation and Defensive Checks",tag:"Debugging",content:`
# Chapter 100: Input Validation and Defensive Checks

Real programs cannot assume users always enter valid data. Input validation checks format and range before data reaches the core logic.

## 100.1 Check format before conversion

\`\`\`python
s = input().strip()
if s.isdigit():
    n = int(s)
else:
    print("Please enter an integer")
\`\`\`

If you call \`int(input())\` directly, \`abc\` raises ValueError.

## 100.2 Check ranges

\`\`\`python
if 0 <= score <= 100:
    print("valid score")
else:
    print("score out of range")
\`\`\`

APCS problems usually promise valid input, but projects, tools, and websites do not.

## 100.3 Defensive design

Defensive checks do not hide errors. They make errors earlier and clearer:

- bad input → tell the user what is wrong
- invalid boundary → give a safe default or reject it
- invalid state → do not run a dangerous operation

## 100.4 Validate functions too

\`\`\`python
def average(nums):
    if not nums:
        return 0
    return sum(nums) / len(nums)
\`\`\`

An empty list cannot be divided by its length. Guard it first to avoid division by zero.

## 100.5 Practice: accept only valid scores

The editor example accepts only integers from 0 to 100; other inputs report a clear error.
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

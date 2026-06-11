// 題庫英文對照（譯者提供；含 169 補全英文版中已驗證收錄的 64 題；缺的欄位前端會 fallback 中文）
// 由 index.html 於切換 EN 時動態載入
const PROBLEMS_EN = {
 "b964": {
  "title": "Score Indicator",
  "topic": "Sorting, Arrays",
  "desc": "Read in the entire class's scores, sort them, then find the highest failing score (or best case) and the lowest passing score (or worst case). The passing score is 60.",
  "input_desc": "First line: number of students. Second line: each student's score (0~100), separated by spaces. Number of students is an integer between 1 and 20.",
  "output_desc": "First line: print all scores from small to large. Second line: the highest failing score or best case. Third line: the lowest passing score or worst case.",
  "hint": "**Keywords**: \"sorting\", \"highest/lowest\", \"highest among failing\" → sort then scan once.\n**Special values**: When not found, print \"best case\" / \"worst case\" → use `None` (Python) or `-1` (C/C++) as \"not found\" marker.\n**Output format**: First line use `print(*scores)` for automatic space separation."
 },
 "c294": {
  "title": "Triangle Classification",
  "topic": "Conditional Statements",
  "desc": "Given three side lengths, determine if they can form a triangle. If so, classify as Obtuse / Right / Acute.\n\n\nIf a+b≤c → No; a²+b²<c² → Obtuse; a²+b²=c² → Right; a²+b²>c² → Acute",
  "input_desc": "One line with three positive integers, each less than 30001.",
  "output_desc": "First line: print the three integers in ascending order. Second line: output No/Obtuse/Right/Acute.",
  "hint": "**Keywords**: \"three sides\", \"c is the longest\" → sort first so the longest side is last.\n**Order of checks**: First check `a+b≤c` (cannot form a triangle) → then compare `a²+b²` vs `c²` (angle type).\n**Caution**: Floating-point comparison may have errors; use integer squares `a*a+b*b == c*c` to be safe."
 },
 "c290": {
  "title": "Secret Difference",
  "topic": "String",
  "desc": "For a positive decimal integer, let A be the sum of digits in odd positions (starting from units digit as position 1), and B be the sum of digits in even positions. The secret difference is |A - B|.\n\n\nExample: 263541 → A=6+5+1=12, B=2+3+4=9, secret difference=3.",
  "input_desc": "Input a positive decimal integer X.",
  "output_desc": "Output the secret difference of X.",
  "hint": "**Keywords**: \"odd positions\", \"starting from units digit\" → reverse the string and use index `i%2` to distinguish odd/even positions.\n**Method**: reverse string with `s[::-1]` → enumerate → even indices (0,2,4) correspond to positions 1,3,5 (odd positions).\n**Output**: use `abs()` for absolute value."
 },
 "c461": {
  "title": "Logical Operators",
  "topic": "Conditional Statements",
  "desc": "Given non-negative integers a, b and a result r (0 or 1), determine which logical operations (AND/OR/XOR) can produce r from a and b. Non-zero integers are treated as 1. If none, output IMPOSSIBLE.",
  "input_desc": "One line with three integers a b r.",
  "output_desc": "Output the operations that match (AND/OR/XOR), one per line. If impossible, output IMPOSSIBLE.",
  "hint": "**Keywords**: \"non-negative integers\", \"result 0 or 1\" → treat non-zero as 1.\n**Method**: Normalize a, b to 0/1, then use bitwise operators `&`, `|`, `^` directly.\n**Output order**: The problem specifies fixed order AND, OR, XOR; no sorting needed."
 },
 "e283": {
  "title": "Special Encoding",
  "topic": "Arrays",
  "desc": "Each string consists of letters A~F, encoded as: A→0101, B→0111, C→0010, D→1101, E→1000, F→1100.\n\n\nMultiple test cases: each test case starts with N, then N lines each with 4 digits, ends at EOF.",
  "input_desc": "Multiple test cases: each case first line N, then N lines each with 4 digits (0 or 1), ends at EOF.",
  "output_desc": "Multiple outputs, each output the original string.",
  "hint": "**Keywords**: \"lookup table\", \"4-bit sequence\", \"until EOF\" → use dict/map for lookup, loop until EOF.\n**Method**: Combine the 4 input digits into a string key and lookup to get the character.\n**EOF handling**: Python use `try/except EOFError`; C/C++ use `while(cin >> n)` or check return value of `scanf`."
 },
 "e313": {
  "title": "Fewest Distinct Letters",
  "topic": "Arrays",
  "desc": "Among N strings, find the string with the fewest distinct letters. If multiple, choose the lexicographically smallest.",
  "input_desc": "First line N; next N lines each contain a string consisting only of uppercase letters.",
  "output_desc": "Output the string with the fewest distinct letters (lexicographically smallest).",
  "hint": "**Keywords**: \"fewest distinct letters\", \"lexicographically smallest\" → two-level sorting condition.\n**Method**: Use `set` to count distinct letters, update when `count < best_count` or `count == best_count and s < best`.\n**Note**: String comparison uses `<` directly (built-in lexicographic order in Python/C++)."
 },
 "e286": {
  "title": "Basketball Game",
  "topic": "Arrays",
  "desc": "Two teams play two basketball games (each game has four quarters). Output the score of each game, then the home team's result: Win/Lose/Tie.",
  "input_desc": "Four lines, each with four numbers (quarter scores). First two lines are home/away scores for game 1, next two lines for game 2.",
  "output_desc": "Two lines of scores (home:away), third line Win/Lose/Tie.",
  "hint": "**Keywords**: \"four quarter scores\", \"two games\" → use `sum(map(int, input().split()))` to add the four quarters directly.\n**Win/loss determination**: Use boolean to integer conversion, e.g., `(h1>c1) + (h2>c2)`.\n**Output format**: `{h1}:{c1}` using f-string or `cout<<h1<<\":\"<<c1`."
 },
 "h026": {
  "title": "Rock-Paper-Scissors",
  "topic": "Conditional Statements",
  "desc": "Moves: 0 (rock), 2 (scissors), 5 (paper). Brother's first move is F. Strategy: If sister plays the same move for two consecutive rounds, brother plays the move that beats it; otherwise, brother plays sister's previous move. Output brother's moves and results each round.",
  "input_desc": "First line: brother's first move F. Second line: N. Third line: N moves by sister.",
  "output_desc": "Output brother's move and result each round (Won/Lost/Drew at round k).",
  "hint": "**Keywords**: \"two consecutive same moves\", \"move that beats\" → write helper function `beat(x)` for the rules.\n**State**: Use `finished` flag to avoid breaking too early.\n**Core logic**: Each round, first check win/loss, then decide next move (if i>=1 and y[i]==y[i-1], play `beat(y[i])`)."
 },
 "f579": {
  "title": "Shopping Cart",
  "topic": "Counting",
  "desc": "Given product IDs a and b. Sensor records: positive integer x means add x, negative -x means remove x, 0 means end. Count the number of customers who bought both products.",
  "input_desc": "First line: a b. Second line: number of customers n. Next n lines each contain a shopping cart record (ends with 0).",
  "output_desc": "Output the number of customers who bought both product a and product b.",
  "hint": "**Keywords**: \"ultimately bought = added > removed\" → count per customer independently, track only products a and b.\n**Method**: Scan each record, add 1 for positive, subtract 1 for negative, stop at 0.\n**Simplification**: Only care about two products; use two variables `ca, cb`, no dictionary needed."
 },
 "f312": {
  "title": "Workforce Allocation",
  "topic": "Enumeration",
  "desc": "Two factories, profit functions Y₁=A₁X₁²+B₁X₁+C₁, Y₂=A₂X₂²+B₂X₂+C₂. All n workers must be assigned to the two factories. Enumerate all allocations and output the maximum total profit.",
  "input_desc": "First line: A₁ B₁ C₁; second line: A₂ B₂ C₂; third line: n (1≤n≤100).",
  "output_desc": "Output the maximum profit.",
  "hint": "**Keywords**: \"every worker must be assigned\", \"maximum profit\" → enumerate X₁ from 0 to n.\n**Method**: `X₂ = n - X₁`, compute total using quadratic Y = AX² + BX + C.\n**Note**: May be negative; initialize `best = None` or `LONG_MIN`."
 },
 "f605": {
  "title": "Purchasing Power",
  "topic": "Enumeration",
  "desc": "There are n products in the market, each with three daily prices. If the difference between max and min ≥ d, the product is bought (cost is the average, guaranteed integer). Output the number of products bought and total cost.",
  "input_desc": "First line: n d; next n lines each contain three prices.",
  "output_desc": "Output the number of products bought and total cost (space separated).",
  "hint": "**Keywords**: \"max-min difference at least d\", \"average of three days\" → filter with `max(prices) - min(prices) >= d`.\n**Method**: Loop through each product's three prices; if condition holds, `cnt++; cost += sum(prices)//3`.\n**Note**: The problem guarantees integer average, so integer division is fine."
 },
 "g275": {
  "title": "Seven-Character Couplet",
  "topic": "Conditional Statements",
  "desc": "Three rules for a seven-character couplet: A: positions 2 and 4 are different, positions 2 and 6 are the same; B: last character of first line is oblique (1), last of second line is level (0); C: positions 2,4,6 have opposite tone between lines. Output the violated rule(s) or None.",
  "input_desc": "First line: n; next 2n lines each contain 7 digits (0 or 1).",
  "output_desc": "For each couplet, output the violated rule(s) (combination of A/B/C) or None.",
  "hint": "**Keywords**: \"tone 0/1\", \"7 characters\", \"rules A/B/C\" → store each position in an array and compare according to rules.\n**Index mapping**: positions 2,4,6 → indices 1,3,5; last character → index 6.\n**String concatenation**: When a rule is violated, `bad += 'A'`; finally check if empty and output None."
 },
 "g595": {
  "title": "Repairing the Fence",
  "topic": "Arrays",
  "desc": "There are n fence segments, with height 0 indicating broken. The farmer fills each broken segment with the smaller of the heights of its left and right neighbors. It is guaranteed that no two adjacent segments are broken. Find the total length of new fence added.",
  "input_desc": "First line: n (3≤n≤100); second line: n integers (0≤h[i]≤100).",
  "output_desc": "Output the total added length.",
  "hint": "**Keywords**: \"adjacent smaller height\", \"boundaries\", \"no two adjacent broken\" → for each 0, look at left and right neighbors.\n**Boundary handling**: if `i==0`, only right; if `i==n-1`, only left; otherwise `min(h[i-1], h[i+1])`."
 },
 "h081": {
  "title": "Program Trading",
  "topic": "Conditional Statements",
  "desc": "Stock trading: Buy at time 1. While holding, if price y ≥ buy price + D, sell. While not holding, if y ≤ last sell price - D, buy. If still holding at the end, ignore. Output total profit.",
  "input_desc": "First line: n D; next n positive integers represent stock prices.",
  "output_desc": "Output total profit.",
  "hint": "**Keywords**: \"at most one share at a time\", \"transact when threshold met\" → use boolean `holding` for state.\n**State machine**: When holding, only check sell condition; when not holding, only check buy condition.\n**Note**: When selling, update `price` to the sell price (benchmark for next buy threshold)."
 },
 "i399": {
  "title": "Number Game",
  "topic": "Conditional Statements, Arrays",
  "desc": "Given three integers between 1 and 9, first output the mode frequency P, then output the unique digits sorted in descending order.",
  "input_desc": "One line with three integers.",
  "output_desc": "Output P and the unique digits sorted descending (same line).",
  "hint": "**Keywords**: \"mode frequency\", \"unique\", \"descending\" → combination of three techniques.\n**Method**: Use `count()` to find frequency → `sort(reverse=True)` → use `prev` variable to avoid duplicates.\n**Output**: `print(P, *unique)` for automatic space separation."
 },
 "i428": {
  "title": "Bus Stops",
  "topic": "Loops",
  "desc": "There are n bus stops in order from stop 1 to stop n. The travel time between adjacent stops is the Manhattan distance. Output the maximum and minimum travel times.",
  "input_desc": "First line: n (4≤n≤100); next n lines each contain two integers (-100≤x,y≤100).",
  "output_desc": "Output the maximum travel time and the minimum travel time.",
  "hint": "**Keywords**: \"Manhattan distance\", \"adjacent stops\", \"max and min\" → formula `|x₁-x₂| + |y₁-y₂|`.\n**Method**: Read all coordinates → compute n-1 distances → use `max()` and `min()`."
 },
 "j605": {
  "title": "Programming Exam",
  "topic": "Loops, Conditional Statements",
  "desc": "There are K submission records, s=-1 indicates a critical error. Total score = highest score - K - (critical errors)×2 (minimum 0). Output the total score and the time of the first highest score.",
  "input_desc": "First line: K; next K lines each contain t, s (first record is guaranteed not a critical error).",
  "output_desc": "Output the total score and the time when the first highest score was obtained.",
  "hint": "**Keywords**: \"time of first highest score\", \"critical error\", \"minimum 0\" → use `>` instead of `>=` to keep first occurrence.\n**Formula**: `max(0, best - K - errors*2)`.\n**Input handling**: when s=-1, `continue` to skip updating highest score."
 },
 "k731": {
  "title": "Path Detection",
  "topic": "Geometry",
  "desc": "Start at (0,0), initial direction right, move sequentially to n coordinate points (only horizontal or vertical moves). Output the number of left turns, right turns, and U-turns.",
  "input_desc": "First line: n; next n lines each contain coordinates x, y.",
  "output_desc": "Output three integers: left turns, right turns, U-turns.",
  "hint": "**Keywords**: \"direction\", \"left/right turns\", \"U-turn\" → use cross product and dot product.\n**Rules**: `dot < 0` → U-turn; `cross > 0` → left turn; `cross < 0` → right turn.\n**Initial direction**: (1, 0) for right."
 },
 "m370": {
  "title": "Mechanical Mouse",
  "topic": "Arrays",
  "desc": "A mouse is at position x, with n food items (n is odd). Choose to go left or right. Output the maximum number of foods that can be eaten and the final position.",
  "input_desc": "First line: x n; second line: n food positions.",
  "output_desc": "Output the maximum number of foods that can be eaten and the final position.",
  "hint": "**Keywords**: \"choose direction\", \"odd number of foods\" → because n is odd, left and right counts are different.\n**Method**: Split into left (`p<x`) and right (`p>x`) → compare the larger count → final position is the extreme in that direction."
 },
 "m931": {
  "title": "Game Character Selection",
  "topic": "Sorting",
  "desc": "There are n characters, power = a²+d² (all distinct). Output the attack and defense of the character with the second largest power.",
  "input_desc": "First line: n (3≤n≤20); next n lines each contain attack and defense.",
  "output_desc": "Output the attack and defense of the character with the second largest power.",
  "hint": "**Keywords**: \"power = a²+d²\", \"second largest\", \"distinct powers\" → simply sort.\n**Method**: Create array of `(power, a, d)` → sort descending → take a, d at index [1]."
 },
 "o076": {
  "title": "Stunt Performance",
  "topic": "Arrays",
  "desc": "There are n buildings. The gliding path requires building heights to be strictly decreasing. Find the length of the longest consecutive decreasing sequence.",
  "input_desc": "First line: n (5≤n≤100); second line: n positive integers representing building heights.",
  "output_desc": "Output the length of the longest gliding path.",
  "hint": "**Keywords**: \"strictly decreasing\", \"longest\" → classic longest consecutive decreasing sequence.\n**Method**: Maintain `cur` (current consecutive decreasing length). If `h[i]<h[i-1]`, increment `cur`, else reset to 1. Update `ans = max(ans, cur)`."
 },
 "o711": {
  "title": "Pouring Drinks",
  "topic": "Simulation",
  "desc": "A cup consists of two rectangular prism parts (bottom: w₁×w₁, height h₁; top: w₂×w₂, height h₂). Pour drinks n times in order. Once the cup is full, the water level stops rising. Output the maximum single water level increase.",
  "input_desc": "First line: n; second line: w₁ w₂ h₁ h₂; third line: n volumes.",
  "output_desc": "Output the maximum water level increase (integer).",
  "hint": "**Keywords**: \"two rectangular prisms\", \"no rise after full\" → write helper function `height(volume)` for piecewise formula.\n**Core**: if `v ≤ cap1` (bottom not full), return `v/(w1*w1)`; else return `h1 + (v-cap1)/(w2*w2)`.\n**Water limit**: `water = min(total_cap, water + v)`."
 },
 "q181": {
  "title": "Waiting for Traffic Light",
  "topic": "Periodicity",
  "desc": "Green light lasts a seconds, red light b seconds, cycling. n children each take t seconds to complete a lap. If they arrive during red light, they must wait until the next green. Compute total waiting seconds.",
  "input_desc": "First line: a b; second line: n; third line: n times.",
  "output_desc": "Output total waiting seconds.",
  "hint": "**Keywords**: \"green a seconds, red b seconds cycle\" → use modulo to find position in cycle.\n**Method**: `cycle = a+b`, `r = t % cycle`. If `r >= a` (in red) → wait `cycle - r` seconds."
 },
 "q836": {
  "title": "Beware of Traps",
  "topic": "Simulation",
  "desc": "Start at position 0 with health k. At current health v, move to pos+v. If landing on a multiple of x1, lose y1; if multiple of x2, lose y2. When health ≤ 0, output the position.",
  "input_desc": "First line: k; second line: x1 y1; third line: x2 y2.",
  "output_desc": "Output the position where the game ends.",
  "hint": "**Keywords**: \"health ≤ 0 ends\" → use infinite loop `while True` + break.\n**Note**: Multiples of x1 and x2 may coincide (problem says \"subtract y1+y2 total\"), so use two independent `if` statements, not `elif`."
 },
 "m001": {
  "title": "Maximum Subarray Sum",
  "topic": "Kadane's Algorithm",
  "desc": "Given an integer array (may contain negatives), find the contiguous subarray with the largest sum and output that sum. Must select at least one element.\n\n\n**Kadane's algorithm**: Maintain cur (current subarray sum) and ans (maximum). For each element x: cur = max(x, cur+x), ans = max(ans, cur).\n\n\nExample: [-2,1,-3,4,-1,2,1,-5,4] → maximum subarray [4,-1,2,1] with sum **6**.",
  "input_desc": "First line: n (1≤n≤100000); second line: n integers (-10000 ≤ a[i] ≤ 10000).",
  "output_desc": "Output the maximum subarray sum.",
  "hint": "**Keywords**: \"maximum subarray sum\" → **Kadane's algorithm**.\n**Core line**: `cur = max(x, cur+x)` means \"either continue previous subarray or start fresh from current element\".\n**All negative array**: Since we must select at least one element, the answer is the largest negative number, not 0."
 },
 "m002": {
  "title": "Climbing Stairs",
  "topic": "Dynamic Programming (DP)",
  "desc": "There are n steps. You can climb either 1 step or 2 steps at a time. How many distinct ways to reach the top?\n\n\nRecurrence: f(n) = f(n-1) + f(n-2), same as Fibonacci: f(1)=1, f(2)=2.",
  "input_desc": "Input a positive integer n (1 ≤ n ≤ 40).",
  "output_desc": "Output the number of ways to reach the top.",
  "hint": "**Keywords**: \"1 step or 2 steps\", \"number of ways\" → classic Fibonacci.\n**Recurrence**: `f(n) = f(n-1) + f(n-2)` (last step could be 1 or 2 steps).\n**Base**: f(1)=1, f(2)=2. Iterate directly to avoid recursion stack."
 },
 "m003": {
  "title": "Bracket Matching",
  "topic": "Stack",
  "desc": "Given a string containing only parentheses (), [], {}, determine if the brackets are **validly matched**.\n\n\nAlgorithm: Use a stack. Push left brackets; when encountering a right bracket, if stack is empty or top doesn't match, invalid. Finally, stack must be empty.",
  "input_desc": "Input a string containing only brackets (length ≤ 10000).",
  "output_desc": "Output Valid if valid, otherwise Invalid.",
  "hint": "**Keywords**: \"bracket matching\", \"close in correct order\" → use **stack**.\n**Rule**: Push left brackets; on right bracket, check if top matches.\n**Final check**: Stack must be empty for validity."
 },
 "m004": {
  "title": "Binary Search",
  "topic": "Binary Search",
  "desc": "Given a **strictly increasing integer array** and m queries, each query gives a number x. Find the position (1-based) of the **first element greater than or equal to x**. If not found, output -1.",
  "input_desc": "First line: n m; second line: n strictly increasing integers; next m lines each contain a query x.",
  "output_desc": "For each query, output the answer (1-based index or -1).",
  "hint": "**Keywords**: \"strictly increasing\", \"first greater than or equal to x\" → classic `lower_bound` binary search template.\n**Template**: `lo=0, hi=n-1, ans=-1`; `if a[mid] >= x: ans=mid+1, hi=mid-1; else: lo=mid+1`."
 },
 "m005": {
  "title": "Longest Increasing Subsequence (LIS)",
  "topic": "Dynamic Programming (DP)",
  "desc": "Given an integer sequence, find the length of the longest strictly increasing subsequence.\n\n\n**O(n²) DP**: dp[i] = length of LIS ending at a[i]. For each i, iterate over all j<i with a[j]<a[i] and take max of dp[j]+1.\n\n\nExample: [10,9,2,5,3,7,101,18] → LIS = [2,3,7,101], length **4**.",
  "input_desc": "First line: n (1≤n≤1000); second line: n integers.",
  "output_desc": "Output the length of LIS.",
  "hint": "**Keywords**: \"longest increasing subsequence\", \"not necessarily contiguous\" → **classic LIS DP**.\n**State**: `dp[i]` = length of LIS ending at `a[i]`.\n**Transition**: For all `j < i` with `a[j] < a[i]`, `dp[i] = max(dp[i], dp[j]+1)`."
 },
 "m006": {
  "title": "Prime Sieve",
  "topic": "Sieve",
  "desc": "Given a positive integer n, use the **Sieve of Eratosthenes** to output all primes not exceeding n.\n\n\nAlgorithm: Create a boolean array is_prime[0..n], initially all true. For each prime p, mark multiples of p starting from p² as false. Time complexity O(n log log n).",
  "input_desc": "Input a positive integer n (2 ≤ n ≤ 100000).",
  "output_desc": "Output all primes not exceeding n, separated by spaces.",
  "hint": "**Keywords**: \"all primes not exceeding n\" → **Sieve of Eratosthenes**.\n**Method**: Create a boolean array. Outer loop `i*i <= n` is an optimization (composites smaller than i*i have been marked by smaller primes).\n**Inner loop**: Start from `i*i` and mark every i-th number."
 },
 "m007": {
  "title": "Big Number Addition",
  "topic": "String Simulation",
  "desc": "Given two **very large non-negative integers** (as strings), compute their sum and output it. Do not use built-in big number libraries.\n\n\nAlgorithm: Add digit by digit from the least significant digit, maintaining a carry.",
  "input_desc": "Input two lines, each a non-negative integer (number of digits ≤ 1000).",
  "output_desc": "Output the sum of the two numbers.",
  "hint": "**Keywords**: \"very large\", \"cannot use big number library\" → **string simulation of manual addition**.\n**Method**: Two pointers from the end, add digit by digit plus carry.\n**Note**: Reverse the result; it may be longer than both inputs (when final carry=1)."
 },
 "m008": {
  "title": "Reverse Words in a Sentence",
  "topic": "String",
  "desc": "Given a sentence containing multiple words (words separated by single spaces, no leading/trailing spaces), output the sentence with the **order of words reversed**.\n\n\nExample: \"the sky is blue\" → \"blue is sky the\"",
  "input_desc": "Input a string (length ≤ 10000).",
  "output_desc": "Output the reversed sentence.",
  "hint": "**Keywords**: \"reverse word order\" → `split()` + `reverse()` + `join`.\n**Python one-liner**: `' '.join(reversed(input().split()))`."
 },
 "h001": {
  "title": "0/1 Knapsack Problem",
  "topic": "Dynamic Programming (DP)",
  "desc": "There are n items and a knapsack of capacity W. Each item i has weight w[i] and value v[i]. Each item can be taken **at most once**. Find the **maximum total value** that can be carried.\n\n\n**DP**: dp[j] = maximum value for capacity j. For each item, update from large to small: dp[j] = max(dp[j], dp[j-w[i]] + v[i]). Time complexity O(nW).",
  "input_desc": "First line: n W (1≤n≤100, 1≤W≤1000); next n lines each contain two integers w[i] v[i].",
  "output_desc": "Output the maximum total value.",
  "hint": "**Keywords**: \"each item taken at most once\", \"maximum value\" → **classic 0/1 knapsack DP**.\n**Rolling array**: `dp[j]` = max value for capacity j.\n**Key**: Inner loop `j` must go from large to small to avoid reusing the same item."
 },
 "h002": {
  "title": "Longest Common Subsequence (LCS)",
  "topic": "Dynamic Programming (DP)",
  "desc": "Given two strings A and B, find the length of the **longest common subsequence (LCS)**.\n\n\nDP: dp[i][j] = LCS length of first i chars of A and first j chars of B.\n- If A[i]==B[j]: dp[i][j] = dp[i-1][j-1] + 1\n- Else: dp[i][j] = max(dp[i-1][j], dp[i][j-1])",
  "input_desc": "Input two lines, each a string of uppercase English letters (length ≤ 1000).",
  "output_desc": "Output the length of LCS.",
  "hint": "**Keywords**: \"longest common subsequence\", \"not necessarily contiguous\" → **classic LCS DP**.\n**State**: `dp[i][j]` = LCS length of first i chars of A and first j chars of B.\n**Transition**: If characters equal, add 1; else take max of the two sides."
 },
 "h003": {
  "title": "Shortest Path in Maze (BFS)",
  "topic": "Breadth-First Search (BFS)",
  "desc": "Given an n×m grid maze, 0 represents passable, 1 represents wall. Start at top-left (0,0), each step can move up/down/left/right. Find the **shortest number of steps** to reach bottom-right (n-1,m-1). If unreachable, output -1.\n\n\n**BFS** guarantees the first time we reach the target gives the shortest distance.",
  "input_desc": "First line: n m (1≤n,m≤100); next n lines each contain m digits 0 or 1 (separated by spaces).",
  "output_desc": "Output the shortest steps, or -1 if unreachable.",
  "hint": "**Keywords**: \"grid\", \"shortest path\", \"up/down/left/right\" → **BFS** (not DFS!).\n**Why BFS**: All steps have equal weight; BFS visits nodes in increasing distance order.\n**Template**: queue + visited (or dist array) + four-direction array."
 },
 "h004": {
  "title": "Spiral Matrix Traversal",
  "topic": "Arrays, Simulation",
  "desc": "Given an n×m matrix, traverse and output all elements in **clockwise spiral order**.\n\n\nDirection order: right → down → left → up → right → ...\n\n\nMaintain four boundaries: top, bottom, left, right. After completing each direction, shrink the corresponding boundary.",
  "input_desc": "First line: n m (1≤n,m≤50); next n lines each contain m integers.",
  "output_desc": "Output the spiral traversal sequence, separated by spaces.",
  "hint": "**Keywords**: \"clockwise spiral\" → **simulate with four boundary pointers**.\n**Method**: Maintain `top, bottom, left, right`. After traversing one side, shrink the corresponding boundary.\n**Note**: Check `top<=bottom` and `left<=right` in the middle two steps to avoid duplicate output."
 },
 "h005": {
  "title": "Fast Exponentiation (mod)",
  "topic": "Math, Recursion",
  "desc": "Compute **a^n mod m**.\n\n\nDirect multiplication n times will time out when n is large. **Binary exponentiation**:\n- If n is even: a^n = (a^(n/2))²\n- If n is odd: a^n = a × a^(n-1)\n\n\nEach step halves the problem size, time complexity O(log n).",
  "input_desc": "Input one line with three integers a, n, m (0≤a≤10⁹, 0≤n≤10¹⁸, 1≤m≤10⁹).",
  "output_desc": "Output the value of a^n mod m.",
  "hint": "**Keywords**: \"a^n mod m\", \"n is large\" → **fast exponentiation** (O(log n)).\n**Core**: `if n & 1: r = r*a%m; a = a*a%m; n >>= 1`.\n**Special cases**: If `m == 1`, answer is always 0; if n=0, answer is 1."
 },
 "p2_color_b": {
  "title": "Digital Canvas (Simplified)",
  "topic": "Arrays, Simulation",
  "desc": "Simplified version of APCS 202406 P2: Given an n×n canvas (initially all 0), perform k operations. Each operation gives coordinates (r, c) and paints that cell to 1.\n\n\nFinally output the **total number of cells painted to 1**.\n\n\n**Note**: The original problem involves multiple colors and overwriting rules; the beginner version just counts.",
  "input_desc": "First line: n k (1≤n≤50, 1≤k≤2500); next k lines each contain two integers r c (0≤r,c<n).",
  "output_desc": "Output the total number of colored cells.",
  "hint": "**Keywords**: \"canvas\", \"paint\", \"total count\" → use a 2D array to record.\n**Method**: Create an n×n array of zeros; for each operation, set `g[r][c] = 1`; finally count the number of 1s.\n**Note**: The same cell may be painted multiple times, so don't just count operations."
 },
 "p2_color_m": {
  "title": "Digital Canvas (Original)",
  "topic": "Arrays, Simulation",
  "desc": "The digital canvas is an n×n grid, initially all 0. Perform k operations: each operation selects a rectangle (r1,c1)~(r2,c2) and a color v (1≤v≤9), and overwrites all cells in that rectangle with v.\n\n\nOutput the **total number of cells that are not 0** in the final canvas, and the **sum of values of all non-zero cells**.",
  "input_desc": "First line: n k (1≤n≤100, 1≤k≤100); next k lines each contain r1 c1 r2 c2 v (0≤r1≤r2<n, 0≤c1≤c2<n, 1≤v≤9).",
  "output_desc": "Output two integers: number of non-zero cells, and sum of values of non-zero cells (space separated).",
  "hint": "**Keywords**: \"rectangle overwrite\" → for each operation, loop directly to write.\n**Method**: Nested loops `for i in r1..r2: for j in c1..c2: g[i][j] = v`; finally scan to compute count and sum.\n**Advanced**: For large n, difference arrays can optimize, but n≤100 so direct simulation is fine."
 },
 "p2_str_b": {
  "title": "String Decoding (Simplified)",
  "topic": "String",
  "desc": "Simplified version of APCS 202206 P2: Given a string, count the number of **English letters** (case-insensitive).",
  "input_desc": "Input one line of string (length ≤ 100, containing only printable characters).",
  "output_desc": "Output the total number of letters.",
  "hint": "**Keywords**: \"English letters\", \"case-insensitive\" → use `isalpha()`.\n**Python**: `sum(1 for c in s if c.isalpha())` one-liner.\n**C/C++**: use `isalpha()` from `<ctype.h>` or range check `('a'<=c<='z')||('A'<=c<='Z')`."
 },
 "p2_str_m": {
  "title": "String Decoding (Intermediate)",
  "topic": "String, Simulation",
  "desc": "Given an encoded string of the form `number[string]`, meaning the string is repeated that many times. For example, `3[ab]` decodes to `ababab`; `2[a3[b]]` decodes to `abbbabbb`.\n\n\n**Simplification**: Input is guaranteed valid, nesting depth ≤ 3.",
  "input_desc": "Input one line of encoded string (length ≤ 100).",
  "output_desc": "Output the decoded string (decoded length ≤ 10000).",
  "hint": "**Keywords**: \"repeat\", \"nested brackets\" → use **stack**.\n**Method**: Stack stores current accumulated string and repeat count. On `[`, push state; on `]`, pop (prev_str, count) and compute `prev_str + cur_str * count`.\n**Caution**: Numbers may have multiple digits; read them consecutively."
 },
 "p2_bee_b": {
  "title": "Bee Observation (Simplified)",
  "topic": "Arrays",
  "desc": "Simplified version of APCS 202401 P2: n bees fly over a garden, the i-th bee passes at time t[i].\n\n\nQuestion: **Maximum time difference** (maximum absolute difference between any two bees' times).",
  "input_desc": "First line: n (2≤n≤100); second line: n integers t[i] (1≤t[i]≤10000).",
  "output_desc": "Output the maximum time difference.",
  "hint": "**Keywords**: \"maximum difference\", \"absolute value\" → `max(t) - min(t)`.\n**Why**: The maximum absolute difference is always max minus min (order irrelevant).\n**Method**: `max(t) - min(t)` one-liner."
 },
 "p2_bee_m": {
  "title": "Bee Observation (Original)",
  "topic": "Arrays, Sliding Window",
  "desc": "n bees pass a garden at times t[1..n] (t is sorted). Given a window length w, find: Among all contiguous time intervals of length w, what is the **maximum number of bees that can be observed**?\n\n\n(A bee is observed if its time falls within [start, start+w].)",
  "input_desc": "First line: n w (2≤n≤1000, 1≤w≤10000); second line: n increasing integers t[i] (1≤t[i]≤10000).",
  "output_desc": "Output the maximum number of bees observable.",
  "hint": "**Keywords**: \"contiguous interval\", \"maximum\" + \"already sorted\" → **two pointers (sliding window)**.\n**Method**: Pointers l and r; while `t[r] - t[l] > w`, increment l; update `max(r - l + 1)`.\n**O(n)**: Each pointer moves only right, total 2n steps."
 },
 "p2_card_b": {
  "title": "Card Game (Simplified)",
  "topic": "Sorting",
  "desc": "Simplified version of APCS 202310 P2: You have n cards, each with value a[i].\n\n\nSelect the **largest k cards** and output their sum.",
  "input_desc": "First line: n k (1≤k≤n≤100); second line: n integers.",
  "output_desc": "Output the sum of the largest k cards.",
  "hint": "**Keywords**: \"largest k cards\" → sort and take the last k.\n**Python**: `sum(sorted(a)[-k:])` one-liner.\n**C++**: `sort(a, a+n)` then sum from `a[n-k]` to `a[n-1]`."
 },
 "p2_card_m": {
  "title": "Card Game (Original)",
  "topic": "Greedy, Sorting",
  "desc": "You and your opponent each have n cards (values a[i] for you, b[i] for opponent). Each round, both play one card; the higher value gets 1 point (tie gives no points to either).\n\n\nYou can decide the order of your cards arbitrarily (the opponent also plays optimally, but neither knows the other's next card). Under optimal strategy, what is the **maximum score** you can achieve?\n\n\n**Model**: The opponent plays in a fixed order (given b as the opponent's sequence), and you decide how to pair.",
  "input_desc": "First line: n (1≤n≤1000); second line: n integers a[i] (your cards); third line: n integers b[i] (opponent's cards in order).",
  "output_desc": "Output the maximum score you can achieve.",
  "hint": "**Keywords**: \"pairing\", \"maximum score\", \"opponent's fixed order\" → **greedy pairing**.\n**Strategy**: For each opponent card b[i], from your remaining cards, pick the **smallest card that can win** (just greater than b[i]) and play it.\n**Implementation**: Sort your cards, use a set or a marker array to track unused cards."
 },
 "o_avg": {
  "title": "Class Average",
  "topic": "Basic Arithmetic",
  "desc": "Read the scores of n students in a class, compute the **average score** and **round to the nearest integer**.\n\n\nRounding rule: Fractional part ≥ 0.5 rounds up, otherwise down.",
  "input_desc": "First line: n (1≤n≤100); second line: n integers (0≤score≤100), separated by spaces.",
  "output_desc": "Output the rounded average.",
  "hint": "**Keywords**: \"average\", \"rounding\" → sum first then divide.\n**Rounding trick**: Use `(sum + n/2) / n` integer arithmetic (avoid floating point errors) or `round(sum/n)`.\n**Python note**: `round()` uses banker's rounding for .5; better to use `int(s/n + 0.5)`."
 },
 "o_isprime": {
  "title": "Prime Check",
  "topic": "Math",
  "desc": "Read a positive integer n, determine if it is **prime**.\n\n\nDefinition: An integer greater than 1 that is only divisible by 1 and itself.",
  "input_desc": "Input a positive integer n (1≤n≤10⁹).",
  "output_desc": "Output Yes if prime, otherwise No.",
  "hint": "**Keywords**: \"prime\" → trial division with important optimization.\n**Core**: Only need to test divisors from 2 to √n (if n=a×b and a≤b, then a≤√n).\n**Special cases**: n≤1 is not prime; n=2 is prime; even numbers >2 are not prime."
 },
 "o_count_digit": {
  "title": "Digit Count",
  "topic": "Loops",
  "desc": "Read a non-negative integer n, compute how many digits it has.\n\n\nExample: 12345 has 5 digits; 0 has 1 digit.",
  "input_desc": "Input a non-negative integer n (0≤n≤10¹⁸).",
  "output_desc": "Output the number of digits.",
  "hint": "**Keywords**: \"digits\", \"non-negative integer\" → loop dividing by 10.\n**Method**: `while n>0: n//=10; cnt++`.\n**Caution**: n=0 is a special case (output 1 directly, otherwise loop won't run)."
 },
 "o_reverse_num": {
  "title": "Reverse Integer",
  "topic": "Loops",
  "desc": "Read a positive integer n, output the **reversed number** (remove leading zeros).\n\n\nExample: 12345 → 54321; 100 → 1; 1200 → 21.",
  "input_desc": "Input a positive integer n (1≤n≤10⁹).",
  "output_desc": "Output the reversed integer.",
  "hint": "**Keywords**: \"reverse\" → math method: `rev = rev*10 + n%10; n //= 10`.\n**Python one-liner**: `int(str(n)[::-1])` (but the problem usually expects practicing the math approach).\n**Leading zeros**: Automatically removed when converting to int."
 },
 "o_count_char": {
  "title": "Count Character",
  "topic": "String",
  "desc": "Read two lines: first line a string s, second line a character c.\n\n\nCount the number of times character c appears in string s.",
  "input_desc": "First line: string s (length ≤ 1000, printable characters, no spaces); second line: character c.",
  "output_desc": "Output the number of times c appears in s.",
  "hint": "**Keywords**: \"frequency\", \"case-sensitive\" → loop comparison.\n**Python**: `s.count(c)` directly.\n**C/C++**: Manual loop or `std::count(s.begin(), s.end(), c)`."
 },
 "o_prefix": {
  "title": "Range Sum Query",
  "topic": "Prefix Sum",
  "desc": "Given an integer array of length n, then q queries. Each query asks for the sum of elements in interval [l, r] (**1-based**, inclusive).\n\n\nRequire O(1) per query.",
  "input_desc": "First line: n q (1≤n,q≤10⁵); second line: n integers (-10⁴ ≤ a[i] ≤ 10⁴); next q lines each contain two integers l r (1≤l≤r≤n).",
  "output_desc": "For each query, output the range sum (one per line).",
  "hint": "**Keywords**: \"multiple range sum queries\", \"O(1)\" → classic **prefix sum**.\n**Preprocessing**: `prefix[i] = a[0]+...+a[i-1]`, `prefix[0]=0`.\n**Query**: interval [l, r] (1-based) = `prefix[r] - prefix[l-1]`.\n**Note**: The sum may exceed int range; recommend using long long."
 },
 "o_twosum": {
  "title": "Two Sum",
  "topic": "Hash Table",
  "desc": "Given an integer array and a target value, find the indices (1-based) of two numbers that add up to target.\n\n\nIt is guaranteed that exactly one solution exists. Output the two indices (smaller first).",
  "input_desc": "First line: n target (2≤n≤10⁵); second line: n integers.",
  "output_desc": "Output two 1-based indices, space separated.",
  "hint": "**Keywords**: \"two sum\" → **hash table (dict/map)** O(n) solution.\n**Method**: While traversing, for each a[i], check if `target - a[i]` is already in the table.\n**Comparison**: Nested loops are O(n²), hash table is O(n).\n**Note**: 1-based indices, add 1 when outputting."
 },
 "o_2nd_max": {
  "title": "Second Largest Number",
  "topic": "Arrays, Sorting",
  "desc": "Given n integers (may have duplicates), output the **second largest distinct value**.\n\n\nExample: [5, 3, 5, 2] → largest is 5, second largest is 3.\n\n\nIf there is no second largest (all elements are the same), output -1.",
  "input_desc": "First line: n (2≤n≤10⁵); second line: n integers.",
  "output_desc": "Output the second largest distinct value, or -1 if it doesn't exist.",
  "hint": "**Keywords**: \"second largest\", \"distinct value\" → cannot just take the second last after sorting (duplicates).\n**Method 1**: Use set to deduplicate, sort, take the second last.\n**Method 2 (O(n))**: Single scan, maintain `first` and `second`; note that when `x == first`, do not update second."
 },
 "o_transpose": {
  "title": "Matrix Transpose",
  "topic": "2D Arrays",
  "desc": "Given an n×m matrix, output its **transpose** (m×n).\n\n\nTranspose: swap rows and columns, `b[j][i] = a[i][j]`.",
  "input_desc": "First line: n m (1≤n,m≤50); next n lines each contain m integers.",
  "output_desc": "Output m lines, each with n integers (the transposed matrix), integers separated by spaces.",
  "hint": "**Keywords**: \"transpose\", \"swap rows and columns\" → nested loops to assign.\n**Method**: Create an m×n array b, `b[j][i] = a[i][j]`.\n**Output format**: No trailing space; use `if i: print(' ')` to control."
 },
 "o_str_compress": {
  "title": "String Compression",
  "topic": "String, Counting",
  "desc": "Given a string, compress **consecutive identical characters** into \"character + count\" format. Write count even if it is 1.\n\n\nExample: aaabccdd → a3b1c2d2",
  "input_desc": "Input one line of string (length ≤ 1000, containing only lowercase letters).",
  "output_desc": "Output the compressed string.",
  "hint": "**Keywords**: \"consecutive identical\", \"compress\" → scan + counter (Run-Length Encoding).\n**Method**: Use `cur_char` and `count`; when character changes, output and reset.\n**Boundary**: Don't forget to output the last group after the loop ends."
 },
 "o_edit_dist": {
  "title": "Edit Distance",
  "topic": "Dynamic Programming (DP)",
  "desc": "Given two strings A and B, find the **minimum number of operations** to transform A into B.\n\n\nAllowed operations: insert a character, delete a character, replace a character.\n\n\nClassic **Levenshtein distance** problem.",
  "input_desc": "Input two lines, each a string of lowercase letters (length ≤ 1000).",
  "output_desc": "Output the minimum number of operations.",
  "hint": "**Keywords**: \"minimum operations\", \"insert/delete/replace\" → **edit distance DP**.\n**State**: `dp[i][j]` = minimum operations to change first i chars of A to first j chars of B.\n**Transition**:\n- If A[i]==B[j]: `dp[i][j] = dp[i-1][j-1]`\n- Else: `dp[i][j] = 1 + min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1])` (delete, insert, replace)\n**Boundary**: `dp[0][j]=j, dp[i][0]=i`."
 },
 "o_nqueen": {
  "title": "N-Queens Count",
  "topic": "Backtracking",
  "desc": "Place n queens on an n×n chessboard such that **no two queens share the same row, column, or diagonal**.\n\n\nOutput the total number of distinct solutions (ignoring symmetry).",
  "input_desc": "Input a positive integer n (1≤n≤10).",
  "output_desc": "Output the total number of solutions.",
  "hint": "**Keywords**: \"N-Queens\", \"same row/column/diagonal\" → classic **backtracking (DFS)**.\n**Method**: Place row by row (automatically avoids row conflicts). Use three sets to track occupied: \"columns\", \"main diagonals (r-c)\", \"anti-diagonals (r+c)\".\n**Recursion**: If row==n, a solution is found; increment count and return."
 },
 "o_kth_min": {
  "title": "K-th Smallest Element",
  "topic": "Sorting, Quick Select",
  "desc": "Given n integers, output the **k-th smallest element** (1-based, duplicates count multiple times).\n\n\nExample: In [3,1,2,1,5], the 2nd smallest is 1, the 3rd smallest is 2.",
  "input_desc": "First line: n k (1≤k≤n≤10⁵); second line: n integers.",
  "output_desc": "Output the k-th smallest element.",
  "hint": "**Keywords**: \"k-th smallest\" → sort then take a[k-1].\n**Simple method**: `sort()` + indexing, O(n log n).\n**Advanced method**: **QuickSelect** average O(n).\n**Note**: Convert 1-based index to 0-based by subtracting 1."
 },
 "m_two_sum": {
  "title": "Two Sum",
  "topic": "Hash Table, Two Pointers",
  "desc": "Given n integers and a target K, find a pair (i, j) such that a[i]+a[j]=K (i<j), output the indices (1-based). Unique solution guaranteed.",
  "input_desc": "First line: n K; second line: n integers.",
  "output_desc": "Output i and j, space separated.",
  "hint": "**Keywords**: \"two sum\", \"unique solution\" → **hash table O(n)**.\n**Method**: While scanning, check if `K-a[i]` is in the dictionary of seen numbers.\n**Caution**: Don't add the same element to itself (check first, then add)."
 },
 "m_uniq_cnt": {
  "title": "Count Distinct Integers",
  "topic": "Set",
  "desc": "Input n integers, output the number of distinct values.",
  "input_desc": "First line: n; second line: n integers.",
  "output_desc": "Output the count of distinct integers.",
  "hint": "**Keywords**: \"distinct\", \"different\" → **set**.\n**One-liner**: `print(len(set(a)))`."
 },
 "m_lcis": {
  "title": "Longest Consecutive Increasing Subsequence",
  "topic": "Arrays, Two Pointers",
  "desc": "Given n integers, find the length of the longest **contiguous strictly increasing** subarray.",
  "input_desc": "First line: n; second line: n integers.",
  "output_desc": "Output the longest length.",
  "hint": "**Keywords**: \"contiguous\", \"strictly increasing\" → one scan; when `a[i]>a[i-1]`, `cur+=1`, else reset to 1.\n**Note**: It's \"contiguous\", not LIS; no DP needed."
 },
 "m_intervals": {
  "title": "Interval Coverage",
  "topic": "Greedy, Sorting",
  "desc": "Given n segments [l, r], **merge overlapping** intervals and output how many segments remain.",
  "input_desc": "First line: n; next n lines each contain two integers l r.",
  "output_desc": "Output the number of segments after merging.",
  "hint": "**Keywords**: \"merge\", \"overlap\" → **sort by left endpoint then linear scan**.\n**Method**: Maintain current segment `[L,R]`. If next segment's `l <= R`, merge `R = max(R,r)`; otherwise increase segment count.\n**Boundary**: `l == R` is considered overlapping (shared endpoint)."
 },
 "m_sliding_max": {
  "title": "Sliding Window Maximum",
  "topic": "Sliding Window",
  "desc": "Given n integers and window size k, output the maximum in each window of size k (total n-k+1 values), separated by spaces.",
  "input_desc": "First line: n k (1≤k≤n≤2000); second line: n integers.",
  "output_desc": "Output n-k+1 integers, space separated.",
  "hint": "**Keywords**: \"sliding window\", \"maximum\" → naive O(nk): `max(a[i:i+k])` per window.\n**Advanced**: Use **monotonic decreasing deque** to achieve O(n).\n**Note**: Output with `print(*ans)` for automatic space separation."
 },
 "m_palindrome": {
  "title": "Palindrome Check",
  "topic": "String",
  "desc": "Determine if the string, after removing non-alphanumeric characters and ignoring case, is a palindrome.",
  "input_desc": "One line of string, length 1~10⁴.",
  "output_desc": "Output Yes or No.",
  "hint": "**Keywords**: \"palindrome\", \"ignore case and symbols\" → first filter out non-alphanumeric and convert to lowercase, then compare `s == s[::-1]`.\n**Method**: `t = ''.join(c.lower() for c in s if c.isalnum())`."
 },
 "m_bsearch": {
  "title": "Binary Search",
  "topic": "Binary Search",
  "desc": "Given an **increasing** array, answer q queries: each query gives x, return the position (1-based) of x in the array, or -1 if not found.",
  "input_desc": "First line: n q; second line: n integers (already increasing); next q lines each contain x.",
  "output_desc": "q lines, each an integer.",
  "hint": "**Keywords**: \"sorted\", \"query\" → **binary search O(log n)**.\n**Core**: `lo=0; hi=n-1; while lo<=hi: mid=(lo+hi)//2 …`.\n**Python built-in**: `from bisect import bisect_left`."
 },
 "m_prime_cnt": {
  "title": "Prime Counting",
  "topic": "Prime Sieve",
  "desc": "Output how many primes are between 1 and N.",
  "input_desc": "An integer N (1≤N≤10⁵).",
  "output_desc": "Output the number of primes.",
  "hint": "**Keywords**: \"primes in range\" → **Sieve of Eratosthenes O(N log log N)**.\n**Method**: `sieve=[True]*(N+1); sieve[0]=sieve[1]=False; for i in range(2,...): if sieve[i]: mark multiples`.\n**Caution**: If N<2, answer is 0."
 },
 "m_gcd_arr": {
  "title": "GCD of Array",
  "topic": "Number Theory",
  "desc": "Given n positive integers, output their **GCD**.",
  "input_desc": "First line: n; second line: n integers.",
  "output_desc": "Output the GCD.",
  "hint": "**Keywords**: \"greatest common divisor\" → **Euclidean algorithm**.\n**Python**: `from math import gcd; from functools import reduce; reduce(gcd, a)`."
 },
 "m_mat_rot": {
  "title": "Rotate Matrix 90°",
  "topic": "Matrix",
  "desc": "Given an N×N matrix, output it rotated 90 degrees clockwise.",
  "input_desc": "First line: N; next N lines each contain N integers.",
  "output_desc": "Output the rotated N×N matrix.",
  "hint": "**Keywords**: \"clockwise 90°\" → new position: `new[j][N-1-i] = old[i][j]`.\n**Python trick**: `list(zip(*a[::-1]))` rotates directly."
 },
 "m_paren": {
  "title": "Bracket Matching",
  "topic": "Stack",
  "desc": "Given a string containing `(){}[]`, determine if the brackets are properly matched.",
  "input_desc": "One line of string, length ≤ 10⁵.",
  "output_desc": "Output Yes or No.",
  "hint": "**Keywords**: \"bracket matching\" → **stack**.\n**Method**: Push opening brackets; on closing bracket, compare with stack top.\n**Final check**: Stack must be empty after processing all characters."
 },
 "m_postfix": {
  "title": "Evaluate Postfix Expression",
  "topic": "Stack",
  "desc": "Given a postfix (RPN) expression, evaluate it. Operators: `+ - * /` (integer division, truncate toward zero). Numbers are integers.",
  "input_desc": "One line of string, tokens separated by spaces.",
  "output_desc": "Output the integer result.",
  "hint": "**Keywords**: \"postfix\", \"RPN\" → **stack**.\n**Method**: On number, push; on operator, pop two, compute, push back.\n**Caution**: For negative division in Python, use `int(a/b)` instead of `a//b` (the latter floors down)."
 },
 "m_reverse_num": {
  "title": "Reverse Integer",
  "topic": "Math",
  "desc": "Reverse an integer. If the reversed number overflows 32-bit signed range (-2³¹ to 2³¹-1), output 0.",
  "input_desc": "An integer x.",
  "output_desc": "The reversed integer or 0.",
  "hint": "**Keywords**: \"reverse\", \"overflow check\" → string reversal or mathematical loop with remainder.\n**Method**: Preserve sign, reverse the absolute value string, then reapply sign.\n**Check**: `if abs(r) > 2**31 - 1: r = 0`."
 },
 "m_prefix_sum_q": {
  "title": "Range Sum Query",
  "topic": "Prefix Sum",
  "desc": "Given n integers and q queries, each query asks for the sum of a[l..r] (1-based, inclusive l, r).",
  "input_desc": "First line: n q; second line: n integers; next q lines each contain l r.",
  "output_desc": "q lines, each the query result.",
  "hint": "**Keywords**: \"multiple range sum queries\" → **prefix sum O(1) per query**.\n**Core**: `ps[i] = ps[i-1] + a[i]`; `sum(l..r) = ps[r] - ps[l-1]`."
 },
 "m_two_ptr": {
  "title": "Maximum Distance with Min",
  "topic": "Two Pointers",
  "desc": "Given n non-negative integers, find i<j that maximizes `min(a[i],a[j]) * (j-i)`.",
  "input_desc": "First line: n; second line: n integers.",
  "output_desc": "Output the maximum value.",
  "hint": "**Keywords**: \"two endpoints\", \"maximum\" → **two pointers** from both ends moving inward.\n**Move strategy**: Move the pointer from the smaller side (since replacing with a larger might improve).\n**Complexity**: O(n)."
 },
 "h_lis_logn": {
  "title": "Longest Increasing Subsequence (O(n log n))",
  "topic": "DP, Binary Search",
  "desc": "Given n integers, output the length of the longest **strictly increasing** subsequence. n can be up to 10⁵, need O(n log n).",
  "input_desc": "First line: n; second line: n integers.",
  "output_desc": "Output the length.",
  "hint": "**Keywords**: \"longest increasing\", \"n large\" → **patience sorting + binary search**.\n**Method**: Maintain `tails` array; for each x, use `bisect_left` to find the position to replace.\n**Note**: For \"strictly increasing\", use `bisect_left`; for \"non-decreasing\", use `bisect_right`."
 },
 "h_knap_unbound": {
  "title": "Unbounded Knapsack",
  "topic": "DP",
  "desc": "There are n types of items, each with weight w and value v, and can be taken **unlimited times**. Knapsack capacity W. Find the maximum total value.",
  "input_desc": "First line: n W; next n lines each contain w v.",
  "output_desc": "Maximum total value.",
  "hint": "**Keywords**: \"can be taken multiple times\" → **unbounded knapsack**, **forward** update dp.\n**Core**: `for j in range(w, W+1): dp[j] = max(dp[j], dp[j-w]+v)`.\n**Comparison**: 0/1 knapsack updates **backward** `range(W, w-1, -1)`."
 },
 "h_dijkstra": {
  "title": "Single Source Shortest Path (Dijkstra)",
  "topic": "Graph Theory, Shortest Path",
  "desc": "Undirected graph with n vertices and m edges, each with positive weight. Output the shortest distance from vertex 1 to all vertices; if unreachable, output -1, separated by spaces.",
  "input_desc": "First line: n m; next m lines each contain u v w (undirected).",
  "output_desc": "n integers, the i-th is the shortest distance from 1 to i.",
  "hint": "**Keywords**: \"positive weights shortest path\" → **Dijkstra + priority queue**.\n**Python**: `import heapq`, initialize distances to infinity, pop the smallest distance each time, update neighbors.\n**Adjacency list**: `adj = [[] for _ in range(n+1)]`."
 },
 "h_dsu_island": {
  "title": "Connected Components (DSU)",
  "topic": "Union-Find",
  "desc": "n vertices, m undirected edges, output the **number of connected components**.",
  "input_desc": "First line: n m; next m lines each contain u v.",
  "output_desc": "Number of connected components.",
  "hint": "**Keywords**: \"connected components\" → **DSU (Union-Find)** or **BFS/DFS**.\n**DSU template**: `parent=list(range(n+1))`; `find` with path compression; `union` to merge roots.\n**Count**: Finally count number of `parent[i]==i`."
 },
 "h_matchain": {
  "title": "Matrix Chain Multiplication (Interval DP)",
  "topic": "Interval DP",
  "desc": "Given dimensions of n matrices (n+1 integers, the i-th matrix is p[i-1]×p[i]), find the **minimum number of multiplications**.",
  "input_desc": "First line: n; second line: n+1 integers p[0..n].",
  "output_desc": "Minimum number of multiplications.",
  "hint": "**Keywords**: \"minimum multiplications\", \"matrix chain multiplication\" → **interval DP**.\n**State**: `dp[i][j]` = minimum multiplications to multiply matrices i through j.\n**Transition**: `dp[i][j] = min(dp[i][k] + dp[k+1][j] + p[i-1]*p[k]*p[j])`."
 },
 "h_fast_pow": {
  "title": "Fast Exponentiation Modulo",
  "topic": "Number Theory",
  "desc": "Compute a^b mod m.",
  "input_desc": "One line with three integers a b m (0≤a, b≤10¹⁸, 1≤m≤10⁹).",
  "output_desc": "Output the result.",
  "hint": "**Keywords**: \"a^b mod m\", \"b huge\" → **fast exponentiation O(log b)**.\n**Python**: `pow(a, b, m)` built-in support!\n**Manual**: binary decomposition of b, square and multiply."
 },
 "h_inversion": {
  "title": "Count Inversions",
  "topic": "Divide and Conquer, Merge Sort",
  "desc": "Given n integers, count the number of inversions (i<j and a[i]>a[j]). n ≤ 10⁵.",
  "input_desc": "First line: n; second line: n integers.",
  "output_desc": "Number of inversions.",
  "hint": "**Keywords**: \"inversions\", \"n large\" → **merge sort counting** O(n log n).\n**Method**: During merge, if left half a[i] > right half a[j], then all remaining left elements form inversions.\n**Alternative**: BIT (Fenwick tree) also O(n log n)."
 },
 "h_kadane2d": {
  "title": "Maximum Submatrix Sum",
  "topic": "DP, Kadane",
  "desc": "Given an n×m matrix, find a **contiguous rectangle** with the maximum sum of elements. Elements can be positive or negative.",
  "input_desc": "First line: n m (≤ 50); next n lines each contain m integers.",
  "output_desc": "Maximum submatrix sum.",
  "hint": "**Keywords**: \"maximum submatrix sum\" → **column compression + Kadane**.\n**Method**: Enumerate top and bottom rows (u, d), compress each column sum for rows u..d, then run Kadane on that 1D array.\n**Complexity**: O(n²m)."
 },
 "h_string_hash": {
  "title": "String Hashing Match",
  "topic": "String, Hashing",
  "desc": "Given strings S and T, output the number of times T appears in S (overlapping allowed).",
  "input_desc": "First line: S; second line: T. Length ≤ 10⁵.",
  "output_desc": "Number of occurrences.",
  "hint": "**Keywords**: \"string occurrences\", \"overlapping\" → Python trick: `for i in range(len(S)-len(T)+1): if S[i:i+len(T)]==T: cnt+=1`.\n**Proper solution**: **KMP** or **Rabin-Karp** rolling hash O(n+m).\n**Caution**: Don't use `S.count(T)` — it doesn't count overlapping!"
 },
 "h_edit_dist2": {
  "title": "Edit Distance (with operations)",
  "topic": "DP",
  "desc": "Find the minimum number of operations to transform A into B (insert/delete/replace each count as 1).",
  "input_desc": "First line: A; second line: B. Length ≤ 1000.",
  "output_desc": "Minimum number of operations.",
  "hint": "**Keywords**: \"insert/delete/replace\" → **edit distance DP**.\n**State**: `dp[i][j]` = min operations to convert first i chars of A to first j chars of B.\n**Transition**: If equal, `dp[i-1][j-1]`; else `1 + min(three directions)`."
 },
 "j_str_digits": {
  "title": "Keep Digits from String",
  "topic": "String",
  "desc": "Given string S, output a new string consisting of all digit characters ('0'-'9') in S in their original order. If S has no digit characters, output `-1`.",
  "input_desc": "One line of string S (length ≤ 10⁵).",
  "output_desc": "One line string.",
  "hint": "**Keywords**: \"keep digits\" → iterate over characters + check `c.isdigit()`.\n**Caution**: If no digits, output `-1`, not an empty string."
 },
 "j_gem_pick": {
  "title": "Collect Gems (Non-adjacent)"
 },
 "src283_joi_15_inheritance": {
  "title": "2015 - Inheritance",
  "topic": "Binary Search, MST",
  "desc": "On a 1D axis, there are N hay bales, the i-th hay bale is at position x_i (integer, may repeat). Then there are Q queries, each query gives an interval [L, R], output the number of hay bales whose coordinates fall in [L, R] (inclusive).",
  "input_desc": "First line: two integers N, Q.\nSecond line: N integers x_1, x_2, ..., x_N, positions of hay bales.\nNext Q lines: each line two integers L, R, representing a query.\nConstraints: 1 ≤ N, Q ≤ 2×10^5, -10^9 ≤ x_i, L, R ≤ 10^9.",
  "output_desc": "For each query, output an integer: the number of hay bales in the interval.",
  "hint": "Sort all hay bale positions, then for each query use binary search to find the first index ≥ L and the first index > R, the difference gives the count. Time complexity O((N+Q) log N)."
 },
 "src182_201902P3": {
  "title": "Evaluate Function Expression",
  "topic": "APCS implementation",
  "desc": "Given an expression containing positive integers, operators '+' and '*', and parentheses, compute its value. Operator precedence: parentheses > multiplication > addition. Digits 0-9, expression length ≤ 1000.",
  "input_desc": "A single line string representing the expression.",
  "output_desc": "Output an integer result (fits in 32-bit signed integer).",
  "hint": "Use two stacks (values and operators) to parse infix expression, respecting precedence. Time O(len(expr))."
 },
 "src184_202010P3": {
  "title": "Hero Training",
  "topic": "APCS implementation",
  "desc": "In an N×M grid, each cell has an integer value. A hero starts at (1,1) and wants to reach (N,M), moving only right or down. The total value is the sum of values of visited cells (including start and end). Find the maximum total value.",
  "input_desc": "First line: N, M (1 ≤ N, M ≤ 1000).\nNext N lines: each M integers (value, -10^9 ≤ value ≤ 10^9).",
  "output_desc": "Output the maximum total value.",
  "hint": "Basic DP: dp[i][j] = max(dp[i-1][j], dp[i][j-1]) + grid[i][j]. Time O(NM)."
 },
 "src188_202109P3": {
  "title": "Lucky Number",
  "topic": "APCS implementation",
  "desc": "Given a sequence A of length N and an integer K, count the number of subarrays whose median equals K. Median definition: for length L, the floor((L+1)/2)-th smallest element (1-indexed). Values can repeat.",
  "input_desc": "First line: N, K (1 ≤ N ≤ 2×10^5).\nSecond line: N integers A_i (1 ≤ A_i ≤ 2×10^5).",
  "output_desc": "Output the count.",
  "hint": "Transform: map numbers >= K to 1, < K to -1. A subarray has median >= K iff its sum > 0. To get median exactly K, compute number of subarrays with median >= K minus those with median >= K+1. Use prefix sums and a data structure to count prefix sums with value less than current. Time O(N log N)."
 },
 "src191_202201P3": {
  "title": "Digital Divination",
  "topic": "APCS implementation",
  "desc": "The digital root of a number is the repeated sum of its digits until a single digit. Given interval [L, R] (1 ≤ L ≤ R ≤ 10^18) and K (1 ≤ K ≤ 9), count how many numbers in the interval have digital root equal to K.",
  "input_desc": "One line: L, R, K.",
  "output_desc": "Output the count.",
  "hint": "Digital root cycles every 9 numbers. Compute count in [1,x] using integer division and remainder. Time O(1)."
 },
 "src192_201703P3": {
  "title": "Number Tornado",
  "topic": "APCS implementation",
  "desc": "Given an N×N matrix (N odd), start from the center and output all elements in a clockwise spiral order.",
  "input_desc": "First line: odd N (1 ≤ N ≤ 99).\nNext N lines: N integers each.",
  "output_desc": "Output all integers in spiral order, space-separated.",
  "hint": "Simulate spiral walk: start at center, go left, down, right, up, increasing step length every two directions."
 },
 "src193_202111P3": {
  "title": "Production Line",
  "topic": "APCS implementation",
  "desc": "There are N jobs to process on a single machine. Each job has processing time t_i and weight w_i. The machine can process one job at a time but can preempt (pause and resume). Find the minimum total weighted completion time Σ w_i * C_i.",
  "input_desc": "First line: N (1 ≤ N ≤ 10^5).\nNext N lines: t_i, w_i (1 ≤ t_i, w_i ≤ 10^4).",
  "output_desc": "Output the minimum total weighted completion time.",
  "hint": "With preemption, the optimal schedule is by highest ratio w_i/t_i (Smith's rule). Sort descending by value per unit time, then process. Time O(N log N)."
 },
 "src195_202306P3": {
  "title": "Magnetic Track Movement Sequence",
  "topic": "APCS implementation",
  "desc": "Given a string S consisting of 'L' and 'R', start at position 0. For each character, if 'L' then x -= 1, if 'R' then x += 1. After each step, record the position. Count the number of distinct integer positions visited.",
  "input_desc": "One line: string S (length ≤ 10^6).",
  "output_desc": "Output the count.",
  "hint": "Simulate, use a set to record positions. Time O(|S|)."
 },
 "src197_202406P3": {
  "title": "Missing Letters",
  "topic": "APCS implementation",
  "desc": "Given two strings A and B of length N. You can change any character in A to any lowercase letter at cost 1. Find the minimum number of changes so that A becomes a subsequence of B.",
  "input_desc": "First line: N (1 ≤ N ≤ 2000).\nSecond line: string A.\nThird line: string B.",
  "output_desc": "Output the minimum changes.",
  "hint": "We need to keep the longest common subsequence unchanged; the rest must be changed. So answer = N - LCS. Time O(N^2)."
 },
 "src202_202501P3": {
  "title": "Rearrangement Problem",
  "topic": "APCS implementation",
  "desc": "Given two sequences A and B of length N. You can rearrange A arbitrarily. Is there a permutation such that A[i] + B[i] is constant for all i? If yes, output that constant; else -1.",
  "input_desc": "First line: N (1 ≤ N ≤ 2×10^5).\nSecond line: N integers A_i.\nThird line: N integers B_i.",
  "output_desc": "Output constant or -1.",
  "hint": "Sort A ascending, B descending, check if all pairwise sums equal. This is necessary and sufficient. Time O(N log N)."
 },
 "src238_cf_472D": {
  "title": "Design Tutorial: Inverse the Problem",
  "topic": "MST",
  "desc": "Given an N×N distance matrix D, where D[i][j] is the shortest distance between nodes i and j (direct edge weight). Determine whether there exists a tree (connected acyclic graph) such that the shortest path distances on the tree equal the given matrix. If yes, output any such tree (list of edges), else -1.",
  "input_desc": "First line: N (1 ≤ N ≤ 2000).\nNext N lines: N integers D[i][j], with D[i][i]=0, D[i][j]=D[j][i].",
  "output_desc": "If exists, output N-1 lines each with two integers u,v (1-indexed); else -1.",
  "hint": "If the matrix comes from a tree, the MST of the complete graph with edge weights = D[i][j] must be that tree. Compute MST, then verify all-pairs distances match D (e.g., using BFS from each node). If matches, output MST edges."
 },
 "src292_cf_1513D": {
  "title": "GCD and MST",
  "topic": "MST, Math",
  "desc": "Given an array a[1..N] and an integer k. Consider a complete graph where edge (i,j) has weight:\n- if |i-j| = 1, weight = min(a[i], a[j]).\n- otherwise, weight = min(a[i], a[j], ..., a[k])? Actually the original problem: if gcd(a[i..j]) = min(a[i..j]), then there is an edge with weight = min(a[i..j]). Find the MST total weight.\nSimplified version: N nodes, edges between neighbors with weight min(a[i],a[i+1]), and extra edges when gcd of interval equals min, with weight = min. Compute MST weight.",
  "input_desc": "First line: N, k (1 ≤ N ≤ 2×10^5, 1 ≤ k ≤ 10^9).\nSecond line: N integers a_i.",
  "output_desc": "Output MST weight.",
  "hint": "Use MST approach with DSU, sort edges (neighbor edges and special gcd edges). For each index i, expand left and right while gcd condition holds, add edges with weight = min. Complexity O(N log N)."
 },
 "src293_usaco_946": {
  "title": "I Would Walk 500 Miles",
  "topic": "MST",
  "desc": "There are N cows, each with coordinates (x_i, y_i). The distance between two cows is (x_i-x_j)^2 + (y_i-y_j)^2. We need to partition the cows into two groups such that the maximum intra-group distance (maximum distance between any two cows in the same group) is minimized. Output that minimized maximum distance.",
  "input_desc": "First line: N (2 ≤ N ≤ 500).\nNext N lines: x_i, y_i (0 ≤ x_i,y_i ≤ 10^6).",
  "output_desc": "Output the minimized maximum distance.",
  "hint": "Binary search on answer D. Build graph where edges with distance > D must be between different groups. Check if graph is bipartite. Time O(N^2 log D)."
 },
 "src230_sapo_15_SpaceJazz": {
  "title": "2015 - Space Jazz",
  "topic": "Range DP",
  "desc": "Given a sequence of N colors. You can remove a contiguous segment of at least 2 if all colors in the segment are the same, and gain the square of its length. After removal, the left and right parts join. Find the maximum total score.",
  "input_desc": "First line: N (1 ≤ N ≤ 500).\nSecond line: N integers representing colors.",
  "output_desc": "Output the maximum score.",
  "hint": "Interval DP: dp[l][r] = max score for fully removing subarray [l,r]. Transition: either remove the whole block if all same color, or split into two. Time O(N^3)."
 },
 "src244_cses_1195": {
  "title": "Flight Discount",
  "topic": "SP",
  "desc": "There are N cities, M flights (directed) with cost. You may use at most one discount that halves the cost of a single flight (integer division). Find the minimum cost from city 1 to city N.",
  "input_desc": "First line: N, M (1 ≤ N ≤ 10^5, 1 ≤ M ≤ 2×10^5).\nNext M lines: u, v, c (1 ≤ c ≤ 10^9).",
  "output_desc": "Output the minimum cost.",
  "hint": "State Dijkstra: (node, used_discount). Transition with or without discount. Time O(M log N)."
 },
 "src252_usaco_969": {
  "title": "Milk Pumping",
  "topic": "SP",
  "desc": "There are N nodes, M edges. Each edge has two attributes: flow f and cost c. Find a path from 1 to N that maximizes min(f) / sum(c). Output floor( max_ratio * 10^6 ).",
  "input_desc": "First line: N, M (2 ≤ N ≤ 1000, 1 ≤ M ≤ 1000).\nNext M lines: u, v, f, c.",
  "output_desc": "Output the integer result.",
  "hint": "Classic problem: maximize min(f)/sum(c). Could binary search λ, transform to checking existence of path with sum(c) - λ*min(f) ≤ 0. Alternatively, enumerate possible min flow values (up to M), delete edges with lower flow, compute shortest cost path."
 },
 "src294_cses_1202": {
  "title": "Investigation",
  "topic": "SP",
  "desc": "Given a directed weighted graph. Find from node 1 to node N:\n- shortest distance\n- number of shortest paths (mod 1e9+7)\n- minimum number of edges in a shortest path\n- maximum number of edges in a shortest path",
  "input_desc": "First line: N, M (1 ≤ N ≤ 10^5, 1 ≤ M ≤ 2×10^5).\nNext M lines: u, v, c.",
  "output_desc": "Output four integers: distance, count, min edges, max edges.",
  "hint": "Dijkstra while maintaining additional info: number of shortest paths, min/max edges on shortest path. When relaxing, update accordingly."
 },
 "src263_ys_StaticRMQ": {
  "title": "Static RMQ",
  "topic": "tree-euler",
  "desc": "Given an array A of length N, and Q queries (l, r), output the minimum value in [l, r] (0-indexed).",
  "input_desc": "First line: N, Q (1 ≤ N,Q ≤ 2×10^5).\nSecond line: N integers A_i.\nNext Q lines: l, r.",
  "output_desc": "For each query, output the minimum.",
  "hint": "Sparse Table preprocessing O(N log N), query O(1). Also possible with segment tree."
 },
 "src147_f314": {
  "title": "Hero Training",
  "topic": "DP",
  "desc": "In an N×M grid, each cell has a score. Start from (1,1) to (N,M), move only right or down. The total score is the sum of visited cells. Find the maximum total score.",
  "input_desc": "First line: N, M (1 ≤ N,M ≤ 1000).\nNext N lines: M integers (|score| ≤ 10^4).",
  "output_desc": "Output the maximum total score.",
  "hint": "Same as src184, classic DP."
 },
 "src149_g278": {
  "title": "Food Expo",
  "topic": "DP Variation",
  "desc": "There are N booths, each with tastiness a_i. Choose a contiguous segment where all tastiness values are distinct. Find the maximum length of such a segment.",
  "input_desc": "First line: N (1 ≤ N ≤ 2×10^5).\nSecond line: N integers a_i (1 ≤ a_i ≤ 10^9).",
  "output_desc": "Output the maximum length.",
  "hint": "Sliding window with dictionary to track last occurrence. Time O(N)."
 },
 "src246_ac_frog1": {
  "title": "Frog 1",
  "topic": "DP",
  "desc": "There are N stones with heights h_i. A frog starts at stone 1 and wants to reach stone N. It can jump 1 or 2 stones, cost = |h_i - h_j|. Find the minimum total cost.",
  "input_desc": "First line: N (2 ≤ N ≤ 10^5).\nSecond line: N integers h_i.",
  "output_desc": "Output the minimum cost.",
  "hint": "Simple DP: dp[i] = min(dp[i-1]+|h[i]-h[i-1]|, dp[i-2]+|h[i]-h[i-2]|)."
 },
 "src248_usaco_694": {
  "title": "Hoof Paper Scissors",
  "topic": "DP",
  "desc": "In N rounds, Farmer John shows a gesture (H, P, S). You can pre-choose a sequence of gestures, but you can change at most K times (so at most K+1 segments). Find the maximum number of rounds you can win.",
  "input_desc": "First line: N, K (1 ≤ N ≤ 10^5, 0 ≤ K ≤ 20).\nNext N lines: each a character (H/P/S).",
  "output_desc": "Output the maximum wins.",
  "hint": "DP state: (round, current gesture, changes used). Transition to next gesture, add win if beats opponent, increment change if different gesture. Time O(N*3*3*K)."
 },
 "src249_cf_1082E": {
  "title": "Increasing Frequency",
  "topic": "DP",
  "desc": "Given an array A of length N and a target number c. You can choose one subarray [l, r] and change all its elements to some integer x (any). After the operation, what is the maximum possible number of times c appears in the whole array? You can perform at most one operation.",
  "input_desc": "First line: N, c (1 ≤ N ≤ 5×10^5).\nSecond line: N integers A_i.",
  "output_desc": "Output the maximum count.",
  "hint": "For each value v != c, consider subarray that maximizes (#v - #c). This is a maximum subarray sum problem on transformed array. Keep running sum for each v. Time O(N)."
 },
 "src253_usaco_1114": {
  "title": "Modern Art 3",
  "topic": "Range DP",
  "desc": "Given a target color sequence of length N. Each operation: choose a contiguous segment and paint it with a single color (overwrites). Find the minimum number of operations to achieve the target sequence.",
  "input_desc": "First line: N (1 ≤ N ≤ 300).\nSecond line: N integers (colors).",
  "output_desc": "Output the minimum operations.",
  "hint": "Interval DP: dp[l][r] = min operations to paint [l,r]. Consider first operation covering l, and split at positions where same color as l."
 },
 "src277_baltic_09_candy": {
  "title": "2009 - Candy",
  "topic": "DP, Geometry",
  "desc": "There are N candies, each with sweetness a_i and price b_i. Choose some candies such that total sweetness ≥ S and total price minimized. Output the minimum price, or -1 if impossible.",
  "input_desc": "First line: N, S (1 ≤ N ≤ 1000, 1 ≤ S ≤ 10^5).\nNext N lines: a_i, b_i.",
  "output_desc": "Output the minimum price.",
  "hint": "0/1 knapsack with capacity S (treat excess as S). Time O(N*S)."
 },
 "src284_usaco_647": {
  "title": "248",
  "topic": "Range DP",
  "desc": "Given a sequence of N integers (each 1..40). In each operation, choose two adjacent equal numbers x and merge them into x+1. Find the maximum number achievable after any sequence of merges.",
  "input_desc": "First line: N (2 ≤ N ≤ 248).\nSecond line: N integers.",
  "output_desc": "Output the maximum possible number.",
  "hint": "Interval DP: dp[l][r] = the number that the interval [l,r] can be merged into (0 if not fully mergable). Transition: if left and right halves can merge into same number, then merge to one higher."
 },
 "src287_usaco_496": {
  "title": "Cow Jog",
  "topic": "DP",
  "desc": "There are N cows, each starting at position p_i with speed v_i. They all run in the positive direction on an infinite line. If a faster cow catches up to a slower one, they merge into a group with the slower speed. How many groups will remain at the end?",
  "input_desc": "First line: N (1 ≤ N ≤ 10^5).\nNext N lines: p_i, v_i.",
  "output_desc": "Output the number of groups.",
  "hint": "Sort by position. Scan from right to left, keep minimum speed seen. If current cow's speed ≤ min_speed, it becomes a new group."
 },
 "src289_cses_1080": {
  "title": "Empty String",
  "topic": "Range DP",
  "desc": "Given a string S consisting of lowercase letters. In one operation, you can delete two adjacent equal letters. Determine whether the whole string can be completely deleted.",
  "input_desc": "A single line string S (length ≤ 500).",
  "output_desc": "Output YES or NO.",
  "hint": "Interval DP: dp[l][r] = true if substring [l,r] can be fully deleted. Transition: either two ends match and inner is deletable, or split into two deletable parts."
 },
 "src297_cf_10D": {
  "title": "LCIS",
  "topic": "DP, LIS",
  "desc": "Given two sequences A and B. Find the longest common increasing subsequence (LCIS). Output its length and any one such subsequence.",
  "input_desc": "First line: N, then N integers A_i.\nSecond line: M, then M integers B_i.",
  "output_desc": "First line: length. Second line: the subsequence (space-separated).",
  "hint": "Classic LCIS DP: dp[j] = length of LCIS ending with B[j]. Maintain current best for A[i]. Time O(N*M)."
 },
 "src298_cfgym_102951C": {
  "title": "LCS on Permutations",
  "topic": "DP, LIS",
  "desc": "Given two permutations P and Q of 1..N. Find the length of their longest common subsequence (LCS). Since they are permutations, LCS can be reduced to LIS.",
  "input_desc": "First line: N (1 ≤ N ≤ 10^5).\nSecond line: N integers P.\nThird line: N integers Q.",
  "output_desc": "Output the LCS length.",
  "hint": "Map each element in P to its index in Q, then the LCS length equals the length of LIS of that sequence. Time O(N log N)."
 },
 "src132_c462": {
  "title": "Alternating String",
  "topic": "String Manipulation",
  "desc": "Given a string, check if it is an \"alternating string\": it consists of equal counts of two distinct letters in alternating order, e.g., \"ABABAB\" or \"BABA\".",
  "input_desc": "One line string, length ≤ 1000.",
  "output_desc": "Output YES or NO.",
  "hint": "Length must be even, and odd positions all same letter, even positions all the other letter."
 },
 "src133_i400": {
  "title": "String Decoding",
  "topic": "String Processing, Character Operations",
  "desc": "Given an encoded string where each fragment is a digit (1-9) followed by a letter, meaning repeat the letter that many times. Example: \"3a2b1c\" decodes to \"aaabbc\". Output the decoded string.",
  "input_desc": "One line encoded string, length ≤ 1000.",
  "output_desc": "Output the decoded string.",
  "hint": "Parse every two characters: digit and letter, then repeat."
 },
 "src134_h027": {
  "title": "Matrix Sum",
  "topic": "Prefix Sum",
  "desc": "Given an N×M matrix, and Q queries. Each query gives top-left and bottom-right coordinates of a submatrix, output its sum.",
  "input_desc": "First line: N, M, Q (1 ≤ N,M ≤ 1000, 1 ≤ Q ≤ 10^5).\nNext N lines: M integers.\nNext Q lines: x1, y1, x2, y2 (1-indexed).",
  "output_desc": "For each query, output the sum.",
  "hint": "2D prefix sum, O(1) per query."
 },
 "src137_f640": {
  "title": "Evaluate Function Expression",
  "topic": "Function",
  "desc": "Same as src182, evaluate arithmetic expression with +, *, parentheses.",
  "input_desc": "One line expression.",
  "output_desc": "Integer result.",
  "hint": "Use eval for simplicity; actual solution would implement parser."
 },
 "src154_201610P2": {
  "title": "Maximum Sum",
  "topic": "APCS implementation",
  "desc": "Given an integer sequence, find the maximum subarray sum.",
  "input_desc": "First line: N (1 ≤ N ≤ 10^5).\nSecond line: N integers.",
  "output_desc": "Output the maximum sum.",
  "hint": "Kadane's algorithm."
 },
 "src157_202310P2": {
  "title": "Card Game",
  "topic": "APCS implementation",
  "desc": "There are N cards, each with a number. Two players take turns taking either the leftmost or rightmost card, aiming to maximize their own sum. Both play optimally. Find the maximum sum the first player can achieve.",
  "input_desc": "First line: N (1 ≤ N ≤ 5000).\nSecond line: N integers.",
  "output_desc": "Output the maximum sum.",
  "hint": "Classic interval DP for optimal play."
 },
 "src158_201810P2": {
  "title": "Subset Sum",
  "topic": "APCS implementation",
  "desc": "Given an array of integers, determine if there exists a non-empty subset whose sum is exactly S.",
  "input_desc": "First line: N, S (1 ≤ N ≤ 20, 1 ≤ S ≤ 10^9).\nSecond line: N integers.",
  "output_desc": "Output YES or NO.",
  "hint": "N ≤ 20, brute force enumeration."
 },
 "src160_202206P2": {
  "title": "String Decoding",
  "topic": "APCS implementation",
  "desc": "Similar to src133, but numbers can have multiple digits. Decode the string.",
  "input_desc": "One line encoded string.",
  "output_desc": "Output decoded string.",
  "hint": "Parse multi-digit numbers and following letter."
 },
 "src162_201703P2": {
  "title": "Small Groups",
  "topic": "APCS implementation",
  "desc": "There are N people, each points to their best friend (given array f). A \"small group\" is a pair (i, j) such that i's best friend is j and j's best friend is i. Count the number of such pairs.",
  "input_desc": "First line: N (1 ≤ N ≤ 1000).\nSecond line: N integers f[1..N].",
  "output_desc": "Output the number of pairs.",
  "hint": "Check mutual pointing, each pair counted twice."
 },
 "src166_202306P2": {
  "title": "Special Positions",
  "topic": "APCS implementation",
  "desc": "Given an N×M grid of heights, a cell is \"special\" if it is strictly higher than all its four adjacent cells (up, down, left, right). Count the number of special cells.",
  "input_desc": "First line: N, M (1 ≤ N,M ≤ 1000).\nNext N lines: M integers.",
  "output_desc": "Output the count.",
  "hint": "Check all four directions."
 },
 "src170_202410P2": {
  "title": "Collecting Gems",
  "topic": "APCS implementation",
  "desc": "On a 1D number line, there are N gems at positions p_i with value v_i. Start at 0, each move costs 1 per unit distance. You have a budget K. Maximize total value of gems you can collect (each gem at most once).",
  "input_desc": "First line: N, K (1 ≤ N ≤ 2000, 1 ≤ K ≤ 10^5).\nNext N lines: p_i, v_i (|p_i| ≤ 10^5, v_i ≤ 10^4).",
  "output_desc": "Output the maximum total value.",
  "hint": "Split gems into left and right of origin, enumerate how many to take from each side, compute minimal travel route (go to farther side once)."
 },
 "src171_202401P2": {
  "title": "Bee Observation",
  "topic": "APCS implementation",
  "desc": "On an N×N board, a bee starts at (1,1) and moves only right or down. Each cell has honey amount. The bee records the honey values along its path. Among all paths, find the minimum possible median value (the middle value when the sequence is sorted). Output that median.",
  "input_desc": "First line: N (1 ≤ N ≤ 100).\nNext N lines: N integers.",
  "output_desc": "Output the minimum median.",
  "hint": "Binary search median, check if exists path with at least half numbers ≤ mid."
 },
 "src172_202201P2": {
  "title": "Winner Prediction",
  "topic": "APCS implementation",
  "desc": "There are N players with skill values. In a tournament, each match randomly pairs two players, the higher skill wins (ties random). Who is most likely to be the champion? Output the player number (1-indexed) with the highest skill.",
  "input_desc": "First line: N (1 ≤ N ≤ 1000).\nSecond line: N skill values.",
  "output_desc": "Output the champion number.",
  "hint": "The player with maximum skill always wins."
 },
 "src173_202301P2": {
  "title": "Character Generation",
  "topic": "APCS implementation",
  "desc": "Given strings S and T. You can change any character in S to another letter at cost 1. Find the minimum changes to make S a subsequence of T.",
  "input_desc": "Two strings S and T (length ≤ 1000).",
  "output_desc": "Output the minimum changes.",
  "hint": "Same as src197."
 },
 "src176_202007P2": {
  "title": "Dice",
  "topic": "APCS implementation",
  "desc": "A die initially shows up=1, down=6, north=2, south=5, west=3, east=4. Given a sequence of moves: 'L', 'R', 'U', 'D' (left, right, up, down). Output the final top face.",
  "input_desc": "One line string of moves.",
  "output_desc": "Output the top number.",
  "hint": "Simulate dice rotations."
 },
 "src259_cses_1676": {
  "title": "Road Construction",
  "topic": "DSU",
  "desc": "There are N cities, initially no roads. M roads are built one by one. After each road, output the size of the largest connected component.",
  "input_desc": "First line: N, M (1 ≤ N,M ≤ 2×10^5).\nNext M lines: u, v.",
  "output_desc": "After each road, output the maximum component size.",
  "hint": "DSU with size tracking."
 },
 "src138_P_3_2": {
  "title": "Bracket Matching",
  "topic": "Stack Application",
  "desc": "Given a string of '(' and ')', check if it is a valid bracket sequence.",
  "input_desc": "One line string, length ≤ 10^5.",
  "output_desc": "Output YES or NO.",
  "hint": "Use stack."
 },
 "src141_APCSOnline_C2_permutation": {
  "title": "Permutation Generation",
  "topic": "Backtracking",
  "desc": "Given N, generate all permutations of 1..N in lexicographic order.",
  "input_desc": "Single integer N (1 ≤ N ≤ 8).",
  "output_desc": "Each permutation on its own line.",
  "hint": "Use itertools.permutations or backtrack."
 },
 "src145_b967": {
  "title": "Bloodline",
  "topic": "Tree/Graph Traversal",
  "desc": "Given a tree, find its diameter (number of edges in longest path).",
  "input_desc": "First line: N (1 ≤ N ≤ 10^5).\nNext N-1 lines: u, v.",
  "output_desc": "Output the diameter.",
  "hint": "Two BFS to find diameter."
 },
 "src150_h084": {
  "title": "Optimization Problem",
  "topic": "Greedy",
  "desc": "There are N intervals [s_i, t_i]. Find the maximum number of non-overlapping intervals.",
  "input_desc": "First line: N (1 ≤ N ≤ 10^5).\nNext N lines: s, t.",
  "output_desc": "Output the maximum number.",
  "hint": "Greedy by earliest end time."
 },
 "src204_202010P4": {
  "title": "Lowland Distance",
  "topic": "APCS implementation",
  "desc": "Given N points in the plane, find the closest pair distance (Euclidean).",
  "input_desc": "First line: N (2 ≤ N ≤ 10^5).\nNext N lines: x, y.",
  "output_desc": "Output the minimum distance with 4 decimal places.",
  "hint": "Divide and conquer closest pair."
 },
 "src205_202206P4": {
  "title": "Dot Product",
  "topic": "APCS implementation",
  "desc": "Given two vectors A and B of length N, you can rearrange B arbitrarily. Find the maximum possible dot product.",
  "input_desc": "First line: N (1 ≤ N ≤ 10^5).\nSecond line: N integers A_i.\nThird line: N integers B_i.",
  "output_desc": "Output the maximum dot product.",
  "hint": "Sort A ascending, B descending, then dot product."
 },
 "src206_202406P4": {
  "title": "Best Choice",
  "topic": "APCS implementation",
  "desc": "Given an array, find the maximum average of any contiguous subarray. Output that average with 3 decimal places.",
  "input_desc": "First line: N (1 ≤ N ≤ 10^5).\nSecond line: N integers.",
  "output_desc": "Output the maximum average.",
  "hint": "Maximum average is the maximum element (subarray length 1)."
 },
 "src209_201806P4": {
  "title": "Number of Inversions",
  "topic": "APCS implementation",
  "desc": "Count the number of inversions in an array (i<j and a[i] > a[j]).",
  "input_desc": "First line: N (1 ≤ N ≤ 10^5).\nSecond line: N integers.",
  "output_desc": "Output the count.",
  "hint": "Fenwick tree or merge sort."
 },
 "src210_202401P4": {
  "title": "Merge Cost",
  "topic": "APCS implementation",
  "desc": "Given N numbers, each operation merges two adjacent numbers x and y, cost = x+y, and replaces them with x+y. Repeat until one number remains. Find the minimum total cost.",
  "input_desc": "First line: N (1 ≤ N ≤ 5000).\nSecond line: N integers.",
  "output_desc": "Output the minimum cost.",
  "hint": "Classic stone merging interval DP."
 },
 "src211_201703P4": {
  "title": "Base Station",
  "topic": "APCS implementation",
  "desc": "There are N villages on a line at given positions. Build K base stations, each covers radius R. Find the minimum R such that all villages are covered.",
  "input_desc": "First line: N, K (1 ≤ N ≤ 10^5, 1 ≤ K ≤ N).\nSecond line: N integer positions.",
  "output_desc": "Output the minimum R.",
  "hint": "Binary search R, greedy placement."
 },
 "src216_202301P4": {
  "title": "Machine Rental",
  "topic": "APCS implementation",
  "desc": "Given intervals (start, end) for tasks, each machine can handle one task at a time. Find the minimum number of machines needed.",
  "input_desc": "First line: N (1 ≤ N ≤ 10^5).\nNext N lines: s, t.",
  "output_desc": "Output the minimum number of machines.",
  "hint": "Sweep line: maximum overlap."
 },
 "src223_201906P4": {
  "title": "Beautiful Ribbon",
  "topic": "APCS implementation",
  "desc": "Given a ribbon of N colors, find the longest contiguous subarray where every color appears an even number of times.",
  "input_desc": "First line: N (1 ≤ N ≤ 10^5).\nSecond line: N integers (colors).",
  "output_desc": "Output the longest length.",
  "hint": "Assign random 64-bit values to each color, XOR prefix, find equal prefix."
 },
 "src229_202101P4": {
  "title": "Soaring to Success",
  "topic": "APCS implementation",
  "desc": "Find the length of the longest increasing subsequence (LIS) of an array.",
  "input_desc": "First line: N (1 ≤ N ≤ 10^5).\nSecond line: N integers.",
  "output_desc": "Output the length.",
  "hint": "Patience sorting O(N log N)."
 },
 "src231_cses_1158": {
  "title": "Book Shop",
  "topic": "Knapsack",
  "desc": "There are N books, each with price and pages. You have budget X. Find the maximum number of pages you can buy.",
  "input_desc": "First line: N, X (1 ≤ N ≤ 1000, 1 ≤ X ≤ 10^5).\nSecond line: N integers price.\nThird line: N integers pages.",
  "output_desc": "Output the maximum pages.",
  "hint": "0/1 knapsack."
 },
 "src234_cses_1636": {
  "title": "Coin Combinations II (Ordered)",
  "topic": "Knapsack",
  "desc": "Same as src233 but order matters (permutations). Count number of sequences.",
  "input_desc": "Same as src233.",
  "output_desc": "Output the number of ways.",
  "hint": "Outer loop on amount, inner on coins (ordered)."
 },
 "src273_cses_1093": {
  "title": "Two Sets II",
  "topic": "Knapsack",
  "desc": "Split numbers 1..N into two sets with equal sum. Count the number of ways (order of sets doesn't matter). Output modulo 1e9+7.",
  "input_desc": "Single integer N (1 ≤ N ≤ 500).",
  "output_desc": "Output the number of ways.",
  "hint": "0/1 knapsack to count subsets summing to target, then divide by 2."
 },
 "src281_baltic_10_pcb": {
  "title": "2010 - PCB",
  "topic": "lis",
  "desc": "There are two rows of points, top row and bottom row, each with N points. Top point i is connected to bottom point p_i. Find the maximum number of non-intersecting segments (wires). Equivalent to LIS of p.",
  "input_desc": "First line: N (1 ≤ N ≤ 10^5).\nSecond line: N integers p_i.",
  "output_desc": "Output the maximum number.",
  "hint": "LIS."
 },
 "src245_cf_510C": {
  "title": "Fox and Names",
  "topic": "TopoSort",
  "desc": "Given N names in lexicographic order according to some unknown alphabet order (permutation of 26 letters). Find any such alphabet order, or output \"Impossible\".",
  "input_desc": "First line: N (1 ≤ N ≤ 100).\nNext N lines: strings (lowercase).",
  "output_desc": "Output a string of 26 letters (a permutation), or \"Impossible\".",
  "hint": "Compare adjacent words to derive constraints between letters, then topological sort."
 }
};

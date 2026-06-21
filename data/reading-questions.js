// 程式判讀題庫（APCS 程式識讀 + 統測 程式設計實習 判讀題）
// 來源：APCS 官網範例題本 / 技專校院入學測驗中心歷屆公告試題（僅供參考）
// 每題：{id, exam, num, topic, lang, code, q, options[4], answer(0-3), explain}
const READING_QUESTIONS = [
 {
  id:"apcs_6", exam:"APCS 程式識讀", num:"範例第6題", topic:"複雜度分析", lang:"c",
  code:`int f1(int a[], int value){ // 線性搜尋
  int i = 0;
  while (i < 100) {
    if (a[i] == value) return i;
    i = i + 1;
  }
  return -1;
}
int f2(int a[], int value){ // 二元搜尋
  int low = 0, high = 99;
  while (low <= high) {
    int mid = (low + high) / 2;
    if (a[mid] == value) return mid;
    else if (a[mid] < value) low = mid + 1;
    else high = mid - 1;
  }
  return -1;
}`,
  q:"陣列滿足 a[k] = 3k+1。以 value=100 呼叫兩函式，f1、f2 的 while 迴圈主體各執行幾次 n1, n2？",
  options:["n1=33, n2=4","n1=33, n2=5","n1=34, n2=4","n1=34, n2=5"],
  answer:3,
  explain:"線性搜尋：a[33]=3×33+1=100，迴圈體跑 i=0..33 共 34 次（n1=34）。二元搜尋：mid 依序 49→24→36→30→33，第 5 次命中（n2=5）。考點：O(n) 與 O(log n) 的具體比較次數計算。"
 },
 {
  id:"apcs_17_c", exam:"APCS 程式識讀", num:"範例第17題", topic:"除錯／條件順序", lang:"c",
  code:`if (s>=90)      printf("A\\n");
else if (s>=80) printf("B\\n");
else if (s>60)  printf("D\\n");
else if (s>70)  printf("C\\n");
else            printf("F\\n");`,
  q:"本意：90~100=A、80~89=B、70~79=C、60~69=D、0~59=F，但第 3、4 行順序寫反。0~100 分中，有幾個分數的等第會判斷錯誤？",
  options:["20","11","2","10"],
  answer:1,
  explain:"s=70~79（10 個）會先符合 s>60 而印成 D（應為 C）；s=60 因 60>60 為假，落到 else 印 F（應為 D）。共 10+1 = 11 個。考點：條件分支順序造成的邏輯瑕疵。"
 },
 {
  id:"apcs_17_py", exam:"APCS 程式識讀", num:"範例第17題（Python 版）", topic:"除錯／條件順序", lang:"python",
  code:`if s>=90:    print('A')
elif s>=80:  print('B')
elif s>60:   print('D')
elif s>70:   print('C')
else:        print('F')`,
  q:"與 C 版相同情境：第 3、4 個分支順序寫反。0~100 分中有幾個分數的等第會判斷錯誤？",
  options:["20","11","2","10"],
  answer:1,
  explain:"C 的 else-if 鏈與 Python 的 elif 鏈邏輯完全一致，順序寫反的瑕疵在兩語言皆存在，答案相同（11 個）。考點：跨語言對照判讀。"
 },
 {
  id:"apcs_22", exam:"APCS 程式識讀", num:"範例第22題", topic:"除錯／測試案例", lang:"c",
  code:`int A[8] = {0,2,4,6,8,10,12,14};
int Search(int x){
  int high = 7, low = 0;
  while (high > low) {
    int mid = (high+low)/2;
    if (A[mid] <= x) low = mid+1;
    else high = mid;
  }
  return A[high];
}`,
  q:"函式原意是找出陣列中「大於 x 的最小值」，但寫法有誤。下列哪個呼叫可以測出函式有誤？",
  options:["Search(-1)","Search(0)","Search(10)","Search(16)"],
  answer:3,
  explain:"x=16 時陣列裡沒有比 16 大的元素，但函式仍回傳 A[7]=14（並不大於 16），暴露邊界處理錯誤。考點：邊界條件測試案例設計。"
 },
 {
  id:"t113_35", exam:"統測 113 資電類", num:"第35題", topic:"陣列索引", lang:"cpp",
  code:`int TotalSteps = 5;
int Count = 0;
char StepName[9][4] = {"拖","脫","送","沖","蓋","泡","送"};
int Select[5] = {?};
for (Count = 0; Count < TotalSteps; Count += 1) {
  std::cout << StepName[Select[Count]];
}`,
  q:"小燕想依「沖、脫、泡、蓋、送」燒燙傷急救步驟順序輸出文字，Select[5] 內的 ? 應為下列何者？",
  options:["4,2,5,6,3","4,1,6,5,7","3,1,5,4,6","3,1,4,5,2"],
  answer:2,
  explain:"索引對照：拖0 脫1 送2 沖3 蓋4 泡5 送6。沖=3、脫=1、泡=5、蓋=4、送=6 → {3,1,5,4,6}。考點：以索引陣列重排輸出順序。",
  official:true
 },
 {
  id:"t113_36", exam:"統測 113 資電類", num:"第36題", topic:"變數作用域", lang:"cpp",
  code:`float f(float x){
  return(a*x*x+b*x+c);
}
int main(){
  float x, a=1, b=0, c=-1;
  for(x=-10; x<=10; x=x+0.1)
    printf("f(%.1f)=%.1f\\n", x, f(x));
}`,
  q:"曉華想計算並輸出二次多項式 f(x)，但程式編譯錯誤。主要原因及更正措施為下列何者？",
  options:["變數宣告 float 改 double 可解決","a,b,c 初始值改含小數可解決","將 a,b,c 移到函式外宣告為全域變數可解決","將全域變數改宣告在 f() 內可解決"],
  answer:2,
  explain:"f() 用到的 a、b、c 是 main() 內的區域變數，f() 無法存取它們 → 編譯錯誤。把 a,b,c 提到全域宣告即可。考點：區域變數 vs 全域變數的作用域。",
  official:true
 },
 {
  id:"t113_38", exam:"統測 113 資電類", num:"第38題", topic:"陣列與指標", lang:"c",
  code:`int Data[10] = {1,2,3,4,11,12,13,15};
int *pData = &Data[2];`,
  q:"關於此陣列與指標，下列敘述何者正確？",
  options:["if(pData[1]==1) 判斷式結果為真","if(*(pData+3)==Data[5]) 判斷式結果為真","if(Data[9]==0) 判斷式結果為假","if(Data[3]==(pData[5]-*(pData+2))) 判斷式結果為假"],
  answer:1,
  explain:"pData 指向 Data[2]。*(pData+3) = Data[5] = 12，Data[5] = 12，兩者相等為真。考點：指標位移運算與陣列索引的對應。",
  official:true
 },
 {
  id:"t113_39", exam:"統測 113 資電類", num:"第39題", topic:"位元運算／switch", lang:"c",
  code:`unsigned char i = 3;
switch ((i & 0x0e) % 5) {
  case(1): printf("%c", '0'+i); break;
  case(2): printf("%c", '0'+i*i);
  case(3): printf("%c", 'a'+i*i);
  default: printf("%c", 'z');
}`,
  q:"程式執行完畢後，輸出為何？",
  options:["9jz","927z","9270","9"],
  answer:0,
  explain:"i&0x0e = 3&14 = 2，2%5 = 2 → 進 case 2 印 '0'+9='9'；沒有 break，連續執行 case 3 印 'a'+9='j'、default 印 'z' → 9jz。考點：位元 AND、switch fall-through、字元運算。",
  official:true
 },
 {
  id:"t113_40", exam:"統測 113 資電類", num:"第40題", topic:"enum 狀態機", lang:"cpp",
  code:`enum States { Run = 1, Stop, Pause = 3, Exit };
States StateMachine = Pause;
int Command = 0;
std::cin >> Command;
if (Command == 1) StateMachine = Stop;
if (Command == 2 && StateMachine == Pause)
  StateMachine = Run;
if (Command == 3 || StateMachine == Stop)
  StateMachine = Exit;`,
  q:"程式執行後，下列敘述何者正確？",
  options:["Command 為 1 時，StateMachine 的值為 Exit","Command 為 2 時，StateMachine 的值為 Pause","Command 為 3 時，StateMachine 的值為 Stop","Command 為 4 時，StateMachine 的值為 Run"],
  answer:0,
  explain:"Command=1：第一個 if 設為 Stop；第三個 if 因 StateMachine==Stop 成立 → 設為 Exit。考點：enum 數值對應＋多個獨立 if（非 if-elif）連續覆寫狀態。",
  official:true
 },
 {
  id:"t113_44", exam:"統測 113 資電類", num:"第44題", topic:"排序比較次數", lang:"",
  code:"",
  q:"使用泡沫排序演算法將 50 位學生的成績排序，需經幾次數值比較才能完成排序？",
  options:["50","1225","24550","245050"],
  answer:1,
  explain:"泡沫排序比較次數 = 49+48+…+1 = 50×49/2 = 1225。考點：排序演算法的時間複雜度／比較次數公式（不給程式碼、純考演算法知識）。",
  official:true
 },
 {
  id:"t113_47", exam:"統測 113 資電類", num:"第47題", topic:"排序＋字元混合", lang:"c",
  code:`int numbers[N] = {1,3,5,7,9,2,4,6,8,0,'a'};
for (min=0; min<N; min++)
  for (i=0; i<N; i++) {
    if (numbers[i] < numbers[min]) {
      tmp = numbers[min];
      numbers[min] = numbers[i];
      numbers[i] = tmp;
    }
  }
for (i=0; i<N; i++) printf("%d ", numbers[i]);`,
  q:"字元 'a' 的 ASCII 碼為 97。程式執行後的輸出結果為何？",
  options:["a 9 8 7 6 5 4 3 2 1 0","0 1 2 3 4 5 6 7 8 9 a","97 9 8 7 6 5 4 3 2 1 0","0 1 2 3 4 5 6 7 8 9 97"],
  answer:2,
  explain:"比較式把「較小者換到 min 位置」實際造成降序排列，且 'a' 自動轉型為整數 97 參與比較並排到最前 → 97 9 8 7 6 5 4 3 2 1 0。考點：排序邏輯＋字元轉整數的綜合追蹤。",
  official:true
 },
 {
  id:"t111_39", exam:"統測 111 資電類", num:"第39題", topic:"整數／浮點除法", lang:"c",
  code:`int x, a = 7, b = 2;
float y;
x = a / b;
y = (float)a / b;`,
  q:"程式碼片段執行後，x 與 y 的結果為何？",
  options:["x 為 3，y 為 3","x 為 3，y 為 3.5","x 為 3.5，y 為 3","x 為 3.5，y 為 3.5"],
  answer:1,
  explain:"整數除法 7/2 = 3（捨去小數）；(float)7/2 = 3.5（先轉型再除）。考點：整數除法與強制型態轉換後的浮點除法差異。",
  official:true
 },
 {
  id:"t111_40", exam:"統測 111 資電類", num:"第40題", topic:"位元 XOR", lang:"c",
  code:`int a = 9, b = 7;
printf("%d", a^b);`,
  q:"程式碼執行後，其結果為何？",
  options:["1","2","14","15"],
  answer:2,
  explain:"9 = 1001、7 = 0111，逐位 XOR = 1110 = 14。考點：位元 XOR（^）運算，先轉二進位再逐位運算。",
  official:true
 },
 {
  id:"t111_44", exam:"統測 111 資電類", num:"第44題", topic:"輾轉相除（GCD）", lang:"c",
  code:`int y, r, a=30, b=42;
r = a % b;
while(r != 0) {
  a = b;
  b = r;
  r = a % b;
}
y = b;`,
  q:"程式碼片段執行結果，變數 y 的值為何？",
  options:["42","30","12","6"],
  answer:3,
  explain:"輾轉相除：r=30%42=30 →(a,b)=(42,30) r=12 →(30,12) r=6 →(12,6) r=0，y=b=6 = gcd(30,42)。考點：歐幾里得演算法逐步追蹤。",
  official:true
 },
 {
  id:"t111_46", exam:"統測 111 資電類", num:"第46題", topic:"字串指標位移", lang:"c",
  code:`char Str[] = "abcde";
char *ptr = Str;
printf("%s", ++ptr);`,
  q:"程式碼執行後，輸出為何？",
  options:["a","b","abcde","bcde"],
  answer:3,
  explain:"++ptr 先讓指標指向 'b' 的位址，再以 %s 從新位址印到字串結尾 → bcde。考點：指標前置遞增（++ptr）與字串輸出。",
  official:true
 },
 {"id":"apcs_30_c", "exam":"APCS 程式識讀", "num":"範例第30題", "topic":"一維陣列前綴和", "lang":"c", "code":"for (i=1; i<=100; i=i+1) { b[i] = i; }\na[0] = 0;\nfor (i=1; i<=100; i=i+1) {\n  a[i] = b[i] + a[i-1];\n}\nprintf(\"%d\\n\", a[50]-a[30]);", "q":"陣列 a 為 b 的前綴和。程式最後印出 a[50]-a[30] 的值為何？", "options":["810", "840", "765", "1275"], "answer":0, "explain":"a[i] 累積 b[1..i]=1+2+…+i。a[50]-a[30] 即 31+32+…+50 =（31+50)×20/2 = 810。考點：前綴和區間求和，a[r]-a[l] 得 (l, r] 區間和。"},
 {"id":"apcs_30_py", "exam":"APCS 程式識讀", "num":"範例第30題（Python 版）", "topic":"一維陣列前綴和", "lang":"python", "code":"b = [i for i in range(101)]\na = [0] * 101\nfor i in range(1, 101):\n    a[i] = b[i] + a[i - 1]\nprint(a[50] - a[30])", "q":"與 C 版同題的 Python 寫法，輸出 a[50]-a[30] 為何？", "options":["810", "840", "765", "1275"], "answer":0, "explain":"邏輯與 C 版完全相同：前綴和 a[i]=1+…+i，a[50]-a[30]=31+…+50=810。考點：C 的 for 宣告陣列對應 Python 的 list comprehension。"},
 {"id":"p001", "exam":"練習：基礎語法", "num":"練習第1題", "topic":"變數與輸出", "lang":"c", "code":"int a = 5, b = 2;\nprintf(\"%d\", a / b);", "q":"變數與輸出：這段程式的執行結果為何？", "options":["2", "2.5", "3", "1"], "answer":0, "explain":"整數除法會捨去小數，5/2=2。"},
 {"id":"p002", "exam":"練習：基礎語法", "num":"練習第2題", "topic":"型態轉換", "lang":"c", "code":"int a = 5, b = 2;\nprintf(\"%.1f\", (float)a / b);", "q":"型態轉換：這段程式的執行結果為何？", "options":["2", "2.5", "3.0", "2.0"], "answer":1, "explain":"(float)a 先轉浮點再除以 2 得 2.5，%.1f 印一位小數。"},
 {"id":"p003", "exam":"練習：基礎語法", "num":"練習第3題", "topic":"字元與 ASCII", "lang":"c", "code":"char c = 'A';\nprintf(\"%d\", c + 1);", "q":"字元與 ASCII：這段程式的執行結果為何？", "options":["66", "65", "'B'", "67"], "answer":0, "explain":"字元 'A' 的 ASCII 為 65，c+1=66，以 %d 印整數。"},
 {"id":"p004", "exam":"練習：基礎語法", "num":"練習第4題", "topic":"運算子優先順序", "lang":"c", "code":"int a = 10, b = 20, c = 30;\nint result = a + b * c;\nprintf(\"%d\", result);", "q":"運算子優先順序：這段程式的執行結果為何？", "options":["610", "900", "600", "630"], "answer":0, "explain":"乘法優先於加法：20*30=600，再加 10 得 610。"},
 {"id":"p005", "exam":"練習：基礎語法", "num":"練習第5題", "topic":"複合指定運算子", "lang":"c", "code":"int x = 10;\nx += 5;\nx *= 2;\nprintf(\"%d\", x);", "q":"複合指定運算子：這段程式的執行結果為何？", "options":["20", "25", "30", "40"], "answer":2, "explain":"x=10 → +=5 得 15 → *=2 得 30。"},
 {"id":"p006", "exam":"練習：基礎語法", "num":"練習第6題", "topic":"前置與後置遞增", "lang":"c", "code":"int i = 5;\nint j = i++;\nint k = ++i;\nprintf(\"%d %d %d\", i, j, k);", "q":"前置與後置遞增：這段程式的執行結果為何？", "options":["7 5 7", "6 5 7", "7 6 7", "6 5 6"], "answer":0, "explain":"後置 i++：j 取舊值 5、i 變 6；前置 ++i：i 變 7、k=7。印 7 5 7。"},
 {"id":"p007", "exam":"練習：基礎語法", "num":"練習第7題", "topic":"邏輯運算", "lang":"c", "code":"int a = 0, b = 1;\nprintf(\"%d\", a && b);", "q":"邏輯運算：這段程式的執行結果為何？", "options":["0", "1", "true", "false"], "answer":0, "explain":"0 && 任何值 = 0（C 以 0/1 表示真假）。"},
 {"id":"p008", "exam":"練習：基礎語法", "num":"練習第8題", "topic":"條件運算子", "lang":"c", "code":"int score = 85;\nchar grade = (score >= 60) ? 'P' : 'F';\nprintf(\"%c\", grade);", "q":"條件運算子：這段程式的執行結果為何？", "options":["P", "F", "85", "60"], "answer":0, "explain":"85>=60 為真，三元運算取 'P'。"},
 {"id":"p009", "exam":"練習：基礎語法", "num":"練習第9題", "topic":"逗號運算子", "lang":"c", "code":"int a = (1, 2, 3);\nprintf(\"%d\", a);", "q":"逗號運算子：這段程式的執行結果為何？", "options":["1", "2", "3", "編譯錯誤"], "answer":2, "explain":"逗號運算子取最後一個運算元，a=3。"},
 {"id":"p010", "exam":"練習：基礎語法", "num":"練習第10題", "topic":"sizeof 運算子", "lang":"c", "code":"int arr[10];\nprintf(\"%lu\", sizeof(arr) / sizeof(arr[0]));", "q":"sizeof 運算子：這段程式的執行結果為何？", "options":["10", "40", "4", "1"], "answer":0, "explain":"sizeof(arr)=40、sizeof(arr[0])=4，相除得元素個數 10。"},
 {"id":"p011", "exam":"練習：基礎語法", "num":"練習第11題", "topic":"const 常數", "lang":"c", "code":"const int MAX = 100;\nMAX = 200;", "q":"const 常數：這段程式的執行結果為何？", "options":["MAX=100", "MAX=200", "編譯錯誤", "執行錯誤"], "answer":2, "explain":"const 變數宣告後不可再指定，造成編譯錯誤。"},
 {"id":"p012", "exam":"練習：基礎語法", "num":"練習第12題", "topic":"全域變數與區域變數", "lang":"c", "code":"int a = 1;\nvoid func() { int a = 2; }\nint main() { func(); printf(\"%d\", a); return 0; }", "q":"全域變數與區域變數：這段程式的執行結果為何？", "options":["1", "2", "0", "編譯錯誤"], "answer":0, "explain":"func 內的 a 是區域變數，不影響全域 a，印全域值 1。"},
 {"id":"p013", "exam":"練習：基礎語法", "num":"練習第13題", "topic":"靜態變數 (static)", "lang":"c", "code":"void counter() {\n    static int count = 0;\n    count++;\n    printf(\"%d \", count);\n}\nint main() {\n    counter(); counter(); counter();\n    return 0;\n}", "q":"靜態變數 (static)：這段程式的執行結果為何？", "options":["1 1 1", "1 2 3", "0 1 2", "編譯錯誤"], "answer":1, "explain":"static 區域變數跨呼叫保留值，依序印 1 2 3。"},
 {"id":"p014", "exam":"練習：基礎語法", "num":"練習第14題", "topic":"整數溢位", "lang":"c", "code":"unsigned short a = 65535;\na++;\nprintf(\"%u\", a);", "q":"整數溢位：這段程式的執行結果為何？", "options":["65536", "0", "65535", "1"], "answer":1, "explain":"unsigned short 上限 65535，+1 溢位回繞為 0。"},
 {"id":"p015", "exam":"練習：基礎語法", "num":"練習第15題", "topic":"除錯：未初始化的變數", "lang":"c", "code":"int a;\nprintf(\"%d\", a);", "q":"除錯：未初始化的變數：這段程式的執行結果為何？", "options":["0", "亂數值", "編譯錯誤", "執行錯誤"], "answer":1, "explain":"未初始化的區域變數值不確定（垃圾值）。"},
 {"id":"p016", "exam":"練習：基礎語法", "num":"練習第16題", "topic":"字串與字元陣列", "lang":"c", "code":"char s[] = \"Hello\";\nprintf(\"%lu\", sizeof(s));", "q":"字串與字元陣列：這段程式的執行結果為何？", "options":["5", "6", "4", "1"], "answer":1, "explain":"字串含結尾 '\\0'，\"Hello\" 共佔 6 bytes。"},
 {"id":"p017", "exam":"練習：基礎語法", "num":"練習第17題", "topic":"字串函式 strlen", "lang":"c", "code":"#include <string.h>\nchar s[] = \"Hello\";\nprintf(\"%lu\", strlen(s));", "q":"字串函式 strlen：這段程式的執行結果為何？", "options":["5", "6", "4", "1"], "answer":0, "explain":"strlen 不計結尾 '\\0'，得 5。"},
 {"id":"p018", "exam":"練習：基礎語法", "num":"練習第18題", "topic":"轉義序列", "lang":"c", "code":"printf(\"A\\tB\\\\C\\nD\");", "q":"轉義序列：這段程式的執行結果為何？", "options":["A B C D", "A        B\\C D", "A        B\\C", "AB\\CD"], "answer":1, "explain":"\\t 為定位、\\\\ 為一個反斜線、\\n 為換行 → A〔tab〕B\\C 換行 D。"},
 {"id":"p019", "exam":"練習：基礎語法", "num":"練習第19題", "topic":"格式化輸出", "lang":"c", "code":"int a = 123;\nprintf(\"%05d\", a);", "q":"格式化輸出：這段程式的執行結果為何？", "options":["00123", "123", "0012", "01230"], "answer":0, "explain":"%05d 補零到 5 位寬 → 00123。"},
 {"id":"p020", "exam":"練習：基礎語法", "num":"練習第20題", "topic":"浮點數精度", "lang":"c", "code":"float a = 0.1;\nif (a == 0.1) printf(\"Equal\");\nelse printf(\"Not Equal\");", "q":"浮點數精度：這段程式的執行結果為何？", "options":["Equal", "Not Equal", "編譯錯誤", "執行錯誤"], "answer":1, "explain":"0.1 以 float 儲存有誤差，與 double 的 0.1 比較不相等。"},
 {"id":"p021", "exam":"練習：基礎語法", "num":"練習第21題", "topic":"位元 AND", "lang":"c", "code":"int a = 5; // 0101\nint b = 3; // 0011\nprintf(\"%d\", a & b);", "q":"位元 AND：這段程式的執行結果為何？", "options":["1", "2", "3", "0"], "answer":0, "explain":"5&3：0101 & 0011 = 0001 = 1。"},
 {"id":"p022", "exam":"練習：基礎語法", "num":"練習第22題", "topic":"位元 OR", "lang":"c", "code":"int a = 5; // 0101\nint b = 3; // 0011\nprintf(\"%d\", a | b);", "q":"位元 OR：這段程式的執行結果為何？", "options":["1", "7", "3", "5"], "answer":1, "explain":"5|3：0101 | 0011 = 0111 = 7。"},
 {"id":"p023", "exam":"練習：基礎語法", "num":"練習第23題", "topic":"位元 XOR", "lang":"c", "code":"int a = 9; // 1001\nint b = 7; // 0111\nprintf(\"%d\", a ^ b);", "q":"位元 XOR：這段程式的執行結果為何？", "options":["1", "2", "14", "15"], "answer":2, "explain":"9^7：1001 ^ 0111 = 1110 = 14。"},
 {"id":"p024", "exam":"練習：基礎語法", "num":"練習第24題", "topic":"位元左移", "lang":"c", "code":"int a = 3; // 0011\nprintf(\"%d\", a << 2);", "q":"位元左移：這段程式的執行結果為何？", "options":["6", "12", "3", "1"], "answer":1, "explain":"3<<2 = 3×2² = 12。"},
 {"id":"p025", "exam":"練習：基礎語法", "num":"練習第25題", "topic":"位元右移", "lang":"c", "code":"int a = 8; // 1000\nprintf(\"%d\", a >> 2);", "q":"位元右移：這段程式的執行結果為何？", "options":["2", "4", "0", "1"], "answer":0, "explain":"8>>2 = 8÷2² = 2。"},
 {"id":"p026", "exam":"練習：基礎語法", "num":"練習第26題", "topic":"enum 列舉", "lang":"c", "code":"enum Color { RED, GREEN, BLUE };\nenum Color c = BLUE;\nprintf(\"%d\", c);", "q":"enum 列舉：這段程式的執行結果為何？", "options":["0", "1", "2", "3"], "answer":2, "explain":"enum 預設由 0 起算：RED=0、GREEN=1、BLUE=2。"},
 {"id":"p027", "exam":"練習：基礎語法", "num":"練習第27題", "topic":"enum 指定值", "lang":"c", "code":"enum Status { OK = 1, FAIL, PENDING = 5 };\nprintf(\"%d %d\", FAIL, PENDING);", "q":"enum 指定值：這段程式的執行結果為何？", "options":["2 5", "1 5", "2 6", "1 6"], "answer":0, "explain":"OK=1 後 FAIL 自動為 2；PENDING 指定為 5。印 2 5。"},
 {"id":"p028", "exam":"練習：基礎語法", "num":"練習第28題", "topic":"switch-case 基本", "lang":"c", "code":"int a = 2;\nswitch(a) {\n    case 1: printf(\"A\"); break;\n    case 2: printf(\"B\");\n    case 3: printf(\"C\"); break;\n    default: printf(\"D\");\n}", "q":"switch-case 基本：這段程式的執行結果為何？", "options":["B", "BC", "ABC", "BCD"], "answer":1, "explain":"case 2 印 B 後無 break，續執行 case 3 印 C 才 break → BC。"},
 {"id":"p029", "exam":"練習：基礎語法", "num":"練習第29題", "topic":"switch-case with default", "lang":"c", "code":"int a = 5;\nswitch(a) {\n    default: printf(\"D\");\n    case 1: printf(\"A\"); break;\n    case 2: printf(\"B\");\n}", "q":"switch-case with default：這段程式的執行結果為何？", "options":["DAB", "DA", "D", "A"], "answer":1, "explain":"a=5 無對應 case，進 default 印 D，續執行 case 1 印 A 後 break → DA。"},
 {"id":"p030", "exam":"練習：基礎語法", "num":"練習第30題", "topic":"typedef 使用", "lang":"c", "code":"typedef int INTEGER;\nINTEGER a = 10;\nprintf(\"%d\", a);", "q":"typedef 使用：這段程式的執行結果為何？", "options":["10", "INTEGER", "編譯錯誤", "0"], "answer":0, "explain":"typedef 只是型別別名，INTEGER 即 int，印 10。"},
 {"id":"p031", "exam":"練習：條件迴圈", "num":"練習第31題", "topic":"if-else 判斷", "lang":"c", "code":"int score = 75;\nif (score >= 80) printf(\"A\");\nelse if (score >= 70) printf(\"B\");\nelse if (score >= 60) printf(\"C\");\nelse printf(\"F\");", "q":"if-else 判斷：這段程式的執行結果為何？", "options":["A", "B", "C", "F"], "answer":1, "explain":"75 不>=80，但>=70 → 印 B。"},
 {"id":"p032", "exam":"練習：條件迴圈", "num":"練習第32題", "topic":"if-else 順序錯誤（APCS經典題）", "lang":"c", "code":"int s = 65;\nif (s >= 90) printf(\"A\");\nelse if (s >= 80) printf(\"B\");\nelse if (s > 60) printf(\"D\");\nelse if (s > 70) printf(\"C\");\nelse printf(\"F\");", "q":"if-else 順序錯誤（APCS經典題）：這段程式的執行結果為何？", "options":["A", "B", "C", "D"], "answer":3, "explain":"65 不>=90、不>=80；因分支順序寫反，先遇 s>60（65>60）成立而印 D。"},
 {"id":"p033", "exam":"練習：條件迴圈", "num":"練習第33題", "topic":"for 迴圈", "lang":"c", "code":"int sum = 0;\nfor (int i = 1; i <= 5; i++) sum += i;\nprintf(\"%d\", sum);", "q":"for 迴圈：這段程式的執行結果為何？", "options":["10", "15", "5", "20"], "answer":1, "explain":"1+2+3+4+5 = 15。"},
 {"id":"p034", "exam":"練習：條件迴圈", "num":"練習第34題", "topic":"for 迴圈 (步進)", "lang":"c", "code":"int sum = 0;\nfor (int i = 0; i < 10; i += 2) sum += i;\nprintf(\"%d\", sum);", "q":"for 迴圈 (步進)：這段程式的執行結果為何？", "options":["20", "30", "25", "15"], "answer":0, "explain":"i=0,2,4,6,8 相加 = 20。"},
 {"id":"p035", "exam":"練習：條件迴圈", "num":"練習第35題", "topic":"while 迴圈", "lang":"c", "code":"int i = 0, sum = 0;\nwhile (i <= 5) {\n    sum += i;\n    i++;\n}\nprintf(\"%d\", sum);", "q":"while 迴圈：這段程式的執行結果為何？", "options":["15", "10", "0", "20"], "answer":0, "explain":"i 從 0 到 5 相加 = 15。"},
 {"id":"p036", "exam":"練習：條件迴圈", "num":"練習第36題", "topic":"do-while 迴圈", "lang":"c", "code":"int i = 5, sum = 0;\ndo {\n    sum += i;\n    i--;\n} while (i > 0);\nprintf(\"%d\", sum);", "q":"do-while 迴圈：這段程式的執行結果為何？", "options":["15", "10", "5", "0"], "answer":0, "explain":"do-while 由 i=5 遞減到 1 相加 = 15。"},
 {"id":"p037", "exam":"練習：條件迴圈", "num":"練習第37題", "topic":"無窮迴圈", "lang":"c", "code":"int i = 0;\nwhile (i < 5) {\n    printf(\"%d\", i);\n    // 忘記 i++\n}", "q":"無窮迴圈：這段程式的執行結果為何？", "options":["01234", "00000", "無限輸出0", "編譯錯誤"], "answer":2, "explain":"漏寫 i++，i 永遠為 0，無限印出 0。"},
 {"id":"p038", "exam":"練習：條件迴圈", "num":"練習第38題", "topic":"break 在迴圈中", "lang":"c", "code":"int i;\nfor (i = 0; i < 10; i++) {\n    if (i == 5) break;\n}\nprintf(\"%d\", i);", "q":"break 在迴圈中：這段程式的執行結果為何？", "options":["4", "5", "9", "10"], "answer":1, "explain":"i==5 時 break，i 保留為 5。"},
 {"id":"p039", "exam":"練習：條件迴圈", "num":"練習第39題", "topic":"continue 在迴圈中", "lang":"c", "code":"int sum = 0;\nfor (int i = 0; i < 5; i++) {\n    if (i == 2) continue;\n    sum += i;\n}\nprintf(\"%d\", sum);", "q":"continue 在迴圈中：這段程式的執行結果為何？", "options":["10", "8", "6", "7"], "answer":1, "explain":"i==2 時 continue 跳過該次，0+1+3+4 = 8。"},
 {"id":"p040", "exam":"練習：條件迴圈", "num":"練習第40題", "topic":"巢狀迴圈", "lang":"c", "code":"int count = 0;\nfor (int i = 0; i < 3; i++) {\n    for (int j = 0; j < 3; j++) {\n        count++;\n    }\n}\nprintf(\"%d\", count);", "q":"巢狀迴圈：這段程式的執行結果為何？", "options":["6", "9", "3", "1"], "answer":1, "explain":"3×3 巢狀共執行 9 次。"},
 {"id":"p041", "exam":"練習：條件迴圈", "num":"練習第41題", "topic":"巢狀迴圈 (三角形)", "lang":"c", "code":"int count = 0;\nfor (int i = 0; i < 3; i++) {\n    for (int j = 0; j <= i; j++) {\n        count++;\n    }\n}\nprintf(\"%d\", count);", "q":"巢狀迴圈 (三角形)：這段程式的執行結果為何？", "options":["6", "9", "3", "1"], "answer":0, "explain":"三角形巢狀：1+2+3 = 6 次。"},
 {"id":"p042", "exam":"練習：條件迴圈", "num":"練習第42題", "topic":"邏輯運算短路", "lang":"c", "code":"int a = 0, b = 1;\nif (a && b++) printf(\"%d\", b);\nelse printf(\"%d\", b);", "q":"邏輯運算短路：這段程式的執行結果為何？", "options":["1", "2", "0", "編譯錯誤"], "answer":0, "explain":"a=0 使 && 短路，b++ 不被執行，b 仍為 1。"},
 {"id":"p043", "exam":"練習：條件迴圈", "num":"練習第43題", "topic":"邏輯運算短路 (OR)", "lang":"c", "code":"int a = 1, b = 1;\nif (a || b++) printf(\"%d\", b);\nelse printf(\"%d\", b);", "q":"邏輯運算短路 (OR)：這段程式的執行結果為何？", "options":["1", "2", "0", "編譯錯誤"], "answer":0, "explain":"a=1 使 || 短路，b++ 不被執行，b 仍為 1。"},
 {"id":"p044", "exam":"練習：條件迴圈", "num":"練習第44題", "topic":"goto 敘述", "lang":"c", "code":"int i = 0;\nstart:\n    printf(\"%d \", i);\n    i++;\n    if (i < 5) goto start;", "q":"goto 敘述：這段程式的執行結果為何？", "options":["0 1 2 3 4", "1 2 3 4 5", "0 1 2 3 4 5", "無限迴圈"], "answer":0, "explain":"goto 形成迴圈，依序印 0 1 2 3 4。"},
 {"id":"p045", "exam":"練習：條件迴圈", "num":"練習第45題", "topic":"if 與 else 的配對 (dangling else)", "lang":"c", "code":"int a = 1, b = 0;\nif (a)\n    if (b) printf(\"A\");\nelse printf(\"B\");", "q":"if 與 else 的配對 (dangling else)：這段程式的執行結果為何？", "options":["A", "B", "無輸出", "編譯錯誤"], "answer":1, "explain":"else 與最近的 if(b) 配對；b=0 為假 → else 印 B。"},
 {"id":"p046", "exam":"練習：條件迴圈", "num":"練習第46題", "topic":"判斷是否為閏年 (概念)", "lang":"c", "code":"int year = 2000;\nif (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0))\n    printf(\"Leap Year\");\nelse\n    printf(\"Not Leap Year\");", "q":"判斷是否為閏年 (概念)：這段程式的執行結果為何？", "options":["Leap Year", "Not Leap Year", "編譯錯誤", "執行錯誤"], "answer":0, "explain":"2000%400==0 成立 → 是閏年。"},
 {"id":"p047", "exam":"練習：條件迴圈", "num":"練習第47題", "topic":"for 迴圈內變數宣告", "lang":"c", "code":"for (int i = 0; i < 3; i++) {\n    int x = 0;\n    x++;\n    printf(\"%d\", x);\n}", "q":"for 迴圈內變數宣告：這段程式的執行結果為何？", "options":["000", "111", "012", "編譯錯誤"], "answer":1, "explain":"x 每圈重新宣告為 0 再 ++，每次都印 1 → 111。"},
 {"id":"p048", "exam":"練習：條件迴圈", "num":"練習第48題", "topic":"for 迴圈略過大括號", "lang":"c", "code":"int sum = 0;\nfor (int i = 0; i < 5; i++)\n    sum += i;\n    printf(\"%d\", sum);", "q":"for 迴圈略過大括號：這段程式的執行結果為何？", "options":["10", "15", "0", "編譯錯誤"], "answer":0, "explain":"縮排具誤導性，但 printf 其實在迴圈外，sum=10 只印一次。"},
 {"id":"p049", "exam":"練習：條件迴圈", "num":"練習第49題", "topic":"while 迴圈與 break", "lang":"c", "code":"int i = 0;\nwhile (1) {\n    i++;\n    if (i == 5) break;\n}\nprintf(\"%d\", i);", "q":"while 迴圈與 break：這段程式的執行結果為何？", "options":["4", "5", "6", "無窮迴圈"], "answer":1, "explain":"while(1) 內 i==5 時 break，印 5。"},
 {"id":"p050", "exam":"練習：條件迴圈", "num":"練習第50題", "topic":"無窮迴圈偵測", "lang":"c", "code":"int i = 10;\nwhile (i > 0) {\n    printf(\"%d\", i);\n    // i 沒有變化\n}", "q":"無窮迴圈偵測：這段程式的執行結果為何？", "options":["10", "12345678910", "無限輸出10", "編譯錯誤"], "answer":2, "explain":"i 始終 >0，無限印出 10。"},
 {"id":"p051", "exam":"練習：條件迴圈", "num":"練習第51題", "topic":"階乘計算 (for)", "lang":"c", "code":"int fact = 1;\nfor (int i = 1; i <= 4; i++) fact *= i;\nprintf(\"%d\", fact);", "q":"階乘計算 (for)：這段程式的執行結果為何？", "options":["24", "120", "10", "4"], "answer":0, "explain":"1×2×3×4 = 24。"},
 {"id":"p052", "exam":"練習：條件迴圈", "num":"練習第52題", "topic":"條件判斷中的指定", "lang":"c", "code":"int a = 5, b = 10;\nif (a = b) printf(\"True\");\nelse printf(\"False\");", "q":"條件判斷中的指定：這段程式的執行結果為何？", "options":["True", "False", "編譯錯誤", "執行錯誤"], "answer":0, "explain":"if(a=b) 是指定（非比較），a=10 為真 → True。"},
 {"id":"p053", "exam":"練習：條件迴圈", "num":"練習第53題", "topic":"XOR 交換", "lang":"c", "code":"int a = 5, b = 3;\na = a ^ b;\nb = a ^ b;\na = a ^ b;\nprintf(\"%d %d\", a, b);", "q":"XOR 交換：這段程式的執行結果為何？", "options":["5 3", "3 5", "1 7", "7 1"], "answer":1, "explain":"XOR 三步交換，a、b 互換為 3 5。"},
 {"id":"p054", "exam":"練習：條件迴圈", "num":"練習第54題", "topic":"邏輯運算優先順序", "lang":"c", "code":"int a = 1, b = 0, c = 0;\nif (a || b && c) printf(\"True\");\nelse printf(\"False\");", "q":"邏輯運算優先順序：這段程式的執行結果為何？", "options":["True", "False", "編譯錯誤", "執行錯誤"], "answer":0, "explain":"&& 優先於 ||：b&&c=0，1||0=真 → True。"},
 {"id":"p055", "exam":"練習：條件迴圈", "num":"練習第55題", "topic":"三元運算巢狀", "lang":"c", "code":"int a = 10, b = 20;\nint max = (a > b) ? a : (b > 15 ? b : 15);\nprintf(\"%d\", max);", "q":"三元運算巢狀：這段程式的執行結果為何？", "options":["10", "15", "20", "30"], "answer":2, "explain":"a>b 為假 → 取 (b>15?b:15)，20>15 → 20。"},
 {"id":"p056", "exam":"練習：條件迴圈", "num":"練習第56題", "topic":"switch 與 char", "lang":"c", "code":"char c = 'B';\nswitch(c) {\n    case 'A': printf(\"Apple\"); break;\n    case 'B': printf(\"Banana\");\n    default: printf(\"Default\");\n}", "q":"switch 與 char：這段程式的執行結果為何？", "options":["Banana", "BananaDefault", "Apple", "Default"], "answer":1, "explain":"case 'B' 印 Banana 後無 break，續執行 default 印 Default。"},
 {"id":"p057", "exam":"練習：條件迴圈", "num":"練習第57題", "topic":"迴圈中的變數 scope", "lang":"c", "code":"int i = 0;\nfor (int i = 0; i < 3; i++) {\n    printf(\"%d\", i);\n}\nprintf(\"%d\", i);", "q":"迴圈中的變數 scope：這段程式的執行結果為何？", "options":["0123", "0120", "編譯錯誤", "執行錯誤"], "answer":1, "explain":"內層 i 印 012；外層獨立的 i 仍為 0 → 0120。"},
 {"id":"p058", "exam":"練習：條件迴圈", "num":"練習第58題", "topic":"while (i--) 用法", "lang":"c", "code":"int i = 3;\nwhile (i--) {\n    printf(\"%d\", i);\n}", "q":"while (i--) 用法：這段程式的執行結果為何？", "options":["321", "210", "012", "123"], "answer":1, "explain":"while(i--) 先判斷後遞減：印 2 1 0。"},
 {"id":"p059", "exam":"練習：條件迴圈", "num":"練習第59題", "topic":"do-while 至少執行一次", "lang":"c", "code":"int i = 5;\ndo {\n    printf(\"%d \", i);\n    i++;\n} while (i < 5);", "q":"do-while 至少執行一次：這段程式的執行結果為何？", "options":["5", "5 6", "(無輸出)", "6"], "answer":0, "explain":"do 先執行印 5，i=6 已不<5 結束。"},
 {"id":"p060", "exam":"練習：條件迴圈", "num":"練習第60題", "topic":"流程圖轉程式碼 (if)", "lang":"c", "code":"流程圖：開始 → 輸入 X → [X>0?] → 是: 輸出 \"Positive\" / 否: 輸出 \"Negative\" → 結束\nint x;\nscanf(\"%d\", &x);\nif (x > 0) printf(\"Positive\");\nelse printf(\"Negative\");", "q":"流程圖轉程式碼 (if)：這段程式的執行結果為何？", "options":["Positive", "Negative", "編譯錯誤", "端看輸入"], "answer":3, "explain":"輸出取決於輸入 x 的正負，無法事先確定。"},
 {"id":"p061", "exam":"練習：陣列字串", "num":"練習第61題", "topic":"陣列宣告與初始化", "lang":"c", "code":"int arr[5] = {1, 2, 3};\nprintf(\"%d\", arr[3]);", "q":"陣列宣告與初始化：這段程式的執行結果為何？", "options":["0", "3", "亂數值", "編譯錯誤"], "answer":0, "explain":"未明確給定的元素自動補 0，arr[3]=0。"},
 {"id":"p062", "exam":"練習：陣列字串", "num":"練習第62題", "topic":"陣列索引", "lang":"c", "code":"int arr[] = {10, 20, 30, 40, 50};\nprintf(\"%d\", arr[2]);", "q":"陣列索引：這段程式的執行結果為何？", "options":["10", "20", "30", "40"], "answer":2, "explain":"arr[2] = 30。"},
 {"id":"p063", "exam":"練習：陣列字串", "num":"練習第63題", "topic":"陣列與迴圈", "lang":"c", "code":"int arr[] = {1, 2, 3, 4, 5};\nint sum = 0;\nfor (int i = 0; i < 5; i++) sum += arr[i];\nprintf(\"%d\", sum);", "q":"陣列與迴圈：這段程式的執行結果為何？", "options":["15", "10", "5", "20"], "answer":0, "explain":"1+2+3+4+5 = 15。"},
 {"id":"p064", "exam":"練習：陣列字串", "num":"練習第64題", "topic":"二維陣列", "lang":"c", "code":"int arr[2][3] = {{1,2,3},{4,5,6}};\nprintf(\"%d\", arr[1][2]);", "q":"二維陣列：這段程式的執行結果為何？", "options":["1", "4", "5", "6"], "answer":3, "explain":"arr[1][2] = 6。"},
 {"id":"p065", "exam":"練習：陣列字串", "num":"練習第65題", "topic":"二維陣列初始化", "lang":"c", "code":"int arr[2][3] = {1,2,3,4,5,6};\nprintf(\"%d\", arr[0][2]);", "q":"二維陣列初始化：這段程式的執行結果為何？", "options":["1", "2", "3", "4"], "answer":2, "explain":"一維初始值依序填入 [2][3]，arr[0][2] = 3。"},
 {"id":"p066", "exam":"練習：陣列字串", "num":"練習第66題", "topic":"二維陣列與迴圈", "lang":"c", "code":"int arr[2][2] = {{1,2},{3,4}};\nint sum = 0;\nfor (int i = 0; i < 2; i++)\n    for (int j = 0; j < 2; j++)\n        sum += arr[i][j];\nprintf(\"%d\", sum);", "q":"二維陣列與迴圈：這段程式的執行結果為何？", "options":["6", "10", "12", "15"], "answer":1, "explain":"四個元素相加 = 10。"},
 {"id":"p067", "exam":"練習：陣列字串", "num":"練習第67題", "topic":"字串讀取與輸出", "lang":"c", "code":"char s[10] = \"Hello\";\nprintf(\"%s\", s);", "q":"字串讀取與輸出：這段程式的執行結果為何？", "options":["Hello", "H", "Hello 後接亂碼", "編譯錯誤"], "answer":0, "explain":"char s[10]=\"Hello\" 其餘位元自動補 '\\0'，%s 遇 '\\0' 即停，印出 Hello（不會印到未用的空間）。"},
 {"id":"p068", "exam":"練習：陣列字串", "num":"練習第68題", "topic":"字元陣列與指標", "lang":"c", "code":"char s[] = \"Hello\";\nchar *p = s;\nprintf(\"%c\", p[1]);", "q":"字元陣列與指標：這段程式的執行結果為何？", "options":["H", "e", "l", "o"], "answer":1, "explain":"p 指向 s，p[1] 即 s[1] = 'e'。"},
 {"id":"p069", "exam":"練習：陣列字串", "num":"練習第69題", "topic":"字串長度 (strlen)", "lang":"c", "code":"#include <string.h>\nchar s[] = \"Hello World\";\nprintf(\"%lu\", strlen(s));", "q":"字串長度 (strlen)：這段程式的執行結果為何？", "options":["10", "11", "12", "13"], "answer":1, "explain":"\"Hello World\" 含空格共 11 個字元。"},
 {"id":"p070", "exam":"練習：陣列字串", "num":"練習第70題", "topic":"字串複製 (strcpy)", "lang":"c", "code":"#include <string.h>\nchar s1[10] = \"Hello\";\nchar s2[10];\nstrcpy(s2, s1);\nprintf(\"%s\", s2);", "q":"字串複製 (strcpy)：這段程式的執行結果為何？", "options":["Hello", "H", "編譯錯誤", "執行錯誤"], "answer":0, "explain":"strcpy 複製字串內容 → Hello。"},
 {"id":"p071", "exam":"練習：陣列字串", "num":"練習第71題", "topic":"字串串接 (strcat)", "lang":"c", "code":"#include <string.h>\nchar s1[20] = \"Hello\";\nchar s2[] = \" World\";\nstrcat(s1, s2);\nprintf(\"%s\", s1);", "q":"字串串接 (strcat)：這段程式的執行結果為何？", "options":["Hello", "World", "Hello World", "HelloWorld"], "answer":2, "explain":"strcat 串接兩字串 → Hello World。"},
 {"id":"p072", "exam":"練習：陣列字串", "num":"練習第72題", "topic":"字串比較 (strcmp)", "lang":"c", "code":"#include <string.h>\nchar s1[] = \"ABC\";\nchar s2[] = \"ABC\";\nif (strcmp(s1, s2) == 0) printf(\"Equal\");\nelse printf(\"Not Equal\");", "q":"字串比較 (strcmp)：這段程式的執行結果為何？", "options":["Equal", "Not Equal", "編譯錯誤", "執行錯誤"], "answer":0, "explain":"內容相同，strcmp 回 0 → Equal。"},
 {"id":"p073", "exam":"練習：陣列字串", "num":"練習第73題", "topic":"陣列越界", "lang":"c", "code":"int arr[5] = {1,2,3,4,5};\nprintf(\"%d\", arr[5]);", "q":"陣列越界：這段程式的執行結果為何？", "options":["0", "5", "亂數值", "編譯錯誤"], "answer":2, "explain":"arr[5] 已越界，讀到的是不確定值。"},
 {"id":"p074", "exam":"練習：陣列字串", "num":"練習第74題", "topic":"以索引陣列重新排列 (統測經典)", "lang":"c", "code":"char Name[6][10] = {\"Apple\", \"Banana\", \"Cherry\", \"Date\", \"Fig\", \"Grape\"};\nint Select[3] = {2, 0, 4};\nfor (int i = 0; i < 3; i++) {\n    printf(\"%s \", Name[Select[i]]);\n}", "q":"以索引陣列重新排列 (統測經典)：這段程式的執行結果為何？", "options":["Apple Banana Cherry", "Cherry Apple Fig", "Date Fig Grape", "Banana Date Apple"], "answer":1, "explain":"以 Select 索引重排輸出：Name[2]、Name[0]、Name[4] = Cherry Apple Fig。(原題陣列寬度需可容納最長字串)"},
 {"id":"p075", "exam":"練習：陣列字串", "num":"練習第75題", "topic":"字串反轉", "lang":"c", "code":"char s[] = \"Hello\";\nint len = strlen(s);\nfor (int i = 0; i < len / 2; i++) {\n    char temp = s[i];\n    s[i] = s[len - 1 - i];\n    s[len - 1 - i] = temp;\n}\nprintf(\"%s\", s);", "q":"字串反轉：這段程式的執行結果為何？", "options":["Hello", "olleH", "elloH", "H"], "answer":1, "explain":"前後字元對調反轉字串 → olleH。"},
 {"id":"p076", "exam":"練習：陣列字串", "num":"練習第76題", "topic":"gets 與 puts (僅供參考)", "lang":"c", "code":"char s[20];\ngets(s);\nputs(s);", "q":"這段程式碼的行為為下列何者？", "options":["讀取一行並輸出", "讀取到空格為止", "編譯錯誤", "執行錯誤"], "answer":0, "explain":"gets 讀入一整行、puts 將該行輸出（gets 已不建議使用）。"},
 {"id":"p077", "exam":"練習：陣列字串", "num":"練習第77題", "topic":"字串與數字轉換", "lang":"c", "code":"char s[] = \"123\";\nint a = atoi(s);\nprintf(\"%d\", a + 1);", "q":"字串與數字轉換：這段程式的執行結果為何？", "options":["1231", "124", "123", "編譯錯誤"], "answer":1, "explain":"atoi(\"123\")=123，+1=124。"},
 {"id":"p078", "exam":"練習：陣列字串", "num":"練習第78題", "topic":"字串與陣列", "lang":"c", "code":"char s[10] = \"Hello\";\ns[1] = 'a';\nprintf(\"%s\", s);", "q":"字串與陣列：這段程式的執行結果為何？", "options":["Hello", "Hallo", "H ello", "編譯錯誤"], "answer":1, "explain":"s[1] 改為 'a' → Hallo。"},
 {"id":"p079", "exam":"練習：陣列字串", "num":"練習第79題", "topic":"字串常數與指標", "lang":"c", "code":"char *s = \"Hello\";\ns[1] = 'a';  // 試圖修改\nprintf(\"%s\", s);", "q":"字串常數與指標：這段程式的執行結果為何？", "options":["Hallo", "Hello", "編譯錯誤", "執行錯誤 (Segmentation Fault)"], "answer":3, "explain":"字串字面常數不可修改，寫入造成執行錯誤（Segmentation Fault）。"},
 {"id":"p081", "exam":"練習：陣列字串", "num":"練習第81題", "topic":"二維字元陣列 (字串陣列)", "lang":"c", "code":"char names[3][10] = {\"Alice\", \"Bob\", \"Charlie\"};\nprintf(\"%c\", names[2][3]);", "q":"二維字元陣列 (字串陣列)：這段程式的執行結果為何？", "options":["r", "l", "i", "e"], "answer":0, "explain":"names[2] 為 \"Charlie\"，索引 3 是 'r'。"},
 {"id":"p082", "exam":"練習：陣列字串", "num":"練習第82題", "topic":"二維陣列列印", "lang":"c", "code":"int arr[2][2] = {1,2,3,4};\nfor (int i = 0; i < 2; i++) {\n    for (int j = 0; j < 2; j++) {\n        printf(\"%d\", arr[i][j]);\n    }\n}", "q":"二維陣列列印：這段程式的執行結果為何？", "options":["1234", "1324", "2143", "4321"], "answer":0, "explain":"逐列逐行印出 1 2 3 4 → 1234。"},
 {"id":"p083", "exam":"練習：陣列字串", "num":"練習第83題", "topic":"陣列求最大", "lang":"c", "code":"int arr[] = {5, 2, 8, 1, 3};\nint max = arr[0];\nfor (int i = 1; i < 5; i++)\n    if (arr[i] > max) max = arr[i];\nprintf(\"%d\", max);", "q":"陣列求最大：這段程式的執行結果為何？", "options":["5", "2", "8", "3"], "answer":2, "explain":"陣列最大值為 8。"},
 {"id":"p084", "exam":"練習：陣列字串", "num":"練習第84題", "topic":"陣列求最小", "lang":"c", "code":"int arr[] = {5, 2, 8, 1, 3};\nint min = arr[0];\nfor (int i = 1; i < 5; i++)\n    if (arr[i] < min) min = arr[i];\nprintf(\"%d\", min);", "q":"陣列求最小：這段程式的執行結果為何？", "options":["5", "2", "8", "1"], "answer":3, "explain":"陣列最小值為 1。"},
 {"id":"p085", "exam":"練習：陣列字串", "num":"練習第85題", "topic":"陣列反轉", "lang":"c", "code":"int arr[] = {1,2,3,4,5};\nint len = 5;\nfor (int i = 0; i < len/2; i++) {\n    int temp = arr[i];\n    arr[i] = arr[len-1-i];\n    arr[len-1-i] = temp;\n}\nprintf(\"%d\", arr[2]);", "q":"陣列反轉：這段程式的執行結果為何？", "options":["1", "2", "3", "4"], "answer":2, "explain":"反轉後正中央元素不變，arr[2]=3。"},
 {"id":"p086", "exam":"練習：陣列字串", "num":"練習第86題", "topic":"陣列平移", "lang":"c", "code":"int arr[] = {1,2,3,4,5};\nint temp = arr[0];\nfor (int i = 0; i < 4; i++) arr[i] = arr[i+1];\narr[4] = temp;\nprintf(\"%d\", arr[2]);", "q":"陣列平移：這段程式的執行結果為何？", "options":["1", "2", "4", "5"], "answer":2, "explain":"左移一位後 arr={2,3,4,5,1}，arr[2]=4。"},
 {"id":"p087", "exam":"練習：陣列字串", "num":"練習第87題", "topic":"二維陣列轉置", "lang":"c", "code":"int arr[2][3] = {{1,2,3},{4,5,6}};\nint trans[3][2];\nfor (int i = 0; i < 2; i++)\n    for (int j = 0; j < 3; j++)\n        trans[j][i] = arr[i][j];\nprintf(\"%d\", trans[1][0]);", "q":"二維陣列轉置：這段程式的執行結果為何？", "options":["1", "2", "4", "5"], "answer":1, "explain":"轉置：trans[1][0]=arr[0][1]=2。"},
 {"id":"p088", "exam":"練習：陣列字串", "num":"練習第88題", "topic":"二維陣列對角線", "lang":"c", "code":"int arr[3][3] = {{1,2,3},{4,5,6},{7,8,9}};\nint sum = 0;\nfor (int i = 0; i < 3; i++) sum += arr[i][i];\nprintf(\"%d\", sum);", "q":"二維陣列對角線：這段程式的執行結果為何？", "options":["12", "15", "18", "9"], "answer":1, "explain":"主對角線 1+5+9 = 15。"},
 {"id":"p089", "exam":"練習：陣列字串", "num":"練習第89題", "topic":"二維陣列反對角線", "lang":"c", "code":"int arr[3][3] = {{1,2,3},{4,5,6},{7,8,9}};\nint sum = 0;\nfor (int i = 0; i < 3; i++) sum += arr[i][2-i];\nprintf(\"%d\", sum);", "q":"二維陣列反對角線：這段程式的執行結果為何？", "options":["12", "15", "18", "9"], "answer":1, "explain":"副對角線 3+5+7 = 15。"},
 {"id":"p090", "exam":"練習：陣列字串", "num":"練習第90題", "topic":"字串與指標陣列", "lang":"c", "code":"char *names[] = {\"Alice\", \"Bob\", \"Charlie\"};\nprintf(\"%c\", names[1][1]);", "q":"字串與指標陣列：這段程式的執行結果為何？", "options":["l", "o", "b", "i"], "answer":1, "explain":"names[1] 為 \"Bob\"，索引 1 是 'o'。"},
 {"id":"p091", "exam":"練習：指標記憶體", "num":"練習第91題", "topic":"指標基本", "lang":"c", "code":"int a = 10;\nint *p = &a;\nprintf(\"%d\", *p);", "q":"指標基本：這段程式的執行結果為何？", "options":["10", "&a", "0", "亂數值"], "answer":0, "explain":"*p 解參考取出 a 的值 10。"},
 {"id":"p092", "exam":"練習：指標記憶體", "num":"練習第92題", "topic":"指標與地址", "lang":"c", "code":"int a = 10;\nint *p = &a;\nprintf(\"%p\", p);", "q":"指標與地址：這段程式的執行結果為何？", "options":["10", "a 的記憶體位址", "0", "亂數值"], "answer":1, "explain":"%p 印出指標所存的記憶體位址。"},
 {"id":"p093", "exam":"練習：指標記憶體", "num":"練習第93題", "topic":"指標修改值", "lang":"c", "code":"int a = 10;\nint *p = &a;\n*p = 20;\nprintf(\"%d\", a);", "q":"指標修改值：這段程式的執行結果為何？", "options":["10", "20", "0", "亂數值"], "answer":1, "explain":"*p=20 透過指標改到 a → 20。"},
 {"id":"p094", "exam":"練習：指標記憶體", "num":"練習第94題", "topic":"指標與陣列", "lang":"c", "code":"int arr[] = {1, 2, 3};\nint *p = arr;\nprintf(\"%d\", p[1]);", "q":"指標與陣列：這段程式的執行結果為何？", "options":["1", "2", "3", "0"], "answer":1, "explain":"陣列名即首元素位址，p[1]=2。"},
 {"id":"p095", "exam":"練習：指標記憶體", "num":"練習第95題", "topic":"指標算術", "lang":"c", "code":"int arr[] = {10, 20, 30, 40};\nint *p = arr + 2;\nprintf(\"%d\", *p);", "q":"指標算術：這段程式的執行結果為何？", "options":["10", "20", "30", "40"], "answer":2, "explain":"arr+2 指向第 3 個元素，*p=30。"},
 {"id":"p096", "exam":"練習：指標記憶體", "num":"練習第96題", "topic":"指標位移", "lang":"c", "code":"int arr[] = {10, 20, 30, 40};\nint *p = arr;\nprintf(\"%d\", *(p + 3));", "q":"指標位移：這段程式的執行結果為何？", "options":["10", "20", "30", "40"], "answer":3, "explain":"*(p+3) = arr[3] = 40。"},
 {"id":"p097", "exam":"練習：指標記憶體", "num":"練習第97題", "topic":"指標與字串", "lang":"c", "code":"char s[] = \"Hello\";\nchar *p = s;\np++;\nprintf(\"%c\", *p);", "q":"指標與字串：這段程式的執行結果為何？", "options":["H", "e", "l", "o"], "answer":1, "explain":"p++ 後指向 'e'。"},
 {"id":"p098", "exam":"練習：指標記憶體", "num":"練習第98題", "topic":"指標與字串 (輸出)", "lang":"c", "code":"char s[] = \"Hello\";\nchar *p = s + 1;\nprintf(\"%s\", p);", "q":"指標與字串 (輸出)：這段程式的執行結果為何？", "options":["Hello", "ello", "llo", "o"], "answer":1, "explain":"從 s+1 開始印 → ello。"},
 {"id":"p099", "exam":"練習：指標記憶體", "num":"練習第99題", "topic":"雙重指標", "lang":"c", "code":"int a = 10;\nint *p = &a;\nint **q = &p;\nprintf(\"%d\", **q);", "q":"雙重指標：這段程式的執行結果為何？", "options":["10", "&a", "*p", "0"], "answer":0, "explain":"**q 兩次解參考 = 10。"},
 {"id":"p100", "exam":"練習：指標記憶體", "num":"練習第100題", "topic":"指標與函式 (傳址)", "lang":"c", "code":"void swap(int *a, int *b) {\n    int temp = *a;\n    *a = *b;\n    *b = temp;\n}\nint main() {\n    int x = 5, y = 10;\n    swap(&x, &y);\n    printf(\"%d %d\", x, y);\n    return 0;\n}", "q":"指標與函式 (傳址)：這段程式的執行結果為何？", "options":["5 10", "10 5", "0 0", "編譯錯誤"], "answer":1, "explain":"傳址 swap 真正交換兩值 → 10 5。"},
 {"id":"p101", "exam":"練習：指標記憶體", "num":"練習第101題", "topic":"指標與陣列 (sizeof)", "lang":"c", "code":"int arr[5] = {1,2,3,4,5};\nint *p = arr;\nprintf(\"%lu %lu\", sizeof(arr), sizeof(p));", "q":"指標與陣列 (sizeof)：這段程式的執行結果為何？", "options":["20 8", "4 8", "20 4", "8 8"], "answer":0, "explain":"陣列佔 5×4=20 bytes，指標在 64 位元系統佔 8 bytes。"},
 {"id":"p102", "exam":"練習：指標記憶體", "num":"練習第102題", "topic":"空指標 (NULL)", "lang":"c", "code":"int *p = NULL;\nif (p == NULL) printf(\"NULL\");\nelse printf(\"Not NULL\");", "q":"空指標 (NULL)：這段程式的執行結果為何？", "options":["NULL", "Not NULL", "編譯錯誤", "執行錯誤"], "answer":0, "explain":"p 為 NULL，條件成立印 NULL。"},
 {"id":"p103", "exam":"練習：指標記憶體", "num":"練習第103題", "topic":"指標與常數 (const)", "lang":"c", "code":"int a = 5;\nconst int *p = &a;\n*p = 10; // 試圖修改\nprintf(\"%d\", a);", "q":"指標與常數 (const)：這段程式的執行結果為何？", "options":["5", "10", "編譯錯誤", "執行錯誤"], "answer":2, "explain":"const int* 不可透過指標改值，編譯錯誤。"},
 {"id":"p104", "exam":"練習：指標記憶體", "num":"練習第104題", "topic":"常數指標", "lang":"c", "code":"int a = 5, b = 10;\nint * const p = &a;\np = &b; // 試圖修改指標指向\nprintf(\"%d\", *p);", "q":"常數指標：這段程式的執行結果為何？", "options":["5", "10", "編譯錯誤", "執行錯誤"], "answer":2, "explain":"int* const 指標本身不可改變指向，編譯錯誤。"},
 {"id":"p105", "exam":"練習：指標記憶體", "num":"練習第105題", "topic":"函式指標", "lang":"c", "code":"int add(int a, int b) { return a + b; }\nint main() {\n    int (*p)(int, int) = add;\n    printf(\"%d\", p(3, 4));\n    return 0;\n}", "q":"函式指標：這段程式的執行結果為何？", "options":["7", "12", "3", "編譯錯誤"], "answer":0, "explain":"以函式指標呼叫 add(3,4)=7。"},
 {"id":"p106", "exam":"練習：指標記憶體", "num":"練習第106題", "topic":"void 指標", "lang":"c", "code":"int a = 5;\nvoid *p = &a;\nprintf(\"%d\", *(int *)p);", "q":"void 指標：這段程式的執行結果為何？", "options":["5", "&a", "編譯錯誤", "執行錯誤"], "answer":0, "explain":"void* 轉回 int* 再解參考 = 5。"},
 {"id":"p107", "exam":"練習：指標記憶體", "num":"練習第107題", "topic":"指標比較", "lang":"c", "code":"int arr[] = {1,2,3,4,5};\nint *p1 = &arr[0];\nint *p2 = &arr[2];\nif (p1 < p2) printf(\"p1 < p2\");\nelse printf(\"p1 >= p2\");", "q":"指標比較：這段程式的執行結果為何？", "options":["p1 < p2", "p1 >= p2", "編譯錯誤", "執行錯誤"], "answer":0, "explain":"p1 的位址小於 p2 → p1 < p2 成立。"},
 {"id":"p108", "exam":"練習：指標記憶體", "num":"練習第108題", "topic":"指標與二維陣列", "lang":"c", "code":"int arr[2][3] = {{1,2,3},{4,5,6}};\nint *p = &arr[0][0];\nprintf(\"%d\", *(p + 3));", "q":"指標與二維陣列：這段程式的執行結果為何？", "options":["1", "2", "3", "4"], "answer":3, "explain":"二維陣列記憶體連續，*(p+3)=4。"},
 {"id":"p109", "exam":"練習：指標記憶體", "num":"練習第109題", "topic":"指標與二維陣列 (行指標)", "lang":"c", "code":"int arr[2][3] = {{1,2,3},{4,5,6}};\nint (*p)[3] = arr;\nprintf(\"%d\", p[1][1]);", "q":"指標與二維陣列 (行指標)：這段程式的執行結果為何？", "options":["1", "2", "4", "5"], "answer":3, "explain":"行指標 p[1][1]=5。"},
 {"id":"p110", "exam":"練習：指標記憶體", "num":"練習第110題", "topic":"指標陣列", "lang":"c", "code":"int a=1, b=2, c=3;\nint *arr[3] = {&a, &b, &c};\nprintf(\"%d\", *arr[1]);", "q":"指標陣列：這段程式的執行結果為何？", "options":["1", "2", "3", "0"], "answer":1, "explain":"*arr[1] 取出 b 的值 2。"},
 {"id":"p111", "exam":"練習：指標記憶體", "num":"練習第111題", "topic":"動態配置 (malloc)", "lang":"c", "code":"#include <stdlib.h>\nint *p = (int *)malloc(sizeof(int));\n*p = 10;\nprintf(\"%d\", *p);\nfree(p);", "q":"動態配置 (malloc)：這段程式的執行結果為何？", "options":["10", "0", "亂數值", "編譯錯誤"], "answer":0, "explain":"malloc 配置後 *p=10。"},
 {"id":"p112", "exam":"練習：指標記憶體", "num":"練習第112題", "topic":"動態配置陣列", "lang":"c", "code":"#include <stdlib.h>\nint *p = (int *)malloc(5 * sizeof(int));\np[0] = 1;\np[1] = 2;\nprintf(\"%d\", p[0] + p[1]);\nfree(p);", "q":"動態配置陣列：這段程式的執行結果為何？", "options":["1", "2", "3", "0"], "answer":2, "explain":"p[0]+p[1] = 1+2 = 3。"},
 {"id":"p113", "exam":"練習：指標記憶體", "num":"練習第113題", "topic":"calloc 與 malloc", "lang":"c", "code":"#include <stdlib.h>\nint *p = (int *)calloc(5, sizeof(int));\nprintf(\"%d\", p[2]);\nfree(p);", "q":"calloc 與 malloc：這段程式的執行結果為何？", "options":["0", "亂數值", "編譯錯誤", "執行錯誤"], "answer":0, "explain":"calloc 會把記憶體清為 0，p[2]=0。"},
 {"id":"p114", "exam":"練習：指標記憶體", "num":"練習第114題", "topic":"realloc", "lang":"c", "code":"#include <stdlib.h>\nint *p = (int *)malloc(2 * sizeof(int));\np[0] = 1; p[1] = 2;\np = (int *)realloc(p, 4 * sizeof(int));\np[2] = 3;\nprintf(\"%d\", p[2]);\nfree(p);", "q":"realloc：這段程式的執行結果為何？", "options":["1", "2", "3", "0"], "answer":2, "explain":"realloc 保留原資料並擴充空間，p[2]=3。"},
 {"id":"p115", "exam":"練習：指標記憶體", "num":"練習第115題", "topic":"記憶體洩漏", "lang":"c", "code":"#include <stdlib.h>\nvoid func() {\n    int *p = (int *)malloc(sizeof(int));\n    *p = 5;\n    // 沒有 free(p)\n}\nint main() {\n    func();\n    return 0;\n}", "q":"執行這段程式會發生下列何種情況？", "options":["程式正常結束", "記憶體洩漏", "編譯錯誤", "執行錯誤"], "answer":1, "explain":"配置後未 free，造成記憶體洩漏。"},
 {"id":"p116", "exam":"練習：指標記憶體", "num":"練習第116題", "topic":"指標與結構", "lang":"c", "code":"struct Point {\n    int x;\n    int y;\n};\nstruct Point p1 = {10, 20};\nstruct Point *p = &p1;\nprintf(\"%d\", p->y);", "q":"指標與結構：這段程式的執行結果為何？", "options":["10", "20", "0", "編譯錯誤"], "answer":1, "explain":"p->y 存取結構成員 = 20。"},
 {"id":"p117", "exam":"練習：指標記憶體", "num":"練習第117題", "topic":"指標與結構 (修改)", "lang":"c", "code":"struct Point {\n    int x;\n    int y;\n};\nstruct Point p1 = {10, 20};\nstruct Point *p = &p1;\np->x = 30;\nprintf(\"%d\", p1.x);", "q":"指標與結構 (修改)：這段程式的執行結果為何？", "options":["10", "20", "30", "0"], "answer":2, "explain":"p->x=30 改到 p1.x。"},
 {"id":"p118", "exam":"練習：指標記憶體", "num":"練習第118題", "topic":"指標與結構陣列", "lang":"c", "code":"struct Point {\n    int x;\n    int y;\n};\nstruct Point pts[2] = {{1,2}, {3,4}};\nstruct Point *p = pts;\nprintf(\"%d\", p[1].x);", "q":"指標與結構陣列：這段程式的執行結果為何？", "options":["1", "2", "3", "4"], "answer":2, "explain":"p[1].x 為第 2 個結構的 x = 3。"},
 {"id":"p119", "exam":"練習：指標記憶體", "num":"練習第119題", "topic":"雙重指標與函式", "lang":"c", "code":"void allocate(int **p) {\n    *p = (int *)malloc(sizeof(int));\n    **p = 10;\n}\nint main() {\n    int *p;\n    allocate(&p);\n    printf(\"%d\", *p);\n    free(p);\n    return 0;\n}", "q":"雙重指標與函式：這段程式的執行結果為何？", "options":["10", "0", "亂數值", "編譯錯誤"], "answer":0, "explain":"雙重指標讓函式為呼叫端配置記憶體，*p=10。"},
 {"id":"p120", "exam":"練習：指標記憶體", "num":"練習第120題", "topic":"指標與字串陣列", "lang":"c", "code":"char *s[] = {\"Apple\", \"Banana\", \"Cherry\"};\nchar **p = s;\nprintf(\"%c\", p[1][2]);", "q":"指標與字串陣列：這段程式的執行結果為何？", "options":["p", "n", "e", "r"], "answer":1, "explain":"p[1] 為 \"Banana\"，索引 2 是 'n'。"},
 {"id":"p121", "exam":"練習：函式遞迴", "num":"練習第121題", "topic":"函式基本", "lang":"c", "code":"int add(int a, int b) {\n    return a + b;\n}\nint main() {\n    int result = add(5, 3);\n    printf(\"%d\", result);\n    return 0;\n}", "q":"函式基本：這段程式的執行結果為何？", "options":["5", "3", "8", "2"], "answer":2, "explain":"add(5,3)=8。"},
 {"id":"p122", "exam":"練習：函式遞迴", "num":"練習第122題", "topic":"函式原型", "lang":"c", "code":"int add(int, int);\nint main() {\n    printf(\"%d\", add(2, 3));\n    return 0;\n}\nint add(int a, int b) { return a + b; }", "q":"函式原型：這段程式的執行結果為何？", "options":["2", "3", "5", "編譯錯誤"], "answer":2, "explain":"先宣告函式原型、後定義，add(2,3)=5。"},
 {"id":"p123", "exam":"練習：函式遞迴", "num":"練習第123題", "topic":"傳值呼叫", "lang":"c", "code":"void func(int a) {\n    a = 100;\n}\nint main() {\n    int x = 10;\n    func(x);\n    printf(\"%d\", x);\n    return 0;\n}", "q":"傳值呼叫：這段程式的執行結果為何？", "options":["10", "100", "0", "編譯錯誤"], "answer":0, "explain":"傳值呼叫不改變原變數，x 仍為 10。"},
 {"id":"p124", "exam":"練習：函式遞迴", "num":"練習第124題", "topic":"傳址呼叫", "lang":"c", "code":"void func(int *a) {\n    *a = 100;\n}\nint main() {\n    int x = 10;\n    func(&x);\n    printf(\"%d\", x);\n    return 0;\n}", "q":"傳址呼叫：這段程式的執行結果為何？", "options":["10", "100", "0", "編譯錯誤"], "answer":1, "explain":"傳址呼叫改到原變數，x=100。"},
 {"id":"p125", "exam":"練習：函式遞迴", "num":"練習第125題", "topic":"遞迴 (階乘)", "lang":"c", "code":"int fact(int n) {\n    if (n <= 1) return 1;\n    return n * fact(n - 1);\n}\nint main() {\n    printf(\"%d\", fact(5));\n    return 0;\n}", "q":"遞迴 (階乘)：這段程式的執行結果為何？", "options":["120", "24", "5", "1"], "answer":0, "explain":"5! = 120。"},
 {"id":"p126", "exam":"練習：函式遞迴", "num":"練習第126題", "topic":"遞迴 (費氏數列)", "lang":"c", "code":"int fib(int n) {\n    if (n <= 1) return n;\n    return fib(n-1) + fib(n-2);\n}\nint main() {\n    printf(\"%d\", fib(6));\n    return 0;\n}", "q":"遞迴 (費氏數列)：這段程式的執行結果為何？", "options":["5", "8", "13", "21"], "answer":1, "explain":"fib 序列 0 1 1 2 3 5 8，fib(6)=8。"},
 {"id":"p127", "exam":"練習：函式遞迴", "num":"練習第127題", "topic":"遞迴 (GCD)", "lang":"c", "code":"int gcd(int a, int b) {\n    if (b == 0) return a;\n    return gcd(b, a % b);\n}\nint main() {\n    printf(\"%d\", gcd(30, 42));\n    return 0;\n}", "q":"遞迴 (GCD)：這段程式的執行結果為何？", "options":["6", "12", "30", "42"], "answer":0, "explain":"gcd(30,42)=6。"},
 {"id":"p128", "exam":"練習：函式遞迴", "num":"練習第128題", "topic":"靜態變數在函式中", "lang":"c", "code":"void count() {\n    static int c = 0;\n    c++;\n    printf(\"%d \", c);\n}\nint main() {\n    count();\n    count();\n    return 0;\n}", "q":"靜態變數在函式中：這段程式的執行結果為何？", "options":["1 1", "1 2", "0 1", "2 2"], "answer":1, "explain":"static 保留值，印 1 2。"},
 {"id":"p129", "exam":"練習：函式遞迴", "num":"練習第129題", "topic":"全域變數與函式", "lang":"c", "code":"int a = 5;\nvoid func() {\n    a = 10;\n}\nint main() {\n    func();\n    printf(\"%d\", a);\n    return 0;\n}", "q":"全域變數與函式：這段程式的執行結果為何？", "options":["5", "10", "0", "編譯錯誤"], "answer":1, "explain":"全域變數被函式改為 10。"},
 {"id":"p130", "exam":"練習：函式遞迴", "num":"練習第130題", "topic":"變數遮蔽 (shadow)", "lang":"c", "code":"int a = 5;\nvoid func() {\n    int a = 10;\n    a++;\n}\nint main() {\n    func();\n    printf(\"%d\", a);\n    return 0;\n}", "q":"變數遮蔽 (shadow)：這段程式的執行結果為何？", "options":["5", "6", "10", "11"], "answer":0, "explain":"func 內為區域 a，不影響全域，印 5。"},
 {"id":"p131", "exam":"練習：函式遞迴", "num":"練習第131題", "topic":"遞迴 (河內塔)", "lang":"c", "code":"void hanoi(int n, char from, char to, char aux) {\n    if (n == 1) { printf(\"Move disk 1 from %c to %c\\n\", from, to); return; }\n    hanoi(n-1, from, aux, to);\n    printf(\"Move disk %d from %c to %c\\n\", n, from, to);\n    hanoi(n-1, aux, to, from);\n}", "q":"下列關於這段程式碼的敘述，何者正確？", "options":["遞迴函式", "無窮迴圈", "編譯錯誤", "執行錯誤"], "answer":0, "explain":"hanoi 為一個遞迴函式定義（會自我呼叫，有終止條件）。"},
 {"id":"p132", "exam":"練習：函式遞迴", "num":"練習第132題", "topic":"函式回傳陣列 (錯誤示範)", "lang":"c", "code":"int* getArray() {\n    int arr[3] = {1,2,3};\n    return arr;\n}\nint main() {\n    int *p = getArray();\n    printf(\"%d\", p[0]);\n    return 0;\n}", "q":"這段程式的執行結果為何？", "options":["1", "0", "編譯錯誤", "執行錯誤 (回傳區域變數位址)"], "answer":3, "explain":"回傳區域陣列位址，函式結束後該記憶體已失效（未定義行為）。"},
 {"id":"p133", "exam":"練習：函式遞迴", "num":"練習第133題", "topic":"函式回傳靜態陣列", "lang":"c", "code":"int* getArray() {\n    static int arr[3] = {1,2,3};\n    return arr;\n}\nint main() {\n    int *p = getArray();\n    printf(\"%d\", p[0]);\n    return 0;\n}", "q":"函式回傳靜態陣列：這段程式的執行結果為何？", "options":["1", "0", "編譯錯誤", "執行錯誤"], "answer":0, "explain":"static 陣列生命週期延續到程式結束，p[0]=1。"},
 {"id":"p134", "exam":"練習：函式遞迴", "num":"練習第134題", "topic":"函式指標作為參數", "lang":"c", "code":"int add(int a, int b) { return a + b; }\nint apply(int (*f)(int, int), int a, int b) {\n    return f(a, b);\n}\nint main() {\n    printf(\"%d\", apply(add, 2, 3));\n    return 0;\n}", "q":"函式指標作為參數：這段程式的執行結果為何？", "options":["2", "3", "5", "0"], "answer":2, "explain":"apply 透過函式指標呼叫 add(2,3)=5。"},
 {"id":"p135", "exam":"練習：函式遞迴", "num":"練習第135題", "topic":"遞迴與全域變數", "lang":"c", "code":"int count = 0;\nvoid func(int n) {\n    count++;\n    if (n <= 0) return;\n    func(n-1);\n}\nint main() {\n    func(5);\n    printf(\"%d\", count);\n    return 0;\n}", "q":"遞迴與全域變數：這段程式的執行結果為何？", "options":["5", "6", "1", "0"], "answer":1, "explain":"func 共被呼叫 6 次（n=5..0 各一次），count=6。"},
 {"id":"p136", "exam":"練習：函式遞迴", "num":"練習第136題", "topic":"遞迴 (Power)", "lang":"c", "code":"int power(int base, int exp) {\n    if (exp == 0) return 1;\n    return base * power(base, exp - 1);\n}\nint main() {\n    printf(\"%d\", power(2, 3));\n    return 0;\n}", "q":"遞迴 (Power)：這段程式的執行結果為何？", "options":["6", "8", "2", "0"], "answer":1, "explain":"power(2,3)=8。"},
 {"id":"p137", "exam":"練習：函式遞迴", "num":"練習第137題", "topic":"函式預設參數 (C不支援)", "lang":"c", "code":"void func(int a = 5) {\n    printf(\"%d\", a);\n}\nint main() {\n    func(10);\n    return 0;\n}", "q":"函式預設參數 (C不支援)：這段程式的執行結果為何？", "options":["10", "5", "編譯錯誤", "執行錯誤"], "answer":2, "explain":"C 語言不支援函式預設參數，編譯錯誤。"},
 {"id":"p138", "exam":"練習：函式遞迴", "num":"練習第138題", "topic":"內聯函式 (inline)", "lang":"c", "code":"inline int add(int a, int b) { return a + b; }\nint main() {\n    printf(\"%d\", add(2, 3));\n    return 0;\n}", "q":"內聯函式 (inline)：這段程式的執行結果為何？", "options":["5", "2", "3", "編譯錯誤"], "answer":0, "explain":"inline 只是給編譯器的最佳化提示，呼叫照常，add(2,3)=5。"},
 {"id":"p139", "exam":"練習：函式遞迴", "num":"練習第139題", "topic":"遞迴 (GCD) 追蹤", "lang":"c", "code":"int gcd(int a, int b) {\n    if (b == 0) return a;\n    return gcd(b, a % b);\n}\nint main() {\n    printf(\"%d\", gcd(48, 18));\n    return 0;\n}", "q":"遞迴 (GCD) 追蹤：這段程式的執行結果為何？", "options":["6", "12", "18", "48"], "answer":0, "explain":"gcd(48,18)=6。"},
 {"id":"p140", "exam":"練習：函式遞迴", "num":"練習第140題", "topic":"遞迴 (字串反轉)", "lang":"c", "code":"void reverse(char *s) {\n    if (*s == '\\0') return;\n    reverse(s + 1);\n    printf(\"%c\", *s);\n}\nint main() {\n    char s[] = \"ABC\";\n    reverse(s);\n    return 0;\n}", "q":"遞迴 (字串反轉)：這段程式的執行結果為何？", "options":["ABC", "CBA", "A", "B"], "answer":1, "explain":"遞迴先到字串結尾再回程印出，反轉為 CBA。"},
 {"id":"p141", "exam":"練習：函式遞迴", "num":"練習第141題", "topic":"變數生命週期", "lang":"c", "code":"int* func() {\n    int a = 10;\n    return &a;\n}\nint main() {\n    int *p = func();\n    printf(\"%d\", *p);\n    return 0;\n}", "q":"這段程式的執行結果為何？", "options":["10", "0", "編譯錯誤", "未定義行為"], "answer":3, "explain":"回傳區域變數位址，離開函式後失效（未定義行為）。"},
 {"id":"p142", "exam":"練習：函式遞迴", "num":"練習第142題", "topic":"遞迴 (樹)", "lang":"c", "code":"int tree(int n) {\n    if (n == 0) return 0;\n    return n + tree(n/2);\n}\nint main() {\n    printf(\"%d\", tree(10));\n    return 0;\n}", "q":"遞迴 (樹)：這段程式的執行結果為何？", "options":["15", "18", "10", "0"], "answer":1, "explain":"10+5+2+1+0 = 18。"},
 {"id":"p143", "exam":"練習：函式遞迴", "num":"練習第143題", "topic":"函式與陣列", "lang":"c", "code":"int sum(int arr[], int n) {\n    int s = 0;\n    for (int i = 0; i < n; i++) s += arr[i];\n    return s;\n}\nint main() {\n    int arr[] = {1,2,3,4,5};\n    printf(\"%d\", sum(arr, 5));\n    return 0;\n}", "q":"函式與陣列：這段程式的執行結果為何？", "options":["10", "15", "5", "20"], "answer":1, "explain":"1+2+3+4+5 = 15。"},
 {"id":"p144", "exam":"練習：函式遞迴", "num":"練習第144題", "topic":"遞迴 (Pow) 優化", "lang":"c", "code":"int power(int base, int exp) {\n    if (exp == 0) return 1;\n    if (exp % 2 == 0) return power(base * base, exp/2);\n    return base * power(base, exp-1);\n}\nint main() {\n    printf(\"%d\", power(2, 5));\n    return 0;\n}", "q":"遞迴 (Pow) 優化：這段程式的執行結果為何？", "options":["16", "32", "8", "64"], "answer":1, "explain":"快速冪：power(2,5)=32。"},
 {"id":"p145", "exam":"練習：函式遞迴", "num":"練習第145題", "topic":"函式與二維陣列", "lang":"c", "code":"void print(int arr[][3], int rows) {\n    for (int i = 0; i < rows; i++) {\n        for (int j = 0; j < 3; j++) {\n            printf(\"%d\", arr[i][j]);\n        }\n    }\n}\nint main() {\n    int arr[2][3] = {{1,2,3},{4,5,6}};\n    print(arr, 2);\n    return 0;\n}", "q":"函式與二維陣列：這段程式的執行結果為何？", "options":["123456", "142536", "123", "456"], "answer":0, "explain":"逐元素印出 1 2 3 4 5 6。"},
 {"id":"p146", "exam":"練習：函式遞迴", "num":"練習第146題", "topic":"遞迴 (組合數 C)", "lang":"c", "code":"int C(int n, int k) {\n    if (k == 0 || k == n) return 1;\n    return C(n-1, k-1) + C(n-1, k);\n}\nint main() {\n    printf(\"%d\", C(5, 2));\n    return 0;\n}", "q":"遞迴 (組合數 C)：這段程式的執行結果為何？", "options":["5", "10", "15", "20"], "answer":1, "explain":"C(5,2)=10。"},
 {"id":"p147", "exam":"練習：函式遞迴", "num":"練習第147題", "topic":"函式與 const", "lang":"c", "code":"void func(const int *p) {\n    // *p = 10; // 不可修改\n}\nint main() {\n    int a = 5;\n    func(&a);\n    printf(\"%d\", a);\n    return 0;\n}", "q":"函式與 const：這段程式的執行結果為何？", "options":["5", "10", "編譯錯誤", "執行錯誤"], "answer":0, "explain":"const 參數不可改，且函式未動到 a，仍為 5。"},
 {"id":"p148", "exam":"練習：函式遞迴", "num":"練習第148題", "topic":"遞迴 (數位和)", "lang":"c", "code":"int sumDigits(int n) {\n    if (n == 0) return 0;\n    return n % 10 + sumDigits(n / 10);\n}\nint main() {\n    printf(\"%d\", sumDigits(123));\n    return 0;\n}", "q":"遞迴 (數位和)：這段程式的執行結果為何？", "options":["6", "3", "1", "0"], "answer":0, "explain":"數字和 1+2+3 = 6。"},
 {"id":"p149", "exam":"練習：函式遞迴", "num":"練習第149題", "topic":"遞迴 (判斷回文)", "lang":"c", "code":"int palindrome(char s[], int l, int r) {\n    if (l >= r) return 1;\n    if (s[l] != s[r]) return 0;\n    return palindrome(s, l+1, r-1);\n}\nint main() {\n    char s[] = \"abba\";\n    printf(\"%d\", palindrome(s, 0, 3));\n    return 0;\n}", "q":"遞迴 (判斷回文)：這段程式的執行結果為何？", "options":["0", "1", "2", "編譯錯誤"], "answer":1, "explain":"\"abba\" 為回文，回傳 1。"},
 {"id":"p150", "exam":"練習：函式遞迴", "num":"練習第150題", "topic":"遞迴 (樹葉數量)", "lang":"c", "code":"int leaf(int n) {\n    if (n == 1) return 1;\n    if (n % 2 == 0) return leaf(n/2);\n    return leaf(n-1) + leaf(n+1);\n}\nint main() {\n    printf(\"%d\", leaf(5));\n    return 0;\n}", "q":"遞迴 (樹葉數量)：這段程式的執行結果為何？", "options":["1", "2", "3", "4"], "answer":2, "explain":"leaf(5)=leaf(4)+leaf(6)=1+2=3。"},
 {"id":"p151", "exam":"練習：結構類別", "num":"練習第151題", "topic":"結構基本", "lang":"c", "code":"struct Student {\n    char name[20];\n    int age;\n};\nint main() {\n    struct Student s1 = {\"Alice\", 20};\n    printf(\"%d\", s1.age);\n    return 0;\n}", "q":"結構基本：這段程式的執行結果為何？", "options":["20", "Alice", "0", "編譯錯誤"], "answer":0, "explain":"s1.age = 20。"},
 {"id":"p152", "exam":"練習：結構類別", "num":"練習第152題", "topic":"結構與指標", "lang":"c", "code":"struct Point {\n    int x;\n    int y;\n};\nint main() {\n    struct Point p = {10, 20};\n    struct Point *ptr = &p;\n    printf(\"%d\", ptr->x);\n    return 0;\n}", "q":"結構與指標：這段程式的執行結果為何？", "options":["10", "20", "0", "編譯錯誤"], "answer":0, "explain":"ptr->x = 10。"},
 {"id":"p153", "exam":"練習：結構類別", "num":"練習第153題", "topic":"結構巢狀", "lang":"c", "code":"struct Point {\n    int x;\n    int y;\n};\nstruct Rectangle {\n    struct Point topLeft;\n    struct Point bottomRight;\n};\nint main() {\n    struct Rectangle rect = {{0,0}, {10,10}};\n    printf(\"%d\", rect.bottomRight.x);\n    return 0;\n}", "q":"結構巢狀：這段程式的執行結果為何？", "options":["0", "10", "20", "編譯錯誤"], "answer":1, "explain":"rect.bottomRight.x = 10。"},
 {"id":"p154", "exam":"練習：結構類別", "num":"練習第154題", "topic":"結構陣列", "lang":"c", "code":"struct Student {\n    char name[20];\n    int score;\n};\nint main() {\n    struct Student class[2] = {{\"Alice\", 90}, {\"Bob\", 85}};\n    printf(\"%d\", class[1].score);\n    return 0;\n}", "q":"結構陣列：這段程式的執行結果為何？", "options":["90", "85", "0", "編譯錯誤"], "answer":1, "explain":"class[1].score = 85。"},
 {"id":"p155", "exam":"練習：結構類別", "num":"練習第155題", "topic":"結構與函式 (傳值)", "lang":"c", "code":"struct Student {\n    char name[20];\n    int score;\n};\nvoid setScore(struct Student s) {\n    s.score = 100;\n}\nint main() {\n    struct Student s1 = {\"Alice\", 90};\n    setScore(s1);\n    printf(\"%d\", s1.score);\n    return 0;\n}", "q":"結構與函式 (傳值)：這段程式的執行結果為何？", "options":["90", "100", "0", "編譯錯誤"], "answer":0, "explain":"結構以傳值傳入，函式內的修改不影響原物件，仍 90。"},
 {"id":"p156", "exam":"練習：結構類別", "num":"練習第156題", "topic":"結構與函式 (傳址)", "lang":"c", "code":"struct Student {\n    char name[20];\n    int score;\n};\nvoid setScore(struct Student *s) {\n    s->score = 100;\n}\nint main() {\n    struct Student s1 = {\"Alice\", 90};\n    setScore(&s1);\n    printf(\"%d\", s1.score);\n    return 0;\n}", "q":"結構與函式 (傳址)：這段程式的執行結果為何？", "options":["90", "100", "0", "編譯錯誤"], "answer":1, "explain":"結構以傳址傳入，修改會影響原物件，100。"},
 {"id":"p157", "exam":"練習：結構類別", "num":"練習第157題", "topic":"typedef 結構", "lang":"c", "code":"typedef struct {\n    int x;\n    int y;\n} Point;\nint main() {\n    Point p = {5, 10};\n    printf(\"%d\", p.x);\n    return 0;\n}", "q":"typedef 結構：這段程式的執行結果為何？", "options":["5", "10", "0", "編譯錯誤"], "answer":0, "explain":"typedef 匿名結構為 Point，p.x=5。"},
 {"id":"p158", "exam":"練習：結構類別", "num":"練習第158題", "topic":"結構對齊 (padding)", "lang":"c", "code":"struct Data {\n    char c;\n    int i;\n};\nprintf(\"%lu\", sizeof(struct Data));", "q":"結構對齊 (padding)：這段程式的執行結果為何？", "options":["5", "8", "4", "1"], "answer":1, "explain":"因記憶體對齊，char 後補齊到 int 邊界，sizeof = 8。"},
 {"id":"p159", "exam":"練習：結構類別", "num":"練習第159題", "topic":"結構位元欄位 (bit field)", "lang":"c", "code":"struct Flags {\n    unsigned int a : 1;\n    unsigned int b : 2;\n    unsigned int c : 3;\n};\nprintf(\"%lu\", sizeof(struct Flags));", "q":"結構位元欄位 (bit field)：這段程式的執行結果為何？", "options":["1", "4", "6", "8"], "answer":1, "explain":"位元欄位共 6 bits，仍封裝在 1 個 unsigned int = 4 bytes。"},
 {"id":"p160", "exam":"練習：結構類別", "num":"練習第160題", "topic":"C++ 類別基本", "lang":"cpp", "code":"class Rectangle {\npublic:\n    int width, height;\n    int area() { return width * height; }\n};\nint main() {\n    Rectangle rect;\n    rect.width = 5;\n    rect.height = 10;\n    printf(\"%d\", rect.area());\n    return 0;\n}", "q":"C++ 類別基本：這段程式的執行結果為何？", "options":["15", "50", "5", "10"], "answer":1, "explain":"width×height = 5×10 = 50。"},
 {"id":"p161", "exam":"練習：結構類別", "num":"練習第161題", "topic":"C++ 類別建構子", "lang":"cpp", "code":"class Rectangle {\npublic:\n    int width, height;\n    Rectangle(int w, int h) {\n        width = w;\n        height = h;\n    }\n    int area() { return width * height; }\n};\nint main() {\n    Rectangle rect(3, 4);\n    printf(\"%d\", rect.area());\n    return 0;\n}", "q":"C++ 類別建構子：這段程式的執行結果為何？", "options":["7", "12", "3", "4"], "answer":1, "explain":"建構子設定後，面積 3×4 = 12。"},
 {"id":"p162", "exam":"練習：結構類別", "num":"練習第162題", "topic":"C++ 類別 private", "lang":"cpp", "code":"class Rectangle {\nprivate:\n    int width, height;\npublic:\n    Rectangle(int w, int h) { width = w; height = h; }\n    int area() { return width * height; }\n};\nint main() {\n    Rectangle rect(3, 4);\n    // rect.width = 5; // 無法存取\n    printf(\"%d\", rect.area());\n    return 0;\n}", "q":"C++ 類別 private：這段程式的執行結果為何？", "options":["12", "7", "0", "編譯錯誤 (如果嘗試存取width)"], "answer":0, "explain":"透過公開方法 area() 取得 12（private 成員無法由外部直接存取）。"},
 {"id":"p163", "exam":"練習：結構類別", "num":"練習第163題", "topic":"C++ 類別 static 成員", "lang":"cpp", "code":"class Counter {\npublic:\n    static int count;\n    Counter() { count++; }\n};\nint Counter::count = 0;\nint main() {\n    Counter c1, c2, c3;\n    printf(\"%d\", Counter::count);\n    return 0;\n}", "q":"C++ 類別 static 成員：這段程式的執行結果為何？", "options":["0", "1", "2", "3"], "answer":3, "explain":"建立 3 個物件，static 共享計數累加為 3。"},
 {"id":"p164", "exam":"練習：結構類別", "num":"練習第164題", "topic":"C++ 繼承 (public)", "lang":"cpp", "code":"class Animal {\npublic:\n    void eat() { printf(\"Eating\\n\"); }\n};\nclass Dog : public Animal {\npublic:\n    void bark() { printf(\"Barking\\n\"); }\n};\nint main() {\n    Dog d;\n    d.eat();\n    return 0;\n}", "q":"C++ 繼承 (public)：這段程式的執行結果為何？", "options":["Eating", "Barking", "編譯錯誤", "執行錯誤"], "answer":0, "explain":"Dog 繼承 Animal，呼叫繼承來的 eat() 印 Eating。"},
 {"id":"p165", "exam":"練習：結構類別", "num":"練習第165題", "topic":"C++ 多型 (virtual)", "lang":"cpp", "code":"class Animal {\npublic:\n    virtual void sound() { printf(\"Animal sound\\n\"); }\n};\nclass Dog : public Animal {\npublic:\n    void sound() override { printf(\"Woof\\n\"); }\n};\nint main() {\n    Animal *a = new Dog();\n    a->sound();\n    delete a;\n    return 0;\n}", "q":"C++ 多型 (virtual)：這段程式的執行結果為何？", "options":["Animal sound", "Woof", "編譯錯誤", "執行錯誤"], "answer":1, "explain":"virtual 多型：以基底指標呼叫實際執行 Dog::sound() → Woof。"},
 {"id":"p166", "exam":"練習：結構類別", "num":"練習第166題", "topic":"C++ 抽象類別 (純虛函式)", "lang":"cpp", "code":"class Shape {\npublic:\n    virtual int area() = 0; // 純虛函式\n};\nclass Square : public Shape {\nprivate:\n    int side;\npublic:\n    Square(int s) : side(s) {}\n    int area() override { return side * side; }\n};\nint main() {\n    Square sq(5);\n    printf(\"%d\", sq.area());\n    return 0;\n}", "q":"C++ 抽象類別 (純虛函式)：這段程式的執行結果為何？", "options":["25", "0", "編譯錯誤", "執行錯誤"], "answer":0, "explain":"純虛函式由 Square 實作，area()=25。"},
 {"id":"p167", "exam":"練習：結構類別", "num":"練習第167題", "topic":"C++ 建構子初始化清單", "lang":"cpp", "code":"class Point {\npublic:\n    int x, y;\n    Point(int x, int y) : x(x), y(y) {}\n};\nint main() {\n    Point p(3, 4);\n    printf(\"%d\", p.x + p.y);\n    return 0;\n}", "q":"C++ 建構子初始化清單：這段程式的執行結果為何？", "options":["7", "3", "4", "12"], "answer":0, "explain":"建構子初始化清單設定 x、y，3+4 = 7。"},
 {"id":"p168", "exam":"練習：結構類別", "num":"練習第168題", "topic":"C++ this 指標", "lang":"cpp", "code":"class Counter {\nprivate:\n    int count;\npublic:\n    Counter() : count(0) {}\n    Counter& increment() {\n        this->count++;\n        return *this;\n    }\n    int getCount() { return count; }\n};\nint main() {\n    Counter c;\n    c.increment().increment();\n    printf(\"%d\", c.getCount());\n    return 0;\n}", "q":"C++ this 指標：這段程式的執行結果為何？", "options":["0", "1", "2", "3"], "answer":2, "explain":"increment 回傳 *this 可鏈式呼叫兩次，count=2。"},
 {"id":"p169", "exam":"練習：結構類別", "num":"練習第169題", "topic":"C++ friend 類別", "lang":"cpp", "code":"class A {\nprivate:\n    int secret;\npublic:\n    A(int s) : secret(s) {}\n    friend class B;\n};\nclass B {\npublic:\n    void show(A &a) { printf(\"%d\", a.secret); }\n};\nint main() {\n    A a(100);\n    B b;\n    b.show(a);\n    return 0;\n}", "q":"C++ friend 類別：這段程式的執行結果為何？", "options":["100", "0", "編譯錯誤", "執行錯誤"], "answer":0, "explain":"friend 類別可存取私有成員，印 100。"},
 {"id":"p170", "exam":"練習：結構類別", "num":"練習第170題", "topic":"C++ 運算子多載", "lang":"cpp", "code":"class Vector {\npublic:\n    int x, y;\n    Vector(int x, int y) : x(x), y(y) {}\n    Vector operator+(const Vector &v) {\n        return Vector(x + v.x, y + v.y);\n    }\n};\nint main() {\n    Vector v1(1, 2), v2(3, 4);\n    Vector v3 = v1 + v2;\n    printf(\"%d\", v3.x);\n    return 0;\n}", "q":"C++ 運算子多載：這段程式的執行結果為何？", "options":["1", "3", "4", "2"], "answer":2, "explain":"多載 + 運算子，v3.x = 1+3 = 4。"},
 {"id":"p171", "exam":"練習：結構類別", "num":"練習第171題", "topic":"C++ 樣版 (Template)", "lang":"cpp", "code":"template <typename T>\nT max(T a, T b) {\n    return (a > b) ? a : b;\n}\nint main() {\n    printf(\"%d\", max(3, 5));\n    return 0;\n}", "q":"C++ 樣版 (Template)：這段程式的執行結果為何？", "options":["3", "5", "8", "編譯錯誤"], "answer":1, "explain":"樣版函式 max(3,5)=5。"},
 {"id":"p172", "exam":"練習：結構類別", "num":"練習第172題", "topic":"C++ 樣版類別", "lang":"cpp", "code":"template <typename T>\nclass Box {\n    T content;\npublic:\n    Box(T c) : content(c) {}\n    T get() { return content; }\n};\nint main() {\n    Box<int> b(10);\n    printf(\"%d\", b.get());\n    return 0;\n}", "q":"C++ 樣版類別：這段程式的執行結果為何？", "options":["10", "0", "編譯錯誤", "執行錯誤"], "answer":0, "explain":"樣版類別 Box<int> 取出內容 10。"},
 {"id":"p173", "exam":"練習：結構類別", "num":"練習第173題", "topic":"C++ 繼承建構子", "lang":"cpp", "code":"class Base {\npublic:\n    Base(int x) { printf(\"%d\", x); }\n};\nclass Derived : public Base {\npublic:\n    Derived(int x) : Base(x) {}\n};\nint main() {\n    Derived d(5);\n    return 0;\n}", "q":"C++ 繼承建構子：這段程式的執行結果為何？", "options":["5", "0", "編譯錯誤", "執行錯誤"], "answer":0, "explain":"建立衍生物件會先呼叫基底建構子印 5。"},
 {"id":"p174", "exam":"練習：結構類別", "num":"練習第174題", "topic":"C++ 解構子", "lang":"cpp", "code":"class Test {\npublic:\n    ~Test() { printf(\"Destroyed\"); }\n};\nint main() {\n    Test t;\n    return 0;\n}", "q":"C++ 解構子：這段程式的執行結果為何？", "options":["Destroyed", "(無輸出)", "編譯錯誤", "執行錯誤"], "answer":0, "explain":"物件離開作用域時呼叫解構子印 Destroyed。"},
 {"id":"p175", "exam":"練習：結構類別", "num":"練習第175題", "topic":"C++ 複製建構子", "lang":"cpp", "code":"class Point {\npublic:\n    int x, y;\n    Point(int x, int y) : x(x), y(y) {}\n    Point(const Point &p) : x(p.x), y(p.y) {}\n};\nint main() {\n    Point p1(1, 2);\n    Point p2 = p1;\n    printf(\"%d\", p2.x);\n    return 0;\n}", "q":"C++ 複製建構子：這段程式的執行結果為何？", "options":["1", "2", "0", "編譯錯誤"], "answer":0, "explain":"複製建構子複製成員，p2.x=1。"},
 {"id":"p176", "exam":"練習：結構類別", "num":"練習第176題", "topic":"C++ 動態配置", "lang":"cpp", "code":"class Test {\npublic:\n    Test() { printf(\"Created \"); }\n    ~Test() { printf(\"Destroyed \"); }\n};\nint main() {\n    Test *t = new Test();\n    delete t;\n    return 0;\n}", "q":"C++ 動態配置：這段程式的執行結果為何？", "options":["Created Destroyed", "Destroyed Created", "Created", "Destroyed"], "answer":0, "explain":"先 new 印 Created，再 delete 印 Destroyed。"},
 {"id":"p177", "exam":"練習：結構類別", "num":"練習第177題", "topic":"C++ 多型與解構子", "lang":"cpp", "code":"class Base {\npublic:\n    virtual ~Base() { printf(\"Base \"); }\n};\nclass Derived : public Base {\npublic:\n    ~Derived() { printf(\"Derived \"); }\n};\nint main() {\n    Base *b = new Derived();\n    delete b;\n    return 0;\n}", "q":"C++ 多型與解構子：這段程式的執行結果為何？", "options":["Base", "Derived", "Derived Base", "Base Derived"], "answer":2, "explain":"基底解構子為 virtual，delete 時先 Derived 再 Base。"},
 {"id":"p178", "exam":"練習：結構類別", "num":"練習第178題", "topic":"C++ 靜態函式", "lang":"cpp", "code":"class Math {\npublic:\n    static int add(int a, int b) { return a + b; }\n};\nint main() {\n    printf(\"%d\", Math::add(2, 3));\n    return 0;\n}", "q":"C++ 靜態函式：這段程式的執行結果為何？", "options":["2", "3", "5", "編譯錯誤"], "answer":2, "explain":"靜態成員函式可用類別名呼叫，Math::add(2,3)=5。"},
 {"id":"p179", "exam":"練習：結構類別", "num":"練習第179題", "topic":"C++ 初始化清單與 const", "lang":"cpp", "code":"class Fixed {\nprivate:\n    const int value;\npublic:\n    Fixed(int v) : value(v) {}\n    int getValue() const { return value; }\n};\nint main() {\n    Fixed f(100);\n    printf(\"%d\", f.getValue());\n    return 0;\n}", "q":"C++ 初始化清單與 const：這段程式的執行結果為何？", "options":["100", "0", "編譯錯誤", "執行錯誤"], "answer":0, "explain":"const 成員只能在初始化清單設定，為 100。"},
 {"id":"p180", "exam":"練習：結構類別", "num":"練習第180題", "topic":"C++ 類別與結構差異", "lang":"cpp", "code":"struct A {\n    int x;\n};\nclass B {\n    int x;\n};\nint main() {\n    A a; a.x = 10;\n    B b; // b.x = 10; // 無法存取\n    printf(\"%d\", a.x);\n    return 0;\n}", "q":"C++ 類別與結構差異：這段程式的執行結果為何？", "options":["10", "0", "編譯錯誤", "執行錯誤"], "answer":0, "explain":"struct 成員預設 public 可直接存取，a.x=10。"},
 {"id":"p181", "exam":"練習：演算法", "num":"練習第181題", "topic":"線性搜尋", "lang":"c", "code":"int linearSearch(int arr[], int n, int x) {\n    for (int i = 0; i < n; i++) {\n        if (arr[i] == x) return i;\n    }\n    return -1;\n}\nint main() {\n    int arr[] = {2, 4, 6, 8, 10};\n    printf(\"%d\", linearSearch(arr, 5, 8));\n    return 0;\n}", "q":"線性搜尋：這段程式的執行結果為何？", "options":["0", "1", "2", "3"], "answer":3, "explain":"8 位於索引 3，線性搜尋回傳 3。"},
 {"id":"p182", "exam":"練習：演算法", "num":"練習第182題", "topic":"二元搜尋", "lang":"c", "code":"int binarySearch(int arr[], int l, int r, int x) {\n    while (l <= r) {\n        int m = l + (r - l) / 2;\n        if (arr[m] == x) return m;\n        if (arr[m] < x) l = m + 1;\n        else r = m - 1;\n    }\n    return -1;\n}\nint main() {\n    int arr[] = {2, 4, 6, 8, 10};\n    printf(\"%d\", binarySearch(arr, 0, 4, 6));\n    return 0;\n}", "q":"二元搜尋：這段程式的執行結果為何？", "options":["0", "1", "2", "3"], "answer":2, "explain":"6 位於索引 2，二元搜尋回傳 2。"},
 {"id":"p183", "exam":"練習：演算法", "num":"練習第183題", "topic":"氣泡排序 (Bubble Sort)", "lang":"c", "code":"void bubbleSort(int arr[], int n) {\n    for (int i = 0; i < n-1; i++) {\n        for (int j = 0; j < n-i-1; j++) {\n            if (arr[j] > arr[j+1]) {\n                int temp = arr[j];\n                arr[j] = arr[j+1];\n                arr[j+1] = temp;\n            }\n        }\n    }\n}\nint main() {\n    int arr[] = {5, 1, 4, 2, 8};\n    bubbleSort(arr, 5);\n    printf(\"%d\", arr[1]);\n    return 0;\n}", "q":"氣泡排序 (Bubble Sort)：這段程式的執行結果為何？", "options":["1", "2", "4", "5"], "answer":1, "explain":"排序後 {1,2,4,5,8}，arr[1]=2。"},
 {"id":"p184", "exam":"練習：演算法", "num":"練習第184題", "topic":"選擇排序 (Selection Sort)", "lang":"c", "code":"void selectionSort(int arr[], int n) {\n    for (int i = 0; i < n-1; i++) {\n        int min_idx = i;\n        for (int j = i+1; j < n; j++)\n            if (arr[j] < arr[min_idx]) min_idx = j;\n        int temp = arr[min_idx];\n        arr[min_idx] = arr[i];\n        arr[i] = temp;\n    }\n}\nint main() {\n    int arr[] = {3, 6, 2, 9, 1};\n    selectionSort(arr, 5);\n    printf(\"%d\", arr[3]);\n    return 0;\n}", "q":"選擇排序 (Selection Sort)：這段程式的執行結果為何？", "options":["1", "2", "6", "9"], "answer":2, "explain":"排序後 {1,2,3,6,9}，arr[3]=6。"},
 {"id":"p185", "exam":"練習：演算法", "num":"練習第185題", "topic":"插入排序 (Insertion Sort)", "lang":"c", "code":"void insertionSort(int arr[], int n) {\n    for (int i = 1; i < n; i++) {\n        int key = arr[i];\n        int j = i - 1;\n        while (j >= 0 && arr[j] > key) {\n            arr[j+1] = arr[j];\n            j = j - 1;\n        }\n        arr[j+1] = key;\n    }\n}\nint main() {\n    int arr[] = {12, 11, 13, 5, 6};\n    insertionSort(arr, 5);\n    printf(\"%d\", arr[2]);\n    return 0;\n}", "q":"插入排序 (Insertion Sort)：這段程式的執行結果為何？", "options":["5", "6", "11", "12"], "answer":2, "explain":"排序後 {5,6,11,12,13}，arr[2]=11。"},
 {"id":"p186", "exam":"練習：演算法", "num":"練習第186題", "topic":"氣泡排序比較次數", "lang":"", "code":"", "q":"使用氣泡排序 10 個元素，最壞情況需要比較幾次？", "options":["10", "45", "90", "100"], "answer":1, "explain":"泡沫排序最壞比較次數 = 9+8+…+1 = n(n-1)/2 = 45。"},
 {"id":"p188", "exam":"練習：演算法", "num":"練習第188題", "topic":"遞迴時間複雜度 (費氏數列)", "lang":"", "code":"", "q":"費氏數列 fib(n) 的時間複雜度約為？", "options":["O(n)", "O(n^2)", "O(log n)", "O(2^n)"], "answer":3, "explain":"樸素遞迴費氏數列重複計算，時間複雜度為指數級 O(2^n)。"},
 {"id":"p189", "exam":"練習：演算法", "num":"練習第189題", "topic":"矩陣乘法複雜度", "lang":"", "code":"", "q":"兩個 n x n 矩陣相乘的時間複雜度為？", "options":["O(n)", "O(n^2)", "O(n^3)", "O(2^n)"], "answer":2, "explain":"三層巢狀迴圈，n×n 矩陣相乘為 O(n³)。"},
 {"id":"p190", "exam":"練習：演算法", "num":"練習第190題", "topic":"找最大值複雜度", "lang":"", "code":"", "q":"在 n 個元素中找最大值，時間複雜度為？", "options":["O(1)", "O(n)", "O(n^2)", "O(log n)"], "answer":1, "explain":"需逐一掃描每個元素比較，O(n)。"},
 {"id":"p191", "exam":"練習：演算法", "num":"練習第191題", "topic":"前綴和 (Prefix Sum)", "lang":"c", "code":"int arr[5] = {1, 2, 3, 4, 5};\nint prefix[6];\nprefix[0] = 0;\nfor (int i = 0; i < 5; i++) prefix[i+1] = prefix[i] + arr[i];\nprintf(\"%d\", prefix[4] - prefix[1]);", "q":"前綴和 (Prefix Sum)：這段程式的執行結果為何？", "options":["9", "10", "6", "3"], "answer":0, "explain":"prefix[4]-prefix[1] = (1+2+3+4)-1 = 9（前綴和區間求和）。"},
 {"id":"p192", "exam":"練習：演算法", "num":"練習第192題", "topic":"區間合併 (Interval Merging)", "lang":"", "code":"", "q":"給定區間 [1,3], [2,4], [5,7]，合併後的總長度為？", "options":["3", "4", "5", "6"], "answer":2, "explain":"[1,3] 與 [2,4] 重疊合併為 [1,4]（長 3），加上 [5,7]（長 2），總長 5。"},
 {"id":"p193", "exam":"練習：演算法", "num":"練習第193題", "topic":"樹的直徑 (Tree Diameter)", "lang":"", "code":"", "q":"一棵樹的直徑定義為？", "options":["樹的高度", "樹中任意兩節點間的最長距離", "樹的葉子數量", "樹的節點數量"], "answer":1, "explain":"樹的直徑定義為樹中任意兩節點間的最長距離。"},
 {"id":"p194", "exam":"練習：演算法", "num":"練習第194題", "topic":"最短時間複雜度 (排序)", "lang":"", "code":"", "q":"基於比較的排序演算法，最佳時間複雜度為？", "options":["O(n)", "O(n log n)", "O(n^2)", "O(log n)"], "answer":1, "explain":"以比較為基礎的排序，最佳時間複雜度下界為 O(n log n)。"},
 {"id":"p195", "exam":"練習：演算法", "num":"練習第195題", "topic":"空間複雜度 (氣泡排序)", "lang":"", "code":"", "q":"氣泡排序的空間複雜度為？", "options":["O(1)", "O(n)", "O(n^2)", "O(log n)"], "answer":0, "explain":"泡沫排序就地交換，僅需常數額外空間，O(1)。"},
 {"id":"p196", "exam":"練習：演算法", "num":"練習第196題", "topic":"迷宮計數 (遞迴)", "lang":"c", "code":"int maze(int x, int y) {\n    if (x == 0 && y == 0) return 1;\n    int count = 0;\n    if (x > 0) count += maze(x-1, y);\n    if (y > 0) count += maze(x, y-1);\n    return count;\n}\nint main() {\n    printf(\"%d\", maze(2, 2));\n    return 0;\n}", "q":"迷宮計數 (遞迴)：這段程式的執行結果為何？", "options":["4", "6", "8", "10"], "answer":1, "explain":"從 (2,2) 走到 (0,0)（每步向下或向左）的路徑數 = C(4,2) = 6。"},
 {"id":"p197", "exam":"練習：演算法", "num":"練習第197題", "topic":"背包問題 (Knapsack)", "lang":"", "code":"", "q":"給定物品重量 [2,3,4] 和價值 [3,4,5]，背包容量 5，最大價值為？", "options":["5", "7", "8", "9"], "answer":1, "explain":"取重 2(值3) 與重 3(值4)，總重 5 不超過容量，最大價值 7。"},
 {"id":"p198", "exam":"練習：演算法", "num":"練習第198題", "topic":"找零問題 (Coin Change)", "lang":"", "code":"", "q":"有無限數量的 1, 5, 10 元硬幣，湊成 15 元，最少需要幾個硬幣？", "options":["1", "2", "3", "4"], "answer":1, "explain":"用 10+5 兩枚硬幣即可湊成 15，最少 2 枚。"},
 {"id":"p199", "exam":"練習：演算法", "num":"練習第199題", "topic":"質數判斷", "lang":"c", "code":"int isPrime(int n) {\n    if (n <= 1) return 0;\n    for (int i = 2; i * i <= n; i++) {\n        if (n % i == 0) return 0;\n    }\n    return 1;\n}\nint main() {\n    printf(\"%d\", isPrime(17));\n    return 0;\n}", "q":"質數判斷：這段程式的執行結果為何？", "options":["0", "1", "2", "編譯錯誤"], "answer":1, "explain":"17 無法被 2..4 整除，是質數，回傳 1。"},
 {"id":"p200", "exam":"練習：演算法", "num":"練習第200題", "topic":"最大公因數 (GCD)", "lang":"c", "code":"int gcd(int a, int b) {\n    while (b != 0) {\n        int temp = b;\n        b = a % b;\n        a = temp;\n    }\n    return a;\n}\nint main() {\n    printf(\"%d\", gcd(24, 36));\n    return 0;\n}", "q":"最大公因數 (GCD)：這段程式的執行結果為何？", "options":["6", "12", "24", "36"], "answer":1, "explain":"gcd(24,36)=12。"}
];

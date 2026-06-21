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
 }
];

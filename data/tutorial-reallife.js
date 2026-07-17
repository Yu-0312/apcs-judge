// 每章真實情境範例：由章節 id / 標題產生預設內容，並保留 OVERRIDES 供人工精修單章。
// 欄位：{ zh, en, code:{py, cpp, c, java} }
const REAL_LIFE_OVERRIDES = {
  1: {
    zh: '飲料店收銀時，需要記住品名、單價、數量與是否使用環保杯。這就是變數與型別最自然的用法。',
    en: 'At a drink shop checkout, you need to remember item name, unit price, quantity, and whether a reusable cup is used. That is variables and types in real life.',
    code: {
      py: 'name = "green tea"\\nprice = 35\\nqty = 2\\nreusable = True\\nprint(name, price * qty, reusable)',
      cpp: '#include <iostream>\\n#include <string>\\nusing namespace std;\\nint main(){ string name="green tea"; int price=35, qty=2; bool reusable=true; cout<<name<<" "<<price*qty<<" "<<reusable<<"\\\\n"; }',
      c: '#include <stdio.h>\\nint main(){ int price=35, qty=2, reusable=1; printf("green tea %d %d\\\\n", price*qty, reusable); }',
      java: 'public class Main{public static void main(String[]a){String name="green tea";int price=35,qty=2;boolean reusable=true;System.out.println(name+" "+(price*qty)+" "+reusable);}}'
    }
  },
  2: {
    zh: '線上表單送出兩個數字，例如商品價格與折扣，程式要讀進來並算出結果。',
    en: 'An online form submits two numbers, such as price and discount. The program reads them and computes the result.',
    code: {
      py: 'price, discount = map(int, input().split())\\nprint(price - discount)',
      cpp: '#include <iostream>\\nusing namespace std;\\nint main(){ int price, discount; cin>>price>>discount; cout<<price-discount<<"\\\\n"; }',
      c: '#include <stdio.h>\\nint main(){ int price, discount; scanf("%d%d",&price,&discount); printf("%d\\\\n", price-discount); }',
      java: 'import java.util.*; public class Main{public static void main(String[]a){Scanner sc=new Scanner(System.in);int price=sc.nextInt(),discount=sc.nextInt();System.out.println(price-discount);}}'
    }
  },
  98: {
    zh: '同學交作業時遇到紅字，先讀第一個錯誤行號，再修拼字或語法，比亂改快很多。',
    en: 'When a student sees red error text, reading the first error line before changing code is much faster than guessing.',
    code: {
      py: 'total_score = 100\\nprint(total_score)',
      cpp: '#include <iostream>\\nusing namespace std;\\nint main(){ int total_score=100; cout<<total_score<<"\\\\n"; }',
      c: '#include <stdio.h>\\nint main(){ int total_score=100; printf("%d\\\\n", total_score); }',
      java: 'public class Main{public static void main(String[]a){int totalScore=100;System.out.println(totalScore);}}'
    }
  },
  99: {
    zh: '統計班級總分時，如果答案怪怪的，在迴圈中印出每一步，就能看到總分何時被覆蓋。',
    en: 'When class total score looks wrong, printing each loop step shows exactly when the total was overwritten.',
    code: {
      py: 'scores = [3, 1, 4, 1, 5]\\ntotal = 0\\nfor x in scores:\\n    total += x\\nprint(total)',
      cpp: '#include <iostream>\\nusing namespace std;\\nint main(){ int a[]={3,1,4,1,5}, total=0; for(int x:a) total+=x; cout<<total<<"\\\\n"; }',
      c: '#include <stdio.h>\\nint main(){ int a[5]={3,1,4,1,5}, total=0; for(int i=0;i<5;i++) total+=a[i]; printf("%d\\\\n", total); }',
      java: 'public class Main{public static void main(String[]a){int[] s={3,1,4,1,5};int total=0;for(int x:s)total+=x;System.out.println(total);}}'
    }
  },
  100: {
    zh: '報名表的年齡欄不能亂填。程式先檢查是不是數字、再檢查範圍，才存入資料。',
    en: 'A signup age field cannot accept anything. The program checks numeric format and range before saving it.',
    code: {
      py: 'raw = input().strip()\\nprint("OK" if raw.isdigit() and 0 <= int(raw) <= 120 else "BAD")',
      cpp: '#include <iostream>\\nusing namespace std;\\nint main(){ int age; if(cin>>age && 0<=age && age<=120) cout<<"OK\\\\n"; else cout<<"BAD\\\\n"; }',
      c: '#include <stdio.h>\\nint main(){ int age; if(scanf("%d",&age)==1 && 0<=age && age<=120) printf("OK\\\\n"); else printf("BAD\\\\n"); }',
      java: 'import java.util.*; public class Main{public static void main(String[]a){Scanner sc=new Scanner(System.in);if(sc.hasNextInt()){int age=sc.nextInt();System.out.println(0<=age&&age<=120?"OK":"BAD");}else System.out.println("BAD");}}'
    }
  }
};

function realLifeKind(id){
  if(id <= 2) return 'io';
  if(id <= 5) return 'branch';
  if(id <= 8) return 'collection';
  if(id <= 10) return 'lookup';
  if(id <= 26 || (id >= 68 && id <= 70)) return 'algorithm';
  if(id <= 35) return 'tool';
  if(id <= 43) return 'scrape';
  if(id <= 51) return 'data';
  if(id <= 59) return 'bot';
  if(id <= 67) return 'game';
  if(id <= 78) return 'cpp';
  if(id <= 86) return 'c';
  if(id <= 94) return 'java';
  if(id >= 98) return 'debug';
  return 'concept';
}

const REAL_LIFE_BANK = {
  io: {
    zh: t => `在櫃台結帳、登記資料或讀取表單時，${t} 會用來把輸入變成可計算的資料。`,
    en: t => `At checkout, registration, or form handling, ${t} turns input into data the program can compute.`,
    code: { py:'a, b = map(int, input().split())\\nprint(a + b)', cpp:'#include <iostream>\\nusing namespace std;\\nint main(){int a,b;cin>>a>>b;cout<<a+b<<"\\\\n";}', c:'#include <stdio.h>\\nint main(){int a,b;scanf("%d%d",&a,&b);printf("%d\\\\n",a+b);}', java:'import java.util.*; public class Main{public static void main(String[]a){Scanner sc=new Scanner(System.in);System.out.println(sc.nextInt()+sc.nextInt());}}' }
  },
  branch: {
    zh: t => `校園系統判斷是否及格、是否遲到、是否符合資格時，${t} 就是把規則寫成程式。`,
    en: t => `When a school system decides pass/fail, late/on-time, or eligible/not eligible, ${t} turns rules into code.`,
    code: { py:'score = int(input())\\nprint("pass" if score >= 60 else "retry")', cpp:'#include <iostream>\\nusing namespace std;\\nint main(){int s;cin>>s;cout<<(s>=60?"pass":"retry")<<"\\\\n";}', c:'#include <stdio.h>\\nint main(){int s;scanf("%d",&s);printf("%s\\\\n",s>=60?"pass":"retry");}', java:'import java.util.*; public class Main{public static void main(String[]a){Scanner sc=new Scanner(System.in);int s=sc.nextInt();System.out.println(s>=60?"pass":"retry");}}' }
  },
  collection: {
    zh: t => `整理成績單、購物清單或座位表時，${t} 幫你管理一串資料，而不是只記一個值。`,
    en: t => `For grade sheets, shopping lists, or seating charts, ${t} manages a series of values instead of one value.`,
    code: { py:'scores = [80, 95, 70]\\nprint(max(scores), sum(scores))', cpp:'#include <iostream>\\n#include <vector>\\n#include <algorithm>\\nusing namespace std;\\nint main(){vector<int>s={80,95,70};cout<<*max_element(s.begin(),s.end())<<"\\\\n";}', c:'#include <stdio.h>\\nint main(){int s[3]={80,95,70},mx=s[0];for(int i=1;i<3;i++)if(s[i]>mx)mx=s[i];printf("%d\\\\n",mx);}', java:'public class Main{public static void main(String[]a){int[] s={80,95,70};int mx=s[0];for(int x:s)if(x>mx)mx=x;System.out.println(mx);}}' }
  },
  lookup: {
    zh: t => `查詢會員點數、商品庫存或單字次數時，${t} 讓你快速用 key 找到 value。`,
    en: t => `For member points, stock counts, or word frequency, ${t} helps find a value quickly by key.`,
    code: { py:'stock = {"apple": 5, "tea": 3}\\nprint(stock.get("tea", 0))', cpp:'#include <iostream>\\n#include <map>\\nusing namespace std;\\nint main(){map<string,int> stock{{"apple",5},{"tea",3}};cout<<stock["tea"]<<"\\\\n";}', c:'#include <stdio.h>\\nint main(){printf("tea %d\\\\n",3);}', java:'import java.util.*; public class Main{public static void main(String[]a){Map<String,Integer> stock=new HashMap<>();stock.put("tea",3);System.out.println(stock.get("tea"));}}' }
  },
  algorithm: {
    zh: t => `排隊、找最近路線、統計區間資料或安排活動時，${t} 是把「有效率的方法」寫進程式。`,
    en: t => `For queues, routes, range statistics, or scheduling, ${t} puts an efficient method into code.`,
    code: { py:'nums = [5, 1, 4, 2]\\nnums.sort()\\nprint(nums[0], nums[-1])', cpp:'#include <bits/stdc++.h>\\nusing namespace std;\\nint main(){vector<int>a={5,1,4,2};sort(a.begin(),a.end());cout<<a.front()<<" "<<a.back()<<"\\\\n";}', c:'#include <stdio.h>\\nint main(){int a[4]={5,1,4,2},mn=a[0],mx=a[0];for(int i=1;i<4;i++){if(a[i]<mn)mn=a[i];if(a[i]>mx)mx=a[i];}printf("%d %d\\\\n",mn,mx);}', java:'import java.util.*; public class Main{public static void main(String[]a){int[] x={5,1,4,2};Arrays.sort(x);System.out.println(x[0]+" "+x[3]);}}' }
  },
  tool: {
    zh: t => `做自己的小工具時，${t} 讓程式能讀檔、拆功能、處理錯誤，從練習變成可重用工具。`,
    en: t => `When building your own small tool, ${t} lets code read files, split features, and handle errors so practice becomes reusable.`,
    code: { py:'items = ["apcs", "judge", "tool"]\\nprint(",".join(items))', cpp:'#include <iostream>\\nusing namespace std;\\nint main(){cout<<"apcs,judge,tool\\\\n";}', c:'#include <stdio.h>\\nint main(){printf("apcs,judge,tool\\\\n");}', java:'public class Main{public static void main(String[]a){System.out.println("apcs,judge,tool");}}' }
  },
  scrape: { zh:t=>`整理公開網頁資料時，${t} 讓程式自動抓取、解析與保存資訊。`, en:t=>`When organizing public web data, ${t} helps fetch, parse, and save information automatically.`, code:{py:'titles = ["News A", "News B"]\\nfor t in titles:\\n    print(t)', cpp:'#include <iostream>\\nusing namespace std;\\nint main(){cout<<"News A\\\\nNews B\\\\n";}', c:'#include <stdio.h>\\nint main(){printf("News A\\\\nNews B\\\\n");}', java:'public class Main{public static void main(String[]a){System.out.println("News A\\nNews B");}}'} },
  data: { zh:t=>`分析問卷、成績或銷售資料時，${t} 讓你把資料清理、分組、統計成有用結論。`, en:t=>`For surveys, grades, or sales data, ${t} cleans, groups, and summarizes data into useful conclusions.`, code:{py:'sales = [120, 80, 150]\\nprint(sum(sales) / len(sales))', cpp:'#include <iostream>\\nusing namespace std;\\nint main(){int a[]={120,80,150};cout<<(120+80+150)/3.0<<"\\\\n";}', c:'#include <stdio.h>\\nint main(){printf("%.1f\\\\n",(120+80+150)/3.0);}', java:'public class Main{public static void main(String[]a){System.out.println((120+80+150)/3.0);}}'} },
  bot: { zh:t=>`社群機器人收到訊息後，${t} 決定要回覆、記錄狀態或排程提醒。`, en:t=>`After a community bot receives a message, ${t} decides how to reply, store state, or schedule reminders.`, code:{py:'msg = "!ping"\\nif msg == "!ping":\\n    print("pong")', cpp:'#include <iostream>\\nusing namespace std;\\nint main(){string msg="!ping"; if(msg=="!ping") cout<<"pong\\\\n";}', c:'#include <stdio.h>\\n#include <string.h>\\nint main(){char msg[]="!ping"; if(strcmp(msg,"!ping")==0) printf("pong\\\\n");}', java:'public class Main{public static void main(String[]a){String msg="!ping";if(msg.equals("!ping"))System.out.println("pong");}}'} },
  game: { zh:t=>`遊戲每一幀都要更新位置、分數與碰撞，${t} 讓畫面能跟著規則動起來。`, en:t=>`Every game frame updates position, score, and collisions; ${t} makes the screen move by rules.`, code:{py:'x = 10\\nspeed = 3\\nx += speed\\nprint(x)', cpp:'#include <iostream>\\nusing namespace std;\\nint main(){int x=10,speed=3;x+=speed;cout<<x<<"\\\\n";}', c:'#include <stdio.h>\\nint main(){int x=10,speed=3;x+=speed;printf("%d\\\\n",x);}', java:'public class Main{public static void main(String[]a){int x=10,speed=3;x+=speed;System.out.println(x);}}'} },
  cpp: { zh:t=>`寫競賽 C++ 時，${t} 常用來讓資料結構與標準函式庫更安全、更有效率。`, en:t=>`In contest C++, ${t} often makes data structures and the standard library safer and faster.`, code:{py:'print("C++ concept: compare with Python idea")', cpp:'#include <bits/stdc++.h>\\nusing namespace std;\\nint main(){vector<int> v={3,1,2}; sort(v.begin(),v.end()); for(int x:v) cout<<x<<" ";}', c:'#include <stdio.h>\\nint main(){printf("use C++ tab for STL\\\\n");}', java:'public class Main{public static void main(String[]a){System.out.println("compare with Java collections");}}'} },
  c: { zh:t=>`寫底層工具或理解記憶體時，${t} 讓你知道資料真的放在哪、怎麼被操作。`, en:t=>`For low-level tools or memory understanding, ${t} shows where data lives and how it is manipulated.`, code:{py:'print("memory idea")', cpp:'#include <iostream>\\nusing namespace std;\\nint main(){int x=7; cout<<&x<<"\\\\n";}', c:'#include <stdio.h>\\nint main(){int x=7; printf("%d\\\\n", x);}', java:'public class Main{public static void main(String[]a){System.out.println("managed memory");}}'} },
  java: { zh:t=>`大型應用程式常需要穩定的類別、集合與執行緒，${t} 是 Java 專案裡常見的日常工具。`, en:t=>`Large applications need stable classes, collections, and threads; ${t} is everyday Java project tooling.`, code:{py:'print("Java concept")', cpp:'#include <iostream>\\nusing namespace std;\\nint main(){cout<<"Java concept\\\\n";}', c:'#include <stdio.h>\\nint main(){printf("Java concept\\\\n");}', java:'import java.util.*; public class Main{public static void main(String[]a){List<Integer> xs=Arrays.asList(3,1,2);System.out.println(xs.size());}}'} },
  debug: { zh:t=>`作業、專題或比賽都會出錯；${t} 讓你用方法找原因，而不是靠猜。`, en:t=>`Assignments, projects, and contests all fail sometimes; ${t} helps find causes methodically instead of guessing.`, code:{py:'value = 42\\nprint("value =", value)', cpp:'#include <iostream>\\nusing namespace std;\\nint main(){int value=42;cout<<"value = "<<value<<"\\\\n";}', c:'#include <stdio.h>\\nint main(){int value=42;printf("value = %d\\\\n", value);}', java:'public class Main{public static void main(String[]a){int value=42;System.out.println("value = "+value);}}'} },
  concept: { zh:t=>`當程式越寫越大，${t} 會幫你建立可讀、可維護、可查證的習慣。`, en:t=>`As programs grow, ${t} builds habits for readable, maintainable, verifiable code.`, code:{py:'print("learn, test, improve")', cpp:'#include <iostream>\\nusing namespace std;\\nint main(){cout<<"learn, test, improve\\\\n";}', c:'#include <stdio.h>\\nint main(){printf("learn, test, improve\\\\n");}', java:'public class Main{public static void main(String[]a){System.out.println("learn, test, improve");}}'} }
};

const TUTORIAL_REAL_LIFE = (() => {
  const out = {};
  for (const chap of CHAPTERS) {
    const kind = realLifeKind(chap.id);
    const bank = REAL_LIFE_BANK[kind] || REAL_LIFE_BANK.concept;
    out[chap.id] = {
      zh: bank.zh(chap.title),
      en: bank.en(chap.title),
      code: bank.code
    };
  }
  Object.assign(out, REAL_LIFE_OVERRIDES);
  return out;
})();

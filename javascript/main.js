// 瀏覽器的控制台 列印語法 console.log(顯示資料)
// 雙引號(")與單引號(')為字串

TestCode();

TimeYear();

function TimeYear(){
    // 年份變數
    var Year = new Date().getFullYear();
    // 由 html 顯示資料
    document.getElementById('Year').textContent = Year;
}

// 設計 方法 function name(參數或空白){程式}
function TestCode(){
    // 變數 命名 : 英文開頭，英文與數字，底線，javascript的關鍵字不能設定，英文可設定大小寫混用
    // es5版本 var ; es6版本 let (變數) const (常數)
    // 宣告變數 全域變數
    var one;
    var ONE;

    // 賦予 值
    one = 1;
    ONE = "01";
    console.log(one);
    console.log(ONE);
    console.log("02");
    
    // 條件判斷 if...else 單一條件
    var Number1 = 12;
    // 顯示條件成立，執行的資料
    if (Number1<5){
        console.log("數字小於5")
    }

    if (Number1>10) console.log("數字大於10");

    if (Number1>10)
        console.log("數字為:"+Number1);

    // 顯示條件成立，執行的資料，或是不成立時，執行的資料
    var Number2 = 12;
    if ( Number1 < Number2) {
        console.log("Number1 < Number2")
    } else {
        console.log("Number1 < Number2 不成立")
    } 

    // 多條件判斷式 if(條件){程式} else if(條件二) {程式}else{程式}
    let Num_One = 1;
    let Num_Two = 2;
    // == 等於(比較)
    if ( Num_One == Num_Two){
        console.log("兩變數相同");  
    } else if( Num_One > Num_Two) {
        console.log("變數1大於變數2");
    } else {
        console.log("變數1小於變數2")
    };
}

// 全域變數
var a = 1;
var b = 2;

// var 與 let 的差別
function Var_LetCode(){
    // 區域變數 
    var a = 3;
    var b = 4;

    console.log( a+b );
}

Var_LetCode();

// var 與 let 的差別；暗藍色表示找不到變數，var 的作用區域會在 function 內才會區分 "全域或區域" 的差別；
// let 的作用區域包含了全部，例如:function {...} if(){...} 等等
// // 全域變數
// var A = 4, C = 1;
// let X = 5, Y = 6;
// {
//     var D = A + C;
//     let Z = X + Y;
// }
// console.log(D);
// // 呼叫不到 Z
// console.log(Z);

// function NumCal(){
//     var D = A + C;
//     let Z = X + Y;
// }

// 迴圈 for (宣告變數起始值；條件；執行後增加或減少的次數){程式}
let  i;
for ( i = 0; i <= 10; i = i + 1){
    console.log(i);
}
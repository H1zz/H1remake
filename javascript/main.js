// 瀏覽器的控制台 列印語法 console.log(顯示資料)
// 雙引號(")與單引號(')為字串

// 變數 命名 : 英文開頭，英文與數字，底線，javascript的關鍵字不能設定，英文可設定大小寫混用
// es5版本 var
// 宣告變數

var one;
var ONE;
var One;
var O_ne;
var O_01ne;

// 賦予 值

one = 1;
ONE = "01";
console.log(one);
console.log(ONE);
console.log("02");

// 年份變數
var Year = new Date().getFullYear();
// 由 html 顯示資料
document.getElementById('Year').textContent = Year;

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
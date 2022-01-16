// 瀏覽器的控制台 列印語法 console.log(顯示資料)
// 雙引號(")與單引號(')為字串

// TimeYear();

function TimeYear(){
    // 年份變數
    var Year = new Date().getFullYear();
    // 由 html 顯示資料
    document.getElementById('Year').textContent = Year;
}
// 新增 html 的標籤與內容

CopyRightContent();
function CopyRightContent(){
    let div = document.createElement('div');

    let footers = document.getElementById('footers');

    footers.appendChild(div);
    div.innerHTML = ' Copyright &copy<span id="Year"></span> AnneFlower Co.,Ltd All rights reserved ';

    TimeYear();
    let Address = document.getElementById('footers');
    Address.append(div);
}

// 新增 MFourSort 的內容
MFourSortContent();
function MFourSortContent(){
    // 新增標籤 div
    let MFourSortDiv1 = document.createElement('div');
    let MFourSortDiv2 = document.createElement('div');

    // 在 SmallNav 內新增，宣告變數
    let MFS = document.getElementById('MFourSort');

    // 建立 div 框架，給予id名稱
    MFS.appendChild(MFourSortDiv1);
    
    // 賦予屬性 id 或 class 
    MFourSortDiv1.setAttribute("id","MFS");

}
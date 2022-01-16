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
    let MFourSortUl = document.createElement('ul');

    // 在 MFourSort 內新增，宣告變數
    let MFS = document.getElementById('MFourSort');

    // 建立 div 框架，給予id名稱
    MFS.appendChild(MFourSortUl);
    
    // 賦予屬性 id 或 class 
    MFourSortUl.setAttribute("id","MFS");   
    
    let MFourSortItem = ["women","men","kids","baby"];

    let MFourSortCon = ["WOMEN","MEN","KIDS","BABY"];

    // 新增標籤時，程式的運作方式為:先新增標籤，賦予屬性，在指定新增的外框架(此為一個迴圈)
    // 迴圈內的數字 ，是因為陣列而產生，故要隨著陣列值的數量而自動增減

    for (let i= 0; i< MFourSortItem.length; i++) {
        let MFourSortLi = document.createElement('li');
        // 新增屬性
        MFourSortLi.setAttribute("id",MFourSortItem[i]); 
        // ul 內新增 li 清單
        MFourSortUl.appendChild(MFourSortLi);

        // 新增連結 "a"
        let A = document.createElement('a');
        // 新增屬性 假連結 javascript:;
        A.setAttribute("href","javascript:;")
        // li 內新增 a 連結
        MFourSortLi.appendChild(A);
        // 置入 陣列內容(文字)
        A.innerText = MFourSortCon[i];
    }
}
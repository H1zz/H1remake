MenuShow2();
function MenuShow2(){
    //  $ jQuery的變數前綴詞

    // 隱藏選單與關閉按鈕
    $('#MenuNavbar').hide();
    $('#backM').hide();

    // 開啟選單
    $('#menuM').click( function(){
        $('#MenuNavbar').show();
        $('#menuM').hide();
        $('#backM').show();        
    });
    
    // 關閉選單
    $('#backM').click( function(){
        $('#MenuNavbar').hide();
        $('#backM').hide();
        $('#menuM').show(); 
    });
}


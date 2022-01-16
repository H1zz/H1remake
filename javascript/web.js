MenuShow2();
function MenuShow2(){
    //  $ jQuery的變數前綴詞
    // 隱藏選單
    $('#MenuNavbar').hide();

    // 開啟選單
    $('#menuM').click( function(){
        $('#MenuNavbar').show();
    });
    
    // 關閉選單
    // $('#menuM').click( function(){
    //     $('#MenuNavbar').show();
    // });
}
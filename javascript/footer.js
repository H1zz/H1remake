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
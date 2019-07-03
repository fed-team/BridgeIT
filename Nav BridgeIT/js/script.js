var element = document.getElementById('menu');
document.getElementById('icon-heart').onclick = function(){

    if (element.className = 'hide'){
    element.className = 'show';
  }
    else{
    element.className = 'hide';
    document.getElementById('menu').className = 'show';
  }
}

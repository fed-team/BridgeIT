document.getElementById('buttonToogle').onclick = function(){
  var menu = document.getElementById("menuToogle");
  if (menu.className === "hide") {
    menu.className += " show";
  }
  else {
    menu.className = "hide";
  }
}

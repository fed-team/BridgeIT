document.getElementById('buttonToggle').onclick = function(){
  var menu = document.getElementById("menuToggle");
  if (menu.className === "displayNoneMenu") {
    menu.className = "displayShowMenu";
  }
  else {
    menu.className = "displayNoneMenu";
  }
}

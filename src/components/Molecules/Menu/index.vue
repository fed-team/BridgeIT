<template>
  <nav>
    <div class="menuIcon">
      <div class="menuLogo">LOGO</div>
      <i class="fas fa-bars"></i>
      <Awesome icon="bars" class="hamburgerMenu" @click="menuToggle()" />
    </div>
    <div class="displayNoneMenu" id="menuToggle">
      <div class="menuLogo hide">LOGO</div>
      <ul class="menuItem">
        <a href="#">
          <li>Strona główna</li>
        </a>
        <a href="#">
          <li>O nas</li>
        </a>
        <a href="#">
          <li>Jak to działa</li>
        </a>
        <a href="#">
          <li>Cennik</li>
        </a>
        <a href="#">
          <li>Kontakt</li>
        </a>
      </ul>
      <div class="menuButtonBox">
        <a href>Zarejestruj się</a>
        <span class>lub</span>
        <Button value="Zaloguj się" class="small" />
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Menu",
  methods: {
    menuToggle: function() {
      var menu = document.getElementById("menuToggle");
      if (menu.className === "displayNoneMenu") {
        menu.className = "displayShowMenu";
      } else {
        menu.className = "displayNoneMenu";
      }
    }
  }
};
</script>

<style scoped lang="scss" src="./style.scss">
</style>

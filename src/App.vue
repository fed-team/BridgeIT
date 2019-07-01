<template>
  <div id="app">
    <h1>BridgeIT</h1>
    <Primary btnValue="Zaloguj się"/>
    <Secondary btnValue="Zarejestruj się"/>
    <PrimaryOut btnValue="Zarejestruj się"/>
    <SecondaryOut btnValue="Zarejestruj się"/>
    <PrimarySmall btnValue="Zarejestruj się"/>
    <SecondarySmall btnValue="Zarejestruj się"/>
  </div>
</template>
<script>
export default {};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Poppins:400,600|Roboto&display=swap");
@import "@/assets/style/colors.scss";
body {
  padding: 0;
  margin: 0;
}

body,
*,
html {
  color: $grey-6;
  font-family: "Poppins", sans-serif;
}

h1 {
  text-align: center;
}
</style>

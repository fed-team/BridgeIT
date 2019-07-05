<template>
  <div id="app">
    <Menu />
    <Hero />
  </div>
</template>
<script>
import Hero from "@/components/Molecules/Hero";
import Menu from "@/components/Molecules/Menu";
export default {
  components: {
    Hero,
    Menu
  }
};
</script>

<style lang="scss">
@import "@/assets/style/modules/button.scss";
body {
  padding: 0;
  margin: 0;
}
</style>

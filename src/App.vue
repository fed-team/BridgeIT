<template>
  <div id="app">
    <Hero />
  </div>
</template>
<script>
import Hero from "@/components/Molecules/Hero";

export default {
  components: {
    Hero
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

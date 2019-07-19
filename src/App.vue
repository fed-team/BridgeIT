<template>
  <div id="app">
    <Navi/>
  </div>
</template>
<script>
import Navi from '@/components/nav.vue';
export default {
  name: "App",
  components: {
    Navi
  }
};
</script>

<style lang="scss">
@import "@/assets/style/modules/button.scss";
body {
  padding: 0;
  margin: 0;
  background-color:#f2f6fa;
}

</style>

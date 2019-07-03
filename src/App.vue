<template>
  <div id="app">
    <h1>BridgeIT</h1>
    <PageHeader />
  </div>
</template>
<script>
import PageHeader from "@/components/PageHeader/PageHeader";

export default {
  components: {
    PageHeader
  }
};
</script>

<style lang="scss">
@import "@/assets/style/colors.scss";
@import "@/assets/style/typography.scss";
body {
  padding: 0;
  margin: 0;
}
</style>

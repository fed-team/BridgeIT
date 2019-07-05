<template>
  <div id="app">
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
@import "@/assets/style/modules/button.scss";
body {
  padding: 0;
  margin: 0;
}
</style>

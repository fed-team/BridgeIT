<template>
  <button class="btn btn--secondary">{{btnValue}}</button>
</template>

<script>
export default {
  name: "PrimaryButton",
  props: ["btnValue"]
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/colors.scss";
@import "@/assets/style/button.scss";
</style>

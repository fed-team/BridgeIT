<template>
  <button :class="btnClass" class="btn">{{btnValue}}</button>
</template>

<script>
export default {
  name: "PrimaryButton",
  props: ["btnValue", "btnClass"]
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/colors.scss";
@import "@/assets/style/button.scss";
</style>

<template>
  <button :class="vclass" class="btn">{{value}}</button>
</template>

<script>
export default {
  name: "PrimaryButton",
  props: ["value", "vclass"]
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/colors.scss";
@import "@/assets/style/button.scss";
</style>

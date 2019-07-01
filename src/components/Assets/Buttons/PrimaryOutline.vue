<template>
  <button>{{btnValue}}</button>
</template>

<script>
export default {
  name: "PrimaryButton",
  props: ["btnValue"]
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/colors.scss";

button {
  background: transparent;
  color: $primary;
  border: 2px solid $primary;
  padding: 8px 50px;
  font-size: 14px;
  font-weight: 600;
  transition: 0.3s;
  cursor: pointer;
  border-radius: 2px;
  &:hover {
    color: $primary;
    border: 2px solid $primaryh;
  }
}
</style>

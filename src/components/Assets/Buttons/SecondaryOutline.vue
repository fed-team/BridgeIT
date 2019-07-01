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
  color: $secondary;
  border: 2px solid $secondary;
  padding: 8px 50px;
  font-size: 14px;
  font-weight: 600;
  transition: 0.3s;
  cursor: pointer;
  border-radius: 2px;
  &:hover {
    color: $secondaryh;
    border: 2px solid $secondaryh;
  }
}
</style>

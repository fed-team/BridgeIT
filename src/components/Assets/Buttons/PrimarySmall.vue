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
  background: $primary;
  color: $white;
  border: none;
  padding: 5px 20px;
  font-size: 14px;
  font-weight: 600;
  transition: 0.3s;
  cursor: pointer;
  border-radius: 2px;
  &:hover {
    background: $primaryh;
  }
}
</style>

<template>
  <header class="page-header">
    <h1 class="page-header__header">There are many variations of passage of Lorem</h1>
    <p class="page-header__paragraph">If you are going to use apassage of Lorem Ipsum, you need to be sure there isn't anything embrassing..</p>
    <div class="page-header__buttons">
    </div>
    <Primary btnValue="Normal" />
    <PrimaryOut btnValue="Normal" />
  </header>
</template>
<script>
export default {
  name: "PageHeader"
}
</script>
<style lang="scss" scoped>
  @import '@/assets/style/colors.scss';
  .page-header {
    background-color: $grey-1;
  }
</style>
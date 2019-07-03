<template>
  <header class="page-header">
    <h1 class="page-header__header">There are many variations of passages of Lorem</h1>
    <p class="page-header__paragraph">If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embrassing..</p>
    <div class="page-header__buttons">
      <Button class="page-header__btn page-header__btn--main" vclass="btn--primary" value="Normal" />
      <Button class="page-header__btn" vclass="btn--primaryOut" value="Normal" />
    </div>
  </header>
</template>
<script>
export default {
  name: 'PageHeader'
}
</script>
<style lang="scss" scoped>
  @import "@/assets/style/colors.scss";
  .page-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 165px;
    padding: 110px 0;
    background-color: $grey-1;

    &__header {
      max-width: 714px;
      margin-bottom: 13px;
      font-size: 50px;
      font-weight: 400;
      line-height: 120%;
    }

    &__paragraph {
      max-width: 470px;
      margin-bottom: 53px;
      font-size: 16px;
    }

    &__buttons {
      display: flex;
      justify-content: center;
    }

    &__btn {
      font-size: 14px;
      &--main {
        margin-right: 30px;
      }
    }
  }
</style>

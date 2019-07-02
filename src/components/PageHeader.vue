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
    margin-top: 16.5rem;
    padding: 11rem 0;
    background-color: $grey-1;

    &__header {
      max-width: 71.4rem;
      margin-bottom: 1.3rem;
      font-size: 5rem;
      font-weight: 400;
      line-height: 120%;
    }

    &__paragraph {
      max-width: 47rem;
      margin-bottom: 5.3rem;
      font-size: 1.6rem;
    }

    &__buttons {
      display: flex;
      justify-content: center;
    }

    &__btn {
      font-size: 1.4rem;
      &--main {
        margin-right: 3rem;
      }
    }
  }
</style>

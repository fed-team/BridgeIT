<template>
  <header class="page-header">
    <h1 class="page-header__header">Porzuć niewygdne narzędzia i stertę notatek!</h1>
    <p
      class="page-header__paragraph"
    >Z naszym narzędziem oszczędzimy Ci masę czasu! Załóż bezpłatne konto i sprawdź jakie to łatwe.</p>
    <div class="page-header__buttons">
      <Button value="Normal" />
      <Button class="outline" vclass="btn--primaryOut" value="Normal" />
    </div>
  </header>
</template>
<script>
export default {
  name: "PageHeader"
};
</script>
<style lang="scss" scoped>
@import "@/assets/style/variables/colors.scss";
.page-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 165px;
  padding: 110px 0;
  background-color: $grey-1;

  &__header {
    text-align: center;
    max-width: 714px;
    margin-bottom: 13px;
    font-size: 50px;
    font-weight: 400;
    line-height: 120%;
  }

  &__paragraph {
    text-align: center;
    max-width: 470px;
    margin-bottom: 53px;
    font-size: 16px;
    color: $grey-4;
  }

  &__buttons {
    width: 470px;
    display: flex;
    justify-content: space-around;
  }

  &__btn {
    font-size: 14px;
    &--main {
      margin-right: 30px;
    }
  }
}
</style>

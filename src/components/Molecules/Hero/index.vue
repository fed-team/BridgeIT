<template>
  <header class="page-header">
    <h1 class="page-header__header">Porzuć niewygodne narzędzia i stertę notatek!</h1>
    <p
      class="page-header__paragraph"
    >Z naszym narzędziem oszczędzimy Ci masę czasu! Załóż bezpłatne konto i sprawdź jakie to łatwe.</p>
    <div class="page-header__buttons">
      <Button value="Sprawdź" />
      <Button class="outline" value="Kontakt" />
    </div>
  </header>
</template>
<script>
export default {
  name: "Hero"
};
</script>
<style lang="scss" scoped src="./">
.page-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 160px;
  height: 512px;
  background-color: $grey-1;

  &__header {
    text-align: center;
    max-width: 714px;
    margin-bottom: 13px;
    font-size: 40px;
    font-weight: 400;
    line-height: 120%;
  }

  &__paragraph {
    text-align: center;
    max-width: 470px;
    margin-bottom: 53px;
    color: $grey-4;
  }

  &__buttons {
    width: 470px;
    display: flex;
    justify-content: space-around;
  }

  &__btn {
    &--main {
      margin-right: 30px;
    }
  }
}
</style>

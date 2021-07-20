<template>
  <div class='change_theme__container'>
    <span>Motyw:</span>
    <div class='change_theme_button__container'>
      <button class='change_theme_button' @click="$colorMode.preference = 'light'">Jasny</button>
      <button class='change_theme_button' @click="$colorMode.preference = 'dark'">Ciemny</button>

    </div>
  </div>
</template>

<style lang='scss' scoped>
.change_theme {
  &__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    background: var(--box--background-color);
    padding: .8em;
    border: 1px solid var(--box--border-color);

    span {
      font-size: 1.2em;
      margin: 4px;
    }
  }

  &_button {
    &__container {
      display: flex;
    }

    &:last-child {
      color: var(--sidebar--stats--text-color);
      background: var(--sidebar--categories--background-color);
    }

    &:hover {
      cursor: pointer;
    }

    width: 5em;
    height: 2.5em;
    border-radius: 0;
    border: 0 none;
  }
}

</style>

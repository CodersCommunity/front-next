<template>
  <div class="wrapper">
    <span class="label">Motyw:</span>
    <div class="buttons-wrapper">
      <button class="button" @click="$colorMode.preference = 'light'">
        Jasny
      </button>
      <button class="button dark" @click="$colorMode.preference = 'dark'">
        Ciemny
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: var(--box--background-color);
  padding: size(12);
  border: 1px solid var(--box--border-color);
}

.label {
  font-size: size(20);
  margin: 4px;
}

.buttons-wrapper {
  display: flex;
}

.button {
  width: size(80);
  height: size(40);
  border-radius: 0;
  border: 0 none;
}

.dark {
  color: var(--sidebar--stats--text-color);
  background: var(--sidebar--categories--background-color);
}
</style>

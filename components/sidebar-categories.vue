<template>
  <div class="categories">
    <h2 class="title">Kategorie Pytań</h2>
    <h3 class="title">Programowanie</h3>
  </div>
</template>

<style lang="scss" scoped>
.categories {
  background-color: var(--sidebar--categories--background-color);
  color: var(--sidebar--categories--text-color);
  padding: size(8);
}

.title {
  text-align: center;
  font-size: size(16);
  font-weight: normal;

  padding-bottom: size(5);
  border-bottom: 1px solid var(--sidebar--categories--text-color);
}
</style>

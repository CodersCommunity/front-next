<template>
  <div class="box">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.box {
  margin-bottom: $gap-width;
  padding: size(8) size(20);
  background-color: var(--box--background-color);
  border: 1px solid var(--box--border-color);
}
</style>

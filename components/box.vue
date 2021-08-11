<template>
  <component :is="tag" class="box" :class="{ 'box--dark': dark }">
    <slot />
  </component>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    tag: {
      type: String,
      default: 'div',
    },
    dark: {
      type: Boolean,
      default: false,
    },
  },
})
</script>

<style lang="scss" scoped>
.box {
  margin-bottom: $gap-width;
  padding: size(8) size(20);
  background-color: var(--box--background-color);
  border: 1px solid var(--box--border-color);

  &--dark {
    background-color: var(--box--dark--background-color);
  }
}
</style>

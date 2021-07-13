<template>
  <button :type="type" class="button" :class="buttonCssClasses">
    <slot />
  </button>
</template>

<script lang="ts">
import Vue from 'vue'

enum Color {
  Info = 'info',
  Success = 'success',
  Warning = 'warning',
  Error = 'error',
}

export default Vue.extend({
  props: {
    type: {
      type: String,
      default: 'button',
    },
    color: {
      type: String,
      default: Color.Info,
      validator(value) {
        return [Color.Info, Color.Success, Color.Warning, Color.Error].includes(
          value as Color
        )
      },
    },
  },
  computed: {
    buttonCssClasses(): Object {
      return {
        'button--info': this.color === Color.Info,
        'button--success': this.color === Color.Success,
        'button--warning': this.color === Color.Warning,
        'button--error': this.color === Color.Error,
      }
    },
  },
})
</script>

<style lang="scss" scoped>
.button {
  cursor: pointer;
}
</style>

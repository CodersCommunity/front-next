<template>
  <button :type="type" class="button" :class="buttonCssClasses">
    <slot />
  </button>
</template>

<script lang="ts">
import Vue from 'vue'

enum Color {
  Primary = 'primary',
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
      default: Color.Primary,
      validator(value) {
        return [
          Color.Info,
          Color.Success,
          Color.Warning,
          Color.Error,
          Color.Primary,
        ].includes(value as Color)
      },
    },
  },
  computed: {
    buttonCssClasses(): Object {
      return {
        'button--primary': this.color === Color.Primary,
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
  color: var(--button--text-color);
  border: none;
  padding: size(10) size(15);
  font-size: size(14);

  transition: background-color 0.15s;

  &--primary {
    background-color: var(--button--primary--background-color);

    &:hover,
    &:focus {
      background-color: var(--button--primary--hover--background-color);
    }
  }

  &--info {
    background-color: var(--button--info--background-color);

    &:hover,
    &:focus {
      background-color: var(--button--info--hover--background-color);
    }
  }

  &--success {
    background-color: var(--button--success--background-color);

    &:hover,
    &:focus {
      background-color: var(--button--success--hover--background-color);
    }
  }

  &--warning {
    background-color: var(--button--warning--background-color);

    &:hover,
    &:focus {
      background-color: var(--button--warning--hover--background-color);
    }
  }

  &--error {
    background-color: var(--button--error--background-color);

    &:hover,
    &:focus {
      background-color: var(--button--error--hover--background-color);
    }
  }
}
</style>

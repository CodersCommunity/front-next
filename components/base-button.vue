<template>
  <button :type="type" class="button" :class="buttonCssClasses">
    <slot />
  </button>
</template>

<script lang="ts">
import Vue from 'vue'

enum Color {
  Primary = 'primary',
  Secondary = 'secondary',
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
      default: Color.Secondary,
      validator(value) {
        return [
          Color.Secondary,
          Color.Info,
          Color.Success,
          Color.Warning,
          Color.Error,
          Color.Primary,
        ].includes(value as Color)
      },
    },
    small: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    buttonCssClasses(): Object {
      return {
        'button--primary': this.color === Color.Primary,
        'button--secondary': this.color === Color.Secondary,
        'button--info': this.color === Color.Info,
        'button--success': this.color === Color.Success,
        'button--warning': this.color === Color.Warning,
        'button--error': this.color === Color.Error,
        'button--small': this.small,
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
  padding: size(0) size(10);
  line-height: size(32);
  font-size: size(13);

  transition: background-color 0.15s;

  &--small {
    line-height: size(28);
    padding: size(0) size(8);
  }

  &--primary {
    background-color: var(--button--primary--background-color);

    &:hover,
    &:focus {
      background-color: var(--button--primary--hover--background-color);
    }
  }

  &--secondary {
    background-color: var(--button--secondary--background-color);
    color: var(--button--secondary--text-color);

    &:hover,
    &:focus {
      background-color: var(--button--secondary--hover--background-color);
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

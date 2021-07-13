<template>
  <ValidationProvider
    v-slot="{ errors, required, ariaInput, ariaMsg }"
    tag="label"
    :vid="vid || name || label"
    :rules="rules"
    :name="name || label"
    class="label"
  >
    <div v-if="label">{{ label }}{{ required ? '*' : '' }}</div>
    <div v-else>
      <slot />
    </div>

    <input
      v-model="innerValue"
      :type="type"
      :placeholder="placeholder"
      v-bind="ariaInput"
      :class="{ 'input--error': errors[0] }"
      class="input"
    />
    <div v-if="errors[0]" v-bind="ariaMsg" class="error-message">
      {{ errors[0] }}
    </div>
  </ValidationProvider>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    vid: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    rules: {
      type: [Object, String],
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
      validator(value) {
        return [
          'url',
          'text',
          'password',
          'tel',
          'search',
          'number',
          'email',
        ].includes(value)
      },
    },
    value: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      innerValue: '',
    }
  },
  computed: {
    hasValue(): boolean {
      return !!this.innerValue
    },
  },
  watch: {
    innerValue(value) {
      this.$emit('input', value)
    },
    value(val) {
      if (val !== this.innerValue) {
        this.innerValue = val
      }
    },
  },
  created() {
    if (this.value) {
      this.innerValue = this.value
    }
  },
})
</script>

<style lang="scss" scoped>
.label {
  display: block;
  margin-bottom: 20px;

  &--error {
    .input {
      border-color: red;
    }
  }
}

.input {
  width: 100%;
  margin: 5px 0 2px;
  padding: 10px;
  border-radius: none;
  border: 1px solid grey;
}

.error-message {
  font-size: 14px;
  color: red;
}
</style>

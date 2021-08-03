<template>
  <img
    src="https://img.icons8.com/color/14/000000/filled-star--v1.png"
    :alt="alt"
    :title="alt"
    class="icon"
    width="14"
    height="14"
  />
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    alt: {
      type: String,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped>
.icon {
  position: relative;
  top: 2px;
  left: 1px;
  margin-left: -1px;
  cursor: help;
}
</style>

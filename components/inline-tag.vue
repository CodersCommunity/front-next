<template>
  <span class="inline-tag">
    <span v-if="tag.favourite" class="favourite">★</span>
    {{ tag.name }}
  </span>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { InlineTagDto } from '~/services/__generated-api'

export default Vue.extend({
  props: {
    tag: {
      type: Object as PropType<InlineTagDto>,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped>
.inline-tag {
  display: block;
  margin: 1px;
  color: var(--tag--text-color);
  background-color: var(--tag--background-color);
  padding: 4px 10px;
  font-size: size(11);
}
</style>

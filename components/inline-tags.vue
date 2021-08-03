<template>
  <ul class="inline-tags">
    <li v-for="tag in tags" :key="tag.name" class="list-item">
      <InlineTag :tag="tag" />
    </li>
  </ul>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { InlineTagDto } from '~/services/__generated-api'

export default Vue.extend({
  props: {
    tags: {
      type: Array as PropType<InlineTagDto[]>,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped>
.inline-tags {
  list-style-type: none;
  padding: 0;
  margin: 5px 0;
  display: flex;
  flex-wrap: wrap;
}

.list-item {
  display: block;
  margin: 2px 3px 0 0;
}
</style>

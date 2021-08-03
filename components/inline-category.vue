<template>
  <span>
    <img
      v-if="category.favourite"
      src="https://img.icons8.com/fluency/16/000000/star.png"
      alt="Twoja ulubiona kategoria"
      title="Twoja ulubiona kategoria"
      class="icon"
      width="16"
      height="16"
    />
    <router-link
      class="inline-category-link"
      :to="{ name: 'pytania', query: { kategoria: category.path } }"
      v-text="category.title"
    />
  </span>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { InlineCategoryDto } from '~/services/__generated-api'

export default Vue.extend({
  props: {
    category: {
      type: Object as PropType<InlineCategoryDto>,
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
  cursor: help;
}
</style>

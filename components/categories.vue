<template>
  <ul v-if="categories.length > 0">
    <CategoriesItem
      v-for="category in categories"
      :key="category.id"
      :category="category"
      :depth="depth"
    />
  </ul>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { CategoryDto } from '~/services/__generated-api'
export default Vue.extend({
  props: {
    categories: {
      type: Array as PropType<CategoryDto[]>,
      required: true,
    },
    depth: {
      type: Number,
      default: 0,
    },
  },
})
</script>

<style lang="scss" scoped></style>

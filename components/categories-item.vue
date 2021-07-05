<template>
  <li>
    <DynamicHeading :level="depth + 2">
      {{ category.title }} ({{ category.questionsCount }})
    </DynamicHeading>

    <p>{{ category.description }}</p>

    <Categories :categories="category.subcategories" :depth="depth + 1" />
  </li>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { CategoryDto } from '~/services/__generated-api'

export default Vue.extend({
  props: {
    category: {
      type: Object as PropType<CategoryDto>,
      required: true,
    },
    depth: {
      type: Number,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped></style>

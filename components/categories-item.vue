<template>
  <li
    class="categories-item"
    :class="{ 'categories-item--border-bottom': depth > 0 }"
  >
    <div class="heading-container">
      <DynamicHeading class="category" :level="depth + 2">
        {{ category.title }}
      </DynamicHeading>
      <div class="category-count">{{ category.questionsCount }} zapytań</div>
    </div>

    <p class="description">{{ category.description }}</p>

    <Categories
      class="subcategory"
      :categories="category.subcategories"
      :depth="depth + 1"
    />
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

<style lang="scss" scoped>
.categories-item {
  list-style: none;
  padding: 8px 0;
}

.categories-item--border-bottom {
  border-bottom: 1px solid var(--box--border-color-soft);
}

.category {
  margin: 8px 0;
}

.heading-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.category-count {
  background: var(--categories--answers-number-background-color);
  color: var(--categories--answers-number-text-color);
  font-size: size(14);
  padding: 4px 8px;
  &:before {
  }
}
.description {
  margin: 12px 0;
}
</style>

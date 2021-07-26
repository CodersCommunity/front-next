<template>
  <li
    class="categories-item"
    :class="{ 'categories-item--border-bottom': depth > 0 }"
  >
    <div class="heading-container">
      <DynamicHeading class="category" :level="depth + 2">
        <router-link class="category-link" :to="linkToCategory(category)">
          {{ category.title }}</router-link
        >
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
  methods: {
    linkToCategory(category: CategoryDto) {
      return {
        name: 'pytania',
        query: {
          kategoria: category.path,
        },
      }
    },
  },
})
</script>

<style lang="scss" scoped>
.heading-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.categories-item {
  list-style: none;
  padding: 8px 0;
  &--border-bottom {
    border-bottom: 1px solid var(--box--border-color-soft);
  }
}

.category-link {
  text-decoration: none;
  color: inherit;
  &:hover {
    text-decoration: underline;
  }
}

.category {
  margin: 8px 0;
}

.category-count {
  background: var(--categories--answers-number-background-color);
  color: var(--categories--answers-number-text-color);
  font-size: size(14);
  padding: 4px 8px;
}
.description {
  margin: 12px 0;
}
</style>

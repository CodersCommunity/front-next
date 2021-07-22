<template>
  <div class="categories">
    <h2 class="title">Kategorie Pytań</h2>
    <ul class="categories-list">
      <li
        v-for="category in categories"
        :key="category.id"
        class="category-item"
      >
        <router-link class="category-link" :to="linkToCategory(category)">
          {{ category.title }}
        </router-link>
      </li>
    </ul>

    <div v-for="category in categoriesWithSubcategories" :key="category.id">
      <h3 class="title">{{ category.title }}</h3>
      <ul class="categories-list subcategories">
        <li
          v-for="subcategory in category.subcategories"
          :key="subcategory.id"
          class="subcategory-item"
        >
          <router-link class="category-link" :to="linkToCategory(subcategory)">
            {{ subcategory.title }}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { CategoryDto } from '~/services/__generated-api'

export default Vue.extend({
  computed: {
    categories() {
      return this.$accessor.categories
    },
    categoriesWithSubcategories() {
      return this.$accessor.categories.filter(
        (category) => category.subcategories.length > 0
      )
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
.categories {
  background-color: var(--sidebar--categories--background-color);
  color: var(--sidebar--categories--text-color);
  padding: size(8);
  margin-bottom: $gap-width;
  border: 1px solid var(--box--border-color);
}

.title {
  font-size: size(16);
  font-weight: bold;

  padding: size(5);
  margin: size(8) 0;
  border-bottom: 1px solid var(--sidebar--categories--border-color);
}

.subcategory-item {
  font-size: size(12);
  padding: 4px;
}

.subcategories {
  display: flex;
  flex-wrap: wrap;
  margin: size(8) 0;
}

.categories-list {
  padding-left: 10px;
  list-style: none;
}

.category-link {
  text-decoration: none;
  color: inherit;
}
</style>

<template>
  <div class="categories">
    <h2 class="title">Kategorie Pytań</h2>
    <ul>
      <li v-for="category in categories" :key="category.ui" class="item">
        {{ category.title }}
      </li>
    </ul>

    <div v-for="category in categoriesWithSubcategories" :key="category.id">
      <h3 class="title">{{ category.title }}</h3>
      <ul>
        <li v-for="subcategory in category.subcategories" :key="subcategory.id">
          {{ subcategory.title }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

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
})
</script>

<style lang="scss" scoped>
.categories {
  background-color: var(--sidebar--categories--background-color);
  color: var(--sidebar--categories--text-color);
  padding: size(8);
}

.title {
  text-align: center;
  font-size: size(16);
  font-weight: normal;

  padding: size(5);
  border-bottom: 1px solid var(--sidebar--categories--text-color);
}
</style>

<template>
  <router-link
    class="inline-category-link"
    :to="{ name: 'pytania', query: { kategoria: category.path } }"
    v-text="category.title"
  />
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

<template>
  <div>
    <TitleContainer>
      <h1>
        <span v-if="categoryName">Kategoria: {{ categoryName }}</span>
        <span v-else-if="tag">Tag: {{ tag }}</span>
        <span v-else>Wszystkie pytania</span>
      </h1>
      <NavQuestions />
    </TitleContainer>

    <ListQuestions :questions="questions" />

    <Pagination
      v-if="pagination"
      v-model="page"
      :records="pagination.itemsCount"
      :per-page="pagination.perPage"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { sortOptionsMap } from '@/constants/index'
import { invertObject } from '~/assets/ts/invert-object'
import { CategoryDto } from '~/services/__generated-api'

export default Vue.extend({
  key: (to) => to.fullPath,
  layout: 'sidebar',
  async asyncData({ route, $httpService, app, error }) {
    /**
     * Query: sortowanie
     */
    let frontQuerySort = route.query.sortowanie as string
    if (!Object.values(sortOptionsMap).includes(frontQuerySort)) {
      frontQuerySort = sortOptionsMap.hot
    }

    // @ts-ignore
    const apiQuerySort = invertObject(sortOptionsMap)[frontQuerySort]

    /**
     * Query: strona
     */
    let queryPage = parseInt(route.query.strona as string)
    if (Number.isNaN(queryPage) || queryPage < 1) {
      queryPage = 1
    }

    /**
     * Query: kategoria
     */
    function flattenCategories(categories: CategoryDto[] = []): CategoryDto[] {
      const subcategories = categories.flatMap((category) =>
        flattenCategories(category.subcategories)
      )

      return [...categories, ...subcategories]
    }

    const categories = flattenCategories(app.$accessor.categories)
    const queryCategory = route.query.kategoria as string
    let category: CategoryDto | undefined
    if (queryCategory) {
      category = categories.find((category) => {
        return category.path === queryCategory
      })
    }

    if (queryCategory && !category) {
      return error({ statusCode: 404, message: 'Nie znaleziono kategorii' })
    }

    /**
     * Query: tag
     */
    const queryTag = route.query.tag as string

    /**
     * API request
     */
    const { data: questions, pagination } =
      await $httpService.questions.getQuestionsList({
        sort: apiQuerySort,
        category: queryCategory,
        page: queryPage,
        tag: queryTag,
      })

    if (queryTag && questions?.length === 0) {
      return error({ statusCode: 404, message: 'Nie znaleziono tagu' })
    }

    return {
      page: queryPage,
      categoryName: category?.title,
      tag: queryTag,
      questions,
      pagination,
    }
  },
  head: {
    title: 'Pytania',
    // TODO next - prev links
    // TODO canonical links on first pages
  },
  watch: {
    page(page) {
      const query = { ...this.$route.query, strona: page }
      this.$router.push({ query })
    },
  },
  watchQuery: ['strona', 'sortowanie', 'kategoria', 'tag'],
})
</script>

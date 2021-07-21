<template>
  <div>
    <TitleContainer>
      <h1>Pytania</h1>
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

export default Vue.extend({
  key: (to) => to.fullPath,
  layout: 'sidebar',
  async asyncData({ route, $httpService }) {
    let frontQuerySort = route.query.sortowanie as string
    if (!Object.values(sortOptionsMap).includes(frontQuerySort)) {
      frontQuerySort = sortOptionsMap.hot
    }

    // @ts-ignore
    const apiQuerySort = invertObject(sortOptionsMap)[frontQuerySort]

    let page = parseInt(route.query.strona as string)
    if (Number.isNaN(page) || page < 1) {
      page = 1
    }

    const { data: questions, pagination } =
      await $httpService.questions.getQuestionsList({
        page,
        // TODO
        // @ts-ignore
        sort: apiQuerySort,
      })

    return {
      page,
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
  watchQuery: ['strona', 'sortowanie'],
})
</script>

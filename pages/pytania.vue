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

export default Vue.extend({
  key: (to) => to.fullPath,
  layout: 'sidebar',
  async asyncData({ route, $httpService }) {
    const sortMap = {
      'najwięcej-głosów': 'votes',
      'najwięcej-odpowiedzi': 'answers',
      'najwięcej-odwiedzin': 'views',
      gorące: 'hot',
      najnowsze: 'date',
    }

    let sort = route.query.sortowanie as string
    if (!Object.keys(sortMap).includes(sort)) {
      sort = 'najnowsze'
    }

    let page = parseInt(route.query.strona as string)
    if (Number.isNaN(page) || page < 1) {
      page = 1
    }

    const { data: questions, pagination } =
      await $httpService.questions.getQuestionsList({
        page,
        // TODO
        // @ts-ignore
        sort: sortMap[sort],
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

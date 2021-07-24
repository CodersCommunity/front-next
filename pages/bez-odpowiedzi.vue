<template>
  <div>
    <TitleContainer>
      <h1>Najnowsze pytania bez odpowiedzi</h1>
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
  layout: 'sidebar',
  async asyncData({ $httpService, route }) {
    /**
     * Query: strona
     */
    let queryPage = parseInt(route.query.strona as string)
    if (Number.isNaN(queryPage) || queryPage < 1) {
      queryPage = 1
    }

    /**
     * API request
     */
    const { data: questions, pagination } =
      await $httpService.questions.getQuestionsList({
        unanswered: true,
        page: queryPage,
      })

    return {
      page: queryPage,
      questions,
      pagination,
    }
  },
  head: {
    title: 'Najnowsze pytania bez odpowiedzi',
  },
  watchQuery: ['strona'],
})
</script>

<template>
  <div>
    <TitleContainer>
      <h1>Pytania</h1>
      <NavQuestions />
    </TitleContainer>

    <Pagination
      v-if="pagination"
      v-model="page"
      :records="pagination.itemsCount"
      :per-page="pagination.perPage"
    />

    <Box v-for="question in questions" :key="question.id">
      <h2>{{ question.title }}</h2>
      <p>
        Pytanie zadane <b>{{ question.change.date }}</b> przez
        <b>{{ question.change.user.name }}</b> w kategorii
        <b>{{ question.category.title }}</b>
      </p>

      <ul>
        <li>Odwiedzin: {{ question.views }}</li>
        <li>Głosów: {{ question.votes }}</li>
      </ul>
    </Box>

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
import { PaginationDto, QuestionListDto } from '~/services/__generated-api'

export default Vue.extend({
  layout: 'sidebar',
  data() {
    return {
      questions: [] as QuestionListDto[],
      pagination: null as PaginationDto | null,
      page: 1,
    }
  },
  async fetch() {
    const sortMap = {
      'najwięcej-głosów': 'votes',
      'najwięcej-odpowiedzi': 'answers',
      'najwięcej-odwiedzin': 'views',
      gorące: 'hot',
      najnowsze: 'date',
    }

    let sort = this.$route.query.sortowanie as string
    if (!Object.keys(sortMap).includes(sort)) {
      sort = 'najnowsze'
    }

    this.page = parseInt(this.$route.query.strona as string)
    if (Number.isNaN(this.page) || this.page < 1) {
      this.page = 1
    }

    const { data: questions, pagination } =
      await this.$httpService.questions.getQuestionsList({
        page: this.page,
        // TODO
        // @ts-ignore
        sort: sortMap[sort],
      })

    this.questions = questions || []
    this.pagination = pagination || null
  },
  head: {
    title: 'Pytania',
    // TODO next - prev links
    // TODO canonical links on first pages
  },
  watch: {
    // TODO show loader
    '$route.query': '$fetch',
    '$route.query.strona'(page) {
      if (page) {
        window.scrollTo({ top: 0 })
      }
    },
    page(page) {
      if (page === 1 && !this.$route.query.strona) return
      const query = { ...this.$route.query, strona: page }
      this.$router.push({ query })
    },
  },
})
</script>

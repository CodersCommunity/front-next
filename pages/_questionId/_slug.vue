<template>
  <div>
    <TitleContainer>
      <h1>{{ question.title }}</h1>
    </TitleContainer>

    <Box>
      <Question :question="question" />
    </Box>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  layout: 'sidebar',
  async asyncData({ route, $httpService, error }) {
    const questionId = parseInt(route.params.questionId)
    if (!questionId) {
      return error({
        statusCode: 400,
        message: 'Niepoprawny identyfikator pytania',
      })
    }

    try {
      const question = await $httpService.questions.getQuestion(questionId)
      return { question }
    } catch (err) {
      if (err.response?.status === 404) {
        return error({
          statusCode: 404,
          message: 'Nie znaleziono pytania',
        })
      } else {
        throw err
      }
    }
  },
  head() {
    return {
      // @ts-ignore
      title: this.question.title,
    }
  },
})
</script>

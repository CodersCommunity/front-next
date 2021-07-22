<template>
  <div>
    <TitleContainer>
      <h1>Najnowsze pytania i odpowiedzi</h1>
    </TitleContainer>
    <ListQuestions :questions="questions" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  layout: 'sidebar',
  async asyncData({ $httpService }) {
    const questions = await $httpService.questions.getQuestionsListForHome()
    return { questions }
  },
  head: {
    title: 'Najnowsze pytania i odpowiedzi',
  },
})
</script>

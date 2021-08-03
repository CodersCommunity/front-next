<template>
  <div>
    <TitleContainer>
      <h1>Najnowsze pytania i odpowiedzi</h1>
    </TitleContainer>
    <ListQuestions :questions="questions" />
  </div>
</template>

<script lang="ts">
import Vue, { VueConstructor } from 'vue'
import { InlineQuestionDto } from '~/services/__generated-api'

export default (
  Vue as VueConstructor<
    Vue & {
      questions: InlineQuestionDto[]
    }
  >
).extend({
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

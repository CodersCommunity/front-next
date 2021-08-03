<template>
  <div>
    <TitleContainer>
      <h1>Ostatnia aktywność</h1>
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
    const questions = await $httpService.questions.getQuestionsListForActivity()
    return { questions }
  },
  head: {
    title: 'Ostatnia aktywność',
  },
})
</script>

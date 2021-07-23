<template>
  <div>
    <TitleContainer>
      <h1>Ostatnia aktywność</h1>
    </TitleContainer>
    <ListQuestions :questions="questions" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
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

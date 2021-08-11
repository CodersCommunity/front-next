<template>
  <article :id="`q${question.id}`">
    <TitleContainer>
      <h1>{{ question.title }}</h1>
    </TitleContainer>

    <Box>
      <Post :post="question" post-type="question_created" />
    </Box>

    <section v-if="question.answers.length > 0" id="odpowiedzi">
      <TitleContainer>
        <h2>
          {{ question.answersCount }}
          {{
            $pluralization(
              question.answersCount,
              'Odpowiedź',
              'Odpowiedzi',
              'Odpowiedzi'
            )
          }}
        </h2>
      </TitleContainer>

      <ol class="reset-list">
        <Box
          v-for="answer in question.answers"
          :id="`a${answer.id}`"
          :key="answer.id"
          tag="li"
        >
          <Post :post="answer" post-type="answer_created" />
        </Box>
      </ol>
    </section>

    <section id="podobne-pytania">
      <TitleContainer v-if="question.answersCount > 0">
        <h2>Podobne pytania</h2>
      </TitleContainer>
    </section>
  </article>
</template>

<script lang="ts">
import Vue, { VueConstructor } from 'vue'
import { QuestionDto } from '~/services/__generated-api'

export default (
  Vue as VueConstructor<
    Vue & {
      question: QuestionDto
    }
  >
).extend({
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
      title: this.question.title,
    }
  },
})
</script>

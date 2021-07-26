<template>
  <div class="content-wrap">
    <h2 class="title">
      <img
        v-if="question.closed"
        data-test="question-closed-icon"
        src="/images/closed-question.png"
        class="closed-icon"
      />
      <span>{{ question.title }}</span>
    </h2>
    <p class="change">
      {{ whatsChangeText }} <b>{{ question.change.date }}</b> przez
      <InlineUser :user="question.change.user" /> w kategorii
      <router-link
        :to="{ name: 'pytania', query: { kategoria: question.category.path } }"
        class="category-link"
        v-text="question.category.title"
      />
    </p>

    <InlineTags :tags="question.tags" />
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { InlineQuestionDto } from '~/services/__generated-api'

export default Vue.extend({
  props: {
    question: {
      type: Object as PropType<InlineQuestionDto>,
      required: true,
    },
  },
  computed: {
    whatsChangeText(): string {
      const type = this.question.change.type
      const changesMap: { [key in typeof type]: string } = {
        question_created: 'Pytanie zadane',
        answer_created: 'Odpowiedź dodana',
        comment_created: 'Komentarz dodany',
        question_updated: 'Pytanie zaktualizowane',
        answer_updated: 'Odpowiedź zaktualizowana',
        comment_updated: 'Komentarz zaktualizowany',
        question_hidden: 'Pytanie ukryte',
        answer_hidden: 'Odpowiedź ukryta',
        comment_hidden: 'Komentarz ukryty',
        question_restored: 'Pytanie przywrócone',
        answer_restored: 'Odpowiedź przywrócona',
        comment_restored: 'Komentarz przywrócony',
        question_closed: 'Pytanie zamknięte',
        question_reopened: 'Pytanie ponownie otwarte',
        question_tags_updated: 'Zaktualizowane tagi',
        question_category_updated: 'Zmiana kategorii',
        answer_selected: 'Odpowiedź wybrana',
        comment_moved: 'Komentarz przeniesiony',
        answer_changed_to_comment: 'Odpowiedź zmieniona na komentarz',
      }

      return changesMap[this.question.change.type]
    },
  },
})
</script>

<style lang="scss" scoped>
.content-wrap {
  font-size: size(12);
}

.title {
  font-size: size(18);
  font-weight: 700;
  margin: size(2) 0 size(18);
  color: var(--question--title--text-color);
  display: flex;
  align-items: center;
  &:hover {
    .closed-icon {
      background-color: var(--question--closed-icon--hover--background-color);
    }
  }
}

.change {
  margin: 0 0 size(6) 0;
}

.category-link {
  color: var(--question--title--text-color);
  text-decoration: none;

  &:hover,
  &:focus {
    text-decoration: underline;
  }
}
.closed-icon {
  background-color: var(--question--closed-icon--background-color);
  border-radius: 18px;
  padding: 3px;
  margin: 0 4px;
}
</style>

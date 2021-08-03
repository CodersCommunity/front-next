<template>
  <span class="inline-change">
    {{ whatsChangeText }}
    <b>{{ change.date }}</b>
    <span v-if="category"> w <InlineCategory :category="category" /> </span>
    przez
    <InlineUser :user="change.user" />
  </span>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import {
  InlineCategoryDto,
  InlineQuestionDto,
} from '~/services/__generated-api'

export default Vue.extend({
  props: {
    change: {
      type: Object as PropType<InlineQuestionDto['change']>,
      required: true,
    },
    category: {
      type: Object as PropType<InlineCategoryDto | undefined>,
      default: undefined,
    },
  },
  computed: {
    whatsChangeText(): string {
      const type = this.change.type
      const changesMap: { [key in typeof type]: string } = {
        question_created: 'pytanie zadane',
        answer_created: 'odpowiedź dodana',
        comment_created: 'komentarz dodany',
        question_updated: 'pytanie zaktualizowane',
        answer_updated: 'odpowiedź zaktualizowana',
        comment_updated: 'komentarz zaktualizowany',
        question_hidden: 'pytanie ukryte',
        answer_hidden: 'odpowiedź ukryta',
        comment_hidden: 'komentarz ukryty',
        question_restored: 'pytanie przywrócone',
        answer_restored: 'odpowiedź przywrócona',
        comment_restored: 'komentarz przywrócony',
        question_closed: 'pytanie zamknięte',
        question_reopened: 'pytanie ponownie otwarte',
        question_tags_updated: 'zaktualizowane tagi',
        question_category_updated: 'zmiana kategorii',
        answer_selected: 'odpowiedź wybrana',
        comment_moved: 'komentarz przeniesiony',
        answer_changed_to_comment: 'odpowiedź zmieniona na komentarz',
      }

      return changesMap[type]
    },
  },
})
</script>

<style lang="scss" scoped>
.inline-change {
  font-size: size(12);
  color: var(--question--change--text-color);

  ::v-deep a {
    color: var(--question--change--anchors--text-color);
  }
}
</style>

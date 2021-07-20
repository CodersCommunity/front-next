<template>
  <div class="content-wrap">
    <h2 class="title">{{ question.title }}</h2>
    <p class="change">
      Pytanie zadane <b>{{ question.change.date }}</b> przez
      <InlineUser :user="question.change.user" /> w kategorii
      <b>{{ question.category.title }}</b>
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
}

.change {
  margin: 0 0 size(6) 0;
}
</style>

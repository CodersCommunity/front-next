<template>
  <article class="wrap">
    <InlineQuestionStats class="stats" :question="question" />
    <InlineQuestionContent class="content" :question="question" />
  </article>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { QuestionListDto } from '~/services/__generated-api'

export default Vue.extend({
  props: {
    question: {
      type: Object as PropType<QuestionListDto>,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped>
.wrap {
  background-color: var(--box--background-color);
  border: 1px solid var(--box--border-color);
  padding: 8px 8px 10px;
  margin-bottom: -1px;
  display: flex;
}

.stats {
  width: size(134);
  margin-right: size(10);
}

.info {
  width: calc(100% - #{size(144)});
}
</style>

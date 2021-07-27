<template>
  <article
    class="question-inline-wrap"
    :class="{ favourite: $props.question.favourite }"
    data-test="question-container"
  >
    <InlineQuestionStats class="stats" :question="question" />
    <InlineQuestionContent class="content" :question="question" />
  </article>
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
.question-inline-wrap {
  background-color: var(--box--background-color);
  border: 1px solid var(--box--border-color);
  padding: 8px 8px 10px;
  margin-bottom: -1px;
  display: flex;
}

.favourite {
  border-left: 1px solid var(--question--favourite--border-color);
}

.stats {
  width: size(134);
  margin-right: size(10);
}

.info {
  width: calc(100% - #{size(144)});
}
</style>

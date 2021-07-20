<template>
  <ul class="list list--questions">
    <li v-for="question in questions" :key="question.id">
      <InlineQuestion :question="question" />
    </li>
  </ul>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { QuestionListDto } from '~/services/__generated-api'

export default Vue.extend({
  props: {
    questions: {
      type: Array as PropType<QuestionListDto[]>,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped>
.list {
  padding: 0;
  list-style-type: none;
  margin: $gap-width 0;
}
</style>

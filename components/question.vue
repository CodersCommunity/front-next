<template>
  <PostContent
    :content="question.content"
    :content-type="question.contentType"
  />
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { QuestionDto } from '~/services/__generated-api'

export default Vue.extend({
  props: {
    question: {
      type: Object as PropType<QuestionDto>,
      required: true,
    },
  },
})
</script>

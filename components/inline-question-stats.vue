<template>
  <div class="stats-wrap">
    <div class="boxes-wrap">
      <div class="box box--votes">
        <div class="number">{{ question.votes }}</div>
        głosów
      </div>
      <div
        class="box box--answers"
        :class="{
          'box--no-answers': question.answers === 0,
          'box--answers-with-best-answer': question.hasBestAnswer,
        }"
      >
        <div class="number">{{ question.answers }}</div>
        odpowiedzi
      </div>
    </div>
    <div class="views">{{ question.views }} wizyt</div>
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
.stats-wrap {
  font-size: size(11);
  text-align: center;
}

.boxes-wrap {
  display: flex;
  margin-bottom: size(6);
}

.box {
  width: size(67);
  height: size(67);
  color: var(--question--answers-number--text-color);
  background-color: var(--question--answers-number--background-color);

  &--votes {
    color: var(--question--votes--text-color);
    background-color: var(--question--votes--background-color);
  }

  &--no-answers {
    color: var(--question--answers-number--no-answers--text-color);
    background-color: var(
      --question--answers-number--no-answers--background-color
    );
  }

  &--answers-with-best-answer {
    background-color: var(
      --question--answers-number--with-best-answer--background-color
    );
  }
}

.number {
  font-size: size(22);
  line-height: size(43);
}
</style>

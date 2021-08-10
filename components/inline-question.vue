<template>
  <article class="inline-question">
    <PostStats
      class="stats"
      :votes-count="question.votesCount"
      :views-count="question.viewsCount"
      :answers-count="question.answersCount"
      :has-best-answer="question.hasBestAnswer"
    />
    <div class="content">
      <h2 class="title">
        <img
          v-if="question.closed"
          data-test="question-closed-icon"
          src="https://img.icons8.com/fluent/24/000000/lock-2.png"
          alt="Pytanie zamknięte"
          title="Pytanie zamknięte"
          class="icon"
          width="24"
          height="24"
        />
        <img
          v-if="question.favourite"
          data-test="question-favourite-icon"
          src="https://img.icons8.com/color/28/000000/very-popular-topic.png"
          alt="Twoje ulubione pytanie"
          title="Twoje ulubione pytanie"
          class="icon"
          width="28"
          height="28"
        />
        <router-link
          class="title__link"
          :to="`/${question.id}/${question.slug}`"
          v-text="question.title"
        />
      </h2>
      <InlineChange :change="question.change" :category="question.category" />
      <InlineTags :tags="question.tags" />
    </div>
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
.inline-question {
  background-color: var(--box--background-color);
  border: 1px solid var(--box--border-color);
  padding: 8px 8px 4px;
  margin-bottom: -1px;
  display: flex;
}

.stats {
  width: size(134);
  margin-right: size(10);
}

.content {
  width: calc(100% - #{size(144)});
}

.title {
  font-size: size(18);
  font-weight: 700;
  margin: size(2) 0 size(6);
  display: flex;
  align-items: center;

  &__link {
    color: var(--question--title--text-color);
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
}

.icon {
  position: relative;
  margin-right: 5px;
  top: 2px;
  cursor: help;
}
</style>

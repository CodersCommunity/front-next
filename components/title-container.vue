<template>
  <div class="title-container" :class="classes">
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

enum ContainerType {
  MainTitle = 'main-title',
  Answers = 'answers',
  SimilarQuestions = 'similar-questions',
}

export default Vue.extend({
  props: {
    type: {
      type: String,
      default: ContainerType.MainTitle,
      validator(type: ContainerType) {
        return Object.values(ContainerType).includes(type)
      },
    },
  },
  computed: {
    classes() {
      return {
        'title-container--main-title': this.type === ContainerType.MainTitle,
        'title-container--answers': this.type === ContainerType.Answers,
        'title-container--similar-questions':
          this.type === ContainerType.SimilarQuestions,
      }
    },
  },
})
</script>

<style lang="scss" scoped>
.title-container {
  padding: size(12) size(20);
  margin-bottom: $gap-width;
  color: var(--title-container--text-color);

  &--main-title {
    background-color: var(--title-container--main-title--background-color);
  }

  &--answers {
    background-color: var(--title-container--answers--background-color);
  }

  &--similar-questions {
    background-color: var(
      --title-container--similar-questions--background-color
    );
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 1.4;
    font-size: size(24);
    padding: 0;
    margin: 0;
  }
}
</style>

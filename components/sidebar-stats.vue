<template>
  <div v-if="statistics" class="stats">
    <div class="box box--questions">
      <div class="number" v-text="statistics.questionsCount" />
      zapytań
    </div>
    <div class="box box--answers">
      <div class="number" v-text="statistics.answersCount" />
      odpowiedzi
    </div>
    <div class="box box--comments">
      <div class="number" v-text="statistics.commentsCount" />
      komentarzy
    </div>
    <div class="box box--users">
      <div class="number" v-text="statistics.usersCount" />
      pasjonatów
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  computed: {
    statistics() {
      return this.$accessor.statistics
    },
  },
})
</script>

<style lang="scss" scoped>
.stats {
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  margin-bottom: $gap-width;

  @include mobile {
    display: none;
  }
}

.box {
  width: 50%;
  padding: size(15) 0;
  color: var(--sidebar--stats--text-color);

  &--questions {
    background-color: var(--sidebar--stats--questions--background-color);
  }

  &--answers {
    background-color: var(--sidebar--stats--answers--background-color);
  }

  &--comments {
    background-color: var(--sidebar--stats--comments--background-color);
  }

  &--users {
    background-color: var(--sidebar--stats--users--background-color);
  }
}

.number {
  font-size: size(24);
  margin-bottom: size(5);
}
</style>

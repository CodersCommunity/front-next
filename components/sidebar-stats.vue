<template>
  <div class="stats">
    <div class="box box--questions">
      <div class="number" v-text="questionsCount" />
      zapytań
    </div>
    <div class="box box--answers">
      <div class="number" v-text="answersCount" />
      odpowiedzi
    </div>
    <div class="box box--comments">
      <div class="number" v-text="commentsCount" />
      komentarzy
    </div>
    <div class="box box--users">
      <div class="number" v-text="usersCount" />
      pasjonatów
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { httpService } from '~/services/http.service'

export default Vue.extend({
  data() {
    return {
      questionsCount: 0,
      answersCount: 0,
      commentsCount: 0,
      usersCount: 0,
    }
  },
  async fetch() {
    const stats = await httpService.statistics.getStatistics()
    this.questionsCount = stats.questionsCount
    this.answersCount = stats.answersCount
    this.commentsCount = stats.commentsCount
    this.usersCount = stats.usersCount
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

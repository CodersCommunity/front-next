<template>
  <div class="stats">
    <div class="box box--questions">
      <div class="number" v-text="$accessor.statistics.questionsCount" />
      zapytań
    </div>
    <div class="box box--answers">
      <div class="number" v-text="$accessor.statistics.answersCount" />
      odpowiedzi
    </div>
    <div class="box box--comments">
      <div class="number" v-text="$accessor.statistics.commentsCount" />
      komentarzy
    </div>
    <div class="box box--users">
      <div class="number" v-text="$accessor.statistics.usersCount" />
      pasjonatów
    </div>
  </div>
</template>

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

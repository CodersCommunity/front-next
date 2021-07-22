<template>
  <nav>
    <ul class="list">
      <li>
        <router-link
          :to="{
            name: 'pytania',
            query: { ...$route.query, sortowanie: 'najnowsze', strona: '1' },
          }"
          class="link"
          :class="{
            'link--active':
              !$route.query.sortowanie ||
              $route.query.sortowanie === 'najnowsze',
          }"
        >
          Najnowsze
        </router-link>
      </li>
      <li>
        <router-link
          :to="{
            name: 'pytania',
            query: { ...$route.query, sortowanie: 'gorące', strona: '1' },
          }"
          class="link"
          :class="{ 'link--active': $route.query.sortowanie === 'gorące' }"
        >
          Gorące
        </router-link>
      </li>
      <li>
        <router-link
          :to="{
            name: 'pytania',
            query: {
              ...$route.query,
              sortowanie: 'najwięcej-głosów',
              strona: '1',
            },
          }"
          class="link"
          :class="{
            'link--active': $route.query.sortowanie === 'najwięcej-głosów',
          }"
        >
          Najwięcej głosów
        </router-link>
      </li>
      <li>
        <router-link
          :to="{
            name: 'pytania',
            query: {
              ...$route.query,
              sortowanie: 'najwięcej-odpowiedzi',
              strona: '1',
            },
          }"
          class="link"
          :class="{
            'link--active': $route.query.sortowanie === 'najwięcej-odpowiedzi',
          }"
        >
          Najwięcej odpowiedzi
        </router-link>
      </li>
      <li>
        <router-link
          :to="{
            name: 'pytania',
            query: {
              ...$route.query,
              sortowanie: 'najwięcej-odwiedzin',
              strona: '1',
            },
          }"
          class="link"
          :class="{
            'link--active': $route.query.sortowanie === 'najwięcej-odwiedzin',
          }"
        >
          Najwięcej Odwiedzin
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
.list {
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: size(5) 0 0 0;
}

.link {
  display: block;
  color: var(--title-container--text-color);
  text-decoration: none;
  margin: size(5) size(15) size(5) 0;

  &:hover,
  &:focus {
    text-decoration: underline;
  }

  &--active {
    font-weight: bold;
    text-decoration: underline;
  }
}
</style>

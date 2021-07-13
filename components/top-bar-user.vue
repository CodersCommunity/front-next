<template>
  <div class="user-wrap">
    <div v-if="$store.state.currentUser">
      {{ $store.state.currentUser.name }} <br />
      <button @click="$store.dispatch('logout')">Wyloguj</button>
    </div>
    <router-link v-else to="/logowanie" class="link">Zaloguj się</router-link>
  </div>
</template>

<style lang="scss" scoped>
.user-wrap {
  padding: size(10);
  color: white;
}
.link {
  color: white;
}
</style>

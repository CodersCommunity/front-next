<template>
  <div class="user-wrap">
    <div v-if="$store.state.currentUser">
      {{ $store.state.currentUser.name }} <br />
      <button @click="logout">Wyloguj</button>
    </div>
    <router-link v-else to="/logowanie" class="link">Zaloguj się</router-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { MutationTypes } from '~/store'

export default Vue.extend({
  methods: {
    logout() {
      this.$store.commit(MutationTypes.SetCurrentUser, null)
      this.$httpService.logout.logout()
    },
  },
})
</script>

<style lang="scss" scoped>
.user-wrap {
  padding: size(10);
  color: white;
}
.link {
  color: white;
}
</style>

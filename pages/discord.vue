<template>
  <div>
    <TitleContainer>
      <h1>Discord</h1>
    </TitleContainer>

    <TitleContainer
      v-if="!$store.state.currentUser"
      class="discord-user-not-logged-in"
      type="'error'"
    >
      <router-link to="/logowanie">Zaloguj się</router-link> lub
      <router-link to="/logowanie">zarejestruj</router-link>, aby dołączyć do
      Discorda
    </TitleContainer>

    <Box class="discord-description">
      <p>
        Posiadamy serwer Discord, na którym można podyskutować z innymi mniej
        oficjalnie niż na samym forum. Dostępne są kanały tekstowe oraz głosowe,
        a
        <a href="https://discord.com/" target="_blank">aplikację Discorda</a>
        uruchomisz w przeglądarce lub pobierzesz na dowolną platformę. Pamiętaj
        jednak, że jest to dodatek, a główne rozmowy i problemy należy
        rozwiązywać na forum. Musisz też wiedzieć, że nie jesteśmy dostępni
        przez całą dobę, w związku z tym chwilowa cisza nie musi oznaczać braku
        chętnych do rozmowy. Aby dowiedzieć się&nbsp;więcej zapoznaj się z
        <a
          href="https://forum.pasja-informatyki.pl/447641/forumowy-discord-juz-jest"
          >tematem wprowadzającym</a
        >.
      </p>
      <p>
        W celu dołączenia kliknij przycisk poniżej, zaloguj się lub zarejestruj
        i autoryzuj aplikację - zostaniesz automatycznie dodany na serwer.
        Przypominamy o przestrzeganiu regulaminu i podstawowych zasad kultury -
        wszyscy chcemy, aby było to przyjazne miejsce do ciekawych dyskusji.
      </p>

      <p v-if="$store.state.currentUser">
        <!--TODO Integrate with discord-->
        Integracja z discordem
      </p>

      <hr />
      <p>
        Dawniej korzystaliśmy z IRC, jednak kanał został zlikwidowany. Obecnie
        zapraszamy na Discorda.
      </p>
    </Box>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  layout: 'sidebar',
  head: {
    title: 'Discord',
  },
})
</script>

<style lang="scss" scoped>
.discord-description {
  a {
    text-decoration: none;
    color: inherit;
    font-weight: bold;
  }
}

.discord-user-not-logged-in {
  a {
    color: inherit;
  }
}
</style>

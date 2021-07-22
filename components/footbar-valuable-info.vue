<template>
  <div>
    <FootbarSectionHeader>Cenne informacje</FootbarSectionHeader>
    <!--TODO Link to actual pages-->
    <FootbarLinkList>
      <li>
        <router-link to="/">Jak Korzystać z Forum? Częste pytania</router-link>
      </li>
      <li>
        <router-link to="/">Książki Informatyczne warte uwagi</router-link>
      </li>
      <li>
        <router-link to="/">Po co nam Forum? Manifest</router-link>
      </li>
      <li>
        <router-link to="/">Regulamin tego miejsca</router-link>
      </li>
      <li>
        <router-link to="/">Polityka prywatności</router-link>
      </li>
      <li>
        <router-link to="/">Zasłużeni Pasjonaci</router-link>
      </li>
      <li>
        <router-link to="/">Zasady przyznawania punktów</router-link>
      </li>
    </FootbarLinkList>
  </div>
</template>

<script>
import FootbarSectionHeader from '~/components/footbar-section-header'
import FootbarLinkList from '~/components/footbar-link-list'
export default {
  components: { FootbarLinkList, FootbarSectionHeader },
}
</script>

<style scoped></style>

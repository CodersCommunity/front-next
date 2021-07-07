<template>
  <div>
    <TitleContainer>
      <h1>Kategorie</h1>
    </TitleContainer>

    <Box>
      <Categories :categories="$store.state.categories" />
    </Box>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  layout: 'sidebar',
  head: {
    title: 'Kategorie',
  },
})
</script>

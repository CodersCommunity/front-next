<template>
  <div>
    <TitleContainer>
      <h1>Kategorie</h1>
    </TitleContainer>

    <Box>
      <Categories :categories="categories" />
    </Box>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { httpService } from '~/services/http.service'

export default Vue.extend({
  layout: 'sidebar',
  async asyncData() {
    return {
      categories: await httpService.categories.getCategoriesList(),
    }
  },
})
</script>

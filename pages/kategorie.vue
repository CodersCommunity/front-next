<template>
  <div>
    <TitleContainer>
      <h1>Kategorie</h1>
    </TitleContainer>

    <Box>
      <Categories :categories="$store.state.categories" class="indent" />
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

<style lang="scss" scoped>
.indent {
  padding-left: 20px;
}
</style>

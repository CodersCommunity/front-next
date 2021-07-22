<template>
  <div>
    <TopBar />
    <div class="layout-container">
      <main class="content">
        <Nuxt />
      </main>
      <Sidebar class="sidebar" />
    </div>
    <Footbar />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Footbar from '~/components/footbar.vue'
export default Vue.extend({
  components: { Footbar },
  head: {
    titleTemplate: '%s - Forum Pasja Informatyki',
  },
})
</script>

<style lang="scss" scoped>
.layout-container {
  display: flex;
  margin-top: $gap-width;

  @include mobile {
    flex-direction: column;
  }
}

.content {
  width: 75%;
  margin-right: $gap-width;

  @include mobile {
    margin-right: 0;
    margin-bottom: $gap-width;
    width: 100%;
  }
}

.sidebar {
  width: 25%;

  @include mobile {
    width: 100%;
  }
}
</style>

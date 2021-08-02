<template>
  <!-- eslint-disable-next-line -->
  <div v-if="contentType === 'html'" v-html="content"/>
  <div v-else>
    <p v-for="(text, i) in content.split('\n')" :key="i" v-text="text" />
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'

export default Vue.extend({
  props: {
    contentType: {
      type: String as PropType<'html' | 'text'>,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
})
</script>

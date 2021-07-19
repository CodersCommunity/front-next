<template>
  <span>
    <span v-if="user.favourite" class="favourite">★</span>
    {{ user.name }} ({{ user.points }} p.)
  </span>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { InlineUserDto } from '~/services/__generated-api'

export default Vue.extend({
  props: {
    user: {
      type: Object as PropType<InlineUserDto>,
      required: true,
    },
  },
})
</script>

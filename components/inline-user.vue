<template>
  <span>
    <span v-if="user.favourite" class="favourite">★</span>
    <span class="username--bold" :class="usernameStyle" data-test="username">{{
      user.name
    }}</span>
    <span class="points">({{ user.points }} p.)</span>
  </span>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { InlineUserDto, UserLevelDto } from '~/services/__generated-api'

export default Vue.extend({
  props: {
    user: {
      type: Object as PropType<InlineUserDto>,
      required: true,
    },
  },
  computed: {
    usernameStyle() {
      return getUsernameStyle(this.$props.user.level)
    },
  },
})

function getUsernameStyle(level: UserLevelDto) {
  switch (level) {
    case 0:
      return 'username'
    case 10:
      return 'username--approved'
    case 20:
      return 'username--expert'
    case 50:
      return 'username--editor'
    case 80:
      return 'username--moderator'
    case 100:
      return 'username--admin'
    case 120:
      return 'username--super-admin'
    default:
      return 'username'
  }
}
</script>

<style lang="scss" scoped>
.username {
  &--bold {
    font-weight: bold;
  }
  color: var(--user--base--text-color);
  &--approved {
    color: var(--user--approved--text-color);
  }
  &--expert {
    color: var(--user--expert--text-color);
  }
  &--editor {
    color: var(--user--editor--text-color);
  }
  &--moderator {
    color: var(--user--moderator--text-color);
  }
  &--admin {
    color: var(--user--admin--text-color);
  }
  &--super-admin {
    color: var(--user--super-admin--text-color);
  }
}
</style>

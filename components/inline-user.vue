<template>
  <span>
    <span v-if="user.favourite" class="favourite">★</span>
    <span :class="userLevel" data-test="username">{{ user.name }}</span>
    <span class="points">({{ user.points }} p.)</span>
  </span>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { InlineUserDto, UserLevelDto } from '~/services/__generated-api'

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
</script>

<style lang="scss" scoped>
.username {
  font-weight: bold;
  color: #898989;
  &--approved {
    font-weight: bold;
    color: #000000ff;
  }
  &--expert {
    font-weight: bold;
    color: #6d0080;
  }
  &--editor {
    font-weight: bold;
    color: #007ca0;
  }
  &--moderator {
    font-weight: bold;
    color: #007200;
  }
  &--admin {
    font-weight: bold;
    color: #ec0000;
  }
  &--super-admin {
    font-weight: bold;
    color: #bc0000;
  }
}
</style>

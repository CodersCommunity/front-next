<template>
  <div class="discord-container">
    <router-link class="discord-link" to="/discord">
      <img src="/images/discord.png" alt="Discord" width="160" height="46" />
      <div>Może pogadamy?</div>
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
.discord-container {
  padding: size(20) 0;
  background: var(--box--background-color);
  margin-bottom: $gap-width;
  @include mobile {
    display: none;
  }
}
.discord-link {
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--body--text-color);
}
</style>

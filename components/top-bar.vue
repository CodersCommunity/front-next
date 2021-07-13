<template>
  <div class="top-bar">
    <div class="layout-container">
      <NavMain />
    </div>
    <TopBarUser class="user" />
  </div>
</template>

<style lang="scss" scoped>
.top-bar {
  position: relative;
  background-color: var(--top-bar--background-color);
  border-bottom: 1px solid var(--nav-main--item-hover--background-color);
}

.user {
  position: absolute;
  right: 0;
  top: 0;
}
</style>

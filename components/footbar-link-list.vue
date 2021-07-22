<template>
  <ul class="footbar-link-list">
    <slot />
  </ul>
</template>

<script></script>

<style lang="scss" scoped>
.footbar-link-list {
  padding-left: 0;
  list-style: none;
  font-size: 14px;
  li {
    padding: 4px;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
}
</style>

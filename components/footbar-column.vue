<template>
  <div class="footbar-column-container">
    <div class="footbar-section-header"><slot name="header" /></div>
    <ul class="footbar-link-list">
      <slot name="links" />
    </ul>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
.footbar-section-header {
  padding: 4px 0;
  border-bottom: 1px solid var(--footbar--heading-underline);
}
.footbar-link-list {
  padding-left: 0;
  list-style: none;
  font-size: size(14);
  li {
    padding: 4px;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
}
</style>

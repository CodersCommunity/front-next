<template>
  <footer class="footer-container">
    <FootbarFacebook class="footer-flex-item" />
    <FootbarValuableInfo class="footer-flex-item" />
    <FootbarRecomendedResources class="footer-flex-item" />
  </footer>
</template>

<script></script>

<style lang="scss" scoped>
.footer-container {
  width: 100%;

  display: flex;
  justify-content: center;
  @include mobile {
    flex-direction: column;
  }

  background: var(--footbar--background-color);
  color: var(--footbar--text-color);
  border: 1px solid var(--top-bar--border-color);
}

.footer-flex-item {
  margin: size(20);
}
</style>

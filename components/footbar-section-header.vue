<template>
  <div class="footer-section-header"><slot /></div>
</template>

<script>
export default {
  name: 'footbar-section-header',
}
</script>

<style lang="scss" scoped>
.footer-section-header {
  padding: 4px 0;
  border-bottom: 1px solid var(--footbar--heading-underline);
}
</style>

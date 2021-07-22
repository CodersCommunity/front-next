<template>
  <aside>
    <SidebarDiscord />
    <SidebarStats />
    <SidebarCategories />
    <SidebarChangeTheme />
  </aside>
</template>
<script>
import SidebarDiscord from './sidebar-discord'
export default {
  components: { SidebarDiscord },
}
</script>

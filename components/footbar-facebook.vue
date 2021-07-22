<template>
  <div>
    <FootbarSectionHeader>Facebook Pasja Informatyki</FootbarSectionHeader>
    <FootbarLinkList>
      <li>
        <a
          class="facebook-link"
          href="https://www.facebook.com/pasjainformatykifanpage/"
        >
          Polub nas na Facebooku
        </a>
      </li>
    </FootbarLinkList>
  </div>
</template>

<script>
import FootbarSectionHeader from '~/components/footbar-section-header'
import FootbarLinkList from '~/components/footbar-link-list'
export default {
  components: { FootbarLinkList, FootbarSectionHeader },
}
</script>

<style lang="scss" scoped>
.facebook-link {
  &:hover {
    cursor: pointer;
  }
  &:before {
    content: '\1F44D';
  }
}
</style>

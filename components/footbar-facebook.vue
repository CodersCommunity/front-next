<template>
  <FootbarColumn>
    <template #header>Facebook Pasja Informatyki</template>
    <template #links>
      <li>
        <a
          class="facebook-link"
          href="https://www.facebook.com/pasjainformatykifanpage/"
        >
          Polub nas na Facebooku
        </a>
      </li>
    </template>
  </FootbarColumn>
</template>

<style lang="scss" scoped>
.facebook-link {
  &:before {
    content: '\1F44D';
  }
}
</style>

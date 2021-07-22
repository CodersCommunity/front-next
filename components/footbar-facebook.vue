<template>
  <FootbarColumn>
    <template v-slot:header>Facebook Pasja Informatyki</template>
    <template v-slot:links>
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

<script></script>

<style lang="scss" scoped>
.facebook-link {
  &:before {
    content: '\1F44D';
  }
}
</style>

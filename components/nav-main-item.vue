<template>
  <li class="list-item">
    <router-link class="link" :to="linkTo">
      <img class="icon" :src="icon" width="48" height="48" alt="" />
      <span class="link-text" v-text="text" />
    </router-link>
  </li>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    text: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    linkTo: {
      type: String,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped>
.link {
  position: relative;
  display: block;
  width: size(62);
  height: size(62);
  padding: size(7);

  font-weight: bold;
  text-align: center;
  color: var(--nav-main--item--text-color);
  text-decoration: none;
  outline: none;

  transition: background-color 0.2s;

  &.nuxt-link-active {
    background-color: var(--nav-main--item-hover--background-color);
  }

  &:hover,
  &:focus {
    background-color: var(--nav-main--item-hover--background-color);

    .link-text {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    }
  }

  @include mobile {
    width: 100%;
    height: auto;
    text-align: left;
    display: flex;
    align-items: center;
  }
}

.link-text {
  position: absolute;
  top: 100%;
  left: 0;

  width: size(170);

  padding: size(7);
  font-size: size(14);

  background-color: var(--nav-main--item-hover--background-color);
  color: var(--nav-main-item-text);

  opacity: 0;
  visibility: hidden;
  transform: translateY(size(10));

  transition: opacity 0.2s, visibility 0.2s, transform 0.2s;

  @include mobile {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);

    position: static;
    background-color: transparent;
    width: auto;
    padding: 0;
  }
}

.icon {
  width: size(48);
  height: size(48);

  @include mobile {
    width: size(34);
    height: size(34);
    margin-right: size(10);
  }
}
</style>

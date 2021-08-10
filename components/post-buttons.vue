<template>
  <div class="buttons">
    <div class="buttons__left">
      <BaseButton v-if="isQuestion" color="success" @click="$emit('comment')">
        💬 odpowiedz
      </BaseButton>
      <BaseButton
        :color="isComment ? 'secondary' : 'primary'"
        :small="isComment"
        :title="isComment && 'Skomentuj'"
        @click="$emit('comment')"
      >
        💬<span :class="{ 'visually-hidden': isComment }"> skomentuj </span>
      </BaseButton>
    </div>
    <div class="buttons__right">
      <BaseButton
        v-if="canReport"
        :color="isComment ? 'secondary' : 'primary'"
        :small="isComment"
        title="Zgłoś"
        @click="$emit('report')"
      >
        🏳<span class="visually-hidden">Zgłoś pytanie</span>
      </BaseButton>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    isComment: {
      type: Boolean,
      required: true,
    },
    isQuestion: {
      type: Boolean,
      required: true,
    },
    canReport: {
      type: Boolean,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped>
.buttons {
  width: 100%;
  margin-top: 10px;
  padding-top: 10px;
  border-top: 1px solid var(--question--divider--color);
  display: flex;
  justify-content: space-between;

  &__left button {
    margin-right: size(6);
  }

  &__right button {
    margin-left: size(6);
  }
}
</style>

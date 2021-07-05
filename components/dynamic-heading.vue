<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    level: {
      type: Number,
      required: true,
    },
  },
  render(createElement) {
    return createElement('h' + this.level, this.$slots.default)
  },
})
</script>

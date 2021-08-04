import Vue from 'vue'
import { pluralization } from '@/assets/ts/pluralization'

declare module 'vue/types/vue' {
  interface Vue {
    $pluralization: typeof pluralization
  }
}

Vue.prototype.$pluralization = pluralization

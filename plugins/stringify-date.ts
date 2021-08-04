import Vue from 'vue'
import { stringifyDate } from '@/assets/ts/stringify-date'

declare module 'vue/types/vue' {
  interface Vue {
    $stringifyDate: typeof stringifyDate
  }
}

Vue.prototype.$stringifyDate = stringifyDate

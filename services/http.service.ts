import cookie from 'cookie'
import { Plugin } from '@nuxt/types'
import { Api } from './__generated-api'
import {
  Q2A_COOKIE_HEADER,
  SET_Q2A_COOKIE_HEADER,
} from '~/server-middleware/api.middleware'

declare module 'vue/types/vue' {
  interface Vue {
    $httpService: Api<unknown>
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $httpService: Api<unknown>
  }
  interface Context {
    $httpService: Api<unknown>
  }
}

declare module 'vuex/types/index' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Store<S> {
    $httpService: Api<unknown>
  }
}

const httpServicePlugin: Plugin = ({ app }, inject) => {
  const httpService = new Api({
    baseURL: process.env.API_MIDDLEWARE_URL,
  })

  // Rewrite q2a-cookie from cookie to q2a-cookie header
  httpService.instance.interceptors.request.use((config) => {
    const q2aCookie = app.$cookies.get(Q2A_COOKIE_HEADER)
    if (q2aCookie) config.headers[Q2A_COOKIE_HEADER] = q2aCookie
    return config
  })

  // Merge new q2a-cookies with current q2a-cookies
  httpService.instance.interceptors.response.use((res) => {
    if (!res.headers[SET_Q2A_COOKIE_HEADER]) return res

    const currentQ2aCookies = cookie.parse(app.$cookies.get(Q2A_COOKIE_HEADER))
    const newQ2aCookies = cookie.parse(res.headers[SET_Q2A_COOKIE_HEADER])
    const combinedCookies = { ...currentQ2aCookies, ...newQ2aCookies }
    const cookieString = encodeURIComponent(
      Object.entries(combinedCookies)
        .map(([name, value]) => `${name}=${value}`)
        .join('; ')
    )

    app.$cookies.set(Q2A_COOKIE_HEADER, cookieString)

    return res
  })

  inject('httpService', httpService)
}

export default httpServicePlugin

import { Context } from '@nuxt/types'

export default function ({ route, redirect }: Context) {
  if (route.fullPath.match(/^\/categories/)) {
    redirect(301, '/kategorie')
  }

  if (route.fullPath.match(/^\/login/)) {
    redirect(301, '/logowanie')
  }

  // TODO handle query params
  if (route.fullPath.match(/^\/questions/)) {
    redirect(301, '/pytania')
  }
}

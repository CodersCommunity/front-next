import { Context } from '@nuxt/types'

export default function ({ route, redirect }: Context) {
  if (route.fullPath.match(/^\/categories/)) {
    redirect(301, '/kategorie')
  }
}

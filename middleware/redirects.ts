import { Context } from '@nuxt/types'

import { questionsEngToPl } from '@/constants'

export default function ({ route, redirect }: Context) {
  if (route.path.match(/^\/categories/)) {
    redirect(301, '/kategorie')
  }

  if (route.path.match(/^\/login/)) {
    redirect(301, '/logowanie')
  }

  if (route.fullPath.match(/^\/questions/)) {
    let params = route.fullPath.split('?')[1]

    if (!params) return redirect(301, '/pytania')

    for (const paramOrOption of Object.keys(questionsEngToPl)) {
      params = params.replace(
        paramOrOption,
        // @ts-ignore
        queryParamsOrOptions[paramOrOption]
      )
    }
    redirect(301, `/pytania?${params}`)
  }
}

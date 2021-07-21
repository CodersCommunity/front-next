import { Context } from '@nuxt/types'

import { questionsEngToPl } from '@/constants'

export default function ({ route, redirect }: Context) {
  if (route.path.match(/^\/categories/)) {
    redirect(301, '/kategorie')
  }

  if (route.path.match(/^\/login/)) {
    redirect(301, '/logowanie')
  }

  if (route.path.match(/^\/questions/)) {
    if (!route.query) return redirect(301, '/pytania')

    const newQueryParams = {}

    translateKeysAndValuesToPL(route.query, newQueryParams, questionsEngToPl)

    transformStartToPage(route.query, newQueryParams)

    const newUrl = makeNewUrl('/pytania', newQueryParams)

    redirect(301, newUrl)
  }
}

function transformStartToPage(
  queryParams: any,
  newQueryParams: Record<string, string>
) {
  const parsedStart = parseInt(queryParams.start)
  if (!parsedStart) return

  let calculatedPage = Math.floor(parseInt(queryParams.start) / 20) + 1

  if (!calculatedPage) calculatedPage = 1

  // @ts-ignore
  newQueryParams.strona = calculatedPage
}

function translateKeysAndValuesToPL(
  queryParams: any,
  newQueryParams: Record<string, string>,
  translationLookup: Record<string, string>
) {
  Object.keys(queryParams).reduce(
    (total: Record<string, string>, current: string) => {
      // @ts-ignore
      const keyTranslation = translationLookup[current]
      if (keyTranslation) {
        // @ts-ignore
        total[keyTranslation] = queryParams[current]
      }

      const valueTranslation = translationLookup[queryParams[current]]
      if (valueTranslation) {
        total[keyTranslation] = valueTranslation
      }

      return total
    },
    newQueryParams
  )
}

function makeNewUrl(baseRoute: string, newQueryParams: Record<string, string>) {
  baseRoute += '?'
  for (const key of Object.keys(newQueryParams)) {
    // @ts-ignore
    const keyValue = `${key}=${newQueryParams[key]}`
    baseRoute += `${keyValue}`
  }
  return baseRoute
}

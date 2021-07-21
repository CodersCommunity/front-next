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

    const queryWithPage = transformStartToPage(route.query)

    const newQueryParams = translateKeysAndValuesToPL(
      route.query,
      questionsEngToPl,
      queryWithPage
    )

    redirect({ path: '/pytania', query: newQueryParams })
  }
}

/**
 * Make new query object with start transformed to page (translated to PL)
 * @param queryParams
 */

function transformStartToPage(queryParams: any): { strona: number } | {} {
  const parsedStart = parseInt(queryParams.start)
  if (!parsedStart) return {}

  let calculatedPage = Math.floor(parseInt(queryParams.start) / 20) + 1

  if (!calculatedPage) calculatedPage = 1

  return { strona: calculatedPage }
}

/**
 * Translates keys and values according based on a translation dictionary
 * @param queryParams object to be translated
 * @param translationLookup translation dictionary
 * @param newQueryParams object to populate
 */
function translateKeysAndValuesToPL(
  queryParams: any,
  translationLookup: Record<string, string>,
  newQueryParams: any = {}
) {
  return Object.keys(queryParams).reduce(
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
    { ...newQueryParams }
  )
}

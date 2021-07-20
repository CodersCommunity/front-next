const queryParamsMap = {
  sort: 'sortowanie',
  page: 'strona',
}

const sortOptionsMap = {
  votes: 'najwięcej-głosów',
  answers: 'najwięcej-odpowiedzi',
  views: 'najwięcej-odwiedzin',
  hot: 'gorące',
  date: 'najnowsze',
}

/**
 * @description questions route query params and options translation
 */
export const questionsEngToPl = {
  ...queryParamsMap,
  ...sortOptionsMap,
}

// TODO move translations for API compatibility here

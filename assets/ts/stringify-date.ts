import { pluralization } from '@/assets/ts/pluralization'

/**
 * @param {Date} date Date to represent
 * @returns {string} Humanized representation of date
 *
 * @example
 * // 15 sekund temu
 * // 4 minuty temu
 * // godzinę temu
 * // 3 godziny temu
 * // wczoraj
 * // 23 maja 2018
 */
export function stringifyDate(date: Date | string, now = new Date()): string {
  date = new Date(date)
  const secondsDiff = Math.floor((now.getTime() - date.getTime()) / 1000)

  if (secondsDiff < 10) {
    return 'przed chwilą'
  }

  if (secondsDiff < 60) {
    return `${secondsDiff} sekund temu`
  }

  const minutesDiff = Math.floor(secondsDiff / 60)

  if (minutesDiff === 1) {
    return 'minutę temu'
  }

  if (minutesDiff < 60) {
    return `${minutesDiff} ${pluralization(
      minutesDiff,
      'minutę',
      'minuty',
      'minut'
    )} temu`
  }

  const hoursDiff = Math.floor(minutesDiff / 60)

  if (hoursDiff === 1) {
    return 'godzinę temu'
  }

  if (hoursDiff < 24) {
    return `${hoursDiff} ${pluralization(
      hoursDiff,
      'godzinę',
      'godziny',
      'godzin'
    )} temu`
  }

  const months = [
    'stycznia',
    'lutego',
    'marca',
    'kwietnia',
    'maja',
    'czerwca',
    'lipca',
    'sierpnia',
    'września',
    'października',
    'listopada',
    'grudnia',
  ]

  if (now.getFullYear() === date.getFullYear()) {
    return `${date.getDay()} ${months[date.getMonth()]}`
  }

  return `${date.getDay()} ${months[date.getMonth()]} ${date.getFullYear()}`
}

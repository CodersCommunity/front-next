/**
 * @param {Number} number Number of items
 * @param {string} form1 Form of word for 1 item e.g. "punkt"
 * @param {string} form2 Form of word for 2-4 items e.g. "punkty"
 * @param {string} form3 Form of word for 0,5+ items e.g. "punktów"
 * @returns {string} Number with pluralized word
 *
 * @example
 * pluralization(2, 'tag', 'tagi', 'tagów') // 2 tagi
 * pluralization(10, 'pytanie', 'pytania', 'pytań') // 10 pytań
 */
export function pluralization(
  number: number,
  form1: string,
  form2: string,
  form3: string
): string {
  number = Math.abs(number)
  if (number === 0) return form3
  if (number === 1) return form1
  if (number < 5) return form2
  return form3
}

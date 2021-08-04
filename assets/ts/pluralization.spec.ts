import { pluralization } from './pluralization'

describe('pluralization function', () => {
  it('returns correct form', () => {
    expect(pluralization(-5, 'punkt', 'punkty', 'punktów')).toBe('punktów')
    expect(pluralization(-2, 'punkt', 'punkty', 'punktów')).toBe('punkty')
    expect(pluralization(-1, 'punkt', 'punkty', 'punktów')).toBe('punkt')
    expect(pluralization(0, 'punkt', 'punkty', 'punktów')).toBe('punktów')
    expect(pluralization(1, 'punkt', 'punkty', 'punktów')).toBe('punkt')
    expect(pluralization(2, 'punkt', 'punkty', 'punktów')).toBe('punkty')
    expect(pluralization(3, 'punkt', 'punkty', 'punktów')).toBe('punkty')
    expect(pluralization(4, 'punkt', 'punkty', 'punktów')).toBe('punkty')
    expect(pluralization(5, 'punkt', 'punkty', 'punktów')).toBe('punktów')
    expect(pluralization(6, 'punkt', 'punkty', 'punktów')).toBe('punktów')
    expect(pluralization(10, 'punkt', 'punkty', 'punktów')).toBe('punktów')
    expect(pluralization(1000, 'punkt', 'punkty', 'punktów')).toBe('punktów')
  })
})

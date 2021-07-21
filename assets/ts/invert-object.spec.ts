import { invertObject } from './invert-object'

describe('invertObject function', () => {
  it('swaps keys with values', () => {
    const object = {
      a: 'b',
      c: 'd',
    }

    expect(invertObject(object)).toStrictEqual({
      d: 'c',
      b: 'a',
    })
  })
})

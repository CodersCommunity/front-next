export function invertObject(target: Object): Object {
  const ret = {}

  for (const key in target) {
    // @ts-ignore
    ret[target[key]] = key
  }

  return ret
}

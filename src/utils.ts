export function hasOwn(target: object, key: string) {
  return Object.prototype.hasOwnProperty.call(target, key)
}

export function methodToName(name: string = '') {
  return name.slice(2).toLowerCase()
}

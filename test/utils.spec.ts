import { hasOwn, methodToName } from '../src/utils'

test('has own property', () => {
  const a = { b: 1 }
  expect(hasOwn(a, 'a')).toBeFalsy()
  expect(hasOwn(a, 'b')).toBeTruthy()
})

test('method to name', () => {
  expect(methodToName('isName')).toBe('name')
  expect(methodToName('isWindows')).toBe('windows')
})

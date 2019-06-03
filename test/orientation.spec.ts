import Orientation from '../src/orientation'

test('Successfully created an instance', () => {
  expect(new Orientation()).toBeInstanceOf(Orientation)
})

test('screen methods', () => {
  const o = new Orientation()
  expect(o.isLandscape()).toBeTruthy()
  expect(o.isPortrait()).toBeFalsy()
})

test('screen orientation', () => {
  const o = new Orientation()
  expect(o.type).toBe('landscape')
})

test('screen listen', () => {
  const o = new Orientation()
  expect(
    o.listen(function(evt, type) {
      console.log(evt, type)
    })
  ).toBeUndefined()
})

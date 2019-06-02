import Screen from '../src/screen'

test('Successfully created an instance', () => {
  expect(new Screen()).toBeInstanceOf(Screen)
})

test('screen methods', () => {
  const screen = new Screen()
  expect(screen.isLandscape()).toBeTruthy()
  expect(screen.isPortrait()).toBeFalsy()
})

test('screen orientation', () => {
  const screen = new Screen()
  expect(screen.orientation).toBe('landscape')
})

test('screen listen', () => {
  const screen = new Screen()
  expect(
    screen.listen(function(evt, type) {
      console.log(evt, type)
    })
  ).toBeUndefined()
})

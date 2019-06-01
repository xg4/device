import Device from '../src'

test('new device', () => {
  expect(new Device()).toBeInstanceOf(Device)
})

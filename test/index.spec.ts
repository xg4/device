import Device from '../src'

test('Successfully created an instance', () => {
  expect(new Device()).toBeInstanceOf(Device)
})

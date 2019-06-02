import Device from '../src'
import UA from './user-agent'

test('Successfully created an instance', () => {
  expect(new Device()).toBeInstanceOf(Device)
})

test('mac os', () => {
  const device = new Device(UA.mac)
  expect(device.isMac()).toBeTruthy()
  expect(device.isIos()).toBeFalsy()
  expect(device.isDesktop()).toBeTruthy()
})

test('android phone', () => {
  const device = new Device(UA.androidPhone)
  expect(device.isAndroidPhone()).toBeTruthy()
  expect(device.isMobile()).toBeTruthy()
})

test('android phone galaxy s5', () => {
  const device = new Device(UA.galaxyS5)
  expect(device.isAndroidPhone()).toBeTruthy()
  expect(device.isMobile()).toBeTruthy()
})

test('android phone pixel 2', () => {
  const device = new Device(UA.pixel2)
  expect(device.isAndroidPhone()).toBeTruthy()
  expect(device.isMobile()).toBeTruthy()
})

test('blackberry phone', () => {
  const device = new Device(UA.blackberryPhone)
  expect(device.isBlackberryPhone()).toBeTruthy()
  expect(device.isMobile()).toBeTruthy()
})

test('iPhone ios', () => {
  const device = new Device(UA.iPhone)
  expect(device.isIos()).toBeTruthy()
  expect(device.isIphone()).toBeTruthy()
  expect(device.isMobile()).toBeTruthy()
})

test('iPad ios', () => {
  const device = new Device(UA.iPad)
  expect(device.isIos()).toBeTruthy()
  expect(device.isIpad()).toBeTruthy()
  expect(device.isTablet()).toBeTruthy()
})

test('blackberry Z30', () => {
  const device = new Device(UA.blackberryZ30)
  expect(device.isBlackberryPhone()).toBeTruthy()
  expect(device.isMobile()).toBeTruthy()
})

test('windows phone', () => {
  const device = new Device(UA.lumia950)
  expect(device.isWindowsPhone()).toBeTruthy()
  expect(device.isMobile()).toBeTruthy()
})

test('node', () => {
  const device = new Device()
  expect(device.isNode()).toBeTruthy()
})

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

test('iPod ios', () => {
  const device = new Device(UA.iPod)
  expect(device.isIos()).toBeTruthy()
  expect(device.isIpod()).toBeTruthy()
  expect(device.isMobile()).toBeTruthy()
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

test('android tablet Nexus 7', () => {
  const device = new Device(UA.nexus7)
  expect(device.isAndroidTablet()).toBeTruthy()
  expect(device.isTablet()).toBeTruthy()
})

test('blackberry phone', () => {
  const device = new Device(UA.blackberryPhone)
  expect(device.isBlackberryPhone()).toBeTruthy()
  expect(device.isMobile()).toBeTruthy()
})

test('blackberry Z30', () => {
  const device = new Device(UA.blackberryZ30)
  expect(device.isBlackberryPhone()).toBeTruthy()
  expect(device.isMobile()).toBeTruthy()
})

test('blackberry tablet', () => {
  const device = new Device(UA.blackberryTablet)
  expect(device.isBlackberryTablet()).toBeTruthy()
  expect(device.isTablet()).toBeTruthy()
})

test('windows phone', () => {
  const device = new Device(UA.lumia950)
  expect(device.isWindowsPhone()).toBeTruthy()
  expect(device.isMobile()).toBeTruthy()
})

test('windows tablet', () => {
  const device = new Device(UA.windowsTablet)
  expect(device.isWindowsTablet()).toBeTruthy()
  expect(device.isTablet()).toBeTruthy()
})

test('firefox phone', () => {
  const device = new Device(UA.firefoxPhone)
  expect(device.isFirefoxPhone()).toBeTruthy()
  expect(device.isMobile()).toBeTruthy()
})

test('firefox tablet', () => {
  const device = new Device(UA.firefoxTablet)
  expect(device.isFirefoxTablet()).toBeTruthy()
  expect(device.isTablet()).toBeTruthy()
})

test('meego phone', () => {
  const device = new Device(UA.meego)
  expect(device.isMeego()).toBeTruthy()
  expect(device.isMobile()).toBeTruthy()
})

test('google tv', () => {
  const device = new Device(UA.googleTv)
  expect(device.isTv()).toBeTruthy()
})

test('node', () => {
  const device = new Device()
  expect(device.isNode()).toBeTruthy()
})

test('cordova', () => {
  const device = new Device()
  expect(device.isCordova()).not.toBeTruthy()
})

# Device

> device detection (phone, tablet, desktop, os)

[![Build Status](https://www.travis-ci.com/xg4/device.svg?branch=master)](https://www.travis-ci.com/xg4/device)
[![codecov](https://img.shields.io/codecov/c/github/xg4/device.svg)](https://codecov.io/gh/xg4/device)
[![npm](https://img.shields.io/npm/v/@xg4/device.svg)](https://www.npmjs.com/package/@xg4/device)
[![GitHub](https://img.shields.io/github/license/xg4/device.svg)](https://github.com/xg4/device/blob/master/LICENSE)

## Installation

### Install with npm or Yarn

```bash
# npm
$ npm install @xg4/device --save
```

```bash
# yarn
$ yarn add @xg4/device
```

## Usage

```js
import Device from '@xg4/device'

// in browser
const device = new Device()

// in node
const device = new Device(userAgent)
```

### Instance Properties

| prop | description                                                                    |
| ---- | ------------------------------------------------------------------------------ |
| type | device type (mobile, tablet, desktop, `null`)                                  |
| os   | device os (ios, android, blackberry, mac, windows, firefox, meego, tv, `null`) |

### Instance Methods

| prop               | description             |
| ------------------ | ----------------------- |
| isMac              | /                       |
| isIphone           | /                       |
| isIpod             | /                       |
| isIpad             | /                       |
| isIos              | /                       |
| isWindows          | /                       |
| isWindowsPhone     | /                       |
| isWindowsTablet    | /                       |
| isAndroid          | /                       |
| isAndroidPhone     | /                       |
| isAndroidTablet    | /                       |
| isBlackberry       | /                       |
| isBlackberryPhone  | /                       |
| isBlackberryTablet | /                       |
| isFirefox          | firefox os, not browser |
| isFirefoxPhone     | firefox os, not browser |
| isFirefoxTablet    | firefox os, not browser |
| isMeego            | /                       |
| isCordova          | /                       |
| isNode             | /                       |
| isMobile           | /                       |
| isTablet           | /                       |
| isDesktop          | /                       |
| isTv               | /                       |

## Contributing

Welcome

- Fork it

- Submit pull request

## LICENSE

MIT

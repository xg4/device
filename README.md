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
// commonjs in node or browser
const Device = require('@xg4/device').default

// es module
import Device from '@xg4/device'

const device = new Device() // or new Device(userAgent)
```

### Instance Properties

| name | description                                                                    |
| ---- | ------------------------------------------------------------------------------ |
| type | device type (mobile, tablet, desktop, `null`)                                  |
| os   | device os (ios, android, blackberry, mac, windows, firefox, meego, tv, `null`) |

### Instance Methods

| name                   | description                            | return  |
| ---------------------- | -------------------------------------- | ------- |
| find(value:string)     | 传入字符串，进行字符串 `includes` 匹配 | Boolean |
| match(pattern: RegExp) | 传入正则，进行正则 `test` 匹配         | Boolean |
| isMac                  | /                                      | Boolean |
| isIphone               | /                                      | Boolean |
| isIpod                 | /                                      | Boolean |
| isIpad                 | /                                      | Boolean |
| isIos                  | /                                      | Boolean |
| isWindows              | /                                      | Boolean |
| isWindowsPhone         | /                                      | Boolean |
| isWindowsTablet        | /                                      | Boolean |
| isAndroid              | /                                      | Boolean |
| isAndroidPhone         | /                                      | Boolean |
| isAndroidTablet        | /                                      | Boolean |
| isBlackberry           | /                                      | Boolean |
| isBlackberryPhone      | /                                      | Boolean |
| isBlackberryTablet     | /                                      | Boolean |
| isFirefox              | firefox os, not browser                | Boolean |
| isFirefoxPhone         | firefox os, not browser                | Boolean |
| isFirefoxTablet        | firefox os, not browser                | Boolean |
| isMeego                | /                                      | Boolean |
| isCordova              | /                                      | Boolean |
| isNode                 | /                                      | Boolean |
| isMobile               | /                                      | Boolean |
| isTablet               | /                                      | Boolean |
| isDesktop              | /                                      | Boolean |
| isTv                   | /                                      | Boolean |

### Screen Orientation

```js
// commonjs in node or browser
const Orientation = require('@xg4/device').Orientation

// es module
import { Orientation } from '@xg4/device'

const orientation = new Orientation()

orientation.listen(function(event, type) {
  // type === 'landscape' || 'portrait'
})
```

#### Orientation Instance Properties

- `type`: 'landscape' || 'portrait'

#### Orientation Instance Methods

- `isPortrait`: Boolean

- `isLandscape`: Boolean

- `listen`: void

## Contributing

Welcome

- Fork it

- Submit pull request

## LICENSE

MIT

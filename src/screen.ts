import { hasOwn } from './utils'

export default class Screen {
  public get orientation() {
    return this.isLandscape() ? 'landscape' : 'portrait'
  }

  public listen(cb?: (event: Event, type: 'landscape' | 'portrait') => void) {
    let orientationEvent = 'resize'
    if (hasOwn(window, 'onorientationchange')) {
      orientationEvent = 'orientationchange'
    }

    window.addEventListener(
      orientationEvent,
      evt => {
        cb && cb(evt, this.orientation)
      },
      false
    )
  }

  /**
   * @description 竖屏
   */
  public isPortrait() {
    if (screen.orientation && hasOwn(window, 'onorientationchange')) {
      return screen.orientation.type.includes('portrait')
    }

    return window.innerHeight / window.innerWidth > 1
  }

  /**
   * @description 横屏状态
   */
  public isLandscape() {
    if (screen.orientation && hasOwn(window, 'onorientationchange')) {
      return screen.orientation.type.includes('landscape')
    }
    return window.innerHeight / window.innerWidth < 1
  }
}

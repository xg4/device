import { hasOwn } from './utils'

export default class Orientation {
  public get type() {
    return this.isLandscape() ? 'landscape' : 'portrait'
  }

  public listen(cb?: (event: Event, type: 'landscape' | 'portrait') => void) {
    const eventType = hasOwn(window, 'onorientationchange')
      ? 'orientationchange'
      : 'resize'

    window.addEventListener(
      eventType,
      evt => {
        cb && cb(evt, this.type)
      },
      false
    )
  }

  /**
   * @description 竖屏状态
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

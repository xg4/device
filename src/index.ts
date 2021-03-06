import { methodToName } from './utils'
export { default as Orientation } from './orientation'

export default class Device {
  public get type() {
    const type = (['isMobile', 'isTablet', 'isDesktop'] as const).find(key =>
      this[key]()
    )
    return methodToName(type) || null
  }

  public get os() {
    const os = ([
      'isIos',
      'isAndroid',
      'isBlackberry',
      'isMac',
      'isWindows',
      'isFirefox',
      'isMeego',
      'isTv'
    ] as const).find(key => this[key]())
    return methodToName(os) || null
  }

  private userAgent: string

  private lowerCase: string

  public constructor(userAgent?: string) {
    try {
      this.userAgent = userAgent || window.navigator.userAgent
    } catch {
      this.userAgent = ''
    }

    this.lowerCase = this.userAgent.toLowerCase()
  }

  public match(pattern: RegExp) {
    return pattern.test(this.userAgent)
  }

  public find(value: string) {
    return this.lowerCase.includes(value)
  }

  public isMac() {
    return this.find('mac')
  }

  public isIphone() {
    return !this.isWindows() && this.find('iphone')
  }

  public isIpod() {
    return this.find('ipod')
  }

  public isIpad() {
    return this.find('ipad')
  }

  public isIos() {
    return this.isIphone() || this.isIpad() || this.isIpod()
  }

  public isWindows() {
    return this.find('windows')
  }

  public isWindowsPhone() {
    return this.isWindows() && this.find('phone')
  }

  public isWindowsTablet() {
    return this.isWindows() && (this.find('touch') && !this.isWindowsPhone())
  }

  public isAndroid() {
    return !this.isWindows() && this.find('android')
  }

  public isAndroidPhone() {
    return this.isAndroid() && this.find('mobile')
  }

  public isAndroidTablet() {
    return this.isAndroid() && !this.find('mobile')
  }

  public isBlackberry() {
    return this.find('blackberry') || this.find('bb10') || this.find('rim')
  }

  public isBlackberryPhone() {
    return this.isBlackberry() && !this.find('tablet')
  }

  public isBlackberryTablet() {
    return this.isBlackberry() && this.find('tablet')
  }

  /**
   * @description firefox os, not browser
   */
  public isFirefox() {
    return (this.find('(mobile') || this.find('(tablet')) && this.find(' rv:')
  }

  public isFirefoxPhone() {
    return this.isFirefox() && this.find('mobile')
  }

  public isFirefoxTablet() {
    return this.isFirefox() && this.find('tablet')
  }

  public isMeego() {
    return this.find('meego')
  }

  public isCordova() {
    return (
      typeof window !== 'undefined' &&
      window.cordova &&
      location.protocol === 'file:'
    )
  }

  public isNode() {
    return typeof process === 'object'
  }

  public isMobile() {
    return (
      this.isAndroidPhone() ||
      this.isIphone() ||
      this.isIpod() ||
      this.isWindowsPhone() ||
      this.isBlackberryPhone() ||
      this.isFirefoxPhone() ||
      this.isMeego()
    )
  }

  public isTablet() {
    return (
      this.isIpad() ||
      this.isAndroidTablet() ||
      this.isBlackberryTablet() ||
      this.isWindowsTablet() ||
      this.isFirefoxTablet()
    )
  }

  public isDesktop() {
    return !this.isTablet() && !this.isMobile()
  }

  public isTv() {
    return [
      'googletv',
      'viera',
      'smarttv',
      'internet.tv',
      'netcast',
      'nettv',
      'appletv',
      'boxee',
      'kylo',
      'roku',
      'dlnadoc',
      'roku',
      'pov_tv',
      'hbbtv',
      'ce-html'
    ].some(tv => this.find(tv))
  }
}

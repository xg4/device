export default class XDevice {
  private static instance: XDevice

  static create(userAgent?: string) {
    if (!this.instance) {
      this.instance = new this(userAgent)
    }
    return this.instance
  }

  private userAgent: string

  constructor(userAgent?: string) {
    this.userAgent = userAgent || (navigator && navigator.userAgent)
  }

  find(regStr: string) {
    return new RegExp(regStr, 'i').test(this.userAgent)
  }
  /**
   * ios
   */
  isIphone() {
    return !this.isWindows() && this.find('iphone')
  }
  isIpod() {
    return this.find('ipod')
  }
  isIpad() {
    return this.find('ipad')
  }
  isIos() {
    return this.isIphone() || this.isIpad() || this.isIpod()
  }
  /**
   * windows
   */
  isWindows() {
    return this.find('windows')
  }
  isWindowsPhone() {
    return this.isWindows() && this.find('phone')
  }
  isWindowsTablet() {
    return this.isWindows() && (this.find('touch') && !this.isWindowsPhone())
  }
  /**
   * android
   */
  isAndroid() {
    return !this.isWindows() && this.find('android')
  }
  isAndroidPhone() {
    return this.isAndroid() && this.find('mobile')
  }
  isAndroidTablet() {
    return this.isAndroid() && !this.find('mobile')
  }
  /**
   * blackberry
   */
  isBlackberry() {
    return this.find('blackberry') || this.find('bb10') || this.find('rim')
  }
  isBlackberryPhone() {
    return this.isBlackberry() && !this.find('tablet')
  }
  isBlackberryTablet() {
    return this.isBlackberry() && this.find('tablet')
  }
  /**
   * firefox
   */
  isFirefox() {
    return (this.find('mobile') || this.find('tablet')) && this.find('firefox')
  }
  isFirefoxPhone() {
    return this.isFirefox() && this.find('mobile')
  }
  isFirefoxTablet() {
    return this.isFirefox() && this.find('tablet')
  }
  /**
   * other
   */
  isMeego() {
    return this.find('meego')
  }
  isCordova() {
    return window && location.protocol === 'file:'
  }
  isNode() {
    return typeof process === 'object'
  }
  isMobile() {
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
  isTablet() {
    return (
      this.isIpad() ||
      this.isAndroidTablet() ||
      this.isBlackberryTablet() ||
      this.isWindowsTablet() ||
      this.isFirefoxTablet()
    )
  }
  isDesktop() {
    return !this.isTablet() && !this.isMobile()
  }
  isTv() {
    const television = [
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
    ]
    return television.some(tv => this.find(tv))
  }
}

const queryString = require('qs')
// 应用授权作用域，snsapi_base （不弹出授权页面，直接跳转，只能获取用户openid），
// snsapi_userinfo （弹出授权页面，可通过openid拿到昵称、性别、所在地。并且，即使在未关注的情况下，只要用户授权，也能获取其信息）
const SCOPES = ['snsapi_base', 'snsapi_userinfo']

class VueWechatAuthPlugin {
  install (Vue, options) {
    let wechatAuth = this
    this.setAppId(options.appid)
    this.scope = SCOPES[options.scope ? 1 : 0]
    Vue.mixin({
      created () {
        this.$wechatAuth = wechatAuth
      }
    })
  }

  constructor () {
    this.appid = null
    this.redirectUri = null
    this.scope = null
    this._code = null
    this._redirectUri = null
  }

  static makeState () {
    return (
      Math.random()
        .toString(36)
        .substring(2, 15) +
      Math.random()
        .toString(36)
        .substring(2, 15)
    )
  }

  setAppId (appid) {
    this.appid = appid
  }

  set redirectUri (redirectUri) {
    this._redirectUri = encodeURIComponent(redirectUri)
  }

  get redirectUri () {
    return this._redirectUri
  }

  get state () {
    return localStorage.getItem('wechat_auth:state')
  }

  set state (state) {
    localStorage.setItem('wechat_auth:state', state)
  }

  get authUrl () {
    if (this.appid === null) {
      throw new Error('appid must not be null')
    }
    if (this.redirectUri === null) {
      throw new Error('redirect uri must not be null')
    }
    this.state = VueWechatAuthPlugin.makeState()
    return `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${this.appid}&redirect_uri=${
      this.redirectUri
    }&response_type=code&scope=${this.scope}&state=${this.state}#wechat_redirect`
  }

  returnFromWechat (redirectUri) {
    let parsedUrl = queryString.parse(redirectUri.split('?')[1])
    if (process.env.NODE_ENV === 'development') {
      this.state = null
      this._code = parsedUrl.code
    } else {
      if (this.state === null) {
        throw new Error("You did't set state")
      }
      if (parsedUrl.state.replace('#/', '') === this.state) {
        this.state = null
        this._code = parsedUrl.code
      } else {
        this.state = null
        throw new Error(`Wrong state: ${parsedUrl.state}`)
      }
    }
  }

  get code () {
    console.log('code', this._code)
    if (this._code === null) {
      throw new Error('Not get the code from wechat server!')
    }

    const code = this._code
    this._code = null
    return code
  }
}

const vueWechatAuthPlugin = new VueWechatAuthPlugin()
export default vueWechatAuthPlugin

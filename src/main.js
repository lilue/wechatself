// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import router from './router'
import { WechatPlugin } from 'vux'
import wechatAuth from '@/utils/wechatAuth'

Vue.use(VueRouter)
Vue.use(WechatPlugin)

Vue.use(wechatAuth, {
  appid: 'wx5550d0feaccf7347',
  scope: 'snsapi_userinfo'
})

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')

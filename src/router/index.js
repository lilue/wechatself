import Vue from 'vue'
import Router from 'vue-router'
import wechatAuth from '@/utils/wechatAuth'
import axios from 'axios'

Vue.use(Router)
Vue.prototype.$axios = axios

// 截取code
function getCode () {
  const url = location.search
  const baseUrl = location.origin + location.pathname
  let code = ''
  if (url.indexOf('?') !== -1) {
    const split = url.split('?code=')
    code = split[1].split('&')[0]
  }
  // 把code和baseUrl一起返回
  return [code, baseUrl]
}

// 获取sign
function getSign (next) {
  let theCode = getCode()
  if (theCode) {
    const formData = new FormData()
    formData.append('code', theCode[0])
    formData.append('url', theCode[1])
    axios({
      method: 'post',
      url: 'http://127.0.0.1:8000/api/wechat/code_access_token/',
      data: formData
    }).then(res => {
      console.log(res)
      next()
    })
  } else if (localStorage.getItem('wx_sign') == null) {
    wechatAuth.redirectUri = window.location.href
    window.location.href = wechatAuth.authUrl
  } else {
    next()
  }
}

const router = new Router({
  mode: 'history', // 去掉url中的#
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/home/Home'),
      meta: {
        title: '首页'
      }
    }, {
      path: '/apply',
      name: 'Apply',
      component: () => import('@/views/health/Apply'),
      meta: {
        title: '添加就诊人'
      }
    }, {
      path: '/card_list',
      name: 'CardList',
      component: () => import('@/views/health/CardList'),
      meta: {
        title: '就诊人列表'
      }
    }, {
      path: '/pay/confirm',
      name: 'PayConfirm',
      component: () => import('@/views/payment/Confirm'),
      meta: {
        title: '确认支付'
      }
    }, {
      path: '*',
      name: '404',
      component: () => import('@/components/404'),
      meta: {
        title: '页面走丢了'
      }
    }
  ]
})

router.beforeEach(async (to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  getSign(next)
  // if (process.env.NODE_ENV === 'production') {
  //   getSign(next)
  // } else {
  //   next()
  // }
})

export default router

// export default new Router({
//   mode: 'history',
//   routes: [
//     {
//       path: '/',
//       name: 'Home',
//       component: () => import('@/views/home/Home')
//     }, {
//       path: '/test',
//       name: 'test',
//       component: () => import('@/views/health/Apply'),
//       meta: {
//         title: '添加就诊人'
//       }
//     }
//   ]
// })

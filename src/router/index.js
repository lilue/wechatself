import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

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
  next()
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

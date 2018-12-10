import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store/store'
import _this from './main.js'

Vue.use(Router)

const _import = filePath => () => import('./views/' + filePath + '.vue')

const router = new Router({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'index',
      component: _import('index'),
      meta: { lowerSidebar: 'hidden' }
    },
    {
      path: '/orders',
      name: 'orders',
      component: _import('orders/index'),
      meta: { name: 'orders' },
      redirect: { name: 'allOrders', query: {order_status: 'ALL'} },
      children: [
        {
          path: 'all',
          name: 'allOrders',
          component: _import('orders/all'),
          meta: {name: 'orders'}
        },
        {
          path: 'waitPay',
          name: 'waitPay',
          component: _import('orders/waitPay'),
          meta: {name: 'orders'}
        },
        {
          path: 'waitConfirm',
          name: 'waitConfirm',
          component: _import('orders/waitConfirm'),
          meta: {name: 'orders'}
        },
        {
          path: 'waitDelivery',
          name: 'waitDelivery',
          component: _import('orders/waitDelivery'),
          meta: {name: 'orders'}
        },
        {
          path: 'delivered',
          name: 'delivered',
          component: _import('orders/delivered'),
          meta: {name: 'orders'}
        },
        {
          path: 'finish',
          name: 'finish',
          component: _import('orders/finish'),
          meta: {name: 'orders'}
        },
        {
          path: 'refund',
          name: 'refund',
          component: _import('orders/refund'),
          meta: {name: 'orders'}
        },
        {
          path: 'closed',
          name: 'closed',
          component: _import('orders/closed'),
          meta: {name: 'orders'}
        },
        {
          path: 'detail/:id',
          name: 'orderDetail',
          component: _import('orders/detail'),
          meta: {name: 'orders'}
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: _import('login/index'),
      meta: { lowerSidebar: 'hidden', sidebar: 'hidden', appHeader: 'hidden' }
    },
    {
      path: '/stock',
      name: 'stock',
      component: _import('stock/index'),
      meta: { name: 'stock' },
      redirect: { name: 'sales', query: { page_size: 10, page: 1 } },
      children: [
        {
          path: 'sales',
          name: 'sales',
          component: _import('stock/sales'),
          meta: { name: 'stock' }
        },
        {
          path: 'out',
          name: 'out',
          component: _import('stock/out'),
          meta: { name: 'stock' }
        },
        {
          path: 'depot',
          name: 'depot',
          component: _import('stock/depot'),
          meta: { name: 'stock' }
        },
        {
          path: 'warning',
          name: 'warning',
          component: _import('stock/warning'),
          meta: { name: 'stock' }
        }
      ]
    },
    {
      path: '/system',
      name: 'system',
      component: _import('system/system'),
      meta: { name: 'system' },
      redirect: { name: 'basicInfo' },
      children: [
        {
          path: 'basicInfo',
          name: 'basicInfo',
          component: _import('system/basicInfo'),
          meta: { name: 'system' }
        },
        {
          path: 'address',
          name: 'address',
          component: _import('system/address'),
          meta: { name: 'system' }
        },
        {
          path: 'area',
          name: 'area',
          component: _import('system/area'),
          meta: { name: 'system' }
        },
        {
          path: 'editArea',
          name: 'editArea',
          component: _import('system/editArea'),
          meta: { name: 'system' }
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  const lowerSidebarShow = !(to.meta.lowerSidebar === 'hidden')
  store.dispatch('changeLowerSidebar', { show: lowerSidebarShow })
  next()
})
router.afterEach((to, from) => {
  _this.$modal.hide('printOrder')
})

export default router

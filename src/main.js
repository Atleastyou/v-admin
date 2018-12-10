import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from '@/store/store'
import '@/assets/css/index.css'
import '@/assets/css/element-variables.scss'
import axios from '@/utils/axios'
import ElementUI from 'element-ui'
// import moment from 'moment'
import VModal from 'vue-js-modal'

// Vue.filter('orderStatus', function (status) {
//   //   switch (status) {
//   //     case '待付款':
//   //       return 'waitPay'
//   //     case '待确定':
//   //       return 'waitConfirm'
//   //     case '待发货':
//   //       return 'waitDelivery'
//   //     case '已发货':
//   //       return 'delivered'
//   //     case '已成功':
//   //       return 'finish'
//   //     case '申请退款中':
//   //       return 'refund'
//   //     case '已关闭':
//   //       return 'closed'
//   //   }
// })

Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.use(ElementUI)
Vue.use(VModal)

// moment.locale('en', {
//   weekdays: '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
//   longDateFormat: {
//     LT: 'A h:mm',
//     LTS: 'A h:mm:ss',
//     L: 'YYYY-MM-DD',
//     LL: 'YYYY 年 MM 月 DD',
//     LLL: 'YYYY-MM-DD LT',
//     LLLL: 'YYYY年MMMD日ddddAh点mm分',
//     l: 'M/D/YYYY',
//     ll: 'MMM D YYYY',
//     lll: 'MMM D YYYY LT',
//     llll: 'ddd, MMM D YYYY LT'
//   },
//   relativeTime: {
//     future: '%s内',
//     past: '%s前',
//     s: '%d秒',
//     m: '1分钟',
//     mm: '%d分钟',
//     h: '1小时',
//     hh: '%d小时',
//     d: '1天',
//     dd: '%d天',
//     M: '1个月',
//     MM: '%d个月',
//     y: '1年',
//     yy: '%d年'
//   },
//   calendar: {
//     sameDay: 'h:mm',
//     nextDay: '[明天] LT',
//     nextWeek: 'dddd LT',
//     lastDay: '[昨天] h:mm',
//     lastWeek: 'dddd h:mm',
//     sameElse: 'LLL'
//   }
// })

export default new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

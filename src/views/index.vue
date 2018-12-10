<template lang="pug">
.index
  view-header.index-header(title="首页看板")
  .card
    .card-icon
      .icon-money
    .card-info
      .card-title {{total.today_order_money.num}}
      .card-subtitle 今日订单总额
  .links
    h3.links-title 待处理订单
    .links-container
      router-link.link(v-for="item in todoOrders", tag="div", :to="{name: item.routeName, query: item.query}")
        .link-icon(:class="item.icon.class", :style="item.icon.style")
        .link-name {{item.name}}
        .link-number {{item.number}}
  .links
    h3.links-title 其他待处理
    .links-container
      router-link.link(v-for="item in todoOther", tag="div", :to="{name: item.routeName, query: item.query}")
        .link-icon(:class="item.icon.class", :style="item.icon.style")
        .link-name {{item.name}}
        .link-number {{item.number}}
</template>

<script>
import viewHeader from '@/components/viewHeader'
import { panel } from 'api'
export default {
  name: 'index',
  data () {
    return {
      total: {
        today_order_money: {}
      },
      todoOrders: {
        order_wait_pay: { icon: { class: 'icon-pro', style: {color: '#D87808'} }, name: '待付款', number: 0, routeName: 'waitPay', query: {order_status: 'WAITPAY'} },
        order_wait_confirm: { icon: { class: 'icon-dete', style: {color: '#5080C6'} }, name: '待确定', number: 0, routeName: 'waitConfirm', query: {order_status: 'WAITCONFIRM'} },
        order_wait_deliver: { icon: { class: 'icon-car-yello', style: {color: '#D87808'} }, name: '待发货', number: 0, routeName: 'waitDelivery', query: {order_status: 'WAITSEND'} },
        order_delivered: { icon: { class: 'icon-car-green', style: {color: '#32A25C'} }, name: '已发货', number: 0, routeName: 'delivered', query: {order_status: 'WAITRECEIVE'} },
        order_success: { icon: { class: 'icon-success', style: {color: '#32A25C'} }, name: '已成功', number: 0, routeName: 'finish', query: {order_status: 'FINISH'} },
        order_refund: { icon: { class: 'icon-refund', style: {color: '#D87808'} }, name: '退款中', number: 0, routeName: 'refund', query: {order_status: 'WAITRETURN'} },
        order_closed: { icon: { class: 'icon-closed', style: {color: '#C2212A'} }, name: '已关闭', number: 0, routeName: 'closed', query: {order_status: 'CLOSED'} }
      },
      todoOther: {
        goods_saling: { icon: { class: 'icon-sale', style: {color: '#D87808'} }, name: '出售中的商品', number: 0, routeName: 'sales', query: { page_size: 10, page: 1 } },
        goods_sold: { icon: { class: 'icon-soldout', style: {color: '#5080C6'} }, name: '已售罄的商品', number: 0, routeName: 'out', query: { page_size: 10, page: 1 } },
        goods_shelf: { icon: { class: 'icon-ware', style: {color: '#32A25C'} }, name: '仓库中的商品', number: 0, routeName: 'depot', query: { page_size: 10, page: 1 } },
        goods_warning_stock: { icon: { class: 'icon-warning', style: {color: '#C2212A'} }, name: '库存预警的商品', number: 0, routeName: 'warning', query: { page_size: 10, page: 1 } }
      }
    }
  },
  methods: {
    async getPanel () {
      try {
        const { data } = await this.$axios.get(panel)
        this.total.today_order_money = data.today_order_money
        Object.keys(this.todoOrders).forEach(key => {
          if (data[key]) this.todoOrders[key].number = data[key].num
          else delete this.todoOrders[key]
        })
        Object.keys(this.todoOther).forEach(key => {
          if (data[key]) this.todoOther[key].number = data[key].num
          else delete this.todoOther[key]
        })
      } catch ({msg}) {
        this.$message.error(msg)
      }
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.getPanel()
    })
  },
  components: {
    viewHeader
  }
}
</script>

<style lang="scss" scoped>
.index {
  padding: 0 40px 40px;
}
.index-header {
  border-bottom: 1px solid #DDDDDD;
}
.card {
  width: 320px;
  height: 160px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #C2212A;
  border-radius: 4px;
  padding: 0 40px;
  margin-top: 40px;
}
.card-icon {
  & .icon-money {
    font-size: 60px;
    color: #000;
    opacity: .3;
  }
}
.card-title {
  font-size: 36px;
  color: #FFFFFF;
  line-height: 50px;
}
.card-subtitle {
  font-size: 16px;
  color: #FFFFFF;
  line-height: 22px;
  margin-top: 8px;
}

.links {
  margin-top: 40px;
}
.links-title {
  font-size: 18px;
}
.link {
  width: 160px;
  height: 160px;
  text-align: center;
  background: #fff;
  border-radius: 4px;
  margin-right: 20px;
  margin-top: 20px;
  cursor: pointer;
  display: inline-block;
  &:last-child {
    margin-right: 0;
  }
}
.link-icon {
  margin-top: 20px;
  font-size: 50px
}
.link-name {
  margin-top: 10px;
  line-height: 22px;
  font-size: 16px;
}
.link-number {
  margin-top: 10px;
  line-height: 28px;
  font-size: 20px;
  color: #C2212A;
}
</style>

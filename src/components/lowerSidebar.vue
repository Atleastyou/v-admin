<template lang="pug">
transition(name="sidebar")
  .sidebar(v-show="lowerSidebarShow")
    ul.sidebar-group(v-if="$route.meta.name === 'orders'")
      router-link.sidebar-item(tag="li", :to="{name: 'allOrders', query: {order_status: 'ALL'}}") 全部订单
      router-link.sidebar-item(tag="li", :to="{name: 'waitPay', query: {order_status: 'WAITPAY'}}") 待支付
      router-link.sidebar-item(tag="li", :to="{name: 'waitConfirm', query: {order_status: 'WAITCONFIRM'}}") 待确定
      router-link.sidebar-item(tag="li", :to="{name: 'waitDelivery', query: {order_status: 'WAITSEND'}}") 待发货
      router-link.sidebar-item(tag="li", :to="{name: 'delivered', query: {order_status: 'WAITRECEIVE'}}") 已发货
      router-link.sidebar-item(tag="li", :to="{name: 'finish', query: {order_status: 'FINISH'}}") 已成功
      router-link.sidebar-item(tag="li", :to="{name: 'refund', query: {order_status: 'WAITRETURN'}}") 申请退款中
      router-link.sidebar-item(tag="li", :to="{name: 'closed', query: {order_status: 'CLOSED'}}") 已关闭
    ul.sidebar-group(v-if="$route.meta.name === 'stock'")
      router-link.sidebar-item(tag="li", :to="{name: 'sales', query: { page_size: 10, page: 1 }}") 出售中的商品
      router-link.sidebar-item(tag="li", :to="{name: 'out', query: { page_size: 10, page: 1 }}") 已售罄的商品
      router-link.sidebar-item(tag="li", :to="{name: 'depot', query: { page_size: 10, page: 1 }}") 仓库中的商品
      router-link.sidebar-item(tag="li", :to="{name: 'warning', query: { page_size: 10, page: 1 }}") 库存预警的商品
    ul.sidebar-group(v-if="$route.meta.name === 'system'")
      router-link.sidebar-item(tag="li", :to="{name: 'basicInfo'}") 基本信息
      router-link.sidebar-item(tag="li", :to="{name: 'address'}") 退货地址管理
      router-link.sidebar-item(tag="li", :to="{name: 'area'}") 销售区域模板
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'lowerSidebar',
  computed: {
    ...mapState({
      lowerSidebarShow: state => state.ui.lowerSidebar.show
    })
  }
}
</script>

<style lang="scss" scoped>
.sidebar-enter-active, .sidebar-leave-active{
  transition: width .35s cubic-bezier(0.23, 1, 0.32, 1);
}
.sidebar-enter, .sidebar-leave-active {
  width: 0px!important;
}
.router-link-exact-active {
  background: #F5F5F7!important;
}
.sidebar {
  width: 142px;
  height: 100vh;
  background: #DDDDDD;
  flex-shrink: 0;
  overflow: hidden;
}
.sidebar-group {
  width: 142px;
}
.sidebar-item {
  padding: 0 28px;
  width: 100%;
  height: 46px;
  line-height: 46px;
  font-size: 12px;
  color: #7B7B7B;
  cursor: pointer;
  position: relative;
  &:hover {
    background: #F5F5F7;
  }
  &:before {
    content: '';
    display: inline-block;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    background: #7B7B7B;
    position: absolute;
    top: 50%;
    left: 20px;
    transform: translateY(-50%);
  }
}
</style>

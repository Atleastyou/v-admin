<template lang="pug">
modal.print(name="printOrder", width="100%", height="100%" @before-open="beforeOpen")
  .el-icon-close(@click="close" v-show="!isPrint")
  .print-title(v-show="!isPrint") 订单信息
  .print-body(ref="content")
    table(cellspacing="0" border="1" style=" border:1px solid #ddd")
      tr
        th 寄货方
        th 订单详情
      tr
        td(style="width: 50%")
          .table-item.label-weight {{order.suppliers_name}}
          .table-item {{order.address}}
          .table-item
            .table-item-label 电话：
            .table-item-value {{order.suppliers_phone}}
          .table-item
            .table-item-label E-Mail：
            .table-item-value {{order.email}}
          .table-item
            .table-item-label 网址：
            .table-item-value 0755-88888888
        td(style="width: 50%")
          .table-item
            .table-item-label 下单日期：
            .table-item-value {{order.add_time}}
          .table-item
            .table-item-label 订单号：
            .table-item-value {{order.order_sn}}
          .table-item
            .table-item-label 支付方式：
            .table-item-value {{order.pay_name}}
          .table-item
            .table-item-label 配送方式：
            .table-item-value {{order.real_shipping_name}}
          .table-item
            .table-item-label 用户备注：
            .table-item-value {{order.user_note}}
    table(cellspacing="0" border="1"  style=" border:1px solid #ddd")
      tr
        th(colspan="4") 收货方
      tr
        td 收件人
        td 联系电话
        td 收货地址
        td 邮编
      tr
        td {{order.consignee}}
        td {{order.mobile}}
        td {{`${order.province}${order.city}${order.district}${order.address}`}}
        td {{order.zipcode}}
    table(cellspacing="0" border="1" style=" border:1px solid #ddd")
      tr
        th 经销商（区代要求发送物流）
        th 供货商实发物流
      tr
        td(style="width: 50%")
          .table-item
            .table-item-label 物流公司名称：
            .table-item-value {{order.shipping_name}}
          .table-item
            .table-item-label 物流公司电话：
            .table-item-value {{order.shipping_mobile}}
          .table-item
            .table-item-label 物流公司地址：
            .table-item-value {{order.shipping_address}}
          .table-item
            .table-item-label 物流备注：
            .table-item-value {{order.shipping_note}}
        td(style="width: 50%")
          .table-item
            .table-item-label 物流公司：
            .table-item-value {{order.real_shipping_name}}
          .table-item
            .table-item-label 物流单号：
            .table-item-value {{order.invoice_no}}
          .table-item
            .table-item-label 发货件数：
            .table-item-value {{order.send_num}}
          .table-item
            .table-item-label 预计到货时间：
            .table-item-value {{order.arrival_time}}
    table(cellspacing="0" border="1"  style=" border:1px solid #ddd")
      tr
        th 商品名称
        th 状态
        th 规格属性
        th 数量
      tr(v-for="item, index in order.goods")
        td(style="width: 32%") {{item.goods_name}}
        td {{order.order_status}}
        td(style="width: 35%") {{item.spec_key_name}}
        td {{item.goods_num}}
    .table-item-button(v-show="!isPrint")
      el-button(size="mini", @click="print") 打印
</template>

<script>
import { getSupplierInfo } from 'api'
export default {
  name: 'printOrder',
  data () {
    return {
      order: {},
      isPrint: false
    }
  },
  methods: {
    close () {
      this.$modal.hide('printOrder')
    },
    print () {
      this.isPrint = true
      this.$nextTick(() => {
        window.print()
        this.isPrint = false
      })
    },
    async beforeOpen ({params}) {
      this.order = params.order
      const { data } = await this.$axios.get(getSupplierInfo)
      let supplierInfo = {}
      supplierInfo.suppliers_name = data.suppliers_name
      supplierInfo.address = data.address
      supplierInfo.suppliers_phone = data.suppliers_phone
      this.order = {
        ...this.order,
        ...supplierInfo
      }
    }
  }
}
</script>

<style lang="scss">
.print {
  background: #fff;
  z-index: 9999!important;
  position: relative;
}
.el-icon-close {
  position: absolute;
  right: 20px;
  top: 20px;
  font-size: 40px;
  cursor: pointer;
}
.print-title {
  margin-top: 60px;
  font-size: 36px;
  color: #333333;
  text-align: center;
}
.print-body {
  font-size: 14px;
  color: #333;
  width: 1140px;
  margin: 0 auto;
}
.print-body table {
  width: 100%;
  margin-top: 30px;
}
.print-body table th,
.print-body table td {
  padding: 12px;
}
.print-body .table-item {
  display: flex;
  align-items: center;
  height: 20px;
  line-height: 20px;
}
.print-body .table-item .table-item-label,
.label-weight {
  font-weight: 600;
}
.table-item-button {
  text-align: center;
  border: 1px solid rgb(221, 221, 221);
  border-top: none;
  height: 52px;
  line-height: 52px;
}
</style>

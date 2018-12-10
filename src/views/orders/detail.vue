<template lang="pug">
.order(v-if="order.order_status")
  view-header(:title="handles[order.order_status].title || ''", subtitle="商城实物商品交易订单查询及管理")
  section.section.order-handles
    .order-handles-left
      .section-title
        span 当前订单状态：
        span {{order.order_status}}
        p(v-if="order.order_status === '待付款'")
          span 剩余
          em {{handles[order.order_status].coutDown.hours}}
          span 小时
          em {{handles[order.order_status].coutDown.minutes}}
          span 分
          em {{handles[order.order_status].coutDown.seconds}}
          span 秒
      .order-handles-tip {{handles[order.order_status].tip}}
    .order-handles-right
      el-button(v-for="item in handles[order.order_status].buttons", size="small", :type="item.type", @click="item.handle") {{item.label}}
  section.section
    p.section-title 基本信息
    .col-container
      .col
        .col-row
          span.col-row-title 订单ID:
          span.col-row-value {{order.order_id}}
        .col-row
          span.col-row-title E-Mail:
          span.col-row-value {{order.email}}
        .col-row
          span.col-row-title 订单状态:
          span.col-row-value {{order.order_status}}
      .col
        .col-row
          span.col-row-title 订单号:
          span.col-row-value {{order.order_sn}}
        .col-row
          span.col-row-title 下单时间:
          span.col-row-value {{order.add_time}}
        .col-row
          span.col-row-title 支付方式:
          span.col-row-value {{order.pay_name}}
      .col
        .col-row
        .col-row
          span.col-row-title 应付金额:
          span.col-row-value {{order.total_amount}}
        .col-row
          span.col-row-title 支付时间:
          span.col-row-value {{order.pay_time}}
  .section
    .section-title 物流信息
    .col-container
      .col
        .col-header
          .col-header-title 收货信息
          .col-header-empty
        .col-row
          span.col-row-title 收货人:
          span.col-row-value {{order.consignee}}
        .col-row
          span.col-row-title 收货地址:
          span.col-row-value {{`${order.province}${order.city}${order.district}${order.address}`}}
      .col
        .col-header
          .col-header-title 收货信息
          .col-header-empty
        .col-row
          span.col-row-title 联系方式:
          span.col-row-value {{order.mobile}}
        .col-row
          span.col-row-title 留言:
          span.col-row-value {{order.user_note}}
    .border
    .col-container
      .col
        .col-header
          .col-header-title 区代要求物流
          .col-header-empty
        .col-row
          span.col-row-title 物流公司名称:
          span.col-row-value {{order.shipping_name}}
        .col-row
          span.col-row-title 物流公司电话:
          span.col-row-value {{order.shipping_mobile}}
        .col-row
          span.col-row-title 物流公司地址:
          span.col-row-value {{order.shipping_address}}
        .col-row
          span.col-row-title 所在地区:
          span.col-row-value {{`${order.shipping_province}${order.shipping_city}${order.shipping_district}`}}
        .col-row
          span.col-row-title 物流备注:
          span.col-row-value {{order.shipping_note}}
      .col
        .col-header
          .col-header-title 供货商实发物流
          .col-header-empty
        .col-row
          span.col-row-title
            i(v-if="$route.query.editLog") *
            span 物流公司名称:
          span.col-row-value(v-if="!$route.query.editLog") {{order.real_shipping_name}}
          el-input.col-row-input(v-else, size="small", v-model="form.shipping_name")
        .col-row
          span.col-row-title
            i(v-if="$route.query.editLog") *
            span 物流公司电话:
          span.col-row-value(v-if="!$route.query.editLog") {{order.real_shipping_mobile}}
          el-input.col-row-input(v-else, size="small", v-model="form.shipping_mobile")
        .col-row
          span.col-row-title
            i(v-if="$route.query.editLog") *
            span 物流单号:
          span.col-row-value(v-if="!$route.query.editLog") {{order.invoice_no}}
          el-input.col-row-input(v-else, size="small", v-model="form.invoice_no")
        .col-row
          span.col-row-title
            i(v-if="$route.query.editLog") *
            span 发货件数:
          span.col-row-value(v-if="!$route.query.editLog") {{order.send_num}}
          el-input.col-row-input(v-else, size="small", v-model="form.send_num")
        .col-row
          span.col-row-title
            i(v-if="$route.query.editLog") *
            span 预计到货时间:
          span.col-row-value(v-if="!$route.query.editLog") {{order.arrival_time}}
          el-input.col-row-input(v-else, size="small", v-model="form.arrival_time")
      .upload
        .upload-empty(ref="upBtn", v-if="order.order_status === '待发货'", :style="{ visibility: !form.invoice_img && $route.query.editLog ? 'initial' : 'hidden' }") 点击上传
        img.upload-file(:src="form.invoice_img")
        .upload-tip(v-if="!$route.query.editLog && form.invoice_img")
          i *
          span 物流单照片(点击放大)
  .section
    p.section-title 商品信息
    el-table.order-goods(
      :cell-style="{fontSize: '12px', paddingTop: '20px', paddingBottom: '20px'}"
      border,
      :data="order.goods"
    )
      el-table-column(min-width="369", label="商品", align="center", prop="goods_name")
      el-table-column(min-width="140", label="规格属性", align="center", prop="spec_key_name")
      el-table-column(min-width="140", label="数量", align="center", prop="goods_num")
      el-table-column(min-width="140", label="结算单价", align="center", prop="goods_price")
      el-table-column(min-width="140", label="总价", align="center", prop="price")
    p.total-price
      span 实收款:
      span {{order.price}}
  //- .section
  //-   p.section-title-small 退款信息
  //-   .col-container
  //-     .col
  //-       .col-row
  //-         span.col-row-title 退款编号:
  //-         span.col-row-value {{order.shipping_name}}
  //-       .col-row
  //-         span.col-row-title 退款原因:
  //-         span.col-row-value {{order.shipping_mobile}}
  //-       .col-row
  //-         span.col-row-title 上传照片:
  //-         .col-row-img
  //-           img.col-row-img(:src="")
  //-     .col
  //-       .col-row
  //-         span.col-row-title 要求:
  //-         span.col-row-value {{order.shipping_name}}
  //-       .col-row
  //-         span.col-row-title 退款说明:
  //-         span.col-row-value {{order.shipping_mobile}}
  //-     .col
  //-       .col-row
  //-         span.col-row-title 货物状态:
  //-         span.col-row-value {{order.shipping_name}}
  //-       .col-row
  //-         span.col-row-title 退款金额:
  //-         span.col-row-value.red {{order.shipping_mobile}}
  //- .section
  //-   p.section-title-small 退款处理
  .section
    p.section-title-small 操作记录
    el-table.order-logs(
      :cell-style="{fontSize: '12px', paddingTop: '20px', paddingBottom: '20px'}"
      border,
      :data="order.actionLog"
    )
      el-table-column(min-width="160", label="操作者", align="center", prop="action_user")
      el-table-column(min-width="160", label="操作时间", align="center", prop="log_time")
      el-table-column(min-width="160", label="订单状态", align="center", prop="order_status")
      el-table-column(min-width="160", label="付款状态", align="center", prop="pay_status")
      el-table-column(min-width="160", label="发货状态", align="center", prop="shipping_status")
      el-table-column(min-width="160", label="描述", align="center", prop="status_desc")
</template>

<script>
let warning = {
  current: '',
  shipping_name: '物流公司必填',
  shipping_mobile: '物流公司电话必填',
  invoice_no: '物流单号必填',
  send_num: '发货件数必填',
  arrival_time: '预计到货时间必填',
  invoice_img: '请上传物流单照片',
}
let timer = null
import qiniu from 'qiniu'
import viewHeader from '@/components/viewHeader'
import { orderDetail, sendGoods, confirmOrder, qiniuToken } from 'api'
export default {
  name: 'orderDetail',
  data () {
    return {
      order: {},
      form: {
        shipping_name: '',
        shipping_mobile: '',
        invoice_no: '',
        send_num: '',
        arrival_time: '',
        invoice_img: ''
      },
      handles: {
        '待付款': {
          title: '等待买家付款',
          tip: '提示：供货商主动关闭订单之后将中断订单流程，并且将被平台征信记录，请谨慎操作“关闭订单”功能',
          coutDown: {hours: '00', minutes: '00', seconds: '00'},
          buttons: [
            { type: 'primary', label: '打印订单', handle: this.print },
            { type: 'danger', label: '关闭订单', handle: this.close }
          ]
        },
        '待确定': {
          title: '待确定',
          tip: '提示：①订单确认之后不可再关闭；②供货商主动关闭订单之后将中断订单流程，并且将被平台征信记录，请谨慎操作',
          buttons: [
            { type: 'primary', label: '确定订单', handle: this.confirm },
            { type: 'primary', label: '打印订单', handle: this.print },
            { type: 'danger', label: '关闭订单', handle: this.close }
          ]
        },
        '待发货': {
          title: '待发货',
          buttons: [
            { type: 'primary', label: '去发货', handle: this.send },
            { type: 'primary', label: '打印订单', handle: this.print }
          ]
        },
        '已发货': {
          title: '已发货',
          buttons: [
            { type: 'primary', label: '打印订单', handle: this.print }
          ]
        },
        '已成功': {
          title: '已成功',
          buttons: [
            { type: 'primary', label: '打印订单', handle: this.print }
          ]
        },
        '申请退款中': {
          tip: '提示：该订单为未发货订单，同意退款之后，货款自动按照原路退还区代，并关闭该订单',
          buttons: [
            { type: 'danger', label: '同意退款', handle: this.agreeRefund },
            { type: 'primary', label: '拒绝退款', handle: this.refuseRefund },
            { type: 'primary', label: '打印订单', handle: this.print }
          ]
        },
        '已取消': {
          tip: '提示：该订单为区代取消',
          buttons: [
            { type: 'primary', label: '打印订单', handle: this.print }
          ]
        },
        '已关闭': {
          tip: '提示：该订单为供应商关闭',
          buttons: [
            { type: 'primary', label: '打印订单', handle: this.print }
          ]
        },
        '已退款': {
          tip: '提示：该订单为供应商退款',
          buttons: [
            { type: 'primary', label: '打印订单', handle: this.print }
          ]
        }
      },
    }
  },
  methods: {
    async getOrderDetail () {
      try {
        const { data: {order} } = await this.$axios.get(orderDetail, {
          params: {order_id: this.$route.params.id}
        })
        this.order = order
        if (this.order.order_status === '待付款') {
          timer = setInterval(() => {
            this.coutDown()
          }, 1000)
        }
      } catch ({msg}) {
        this.$message.error(msg)
      }
    },
    coutDown () {
      let time = new Date().getTime()
      let endTime = new Date(this.order.add_time).getTime() + (60 * 60 * 24 * 1000) // 订单结束时间
      let mss = endTime - time
      if (mss <= 0) {
        this.getOrderDetail()
        clearInterval(timer)
      } else {
        let hours = parseInt((mss % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        let minutes = parseInt((mss % (1000 * 60 * 60)) / (1000 * 60))
        let seconds = parseInt((mss % (1000 * 60)) / 1000)
        this.handles['待付款'].coutDown.hours = hours
        this.handles['待付款'].coutDown.minutes = minutes
        this.handles['待付款'].coutDown.seconds = seconds
      }
    },
    async initUpload () {
      try {
        const { data } = await this.$axios.get(qiniuToken)
        qiniu.config({
          url: data.url,
          ACCESS_KEY: 'vmTCREvwoIH3u4if282WvCbJ8vCTVkW-kTuLuPr2',
          SECRET_KEY: '3-s3qBM1JjH6tPdTjfihP50WkGBkTx85V0CX-TyL'
        })
        const imagesBucket = qiniu.bucket('chao', {
          putToken: data.token
        })
        qiniu.bind(this.$refs.upBtn, {
          filter: 'image'
        })
        .on('file', (file) => {
          imagesBucket.putFile(file.name, file, (err, reply) => {
            if (err) this.$message.error(err)
            else this.form.invoice_img = `${data.url}${reply.key}`
          })
        })
      } catch ({msg}) {
        this.$message.error(msg)
      }
    },
    print () {
      this.$modal.show('printOrder', { order: this.order })
    },
    close () {
      this.$modal.show('closeOrder', {orderId: this.order.order_id})
    },
    async confirm () {
      try {
        await this.$axios.post(confirmOrder, {
          order_id: this.order.order_id
        })
        this.getOrderDetail()
        this.$message({
          message: '操作成功',
          type: 'success'
        })
      } catch ({msg}) {
        this.$message.error(msg)
      }
    },
    async send () {
      try {
        if (this.$route.query.editLog == 1) {
          let valid = Object.keys(this.form).every(key => {
            if (!this.form[key]) warning['current'] = warning[key]
            return this.form[key]
          })
          if (valid) {
            await this.$axios.post(sendGoods, {...this.form, order_id: this.order.order_id})
            this.getOrderDetail()
            this.$message({
              message: '操作成功',
              type: 'success'
            })
            this.$router.replace({name: 'orderDetail'})
          } else {
            this.$message.error(warning['current'])
          }
        } else {
          this.$router.replace({name: 'orderDetail', query: {...this.$route.query, editLog: 1}})
          this.handles['待发货']['buttons'][0].label = '确认发货'
        }
      } catch ({msg}) {
        this.$message.error(msg)
      }
    },
    agreeRefund () {
      this.$modal.show('agreeRefund', {orderId: this.order.order_id})
    },
    refuseRefund () {
      this.$modal.show('refuseRefund', {orderId: this.order.order_id})
    }
  },
  beforeRouteEnter (to, from, next) {
    next(async vm => {
      await vm.getOrderDetail()
      if (to.query.editLog == 1) {
        vm.handles['待发货']['buttons'][0].label = '确认发货'
        vm.$nextTick(() => {
          vm.initUpload()
        })
      }
    })
  },
  async beforeRouteUpdate (to, from, next) {
    next()
    await this.getOrderDetail()
    if (to.query.editLog == 1) {
      this.handles['待发货']['buttons'][0].label = '确认发货'
      this.$nextTick(() => {
        this.initUpload()
      })
    }
  },
  components: {
    viewHeader
  }
}
</script>

<style lang="scss" scoped>
.order {
  padding: 0 20px;
}
.section {
  padding: 20px;
  background: #fff;
  margin-top: 10px;
}
.section-title {
  display: flex;
  font-size: 16px;
  & p {
    margin-left: 20px;
    & em {
      color: #C2212A;
    }
  }
}
.section-title-small {
  font-size: 12px;
  color: #333333;
}
.order-handles {
  height: 110px;
  display: flex;
  justify-content: space-between;
}
.order-handles-tip {
  margin-top: 14px;
  font-size: 12px;
  color: #C2212A;
}
.col-container {
   display: flex;
   margin-top: 20px;
}
.total-price {
  font-size: 16px;
  color: #666666;
  margin-top: 20px;
}
.col {
  margin-right: 16px;
}
.col-header {
  display: flex;
}
.col-header-title {
  font-size: 12px;
  color: #666666;
  font-weight: 600;
  margin-right: 8px;
  min-width: 90px;
  text-align: right;
}
.col-header-empty {
  min-width: 175px;
  flex: 1;
}
.col-row {
  display: flex;
  margin-top: 14px;
  min-height: 14px;
}
.col-row-title {
  font-size: 12px;
  color: #999999;
  margin-right: 8px;
  min-width: 90px;
  text-align: right;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  & i {
    color: #C2212A;
    margin-right: 5px;
  }
}
.col-row-value {
  font-size: 12px;
  min-width: 175px;
  flex: 1;
}
.col-row-input {
  font-size: 12px;
  min-width: 175px;
  flex: 1;
}
.border {
  margin-top: 20px;
  border: 1px dashed #ddd;
}
.upload {
  margin-left: 40px;
  width: 125px;
  height: 125px;
  position: relative;
}
.upload-empty {
  position: absolute;
  left: 0;
  top: 0;
  background: #DDDDDD;
  width: 100%;
  height: 100%;
  line-height: 116px;
  text-align: center;
  font-size: 12px;
  color: #666666;
  cursor: pointer;
}
.upload-tip {
  font-size: 12px;
  color: #3F3F3F;
  margin-top: 12px;
  & i {
    color: #C2212A;
  }
}
.order-goods {
  margin-top: 20px;
}
.order-logs {
  margin-top: 20px
}
</style>

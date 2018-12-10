<template lang="pug">
.orders
  view-header(title="已发货", subtitle="商城实物商品交易订单查询及管理")
  filter-data(:filter="filter")
  .orders-list
    .orders-list-header
      .orders-list-title
        span.orders-list-name 订单列表
        span.orders-list-total {{`（共${totalOrders}条记录）`}}
      i.orders-list-reload.icon-reload(:class="{'orders-list-reloading': reloading}", @click="getOrders")
      .orders-list-handles
        el-button(type="primary", size="small", plain, @click="exportExcel") 导出数据
    .orders-list-body
      .table-header
        el-checkbox.table-checkAll(v-model="checkedAll", @change="checkAll") 全选
        el-table(style="width: 100%", :cell-style="{fontSize: '12px'}", border, :show-header="false", :data="tableHeader")
          el-table-column(min-width="200", align="center", prop="goods")
          el-table-column(min-width="80", align="center", prop="price")
          el-table-column(min-width="80", align="center", prop="num")
          el-table-column(min-width="80", align="center", prop="time")
          el-table-column(min-width="80", align="center", prop="totalPrice")
          el-table-column(min-width="100", align="center", prop="receive")
          el-table-column(min-width="80", align="center", prop="status")
      .table-empty(v-if="orderList.length === 0") 未找到符合条件的内容
      .table-list(v-else)
        .table-item(v-for="item,index in orderList")
          .table-item-header
            el-checkbox(v-model="item.checked", @change="checkItem")
            span 订单号: {{item.order_sn}}
            span 下单时间: {{item.add_time}}
          el-table(
            style="width: 100%",
            :cell-style="{fontSize: '12px', paddingTop: '20px', paddingBottom: '20px'}"
            border,
            row-key="order_sn",
            :show-header="false",
            :data="item.goods",
            :span-method="objectSpanMethod"
          )
            el-table-column(min-width="200", align="center")
              template(slot-scope="scope")
                .table-item-good
                  img.table-item-img(:src="scope.row.img")
                  p {{scope.row.goods_name}}
            el-table-column(min-width="80", align="center", prop="goods_price")
            el-table-column(min-width="80", align="center", prop="goods_num")
            el-table-column(min-width="80", align="center", prop="delivery_type")
            el-table-column(min-width="80", align="center", prop="price")
            el-table-column(min-width="100", align="center")
              template(slot-scope="scope")
                p {{item.consignee}}
                p {{item.mobile}}
            el-table-column(min-width="80", align="center")
              template(slot-scope="scope")
                p {{item.order_status}}
                router-link.table-item-link(:to="{ name: 'orderDetail', params: {id: item.order_id} }") 订单详情
    .orders-list-pagination(v-if="totalPage")
      el-pagination(
        layout="prev, pager, next"
        :page-count="totalPage",
        :current-page="currentPage",
        @current-change="changeCurrent",
        @prev-click="prev",
        @next-click="next"
      )
</template>

<script>
import viewHeader from '@/components/viewHeader'
import filterData from '@/components/filterData'
import { orderList, supplierBrand, deliveryType } from 'api'
export default {
  name: 'delivered',
  data () {
    return {
      tableHeader: [ {goods: '商品', price: '结算单价', num: '数量', time: '交货期', totalPrice: '结算金额', receive: '收货人', status: '订单状态' } ],
      orderList: [],
      totalPage: 0,
      currentPage: 1,
      totalOrders: 0,
      filter: [
        [
          { name: '订单号:', type: 'default', key: 'order_sn', order_sn: '' },
          { name: '交货期:', type: 'select', key: 'delivery_type', delivery_type: '', options: [] },
          { name: '品牌:', type: 'select', key: 'brand_id', brand_id: '', optLabel: 'name', optValue: 'id', options: [] }
        ],
        [
          { name: '收货人姓名:', type: 'default', key: 'consignee', consignee: '' },
          { name: '物流号:', type: 'default', key: 'invoice_no', invoice_no: '' },
          { name: '物流公司:', type: 'default', key: 'shipping_name', shipping_name: '' }
        ],
        [
          { name: '下单时间段:', type: 'date', key: 'payTime', payTime: [] },
          { type: 'handle', buttons: [
            { name: 'search', size: 'small', label: '搜索', handle: this.search},
            { name: 'reset', size: 'small', label: '重置', handle:  this.reset}
          ] },
        ]
      ],
      brand: [],
      delivery_type: [],
      checkedAll: false,
      reloading: false
    }
  },
  methods: {
    async getOrders () {
      try {
        this.reloading = true
        const { data } = await this.$axios.get(orderList, {
          params: this.$route.query
        })
        this.reloading = false
        this.totalPage = data.page_count
        this.currentPage = Number(this.$route.query.page) || 1
        this.totalOrders = data.count
        data.list.forEach(item => {
          item.checked = false
        })
        this.orderList = data.list
      } catch ({msg}) {
        this.reloading = false
        this.$message.error(msg)
      }
    },
    changeCurrent (page) {
      this.currentPage = page
      this.$router.replace({name: 'delivered', query: {...this.$route.query, page: this.currentPage}})
    },
    prev () {
      this.currentPage--
      this.$router.replace({name: 'delivered', query: {...this.$route.query, page: this.currentPage}})
    },
    next () {
      this.currentPage++
      this.$router.replace({name: 'delivered', query: {...this.$route.query, page: this.currentPage}})
    },
    checkItem () {
      const isCheckAll = this.orderList.every(v => v.checked)
      if (isCheckAll) this.checkedAll = true
    },
    checkAll (checked) {
      this.orderList.forEach(item => {
        item.checked = checked
      })
    },
    exportExcel () {
      let excel = `订单号,商品,下单时间,结算单价,数量,交货期,结算金额,收货人,订单状态\n`
      let total = 0
      this.orderList.forEach(item => {
        if (item.checked) {
          total ++
          excel += '\n'
          item.goods.forEach(good => {
            excel += `${item.order_sn}\t,${good.goods_name}\t,${item.add_time}\t,${good.goods_price}\t,${good.goods_num}\t,${good.delivery_type}\t,${good.price}\t,${item.consignee}\t,${item.order_status}\t,\n`
          })
        }
      })
      if (!total) {
        this.$message.error('请选择要导出的订单')
      } else {
        let uri = 'data:text/csv;charset=utf-8,\ufeff' + encodeURIComponent(excel)
        let link = document.createElement('a')
        link.href = uri
        link.download = `订单列表(共${total}条订单).csv`
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
      }
    },
    async getOptions () {
      try {
        const { data: { brand } } = await this.$axios.get(supplierBrand) // 品牌列表
        const { data: { delivery_type } } = await this.$axios.get(deliveryType) // 交货期列表
        this.brand = brand
        this.delivery_type = delivery_type
      } catch ({msg}) {
        this.$message.error(msg)
      }
    },
    search () {
      let query = {}
      this.filter.map(row => row.map(v => {
        if (v[v.key]) query[v.key] = v[v.key]
      }))
      query['order_pay_stm'] = query['payTime'][0]
      query['order_pay_etm'] = query['payTime'][1]
      Object.keys(query).forEach(v => {
        if (v === 'payTime' || !query[v]) delete query[v]
      })
      this.$router.replace({name: 'delivered', query: { ...query, order_status: this.$route.query.order_status }})
    },
    async initFilter () {
      try {
        this.filter.forEach(row => row.forEach(v => {
          if (v.key === 'brand_id') v.options = this.brand
          if (v.key === 'delivery_type') v.options = this.delivery_type
          if (v.key === 'payTime') {
            v[v.key] = [ this.$route.query['order_pay_stm'] || '', this.$route.query['order_pay_etm'] || '' ]
          } else {
            if (v.key === 'brand_id') v[v.key] = Number(this.$route.query[v.key]) || ''
            else v[v.key] = this.$route.query[v.key] || ''
          }
        }))
      } catch ({msg}) {
        this.$message.error(msg)
      }
    },
    reset () {
      this.$router.replace({name: 'delivered', query: {order_status: 'WAITRECEIVE'}})
    },
    objectSpanMethod({ row, column, rowIndex, columnIndex }) { // 合并单元格
      if (columnIndex === 3 || columnIndex === 4 || columnIndex === 5 || columnIndex === 6) {
        if (rowIndex % 100 === 0) {
          return {
            rowspan: 100,
            colspan: 1
          }
        } else {
          return {
            rowspan: 0,
            colspan: 0
          }
        }
      }
    }
  },
  beforeRouteEnter (to, from, next) {
    next(async vm => {
      vm.getOrders()
      await vm.getOptions()
      vm.initFilter()
    })
  },
  beforeRouteUpdate (to, from, next) {
    next()
    this.getOrders()
    this.initFilter()
  },
  components: {
    viewHeader,
    filterData
  },
}
</script>

<style lang="scss" scoped>
.orders {
  padding: 0 20px 40px;
}
.orders-list {
  padding: 20px;
  background: #fff;
  margin-top: 10px;
  min-height: 557px;
}
.orders-list-header {
  height: 35px;
  line-height: 35px;
}
.orders-list-title {
  border-right: 2px solid #D7D7D7;
  height: 20px;
  line-height: 20px;
  padding-right: 20px;
  display: inline-block;
  vertical-align: middle;
}
.orders-list-name {
  font-size: 16px;
}
.orders-list-total {
  font-size: 12px;
  color: #3F3F3F;
}

@keyframes rotating {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
.orders-list-reload {
  font-size: 18px;
  margin-left: 16px;
  vertical-align: middle;
  cursor: pointer;
}
.orders-list-reloading {
  animation: rotating 2s linear infinite;
}

.orders-list-handles {
  float: right;
}
.orders-list-body {
  margin-top: 25px;
}
.table-header {
  position: relative;
}
.table-empty {
  padding: 100px;
  text-align: center;
  font-size: 18px;
  color: #999999;
}
.table-checkAll {
  position: absolute;
  left: 10px;
  top: 15px;
  z-index: 99;
}
.table-item {
  margin-top: 20px;
}
.table-item-header {
  background: #F5F5F7;
  border: 1px solid #ebeef5;
  border-bottom: none;
  height: 51px;
  line-height: 50px;
  padding: 0 10px;
  font-size: 12px;
  & span {
    margin-left: 10px;
    margin-right: 40px;
    &:last-child {
      margin-right: 0;
    }
  }
}
.table-item-handle {
  float: right;
}
.table-item-good {
  display: flex;
  align-items: center;
  & p {
    text-align: left;
  }
}
.table-item-img {
  width: 58px;
  height: 58px;
  margin-right: 20px;
}
.table-item-link {
  color: #2CA9CB;
  font-size: 12px;
}
.orders-list-pagination {
  text-align: center;
  margin-top: 40px;
}
</style>

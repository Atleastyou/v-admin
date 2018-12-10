<template lang="pug">
.sell
  .sell-header
    view-header(:title="title", :subtitle="subtitle")
  stock-search(:filter="filter" @changeTime="changeTime")
  stock-table(
    :dataType="dataType"
    :searchDate="searchDate"
    :title="title"
    ref="stockTable"
  )
</template>

<script>
import viewHeader from '@/components/viewHeader'
import stockSearch from '@/components/stockSearch'
import stockTable from '@/components/stockTable'
import { supplierBrand, deliveryType } from 'api'
export default {
  name: 'sales',
  components: {
    viewHeader,
    stockSearch,
    stockTable
  },
  data () {
    return {
      title: '出售中的商品',
      subtitle: '正在出售的商品管理',
      dataType: 'saling',
      filter: [
        [
          { name: '商品名：', type: 'default', key: 'goods_name', goods_name: '' },
          { name: '交货期：', type: 'select', key: 'delivery_type', delivery_type: '全部', options: [] },
          { name: '品牌：', type: 'select', key: 'brand_id', brand_id: '', optLabel: 'name', optValue: 'id', options: [] }
        ],
        [
          { name: '商品编号：', type: 'default', key: 'goods_id', goods_id: '' },
          { name: '价格：', type: 'double', key: 'price', price: [ { key: 'min_price', min_price: '', labelShow: true }, { key: 'max_price', max_price: '', labelShow: false } ] }
        ],
        [
          { name: '上架时间：', type: 'date', key: 'completeTime', completeTime: [] },
          {
            type: 'handle',
            buttons: [
              { name: 'search', size: 'small', label: '搜索', handle: this.search },
              { name: 'reset', size: 'small', label: '重置', handle: this.reset }
            ]
          }
        ]
      ],
      searchDate: {}
    }
  },
  methods: {
    // 时间选择器发生变化时记录对应数据的变化，以便搜索
    changeTime (data) {
      this.filter.map(row => row.map(v => {
        if (v.key === 'completeTime') {
          if (data) v[v.key] = data
          else v[v.key] = []
        }
      }))
    },
    search () {
      let query = {}
      this.filter.map(row => row.map(v => {
        if (v.key === 'completeTime' && !v[v.key]) query[v.key] = []
        if (v[v.key]) query[v.key] = v[v.key]
        if (v[v.key] === '全部') delete query[v.key]
        if (v.key === 'price') {
          let priceList = v[v.key]
          priceList.map(price => {
            query[price.key] = price[price.key]
          })
          delete query[v.key]
        }
        if (v.key === 'completeTime') {
          query.online_stm = query[v.key][0]
          query.online_etm = query[v.key][1]
          delete query[v.key]
        }
      }))
      Object.keys(query).forEach(v => {
        if (!query[v]) {
          delete query[v]
        }
      })
      this.searchDate = query
      let routeQuery = {
        page_size: this.$route.query.page_size,
        page: this.$route.query.page,
        ...this.searchDate
      }
      this.$router.replace({ name: this.$route.name, query: { ...routeQuery } })
    },
    reset () {
      this.filter.map(row => row.map(v => {
        if (v.type === 'select') {
          v[v.key] = '全部'
        } else if (v.key === 'price') {
          v[v.key] = [ { key: 'min_price', min_price: '', labelShow: true }, { key: 'max_price', max_price: '', labelShow: false } ]
        } else if (v.key === 'completeTime') {
          v[v.key] = []
        } else {
          v[v.key] = ''
        }
      }))
      this.searchDate = {}
      let routeQuery = {
        page_size: this.$route.query.page_size,
        page: this.$route.query.page,
        ...this.searchDate
      }
      this.$router.replace({ name: this.$route.name, query: { ...routeQuery } })
    },
    async filterInit () {
      try {
        const { data: brandList } = await this.$axios.get(supplierBrand)
        const { data: deliveryList } = await this.$axios.get(deliveryType)
        this.filter.forEach(row => row.forEach(item => {
          if (item.key === 'delivery_type') item.options = deliveryList.delivery_type
          if (item.key === 'brand_id') item.options = brandList.brand
          if (item.key === 'price') {
            let priceList = item[item.key]
            priceList.map(price => {
              priceList[price.key] = this.$route.query[price.key] || ''
            })
          } else if (item.key === 'completeTime') {
            item[item.key] = [ this.$route.query['online_stm'] || '', this.$route.query['online_etm'] || '' ]
          } else {
            if (item.key === 'brand_id') item[item.key] = Number(this.$route.query[item.key]) || ''
            else item[item.key] = this.$route.query[item.key] || ''
          }
        }))
      } catch ({ msg }) {
        this.$message.error(msg)
      }
    }
  },
  mounted () {},
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.filterInit()
    })
  },
  beforeRouteUpdate (to, from, next) {
    next()
    this.$refs.stockTable.goodsSkuList()
  }
}
</script>

<template lang="pug">
.sell-table
  .table-header
    .table-header_left
      .table-title
        h3 商品列表
        span （共{{tableData.total_count}}条记录）
      .table-refresh.icon-refresh(@click="refreshTable")
    .table-header_right
      el-button(size="small" type="primary" plain @click="exportExcel") 导出数据
      <!--el-button(size="small") 批量设置销售区域-->
  .sell-table-body
    el-table(
      :data="tableData.ls"
      border
      style="width: 100%"
      v-loading="loading"
      empty-text="未找到符合条件的内容"
      @selection-change="selectionChange"
    )
      el-table-column(type="selection" width="55" align="center")
      el-table-column(label="商品" width="400" align="center")
        template(slot-scope="scope")
          .goods-item
            img(:src="scope.row.original_img")
            .goods-item_name {{scope.row.goods_name}}
      el-table-column(label="商品规格" width="140" porp="key_name" align="center")
        template(slot-scope="scope") {{scope.row.key_name}}
      el-table-column(label="商品分类" width="88" porp="cat_name" align="center")
        template(slot-scope="scope") {{scope.row.cat_name}}
      el-table-column(label="商品品牌" width="88" porp="brand_name" align="center")
        template(slot-scope="scope") {{scope.row.brand_name}}
      el-table-column(label="销售区域" width="140" porp="area_template_name" align="center")
        template(slot-scope="scope") {{scope.row.area_template_name}}
      el-table-column(label="供货价" width="88" porp="supply_price" align="center")
        template(slot-scope="scope") {{scope.row.supply_price}}
      el-table-column(label="交货期" width="88" porp="delivery_type" align="center")
        template(slot-scope="scope") {{scope.row.delivery_type}}
      el-table-column(label="销量" width="71" porp="saled_count" align="center")
        template(slot-scope="scope") {{scope.row.saled_count}}
      el-table-column(label="库存" align="center")
        template(slot-scope="scope")
          .total-count
            label 实际库存：
            el-input(:value="scope.row.total_store_count" size="mini" @blur="changeCount($event, scope.row)")
          .total-count
            label 占用库存：{{scope.row.store_count}}
          .total-count
            label 可用库存：{{scope.row.order_store_count}}
  .sell-table-pagination
    el-pagination(
      v-if="tableData.total_count > 10"
      layout="prev, pager, next"
      :total="tableData.total_count"
      :page-size="pageSize"
      :current-page.sync="currentPage"
      @current-change="currentChange"
      @prev-click="prevChange"
      @next-click="nextChange"
    )
</template>
<script>
import { goodsSkuList, changestockNum } from 'api'
export default {
  name: 'stockTable',
  props: {
    dataType: String,
    title: String,
    searchDate: {
      type: Object
    }
  },
  data () {
    return {
      tableData: {},
      loading: true,
      count: '',
      pageSize: '',
      currentPage: '',
      queryData: {},
      selectionData: []
    }
  },
  methods: {
    async goodsSkuList () {
      try {
        this.loading = true
        this.tableData = []
        const { data } = await this.$axios.post(goodsSkuList, { data_type: this.dataType, ...this.$route.query })
        this.tableData = data
        this.loading = false
      } catch ({ msg }) {
        this.loading = false
        this.$message.error(msg)
      }
    },
    selectionChange (data) {
      this.selectionData = data
    },
    exportExcel () {
      let data = this.selectionData
      let excel = `商品,商品图片,商品规格,商品分类,商品品牌,销售区域,供货价,交货期,销量,实际库存,占用库存,可用库存\n`
      if (data.length) {
        data.forEach(item => {
          excel += '\n'
          excel += `${item.goods_name}\t,${item.original_img}\t,${item.key_name}\t,${item.cat_name}\t,${item.brand_name}\t,${item.area_template_name}\t,${item.supply_price}\t,${item.delivery_type}\t,${item.saled_count}\t,${item.total_store_count}\t,${item.store_count}\t,${item.order_store_count}\t\n`
        })
        let uri = 'data:text/csv;charset=utf-8,\ufeff' + encodeURIComponent(excel)
        let link = document.createElement('a')
        link.href = uri
        link.download = `${this.title}列表(共${data.length}条订单).csv`
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
      } else {
        this.$message.error('请选择要导出的数据')
      }
    },
    refreshTable () {
      this.goodsSkuList()
    },
    async changeCount (ev, row) {
      try {
        await this.$axios.post(changestockNum, { id: row.item_id, store_count: ev.target.value })
        this.goodsSkuList()
        this.$message({
          message: '修改成功！',
          type: 'success'
        })
      } catch ({ msg }) {
        this.$message.error(msg)
      }
    },
    currentChange (page) {
      this.changeCurrentPage(page)
    },
    prevChange (page) {
      this.changeCurrentPage(page)
    },
    nextChange (page) {
      this.changeCurrentPage(page)
    },
    changeCurrentPage (page) {
      this.currentPage = page
      console.log(this.$route.query)
      this.$router.replace({ name: this.$route.name, query: { ...this.$route.query, page: page } })
      this.goodsSkuList()
    }
  },
  mounted () {
    this.pageSize = Number(this.$route.query.page_size)
    this.currentPage = Number(this.$route.query.page)
    this.goodsSkuList()
  }
}
</script>
<style lang="scss" scoped>
.sell-table {
  margin-top: 10px;
  margin-bottom: 35px;
  padding: 27px 20px 20px;
  background: #fff;
}
.table-header {
  display: flex;
  justify-content: space-between;
}
.table-header_left, .table-title {
  display: flex;
  align-items: center;
}
.table-title {
  padding-right: 17px;
  border-right: 1px dashed #d7d7d7;
}
.table-title h3 {
  font-size: 16px;
  color: #333333;
}
.table-title span {
  font-size: 12px;
  color: #999;
}
.table-refresh {
  margin-left: 17px;
  color: #666;
  cursor: pointer;
}
.sell-table-body {
  margin-top: 20px;
}
.sell-table-body .el-table {
  font-size: 12px;
}
.goods-item {
  display: flex;
  align-items: center;
}
.goods-item img {
  width: 58px;
  height: 58px;
  margin-right: 20px;
}
.goods-item .goods-item_name {
  width: 273px;
  text-align: left;
}
.total-count {
  width: 120px;
  margin: 0 auto;
  text-align: left;
}
.total-count .el-input {
  width: 60px;
  display: inline-block;
}
.sell-table-pagination {
  margin: 40px 0;
  text-align: center;
}
</style>

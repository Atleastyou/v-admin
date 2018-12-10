<template lang="pug">
.area
  view-header(:title="title", :subtitle="subtitle")
  .area-content
    .table-header
      .table-title
        .title
          h3 模板列表
        .icon-refresh(@click="refreshTable")
      el-button(size="small" type="primary" plain @click="newEditArea()") 新建模板
    el-table(:data="areaData.ls" border style="width: 100%")
      el-table-column(prop="title" label="模板名称" width="409")
      el-table-column(label="操作" align="center")
        template(slot-scope="scope")
          <!--el-button(size="mini" v-if="scope.row.readonly") 查看-->
          el-button(size="mini" @click="newEditArea(scope.row)" v-if="!scope.row.readonly") 修改
          el-button(size="mini" @click="deleteDate(scope.row)" v-if="!scope.row.readonly") 删除
</template>

<script>
import viewHeader from '@/components/viewHeader'
import { getArea, delAreaTemplate } from 'api'
export default {
  name: 'salesArea',
  components: {
    viewHeader
  },
  data () {
    return {
      title: '销售区域模块管理',
      subtitle: '通过设置模板可限制商品可售区域',
      dialogVisible: false,
      areaData: {}
    }
  },
  methods: {
    newEditArea (row) {
      if (row) this.$router.push({ path: '/system/editArea', query: { id: row.id, title: row.title } })
      else this.$router.push({ path: '/system/editArea' })
    },
    refreshTable () {
      this.getArea()
    },
    deleteDate (row) {
      this.$confirm('销售区域模板删除时候，会将所有正在使用该模板的商品销售区域模板自动修改为默认模板', '删除模板确认', {
        distinguishCancelAndClose: true,
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        customClass: 'area-message_box',
        confirmButtonClass: 'area-button_sure',
        cancelButtonClass: 'area-button_cancel'
      }).then(async () => {
        try {
          await this.$axios.post(delAreaTemplate, { id: row.id })
          await this.getArea()
          this.$message({
            type: 'success',
            center: true,
            message: '操作成功'
          })
        } catch ({ msg }) {
          this.$message.error(msg)
        }
      }).catch(() => {
        this.$message({
          type: 'info',
          center: true,
          message: '取消'
        })
      })
    },
    async getArea () {
      try {
        const { data } = await this.$axios.post(getArea, { page: 1, page_size: 20 })
        this.areaData = data
      } catch ({ msg }) {
        this.$message.error(msg)
      }
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.getArea()
    })
  }
}
</script>
<style lang="scss">
.area {
  .el-table th {
    background: #efefef;
  }
  .el-table--border th,
  .el-table--border td,
  .el-table--border th,
  .el-table--border td {
    border-right-color: #ddd;
  }
  .el-table--group::after, .el-table--border::after, .el-table::before {
    background: #ddd;
  }
}
.area-message_box .el-message-box__btns {
  text-align: center;
}
.area-message_box .area-button_sure {
  background: #C2212A;
  border-color: #C2212A;
}
.area-message_box .area-button_cancel {
  background: #DDDDDD;
  border-color: #DDDDDD;
  color: #333;
}
</style>
<style lang="scss" scoped>
.area-content {
  width: 762px;
  min-height: 311px;
  padding: 20px;
  background: #fff;
}
.table-header,
.title,
.table-title {
  display: flex;
  align-items: center;
}
.table-header {
  justify-content: space-between;
}
.title {
  padding-right: 17px;
  margin-right: 17px;
  border-right: 1px dashed #d7d7d7;
}
.title h3 {
  font-size: 16px;
  color: #333333;
}
.total {
  font-size: 12px;
  color: #3F3F3F;
}
.table-title .icon-refresh {
  color: #666;
  cursor: pointer;
}
.area .el-table {
  margin-top: 20px;
  font-size: 12px;
}
.area .el-table.el-table--border {
  border-color: #ddd;
}

</style>

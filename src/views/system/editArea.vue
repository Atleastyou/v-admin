<template lang="pug">
.edit-area
  .edit-area_header
    view-header(:title="title", :subtitle="subtitle")
  .edit-area_content
    .area_form
      .area_form-label
        .label_important *
        span 模板姓名：
      el-input(v-model="inputTitle" size="mini")
    .tree
      .select-all
        el-checkbox(v-model="allChecked" size="medium" @change="changeChecked") 全选
        .reminder 提示：勾选该地区，代表选中的商品可以在该地区开放销售
      el-container.tree-content(direction="vertical")
        el-row(:gutter="20")
          el-col(:span="8" v-for="tree, index in treeData", :key="index")
            el-tree(
              :data="tree"
              show-checkbox
              node-key="id"
              :ref="'tree_' + index"
              highlight-current
              :props="defaultProps"
              @check-change="currentCheckChange"
              accordion
              @node-expand="nodeExpand"
            )
      .tree-footer
        el-button(size='mini' name="search" @click="saveCheckedKeys") 保存并使用
        el-button(size='mini' name="reset" @click="resetCheckedKeys") 重置
</template>

<script>
import viewHeader from '@/components/viewHeader'
import * as API from 'api'
// , getCity, getDistrict
export default {
  name: 'editArea',
  components: {
    viewHeader
  },
  data () {
    return {
      title: '新建销售区域模板',
      subtitle: '通过设置模板可限制商品可售区域',
      name: '',
      allChecked: false,
      treeData: [],
      defaultProps: {
        children: 'child',
        label: 'name'
      },
      inputTitle: '',
      prevData: {},
      keysList: [], // 加载出来所有地区的id集合
      checkNode: [], // 勾选的所有节点
      defaultCheckedList: [], // 设置默认勾选区域的数组
      defaultId: ''
    }
  },
  methods: {
    // 节点选中状态发生变化时的回调
    currentCheckChange (data, node, store) {
      if (node) {
        this.checkNode.push(data.id)
        this.defaultCheckedList.push(data.id)
      } else {
        this.checkNode.forEach((item, index) => {
          if (item === data.id) this.checkNode.splice(index, 1)
        })
        this.defaultCheckedList.forEach((item, index) => {
          if (item === data.id) this.defaultCheckedList.splice(index, 1)
        })
      }
      this.defaultCheckedList = Array.from(new Set(this.defaultCheckedList))
      if (this.keysList.length === this.checkNode.length) this.allChecked = true
      else this.allChecked = false
    },
    resetCheckedKeys () {
      this.defaultCheckedList = []
      this.setCheckedKeys()
    },
    changeChecked (check) {
      this.defaultCheckedList = []
      if (check) {
        for (let i in this.treeData) {
          for (let j in this.treeData[i]) {
            if (this.treeData[i][j].id !== '') this.defaultCheckedList.push(this.treeData[i][j].id)
          }
        }
        this.setCheckedKeys()
      } else {
        this.setCheckedKeys()
      }
    },
    setCheckedKeys () {
      this.$refs.tree_0[0].setCheckedKeys(this.defaultCheckedList)
      this.$refs.tree_1[0].setCheckedKeys(this.defaultCheckedList)
      this.$refs.tree_2[0].setCheckedKeys(this.defaultCheckedList)
    },
    async getAreaTemplateItemsByType () {
      const { data } = await this.$axios.get(API['getAreaTemplateItemsByType'], { params: { id: this.defaultId, type: 'province', pid: 0 } })
      data.forEach(item => {
        this.defaultCheckedList.push(item.id)
      })
      this.setCheckedKeys()
    },
    async saveCheckedKeys () {
      try {
        if (!this.inputTitle) {
          this.$message.error('模板名称必填')
          return
        }
        let query = {
          ids: this.checkNode,
          title: this.inputTitle
        }
        if (this.defaultId) query.id = this.defaultId
        await this.$axios.post(API['editAreaTemplate'], query)
        this.$message({
          type: 'success',
          message: '操作成功'
        })
        this.$router.go(-1)
      } catch ({ msg }) {
        this.$message.error(msg)
      }
    },
    async getRegion () {
      const { data } = await this.$axios.post(API['getRegion'], { pid: 0 })
      let result = []
      data.forEach(item => {
        if (item.child_num > 0) item.child = [{ id: '', name: '' }]
        item.grade = 1
        item.isPostNode = true
        item.gradeType = 'city'
        this.keysList.push(item.id)
      })
      for (let i = 0; i < data.length; i += 12) {
        result.push(data.slice(i, i + 12))
      }
      this.treeData = result
    },
    async getAreaTemplateItems () {
      try {
        const { data } = await this.$axios.post(API['getAreaTemplateItems'], { id: this.defaultId })
        this.defaultCheckedList = [...data]
        this.setCheckedKeys()
      } catch ({ msg }) {
        this.$message.error(msg)
      }
    },
    // 节点展开
    async nodeExpand (data, node, store) {
      try {
        if (node.checked === false) this.allChecked = false
        // 如果点击的父级是第一次展开，则请求子级数据
        if (node.data.isPostNode) {
          if (node.checked) {
            // 每次点击展开父级书时，删除默认数组中点击所对应的id，避免子级不是全选时候的一个状态的改变
            this.defaultCheckedList.forEach((item, index) => {
              if (node.data.id === item) this.defaultCheckedList.splice(index, 1)
            })
            // 通过点击展开的数据请求对应子级数据
            const { data: childData } = await this.$axios.get(API['getAreaTemplateItemsByType'], { params: { id: this.defaultId, type: node.data.gradeType, pid: node.data.id } })
            // 判断返回数据如果length大于0并且只有一条数据的时候并且该条数据的id为0 给默认勾选数组添加当前父级id，使其加载的子级全选；否则给默认数组中push获取到的子级数据
            if (childData.length > 0) {
              childData.forEach(item => {
                if (childData.length === 1 && item.id === 0) this.defaultCheckedList.push(node.data.id)
                else this.defaultCheckedList.push(item.id)
              })
            }
          }
          let query = { pid: node.data.id }
          const { data: cityData } = await this.$axios.post(API['getRegion'], query)
          cityData.forEach(city => {
            if (city.child_num > 0) city.child = [{ id: '', name: '' }]
            this.keysList.push(city.id)
            city.isPostNode = true
            if (node.data.gradeType === 'city') city.gradeType = 'district'
            if (node.data.gradeType === 'district') city.gradeType = 'street'
            // this.defaultCheckedList.push(city.id)
          })
          node.data.isPostNode = false
          data.child = cityData
          setTimeout(() => {
            this.setCheckedKeys()
          }, 500)
        }
      } catch (err) {
        console.log(err)
      }
    }
  },
  beforeRouteEnter (to, from, next) {
    next(async vm => {
      if (to.query.id) {
        vm.title = '修改销售区域模板'
        vm.defaultId = to.query.id
      } else {
        vm.title = '新建销售区域模板'
      }
      if (to.query.title) vm.inputTitle = to.query.title
      await vm.getRegion()
      await vm.getAreaTemplateItems()
      await vm.getAreaTemplateItemsByType()
    })
  }
}
</script>
<style scoped>
  .edit-area {
    font-size: 12px;
  }
  .edit-area_content {
    width: 717px;
    padding: 20px;
    background: #fff;
  }
  .area_form,
  .area_form-label {
    display: flex;
    align-items: center;
  }
  .area_form-label {
    font-size: 12px;
    color: #3f3f3f;
  }
  .label_important {
    margin-right: 5px;
    color: #C2212A;
  }
  .area_form .el-input {
    width: 200px;
    margin-left: 10px;
  }
  .select-all {
    display: flex;
    margin: 20px 0;
    align-items: center;
  }
  .reminder {
    margin-left: 20px;
    font-size: 12px;
    color: #C2212A;
  }
  .tree-content {
    width: 100%;
    min-height: 396px;
    border: 1px solid #ddd;
  }
  .tree-footer {
    margin-top: 20px;
  }
</style>

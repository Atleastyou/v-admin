<template lang="pug">
.basic-info
  view-header(:title="title", :subtitle="subtitle")
  .basic-content
    .info-item
      .item-label 企业名称
      .item-text {{supplierInfo.suppliers_name}}
    .info-item
      .item-label 供应商ID
      .item-text {{supplierInfo.suppliers_id}}
    .info-item
      .item-label 企业logo
      img.item-img(v-if="supplierInfo.suppliers_logo", :src="supplierInfo.suppliers_logo")
    .info-item
      .item-label 主营类别
      .item-text {{supplierInfo.major_business}}
    .info-item
      .item-label 上架品牌
      img.item-img(
        v-for="brand in supplierInfo.brand"
        :src="brand.logo"
        v-if="brand.logo"
      )
    .info-item
      .item-label 企业类型
      .item-text {{supplierInfo.type}}
    .info-item
      .item-label 成立时间
      .item-text {{supplierInfo.found_time}}
    .info-item
      .item-label 企业地址
      .item-text {{supplierInfo.address}}
    .info-item
      .item-label 营业执照
      img.item-img(v-if="supplierInfo.business_licence", :src="supplierInfo.business_licence")
    .info-item
      .item-label 联系人
      .item-text {{supplierInfo.suppliers_contacts}}
    .info-item
      .item-label 职位
      .item-text {{supplierInfo.contacts_job}}
    .info-item
      .item-label 电话
      .item-text {{supplierInfo.suppliers_phone}}
    .info-item
      .item-label 传真
      .item-text {{supplierInfo.suppliers_fax}}
    .info-item
      .item-label 邮箱
      .item-text {{supplierInfo.suppliers_email}}
    .prompt-label 提示：如果上述信息有误，请联系巢搭配平台客服人员及时修改
</template>

<script>
import viewHeader from '@/components/viewHeader'
import { getSupplierInfo } from 'api'
export default {
  name: 'basicInfo',
  components: {
    viewHeader
  },
  data () {
    return {
      title: '企业基本信息',
      subtitle: '',
      supplierInfo: {}
    }
  },
  methods: {
    async getSupplierInfo () {
      try {
        const { data } = await this.$axios.get(getSupplierInfo)
        this.supplierInfo = data
      } catch ({ msg }) {
        this.$message.error(msg)
      }
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.getSupplierInfo()
    })
  }
}
</script>

<style lang="scss" scoped>
.basic-info {
  height: 100%;
  font-size: 12px;
}
.basic-content {
  padding: 20px;
  margin: 0 0 30px 0;
  background: #fff;
}
.basic-content .info-item:first-child {
  margin-top: 0;
}
.info-item {
  display: flex;
  margin: 20px 0;
  align-items: center;
}
.item-label {
  width: 58px;
  margin-right: 40px;
  text-align: right;
  color: #999999;
}
.item-text {
  color: #333333;
}
.item-img {
  width: 76px;
  height: 76px;
  margin-right: 10px;
}
.prompt-label {
  color: #999;
}
</style>

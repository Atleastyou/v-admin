<template lang="pug">
.address
  view-header(:title="title", :subtitle="subtitle")
  .consignee
    .title 收货人信息
    .address-item
      .item-label 收货人姓名
      .item-text {{addressData.username}}
    .address-item
      .item-label 联系方式
      .item-text {{addressData.contact}}
    .address-item
      .item-label 收货地址
      .item-text {{addressData.address}}
  .logistic
    .title 要求物流公司
    .address-item
      .item-label 物流公司名称
      .item-text {{addressData.logistics_company}}
    .address-item
      .item-label 物流公司电话
      .item-text {{addressData.logistics_tel}}
    .address-item
      .item-label 物流公司地址
      .item-text {{addressData.logistics_address}}
    .address-item
      .item-label 所在地区
      .item-text {{addressData.logistics_arrival_area}}
    .address-item
      .item-label 物流备注
      .item-text {{addressData.note}}
    .address-item
      .item-label
      el-button(size="small" name="search" @click="edit") 编辑
  edit-sales-address(@refreshData="refreshData")
</template>

<script>
import viewHeader from '@/components/viewHeader'
import editSalesAddress from '@/components/modal/editSalesAddress.vue'
import { getRefundAddress } from 'api'
export default {
  name: 'salesReturn',
  components: {
    viewHeader,
    editSalesAddress
  },
  data () {
    return {
      title: '退货地址管理',
      subtitle: '区代退货时联系人与要求发送物流',
      addressData: {}
    }
  },
  methods: {
    edit () {
      this.form = {
        ...this.form,
        ...this.addressData
      }
      this.$modal.show('editSalesAddress', { ...this.form })
    },
    refreshData (data) {
      if (data) this.getRefundAddress()
    },
    clickBlank (ev) {
      const childTarget = event.target.childNodes[0]
      if (childTarget && childTarget.className === 'modal-container') {
        this.close()
      }
    },
    async getRefundAddress () {
      try {
        const { data } = await this.$axios.get(getRefundAddress)
        this.addressData = data
      } catch ({ err }) {
        this.$message.error(err)
      }
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.getRefundAddress()
    })
  }
}
</script>

<style lang="scss" scoped>
  .address {
    font-size: 12px;
  }
  .consignee {
    width: 100%;
    height: 167px;
    padding: 20px;
    background: #fff;
  }
  .title {
    font-size: 16px;
    color: #333333;
  }
  .address-item {
    display: flex;
    margin: 20px 0;
    align-items: center;
  }
  .item-label {
    width: 72px;
    margin-right: 40px;
    text-align: right;
    color: #999;
  }
  .item-text {
    color: #333;
  }
  .logistic {
    width: 100%;
    height: 311px;
    padding: 20px;
    margin-top: 10px;
    background: #fff;
  }
</style>

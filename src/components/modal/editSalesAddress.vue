<template lang="pug">
modal(name="editSalesAddress", :width="480", height="auto", @before-open="beforeOpen" @before-close="beforeClose")
  .edit
    .edit-header
      .edit-title 编辑退货地址
      .edit-icon-close.el-icon-close(@click="close")
    .edit-form
      .form-title 确认收货人信息
      .form-item
        .form-label
          .label_important *
          span 收货人姓名:
        el-input(v-model="form.username" size="mini")
      .form-item
        .form-label
          .label_important *
          span 联系方式:
        el-input(v-model="form.contact" size="mini")
      .form-item
        .form-label
          .label_important *
          span  收货地址:
        el-input(v-model="form.address" size="mini")
      .form-title 确认收货人信息
      .form-item
        .form-label
          .label_important *
          span  物流公司名称:
        el-input(v-model="form.logistics_company" size="mini")
      .form-item
        .form-label
          .label_important *
          span  物流公司电话:
        el-input(v-model="form.logistics_tel" size="mini")
      .form-item
        .form-label
          span  物流公司地址:
        el-input(v-model="form.logistics_address" size="mini")
      .form-item
        .form-label
          span  所在地区:
        el-input(v-model="form.logistics_arrival_area" size="mini")
      .form-item
        .form-label
          span  物流备注:
        el-input(v-model="form.note" size="mini")
      .form-btn
        el-button(name="cancel" @click="cancel") 取消
        el-button(name="sure" @click="submit") 确定
</template>

<script>
  import { editRefundAddress } from 'api'
	export default {
		name: 'editSalesAddress',
    data () {
      return {
        form: {
        	username: '',
        	address: '',
        	contact: '',
        	logistics_company: '',
        	logistics_tel: '',
        	logistics_address: '',
        	logistics_arrival_area: '',
        	note: ''
        },
        filter: [
        	{
        		key: 'username',
        		msg: '收货人姓名必填'
        	}, {
        		key: 'address',
        		msg: '收货地址必填'
        	}, {
        		key: 'contact',
        		msg: '联系方式必填'
        	}, {
        		key: 'logistics_company',
        		msg: '物流公司名称必填'
        	}, {
        		key: 'logistics_tel',
        		msg: '物流公司电话必填'
        	}
        ],
        isSave: false
      }
    },
    methods: {
      beforeOpen ({params}) {
        this.isSave = false
        this.form = {
          ...this.form,
          ...params
        }
      },
      beforeClose (ev) {
        this.$emit('refreshData', this.isSave)
      },
      close () {
        this.$modal.hide('editSalesAddress')
      },
      cancel () {
        this.close()
      },
      async submit () {
        try {
          for (let item in this.filter) {
            if (!this.form[this.filter[item].key]) {
              this.$message.error(this.filter[item].msg)
              return
            }
          }
          await this.$axios.post(editRefundAddress, this.form)
          this.$message({
            type: 'success',
            message: '操作成功'
          })
          this.isSave = true
          this.close()
        } catch ({ msg }) {
          this.$message.error(msg)
        }
      }
    }
	}
</script>

<style lang="scss" scoped>
  .edit {
    width: 480px;
    height: 532px;
    font-size: 12px;
    color: #666;
    padding-bottom: 30px;
    background: #fff;
  }
  .edit-header {
    display: flex;
    height: 40px;
    padding: 0 20px;
    background: #efefef;
    color: #333;
    font-size: 16px;
    align-items: center;
    justify-content: space-between;
  }
  .edit-header .el-icon-close {
    font-size: 28px;
    font-weight: 600;
    color: #999;
    cursor: pointer;
  }
  .edit-form {
    padding: 0 20px;
  }
  .form-title {
    margin: 20px 0;
    font-size: 16px;
    color: #333333;
  }
  .form-item {
    display: flex;
    margin: 4px 0;
    align-items: center;
  }
  .form-label {
    display: flex;
    width: 135px;
    font-size: 12px;
    justify-content: flex-end;
    color: #3F3F3F;
  }
  .label_important {
    margin-right: 5px;
    color: #C2212A;
  }
  .form-item .el-input {
    margin-left: 10px;
    width: 200px;
  }
  .form-btn {
    margin-top: 40px;
    text-align: center;
  }
  .form-btn .el-button {
    padding: 12px 32px;
    margin: 0 10px;
  }
  .el-button[name="cancel"] {
    background: #DDDDDD;
  }
  .el-button[name="sure"] {
    border-color: #C2212A;
    background: #C2212A;
    color: #fff;
  }
  .edit-header .edit-icon-close {
    position: inherit;
  }
</style>

<template lang="pug">
modal(name="closeOrder", :width="480", height="auto", @before-open="beforeOpen")
  .modal-header
    p.modal-title 关闭订单提示
    i.el-icon-close(@click="close")
  .modal-body
    .warning 提示：供货商主动关闭订单之后将中断订单流程，并且将被平台征信记录，请谨慎操作
    .form
      .form-title
        i *
        span  填写关闭订单原因
      el-input(
        type="textarea"
        :rows="4",
        placeholder="请输入关闭订单原因"
        v-model="textarea"
      )
    .handles
      el-button(type="info", @click="close") 取消
      el-button(type="danger", :loading="loading", @click="submit") 确定
</template>

<script>
import { cancelOrder } from 'api'
export default {
  name: 'closeOrder',
  data () {
    return {
      loading: false,
      orderId: null,
      textarea: ''
    }
  },
  methods: {
    close () {
      this.$modal.hide('closeOrder')
    },
    beforeOpen ({params}) {
      this.orderId = params.orderId
      this.textarea = ''
    },
    async submit () {
      try {
        if (!this.textarea) {
          this.$message.error('请输入关闭订单原因')
        } else {
          await this.$axios.post(cancelOrder, {
            order_id: this.orderId,
            note: this.textarea
          })
          this.$message({
            message: '操作成功',
            type: 'success'
          })
          this.$router.replace({name: this.$route.name, query: { ...this.$route.query, reload: '1' }})
          this.close()
        }
      } catch ({msg}) {
        this.$message.error(msg)
      }
    },
  }
}
</script>

<style lang="scss" scoped>
.modal {
  width: 480px;
}
.modal-header {
  height: 40px;
  background: #EFEFEF;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  padding: 20px;
  & .el-icon-close {
    cursor: pointer;
    font-size: 22px;
    color: #999；
  }
}
.modal-body {
  padding: 20px;
}
.warning {
  font-size: 14px;
  color: #C2212A;
}
.form {
  margin-top: 20px;
}
.form-title {
  font-size: 12px;
  color: #151515;
  & i {
    color: #C2212A;
    margin-right: 5px;
  }
}
.el-textarea {
  font-size: 12px;
  margin-top: 15px;
}
.handles {
  margin-top: 20px;
  text-align: center;
}
</style>

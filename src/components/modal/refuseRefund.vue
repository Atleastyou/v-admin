<template lang="pug">
modal(name="refuseRefund", :width="480", height="auto", @before-open="beforeOpen")
  .modal-header
    p.modal-title 拒绝退款
    i.el-icon-close(@click="close")
  .modal-body
    p.refund-title
      span.red *
      span 填写拒绝退款原因
    el-input(
      type="textarea"
      :rows="4"
      placeholder="请输入拒绝退款原因",
      v-model="note"
    )
    .handles
      el-button(type="info", @click="close") 取消
      el-button(type="danger", :loading="loading", @click="refuseRefund") 确定
</template>

<script>
import { refusalRefundMoney } from 'api'
export default {
  name: 'refuseRefund',
  data () {
    return {
      loading: false,
      orderId: '',
      note: ''
    }
  },
  methods: {
    async refuseRefund () {
      try {
        if (!this.note) {
          this.$message.error('请输入拒绝退款原因')
          return
        }
        this.loading = true
        await this.$axios.post(refusalRefundMoney, {
          order_id: this.orderId,
          note: this.note
        })
        this.loading = false
        this.$message({
          message: '操作成功',
          type: 'success'
        })
        this.$router.replace({name: 'orderDetail', query: { ...this.$route.query, reload: '1' }})
        this.close()
      } catch ({msg}) {
        this.loading = false
        this.$message.error(msg)
      }
    },
    close () {
      this.$modal.hide('refuseRefund')
    },
    beforeOpen ({params}) {
      this.orderId = params.orderId
    },
  }
}
</script>

<style lang="scss" scoped>
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
.refund-title {
  font-size: 12px;
  color: #151515;
}
.red {
  color: #C2212A;
}
.el-textarea {
  margin-top: 15px;
}
.handles {
  text-align: center;
  margin-top: 18px;
}
</style>

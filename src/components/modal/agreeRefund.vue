<template lang="pug">
modal(name="agreeRefund", :width="480", height="260", @before-open="beforeOpen")
  .modal-header
    p.modal-title 同意退款
    i.el-icon-close(@click="close")
  .modal-body
    p.tip 提示：该订单为未发货订单，同意退款之后，货款自动按照原路退还区代，并关闭该订单
    .handles
      el-button(type="danger", :loading="loading", @click="agreeRefund") 确定
</template>

<script>
import { agreeRefundMoney } from 'api'
export default {
  name: 'agreeRefund',
  data () {
    return {
      loading: false,
      orderId: ''
    }
  },
  methods: {
    async agreeRefund () {
      try {
        this.loading = true
        await this.$axios.post(agreeRefundMoney, {
          order_id: this.orderId
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
      this.$modal.hide('agreeRefund')
    },
    beforeOpen ({params}) {
      this.orderId = params.orderId
    }
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
.tip {
  font-size: 14px;
  color: #C2212A;
  line-height: 20px;
}
.handles {
  text-align: center;
  margin-top: 90px;
}
</style>

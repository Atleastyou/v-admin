<template lang="pug">
modal(name="resetPswd", :width="480", @before-open="beforeOpen")
  .modal-header
    p.modal-title 修改密码
    i.el-icon-close(@click="close")
  .modal-body
    .cell
      .cell-title
        i *
        span 原密码
      el-input.cell-input(placeholder="请输入原密码", type="password", size="small", v-model="form.old_password")
    .cell
      .cell-title
        i *
        span 新密码
      el-input.cell-input(placeholder="请输入新密码（6位以上）", type="password", size="small", v-model="form.new_password")
    .cell
      .cell-title
        i *
        span 确认密码
      el-input.cell-input(placeholder="请再次输入新密码", type="password", size="small", v-model="form.confirm_pswd")
    el-button(type="danger", :loading="loading", @click="submit") 确认提交
</template>

<script>
import { setPswd } from 'api'
export default {
  name: 'resetPswd',
  data () {
    return {
      form: {
        old_password: '',
        new_password: '',
        confirm_pswd: ''
      },
      loading: false
    }
  },
  methods: {
    close () {
      this.$modal.hide('resetPswd')
    },
    beforeOpen () {
      this.form = {
        old_password: '',
        new_password: '',
        confirm_pswd: ''
      }
    },
    async submit () {
      try {
        if (!this.form.old_password) {
          this.$message.error('原密码必填')
        } else if (!this.form.new_password) {
          this.$message.error('新密码必填')
        } else if (this.form.new_password.length < 6) {
          this.$message.error('密码请设置6位以上')
        } else if (!this.form.confirm_pswd) {
          this.$message.error('再次输入新密码必填')
        } else if (this.form.new_password !== this.form.confirm_pswd) {
          this.$message.error('两次密码输入不一致')
        } else {
          this.loading = true
          await this.$axios.post(setPswd, this.form)
          this.loading = false
          this.$message({message: '操作成功',　type: 'success'})
          this.close()
        }
      } catch ({msg}) {
        this.loading = false
        this.$message.error(msg)
      }
    }
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
  text-align: center;
  padding: 30px 20px;
  width: 350px;
  margin: 0 auto;
}
.cell {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}
.cell-title {
  font-size: 16px;
  margin-right: 20px;
  width: 85px;
  & i {
    color: #FF6427;
    margin-right: 10px;
  }
}
.cell-input {
  width: 200px;
  font-size: 12px;
}
</style>

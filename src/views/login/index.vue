<template lang="pug">
.login
  .login-container
    .login-box
      .login-header
        .icon-logo
        p.login-title 软装优品直购会员商城
      .form
        .cell
          i.cell-icon.icon-man
          input.cell-input(placeholder="请输入帐号", v-model="loginForm.account")
        .cell
          i.cell-icon.icon-pswd
          input.cell-input(placeholder="请输入密码", type="password", v-model="loginForm.password")
        //- .cell
        //-   i.cell-icon.icon-vali
        //-   input.cell-input(placeholder="请输入验证码", v-model="loginForm.imgCode")
        //-   img.cell-code
        //- .form-handle 忘记密码?
        el-button.form-btn(type="danger", :loading="loading", @click="login") 登录
</template>

<script>
const warning = {
  accout: '帐号必填',
  pswd: '密码必填',
  imgCode: '验证码必填',
  mobile: '手机号必填',
  code: '短信验证码必填',
  newPswd: '新密码必填',
  repeatPswd: '再次输入新密码必填'
}
import { login } from 'api'
export default {
  name: 'login',
  data () {
    return {
      loginForm: {
        account: '',
        password: '',
        // imgCode: ''
      },
      // findPswd: {
      //   mobile: '',
      //   imgCode: ''
      // },
      // setPswd: {
      //   code: '',
      //   newPswd: '',
      //   repeatPswd: ''
      // },
      loading: false,
    }
  },
  methods: {
    async login () {
      try {
        const valid = Object.keys(this.loginForm).every(key => {
          if (!this.loginForm[key]) this.$message.error(warning[key])
          return this.loginForm[key]
        })
        if (!valid) return
        this.loading = true
        await this.$axios.post(login, this.loginForm)
        this.loading = false
        this.$router.replace({name: 'index'})
      } catch ({msg}) {
        this.loading = false
        this.$message.error(msg)
      }
    }
  },
}
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100vh;
  background-image: url(../../static/images/bg.jpg);
  background-position: center;
  background-size: cover;
}
.login-container {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(0,0,0, .6)
}
.login-box {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate3d(-50%,-50%,0);
  width: 350px;
  text-align: center;
}
.icon-logo {
  font-size: 54px;
  color: #C2212A;
}
.login-title {
  font-size: 18px;
  color: #999999;
  line-height: 25px;
  margin-top: 10px;
}
.form {
  margin-top: 60px;
}
.cell {
  position: relative;
  padding-bottom: 10px;
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  border-bottom: 1px solid #7B7B7B;
  color: #7B7B7B;
}
.cell-icon {
  width: 50px;
  font-size: 30px;
  text-align: left;
}
.cell-input {
  flex: 1;
  height: 30px;
  font-size: 16px;
  background: transparent;
  color: #7B7B7B;
}
.cell-input:-webkit-autofill {
  -webkit-text-fill-color: #7B7B7B !important;
}
.cell-code {
  width: 93px;
  height: 40px;
  background: #fff;
  position: absolute;
  bottom: 10px;
  right: 0;
}
.form-handle {
  font-size: 14px;
  color: #FFFFFF;
  text-align: right;
  cursor: pointer;
}
.form-btn {
  margin-top: 30px;
  width: 100%;
  height: 60px;
  font-size: 20px;
}
</style>

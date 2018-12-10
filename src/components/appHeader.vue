<template lang="pug">
.app-header
  .app-header-left
    i.icon-logo
    span.app-header-name 商家端
    .lower-sidebar-handle(v-if="$route.meta.lowerSidebar !== 'hidden'" @click="toggleLowerSidebar")
      .icon-close-sidebar.lower-sidebar-close(v-show="lowerSidebarShow")
      .icon-open-sidebar.lower-sidebar-open(v-show="!lowerSidebarShow")
  .app-header-right
    router-link.help(:to="{name: 'index'}") 帮助手册
    .user
      .user-info
        p.user-name adminddddd
        p.user-type 管理员
      .user-container
        i.icon-admin
        i.el-icon-caret-top
        .user-inner
          .user-handles
            .user-handle(@click="resetPswd")
              i.icon-key
              span 修改密码
          .user-login-log
            span 最后登录
            p 2018-11-16  15:45:15(IP:183:15.177.122)
    .system
      span.system-title 我的工作台
      i.el-icon-caret-top
      .system-inner
        .system-handle(@click="logout")
          i.icon-exit
          span 退出系统
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { logout } from 'api'
export default {
  name: 'appHeader',
  methods: {
    ...mapActions([
      'changeLowerSidebar'
    ]),
    toggleLowerSidebar () {
      this.changeLowerSidebar({ show: !this.lowerSidebarShow })
    },
    async logout () {
      try {
        await this.$axios.post(logout)
        this.$message({ message: '退出登录', type: 'success' })
        this.$router.replace({ name: 'login' })
      } catch ({ msg }) {
        this.$message.error(msg)
      }
    },
    resetPswd () {
      this.$modal.show('resetPswd')
    }
  },
  computed: {
    ...mapState({
      lowerSidebarShow: state => state.ui.lowerSidebar.show
    })
  }
}
</script>

<style lang="scss" scoped>
.app-header {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 50px;
  background: #fff;
  box-shadow: 0 2px 4px 0 rgba(30,32,32,0.10);
  z-index: 888;
  padding: 0 30px;
  display: flex;
  justify-content: space-between;
}
.app-header-left,.app-header-right {
  display: flex;
  align-items: center;
  height: 100%;
}
.icon-logo {
  font-size: 28px;
  color: #C2212A;
  margin-right: 20px;
}
.app-header-name {
  font-size: 14px;
  margin-right: 20px;
}
.lower-sidebar-handle {
  font-size: 14px;
  width: 38px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: #F8F8F8;
}

.help {
  font-size: 14px;
  margin-right: 30px;
}
.user {
  height: 100%;
  font-size: 14px;
  margin-right: 30px;
  position: relative;
  display: flex;
  align-items: center;
}
.user-name {
  width: 54px;
  overflow: hidden;
  text-overflow: ellipsis;
}
.user-type {
  width: 54px;
  overflow: hidden;
  text-overflow: ellipsis;
}
.user-container {
  margin-left: 10px;
  cursor: pointer;
  height: 100%;
  display: flex;
  align-items: center;
  &:hover .el-icon-caret-top  {
    transform: rotate(180deg);
  }
  &:hover .user-inner {
    top: 50px;
    visibility: inherit;
    opacity: 1;
  }
  .icon-admin {
    font-size: 28px;
  }
}
.user-inner {
  position: absolute;
  right: 0;
  top: 30px;
  width: 230px;
  background: #fff;
  padding: 0 10px;
  transition: all .3s;
  visibility: hidden;
  opacity: 0;
  box-shadow: 0 4px 10px 0 rgba(30,32,32,0.10);
  border-radius: 2px;
}
.user-handles {
  height: 37px;
  line-height: 37px;
  font-size: 12px;
  border-bottom: 1px solid #EFEFEF;
}
.user-handle {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  & i {
    font-size: 14px
  }
  & span {
    margin-left: 5px;
  }
}
.user-login-log {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: #999999;
  padding: 10px 0;
  & p {
    width: 116px;
    word-wrap: break-word;
  }
}
.el-icon-caret-top {
  font-size: 22px;
  transition: all .3s;
  margin-left: 6px;
}

.system {
  height: 100%;
  padding: 0 30px;
  font-size: 14px;
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 16px;
    width: 2px;
    background: #333;
    height: 18px;
  }
  &:hover .el-icon-caret-top  {
    transform: rotate(180deg);
  }
  &:hover .system-inner {
    top: 50px;
    visibility: inherit;
    opacity: 1;
  }
}
.system-inner {
  position: absolute;
  left: 0;
  top: 30px;
  width: 126px;
  padding: 10px 0;
  transition: all .3s;
  visibility: hidden;
  opacity: 0;
  box-shadow: 0 4px 10px 0 rgba(30,32,32,0.10);
  border-radius: 2px;
  background: #fff;
}
.system-handle {
  display: flex;
  justify-content: center;
  align-items: center;
  & i {
    font-size: 20px;
    margin-right: 10px;
  }
  & span {
    font-size: 14px;
  }
}
</style>

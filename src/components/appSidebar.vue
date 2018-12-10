<template lang="pug">
.sidebar
  router-link.sidebar-item(tag="div", :to="{name: 'index'}")
    i.icon-home.sidebar-item-icon
    .sidebar-item-name 首页
  router-link.sidebar-item(tag="div", :to="{name: 'orders'}", :class="{'router-link-exact-active': $route.meta.name === 'orders'}")
    i.icon-order.sidebar-item-icon
    .sidebar-item-name 订单
  router-link.sidebar-item(tag="div", :to="{name: 'stock'}", :class="{'router-link-exact-active': $route.meta.name === 'stock'}")
    i.icon-inventory.sidebar-item-icon
    .sidebar-item-name 库存
  router-link.sidebar-item(tag="div", :to="{name: 'system'}", :class="{'router-link-exact-active': $route.meta.name === 'system'}")
    i.icon-system.sidebar-item-icon
    .sidebar-item-name 系统
</template>

<script>
export default {
  name: 'appSidebar'
}
</script>

<style lang="scss" scoped>
.router-link-exact-active,
.router-link-active {
  background: #000!important;
  color: #fff!important;
}
.sidebar {
  width: 100px;
  height: 100%;
  background: #252429;
  flex-shrink: 0;
  position: relative;
  z-index: 666;
}
.sidebar-item {
  padding: 15px 20px;
  text-align: center;
  color: #7B7B7B;
  cursor: pointer;
  &:hover {
    background: #000;
    color: #fff;
  }
}
.sidebar-item-icon {
  font-size: 36px;
  display: flex;
  justify-content: center;
}
.sidebar-item-name {
  font-size: 16px;
  margin-top: 4px;
}
</style>

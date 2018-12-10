<template lang="pug">
#app
  reset-pswd
  close-order
  print-order
  agree-refund
  refuse-refund
  app-header(v-if="$route.meta.appHeader !== 'hidden'")
  .app-container(:style="$route.meta.appHeader !== 'hidden' ? { 'marginTop': '50px' } : {}", :class="$route.name !== 'login' ? 'app-scrollview' : ''")
    app-sidebar(v-if="$route.meta.sidebar !== 'hidden'")
    lower-sidebar
    .view
      keep-alive(exclude="")
        router-view
</template>
<script>
import appSidebar from '@/components/appSidebar.vue'
import lowerSidebar from '@/components/lowerSidebar.vue'
import appHeader from '@/components/appHeader.vue'
import resetPswd from '@/components/modal/resetPswd.vue'
import closeOrder from '@/components/modal/closeOrder.vue'
import printOrder from '@/components/modal/printOrder.vue'
import agreeRefund from '@/components/modal/agreeRefund.vue'
import refuseRefund from '@/components/modal/refuseRefund.vue'
export default {
  name: 'app',
  components: {
    appSidebar,
    lowerSidebar,
    appHeader,
    resetPswd,
    closeOrder,
    printOrder,
    agreeRefund,
    refuseRefund
  }
}
</script>
<style lang="scss">
#app {
  height: 100%;
}
.app-container {
  display: flex;
}
.app-scrollview {
  height: calc(100% - 50px)
}
.view {
  flex-grow: 1;
  overflow-y: auto;
  background: rgb(245,245,247);
}
</style>

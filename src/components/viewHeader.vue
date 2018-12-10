<template lang="pug">
.view-header
  .icon-back(@click="back")
  span.header-title {{title}}
  span.header-info(v-if="subtitle") {{subtitle}}
</template>
<script>
export default {
  name: 'viewHeader',
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: String
  },
  methods: {
    back () {
      this.$router.back()
    }
  }
}
</script>
<style lang="scss" scoped>
.view-header {
  padding: 37px 0;
  & .icon-back {
    font-size: 20px;
    margin: 0 20px;
    cursor: pointer;
  }
}
.header-title {
  font-size: 24px;
  color: #333333;
}
.header-info {
  margin-left: 20px;
  font-size: 16px;
  color: #999999;
}
</style>

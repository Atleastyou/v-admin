<template lang="pug">
.view-search
  .search-form(v-for="row in filter")
    template(v-for="item in row")
      .search-form-item(v-if="item.type === 'handle'")
        span
        .search-button
          el-button(v-for="btn, index in item.buttons", :size="btn.size", :key="index", :name="btn.name", @click="btn.handle") {{btn.label}}
      .search-form-item(v-else-if="item.type === 'double'")
        span {{item.name}}
        .price-item(v-for="num,index in item.price" :key="index")
          el-input.search-form_input.el-input_size(
            size="small"
            placeholder=""
            v-model="num[num.key]"
          )
          label(v-if="num.labelShow") -
      .search-form-item(v-else)
        span {{item.name}}
        .form-item_body
          el-input.search-form_input(
            v-if="item.type === 'default'"
            size="small"
            placeholder="请输入内容"
            v-model="item[item.key]"
          )
          el-select(v-if="item.type === 'select'", size="small", v-model="item[item.key]", placeholder="请选择")
            el-option(label="全部", value="")
            el-option(
              v-for="option,index in item.options",
              :key="index",
              :label="item.optLabel ? option[item.optLabel] : option",
              :value="item.optValue ? option[item.optValue] : option"
            )
          el-date-picker(
            v-if="item.type === 'date'",
            v-model="time",
            size="small",
            prefix-icon="none",
            type="daterange",
            range-separator="-",
            value-format="yyyy-MM-dd"
            start-placeholder="开始日期",
            end-placeholder="结束日期",
            @change="changePicker"
          )
</template>

<script>
export default {
  name: 'viewSearch',
  props: {
    filter: Array
  },
  data () {
    return {
      time: '' // 定义时间属性，解决从父组件传值过来，不是当前时间的问题
    }
  },
  methods: {
    changePicker (date) {
      this.$emit('changeTime', date)
    }
  }
}
</script>

<style lang="scss" scoped>
.view-search {
  width: 100%;
  padding: 20px 44px;
  background: #fff;
  overflow: auto;
}
.search-form_input{
  width: 220px;
}
.form-item_body {
  display: flex;
  align-items: center;
  width: 220px;
}
.search-form {
  display: flex;
  margin-bottom: 15px;
}
.search-form-item {
  display: flex;
  align-items: center;
  margin-right: 30px;
}
.search-form-item span {
  display: inline-block;
  margin-right: 10px;
  width: 60px;
  text-align: right;
  font-size: 12px;
  color: #333333;
}
.search-form-item label {
  margin: 0 13px;
}
.search-form-item .el-input,
.search-form-item .el-select{
  width: 220px;
}
.search-form-item .el-input_size {
  width: 93px;
}
.search-button {
  width: 220px;
  text-align: right;
}
.search-button .el-button {
  padding: 9px 23px;
}
.search-form-item .el-range-editor--small .el-range-input {
  font-size: 12px;
}
.search-form-item .el-date-editor--daterange.el-input__inner{
  width: 220px;
}
.search-form-item .el-date-editor .el-range-separator {
  width: 8%;
}
</style>

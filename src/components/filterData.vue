<template lang="pug">
.filter
  .filter-row(v-for="row in filter")
    template(v-for="item in row")
      .filter-item(v-if="item.type === 'handle'")
        .filter-name(:style="{ width: `${titleWidth}px`}")
        .filter-handles(:style="{ width: `${inputWidth}px`}")
          el-button(v-for="btn in item.buttons", :size="btn.size", :name="btn.name", @click="btn.handle") {{btn.label}}
      .filter-item(v-else)
        .filter-name(:style="{ width: `${titleWidth}px`}") {{item.name}}
        .filter-body(:style="{ width: `${inputWidth}px`}")
          el-input(v-if="item.type === 'default' || !item.type", size="small", v-model="item[item.key]", placeholder="请输入内容")
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
            v-model="item[item.key]",
            size="small",
            prefix-icon="none",
            type="daterange",
            range-separator="-",
            value-format="yyyy-MM-dd",
            start-placeholder="开始日期",
            end-placeholder="结束日期"
          )
</template>

<script>
export default {
  name: 'filterOrder',
  props: {
    filter: Array,
    titleWidth: {
      default: '84',
      type: String
    },
    inputWidth: {
      default: '220',
      type: String
    },
  }
}
</script>

<style lang="scss" scoped>
.filter {
  background: #FFFFFF;
  padding: 20px;
  overflow: auto;
}
.filter-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  &:last-child {
    margin: 0;
  }
}
.filter-item {
  display: flex;
  align-items: center;
}
.filter-name {
  margin-right: 10px;
  font-size: 12px;
  text-align: right;
}
.filter-handles {
  text-align: right;
}
.filter-body {
  & .el-input__inner, .el-select {
    width: 100%;
  }
}
.el-button[name="search"] {
  background: #2CA9CB;
  border-color: #2CA9CB;
  color: #fff;
}
.el-button[name="reset"] {
  background: #ddd;
  border-color: #ddd;
  color: #000;
}
</style>

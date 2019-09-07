<template>
  <RadioGroup :value="value" @input="input" :type="type" :size="size" :vertical="vertical">
    <Radio v-for="item in options"
    :label="number && +item.label || item.label"
    :disabled="item.disabled"
    :key="item.label">
        <Icon :type="item.icon"></Icon>
        <span>{{item.name}}</span>
    </Radio>
  </RadioGroup>
</template>
<script>
import * as _ from 'underscore'
export default {
  props: {
    value: String | Number,
    mapper: Object | Array,
    size: String, // 尺寸，可选值为large、small、default或者不设置
    type: String, // 可选值为 button 或不填，为 button 时使用按钮样式
    vertical: Boolean, // 是否垂直排列，按钮样式下无效
    number: Boolean // 值是否数字
  },
  computed: {
    options: {
      get: function () {
        return this.mapper instanceof Array && this.mapper || _.pairs(this.mapper)
          .map(e => ({label: e[0], name: e[1]}))
      },
      set: function (o) {}
    }
  },
  methods: {
    input (e) {
      // 双向绑定
      this.$emit('input', e)
      this.$emit('on-change', e)
    }
  }
}
</script>

<template>
  <i-switch :size="size" :value="value" :loading="loading" :disabled="disabled"
          :true-value="trueValue" :false-value="falseValue"
          @on-change="onChange">
    <span slot="open">{{open}}</span>
    <span slot="close">{{close}}</span>
  </i-switch>
</template>
<script>
import * as util from '../../libs/util'
export default {
  props: {
    size: String,
    value: Number | Boolean | String,
    trueValue: Number | Boolean | String,
    falseValue: Number | Boolean | String,
    disabled: Boolean,
    text: String, // 竖杠隔开，如：开启|关闭
    load: Function,
    row: Object
  },
  computed: {
    open: {
      get: function () {
        return this.text && this.text.split('|')[0]
      }
    },
    close: {
      get: function () {
        return this.text && this.text.split('|')[1]
      }
    }
  },
  data () {
    return {
      loading: false
    }
  },
  methods: {
    async onChange (value) {
      this.$emit('input', value)
      this.$emit('on-change', value)
      let p = this.load && this.load(this.row || value)
      if (!p || !p.then) return
      util.updateLoading(p, v => { this.loading = v })
    }
  }
}
</script>

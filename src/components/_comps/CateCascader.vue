<template>
  <Cascader :data="data"
            :value="value1"
            @input="input"
            filterable
            transfer
            change-on-select
            placeholder="选择类目"
  ></Cascader>
</template>
<script>
import * as utils from '@/libs/util'
export default {
  props: {
    value: Object,
    cateKey: {
      type: Array,
      default: function () {
        return ['cate1', 'cate2', 'cate3']
      }
    }
  },
  data () {
    return {
      data: [],
      value1: []
    }
  },
  watch: {
    value: function () {
      let v = []
      let cate1 = this.value[this.cateKey[0]]
      let cate2 = this.value[this.cateKey[1]]
      let cate3 = this.value[this.cateKey[2]]

      if (cate1) {
        v.push(cate1)
      }

      if (cate2) {
        v.push(cate2)
      }

      if (cate3) {
        v.push(cate3)
      }
      this.value1 = v
    }
  },
  async mounted () {
    // 获取大客类目tree
    let r = await utils.request('/api/common/cate/getTree')
    this.data = this.getData(r.data)
  },
  methods: {
    input (e) {
      // 类目属性绑定到value对象
      let v = this.value
      v[this.cateKey[0]] = undefined
      v[this.cateKey[1]] = undefined
      v[this.cateKey[2]] = undefined
      let length = e.length
      if (length > 0) {
        v[this.cateKey[0]] = e[0]
      }
      if (length > 1) {
        v[this.cateKey[1]] = e[1]
      }
      if (length > 2) {
        v[this.cateKey[2]] = e[2]
      }
      this.$emit('input', v)
      this.$emit('on-change', e)
      //
    },
    getData (tree) {
      return tree && tree.map(item => ({
        value: item.categoryId + '',
        label: item.categoryName,
        children: this.getData(item.children) || []
      }))
    }
  }
}
</script>

<template>
  <Select
    :value="value"
    @input="input"
    :placeholder="placeholder"
    :filterable="filterable"
    :disabled="disabled"
    :number="number"
    :size="size"
    :loading="loading"
    :remote="remote"
    :remote-method="remoteMethod"
    :clearable="clearable"
    :multiple="multiple"
    transfer
  >
    <Option v-for="opt in options" :value="number? +opt[0] : opt[0]" :key="number? +opt[0] : opt[0]">{{opt[1]}}</Option>
  </Select>
</template>
<script>
import * as _ from 'underscore'
export default {
  props: {
    placeholder: String,
    value: String | Number,
    mapper: Object | Array,
    filterable: Boolean,
    disabled: Boolean,
    number: Boolean,
    size: String,
    loading: Boolean,
    remote: Boolean,
    remoteMethod: Function,
    clearable: Boolean,
    multiple: Boolean
  },
  watch: {
    'mapper': function (n, o) {
      console.log('mapper', this.mapper)
      this.options = this.mapper instanceof Array && this.mapper || _.pairs(this.mapper)
    }
  },
  computed: {
    options: {
      get: function () {
        return this.mapper instanceof Array && this.mapper || _.pairs(this.mapper)
      },
      set: function (o) {}
    }
  },
  methods: {
    input (e) {
      this.$emit('input', e)
      this.$emit('on-change', e)
    }
  }
}
</script>

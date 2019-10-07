<template>
  <div class="kiwiui-btn-poptip">
    <Poptip v-if="needConfirm"
      confirm
      :title="prompt || '您确认进行该操作吗？'"
      :placement="placement || 'left'"
      @on-ok="click"
      :transfer="true"
      >
      <Button :loading="loading" :type="type" :size="size" :disabled="disabled"><slot></slot></Button>
    </Poptip>
    <Button v-if="!needConfirm" @click="click" :loading="loading" :type="type" :size="size" :disabled="disabled"><slot></slot></Button>
  </div>
</template>
<script>
import * as util from '../../libs/util'
export default {
  props: {
    load: Function,
    type: String,
    size: String,
    placement: String,
    prompt: String,
    disabled: Boolean,
    valid: Boolean
  },
  data () {
    return {
      loading: false
    }
  },
  computed: {
    needConfirm () {
      return ['warning', 'error'].indexOf(this.type) >= 0
    }
  },
  methods: {
    async click () {
      // 传递点击事件
      this.$emit('click')
      // 校验表单
      this.valid ? await util.validateForm(this.getForm()) && (this.callLoad() || true) || this.$Message.error('表单验证失败') : this.callLoad()
    },
    callLoad () {
      let p = this.load && this.load()
      if (!p || !p.then) return
      util.updateLoading(p, v => { this.loading = v })
    },
    getForm (comp = this.$parent) {
      if (!comp) {
        this.$Message.error('向上搜索表单组件失败，请确保按钮拥有表单父组件')
      }
      return comp.rules && comp || this.getForm(comp.$parent)
    }
  }
}
</script>
<style scope>
.kiwiui-btn-poptip{
  display: inline-block;
  vertical-align: top;
  margin-right: 8px;
  margin-left: 8px;
}
</style>

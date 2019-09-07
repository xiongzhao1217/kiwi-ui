<template>
  <Modal v-model="visible" v-bind="modalProps" :loading="loading" @on-ok="onOk" @on-cancel="onCancel">
    <!-- <div @keydown.enter="onOk"> -->
      <div>
      <div v-if="visible" ref="comp" :is="component" v-bind="compProps"></div>
    </div>
    <div slot="footer">
      <Button size="large" @click="onCancel">取消</Button>
      <Button type="primary" size="large" :loading="loading" @click="onOk">确定</Button>
    </div>
  </Modal>
</template>

<script>
import * as utils from '@/libs/util'
export default {
  data () {
    return {
      visible: false,
      loading: false,
      component: 'div',
      compProps: {},
      modalProps: {},
      defer: {}
    }
  },
  methods: {
    show (Component, compProps, modalProps) {
      this.component = Component
      this.compProps = compProps
      this.modalProps = modalProps
      this.visible = true
      return new Promise((resolve, reject) => {
        this.defer = {resolve, reject}
      })
    },
    onCancel () {
      this.visible = false
      this.defer.resolve(false)
    },
    onOk () {
      if (!this.$refs.comp.onOk) {
        this.visible = false
        this.defer.resolve(true)
        return
      }

      let close = res => {
        this.visible = false
        this.defer.resolve(res)
      }
      let doing = this.$refs.comp.onOk(close)
      utils.updateLoading(doing, loading => this.loading = loading)
    }
  }
}
</script>


<template>
  <div>
    <Markdown ref="markdown" :path="path" :code-style="codeStyle" @change="codeChange"/>
    <Tooltip content="放大" placement="top" class="copy" style="right: 28px; ">
          <Icon v-if="showCopy" type="md-qr-scanner"
          @mouseenter.native="mouseenter"
          @mouseout.native="mouseout"
          @click="fullCode"
          :style="'font-size: 20px; color: ' + copyColor"/>
    </Tooltip>
    <Tooltip content="复制代码" placement="top" class="copy">
          <Icon v-if="showCopy" type="md-copy"
          @mouseenter.native="mouseenter"
          @mouseout.native="mouseout"
          :style="'font-size: 20px; color: ' + copyColor"
          v-clipboard:copy="code"
          v-clipboard:success="copyData"/>
          <Icon v-else type="md-checkmark" style="font-size: 20px; color: rgb(92, 184, 92)"/>
    </Tooltip>
  </div>
</template>

<script>
import {showModal} from './modals'
import FullCode from './fullCode'
export default {
  props: {
    path: String,
    codeStyle: String,
    title: String
  },
  data () {
    return {
      showCopy: true,
      code: '',
      copyColor: '#b2b2b2'
    }
  },
  methods: {
    codeChange (code) {
      this.code = code
    },
    copyData () {
      this.showCopy = false
      this.$Message.info('复制完成')
      setTimeout(() => this.showCopy = true, 2000)
    },
    mouseenter () {
      this.copyColor = '#515a6e'
    },
    mouseout () {
      this.copyColor = '#b2b2b2'
    },
    fullCode () {
      showModal(FullCode, {path: this.path, codeStyle: this.codeStyle}, {title: this.title || '代码详情', width: 70})
    }
  }
}
</script>

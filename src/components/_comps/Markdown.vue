
<template>
    <compoent :is="markdown" style="margin-left:20px"></compoent>
</template>

<script>
import hljs from 'highlight.js'
import config from '@/config'
const { baseContext } = config

const codeStyles = ['iview-code', 'monokai-sublime', 'atom-one-dark']

const highlightCode = () => {
  const preEl = document.querySelectorAll('pre')
  preEl.forEach((el) => {
    hljs.highlightBlock(el)
  })
}
export default {
  props: {
    path: String,
    codeStyle: {
      type: String,
      default: 'monokai-sublime'
    }
  },
  data () {
    return {

    }
  },
  computed: {
    markdown: function () {
      return () => import(`@/view${this.path}`)
    }
  },
  mounted () {
    highlightCode()
    this.$nextTick()
    // 移除所有code style css文件
    codeStyles.forEach(style => {
      let child = document.getElementById(style)
      child && child.parentNode.removeChild(child)
    })
    // 添加新样式
    if (!this.codeStyle) return
    let head = document.getElementsByTagName('head')[0]
    let linkTag = document.createElement('link')
    linkTag.id = this.codeStyle
    let baseUrl = baseContext && ('/' + baseContext) || ''
    linkTag.href = `${baseUrl}/css/${this.codeStyle}.css`
    linkTag.setAttribute('rel', 'stylesheet')
    linkTag.setAttribute('media', 'all')
    linkTag.setAttribute('type', 'text/css')
    head.appendChild(linkTag)
  },
  updated () {
    highlightCode()
    // change事件，传递markdown原始内容
    this.$emit('change', this.$el.innerText)
  }
}
</script>

<style lang="less">
code, kbd, pre, samp {
    font-family: Consolas,Menlo,Courier,monospace;
    font-size: 14px;
}
pre {
  margin-top: 0px;
}
pre code {
    display: inline;
    margin: 0;
    padding: 0;
    border: none;
    background: transparent;
}
section p {
  font-size: 15px;
  line-height: 29px;
  margin-bottom: 10px;
}
section ul li {
  font-size: 15px;
  margin-left: 17px;
  line-height: 28px;
}
section p code, section ul li code {
    display: inline-block;
    background: #f7f7f7;
    font-family: Consolas,Monaco,Andale Mono,Ubuntu Mono,monospace;
    margin: 0 3px;
    padding: 1px 5px;
    border-radius: 3px;
    color: #666;
    border: 1px solid #eee;
    line-height: 20px;
}
section h2 {
  margin-bottom: 5px;
}
section pre {
  border-radius: 4px;
}
</style>

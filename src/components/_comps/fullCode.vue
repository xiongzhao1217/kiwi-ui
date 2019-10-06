<template>
  <div>
    <Markdown :path="path" :code-style="codeStyle"/>
  </div>
</template>
<script>

export default {
  props: ['path', 'codeStyle'],
  mounted () {
    $('.ivu-modal-body').attr('style', 'background-color: #f7f7f7')
  },
  methods: {
    async onOk (close) {
      close()
    }
  }
}
</script>

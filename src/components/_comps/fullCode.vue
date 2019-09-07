<template>
  <div>
    <Markdown :path="path" :code-style="codeStyle"/>
  </div>
</template>
<script>

export default {
  props: ['path', 'codeStyle'],
  methods: {
    async onOk (close) {
      close()
    }
  }
}
</script>
<style>
.ivu-modal-body {
  background-color: #f7f7f7
}
</style>

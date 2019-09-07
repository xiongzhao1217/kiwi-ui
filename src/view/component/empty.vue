<template>
  <div class="div-content">
</div>
</template>
<script>
export default {
  data () {
    return {
      table1show: false,
      table: {
        uri: 'https://www.easy-mock.com/mock/5d63ba1624beb77315a972f0/kiwi-ui/user/list',
        // defaultWidth: 150,
        columns: [
          {
            title: 'ID',
            key: 'id'
          },
          {
            title: 'ERP',
            key: 'erp'
          },
          {
            title: '姓名',
            key: 'username'
          }, {
            title: '创建时间',
            key: 'createTime'
          }]
      }
    }
  },
  methods: {
    showCodeChange (field) {
      this[field] = !this[field]
    }
  }
}
</script>
<style lang="less">
.ivu-layout-content {
  background-color: white;
}
.ivu-card-body {
  padding-bottom: 0px;
}
.div-content {
  padding: 0 30px;
}
.example-desc {
    font-size: 14px;
    padding: 0 20px;
}
.example-desc p {
  margin-bottom: 5px;
  line-height: 28px;
}
p code {
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
.copy {
    border-radius: 0 0 3px 3px;
    padding: 2px 5px;
    position: absolute;
    top: 5px;
    right: 0;
    color: #b2b2b2;
    cursor: pointer;
}
.example-code-more {
    position: absolute;
    bottom: 0;
    left: 4px;
    right: 4px;
    text-align: center;
    cursor: pointer;
    padding: 5px 0;
}
</style>

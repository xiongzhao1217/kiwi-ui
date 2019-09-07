```javascript
<template>
  <AutoTable v-bind="table"/>
</template>
<script>
  export default {
    data () {
    return {
      table: {
        uri: 'https://www.easy-mock.com/mock/5d63ba1624beb77315a972f0/kiwi-ui/user/list',
        columns: [
          {
            type: 'selection',
            width: 60,
            align: 'center'
          }, {
            title: 'ID',
            key: 'id'
          }, {
            title: 'ERP',
            key: 'erp'
          }, {
            title: '姓名',
            key: 'username'
          }, {
            title: '创建时间',
            key: 'createTime'
          }, {
            title: '操作',
            width: 200,
            renderButtons: row => [{
              title: '编辑',
              type: 'primary',
              click: this.clickEdit
            }, {
              title: '删除',
              type: 'error',
              click: this.clickDelete
            }]
          }]
      }
    }
  },
  methods: {
    clickEdit (row = {}) {
      this.$Message.info(`编辑行: ${JSON.stringify(row)}`)
    },
    clickDelete (row = {}) {
      this.$Message.info(`删除行: ${JSON.stringify(row)}`)
    }
  }
</script>
```

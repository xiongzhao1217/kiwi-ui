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
        defaultWidth: 150, // 每列的默认宽度，如果在列中单独指定width，以单独指定的为准。
        columns: [
          {
            title: 'ERP',
            key: 'erp'
          }, {
            title: '姓名',
            key: 'username',
            width: 100,
            fixed: 'left'
          }, {
            title: '性别',
            key: 'sex',
            width: 120,
            renderComp: {
              type: 'select',
              mapper: {1: '男', 2: '女'},
              number: true,
              change: this.selectChange
            }
          }, {
            title: '手机号',
            key: 'telephone',
            renderComp: {
              type: 'input',
              change: this.inputChange
            }
          }, {
            title: '个人简介',
            tooltip: true,
            width: 180,
            key: 'profile'
          }, {
            title: '是否有效',
            key: 'valid',
            renderComp: {
              type: 'switch',
              text: '有效|无效',
              size: 'large',
              change: this.swithChange
            }
          }, {
            title: '创建时间',
            key: 'createTime',
            width: 155
          }, {
            title: '操作',
            width: 150,
            fixed: 'right',
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
    async swithChange (row = {}) {
      this.$Message.info(`switch change: ${JSON.stringify(row)}`)
      // 模拟异步
      await new Promise((resolve, reject) =>
        setTimeout(() => {
          resolve()
        }, 3000)
      )
    },
    inputChange (row = {}) {
      this.$Message.info(`inpur change: ${JSON.stringify(row)}`)
    },
    selectChange (row = {}) {
      this.$Message.info(`select change: ${JSON.stringify(row)}`)
    },
    clickEdit (row = {}) {
      this.$Message.info(`编辑行: ${JSON.stringify(row)}`)
    },
    clickDelete (row = {}) {
      this.$Message.info(`删除行: ${JSON.stringify(row)}`)
    }
  }
</script>
```

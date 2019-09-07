```xml
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
            title: 'ID',
            key: 'id'
          }, {
            title: 'ERP',
            key: 'erp'
          }, {
            title: '姓名',
            key: 'username'
          }, {
            title: '性别',
            key: 'sex',
            mapper: {1: '男', 2: '女'}
          }, {
            title: '角色',
            key: 'role',
            filter: false, // 关闭表格列的筛选功能
            mapper: [{code: 'admin', name: '管理员', color: 'red'}, {code: 'develop', name: '研发', color: 'cyan'}]
          }, {
            title: '创建时间',
            key: 'createTime'
          }]
      }
    }
  }
</script>
```

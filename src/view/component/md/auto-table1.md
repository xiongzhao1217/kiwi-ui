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
            title: '创建时间',
            key: 'createTime'
          }]
      }
    }
  }
</script>
```

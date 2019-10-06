```javascript
<template>
  <Ztree ref="ztree" :data="data" checkable expand/>
  <AutoButton type="success" @click="getCheckedNodes">获取勾选的节点</AutoButton>
</template>
<script>
export default {
  data () {
    return {
      data: [
        {id: 1, name: '一级节点1'},
        {id: 2, name: '一级节点2'},
        {id: 3, name: '一级节点3'},
        {id: 4, name: '一级节点4'},
        {id: 5, pId: 1, name: '二级节点1-1', checked: true},
        {id: 6, pId: 1, name: '二级节点1-2'},
        {id: 7, pId: 2, name: '二级节点2-1'},
        {id: 8, pId: 2, name: '二级节点2-2'},
        {id: 9, pId: 3, name: '二级节点3-1'},
        {id: 10, pId: 3, name: '二级节点3-2'},
        {id: 11, pId: 4, name: '二级节点4-1'},
        {id: 12, pId: 4, name: '二级节点4-2'}
      ]
    }
  },
  methods: {
    // 获取勾选的节点
    async getCheckedNodes () {
      this.$Message.info('勾选节点已打印日志，请F12控制台查看')
      let getCheckedNodes = this.$refs.ztree2.getCheckedNodes()
      console.log('checkedNodes:', getCheckedNodes)
    }
  }
}
</script>
```

```javascript
<template>
  <Ztree
    :data="data"
    editable
    expand
    :keyMapper="keyMapper"
    :addNode="addNode"
    :editNode="editNode"
    :deleteNode="deleteNode"
    :drag="saveDrag"/>
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
        {id: 5, pid: 1, name: '二级节点1-1'},
        {id: 6, pid: 1, name: '二级节点1-2'},
        {id: 7, pid: 1, name: '二级节点1-3'},
        {id: 8, pid: 2, name: '二级节点2-1'},
        {id: 9, pid: 3, name: '二级节点3-1'},
        {id: 10, pid: 4, name: '二级节点4-1'}
      ],
      keyMapper: {
        idKey: 'id', // 节点数据中保存唯一标识的属性名称,默认id
        pIdKey: 'pid', // 节点数据中保存其父节点唯一标识的属性名称,默认pId
        rootPId: 0 // 用于修正根节点父节点数据，即 pIdKey 指定的属性值，默认null
      }
    }
  },
  methods: {
    // 点击添加节点按钮（若希望新增节点生效，需要return新增的节点数据）
    async addNode (node) {
      this.$Message.info(`添加节点，当前节点: ${JSON.stringify({id: node.id, pid: node.pid, name: node.name, level: node.level})}`)
    },
    // 点击修改节点按钮（若希望修改节点生效，需要return修改后的节点数据）
    async editNode (node) {
      this.$Message.info(`编辑节点: ${JSON.stringify({id: node.id, pid: node.pid, name: node.name, level: node.level})}`)
    },
    // 删除节点（若希望删除结果生效，需要return true）
    async deleteNode (node) {
      this.$Message.info(`删除节点: ${JSON.stringify({id: node.id, pid: node.pid, name: node.name, level: node.level})}`)
      return true
    },
    // 保存拖拽结果（若希望拖拽结果生效，需要return true）
    async saveDrag (node, targetNode, moveType, nodeIds) {
      // 访问后端接口更新拖拽结果
      // todo
      return true
    }
  }
}
</script>
```

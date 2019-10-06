<style lang="less">
    .ztree li span.button.add {margin-left:2px; margin-right: -1px; background-position:-144px 0; vertical-align:top; *vertical-align:middle}
    .zTreeDragUL.ztree{
      z-index: 9999;
    }
    span.tmpzTreeMove_arrow{
      z-index: 99999;
    }
</style>
<template>
  <div>
    <ul :id="treeid" class="ztree"></ul>
  </div>
</template>
<script>
let uuid = require('node-uuid')
export default {
  props: {
    addNode: Function,
    editNode: Function,
    deleteNode: Function,
    clickNode: Function,
    drag: Function,
    showRenameBtn: Function,
    data: Array,
    setting: Object,
    keyMapper: Object, // 节点字段映射
    expand: Boolean, // 是否自动展开节点
    editable: Boolean, // 是否可编辑，true显示增删改按钮，默认false
    checkable: Boolean // 是否可勾选
  },
  data () {
    return {
      treeid: uuid.v1(), // uuid作为treeid，防止多个不同的树相互影响
      zTree: {}, // 整个ztree树对象
      curDragNodes: [] // 当前拖拽节点的所有兄弟节点(包含自己)
    }
  },
  watch: {
    data: function (n, o) {
      this.loadZtree()
    }
  },
  mounted () {
    this.$nextTick()
    this.loadZtree()
  },
  methods: {
    getZTree () {
      return this.zTree
    },
    // 获取选中的节点
    getSelectedNodes () {
      return this.zTree.getSelectedNodes()
    },
    // 获取勾选的节点
    getCheckedNodes () {
      return this.zTree.getCheckedNodes(true)
    },
    // 点击事件触发
    beforeClick (treeId, treeNode) {
      this.clickNode && this.clickNode(treeNode)
    },
    // 进入编辑状态前调用
    beforeEditName (treeId, treeNode) {
      let r = this.editNode && this.editNode(treeNode)
      if (!r) return false
      if (!r.then) {
        // 更新节点
        Object.assign(treeNode, r)
        this.zTree.updateNode(treeNode)
        this.$Message.success('修改完成')
      } else {
        r.then(updateNode => {
          // 更新节点
          if (updateNode) {
            Object.assign(treeNode, updateNode)
            this.zTree.updateNode(treeNode)
            this.$Message.success('修改完成')
          }
        })
      }
      return false
    },
    // 删除节点前调用
    beforeRemove (treeId, treeNode) {
      this.$Modal.confirm({
        title: '删除确认',
        content: '<p style="font-size:16px;">您确认进行该操作吗？</p>',
        okText: '继续',
        onOk: () => {
          let r = this.deleteNode && this.deleteNode(treeNode)
          if (!r) return
          if (r.then) {
            r.then(res => {
              if (res) {
                this.zTree.removeNode(treeNode)
                this.$Message.success('已删除')
              }
            }, error => {
              this.$Message.error(error)
            })
          } else {
            this.zTree.removeNode(treeNode)
            this.$Message.success('已删除')
          }
        }
      })
      return false
    },
    // 是否显示删除按钮，只有叶子节点可以删除，父节点不显示删除按钮
    showRemoveBtn (treeId, treeNode) {
      return !treeNode.isParent && treeNode.getParentNode() // 父节点不显示删除按钮,根节点不可删除
    },
    // 鼠标悬停显示添加按钮
    addHoverDom (treeId, treeNode) {
      if (this.setting && this.setting.maxLevel && this.setting.maxLevel <= treeNode.level) {
        return
      }
      let sObj = $('#' + treeNode.tId + '_span')
      if (treeNode.editNameFlag || $('#addBtn_' + treeNode.tId).length > 0) return
      let addStr = "<span class='button add' id='addBtn_" + treeNode.tId + "' title='添加节点' onfocus='this.blur()'></span>"
      sObj.after(addStr)
      let btn = $('#addBtn_' + treeNode.tId)
      btn && btn.bind('click', async () => {
        let sonNode = this.addNode && await this.addNode(treeNode)
        // 保存添加按钮
        if (sonNode) {
          this.zTree.addNodes(treeNode, sonNode)
          this.$Message.success('添加完成')
        }
      })
    },
    // 移除鼠标悬停显示的内容
    removeHoverDom (treeId, treeNode) {
      $('#addBtn_' + treeNode.tId).unbind().remove()
    },
    // 开始拖拽前
    beforeDrag (treeId, treeNodes) {
      for (let i = 0, l = treeNodes.length; i < l; i++) {
        if (treeNodes[i].drag === false) {
          this.curDragNodes = []
          return false
        } else if (treeNodes[i].parentTId && treeNodes[i].getParentNode().childDrag === false) {
          this.curDragNodes = []
          return false
        }
      }
      this.curDragNodes = treeNodes
      return true
    },
    // 拖拽释放前
    beforeDrop (treeId, treeNodes, targetNode, moveType, isCopy) {
      let nodeIds = treeNodes[0].getParentNode().children
      nodeIds = nodeIds.map(n => n.id)
      this.drag && this.drag(treeNodes[0], targetNode, moveType, nodeIds)
        .then((r) => {
          if (r) {
            this.zTree.moveNode(targetNode, treeNodes[0], moveType)
            this.$Message.success('排序完成')
          }
        }, (error) => {
          this.$Message.error(error)
        })
      return false
    },
    // 拖拽到目标节点时，设置是否允许移动到目标节点前面的操作
    dropPrev (treeId, nodes, targetNode) {
      let pNode = targetNode.getParentNode()
      if (pNode && pNode.dropInner === false) {
        return false
      } else {
        for (let i = 0, l = this.curDragNodes.length; i < l; i++) {
          let curPNode = this.curDragNodes[i].getParentNode()
          if (this.curDragNodes[i].level !== targetNode.level || this.curDragNodes[i].getParentNode() !== targetNode.getParentNode()) {
            return false
          }
        }
      }
      return true
    },
    // 拖拽到目标节点时，设置是否允许移动到目标节点后面的操作。
    dropNext (treeId, nodes, targetNode) {
      let pNode = targetNode.getParentNode()
      if (pNode && pNode.dropInner === false) {
        return false
      } else {
        for (let i = 0, l = this.curDragNodes.length; i < l; i++) {
          let curPNode = this.curDragNodes[i].getParentNode()
          if (this.curDragNodes[i].level !== targetNode.level || this.curDragNodes[i].getParentNode() !== targetNode.getParentNode()) {
            return false
          }
        }
      }
      return true
    },
    // 拖拽到目标节点时，设置是否允许成为目标节点的子节点
    dropInner (treeId, nodes, targetNode) {
      return false
    },
    loadZtree () {
      // 销毁已存在的树
      this.zTree && this.zTree.destroy && this.zTree.destroy()
      // 初始化zTree
      this.zTree = window.$.fn.zTree.init(
        window.$(`#${this.treeid}`),
        {
          view: {
            addHoverDom: this.editable && this.addHoverDom, // 鼠标悬停显示内容
            removeHoverDom: this.removeHoverDom, // 移除鼠标悬停显示的内容
            selectedMulti: false
          },
          edit: {
            drag: {
              autoExpandTrigger: true,
              prev: this.dropPrev,
              inner: this.dropInner,
              next: this.dropNext
            },
            enable: this.editable,
            editNameSelectAll: true,
            showRemoveBtn: this.showRemoveBtn,
            // Function 是否显示编辑按钮，默认显示，入参(treeId, treeNode)
            showRenameBtn: this.showRenameBtn
          },
          data: {
            key: this.keyMapper || {},
            simpleData: this.keyMapper && {
              enable: true,
              ...this.keyMapper
            } || {
              enable: true
            }
          },
          callback: {
            beforeEditName: this.beforeEditName,
            beforeRemove: this.beforeRemove,
            beforeClick: this.beforeClick,
            beforeDrag: this.beforeDrag, // 开始拖拽前
            beforeDrop: this.beforeDrop // 拖拽释放前
          },
          check: this.checkable && {
            enable: true
          } || {}
        },
        this.data
      )
      this.zTree.expandAll(this.expand)
    }
  }
}
</script>

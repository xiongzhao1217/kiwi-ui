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
    <ul id="ztree" class="ztree"></ul>
  </div>
</template>
<script>
export default {
  props: {
    clickAddBtn: Function,
    clickEditBtn: Function,
    clickDeleteBtn: Function,
    clickNode: Function,
    drag: Function,
    data: Array,
    setting: Object,
    expand: Boolean // 是否自动展开节点
  },
  data () {
    return {
      zTree: {} // 整个ztree树对象
    }
  },
  watch: {
    'data': function (n, o) {
      this.loadZtree()
    }
  },
  methods: {
    getZTreeObj () {
      return this.zTree
    },
    loadZtree () {
      // 鼠标悬停显示内容
      let addHoverDom = (treeId, treeNode) => {
        if (this.setting && this.setting.maxLevel && this.setting.maxLevel <= treeNode.level) {
          return
        }
        let sObj = $('#' + treeNode.tId + '_span')
        if (treeNode.editNameFlag || $('#addBtn_' + treeNode.tId).length > 0) return
        let addStr = "<span class='button add' id='addBtn_" + treeNode.tId + "' title='add node' onfocus='this.blur();'></span>"
        sObj.after(addStr)
        let btn = $('#addBtn_' + treeNode.tId)
        if (btn) {
          btn.bind('click', async () => {
            if (this.clickAddBtn) {
              let sonNode = await this.clickAddBtn(treeNode)
              // 保存添加按钮
              if (sonNode) {
                zTree.addNodes(treeNode, sonNode)
                this.$Message.success('添加完成')
              }
            }
          })
        }
      }
      // 移除鼠标悬停显示的内容
      let removeHoverDom = (treeId, treeNode) => {
        $('#addBtn_' + treeNode.tId).unbind().remove()
      }
      // 开始拖拽前
      let curDragNodes
      let beforeDrag = (treeId, treeNodes) => {
        for (let i = 0, l = treeNodes.length; i < l; i++) {
          if (treeNodes[i].drag === false) {
            curDragNodes = null
            return false
          } else if (treeNodes[i].parentTId && treeNodes[i].getParentNode().childDrag === false) {
            curDragNodes = null
            return false
          }
        }
        curDragNodes = treeNodes
        return true
      }
      // 拖拽释放前
      let beforeDrop = (treeId, treeNodes, targetNode, moveType, isCopy) => {
        let nodeIds = treeNodes[0].getParentNode().children
        nodeIds = nodeIds.map(n => n.id)
        if (this.drag) {
          let r = this.drag(treeNodes[0], targetNode, moveType, nodeIds)
          r.then((r) => {
            if (r) {
              zTree.moveNode(targetNode, treeNodes[0], moveType)
              this.$Message.success('排序完成')
            }
          }, (error) => {
            this.$Message.error(error)
          })
        }
        return false
      }
      // 拖拽到目标节点时，设置是否允许移动到目标节点前面的操作
      let dropPrev = (treeId, nodes, targetNode) => {
        let pNode = targetNode.getParentNode()
        if (pNode && pNode.dropInner === false) {
          return false
        } else {
          for (let i = 0, l = curDragNodes.length; i < l; i++) {
            let curPNode = curDragNodes[i].getParentNode()
            if (curDragNodes[i].level !== targetNode.level || curDragNodes[i].getParentNode() !== targetNode.getParentNode()) {
              return false
            }
          }
        }
        return true
      }
      // 拖拽到目标节点时，设置是否允许移动到目标节点后面的操作。
      let dropNext = (treeId, nodes, targetNode) => {
        let pNode = targetNode.getParentNode()
        if (pNode && pNode.dropInner === false) {
          return false
        } else {
          for (let i = 0, l = curDragNodes.length; i < l; i++) {
            let curPNode = curDragNodes[i].getParentNode()
            if (curDragNodes[i].level !== targetNode.level || curDragNodes[i].getParentNode() !== targetNode.getParentNode()) {
              return false
            }
          }
        }
        return true
      }
      // 拖拽到目标节点时，设置是否允许成为目标节点的子节点
      let dropInner = (treeId, nodes, targetNode) => {
        return false
      }
      // 是否显示删除按钮
      let showRemoveBtn = (treeId, treeNode) => {
        return !treeNode.isParent && treeNode.getParentNode() // 父节点不显示删除按钮,根节点不可删除
      }

      // 进入编辑状态前调用
      let beforeEditName = async (treeId, treeNode) => {
        if (this.clickEditBtn) {
          let updateNode = await this.clickEditBtn(treeNode)
          // 更新节点
          if (updateNode) {
            treeNode.name = updateNode.name
            if (zTree.setting && zTree.setting.data && zTree.setting.data.key && zTree.setting.data.key.name) treeNode[zTree.setting.data.key.name] = updateNode[zTree.setting.data.key.name]
            for (let key of Object.keys(updateNode)) {
              treeNode[key] = updateNode[key]
            }
            zTree.updateNode(treeNode)
            this.$Message.success('修改完成')
          }
        }
        return false
      }
      // 删除节点前调用
      let beforeRemove = (treeId, treeNode) => {
        this.$Modal.confirm({
          title: '删除确认',
          content: '<p style="font-size:16px;">您确认进行该操作吗？</p>',
          okText: '继续',
          onOk: () => {
            if (this.clickDeleteBtn) {
              let r = this.clickDeleteBtn(treeNode)
              r.then((r) => {
                if (r) {
                  zTree.removeNode(treeNode)
                  this.$Message.success('已删除')
                }
              }, (error) => {
                this.$Message.error(error)
              })
            }
          }
        })
        return false
      }
      // 点击事件触发
      let clickNode = (treeId, treeNode) => {
        this.clickNode && this.clickNode(treeNode)
      }
      if (this.zTree && this.zTree.destroy) this.zTree.destroy()
      // 初始化zTree
      window.$.fn.zTree.init(
        window.$('#ztree'),
        {
          view: {
            addHoverDom: this.setting && this.setting.showEdit && addHoverDom, // 鼠标悬停显示内容
            removeHoverDom: removeHoverDom, // 移除鼠标悬停显示的内容
            selectedMulti: false
          },
          edit: {
            drag: {
              autoExpandTrigger: true,
              prev: dropPrev,
              inner: dropInner,
              next: dropNext
            },
            enable: this.setting && this.setting.showEdit,
            editNameSelectAll: true,
            showRemoveBtn: showRemoveBtn,
            showRenameBtn: this.setting && this.setting.edit && this.setting.edit.showRenameBtn
          },
          data: {
            key: this.setting && this.setting.data && this.setting.data.key || {},
            simpleData: this.setting && this.setting.data && {
              enable: true,
              ...this.setting.data.simpleData
            } || {
              enable: true
            }
          },
          callback: {
            beforeEditName: beforeEditName,
            beforeRemove: beforeRemove,
            beforeClick: clickNode,
            beforeDrag: beforeDrag, // 开始拖拽前
            beforeDrop: beforeDrop // 拖拽释放前
          },
          check: this.setting && this.setting.check || {}
        },
        this.data
      ).expandAll(this.expand)
      let zTree = window.$.fn.zTree.getZTreeObj('ztree')
      this.zTree = zTree
    }
  }
}
</script>

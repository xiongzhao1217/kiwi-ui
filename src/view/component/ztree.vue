<template>
<div class="div-content">
  <h1>ztree树组件</h1><br>
  <h2>概述</h2><br>
  <p style="font-size: 14px">对ztree进行组件化封装，支持数据绑定，勾选、编辑等常用功能。</p><br>
  <h2>代码示例</h2><br>
  <Card>
    <Row>
      <Col span="12" style="margin-top: 12px">
        <Ztree ref="ztree1"
        :data="data1"
        :clickNode="clickNode"
        expand />
        <br>
        <AutoButton type="success" @click="getSelectNodes">获取选中的节点</AutoButton>
        <Divider orientation="left">基本用法</Divider>
        <div class="example-desc">
        <p>• 使用<code>data</code>绑定数据，列表类型，不需要转换成树结构。</p>
        <p>• <code>id</code>为节点id，<code>pId</code>为父节点id，<code>name</code>为节点名称。</p>
        <p>• 节点点击事件<code>clickNode</code>，入参为点击的节点对象(<a href="http://www.treejs.cn/v3/api.php" target="_blank">查看treeNode全部属性</a>)。</p>
        <p>• 获取当前选中节点，可以通过树组件的<code>getSelectedNodes</code>函数获取。</p>
        <p>• <code>expand</code>属性用于展开所有节点。</p>
        </div>
      </Col>
      <AutoSplit/>
      <Col span="12" class="col-right" :style="{height: tree1codeHeight}">
        <CodeView style="margin-bottom: 24px" path="/component/md/ztree1.md" title="基本用法" code-style="iview-code"/>
        <div class="example-code-more">
          <a v-if='tree1expand' title="隐藏代码" type="text" @click="expandCodeChange('tree1expand', 'tree1codeHeight', 538)"><Icon type="ios-arrow-up" size="17"/></a>
          <a v-else type="text" title="查看代码" @click="expandCodeChange('tree1expand', 'tree1codeHeight')"><Icon type="ios-arrow-down" size="17"/></a>
        </div>
      </Col>
    </Row>
    <div>
    </div>
  </Card>
  <Card style="margin-top: 25px">
    <Row>
      <Col span="12" style="margin-top: 12px">
        <Ztree ref="ztree2"
        :data="data2"
        checkable
        expand
        />
        <br>
        <AutoButton type="success" @click="getCheckedNodes">获取勾选的节点</AutoButton>
        <Divider orientation="left">勾选节点</Divider>
        <div class="example-desc">
        <p>• 通过设置<code>checkable</code>属性赋予树组件勾选功能。</p>
        <p>• 渲染组件时，如果指定节点<code>checked</code>属性为true，节点前的选择框将被勾选。</p>
        <p>• 获取当前勾选的节点，可以通过树组件的<code>getCheckedNodes</code>函数获取。</p>
        </div>
      </Col>
      <AutoSplit/>
      <Col span="12" class="col-right" :style="{height: tree2codeHeight}">
        <CodeView style="margin-bottom: 24px" path="/component/md/ztree2.md" title="勾选节点" code-style="iview-code"/>
        <div class="example-code-more">
          <a v-if='tree2expand' title="隐藏代码" type="text" @click="expandCodeChange('tree2expand', 'tree2codeHeight', 473)"><Icon type="ios-arrow-up" size="17"/></a>
          <a v-else type="text" title="查看代码" @click="expandCodeChange('tree2expand', 'tree2codeHeight')"><Icon type="ios-arrow-down" size="17"/></a>
        </div>
      </Col>
    </Row>
    <div>
    </div>
  </Card>
  <Card style="margin-top: 25px">
    <Row>
      <Col span="12" style="margin-top: 12px">
        <Ztree ref="ztree3"
        :data="data3"
        :addNode="addNode"
        :editNode="editNode"
        :deleteNode="deleteNode"
        :drag="saveDrag"
        editable
        :keyMapper="keyMapper"
        expand
        />
        <Divider orientation="left">编辑节点</Divider>
        <div class="example-desc">
          <p>• 通过<code>keyMapper</code>可以自定义节点别名，相关key参考右侧代码。</p>
          <p>• 添加子节点事件<code>addNode</code>，入参为父节点对象(<a href="http://www.treejs.cn/v3/api.php" target="_blank">查看treeNode全部属性</a>)，希望新增节点生效，需要return新增的节点数据。</p>
          <p>• 修改节点事件<code>editNode</code>，入参为当前节点对象，希望修改生效，需要return修改后的节点数据。</p>
          <p>• 删除节点事件<code>deleteNode</code>，入参为当前节点对象，希望删除生效，需要return true。</p>
          <p>• 拖拽节点事件<code>drag</code>，入参为当前节点、目标节点、拖拽方式和兄弟节点id，具体可参考ztree拖拽事件。</p>
        </div>
      </Col>
      <AutoSplit/>
      <Col span="12" class="col-right" :style="{height: tree3codeHeight}">
        <CodeView style="margin-bottom: 24px" path="/component/md/ztree3.md" title="编辑节点" code-style="iview-code"/>
        <div class="example-code-more">
          <a v-if='tree3expand' title="隐藏代码" type="text" @click="expandCodeChange('tree3expand', 'tree3codeHeight', 545)"><Icon type="ios-arrow-up" size="17"/></a>
          <a v-else type="text" title="查看代码" @click="expandCodeChange('tree3expand', 'tree3codeHeight')"><Icon type="ios-arrow-down" size="17"/></a>
        </div>
      </Col>
    </Row>
    <div>
    </div>
  </Card>
</div>
</template>
<script>
export default {
  data () {
    return {
      tree1expand: false,
      tree2expand: false,
      tree3expand: false,
      tree1codeHeight: '538px',
      tree2codeHeight: '473px',
      tree3codeHeight: '545px',
      data1: [
        {id: 1, name: '一级节点1'},
        {id: 2, name: '一级节点2'},
        {id: 3, name: '一级节点3'},
        {id: 4, name: '一级节点4'},
        {id: 5, pId: 1, name: '二级节点1-1'},
        {id: 6, pId: 1, name: '二级节点1-2'},
        {id: 7, pId: 2, name: '二级节点2-1'},
        {id: 8, pId: 2, name: '二级节点2-2'},
        {id: 9, pId: 3, name: '二级节点3-1'},
        {id: 10, pId: 3, name: '二级节点3-2'},
        {id: 11, pId: 4, name: '二级节点4-1'},
        {id: 12, pId: 4, name: '二级节点4-2'}
      ],
      data2: [
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
      ],
      keyMapper: {
        idKey: 'id', // 节点数据中保存唯一标识的属性名称,默认id
        pIdKey: 'pid', // 节点数据中保存其父节点唯一标识的属性名称,默认pId
        rootPId: 0 // 用于修正根节点父节点数据，即 pIdKey 指定的属性值，默认null
      },
      data3: [
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
      ]
    }
  },
  methods: {
    // 点击节点
    async clickNode (node) {
      this.$Message.info(`点击节点: ${JSON.stringify({id: node.id, pId: node.pId, name: node.name, level: node.level})}`)
    },
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
      return true
    },
    // 获取点击的节点
    async getSelectNodes () {
      this.$Message.info('选中节点已打印日志，请F12控制台查看')
      let selectedNodes = this.$refs.ztree1.getSelectedNodes()
      console.log('selectedNodes:', selectedNodes)
    },
    // 获取勾选的节点
    async getCheckedNodes () {
      this.$Message.info('勾选节点已打印日志，请F12控制台查看')
      let getCheckedNodes = this.$refs.ztree2.getCheckedNodes()
      console.log('checkedNodes:', getCheckedNodes)
    },
    expandCodeChange (key, heightKey, height) {
      this[key] = !this[key]
      this[heightKey] = height && ('height:' + height + 'px') && height + 'px'
    }
  }
}
</script>
<style lang="less">
.ivu-layout-content {
  background-color: white;
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
.example-code-more:after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 1;
    box-shadow: inset 0 -15px 30px #fff;
}
.example-code-more i {
    position: relative;
    z-index: 2;
}
.col-right {
  overflow:hidden;
}
.ivu-card-body {
  padding-bottom: 0px;
}
.split {
  bottom: 0;
}
</style>

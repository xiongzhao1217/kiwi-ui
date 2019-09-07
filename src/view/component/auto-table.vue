<template>
  <div class="div-content">
  <h1>AutoTable 表格</h1><br>
  <h2>概述</h2><br>
  <p style="font-size: 14px">对iview原生Table组件进行二次封装，支持<code>自动分页</code>、<code>字典映射</code>、<code>按钮列</code>、<code>自动loading</code>等。</p><br>
  <h2>代码示例</h2><br>
  <Card>
    <Row>
      <AutoTable ref="table" v-bind="table"/>
      <Divider orientation="left">基础用法</Divider>
      <div class="example-desc">
      <p>• 通过<code>v-bind</code>绑定<code>table</code>对象，实现表格自动渲染。</p>
      <p>• <code>table.uri</code>属性，用于指定表格接口地址，表格在渲染时，会自动调用该地址，案例中使用<code>mock</code>地址，实际中不需要写域名，填写<code>uri</code>地址即可。</p>
      <p>• <code>table.columns</code>属性用于定义表格的列，<code>title</code>为列名，<code>key</code>为后端接口中的字段名。</p>
      </div>
    </Row>
    <Row style="height: 22px"><AutoSplit type="horizontal" style="margin-top: 10px;"/></Row>
    <br>
    <Row>
      <CodeView v-if="table1show" path="/component/md/auto-table1.md" title="基础用法" code-style="iview-code"/>
      <div class="example-code-more">
        <a v-if='table1show' type="text" @click="showCodeChange('table1show')"><Icon type="ios-arrow-up" size="17"/></a>
        <a v-else type="text" @click="showCodeChange('table1show')"><Icon type="ios-arrow-down" size="17"/> 查看代码</a>
      </div>
    </Row>
  </Card>
  <Card style="margin-top: 25px">
    <Row>
      <AutoTable ref="table2" v-bind="table2"/>
      <Divider orientation="left">字典映射</Divider>
      <div class="example-desc">
      <p>• 通过<code>table.columns.mapper</code>属性，我们可以将后端定义的code码映射为文字，<code>mapper</code>支持对象类型和数组类型，数组类型的<code>color</code>属性，可以指定标签的颜色，默认颜色为<code>cyan</code>, 全部样式请参考<code>iview</code>的<a href="https://www.iviewui.com/components/tag" target="_blank"> Tag标签</a> 。</p>
      <p>• 案例中的<code>性别</code>字段<code>mapper</code>采用对象类型，<code>{1: '男', 2: '女'}。</code></p>
      <p>• 案例中的<code>角色</code>字段<code>mapper</code>采用数组类型，<code>[{code: 'admin', name: '管理员', color: 'red'}, {code: 'develop', name: '研发', color: 'cyan'}。</code></p>
      <p>• <code>mapper</code>也赋予了字段筛选的能力，点击表头字段的 <Icon type="ios-funnel"/> 图标，可以按类型进行筛选，表格组件会自动向后端发送请求并附带筛选字段值，如果不希望拥有筛选功能，请添加属性<code>filter: false</code>，案例中性别可以筛选，角色不能筛选。</p>
      </div>
    </Row>
    <Row style="height: 22px"><AutoSplit type="horizontal" style="margin-top: 10px;"/></Row>
    <br>
    <Row>
      <CodeView v-if="table2show" path="/component/md/auto-table2.md" title="字典映射" code-style="iview-code"/>
      <div class="example-code-more">
        <a v-if='table2show' type="text" @click="showCodeChange('table2show')"><Icon type="ios-arrow-up" size="17"/></a>
        <a v-else type="text" @click="showCodeChange('table2show')"><Icon type="ios-arrow-down" size="17"/> 查看代码</a>
      </div>
    </Row>
  </Card>

  <Card style="margin-top: 25px">
    <Row>
      <AutoTable ref="table3" v-bind="table3"/>
      <Divider orientation="left">按钮操作</Divider>
      <div class="example-desc">
      <p>• <code>AutoTable</code>对<code>AutoButton</code>组件进行了二次封装，继承了<code>AutoButton</code>特性的同时也保持了简单易用。</p>
      <p>• <code>renderButtons</code>属性用于定义一个返回按钮数组的函数，<code>title</code>用于定义按钮标题，<code>type</code>用于定义按钮样式，全部按钮样式请参考<code>iview</code>官方 <a href="https://www.iviewui.com/components/button" target="_blank">Button组件</a> ，<code>click</code>用于定义按钮点击事件的回调函数，入参为当前行元数据。</p>
      <p>• 通过 <code>type: 'selection'</code> 启用多选，相关事件请参考<a href="https://www.iviewui.com/components/table" target="_blank"> Table组件</a>。</p>
      </div>
    </Row>
    <Row style="height: 22px"><AutoSplit type="horizontal" style="margin-top: 10px;"/></Row>
    <br>
    <Row>
      <CodeView v-if="table3show" path="/component/md/auto-table3.md" title="按钮操作" code-style="iview-code"/>
      <div class="example-code-more">
        <a v-if='table3show' type="text" @click="showCodeChange('table3show')"><Icon type="ios-arrow-up" size="17"/></a>
        <a v-else type="text" @click="showCodeChange('table3show')"><Icon type="ios-arrow-down" size="17"/> 查看代码</a>
      </div>
    </Row>
  </Card>

  <Card style="margin-top: 25px">
    <Row>
      <AutoTable ref="table4" v-bind="table4"/>
      <Divider orientation="left">自定义组件</Divider>
      <div class="example-desc">
      <p>• <code>renderComp</code>属性用于渲染自定义组件，<code>type</code>用于定义组件名称，可选值有<code>input</code>、<code>switch</code>、<code>select</code>。<code>change</code>用于绑定change事件，入参为当前行的元数据。当然我们还可以声明当前自定义组件的任意属性。</p>
      </div>
    </Row>
    <Row style="height: 22px"><AutoSplit type="horizontal" style="margin-top: 10px;"/></Row>
    <br>
    <Row>
      <CodeView v-if="table4show" path="/component/md/auto-table4.md" title="自定义组件" code-style="iview-code"/>
      <div class="example-code-more">
        <a v-if='table4show' type="text" @click="showCodeChange('table4show')"><Icon type="ios-arrow-up" size="17"/></a>
        <a v-else type="text" @click="showCodeChange('table4show')"><Icon type="ios-arrow-down" size="17"/> 查看代码</a>
      </div>
    </Row>
  </Card>
</div>
</template>
<script>
export default {
  data () {
    return {
      table1show: false,
      table2show: false,
      table3show: false,
      table4show: false,
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
      },
      table2: {
        uri: 'https://www.easy-mock.com/mock/5d63ba1624beb77315a972f0/kiwi-ui/user/list',
        // defaultWidth: 150,
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
      },
      table3: {
        uri: 'https://www.easy-mock.com/mock/5d63ba1624beb77315a972f0/kiwi-ui/user/list2',
        // defaultWidth: 150,
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
      },
      table4: {
        uri: 'https://www.easy-mock.com/mock/5d63ba1624beb77315a972f0/kiwi-ui/user/list2',
        defaultWidth: 150,
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
    showCodeChange (field) {
      this[field] = !this[field]
    },
    clickEdit (row = {}) {
      this.$Message.info(`编辑行: ${JSON.stringify(row)}`)
    },
    clickDelete (row = {}) {
      this.$Message.info(`删除行: ${JSON.stringify(row)}`)
    },
    async swithChange (row = {}) {
      console.log('clickSwitch', row)
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

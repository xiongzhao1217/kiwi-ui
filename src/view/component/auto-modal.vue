<template>
<div class="div-content">
  <h1>Modal弹出层</h1><br>
  <h2>概述</h2><br>
  <p style="font-size: 14px">对<code>iview</code>原生<code>Modal</code>组件进行二次封装，进行深度解耦，<code>modal</code>中的内容与<code>modal</code>组件完全剥离。</p><br>
  <h2>代码示例</h2><br>
  <Card>
    <Row>
      <Col span="12" style="margin-top: 12px">
        <Button type="info" @click="showEditMemberModal">显示对话框</Button>
        <Divider orientation="left">基本用法</Divider>
        <div class="example-desc">
        <p>• 使用全局方法<code>this.$showModal</code>弹出对话框，与<code>modal</code>组件完全解耦。</p>
        <p>• 方法第一个参数为对话框的具体内容，可以是一个<code>import</code>引入的任意<code>vue</code>文件。</p>
        <p>• 方法第二个参数可以为上面提到的<code>vue</code>文件传入数据，案例中传入的是用户数据。</p>
        <p>• 方法第三个参数可以指定对话框的配置属性，如标题<code>title</code>、对话框宽度<code>width</code>等，全部配置参考<a href="https://www.iviewui.com/components/modal" target="_blank"> modal组件</a>。</p>
        <p>• 方法返回值为上面提到的<code>vue</code>文件中<code>onOk</code>方法中调用<code>close</code>方法传入的内容，案例中传入的是修改后的用户信息。</p>
        </div>
      </Col>
      <AutoSplit/>
      <Col span="12" class="col-right" :style="{height: codeHeight}">
        <CodeView path="/component/md/auto-modal.md" title="基本用法" code-style="iview-code" style="margin-bottom: 24px"/>
        <div class="example-code-more">
          <a v-if='showCode' title="隐藏代码" type="text" @click="expandCodeChange(430)"><Icon type="ios-arrow-up" size="17"/></a>
          <a v-else type="text" title="查看代码" @click="expandCodeChange()"><Icon type="ios-arrow-down" size="17"/></a>
        </div>
      </Col>
    </Row>
    <div>
    </div>
  </Card>
</div>
</template>
<script>
// import MemberEditModal from './memberEditModal'
export default {
  data () {
    return {
      showCode: false,
      codeHeight: '430px'
    }
  },
  methods: {
    async showEditMemberModal () {
      let olduser = {userName: '熊小默', sex: 1, telephone: '13812345678'}
      let user = await this.$showModal(MemberEditModal, {data: olduser}, {title: '编辑角色', width: 30})
      user && this.$Message.info(`修改后的用户: ${JSON.stringify(user)}`)
    },
    expandCodeChange (height) {
      this.showCode = !this.showCode
      this.codeHeight = height && ('height:' + height + 'px') && height + 'px'
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

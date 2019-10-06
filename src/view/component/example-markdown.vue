<template>
<div class="div-content">
  <h1>Markdown渲染</h1><br>
  <h2>概述</h2><br>
  <p style="font-size: 14px">通过配置<code>vue-loader</code>，增加<code>markdown</code>渲染能力，支持路由直接渲染以及通过<code>Markdown</code>组件渲染<code>md</code>文件。</p><br>
  <h2>代码示例</h2><br>
  <Card>
    <Row>
      <Col span="12" style="margin-top: 12px">
        <Markdown path="/component/md/markdown-left1.md" :code-style="codeStyle"/>
        <Divider orientation="left">路由直接渲染</Divider>
        <div class="example-desc">
        <p>• 通过在路由中指定<code>md</code>文件路径，实现对md文件的自动渲染。</p>
        </div>
      </Col>
      <AutoSplit/>
      <Col span="12">
        <CodeView path="/component/md/markdown1.md" title="路由直接渲染" code-style="iview-code"/>
        <div style="margin-left: 30px">
          <p>// /view/md/markdown-example.md 文件</p>
          <p># kiwi</p>
          <p>## 简介</p>
          <p>kiwi中文译为几维鸟，是一种翅膀退化的鸟类，网上有一个关于kiwi为了实现遨游天空的梦想而坚韧不拔勇往直前的动画短片，项目取名kiwi-ui既是表达对kiwi的敬意也是对其精神的延续，希望在coding的路上不管遇到什么困难，都勇往直前，打造更好的快速开发组件。</p>
          <p>## 特性</p>
          <p>* 基于iview，所有组件特性被完美继承</p>
          <p>* 对常用组件进行封装，提供大量简单易用的api，大大提升开发效率</p>
          <p>* 统一权限控制、统一请求api封装、统一错误日志收集</p>
        </div>
      </Col>
    </Row>
    <div>
    </div>
  </Card>
  <Card style="margin-top: 25px">
    <Row>
      <Col span="12" style="margin-top: 12px">
        <Markdown path="/component/md/markdown-left1.md" :code-style="codeStyle"/>
        <Divider orientation="left">Markdown组件</Divider>
        <div class="example-desc">
        <p>• <code>path</code>属性用于指定<code>md</code>文件的路径，相对于<code>view</code>文件夹的路径。</p>
        <p>• <code>code-style</code>属性用于指定代码风格样式，支持三种风格<code>monokai-sublime</code>、<code>atom-one-dark</code>、默认<code>iview-code</code>。</p>
        </div>
      </Col>
      <AutoSplit/>
      <Col span="12">
        <CodeView path="/component/md/markdown2.md" title="Markdown组件" code-style="iview-code"/>
        <div style="margin-left: 30px">
          <p>// /view/md/markdown-example.md 文件</p>
          <p># kiwi</p>
          <p>## 简介</p>
          <p>kiwi中文译为几维鸟，是一种翅膀退化的鸟类，网上有一个关于kiwi为了实现遨游天空的梦想而坚韧不拔勇往直前的动画短片，项目取名kiwi-ui既是表达对kiwi的敬意也是对其精神的延续，希望在coding的路上不管遇到什么困难，都勇往直前，打造更好的快速开发组件。</p>
          <p>## 特性</p>
          <p>* 基于iview，所有组件特性被完美继承</p>
          <p>* 对常用组件进行封装，提供大量简单易用的api，大大提升开发效率</p>
          <p>* 统一权限控制、统一请求api封装、统一错误日志收集</p>
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
      site: 1,
      siteMapper: {1: '主站', 2: 'B中台', 3: '大客'},
      city: 2,
      cityMapper: [[1, '北京'], [2, '上海'], [3, '广州']]
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
</style>

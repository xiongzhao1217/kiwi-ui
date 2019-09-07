<template>
<div class="div-content">
  <h1>AutoRadio 单选框</h1><br>
  <h2>概述</h2><br>
  <p style="font-size: 14px">对iview原生Radio组件进行二次封装，支持绑定Array渲染组件，原生Radio组件的所有特性也被完美继承。</p><br>
  <h2>代码示例</h2><br>
  <Card>
    <Row>
      <Col span="12" style="margin-top: 12px">
        <AutoRadio v-model="site" :mapper="siteMapper" number/>
        <Divider orientation="left">基本用法</Divider>
        <div class="example-desc">
        <p>• 使用<code>v-model</code>进行数据双向绑定。</p>
        <p>• 使用<code>mapper</code>进行<code>Radio</code>列表数据绑定，如果<code>value</code>值为数字，需要指定<code>number属性</code>。</p>
        </div>
      </Col>
      <AutoSplit/>
      <Col span="12">
        <CodeView path="/component/md/auto-radio1.md" title="基本用法" code-style="iview-code"/>
      </Col>
    </Row>
    <div>
    </div>
  </Card>
  <Card style="margin-top: 25px">
    <Row>
      <Col span="12" style="margin-top: 12px">
        <AutoRadio v-model="os" :mapper="osMapper" size="large"/>
        <Divider orientation="left">展示图标</Divider>
        <div class="example-desc">
        <p>• <code>mapper</code>为对象数组类型时，通过icon属性设置单选框图标。</p>
        <p>• 通过<code>size</code>属性设置大小，可选值为<code>large</code>、<code>small</code>、<code>default</code>或者不写。</p>
        </div>
      </Col>
      <AutoSplit/>
      <Col span="12">
        <CodeView path="/component/md/auto-radio2.md" title="展示图标" code-style="iview-code"/>
      </Col>
    </Row>
    <div>
    </div>
  </Card>
  <Card style="margin-top: 25px">
    <Row>
      <Col span="12" style="margin-top: 12px">
        <AutoRadio v-model="os" :mapper="osMapper2" type="button"/>
        <Divider orientation="left">按钮样式</Divider>
        <div class="example-desc">
        <p>• 通过<code>type</code>属性设置单选框样式，目前仅支持<code>button</code>样式。</p>
        <p>• 通过设置对象属性<code>disabled</code>设置某个单选按钮禁用。</p>
        </div>
      </Col>
      <AutoSplit/>
      <Col span="12">
        <CodeView path="/component/md/auto-radio3.md" title="按钮样式" code-style="iview-code"/>
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
      site: 3,
      siteMapper: {1: '商品系统', 2: '订单系统', 3: '库存系统'},
      os: 1,
      osMapper: [
        {label: 1, name: 'Mac', icon: 'logo-apple'},
        {label: 2, name: 'Windows', icon: 'logo-windows'},
        {label: 3, name: 'Android', icon: 'logo-android'}
      ],
      osMapper2: [
        {label: 1, name: 'Mac', icon: 'logo-apple'},
        {label: 2, name: 'Windows', icon: 'logo-windows', disabled: true},
        {label: 3, name: 'Android', icon: 'logo-android'}
      ]
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

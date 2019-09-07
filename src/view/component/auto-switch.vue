<template>
<div class="div-content">
  <h1>AutoSwitch 开关</h1><br>
  <h2>概述</h2><br>
  <p style="font-size: 14px">对iview原生Button组件进行二次封装，支持敏感操作二次确认、防止重复提交和表单自动校验，原生Button组件的所有特性也被完美继承。</p><br>
  <h2>代码示例</h2><br>
  <Card>
    <Row>
      <Col span="12" style="margin-top: 12px">
        <AutoSwitch v-model="switch1" :load="load"/>
        <Divider orientation="left">自动loading</Divider>
        <div class="example-desc">
        <p>• 通过<code>load</code>属性绑定异步函数，如果函数有异步操作，组件会自动在加载loading效果，异步执行完成后，自动关闭loading效果。</p>
        </div>
      </Col>
      <AutoSplit/>
      <Col span="12">
        <CodeView path="/component/md/auto-switch1.md" title="自动loading" code-style="iview-code"/>
      </Col>
    </Row>
    <div>
    </div>
  </Card>
  <Card style="margin-top: 25px">
    <Row>
      <Col span="12" style="margin-top: 12px">
        <AutoSwitch v-model="switch2"/>
        <AutoSwitch v-model="switch3" text="预定|关闭" size="large" style="margin-left: 20px"/>
        <AutoSwitch v-model="switch4" text="开启|关闭" :true-value="1" :false-value="0" size="large" style="margin-left: 20px"/>
        <Divider orientation="left">开关文字</Divider>
        <div class="example-desc">
        <p>• 通过<code>text</code>属性设置开关文字，使用<code>|</code>隔开， 如：<code>开启|关闭</code>。</p>
        <p>• 通过<code>size</code>设置开关大小，可选值为<code>large</code>、<code>small</code>、<code>default</code>或者不写。</p>
        <p>• 通过<code>true-value</code>属性设置开关开启时的值，使用<code>false-value</code>属性设置开关关闭时的值，默认值为<code>true</code>和<code>false</code>。</p>
        </div>
      </Col>
      <AutoSplit/>
      <Col span="12">
        <CodeView path="/component/md/auto-switch2.md" title="自动loading" code-style="iview-code"/>
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
      switch1: false,
      switch2: false,
      switch3: true,
      switch4: 1
    }
  },
  methods: {
    async load () {
      // 模拟异步
      await new Promise((resolve, reject) =>
        setTimeout(() => {
          resolve()
        }, 2000)
      )
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

<template>
<div class="div-content">
  <h1>AutoButton 按钮</h1><br>
  <h2>概述</h2><br>
  <p style="font-size: 14px">对iview原生Button组件进行二次封装，支持敏感操作二次确认、防止重复提交和表单自动校验，原生Button组件的所有特性也被完美继承。</p><br>
  <h2>代码示例</h2><br>
  <Card>
    <Row>
      <Col span="12" style="margin-top: 12px">
        <AutoButton>default</AutoButton>
        <AutoButton type="primary">primary</AutoButton>
        <AutoButton type="info">info</AutoButton>
        <AutoButton type="success">success</AutoButton>
        <AutoButton type="warning">warning</AutoButton>
        <AutoButton type="error" placement="right">error</AutoButton>
        <Divider orientation="left">敏感操作二次确认</Divider>
        <div class="example-desc">
        <p>• 通过设置<code>type</code>为<code>primary</code>、<code>dashed</code>、<code>text</code>、<code>info</code>、<code>success</code>、<code>warning</code>、<code>error</code>创建不同样式的按钮。</p>
        <p>• 其中<code>warning</code>和<code>error</code>类型会自动弹出二次确认框。</p>
        <p>• 通过设置<code>placement</code>为<code>top</code>、<code>top-start</code>、<code>top-end</code>、<code>bottom</code>、<code>bottom-start</code>、<code>bottom-end</code>、<code>left</code>、<code>left-start</code>、<code>left-end</code>、<code>right</code>、<code>right-start</code>、<code>right-end</code>指定弹出框的位置，默认显示在左侧。</p>
        </div>
      </Col>
      <AutoSplit/>
      <Col span="12">
        <CodeView path="/component/md/auto-button1.md" title="敏感操作二次确认" code-style="iview-code"/>
      </Col>
    </Row>
    <div>
    </div>
  </Card>
  <Card style="margin-top: 25px">
    <Row>
      <Col span="12" style="margin-top: 12px">
        <AutoButton type="primary" :load="submit">测试防重</AutoButton>
        <Divider orientation="left">防止重复提交</Divider>
        <div class="example-desc">
        <p>• 通过<code>load</code>属性绑定异步函数，赋予按钮自动防重功能。</p>
        <p>• 点击按钮后，组件会判断<code>load</code>绑定的函数是否返回一个<code>Promise</code>对象，如果返回，会在调用函数前加载loading效果，当函数执行完成后，自动关闭loading效果。</p>
        <p>• 非常高兴的一点是，node相关异步包基本都提供了对Promise的支持，如axios接口请求包、文件操作包、上传包、mysql、redis等。</p>
        </div>
      </Col>
      <AutoSplit/>
      <Col span="12">
        <CodeView path="/component/md/auto-button2.md" title="防止重复提交" code-style="iview-code"/>
      </Col>
    </Row>
    <div>
    </div>
  </Card>
  <Card style="margin-top: 25px">
    <Row>
      <Col span="12" style="margin-top: 12px">
        <Form :model="form" :rules="rules" :label-width="90">
          <FormItem label="商品编码" prop="skuId">
            <Input v-model="form.skuId" placeholder="请输入商品编码" number style="width: 300px"/>
          </FormItem>
          <AutoButton type="primary" :load="load" valid style="margin-left: 90px">查询</AutoButton>
        </Form>
        <Divider orientation="left">表单自动校验</Divider>
        <div class="example-desc">
        <p>• 通过<code>valid</code>属性，赋予按钮自动校验表单的能力。</p>
        <p>• 点击按钮后，组件会先调用<code>async-validation</code>包提供的<code>validate</code>方法对表单进行验证，如果验证通过则调用load绑定的方法，否则不调用。</p>
        <p>• 小伙伴请注意，<code>AutoButton</code>按钮必须声明在<code>Form</code>组件内部，否则不生效。</p>
        </div>
      </Col>
      <AutoSplit/>
      <Col span="12">
        <CodeView path="/component/md/auto-button3.md" title="表单自动校验" code-style="iview-code"/>
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
      form: {},
      rules: {
        skuId: [
          {required: true, type: 'number', message: '请输入商品编码', trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    async submit () {
      // 模拟异步
      await new Promise((resolve, reject) =>
        setTimeout(() => {
          resolve()
        }, 3000)
      )
    },
    async load () {
      this.$Message.info('表单校验通过，开始执行load方法')
      // 模拟异步
      await new Promise((resolve, reject) =>
        setTimeout(() => {
          resolve()
        }, 3000)
      )
      this.$Message.info('完成商品信息查询')
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

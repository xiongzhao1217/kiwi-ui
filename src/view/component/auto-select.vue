<template>
<div class="div-content">
  <h1>AutoSelect选择器</h1><br>
  <h2>概述</h2><br>
  <p style="font-size: 14px">对iview原生Select组件进行二次封装，支持绑定Array渲染组件，原生Select组件的所有特性也被完美继承。</p><br>
  <h2>代码示例</h2><br>
  <Card>
    <Row>
      <Col span="12" style="margin-top: 12px">
        <AutoSelect v-model="site" :mapper="siteMapper" number style="width:200px"/>
        <AutoSelect v-model="city" :mapper="cityMapper" number style="width:200px; margin-left:20px"/>
        <Divider orientation="left">数据绑定</Divider>
        <div class="example-desc">
        <p>• 使用<code>v-model</code>进行数据双向绑定。</p>
        <p>• 使用<code>mapper</code>进行<code>option</code>列表数据绑定，接受对象或二维数组类型。</p>
        <p>• 小伙伴请注意，由于遍历对象的key是无序的，所以如果希望下拉选项顺序固定，需要使用二维数组进行绑定。</p>
        </div>
      </Col>
      <AutoSplit/>
      <Col span="12">
        <CodeView path="/component/md/auto-select.md" title="基本用法" code-style="iview-code"/>
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
      siteMapper: {1: '商品系统', 2: '订单系统', 3: '库存系统'},
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

<template>
  <Row>
    <Col>
      <Card dis-hover>
        <p slot="title">
          <Icon type="md-git-network"></Icon>
          RPC查询诊断
        </p>
        <Row>
          <Col span="10">
            <Form :model="form" :rules="rules" :label-width="90">
              <FormItem label="RPC接口" prop="rpcType">
                <RadioGroup v-model="form.rpcType">
                    <Radio label="1">B中台价格</Radio>
                    <Radio label="2">B2bExtByType</Radio>
                    <Radio label="3">queryB2bSkuExt</Radio>
                    <Radio label="4">分页查询sku</Radio>
                    <Radio label="5">商品池id和组id</Radio>
                    <Radio label="6">查询ClientSkuIds</Radio>
                    <Radio label="7">主站商品基本信息</Radio>
                    <Radio label="8">主站扩展信息</Radio>
                    <Radio label="9">主站商品新属性</Radio>
                    <Radio label="10">评论信息</Radio>
                    <Radio label="11">库存信息</Radio>
                </RadioGroup>
              </FormItem>
              <FormItem label="商品编码" prop="skuId">
                <Input v-model="form.skuId" placeholder="请输入商品编码" number></Input>
              </FormItem>
              <FormItem>
                <AutoButton type="primary" :load="onOk" valid>查询</AutoButton>
              </FormItem>
            </Form>
          </Col>
          <AutoSplit/>
          <Col offset="3" span="10">
            <tree-view :data="rpcResult" :options="{maxDepth: 5}"></tree-view>
          </Col>
          <Col span="1">
            <Tooltip content="复制数据" placement="top">
                  <Icon v-if="showCopy" type="md-copy" style="font-size: 20px;color: #b2b2b2"
                  v-clipboard:copy="JSON.stringify(rpcResult)"
                  v-clipboard:success="copyData"
                  />
                  <Icon v-else type="md-checkmark" style="font-size: 20px; color: rgb(92, 184, 92)"/>
            </Tooltip>
          </Col>
        </Row>
        <div>
        </div>
      </Card>
    </Col>
  </Row>
</template>

<script>
import {messageTypes, entityTypes} from './index'
import * as util from '@/libs/util'
import MsgTips from './msgTips'
export default {
  components: {
    MsgTips
  },
  data () {
    return {
      form: {rpcType: '1'},
      showCopy: true,
      rpcResult: {},
      rules: {
        skuId: [
          {required: true, type: 'number', message: '请输入商品编码', trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    async onOk () {
      let r = await util.requestJson('/api/ka/search/component/rpcQuery', {params: this.form})
      this.rpcResult = r.data
    },
    copyData () {
      this.showCopy = false
      this.$Message.info('复制完成')
      setTimeout(() => this.showCopy = true, 2000)
    }
  }
}
</script>

<style>
.intro-con{
  min-height: 140px;
}
.draggable-btn{
  margin-top: 20px;
}
.code-con{
  width: 400px;
  background: #F9F9F9;
  padding-top: 10px;
}
.tree-view-item-value-null{
  color: #f1592a;
  font-weight: bold
}
.tree-view-item-value-boolean{
  color: #eaa7f5;
  font-weight: bold
}
.tree-view-item-value-string{
  color: #6f59ff;
  font-weight: bold
}
.tree-view-item-value-number{
  color: #299999;
  font-weight: bold
}
.tree-view-item-key {
  color: #92278f;
  font-weight: bold
}
</style>

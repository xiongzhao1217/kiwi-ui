<template>
    <Row>
      <Col span="15">
        <Card>
            <Tabs v-model="form.entityType" @on-click="tabsChange">
              <TabPane label="sku维度" :name="entityTypes.skuIds">
                <Form ref="skuForm" :model="form" :rules="rules" :label-width="90">
                  <Row>
                    <Col span="17">
                      <FormItem label="消息类型" prop="messageType">
                        <AutoSelect v-model="form.messageType" :mapper="messageTypes" number/>
                      </FormItem>
                    </Col>
                    <Col span="2">
                      <FormItem label="JSON格式">
                        <AutoSwitch text='是|否' :value='isJson && 1 || 0' @on-change='changeJsonType'/>
                      </FormItem>
                    </Col>
                    <Col span="1">
                      <FormItem><MsgTips/></FormItem>
                    </Col>
                  </Row>
                  <div v-if="!isJson">
                    <FormItem label="商品编码" prop="skuIds">
                        <Input v-model="form.skuIds" placeholder="请输入商品编码, 多个编码请用英文逗号隔开" style="width: 435px"></Input>
                    </FormItem>
                  </div>
                  <FormItem v-if="isJson" label="JSON消息" prop="messageText">
                      <Input v-model="form.messageText" type="textarea" :autosize="{minRows: 10,maxRows: 15}"
                      @on-change="msgTextChange"
                      placeholder="请输入JSON格式消息..."></Input>
                  </FormItem>
                  <FormItem>
                      <AutoButton type="primary" :load="onOk" valid>发送</AutoButton>
                      <Button style="margin-left: 8px" @click="reset">重置</Button>
                  </FormItem>
              </Form>
              </TabPane>
              <TabPane label="合同维度" :name="entityTypes.contractNO">
                <Form ref="contractForm" :model="form" :rules="rules" :label-width="90">
                  <Row>
                    <Col span="17">
                      <FormItem label="消息类型" prop="messageType">
                        <AutoSelect v-model="form.messageType" :mapper="messageTypes" number/>
                      </FormItem>
                    </Col>
                    <Col span="2">
                      <FormItem label="JSON格式">
                        <AutoSwitch text='是|否' :value='isJson && 1 || 0' @on-change='changeJsonType'/>
                      </FormItem>
                    </Col>
                    <Col span="1">
                      <FormItem><MsgTips/></FormItem>
                    </Col>
                  </Row>
                  <div v-if="!isJson">
                    <FormItem label="合同号" prop="contractNO">
                        <Input v-model="form.contractNO" placeholder="请输入合同号" style="width: 435px" clearable></Input>
                    </FormItem>
                  </div>
                  <FormItem v-if="isJson" label="JSON消息" prop="messageText">
                      <Input v-model="form.messageText" type="textarea" :autosize="{minRows: 10,maxRows: 15}"
                      @on-change="msgTextChange"
                      placeholder="请输入JSON格式消息..."></Input>
                  </FormItem>
                  <FormItem>
                      <AutoButton type="primary" :load="onOk" valid>发送</AutoButton>
                      <Button style="margin-left: 8px" @click="reset">重置</Button>
                  </FormItem>
                </Form>
              </TabPane>
              <TabPane label="商品池维度" :name="entityTypes.skuPool">
                <Form ref="poolForm" :model="form" :rules="rules" :label-width="90">
                  <Row>
                    <Col span="17">
                      <FormItem label="消息类型" prop="messageType">
                        <AutoSelect v-model="form.messageType" :mapper="messageTypes" number/>
                      </FormItem>
                    </Col>
                    <Col span="2">
                      <FormItem label="JSON格式">
                        <AutoSwitch text='是|否' :value='isJson && 1 || 0' @on-change='changeJsonType'/>
                      </FormItem>
                    </Col>
                    <Col span="1">
                      <FormItem><MsgTips/></FormItem>
                    </Col>
                  </Row>
                  <div v-if="!isJson">
                    <FormItem label="商品池ID" prop="skuPool">
                      <InputNumber v-model="form.skuPool" placeholder="请输入商品池id"
                      :max="999999999999" :min="1"
                      style="width: 435px"
                      ></InputNumber>
                    </FormItem>
                  </div>
                  <FormItem v-if="isJson" label="JSON消息" prop="messageText">
                      <Input v-model="form.messageText" type="textarea" :autosize="{minRows: 10,maxRows: 15}"
                      @on-change="msgTextChange"
                      placeholder="请输入JSON格式消息..."></Input>
                  </FormItem>
                  <FormItem>
                      <AutoButton type="primary" :load="onOk" valid>发送</AutoButton>
                      <Button style="margin-left: 8px" @click="reset">重置</Button>
                  </FormItem>
                </Form>
              </TabPane>
              <TabPane label="商品组维度" name="name4">标签四的内容</TabPane>
              <TabPane label="全量同步" :name="entityTypes.syncAll">
                <Form ref="syncForm" :model="syncForm" :rules="syncRules" :label-width="120">
                  <Row>
                    <Col span="8">
                      <FormItem label="上次中断SKU：">
                        {{syncForm.lastSku}}
                      </FormItem>
                    </Col>
                    <Col span="8">
                      <FormItem label="中断前已同步数量：">
                        {{syncForm.syncNums}}
                      </FormItem>
                    </Col>
                    <Col span="8">
                      <FormItem label="是否接上一次同步" prop="isGoOn">
                        <AutoSwitch text='是|否' :trueValue='true' :falseValue='false' v-model="syncForm.isGoOn"/>
                      </FormItem>
                    </Col>
                  </Row>
                  <Row>
                    <Col span="23">
                      <FormItem label="选择消息(多选)" prop="syncMsgTypes">
                        <AutoSelect v-model="syncForm.syncMsgTypes" :mapper="messageTypes" multiple number/>
                      </FormItem>
                    </Col>
                    <Col span="1">
                      <Poptip trigger="hover" transfer placement="right-start" title="全量同步" style="margin-top: 5px;margin-left: 5px">
                        <Icon type="md-help-circle" size="22" color="#2d8cf0"/>
                        <div slot="content">
                          可以选择多个消息类型<br>
                          系统会把商品池中全量的商品按照选择的消息推送到搜索中台
                        </div>
                      </Poptip>
                    </Col>
                  </Row>
                  <div v-if="isProgress">
                    <FormItem label="任务进度">
                        <Progress :percent="percent" status="active"/>
                        <div v-html="hunmanProgressDesc"/>
                    </FormItem>
                  </div>
                  <FormItem>
                      <AutoButton type="warning" :load="syncAll" valid placement="right">全量同步</AutoButton>
                  </FormItem>
                </Form>
              </TabPane>
              <TabPane label="刷新商品类目" name="name5">
                <Alert show-icon>
                  全量刷新商品类目
                  <template slot="desc"> 系统全量缓存了商品类目信息，每隔12小时自动刷新一次，同时提供了手动刷新的功能，点击【全量刷新】按钮手动刷新。 </template>
                </Alert>
                <AutoButton type="warning" :load="refreshSkuCategory" placement="right">全量刷新</AutoButton>
              </TabPane>
          </Tabs>
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
      entityTypes: entityTypes,
      messageTypes: messageTypes,
      isJson: false,
      isProgress: false,
      percent: 0,
      progressDesc: '',
      form: {
        entityType: entityTypes.skuIds,
        messageType: 1,
        skuPool: null
      },
      syncForm: {
        syncMsgTypes: [1, 5, 6],
        isGoOn: false
      },
      rules: {
        skuIds: [
          {required: true, message: '请输入商品编码', trigger: 'blur'},
          {pattern: /^(\d+[,])*(\d+)$/, message: '商品编码必须为数字,多个必须使用英文逗号隔开', trigger: 'blur'}
        ],
        contractNO: [
          {required: true, message: '请输入合同号', trigger: 'blur'}
        ],
        clientSkuId: [
          {required: true, message: '请输入clientSkuId', trigger: 'blur'}
        ],
        status: [
          {required: true, type: 'number', message: '请选择状态', trigger: 'blur'}
        ],
        messageText: [
          {required: true, message: '请输入json格式消息', trigger: 'blur'}
        ]
      },
      syncRules: {
        syncMsgTypes: [
          {required: true, type: 'array', message: '请选择需要全量同步的消息类型', trigger: 'blur'}
        ]
      }
    }
  },
  computed: {
    hunmanProgressDesc: function () {
      let reg = /(\d+)/g
      return this.progressDesc && this.progressDesc.replace(reg, '<span style="color: #57a3f3">$1</span>')
    }
  },
  methods: {
    changeJsonType (isJson = false) {
      this.isJson = isJson
      this.messageTypes = isJson && {0: '全部'} || messageTypes
      this.$set(this.form, 'messageType', !isJson && 1 || 0)
    },
    msgTextChange () {
      if (this.form.messageText) {
        this.$set(this.form, 'messageText', JSON.stringify(JSON.parse(this.form.messageText), null, 4))
      }
    },
    async onOk () {
      await util.requestJson('/api/ka/search/component/repair/common', {data: {
        entityType: this.form.entityType,
        entityId: this.form[Object.keys(entityTypes).find(key => entityTypes[key] === this.form.entityType)],
        ...(this.isJson && JSON.parse(this.form.messageText) || this.form)
      }})
      this.$Message.info('消息发送成功')
    },
    async syncAll () {
      await util.requestJson('/api/ka/search/component/repair/syncData', {data: this.syncForm})
      this.$Message.info('全量商品同步任务创建成功，请耐心等待任务执行完成')
      this.isProgress = true
      setInterval(this.syncProgress, 1000)
    },
    async syncProgress () {
      let r = await util.requestJson('/api/ka/search/component/repair/syncProgress')
      if (r.data) {
        this.percent = r.data.split('%')[0]
        this.progressDesc = r.data.split('%')[1]
        r.data.includes('syncAllTaskClose=true') && this.tabsChange(entityTypes.sync_all)
      }
    },
    async tabsChange (name) {
      if (entityTypes.sync_all !== name) return
      let r = await util.requestJson('/api/ka/search/component/repair/lastFailSku')
      this.$set(this.syncForm, 'lastSku', r.data[0])
      this.$set(this.syncForm, 'syncNums', r.data[1])
    },
    reset () {
      this.form = { messageType: 1, entityType: this.form.entityType }
      this.isJson = false
    },
    async refreshSkuCategory () {
      await util.requestJson('/api/ka/search/component/repair/reFreshAllCategory')
      this.$Message.info('全量同步成功')
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
</style>

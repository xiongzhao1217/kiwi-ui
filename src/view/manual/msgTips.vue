<template>
    <Poptip trigger="hover" transfer placement="right-start" title="消息体格式" width="400">
      <Icon type="md-help-circle" size="22" color="#2d8cf0"/>
      <div slot="content" style="height: 300px">
      <pre>
    {{JSON.stringify(JSON.parse('{"entityType":"1","entityId":"480068","messageType":1}'), null, 2)}}
    <br>
    <strong>messageType: </strong>消息类型
    <strong>枚举: </strong>{{messageTypes}}
    <br>
    <strong>entityType: </strong>实体类型
    <strong>枚举: </strong>{{entityTypes}}
    <br>
    <strong>entityId: </strong> 实体id，根据entityType取商品id、合同id等;
               如果是sku类型，可用逗号拼接多个商品编码
    </pre>
    </div>
    </Poptip>
</template>

<script>
import {messageTypes, entityTypes} from './index'
export default {
  data () {
    return {
      entityTypes: JSON.stringify(entityTypes, null, 2),
      messageTypes: JSON.stringify(this.transferKV(messageTypes), null, 2)
    }
  },
  methods: {
    transferKV (o = {}) {
      let r = {}
      Object.keys(o).forEach(k => r[o[k]] = k)
      return r
    }
  }
}
</script>

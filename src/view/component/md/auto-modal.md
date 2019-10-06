```javascript
<template>
  <Button type="info" @click="showEditMemberModal">显示对话框</Button>
</template>
<script>
import MemberEditModal from './memberEditModal'
export default {
  methods: {
    async showEditMemberModal () {
      let olduser = {userName: '熊小默', sex: 1, telephone: '13812345678'}
      let user = await this.$showModal(MemberEditModal, {data: olduser}, {title: '编辑用户', width: 30})
      user && this.$Message.info(`修改后的用户: ${JSON.stringify(user)}`)
    }
  }
}
</script>

// memberEditModal.vue文件
<template>
  <div>
    <Form ref="form" :model="form" :label-width="80">
      <FormItem label="用户名" prop="userName">
        {{form.userName}}
      </FormItem>
      <FormItem label="性别" prop="sex">
        <AutoSelect :mapper="{1: '男', 2: '女'}" v-model="form.sex" number/>
      </FormItem>
      <FormItem label="手机号" prop="telephone">
        <Input v-model="form.telephone" placeholder="请输入手机号"></Input>
      </FormItem>
    </Form>
  </div>
</template>
<script>
export default {
  props: ['data'],
  data () {
    return {
      // 复制一份现有数据进行编辑
      form: JSON.parse(JSON.stringify(this.data || {})),
    }
  },
  methods: {
    async onOk (close) {
      // 异步保存数据
      // let user = await util.requestJson('/api/userEdit', { data: this.form })
      // close 关闭当前窗口并把任意数据返回给调用者(父组件那)
      close(this.form)
    }
  }
}
</script>
```

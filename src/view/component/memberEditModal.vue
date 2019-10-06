<template>
  <div>
    <Form ref="form" :model="form" :rules="rules" :label-width="80">
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
      rules: {
        telephone: [
          { required: true, message: '请输入手机号', trigger: 'blur' }
        ]
      }
    }
  },
  mounted () {
    $('.ivu-modal-body').attr('style', 'background-color: white')
  },
  methods: {
    async onOk (close) {
      // 调用后端保存数据
      // let user = await util.requestJson('/api/userEdit', { data: this.form })
      // close 关闭当前窗口并把任意数据返回给调用者(父组件那)
      close(this.form)
    }
  }
}
</script>

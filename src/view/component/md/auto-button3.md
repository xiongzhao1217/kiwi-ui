```xml
<template>
  <Form :model="form" :rules="rules" :label-width="90">
    <FormItem label="商品编码" prop="skuId">
      <Input v-model="form.skuId" placeholder="请输入商品编码" number/>
    </FormItem>
    <AutoButton type="primary" :load="load" valid>查询</AutoButton>
  </Form>
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
      async load () {
        this.$Message.info('表单校验通过，开始执行load方法')
        // 模拟向后端发起请求
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
```

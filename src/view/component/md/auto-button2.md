```xml
<template>
  <AutoButton type="primary" :load="submit">测试防重</AutoButton>
</template>
<script>
  export default {
    methods: {
      async submit () {
        // 模拟异步
        await new Promise((resolve, reject) =>
          setTimeout(() => {
            resolve()
          }, 3000)
        )
      }
    }
}
</script>
```

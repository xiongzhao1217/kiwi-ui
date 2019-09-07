```xml
<template>
  <AutoSwitch v-model="switch1" :load="load"/>
</template>
<script>
  export default {
    data () {
      return {
        switch1: false
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
```

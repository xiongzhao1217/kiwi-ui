```xml
<template>
  <AutoRadio v-model="site" :mapper="siteMapper" number/>
</template>
<script>
    export default {
        data () {
            return {
              site: 3,
              siteMapper: {1: '商品系统', 2: '订单系统', 3: '库存系统'}
            }
        }
    }
</script>
```

```xml
<template>
  <AutoSelect v-model="site" :mapper="siteMapper" number style="width:200px"/>
  <AutoSelect v-model="city" :mapper="cityMapper" number style="width:200px; margin-left:20px"/>
</template>
<script>
    export default {
        data () {
            return {
              site: 1,
              siteMapper: {1: '商品系统', 2: '订单系统', 3: '库存系统'},
              city: 2,
              cityMapper: [[1, '北京'], [2, '上海'], [3, '广州']],
            }
        }
    }
</script>
```

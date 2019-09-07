```xml
<template>
  <AutoRadio v-model="site" :mapper="siteMapper" number/>
</template>
<script>
    export default {
        data () {
            return {
              site: 3,
              siteMapper: {1: '主站', 2: 'B中台', 3: '大客'}
            }
        }
    }
</script>
```

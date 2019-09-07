```xml
<template>
  <AutoSwitch v-model="switch2"/>
        <AutoSwitch v-model="switch3" text="预定|关闭" size="large"/>
        <AutoSwitch v-model="switch4" text="开启|关闭" size="large" :true-value="1" :false-value="0"/>
</template>
<script>
  export default {
    data () {
      return {
        switch2: false,
        switch3: true,
        switch4: 1
      }
    }
  }
</script>
```

```xml
<template>
  <AutoRadio v-model="os" :mapper="osMapper" type="button"/>
</template>
<script>
    export default {
        data () {
            return {
              os: 1,
              osMapper: [
                {label: 1, name: 'Mac', icon: 'logo-apple'},
                {label: 2, name: 'Windows', icon: 'logo-windows', disabled: true},
                {label: 3, name: 'Android', icon: 'logo-android'}
              ]
            }
        }
    }
</script>
```

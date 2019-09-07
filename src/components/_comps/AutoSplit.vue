<template>
  <div :class="type === 'horizontal' && 'split-horizontal' || 'split'"
  :style="'left:' + (type !== 'horizontal' && (left || '50%') || '0')"></div>
</template>
<script>
export default {
  props: {
    left: String,
    type: String
  }
}
</script>
<style lang="less">
.split {
  display: block;
  position: absolute;
  top: -16px;
  bottom: -16px;
  border: 1px dashed #d4d7e0;
}
// 水平分割线样式
.split-horizontal {
  display: block;
  width: 100%;
  float: left;
  position: relative;
  right: -32px;
  top: 0;
  bottom: 0;
  border: 1px dashed #d4d7e0;
  box-sizing: content-box;
}
</style>

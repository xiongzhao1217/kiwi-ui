## 接口请求概述
为了更加方便的调用接口，kiwi-ui对axios进行了封装，使接口调用更加简单方便，同时拥有一些非常实用的特性，如```统一错误提示```、```友好异常日志```。

## 接口报文约定
```code```为接口返回码，只有```0```表示成功，```message```为描述信息，```data```为具体数据。
```json
// 成功
{
  code: 0,
  message: '成功',
  data: {
    erp: 'admin',
    name: '超级管理员'
  }
}
// 失败
{
  code: 404,
  message: '接口地址不存在',
  data: null
}
```
## 如何使用

引入util工具

```javascript
import * as util from '@/libs/util'
```

发送get请求
```javascript
// 发送get请求
util.requestJson('/api/config').then(r => console.log('接口返回:', r))
// requestJson方法本质返回的是一个Promise对象，因此推荐使用async、await处理回调，代码更加清晰
let r = await util.requestJson('/api/config')
console.log('接口返回:', r)
```

发送get请求，带参数

```javascript
let r = await util.requestJson('/api/user', {params: {erp: 'xiongzhao1'}})
console.log('接口返回:', r)
```

发送post请求

```javascript
let r = await util.requestJson('/api/user', {data: {erp: 'xiongzhao1'}})
console.log('接口返回:', r)
```

```requestJson```发送请求时的请求头是: ```application/json```, 如果希望按照表单方式提交，需要使用```requestForm```方法

```javascript
let r = await util.requestForm('/api/user', {data: {erp: 'xiongzhao1'}})
console.log('接口返回:', r)
```

## 统一错误提示
* 发送Date类型的字段不需要手动转'yyyy-MM-dd HH:mm:ss'格式，接口请求工具会在发送请求前自动转格式。
* 如果后端返回的```code```码不为```0```，接口请求工具包会自动调用```iview```的```Message```组件，对后端返回的```message```内容进行统一错误提示，这一切对使用者透明。
* 业务代码中不需要再判断```code```是否为```0```，也不需要手动进行错误提示。
* 特别的，当我们需要在接口调用正确的前提下，去执行后续的一些操作时，并不需要在业务代码中判断```code```是否为```0```，直接写逻辑即可，这是因为在接口请求方法内部自动进行了判断，如果```code```不为```0```，会抛出异常，业务会被中断。

```javascript
let r = await util.requestForm('/api/user', {data: {erp: 'xiongzhao1'}})
// 传统做法(不推荐这么写)
if (r.code === 0) {
  this.user = r.data
}
// 不需要判断code码，如果code不为0，程序会被异常中断，下面的语句不会被执行
this.user = r.data
```

* 当然，如果你需要对异常业务进行处理，可以通过Promise或catch来实现


```javascript
// Promise异常处理
util.requestForm('/api/user', {data: {erp: 'xiongzhao1'}})
  .then(r => this.user = r.data, err => this.handleErr(err))
// catch异常处理
util.requestForm('/api/user', {data: {erp: 'xiongzhao1'}})
  .then(r => this.user = r.data)
  .catch(err => this.handleErr(err))
```

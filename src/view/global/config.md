## 环境配置
进入```/config/index.js```文件，```backend```配置后端api接口域名，```loginUrl```配置单点登录域名，系统已经集成了```基于cookies```的单点登录系统，直接配置域名地址即可，配置分```development```(开发)、```test```(测试)、```production```(生产)三个维度，需要分别配置，使用```npm run build```编译部署生产环境时，默认使用```production```(生产)配置。

```javascript
let env = process.env.NODE_ENV || 'development'
// 环境变量配置
let config = {
  env: env,
  backend: {
    development: 'http://localhost:8088',
    test: 'http://test-api.kiwiui.com',
    production: 'http://api.kiwiui.com'
  }[env],
  loginUrl: {
    development: `http://test-sso.kiwiui.com`,
    test: 'http://test-sso.kiwiui.com',
    production: `http://sso.kiwiui.com`
  }[env]
}
console.log(`env is: ${env}, config is: `, config)
module.exports = config
```

## 权限配置
进入```/src/config/index.js```文件, 配置```useBackendMenu```属性值，如果配置```false```，路由中配置的所有菜单都会显示，开发环境建议这样配置，方便开发调试。

~~~ javascript
useBackendMenu: false
~~~

如果```useBackendMenu```配置为```true```，表示需要调用后台接口获取菜单权限，需要在```/src/api/data.js```中配置权限调用地址。

~~~javascript
export const getUserInfo = () => {
  return util.request(`/api/user`)
}
~~~

注意，这里对后端接口返回的数据格式有约定，需要遵循以下格式

~~~json
{
  code: 0,
  message: '成功',
  data: {
          erp: 'bjadmin',
          userName: 'Admin',
          avatarUrl: 'http://oss.aliyun.com/kiwi-ui/xiongzhao.jpg',  // 如果字段为空，系统取默认头像
          menuList: [
            {
              id: 1, // 菜单id
              pid: 0, // 父菜单id，用于渲染父子菜单，如果父id不存在，可以传0或不传
              name: '用户管理', // 菜单名称，如果不传会匹配路由中对应的路由名称
              url: '/user', // 菜单url
              menuIcon: 'md-hammer' // 菜单图标，不传不渲染
            },{
              id: 2,
              pid: 1,
              name: '用户列表',
              url: '/user/list',
              menuIcon: 'ios-mail-outline'
            }
          ]
        }
}
~~~

我们知道，在java后端进行消息体格式转换是比较麻烦的，而前端很适合做这件事，所以如果后端定义的格式与这里不同，可以这样进行消息格式转换

~~~javascript
export const getUserInfo = () => {
  return util.request(`/api/user`).then(r => ({
    data: {
      erp: r.data.pin,
      userName: r.data.name,
      avatarUrl: r.data.headUrl,
      menuList: r.data.accessList.map(access => ({
        id: access.id,
        pid: access.parentId,
        name: access.title,
        url: access.path,
        menuIcon: access.img
      }))
    }
  }))
}
~~~

## 记录错误日志
前端出异常时，会自动在用户浏览器缓存错误日志(重新打开浏览器丢失),通过页面右上角bug按钮可以查看异常详情，很多时候我们希望异常日志能发到服务器，方便排查问题，这时可以进入```/src/data.js```文件，配置记录错误日志的接口地址。

~~~
export const saveErrorLogger = info => {
  return util.request(`/api/errorlog`, {data: info})
}
~~~

我们约定了日志对象(```info对象```)的格式，如果后端有自己的格式，可以在发送数据前对日志格式进行转换

```
let info = {
  type: 'script', // 两种类型，script,前端错误; api,调用后端接口报错
  code: 0,
  mes: '错误信息',
  url: '发生错误的页面地址'
}
```


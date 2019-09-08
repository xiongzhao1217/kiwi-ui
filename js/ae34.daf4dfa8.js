(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ae34"],{ae34:function(s,a,t){"use strict";t.r(a);var n=function(){var s=this,a=s.$createElement;s._self._c;return s._m(0)},r=[function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("section",[t("h2",[s._v("环境配置")]),t("p",[s._v("进入"),t("code",{pre:!0},[s._v("/config/index.js")]),s._v("文件，"),t("code",{pre:!0},[s._v("backend")]),s._v("配置后端api接口域名，"),t("code",{pre:!0},[s._v("loginUrl")]),s._v("配置单点登录域名，系统已经集成了"),t("code",{pre:!0},[s._v("基于cookies")]),s._v("的单点登录系统，直接配置域名地址即可，配置分"),t("code",{pre:!0},[s._v("development")]),s._v("(开发)、"),t("code",{pre:!0},[s._v("test")]),s._v("(测试)、"),t("code",{pre:!0},[s._v("production")]),s._v("(生产)三个维度，需要分别配置，使用"),t("code",{pre:!0},[s._v("npm run build")]),s._v("编译部署生产环境时，默认使用"),t("code",{pre:!0},[s._v("production")]),s._v("(生产)配置。")]),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"language-javascript"}},[t("span",{attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" env = process.env.NODE_ENV || "),t("span",{attrs:{class:"hljs-string"}},[s._v("'development'")]),s._v("\n"),t("span",{attrs:{class:"hljs-comment"}},[s._v("// 环境变量配置")]),s._v("\n"),t("span",{attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" config = {\n  "),t("span",{attrs:{class:"hljs-attr"}},[s._v("env")]),s._v(": env,\n  "),t("span",{attrs:{class:"hljs-attr"}},[s._v("backend")]),s._v(": {\n    "),t("span",{attrs:{class:"hljs-attr"}},[s._v("development")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'http://localhost:8088'")]),s._v(",\n    "),t("span",{attrs:{class:"hljs-attr"}},[s._v("test")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'http://test-api.kiwiui.com'")]),s._v(",\n    "),t("span",{attrs:{class:"hljs-attr"}},[s._v("production")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'http://api.kiwiui.com'")]),s._v("\n  }[env],\n  "),t("span",{attrs:{class:"hljs-attr"}},[s._v("loginUrl")]),s._v(": {\n    "),t("span",{attrs:{class:"hljs-attr"}},[s._v("development")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("`http://test-sso.kiwiui.com`")]),s._v(",\n    "),t("span",{attrs:{class:"hljs-attr"}},[s._v("test")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'http://test-sso.kiwiui.com'")]),s._v(",\n    "),t("span",{attrs:{class:"hljs-attr"}},[s._v("production")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("`http://sso.kiwiui.com`")]),s._v("\n  }[env]\n}\n"),t("span",{attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log("),t("span",{attrs:{class:"hljs-string"}},[s._v("`env is: "),t("span",{attrs:{class:"hljs-subst"}},[s._v("${env}")]),s._v(", config is: `")]),s._v(", config)\n"),t("span",{attrs:{class:"hljs-built_in"}},[s._v("module")]),s._v(".exports = config\n")])]),t("h2",[s._v("权限配置")]),t("p",[s._v("进入"),t("code",{pre:!0},[s._v("/src/config/index.js")]),s._v("文件, 配置"),t("code",{pre:!0},[s._v("useBackendMenu")]),s._v("属性值，如果配置"),t("code",{pre:!0},[s._v("false")]),s._v("，路由中配置的所有菜单都会显示，开发环境建议这样配置，方便开发调试。")]),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"language-javascript"}},[s._v("useBackendMenu: "),t("span",{attrs:{class:"hljs-literal"}},[s._v("false")]),s._v("\n")])]),t("p",[s._v("如果"),t("code",{pre:!0},[s._v("useBackendMenu")]),s._v("配置为"),t("code",{pre:!0},[s._v("true")]),s._v("，表示需要调用后台接口获取菜单权限，需要在"),t("code",{pre:!0},[s._v("/src/api/data.js")]),s._v("中配置权限调用地址。")]),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"language-javascript"}},[t("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" getUserInfo = "),t("span",{attrs:{class:"hljs-function"}},[t("span",{attrs:{class:"hljs-params"}},[s._v("()")]),s._v(" =>")]),s._v(" {\n  "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" util.request("),t("span",{attrs:{class:"hljs-string"}},[s._v("`/api/user`")]),s._v(")\n}\n")])]),t("p",[s._v("注意，这里对后端接口返回的数据格式有约定，需要遵循以下格式")]),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"language-json"}},[s._v("{\n  code: "),t("span",{attrs:{class:"hljs-number"}},[s._v("0")]),s._v(",\n  message: '成功',\n  data: {\n          erp: 'bjadmin',\n          userName: 'Admin',\n          avatarUrl: 'http://oss.aliyun.com/kiwi-ui/xiongzhao.jpg',  // 如果字段为空，系统取默认头像\n          menuList: [\n            {\n              id: "),t("span",{attrs:{class:"hljs-number"}},[s._v("1")]),s._v(", // 菜单id\n              pid: "),t("span",{attrs:{class:"hljs-number"}},[s._v("0")]),s._v(", // 父菜单id，用于渲染父子菜单，如果父id不存在，可以传0或不传\n              name: '用户管理', // 菜单名称，如果不传会匹配路由中对应的路由名称\n              url: '/user', // 菜单url\n              menuIcon: 'md-hammer' // 菜单图标，不传不渲染\n            },{\n              id: "),t("span",{attrs:{class:"hljs-number"}},[s._v("2")]),s._v(",\n              pid: "),t("span",{attrs:{class:"hljs-number"}},[s._v("1")]),s._v(",\n              name: '用户列表',\n              url: '/user/list',\n              menuIcon: 'ios-mail-outline'\n            }\n          ]\n        }\n}\n")])]),t("p",[s._v("我们知道，在java后端进行消息体格式转换是比较麻烦的，而前端很适合做这件事，所以如果后端定义的格式与这里不同，可以这样进行消息格式转换")]),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"language-javascript"}},[t("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" getUserInfo = "),t("span",{attrs:{class:"hljs-function"}},[t("span",{attrs:{class:"hljs-params"}},[s._v("()")]),s._v(" =>")]),s._v(" {\n  "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" util.request("),t("span",{attrs:{class:"hljs-string"}},[s._v("`/api/user`")]),s._v(").then("),t("span",{attrs:{class:"hljs-function"}},[t("span",{attrs:{class:"hljs-params"}},[s._v("r")]),s._v(" =>")]),s._v(" ({\n    "),t("span",{attrs:{class:"hljs-attr"}},[s._v("data")]),s._v(": {\n      "),t("span",{attrs:{class:"hljs-attr"}},[s._v("erp")]),s._v(": r.data.pin,\n      "),t("span",{attrs:{class:"hljs-attr"}},[s._v("userName")]),s._v(": r.data.name,\n      "),t("span",{attrs:{class:"hljs-attr"}},[s._v("avatarUrl")]),s._v(": r.data.headUrl,\n      "),t("span",{attrs:{class:"hljs-attr"}},[s._v("menuList")]),s._v(": r.data.accessList.map("),t("span",{attrs:{class:"hljs-function"}},[t("span",{attrs:{class:"hljs-params"}},[s._v("access")]),s._v(" =>")]),s._v(" ({\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("id")]),s._v(": access.id,\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("pid")]),s._v(": access.parentId,\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": access.title,\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("url")]),s._v(": access.path,\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("menuIcon")]),s._v(": access.img\n      }))\n    }\n  }))\n}\n")])]),t("h2",[s._v("记录错误日志")]),t("p",[s._v("前端出异常时，会自动在用户浏览器缓存错误日志(重新打开浏览器丢失),通过页面右上角bug按钮可以查看异常详情，很多时候我们希望异常日志能发到服务器，方便排查问题，这时可以进入"),t("code",{pre:!0},[s._v("/src/data.js")]),s._v("文件，配置记录错误日志的接口地址。")]),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[s._v("export const saveErrorLogger = info => {\n  return util.request(`/api/errorlog`, {data: info})\n}\n")])]),t("p",[s._v("我们约定了日志对象("),t("code",{pre:!0},[s._v("info对象")]),s._v(")的格式，如果后端有自己的格式，可以在发送数据前对日志格式进行转换")]),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[s._v("let info = {\n  type: 'script', // 两种类型，script,前端错误; api,调用后端接口报错\n  code: 0,\n  mes: '错误信息',\n  url: '发生错误的页面地址'\n}\n")])])])}],e=t("2877"),v={},l=Object(e["a"])(v,n,r,!1,null,null,null);l.options.__file="config.md";a["default"]=l.exports}}]);
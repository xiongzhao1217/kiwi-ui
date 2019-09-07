import * as util from '@/libs/util'

/**
 * 用户信息、菜单切入点
 * 单点登录后，应用会调用一次该接口，从后端获取登录用户基本信息，菜单权限信息
 * 不强制要求后端格式与接口一致，可以在当前接口内部进行报文格式转换
 * 格式 {
 *   data: {
 *     erp: 'bjadmin',
 *     username: 'Admin',
 *     avatarUrl: '', // 头像地址，如果为空使用默认头像
 *     menuList: [ // 如果src/config中useBackendMenu=false,则不需要该属性
 *       id: 1, // 菜单id
 *       pid: 0, // 父菜单id
 *       name: '人工干预', // 菜单名称
 *       url: '/manual/msgs', // 菜单相对地址
 *     ]
 *   }
 * }
 * @author xiongzhao1
 */
export const getUserInfo = () => {
  // return util.request(`/api/user`)
  return new Promise(resolve => {
    resolve({
      data: {
        erp: 'bjadmin',
        userName: 'Admin',
        avatarUrl: '',
        menuList: [
          {id: 1, pid: 0, name: '人工干预', url: '/manual/msgs', type: 1, menuIcon: 'md-hammer'},
          {id: 2, pid: 1, name: '发送消息', url: '/manual/msgs', type: 1, menuIcon: 'ios-mail-outline'}
        ]
      }
    })
  })
}

/**
 * 记录错误日志
 * 如果希望在后端记录错误日志，可以在该函数指定后端记录日志接口
 * @param {*} info 错误日志对象
 * 格式 {
 *  type: 'script', // 两种类型，script: 前端错误, api: 调用后端接口报错
 *  code: 0,
 *  mes: '错误信息',
 *  url: '错误页面地址'
 * }
 * @author xiongzhao1
 */
export const saveErrorLogger = info => {
  // return util.request(`/api/errorlog`, {data: info})
  return new Promise(resolve => {
    resolve()
  })
}

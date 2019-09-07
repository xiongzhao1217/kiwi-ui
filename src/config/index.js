export default {
  /**
   * @description 是否使用国际化，默认为false
   *              如果不使用，则需要在路由中给需要在菜单中展示的路由设置meta: {title: 'xxx'}
   *              用来在菜单中显示文字
   */
  useI18n: false,
  /**
   * @description api请求基础路径
   */
  baseUrl: {
    dev: 'https://www.easy-mock.com/mock/5add9213ce4d0e69998a6f51/iview-admin/',
    pro: 'https://produce.com'
  },
  /**
   * @description 默认打开的首页的路由name值，默认为home
   */
  homeName: 'home',
  /**
   * @description 需要加载的插件
   */
  plugin: {
    'error-store': {
      showInHeader: true, // 设为false后不会在顶部显示错误日志徽标
      developmentOff: true // 设为true后在开发环境不会收集错误信息，方便开发中排查错误
    }
  },
  /**
   * 是否从后端获取菜单权限
   * 如果设置为false，将没有菜单权限控制，路由中申明的所有菜单都可以看到
   * 如果设置为true，需要在/src/api/data.js#getUserInfo方法中从后端获取菜单权限
   * @author xiongzhao1
   */
  useBackendMenu: false,

  /**
   * 是否需要登录
   * 如果设置为fasle，系统不需要登录就可以访问
   * @author xiongzhao1
   */
  requireLogin: false
}

import Main from '@/components/main'
export default [
  {
    path: '/started',
    name: '_started',
    meta: {
      title: '快速开始'
    },
    // component: () => import('./started/started.md')
    component: Main,
    children: require('./started').default
  },
  {
    path: '/global',
    name: 'global',
    meta: {
      title: '全局配置'
    },
    component: Main,
    children: require('./global').default
  },
  {
    path: '/request',
    name: '_request',
    meta: {
      title: '接口请求'
    },
    component: Main,
    children: require('./request').default
  },
  {
    path: '/component',
    name: 'component',
    meta: {
      icon: 'ios-apps',
      title: '组件',
      showAlways: true
    },
    component: Main,
    children: require('./component').default
  },
  {
    path: '/error_logger',
    name: 'error_logger',
    meta: {
      hideInBread: true,
      hideInMenu: true
    },
    component: Main,
    children: require('./single-page').default
  },
  {
    path: '*',
    name: 'error_404',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/404.vue')
  }
]

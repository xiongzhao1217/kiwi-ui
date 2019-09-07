export default [{
  path: 'config',
  name: 'config',
  meta: {
    icon: 'md-globe',
    title: '全局配置'
  },
  component: () => import('./config.vue')
}]

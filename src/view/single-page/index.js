export default [{
  path: 'error_logger_page',
  name: 'error_logger_page',
  meta: {
    icon: 'ios-bug',
    title: '错误收集'
  },
  component: () => import('@/view/single-page/error-logger.vue')
}]

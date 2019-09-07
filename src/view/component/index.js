export default [{
  path: 'auto-input',
  name: 'auto-input',
  meta: {
    icon: 'ios-radio-button-on',
    title: 'AutoRadio 单选框'
  },
  component: () => import('./auto-radio.vue')
}, {
  path: 'auto-select',
  name: 'auto-select',
  meta: {
    icon: 'ios-arrow-down',
    title: 'AutoSelect 选择器'
  },
  component: () => import('./auto-select.vue')
}, {
  path: 'auto-switch',
  name: 'auto-switch',
  meta: {
    icon: 'ios-switch',
    title: 'AutoSwitch 开关'
  },
  component: () => import('./auto-switch.vue')
}, {
  path: 'auto-button',
  name: 'auto-button',
  meta: {
    icon: 'logo-youtube',
    title: 'AutoButton 按钮'
  },
  component: () => import('./auto-button.vue')
}, {
  path: 'auto-table',
  name: 'auto-table',
  meta: {
    icon: 'md-grid',
    title: 'AutoTable 表格'
  },
  component: () => import('./auto-table.vue')
}, {
  path: 'markdown',
  name: 'markdown',
  meta: {
    icon: 'ios-list-box-outline',
    title: 'Markdown'
  },
  component: () => import('./empty.vue')
}, {
  path: 'modal',
  name: 'modal',
  meta: {
    icon: 'ios-photos-outline',
    title: 'Modal 弹出层'
  },
  component: () => import('./empty.vue')
}, {
  path: 'ztree',
  name: 'ztree',
  meta: {
    icon: 'logo-yahoo',
    title: 'Ztree 树组件'
  },
  component: () => import('./ztree.vue')
}]

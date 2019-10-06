// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import iView from 'iview'
import i18n from '@/locale'
import config from '@/config'
import TreeView from 'vue-json-tree-view'
import VueClipboard from 'vue-clipboard2'
import importDirective from '@/directive'
import installPlugin from '@/plugin'
import 'iview/dist/styles/iview.css'
import './index.less'
import '@/assets/icons/iconfont.css'
import '../node_modules/ztree/css/zTreeStyle/zTreeStyle.css'
import '../node_modules/ztree/js/jquery-1.4.4.min.js'
import '../node_modules/ztree/js/jquery.ztree.core.js'
import '../node_modules/ztree/js/jquery.ztree.excheck.js'
import '../node_modules/ztree/js/jquery.ztree.exedit.js'
import AutoButton from './components/_comps/AutoButton.vue'
import AutoSelect from './components/_comps/AutoSelect.vue'
import AutoRadio from './components/_comps/AutoRadio.vue'
import AutoSwitch from './components/_comps/AutoSwitch.vue'
import AutoTable from './components/_comps/AutoTable.vue'
import Ztree from './components/_comps/ztree.vue'
import AutoSplit from './components/_comps/AutoSplit.vue'
import Markdown from './components/_comps/Markdown.vue'
import CodeView from './components/_comps/CodeView.vue'
import VueHighlightJS from 'vue-highlightjs'
import {showModal} from './components/_comps/modals'

// 实际打包时应该不引入mock
/* eslint-disable */
if (process.env.NODE_ENV !== 'production') require('@/mock')
// 对象树结果展示组件
Vue.use(TreeView)
// 粘贴板组件
Vue.use(VueClipboard)
// 代码高亮组件
Vue.use(VueHighlightJS)
Vue.component('AutoTable', AutoTable)
Vue.component('AutoButton', AutoButton)
Vue.component('AutoSelect', AutoSelect)
Vue.component('AutoRadio', AutoRadio)
Vue.component('AutoSwitch', AutoSwitch)
Vue.component('Ztree', Ztree)
Vue.component('AutoSplit', AutoSplit)
Vue.component('Markdown', Markdown)
Vue.component('CodeView', CodeView)

Vue.use(iView, {
  i18n: (key, value) => i18n.t(key, value)
})
/**
 * @description 注册admin内置插件
 */
installPlugin(Vue)
/**
 * @description 生产环境关掉提示
 */
Vue.config.productionTip = false
/**
 * @description 全局注册应用配置
 */
Vue.prototype.$config = config
/**
 * @description 全局注册showModal
 */
Vue.prototype.$showModal = showModal
/**
 * 注册指令
 */
importDirective(Vue)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  store,
  render: h => h(App)
})

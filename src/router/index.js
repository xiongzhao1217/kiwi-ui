import Vue from 'vue'
import Router from 'vue-router'
import routes from './routers'
import store from '@/store'
import iView from 'iview'
import { setToken, getToken, canTurnTo } from '@/libs/util'
import config from '@/config'
import envConf from '../../config'
const { homeName, requireLogin, baseContext } = config

Vue.use(Router)
const router = new Router({
  routes,
  base: baseContext || '/',
  mode: 'history'
})
const LOGIN_PAGE_NAME = 'login'

const turnTo = (to, access, next) => {
  next()
  // if (canTurnTo(to.name, access, routes)) next() // 有权限，可访问
  // else next({ replace: true, name: 'error_401' }) // 无权限，重定向到401页面
}

router.beforeEach((to, from, next) => {
  iView.LoadingBar.start()
  const token = getToken()
  if (requireLogin && !token && to.name !== LOGIN_PAGE_NAME) {
    // 未登录且要跳转的页面不是登录页,跳转到登录页
    window.location.href = `${envConf.loginUrl}?ReturnUrl=${encodeURIComponent(window.location.href)}`
  } else if (to.name === LOGIN_PAGE_NAME) {
    // 未登陆且要跳转的页面是登录页
    next() // 跳转
  } else {
  // else if (token && to.name === LOGIN_PAGE_NAME) {
  //   // 已登录且要跳转的页面是登录页
  //   next({
  //     name: homeName // 跳转到homeName页
  //   })
  // }
  // if (!token) {
  // } else {
    if (store.state.user.hasGetInfo) {
      turnTo(to, store.state.user.access, next)
    } else {
      store.dispatch('getUserInfo').then(user => {
        // 拉取用户信息，通过用户权限和跳转的页面的name来判断是否有权限访问;access必须是一个数组，如：['super_admin'] ['super_admin', 'admin']
        turnTo(to, user.access, next)
      }).catch(() => {
        window.location.href = `${envConf.loginUrl}?returnUrl=${encodeURIComponent(window.location.href)}`
      })
    }
  }
})

router.afterEach(to => {
  iView.LoadingBar.finish()
  window.scrollTo(0, 0)
})

export default router

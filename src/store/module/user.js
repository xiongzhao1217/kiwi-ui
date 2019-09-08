import { getUserInfo } from '@/api/data'
import { setToken, getToken, request } from '@/libs/util'
import avator from '@/assets/images/defaultAvator.png'
export default {
  state: {
    erp: '',
    userName: '',
    avatorImgPath: '',
    token: getToken(),
    access: '',
    menuList: [],
    hasGetInfo: false
  },
  mutations: {
    setAvator (state, avatorPath) {
      state.avatorImgPath = avatorPath
    },
    setErp (state, erp) {
      state.erp = erp
    },
    setUserName (state, name) {
      state.userName = name
    },
    setAccess (state, access) {
      state.access = access
    },
    setMenuList (state, menuList) {
      state.menuList = menuList
    },
    setToken (state, token) {
      state.token = token
      setToken(token)
    },
    setHasGetInfo (state, status) {
      state.hasGetInfo = status
    }
  },
  actions: {
    // 退出登录
    handleLogOut ({ state, commit }) {
      return new Promise((resolve, reject) => {
        commit('setToken', '')
        commit('setAccess', [])
        resolve()
      })
    },
    // 获取用户相关信息
    getUserInfo ({ state, commit }) {
      return new Promise((resolve, reject) => {
        try {
          getUserInfo().then(res => {
            const data = res.data
            commit('setAvator', data.avatarUrl || avator)
            commit('setUserName', data.userName)
            commit('setErp', data.erp)
            commit('setAccess', data.access || [])
            commit('setMenuList', data.menuList || [])
            commit('setHasGetInfo', true)
            resolve(data)
          }).catch(err => {
            reject(err)
          })
        } catch (error) {
          reject(error)
        }
      })
    }
  }
}

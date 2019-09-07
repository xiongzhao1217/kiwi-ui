import Vue from 'vue'
import CModal from './modal'

export function showModal (Component, compProps = {}, modalProps = {}) {
  if (!window.modals) {
    window.modals = []
  }
  for (let i = 0; i < 5; i++) {
    if (!window.modals[i]) {
      let div = document.createElement('div')
      document.body.appendChild(div)
      let wrapper = new Vue({
        el: div,
        render: h => h(CModal)
      })
      window.modals[i] = wrapper.$children[0]
    }
    if (!window.modals[i].visible) {
      return window.modals[i].show(Component, compProps, modalProps)
    }
  }
}

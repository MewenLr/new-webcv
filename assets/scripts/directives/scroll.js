import Vue from 'vue'

Vue.directive('scroll', {
  bind: (el, binding) => {
    el.eventFn = evt => binding.value(evt)
    window.addEventListener('scroll', el.eventFn)
  },
  unbind: (el) => {
    window.removeEventListener('scroll', el.eventFn)
  },
})

import Vue from 'vue'

Vue.directive('pointerdown', {
  inserted: (el, binding) => {
    el.eventFn = evt => binding.value(evt)
    window.addEventListener('pointerdown', el.eventFn)
  },
  unbind: (el) => {
    window.removeEventListener('pointerdown', el.eventFn)
  },
})

Vue.directive('pointermove', {
  bind: (el, binding) => {
    el.eventFn = evt => binding.value(evt)
    window.addEventListener('pointermove', el.eventFn)
  },
  unbind: (el) => {
    window.removeEventListener('pointermove', el.eventFn)
  },
})

Vue.directive('pointerup', {
  bind: (el, binding) => {
    el.eventFn = evt => binding.value(evt)
    window.addEventListener('pointerup', el.eventFn)
  },
  unbind: (el) => {
    window.removeEventListener('pointerup', el.eventFn)
  },
})

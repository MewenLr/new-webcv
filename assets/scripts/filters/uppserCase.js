import Vue from 'vue'

Vue.filter('upperCase', (value) => {
  if (!value) return ''
  value = value.toString()
  return value.toUpperCase()
})

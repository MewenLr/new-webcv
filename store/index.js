import types from './mutation-types'

export default {
  state: () => ({
    stPageActive: 0,
    stTabActive: undefined,
  }),
  mutations: {
    [types.PAGE_ACTIVE] (state, payload) {
      state.stPageActive = payload
    },
    [types.TAB_ACTIVE] (state, payload) {
      state.stTabActive = payload
    },
  },
  getters: {
  },
  actions: {
  },
}

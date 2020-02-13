import types from './mutation-types'

export default {
  state: () => ({
    stTabActive: undefined,
  }),
  mutations: {
    [types.TAB_ACTIVE] (state, payload) {
      state.stTabActive = payload
    },
  },
  getters: {
  },
  actions: {
  },
}

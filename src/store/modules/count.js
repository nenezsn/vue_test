export default {
  namespaced: true,
  state: {
    count: 0
  },
  mutations: {
    add: function (state, payload) {
      state.count += 1
    },
    sub: function (state) {
      state.count -= 1
    },
    clear: function (state) {
      state.count = 0
    }
  },
  getters: {
    // price:function(state){
    //   return state.count * 10
    // },
    price: function (state) {
      return function (price) {
        return state.count * (price || 10)
      }
    }
  },
  actions: {
    reset: function ({ dispatch,commit }) {
      commit({ type: "clear" })
    }
  }
}

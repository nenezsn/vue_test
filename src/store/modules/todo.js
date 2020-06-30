module.exports = {
  namespaced: true,
  state: {
    list: [],
  },
  getters: {
    notCompleteList: function (state) {
      return state.list.filter(item => item.status == 'NOT_FINISH')
    },
    hasFinishList: function (state) {
      return state.list.filter(item => item.status == 'FINISH')
    }
  },
  mutations: {
    add: function (state, text) {
      state.list.push({ id: Date.now(), content: text, status: 'NOT_FINISH' })
    },
    finish: function (state, id) {
     state.list.find(item => item.id == id).status = 'FINISH'
    },
    deleteItem: function (state, id) {
      state.list = state.list.filter(item => item.id != id)
    }
  }
}

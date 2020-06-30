import Vue from 'vue'
import Vuex from 'vuex'
import count from './modules/count.js'
import todo from './modules/todo.js'
Vue.use(Vuex)

const store = new Vuex.Store({
  state:{
    name:'vue'
  },
  modules: {
    count,
  }
})
store.registerModule('todo', todo)
export default store

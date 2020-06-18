import Vue from 'vue'
import Vuex from 'vuex'
import count from './modules/count.js'
Vue.use(Vuex)

const store = new Vuex.Store({
  state:{
    name:'vue'
  },
  // modules: {
  //   count,
  // }
})
store.registerModule('count', count)
export default store

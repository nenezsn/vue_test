import Vue from 'vue'
import Vuex from 'vuex'
import todo from './modules/todo.js'
import method from './modules/method.js'
Vue.use(Vuex)
const moduleA = {
    namespaced:true,
    state:{
        name:'王冰'
    },
    actions:{
        fixname:function({},payload){
            console.log('来我这里了',payload)
        }
    }
}
const store = new Vuex.Store({
    state: {
        count: 1,
        courseList: [{ status: 0 }, { status: 1 }, { status: 0 }, { status: 0 }]
    },
    //可以在mutation使用异步，但是不容易生成状态更改前和更改后的快照。
    mutations: {
        addCount(state, payload) {
            console.log('payload', payload)
            state.count += payload
        },
        cutCount(state, payload) {
            state.count -= payload.num
        }
    },
    getters: {
        courseListDone: (state) => (id) => {
            return state.courseList.filter(item => item.status == id)
        }
    },
    actions: {
       delay(context,num){
           return new Promise(resolve=>{
               setTimeout(()=>{
                    resolve(`${num}秒时间到了`)
                    console.log(`${num}秒时间到了`)
               },num*1000)
           })
       },
       async addCountAsync({ commit,dispatch,rootState },payload) {
           console.log('rootState',rootState)
         const data = await dispatch('delay',3)
         commit('addCount',payload)
            return data         
        }
    },
    modules:{
        a:moduleA,
        todo,
        method
    }
})
store.registerModule('myModule', {
    state:{
        myModule:'注册的模块'
    }
  })
  console.log('store',store)
export default store

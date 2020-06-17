// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router' // vue-router
import store from './store' // vuex
import ElementUI from 'element-ui' //elm 组件库
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import echarts from 'echarts';
Vue.config.productionTip = false
Vue.config.silent =true
//引入组件库
Vue.use(ElementUI);
Vue.use(iView);
Vue.config.devtools = true
Vue.prototype.$echarts = echarts;
//谨慎使用
// Vue.mixin({
//   created(){
//     console.log('wb')
//   }
// })

//全局的路由守卫
// router.beforeEach((to,from,next)=>{
//   console.log('router.beforeEach',to,from,next)
//     next()
// })
/* eslint-disable no-new */

new Vue({
  el: '#app',
  data:{
    projectName:'vue项目'
  },
  store,
  router,
  // components: { App },
  render(h){ return h(App)}
  // render(h){return <div id='app'><router-view /></div>}
})


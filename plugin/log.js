let log={}
log.install = function(Vue,options){
  Vue.component('log',{
    template:'<div>这是一个log组件</div>'
  })
}
export default log

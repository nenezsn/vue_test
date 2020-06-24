<template>
  <div ref='life'>
    <button @click="count+=1">加{{count}}</button>
    <!-- 可以使用@hook:life 来监听组件内部的声明周期 -->
    <child :count='count' @hook:updated='log'/>
    </div>
</template>

<script>

const child = {
  props:['count'],
  updated(){
      console.log('child render')
  },
  template:'<div>{{count}}</div>'
}

export default {
  data:function(){
    return {
      count:0,
      count2:0,
    }
  },
  methods:{
    log(){
      console.log('来了')
    }
  },
  beforeCreate(data){
    console.log('beforeCreate',this,)
  },
  created(){
    console.log('created',this,)
  },
  beforeMount(){
    console.log('beforeMount',this,)
  },
  mounted(){
    console.log('mounted',this,)
    this.$once('hook:updated',()=>{
      console.log('更新了')
    })
  },
  beforeUpdate(data){
    console.log('beforeUpdate',this,this.count)
    return false
  },
  updated(data) {
    console.log('updated',this,this.count)
  },
  beforeDestroy(){
    console.log('beforeDestroy',this,)
  },
  destroyed(){
    console.log('destroyed',this,)
  },
  components:{
    'child':child
  }
}
</script>

<style>

</style>

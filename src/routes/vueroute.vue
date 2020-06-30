<template>
  <div class="hello">
    <div>测试路由嵌套组件{{$route.params.id}}</div>
    <h3>top部分</h3>
    <router-view name='top'></router-view>
    <h3>center部分</h3>
    <router-view></router-view>
    <h3>foot部分</h3>
    <router-view name='foot'></router-view>
    <button id='btn' @click="handlePush">切页{{count}}</button>
    <button id='btn' @click="$router.push({name:'index'})">跳转到首页</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data:function(){
    return {
      count:1
    }
  },
  methods:{
    handlePush(){
      this.count+=1;
      const el = document.getElementById('btn')
        console.log('prev el',el.innerHTML)
      this.$nextTick(function(){
        console.log('el',el.innerHTML)
      })
      this.$router.push('/vueroute/'+this.count)
    }
  },
  //只有在path发生改变的情况下  才会触发hock
  beforeRouteLeave (to, from, next) {
    console.log('index beforeRouteLeave',to, from)
    next()
  },
  beforeRouteEnter (to, from, next) {
    console.log('index beforeRouteEnter',to,from)
    next()
  },
  beforeRouteUpdate (to, from, next) {
    console.log('index beforeRouteUpdate',to,from)
    next()
  },
  mounted(){
    console.log(2222,this.$route)
  },
  watch:{
    '$route'(to,from){
      console.log('$route变化',to,from)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

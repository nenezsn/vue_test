<template>
  <div class="hello">
    <div>测试路由嵌套组件</div>
    <h3>top部分</h3>
    <router-view name='top'></router-view>
    <h3>foot部分</h3>
    <router-view name='foot'></router-view>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
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
  watch:{
    '$route'(val){
      console.log('$route变化',val)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

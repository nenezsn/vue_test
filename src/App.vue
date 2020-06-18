<template>
  <div class='box'>
        <router-link to='/'>首页</router-link>
        <router-link to='/com'>组件</router-link>
        <router-link to='/Vx'>vuex</router-link>
        <router-link to='/life'>声明周期</router-link>
      <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  provide:{
    name:'王冰'
  }
}
</script>

<style>
.box{
  width: 1000px;
  margin: 0 auto;
}
</style>

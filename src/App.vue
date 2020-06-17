<template>
  <div class='box'>
        <router-link to='/'>首页</router-link>
        <router-link to='/com'>组件</router-link>
        <router-link to='/TodoList'>跳转todoList</router-link>
        <router-link to='/method'>跳转method</router-link>
        <router-link to='/homepage'>跳转homepage</router-link>
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

<template>
  <div id='life'>{{title}}</div>
</template>

<script>
export default {
  data:function(){
    return {
      title:'生命周期'
    }
  },
  beforeCreate(){
    console.log('beforeCreate',this,life)
  },
  created(){
    console.log('created',this,life)
  },
  beforeMount(){
    console.log('beforeMount',this,life)
  },
  mounted(){
    console.log('mounted',this,life)
  },
  beforeUpdate(){
    console.log('beforeUpdate',this,life)
  },
  updated() {
    console.log('updated',this,life)
  },
  beforeDestroy(){
    console.log('beforeDestroy',this,life)
  },
  destroyed(){
    console.log('destroyed',this,life)
  }
}
</script>

<style>

</style>

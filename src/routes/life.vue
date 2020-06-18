<template>
  <div ref='life'>{{title}}</div>
</template>

<script>
export default {
  data:function(){
    return {
      title:'生命周期'
    }
  },
  beforeCreate(){
    console.log('beforeCreate',this,this.title,this.$refs.life)
  },
  created(){
    console.log('created',this,this.title,this.$refs.life)
  },
  beforeMount(){
    console.log('beforeMount',this,this.title,this.$refs.life)
  },
  mounted(){
    console.log('mounted',this,this.title,this.$refs.life)
  },
  beforeUpdate(){
    console.log('beforeUpdate',this,this.title,this.$refs.life)
  },
  updated() {
    console.log('updated',this,this.title,this.$refs.life)
  },
  beforeDestroy(){
    console.log('beforeDestroy',this,this.title,this.$refs.life)
  },
  destroyed(){
    console.log('destroyed',this,this.title,this.$refs.life)
  }
}
</script>

<style>

</style>

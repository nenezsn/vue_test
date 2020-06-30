<template>
    <div>
      <h3>函数式组件</h3>
      <v-fn title='你好' @reflash='handleFlash'>222</v-fn>
    </div>
</template>

<script>
var vFn = {
  functional:true,
  render(h,{props,listeners,children}) {
      return <button onClick={listeners.reflash}>{props.title}{children}</button>
  }
}
export default {
  methods:{
    handleFlash(){
      console.log('2222')
    }
  },
    components:{
      'v-fn':vFn
    }
}
</script>

<style>

</style>

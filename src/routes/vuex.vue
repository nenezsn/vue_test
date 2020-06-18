<template>
  <div>
    <h3>{{count}}</h3>
    <h4>总价:{{price(2)}}</h4>
    <button @click="add">加1</button>
    <button @click="sub">减1</button>
    <button @click="reset">Reast</button>
  </div>
</template>

<script>
import { mapState, mapMutations,mapGetters,createNamespacedHelpers } from 'vuex'
// const { mapState, mapMutations,mapGetters } = createNamespacedHelpers('count')


export default {
  data: function () {
    return {}
  },
  methods: {
    reset(){
      this.$store.dispatch({type:'count/reset'})
    },
    ...mapMutations('count', ['add','sub'])
  },
  computed: {
    ...mapState('count',['count']),   //相当于$store.state.count.count
    ...mapGetters('count',{
      price: 'price'
    })
  },
  mounted(){
    console.log('222',this.$store.state)
  }
}
</script>

<style>
</style>

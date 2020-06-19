<template>
  <div>
    <slot name='header'/>
    <slot user='子域'/>
    <slot name='footer'>预备footer</slot>
  </div>
</template>

<script>
export default {
  mounted(){
    console.log('this',this.$children,this.$slots)
  }
}
</script>

<style>

</style>

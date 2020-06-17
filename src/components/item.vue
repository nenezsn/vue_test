<template>
  <div>{{item}}:{{title}}</div>
</template>
<script>
export default {
  props:['item'],
  data:function(){
    return {
      title:'王冰'
    }
  }
}
</script>

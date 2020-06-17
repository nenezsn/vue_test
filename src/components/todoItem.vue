<template>
   <div>
     <slot></slot>
      <ul >
        <transition-group name="fade">
          <li v-for="(item,index) in list" :key="index" v-if='item.status==status' @click='toFinsh(item.id)'>
                {{item.text}}:{{item.status}}<span class='haha'>{{name}}</span>
              </li>
  </transition-group>
              
             </ul>
   </div>
</template>

<script>
import Vue from "vue";
export default {
  props: {
    status: {
      type: String,
      required: true
    },
    list: {
      type: Array,
      required: true
    },
    test: {
      required: true
    }
  },
  inject: ["name"],
  methods: {
    toFinsh: function(id) {
      this.$emit("toFinsh", id, "wa");
      //完成后自动跳转到完成的tab兰
      this.$emit("update:status", "FINISHED");
    },
    sonMethod: function(msg) {
      console.log(msg);
    }
  },
  created() {
    //test的函数是通过属性传进去的 能达到同样的一样 和react传函数是一样的
    // this['test']()
    //可以直接修改父组件状态(但是不推荐)
    // setTimeout(() => {
    //   this.$parent.status = 'FINISHED'
    // }, 3000);
  }
};
</script>
<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

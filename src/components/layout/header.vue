<template>
    <div>
        <div class="header" >Header</div>
    </div>
</template>
<script>
import Vue from "vue";
export default {
  data() {
    return {};
  },
  //只有在path发生改变的情况下  才会触发hock
  beforeRouteLeave(to, from, next) {
    console.log("header beforeRouteLeave", to, from);
    next();
  },
  beforeRouteEnter(to, from, next) {
    console.log("header beforeRouteEnter", to, from);
    next();
  },
  beforeRouteUpdate(to, from, next) {
    console.log("header beforeRouteUpdate", to, from);
    next();
  },
  mounted() {
    console.log("header this.$route", this, this.$route);
    //   this.loading=this.$loading({
    // 		          lock: true,
    // 		          text: '加载中...',
    // 		          spinner: 'el-icon-loading',
    // 		          background: 'rgba(0, 0, 0, 0.5)'
    // 		        });
  },
};
</script>
<style >
.header{
  font-size: 16px;
  text-align: center;
  background: #cecece;
}
</style>

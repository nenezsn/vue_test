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

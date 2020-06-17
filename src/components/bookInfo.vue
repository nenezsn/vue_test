<template>
    <div>
        <p v-bind='$attrs'>{{bookName}}{{title}}</p>
        <p>{{bookAuthor}}{{author}}</p>
        <p @click="fixStatus">状态:{{status}}</p>
    </div>
</template>

<script>
export default {
  name: "bookInfo",
  props: ["title", "author", 'status','company'],
  data: function() {
    return {
      bookName: "书名:",
      bookAuthor: "作者:"
    };
  },
  inheritAttrs: false,
  methods:{
      fixStatus:function(){
         this.$emit('fixStatus',this.title)
         this.$emit('update:company','阿里巴巴')
       
      }
  }
};
</script>


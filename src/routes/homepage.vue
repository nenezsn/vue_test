<template>
    <div >
           <p>{{name}}</p>
           <p @click='fixList'>{{company}}</p>
           <!-- 模拟v-model -->
        <input v-bind:value='name' v-on:input='name=$event.target.value'/>
        <button @click='fixName($event,"xiugaimingzi")'>点击修改名字</button>
        <button @click='fixBookName'>点击修改书名</button>
        <button @click='addCountAsync2(2)'>{{count}}给store的count加</button>
        <button @click='cutCount(2)'>{{count}}给store的count减</button>
        <span v-for='(item,index) in list' :key='index*3+10'>
          {{item}}
        </span>
         <div v-for='(item,index) in bookList' :key='index' >
             <v-bookInfo v-show="flag" v-bind="item" @fixStatus='fixStatus' :company.sync = 'company' style='color:red'></v-bookInfo>
            </div>
            <component-a style='color:red' class='wangbing' :value.sync='name' name='wangbing'></component-a>
        <component :is="wangbing" v-bind='bookList[0]'></component>
        </div>
</template>
<script>
import bookInfo from "../components/bookInfo";
import Vue from 'vue';
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
var componentA = {
  inheritAttrs: false,
  props:{
    value:{
      type:String,
      default:'没有任何值',
    }
  },
  template:`<div>componentA{{value}}<span v-bind='$attrs' @click='fixNum'>111</span></div>`,
  data:function(){
    return {
      content:'内容'
    }
  },
  methods:{
    fixNum:function(){
      this.$emit('update:value','我来自子组件的更改')
    }
  }

}
var componentB ={
  data(){
    return {
      name : '12313123123123231'
    }
  },
  template:`<div>
    <slot name='top' :text = 'name'></slot>
    <slot></slot>
    <slot name='foot'></slot>
  </div>`
}
export default {
  name: "homepage",
  data: function() {
    return {
      name: "wangbing1",
      flag:1,
      company:'新道科技',
      wangbing:'v-bookInfo',
      list:[1,2,3],
      bookList: [
        {
          title: "七龙珠",
          author: "鸟上名",
          status:'1'
        },
        {
          title: "名侦探柯南",
          author: "青山刚昌",
          status:'1'
        },
        {
          title: "火影忍者",
          author: "岸本齐史",
          status:'1'
        }
      ]
    };
  },
  mounted(){
    console.log(this)
    // console.log(this.courseListDone(1))
    this.$store.dispatch({
      type:'a/fixname',
      name:'wangbing'
    })
  },
  methods: {
    ...mapMutations([
      'addCount'
    ]),
    ...mapActions([
      'addCountAsync'
    ]),
    fixList:function(){
      console.log('1111')
      this.bookList.push({title:'haha',author:'heihei',status:0})
      this.$set(this.list,0,12)
      this.$set(this.data,'b',1)
      console.log('this',this)
    },
    fixName: function(e, value) {
      console.log(e);
      this.name = value;
    },
    fixBookName:function(){
        this.bookList[0].author = '鸟山明'
    },
    fixStatus:function(e){
        this.bookList.map((item,index)=>{
            if(item.title==e){
                this.bookList[index].status=0
            }
        })
    },
    addCount1:function(num){
      // this.$store.commit('addCount',{
      //   num
      // })
      this.$store.commit({
        type:'addCount',
        num
      })
    },
    cutCount:function(num){
      this.$store.commit({
        type:'cutCount',
        num
      })
    },
    addCountAsync2:function(num){
      this.addCountAsync(num).then(data=>{
        console.log('zujian',data)
      })
    }
  },
  computed: {
    ...mapState([
      'count','courseList'
    ]),
    ...mapGetters([
      'courseListDone'
    ])
  },

  components: {
    "vBookInfo": bookInfo,
    'componentA':componentA,
  }
};
</script>
<style>
.wangbing{
  color: green;
}
</style>

<template>
    <div>
        <el-input ref='input' class='input' v-model.lazy='value' @keydown.13.native="add($event)" />
        <el-button @click='changeStatus("FINISHED")' :class='status=="FINISHED"?"active":""'>完成</el-button>
        <el-button @click='changeStatus("DOING")'  :class='status=="DOING"?"active":""'>进行中</el-button>
        <el-button @click='clearStorage' v-color='"FINISHED"'>清空</el-button>
        <!-- <div v-for='item in arr' :key='item' @click='updateArr'>{{item}}</div> -->
        <!-- <wb-button @handleClick='gaoxiao' style='color:red' :haha='123'></wb-button> -->
        <div class='wang' is='v-listitem' ref="listItem" :status.sync='status' :list='statusList(status)' @toFinsh='toFinish' :test='totest' @haha='haha' ><div @click='wangbing'>这就是你要做的事情</div></div>
        <div>{{info.name}}</div>
        <!-- <router-link to='/'>跳转到首页</router-link> -->
        <!-- <vBaseCheckBox v-on:focus='select'/> -->
        <!-- <vInfo >wo shi wnagbing </vInfo> -->
        <!-- <span v-pre>{{ this will not be compiled }}</span> -->
        <vInfo2 name='true'/>
        <vInfo3 >什么鬼东西</vInfo3>
    </div>
</template>


<script>
import Vue from "vue";
import { mapState, mapMutations, mapGetters } from "vuex";
import ListItem from "../components/todoItem";

var BaseCheckBox = {
  data: function() {
    return {
      value: true
    };
  },
  computed: {
    inputListeners: function() {
      let vm = this;
      return Object.assign({}, this.$listeners, {
        input: function(e) {
          vm.$emit("input", e.target.value);
        }
      });
    }
  },
  watch: {
    value: function(val) {
      console.log(val);
    }
  },

  template: `<div><input type = 'text' v-model='value' v-on="inputListeners"/></div>`
};

var Info = {
  data: function() {
    return {
      name: "啁啾"
    };
  },
  methods: {
    handleClick: function() {
      this.name = "wangbing";
    }
  },
  mounted() {
    console.log("this,", this);
  },
  render(h) {
    let info = this.name == "啁啾" ? 1 : 2;
    return <div onClick={this.handleClick}>{info}</div>;
  }
};

var Info2 = {
  functional: true,

  render(h, context) {
    console.log("cntext", context);
    return <div>函数组件</div>;
  }
};

var Info3 = {
  render(createElement){
    return createElement('h1',{
      props:{
        age:{
          type:String
        }
      },
      attrs:{
        name:'wangbing',
        title:'王冰'
      }
    },this.$slots.default)
  }
}

export default {
  data: function() {
    return {
      title: "我的待办事项",
      value: "",
      status: "DOING",
      arr: [1, 2, 3],
      info: {
        name: ""
      }
    };
  },
  directives: {
    focus: {
      inserted: function(el) {
        el.focus();
      }
    },
    color: {
      bind: function(el, binding) {
        el.style.color = "green";
        console.log("binding", binding);
      }
    }
  },

  methods: {
    select(e) {
      console.log("e", e);
    },
    haha() {
      console.log("123");
    },
    totest() {
      console.log("2");
    },
    // 用于强行更新视图
    updateArr() {
      this.arr[1] = 100;
      // this.$forceUpdate()
    },
    wangbing() {
      console.log("23232323");
    },
    gaoxiao() {
      console.log("this.$refs.span", this.$refs);
      console.log("受到回调");
    },
    // 更改状态
    changeStatus(status) {
      this.status = status;
      // this.$emit('wangbing','你好')
    },
    //添加事项
    add(e) {
      this.value = "";
      this.add2({
        type: "add",
        payload: {
          text: e.target.value,
          status: "DOING",
          id: +new Date()
        }
      });
      this.saveStorage();
    },
    //完成事项
    toFinish(id, a) {
      console.log("a", a);
      this.toFinsh2({
        type: "toFinsh",
        id
      });
      this.saveStorage();
    },
    //保存到storeage
    saveStorage() {
      localStorage.setItem("todo", JSON.stringify(this.list2));
    },
    //清空storage相关数据
    clearStorage() {
      localStorage.setItem("todo", JSON.stringify([]));
      this.updateList({
        type: "updateList",
        data: []
      });
    },
    ...mapMutations("todo", {
      add2: "add",
      toFinsh2: "toFinsh",
      updateList: "updateList"
    })
  },
  computed: {
    value2: {
      get: function() {
        return this.value + "我自己添加的";
      }
    },
    ...mapState("todo", {
      list2: "list"
    }),
    ...mapGetters("todo", {
      statusList: "statusList"
    })
  },
  components: {
    vListitem: ListItem,
    vBaseCheckBox: BaseCheckBox,
    vInfo: Info,
    vInfo2: Info2,
    vInfo3:Info3
  },
  filters: {},
  watch: {
    value: function(newValue, oldValue) {
      if (newValue == "王冰") {
        this.value = "这个人被禁止输入";
      }
    },
    status: {
      handler(val) {
        // console.log('val',val)
      },
      immediate: true, //watch再初始化阶段是不执行的 写成handler 和 immediate 的形式 会执行一次
      deep: true //这条属性可以帮助你监测 status内部的属性变化（当status是一个对象的时候）
    }
  },
  // beforeCreate(){
  //   console.log('beforeCreate')
  // },
  // beforeMount(){
  //   console.log('beforeMount')
  // },
  // mounted(){
  //   console.log('mounted')
  // },
  // beforeUpdate(){
  //   console.log('beforeUpdate')
  // },
  // updated(){
  //   console.log('updated')
  // },
  // beforeDestroy(){
  //   console.log('beforeDestroy')
  // },
  // destroyed(){
  //   console.log('destroyed')
  // },
  mounted() {
    console.log("this", this.$children);
    this.$emit("haha");
  },
  created() {
    if (localStorage.getItem("todo")) {
      this.updateList({
        type: "updateList",
        data: JSON.parse(localStorage.getItem("todo"))
      });
    }
    //同watch
    this.$on("wangbing", msg => {
      console.log("122222", msg);
    });
    //获取dom的某个元素
    // setTimeout(()=>{
    //   this.$refs.input.focus()
    // },3000)
    //子组件调用父组件
    // setTimeout(()=>{
    //   this.$refs.listItem.sonMethod('父亲调用了你')
    // },3000)
  }
};
</script>






<style lang="scss">
.active {
  color: red;
}
.input {
  width: 200px;
}
.wang{
  .haha{
    color:red;
  }
}

</style>

<template>
    <div>
        <p style="color:red">算法集合</p>
        <div @click='addData'>动态添加属性</div>
        <div >今天唐山天气：{{weather.date}}:{{weather.high}}:{{weather.low}}</div>
        <span>{{info.name}}{{info.age}}</span>
        <div @click='addNum'>异步提交mutation 也是生效的 只是不好跟踪状态 增加1:{{num}}</div>
        <div @click="createNewInstance(2)" id='wangbing'>vue.extend</div>
       <!-- v-model也可以绑定json的第二层第三层的数据 -->
       <div v-for='(item,index) in arr' :key='index'>
              <input v-model="item.age">{{item.age}}
        </div>
        <div class="title"><span>哈哈</span>嘿嘿</div>
        <el-button class="create">这是button</el-button>
        <div v-for="(item,index) in list " :key='item.name' @click="fix_name(index)">{{item.name}}:{{item.info.age}}</div>
        <v-checkBox v-model="checked"/>
        {{checked?'1':'2'}}
        <!-- 非变异 计算属性能否监听到 -->
        <el-button @click="changeArr">切换{{arr3}}</el-button>
        <i v-for = 'item in arr2' :key='item'>{{item}}</i>
        <!-- 测试表单控件问题 -->
        <el-select v-model="wangbing">
          <el-option value="1"  :label='1' />
          <el-option value="2"  :label='2' />
          <el-option value="3"  :label='3' />
        </el-select>
        {{wangbing}}
        <el-button @click="wangbing=''"/>
        <Page :current="1" :total="100"></Page>
    </div>
</template>
<script>
import Vue from "vue";
import { delay, dobounce } from "../util/utils";
import Mixin from "../util/mixin";
import { mapState, mapMutations } from "vuex";
var checkBox = {
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    checked: Boolean
  },
  template: `
  <input
  type="checkbox"
  :checked='checked'
  v-on:change='$emit("change",$event.target.checked)'/>
  `
}
export default {
  data() {
    return {
      wangbing:'',
      checked: false,
      info: {
        name: "王冰"
      },
      arr: [{ age: 1 }, { age: 2 }, { age: 3 }, { age: 4 }],
      list: [],//列表
      arr2:[1,2,3]
    };
  },
  // mixins: [Mixin],
  methods: {
    changeArr(){
      this.$set(this.arr2,1,200)
      console.log('this.arr',this.arr2)
    },
    fix_name: function (index) {
      console.log('index', index)
      this.list[index].name = '我已经修改了名字'
      this.list[index].info.age = 50
    },
    extend: function (val) {
      console.log("1111", val);
    },
    createNewInstance: function (item) {
      let template = "";
      if (item == 1) {
        template = "<span>1</span>";
      } else {
        template = "<span>{{data}}-{{msg}}</span>";
      }
      let person = Vue.extend({
        props: ["msg"],
        template: template,
        methods: {
          test: function (age) {
            console.log('this test', age)
          }
        },
        data: function () {
          return {
            data: "这是一个实例 "
          };
        },
        render: function (h) {
          if (item == 1) {
            return <div onClick={this.test.bind(this, 23)}>123</div>;
          } else {
            return <div>456{this.msg}</div>;
          }
        }
      });
      new person({
        el: '#wangbing',
        propsData: {
          msg: "这是propsDate"
        }
      })
    },
    addNum: function () {
      this.testAsync();
    },
    ...mapMutations("method", ["testAsync"]),
    addData: function () {
      this.$set(this.info, "age", 23);
      // this.info.name = "王哈哈";
      console.log("outter", this.info);
      this.$nextTick(function () {
        console.log("inner", this.info);
      });
    }
  },
  updated() {
    console.log("updated,this", this.info);
  },
  beforeCreate() {
    console.log("beforeCreate");
  },
  created() {
    console.log("created");
  },
  components: {
    'v-checkBox': checkBox
  },
  mounted() {
    // this.$store.dispatch({
    //   type: "method/getWeather"
    // });
    setTimeout(() => {
      let data = [{ name: '章三', info: { age: 23 } }, { name: '找死', info: { age: 23 } }, { name: '王五', info: { age: 23 } }, { name: '李刘', info: { age: 23 } }]
      this.list = data;
    }, 3000)
  },
  filters: {},
  computed: {
    ...mapState("method", {
      weather: "weatherInfo",
      num: "num"
    }),
    arr3(){
      return this.arr2[1]
    }
  }
};
</script>
<style lang="scss" scoped>
.title {
  color: red;
  span {
    color: green;
  }
}
.create {
  span {
    color: red;
  }
}
</style>

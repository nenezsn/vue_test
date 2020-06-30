
<template>
  <div id='1'>
    <!-- v-model -->
    <div>
      mac:
      <input v-model="mac">
    </div>
    <!-- v-model的另一种实现 -->
    <div>
      iphone:
      <input :value="iphone" @input="iphone = $event.target.value">
    </div>
    <!-- 组件绑定v-model -->
    <a-com v-model="title"/>
    <!-- <a-com :value='title' @input='title = $event'/> -->
    <!-- 计算属性 -->
    <div>total:{{totalPrice}}</div>
    <!-- filter -->
    <div>{{content | Upcase}}</div>
    <!-- 自定义指令 -->
    <span v-insert v-if='domshow'>插入</span><button @click='domshow = ! domshow'>{{domshow ? '隐藏' : '显示'}}</button>
    <!-- 普通事件 -->
    <span>{{count}}</span>
    <button @click="count+=1">加</button>
    <!-- 阻止时间冒泡 -->
    <span @click="count-=1">
      <button @click.stop="sub(1,$event)">减</button>
    </span>
    <!-- 样式 -->
    <div>
      <div :class="{active:isActive}" :style="{'font-size':'16px'}">样式</div>
      <button @click="isActive = !isActive">切换</button>
    </div>
    <!-- v-if key -->

    <template v-if="loginType === 'username'">
      <label>Username</label>
      <input placeholder="Enter your username" :key="count">
    </template>
    <template v-else>
      <label>Email</label>
      <input placeholder="Enter your email address" key="email">
    </template>
    <button @click="loginType = loginType == 'username' ? 'email' : 'username'">切换</button>
    <!-- v-show -->
    <div>
      <span v-show="show">测试v-show</span>
      <button @click="show = !show ">{{show?'隐藏':'显示'}}</button>
    </div>
    <!-- 循环渲染 -->
    <ul>
      <li v-for="(item,index) in list" :key="index">姓名：{{item.name}} 年龄{{item.age}}</li>
    </ul>
    <!-- sync语法糖 同1效果一样 -->
    <!-- <c-com :title = 'title' @update:title='title = $event'/> -->
    <c-com :title.sync="title"/>
    <!-- (camelCase vs kebab-case) -->
    <b-com post-title="王冰" :count="1"/>
    <!-- keep-alive -->
    <div>
      <keep-alive>
        <component :is="currentCom" postTitle="B" count="2"/>
      </keep-alive>
      <button @click="currentCom = 'a-com'">a</button>
      <button @click="currentCom = 'b-com'">b</button>
      <button @click="currentCom = 'c-com'">c</button>
    </div>
    <!-- 数组和对象响应式处理 -->
    <div>
      <span v-for="(item) in numbers" :key="item">{{item}}</span>
      <button @click="fixArray">修改数组</button>
      <span>{{info.name}}-{{info.age}}</span>
      <button @click="addProperty">增加对象属性</button>
      <button @click="removeProperty">删除对象属性</button>
    </div>
    <!-- ref使用（和react一样 或者真实dom或者组件实例） -->
    <div>
      <span ref="dom">通过ref获取dom</span>
      <button @click="getDom">操作dom</button>
      <d-com ref="dcom"></d-com>
      <button @click="getdcom">操作组件dom</button>
    </div>
    <!-- $on $emit -->
    <div>
      <button @click="handleOnEvent">监听</button>
      <button @click="$emit('msg',1)">触发</button>
      <button @click="handleCloseEvent">关闭</button>
    </div>
    <!-- vue不会代理_ $开头的property 需使用$data.[property] -->
    <div>{{$data._title}}</div>

  </div>
</template>

<script>
import mix from '../minin.js'

const comA = {
  props: ['value'],
  template: `<input :value='value' @input="$emit('input',$event.target.value)"/>`
}
const comB = {
  // 在 JavaScript 中是 camelCase 的
  props: ['postTitle', 'count'],
  // props: {
  //   postTitle: String,
  //   count:String
  // },
  // props: {
  //   postTitle: {
  //     type: String,
  //     default: '哈哈',
  //     // validator: function (value) {
  //     //   // 这个值必须匹配下列字符串中的一个
  //     //   return ['哈哈', '嘿嘿'].indexOf(value) !== -1
  //     // }
  //   },
  //   post: {
  //     type: Object,
  //     // 对象或数组默认值必须从一个工厂函数获取 防止意外引用问题
  //     default: function () {
  //       return { message: 'hello' }
  //     }
  //   }
  // },
  template: '<h3>{{ postTitle }}</h3>'
}
const comC = {
  props: ['title'],
  template: '<input @input="change"/>',
  methods: {
    change(e) {
      this.$emit('update:title', e.target.value)
    }
  }
}
const comD = {
  data() {
    return {
      count: 1
    }
  },
  methods: {
    add() {
      this.count += 1
    },
    handleParentEvent(){
      this.$parent.log()
    }
  },
  template: `<div>
  <button @click="add">加{{count}}</button>
  <button @click="handleParentEvent">this.$parent</button>
  </div>`
}

// 基本用法
export default {
  mixins:[mix],
  data() {
    return {
      _title:'haha',
      title: '组件model',
      content: 'abcd',
      mac: 100,
      iphone: 50,
      count: 0,
      show: true,
      list: [{ name: '张三', age: 12 }, { name: '李四', age: 16 }],
      isActive: true,
      loginType: 'username',
      currentCom: 'a-com',
      numbers: [15, 16, 17],
      info: {
        name: '王冰'
      },
      domshow:true
    }
  },
  methods: {
    sub(val, e) {
      this.count -= val
    },
    fixArray() {
      // vue重写了数组的一些方法
      this.$set(this.numbers, 0, 12)
      // this.numbers.splice(0,1,12)
      // this.numbers.push(19)
    },
    addProperty() {
      this.$set(this.info, 'age', 16)
    },
    removeProperty() {
      this.$delete(this.info, 'age')
    },
    getDom() {
      this.$refs.dom.style.color = 'red'
    },
    getdcom() {
      this.$refs.dcom.add()
      // this.$children[4].add()
    },
    handleOnEvent() {
      this.$on("msg", msg => {
        console.log("创建阶段监听，同watch", msg);
      });
    },
    handleCloseEvent() {
      this.$off("msg")
    },
    log(){
      alert('1')
    }
  },
  computed: {
    totalPrice() {
      return Number(this.mac) + Number(this.iphone)
    }
  },
  watch: {
    totalPrice: function (newValue, oldValue) {
      console.log('合计发生变化', oldValue + '=>' + newValue)
    },
    info: {
      handler(a) {
        console.log('监听info', a)
      },
      immediate: false, //watch再初始化阶段是不执行的 写成handler 和 immediate 的形式 会执行一次
      deep: true //这条属性可以帮助你监测 status内部的属性变化（当status是一个对象的时候）
    }
  },
  filters: {
    Upcase: function (value) {
      return value ? value.toString().toLocaleUpperCase() : ''
    }
  },
  directives: {
    'insert': {
      bind: function () { console.log('bind') },
      inserted: function () { console.log('inserted')  },
      update: function () { console.log('update')  },
      componentUpdated: function () { console.log('componentUpdated')  },
      unbind: function () { console.log('unbind')  }
    }
  },
  components: {
    'a-com': comA,
    'b-com': comB,
    'c-com': comC,
    'd-com': comD
  },
  mounted(){
  }
}
</script>

<style>
.active {
  color: red;
}
</style>


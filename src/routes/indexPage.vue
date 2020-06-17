
<template>
  <div>
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
    <c-com :title.sync='title'/>
    <!-- (camelCase vs kebab-case) -->
    <b-com post-title="王冰" :count="1"/>
    <!-- keep-alive -->
    <keep-alive>
      <component :is='crrentCom' postTitle='B' count='2'/>
    </keep-alive>
    <button @click="crrentCom = 'a-com'">a</button>
    <button @click="crrentCom = 'b-com'">b</button>
    <button @click="crrentCom = 'c-com'">c</button>
  </div>
</template>

<script>

const comA = {
  props: ['value'],
  template: `<input :value='value' @input="$emit('input',$event.target.value)"/>`
}
const comB = {
  // 在 JavaScript 中是 camelCase 的
  props: ['postTitle', 'count'],
  // props: {
  //   postTitle: String
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
  template: '<h3>{{ postTitle }}</h3>',
  mounted() {
    console.log(typeof this.count)
  },
}
const comC={
  props:['title'],
  template:'<input @input="change"/>',
  methods:{
    change(e){
      this.$emit('update:title',e.target.value)
    }
  }
}

// 基本用法
export default {
  data() {
    return {
      title: '组件model',
      content: 'abcd',
      mac: 100,
      iphone: 50,
      count: 0,
      show: true,
      list: [{ name: '张三', age: 12 }, { name: '李四', age: 16 }],
      isActive: true,
      loginType: 'username',
      crrentCom:'a-com'
    }
  },
  methods: {
    sub(val, e) {
      this.count -= val
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
    }
  },
  filters: {
    Upcase: function (value) {
      return value ? value.toString().toLocaleUpperCase() : ''
    }
  },
  components: {
    'a-com': comA,
    'b-com': comB,
    'c-com':comC
  }
}
</script>

<style>
.active {
  color: red;
}
</style>


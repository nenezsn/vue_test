<template>
  <div>
    <a-component @aConfirm="log" title="对象声明方式创建组件"/>
    <b-component name="插槽">
      <div slot="header">这个是头部</div>
      <div>父级作用域count{{count}}</div>
      <div slot-scope="slotProps">{{slotProps.user}}</div>
    </b-component>
    <c-component color="red"/>
    <component :is="cureentComponent" @aConfirm="log" title="对象声明方式创建组件"/>
    <!-- 默认作用域根节点 -->
    <e-component @focus.native="onFocus"/>
    <!-- 可以被 this.$listeners 监听到 -->
    <e-component @focus="onFocus"/>
    <!-- jsx -->
    <f-component :count="0"/>
    <!-- new Component -->
    <div id="target"></div>
    <!-- 函数式组件 -->
    <h-component title="你好" @reflash="handleFlash">222</h-component>
  </div>
</template>

<script>
import Vue from 'vue'
// 插槽
import Container from '../components/container'
// 对象声明
var componentA = {
  props: ['title', 'confirm'],
  template: `<button @click="$emit('aConfirm','对象声明')">{{title}}</button>`
}

// 方法3(注册全局组件)
Vue.component('c-component', {
  // 可以避免非html属性默认绑定在根元素上，$attrs保存的是除props和html自身属性之外的属性
  inheritAttrs: false,
  data: function () {
    return {
      count: 0
    }
  },
  mounted() {
    console.log('this.$attrs', this.$attrs)
  },
  template: `<button v-on:click="count++"><span v-bind='$attrs'>You clicked me {{ count }} times.</span></button>`
})

// 测试绑定事件
const componentE = {
  template: '<div><input v-on="$listeners"/></div>',
}
// jsx
var componentF = {
  props: ['count'],
  data: function () {
    return {
      num: this.count
    }
  },
  methods: {
    add: function () {
      this.num += 1
    },
    renderNum: function (h) {
      return <h4>{this.num}</h4>
    },

  },
  render(h) {
    // return h('h4',{
    //   style:{'color':'red'}
    // },this.num)

    return <div>
      {this.renderNum(h)}
      <button onClick={this.add}>加一</button>
    </div>;
  }
};




// new Component
var componentG = Vue.extend({
  props: ['title'],
  template: '<div>{{title}}</div>'
})

//函数式组件
var componentH = {
  functional: true,
  render(h, { props, listeners, children }) {
    return <button onClick={listeners.reflash}>{props.title}{children}</button>
  }
}

export default {
  data() {
    return {
      count: 0,
      cureentComponent: 'a-component'
    }
  },
  components: {
    'a-component': componentA,
    'b-component': Container,
    'e-component': componentE,
    'f-component': componentF,
    'h-component': componentH
  },
  methods: {
    log(value) {
      alert(value)
    },
    onFocus() {
      console.log('获取焦点')
    },
    handleFlash() {
      console.log('函数式组件触发回调')
    }
  },
  mounted() {
    new componentG({ propsData: { title: 'new出来的' } }).$mount('#target')
  }
}
</script>

<style>
.active {
  font-weight: 600;
}
</style>



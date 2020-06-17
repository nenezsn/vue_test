<template>
  <div>
    <a-component @aConfirm="log" title="对象声明方式创建组件"/>
    <b-component name="插槽">
      <div>content</div>
      <div slot="empty">插入指定slot</div>
    </b-component>
    <c-component color="red"/>
    <component :is="cureentComponent"/>
    <!-- 默认作用域根节点 -->
    <e-component @focus.native="onFocus"/>
    <!-- 可以被 this.$listeners 监听到 -->
    <e-component @focus="onFocus"/>
  </div>
</template>


<script>
import Vue from 'vue'
// 对象声明
var componentA = {
  props: ['title', 'confirm'],
  template: `<button @click="$emit('aConfirm','对象声明')">{{title}}</button>`
}
// 带插槽功能
var componentB = {
  props: ['name'],
  template: `<div>
  <h5>{{name}}</h5>
    <div>header</div>
    <slot name='empty'></slot>
    <slot></slot>
    <div>footer</div>
  </div>`
}
// 方法3(放在入口文件 可以变成全局组件)
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

const componentE = {
  // template:'<input/>',
  template: '<div><input v-on="$listeners"/></div>',
  mounted() {
    console.log('2', this.$listeners)
  },
}

export default {
  data() {
    return {
      cureentComponent: 'a-component'
    }
  },
  components: {
    'a-component': componentA,
    'b-component': componentB,
    'e-component': componentE
  },
  methods: {
    log(value) {
      alert(value)
    },
    onFocus() {
      console.log('获取焦点')
    }
  }
}
</script>

<style>
.active {
  font-weight: 600;
}
</style>



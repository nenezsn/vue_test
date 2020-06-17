<template>
  <div>
    <button :title="title" @click="add" v-once>加:{{count}}</button>
    <div v-html="content" :class="{yellow:active}"></div>
    <div>{{formateTitle}}</div>
    <div @click="listenTitle='王冰'">{{listenTitle}}</div>
    <input v-model="title">
    <ul>
      <li v-for="(a,index) in arr" :key="index">
        {{index}}:{{val}}
        <span v-if="val==1">我来了</span>
      </li>
    </ul>
    <v-a :item="haha"/>
    <wang-bing/>
    <v-b/>
    <btn/>
    <div v-wangbing>哈哈</div>
  </div>
</template>
<script>
import Vue from 'vue'
Vue.component('wang-bing', {
  template: '<div>{{name}}</div>',
  data: function () {
    return {
      name: 'wangbing'
    }
  }
})
import itemComponent from '../components/item.vue'

var ComponentA = {
  template: '<div>{{title}}</div>',
  data() {
    return {
      title: '我是一个对象而已'
    }
  }
}

export default {
  data: () => {
    return {
      title: '嘿嘿',
      count: 1,
      content: '<span>哈哈</span>',
      haha: 'asdasda',
      arr: [1, 2, 3],
      val: 123,
      active: true
    }
  },
  methods: {
    add: function () {
      this.count = this.count + 1
    }
  },
  created() {
    console.log('create')
  },
  computed: {
    formateTitle: function () {
      return this.title + '我想'
    },
    listenTitle: {
      get: function () {
        return '数据拦截' + this.title
      },
      set: function (newval) {
        console.log('2222')
        this.title = 12312312
      }
    }
  },
  components: {
    'v-a': itemComponent,
    'v-b': ComponentA
  },
  watch: {
    title: function (a, b) {
      console.log(a, b)
    }
  },
  directives: {
    wangbing: {
      // 指令的定义
      inserted: function (el) {
        console.log('el',el.value)
      }
    }
  }
}
</script>

<style scope>
.yellow {
  color: yellow;
}
</style>

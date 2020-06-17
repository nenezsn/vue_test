import Vue from 'vue'
import Router from 'vue-router'

import IndexPage from '../routes/indexPage'

import Header from '../components/layout/header'
import Footer from '../components/layout/footer'

import Component from '../routes/component'

import Vueroute from '../routes/vueroute'
import HomePage from '../routes/homepage'
import TodoList from '../routes/todoList'
import Method from '../routes/method'
import ElementComponent from '../routes/Element'

import Echarts from '../routes/Echarts'
import Demo from '../routes/demo'

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    {
      path: '/',
      component: IndexPage
    },
    {
      path: '/vueroute',
      component: Vueroute,
      //嵌套路由和路由视图
      children: [
        {
          path: '',
          components: { top: Header, foot: Footer }
        }
      ]
    },
    {
      path: '/homepage',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/TodoList',
      name: 'TodoList',
      component: TodoList
    },
    {
      path: '/Method',
      name: 'Method',
      component: Method
    },
    {
      path: '/Element',
      name: 'Element',
      component: ElementComponent
    },
    {
      path: '/Echarts',
      name: 'Echarts',
      component: Echarts
    },
    {
      path: '/Demo',
      component: Demo
    },
    {
      path:'/com',
      component:Component
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

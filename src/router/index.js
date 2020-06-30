import Vue from 'vue'
import Router from 'vue-router'

import IndexPage from '../routes/indexPage'

import Header from '../components/layout/header'
import Footer from '../components/layout/footer'
import Content from '../components/layout/content'

import Component from '../routes/component'

import Vueroute from '../routes/vueroute'
import ElementComponent from '../routes/Element'
import Vx from '../routes/vuex'
import Life from '../routes/life'

import Echarts from '../routes/Echarts'

import Test from '../routes/test'


const Todo = () => import('../routes/todolist')

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
      name:'index',
      component: IndexPage
    },
    {
      path: '/vueroute/:id',
      component: Vueroute,
      //嵌套路由和路由视图
      children: [
        {
          path: '',
          components: { top: Header, foot: Footer }
        },
        {
          path: 'dt',
          component: Content
        },
      ]
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
      path: '/com',
      component: Component
    },
    {
      path: '/Vx',
      component: Vx
    },
    {
      path: '/life',
      component: Life
    },
    {
      path:'/todo',
      component:Todo
    },
    {
      path:'/Test',
      component:Test
    },,
    {
      path: '*',
      redirect: '/'
    }
  ]
})

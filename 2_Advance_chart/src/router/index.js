import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import vue_demo from '@/components/vue_demo'
import charts_demo from '@/components/charts_demo'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/vue_demo',
      name: 'vue_demo',
      component: vue_demo
    },
    {
      path: '/charts_demo',
      name: 'charts_demo',
      component: charts_demo
    }
  ]
})

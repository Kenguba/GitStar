import Vue from 'vue'
import Router from 'vue-router'
import BlankLayout from '@/layouts/BlankLayout'
import BasicLayout from '@/layouts/BasicLayout'
import UserLayout from '@/layouts/UserLayout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'BlankLayout',
      redirect: 'BasicLayout',
      component: resolve => require(['../layouts/BlankLayout'], resolve), //懒加载BlankLayout
      children: [
        {
          path: 'BasicLayout',
          name: 'BasicLayout',
          component: resolve => require(['../layouts/BasicLayout'], resolve), //懒加载BlankLayout, //懒加载BasicLayout
        },
        {
          path: 'UserLayout',
          name: 'UserLayout',
          component: UserLayout, //懒加载UserLayout
        }
      ]
    }
  ]
})

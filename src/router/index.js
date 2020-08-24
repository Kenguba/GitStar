<<<<<<< HEAD
// import Vue from 'vue'
// import BlankLayout from '@/layouts/BlankLayout'
// import BasicLayout from '@/layouts/BasicLayout'
// import UserLayout from '@/layouts/UserLayout'
// import login from '@/page/login.vue'
// import home from '@/page/home.vue'
import Router from 'vue-router'
Vue.use('vue-router')
=======
import Vue from 'vue'
import Router from 'vue-router'
import BlankLayout from '@/layouts/BlankLayout'
import BasicLayout from '@/layouts/BasicLayout'
import UserLayout from '@/layouts/UserLayout'

Vue.use(Router)
>>>>>>> 框架设计基本完毕,等待二次开发

export default new Router({
  routes: [
    {
      path: '/',
      name: 'BlankLayout',
<<<<<<< HEAD
      redirect: 'basic/home',
      component: resolve => require(['../layouts/BlankLayout'], resolve), //懒加载BlankLayout
      children: [
        {
          path: 'basic',
          name: 'basic',
          component: () => import(/* webpackChunkName: 'ImportFuncDemo' */ '../layouts/BasicLayout'),
          redirect: 'basic/home',
          children: [
            {
              path: 'home',
              name: 'home',
              component: resolve => require.ensure([], () => resolve(require('../page/home')), 'demo1'),
              meta: {
                keepAlive: true,   //是否保存页面状态
                requireAuth: true, // 配置此条，进入页面前判断是否需要登陆
                title: '首页应用'
              },
            }
          ]
        },
        {
          path: 'user',
          name: 'user',
          component: resolve => require(['../layouts/UserLayout'], resolve),
          redirect: 'user/login',
          children: [
            {
              path: 'login',
              name: 'login',
              component: resolve => require(['../page/login'], resolve)
            },
            {
              path: 'auth_by_self',
              name: 'auth_by_self',
              component: resolve => require(['../page/auth_by_self'], resolve)
            }
          ]
=======
      redirect: 'BasicLayout',
      component: resolve => require(['../layouts/BlankLayout'], resolve), //懒加载BlankLayout
      children: [
        {
          path: 'BasicLayout',
          name: 'BasicLayout',
          component: resolve => require(['../layouts/BasicLayout'], resolve), //懒加载BlankLayout, //懒加载BasicLayout
          meta: {
            keepAlive: true,
            title: '首页应用'
          }
        },
        {
          path: 'UserLayout',
          name: 'UserLayout',
          component: UserLayout, //懒加载UserLayout
>>>>>>> 框架设计基本完毕,等待二次开发
        }
      ]
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
// import BlankLayout from '@/layouts/BlankLayout'
// import BasicLayout from '@/layouts/BasicLayout'
// import UserLayout from '@/layouts/UserLayout'
// import login from '@/page/login.vue'
// import home from '@/page/home.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'BlankLayout',
      redirect: 'basic/home',
      component: resolve => require(['../layouts/BlankLayout'], resolve), //懒加载BlankLayout
      children: [
        {
          path: 'basic',
          name: 'basic',
          component: resolve => require(['../layouts/BasicLayout'], resolve), //懒加载BlankLayout, //懒加载BasicLayout
          redirect: 'basic/home',
          children: [
            {
              path: 'home',
              name: 'home',
              component: resolve => require(['../page/home'], resolve),
              meta: {
                keepAlive: true,
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
            }
          ]
        }
      ]
    }
  ]
})

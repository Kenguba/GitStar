import Vue from 'vue'
import Router from 'vue-router'
import BlankLayout from '@/layouts/BlankLayout'
import BasicLayout from '@/layouts/BasicLayout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'BlankLayout',
      redirect: 'BasicLayout',
      component: BlankLayout,
      children: [
        {
          path: 'BasicLayout',
          name: 'BasicLayout',
          component: BasicLayout
        }]
    }
  ]
})

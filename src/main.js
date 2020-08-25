// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import './styles/index.less';
import './styles/commom.less';
import VueRouter from 'vue-router'



Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(ViewUI);

// import { Plugin } from "vue-fragments";
// Vue.use(Plugin);


// Vue.use(ViewUI, {
//   transfer: true,
//   size: 'large',
//   capture: false,
//   select: {
//     arrow: 'md-arrow-dropdown',
//     arrowSize: 20
//   }
// });



router.beforeEach((to, from, next) => {
  if (to.matched.some(res => res.meta.requireAuth)) { // 验证是否需要登陆 
    if (sessionStorage.getItem('sid')) { // 查询本地存储信息是否已经登陆 
      next();
    } else {
      // next({
      //   path: '/user/login', // 未登录则跳转至login页面 
      //   query: { redirect: to.fullPath } // 登陆成功后回到当前页面，这里传值给login页面，to.fullPath为当前点击的页面 
      // });
      console.log("你没有登陆")
      next();
    }
  } else {
    next();
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  // template: '<App/>'
  render: c => c(App)
})

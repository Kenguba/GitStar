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
Vue.use(ViewUI);
Vue.use(VueRouter) 



// Vue.use(ViewUI, {
//   transfer: true,
//   size: 'large',
//   capture: false,
//   select: {
//     arrow: 'md-arrow-dropdown',
//     arrowSize: 20
//   }
// });





/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  // template: '<App/>'
  render: c => c(App)
})

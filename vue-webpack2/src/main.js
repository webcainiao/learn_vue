// 在此可以引入css
import 'github-markdown-css'

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/'
import store from './vuex/store'
import * as filters from './utils/filter'

Vue.config.productionTip = false

//  注册全局过滤器
Object.keys(filters).map(k => Vue.filter(k, filters[k]))
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  ...App
})
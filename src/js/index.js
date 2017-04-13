import 'babel-polyfill'
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import '../scss/stylesheet.scss'

import Root from '../components/index.vue'
import routes from './routes'

const router = new VueRouter({
  mode: 'history',
  routes
})

const app = new Vue({
  router,
  render: h => h(Root),
})

document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('root') != null) {
    app.$mount('#root')
  }
})

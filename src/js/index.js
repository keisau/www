import 'babel-polyfill'
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import '../scss/stylesheet.scss'
import 'google-code-prettify/bin/prettify.min.css'
import './favicon'
import 'file-loader?name=assets/[name].[ext]!../sitemaps.txt'

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

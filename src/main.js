// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import vCode from './components/Code'

import Highlight from './highlight.js'
Vue.use(Highlight)

Vue.use(BootstrapVue)
Vue.use(VueResource)
Vue.component('v-code', vCode)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
})

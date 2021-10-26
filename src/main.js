import Vue from 'vue'
import App from './App.vue'
import './tailwind.css'
import VueRouter from 'vue-router'
import {router} from './routers'

Vue.use(VueRouter)
Vue.config.productionTip = true

new Vue({
  render: h => h(App),
  router:router
}).$mount('#app')

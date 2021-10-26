import Vue from 'vue'
import App from './App.vue'
import './tailwind.css'
import VueRouter from 'vue-router'
import {router} from './routers'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

Vue.use(VueRouter)
Vue.use(Antd);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router:router
}).$mount('#app')

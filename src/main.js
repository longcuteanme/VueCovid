import Vue from 'vue'
import App from './App.vue'
import './tailwind.css'
import VueRouter from 'vue-router'
import {router} from './routers'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import {store} from './vuex/store.js'

import ECharts from 'vue-echarts'
import { use } from 'echarts/core'

// import ECharts modules manually to reduce bundle size
import {
  CanvasRenderer
} from 'echarts/renderers'
import {
  BarChart
} from 'echarts/charts'
import {
  GridComponent,
  TooltipComponent
} from 'echarts/components'

use([
  CanvasRenderer,
  BarChart,
  GridComponent,
  TooltipComponent
]);

// register globally (or you can do it locally)
Vue.component('v-chart', ECharts)

Vue.use(VueRouter)
Vue.use(Antd);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router:router,
  store:store
}).$mount('#app')

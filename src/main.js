import Vue from 'vue'
import layout from './layout'
import router from './router'
import store from './store'
import system from 'trv-vueds'
import 'trv-vueds/dist/system.css'

Vue.use(system)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(layout)
}).$mount('#app')

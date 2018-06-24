import Vue from 'vue'
import layout from './layout'
import router from './router'
import store from './store'


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(layout)
}).$mount('#app')

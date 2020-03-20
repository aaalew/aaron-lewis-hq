import Vue from 'vue'
import App from './App.vue'
import router from './router'
import quotes from './quotes-data.js'

Vue.config.productionTip = false

let data = {
  quotes
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')

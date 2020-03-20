import Vue from 'vue'
import App from './App.vue'
import router from './router'
import quotesData from './quotes-data.js'

let data = {
  quotes: quotesData
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')

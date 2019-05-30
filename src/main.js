import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import store from './store'

import router from './router'

import Start from './components/Start.vue'



Vue.config.productionTip = false



new Vue({
  store: store, 
  router,
  render: h => h(App)
}).$mount('#app')

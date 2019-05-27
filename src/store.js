import Vue from 'vue'
import Vuex from 'vuex'
import VueQRCodeComponent from 'vue-qrcode-component'

import Axios from 'axios';

Vue.component('qr-code', VueQRCodeComponent)


Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    items: []

  },

  // no asycn kek
  mutations: {
    add_item(state, el) {
      
      state.items = (el)
    },
    getitems: async function() {
      
      this.commit('add_item', await Axios.get('localhost:1337/user'))
    },
  },

  actions: {
    
  },
  

})



import Vue from 'vue'
import Vuex from 'vuex'
import VueQRCodeComponent from 'vue-qrcode-component'

import Axios from 'axios';

Vue.component('qr-code', VueQRCodeComponent)


Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    qr: 'asdfasldkfjals;dkfjal;sdjf',
    tables: [],
    products: {
      // qr: qr,
      items: [
        { name: 'vanilla', sort: 'cold' },
        { name: 'chocolate', sort: 'cold' },
        { name: 'rasberries', sort: 'cold' },

      ],
      headers: [
        'index',
        'name',
        'sort'
      ],
    },
    menu: [
      { key: 'link 1', icon: "book", title: 'Filler' },
      { key: 'link 1', icon: "menu", title: 'Filler' },
      { key: 'link 1', icon: "share", title: 'Filler' },
    ],
    department: [
      {}
    ], 
        

       no asycn kek  
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
  getters: {
    qr: () => {return store.state.fml},
    
    GET_users: async () => {return await Axios.get('localhost:1337/GET_users')}
  },
  
})



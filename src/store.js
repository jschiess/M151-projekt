import Vue from 'vue'
import Vuex from 'vuex'
import VueQRCodeComponent from 'vue-qrcode-component'
import Axios from 'axios';


Vue.component('qr-code', VueQRCodeComponent)


Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    qr: 'asdfasldkfjals;dkfjal;sdjf',
    game_state: 1,
    // game_state 1 not active
    // 2: active
    // 3: paused
    // 4 stopped
    

    tables: [],
    users: [
      {name: 'holo', progress: 10},
      {name: 'hoslo', progress: 10},
    ],
    menu: [
      { key: 'link 1', icon: "book", title: 'Filler' },
      { key: 'link 1', icon: "menu", title: 'Filler' },
      { key: 'link 1', icon: "share", title: 'Filler'},
    ],
    department: [
      {}
    ],}, 
        
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
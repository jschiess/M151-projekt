import Vue from 'vue'
import Vuex from 'vuex'
import VueQRCodeComponent from 'vue-qrcode-component'
import QrcodeVue from 'qrcode.vue';
import Axios from 'axios';
Vue.component('qrcode.vue', QrcodeVue)
Vue.component('qr-code', VueQRCodeComponent)


Vue.use(Vuex)


var store = new Vuex.Store({
  state: {
    qr: 'asdfasldkfjals;dkfjal;sdjf',
    tables: [],
    products: {
      // qr: qr,
      items: [
        {name: 'vanilla', sort: 'cold'},
        {name: 'chocolate', sort: 'cold'},
        {name: 'rasberries', sort: 'cold'},

      ],
      headers: [
        'index',
        'name',
        'sort'
      ],
    },
    menu: [
      {key: 'link 1', icon: "book", title: 'Filler'},
      {key: 'link 1', icon: "menu", title: 'Filler'},
      {key: 'link 1', icon: "share", title: 'Filler'},
    ],
    department: [
      {}
    ]

  },
  mutations: {
    update: function(e) {
      store.state.tables = e
    }

  },
  actions: {
    
  },
  getters: {
    qr: () => {return store.state.fml},
    
    GET_users: async () => {return await Axios.get('localhost:1337/GET_users')}
  },
  
})


export default store

<template>
  <v-container >
    <v-layout row wrap>
      <v-flex >
        <v-text-field
        v-model="kek"
        ></v-text-field>


        <!-- <v-data-table
          :items="items"
          hide-actions
          class="elevation-1"
        >
          <template slot="items" slot-scope="props">
            <td>{{ props.item.key }}</td>
            <td class="text-xs-right">{{ props.item }}</td>
            <td class="text-xs-right">{{ props.item }}</td>
            <td class="text-xs-right">{{ props.item }}</td>
            <td class="text-xs-right">{{ props.item }}</td>
          </template>
        </v-data-table> -->

        {{ test }}


      </v-flex>
    </v-layout>
    
  </v-container>

        <!-- <qr-code 
    v-bind:text="kek"
    
    size="500"
    error-level="L">
</qr-code> -->
</template>
<script>
import store from '../store'
import Axios from 'axios'
import { log } from 'util';


async function getrequest() {
        
  
  var getstuff = await Axios.get('http://localhost/user')

  store.commit('update', getstuff.data)

    Vue.set() 
  
  
}
// store.mutaions.kys()
getrequest()



let app = {
  data () {
    return {
      // qr: qr,
      kek: 'kek',
      items: [
        'kek',
        'kek',
        'kek',
      ],
      test: 'asdf'
    }
  },
  methods: {

    kek: async function() {
      this.test = 'kealsdkjflasdjf;lasd lkfdajvakdfgadg;ljfdgj'
    
    }
  },
}

export default app

</script>

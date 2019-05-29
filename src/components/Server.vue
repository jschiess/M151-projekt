<template >
  <v-app >
    <v-toolbar  color="primary lighten-1" dark>
      <v-toolbar-title class="headline text-uppercase">
        <h1>

        <span>TFbern</span>
        <span class="font-weight-light"> Quiz </span>
        </h1>
      </v-toolbar-title>
      <v-toolbar-items>
        <v-btn color="secondary" flat disabled>informatik Abteilung</v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <h1 class="display-1 font-weight-light">www.tfbern.ch </h1>

    </v-toolbar>

    <v-tabs
      v-model="value"
      color="primary"
      dark
      slider-color="red"
    >
      <v-tab ripple>
        Start screen
      </v-tab>

      <v-tab-item lazy>
        <Start/>
      </v-tab-item>
      
      <v-tab ripple>
        this is tab
      </v-tab>
      
      <v-tab-item lazy>
        <Score/>
      </v-tab-item>

      <v-tab >
        tab3
      </v-tab>
      <v-tab-item>
        <v-flex xs12 pa-5>

        <v-data-table
          :headers="headers"
          :items="items"
          hide-actions
          class="elevation-1"
        >
          <template slot="items" slot-scope="props">
            <td>{{ props.item.key }}</td>
            <td class="text-xs-right">{{ props.item.player }}</td>
          </template>
        </v-data-table>

          
        </v-flex>
      </v-tab-item>

      <v-tab>
        kek
      </v-tab>
      <v-tab-item>
        
        
      </v-tab-item>
    </v-tabs>
  <v-spacer></v-spacer>

    

  <v-footer  class="pa-3 primary lighten-3 " dark>
    <v-spacer></v-spacer>
    <div>&copy; {{ new Date().getFullYear() }}</div>
  </v-footer>
  </v-app>
  
</template>
<script>

import Start from './Start'
import Score from './Score'


export default {
  name: "App",
  components: {
    Start,
    Score
  },
  data() {
    return {
      value: true,
      search: '',
      items: [
        {text: 'itesm', key: 1,  player: 'holo'},
        {text: 'itesm', key: 2,  player: 'saba'},
        {text: 'itesm', key: 3,  player: 'sabr'},
        {text: 'itesm', key: 4,  player: 'archer'},
        {text: 'itesm', key: 5,  player: 'john'},
      ],
      headers: [
        {text: 'number'},
        {text: 'play'},
      ]
      
    }
  }
};
</script>

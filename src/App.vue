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
      slider-color="primary"
    >
      <v-tab ripple>
        tabText
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

    </v-tabs>
  <v-spacer></v-spacer>

    

  <v-footer  class="pa-3 primary lighten-3 " dark>
    <v-spacer></v-spacer>
    <div>&copy; {{ new Date().getFullYear() }}</div>
  </v-footer>
  </v-app>
  
</template>

<script>
import Start from './components/Start'
import Score from './components/Score'


export default {
  name: "App",
  components: {
    Start,
    Score
  },
  data() {
    return {
      value: true
      
    }
  }
};
</script>

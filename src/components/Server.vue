<template >
  <v-app>
    <v-toolbar color="primary lighten-1" dark>
      <v-toolbar-title class="headline text-uppercase">
        <h1>
          <span>TFbern</span>
          <span class="font-weight-light">Quiz</span>
        </h1>
      </v-toolbar-title>
      <v-toolbar-items>
        <v-btn color="secondary" flat disabled>informatik Abteilung</v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <h1 class="display-1 font-weight-light">www.tfbern.ch</h1>
    </v-toolbar>

    <v-tabs v-model="value" color="primary" dark slider-color="red">
      <v-tab ripple>Start screen</v-tab>

      <v-tab-item lazy>
        <Start/>
      </v-tab-item>

      <v-tab ripple>this is tab</v-tab>

      <v-tab-item lazy>
        <Score/>
      </v-tab-item>

      <v-tab>kek</v-tab>
      <v-tab-item>
        <v-container fluid justify-center>
            <v-layout justify-center align-center>
              <v-flex xs6>
                <v-card>
                  <v-layout row wrap>
                    
                  <v-flex xs6 v-for="user in users" :key="user">
                   <h3>Users</h3>                 
                  </v-flex>
                  <v-flex xs6 v-for="user in users" :key="user">
                   <h3>Progress</h3>              
                  </v-flex>
                  </v-layout>
                </v-card>
                <v-card>
                  <v-layout row wrap>
                    
                  <v-flex xs6 v-for="user in users" :key="user">
                    {{ user.name }}                    
                  </v-flex>
                  <v-flex xs6 v-for="user in users" :key="user">
                    {{ user.progress }}                    
                  </v-flex>
                  </v-layout>
                </v-card>
              </v-flex>
            </v-layout>
        </v-container>
      </v-tab-item>
    </v-tabs>
    <v-spacer></v-spacer>

    <v-footer class="pa-3 primary lighten-3" dark>
      <v-spacer></v-spacer>
      <div>&copy; {{ new Date().getFullYear() }}</div>
    </v-footer>
  </v-app>
</template>
<script>
import Start from "./Start";
import Score from "./Score";

export default {
  name: "App",
  components: {
    Start,
    Score
  },
  data() {
    return {
      value: 2,
      search: "",
      items: [
        { text: "itesm", key: 1, player: "holo" },
        { text: "itesm", key: 2, player: "saba" },
        { text: "itesm", key: 3, player: "sabr" },
        { text: "itesm", key: 4, player: "archer" },
        { text: "itesm", key: 5, player: "john" }
      ],
      headers: [{ text: "number" }, { text: "play" }]
    };
  },
  computed: {
    users() {
      return this.$store.state.users;
    }
  }
};
</script>

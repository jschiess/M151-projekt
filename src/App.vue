<template>
  <v-app >
    <v-toolbar color="primary" dark fluid app>
      <!-- <v-menu   top offset-y>
          <v-btn dark slot="activator" fab flat><v-icon fab>menu</v-icon></v-btn>
          <v-list>
            <v-list-tile v-for="item in items" :key="item.key" @click="">
              <v-list-tile-title>{{ item.key }}</v-list-tile-title>
            </v-list-tile>
          </v-list>
      </v-menu>-->

      <v-btn fab flat dark @click="kek = true">
        <v-icon>menu</v-icon>
      </v-btn>
      <v-toolbar-title>
        <h2 class="font-weight-light">TF Inventar</h2>
      </v-toolbar-title>
      <v-toolbar-items>
        <v-btn color="secondary" flat disabled>informatik Abteilung</v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn flat>Department</v-btn>
        <v-btn flat>Link Two</v-btn>
        <v-btn flat>Link Three</v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-content>
      <HelloWorld/ vb>
    </v-content>

    <v-navigation-drawer temporary absolute v-model="kek" >
      <v-toolbar dark flat class="transparent" color="primary">
        <v-list class="pa-0" >
          <v-list-tile avatar >

            <v-list-tile-avatar >
              <!-- <img src="src"> -->
              <v-icon>face</v-icon>


              
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>Text</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-toolbar>

      <v-list class="pt-0">
        <v-list-tile v-for="item in items" :key="item">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import "./store";
export default {
  name: "App",
  components: {
    HelloWorld
  },
  data() {
    return {
      kek: true
    };
  },
  computed: {
    items() {
      return this.$store.state.menu;
    }
  }
};
</script>

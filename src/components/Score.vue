<template >
  <v-container xs6>
    <v-card>
      <v-container grid-list-xs>

        <v-layout row wrap justify-center align-center>
          <v-flex xs2>
            <h2>Users</h2>
          </v-flex>
          <v-flex xs10>
            <h2>Progress</h2>
            
            <v-flex
              v-if="border > 0"
              style="background-color: red; color:red"
              v-bind:style="{'width': border + '%'}"
            >_</v-flex>
          </v-flex>
        </v-layout >
        <v-divider ></v-divider>
        <v-layout justify-center align-center wrap row xs7 v-for="(user, n) in users" :key="n">
          <v-flex xs2><h3>{{ user.nick }}</h3> </v-flex>
          

          <v-flex xs10>
            <v-layout justify-start>
              <v-flex xs12>
                <v-flex
                  absolute
                  v-bind:style="{'width': user.correct * step + '%'}"
                  style="background-color: green; color: green "
                >a</v-flex>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
import axios from "axios";
import Vue from "vue";

export default {
  components: {},
  data() {
    return {
      border: 0,
      users: {}, // all active users
      step: 0
    };
  },
  methods: {
    start_game: async () => {
      var res = await axios.get("/api/game/change_isactive");
    }
  },
  async created() {
    let result = await axios.get(`/api/quiz/1/questions`);
    this.step = 100 / result.data[0].length;

    this.__interval = setInterval(async () => {
      // console.log("kys");
      let res = await axios.get("/api/kek");
      console.log(this.border);
      Vue.set(this, "border", res.data.kek);
      let user = await axios.get("/api/quiz/active_users");
      console.log(user);
      Vue.set(this, "users", user.data);
    }, 1000);
  },
  destroyed() {
    clearInterval(this.__interval);
  }
};
</script>

<template >
  <v-container xs6>
    <v-flex xs12>
      <!-- <v-btn color="success" @click="start_game()">Pause</v-btn>
      -->
      <v-btn color="success" @click="why">text</v-btn>
    </v-flex>
    <v-layout justify-center align-center wrap row xs7 v-for="(user, n) in users" :key="n">
      <v-flex xs2>{{ user.nick }}</v-flex>

      <v-flex xs10>
        <v-layout justify-start>
          <v-flex xs12>
            <v-flex style="background-color: red; " v-bind:style="{'width': border + '%'}">s</v-flex>

            <v-flex
              absolute
              v-bind:style="{'width': users[n].correct * step + '%'}"
              style="background-color: green; "
            >a</v-flex>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
// import { GChart } from "vue-google-charts";
import axios from "axios";
import Vue from "vue";

export default {
  components: {},
  data() {
    return {
      btn: {
        col: "",
        val: "",
        meth: ""
      },

      border: 20,
      kek: 10,
      value: true,
      col: "red",
      d: 56,
      users: {},
      step: 0
    };
  },
  methods: {
    start_game: async () => {
      var res = await axios.get("/api/game/change_isactive");

      console.log(res.data);
    },
    async why() {}
  },
  async created() {
    

    let result = await axios.get(`/api/quiz/1/questions`);
    this.step = 100 / result.data[0].length;

    this.__interval = setInterval(async () => {
      
      console.log("kys");
    let res = await axios.get("/api/kek");
    console.log(this.border);
    Vue.set(this, "border", res.data.kek);
      let user = await axios.get("/api/quiz/active_users");
      Vue.set(this, "users", user.data);

      let test = await axios.get("/api/game/catchedbyborder");
      console.log(test);

      // console.log('kys');
      // let res = await axios.get('/api/kek')
      // console.log(this.border);
      // Vue.set(this, "border", res.data.kek)
    }, 1000);
  },
  destroyed() {
    clearInterval(this.__interval);
  }
};
</script>

<template >
  <v-container xs6>
    <v-layout justify-center align-center wrap row xs7 v-for="(user, n) in users" :key="n">
      <v-flex xs2>{{ user.nick }}</v-flex>
      
      <v-flex xs10>
        <v-layout justify-start >
          <v-flex xs12 >
            <v-flex v-bind:class="'xs' + lol" style="background-color: red;">s</v-flex>
            <v-flex v-bind:class="'xs' + users[n].correct" style="background-color: green">a</v-flex>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
// import { GChart } from "vue-google-charts";
import axios from 'axios'
import Vue from 'vue'

export default {
  components: {
    
  },
  data() {
    return {
      lol: 1,
      kek: 10,
      value: true,
      col: "red",
      d: 56,
      users: {},
      total: '',
      step: this.total/12,

    }
  },
  methods: {
    
  },
  async created () { 
    let result = await axios.get(`/api/quiz/1/questions`);
    this.total = result.data


    this.__interval = setInterval( async() => {
      let user = await axios.get("/api/quiz/users");
      Vue.set(this, 'users', user.data)

      if(this.lol < 12) {
        this.lol+= 1

      } else {
        this.lol = 0
      }
        
    }, 1000);
  }
};
</script>


<template>
  <v-app>
    <template v-if="loss"> you have lost</template>
    
    <template v-else>
      <v-content grid-list-xs v-if="timeout" >
        {{ timeout }}
        <v-container grid-list-xs fill-height fluid>
          

        <v-layout row wrap justify-center align-center>
            <v-flex xs12 d-flex>
               

            <v-progress-circular large indeterminate></v-progress-circular>
            
            </v-flex>
          </v-layout>
        
        </v-container>
      </v-content>


      <v-content v-else>
        <v-container pa-0 fill-height fluid v-if="active">

          <v-layout row wrap v-if="state != 2" justify-center align-center>
            <v-flex xs12 d-flex>
               

            <v-progress-circular large indeterminate></v-progress-circular>
            
            </v-flex>
          </v-layout>

          <v-layout row wrap v-else>
            <v-flex xs12>
              <v-toolbar color="primary" dark hover large>
                <v-toolbar-title class="test-align-center">
                  <h1>{{ quiz[index].question }}</h1>
                </v-toolbar-title>
              </v-toolbar>
            </v-flex>
            <v-flex xs6 v-for="(item, n ) in quiz[index].answers" :key="n">

              <v-card flat v-bind:style="val[n]" id="box" dark @click="POST_answer(n)">
                <v-layout fill-height row wrap>
                  <v-flex xs12 d-flex >
                    <v-spacer></v-spacer>
                    
                    <!-- <v-icon large dark>{{ obj[n] }}</v-icon> -->
                    <span d-flex>
                    </span>
                    <v-flex xs12>
                      <h1>{{ item.answer}} </h1>
                    </v-flex>
                   
                    <v-spacer></v-spacer>
                  </v-flex>
                </v-layout>
              </v-card>

            </v-flex>
          </v-layout>
        </v-container>

        <v-container fluid fill-height v-else>
          <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
              <v-card class="elevation-12">
                <v-card-text>
                  <v-text-field
                    prepend-icon="person"
                    name="Username"
                    label="Username"
                    type="text"
                    v-model="user"
                  ></v-text-field>
                  <!-- <v-text-field id="password" prepend-icon="lock" name="password" label="Password" type="password"></v-text-field> -->
                  <v-btn @click=" check_user()" color="primary">Go!</v-btn>
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
    </template>
  </v-app>
</template>

<script>
import axios from "axios";
import Vue from 'vue'

export default {
  data() {
    return {
      active: false,
      user: "testuser",
      loss: false,
      timeout: 0,
      userID: 0,
      frage: "this is question",
      quiz: {},
      state: false,
      index: 0,
      obj: ["share", "pause", "stop", "thumb_up"],
      val: [
        {
          backgroundColor: "darkblue"
        },
        {
          backgroundColor: "green"
        },
        {
          backgroundColor: "orange"
        },
        {
          backgroundColor: "yellow"
        }
      ]
    };
  },
  methods: {
    // checks if the username is alredy taken
    async check_user() {
      
      // gets list of all user names
      let users = await axios.get(`/api/users`);
        console.log(users.data)

      var res = true;
      // for each user 
      users.data.forEach(el => {
        if (el.nick == this.user) {

          alert('Name schon genommen.')

          res = false;
        }
      });

      // if the username is not taken
      if (res) {

        var user = {
          "nick": this.user
        }

        let result = await axios.post('/api/quiz/user', user )

        this.userID = result.data[0]
        console.log(result)
        this.active = true;
        // goes to the quiz

      }
    },
    async POST_answer(el) {
      // this.timeout = 2 



      if(this.quiz[this.index]){
      // console.log(el)

      var answer = this.quiz[this.index].answers[el]

      console.log(this.quiz[this.index].answers[el])

      var obj = {
        "user_id": this.userID,
        "answer_id": answer.answer_id, 
    }

      console.log(obj);
      

      var result = await axios.post('/api/quiz/useranswer', obj)
      
      console.log(this.quiz[this.index] != [])

        this.index++
      } else {
          alert('ur')
          this.active = 0
      }


      if(!(this.quiz[this.index])) {
        clearInterval(this.__interval)
        this.active = 0
        alert('quiz is over')
      }

      console.log(result);
      




      
    },
    async GET_question_answers() {}
  },
  async created() {
    let temp = await axios.get(`/api/quiz/1/questions`);
    console.log(temp.data);
    
    this.quiz = temp.data[0]

    
    this.__interval = setInterval( async() => {
      let kek = await axios.get('/api/game/get_gameState');
      console.log(kek);

      Vue.set(this, 'state', kek.data[0])

      if(this.timeout > 0) {
        this.timeout-= 1
      }


      // should check if the user has lost
/// does not work yet

      // var result = await axios.get('/api/quiz/active_users')

      // var work = false
      // result.data.forEach(el => {
      //   if(el.nick === this.user) {
      //     console.log(el);
          
      //     work = true
      //   } 
      // });

      // if(!work) {
      //   // this.loss = true
      // }

    }, 1000);
  },
  destroyed() {
    clearInterval(this.__interval)
  }
};


var userID = {};
</script>


<style>
#box {
  height: 47vh;
}
</style>
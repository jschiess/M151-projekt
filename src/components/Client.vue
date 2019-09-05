
<template>
  <v-app>
    <template v-if="loss">
      <v-layout row wrap justify-center align-center>
        <v-flex xs12 d-flex>
          <h2>YOU HAVE LOST</h2>
        </v-flex>
      </v-layout>
    </template>

    <template v-else>
      <v-content grid-list-xs v-if="timeout">
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
            <v-flex xs12></v-flex>
          </v-layout>

          <v-layout row wrap v-else>
            <v-toolbar color="white" fixed hover fluid style="z-index: 999">
              <v-spacer></v-spacer>
              <h1>{{ quiz[index].question }}</h1>
              <v-spacer></v-spacer>
            </v-toolbar>
            <v-flex xs6 v-for="(item, n ) in quiz[index].answers" :key="n">
              <v-card flat v-bind:style="val[n]" id="box" dark @click="POST_answer(n)" hover>
                <v-container fill-height fluid>
                  <v-flex align-content-center>
                    <h2>{{ item.answer }}</h2>
                  </v-flex>
                </v-container>
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
import Vue from "vue";

export default {
  data() {
    return {
      active: false,
      user: "",
      loss: false, // toggle loss screen
      timeout: 0,
      userID: 0,
      quiz: {}, // quiz object
      state: 0, // the state of the game 2 = running 1 = waiting 3 = paused
      index: 0,
      obj: ["share", "pause", "stop", "thumb_up"],
      val: [
        {
          backgroundColor: "#0767E8"
        },
        {
          backgroundColor: "#E515FF"
        },
        {
          backgroundColor: "#E85707"
        },
        {
          backgroundColor: "#FFC70D"
        }
      ]
    };
  },
  methods: {
    // checks if the username is alredy taken
    async check_user() {
      // gets list of all user names
      let users = await axios.get(`/api/users`);
      // console.log(users.data);

      var res = true;
      // for each user
      users.data.forEach(el => {
        if (el.nick == this.user) {
          alert("Name schon genommen.");

          res = false;
        }
      });

      // if the username is not taken
      if (res) {
        var user = {
          nick: this.user
        };

        let result = await axios.post("/api/quiz/user", user);

        this.userID = result.data[0];
        this.active = true;
        // goes to the quiz
      }
    },
    async POST_answer(el) {
      this.timeout = 2;

      if (this.quiz[this.index]) {
        var answer = this.quiz[this.index].answers[el];
        var obj = {
          user_id: this.userID,
          answer_id: answer.answer_id
        };

        await axios.post("/api/quiz/useranswer", obj);

        this.index++;
      } else {
        alert("quiz is over");
        this.active = 0;
        this.timeout = 0;
        this.gamestate = 0;
        clearInterval(this.__interval);
      }

      if (!this.quiz[this.index]) {
        clearInterval(this.__interval);
        this.active = 0;
        this.timeout = 0;
        this.gamestate = 0;
        alert("quiz is over");
      }
    },
    async GET_question_answers() {}
  },
  async created() {
    let temp = await axios.get(`/api/quiz/1/questions`);
    // this.quiz = [
    //   {
    //     question: "is u dump?",
    //     question_id: 1,
    //     answers: [
    //       {
    //         answer: "yes",
    //         is_correct: true,
    //         answer_id: 1
    //       },
    //       {
    //         answer: "no",
    //         is_correct: false,
    //         answer_id: 2
    //       },
    //       {
    //         answer: "maybe",
    //         is_correct: false,
    //         answer_id: 2
    //       },
    //       {
    //         answer: "kek",
    //         is_correct: false,
    //         answer_id: 2
    //       },
    //     ]
    //   },
    //   {
    //     question: "what u looking at son",
    //     question_id: 1,
    //     answers: [
    //       {
    //         answer: "yes",
    //         is_correct: true,
    //         answer_id: 1
    //       },
    //       {
    //         answer: "no",
    //         is_correct: false,
    //         answer_id: 2
    //       }
    //     ]
    //   }
    // ];
    this.quiz = temp.data[0];

    this.__interval = setInterval(async () => {
      let kek = await axios.get("/api/game/get_gameState");

      // console.log(kek);

      Vue.set(this, "state", kek.data[0]);

      if (this.timeout > 0) {
        this.timeout -= 1;
      }

      // should check if the user has lost
      /// does not work yet

      if (this.state === 2 && this.active && this.index > 0) {
        var result = await axios.get("/api/quiz/active_users");
        // var result = { data: ["true"] };
        // console.log(result.data);
        if (result.data.length === 0) {
          this.loss = true;
        } else {
          var work = false;
          result.data.forEach(el => {
            // console.log(el.nick, this.user);
            // console.log(this.status);
            // console.log(el.nick === this.user && this.state === 2);
            if (el.nick === this.user && this.state === 2) {
              // console.log(el);

              work = true;
            }
          });

          if (!work) {
            this.loss = true;
          }
        }
      }
    }, 1000);
  },
  destroyed() {
    clearInterval(this.__interval);
  }
};
</script>


<style>
h2 {
  text-align: center;
}
h1 {
  font-size: auto;
}
#box {
  min-height: 100%;
}
</style>
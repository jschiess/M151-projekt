<template>
	<v-container pa-0 fill-height fluid >


          <v-layout row wrap >
            <v-flex xs12>
              <v-toolbar color="primary" dark hover large>
                <v-toolbar-title class="test-align-center">
                  <h1>qyestion</h1>
                </v-toolbar-title>
              </v-toolbar>
            </v-flex>
            <v-flex xs6 v-for="n in [1,2,3,4]" :key="n">
              <v-card flat v-bind:style="{ 'background-color': 'red'}" id="box" dark @click="POST_answer(n)">
                <v-layout fill-height row wrap>
                  <v-flex xs12 d-flex>
                    <v-spacer></v-spacer>

                    <!-- <v-icon large dark>{{ obj[n] }}</v-icon> -->
                    <span d-flex></span>
                    <v-flex xs12>
                      <h1>{{ n }}</h1>
                    </v-flex>

                    <v-spacer></v-spacer>
                  </v-flex>
                </v-layout>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
</template>
<style>
#box{height: 50vh}
</style>

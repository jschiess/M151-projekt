
<template>
  <v-app>
    <template>
      <v-content>
        <v-container pa-0 fill-height fluid v-if="active">
          <v-layout row wrap >
			  <v-flex  xs12>
				  <v-toolbar color="primary" dark hover large>

					  <v-toolbar-title class="test-align-center" >
						  <h1>{{ frage }}this is question</h1>
					  </v-toolbar-title>
					  
				  </v-toolbar>
				
			  </v-flex>
            <v-flex xs6 v-for="(item, n ) in obj" :key="item">
              <v-card @click="meths[n]" flat v-bind:style="val[n]" id="box">
                <v-layout fill-height row wrap>
                  <v-flex xs12 d-flex>
                    <v-spacer></v-spacer>
                    <v-icon large dark>{{ obj[n] }}</v-icon>
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
                    <v-form>
                      <v-text-field
                        prepend-icon="person"
                        name="Username"
                        label="Username"
                        type="text"
                      ></v-text-field>
                      <!-- <v-text-field id="password" prepend-icon="lock" name="password" label="Password" type="password"></v-text-field> -->
                    </v-form>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn @click="active = true" color="primary">Go!</v-btn>
                  </v-card-actions>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
		  
      </v-content>
    </template>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      active: true,
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
    meths: [
      () => {
        alert("test");
      }
    ]
  }
};
</script>


<style>
#box {
  height: 47vh;
}
</style>

<template>
	<v-container fill-height app> 
      <v-layout column>
        <v-flex xl12 ma-3>
          <v-card color="primary">
            s
            
          </v-card>
        </v-flex>
        <v-flex  d-flex>
          
          <GChart type="ColumnChart" :data="chartData" :options="chartOptions"/>
        </v-flex>
        
      </v-layout>
      
    </v-container>
</template>

<script>
import { GChart } from "vue-google-charts";

export default {
  components: {
    GChart
  },
  data() {
    return {
      value: true,
	  chartData: [
		  ["lol", "kek", "average", "idum"],
		  ['lolq', Math.random()*10, 4, 1],
		  ['nazdac', Math.random()*10, 1, 1],
		  
		  ],
	  chartOptions: {
		  title: 'title',
		  vAxis: {title: ''},
		  hAxis: {title: ''},
      series: {2: {type: 'line'}},
      
	  }
    };
  }
};
</script>

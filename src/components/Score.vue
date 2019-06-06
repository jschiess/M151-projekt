<template>
	<v-container fill-height app> 
      <v-layout column>
        <v-flex xl12 ma-3>
          <v-card color="primary">
            
            
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
      d: 56,
	  chartData: [
      ["user-1", "kek", "sm"],
		  ['user-2', Math.random()*10, 5  ],
		  ['user-3', Math.random()*10, 5 ],
		  ],
	  chartOptions: {
		  title: 'title',
		  vAxis: {title: ''},
		  hAxis: {title: ''},
      series: {1: {type: 'line'}},
      
	  }
    };
  }
};
</script>

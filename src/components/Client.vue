<template>

<v-container fluid app absolute style="padding: 0">
	<v-layout row wrap  >
		
	<v-flex  xs6 v-for="(item, n ) in obj" :key="item" >
		<v-card @click="meths[n]" flat v-bind:style="val[n]" id="box">
			<v-layout fill-height row wrap>
				<v-flex xs12  d-flex>
					<v-spacer></v-spacer>
						<v-icon large dark>{{ obj[n] }}</v-icon>
					<v-spacer></v-spacer>
				</v-flex>
			</v-layout>
		</v-card>
		
	</v-flex>
	</v-layout>
</v-container>

</template>



<script>
export default {

	data() {
		return {
			obj: [
				'share',
				'pause',
				'stop',
				'thumb_up',
			],
			val: [
				{
					backgroundColor: 'red'
				},
				{
					backgroundColor: 'blue'
				},
				{
					backgroundColor: 'green'
				},
				{
					backgroundColor: 'orange'
				},
			]
		}

	},
	methods: {
		meths: [
			() => {alert('test')},
		]
	}
	
}
</script>


<style>
#box {
	height: 50vh
}
</style>

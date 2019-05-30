<template>
	<v-container grid-list-xl>

      <v-layout wrap>
				<v-flex xs12>
					<v-text-field
						name="Link"
						id="id"
						v-model="value"
					></v-text-field>
				</v-flex>
        <v-flex d-flex>
          <span d-flex>
          </span>
					
          <qrcode-vue :value="value" :size="size" level="H"> </qrcode-vue>
      
        </v-flex>
        
      </v-layout>
      
    </v-container>
</template>



<script>
import QrcodeVue from 'qrcode.vue';

export default {
	components: {
		QrcodeVue

	},
	data() {
		return {
			value: 'http://192.168.0.150:8081/#/client',
			value1: 'WIFI:S:Utopia;T:WPA2;P:Phil46ipP;;',
			size: 500
		}
	}
}
</script>

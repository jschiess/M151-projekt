<template>
	<v-container grid-list-xl pt-5>

      <v-layout wrap>
        <v-flex xs12 ma-5>
          
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
			value: 'https://example.com',
			size: 500
		}
	}
}
</script>

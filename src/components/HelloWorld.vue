<template>
  <v-container row>
    <v-layout row>
      <v-flex>
        <v-flex d-inline-flex>
          <v-select :items="abteilung" v-model="value" label="Department"></v-select>
          
          <v-text-field name="name" placeholder="search" id="id"></v-text-field>
        </v-flex>

        <v-data-table
          :items="products.items"
          :headers="products.headers"
          hide-actions
          class="elevation-1"
        >
          <template v-slot:headers="props">
            <tr>
              <th v-for="header in props.headers" :key="header.text">{{ header }}</th>
            </tr>
          </template>

          <template slot="items" slot-scope="props" class="pagination.descending">
            <!-- <td>{{ props.item.key }}</td> -->

            <td>{{ props.index }}</td>
            <td class="text-xs-right">{{ props.item.name }}</td>
            <td class="text-xs-right">{{ props.item.sort }}</td>
            <!-- <td class="text-xs-right">{{ props.item.key }}</td>
            <td class="text-xs-right">{{ props.item.key }}</td>
            <td class="text-xs-right">{{ props.item.key }}</td>
            <td class="text-xs-right">{{ props.item.key }}</td>-->
          </template>
        </v-data-table>
      </v-flex>
    </v-layout>
  </v-container>
</template>

  
<script>
export default {
  methods: {},
  data() {
    return {
      abteilung: [
        'Informatik',
        'Sport',
        'Naturwissenschaft',
      ]
    }
  },
  computed: {
    products() {
      return this.$store.state.products;
    }
  }
};
</script>

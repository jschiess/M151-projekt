<template>
  <div>
    <router-view></router-view>

  </div>
</template>

<script>

import store from 'vuex'

export default {
  name: "App",
  
  data() {
    return {
      value: true,
      search: '',
      items: [
        {text: 'itesm', key: 1,  player: 'holo'},
        {text: 'itesm', key: 2,  player: 'saba'},
        {text: 'itesm', key: 3,  player: 'sabr'},
        {text: 'itesm', key: 4,  player: 'archer'},
        {text: 'itesm', key: 5,  player: 'john'},
      ],
      headers: [
        {text: 'number'},
        {text: 'play'},
      ]
    }
  },
};
</script>

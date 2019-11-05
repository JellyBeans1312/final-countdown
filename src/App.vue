<template>
  <div id="app">
  </div>
</template>

<script>
import { getSynonym } from './apiCalls';

export default {
  name: 'app',
  components: {
    
  },
  data() {
    return {
      synonyms: []
    }
  },
  methods: {
    findSynonyms: async function(word) {
      const response = await getSynonyms(word);
      this.synonyms = response
    }
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: Arial;
  line-height: 1.4;
}
</style>

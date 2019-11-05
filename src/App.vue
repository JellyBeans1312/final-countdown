<template>
  <div id='app'>
    <div id='lower-container'>
      <Form 
        :findSynonyms='findSynonyms'/>
    </div>
  </div>
</template>

<script>
import Form from './components/Form/Form';
import { getSynonyms } from './apiCalls';
export default {
  name: 'App',
  components: {
    Form
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

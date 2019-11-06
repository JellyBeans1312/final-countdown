<template>
  <div id='app'>
    <main>
      <div class='left'>
      <Form 
        @find-synonyms='findSynonyms'
        />
      </div>
      <div class='right'>
      <SynonymList 
        :synonyms='this.synonyms'
        @find-synonyms='findSynonyms'
        />
      </div>
    </main>
  </div>
</template>

<script>
import Form from './components/Form/Form';
import SynonymList from './components/SynonymList/SynonymList';
import { getSynonyms } from './apiCalls';
export default {
  name: 'App',
  components: {
    SynonymList,
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
main {
  display: flex;
}
.left {
  margin: 350px 150px 0px 200px;
  width: 35%;
}

.right {
  display: flex;
  margin-top: 330px;
  margin-left: -15px;
}
</style>

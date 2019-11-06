<template>
  <form id='form'>
    <div>
      <input
        placeholder='Enter a Word Here!'
        v-model='word'
        @keyup.enter.prevent="findSearchedSynonyms(word)">
      <button
        @click.prevent="findSearchedSynonyms(word)">
        Search
      </button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'Form',
  data() {
    return {
      word: ''
    }
  },
  methods: {
    findSearchedSynonyms(word) {
      this.$emit('find-synonyms', word);
      this.word = ''
    }
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

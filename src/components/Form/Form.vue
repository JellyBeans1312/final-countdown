<template>
  <form id='form'>
    <div>
      <input
        placeholder='Enter a Word Here!'
        v-model='word'
        @keyup.enter.prevent="findSearchedSynonyms(word)"
        id='input'
        >
      <button
        @click.prevent="findSearchedSynonyms(word)"
        id='button'
        >
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
  #form {
    margin: 350px 200px;
    border-right: 1px solid gray;
    width: 35%;
  }
  div {
    display: flex;
    padding: 25px;
  }
  #input {
    height: 5vh;
    width: 15rem;
    border-radius: 5px;
    padding: 10px;
  }

  #button {
    height: 5vh;
    width: 5rem;
    margin-left: 5px;
    border-radius: 5px;
  }
</style>

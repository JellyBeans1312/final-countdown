<template>
  <section id='synonym-list' v-if='this.synonyms.length > 0'>
    <h4>Click on a word to display its synonyms</h4>
    <ul>
      <li 
      v-for='(synonym, index) in this.synonyms' 
      v-bind:key='index'
      @click.prevent='findClickedSynonyms($event, synonym)'
      @keyup.enter.prevent='findClickedSynonyms($event, synonym)'
      >
      {{synonym}}
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'synonymlist',
  props: ['synonyms'],
  methods: {
    findClickedSynonyms(event, word) {
      this.$emit('find-synonyms', word);
      this.word = ''
      event.target.blur();
    }
  }
}
</script>

<style scoped>
  section {
    margin-right: 30px;
    margin-top: 30px
  }

  li {
    list-style-type: none;
    margin: 10px 3px;
    border-right: 1px solid black;
    display: inline;
    padding: 3px;
  }
</style>
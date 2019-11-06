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

</style>
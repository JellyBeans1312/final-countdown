<template>
  <div id='synonym-list' v-if='this.synonyms.length > 0'>
    <ul>
      <li 
      v-for='(synonym, index) in this.synonyms' 
      v-bind:key='index'
      @click.prevent = 'findSynonyms(synonym)'>{{synonym}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'synonymlist',
  props: ['synonyms', 'findSynonyms']
}
</script>
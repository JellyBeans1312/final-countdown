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

  async data() {
      
    const data = await getSynonym('thing')
    return {data}
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

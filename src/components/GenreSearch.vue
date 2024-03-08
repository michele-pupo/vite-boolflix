<script>
  import { store } from '../store';  

  export default{
        name: 'GenreSearch',

        data() {
          return {
            store,
            selectedGenre: '',
          }
        },
    }

</script>
  
<template>
  <div id="choice">
    <div>
    <select 
        v-model="selectedGenre"
        @change="$emit('search')">
      <option value="">Seleziona un genere</option>
      <option v-for="genre in store.genres" :key="genre.id" :value="genre.id">{{ genre.name }}</option>
    </select>
  </div>
    </div>
</template>

<style lang="scss">

</style>
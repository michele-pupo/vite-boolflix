<script>
    import { store } from '../store';
    export default{
        name: 'ListMovies',
      
        data() {
          return {
            store,
          }
        },
    }
</script>

<template>
 
  <ul>
    <li v-for="movie in store.movies">{{ movie.title }}</li>
  </ul>

</template>

<style lang="scss">
 
</style>
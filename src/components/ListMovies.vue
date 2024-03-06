<script>
    import { store } from '../store';
    import Movie from './Movie.vue'
    export default{
        name: 'ListMovies',
        components: {
            Movie,
        },
        data() {
          return {
            store,
          }
        },
    }
</script>

<template>
 
  <ul>
    <Movie 
        v-for="movie in store.movies"
        :title="movie.title">  
    </Movie>
  </ul>

</template>

<style lang="scss">
 
</style>
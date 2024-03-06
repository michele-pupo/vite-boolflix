<script>
    import { store } from '../store';
    import Serie from './Serie.vue'
    export default{
        name: 'ListSeries',
        components: {
            Serie,
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
        :title="movie.title"
        :originalTitle="movie.original_title"
        :originalLanguage="movie.original_language"
        :vote="Math.ceil(movie.vote_average)">  
    </Movie>
  </ul>

</template>

<style lang="scss">
 
</style>
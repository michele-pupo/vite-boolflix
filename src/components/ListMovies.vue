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
 
  <ul class="list-movies">
    <Movie 
        v-for="movie in store.movies"
        :title="movie.title"
        :originalTitle="movie.original_title"
        :originalLanguage="movie.original_language"
        :vote="Math.ceil(movie.vote_average)"
        :image="movie.poster_path"
        :overview="movie.overview">
    </Movie>
  </ul>

</template>

<style lang="scss" scoped>
@use '../styles/_variables' as *;

    .list-movies{
        list-style-type: none;
        display: flex;
        flex-flow: wrap;
        gap: $card-gap;
    }
</style>
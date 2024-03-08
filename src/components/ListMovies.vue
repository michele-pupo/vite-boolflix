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
  <div id="boolflix" v-if="store.movies.length === 0 && store.series.length === 0">
    <img src="../../public/img/boolflix.png" alt="">
  </div>
  <div>
    <img v-if="store.movies.length > 0" src="../../public/img/film.png" alt="">
    <ul class="list-movies" v-if="store.movies.length > 0">
      <Movie 
          v-for="movie in store.movies"
          :key="movie.id"
          :title="movie.title"
          :originalTitle="movie.original_title"
          :originalLanguage="movie.original_language"
          :vote="Math.ceil(movie.vote_average)"
          :image="movie.poster_path"
          :overview="movie.overview">
      </Movie>
    </ul>

    <img v-if="store.series.length > 0" src="../../public/img/serie.png" alt="">
    <ul class="list-series" v-if="store.series.length > 0">
      <Movie 
          v-for="serie in store.series"
          :key="serie.id"
          :title="serie.name"
          :originalTitle="serie.original_name"
          :originalLanguage="serie.original_language"
          :vote="Math.ceil(serie.vote_average)"
          :image="serie.poster_path"
          :overview="serie.overview">  
      </Movie>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
@use '../styles/_variables' as *;

  #boolflix{
    position: absolute;
    width: 900px;
    top: 30%;
    right: 30%;


    img{
      position: relative;
      width: 100%;
    }
  }

    .list-movies, .list-series{
        list-style-type: none;
        display: flex;
        flex-flow: wrap;
        gap: $card-gap;
    }

    img{
      padding: 50px 0px 10px 0px;
    }
</style>
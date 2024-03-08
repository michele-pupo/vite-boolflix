<script>
  import AppNavbar from './components/AppNavbar.vue';
  import AppMain from './components/AppMain.vue';
  import AppFooter from './components/AppFooter.vue';
  import { store } from './store';
  import axios from 'axios';
  import GenreSearch from './components/GenreSearch.vue';


  export default{

    components: {
      AppNavbar,
      AppMain,
      AppFooter,
      GenreSearch
    },
    data() {
      return {
        store,
      }
    },
    methods:{
      callApiMovie() {
        axios.get(this.store.apiUrlMovie, {
          params: {query: this.store.searchMovie}})
            .then((res) => {this.store.movies = res.data.results;})
            .catch((error) => {
              console.error('Error fetching movies:', error);
        })
    
        axios.get(this.store.apiUrlSerie, {
          params: {query: this.store.searchMovie}})
            .then((res) => {this.store.series = res.data.results;})
            .catch((error) => {
              console.error('Error fetching series:', error);
        })
      },  
      searchMovie() {
        axios.get(this.store.apiUrlGenre)
          .then((res) => {
            console.log(res.data.genres);
            this.store.genres = res.data.genres;
          })
          .catch((error) => {
            console.error('Error fetching genres:', error);
          });
      }
    },
    created() {
      this.callApiMovie(),
      this.searchMovie()
    }
  }
</script>

<template>
  <AppNavbar @searchMovie="callApiMovie"></AppNavbar>
  <GenreSearch @search="searchMovie()"></GenreSearch>
  <AppMain></AppMain>
  <AppFooter></AppFooter>
</template>

<style lang="scss">
  @use './styles/general.scss' as *;
</style>./components/GenreSearch.vue

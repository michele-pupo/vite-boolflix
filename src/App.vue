<script>
  import AppNavbar from './components/AppNavbar.vue';
  import AppMain from './components/AppMain.vue';
  import { store } from './store';
  import axios from 'axios';

  export default{

    components: {
      AppNavbar,
      AppMain
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
      },

      callApiSerie() {
        axios.get(this.store.apiUrlSerie, {
          params: {query: this.store.searchSerie}})
            .then((res) => {this.store.series = res.data.results;})
            .catch((error) => {
              console.error('Error fetching series:', error);
        })
      }
    },
    created() {
      this.callApiMovie(),
      this.callApiSerie()
    }
  }
</script>

<template>
  <AppNavbar 
      @searchMovie="callApiMovie"
      @searchSerie="callApiSerie"
  >
  </AppNavbar>
  <AppMain></AppMain>
</template>

<style lang="scss">
  @use './styles/general.scss' as *;
</style>

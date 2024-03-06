<script>
  import AppNavbar from './components/AppNavbar.vue';
  import { store } from './store';
  import axios from 'axios';

  export default{

    components: {
      AppNavbar
    },
    data() {
      return {
        store,
      }
    },
    methods:{
      callApiMovie() {
        const key = {query: this.store.searchMovie};
        // chiamata film
        const movie = axios.get(this.store.apiUrlMovie, {key})
          .then((res) => {this.store.movies = res.data.results}) 
      }
    },
    created() {
      this.callApiMovie()
    }
  }
</script>

<template>
  <AppNavbar @search="callApiMovie"></AppNavbar>
</template>

<style lang="scss">
  @use './styles/general.scss' as *;
</style>

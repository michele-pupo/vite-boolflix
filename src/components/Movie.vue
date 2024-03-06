<script>
    import { store } from '../store';
    export default{
        name: 'Movie',
      
        data() {
          return {
            store,
          };
        },
        props: {
          title: String,
        }
    }
</script>

<template>
 
  <li id="movie-card">
    <div id="image-movie">
        
    </div>
    <div id="description-movie">
        <h3>{{ title }}</h3>
    </div>

  </li>

</template>

<style lang="scss">
 
</style>
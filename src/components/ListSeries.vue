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
    <Serie 
        v-for="serie in store.series"
        :name="serie.name"
        :originalName="serie.original_name"
        :originalLanguage="serie.original_language"
        :image="serie.poster_path">  
  </Serie>
  </ul>

</template>

<style lang="scss" scoped>
    ul{
        list-style-type: none;
        display: flex;
        flex-flow: wrap;
    }
</style>
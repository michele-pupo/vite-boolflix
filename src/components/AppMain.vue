<script>
    import ListMovies from './ListMovies.vue';
    import ListeSeries from './ListSeries.vue'
    export default{
        name: 'AppMain',
      
        components:{
            ListMovies,
            ListeSeries
        },
    };
</script>

<template>
 
    <div class="container">
        <ListMovies></ListMovies>
        <ListaSeries></ListaSeries>
    </div>

</template>

<style lang="scss">

</style>
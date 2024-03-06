<script>
    import ListMovies from './ListMovies.vue';
    import ListSeries from './ListSeries.vue'
    export default{
        name: 'AppMain',
      
        components:{
            ListMovies,
            ListSeries
        },
    };
</script>

<template>
 
    <div class="container">
        <ListMovies></ListMovies>
        <ListSeries></ListSeries>
    </div>

</template>

<style lang="scss">

</style>
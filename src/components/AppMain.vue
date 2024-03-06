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
        <h1>Film</h1>
        <ListMovies></ListMovies>
        <h1>Serie</h1>
        <ListSeries></ListSeries>
    </div>

</template>

<style lang="scss">
    h1{
        text-align: center;
        font-size: 70px;
    }
</style>

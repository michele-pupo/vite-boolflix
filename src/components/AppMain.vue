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
    <div class="bg">
        <div class="container">
            <h1>Film</h1>
            <ListMovies></ListMovies>
            <h1>Serie</h1>
            <ListSeries></ListSeries>
        </div>
    </div>
</template>

<style lang="scss">
    .bg{
        height: calc(100vh - 120px);
        overflow: auto;
    }
    h1{
        text-align: center;
        font-size: 70px;
    }
</style>

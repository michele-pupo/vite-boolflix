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
            <img src="../../public/img/film.png" alt="">
            <ListMovies id="movie"></ListMovies>
            <img src="../../public/img/serie.png" alt="">
            <ListSeries id="serie"></ListSeries>
        </div>
    </div>
</template>

<style lang="scss">
    .bg{
        height: calc(100vh - 120px);
        overflow: auto;
        .container{
            padding-top: 30px;
            #movie, #serie{
                padding-top: 30px;
                padding-bottom: 80px;
            }
        }
    }
</style>

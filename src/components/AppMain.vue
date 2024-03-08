<script>
    import ListMovies from './ListMovies.vue';
    export default{
        name: 'AppMain',
      
        components:{
            ListMovies,
        },
    };
</script>

<template>
    <div class="bg">
        <div class="container">
            <ListMovies></ListMovies>
        </div>
    </div>
</template>

<style lang="scss">
    .bg{
        height: calc(100vh - 290px);
        overflow: auto;
        .container{
            padding-bottom: 50px;
        }
    }
</style>

<script>
    import { store } from '../store';
    export default{
        name: 'Appnavbar',
      
        data() {
          return {
            store,
          }
        },
        methods: {
          clearMovieSearch() {
            this.store.searchMovie = ''; // Pulisci il campo di ricerca dei film
          },
          clearSerieSearch() {
            this.store.searchSerie = ''; // Pulisci il campo di ricerca delle serie
          }
        }
    }
</script>

<template>
  <nav>
    <div id="container-nav">
      <div id="logo-links">
        <div id="logo">
          <img src="../../public/img/boolflix.png" alt="">
        </div>
        <div id="links">
          <ul>
            <li>Home</li>
            <li>Serie TV</li>
            <li>Fans</li>
            <li>Original</li>
            <li>Aggiunti di recente</li>
            <li>La mia lista</li>
          </ul>
        </div>
      </div>
      <div id="movie-serie">
         <div id="search-bar">
          <form @click.prevent="$emit('searchMovie')">
            <label for="search"></label>
            <input 
                v-model="store.searchMovie"
                type="text" 
                id="search" 
                name="searchSection"
                placeholder="Ricerca film..." />
            <button type="submit" name="searchSection">Cerca Film</button>
            <button id="clear" type="button" @click="clearMovieSearch"><i class="fa-solid fa-x"></i></button>
          </form>
        </div>
        <div id="search-bar">
          <form @click.prevent="$emit('searchSerie')">
            <label for="search"></label>
            <input 
                v-model="store.searchSerie"
                type="text" 
                id="search" 
                name="searchSection"
                placeholder="Ricerca serie TV..." />
            <button type="submit" name="searchSection">Cerca Serie TV</button>
            <button id="clear" type="button" @click="clearSerieSearch"><i class="fa-solid fa-x"></i></button>
          </form>
        </div>
      </div>
    </div>
  </nav>
</template>

<style lang="scss">
  nav{
    background-color: #101010;

      #container-nav{
        display: flex;
        align-items: center;
        justify-content: space-between;
        

        #logo-links{
          height: 120px;
          width: 100%;
          display: flex;
          align-items: center;

          #logo{
            height: 80px;
            padding: 0px 50px;

            img{
              height: 100%;
            }
          }
          

          #links{
            ul{
              display: flex;
              list-style-type: none;
              gap: 40px;
            }
          }
        }

        #movie-serie{
          display: flex;
          gap: 10px;

          #search-bar{
            form{
              display: flex;
              text-wrap: nowrap;
              padding-right: 50px;

              button{
                padding: 5px 10px;
                background-color: #e50914;
                color: black;
                border: transparent;
                text-transform: uppercase;
                font-weight: bold;
                cursor: pointer;
              }
              
              #clear{
                padding: 10px 20px;
                background-color: black;
                color: #e50914;
                border: transparent;
                text-transform: uppercase;
                font-weight: bold;
                cursor: pointer;
              }
            }
          }
        }
      }
  }
</style>


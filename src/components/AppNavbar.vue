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
          // ripulisce il campo di ricerca dei film
          clearMovieSearch() {
            this.store.searchMovie = ''; 
          },
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
            <li><a href="#">Home</a></li>
            <li><a href="#">Serie TV</a></li>
            <li><a href="#">Fans</a></li>
            <li><a href="#">Original</a></li>
            <li><a href="#">Aggiunti di recente</a></li>
            <li><a href="#">La mia lista</a></li>
          </ul>
        </div>
      </div>
      <div id="movie">
         <div id="search-bar">
          <form @click.prevent="$emit('searchMovie')">
            <label for="search"></label>
            <input 
                v-model="store.searchMovie"
                type="text" 
                id="search" 
                name="searchSection"
                placeholder="Inserisci titolo..." />
            <button type="submit" name="searchSection">Cerca Film</button>
            <button id="clear" type="button" @click="clearMovieSearch"><i class="fa-solid fa-x"></i></button>
          </form>
        </div>
      </div>
      <div>
        <div id="user">
          <img src="../../public/img/johnny.jpg" alt="">
        </div>
      </div>
    </div>
  </nav>
</template>

<style lang="scss">
@use '../styles/_variables' as *;

  nav{
    background-color: #101010;
    width: 100%;
    z-index: 10;

      #container-nav{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0px 50px;

        #logo-links{
          height: 120px;
          width: 100%;
          display: flex;
          align-items: center;

          #logo{
            height: 80px;
            padding-right: 50px;

            img{
              height: 100%;
            }
          }
          
          #links{
            ul{
              display: flex;
              list-style-type: none;
              gap: 40px;

              li a{
                text-decoration: none;
                color: white;
              }
            }
          }
        }

        #movie{
          display: flex;
          gap: 20px;
          padding-right: 20px;

          #search-bar{
            form{
              display: flex;
              text-wrap: nowrap;

              #search{
                padding: 0px 10px;
                width: 250px;
                border-color: transparent;
                font-weight: bold;
              }

              button{
                padding: 5px 10px;
                background-color: $primary-color;
                color: black;
                border: transparent;
                text-transform: uppercase;
                font-weight: bold;
                cursor: pointer;
              }
              
              #clear{
                padding: 10px 20px;
                background-color: black;
                color: $primary-color;
                border: transparent;
                text-transform: uppercase;
                font-weight: bold;
                cursor: pointer;
              }
            }
          }
        }
      }

      #user{
        width: 80px;
        height: 80px;
        border-radius: 50%;
        overflow: hidden;

        img{
          width: 100%;
          object-fit: contain;
        }
      }
  }
</style>


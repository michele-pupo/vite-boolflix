<script>
    import { store } from '../store';

    export default {
      name: 'Movie',

      props: {
        title: String,
        originalTitle: String,
        originalLanguage: String,
        vote: Number,
        image: String,
        overview: String,
        genre_ids: Array,
      },

      data() {
        return {
          store,
          maxStars: 5,
          genres: [],
        };
      },

      computed: {
        languageFlagUrl() {
          const flagMapping = {
            'en': '../../public/img/en.jpg', 
            'fr': '../../public/img/fr.jpg',
            'de': '../../public/img/de.jpg',
            'es': '../../public/img/es.jpg',
            'it': '../../public/img/it.jpg',
            'ja': '../../public/img/ja.jpg',
            'ko': '../../public/img/ko.jpg',
            'pl': '../../public/img/pl.jpg' 
          };
          return flagMapping[this.originalLanguage] || '../../public/img/logo_brand.jpg'; 
        },
        emptyStars() {
          return this.maxStars - this.myStars;
        },
        myStars() {
          return Math.ceil(this.vote / 2);
        },
        // Calcola il nome del genere corrispondente per ogni genre_id
        genreNames() {
          if (Array.isArray(this.genre_ids) && this.genre_ids.length > 0) {
            return this.genre_ids.map(genreId => {
              const foundGenre = this.store.genres.find(genre => genre.id === genreId);
              return foundGenre ? foundGenre.name : '';
            });
          } else {
            return [];
          }
        },
      },
    };
</script>


<template>
      <li id="movie-card">
        <div class="card">
          <div id="movie-card-front">
            <img class="image" v-if="image !== null" :src="`${this.store.apiPoster}${image}`" :alt="title">
            <img class="image not-found" v-else src="../../public/img/Boolflix_Symbol.png">
          </div>
          <div id="movie-card-back">
            <div id="description-movie">
              <h2>{{ title }}</h2>
              <h3>{{ originalTitle }}</h3>
              <div id="language">
                <img :src="languageFlagUrl" alt="Language Flag">
              </div>
              <div id="stars">
                <span v-for="star in myStars"><i class="fa-solid fa-star"></i></span>
                <span v-for="star in emptyStars"><i class="fa-regular fa-star"></i></span>
              </div>
              <p id="text-movie">{{ overview }}</p>
              <span v-for="(genre, index) in genreNames" :key="index">{{ genre }}</span>
            </div>
          </div>
        </div>
      </li>
</template>

<style lang="scss" scoped>
@use '../styles/_variables' as *;

  #movie-card{
    background-color: transparent;
    width: calc(100% / 5 - $card-gap / 5 * 4);
    height: 400px;
    display: flex;
    flex-flow: column;
    align-items: center;

    .card{
      position: relative;
      width: 100%;
      height: 100%;
      transition: transform 1.5s;
      transform-style: preserve-3d;

      #movie-card-front{

        img{
          width: 100%;
          height: 100%;
        }
      }

      #movie-card-back{
        background-color: black;
        color: white;
        transform: rotateY(180deg);
        overflow: auto;

        #description-movie{
          display: flex;
          flex-flow: column;
          align-items: center;
          padding: 10px;

          h2{
            font-size: 15px;
            text-align: center;
            padding-bottom: 10px;
          }

          h3{
            font-size: 10px;
            padding-bottom: 10px;
          }

          #language{
            width: 30px;

            img{
              width: 100%;
              padding-bottom: 10px;
            }
          }

          #stars span i{
            color: yellow;
            padding-bottom: 10px;
          }
        }
      }  

      #movie-card-front, #movie-card-back{
        position: absolute;
        width: 100%;
        height: 100%;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
      }
    }
  }
  #movie-card:hover .card {
    transform: rotateY(180deg);
  }

  @media screen and (max-width: 576px){
    #movie-card{
        background-color: transparent;
        width: 100%;
        height: 700px;
        padding: 0px 50px;
      }
    }
</style>
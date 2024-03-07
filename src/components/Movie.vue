<script>
    import { store } from '../store';
    export default{
        name: 'Movie',
      
        data() {
          return {
              store,
              maxStars: 5,
          };
        },
        props: {
          title: String,
          originalTitle: String,
          originalLanguage: String,
          vote: Number,
          image: String,
          overview: String
        },
        computed: {
          languageFlagUrl() {
            // inserire la bandiera corrispondente in base alla lingua
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
            // se la lingua non è presente tra le bandierine, usiamo un'immagine predefinita
            return flagMapping[this.originalLanguage] || '../../public/img/logo_brand.jpg'; 
          },
          emptyStars() {
              return this.maxStars - this.myStars;
          },
          myStars() {
              return Math.ceil(this.vote / 2);
          }
        }
    }
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
</style>
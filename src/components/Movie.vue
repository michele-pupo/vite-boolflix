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
    <div id="image-movie">
      <img class="image" v-if="image !== null" :src="`${this.store.apiPoster}${image}`" :alt="title">
      <img class="image not-found" v-else src="../../public/img/Boolflix_Symbol.png">
    </div>
    <div id="description-movie">
        <h3>{{ title }}</h3>
        <h2>{{ originalTitle }}</h2>
        <div id="language">
          <img :src="languageFlagUrl" alt="Language Flag">
        </div>
        <div id="stars">
          <span v-for="star in myStars"><i class="fa-solid fa-star"></i></span>
          <span v-for="star in emptyStars"><i class="fa-regular fa-star"></i></span>
        </div>
    </div>
  </li>

</template>

<style lang="scss" scoped>
  #movie-card{
    width: calc(100% / 5);
    display: flex;
    flex-flow: column;
    align-items: center;

    #image-movie{
      img{
        width: 100%;
        height: 400px;
      }
    }

    #description-movie{
      display: flex;
      flex-flow: column;
      align-items: center;

      h3{
        font-size: 15px;
      }

      h2{
        font-size: 10px;
      }

      #language{
        width: 30px;

        img{
          width: 100%;
        }
      }

      #stars span i{
        color: yellow;
      }
    }
  }
</style>
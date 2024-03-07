<script>
    import { store } from '../store';
    export default{
        name: 'Movie',
      
        data() {
          return {
            store,
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
            // Mappa tra le stringhe restituite dall'API e i percorsi delle immagini delle bandiere
            const flagMapping = {
              // Esempio di mappatura
              'en': '../../public/img/en.jpg', // Percorso dell'immagine della bandiera inglese
              'fr': '../../public/img/fr.jpg',
              'de': '../../public/img/de.jpg',
              'es': '../../public/img/es.jpg',
              'it': '../../public/img/it.jpg',
              'ja': '../../public/img/ja.jpg',
              'ko': '../../public/img/ko.jpg',
              'pl': '../../public/img/pl.jpg' // Percorso dell'immagine della bandiera francese
              // Aggiungi altre corrispondenze necessarie
            };

            // Ottieni il percorso dell'immagine della bandiera corrispondente alla lingua originale
            return flagMapping[this.originalLanguage] || '../../public/img/logo_brand.jpg'; // Se la lingua non è mappata, usa una bandiera predefinita
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
        <h4>{{ originalLanguage }}</h4>
        <h5>{{ vote }}</h5>
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
    }
  }
</style>
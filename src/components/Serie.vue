<script>
    import { store } from '../store';
    export default{
        name: 'serie',
      
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
            return flagMapping[this.originalLanguage] || '../../public/img/BrandAssets_Logos_01-Wordmark.jpg'; // Se la lingua non è mappata, usa una bandiera predefinita
        }
      }
    }
</script>

<template>
 
  <li id="movie-card">
    <div id="image-movie">
        
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

<style lang="scss">
  #language{
    width: 30px;

    img{
      width: 100%;
    }
  }
</style>
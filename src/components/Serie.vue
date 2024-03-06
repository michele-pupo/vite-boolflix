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
          name: String,
          originalName: String,
          originalLanguage: String,
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
            return flagMapping[this.originalLanguage] || '../../public/img/BrandAssets_Logos_01-Wordmark.jpg'; // Se la lingua non è mappata, usa una bandiera predefinita
        }
      }
    }
</script>

<template>
 
  <li id="serie-card">
    <div id="image-serie">
        <img class="image" v-if="image !== null" :src="`${this.store.apiPoster}${image}`" :alt="title">
        <img class="image not-found" v-else src="../../public/img/Netflix-Symbol.png">
    </div>
    <div id="description-serie">
        <h3>{{ name }}</h3>
        <h2>{{ originalName }}</h2>
        <div id="language">
          <img :src="languageFlagUrl" alt="Language Flag">
        </div>
    </div>
  </li>

</template>

<style lang="scss" scoped>
    #serie-card{
        width: calc(100% / 5);
        display: flex;
        flex-flow: column;
        align-items: center;

        #image-serie{
            width: calc(100% / 5);

            img{
                width: 100%;
            }
        }

        #description-serie{
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
import { reactive } from "vue";

export const store = reactive ({
    // api ricerca film
    apiUrlMovie:'https://api.themoviedb.org/3/search/movie?api_key=436e488d896be16eafbb27d2830c0175&',
    
    searchMovie: '',
});
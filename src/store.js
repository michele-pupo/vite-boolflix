import { reactive } from "vue";

export const store = reactive ({
    // api ricerca film
    apiUrlMovie:'https://api.themoviedb.org/3/search/movie?api_key=436e488d896be16eafbb27d2830c0175&',
    
    searchMovie: '',

    movies:[],
    // api ricerca serie
    apiUrlSerie:'https://api.themoviedb.org/3/search/tv?api_key=436e488d896be16eafbb27d2830c0175&',
 
    series:[],
    //api locandine film e serie
    apiPoster:'https://image.tmdb.org/t/p/w1280/',

    apiUrlGenre:'https://api.themoviedb.org/3/genre/movie/list?api_key=436e488d896be16eafbb27d2830c0175',

    genres:[],

    apiUrlGenreSerie:'https://api.themoviedb.org/3/genre/tv/list?api_key=436e488d896be16eafbb27d2830c0175',

    genresSerie:[],
})
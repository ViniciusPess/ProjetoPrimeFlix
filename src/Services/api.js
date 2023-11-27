
// Base do URL: https://api.themoviedb.org/3
//URL da API: /movie/now_playing?api_key=b5b7d181f43c7de075c35529b4f914b7&language=pt-BR

import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
});

export default api;
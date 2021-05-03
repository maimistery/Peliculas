import axios from 'axios';


const moviDB = axios.create({

    baseURL:'https://api.themoviedb.org/3/movie',
    params:{
        api_key: 'e6ae1fe5420f03b07105f0bb63c27cac',
        language:'es-ES'
    }
});

export default moviDB;
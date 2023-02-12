import axios from 'axios';

const instance = axios.create({ 
    baseURL: 'http://api.themoviedb.org/3/',
    params: {
        api_key: "8737072131537d60058769feb9488979",
        language: "ko-KR",
    }
});

export default instance;
    
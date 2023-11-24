import axios from 'axios';

const api = axios.create({
    baseURL: 'https://gs2-js-json-server.vercel.app/dados',
});

export default api;

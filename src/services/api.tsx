import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api-times.herokuapp.com/',
});

export default api;

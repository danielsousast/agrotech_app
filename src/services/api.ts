import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.cnptia.embrapa.br/agritec/v1/',
});

export default api;

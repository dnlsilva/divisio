import axios from 'axios';

const api = axios.create({
  baseURL: 'https://webchatapi.herokuapp.com/conversation',
});

export default api;

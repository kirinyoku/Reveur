import axios from 'axios';

const URL = import.meta.env.VITE_API_URL;
const TOKEN = import.meta.env.VITE_API_TOKEN;

const api = axios.create({
  baseURL: URL,
  headers: {
    Authorization: `bearer ${TOKEN}`,
  },
});

export default api;

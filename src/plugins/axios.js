import axios from 'axios';

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL, // Ganti dengan baseURL Anda
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;

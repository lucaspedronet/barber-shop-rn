import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://services.mrbooking.net',
  headers: {'Content-Type': 'application/json'},
});

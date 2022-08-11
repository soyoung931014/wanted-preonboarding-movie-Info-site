import axios, { AxiosInstance } from 'axios';

const serverApi: AxiosInstance = axios.create({
  baseURL: 'https://preonboarding-movieinfosite.herokuapp.com/movies',
});

serverApi.interceptors.response.use((response) => response.data);

export default serverApi;

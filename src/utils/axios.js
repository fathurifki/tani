import axios from 'axios';

const axiosApi = axios.create({
  baseURL: `https://etani.herokuapp.com/api`,
  timeout: 20000,
});

export default axiosApi;

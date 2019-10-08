import axios from 'axios';
import url from './url';

const axiosApi = axios.create({
  baseURL: url,
  timeout: 20000,
});

export default axiosApi;

import axios from '../../utils/axios';

export const authApi = Object.freeze({
  login: payload =>
    axios.post('/user/login', payload, {
      headers: {'Content-Type': 'application/json'},
    }),
});

import axios from '../../utils/axios';

export const registeredApi = Object.freeze({
  register: payload =>
    axios.post('/user/register', payload, {
      headers: {
        'Content-type': 'application/json',
      },
    }),
});

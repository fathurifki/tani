import axios from '../../utils/axios';

export const sellProductApi = Object.freeze({
  sellProduct: (payload, token) =>
    axios.post('/product', payload, {
      headers: {
        Authorization: `${token}`,
        'Content-type': 'application/x-www-form-urlencoded',
      },
    }),
});

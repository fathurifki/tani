import axios from '../../utils/axios';

export const buyProductApi = Object.freeze({
  buyProduct: (payload, token) =>
    axios.post('/transaction/buy', payload, {
      headers: {
        Authorization: `${token}`,
        'Content-type': 'application/json',
      },
    }),
});

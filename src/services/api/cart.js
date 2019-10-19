import axios from '../../utils/axios';

export const cartApi = Object.freeze({
  getCart: token =>
    axios.get('/transaction/carts', {
      headers: {
        Authorization: `${token}`,
        'Content-Type': 'application/json',
      },
    }),
  postCart: (payload, token) =>
    axios.post('/transaction/add_cart', payload, {
      headers: {
        Authorization: `${token}`,
        'Content-Type': 'application/json',
      },
    }),
  patchPayment: (payload, token) =>
    axios.patch('/transaction/cart/payments', payload, {
      headers: {
        Authorization: `${token}`,
        'Content-Type': 'application/json',
      },
    }),
  deleteCart: (payload, token) =>
    axios.delete('/transactions/carts', payload, {
      headers: {
        Authorization: `${token}`,
        'Content-Type': 'application/json',
      },
    }),
});

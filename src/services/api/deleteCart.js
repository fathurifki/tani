import axios from '../../utils/axios';

export const deleteCartApi = Object.freeze({
  deleteCart: (payload, token) =>
    axios.delete('/transaction/carts', {
      data: payload,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${token}`,
      },
    }),
});

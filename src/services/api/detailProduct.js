import axios from '../../utils/axios';

export const detailProductApi = Object.freeze({
  category: (idProduct, token) =>
    axios.get(`/product/${idProduct}`, {
      headers: {
        Authorization: `${token}`,
        'Content-type': 'application/json',
      },
    }),
});

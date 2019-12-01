import axios from '../../utils/axios';

export const categoryApi = Object.freeze({
  category: (category, token) =>
    axios.get(`/product/category/${category}`, {
      headers: {
        Authorization: `${token}`,
        'Content-type': 'application/json',
      },
    }),
});

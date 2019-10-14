import axios from '../../utils/axios';

export const homeApi = Object.freeze({
  home: token =>
    axios.get('/product', {
      headers: {
        Authorization: `${token}`,
        'Content-type': 'application/json',
      },
    }),
});

import axios from '../../utils/axios';

export const profileApi = Object.freeze({
  getProfile: token =>
    axios.get('/profile', {
      headers: {
        Authorization: `${token}`,
        'Content-type': 'application/json',
      },
    }),
  createProfile: (payload, token) =>
    axios.post('/profile/create', payload, {
      headers: {
        Authorization: `${token}`,
        'Content-type': 'application/json',
      },
    }),
  updateProfile: (userId, payload, token) =>
    axios.put(`/profile/?user_id=${userId}`, payload, {
      headers: {
        Authorization: `${token}`,
        'Content-type': 'application/json',
      },
    }),
});

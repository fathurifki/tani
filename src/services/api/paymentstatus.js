import axios from '../../utils/axios';

export const paymentStatusApi = Object.freeze({
  getPayment: token =>
    axios.get('/payments', {
      headers: {
        Authorization: `${token}`,
      },
    }),
});

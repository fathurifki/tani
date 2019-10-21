import {SET_DATA, SET_ERROR, SET_LOADING} from './constants';
import {paymentStatusApi} from '../../services/api/paymentstatus';

export function setData(field, value) {
  return {
    type: SET_DATA,
    field,
    value,
  };
}

export function setErrors(errors) {
  return {
    type: SET_ERROR,
    errors,
  };
}

export function setLoading(status) {
  return {
    type: SET_LOADING,
    status,
  };
}

export const getPaymentStatus = () => (dispatch, getState) => {
  const {
    login: {token},
    profile: {status},
  } = getState();

  console.log('STATUS', status);

  paymentStatusApi
    .getPayment(token.token)
    .then(response => {
      if (response) {
        console.log('RESPONSE PAYMENT', response.data.data);
        dispatch(setData('status', response.data.data));
        console.log('SUCCESS GET PAYMENT');
      }
    })
    .catch(error => {
      if (error) {
        console.log('ERROR', error);
      }
    });
};

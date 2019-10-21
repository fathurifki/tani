import {
  SET_DATA,
  SET_LOADING,
  SET_ERROR,
  SET_DATA_USER,
  CLEAR_DATA,
} from './constants';
import {profileApi} from '../../services/api/profile';
import {logoutService} from '../../utils/logoutService';
import {paymentStatusApi} from '../../services/api/paymentstatus';

export function setData(field, value) {
  return {
    type: SET_DATA,
    field,
    value,
  };
}

export function setDataUser(field, value) {
  return {
    type: SET_DATA_USER,
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

export function clearData() {
  return async (dispatch, getState) => {
    logoutService();
    dispatch({type: CLEAR_DATA});
  };
}

export const fetchProfile = () => (dispatch, getState) => {
  const state = getState().login;
  const {token} = state;

  profileApi
    .getProfile(token.token)
    .then(response => {
      if (response) {
        console.log('RESPONSE PROFILE', response.data);
        dispatch(setData('profile', response.data));
        console.log('SUKSES GET PROFILE');
      }
    })
    .catch(error => {
      if (error) {
        console.log('ERROR', error);
        console.log('FAILED GET DATA PROFILE');
      }
    });
};

export const updateProfile = id => (dispatch, getState) => {
  const {
    login: {token},
    profile: {user},
  } = getState();

  console.log('USER', user);
  console.log('ID', id);

  profileApi
    .updateProfile(id, user, token.token)
    .then(response => {
      if (response) {
        console.log('DATA UPDATE', response.data);
        dispatch(fetchProfile());
        console.log('SUKSES UPDATE PROFILE');
      }
    })
    .catch(error => {
      if (error) {
        console.log('ERROR', error);
        console.log('FAILED UPDATE DATA PROFILE');
      }
    });
};

export const createProfile = () => (dispatch, getState) => {
  const {
    login: {token},
    profile: {user},
  } = getState();

  profileApi
    .createProfile(user, token.token)
    .then(response => {
      if (response) {
        console.log('DATA CREATE', response.data);
        console.log('SUKSES CREATE PROFILE');
      }
    })
    .catch(error => {
      if (error) {
        console.log('ERROR', error);
        console.log('FAILED CREATE PROFILE');
      }
    });
};

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

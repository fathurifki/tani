import {
  SET_DATA,
  SET_ERROR,
  SET_LOADING,
  SEND_REQUEST,
  CLEAR_LOGIN,
  DATA_LOGIN,
} from './constants';
import axios from '../../utils/axios';
import {authApi} from '../../utils/services';

export function setErrors(errors) {
  return {
    type: SET_ERROR,
    errors,
  };
}

export function setData(field, value) {
  return {
    type: SET_DATA,
    field,
    value,
  };
}

export function setLoading(status) {
  return {
    type: SET_LOADING,
    status,
  };
}

export function clearLogin() {
  return {
    type: CLEAR_LOGIN,
  };
}

export const dataLogin = () => (dispatch, getState) => {
  const state = getState().login;
  const {email, password} = state;
  console.log('STATE', state, email, password);
  // Axios.post( authApi, {email, password})
  authApi
    .login({email, password})
    .then(response => {
      if (response) {
        console.log('SUKSES LOGIN');
      }
    })
    .catch(error => {
      if (error) {
        console.log('FAILED');
      }
    });
};

import {SET_DATA, SET_ERROR, SET_LOADING} from './constants';
import {homeApi} from '../../services/api/home';
import {logoutService} from '../../utils/logoutService';

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

export const home = () => (dispatch, getState) => {
  const state = getState().login;
  const {token} = state;

  homeApi
    .home(token.token)
    .then(response => {
      if (response) {
        dispatch(setData('product', response.data));
        console.log('SUKSES FETCH');
      }
    })
    .catch(error => {
      if (error) {
        console.log('FAILED GET DATA');
      }
    });
};

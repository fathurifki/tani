import {ToastAndroid} from 'react-native';
import {SET_DATA, SET_ERROR, SET_LOADING, CLEAR_LOGIN} from './constants';
import {authApi} from '../../services/api/auth';
import NavigationService from '../../NavigationService';

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

  authApi
    .login({email, password})
    .then(response => {
      if (response) {
        dispatch(setData('token', response.data));
        dispatch(setData('tokenDelete', response.data));
        console.log('RESPONSE', response);
        ToastAndroid.show('Berhasil Login !', ToastAndroid.SHORT);
        NavigationService.navigate('home');
      }
    })
    .catch(error => {
      if (error) {
        ToastAndroid.show(
          'ID/Password salah silahkan ulangi !',
          ToastAndroid.SHORT,
        );
        console.log('FAILED');
      }
    });
};

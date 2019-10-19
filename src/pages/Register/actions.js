import {SET_DATA, SET_ERROR, SET_LOADING} from './constants';
import {registeredApi} from '../../services/api/register';
import NavigationService from '../../NavigationService';

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

export const register = () => (dispatch, getState) => {
  const state = getState().register;
  const {email, password} = state;

  console.log('STATE', email, password);
  registeredApi
    .register({email, password})
    .then(response => {
      if (response) {
        console.log('RESPONSE REGISTER');
        console.log('SUKSESS REGISTER');
        NavigationService.navigate('login');
      }
    })
    .catch(error => {
      if (error) {
        console.log('FAIL REGISTER');
      }
    });
};

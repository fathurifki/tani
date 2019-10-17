import {SET_DATA, SET_LOADING, SET_ERROR, SET_DATA_USER} from './constants';
import {profileApi} from '../../services/api/profile';

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

export const fetchProfile = () => (dispatch, getState) => {
  const state = getState().login;
  const {token} = state;

  profileApi
    .getProfile(token.token)
    .then(response => {
      if (response) {
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

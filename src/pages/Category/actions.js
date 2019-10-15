import {SET_DATA, SET_LOADING, SET_ERROR} from './constants';
import {categoryApi} from '../../services/api/category';
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

export const categoryData = category => (dispatch, getState) => {
  const state = getState().login;
  const {token} = state;

  console.log('STATE', state);
  console.log('TOKEN', token.token);
  console.log('CATEGORY', category);

  categoryApi
    .category(category, token.token)
    .then(response => {
      if (response) {
        console.log('DATA CATEGORY', response.data);
        dispatch(setData('categoryData', response.data));
        console.log('SUKSES FETCH');
      }
    })
    .catch(error => {
      if (error) {
        console.log(error);
        console.log('FAILED GET CATEGORY');
      }
    });
};

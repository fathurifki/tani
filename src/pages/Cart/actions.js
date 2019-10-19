import {SET_DATA, SET_ERROR, SET_LOADING} from './constants';
import {cartApi} from '../../services/api/cart';

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

export const fetchCart = () => (dispatch, getState) => {
  const {
    login: {token},
    cart: {carts},
  } = getState();

  console.log('CARTS', carts);
  console.log('Token', token);

  cartApi
    .getCart(token.token)
    .then(response => {
      if (response) {
        console.log('RESPONSE CART', response.data);
        dispatch(setData('carts', response.data));
        console.log('SUKSES FETCH CART');
      }
    })
    .catch(error => {
      if (error) {
        console.log(error);
        console.log('FAILED FETCH CART');
      }
    });
};

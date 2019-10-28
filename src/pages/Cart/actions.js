import {SET_DATA, SET_ERROR, SET_LOADING} from './constants';
import {cartApi} from '../../services/api/cart';
import {deleteCartApi} from '../../services/api/deleteCart';

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
  } = getState();

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

export const checkoutCart = idProduct => (dispatch, getState) => {
  const state = getState().login;
  const {token} = state;

  const payload = {cart_id: [idProduct]};

  cartApi
    .patchPayment(payload, token.token)
    .then(response => {
      if (response) {
        dispatch(fetchCart());
        dispatch(setData('url', response.data));
        console.log('RESPONSE', response);
        console.log('SUKSES CHECKOUT CART');
      }
    })
    .catch(error => {
      if (error) {
        console.log(error);
        console.log('FAILED CHECKOUT CART');
      }
    });
};

export const deleteCart = idDelete => (dispatch, getState) => {
  const state = getState().login;
  const {tokenDelete} = state;

  console.log('TOKEN DELETE', tokenDelete.token);

  const payload = {cart_id: [idDelete]};
  console.log('id delete', idDelete);
  deleteCartApi
    .deleteCart(payload, tokenDelete.token)
    .then(response => {
      if (response) {
        console.log('RESPONSE', response);
        dispatch(fetchCart());
        console.log('SUKSES DELETE');
      }
    })
    .catch(error => {
      if (error) {
        console.log(error);
        console.log('FAILED DELETE CART');
      }
    });
};

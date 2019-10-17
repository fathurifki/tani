import {SET_DATA, SET_LOADING, SET_ERROR} from './constants';
import {detailProductApi} from '../../services/api/detailProduct';
import {buyProductApi} from '../../services/api/buyProduct';
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

export const fetchDetail = idProduct => (dispatch, getState) => {
  const state = getState().login;
  const {token} = state;

  console.log('ID', idProduct);
  console.log('TOKEN', token.token);

  detailProductApi
    .category(idProduct, token.token)
    .then(response => {
      if (response) {
        dispatch(setData('detailProduct', response.data));
        console.log('SUKSES FETCH DETAIL');
      }
    })
    .catch(error => {
      if (error) {
        console.log(error);
        console.log('FAILED GET DETAL');
      }
    });
};

export const requestBuy = id => (dispatch, getState) => {
  const {
    login: {token},
    detailProduct: {amount},
  } = getState();

  console.log('STATE', token);

  const payload = {product_id: id, amount: amount};
  console.log('PAYLOAD', payload);
  buyProductApi
    .buyProduct(payload, token.token)
    .then(response => {
      if (response) {
        console.log('DATA', response.data);
        dispatch(setData('link', response.data.invoice_url));
        console.log('SUKSES BUY PRODUCT');
        NavigationService.navigate('payment');
      }
    })
    .catch(error => {
      if (error) {
        console.log(error);
        console.log('FAILED BUY PRODUCT');
      }
    });
};

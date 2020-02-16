import {ToastAndroid} from 'react-native';
import {SET_DATA, SET_LOADING, SET_ERROR} from './constants';
import {sellProductApi} from '../../services/api/sell';
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

export const sellProduct = data => (dispatch, getState) => {
  const state = getState().login;
  const {token} = state;
  console.log('DATAssssss', data);

  const {
    uri,
    type,
    filename,
    name,
    price,
    stock,
    category,
    weight,
    description,
  } = data;

  const formData = new FormData();
  formData.append('name', name);
  formData.append('price', price);
  formData.append('stock', stock);
  formData.append('category', category);
  formData.append('weight', weight);
  formData.append('description', description);
  formData.append('product_image', {uri: uri, type: type, name: filename});

  sellProductApi
    .sellProduct(formData, token.token)
    .then(response => {
      if (response) {
        console.log('SUKSES CREATE');
        ToastAndroid.show('Berhasil Menjual Barang !', ToastAndroid.SHORT);
        NavigationService.navigate('home');
      }
    })
    .catch(error => {
      if (error) {
        console.log('ERROR', error);
        ToastAndroid.show('Cek Kembali !', ToastAndroid.SHORT);
        console.log('FAILED CREATE');
      }
    });
};

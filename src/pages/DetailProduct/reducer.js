import {SET_DATA, SET_ERROR, SET_LOADING} from './constants';

const initialState = {
  detailProduct: {},
  amount: null,
  link: '',
};

const detailProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA:
      return {...state, [action.field]: action.value};
    case SET_LOADING:
      return {...state, isLoading: action.status};
    case SET_ERROR:
      return {...state, errors: action.errors};
    default:
      return state;
  }
};

export default detailProductReducer;

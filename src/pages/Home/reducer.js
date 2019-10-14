import {SET_DATA, SET_LOADING, SET_ERROR} from './constants';

const initialState = {
  isLoading: false,
  product: [],
  errors: [],
};

const HomeReducer = (state = initialState, action) => {
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

export default HomeReducer;

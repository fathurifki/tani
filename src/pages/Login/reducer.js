import {
  SET_DATA,
  SET_ERROR,
  SET_LOADING,
  SEND_REQUEST,
  CLEAR_LOGIN,
} from './constants';

const initialState = {
  email: '',
  password: '',
  isLoading: false,
  dataLogin: {},
  loginDetail: {},
};

const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA:
      return {...state, [action.field]: action.values};
    case SET_LOADING:
      return {...state, isLoading: action.status};
    case CLEAR_LOGIN:
      return {
        ...state,
        email: '',
        password: '',
      };
    default:
      return state;
  }
};

export default LoginReducer;

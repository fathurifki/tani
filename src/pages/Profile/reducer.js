import {
  SET_DATA,
  SET_LOADING,
  SET_ERROR,
  SET_DATA_USER,
  CLEAR_DATA,
} from './constants';

const initialState = {
  profile: {},
  nameData: '',
  user: {
    name: '',
    phone_number: null,
    address: '',
    city: '',
    rekening_name1: '',
    rekening_number1: null,
    rekening_name2: '',
    rekening_number2: null,
  },
  status: [],
};

const ProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA:
      return {...state, [action.field]: action.value};
    case SET_LOADING:
      return {...state, isLoading: action.status};
    case SET_ERROR:
      return {...state, errors: action.errors};
    case SET_DATA_USER:
      return {...state, user: {...state.user, [action.field]: action.value}};
    case CLEAR_DATA:
      return {...initialState};
    default:
      return state;
  }
};

export default ProfileReducer;

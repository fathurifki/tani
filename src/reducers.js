import {combineReducers} from 'redux';
import LoginReducer from '../src/pages/Login/reducer';

const reducers = combineReducers({
  login: LoginReducer,
});

export default reducers;

import {combineReducers} from 'redux';
import LoginReducer from '../src/pages/Login/reducer';
import HomeReducer from './pages/Home/reducer';

const reducers = combineReducers({
  login: LoginReducer,
  home: HomeReducer,
});

export default reducers;

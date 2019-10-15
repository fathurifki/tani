import {combineReducers} from 'redux';
import LoginReducer from '../src/pages/Login/reducer';
import HomeReducer from './pages/Home/reducer';
import CategoryReducer from './pages/Category/reducer';

const reducers = combineReducers({
  login: LoginReducer,
  home: HomeReducer,
  category: CategoryReducer,
});

export default reducers;

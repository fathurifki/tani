import {combineReducers} from 'redux';
import LoginReducer from '../src/pages/Login/reducer';
import HomeReducer from './pages/Home/reducer';
import CategoryReducer from './pages/Category/reducer';
import detailProductReducer from './pages/DetailProduct/reducer';
import ProfileReducer from './pages/Profile/reducer';
import SellReducer from './pages/Sell/reducer';

const reducers = combineReducers({
  login: LoginReducer,
  home: HomeReducer,
  category: CategoryReducer,
  detailProduct: detailProductReducer,
  profile: ProfileReducer,
  sell: SellReducer,
});

export default reducers;

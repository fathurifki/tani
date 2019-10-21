import {combineReducers} from 'redux';
import LoginReducer from '../src/pages/Login/reducer';
import HomeReducer from './pages/Home/reducer';
import CategoryReducer from './pages/Category/reducer';
import detailProductReducer from './pages/DetailProduct/reducer';
import ProfileReducer from './pages/Profile/reducer';
import SellReducer from './pages/Sell/reducer';
import CartReducer from './pages/Cart/reducer';
import RegisterReducer from './pages/Register/reducer';
import PaymentStatusReducer from './pages/PaymentStatus/reducer';

const reducers = combineReducers({
  login: LoginReducer,
  home: HomeReducer,
  category: CategoryReducer,
  detailProduct: detailProductReducer,
  profile: ProfileReducer,
  sell: SellReducer,
  cart: CartReducer,
  register: RegisterReducer,
  paymentStatus: PaymentStatusReducer,
});

export default reducers;

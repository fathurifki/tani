import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Login from '../pages/Login';
import Home from '../pages/Home';
import Category from '../pages/Category';
import DetailProduct from '../pages/DetailProduct';
import Profile from '../pages/Profile';
import Sell from '../pages/Sell';
import Register from '../pages/Register';
import Cart from '../pages/Cart';
import Payment from '../pages/Payment';

const appNavigator = createStackNavigator(
  {
    login: {
      screen: Login,
      navigationOptions: {
        header: null,
      },
    },
    home: {
      screen: Home,
      navigationOptions: {
        header: null,
      },
    },
    category: {
      screen: Category,
      navigationOptions: {
        header: null,
      },
    },
    detailproduct: {
      screen: DetailProduct,
      navigationOptions: {
        header: null,
      },
    },
    profile: {
      screen: Profile,
      navigationOptions: {
        header: null,
      },
    },
    sell: {
      screen: Sell,
      navigationOptions: {
        header: null,
      },
    },
    register: {
      screen: Register,
      navigationOptions: {
        header: null,
      },
    },
    cart: {
      screen: Cart,
      navigationOptions: {
        header: null,
      },
    },
    payment: {
      screen: Payment,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    initialRouteName: 'login',
  },
);

export default createAppContainer(appNavigator);

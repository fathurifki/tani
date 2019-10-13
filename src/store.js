import {persistStore, persistReducer} from 'redux-persist';
import {createStore, applyMiddleware} from 'redux';
import AsyncStorage from '@react-native-community/async-storage';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
let store = createStore(persistedReducer, applyMiddleware(thunk));

export const persistor = persistStore(store);

export default store;

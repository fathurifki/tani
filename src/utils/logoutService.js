import {persistor} from '../store';

export const logoutService = () => {
  persistor.purge();
};

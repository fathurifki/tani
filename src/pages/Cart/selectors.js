import {createSelector} from 'reselect';

export const selectCartReducer = () => state => {
  return state.cart;
};

export const getData = () =>
  createSelector(
    selectCartReducer(),
    state => state.carts,
  );

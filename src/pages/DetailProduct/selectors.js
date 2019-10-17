import {createSelector} from 'reselect';

export const selectDetailProductReducer = () => state => {
  return state.detailProduct;
};

export const getData = () =>
  createSelector(
    selectDetailProductReducer(),
    state => state.detailProduct,
  );

export const getLink = () =>
  createSelector(
    selectDetailProductReducer(),
    state => state.link,
  );

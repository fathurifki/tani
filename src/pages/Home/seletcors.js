import {createSelector} from 'reselect';

export const selectHomeReducer = () => state => {
  return state.home;
};

export const getData = () =>
  createSelector(
    selectHomeReducer(),
    state => state.product,
  );

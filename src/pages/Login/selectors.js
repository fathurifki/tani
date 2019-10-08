import {createSelector} from 'reselect';

export const selectLoginReducer = () => state => {
  return state.login;
};

export const getErrors = () =>
  createSelector(
    selectLoginReducer(),
    state => state.errors,
  );

export const getLoading = () =>
  createSelector(
    selectLoginReducer(),
    state => state.loading,
  );

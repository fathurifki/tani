import {createSelector} from 'reselect';

export const selectProfileReducer = () => state => {
  return state.profile;
};

export const getDataProfile = () =>
  createSelector(
    selectProfileReducer(),
    state => state.profile,
  );

export const getDataPayment = () =>
  createSelector(
    selectProfileReducer(),
    state => state.status,
  );

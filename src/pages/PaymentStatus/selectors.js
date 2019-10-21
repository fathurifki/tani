import {createSelector} from 'reselect';

export const selectPaymentStatusReducer = () => state => {
  return state.paymentStatus;
};

export const getDataPayment = () =>
  createSelector(
    selectPaymentStatusReducer(),
    state => state.status,
  );

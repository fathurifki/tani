import {createSelector} from 'reselect';

export const selectCategoryReducer = () => state => {
  return state.category;
};

export const getData = () =>
  createSelector(
    selectCategoryReducer(),
    state => state.categoryData,
  );

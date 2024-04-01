// selector.ts
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ItemsState } from '../reducers/cartReducer';

export const selectItemsState = createFeatureSelector<ItemsState>('items');

export const selectItems = createSelector(
  selectItemsState,
  (state) => state.items
);

export const selectLoading = createSelector(
  selectItemsState,
  (state) => state.loading
);

export const selectError = createSelector(
  selectItemsState,
  (state) => state.error
);

import { createReducer, on } from '@ngrx/store';
import * as cartActions from '../actions/cartActions';

export interface ItemsState {
  items: any[];
  loading: boolean;
  error: any;
}

export const initialState: ItemsState = {
  items: [],
  loading: false,
  error: null,
};

export const itemsReducer = createReducer(
  initialState,
  on(
    cartActions.loadItems,
    (state) => ({
      ...state,
      loading: true
    })),
  on(
    cartActions.loadItemsSuccess,
    (state, { items }) => ({
      ...state,
      items: items,
      loading: false,
      error: null
    })),
  on(cartActions.loadItemsFailure,
    (state, { error }) => ({
      ...state,
      loading: false,
      error
    })),
);

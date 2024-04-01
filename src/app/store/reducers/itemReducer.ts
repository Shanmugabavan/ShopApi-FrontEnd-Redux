import { createReducer, on } from '@ngrx/store';
import * as itemActions from '../actions/itemActions';

export interface ItemsState {
  item: any;
  loading: boolean;
  error: any;
}

export const initialState: ItemsState = {
  item: null,
  loading: false,
  error: null,
};

export const itemsReducer = createReducer(
  initialState,
  on(itemActions.addItem, (state, {item}) => ({ ...state, item, loading: true })),
  on(itemActions.addItemSuccess, (state) => ({ ...state, loading: false, error: null })),
  on(itemActions.addItemFailure, (state, { error }) => ({ ...state, loading: false, error })),
);

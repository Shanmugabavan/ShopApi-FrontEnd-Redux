import { createAction, props } from "@ngrx/store";
import { Item } from "../../Models/Item";

export const addItem = createAction('[Item] Add Item', props<{ item: Item }>());
export const addItemSuccess = createAction('[Item] Add Item Success', props<{ success: string }>());
export const addItemFailure = createAction('[Item] Add Item Failure', props<{ error: string }>());

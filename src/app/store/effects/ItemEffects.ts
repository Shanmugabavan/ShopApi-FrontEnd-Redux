import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as cartActions from '../actions/cartActions';
import * as itemActions from '../actions/itemActions';
import { ItemService } from '../../Services/ItemService/ItemService'; // Import your service for fetching items

@Injectable()
export class ItemEffects {
  getItems$ = createEffect(() =>
    this.actions$.pipe(
      ofType(cartActions.loadItems),
      switchMap(() =>
        this.itemService.getItems().pipe(
          map((items) => cartActions.loadItemsSuccess({ items })),
          catchError((error) => of(cartActions.loadItemsFailure({ error })))
        )
      )
    )
  );

  AddItem$ = createEffect(() =>
    this.actions$.pipe(
      ofType(itemActions.addItem),
      switchMap((action) =>
        this.itemService.addItem(action.item).pipe(
          map((success) => itemActions.addItemSuccess({ success })),
          catchError((error) => of(itemActions.addItemFailure({ error })))
        )
      )
    )
  );



  constructor(private actions$: Actions, private itemService: ItemService) {}
}

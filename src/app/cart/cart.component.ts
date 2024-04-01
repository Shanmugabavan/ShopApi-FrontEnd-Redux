import {Component, OnInit} from '@angular/core';
import { Store } from "@ngrx/store";
import {loadItems} from "../store/actions/cartActions";
import { selectItems, selectLoading, selectError } from '../store/Selectors/selector';
import {Item} from "../Models/Item";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{
  items$ = this.store.select(selectItems);
  loading$ = this.store.select(selectLoading);
  error$ = this.store.select(selectError);
  items: Item[] = [];
  private itemsSubscription: Subscription | undefined;
  constructor(private store: Store) {
  }
  ngOnInit(): void {
    this.store.dispatch(loadItems());
  }

  onGetItems(){
    // console.log("hi");
    // this.store.dispatch(loadItems());
    // this.items$.subscribe((state) => {
    //   this.items = state;
    // });

    this.itemsSubscription = this.store.select(selectItems).subscribe((items) => {
      this.items = items;
    });
    console.log(this.items);

  }

}

import {Component, OnInit} from '@angular/core';
import {Item} from "../Models/Item";
import {FormControl, FormGroup} from "@angular/forms";
import {Store} from "@ngrx/store";
import {addItem} from "../store/actions/itemActions";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent implements OnInit{
  item: Item;
  itemForm: FormGroup;

  constructor(private store: Store) {
  }
  ngOnInit(): void {
    this.initForm();
  }

  private initForm(){
    let id: string = '';
    let name: string = '';
    let price: string = '';
    let statu: string = '';

    this.itemForm = new FormGroup({
      'id': new FormControl(id),
      'name': new FormControl(name),
      'price': new FormControl(price),
      'status': new FormControl(status),
    });
  }

  onSubmit(){
    this.item = new Item(
      +this.itemForm.value.id,
      this.itemForm.value.name,
      this.itemForm.value.price,
      this.itemForm.value.status
    );
    console.log(this.item);
    this.store.dispatch(addItem({ item: this.item }));

  }

}

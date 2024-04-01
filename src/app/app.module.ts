import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { EffectsModule } from '@ngrx/effects';
import { ItemService } from "./Services/ItemService/ItemService";
import { itemsReducer } from "./store/reducers/cartReducer";
import { ItemEffects } from "./store/effects/ItemEffects";
import {HttpClientModule} from "@angular/common/http";
import { ItemComponent } from './item/item.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    ItemComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    StoreModule.forRoot({items: itemsReducer}, {}),
    EffectsModule.forRoot([ItemEffects]),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }

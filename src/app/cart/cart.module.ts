import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from '../core/core.module';

import { CartComponent } from './cart.component';
import { CartListComponent } from './cart-list/cart-list.component';
import { CartItemComponent } from './cart-item/cart-item.component';

@NgModule({
  imports: [
    CommonModule,
    CoreModule
  ],
  declarations: [
    CartComponent,
    CartListComponent,
    CartItemComponent
  ],
  exports: [
    CartComponent
  ],
})
export class CartModule { }

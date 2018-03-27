import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartService } from './cart/cart.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    CartService
  ],
  declarations: []
})
export class CoreModule { }

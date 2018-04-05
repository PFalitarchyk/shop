import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderByPipe } from './order-by/order-by.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [OrderByPipe],
  declarations: [OrderByPipe]
})
export class SharedModule { }

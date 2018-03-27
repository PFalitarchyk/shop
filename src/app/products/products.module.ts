import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsComponent } from './products.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductsService } from './shared/products.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ProductComponent,
    ProductListComponent,
    ProductsComponent
  ],
  exports: [
    ProductsComponent
  ],
  providers: [
    ProductsService
  ]
})
export class ProductsModule { }

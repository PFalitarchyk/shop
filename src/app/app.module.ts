import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { ProductComponent } from './products/product/product.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductsComponent } from './products/products.component';
import { ProductsService } from './products/shared/products.service';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    ProductComponent,
    ProductListComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

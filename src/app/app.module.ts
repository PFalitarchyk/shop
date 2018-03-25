import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { CartService } from './cart/cart.service';


import { CartModule } from './cart/cart.module';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    CartModule,
    ProductsModule,
    OrdersModule,
    CoreModule,
    SharedModule
  ],
  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }

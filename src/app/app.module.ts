import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { CartModule } from './cart/cart.module';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { DemoComponent } from './demo/demo.component';
import { DemoDirective } from './demo/demo.directive';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    DemoDirective
  ],
  imports: [
    BrowserModule,
    CartModule,
    ProductsModule,
    OrdersModule,
    CoreModule,
    SharedModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

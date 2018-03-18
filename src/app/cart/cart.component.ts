import { Component, OnInit } from '@angular/core';

import { CartService } from './cart.service';
import { Product } from '../products/shared/product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products: Product[];

  constructor(
    public cartService: CartService) { }

  ngOnInit() {
    this.products = this.cartService.getProducts();
  }

  onBuy(): void {
    console.log(this.products);
    this.cartService.buy();
  }

}

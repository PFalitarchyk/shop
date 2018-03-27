import { Component, OnInit } from '@angular/core';

import { CartService } from '../core/cart/cart.service';
import { Product } from '../core/products/product.model';

import { ProductsService } from './shared/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[];

  constructor(
    public cartService: CartService,
    public productsService: ProductsService
  ) { }

  ngOnInit() {
    this.products = this.productsService.getProducts();
  }

  onBuy(product: Product): void {
    this.cartService.addToCart(product);
    console.log(product);
  }
}

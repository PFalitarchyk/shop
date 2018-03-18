import { Injectable } from '@angular/core';

import { Product } from '../products/shared/product.model';

@Injectable()
export class CartService {
  private products: Product[] = [];

  constructor() { }

  getProducts(): Product[] {
    return this.products;
  }

  addToCart(product: Product): void {
    this.products.push(product);
  }

  buy(): void {
    this.products.length = 0;
  }

}

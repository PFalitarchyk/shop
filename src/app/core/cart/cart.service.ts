import { Injectable } from '@angular/core';

import { Product } from '../products/product.model';

import { CartItem } from './cart-item.model';

@Injectable()
export class CartService {
  private cartItems: CartItem[] = [];

  constructor() { }

  getCartItems(): CartItem[] {
    return this.cartItems;
  }

  getPrice(): number {
    let price = 0;
    this.cartItems.forEach(r => price += r.getPrice());
    return price;
  }

  getQuantity(): number {
    let quantity = 0;
    this.cartItems.forEach(r => quantity += r.quantity);
    return quantity;
  }

  addToCart(product: Product, quantity: number = 1): void {
    let cartItem = this.cartItems.find(r => r.product.id === product.id);
    if (cartItem) {
      cartItem.quantity += quantity;
    } else {
      cartItem = new CartItem(product);
      this.cartItems.push(cartItem);
    }
  }

  removeFromCart(cartItem: CartItem): void {
      this.cartItems.splice(this.cartItems.indexOf(cartItem), 1);
  }

  decreaseItemsQuantity(cartItem: CartItem): void {
    cartItem.quantity -= 1;
    if (cartItem.quantity < 1) {
      this.removeFromCart(cartItem);
    }
  }

  increaseItemsQuantity(cartItem: CartItem): void {
    cartItem.quantity += 1;
  }

  buy(): void {
    this.cartItems.length = 0;
  }
}

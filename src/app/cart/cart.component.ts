import { Component, OnInit, ViewChild } from '@angular/core';

import { CartService } from '../core/cart/cart.service';
import { CartItem } from '../core/cart/cart-item.model';

import { CartListComponent } from './cart-list/cart-list.component';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: CartItem[];

  @ViewChild('cartList')
  child1: CartListComponent;

  @ViewChild(CartListComponent)
  child2: CartListComponent;

  constructor(
    public cartService: CartService) { }

  ngOnInit() {
    this.cartItems = this.cartService.getCartItems();
  }

  getPrice(): number {
    return this.cartService.getPrice();
  }

  onRemove(cartItem: CartItem): void {
    this.cartService.removeFromCart(cartItem);

    console.log(this.child1.testProp);
    console.log(this.child2.testProp);
  }

  onIncreaseItemsQuantity(cartItem: CartItem): void {
    this.cartService.increaseItemsQuantity(cartItem);
  }

  onDecreaseItemsQuantity(cartItem: CartItem): void {
    this.cartService.decreaseItemsQuantity(cartItem);
  }

  onBuy(): void {
    console.log(this.cartItems);
    this.cartService.buy();
  }
}

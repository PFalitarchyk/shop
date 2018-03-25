import { Component, OnInit } from '@angular/core';

import { CartService } from '../shared/cart/cart.service';
import { CartItem } from '../shared/cart/cart-item.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: CartItem[];

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
  }

  onBuy(): void {
    console.log(this.cartItems);
    this.cartService.buy();
  }
}

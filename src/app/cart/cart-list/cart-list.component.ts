import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';

import { CartItem } from '../../core/cart/cart-item.model';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
  @Input() cartItems: CartItem[];
  @Output() remove: EventEmitter<CartItem> = new EventEmitter();
  @Output() increaseItemsQuantity: EventEmitter<CartItem> = new EventEmitter();
  @Output() decreaseItemsQuantity: EventEmitter<CartItem> = new EventEmitter();

  testProp = 'cart-sist-string';
  orderBy = 'quantity';
  order = true;
  constructor() { }

  ngOnInit() {
  }

  onRemove(cartItem: CartItem): void {
    this.remove.emit(cartItem);
  }

  onIncreaseItemsQuantity(cartItem: CartItem): void {
    this.increaseItemsQuantity.emit(cartItem);
  }

  onDecreaseItemsQuantity(cartItem: CartItem): void {
    this.decreaseItemsQuantity.emit(cartItem);
  }
}

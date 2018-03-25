import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';

import { CartItem } from '../../shared/cart/cart-item.model';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
  @Input() cartItems: CartItem[];
  @Output() remove: EventEmitter<CartItem> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onRemove(cartItem: CartItem): void {
    this.remove.emit(cartItem);
  }
}

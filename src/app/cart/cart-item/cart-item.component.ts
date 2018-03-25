import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';

import { CartItem } from '../../shared/cart/cart-item.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() cartItem: CartItem;
  @Output() remove: EventEmitter<CartItem> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onRemove(): void {
    this.remove.emit(this.cartItem);
  }
}

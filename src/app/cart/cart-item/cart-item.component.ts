import { Component, EventEmitter, OnDestroy, OnInit, Input, Output,
  HostListener } from '@angular/core';

import { CartItem } from '../../core/cart/cart-item.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnDestroy, OnInit {
  @Input() cartItem: CartItem;
  @Output() remove: EventEmitter<CartItem> = new EventEmitter();

  className = '';

  @HostListener('mouseenter', ['$event'])
    enter(event: Event) {
      this.className = 'active-item';
    }

  @HostListener('mouseleave', ['$event'])
    leave(event: Event) {
      this.className = '';
    }

  constructor() { }

  ngOnInit() {
    console.log('init CartItem');
  }

  ngOnDestroy() {
    console.log('destroy CartItem');
  }

  onRemove(): void {
    this.remove.emit(this.cartItem);
  }
}

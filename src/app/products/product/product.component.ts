import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';

import { Product } from '../../core/products/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product: Product;
  @Output() buy: EventEmitter<Product> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onBuy(): void {
    this.buy.emit(this.product);
  }
}

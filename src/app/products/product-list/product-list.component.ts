import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';

import { Product } from '../shared/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Input() products: Product[];
  @Output() buy: EventEmitter<Product> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onBuy(product: Product): void {
    this.buy.emit(product);
  }

}

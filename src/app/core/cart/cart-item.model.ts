import { Product } from '../products/product.model';

export class CartItem {
  constructor(
    public product: Product,
    public quantity: number = 1
  ) {}

  public getCost(): number {
    return this.product.price * this.quantity;
  }

  get cost(): number {
    return this.product.price * this.quantity;
  }

  get name(): string {
    return this.product.name;
  }
}

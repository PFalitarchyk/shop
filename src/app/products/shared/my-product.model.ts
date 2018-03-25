import { ProductCategory } from './product-category.enum';
import { Product } from './product.model';

export class MyProduct implements Product {
  constructor(
    public name: string,
    public description: string,
    public price: number,
    public category: ProductCategory,
    public isAvailable: boolean = false,
    public tags: string[] = []
  ) {}
}

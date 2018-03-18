import { ProductCategory } from './product-category.enum';

export interface Product {
    name: string;
    description: string;
    price: number;
    category: ProductCategory;
    isAvailable: boolean;
    tags: string[];
  }

import { ProductCategory } from './product-category.enum';

export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    category: ProductCategory;
    isAvailable: boolean;
    tags: string[];
    date: Date;
  }

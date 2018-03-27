import { Injectable } from '@angular/core';

import { ProductCategory } from '../../core/products/product-category.enum';
import { Product } from '../../core/products/product.model';
import { MyProduct } from '../../core/products/my-product.model';

@Injectable()
export class ProductsService {

  constructor() { }

  getProducts(): Product[] {
    return [
      new MyProduct(1, 'Xiaomi Redmi 5 Plus 3GB/32GB (черный)',
        `Android, экран 6" IPS (1080x2160), Qualcomm Snapdragon 625 MSM8953,
        ОЗУ 3 ГБ, флэш-память 32 ГБ, карты памяти, камера 12 Мп,
        аккумулятор 4000 мАч, 2 SIM, цвет черный`
        , 150, ProductCategory.Electronics, true, ['Phone', 'Xiaomi']),
      new MyProduct(2, 'Холодильник Samsung RS55K50A02C',
        `полный No Frost, электронное управление, класс A+,
        полезный объём: 536 л (338 + 198 л), 91.2x70x178.9 см, черный`
        , 1300, ProductCategory.Appliances, true, ['Fridge', 'Samsung']),
      new MyProduct(3, 'Lenovo Legion Y520-15 [80WK002MRK]',
        `15.6" 1920 x 1080 матовый, Intel Core i7 7700HQ 2800 МГц, 8 ГБ,
        1000 ГБ (HDD), NVIDIA GeForce GTX 1050, Windows 10, цвет крышки черный,
        цвет корпуса черный`
        , 1000, ProductCategory.ComputersAndAccessories, false, ['Laptop', 'Lenovo']),
    ];
  }
}

# Shop

Home task for Angular #11

## Task 1

Реализованы компоненты ProductComponent и ProductListComponent для работы с продуктами используя ProductsService.
Реализован CartComponent для работы с корзиной используя CartService.

## Task 2
Добавлены CartModule, ProductsModule, OrdersModule, CoreModule, SharedModule
Перенесана реализация ProductComponent и ProductListComponent в ProductsModule
Реализованы СartItemComponent и CartListComponent.
В СartItemComponent и CartListComponent добавлены демо использования #variable и @ViewChild и получение доступа к методам(свойствам) дочернего компонента, @HostListener декоратор и ngClass.

## Task 4
Использованы пайпы для формата свойств продукта: цены, даты, категории.
Изменен метод getProducts() сервиса ProductService так, чтобы он возвращал промис. Применен async пайп для отображения данных, предоставленных сервисом ProductService на странице.
Создан и использован в корзине OrderByPipe для сортирокки элементов в корзине.
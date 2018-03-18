# Shop

Angular Introduction Home Tasks

## Task1

1. Проинсталировать Angular-CLI (https://github.com/angular/angular-cli)
    - Просмотреть CLI QuickStart https://angular.io/docs/ts/latest/cli-quickstart.html
    - Просмотреть Style Guide https://angular.io/docs/ts/latest/guide/style-guide.html
2. Создайте проект на гитхабе и бренч Task1 для первого задания.

3. Создайте проект (ng new shop)

4. Создайте компонент ProductComponent. Используйте его в AppComponent.
3. Добавьте несколько простых свойств для компонента ProductComponent и несколько свойств в виде массива. Выведите их в темплейт:
    - name: string
    - description: string
    - price: number
    - category: enum (Создайте enum с несколькими категориями) https://www.typescriptlang.org/docs/handbook/enums.html
    - isAvailable: boolean
    - ...

5. Добавьте кнопку Buy. Реализуйте обработчик события клик onBuy(), который выводит в консоль сообщение о покупке товара.

6. Создайте сервис ProductsService, который будет возвращать товары. Модель товара опишите интерфейсом и классом, который реализует данный интерфейс.
   Зарегистрируйте сервис в AppModule. 
   Создайте компонент ProductListComponent. Используйте в нем сервис ProductsService, отобразите данные на станице c помощью директивы *ngFor.

7. Создайте компонент (ng g c cart) и используйте его в AppComponent темплейте. Компонент должен отображать список купленых товаров. 
   Организуйте список в виде отдельного сервиса - CartService.  Используйте директиву *ngIf + else для отображения корзины (CartComponent), если она не пустая.
   Если корзина пустая отображать другой альтернативный блок с сообщением о пустой корзине. Директиву *ngIf разместить на хосте компонента CartComponent

8. Реализуйте любую дополнительную функциональность.

9. Создайте файл changelog.md и описывайте в нем то, что реализовали.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

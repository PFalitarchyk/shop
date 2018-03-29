import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartService } from './cart/cart.service';

import { LocalStorageService } from './local-storage/local-storage.service';
import { ConfigOptionsService } from './config-options/config-options.service';
import { ConstantsService } from './constants/constants.service';
import { IConstantsService } from './constants/constants.interface';
import { GeneratorService } from './generator/generator.service';
import { GeneratorServiceFactory } from './generator/generator.factory';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    CartService,
    LocalStorageService,
    ConfigOptionsService,
    { provide: IConstantsService, useValue: ConstantsService },
    { provide: GeneratorService, useFactory: GeneratorServiceFactory, deps: [5] }
  ],
  declarations: []
})
export class CoreModule { }

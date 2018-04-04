import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartService } from './cart/cart.service';

import { LocalStorageService } from './local-storage/local-storage.service';
import { ConfigOptionsService } from './config-options/config-options.service';
import { ConstantsService } from './constants/constants.service';
import { IConstantsServiceToken } from './constants/constants.interface';
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
    { provide: IConstantsServiceToken, useValue: ConstantsService },
    { provide: GeneratorService, useFactory: GeneratorServiceFactory, deps: [IConstantsServiceToken]}
  ],
  declarations: []
})
export class CoreModule { }

import { Component, Inject, OnInit, Optional, OnDestroy  } from '@angular/core';

import { LocalStorageService } from '../core/local-storage/local-storage.service';
import { ConfigOptionsService } from '../core/config-options/config-options.service';
import { ConfigOptions } from '../core/config-options/config-options.model';
import { ConstantsService } from '../core/constants/constants.service';
import { IConstantsServiceToken } from '../core/constants/constants.interface';
import { IConstantsService } from '../core/constants/constants.interface';
import { GeneratorService } from '../core/generator/generator.service';
import { GeneratorServiceFactory } from '../core/generator/generator.factory';
import { LocalStorageItem } from '../core/local-storage/local-storage-item.model';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit, OnDestroy  {
  public const: string = null;
  public generatedString: string = null;

  public flagKey = 'flagKey';

  constructor(
    @Optional() public localStorageService: LocalStorageService,
    @Optional() public configOptionService: ConfigOptionsService,
    @Inject(IConstantsServiceToken) @Optional() public constantsService: IConstantsService,
    @Optional() public generatorService: GeneratorService
  ) { }

  ngOnInit() {
    if (this.configOptionService && this.localStorageService) {
      if (!this.localStorageService.getItem(this.flagKey).value) {
        this.localStorageService.setItem(new LocalStorageItem(this.flagKey, true));
        this.configOptionService.setConfigOptions(new ConfigOptions(1, 'login', 'login@mail.log'));
        console.log('setConfig');
      } else {
        console.log(this.configOptionService.getConfigOptions());
      }
    }

    if (this.constantsService) {
      this.const = JSON.stringify(this.constantsService);
    }

    if (this.generatorService) {
      this.generatedString = this.generatorService.getRandomString();
    }
  }

  public ngOnDestroy(): void {
    this.localStorageService.removeItem(this.flagKey);
    this.configOptionService.setConfigOptions(null);
 }
}

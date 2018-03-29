import { Injectable, OnInit } from '@angular/core';

import { LocalStorageService } from '../local-storage/local-storage.service';
import { LocalStorageItem } from '../local-storage/local-storage-item.model';
import { ConfigOptions } from './config-options.model';

@Injectable()
export class ConfigOptionsService {
    private configOptionsStorageKey = 'configOptionsStorage';

    constructor(public localStorageService: LocalStorageService) {
    }

    public setConfigOptions(configOptions: ConfigOptions): void {
        this.localStorageService.setItem(new LocalStorageItem(this.configOptionsStorageKey, configOptions));
    }

    public getConfigOptions(): ConfigOptions {
        return this.localStorageService.getItem(this.configOptionsStorageKey).value;
    }
}

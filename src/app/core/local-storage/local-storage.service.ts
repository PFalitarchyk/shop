import { Injectable } from '@angular/core';

import { LocalStorageItem } from './local-storage-item.model';

@Injectable()
export class LocalStorageService {
    public setItem(localStorageItem: LocalStorageItem): void {
        localStorage.setItem(localStorageItem.key, JSON.stringify(localStorageItem.value));
    }

    public getItem(key: string): LocalStorageItem {
        const value = localStorage.getItem(key);
        return new LocalStorageItem(key, JSON.parse(value));
    }

    public removeItem(key: string): void {
        localStorage.removeItem(key);
    }
}

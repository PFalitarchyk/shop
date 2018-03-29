import { InjectionToken } from '@angular/core';

export let IConstantsService = new InjectionToken<IConstantsService>('IConstantsService');

export interface IConstantsService {
    App: string;
    Ver: string;
}

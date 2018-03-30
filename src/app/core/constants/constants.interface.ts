import { InjectionToken } from '@angular/core';

export let IConstantsServiceToken = new InjectionToken<IConstantsService>('IConstantsService');

export interface IConstantsService {
    App: string;
    Ver: string;
}

import { InjectionToken } from '@angular/core';
import { GeneratorService } from './generator.service';

export function GeneratorServiceFactory(length: number) {
    return function (): GeneratorService {
        return new GeneratorService(length);
    };
}

import { InjectionToken } from '@angular/core';
import { GeneratorService } from './generator.service';

export function GeneratorServiceFactory(length: number): GeneratorService {
    return new GeneratorService(length);
}

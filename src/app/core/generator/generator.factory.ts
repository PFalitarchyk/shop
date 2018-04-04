import { InjectionToken } from '@angular/core';
import { GeneratorService } from './generator.service';

export function GeneratorServiceFactory(config: any) {
        return new GeneratorService(config.StringLength);
}

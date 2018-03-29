import { Injectable } from '@angular/core';

@Injectable()
export class GeneratorService {
    private availableChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

    constructor(public length: number) {
    }

    public getRandomString(): string {
        let randomString = '';
        for ( let i = 0; i < this.length; i++) {
            randomString += this.availableChars.charAt(Math.floor(Math.random() * this.availableChars.length));
        }

        return randomString;
    }
}

/* eslint-disable @typescript-eslint/no-unused-vars */
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class RandomService
{

    public randomApiUrl = 'http://www.randomnumberapi.com/api/v1.0/random?';

    constructor() { }

    // Read question, takes no arguments
    getRandomNumber(maxValue: number): Observable<number>
    {
        const O_RANDOM_NUMBER = new Observable<number>((observer) => {
            const CALC_NUMBER = Math.floor(Math.random() * maxValue);

            observer.next(CALC_NUMBER);
            observer.complete();
        });

        return O_RANDOM_NUMBER;
    }

}

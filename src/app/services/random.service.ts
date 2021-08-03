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
            // use maxValue - 1, otherwise random number might be too big
            let calcNumber = Math.random() * (maxValue - 1);

            // the following conditions is required, because Math.random return double between 0.0 & 1.0
            if (calcNumber >= 0.5)
            {
                calcNumber = Math.floor(calcNumber + 1);
                observer.next(calcNumber);
            }
            else
            {
                observer.next(Math.floor(calcNumber));
            }
            observer.complete();
        });

        return O_RANDOM_NUMBER;
    }

}

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from "rxjs/operators";

import BuzzWord from '../models/buzzWord.model';


@Injectable()
export class RandomService 
{

    random_api_url = 'http://www.randomnumberapi.com/api/v1.0/random?';
  
    constructor(
      private http: HttpClient
    ) { }
  
    //Read question, takes no arguments
    getRandomNumber(maxValue: number): Observable<number>
    {
        const o_randomNumber = new Observable<number>((observer ) => {
            let calcRandom: number;

            calcRandom = Math.floor(Math.random() * maxValue);
        })

        return o_randomNumber;
    }

}
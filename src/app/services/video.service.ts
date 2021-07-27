import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class BuzzWordService
{

    apiUrl = 'http://localhost:3000';
    buzzWordUrl = `${this.apiUrl}/api/buzzWord`;

    constructor(
        private http: HttpClient
    ) { }


}

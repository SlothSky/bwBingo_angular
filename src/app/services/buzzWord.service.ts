/* eslint-disable dot-notation */
/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable arrow-body-style */
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import BuzzWord from '../models/buzzWord.model';


@Injectable()
export class BuzzWordService
{

    apiUrl = 'http://localhost:3000';
    buzzWordUrl = `${this.apiUrl}/api/buzzWord`;

    constructor(
        private http: HttpClient
    ) { }

    // Create todo, takes a Question Object
    createBuzzWord(buzzWord: BuzzWord): Observable<any>
    {
        // returns the observable of http post request
        return this.http.post(`${this.buzzWordUrl}`, buzzWord);
    }

    // Read question, takes no arguments
    getBuzzWords(): Observable<BuzzWord[]>
    {
        /* If received value from http get is not a
         * Response, this will be catched in subscription
        */
        return this.http.get<Response>(this.buzzWordUrl)
            .pipe(map((response: Response)  => {
                if (response['data'].total > 0)
                {
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                    const BW_LIST: BuzzWord[] = response['data'].docs;

                    // Maps the response object sent from the server
                    return BW_LIST;
                }
            }));
    }

    // Update question, takes a Question Object as parameter
    editBuzzword(buzzWord: BuzzWord): any
    {
        const editUrl = `${this.buzzWordUrl}`;

        // returns the observable of http put request
        return this.http.put(editUrl, buzzWord);
    }

    deleteBuzzWord(id: string): any
    {
        // Delete the object by the id
        const deleteUrl = `${this.buzzWordUrl}/${id}`;

        return this.http.delete(deleteUrl)
            .pipe(map(res  => {
                return res;
            }));
    }

}

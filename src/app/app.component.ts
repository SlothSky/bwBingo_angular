import { Component, OnInit } from '@angular/core';

import { BuzzWordService } from './services/buzzWord.service';
import { RandomService } from './services/random.service';
import BuzzWord from './models/buzzWord.model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit
{
    public title = 'buzzWordBingo';
    public rows: number[] = [1,2,3,4,5,6,8,9,10];
    public columns: number[] = [1,2,3,4,5,6,8,9,10];

    // Random Number generated with the random number service
    public randomNumber: number;
    public randomNumberAsserter = false;

    // An Empty list for the visible question list
    public buzzWordList: BuzzWord[] = [];


    constructor(
        // Private questionService will be injected into the component by Angular Dependency Injector
        private buzzWordService: BuzzWordService,
        private randomService: RandomService
    ) { }


    ngOnInit(): void {
        this.getBuzzWords();
    }

    /* getBuzzWords(): void
     * description → retrieve currently stored buzz words via the buzz word service
     * onError → log error & set random number to error value "-1"
     * onCompletion → unsubscribe and call the getNumber method
    */
    getBuzzWords(): void
    {
        this.buzzWordService.getBuzzWords().subscribe(
            (data: BuzzWord[]) => {
                this.buzzWordList = data;
            },
            (errorData: HttpErrorResponse) => {
                console.log('Something went definitely wrong here: ' + errorData.status.toString()
                    + ' - ' + errorData.statusText + ' for URL call: ' + errorData.url);
                this.randomNumber = -1;
            },
            () => {
                this.getRandomNumber(this.buzzWordList.length);
            });
    }

    /* getRandomNumber(maxValue: number): void
     * description → retrieve a calculated random number via the random service
     * parameter_0 (maxValue: number) → the maximum value threshold for the calculation of the random number
     * onError → log error & set random number to error value "-1"
     * onCompletion → unsubscribe and set randomNumberAsserter to true
    */
    getRandomNumber(maxValue: number): void
    {
        this.randomService.getRandomNumber(maxValue).subscribe(
            (oRandom: number) => {
                this.randomNumber = oRandom;
            },
            () => {
                console.log('Was not available to retrieve number for this input value. Will not set randomNumber to -1');
                this.randomNumber = -1;
            },
            () => {
                this.randomNumberAsserter = true;
            }
        );
    }

    createQuestion(): void
    {
        const newBW = new BuzzWord('IoT', 'Internet of Crap', 1);

        this.buzzWordService.createBuzzWord(newBW).subscribe(buzzWords => {
            console.log(buzzWords);
            // assign the todolist property to the proper http response
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            this.buzzWordList = buzzWords;
        });
    }

    loadQuestion(level: number): void
    {
        window.alert(level);
    }
}

import { Component, OnInit } from '@angular/core';

import { BuzzWordService } from './services/buzzWord.service';
import { RandomService } from './services/random.service';
import BuzzWord from './models/buzzWord.model';

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
    public randomNumber;

    // An Empty list for the visible question list
    public buzzWordList: BuzzWord[] = [];


    constructor(
        // Private questionService will be injected into the component by Angular Dependency Injector
        private buzzWordService: BuzzWordService,
        private randomService: RandomService
    ) { }


    ngOnInit(): void {
        this.getQuestions();
        this.getNumber();
    }

    getQuestions(): void
    {
        // at component initialization the
        this.buzzWordService.getBuzzWords().subscribe(buzzWords => {
            console.log(buzzWords);
            // assign the todolist property to the proper http response
            this.buzzWordList = buzzWords;
        });
    }

    getNumber(): void
    {
        this.randomService.getRandomNumber(this.buzzWordList.length).subscribe(oRandom => {
            console.log(this.buzzWordList.length.toString() + ' ' + oRandom.toString());
        });
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

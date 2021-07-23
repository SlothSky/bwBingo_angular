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

  constructor(
    // Private questionService will be injected into the component by Angular Dependency Injector
    private buzzWordService: BuzzWordService,
    private randomService: RandomService
  ) { }

  public title = 'buzzWordBingo';
  public rows: number[] = [1,2,3,4,5,6,8,9,10];
  public columns: number[] = [1,2,3,4,5,6,8,9,10];

  // Random Number generated with the random number service
  public randomNumber;

  // An Empty list for the visible question list
  public buzzWordList: BuzzWord[] = [];

  ngOnInit(): void {
      this.getQuestions(); 
      this.getNumber();
  }

  async getQuestions() 
  {
    //At component initialization the 
    this.buzzWordService.getBuzzWords().subscribe(buzzWords => {
      console.log(buzzWords)
      //assign the todolist property to the proper http response
      this.buzzWordList = buzzWords;
    })
  }

  getNumber()
  {
    this.randomService.getRandomNumber(this.buzzWordList.length).subscribe(o_random => {
      console.log(this.buzzWordList.length + " " + o_random)
    });
  }

  createQuestion()
  {
    let newBW = new BuzzWord("IoT", "Internet of Crap", 1);

    this.buzzWordService.createBuzzWord(newBW).subscribe(buzzWords => {
      console.log(buzzWords)
      //assign the todolist property to the proper http response
      this.buzzWordList = buzzWords;
    });
  }

  loadQuestion(level: number)
  {
    window.alert(level)
  }
}

import { Component, OnInit } from '@angular/core';
import { BuzzWordService } from './services/buzzWord.service';
import BuzzWord from './models/buzzWord.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit  
{

  constructor(
    //Private questionService will be injected into the component by Angular Dependency Injector
    private buzzWordService: BuzzWordService
  ) { }

  public title = 'buzzWordBingo';
  public rows: number[] = [1,2,3,4,5,6,8,9,10];
  public columns: number[] = [1,2,3,4,5,6,8,9,10];

  //An Empty list for the visible question list
  buzzWordList: BuzzWord[];

  ngOnInit(): void {
    this.getQuestions();
  }

  getQuestions() 
  {
    //At component initialization the 
    this.buzzWordService.getBuzzWords().subscribe(buzzWords => {
      //assign the todolist property to the proper http response
      this.buzzWordList = buzzWords;
    })
  }

  loadQuestion(level: number)
  {
    window.alert(level)
  }
}

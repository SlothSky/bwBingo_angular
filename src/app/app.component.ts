import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { QuestionService } from './services/question.service';
import Question from './models/question.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit  
{

  constructor(
    //Private questionService will be injected into the component by Angular Dependency Injector
    private questionService: QuestionService
  ) { }

  public title = 'quiz';
  public levels: number[] = [1,2,3,4,5,6,8,9,10,11,12,13,14,15,16,17,18,19,20];

  //An Empty list for the visible question list
  questionList: Question[];

  ngOnInit(): void {
    this.getQuestions();
  }

  getQuestions() 
  {
    //At component initialization the 
    this.questionService.getQuestions().subscribe(questions => {
      //assign the todolist property to the proper http response
      this.questionList = questions;
    })
  }

  loadQuestion(level: number)
  {
    window.alert(level)
  }
}

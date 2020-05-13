import Question from '../models/question.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from "rxjs/operators";


@Injectable()
export class QuestionService 
{

  api_url = 'http://localhost:3000';
  questionUrl = `${this.api_url}/api/quiz`;

  constructor(
    private http: HttpClient
  ) { }

  //Create todo, takes a Question Object
  createQuestion(question: Question): Observable<any>
  {
    //returns the observable of http post request 
    return this.http.post(`${this.questionUrl}`, question);
  }

  //Read question, takes no arguments
  getQuestions(): Observable<Question[]>
  {
    return this.http.get(this.questionUrl)
    .pipe(map(res  => {

      //Maps the response object sent from the server
      return res["data"].docs as Question[];
    }))
  }

  //Update question, takes a Question Object as parameter
  editQuestion(question:Question)
  {
    let editUrl = `${this.questionUrl}`

    //returns the observable of http put request 
    return this.http.put(editUrl, question);
  }

  deleteQuestion(id:string):any
  {
    //Delete the object by the id
    let deleteUrl = `${this.questionUrl}/${id}`
    
    return this.http.delete(deleteUrl)
    .pipe(map(res  => {
      return res;
    }))
  }

  //Default Error handling method.
  private handleError(error: any): Promise<any> 
  {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
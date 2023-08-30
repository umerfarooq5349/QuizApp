import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class QuestionServiceService {


  constructor(private http: HttpClient) { }

  getquestions(): Observable<any[]> {
    return this.http.get<any>('assets/questions.json');
  }

}

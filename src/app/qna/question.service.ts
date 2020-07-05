import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Post } from '../utilities/constants/app.constants';

// const httpOptions = {
//   headers: new HttpHeaders({
//     'Content-Type':  'application/json',
//     'Authorization': `Bearer ${sessionStorage.getItem('currentUser.jwt')}`
//   })
// };

//JWT INTERCEPTOR HANDLES IT

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  // private handleError: HandleError;
  addQuestionUrl: string = `${environment.apiUrl}/posts/add`;
  searchQuestionUrl: string = `${environment.apiUrl}/search`
  getQuestionUrl: string = `${environment.apiUrl}/posts/questions/`;

  constructor(private http: HttpClient) { }

  addQuestion(questionReq: any): Observable<Post> {
    return this.http.post<Post>(this.addQuestionUrl, questionReq);
  }

  searchQuestion(searchQuery: string) {
    return this.http.get(this.searchQuestionUrl, {
      params: { query: searchQuery },
      observe: 'response'
    })
  }

  getQueWithAns(questionId: string, questionHeader: string) {
    return this.http.get(this.getQuestionUrl + questionId);
  }
}

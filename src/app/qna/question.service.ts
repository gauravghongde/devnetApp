import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

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
  postQuestionUrl: string = `${environment.apiUrl}/questions/post`;
  searchQuestionUrl: string = `${environment.apiUrl}/search`
  getQuestionUrl: string = "";

  constructor(private http: HttpClient) { }

  postQuestion(questionReq: any): Observable<any> {
    return this.http.post<any>(this.postQuestionUrl, questionReq).pipe(map(obj => {
        return obj;
    }));
  }

  searchQuestion(searchQuery: string) {
    return this.http.get(this.searchQuestionUrl, {
      params: {
        query: searchQuery
      },
      observe: 'response'
    })
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || "server error.");
  }

  getQuestion() {
    return this.http.get(this.getQuestionUrl);
  }

  // addHero (hero: Hero): Observable<Hero> {
  //   return this.http.post<Hero>(this.heroesUrl, hero, httpOptions)
  //     .pipe(
  //       catchError(this.handleError('addHero', hero))
  //     );
  // }

  // searchQuestion(questionTitle: string, questionBody: string): Observable<any>{
  //   return this.http.post<any>({this.questionTitle, this.questionBody},)
  // }

}

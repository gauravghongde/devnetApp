import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Post } from '../utilities/constants/app.constants';

// const httpOptions = {
//   headers: new HttpHeaders({
//     'Content-Type':  'application/json',
//     'Authorization': `Bearer ${sessionStorage.getItem('currentUser.jwt')}`
//   })
// };

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  // private handleError: HandleError;
  addQuestionUrl: string = `${environment.apiUrl}/posts/add`;
  searchQuestionUrl: string = `${environment.apiUrl}/search`;
  getQuestionUrl: string = `${environment.apiUrl}/posts/questions`;

  constructor(private http: HttpClient) { }

  addQuestion(questionReq: any): Observable<Post> {
    return this.http.post<Post>(this.addQuestionUrl, questionReq);
  }

  // editQuestion(): Observable<Post> {
  //   return this.http.post<Post>(this.editQuestionUrl, )
  // }

  searchQuestion(searchQuery: string) {
    return this.http.get(this.searchQuestionUrl, {
      params: { query: searchQuery },
      observe: 'response'
    });
  }

  getQueWithAns(questionId: string, questionHeader: string) {
    return this.http.get(this.getQuestionUrl + '/' + questionId);
  }

  getAllQuestions() {
    return this.http.get(this.getQuestionUrl);
  }

  deleteQuestion(questionId: string) {
    const deleteQuestionUrl = `${environment.apiUrl}/posts/${questionId}/delete`;
    return this.http.delete(deleteQuestionUrl);
  }

}

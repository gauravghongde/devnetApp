import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CommonService } from '../services/common.service';
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

  addQuestionUrl: string = `${environment.apiUrl}/posts/add`;
  searchQuestionUrl: string = `${environment.apiUrl}/search`;
  getQuestionUrl: string = `${environment.apiUrl}/posts/questions`;

  constructor(private commonService: CommonService) { }

  addQuestion(questionReq: any): Observable<Post> {
    return this.commonService.postMethod(this.addQuestionUrl, questionReq);
  }

  editQuestion(questionId: string, questionReq: any): Observable<Post> {
    return this.commonService.putMethod(`${environment.apiUrl}/posts/${questionId}/update`, questionReq);
  }

  searchQuestion(searchQuery: string) {
    const queryParam = { query: searchQuery };
    return this.commonService.getMethodWithQueryParam(this.searchQuestionUrl, queryParam);
  }

  getQueWithAns(questionId: string, questionHeader: string) {
    return this.commonService.getMethod(this.getQuestionUrl + '/' + questionId);
  }

  getAllQuestions() {
    return this.commonService.getMethod(this.getQuestionUrl);
  }

  deleteQuestion(questionId: string): Observable<any> {
    return this.commonService.deleteMethod(`${environment.apiUrl}/posts/${questionId}/delete`);
  }

}

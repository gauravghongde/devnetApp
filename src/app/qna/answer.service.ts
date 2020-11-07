import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CommonService } from '../services/common.service';
import { Post } from '../utilities/constants/app.constants';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {

  addAnswerUrl: string;

  constructor(private commonService: CommonService) { }

  addAnswer(answerReq: { answerBody: string }, questionId: string): Observable<Post> {
    //options -> questionId is required for Answer Object to point to a perticular question identified by questionId
    const options = { params: new HttpParams().append("questionId", questionId) };
    return this.commonService.postMethodWithOptions(`${environment.apiUrl}/posts/add`, answerReq, options);
  }

  editAnswer(answerReq: { answerBody: string; }, answerId: any): Observable<Post> {
    return this.commonService.putMethod(`${environment.apiUrl}/posts/${answerId}/update`, answerReq);
  }

  deleteAnswer(answerId: string): Observable<any> {
    return this.commonService.deleteMethod(`${environment.apiUrl}/posts/${answerId}/delete`);
  }

}

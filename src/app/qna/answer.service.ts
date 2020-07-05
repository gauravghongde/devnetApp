import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { isNullOrUndefined } from 'util';
import { Post } from '../utilities/constants/app.constants';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {

  addAnswerUrl: string;

  constructor(private http: HttpClient) { }

  addAnswer(answerReq: { answerBody: string }, questionId: string): Observable<Post> {
    this.addAnswerUrl = `${environment.apiUrl}/posts/add`;
    const options = { params: new HttpParams().append("questionId", questionId) };
    return this.http.post<Post>(this.addAnswerUrl, answerReq, options);
  }
}

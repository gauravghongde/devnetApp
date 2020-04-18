import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {

  postAnswerUrl: string;

  constructor(private http: HttpClient) { }

  postAnswer(answerReq: { contentBody: String; }, questionId: String): Observable<any>{
    this.postAnswerUrl = `${environment.apiUrl}/questions/${questionId}/answers/post`;
    return this.http.post<any>(this.postAnswerUrl, answerReq).pipe(map(obj => {
      return obj;
    }));
  }
}

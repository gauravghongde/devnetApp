import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  addCommentUrl: string;

  constructor(private http: HttpClient) { }

  addComment(commentReq: { commentBody: String; }, postId: String): Observable<any>{
    this.addCommentUrl = `${environment.apiUrl}/posts/${postId}/add`;
    return this.http.post<any>(this.addCommentUrl, commentReq).pipe(map(obj => {
      return obj;
    }));
  }
}

import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  addCommentUrl: string;

  constructor(private http: HttpClient) { }

  addComment(commentReq: { body: string }, postId: string): Observable<Comment> {
    this.addCommentUrl = `${environment.apiUrl}/comments/add`;
    const options = { params: new HttpParams().append("postId", postId) };
    return this.http.post<Comment>(this.addCommentUrl, commentReq, options);
  }
}

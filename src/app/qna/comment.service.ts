import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  // addCommentUrl: string;

  constructor(private http: HttpClient) { }

  addComment(commentReq: { body: string }, postId: string): Observable<Comment> {
    const addCommentUrl = `${environment.apiUrl}/comments/add`;
    const options = { params: new HttpParams().append('postId', postId) };
    return this.http.post<Comment>(addCommentUrl, commentReq, options);
  }

  updateComment(commentReq: { body: string }, postId: string, commentId: string) {
    const updateCommentUrl = `${environment.apiUrl}/comments/${commentId}/update`;
    const options = { params: new HttpParams().append('postId', postId) };
    return this.http.put<Comment>(updateCommentUrl, commentReq, options);
  }

  deleteComment(postId: string, commentId: string) {
    const deleteCommentUrl = `${environment.apiUrl}/comments/${commentId}/delete`;
    const options = { params: new HttpParams().append('postId', postId) };
    return this.http.put<Comment>(deleteCommentUrl, {}, options);
  }

}

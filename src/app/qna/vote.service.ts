import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { isNullOrUndefined } from 'util';

@Injectable({
  providedIn: 'root'
})
export class VoteService {

  getVoteUrl: string;

  constructor(private http: HttpClient) { }

  sendVote(voteCode: string, postId:string, commentId:string) {
    this.getVoteUrl = `${environment.apiUrl}/posts/${postId}/vote`;
    let voteParams;  //Create new HttpParams
    if(!isNullOrUndefined(commentId)) {
      voteParams = new HttpParams().set("voteId", voteCode).set("commentId", commentId);
    } 
    else {
      voteParams = new HttpParams().set("voteId", voteCode);
    }
    return this.http.get(this.getVoteUrl, {
      params: voteParams,
      observe: 'response',
      responseType: 'text'
    })
  }
}

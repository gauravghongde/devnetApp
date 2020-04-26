import { Component, OnInit, Input } from '@angular/core';
import { VoteService } from 'src/app/qna/vote.service';
import { isNullOrUndefined } from 'util';
import { AuthService } from 'src/app/authentication/auth.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from 'src/app/utilities/constants/app.constants';

@Component({
  selector: 'app-vote-badge',
  templateUrl: './vote-badge.component.html',
  styleUrls: ['./vote-badge.component.scss']
})
export class VoteBadgeComponent implements OnInit {

  @Input() currentUpvotes: number;
  @Input() currentDownvotes: number;
  @Input() currentVoteStatus: number;
  @Input() postId: string;
  @Input() commentId: string;
  @Input() usersInteracted: any;
  totalVoteCount: number;
  isComment: boolean = false;
  voteIdToTypeMap: string[] = ["default", "downvote", "upvote"];
  public vote: string = 'default';

  currentUserSubj: BehaviorSubject<User>;
  currentUserObj: User;
  currentUser$: Observable<User>;

  constructor(
    private voteService: VoteService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.totalVoteCount = this.currentUpvotes - this.currentDownvotes;
    if (!isNullOrUndefined(this.commentId)) {
      this.isComment = true;
    }
    this.setInteractedVotes();
  }

  setInteractedVotes() {
    let currentUsername: string = this.getCurrentUser() //take it to common shared component
    let currentVoteId: number = +this.usersInteracted[currentUsername];
    if (!isNaN(currentVoteId)) {
      this.vote = this.voteIdToTypeMap[currentVoteId];
    }
  }

  getCurrentUser() {
    this.currentUserSubj = this.authService.currentUser;
    return this.currentUserSubj.value.username;
  }

  upvoteClicked() {
    if (this.vote == 'upvote') { //Un-Doing Upvote
      this.vote = 'default';
      this.totalVoteCount -= 1;
      this.sendVoteToService("0");
    } else if (this.vote == 'downvote') {
      this.vote = 'upvote';
      this.totalVoteCount += 2;
      //upvote Request
      this.sendVoteToService("2");
    } else {
      this.vote = 'upvote';
      this.totalVoteCount += 1;
      //upvote Request
      this.sendVoteToService("2");
    }
  }

  downvoteClicked() {
    if (this.vote == 'downvote') {
      this.vote = 'default';
      this.totalVoteCount += 1;
      this.sendVoteToService("0");
    } else if (this.vote == 'upvote') {
      this.vote = 'downvote';
      this.totalVoteCount -= 2;
      //downvote Request
      this.sendVoteToService("1");
    } else {
      this.vote = 'downvote';
      this.totalVoteCount -= 1;
      //downvote Request
      this.sendVoteToService("1");
    }
  }

  sendVoteToService(voteId: string) {
    this.voteService.sendVote(voteId, this.postId, this.commentId).subscribe(voteResp => {
      console.log(voteResp);
    });
  }

}

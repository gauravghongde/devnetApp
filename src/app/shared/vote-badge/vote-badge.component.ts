import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-vote-badge',
  templateUrl: './vote-badge.component.html',
  styleUrls: ['./vote-badge.component.scss']
})
export class VoteBadgeComponent implements OnInit {

  @Input() currentUpvotes: number;
  @Input() currentDownvotes: number;
  @Input() currentVoteStatus: number;
  @Input() contentId: string;
  totalVoteCount: number;
  isComment: boolean = false;
  // enum VoteStatus {
  //   default = 0,
  //   upvote = 2,
  //   downvote = 1
  // }
  public vote: string = 'default';

  constructor() { }

  ngOnInit(): void {
    this.totalVoteCount = this.currentUpvotes - this.currentDownvotes;
    if (this.contentId[0] == 'c') {
      this.isComment = true; 
    }
  }

  upvoteClicked() {
    if (this.vote == 'upvote') {
      this.vote = 'default';
      this.totalVoteCount -= 1;
    } else if (this.vote == 'downvote') {
      this.vote = 'upvote';
      this.totalVoteCount += 2;
      //upvote Request
    } else {
      this.vote = 'upvote';
      this.totalVoteCount += 1;
      //upvote Request
    }
  }

  downvoteClicked(){
    if(this.vote == 'downvote') {
      this.vote = 'default';
      this.totalVoteCount += 1;
    } else if(this.vote == 'upvote') {
      this.vote = 'downvote';
      this.totalVoteCount -= 2;
      //downvote Request
    } else {
      this.vote = 'downvote';
      this.totalVoteCount -= 1;
      //downvote Request
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { QuestionService } from '../question.service';
import { AnswerService } from '../answer.service';
import { CommentService } from '../comment.service';
import { CharLimits, Post, Comment } from 'src/app/utilities/constants/app.constants';

@Component({
  selector: 'app-view-question',
  templateUrl: './view-question.component.html',
  styleUrls: ['./view-question.component.scss']
})
export class ViewQuestionComponent implements OnInit {

  // public queAndAnsObj: QuestionWithAnswers;
  public questionObj: Post = new Post();
  public answerObjList: Post[] = new Array<Post>();
  
  public currentVoteCount: number = 0;
  public currentUpvotes: number = 0;
  public currentDownvotes: number = 0;

  public isAnswerWindowOpen:boolean = true;
  public isCommentSubmitted: boolean = false;

  newComment: Comment = new Comment();

  questionTitle: string = "";
  questionBody: string = "";
  answerData: string = "";
  commentData: string = "";

  isAnsError:boolean = false;
  isCmtError:boolean = false;
  errMsg:string;
  
  charLimits:CharLimits;

  constructor(
    private route: ActivatedRoute,
    private questionService: QuestionService,
    private answerService: AnswerService,
    private commentService: CommentService
  ) { }

  // To call router:
  // this.router.navigate(['/myUrlPath', "someId", "another ID"]);
  // In routes.ts:
  // { path: 'myUrlpath/:id1/:id2', component: componentToGoTo},

  ngOnInit(): void {
    this.charLimits = new CharLimits();
    this.route.params.subscribe(
      (params: Params) => {
        console.log(params);
        this.showQuestion(params.qId, params.qHeader);
      });
  }

  showQuestion(questionId: string, questionHeader: string) {
    this.questionService.getQueWithAns(questionId, questionHeader).subscribe((getQueWithAnsResp: any) => {
      console.log(getQueWithAnsResp);
      getQueWithAnsResp.forEach((postObj: any) => {
        (postObj.id == postObj.questionId) ? this.questionObj = postObj : this.answerObjList.push(postObj);
      });
      // this.currentUpvotes = +this.questionObj.upVotes; //parseInt(this.questionObj.upVotes)
      // this.currentDownvotes = +this.questionObj
      if(this.answerObjList.length == 0) {
        this.isAnswerWindowOpen = false;
      }
    });
  }

  submitAnswerClicked(questionId: string) {
    if (this.answerData.length >= this.charLimits.MIN_CHAR_LIMIT_ANSWER 
      && this.answerData.length <= this.charLimits.MAX_CHAR_LIMIT_ANSWER ) {
      this.isAnsError = false;
      let answerBody: string = this.answerData;
      this.answerService.addAnswer({answerBody}, questionId).subscribe((answerRes:Post) => {
        console.log("added ans response -> ", answerRes);
        if (answerRes) {
          window.location.reload();
        }
      });
    }
    else if (this.answerData.length > this.charLimits.MAX_CHAR_LIMIT_ANSWER) {
      this.isAnsError = true;
      this.errMsg = "Answer is too big !!!"
    }
    else if (this.answerData.length < this.charLimits.MIN_CHAR_LIMIT_ANSWER) {
      this.isAnsError = true;
      this.errMsg = "Answer is too short !!!"
    }
  }

  submitCommentClicked(postId: string) {
    if (this.commentData.length >= this.charLimits.MIN_CHAR_LIMIT_COMMENT 
      && this.commentData.length <= this.charLimits.MAX_CHAR_LIMIT_COMMENT) {
      this.isCmtError = false;
      let body: string = this.commentData;
      this.commentService.addComment({body}, postId).subscribe((commentRes: any) => {
        console.log("posted comment response -> ", commentRes);
        if(commentRes) {
          this.isCommentSubmitted = true;
          this.newComment = commentRes;
          this.commentData = "";
        }
      });
    }
    else if (this.commentData.length > this.charLimits.MAX_CHAR_LIMIT_COMMENT) {
      this.isCmtError = true;
      this.errMsg = "Comment is too big!!!"
    }
    else if (this.commentData.length < this.charLimits.MIN_CHAR_LIMIT_COMMENT) {
      this.isCmtError = true;
      this.errMsg = "Comment is too short!!!"
    }
    this.isCommentSubmitted = false;
  }
}

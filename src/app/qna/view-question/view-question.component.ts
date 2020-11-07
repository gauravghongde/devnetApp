import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AuthService } from 'src/app/authentication/auth.service';
import { SharedService } from 'src/app/services/shared.service';
import { CharLimits, Comment, EditorMode, EditorType, Post, QnaRequest } from 'src/app/utilities/constants/app.constants';
import { AnswerService } from '../answer.service';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-view-question',
  templateUrl: './view-question.component.html',
  styleUrls: ['./view-question.component.scss']
})
export class ViewQuestionComponent implements OnInit {

  public questionObj: Post = new Post();
  public answerObjList: Post[] = new Array<Post>();
  public currentVoteCount = 0;
  public currentUpvotes = 0;
  public currentDownvotes = 0;
  public isAnswerWindowOpen = true;
  public newComment: Comment = new Comment();
  public questionTitle = '';
  public questionBody = '';
  public answerData = '';
  public indexOfAnsInEditMode: number = -1;
  public editorMode: EditorMode = EditorMode.ADD;
  public editorType: EditorType = EditorType.ANSWER;
  public qnaRequest: QnaRequest = new QnaRequest();
  public isAnsError = false;
  public errMsg: string;
  public charLimits: CharLimits;
  public isLoading: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private questionService: QuestionService,
    private answerService: AnswerService,
    private router: Router,
    private sharedService: SharedService,
    private authService: AuthService
  ) { }

  // To call router:
  // this.router.navigate(['/myUrlPath', "someId", "another ID"]);
  // In routes.ts:
  // { path: 'myUrlpath/:id1/:id2', component: componentToGoTo},

  ngOnInit(): void {
    this.isLoading = true;
    this.route.params.subscribe(
      (params: Params) => {
        console.log(params);
        this.showQuestion(params.qId, params.qHeader);
      },
      (err) => {
        console.log(err);
        this.isLoading = false;
      });
  }

  showQuestion(questionId: string, questionHeader: string) {
    this.qnaRequest = new QnaRequest();
    this.qnaRequest.questionId = questionId;
    this.sharedService.setQnaRequest(this.qnaRequest);
    this.questionService.getQueWithAns(questionId, questionHeader).subscribe(
      (getQueWithAnsResp: any) => {
        console.log("Question + Array of Answers:: ", getQueWithAnsResp);
        getQueWithAnsResp.forEach((postObj: any) => {
          (postObj.id === postObj.questionId) ? this.questionObj = postObj : this.answerObjList.push(postObj);
        });
        // this.currentUpvotes = +this.questionObj.upVotes; //parseInt(this.questionObj.upVotes)
        // this.currentDownvotes = +this.questionObj
        if (this.answerObjList.length === 0) {
          this.isAnswerWindowOpen = false;
        }
        this.isLoading = false;
      },
      (err) => {
        console.log(err);
        this.isLoading = false;
      });
  }

  deleteQuestionClicked(questionId: string) {
    if (confirm('Are you sure you want to delete this question?')) {
      this.questionService.deleteQuestion(questionId).subscribe(res => console.log(res));
      alert('Question was deleted');
      window.location.href = '/home';
    } else {
      console.log('Question was not deleted.');
    }
  }

  editQuestionClicked(qnaObj: Post) {
    this.editorType = EditorType.QUESTION;
    this.editorMode = EditorMode.UPDATE;
    this.qnaRequest = new QnaRequest();
    this.qnaRequest.id = qnaObj.id;
    this.qnaRequest.questionBody = qnaObj.questionBody;
    this.qnaRequest.questionHeader = qnaObj.questionHeader;
    this.sharedService.setQnaRequest(this.qnaRequest);
    this.router.navigateByUrl('/questions/edit/' + qnaObj.id);
  }

  editAnswerClicked(answerObj: Post, currentIndex: number) {
    this.indexOfAnsInEditMode = currentIndex;
    this.editorType = EditorType.ANSWER;
    this.editorMode = EditorMode.UPDATE;
    this.qnaRequest.id = answerObj.id;
    this.qnaRequest.answerBody = answerObj.answerBody;
    this.sharedService.setQnaRequest(this.qnaRequest);
  }

  deleteAnswerClicked(answerId: string) {
    if (confirm('Are you sure you want to delete this answer?')) {
      this.answerService.deleteAnswer(answerId).subscribe(res => console.log(res));
      alert('Answer was deleted');
      window.location.reload();
    } else {
      console.log('Answer was not deleted.');
    }
  }

  hasEditAccess(owner: string) {
    const loggedInUser: string = this.authService.currentUser.value.username;
    return (owner === loggedInUser) ? true : false;
  }

  // submitAnswerClicked(questionId: string) {
  //   if (this.answerData.length >= this.charLimits.MIN_CHAR_LIMIT_ANSWER
  //     && this.answerData.length <= this.charLimits.MAX_CHAR_LIMIT_ANSWER) {
  //     this.isAnsError = false;
  //     const answerBody: string = this.answerData;
  //     this.answerService.addAnswer({ answerBody }, questionId).subscribe((answerRes: Post) => {
  //       console.log('added ans response -> ', answerRes);
  //       if (answerRes) {
  //         window.location.reload();
  //       }
  //     });
  //   } else if (this.answerData.length > this.charLimits.MAX_CHAR_LIMIT_ANSWER) {
  //     this.isAnsError = true;
  //     this.errMsg = 'Answer is too big !!!';
  //   } else if (this.answerData.length < this.charLimits.MIN_CHAR_LIMIT_ANSWER) {
  //     this.isAnsError = true;
  //     this.errMsg = 'Answer is too short !!!';
  //   }
  // }
}

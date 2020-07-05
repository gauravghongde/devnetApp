import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Routes, Router } from '@angular/router';
import { CharLimits, Comment, Post } from 'src/app/utilities/constants/app.constants';
import { AnswerService } from '../answer.service';
import { QuestionService } from '../question.service';
import { AskQuestionComponent } from '../ask-question/ask-question.component';

@Component({
  selector: 'app-view-question',
  templateUrl: './view-question.component.html',
  styleUrls: ['./view-question.component.scss']
})
export class ViewQuestionComponent implements OnInit {

  // public queAndAnsObj: QuestionWithAnswers;
  public questionObj: Post = new Post();
  public answerObjList: Post[] = new Array<Post>();

  public currentVoteCount = 0;
  public currentUpvotes = 0;
  public currentDownvotes = 0;

  public isAnswerWindowOpen = true;

  newComment: Comment = new Comment();

  questionTitle = '';
  questionBody = '';
  answerData = '';

  isAnsError = false;
  errMsg: string;

  charLimits: CharLimits;

  constructor(
    private route: ActivatedRoute,
    private questionService: QuestionService,
    private answerService: AnswerService,
    private router: Router
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
        (postObj.id === postObj.questionId) ? this.questionObj = postObj : this.answerObjList.push(postObj);
      });
      // this.currentUpvotes = +this.questionObj.upVotes; //parseInt(this.questionObj.upVotes)
      // this.currentDownvotes = +this.questionObj
      if (this.answerObjList.length === 0) {
        this.isAnswerWindowOpen = false;
      }
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

  editQuestionClicked() {
    this.router.navigateByUrl('/questions/ask', { queryParams: {
      questionId: this.questionObj.id,
      questionTitle: this.questionTitle,
      questionBody: this.questionBody
    }});
  }

  submitAnswerClicked(questionId: string) {
    if (this.answerData.length >= this.charLimits.MIN_CHAR_LIMIT_ANSWER
      && this.answerData.length <= this.charLimits.MAX_CHAR_LIMIT_ANSWER) {
      this.isAnsError = false;
      const answerBody: string = this.answerData;
      this.answerService.addAnswer({ answerBody }, questionId).subscribe((answerRes: Post) => {
        console.log('added ans response -> ', answerRes);
        if (answerRes) {
          window.location.reload();
        }
      });
    } else if (this.answerData.length > this.charLimits.MAX_CHAR_LIMIT_ANSWER) {
      this.isAnsError = true;
      this.errMsg = 'Answer is too big !!!';
    } else if (this.answerData.length < this.charLimits.MIN_CHAR_LIMIT_ANSWER) {
      this.isAnsError = true;
      this.errMsg = 'Answer is too short !!!';
    }
  }
}

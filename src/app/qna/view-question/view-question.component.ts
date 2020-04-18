import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { QNA_MOCK } from '../qna-mock';
import { QuestionService } from '../question.service';
import { AnswerService } from '../answer.service';

@Component({
  selector: 'app-view-question',
  templateUrl: './view-question.component.html',
  styleUrls: ['./view-question.component.scss']
})
export class ViewQuestionComponent implements OnInit {

  // public queAndAnsObj: QuestionWithAnswers;
  public questionObj: any;
  public answerObjList: any[];
  
  public currentVoteCount: number = 0;
  public currentUpvotes: number = 0;
  public currentDownvotes: number = 0;

  public isAnswerWindowOpen:boolean = true;

  questionTitle: string = "";
  questionBody: string = "";
  markdown: string;

  constructor(
    private route: ActivatedRoute,
    private questionService: QuestionService,
    private answerService: AnswerService
  ) { }

  // To call router:
  // this.router.navigate(['/myUrlPath', "someId", "another ID"]);
  // In routes.ts:
  // { path: 'myUrlpath/:id1/:id2', component: componentToGoTo},

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        console.log(params);
        this.showQuestion(params.qId, params.qHeader);
      });
  }

  showQuestion(questionId: string, questionHeader: string) {
    this.questionService.getQueWithAns(questionId, questionHeader).subscribe((queWithAnsRes: any) => {
      // queWithAnsRes = QNA_MOCK;
      console.log(queWithAnsRes);
      this.questionObj = queWithAnsRes.question;
      this.answerObjList = queWithAnsRes.listOfAnswers;
      // this.currentUpvotes = +this.questionObj.upVotes; //parseInt(this.questionObj.upVotes)
      // this.currentDownvotes = +this.questionObj
      if(this.answerObjList.length == 0) {
        this.isAnswerWindowOpen = false;
      }
    });

    
    // let queWithAnsRes = QNA_MOCK;
    // console.log(queWithAnsRes);
    // this.questionObj = queWithAnsRes.question;
    // this.answerObjList = queWithAnsRes.listOfAnswers;
  }

  submitAnswerClicked(contentBody: String, questionId: String) {
    if (contentBody.length >= 50) {
        this.answerService.postAnswer({contentBody},questionId).subscribe(answerObj => console.log("posted ans request -> ", answerObj));
        window.location.reload();
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../question.service';
import { Post } from 'src/app/utilities/constants/app.constants';
import { ActivatedRoute } from '@angular/router';
import { Router, Params, RoutesRecognized } from '@angular/router';

@Component({
  selector: 'app-ask-question',
  templateUrl: './ask-question.component.html',
  styleUrls: ['./ask-question.component.scss']
})
export class AskQuestionComponent implements OnInit {

  questionTitle = '';
  questionBody: string;
  markdown: string;
  isQueError: boolean;
  errMsg: string;
  loader = false;
  state$: any;

  constructor(
    private questionService: QuestionService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.router.events.subscribe(val => {
      if (val instanceof RoutesRecognized) {
          console.log(val.state.root.firstChild.params);
      }
  });
  }

  submitQuestion(questionHeader: string, questionBody: string) {
    if (questionBody.length >= 100
      && questionBody.length <= 5000
      && questionHeader.length <= 130
      // && !questionBody.trim()
      // && !questionTitle.trim()
      ) {
        this.loader = true;
        this.isQueError = false;
        this.errMsg = 'Submitting..';
        this.questionService.addQuestion({questionHeader, questionBody}).subscribe((questionRes: Post) => {
          console.log(questionRes);
          alert('submitted!!');
          this.loader = false;
          window.location.href = '/questions/' + questionRes.id + '/submitted';
        });
    } else {
      this.loader = false;
      this.isQueError = true;
      this.errMsg = 'Content not enough, please add more.';
    }
  }

}

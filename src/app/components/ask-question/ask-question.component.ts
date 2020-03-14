import { Component, OnInit } from '@angular/core';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-ask-question',
  templateUrl: './ask-question.component.html',
  styleUrls: ['./ask-question.component.scss']
})
export class AskQuestionComponent implements OnInit {

  questionTitle: string = "";
  questionBody: string = "";
  markdown: string;

  constructor(private questionService: QuestionService) { }

  ngOnInit(): void {
  }

  submitQuestion(contentHeader: string, contentBody: string) {
    if (contentBody.length >= 100 
      && contentBody.length <= 5000 
      && contentHeader.length <= 130 
      //&& !questionBody.trim() 
      //&& !questionTitle.trim()
      ) {
        this.questionService.postQuestion({contentHeader, contentBody}).subscribe(questionObj => console.log(questionObj));
    }
  }

}

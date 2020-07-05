import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../question.service';
import { Post } from 'src/app/utilities/constants/app.constants';

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

  submitQuestion(questionHeader: string, questionBody: string) {
    if (questionBody.length >= 100 
      && questionBody.length <= 5000 
      && questionHeader.length <= 130 
      //&& !questionBody.trim() 
      //&& !questionTitle.trim()
      ) {
        this.questionService.addQuestion({questionHeader, questionBody}).subscribe((questionRes: Post) => console.log(questionRes));
    }
  }

}

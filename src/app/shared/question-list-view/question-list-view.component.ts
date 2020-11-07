import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/utilities/constants/app.constants';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-question-list-view',
  templateUrl: './question-list-view.component.html',
  styleUrls: ['./question-list-view.component.scss']
})
export class QuestionListViewComponent implements OnInit {
  @Input() questionList: Post[];

  constructor() { }

  ngOnInit(): void {
    console.log('questionList: ', this.questionList);
    this.questionList.forEach(questionObj => {
      questionObj.questionBody = questionObj.questionBody.replace(/[^a-zA-Z ?.:,]/g, '');
    });
  }

}

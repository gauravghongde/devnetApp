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
  questionToNoOfAnswersMap = new Map<string, string>();
  questionToUpVotesMap = new Map<string, string>();

  constructor() { }

  ngOnInit(): void {
    console.log('questionList: ', this.questionList);
    this.questionList.forEach(questionObj => {
      questionObj.questionBody = questionObj.questionBody.replace(/[^a-zA-Z ?.:,]/g, '');
      this.questionToNoOfAnswersMap.set(questionObj.id,
        !isNullOrUndefined(questionObj.noOfAnswers) ? (questionObj.noOfAnswers).toString() : '0');
      this.questionToUpVotesMap.set(questionObj.id,
        (questionObj.vote.upVotes - questionObj.vote.downVotes).toString());
    });
  }

}

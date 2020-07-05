import { Component, OnInit } from '@angular/core';
import { QuestionService } from 'src/app/qna/question.service';
import { ActivatedRoute, Params } from '@angular/router';
import { isNullOrUndefined } from 'util';


@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  searchResultObj: any;
  questionToNoOfAnswersMap = new Map<string, string>();
  questionToUpVotesMap = new Map<string, string>();

  constructor(
    private questionService: QuestionService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      (params: Params) => {
        if (params.hasOwnProperty('query')) {
          this.doSearch(params['query']);
        }
      }
    );
  }

  doSearch(searchQuery: string) {
    if (searchQuery) {
      // encodeURIComponent(this.searchQuery.trim())
      this.questionService.searchQuestion(searchQuery).subscribe(questionObjArr => {
        console.log(questionObjArr.body);
        this.searchResultObj = questionObjArr.body;
        this.searchResultObj.forEach(questionObj => {
          questionObj.questionBody = questionObj.questionBody.replace(/[^a-zA-Z ?.:,]/g, "");
          this.questionToNoOfAnswersMap.set(questionObj.id, !isNullOrUndefined(questionObj.noOfAnswers) ? (questionObj.noOfAnswers).toString() : "0");          
          this.questionToUpVotesMap.set(questionObj.id, (parseInt(questionObj.vote.upVotes) - parseInt(questionObj.vote.downVotes)).toString());
        });
      });
    }
  }

  // TODO: onclick question, router.navigate /qId 
}

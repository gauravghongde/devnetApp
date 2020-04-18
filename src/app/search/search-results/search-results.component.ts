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
  questionToNoOfAnswersMap = new Map<String, String>();
  questionToUpVotesMap = new Map<String, String>();

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
          this.questionToNoOfAnswersMap.set(questionObj.postId, !isNullOrUndefined(questionObj.listOfAnswers) ? (questionObj.listOfAnswers.length()).toString() : "0");          
          this.questionToUpVotesMap.set(questionObj.postId, (parseInt(questionObj.upVotes) - parseInt(questionObj.downVotes)).toString());
        });
      });
    }
  }

  // TODO: onclick question, router.navigate /qId 
}

import { Component, OnInit } from '@angular/core';
import { QuestionService } from 'src/app/qna/question.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

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
        console.log(questionObjArr);
        return questionObjArr;
      });
    }
  }

  // TODO: onclick question, router.navigate /qId 
}

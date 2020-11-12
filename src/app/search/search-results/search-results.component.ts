import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { QuestionService } from 'src/app/qna/question.service';
import { Post } from 'src/app/utilities/constants/app.constants';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  searchResultObj: Post[];
  searchLoader: boolean;
  isError: boolean;
  errorCode: number;
  errorMsg: string;

  constructor(
    private questionService: QuestionService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.searchLoader = false;
    this.isError = false;
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
      this.searchLoader = true;
      this.questionService.searchQuestion(searchQuery).subscribe((questionObjArr: any) => {
        this.isError = false;
        this.searchResultObj = questionObjArr.body;
        console.log('this.searchResultObj: ', this.searchResultObj);
      },
        (err) => {
          this.isError = true;
          this.errorMsg = err;
        });
      this.searchLoader = false;
    }
  }

  // TODO: onclick question, router.navigate /qId
}

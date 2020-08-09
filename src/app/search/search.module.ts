import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchResultsComponent } from './search-results/search-results.component';
import { RouterModule } from '@angular/router';
import { QuestionListViewComponent } from '../shared/question-list-view/question-list-view.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [SearchResultsComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ]
})
export class SearchModule { }

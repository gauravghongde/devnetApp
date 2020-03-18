import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewQuestionComponent } from './view-question/view-question.component';
import { AskQuestionComponent } from './ask-question/ask-question.component';
import { FormsModule } from '@angular/forms';
import { MarkdownModule } from 'ngx-markdown';

@NgModule({
  declarations: [ViewQuestionComponent, AskQuestionComponent],
  imports: [
    CommonModule,
    FormsModule,
    MarkdownModule.forRoot(),
  ],
  providers: [

  ]
})
export class QnaModule { }

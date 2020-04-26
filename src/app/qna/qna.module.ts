import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewQuestionComponent } from './view-question/view-question.component';
import { AskQuestionComponent } from './ask-question/ask-question.component';
import { FormsModule } from '@angular/forms';
import { MarkdownModule } from 'ngx-markdown';
import { SharedModule } from '../shared/shared.module';
import { AnswerPostComponent } from './answer-post/answer-post.component';

@NgModule({
  declarations: [ViewQuestionComponent, AskQuestionComponent, AnswerPostComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    MarkdownModule.forRoot(),
  ],
  providers: [

  ]
})
export class QnaModule { }

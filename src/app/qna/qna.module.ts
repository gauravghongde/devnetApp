import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MarkdownModule } from 'ngx-markdown';
import { SharedModule } from '../shared/shared.module';
import { AnswerPostComponent } from './answer-post/answer-post.component';
import { AskQuestionComponent } from './ask-question/ask-question.component';
import { CommentsComponent } from './view-question/comments/comments.component';
import { ViewQuestionComponent } from './view-question/view-question.component';

@NgModule({
  declarations: [ViewQuestionComponent, AskQuestionComponent, AnswerPostComponent, CommentsComponent],
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

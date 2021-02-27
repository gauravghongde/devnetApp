import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { GravatarDirective } from './avatar/gravatar.directive';
import { InputStarsComponent } from './input-stars/input-stars.component';
import { LoaderComponent } from './loader/loader.component';
import { NavbarComponent } from './navbar/navbar.component';
import { QnaEditorComponent } from './qna-editor/qna-editor.component';
import { QuestionListViewComponent } from './question-list-view/question-list-view.component';
import { VoteBadgeComponent } from './vote-badge/vote-badge.component';

@NgModule({
  declarations: [
    LoaderComponent,
    NavbarComponent,
    VoteBadgeComponent,
    GravatarDirective,
    QuestionListViewComponent,
    QnaEditorComponent,
    InputStarsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MarkdownModule.forRoot(),
  ],
  exports: [
    LoaderComponent,
    NavbarComponent,
    VoteBadgeComponent,
    QuestionListViewComponent,
    QnaEditorComponent,
    GravatarDirective,
    InputStarsComponent
  ]
})
export class SharedModule { }

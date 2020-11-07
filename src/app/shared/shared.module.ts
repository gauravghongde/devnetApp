import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { VoteBadgeComponent } from './vote-badge/vote-badge.component';
import { GravatarDirective } from './avatar/gravatar.directive';
import { QuestionListViewComponent } from './question-list-view/question-list-view.component';
import { RouterModule } from '@angular/router';
import { QnaEditorComponent } from './qna-editor/qna-editor.component';
import { MarkdownModule } from 'ngx-markdown';

@NgModule({
  declarations: [
    LoaderComponent,
    NavbarComponent,
    VoteBadgeComponent,
    GravatarDirective,
    QuestionListViewComponent,
    QnaEditorComponent,
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
    QnaEditorComponent
  ]
})
export class SharedModule { }

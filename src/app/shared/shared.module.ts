import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { VoteBadgeComponent } from './vote-badge/vote-badge.component';
import { GravatarDirective } from './avatar/gravatar.directive';
import { QuestionListViewComponent } from './question-list-view/question-list-view.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    LoaderComponent,
    NavbarComponent,
    VoteBadgeComponent,
    GravatarDirective,
    QuestionListViewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    LoaderComponent,
    NavbarComponent,
    VoteBadgeComponent,
    QuestionListViewComponent
  ]
})
export class SharedModule { }

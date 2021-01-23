import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { ContributeComponent } from './contribute/contribute.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { HomepageComponent } from './home/homepage/homepage.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AskQuestionComponent } from './qna/ask-question/ask-question.component';
import { ViewQuestionComponent } from './qna/view-question/view-question.component';
import { SearchResultsComponent } from './search/search-results/search-results.component';
import { EditorMode } from './utilities/constants/app.constants';
import { AuthGuard } from './_guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'contribute',
    component: ContributeComponent
  },
  {
    path: 'feedback',
    component: FeedbackComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'home',
    redirectTo: '',
    canActivate: [AuthGuard]
  },
  {
    path: 'questions',
    children: [
      {
        path: 'ask',
        component: AskQuestionComponent,
        data: { editorMode: EditorMode.ADD }
      },
      {
        path: 'edit/:questionId',
        component: AskQuestionComponent,
        data: { editorMode: EditorMode.UPDATE }
      },
      {
        path: ':qId/:qHeader',
        component: ViewQuestionComponent
      },
      {
        path: '',
        component: PageNotFoundComponent
      }
    ],
    canActivate: [AuthGuard]
  },
  {
    path: 'search',
    component: SearchResultsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    component: PageNotFoundComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

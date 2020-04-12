import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { AuthGuard } from './_guards/auth.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomepageComponent } from './home/homepage/homepage.component';
import { AskQuestionComponent } from './qna/ask-question/ask-question.component';
import { SearchResultsComponent } from './search/search-results/search-results.component';
import { ViewQuestionComponent } from './qna/view-question/view-question.component';

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
    path: 'home',
    redirectTo: ''
  },
  {
    path: 'questions',
    children: [
      {
        path: 'ask',
        component: AskQuestionComponent
      },
      {
        path: ":qId/:qHeader",
        component: ViewQuestionComponent 
      },
      {
        path: '',
        component: PageNotFoundComponent
      }
    ]
  },
  {
    path: 'search',
    component: SearchResultsComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

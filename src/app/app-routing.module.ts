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
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ContributeComponent } from './contribute/contribute.component';
import { EditorMode } from './utilities/constants/app.constants';

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
    path: 'contact',
    component: ContactComponent
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

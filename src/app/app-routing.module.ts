import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { AskQuestionComponent } from './components/ask-question/ask-question.component';


const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent,
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
    path: 'questions/ask',
    component: AskQuestionComponent,
    canActivate: [AuthGuard] 
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
